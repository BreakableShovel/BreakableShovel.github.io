<script>
let images = [
  "/image1.png",
  "/image2.png",
  "/image2.png",
  "/image3.png",
  "/image3.png",
  "/image1.png",
  "/image5.png",
  "/image5.png",
  "/image6.png",
  "/image6.png",
  "/image7.png",
  "/image7.png",
];

let cards = [];

for (let index = 0; index < 12; index++) {
  cards.push({
    id: index,
    img: images[index],
    flipped: false,
    completed: false,
  });
}

shuffle(cards);

let flipcount = 0;
function flip(card) {
  // flip card over if two cards are not already flipped
  // TODO: and card is already not flipped
  if (!card.flipped && flipcount < 2) {
    card.flipped = !card.flipped;
    flipcount ++;
    // TODO: Probably do what?
    // flip the cards over after 2s from seeing both cards
    if (flipcount == 2) {
      let flipped = [];
      cards.forEach(card=>{
        if(card.flipped && !card.completed){
          flipped.push(card);
        }
      })
      if(flipped[0].img == flipped[1].img){
        flipped[0].completed = true;
        flipped[1].completed = true;
      }
      console.log(flipped);

      setTimeout(() => {
        // flip over cards that have not been marked as "completed"
        cards.forEach((card) => {
          card.flipped = card.completed;
        });
        flipcount = 0;
        cards = cards;
      }, 2000);
    }
    cards = cards;
  }
}

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i+1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
  </script>
  
  <main>
    <div class="row">
      {#each cards as card, i}
        <div
          on:click={() => {
            flip(card);
          }}
          on:keypress={() => {
            flip(card);
          }}
          class:flipped={card.flipped}
          class="card"
        >
          <img class="front" src={card.img} alt="" />
          <img class="back" src="Backgroundimage.png" alt="" />
        </div>
      {/each}
    </div>
  </main>
  
  <style>

    

    main {
      margin-top: 50px;
      display: flex;
      place-content: center;
      place-items: center;
      height: 90vh;
      width: 95vw;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      background-image: url("https://cdn.winknews.com/wp-content/uploads/2020/09/hypatia-h_ef8c46a5170a6984400c6c54e8849d8b-h_4ecf25488262a64d663658c7ddb29c8a.jpg.jpg?w=150&h=150&crop=1");
      background-color: black;
    }
    .row {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: repeat(4, 100px);
    }
    .card {
      border: 1px solid black;
      cursor: pointer;
      transition: transform 1s;
      transform-style: preserve-3d;
      width: 100%;
      height: 100%;
      border-radius: 11px;
    }
    .card.flipped {
      transform: rotateY(180deg);
    }
    .card .back {
      transform: rotateY(0deg);
    }
    .card .front {
      transform: rotateY(180deg);
    }
    .card img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      position: absolute;
    }


  </style>