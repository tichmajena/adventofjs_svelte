<script>
  import "../app.css";
  import * as marked from "marked";
</script>

<div class="flex flex-col space-y-3 absolute top-4 left-4 text-white z-50">
  <a
    class="bg-cyan-800 hover:bg-cyan-700 hover:shadow-md transition-all h-12 w-12 rounded-full flex items-center justify-center"
    href="/"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
      />
    </svg></a
  >
  <!-- <a
    class="bg-cyan-800 hover:bg-cyan-700 hover:shadow-md transition-all h-12 w-12 rounded-full flex items-center justify-center"
    href="/"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clip-rule="evenodd"
      />
    </svg></a
  > -->
</div>
<!-- <div
  class="fixed inset-0 bg-cyan-900 backdrop-blur bg-opacity-50 flex justify-center items-center p-36"
>
  <div class="shadow-lg bg-cyan-200 w-full p-12 rounded-lg text-cyan-900">
  </div> 
</div>-->
<slot />
