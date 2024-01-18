
// Detecting Button Press
var noOfDrumButtons = document.querySelectorAll(".drum").length;
for (i = 0; i < noOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    console.log(this.innerHTML); //this gives the innerHTML of the button that was clicked
    //this.style.color = "white"; //this changes the font color of the button that was clicked
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  }
  );
}

// Detecting Keyboard Press
document.addEventListener("keydown", function(event){
  makeSound(event.key);  //event.key gives the key that was pressed
  buttonAnimation(event.key);
});

//function to make sound
function makeSound(key){
  if(key === "w"){
    var audio = new Audio("./sounds/crash.mp3");
    audio.play();
} else if(key === "a"){
    var audio = new Audio("./sounds/kick-bass.mp3");
    audio.play();
} else if(key === "s"){
    var audio = new Audio("./sounds/snare.mp3");
    audio.play();
} else if(key === "d"){
    var audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
} else if(key === "j"){
    var audio = new Audio("./sounds/tom-2.mp3");
    audio.play();
} else if(key === "k"){
    var audio = new Audio("./sounds/tom-3.mp3");
    audio.play();
} else if(key === "l"){
    var audio = new Audio("./sounds/tom-4.mp3");
    audio.play();
} else {
  console.log("No sound for this button");
}
}

//function to animate button
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
// var audio = new Audio("./sounds/tom-1.mp3");
// audio.play();
