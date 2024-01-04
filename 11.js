
let runAgain = true;

let sign = ["S", "w", "G"];

while(runAgain){ 
    
    let userSign = prompt("please type the first letter of the power you want to play : ")
    console.log(sign[Math.floor(Math.random() * 3)])
    

    alert("opponent's power: ", result);

if(result == "S"){
    if(userSign == "W"){
        alert("you loose");
        runAgain = confirm("do you want to play again? ");
        break;
    }
    else if(userSign == "G" ){
        alert("you win");
        break;
    }
    else{
        runAgain = confirm("do you want to play again? ");
    }
}

if(result == "W"){
    if(userSign == "G"){
        alert("you loose");
        runAgain = confirm("do you want to play again? ");
        break;
    }
    else if(userSign == "S" ){
        alert("you win");
        break;
    }
    else{
        runAgain = confirm("do you want to play again? ");
    }
}

if(result == "G"){
    if(userSign == "S"){
        alert("you loose");
        runAgain = confirm("do you want to play again? ");
        break;
    }
    else if(userSign == "W" ){
        alert("you win");
        break;
    }
    else{
        runAgain = confirm("do you want to play again? ");
    }
}

}