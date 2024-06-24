let countEl = document.getElementById("count-el")
let savebtn = document.getElementById("save-btn")
let welcomeLabel = document.getElementById("welcome-el")
let previousLabel = document.getElementById("previous")

let name1 = "Ha"
let greeting = "Hello"

let saveCounter = "Previous entry : "

let count = 0
welcomeLabel.textContent = greeting + " " + name1

welcomeLabel.textContent += "😛"
function increment()
{
    console.log("The button is click");
    count = count + 1
    countEl.textContent = count
}

function save()
{
    saveCounter += count + " - "
    previousLabel.textContent = saveCounter
    count = 0
    countEl.textContent = count
}


let lap1 = 1
let lap2 = 2
let lap3 = 3

function sum(lap4,lap5,lap6)
{
    let totalTime = lap1 + lap5 + lap6
    console.log(totalTime);
}

sum(4,5,6)


// create a variable myAge, and set it value to a number

// let myAge = 35

// // print myAge

// console.log(myAge);