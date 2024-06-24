let firstCard = 11
let secondCard = 10
let cards = []
let messageLabel = document.getElementById("message-el")
let sumLabel = document.querySelector("#sum-el")
let cardLabel = document.querySelector("#cards-el")
let sum = firstCard + secondCard

let message = ""

function startGame()
{
    cards = []
    cardLabel.textContent = "Cards: "
    sumLabel.textContent = "Sum: "
    firstCard = Math.floor(Math.random() * 11 + 1)
    secondCard = Math.floor(Math.random() * 11 + 1)
    cards.push(firstCard)
    cards.push(secondCard)
    cardLabel.textContent += cards[0] + " " + cards[1]
    sum = firstCard + secondCard
    if (sum <= 20)
        {
            message = ("Do you want new card ?")
        }
        else if (sum === 21)
        {
            message = ("You got black Jack !");
            win = true
        }
        else
        {
            message = ("You are out of the game");
            isAlive = false
        }
    messageLabel.textContent = message
    sumLabel.textContent += sum
}

function drawNewCard()
{
    let thirdCard = 0
    thirdCard = Math.floor(Math.random() * 11 + 1)
    cards.push(thirdCard)
    console.log(cards);
    console.log(cards);
    sum += cards[cards.length - 1]
    console.log(thirdCard);
    cardLabel.textContent += " " + cards[cards.length - 1]
    if (sum <= 20)
        {
            message = ("Do you want new card ?")
        }
        else if (sum === 21)
        {
            message = ("You got black Jack !");
            win = true
        }
        else
        {
            message = ("You are out of the game");
            isAlive = false
        }
    messageLabel.textContent = message
    sumLabel.textContent = "Sum: " + sum

    for (let count = 0; count < cards.length ; count += 1)
    {
        console.log(count);
    }
}

let greeting = ["Hello", "I am", "Yap"]
for (let i = 0; i < greeting.length; i+= 1)
{
    messageLabel.textContent += greeting[i] + " "
}