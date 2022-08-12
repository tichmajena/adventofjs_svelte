<script>
  import podcast_cover from "$lib/assets/05/images/podcast-cover.png";
  import { element } from "svelte/internal";
  export let episodes;

  //console.log(episodes);
</script>

<section>
  <div class="wrapper">
    <div class="cover">
      <img src={podcast_cover} alt="Compressed.fm" />
    </div>
    <div class="content">
      <h1>Listen to all the Compressed.fm Episodes</h1>

      <ul class="episodes">
        <li>
          <label for="episode-1">
            <input type="checkbox" name="episode-1" id="episode-1" />
            <span>1 || Trailer</span>
          </label>
        </li>
      </ul>
    </div>
  </div>
</section>

<style>
  section {
    background: #f3f3f3;
    color: #4e4e4e;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    font-family: "Nunito Sans", sans-serif;
    justify-content: center;
  }

  .wrapper {
    display: flex;
    align-items: center;
  }

  .cover {
    filter: drop-shadow(0px 4px 24px #453f3f);
  }

  .content {
    background: white;
    border-top-right-radius: 32px;
    border-bottom-right-radius: 32px;
    padding: 60px 80px;
    height: 450px;
    overflow-y: scroll;
  }

  h1 {
    font-weight: bold;
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #a7a7a7;
    margin: 0 0 40px 0;
    padding: 0;
  }

  input[type="checkbox"] {
    display: none;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-bottom: 24px;
    font-size: 1rem;
  }

  label {
    cursor: pointer;
  }

  input[type="checkbox"] + span {
    background: url("/src/lib/assets/05/images/checkbox--unchecked.svg") left
      top no-repeat;
    background-size: 20px 20px;
    min-height: 20px;
    padding-left: 30px;
  }

  input[type="checkbox"]:checked + span {
    background-image: url("/src/lib/assets/05/images/checkbox--checked.svg");
    text-decoration: line-through;
    color: #c9cdd1;
  }

  button {
    background: #8c59ff;
    border: none;
    border-radius: 24px;
    text-transform: uppercase;
    font-family: "Nunito Sans", sans-serif;
    font-weight: bold;
    padding: 8px 25px;
    color: white;
    line-height: 1;
    letter-spacing: 2px;
    cursor: pointer;
  }

  button:hover {
    background: #543599;
  }
</style>
