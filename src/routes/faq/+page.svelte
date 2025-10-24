<div class='w-full max-w-screen-xl mx-auto text-sm pb-5 text-muted-foreground leading-normal px-12'>
  <div class='pt-20'>
    <div class='h-[40vh] px-5 sm:px-0 flex content-center justify-center flex-col'>
      <h1 class='text-white font-bold text-5xl my-3'>Frequently Asked Questions</h1>
      <div class='text-sm text-muted-foreground'>Most commonly asked questions about Hayase and its usage.</div>
    </div>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>Does Hayase provide anime or torrent sources?</h3>
    <p>No. Hayase is strictly a bring-your-own-content client. It never hosts, distributes, or links to unofficial repositories. You are responsible for sourcing media you have the rights to access and for complying with local laws.</p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>What extensions are there? How to make extensions?</h3>
    <p>You can find all information regarding extensions on the <a class='text-blue-600 dark:text-blue-500 hover:underline' href='../extensions/' target='_blank'>extensions</a> page. Extensions are user-supplied; there is no official directory and the Hayase project does not endorse third-party repositories.</p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>Can I close the miniplayer?</h3>
    <p>No. The miniplayer provides feedback that something is happening in the background. Closing it would make the user feel like the app is lagging [because it's maxing out your internet in the background by torrenting] when nothing is happening.</p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>Can I reduce the upload speed?</h3>
    <p>No. This app is also meant to seed the torrents the user downloads, if you want freeleech go to some private tracker. Disabling seeding would undermine the torrent swarm the app relies on, which would make the app effectively destroy itself.</p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>Does Hayase stream the video or does it store it?</h3>
    <p>Hayase only stores 1 torrent on your drive, unless <kbd>Persist Files</kbd> is enabled in settings. It doesn't stream the content as it also needs to seed the data it downloads to keep the swarm alive. It's important to note that it stores 1 torrent, not 1 video. A single torrent can sometimes consist of many video files, and as such take up a lot of space.</p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>I have an existing media library, can Hayase import it?</h3>
    <p>
      Yes, however it's not simple. Hayase does not scan libraries like Plex or Jellyfin.  If you want to use Hayase with an existing library, you need to make sure that the <kbd>Torrent Download Location</kbd> is set to the same folder where your existing media is stored, and that <kbd>Persist Files</kbd> is enabled or Hayase will delete the downloaded files once you finish watching. This way, when you search for torrents for a given anime episode and play one you have downloaded Hayase will recognize the files and not re-download them.
      <br /><br />
      If you however want Hayase to discover downloaded torrents in the UI before you select them via episode search, then you'll need to manually copy the .torrent files to the <kbd>Torrent Download Location</kbd>'s <kbd>hayase-cache</kbd> folder and rename them to just the infoHash of the torrent file, which is a 40 character long hexadecimal string, without the .torrent extension.
      <br /><br />
      Hayase will then be able to recognize the torrents you have downloaded and display them in the UI, however the specific episode, anime and download status metadata will not be available, until you play the torrent in the episode search, which will now recognise that you have a downloaded torrent in the cache, and visualise it with a downloaded icon in the search results.
      <br /><br />
      Make sure the .torrent files you copy to the <kbd>hayase-cache</kbd> folder are COPIES, not MOVES, as Hayase will modify the .torrent files to add metadata about the episode, anime and download status, strip some other metadata, which will make them incompatible with other clients and which might lead to data loss.
    </p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>Is this safe?</h3>
    <p>It's recommended that you read the <a class='text-blue-600 dark:text-blue-500 hover:underline' href='https://thewiki.moe/getting-started/torrenting/' target='_blank'>guide about basics of torrenting</a>.</p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>Will this replace streaming sites?</h3>
    <p>Not really. The underlying source of video are still torrents, which aren't always seeded, so anime that's a few years old might not play back smoothly.</p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>Why is anime X not playing?</h3>
    <p>One of four reasons:</p>
    <ul class='text-wrap list-disc list-inside space-y-1'>
      <li>the anime isn't seeded</li>
      <li>your download speed isn't fast enough</li>
      <li>your ISP blocks Torrenting, see <a class='text-blue-600 dark:text-blue-500 hover:underline' href='https://thewiki.moe/tutorials/unblock/' target='_blank'>this tutorial</a> for a potential fix, or simply use a VPN</li>
      <li>the app couldn't find a matching torrent for the anime</li>
    </ul>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>I selected an episode to play, but Hayase plays something else!</h3>
    <p>Finding desired episodes can sometimes be difficult, if Hayase auto-selects an episode incorrectly you can either disable auto-play torrents in settings to select torrents yourself during episode choosing, or manually find and paste in a .torrent file URL or a magnet URL into the episode search to play a desired episode manually.</p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>Can I play my own torrents?</h3>
    <p>Yes. You can just paste/drag-drop a torrent file/magnet link in the episode search UI, and Hayase will then play that torrent as if it was that episode.</p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>Can I change what tracker torrents are found from?</h3>
    <p>Yes. If you find other community made extensions, you can import them in the app settings. Always verify that you are permitted to use a tracker or repository—Hayase does not vet or endorse community sources.</p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>How is this different from sequential qBit?</h3>
    <p>Unlike qBit's sequential, this will prioritise downloading torrent pieces directly needed for playback, which with the user seeking isn't always just sequential.</p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>Won't this kill swarm health?</h3>
    <p>Depends. On average no. The app is always seeding 1 torrent as long as it's open. Additionally the upload speed is forced to be x1.5 that of the download speed. Those 2 things combined will already make this app seed more than the average leecher which removes the torrent the moment it's downloaded.</p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>Why is it a native app, not a website?</h3>
    <p>The BitTorrent protocol requires TCP/UDP to function, that is the only reason. Browsers can't access TCP/UDP which means they can't access the global BitTorrent swarm.</p>
    <h5 class='text-white font-weight-bold'>&gt; Can't you make this just use WebRTC?</h5>
    <p>Yes. A BitTorrent implementation which uses WebRTC exists, but it's not yet adopted by any clients, and libtorrent [the library which qBit and others use] is still working on/just added support for WebRTC, which means there's no global swarm. This will hopefully change in the future.</p>
    <div class='border-b border-gradient my-8 w-full' />
    <h3 class='text-white font-bold text-2xl my-3'>Hayase crashed too many times.</h3>
    <p>This is likely because Hayase updated from a very old version to a very new one. Uninstall Hayase, go to <kbd>%appdata%/Hayase</kbd> remove all files and re-install it.</p>
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
