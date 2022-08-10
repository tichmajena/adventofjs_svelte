<script>
  export let data;

  console.log(data);
</script>

<section>
  <div class="wrapper">
    <table cellpadding="0" cellspacing="0" width="100%">
      <thead>
        <tr>
          <th class="header__id">
            ID
            <!-- 👇🏻 ADD A CLASS OF ascending OR DESCENDING 👇🏻 -->
            <button class="sort ascending">
              <svg
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="ascending"
                  d="M16.9706 8.48528L8.48529 0L9.29832e-06 8.48528H16.9706Z"
                />
                <path
                  class="descending"
                  d="M1.00136e-05 12.4853L8.48529 20.9706L16.9706 12.4853L1.00136e-05 12.4853Z"
                />
              </svg>
            </button>
          </th>
          <th>
            Name
            <button class="sort">
              <svg
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="ascending"
                  d="M16.9706 8.48528L8.48529 0L9.29832e-06 8.48528H16.9706Z"
                />
                <path
                  class="descending"
                  d="M1.00136e-05 12.4853L8.48529 20.9706L16.9706 12.4853L1.00136e-05 12.4853Z"
                />
              </svg>
            </button>
          </th>
          <th>
            Email Address
            <button class="sort">
              <svg
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="ascending"
                  d="M16.9706 8.48528L8.48529 0L9.29832e-06 8.48528H16.9706Z"
                />
                <path
                  class="descending"
                  d="M1.00136e-05 12.4853L8.48529 20.9706L16.9706 12.4853L1.00136e-05 12.4853Z"
                />
              </svg>
            </button>
          </th>
          <th>
            Job Title
            <button class="sort">
              <svg
                width="17"
                height="21"
                viewBox="0 0 17 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="ascending"
                  d="M16.9706 8.48528L8.48529 0L9.29832e-06 8.48528H16.9706Z"
                />
                <path
                  class="descending"
                  d="M1.00136e-05 12.4853L8.48529 20.9706L16.9706 12.4853L1.00136e-05 12.4853Z"
                />
              </svg>
            </button>
          </th>
          <th />
        </tr>
      </thead>

      <tbody>
        <!-- 👇🏻 ADD A CLASS OF EDIT, IF YOU TO DISPLAY THE FORM FIELDS 👇🏻 -->
        <tr>
          <td>1</td>
          <td class="name">
            <input
              type="text"
              disabled="disabled"
              name="person-name-1"
              value="Cameron Williamson"
            />
          </td>
          <td>
            <input
              type="text"
              disabled="disabled"
              name="person-email-1"
              value="cameron.williams@example.com"
            />
          </td>
          <td>
            <input
              type="text"
              disabled="disabled"
              name="person-title-1"
              value="Software Developer"
            />
          </td>
          <td>
            <button class="update" name="person-update-1" id="personUpdate1">
              <img src="./images/update.svg" alt="Update" class="update" />
            </button>
            <button class="edit" name="person-edit-1" id="personEdit1">
              <img src="./images/edit.svg" alt="Edit" class="edit" />
            </button>
          </td>
        </tr>

        <tr>
          <td>1</td>
          <td class="name">
            <input
              type="text"
              disabled="disabled"
              name="person-name-1"
              value="Cameron Williamson"
            />
          </td>
          <td>
            <input
              type="text"
              disabled="disabled"
              name="person-email-1"
              value="cameron.williams@example.com"
            />
          </td>
          <td>
            <input
              type="text"
              disabled="disabled"
              name="person-title-1"
              value="Software Developer"
            />
          </td>
          <td>
            <button class="update" name="person-update-1" id="personUpdate1">
              <img src="./images/update.svg" alt="Update" class="update" />
            </button>
            <button class="edit" name="person-edit-1" id="personEdit1">
              <img src="./images/edit.svg" alt="Edit" class="edit" />
            </button>
          </td>
        </tr>

        <tr>
          <td>1</td>
          <td class="name">
            <input
              type="text"
              disabled="disabled"
              name="person-name-1"
              value="Cameron Williamson"
            />
          </td>
          <td>
            <input
              type="text"
              disabled="disabled"
              name="person-email-1"
              value="cameron.williams@example.com"
            />
          </td>
          <td>
            <input
              type="text"
              disabled="disabled"
              name="person-title-1"
              value="Software Developer"
            />
          </td>
          <td>
            <button class="update" name="person-update-1" id="personUpdate1">
              <img src="./images/update.svg" alt="Update" class="update" />
            </button>
            <button class="edit" name="person-edit-1" id="personEdit1">
              <img src="./images/edit.svg" alt="Edit" class="edit" />
            </button>
          </td>
        </tr>

        <tr>
          <td>1</td>
          <td class="name">
            <input
              type="text"
              disabled="disabled"
              name="person-name-1"
              value="Cameron Williamson"
            />
          </td>
          <td>
            <input
              type="text"
              disabled="disabled"
              name="person-email-1"
              value="cameron.williams@example.com"
            />
          </td>
          <td>
            <input
              type="text"
              disabled="disabled"
              name="person-title-1"
              value="Software Developer"
            />
          </td>
          <td>
            <button class="update" name="person-update-1" id="personUpdate1">
              <img src="./images/update.svg" alt="Update" class="update" />
            </button>
            <button class="edit" name="person-edit-1" id="personEdit1">
              <img src="./images/edit.svg" alt="Edit" class="edit" />
            </button>
          </td>
        </tr>

        <tr>
          <td>1</td>
          <td class="name">
            <input
              type="text"
              disabled="disabled"
              name="person-name-1"
              value="Cameron Williamson"
            />
          </td>
          <td>
            <input
              type="text"
              disabled="disabled"
              name="person-email-1"
              value="cameron.williams@example.com"
            />
          </td>
          <td>
            <input
              type="text"
              disabled="disabled"
              name="person-title-1"
              value="Software Developer"
            />
          </td>
          <td>
            <button class="update" name="person-update-1" id="personUpdate1">
              <img src="./images/update.svg" alt="Update" class="update" />
            </button>
            <button class="edit" name="person-edit-1" id="personEdit1">
              <img src="./images/edit.svg" alt="Edit" class="edit" />
            </button>
          </td>
        </tr>

        <tr>
          <td>1</td>
          <td class="name">
            <input
              type="text"
              disabled="disabled"
              name="person-name-1"
              value="Cameron Williamson"
            />
          </td>
          <td>
            <input
              type="text"
              disabled="disabled"
              name="person-email-1"
              value="cameron.williams@example.com"
            />
          </td>
          <td>
            <input
              type="text"
              disabled="disabled"
              name="person-title-1"
              value="Software Developer"
            />
          </td>
          <td>
            <button class="update" name="person-update-1" id="personUpdate1">
              <img src="./images/update.svg" alt="Update" class="update" />
            </button>
            <button class="edit" name="person-edit-1" id="personEdit1">
              <img src="./images/edit.svg" alt="Edit" class="edit" />
            </button>
          </td>
        </tr>

        <tr>
          <td>1</td>
          <td class="name">
            <input
              type="text"
              disabled="disabled"
              name="person-name-1"
              value="Cameron Williamson"
            />
          </td>
          <td>
            <input
              type="text"
              disabled="disabled"
              name="person-email-1"
              value="cameron.williams@example.com"
            />
          </td>
          <td>
            <input
              type="text"
              disabled="disabled"
              name="person-title-1"
              value="Software Developer"
            />
          </td>
          <td>
            <button class="update" name="person-update-1" id="personUpdate1">
              <img src="./images/update.svg" alt="Update" class="update" />
            </button>
            <button class="edit" name="person-edit-1" id="personEdit1">
              <img src="./images/edit.svg" alt="Edit" class="edit" />
            </button>
          </td>
        </tr>

        <tr>
          <td>1</td>
          <td class="name">
            <input
              type="text"
              disabled="disabled"
              name="person-name-1"
              value="Cameron Williamson"
            />
          </td>
          <td>
            <input
              type="text"
              disabled="disabled"
              name="person-email-1"
              value="cameron.williams@example.com"
            />
          </td>
          <td>
            <input
              type="text"
              disabled="disabled"
              name="person-title-1"
              value="Software Developer"
            />
          </td>
          <td>
            <button class="update" name="person-update-1" id="personUpdate1">
              <img src="./images/update.svg" alt="Update" class="update" />
            </button>
            <button class="edit" name="person-edit-1" id="personEdit1">
              <img src="./images/edit.svg" alt="Edit" class="edit" />
            </button>
          </td>
        </tr>

        <tr>
          <td>1</td>
          <td class="name">
            <input
              type="text"
              disabled="disabled"
              name="person-name-1"
              value="Cameron Williamson"
            />
          </td>
          <td>
            <input
              type="text"
              disabled="disabled"
              name="person-email-1"
              value="cameron.williams@example.com"
            />
          </td>
          <td>
            <input
              type="text"
              disabled="disabled"
              name="person-title-1"
              value="Software Developer"
            />
          </td>
          <td>
            <button class="update" name="person-update-1" id="personUpdate1">
              <img src="./images/update.svg" alt="Update" class="update" />
            </button>
            <button class="edit" name="person-edit-1" id="personEdit1">
              <img src="./images/edit.svg" alt="Edit" class="edit" />
            </button>
          </td>
        </tr>

        <tr class="edit">
          <td>1</td>
          <td class="name">
            <input
              type="text"
              disabled="disabled"
              name="person-name-1"
              value="Cameron Williamson"
            />
          </td>
          <td>
            <input
              type="text"
              disabled="disabled"
              name="person-email-1"
              value="cameron.williams@example.com"
            />
          </td>
          <td>
            <input
              type="text"
              disabled="disabled"
              name="person-title-1"
              value="Software Developer"
            />
          </td>
          <td>
            <button class="update" name="person-update-1" id="personUpdate1">
              <img src="./images/update.svg" alt="Update" class="update" />
            </button>
            <button class="edit" name="person-edit-1" id="personEdit1">
              <img src="./images/edit.svg" alt="Edit" class="edit" />
            </button>
          </td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td colspan="2"> 30 Results </td>
          <td colspan="3">
            <div class="pagination edit">
              <button class="previous" id="previous">
                <img src="./images/chevron--left.svg" alt="Previous" />
              </button>

              <input
                type="text"
                name="currentPage"
                value="1"
                id="currentPage"
              />

              <span>&nbsp;of&nbsp;</span>
              <span id="totalPages">3</span>

              <button class="next" id="next">
                <img src="./images/chevron--right.svg" alt="Next" />
              </button>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

  :root {
    --primary: #363daa;
    --selected: #363daa;
    --unselected: #dde8f7;
  }

  body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Roboto", sans-serif;
  }

  .wrapper {
    width: 1300px;
  }

  th {
    border-bottom: 2px solid black;
    padding: 15px 0;
    padding-right: 12px;
    padding-left: 18px;
    font-size: 18px;
  }

  th.header__id {
    padding-left: 0;
  }

  td {
    border-bottom: 2px solid #dde8f7;
    padding: 5px 0;
  }

  .sort {
    background: none;
    border: none;
    cursor: pointer;
  }

  .sort svg {
    fill: var(--unselected);
  }

  .sort.descending svg .descending,
  .sort.ascending svg .ascending {
    fill: var(--selected);
  }

  th {
    text-align: left;
    font-weight: bold;
    color: var(--primary);
    line-height: 20px;
  }

  td {
    padding-right: 12px;
  }

  input[type="text"],
  input[type="email"] {
    background: none;
    padding: 0 16px;
    height: 55px;
    border-radius: 4px;
    border: none;
    font-size: 18px;
    width: 100%;
    box-sizing: border-box;
  }

  .edit input[type="text"],
  .edit input[type="email"] {
    background: #edf4f9;
  }

  .name input[type="text"] {
    font-weight: bold;
    color: var(--primary);
  }

  .update,
  .edit {
    background: none;
    border: none;
    cursor: pointer;
  }

  .update {
    display: none;
  }

  tr.edit .update {
    display: block;
  }

  tr.edit .edit {
    display: none;
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
  }

  .pagination button {
    background: none;
    border: none;
    cursor: pointer;
  }

  tbody tr:last-child td {
    border-bottom: 2px solid black;
  }

  tfoot td {
    border-bottom: 0;
  }

  tfoot input[type="text"] {
    width: 50px;
    text-align: center;
  }
</style>
