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



/*document.getElementById('yo1-input').addEventListener('input', function() {
  if (this.value.toLowerCase() === firstVerbKey[0]) {
    this.style.color = 'green';
  } else {
    this.style.color = 'black';
  }
});

document.getElementById('tu1-input').addEventListener('input', function() {
  if (this.value.toLowerCase() === firstVerbKey[1]) {
    this.style.color = 'green';
  } else {
    this.style.color = 'black';
  }
});

document.getElementById('el1-input').addEventListener('input', function() {
  if (this.value.toLowerCase() === firstVerbKey[2]) {
    this.style.color = 'green';
  } else {
    this.style.color = 'black';
  }
});

document.getElementById('nos1-input').addEventListener('input', function() {
  if (this.value.toLowerCase() === firstVerbKey[3]) {
    this.style.color = 'green';
  } else {
    this.style.color = 'black';
  }
});

document.getElementById('vos1-input').addEventListener('input', function() {
  if (this.value.toLowerCase() === firstVerbKey[4]) {
    this.style.color = 'green';
  } else {
    this.style.color = 'black';
  }
});

document.getElementById('ellos1-input').addEventListener('input', function() {
  if (this.value.toLowerCase() === firstVerbKey[5]) {
    this.style.color = 'green';
  } else {
    this.style.color = 'black';
  }
});*/

const firstVerbKey = [
  'saco',
  'sacas',
  'saca',
  'sacamos',
  'sacáis',
  'sacan'
]

const inputs = [
  { id: 'yo1-input', key: firstVerbKey[0] },
  { id: 'tu1-input', key: firstVerbKey[1] },
  { id: 'el1-input', key: firstVerbKey[2] },
  { id: 'nos1-input', key: firstVerbKey[3] },
  { id: 'vos1-input', key: firstVerbKey[4] },
  { id: 'ellos1-input', key: firstVerbKey[5] }
];

inputs.forEach(input => {
  document.getElementById(input.id).addEventListener('input', function() {
    this.style.color = this.value.toLowerCase() === input.key ? 'green' : 'red';
  });
});


