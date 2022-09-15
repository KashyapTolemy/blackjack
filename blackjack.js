let firstCard
let secondCard
let nextCard
let sum = 0
let message = ""

let message_el = document.getElementById("message-El")
let card_el = document.getElementById("card-el")
let sum_el = document.getElementById("sum-el")

let cardarr = []

let newCardBtn = document.querySelector('.newCard')
newCardBtn.style.visibility = 'hidden'

function startgame(){
    firstCard = Math.floor(Math.random()*9) + 2;
    secondCard = Math.floor(Math.random()*9) + 2;
    
    sum = firstCard+secondCard;
    
    cardarr = []
    cardarr.push(firstCard,secondCard)
    
    if(sum<21){
        message ="Would u like to draw a card?"
        newCardBtn.style.visibility = 'visible'

    }    
    else if(sum==21){
        message ="Congrats You won!!"
        newCardBtn.style.visibility = 'hidden'
    }
    else{
    message = " You lost"
    newCardBtn.style.visibility = 'hidden'
    }
      console.log(sum)
      message_el.innerText = message;
      card_el.innerText = "Cards: "+ firstCard+" "+secondCard;
      sum_el.innerText = "Sum: "+ sum;
    }

function newcard(){
      nextCard = Math.floor(Math.random()*10)+2;
      sum = sum+ nextCard;
      cardarr.push(nextCard);
      if(sum<21){
        message ="Would u like to draw a card?"
        newCardBtn.style.visibility = 'visible'
      }    
      else if(sum==21){
        message ="Congrats You won!!"
        newCardBtn.style.visibility = 'hidden'
      }
      else{
        message =" You lost"
        newCardBtn.style.visibility = 'hidden'
        
      }
      console.log(message)
      message_el.innerText = message;
      card_el.innerText = "Cards: ";
      for(let i =0;i<cardarr.length;i++)
      {
        card_el.textContent += cardarr[i] +" "

      }

      sum_el.innerText = "Sum: "+ sum;

}
    