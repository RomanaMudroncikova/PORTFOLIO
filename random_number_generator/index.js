//input button p
let min = 100;
let max = 1000;
let number = Math.floor(Math.random() * (max - min) + min);

console.log(number);

let tip;
     document.getElementById("button").onclick  = function(){
    tip = Number(tip);
    tip = document.getElementById("input").value;
    console.log(tip);
   
    if(number == tip){
        document.getElementById("p").textContent = "Congratulations - you won";
    }
    else if(number > tip){
        document.getElementById("p").textContent = "Guess a highter";
    }
    else if(number < tip){
        document.getElementById("p").textContent = "Guess a lower";
    }
}
