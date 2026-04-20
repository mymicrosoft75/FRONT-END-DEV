
let openModal = document.getElementById("open-modal");
let closeModal = document.getElementById("close-modal");
let overlay = document.getElementById("overlay");

openModal.addEventListener("click", function(){
    overlay.style.display = "block";
})

closeModal.addEventListener("click", function(){
    overlay.style.display = "none";
})