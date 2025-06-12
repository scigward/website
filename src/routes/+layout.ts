import '$lib'
import type { LayoutLoad } from './$types'

export const ssr = false
export const prerender = false
export const trailingSlash = 'always'

export const load: LayoutLoad = ({ fetch }) => {
  return {
    changelog: (async () => {
      try {
        const res = await fetch('https://api.github.com/repos/ThaUnknown/miru/commits')
        const json = await res.json() as Array<{ sha: string, commit: { message: string, author: { date: string } } }>
        return json.map(({ sha, commit }) => ({ sha, date: commit.author.date, body: commit.message }))
      } catch (e) {
        return []
      }
    })(),
    releases: (async () => {
      try {
        const res = await fetch('https://api.github.com/repos/hayase-app/electron/releases')
        const json: Array<{ body: string, tag_name: string, published_at: string, assets: Array<{name: string, browser_download_url: string}> }> = await res.json()
        return json.map(({ body, tag_name: version, published_at: date, assets }) => ({ body, version, date, assets }))
      } catch (e) {
        return []
      }
    })(),
    stargazers: (async () => {
      try {
        const res = await fetch('https://api.github.com/repos/ThaUnknown/miru/stargazers?per_page=100&page=' + (Math.round(Math.random() * 10) + 1))
        const json: Array<{ html_url: string, avatar_url: string, login: string }> = await res.json()
        return json.map(({ html_url: htmlUrl, avatar_url: avatarUrl, login }) => ({ htmlUrl, avatarUrl, login }))
      } catch (e) {
        return []
      }
    })()
  }
}
