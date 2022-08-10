<script>
  import success from "$lib/assets/19/images/success.svg";
  import error from "$lib/assets/19/images/error.svg";
</script>

<section>
  <form action="">
    <h1>Signup</h1>
    <div class="field">
      <input type="text" name="name" id="name" placeholder=" " />
      <label for="name">Name</label>
      <div class="error">
        <img src={error} alt="Error" />
        A name is required
      </div>
      <div class="success" />
    </div>
    <div class="field">
      <input type="email" name="email" id="email" placeholder=" " />
      <label for="email">Email</label>
      <div class="error" />
      <div class="success">
        <img src={success} alt="Success" />
      </div>
    </div>
    <div class="field">
      <input type="password" name="password" id="password" placeholder=" " />
      <label for="password">Password</label>
      <button class="show-hide" />
      <div class="error" />
      <div class="success" />
    </div>
    <div class="field show">
      <input
        type="text"
        name="confirm-password"
        id="confirm-password"
        placeholder=" "
      />
      <label for="confirm-password">Confirm Password</label>
      <button class="show-hide" />
      <div class="error" />
      <div class="success" />
    </div>
    <div class="field">
      <input type="submit" name="submit" value="Submit" />
    </div>
  </form>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500;700;800&display=swap");

  :root {
    --primary: #1400ff;
  }

  section {
    padding: 0;
    margin: 0;
    font-family: "Inter", sans-serif;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-weight: 800;
    color: black;
    font-size: 3.5rem;
    padding: 0;
    margin: 0 0 20px 0;
  }

  .field {
    position: relative;
    margin-bottom: 20px;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    border: 2px solid #d4d4d4;
    border-radius: 4px;
    padding: 0 20px;
    width: 450px;
    height: 62px;
    margin-top: 10px;
    outline: none;
    box-sizing: border-box;
    font-size: 1.5rem;
  }

  input[type="text"]:focus,
  input[type="email"]:focus,
  input[type="password"]:focus {
    border-color: var(--primary);
    label: var(--primary);
  }

  label {
    display: inline-block;
    color: var(--primary);
    font-size: 0.875rem;
    font-weight: 500;
    position: absolute;
    background: white;
    padding: 0 5px;
    left: 20px;
    top: 0;
    pointer-events: none;
    transition: all 0.25s ease-in-out;
  }

  input[type="text"]:placeholder-shown + label,
  input[type="email"]:placeholder-shown + label,
  input[type="password"]:placeholder-shown + label {
    font-size: 1.5rem;
    top: 31px;
  }

  input[type="text"]:focus + label,
  input[type="email"]:focus + label,
  input[type="password"]:focus + label {
    font-size: 0.875rem;
    top: 0;
  }

  .show-hide {
    border: none;
    background: url("/src/lib/assets/19/images/show.svg") left top no-repeat;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 405px;
    top: 32px;
    cursor: pointer;
  }

  .show .show-hide {
    background-image: url("/src/lib/assets/19/images/hide.svg");
    background-size: 32px 32px;
    top: 28px;
  }

  input[type="submit"] {
    background: var(--primary);
    color: white;
    border-radius: 4px;
    font-weight: 700;
    border: none;
    width: 450px;
    height: 62px;
    font-size: 1.5rem;
    margin-top: 10px;
  }

  .error,
  .success {
    position: absolute;
    top: 30px;
    left: 460px;
    width: 300px;
    display: flex;
    align-items: center;
  }

  .error {
    color: #ff0000;
  }

  .success {
    color: #5fa12b;
  }

  .error img,
  .success img {
    margin-right: 5px;
  }
</style>
