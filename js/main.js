'use strict';

////////// VARIABLES

const select = document.querySelector('.js_select');
const defaultOption = document.querySelector('.js_defaultOption');
const btn = document.querySelector('.js_btn');
const btn2 = document.querySelector('.js_btn-2');
const result = document.querySelector('.js_result');

const gamerScore = document.querySelector('.js_gamerScore');
const computerScore = document.querySelector('.js_computerScore');

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
    race = 'Sureños malos con fuerza (2)';
    console.log(race);
    return force;
  } else if (random === 2) {
    force = 2;
    race = 'Orcos con fuerza (2)';
    console.log(race);
    return force;
  } else if (random === 3) {
    force = 2;
    race = 'Goblins con fuerza (2)';
    console.log(race);
    return force;
  } else if (random === 4) {
    force = 3;
    race = 'Huargos con fuerza (3)';
    console.log(race);
    return force;
  } else if (random === 5) {
    force = 5;
    race = 'Trolls con fuerza (5)';
    console.log(race);
    return force;
  }
}

function getUserOption() {
  return parseInt(select.value);
}

function battle(optionUser, optionComputer) {
  if (optionUser > optionComputer) {
    result.innerHTML = 'Minipunto para el Ejército del Bien';
    gamer++;
    gamerScore.innerHTML = gamer;
  }
  if (optionUser === optionComputer) {
    result.innerHTML = 'Empate.';
  }
  if (optionUser < optionComputer) {
    result.innerHTML = 'Minipunto para el Ejército del Mal.';
    computer++;
    computerScore.innerHTML = computer;
  }
}

function gameOver() {
  moves++;
  if (moves === 10) {
    btn.classList.add('hidden');
    btn2.classList.remove('hidden');
    if (gamer > computer) {
      result.innerHTML =
        'Has ganado la guerra y evitado que el mal reine! Enhorabuena :)';
    } else if (computer > gamer) {
      result.innerHTML = 'Has perdido la guerra y el mal ha reinado :(';
    } else {
      result.innerHTML =
        'Empate, la Tierra Media sigue en guerra, inténtalo de nuevo';
    }
  }
}

// FUNCIONES RESET

function selectDefault() {
  defaultOption.selected = true;
}

function defaultMsj() {
  result.innerHTML = '¡Comienza la batalla!';
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
  selectDefault();
  defaultMsj();
  resetScore();
  resetBtn();
}

/////////////EVENTS

btn.addEventListener('click', handleClick);
btn2.addEventListener('click', handleReset);
