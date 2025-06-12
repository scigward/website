<div class='w-full max-w-screen-xl mx-auto text-sm pb-5 text-muted-foreground leading-normal px-12'>
  <div class='pt-20'>
    <div class='h-[40vh] px-5 sm:px-0 flex content-center justify-center flex-col'>
      <h1 class='text-white font-bold text-5xl my-3'>About Extension</h1>
      <div class='text-sm text-muted-foreground'>Frequently Asked Questions about Extensions.</div>
    </div>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>What are some recommended extensions and sources?</h3>
    <p>Hayase is bring-your-own-content and does not offer anything, however <kbd>anisearch</kbd> is recommended.</p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>Is there a curated list of extensions and sources?</h3>
    <p>No. Hayase is not directly associated with any extensions or sources. It's merely a client for streaming one's own media.</p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>How to install/uninstall extensions?</h3>
    <p>Inside <kbd>Settings &gt; Torrent &gt; Extensions</kbd> you can add extensions by either inputting a full URL such as <kbd>https://example.website/file.js</kbd> or if an extension is published on npm <kbd>packagename</kbd> and pressing add. This will automatically import all sources the extension provides. You can then uninstall an extension by pressing the remove button next to it.</p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>Can you disable sources?</h3>
    <p>You can disable sources in the sources list by clicking on it's toggle.</p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>How to develop new extensions?</h3>
    <p>Extensions for Hayase need to be written in JavaScript which are run in an isolated <a class='text-blue-600 dark:text-blue-500 hover:underline' href='https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API' target='_blank'>Web Worker</a>. Make sure the data you're fetching is CORS enabled. Extension type definitions and example structures are available on <a href='https://github.com/hayase-app/extensions' target='_blank'>GitHub</a>.</p>
    <p>Options object, which is passed to the class's single, batch and movie functions as the first parameters has the following fields:</p>
    <ul class='text-wrap list-disc list-inside space-y-1'>
      <li>anilistId: number - Anilist anime id, can be used to query data from Anilist, such as MalID, episode metadata etc</li>
      <li>anidbAid?: number - AniDB anime id, not always present, useful to query mapping API's</li>
      <li>anidbEid?: number - AniDB episode id, not always present, useful to query specific data, as AnidbEIDs map to manually maintained files</li>
      <li>titles: string[] - list of titles and alternative titles for the given anime</li>
      <li>episode?: number - episode to look for, not always present</li>
      <li>episodeCount?: number - total episode count for the series, not always present</li>
      <li>resolution: '2160' | '1080' | '720' | '540' | '480' | '' - resolution height. empty string means any</li>
      <li>exclusions: string[] - list of keywords to exclude from searches such as codecs unsuppored by the platform, etc</li>
    </ul>
    <p class='py-4'>Results object, array of which is returned by the functions of the class has the following fields:</p>
    <ul class='text-wrap list-disc list-inside space-y-1'>
      <li>title: string - torrent title, this isn't always the file title as a torrent might include multiple files</li>
      <li>link: string - http:// link to .torrent file, or magnet:// link</li>
      <li>id?: number - unused for now</li>
      <li>seeders: number</li>
      <li>leechers: number</li>
      <li>downloads: number</li>
      <li>hash: string - info hash REQUIRED</li>
      <li>size: number - size in bytes</li>
      <li>verified: boolean - if it's a verified release, e.g. it's 100% certain it's the correct episode, manually verified by the provider e.g. anidb</li>
      <li>date: Date - date the torrent was uploaded</li>
      <li>type?: 'batch' | 'best' | 'alt' - type of the result best/alt means it's the best known release</li>
    </ul>
  </div>
</div>

<style>
  h3 {
    margin-top: 0;
    padding-top: 0.75em;
  }
  p {
    margin-bottom: 0;
    padding-bottom: 1em;
  }
</style>
