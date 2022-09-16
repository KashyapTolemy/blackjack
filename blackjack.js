let firstCardp1
let secondCardp1
let nextCardp1
let firstCardp2
let secondCardp2
let nextCardp2
let sump1 = 0
let sump2 = 0
let message = ""

let message_el = document.getElementById("message-El")
let card_elp1 = document.getElementById("card-elp1")
let sum_elp1 = document.getElementById("sum-elp1")
let card_elp2 = document.getElementById("card-elp2")
let sum_elp2 = document.getElementById("sum-elp2")
message_el.style.transitionDuration = "2s"
card_elp1.textContent=""
sum_elp1.textContent=""
card_elp2.textContent=""
sum_elp2.textContent=""
let cardarrp1 = []
let cardarrp2 = []

let newCardBtn = document.querySelector('.newCard')
newCardBtn.style.visibility = 'hidden'
let passBtn = document.querySelector('.pass')
passBtn.style.visibility = 'hidden'


function lost(){
  message = "You lost :( . Wanna try again?"
  newCardBtn.style.visibility = 'hidden'
  passBtn.style.visibility = 'hidden'
}
function won(){
  message = " Wohoo!! You Won !"
  newCardBtn.style.visibility = 'hidden'
  passBtn.style.visibility = 'hidden'
}
function draw_pass(){
  message = "Would u like to draw a card or pass?"
  newCardBtn.style.visibility = 'visible'
  passBtn.style.visibility = 'visible'
}
function draw(){
  message ="Game drawn. Wanna play again?"
  newCardBtn.style.visibility = 'hidden'
  passBtn.style.visibility = 'hidden'
}
function startgame(){
  firstCardp1 = Math.floor(Math.random()*8) + 2;
  secondCardp1 = Math.floor(Math.random()*8) + 2;
  firstCardp2 = Math.floor(Math.random()*8) + 2;
  secondCardp2 = Math.floor(Math.random()*8) + 2;
  
  sump1 = firstCardp1+secondCardp1;
  sump2 = firstCardp2+secondCardp2;
  
  cardarrp1 = []
  cardarrp1.push(firstCardp1,secondCardp1)
  cardarrp2 = []
  cardarrp2.push(firstCardp2,secondCardp2)
  
  if(sump1<21 && sump2<21 ) draw_pass()
  else if(sump1==21){
    pass() 
    return
  }
  else if(sump2==21) lost()
  else if(sump2>21) won()
  else if(sump1>21) lost()

  // console.log(sump1)
  
  message_el.innerText = message
  card_elp1.innerText = "Cards: "+ firstCardp1 + " " + secondCardp1;
  sum_elp1.innerText = "Sum: "+ sump1;
  card_elp2.innerText = "Opponent Cards: "+ firstCardp2+" "+secondCardp2;
  sum_elp2.innerText = "Sum: "+ sump2;
}
function newcard(){
  nextCardp1 = Math.floor(Math.random()*8)+1;
  // nextCardp2 = Math.floor(Math.random()*11)+1;
  sump1 += nextCardp1;
  // sump2 += nextCardp2;
  cardarrp1.push(nextCardp1);
  // cardarrp2.push(nextCardp2);
  
  if((sump2 > 21 && sump1<21)) won()
  else if(sump1 > 21 || sump2 == 21) lost()

  console.log(message)
  message_el.innerText = message;

  card_elp1.innerText = "Cards: ";
  for(let i =0;i<cardarrp1.length;i++) {
    card_elp1.textContent += cardarrp1[i] +" "
  }
  
  card_elp2.innerText = "Opponent Cards: "
  for(let i =0;i<cardarrp2.length;i++) {
    card_elp2.textContent += cardarrp2[i] +" "
  }
  
  sum_elp1.innerText = "Sum: "+ sump1;
  if(sump1==21){
    pass()
    return
  }
  // sum_elp2.innerText = "Sum: "+ sump2;
}
function pass(){

  while(1) {
    if(sump2 > 21) {
      won()
      message_el.innerText = message
      break
    }
    else if( sump1 < sump2) {
      lost()
      message_el.innerText = message
      break
    }
    else if(sump1==21 && sump2==21){
      draw()
      message_el.innerText =message
      break
    }

    nextCardp2 = Math.floor(Math.random() * 8 ) + 1
    cardarrp2.push(nextCardp2)
    card_elp2.innerText = "Opponent Cards: ";
    for(let i =0;i<cardarrp2.length;i++){
      card_elp2.textContent += cardarrp2[i] + " "
    }
    sump2 += nextCardp2 
    sum_elp2.innerText = "Sum: "+ sump2;
  }
}