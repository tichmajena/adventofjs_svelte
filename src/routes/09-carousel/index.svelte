<script>
  import chevron from "$lib/assets/09/images/chevron.svg";

  export let content;
  console.log(content);

  const images = import.meta.glob("$lib/assets/09/images/*.jpg");

  // The keys of the images object are the urls to the images
  console.log(Object.keys(images));

  function getImage(imageName) {
    return Object.keys(images).filter(
      (v) => v === `/src/lib/assets/09/images/${imageName}`
    )[0];
  }
</script>

Coming Soon...

<section>
  <div class="feature">
    <img
      src={getImage("dave-hoefler-okUIdo6NxGo-unsplash.jpg")}
      alt="Featured"
    />
    <div class="caption">Photo by Dave Hoefler Unsplash</div>
  </div>

  <div class="thumbnails">
    <ul>
      <li class="selected">
        <a href="#">
          <img
            src={getImage("dave-hoefler-okUIdo6NxGo-unsplash.jpg")}
            alt=""
            class="block aspect-square"
          />
        </a>
      </li>

      <li>
        <a href="#">
          <img
            src={getImage("eugene-golovesov-EXdXp7Z4X4w-unsplash.jpg")}
            alt=""
          />
        </a>
      </li>

      <li>
        <a href="#">
          <img
            src="./images/finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg"
            alt=""
          />
        </a>
      </li>

      <li>
        <a href="#">
          <img src="./images/jakob-owens-EwRM05V0VSI-unsplash.jpg" alt="" />
        </a>
      </li>

      <li>
        <a href="#">
          <img
            src="./images/jennifer-reynolds-_8HI5xf4TkE-unsplash.jpg"
            alt=""
          />
        </a>
      </li>

      <li>
        <a href="#">
          <img src="./images/kellen-riggin-SIBOiXKg0Ds-unsplash.jpg" alt="" />
        </a>
      </li>

      <li>
        <a href="#">
          <img
            src="./images/rafael-hoyos-weht-zhkAp8DGkxw-unsplash.jpg"
            alt=""
          />
        </a>
      </li>

      <li>
        <a href="#">
          <img src="./images/sherman-yang-VBBGigIuaDY-unsplash.jpg" alt="" />
        </a>
      </li>

      <li>
        <a href="#">
          <img src="./images/silas-baisch-Wn4ulyzVoD4-unsplash.jpg" alt="" />
        </a>
      </li>

      <li>
        <a href="#">
          <img
            src="./images/sonya-romanovska-wzdXhyi3AiM-unsplash.jpg"
            alt=""
          />
        </a>
      </li>

      <li>
        <a href="#">
          <img
            src="./images/vincentiu-solomon-ln5drpv_ImI-unsplash.jpg"
            alt=""
          />
        </a>
      </li>
    </ul>
  </div>

  <a href="#" class="left"><img src={chevron} alt="" /></a>
  <a href="#" class="right"><img src={chevron} alt="" /></a>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");

  section {
    font-family: "Roboto Mono", monospace;
    padding: 0;
    margin: 0;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .feature {
    padding-bottom: 200px; /* offset thumbnail strip at the bottom */
  }

  .feature img {
    max-height: 615px;
    max-width: 800px;
  }

  .caption {
    text-align: center;
    font-size: 14px;
  }

  .thumbnails {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    overflow-x: scroll;
    scroll-padding: 0 100px;
    scroll-snap-type: both mandatory;
  }

  .thumbnails ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 30px;
    position: relative;
    padding: 0 100px;
  }

  .thumbnails li:last-child img {
    margin-right: 100px;
  }

  .thumbnails li {
    scroll-snap-align: start;
    scroll-snap-stop: normal;
  }

  .thumbnails .selected {
    outline: 10px solid #ff00c7;
    outline-offset: -10px;
  }

  .thumbnails img {
    object-fit: cover;
    height: 175px;
    width: 175px;
    vertical-align: middle;
  }

  .left,
  .right {
    background: rgba(255, 0, 199, 0.3);
    width: 100px;
    height: 100vh;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 200px;
    box-sizing: border-box;
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }

  .left:hover,
  .right:hover {
    background: rgba(255, 0, 199, 1);
  }

  .right img {
    transform: rotate(180deg);
    margin: auto;
  }
</style>
