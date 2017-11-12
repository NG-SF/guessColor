let colors = generateColors(6);

let squares = document.querySelectorAll('.square');

let pickedColor = randomColor();

let feedback = document.getElementById('feedback');

let topDiv = document.querySelector('.top');

let color = document.getElementById('color');
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
    } else {
      this.style.backgroundColor = '#232323';
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
