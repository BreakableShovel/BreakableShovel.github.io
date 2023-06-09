<script>
    let listan = []  
    let add;

    function adding(){
        listan.push({uppgift:add.value,klar:false});
        listan = listan;
    }


</script>
<body>
    <h1 class="title">To do list</h1>
    <h2 class="todo">To do</h2>
    <input class="text" type="text" placeholder="Write task here" bind:this={add}>
    <button class="Button" on:click={adding} >Add to list</button> 

        <ol class="lists">
            {#each listan as task,i}
            <li style="color:{task.klar ? "red":"blue"}">{task.uppgift}
                <button type="button" on:click={()=>{
                    listan.splice(i,1);
                    listan = listan;
                }} >Delete</button>
                <button type="button" on:click={()=>{
                    task.klar = !task.klar;
                }} >complete</button>
                
                
            </li>
            {/each}
        </ol> 
</body>
<style>
    .todo
    {
        position: absolute;
        left: 20%;
        top: 20%;  
    }
    body{
        background: url("https://img.freepik.com/premium-vector/paper-line_77417-515.jpg?w=2000");
        background-size: cover;
        height: 96vh;
        width: 97vw;
    }

    .text{
        width: 45%;
        position: absolute;
        left: 25%;
        top: 14%
    }

    .title{
        position: absolute;
        left: 42.5%;
    }
    
    .lists{
        position: relative;
        left: 29%;
        top: 21%;
        height: 5%;
        width: 10%;
        transform: translateX(-50%);
        
    }

    li{
        margin-bottom: 5px;
    }

    .Button{
        width: 5%;
        position: absolute;
        left: 65.5%;
        top: 14%;
    }
</style>

