<div class='w-full max-w-screen-xl mx-auto text-sm pb-5 text-muted-foreground leading-normal px-12'>
  <div class='pt-20'>
    <div class='h-[40vh] px-5 sm:px-0 flex content-center justify-center flex-col'>
      <h1 class='text-white font-bold text-5xl my-3'>About Extension</h1>
      <div class='text-sm text-muted-foreground'>Frequently Asked Questions about Extensions.</div>
    </div>
    <p class='rounded-md border border-white/10 bg-neutral-950/80 px-5 py-4 text-xs uppercase tracking-[0.3em] text-muted-foreground/80'>Hayase ships without content. Adding an extension means you trust it and are responsible for any media it exposes.</p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>What are some recommended extensions and sources?</h3>
    <p>Hayase is bring-your-own-content and does not offer anything by default, it's up to the user to find or create and add their own sources. The project does not recommend or maintain unofficial repositories.</p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>Is there a curated list of extensions and sources?</h3>
    <p>No. Hayase is not directly associated with any extensions or sources. It's merely a client for streaming one's own media, and you should only add integrations you are legally permitted to use.</p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>How to install/uninstall extensions?</h3>
    <p>Inside <kbd class='text-white'>Settings &gt; Extensions &gt; Repositories</kbd> you can add extension repositories by either inputting a full URL such as <kbd class='text-white'>https://example.website/manifest.json</kbd> or if an extension is published on npm <kbd class='text-white'>packagename</kbd> and pressing add, if its hosted on GitHub you can use this prefix: <kbd class='text-white'>gh:username/repo</kbd>. This will automatically import all sources the extension provides. You can then uninstall an extension by going into the extension options and pressing the <kbd class='text-white'>Delete Extension</kbd> button.</p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>Can you disable sources?</h3>
    <p>You can disable sources in the sources list by clicking on it's toggle.</p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>How to develop new extensions?</h3>
    <p>Extensions for Hayase need to be written in JavaScript which are run in an isolated <a class='text-blue-600 dark:text-blue-500 hover:underline' href='https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API' target='_blank'>Web Worker</a>. Make sure the data you're fetching is CORS enabled. Extension type definitions and an example implementation are available on <a class='text-blue-600 dark:text-blue-500 hover:underline' href='https://github.com/hayase-app/free-torrents' target='_blank'>GitHub</a>.</p>
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
