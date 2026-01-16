// this is a bit scuffed, but these are cf pages redirect functions

export async function onRequest ({ params }) {
  try {
    const id = Number(params.id)
    if (Number.isSafeInteger(id)) {
      const ua = navigator.userAgent || ''
      if (!ua.includes('Discordbot')) {
        return Response.redirect('hayase://anime/' + id)
      }

      const res = await fetch('https://graphql.anilist.co', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          query: /* js */`
            query($id: Int) {
              Media(id: $id) {
                title {
                  english,
                  userPreferred
                }
                coverImage {
                  large
                  color
                },
                description,
                seasonYear
              }
            }
          `,
          variables: {
            id
          }
        })
      })
      if (!res.ok) throw res

      const { data } = await res.json()

      const title = data.Media.title.english ?? data.Media.title.userPreferred ?? 'Anime'

      const html = /* html */`
<!DOCTYPE html>
<html style=background:#000>
  <head>
    <meta http-equiv=refresh content="5; url=https://hayase.watch">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${data.Media.description ?? 'Stream anime torrents, real-time with no waiting for downloads.'}">
    <meta property="og:site_name" content="Hayase">
    <meta property="og:image" content=https://https://img.anili.st/media/${id}.png>
    <meta property="og:url" content=hayase://anime/${id}>
    <meta data-vmid="twitter:card" name="twitter:card" content="summary_large_image">
    <meta name="theme-color" content="${data.Media.coverImage.color ?? '#17191C'}">
  </head>
  <body>
  </body>
</html>`

      return new Response(html, {
        headers: {
          'content-type': 'text/html;charset=UTF-8'
        }
      })
    }
  } catch (e) {}
  return Response.redirect('https://hayase.watch/')
}
