var userClickedPattern = [];
var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var started = false;
var level = 0;

$(document).on("keypress", function() {
  if (!started) {
    $("h1").text("Level " + level);
    nextSequence();
    started = true;
  }

});

$(document).on("click", ".btn", function() {
  var eventID = this.id;
  $(this).fadeOut(35).fadeIn(35).fadeOut(35).fadeIn(35);
  makeSound(eventID);
  userClickedPattern.push(eventID);
  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {

      setTimeout(function() {

        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    var wrongSound = new Audio("sounds/wrong.mp3");
    wrongSound.play();
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}




function nextSequence() {
  userClickedPattern = [];
  level++;
  $("h1").text("Level " + level);

  var randomNumber = Math.random();
  randomNumber = Math.round(randomNumber * 3);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  var randomID = "#" + randomChosenColor;
  $(randomID).fadeOut(35).fadeIn(35).fadeOut(35).fadeIn(35);
  makeSound(randomID.slice(1, ));



}





// sound for game

function makeSound(eventID) {
  switch (eventID) {
    case "blue":
      var blueSound = new Audio("sounds/blue.mp3");
      blueSound.play();
      break;

    case "red":
      var redSound = new Audio("sounds/red.mp3");
      redSound.play();
      break;

    case "green":
      var greenSound = new Audio("sounds/green.mp3");
      greenSound.play();
      break;

    case "yellow":
      var yellowSound = new Audio("sounds/yellow.mp3");
      yellowSound.play();
      break;

    default:
      console.log(".");

  }
}

function startOver() {

  level = 0;
  gamePattern = [];
  started = false;
}
