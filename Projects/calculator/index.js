
let display = document.getElementById('display');


function number(num) {
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = num;
    } else {
        display.innerText += num;
    }
}

function operator(op) {
    
    if(display.innerText === '0') {
    display.innerText = op === '-' ? '-' : op;
    return;
    }

    let lastChar = display.innerText.slice(-1);
    if(['+' , '-' , '*' , '/'].includes(lastChar)) {
        display.innerText = display.innerText.slice(0, -1) + op;
    } else {
        display.innerText += op;
    }

}

function deleteLast() {
    let current = display.innerText;

    if(current === 'Error') {
        display.innerText = '0';
        return;
    }

    if(current.length === 1) {
        display.innerText = '0';
    }
    else {
        display.innerText = current.slice(0, -1);
    }
}

function decimal(dot) {
    let lastNumber = display.innerText.split(/[\+\-\*\/]/).pop();
    
    if(!lastNumber.includes('.')) {
        display.innerText += dot;
    }
}



function result() {
    
    try {
        let res = eval(display.innerText);
        display.innerText = res === Infinity ? 'Error' : res;
    } catch {
        display.innerText = 'Error';
    }
}






function clearDisplay() {
    display.innerText = '0';
}





// function toggleSign() {
//     let number = display.innerText;
//     display.innerText = (number * -1) ; 
// }