let saveBtn = document.getElementById("save-btn");
let inputEl = document.getElementById("input-el");
let deleteBtn = document.getElementById("delete-btn");
let ulEl = document.getElementById("ul-el");
let tabBtn = document.getElementById("tab-btn");

let myLeads = [];

saveBtn.addEventListener("click", function () {
  if (inputEl.value != "") {
    myLeads.push(inputEl.value);
  }
  let item = JSON.stringify(myLeads);
  localStorage.setItem("myLinks", item);
  renderDisplay(myLeads);
  inputEl.value = "";
});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.removeItem("myLinks");
  myLeads = [];
  renderDisplay(myLeads);
});

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLinks", JSON.stringify(myLeads));
    renderDisplay(myLeads);
  });

});

function renderDisplay(leads = []) {
  //can use leads = myLeads or leads = []
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                ${i + 1}.
                <a href='${leads[i]}' target="_blank">${leads[i]}</a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLinks"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
}

window.addEventListener("load", function () {
  renderDisplay(myLeads);
});
