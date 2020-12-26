document.addEventListener('DOMContentLoaded', () =>{
   alert('test');
  const text=document.createElement("p");
  text.innerText="Hello";
  document.body.appendChild(text);
  const Arrayimgs[]= [
    {
      name="burger";
      img="images/burger.png"
    },
    {
      name="burger";
      img="images/burger.png"
    },
    {
      name="coke";
      img="images/coke.png"
    },
    {
      name="coke";
      img="images/coke.png"
    },
    {
      name="frenchFries";
      img="images/frenchFries.png"
    },

      {
        name="frenchFries";
        img="images/frenchFries.png"
      },
      {
        name="pizza";
        img="images/pizza.png"
      },
      {
        name="pizza";
        img="images/pizza.png"
      },
      {
        name="nachos";
        img="images/nachos.png"
      },

  ]


const grid=document.querySelector(".grid");
// create board

for (var i = 0; i < Arrayimgs.length; i++) {
  var card=document.createElement('img');
  card.setAttribute('src', "blank.png")
  card.setAttribute('data-id', i)
  // card.addEventListener('click', flipcard())

  grid.appendChild(card);

}
});
