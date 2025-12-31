function rollDice() {

    let dice1 = Math.floor(Math.random() * 6) +1;
    let dice2 = Math.floor(Math.random() * 6) +1;

    document.getElementById("dice1").textContent = dice1 ;
    document.getElementById("dice2").textContent = dice2 ;


     let sum = dice1 + dice2;
     let result = "";
    

    if (sum % 2 === 0 ) {
        result = "You Won!"
    } else {
        result = "You Lost"
    }
     
    document.getElementById("result").textContent = result;

}