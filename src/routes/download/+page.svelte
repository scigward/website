<script lang='ts'>
  import { onMount } from 'svelte'

  import AndroidSVG from '$lib/components/ui/icons/AndroidSVG.svelte'
  import AndroidTVSVG from '$lib/components/ui/icons/AndroidTVSVG.svelte'
  import LinuxSVG from '$lib/components/ui/icons/LinuxSVG.svelte'
  import MacOSSVG from '$lib/components/ui/icons/MacOSSVG.svelte'
  import SteamOSSVG from '$lib/components/ui/icons/SteamOSSVG.svelte'
  import WindowsSVG from '$lib/components/ui/icons/WindowsSVG.svelte'

  const data = {
    releases: new Promise(() => {})
  }

  onMount(() => {
    data.releases = (async () => {
      try {
        const res = await fetch('https://api.github.com/repos/hayase-app/ui/releases')
        const json: Array<{ body: string, tag_name: string, published_at: string, assets: Array<{name: string, browser_download_url: string}> }> = await res.json()
        return json.map(({ body, tag_name: version, published_at: date, assets }) => ({ body, version, date, assets }))
      } catch (e) {
        return []
      }
    })()
  })

  function getOS () {
    // @ts-expect-error bad typedef
    const platform = navigator.userAgentData?.platform ?? navigator.platform
    const macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE']
    const iosPlatforms = ['iPhone', 'iPad', 'iPod']

    if (macosPlatforms.includes(platform)) return 'Mac OS'
    if (iosPlatforms.includes(platform)) return 'iOS'
    if (windowsPlatforms.includes(platform)) return 'Windows'
    if (navigator.userAgent.includes('Android')) return 'Android'
    if (/Linux/.test(platform)) return 'Linux'
    return 'Windows'
  }

  let downloads = {
    iOS: '',
    Android: '',
    Windows: '',
    'Mac OS': '',
    Linux: '',
    Debian: ''
  }

  const releases = 'https://github.com/hayase-app/ui/releases'

  async function downloadForOS () {
    const releases = await data.releases

    const { assets } = releases.find(({ prerelease }) => !prerelease) ?? releases[0]

    const url = (ext: string) => assets.find(({ name }) => name.endsWith(ext))?.browser_download_url ?? ''

    downloads = {
      iOS: 'https://www.android.com',
      Android: 'https://play.google.com/store/apps/details?id=watch.miru',
      Windows: url('installer.exe'),
      'Mac OS': url('.dmg'),
      Linux: url('.AppImage'),
      Debian: url('.deb')
    }
    return downloads
  }

  const userOS = getOS()

  downloadForOS()

  setTimeout(async () => {
    const downloads = await downloadForOS()
    if (!downloads?.[userOS]) return
    location.href = downloads[userOS]
  }, 2000)
</script>

<div class='w-full max-w-screen-xl mx-auto pb-12 px-12'>
  <div>
    {#key downloads}
      <div class='min-h-[50vh] flex flex-col items-center justify-center pt-5'>
        <h1 class='font-bold text-white text-5xl mt-5 pt-5 text-center'>Almost there!</h1>
        <div class='text-lg text-gray-400 text-center mt-4'>
          Now run the installer that just downloaded.<br /><br />
          Your download should begin automatically. Didn’t work?
        </div>
        <a class='text-blue-500 hover:text-blue-400 text-lg underline mt-5 mb-5' href={downloads[userOS] || releases}>
          Try downloading again.
        </a>
      </div>
      <div class='grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-gradient'>
        <div class='flex flex-col items-center lg:items-start pr-0 lg:pr-5 pt-5'>
          <h3 class='font-bold text-white text-3xl text-center lg:text-left py-8'>Get Hayase for other devices</h3>
          <a class='text-inherit bg-neutral-950 hover:bg-neutral-900 transition rounded-lg flex flex-col px-8 w-full max-w-md mb-5 p-5' href={downloads.Windows || releases}>
            <WindowsSVG />
            <div class='text-lg font-semibold mt-2'>Windows</div>
            <div class='text-gray-400'>exe</div>
          </a>
          <a class='text-inherit bg-neutral-950 hover:bg-neutral-900 transition rounded-lg flex flex-col px-8 w-full max-w-md mb-5 p-5' href={downloads['Mac OS'] || releases}>
            <MacOSSVG />
            <div class='text-lg font-semibold mt-2'>Mac OS</div>
            <div class='text-gray-400'>Universal dmg</div>
          </a>
          <div class='flex w-full max-w-md gap-4'>
            <a class='text-inherit bg-neutral-950 hover:bg-neutral-900 transition rounded-lg flex flex-col px-8 flex-1 mb-5 p-5' href={downloads.Linux || releases}>
              <LinuxSVG />
              <div class='text-lg font-semibold mt-2'>Linux</div>
              <div class='text-gray-400'>AppImage</div>
            </a>
            <a class='text-inherit bg-neutral-950 hover:bg-neutral-900 transition rounded-lg flex flex-col px-8 flex-1 mb-5 p-5' href={downloads.Debian || releases}>
              <LinuxSVG />
              <div class='text-lg font-semibold mt-2'>Linux</div>
              <div class='text-gray-400'>deb</div>
            </a>
          </div>
          <div class='flex w-full max-w-md gap-4'>
            <a class='text-inherit bg-neutral-950 hover:bg-neutral-900 transition rounded-lg flex flex-col px-8 flex-1 mb-5 p-5' href={downloads.Android || releases}>
              <AndroidSVG />
              <div class='text-lg font-semibold mt-2'>Android</div>
              <div class='text-gray-400'>apk</div>
            </a>
            <a class='text-inherit bg-neutral-950 hover:bg-neutral-900 transition rounded-lg flex flex-col px-8 flex-1 mb-5 p-5' href={downloads.Android || releases}>
              <AndroidTVSVG />
              <div class='text-lg font-semibold mt-2'>Android TV</div>
              <div class='text-gray-400'>apk</div>
            </a>
          </div>
          <a class='text-inherit bg-neutral-950 hover:bg-neutral-900 transition rounded-lg flex flex-col px-8 w-full max-w-md mb-5 p-5' href={downloads.Linux || releases}>
            <SteamOSSVG />
            <div class='text-lg font-semibold mt-2'>Steam OS</div>
            <div class='text-gray-400'>AppImage</div>
          </a>
        </div>
        <div class='flex flex-col items-center lg:items-start pl-0 lg:pl-5 pt-5 border-t lg:border-t-0 border-gradient'>
          <h3 class='font-bold text-white text-3xl text-center lg:text-left py-8'>Additional resources</h3>
          <div class='flex flex-col w-full items-center lg:items-start'>
            <div class='pb-2 text-lg font-bold'>
              Current version:
              {#await data.releases then releases}
                {releases[0]?.version}
              {/await}
            </div>
            <a href='/changelog' class='underline pb-5 text-base font-bold text-blue-500 hover:text-blue-400'>
              View changelog
            </a>
            <div class='pb-2 text-lg font-bold'>
              Older versions of Hayase
            </div>
            <a href={releases} class='underline pb-5 text-base font-bold text-blue-500 hover:text-blue-400'>
              View older versions of Hayase on GitHub
            </a>
          </div>
        </div>
      </div>
    {/key}
  </div>
</div>
