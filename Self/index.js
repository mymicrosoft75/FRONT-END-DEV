
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


function incrementCount() {
    let x = document.getElementById('man-count');
    let count = x.innerHTML;
    count = parseInt(count);
    count += 1;
    document.getElementById('man-count').innerHTML = count;
}

function saveCount() {
    let x = document.getElementById('man-count').innerText;
    document.getElementById('last-counted').innerText = x;
    document.getElementById('man-count').innerText = 0;

    let y = document.getElementById('last-counted').innerText;
        y = parseInt(y);
    let total = document.getElementById('total-counted').innerText;
        total = parseInt(total);
        total = total + y;
    document.getElementById('total-counted').innerText = total;


}

// function addToTotal() {
//     let x = document.getElementById('last-counted').innerText;
//     x = parseInt(x);
//     let total = document.getElementById('total-counted').innerText;
//     total = parseInt(total);
//     total = total + x;
//     document.getElementById('total-counted').innerText = total;
// }





















function resetCount() {
    document.getElementById('man-count').innerText = 0;
    document.getElementById('last-counted').innerText = 0;
    document.getElementById('total-counted').innerText = 0;
}