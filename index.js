//creating a for loop to make all the button do alert
let drumList = document.querySelectorAll(".drum");
console.log(drumList);
// this is for mouse clicks
for (let i=0;i<drumList.length;i++){
  drumList[i].addEventListener("click",function(){
    var letter =  this.innerHTML;
    makeSound(letter);
    clickShadow(letter);
  });
}

// this function is for keyboard press
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  clickShadow(event.key);

  })
function makeSound(key){
  switch (key) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    case "j":
        var snare1 = new Audio("sounds/snare.mp3");
        snare1.play();
        break;
    case "k":
        var crash1 = new Audio("sounds/crash.mp3");
        crash1.play();
        break;
    case "l":
        var kick1 = new Audio("sounds/kick-bass.mp3");
        kick1.play();
        break;
    default:
        console.log(key);
}};

// new function to give shadow animation when clicked
function clickShadow(variable){
  var activeButton = document.querySelector("."+variable);
  //this will add class "pressed" to document with .w etc class
  activeButton.classList.add("pressed");
  // this will remove pressed with a time delay of 100milli second
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
