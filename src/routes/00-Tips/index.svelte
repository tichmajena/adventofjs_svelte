<div class="h-screen bg-emerald-400">
  <h1 class="my-12 text-violet-100 text-8xl title text-center">Marimba</h1>

  <ul class="flex space-x-4 px-32 w-full justify-center items-center ">
    <li
      data-sound="do"
      id="do-key"
      class="rounded-lg h-96 w-1/12 bg-orange-900 hover:bg-orange-800 active:bg-orange-900"
    />
    <li
      data-sound="re"
      id="re-key"
      class="rounded-lg h-80 w-1/12 bg-orange-800 hover:bg-orange-900 active:bg-orange-800"
    />
    <li
      data-sound="mi"
      id="mi-key"
      class="rounded-lg h-72 w-1/12 bg-orange-700 hover:bg-orange-800 active:bg-orange-900"
    />
    <li
      data-sound="fa"
      id="fa-key"
      class="rounded-lg h-64 w-1/12 bg-orange-600 hover:bg-orange-700 active:bg-orange-800"
    />
    <li
      data-sound="so"
      id="so-key"
      class="rounded-lg h-60 w-1/12 bg-orange-500 hover:bg-orange-600 active:bg-orange-700"
    />
    <li
      data-sound="la"
      id="la-key"
      class="rounded-lg h-56 w-1/12 bg-orange-400 hover:bg-orange-500 active:bg-orange-600"
    />
    <li
      data-sound="ti"
      id="ti-key"
      class="rounded-lg h-52 w-1/12 bg-orange-300 hover:bg-orange-400 active:bg-orange-500"
    />
    <li
      data-sound="do"
      id="do-key"
      class="rounded-lg h-44 w-1/12 bg-orange-200 hover:bg-orange-300 active:bg-orange-400"
    />
  </ul>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=DynaPuff:wght@500&display=swap");

  .title {
    font-family: "DynaPuff", cursive;
  }

  .jiggle {
    animation: jiggle 0.1s;
    animation-iteration-count: infinite;
  }

  @keyframes jiggle {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
</style>
