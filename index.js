// detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    var buttonInnerHtml = this.innerHTML;

  makeSound(buttonInnerHtml);

  buttonAnimation(buttonInnerHtml);
  });
}
// detecting keyword press
document.addEventListener("keydown",function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "b":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
      break;
      case "e":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
        break;
      case "i":
      var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
          break;
      case "n":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
          break;
      case "o":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
          break;
      case "q":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
            break;
    default: console.log(buttonInnerHtml);

  }
}


function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  },100);
}
