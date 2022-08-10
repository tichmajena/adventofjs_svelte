<script>
  import placeholder from "$lib/assets/15/images/placeholder.png";
  import logo from "$lib/assets/15/images/logo.png";

  export let api;
</script>

<section>
  <div class="wrapper">
    <header>
      <img src={logo} alt="YouTube" />
    </header>

    <div class="feature">
      <div class="embed">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/YipaPr4Aex8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <h1>Build an App with SvelteKit and Tailwind CSS</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>

    <aside>
      <ul class="gallery">
        <li>
          <a class="video">
            <img src={placeholder} alt="" />
            <h3>Build a SvelteKit App</h3>
          </a>
        </li>

        <li>
          <a class="video">
            <img src={placeholder} alt="" />
            <h3>Build a SvelteKit App</h3>
          </a>
        </li>

        <li>
          <a class="video">
            <img src={placeholder} alt="" />
            <h3>Build a SvelteKit App</h3>
          </a>
        </li>

        <li>
          <a class="video">
            <img src={placeholder} alt="" />
            <h3>Build a SvelteKit App</h3>
          </a>
        </li>

        <li>
          <a class="video">
            <img src={placeholder} alt="" />
            <h3>Build a SvelteKit App</h3>
          </a>
        </li>

        <li>
          <a class="video">
            <img src={placeholder} alt="" />
            <h3>Build a SvelteKit App</h3>
          </a>
        </li>

        <li>
          <a class="video">
            <img src={placeholder} alt="" />
            <h3>Build a SvelteKit App</h3>
          </a>
        </li>

        <li>
          <a class="video">
            <img src={placeholder} alt="" />
            <h3>Build a SvelteKit App</h3>
          </a>
        </li>

        <li>
          <a class="video">
            <img src={placeholder} alt="" />
            <h3>Build a SvelteKit App</h3>
          </a>
        </li>

        <li>
          <a class="video">
            <img src={placeholder} alt="" />
            <h3>Build a SvelteKit App</h3>
          </a>
        </li>
      </ul>
    </aside>
  </div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

  section {
    background-color: black;
    min-width: 100vw;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    color: white;
    font-family: "Roboto", sans-serif;
  }

  .wrapper {
    display: grid;
    margin: 0 200px;
    grid-template-areas:
      "header header"
      "feature aside";
    grid-template-columns: 3fr 1fr;
    grid-column-gap: 50px;
    grid-template-rows: 120px 1fr;
    max-height: 100vh;
  }

  header {
    padding: 35px 0 45px;
    grid-area: header;
  }

  .feature {
    grid-area: feature;
    height: 100%;
    overflow-y: scroll;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }

  aside {
    grid-area: aside;
    height: 100%;
    overflow-y: scroll;
  }

  aside ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  aside li {
    margin-bottom: 20px;
  }

  aside li a {
    display: flex;
    align-items: top;
    gap: 20px;
  }

  h3 {
    margin: 0;
    padding: 0;
  }
</style>
