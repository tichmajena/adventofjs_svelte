<script>
  // import images
</script>

<section>
  <div class="wrapper">
    <div class="field">
      <input
        type="text"
        name="password"
        id="password"
        value=""
        min="6"
        max="32"
        steps="1"
      />

      <!-- 👇🏻 Add a class of "copied" when the user clicks this button 👇🏻 -->
      <button class="copy">
        <svg
          width="55"
          height="55"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.3147 2.83081H20.6332C18.1514 2.83081 16.1332 4.85131 16.1332 7.33081V38.8308C16.1332 41.3126 18.1514 43.3308 20.6332 43.3308H43.1332C45.6149 43.3308 47.6332 41.3126 47.6332 38.8308V13.1493L37.3147 2.83081ZM43.1354 38.8308H20.6332V7.33081H34.1332V16.3308H43.1332L43.1354 38.8308Z"
          />
          <path
            d="M11.6332 11.8308H7.13318V47.8308C7.13318 50.3126 9.15143 52.3308 11.6332 52.3308H38.6332V47.8308H11.6332V11.8308Z"
          />
        </svg>
        <span>Copied!</span>
      </button>
    </div>

    <div class="field">
      <input
        type="range"
        name="length"
        id="length"
        value="12"
        min="6"
        max="32"
      />
      <span id="lengthText">12</span> characters
    </div>

    <div class="field">
      <input
        type="checkbox"
        name="symbols"
        id="symbols"
        value="true"
        checked="true"
      />
      <label for="symbols"><strong>Include Symbols</strong> (@#$%)</label>
    </div>

    <div class="field">
      <input type="checkbox" name="numbers" id="numbers" checked="true" />
      <label for="numbers"><strong>Include Numbers</strong> (1234)</label>
    </div>

    <div class="field">
      <input type="checkbox" name="lowercase" id="lowercase" checked="true" />
      <label for="lowercase"
        ><strong>Include Lowercase Characters</strong> (abcd)</label
      >
    </div>

    <div class="field">
      <input type="checkbox" name="uppercase" id="uppercase" checked="true" />
      <label for="uppercase"
        ><strong>Include Uppercase Characters</strong> (ABCD)</label
      >
    </div>

    <div class="field">
      <input type="checkbox" name="similar" id="similar" checked="true" />
      <label for="similar"
        ><strong>Include Similar Characters</strong> (i, l, 1, L, o, 0, O)</label
      >
    </div>
  </div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto:wght@400;700&display=swap");

  section {
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f7f4;
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    color: #31292f;
  }

  .field {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  }

  input[type="text"] {
    font-family: "Roboto Mono", monospace;
    background: #ffffff;
    box-shadow: 0px 0px 24px #cadbd2;
    border-radius: 20px;
    font-family: Roboto Mono;
    font-size: 32px;
    line-height: 42px;
    color: #000000;
    width: 600px;
    height: 100px;
    border: none;
    margin-bottom: 40px;
    padding: 0 40px;
    margin-right: 18px;
  }

  .copy {
    background: none;
    border: none;
    color: #7da9ae;
    display: flex;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    height: 100px;
    margin-bottom: 40px;
    min-width: 140px;
  }

  .copy svg {
    fill: currentColor;
    margin-right: 0px;
  }

  .copy span {
    display: none;
  }

  .copy.copied {
    color: #4a9661;
    font-weight: bold;
  }

  .copy.copied span {
    display: block;
  }

  input[type="range"] {
    -webkit-appearance: none;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: #7da9ae;
    cursor: pointer;
    position: relative;
    top: -12px;
  }

  input[type="range"]::-moz-range-thumb {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: #7da9ae;
    cursor: pointer;
    position: relative;
    top: -12px;
  }

  input[type="range"]::-ms-thumb {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: #7da9ae;
    cursor: pointer;
    position: relative;
    top: -12px;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    background: #cedfe1;
    border-radius: 4px;
    width: 385px;
    height: 9px;
  }

  input[type="range"] {
    width: 385px;
    margin-right: 35px;
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label {
    background: url("/src/lib/assets/18/images/checkbox--unchecked.svg") left
      top no-repeat;
    padding-left: 50px;
    min-height: 35px;
    padding-top: 6px;
    cursor: pointer;
  }

  input[type="checkbox"]:checked + label {
    background: url("/src/lib/assets/18/images/checkbox--checked.svg") left top
      no-repeat;
  }
</style>
