let startButton = document.querySelector('.start-button');
let confirmConjugating = document.querySelector('.confirm-conjugating');
let presentConjugationChart = document.querySelector('.present-conjugation-chart');
let body = document.querySelector('body');
let checkbox = document.querySelector('input[id=include-vosotros]');
let gridContainer = document.querySelector('.grid-container');
let vosotros = document.querySelector('.vosotros');
let vosotrosInput1 = document.querySelector('.vosotros-input1');
let vosotrosInput2 = document.querySelector('.vosotros-input2');
let vosotrosInput3 = document.querySelector('.vosotros-input3');
let conjugationInputs = document.querySelectorAll('input');
let accentButton = document.querySelector('#accent-button');
let timerButton = document.querySelector('.timer-button');
let ele = document.querySelector('#stopwatch');
var checkboxChecked = 0;
const mediaQuery = window.matchMedia("(max-width: 500px)");

function resetTimer() {
  clearInterval(timer); // Clear the existing timer
  ele.innerHTML = "00:00"; // Reset the timer display
  startTimer(); // Restart the timer
  console.log('Timer reset');
}

function startTimer() {
  let sec = 0;
  timer = setInterval(() => {
    let minutes = Math.floor(sec / 60);
    let seconds = sec % 60;
    ele.innerHTML = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    sec++;
  }, 1000); // each 1 second
}

function resetInputs() {
  conjugationInputs.forEach(input => input.value = ''); // Clear all input elements
}

timerButton.addEventListener('click', function() {
  resetTimer();
  resetInputs(); // Reset all input elements when the timer button is clicked
});


startButton.addEventListener('click', function() {
  if (checkboxChecked === 1) {
    confirmConjugating.style.display = "none";
    presentConjugationChart.style.display = "block";
    body.style.backgroundColor = "white";
  } else {
    confirmConjugating.style.display = "none";
    presentConjugationChart.style.display = "block";
    body.style.backgroundColor = "white";
    vosotros.style.display = "none";
    vosotrosInput1.style.display = "none";
    vosotrosInput2.style.display = "none";
    vosotrosInput3.style.display = "none";
    gridContainer.style.gridTemplateColumns = "auto auto auto auto auto auto";
  }
  resetTimer(); // Reset the timer when the start button is clicked
});

checkbox.addEventListener('change', function() {
  if (this.checked) {
    checkboxChecked = 1;
    presentConjugationChart.style.display = "none";
    body.style.backgroundColor = "#f5d25f";
    vosotros.style.display = "block";
    vosotrosInput1.style.display = "block";
    vosotrosInput2.style.display = "block";
    vosotrosInput3.style.display = "block";
    gridContainer.style.gridTemplateColumns = "auto auto auto auto auto auto auto";
  } else {
    presentConjugationChart.style.display = "none";
    body.style.backgroundColor = "#f5d25f";
    vosotros.style.display = "none";
    vosotrosInput1.style.display = "none";
    vosotrosInput2.style.display = "none";
    vosotrosInput3.style.display = "none";
    gridContainer.style.gridTemplateColumns = "auto auto auto auto auto auto";
  }
});

startTimer(); // Start the timer when the page loads

const keyMappings = {
  'a': 'á',
  'e': 'é',
  'i': 'í',
  'o': 'ó',
  'u': 'ú',
  'n': 'ñ'
};

conjugationInputs.forEach(function(input) {
  input.addEventListener('keydown', function(e) {
    const pressedKey = e.key.toLowerCase();
    if (keyMappings.hasOwnProperty(pressedKey)) {
      accentButton.textContent = keyMappings[pressedKey];
    } else {
      accentButton.textContent = '';
    }
  });
});

const conjugationKey = {
  'sacar': [
    'saco',
    'sacas',
    'saca',
    'sacamos',
    'sacáis',
    'sacan'
  ],
  'comer': [
    'como',
    'comes',
    'come',
    'comemos',
    'coméis',
    'comen'
  ],
  'seguir': [
    'sigo',
    'sigues',
    'sigue',
    'seguimos',
    'seguís',
    'siguen'
  ]
};

const inputsKey = [
  { id: 'yo1-input', key: conjugationKey.sacar[0] },
  { id: 'tu1-input', key: conjugationKey.sacar[1] },
  { id: 'el1-input', key: conjugationKey.sacar[2] },
  { id: 'nos1-input', key: conjugationKey.sacar[3] },
  { id: 'vos1-input', key: conjugationKey.sacar[4] },
  { id: 'ellos1-input', key: conjugationKey.sacar[5] },
  { id: 'yo2-input', key: conjugationKey.comer[0] },
  { id: 'tu2-input', key: conjugationKey.comer[1] },
  { id: 'el2-input', key: conjugationKey.comer[2] },
  { id: 'nos2-input', key: conjugationKey.comer[3] },
  { id: 'vos2-input', key: conjugationKey.comer[4] },
  { id: 'ellos2-input', key: conjugationKey.comer[5] },
  { id: 'yo3-input', key: conjugationKey.seguir[0] },
  { id: 'tu3-input', key: conjugationKey.seguir[1] },
  { id: 'el3-input', key: conjugationKey.seguir[2] },
  { id: 'nos3-input', key: conjugationKey.seguir[3] },
  { id: 'vos3-input', key: conjugationKey.seguir[4] },
  { id: 'ellos3-input', key: conjugationKey.seguir[5] }
];

inputsKey.forEach(inputKey => {
  document.getElementById(inputKey.id).addEventListener('input', function() {
    this.style.color = this.value.toLowerCase() === inputKey.key ? 'green' : 'red';
  });
});


// Fix this evaluation algorithm. It should check all inputs, and should ultimately not rely on the use of a button. 
// Rather, it should check all inputs when the user has finished typing.
// The function should be called every time the user types a character in an input field.
// The function may either evaluate the inputs based on the color of the input fields, or it may check the values of the input fields directly.
// I need to choose which one works best.
// When the user has typed all the correct answers, the algorithm should move to a new page that displays their time and accuracy.
function areAllInputsCorrect() {
  let allCorrect = true;

  inputsKey.forEach(input => {
    const element = document.getElementById(input.id);
    if (element.value.toLowerCase() !== input.key) {
      allCorrect = false;
    }
  });

  return allCorrect;
}

function areAllInputsCorrect() {
  return inputsKey.every(input => {
    const element = document.getElementById(input.id);
    return element.value.toLowerCase() === input.key;
  });
}

function runIfAllInputsCorrect() {
  if (areAllInputsCorrect()) {
    console.log('All inputs are correct!');
    // Example: alert('All inputs are correct!');
  } else {
    console.log('Not all inputs are correct.');
  }
}

document.querySelector('#check-button').addEventListener('click', runIfInputCorrect);