export function onRequest () {
  const html = /* html */`
<!DOCTYPE html>
<html style=background:#000>
  <head>
    <meta http-equiv=refresh content="5; url=https://hayase.watch">
    <meta property="og:title" content="Debug Page">
    <meta property="og:description" content="Debug page for helping users with issues. Made for user support.">
    <meta property="og:site_name" content="Hayase">
    <meta property="og:url" content=hayase://debug>
    <meta name="theme-color" content="#17191C">
  </head>
  <body>
    <iframe src=hayase://debug style=border:none></iframe>Redirecting...
  </body>
</html>`

  return new Response(html, {
    headers: {
      'content-type': 'text/html;charset=UTF-8'
    }
  })
}
