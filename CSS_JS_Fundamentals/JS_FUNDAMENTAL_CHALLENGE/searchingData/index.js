let userInput = document.getElementById("user-input");
let allDistrict = document.getElementsByClassName("district");
let list = document.getElementById("name-list");


userInput.addEventListener("click", function(e){
    list.style.display = 'list-item'
    list.style.listStyleType = 'decimal'
})

document.addEventListener("click", function(e){
    if (!userInput.contains(e.target) && !list.contains(e.target)) {
        list.style.display = "none";
    }
});


userInput.addEventListener("keyup", function (event) {

  let userDistrict = event.target.value.toLowerCase();
  console.log(userDistrict);

  for (let i = 0; i < allDistrict.length; i++) {
    let currentInput = allDistrict[i].textContent.toLowerCase();
    if (currentInput.includes(userDistrict)) {
      allDistrict[i].style.display = "block";
    } else {
      allDistrict[i].style.display = "none";
    }
  }
});
