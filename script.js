function die() {
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    var randomDiceImage = "images/dice" + randomNumber1 + ".png";
    var image1 = document.querySelectorAll("img")[0];
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
    var image2 = document.querySelectorAll("img")[1];
    image1.setAttribute("src", randomDiceImage);
    image2.setAttribute("src", randomDiceImage2);

    if (randomNumber1 > randomNumber2) {
        document.getElementById("demo").innerHTML = "🚩 player 1 wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.getElementById("demo").innerHTML = "player 2 wins! 🚩";
    } else {
        document.getElementById("demo").innerHTML = "Tie!";
    }

}