var numSquares = 6;
var colours = [];
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      
      reset();
    });
  } 
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    // add click listeners to   squares
    squares[i].addEventListener("click", function() {
      // grab clicked colour
      var clickedColour = this.style.backgroundColor;
      // compare with picked colour
      if (clickedColour === pickedColour) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColours(clickedColour);
        h1.style.backgroundColor = clickedColour;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset() {
  // generate all new colours
  colours = generateRandomColours(numSquares);
  // pick a new random colours from aray
  pickedColour = pickColour();
  // change colour display to match picked colour
  colourDisplay.textContent = pickedColour;

  resetButton.textContent = "New Colours";

  messageDisplay.textContent = "";
  // change colours of square
  for (var i = 0; i < squares.length; i++) {

    if (colours[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colours[i];
      
    } else {
      squares[i].style.display = "none"
    }
  }
  h1.style.backgroundColor = "rgb(21, 137, 233)";
}

resetButton.addEventListener("click", function() {
  reset()
});

function changeColours(colour) {
  // loop through all squares
  for (var i = 0; i < squares.length; i++) {
    // change colours to match each given colours
    squares[i].style.backgroundColor = colour;
  }
}

function pickColour() {
  var random = Math.floor(Math.random() * colours.length);
  return colours[random];
}

function generateRandomColours(num) {
  //make an array
  var arr = [];
  // repeat num titmes
  for (var i = 0; i < num; i++) {
    // get random colour && push into array
    arr.push(randomColours());
  }
  // return that array
  return arr;
}

function randomColours() {
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);

  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);

  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
