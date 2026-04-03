


function myFunction() {
    let x = document.getElementById("content-2").innerHTML = "Hello World";
    return x;
}

function changeImage() {
    let x = document.getElementById("image").src = "img/comatozze-2.jpg";
    return x;
}


function changeFont() {
    let x = document.getElementById('change-font');
    x.style.color = "red";
    x.style.fontFamily = "cursive";
    x.style.border = "2px solid black";
   
}

function hideImage() {
    let x = document.getElementById('hide-image').style.display = 'none';
}


function teaseParagraph() {
    let x = document.getElementById('tease-paragraph').innerText = "This is some new <b>text</b>!";
    return x;
}