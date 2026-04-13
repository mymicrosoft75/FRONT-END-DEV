// let myCourses = ["CSS", "UI", "Clean"]
// renderArray(myCourses);
// function renderArray(arr){
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i]);
//     }
// }
// let name = "Rahul Das";
// localStorage.setItem("myName", name);
// let fetch = localStorage.getItem("myName");
// console.log(fetch)
//======================================
// let data = [
//     {
//         player: "Jane",
//         score: 52,
//     },
//     {
//         player: "Mark",
//         score: 41,
//     }
// ]

// let getResult = document.getElementById("jane-score");


// getResult.addEventListener("click", function(){
//     for(let i = 0; i < data.length; i++) {
//         if(data[i].player === "Mark"){
//             let score = data[i].score;
//             getResult.innerHTML = score;
//         }
//     }
    
    
// })
//=====================================




let image = [
    "images/employee-1.jpg",
    "images/employee-2.jpg",
    "images/employee-3.jpg",

]

let container = document.getElementById("container");


renderEmployee(image);

function renderEmployee(arr){
    let list = "";

    for(let i = 0; i < arr.length; i++){
        list += `
            <img src="${arr[i]}" class="employee-img">
        `
    }

    container.innerHTML = list;

}