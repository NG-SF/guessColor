let numSquares = [6, 3];
let colors = generateColors(numSquares[0]);

let squares = document.querySelectorAll('.square');

let pickedColor = randomColor();

let feedback = document.getElementById('feedback');

let topDiv = document.querySelector('.top');

let color = document.getElementById('color');

let resetBtn = document.querySelector('#reset');

let hardBtn = document.querySelector('#hard');

let easyBtn = document.querySelector('#easy');

resetBtn.textContent = 'New Colors';

// Easy game mode for 3 colors
easyBtn.addEventListener('click', function() {
  //select easy button
  easyBtn.classList.add('selected');

  // remove selection from hard button
  hardBtn.classList.remove('selected');

  //generate and change colors on page
  colors = generateColors(numSquares[1]);

  //pick a new random color from array
  pickedColor = randomColor();
  color.textContent = pickedColor;
  console.log(colors, pickedColor);
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      // hide 3 botton squares
      squares[i].style.display = 'none';
    }
  }
});

//hard game mode for 6 colors
hardBtn.addEventListener('click', function() {
  //select hard button
  hardBtn.classList.add('selected');

  // remove selection from easy button
  easyBtn.classList.remove('selected');

  //generate and change colors on page
  colors = generateColors(numSquares[0]);

  //pick a new random color from array
  pickedColor = randomColor();
  color.textContent = pickedColor;

  //show all squares with new colors
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = 'block';
  }
});

resetBtn.addEventListener('click', function() {
  //generate and change colors on page
  colors = generateColors(numSquares[0]);

  //pick a new random color form array
  pickedColor = randomColor();
  color.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    //assign colors to squares
    squares[i].style.backgroundColor = colors[i];
  }
  topDiv.style.backgroundColor = 'steelblue';
  this.textContent = 'New Colors';
  feedback.textContent = '';
});

color.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  //assign colors to squares
  squares[i].style.backgroundColor = colors[i];

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
  });
}

function changeColors(color) {
  //loop through all squares and change colors
  //to match correct color
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function randomColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateColors(num) {
  //make an array
  let arr = [];
  //add num random colors to array
  for (let i = 0; i < num; i++) {
    arr.push(randomColorPicker());
  }
  return arr;
}

function randomColorPicker() {
  //pick red color from 0 to 255
  let red = Math.floor(Math.random() * 256);
  //pick green color from 0 to 255
  let green = Math.floor(Math.random() * 256);
  //pick blue color from 0 to 255
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
