// Function to add Career Summary entries
document.querySelector(".add-Career").addEventListener("click", function () {
  const careerSummaryContainer = document.querySelector("#Career Summary-container");
  const newEntry = document.createElement("div");
  newEntry.classList.add("Career-summary-entry");
  newEntry.innerHTML = `
    <textarea class="form-control" required></textarea>
    <button type="button" class="btn btn-sm btn-danger remove-Career-summary">-</button>
    <button type="button" class="btn btn-sm btn-format bold-button">B</button>
    <button type="button" class="btn btn-sm btn-format underline-button">U</button>
    <button type="button" class="btn btn-sm btn-format italic-button">I</button>
  `;
  careerSummaryContainer.appendChild(newEntry);
});

// Function to remove Career Summary entries
document.querySelector("#Career Summary-container").addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-Career-summary")) {
    event.target.parentElement.remove();
  }
});

// Function to add Experience entries
document.querySelector(".add-experience").addEventListener("click", function () {
  const experienceContainer = document.querySelector("#experience-container");
  const newEntry = document.createElement("div");
  newEntry.classList.add("experience-entry");
  newEntry.innerHTML = `
    <textarea class="form-control" required></textarea>
    <button type="button" class="btn btn-sm btn-danger remove-experience">-</button>
  `;
  experienceContainer.appendChild(newEntry);
});

// Function to remove Experience entries
document.querySelector("#experience-container").addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-experience")) {
    event.target.parentElement.remove();
  }
});

// Function to add Languages entries
document.querySelector(".add-languages").addEventListener("click", function () {
  const languagesContainer = document.querySelector("#languages-container");
  const newEntry = document.createElement("div");
  newEntry.classList.add("languages-entry");
  newEntry.innerHTML = `
    <textarea class="form-control" required></textarea>
    <button type="button" class="btn btn-sm btn-danger remove-languages">-</button>
  `;
  languagesContainer.appendChild(newEntry);
});

// Function to remove Languages entries
document.querySelector("#languages-container").addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-languages")) {
    event.target.parentElement.remove();
  }
});

// Function to add Skills entries
document.querySelector(".add-skills").addEventListener("click", function () {
  const skillsContainer = document.querySelector("#skills-container");
  const newEntry = document.createElement("div");
  newEntry.classList.add("skills-entry");
  newEntry.innerHTML = `
    <textarea class="form-control" required></textarea>
    <button type="button" class="btn btn-sm btn-danger remove-skills">-</button>
  `;
  skillsContainer.appendChild(newEntry);
});

// Function to remove Skills entries
document.querySelector("#skills-container").addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-skills")) {
    event.target.parentElement.remove();
  }
});

// Function to print the resume
document.querySelector("#print-button").addEventListener("click", function () {
  const printContents = document.querySelector(".container").innerHTML;
  const originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
});
