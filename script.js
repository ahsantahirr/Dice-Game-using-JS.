let userNumber = document.getElementById("userNumber")
let randomNumber = document.getElementById("randomNumber")
let result = document.getElementById("result")
let turns = document.getElementById("turns")
let win = document.getElementById("win")
let loss = document.getElementById("loss")
let win_loss_message = document.getElementById("win_loss_message")
let play = document.getElementById("play")


var count = 10;
var win_count = 0;
var loss_count = 0;

function tryLuck(user_Number) {
    var random_Number = Math.random() * 6;
    random_Number = Math.ceil(random_Number);

    userNumber.innerText = user_Number;
    randomNumber.innerText = random_Number;
    turns.innerText = count--;
    console.log(count);

    if (user_Number == random_Number) {
        win_count++;
        console.log("youwin");
        result.innerText = "You win"
        result.style.backgroundColor = "green";
        result.style.color = "white";
        win.innerText = win_count;

    } else {
        loss_count++;
        console.log("You loss");
        result.innerText = "You Loss"
        result.style.backgroundColor = "red";
        result.style.color = "white";
        loss.innerText = loss_count;
    }
    checkResult();
}

function checkResult() {
    if (count == 0) {
        if (win_count >= 3) {
            win_loss_message.innerText = "Congratulations! You Won...."
            

        } else {
            win_loss_message.innerText = "You Loss, Try Again..."
        }
        count = 10;
        win_count = 0;
        loss_count = 0;
        loss.innerText = loss_count;
        win.innerText = win_count;
        turns.innerText = count;

    }
 
}
// console.log(turns);
function howTO_play(){
if (play.style.display === "none"){
    play.style.display = "block";
}
else{
    play.style.display ="none"
}
}