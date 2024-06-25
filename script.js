let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")


let sum = 0
let cards = []
let isAlive = false
let hasBlackjack = false

function randomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1
    if(randomCard > 10){
        return 10
    } else if (randomCard === 1){
        return 11
    } else {
        return randomCard
    }
}

function start(){
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    rendergame()
}

function rendergame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + "  "
    }
    sumEl.textContent = "Sum : " + sum
    if(sum < 21){
        messageEl.textContent = "let's draw a new Card..."
    } else if(sum === 21){
        messageEl.textContent = "wohooooo!! you've got a Blackjack!"
        hasBlackjack = true
    } else{
        messageEl.textContent = "Oh no! You are out of the Game!"
        isAlive = false
    }
}

function  newCard(){
    if( isAlive === true && hasBlackjack === false){
        let newCard = randomCard()
        sum += newCard
        cards.push(newCard)
        rendergame()
    } 
}
