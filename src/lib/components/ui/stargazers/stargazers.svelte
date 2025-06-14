<script lang='ts'>
  export let stargazers: Promise<Array<{
    htmlUrl: string
    avatarUrl: string
    login: string
  }>>

  function * chunks <T> (arr: T[], n: number) {
    for (let i = 0; i < arr.length; i += n) {
      yield arr.slice(i, i + n)
    }
  }
</script>

<div class='flex flex-col w-full items-center pb-20'>
  <div class='max-w-[1600px] overflow-clip relative w-full'>
    <div class='overlay-gradient absolute top-0 left-0 w-full h-full z-10' />
    {#await stargazers}
      Loading...
    {:then stargazers}
      {#each [...chunks(stargazers, 25)] as stargazerRow, i (i)}
        <div class='text-nowrap'>
          {#each stargazerRow as { htmlUrl, avatarUrl, login }, i (i)}
            <a href={htmlUrl} class='inline-flex p-2 hover:scale-110 transition-transform' target='_blank'>
              <div class='bg-neutral-950 py-3 px-4 rounded font-bold flex items-center text-xs'>
                <img src={avatarUrl} alt='avatar' class='rounded-full mr-2 size-6' loading='lazy' />
                {login}
              </div>
            </a>
          {/each}
        </div>
      {/each}
    {/await}
  </div>
</div>

<style>
  .overlay-gradient {
    background: linear-gradient(90deg, #000 0%, #0000 25%, #0000 75%, #000 100%);
    pointer-events: none;
  }

  .text-nowrap {
    animation: animateRow1 200s linear infinite;
    width: -moz-max-content;
    width: max-content;
  }

  @keyframes animateRow1 {
    0% {
      transform: translate(0)
    }

    to {
      transform: translate(calc(-50%))
    }
  }

  .text-nowrap:nth-child(even) {
    animation-direction: reverse;
  }
</style>
