<script>
  export let jiggle;
</script>

<div class="h-screen bg-violet-400">
  <h1 class="my-12 text-violet-100 text-8xl title text-center">Marimba</h1>
  <ul class="flex space-x-4 px-32 w-full justify-center items-center ">
    <li
      data-sound="do"
      id="do-key"
      class:jiggle={jiggle === 0}
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
