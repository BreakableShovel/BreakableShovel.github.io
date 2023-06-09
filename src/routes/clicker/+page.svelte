<script>
    let numbers = 0;
    let toothPerClick = 1;
    let brushCost = 50;
    let brushes = 0;
    let dentistCost = 150;
    let dentists = 0;
    function clicking() {
        numbers += toothPerClick;
    }
    
    function brushing(){
        if (numbers >= brushCost){
            toothPerClick += 1.5;
            numbers -= brushCost;
            brushCost *= 1.3;
            brushes += 1;
        }
    }
    
    function dentisting(){
        if (numbers >= dentistCost){
            numbers += 10;
            numbers -= dentistCost;
            dentistCost *= 1.4;
            dentists = 1;
            setInterval(function (){
             numbers += 5;
            }, 1000)
        }
    }



</script>
<body>
        <div class="tooth" on:keypress={clicking} on:click={clicking}></div>
        <div class="brush" on:keypress={brushing} on:click={brushing}></div>
        <div class="dentist" on:keypress={dentisting} on:click={dentisting}></div>
        <h1 class="placement">${Math.round(numbers*10)/10}</h1>
        <h2 class="brushnumber">{brushes}</h2>
        <h1 class="brushcost">${Math.round(brushCost)}</h1>
        <p class="brushdescription">Increases clicking power by 1.5$ per brush</p>
        <h2 class="dentistnumber">{dentists}</h2>
        <h1 class="dentistcost">${Math.round(dentistCost)}</h1>
        <p class="dentistdescription">Adds 5$ a second per dentist</p>
    </body>
<style>
    body{
        background: url("https://d.newsweek.com/en/full/2123538/dental-chair-patient-room-slightly-unfocused.jpg");
        background-size: cover;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vmin;
    width: 100vmax;
    overflow: hidden;
    }
    .tooth{
        height: 300px;
        width: 300px;
        background: url("https://cdn.foreversites.com/assets/img/miscgraphics/3d-tooth-single.png");
        background-size: cover;
        background-color: snow;
        background-position-x: -7px;
        background-position-y: -7px;
        border-radius: 50%;
        position: absolute;
        top: 200px; 
        left: 300px;
    }
    .placement{
        position: absolute;
        top: 50px;
        left: 440px;
    }
    .brushnumber{
        position: absolute;
        top: 150px;
        left: 1360px; 
    }
    .brushcost{
        position: absolute;
        top: 100px;
        left: 1340px;
    }
    .brushdescription{
        position: absolute;
        top: 70px;
        left: 1150px;
    }
    .brush{
        position: absolute;
        top: 125px;
        left: 1200px; 
        rotate: -70deg;
        background: url("https://www.colgateprofessional.com/content/dam/cp-sites/oral-care/professional2020/en-us/products/toothbrushes/colgate-360-toothbrush.png");
        background-size: contain;
        background-repeat: no-repeat;
        height: 200px;
        width: 200px;
        
    }
    .dentist{
        position: absolute;
        top: 335px;
        left: 1200px; 
        background: url("https://www.laketownfamilydental.com/assets/images/banner-drs.png");
        background-size: contain;
        background-repeat: no-repeat;
        height: 200px;
        width: 200px;
    }
    .dentistcost{
        position: absolute;
        top: 335px;
        left: 1340px;
    }
    .dentistnumber{
        position: absolute;
        top: 385px;
        left: 1370px;
    }
    .dentistdescription{
        position: absolute;
        top: 300px;
        left: 1180px;
    }
</style>