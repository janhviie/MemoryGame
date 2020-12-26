document.addEventListener('DOMContentLoaded', () =>{


  const Arraycards= [
    {
      name: "burger",
      img: "images/burger.png"
    },
    {
      name: "burger",
      img: "images/burger.png"
    },
    {
      name: "coke",
      img: "images/coke.png"
    },
    {
      name: "coke",
      img: "images/coke.png"
    },
    {
      name: "frenchFries",
      img: "images/frenchFries.png"
      },

        {
          name: "frenchFries",
          img: "images/frenchFries.png"
        },
        {
          name: "pizza",
          img: "images/pizza.png"
        },
        {
          name: "pizza",
          img: "images/pizza.png"
        },
        {
          name: "nachos",
          img: "images/nachos.png"
        },
        {
          name: "nachos",
          img: "images/nachos.png"
        },
        {
          name: "hotDog",
          img: "images/hotDog.png"
        },
        {
          name: "hotDog",
          img: "images/hotDog.png"
        }
    ]


Arraycards.sort(() =>0.5 - Math.random())

  const butn=document.createElement("button");
  butn.textContent="Play Again";
  butn.addEventListener('click', function(){

    					location.reload();

  });


const grid=document.querySelector('.grid');
  var resultDisplay = document.querySelector('#result');
  const score=document.querySelector('#score');

  document.body.appendChild(butn);

  var i;
  var cardChosen=[];
  var cardChosenId=[];
  var cardsWon=[];

createBoard();

function createBoard(){

for(i=0;i<Arraycards.length;i++){
  var card=document.createElement('img');
  card.setAttribute('class', 'responsive');
  card.setAttribute('src', 'blank.png');
  card.setAttribute('data-id', i);


  card.addEventListener('click', flipcard);
  grid.appendChild(card);
}
}

// flip card after mouse click
function flipcard(){
  var cardId=this.getAttribute('data-id');
  cardChosenId.push(cardId);
  cardChosen.push(Arraycards[cardId].name);
  this.setAttribute('src', Arraycards[cardId].img);
  if(cardChosen.length === 2){
    setTimeout(checkForMatch, 400)
  }
}

// check for Match

function checkForMatch(){
var cards = document.querySelectorAll('img');
cardone=cardChosenId[0];
cardtwo=cardChosenId[1];


if(cardChosen[0] === cardChosen[1]){

  alert('You have found a match !');
  cards[cardone].setAttribute('src', 'images/white.png');
  cards[cardtwo].setAttribute('src', 'images/white.png');
  cardsWon.push(cardChosen);

}
else{
  cardsWon.pop(cardChosen);
  cards[cardone].setAttribute('src', 'images/blank.png');
  cards[cardtwo].setAttribute('src', 'images/blank.png');
  alert('Sorry, try again.')
}
cardChosen =[];
cardChosenId=[];
resultDisplay.textContent = cardsWon.length;
if(cardsWon.length === Arraycards.length/2){
  alert("You've matched all cards")


}
}


})
