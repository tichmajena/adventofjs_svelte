<script>
  import question_1 from "$lib/assets/11/images/question-1.svg";
  import question_2 from "$lib/assets/11/images/question-2.svg";
</script>

<section>
  <div class="wrapper">
    <ul>
      <li>
        <a href="#">
          <div class="question">
            <div class="question-mark">
              <img src={question_1} alt="question" />
            </div>
            <div class="content">
              Technically, Svelte is a library and SvelteKit is a framework.
              What's the difference?
            </div>
          </div>
        </a>
        <div class="answer">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </p>

          <p>
            Voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </li>

      <li class="expand">
        <a href="#">
          <div class="question">
            <div class="question-mark">
              <img src={question_2} alt="question" />
            </div>
            <div class="content">
              Do you provide a certificate of completion?
            </div>
          </div>
        </a>
        <div class="answer">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </p>

          <p>
            Voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </li>
    </ul>
  </div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap");

  section {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Open Sans", sans-serif;
    font-weight: 800;
  }

  .wrapper {
    max-width: 1010px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 75px;
  }

  a {
    text-decoration: none;
  }

  .question {
    background: white;
    border: 5px solid black;
    padding: 25px 38px;
    width: calc(100% - 55px);
    display: block;
    position: relative;
    padding-left: 130px;
    box-sizing: border-box;
    color: black;
  }

  .question:before {
    content: "";
    display: block;
    background: black;
    width: 102px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
  }

  .question-mark {
    position: absolute;
    left: 10px;
    z-index: 5;
    top: -45px;
  }

  .question:after {
    content: "";
    background: #f0f0f0 url("/src/lib/assets/11/images/chevron.svg")
      calc(100% - 12px) 20px no-repeat;
    width: calc(100%);
    position: absolute;
    right: -55px;
    top: 15px;
    height: calc(100% + 15px);
    z-index: -1;
  }

  .expand .question:after,
  a:hover .question:after {
    background-color: #ffdd00;
  }

  .question .content {
    position: relative;
    z-index: 3;
  }

  .answer {
    display: none;
  }

  .expand .answer {
    display: block;
    background-color: #ffdd00;
    width: calc(100% - 60px);
    margin-left: 55px;
    padding: 30px 75px;
    box-sizing: border-box;
  }
</style>
