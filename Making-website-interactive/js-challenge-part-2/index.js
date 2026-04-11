
let person = {
    name: "Rahul Das",
    age: 23,
    country: "Bangladesh"
}

function logData(){
    let str = person.name + " is " + person.age + " years old and lives in " + person.country;  
    return str;
}

console.log(logData());



let age = 15;

let message = "";
if(age>0 && age<6){
    message = "Free."
}else if(age>=6 && age< 17) {
    message = "Child discount!"
}else if(age>=17 && age < 27){
    message = "Student discount!"
}else if(age>=27 && age<66){
    message = "Full price."
}else if(age>=66){
    message = "Older citizenship discount."
}else{
    message = "Your age is invalid!!!"
}

console.log(message)

let largeCountries = ["China", "India", "America", "Indonesia", "Pakistan"]

for(let i = 0;i<largeCountries.length;i++){
    console.log("- " + largeCountries[i]);
}


let largeCountriesError = ["Tuvalu", "India", "America", "Indonesia", "Monaco"]
largeCountriesError.pop();
largeCountriesError.push("Pakistan")
largeCountriesError.shift()
largeCountriesError.unshift("China");

console.log(largeCountriesError);


let hands = ["rock", "paper", "scissor"]

let randomNumber = Math.floor(Math.random()*3);



console.log(hands[randomNumber])


let fruits = ["Apple", "Orange", "Apple", "Apple", "Orange"];
let appleShelf = document.getElementById('apple-shelf');
let orangeShelf = document.getElementById('orange-shelf');


function itemSorter(){
    for(let i=0; i<fruits.length;i++) {
        if(fruits[i] === "Apple") {
            appleShelf.textContent += fruits[i];
        }else{
            orangeShelf.textContent += fruits[i];
        }
    }
}

itemSorter();