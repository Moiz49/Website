var w = new Audio("sounds/snare.mp3");
var a = new Audio("sounds/tom-3.mp3");
var s = new Audio("sounds/tom-1.mp3");
var d = new Audio("sounds/kick-bass.mp3");
var j = new Audio("sounds/tom-2.mp3");
var k = new Audio("sounds/tom-4.mp3");
var l = new Audio("sounds/crash.mp3");

var numOfDrums = document.querySelectorAll(".drum").length;

// for buttons 
for (var i = 0; i < numOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    drum(this.innerHTML);
    animation(this.innerHTML);
  });
}

//for keyboard
document.addEventListener("keydown", function(event) {
  drum(event.key);
  animation(event.key);
})

function drum(key) {
  switch (key) {
    case "w":
      w.play();
      break;
    case "a":
      a.play();
      break;
      
    case "s":
      s.play();
      break;
      
    case "d":
      d.play();
      break;
      
    case "j":
      j.play();
      break;
      
    case "k":
      k.play();
      break;
      
    case "l":
      l.play();
      break;
      
    default:
      break;
  }
}

function animation (key) {
  var Btn = document.querySelector("." + key);
  Btn.classList.add("pressed");
  setTimeout(function() {
    Btn.classList.remove("pressed");
  }, 500);
  
}