

const emoji = ["👨🏼‍💻", "🌱", "🍲"]

let emojiContainer = document.getElementById("emoji-container");


let heading = ""
for(let i = 0; i < emoji.length; i++) {
    heading += `
    <span> ${emoji[i]} </span>
    `
}

emojiContainer.innerHTML = heading;


let inputEmoji = document.getElementById("input-emoji");
let addStart = document.getElementById("add-start");
let addEnd = document.getElementById("add-end");
let removeStart= document.getElementById("remove-start");
let removeEnd = document.getElementById("remove-end");





addStart.addEventListener("click", function(){
    if(inputEmoji.value){
        emoji.unshift(inputEmoji.value)
        inputEmoji.value = ""
        renderEmoji();
    }
})

addEnd.addEventListener("click", function(){
    if(inputEmoji.value){                 //if(inputEmoji.value)
        emoji.push(inputEmoji.value)
        inputEmoji.value = ""
        renderEmoji();
    }
})

removeStart.addEventListener("click", function(){
    emoji.shift();
    renderEmoji();
})

removeEnd.addEventListener("click", function(){
    emoji.pop();
    renderEmoji();
})



function renderEmoji() {
    heading = "";
    for(let i = 0; i < emoji.length; i++){
        heading += `
        <span>    ${emoji[i]}   </span>
        `
    }
    emojiContainer.innerHTML = heading;
}



