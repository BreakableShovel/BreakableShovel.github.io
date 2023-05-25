<script>
let start;
let next;

function seen(){
    start.style.opacity="0";
    next.style.opcaity="1";
}

</script>
<body>
    <h2 class="title">A walk in the forest</h2>
    <div class="start">
        <h1 class="lowertext">You are out in the forest taking a walk. Suddenly the path splits and you get a choice to either go left or to go right.</h1>
        <button class="leftbutton" on:click={()=>seen()} >Left</button>
        <button class="rightbutton">Right</button>
        <img class="image" src="https://i.imgflip.com/54d9lj.png?a466224" width="300" height="200">
    </div>
    <div class="left">
        <h1 class="text">You turn left</h1>
        <h2 class="lowertext">The path you've chosen seems to have led to a dark part of the forest. You suddenly hear a loud sound comming from behind you. What do you do?</h2>
        <button class="leftbutton">Run</button>
        <button class="rightbutton">Look behind you</button>
        <img class="image" src="https://i.pinimg.com/originals/26/ae/bb/26aebb9bc69580abb8f98e95b28d52ec.jpg" width="300" height="200">
    </div>
</body>
<style>
    body{
        background-color: darkslategrey;
        background-image: url("https://rare-gallery.com/resol/2560x1440/535229-forest-italy.jpg");
        background-size: cover;
        height: 97vh;
        width: 97vw;
    }

    button:hover{
        color: aquamarine;
    }

   .title{
    position: absolute;
    left: 36%;
    font-size: 50px;
    font-family:fantasy;
    color:rgb(24, 213, 122);
   } 
   .leftbutton{
    position:absolute;
    left:40%;
    top:50%;
   }
   .rightbutton{
    position:absolute;
    left:50%;
    top:50%;
   }
   img{
    position:absolute;
    left:38%;
    top:20%;
    border-radius: 8px;
   }
   .text{
    color:white;
    size: 50%;
    position:absolute;
    left:41%;
    top:50%;
   }
   .lowertext{
    color:white;
    size: 50%;
    position:absolute;
    left:30%;
    top:55%;
    width: 525px;
   }
   .start{
    opacity: 1;
   }
   .left{
    opacity: 0;
   }
   

</style>