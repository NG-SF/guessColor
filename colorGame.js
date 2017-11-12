let numSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll('.square');
let feedback = document.getElementById('feedback');
let topDiv = document.querySelector('.top');
let color = document.getElementById('color');
let resetBtn = document.querySelector('#reset');
let modeBtns = document.querySelectorAll('.mode');

start();

function start() {
  selectedMode();
  setUp();
  reset();
} // end of start function

//responsible for selecting mode of the Game
function selectedMode() {
  //modeBtns eventListeners
  for (let i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener('click', function() {
      //removing selected class from all buttons
      modeBtns[0].classList.remove('selected');
      modeBtns[1].classList.remove('selected');

      //adding selected class to clicked button
      this.classList.add('selected');

      //figure out how many squares to show
      //depending on what button user clicked
      this.textContent === 'Easy' ? (numSquares = 3) : (numSquares = 6);
      reset();
    }); // end of eventListener for modeBtns
  } // end of for loop
} //end of function selectedMode

//responsible for setting up game in hard mode by default
function setUp() {
  for (let i = 0; i < squares.length; i++) {
    //add click listener
    squares[i].addEventListener('click', function() {
      //find color of clicked square
      let clickedColor = this.style.backgroundColor;
      //compare it to pickedColor
      if (clickedColor === pickedColor) {
        feedback.textContent = 'Correct!';
        changeColors(clickedColor);
        topDiv.style.backgroundColor = clickedColor;
        resetBtn.textContent = 'Play again?';
      } else {
        this.style.backgroundColor = '#dcdcdc';
        feedback.textContent = 'Try again';
      }
    }); //end of eventListener for squares
  } //end of for loop
} //end of function setUp

//controls reseting the page
function reset() {
  //generate and change colors on page
  colors = generateColors(numSquares);

  //pick a new random color form array
  pickedColor = randomColor();

  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      // show all squares
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      // hide 3 bottom squares for easy mode
      squares[i].style.display = 'none';
    }
  } // end of for loop
  color.textContent = pickedColor;
  topDiv.style.backgroundColor = 'steelblue';
  resetBtn.textContent = 'New Colors';
  feedback.textContent = '';
} // end of reset function

//responsible for resetting the game
//when new colors button is clicked
resetBtn.addEventListener('click', function() {
  reset();
});

//responsible for changing all square colors
// to correct color
function changeColors(color) {
  //loop through all squares and change colors
  //to match correct color
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

//responsible for choosing random color
// that should be guessed
function randomColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//responsible for generating array of
//color choices
function generateColors(num) {
  //make an array
  let arr = [];
  //add num random colors to array
  for (let i = 0; i < num; i++) {
    arr.push(randomColorPicker());
  }
  return arr;
}

//responsible for generating rgb color
function randomColorPicker() {
  //pick red color from 0 to 255
  let red = Math.floor(Math.random() * 256);
  //pick green color from 0 to 255
  let green = Math.floor(Math.random() * 256);
  //pick blue color from 0 to 255
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
