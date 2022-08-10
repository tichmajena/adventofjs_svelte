<script>
  // Change this to a Todo List
  // Use a store that persists to localStorage
  let toc = [
    "01-pomodoro",
    "02-ecommerce",
    "03-piano",
    "04-keyboard",
    "05-checklist",
    "06-rangeslider",
    "07-tip-calculator",
    "08-weather",
    "09-carousel",
    "10-password-verifier",
    "11-accordion",
    "12-rock-paper-scissors",
    "13-modal",
    "14-calendar",
    "15-youtube-gallery",
    "16-star-rating",
    "17-table-of-contents",
    "18-password-generator",
    "19-form-validator",
    "20-tabbed-content",
    "21-budget",
    "22-credit-card",
    "23-toaster",
    "24-dynamic-table",
  ];
</script>

<section class="pt-10 px-8 bg-cyan-800 flex flex-col h-[100vh] overflow-auto">
  <div class="container mx-auto">
    <h1 class="title text-7xl text-white text-center my-12">
      Advent of JavaScript
    </h1>
    <ul class="text-xl text-white flex flex-col space-y-4 w-full pb-20">
      {#each toc as route}
        <li class="w-full flex items-center">
          <input
            class="relative z-20 h-6 w-6 mr-4 rounded-full"
            type="checkbox"
          /><a
            class="bg-cyan-700 hover:bg-cyan-600 hover:shadow-md transition-all p-4 rounded-lg w-full"
            href="/{route}"
          >
            {route}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Monoton&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");

  section {
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
  }
  .title {
    font-family: "Monoton", cursive;
  }
</style>
