
let display = document.getElementById('display');


function number(num) {
    if (display.innerText === '0') {
        display.innerText = num;
    } else {
        display.innerText += num;
    }
}

function operator(op) {
    let lastChar = display.innerText.slice(-1);
    if(['+' , '-' , '*' , '/' , '√'].includes(lastChar)) {
        display.innerText = display.innerText.slice(0, -1) + op;
    } else {
        display.innerText += op;
    }

}

function deleteLast() {
    let current = display.innerText;

    if(current.length === 1) {
        display.innerText = '0';
    }
    else {
        display.innerText = current.slice(0, -1);
    }
}

function result() {
    display.innerText = eval(display.innerText);
}






function clearDisplay() {
    display.innerText = '0';
}


function toggleSign() {
    let number = display.innerText;
    display.innerText = (number * -1) ; 
}