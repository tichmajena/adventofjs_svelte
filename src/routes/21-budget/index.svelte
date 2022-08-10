<section>
  <div class="wrapper">
    <div class="add-panel">
      <h1>Simplified Budget</h1>
      <div class="field">
        <input type="text" name="income" id="income" />
        <label for="income">Budget Amount</label>
      </div>
      <div class="add-expense">
        <div class="field">
          <input type="text" name="expense-name" id="expense-name" />
          <label for="expense-name">Expense</label>
        </div>
        <div class="field">
          <input type="text" name="expense-amount" id="expense-amount" />
          <label for="expense-amount">Amount</label>
        </div>
        <button
          name="add-expense-button"
          id="add-expense-button"
          class="add-expense-button"
        >
          <img src="./images/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>

    <div class="expenses-panel">
      <h2>Expenses</h2>
      <div class="expense-table">
        <div>Starbucks</div>
        <div>$5.54</div>
        <div class="delete">
          <button name="delete-expense" class="delete-expense">
            <img src="./images/trash.svg" alt="Tash" />
          </button>
        </div>

        <div>Starbucks</div>
        <div>$5.54</div>
        <div class="delete">
          <button name="delete-expense" class="delete-expense">
            <img src="./images/trash.svg" alt="Tash" />
          </button>
        </div>

        <div>Starbucks</div>
        <div>$5.54</div>
        <div class="delete">
          <button name="delete-expense" class="delete-expense">
            <img src="./images/trash.svg" alt="Tash" />
          </button>
        </div>
      </div>
    </div>

    <div class="summary-panel">
      <div class="summary-item">
        <div class="summary-label">Income</div>
        <div class="summary-amount">$42,000.00</div>
      </div>

      <div class="summary-item">
        <div class="summary-label">Expenses</div>
        <div class="summary-amount">$42,000.00</div>
      </div>

      <div class="summary-item">
        <div class="summary-label">Balance</div>
        <div class="summary-amount">$42,000.00</div>
      </div>
    </div>
  </div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");

  section {
    padding: 0;
    margin: 0;
    font-family: "Poppins", sans-serif;
    background: black;
    color: white;
    min-height: 100vh;
    min-width: 100vw;
  }

  :root {
    --primary: #51f129;
    --positive: #4ca536;
    --negative: #df1414;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
  }

  h2 {
    font-size: 1.5rem;
    color: var(--primary);
  }

  .field {
    position: relative;
  }

  label {
    font-weight: normal;
    color: #8e909d;
    font-size: 0.875rem;
    line-height: 1.3125rem;
    position: absolute;
    left: 20px;
    top: 12px;
  }

  input[type="text"] {
    background: #323645;
    border-radius: 16px;
    padding: 35px 20px 15px;
    border: 2px solid transparent;
    width: 100%;
    height: 85px;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    color: white;
    font-size: 1.25rem;
    outline: none;
  }

  input[type="text"]:focus {
    border: 2px solid var(--primary);
  }

  input[type="text"]:focus + label {
    color: var(--primary);
  }

  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0;
    min-height: 100vh;
  }

  .add-panel {
    background: #282a37;
    padding: 170px 125px 180px;
  }

  .add-expense {
    margin: 120px 0;
    display: flex;
    gap: 24px;
  }

  .add-expense-button {
    border: none;
    background: none;
    cursor: pointer;
  }

  .expenses-panel {
    padding: 220px 125px 180px;
  }

  .expense-table {
    display: grid;
    grid-template-columns: 1fr 150px auto;
  }

  .expense-table div {
    border-bottom: 2px solid #313131;
    padding: 16px 0;
  }

  .delete {
    text-align: right;
  }

  .delete-expense {
    background: none;
    border: none;
    cursor: pointer;
  }

  .summary-panel {
    background: white;
    color: black;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 48px 125px;
    display: flex;
    justify-content: space-between;
  }

  .summary-label {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    color: #323645;
  }

  .summary-amount {
    font-weight: bold;
    font-size: 54px;
    line-height: 81px;
  }

  .summary-amount.positive {
    color: var(--positive);
  }

  .summary-amount.negative {
    color: var(--negative);
  }
</style>
