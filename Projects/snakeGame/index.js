const grid = document.querySelector('.grid');
const startButton  = document.querySelector('#start')
const score = document.getElementById("score")


let squares = []
let currentSnake = [12,11,10]
let direction = 1
const width = 10;
let appleIndex = 0;
let points = 0;

let timeInterval = 1000;
let speed = 0.8;







function createGrid() {
    for(let i = 0; i < width*width; i++) {
        const square = document.createElement('div')
        square.classList.add("square")
        grid.appendChild(square)
        squares.push(square)
    }


}

startButton.addEventListener("click", function(){
    let squares = []
    let currentSnake = [12,11,10]
    let direction = 1
    score.innerText = 0;
    move();
})



createGrid();

currentSnake.forEach(index => squares[index].classList.add('snake'))

function move(){
    if(
        (currentSnake[0] + width >= width*width && direction === width) ||
        (currentSnake[0] - width < 0 && direction === -width) ||
        (currentSnake[0] % width === 0 && direction === -1) ||
        (currentSnake[0] % width === width-1 && direction === 1) ||
        (squares[currentSnake[0] + direction].classList.contains('snake'))
    ){
        return clearInterval(timerId);
    }

    const tail = currentSnake.pop();
    squares[tail].classList.remove('snake')
    console.log(currentSnake)
    currentSnake.unshift(currentSnake[0] + direction)
    console.log(currentSnake)


    if(squares[currentSnake[0]].classList.contains('apple')) {

        squares[currentSnake[0]].classList.remove('apple')
        squares[tail].classList.add('snake')
        console.log(tail)
        currentSnake.push(tail)
        console.log(tail)
        generateApples();
        points += 1;
        score.innerText = points;
        //speed up the snake
        clearInterval(timerId);
        timeInterval = Math.max(200,timeInterval * speed);
        timerId = setInterval(move, timeInterval)

    }

    squares[currentSnake[0]].classList.add('snake')
}

// move();
let timerId = setInterval(move, timeInterval)

function randomNumber() {
    return Math.floor(Math.random() * width*width)
}
function generateApples() {
    do {
        appleIndex = randomNumber();
        
    } while(squares[appleIndex].classList.contains('snake'));
    
    squares[appleIndex].classList.add('apple')
    
}

generateApples();



//39 is right arrow
//38 is up arrow
//37 is left arrow
//40 is down arrow


function control(e) {
    if(e.keyCode === 39 && direction !== -1){
         console.log("right arrow clicked")
        direction = 1;
    } else if(e.keyCode === 38 && direction !== width) {
         console.log("up arrow clicked")
        direction = -width;
    } else if(e.keyCode === 37 && direction !== 1) {
        direction = -1;
        console.log("left arrow clicked")
    } else if(e.keyCode === 40 && direction !== -width) {
        direction = +width;
        console.log("down arrow clicked")
    }
}

document.addEventListener('keyup', control)


