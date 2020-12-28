var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = new Array();
var userClickedPattern = new Array();
var game = false;
var level = 0;
var input = 0;

var red = new Audio("sounds/red.mp3");
var blue = new Audio("sounds/blue.mp3");
var green = new Audio("sounds/green.mp3");
var yellow = new Audio("sounds/yellow.mp3");
var wrong = new Audio("sounds/wrong.mp3");

$(document).on("keydown", function(e) {
  if (game == false && (e.key == "a" || e.key == "A")){
    game = true;
    level = 0;
    input = 0;
    userClickedPattern = new Array();
    gamePattern = new Array();
    nextSequence();
  }
});

$(".btn").on("click", function() {
  if (game == true) {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    input++;
    checkAnswer();
  }
});

function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  animatePress(randomChosenColour);
  playSound(randomChosenColour);
}

function checkAnswer() {
  for(var i = 0; i < input; i++){
    if(gamePattern[i] != userClickedPattern[i]) {
      console.log("wrong");
      restart();
    }
    else
      console.log("correct");
  }
  if (input == level && game == true){
    input = 0;
    userClickedPattern = new Array();
    setTimeout(function(){
      nextSequence();
    }, 1000);
  }
}

function restart() {
  game = false;
  $("#level-title").text("Game Over");
  wrong.play();
  setTimeout(function(){
    $("#level-title").text("Press A Key to Start");
  }, 3000);
}

function animatePress(colour) {
  $("#" + colour).addClass("pressed");
  setTimeout(function(){
    $("#" + colour).removeClass("pressed");
  }, 150);
}

function playSound(colour) {
    switch (colour) {
    case "red":
      red.play();
      break;

    case "blue":
      blue.play();
      break;
    
    case "green":
      green.play();
      break;

    case "yellow":
      yellow.play();
      break;  
    
    default:
      break;
  }
}

