'use strict';

////////// VARIABLES

const select = document.querySelector('.js_select');
// const defaultOption = document.querySelector('.js_defaultOption');
const btn = document.querySelector('.js_btn');
const btn2 = document.querySelector('.js_btn-2');
const result = document.querySelector('.js_result');

const gamerScore = document.querySelector('.js_gamerScore');
const computerScore = document.querySelector('.js_computerScore');

const imageComputer = document.querySelector('.img-computer');
const imageUser = document.querySelector('.img-gamer');
let computerSelection = document.querySelector('.js_computer-selection');
let userSelection = document.querySelector('.js_gamer-selection');

let gamer = 0;
let computer = 0;
let moves = 0;

////////// FUNCIONES BATALLA

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function getRandomOpponent() {
  let random = getRandomNumber(5);
  let race = '';
  let force = 0;

  if (random === 1) {
    force = 2;
    race = 'Sureños malos';
    computerSelection.innerHTML = race;
    imageComputer.src = './img/undefined.jfif';
    return force;
  } else if (random === 2) {
    force = 2;
    race = 'Orcos';
    computerSelection.innerHTML = race;
    imageComputer.src = './img/orco.webp';
    return force;
  } else if (random === 3) {
    force = 2;
    race = 'Goblins';
    computerSelection.innerHTML = race;
    imageComputer.src = './img/goblins.jpeg';
    return force;
  } else if (random === 4) {
    force = 3;
    race = 'Huargos';
    computerSelection.innerHTML = race;
    imageComputer.src = './img/huargos.webp';
    return force;
  } else {
    force = 5;
    race = 'Trolls';
    computerSelection.innerHTML = race;
    imageComputer.src = './img/trolls.webp';
    return force;
  }
}

function getUserOption() {
  if (select.value === '1') {
    userSelection.innerHTML = 'Pelosos';
    imageUser.src = './img/peloso.webp';
  } else if (select.value === '2') {
    userSelection.innerHTML = 'Sureños buenos';
    imageUser.src = './img/undefined.jfif';
  } else if (select.value === '3') {
    userSelection.innerHTML = 'Enanos';
    imageUser.src = './img/enano.webp';
  } else if (select.value === '4') {
    userSelection.innerHTML = 'Númenóreanos';
    imageUser.src = './img/undefined.jfif';
  } else {
    userSelection.innerHTML = 'Elfos';
    imageUser.src = './img/elfos.webp';
  }
  return parseInt(select.value);
}

function battle(optionUser, optionComputer) {
  if (optionUser > optionComputer) {
    result.innerHTML = 'Minipunto para el Ejército del Bien';
    gamer++;
    gamerScore.innerHTML = gamer;
  } else if (optionUser < optionComputer) {
    result.innerHTML = 'Minipunto para el Ejército del Mal.';
    computer++;
    computerScore.innerHTML = computer;
  } else {
    result.innerHTML = 'Empate.';
  }
}

function gameOver() {
  moves++;
  if (moves === 10) {
    btn.classList.add('hidden');
    btn2.classList.remove('hidden');
    if (gamer > computer) {
      result.style.color = 'white';
      result.style.backgroundColor = 'green';
      result.innerHTML =
        'Has ganado la guerra y evitado que el mal reine! Enhorabuena :)';
    } else if (computer > gamer) {
      result.innerHTML = 'Has perdido la guerra y el mal ha reinado :(';
      result.style.color = 'white';
      result.style.backgroundColor = 'red';
    } else {
      result.innerHTML =
        'Empate, la Tierra Media sigue en guerra, inténtalo de nuevo';
      result.style.color = 'white';
      result.style.backgroundColor = 'orange';
    }
  }
}

// FUNCIONES RESET

// function selectDefault() {
//   defaultOption.selected = true;
// }

function resetImg() {
  imageUser.src = './img/random.jfif';
  imageComputer.src = './img/random.jfif';
}

function defaultMsj() {
  result.innerHTML = '¡Comienza la batalla!';
  userSelection.innerHTML = '';
  computerSelection.innerHTML = '';
  result.style.color = 'black';
  result.style.backgroundColor = 'bisque';
}

function resetScore() {
  gamer = 0;
  computer = 0;
  moves = 0;
  gamerScore.innerHTML = gamer;
  computerScore.innerHTML = computer;
}

function resetBtn() {
  btn.classList.remove('hidden');
  btn2.classList.add('hidden');
}

/////////////HANDLES FUNCTIONS

function handleClick(event) {
  event.preventDefault();
  const optionUser = getUserOption();
  const optionComputer = getRandomOpponent();
  battle(optionUser, optionComputer);
  gameOver();
}

function handleReset(event) {
  event.preventDefault();
  // selectDefault();
  defaultMsj();
  resetScore();
  resetBtn();
  resetImg();
}

/////////////EVENTS

btn.addEventListener('click', handleClick);
btn2.addEventListener('click', handleReset);
