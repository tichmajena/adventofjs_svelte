<script>
  import arrow from "$lib/assets/22/images/arrow.svg";
</script>

<section>
  <div class="wrapper">
    <!-- 👇🏻 ADD A CLASS OF FLIP 👇🏻 && 👇🏻 SWAP OUT THE DISCOVER CLASS FOR VISA OR MASTERCARD 👇🏻 -->
    <div class="credit-card__wrapper discover">
      <div class="credit-card__inner">
        <div class="credit-card--front">
          <div class="card-number">
            <div class="card-number__shadow shadow">4242 4242 4242 4242</div>
            <div class="card-number__emboss emboss">4242 4242 4242 4242</div>
          </div>
          <div class="card-holder">
            <div class="card-holder__shadow shadow">Amy Dutton</div>
            <div class="card-holder__emboss emboss">Amy Dutton</div>
          </div>
          <div class="expiration-date">
            <div class="expiration-date__shadow shadow">12/2022</div>
            <div class="expiration-date__emboss emboss">12/2022</div>
          </div>
        </div>
        <div class="credit-card--back">
          <div class="signature">Amy Dutton</div>
          <div class="cvv">123</div>
        </div>
      </div>
    </div>

    <div class="form">
      <form action="">
        <div class="row">
          <div class="field">
            <label for="card-number">Card Number</label>
            <input type="text" name="card-number" />
          </div>

          <div class="field">
            <label for="card-holder">Card Holder</label>
            <input type="text" name="card-holder" />
          </div>
        </div>

        <div class="row">
          <div class="field option__wrapper">
            <label>Expiration Date</label>
            <div class="field__option">
              <select name="expiration-date-month" id="">
                <option>Month</option>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>

              <select name="expiration-date-year" id="">
                <option>Year</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
          </div>

          <div class="field">
            <label for="cvv">CVV</label>
            <input type="number" name="cvv" />
          </div>
        </div>

        <div class="row">
          <button>Submit</button>
        </div>
      </form>
    </div>
  </div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Beth+Ellen&family=Courier+Prime:wght@700&family=Roboto:wght@400;700&display=swap");

  section {
    min-width: 100vw;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    background: #fbe6db;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Courier Prime", monospace;
  }

  .wrapper {
    position: relative;
    margin-top: 200px;
  }

  .credit-card__wrapper {
    position: relative;
    top: -200px;
    left: 50%;
    transform: translateX(-334px);
    z-index: 10;
  }

  .credit-card__wrapper.flip .credit-card__inner {
    transform: rotateY(180deg);
  }

  .credit-card__inner {
    position: relative;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .credit-card--front,
  .credit-card--back {
    background-position: left top;
    background-repeat: no-repeat;
    background-size: 668px 413px;
    width: 668px;
    height: 413px;
    margin-bottom: -200px;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  .credit-card--back {
    transform: rotateY(180deg) translateX(-334px);
  }

  .visa .credit-card--front {
    background-image: url("/src/lib/assets/22/images/cc__visa--front.png");
  }

  .visa .credit-card--back {
    background-image: url("/src/lib/assets/22/images/cc__visa--back.png");
  }

  .mastercard .credit-card--front {
    background-image: url("/src/lib/assets/22/images/cc__mastercard--front.png");
  }

  .mastercard .credit-card--back {
    background-image: url("/src/lib/assets/22/images/cc__mastercard--back.png");
  }

  .discover .credit-card--front {
    background-image: url("/src/lib/assets/22/images/cc__discover--front.png");
  }

  .discover .credit-card--back {
    background-image: url("/src/lib/assets/22/images/cc__discover--back.png");
  }

  .american .credit-card--front {
    background-image: url("/src/lib/assets/22/images/cc__american--front.png");
  }

  .american .credit-card--back {
    background-image: url("/src/lib/assets/22/images/cc__american--back.png");
  }

  .card-number {
    position: absolute;
    font-weight: bold;
    font-size: 36px;
    line-height: 47px;
    width: 575px;
    top: 184px;
    left: 118px;
  }

  .card-holder {
    width: 575px;
    position: absolute;
    font-weight: bold;
    font-size: 20px;
    line-height: 34px;
    text-transform: uppercase;
    left: 118px;
    top: 280px;
  }

  .expiration-date {
    width: 575px;
    position: absolute;
    font-weight: bold;
    font-size: 20px;
    line-height: 34px;
    text-transform: uppercase;
    left: 355px;
    top: 246px;
  }

  .shadow {
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.65);
    z-index: -1;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .emboss {
    z-index: 5;
    position: absolute;
    background: linear-gradient(
      180deg,
      #ffffff 15.34%,
      #dbdbdb 21.24%,
      #ffffff 37.13%,
      rgba(188, 203, 217, 0.68) 48.94%,
      rgba(255, 255, 255, 0.830204) 58.93%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 5;
    width: 100%;
    height: 50px;
  }

  .signature {
    font-family: "Beth Ellen", cursive;
    font-size: 32px;
    position: absolute;
    left: 105px;
    top: 142px;
  }

  .cvv {
    position: absolute;
    right: 110px;
    top: 170px;
  }

  .form {
    background: white;
    border-radius: 30px;
    padding: 200px 60px 60px 60px;
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.25), 0px 0px 95px #f5c7bd;
    position: relative;
    z-index: 1;
    width: 890px;
  }

  .row {
    margin-bottom: 30px;
    display: flex;
    gap: 35px;
    width: 100%;
    justify-content: space-between;
  }

  .field {
    flex: 1;
  }

  label {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 19px;
    font-weight: normal;
    display: block;
    margin-bottom: 8px;
  }

  input[type="text"],
  input[type="number"],
  select {
    font-family: "Roboto", sans-serif;
    border: 2px solid #e0e0e0;
    border-radius: 4px;
    height: 65px;
    padding: 0 30px;
    width: 100%;
    box-sizing: border-box;
    font-size: 20px;
    line-height: 23px;
  }

  button {
    background: #7d193e;
    color: white;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    padding: 20px 0;
    box-sizing: border-box;
    height: 65px;
    border: none;
    border-radius: 12px;
    width: 100%;
    cursor: pointer;
  }

  .field__option {
    display: flex;
    gap: 20px;
  }

  .option__wrapper {
    flex: 2;
  }

  select {
    background: url("/src/lib/assets/22/images/arrow.svg") 95% center no-repeat;
    appearance: none;
  }
</style>
