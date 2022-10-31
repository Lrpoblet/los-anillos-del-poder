'use strict';

const select = document.querySelector('.js_select');
const btn = document.querySelector('.js_btn');
const result = document.querySelector('.js_result');

const gamerScore = document.querySelector('.js_gamerScore');
const computerScore = document.querySelector('.js_computerScore');

let random = '';
let force = '';
let race = '';

//asignación del oponente

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function getRandomOpponent() {
  random = getRandomNumber(5);
  if (random === 1) {
    force = 2;
    race = 'Sureños malos con fuerza (2)';
  }
  if (random === 2) {
    force = 2;
    race = 'Orcos con fuerza (2)';
  }
  if (random === 3) {
    force = 2;
    race = 'Goblins con fuerza (2)';
  }
  if (random === 4) {
    force = 3;
    race = 'Huargos con fuerza (3)';
  }
  if (random === 5) {
    force = 5;
    race = 'Trolls con fuerza (5)';
  }

  console.log(race);
}

//batalla

function battle() {
  const optionUser = parseInt(select.value);

  if (optionUser > force) {
    result.innerHTML = 'Ha ganado el Ejército del Bien! Enhorabuena.';
    gamerScore.innerHTML = 1;
  }
  if (optionUser === force) {
    result.innerHTML = 'Empate.';
  }
  if (optionUser < force) {
    result.innerHTML = 'Ha ganado el Ejército del Mal! Vuelve a Intentarlo.';
    computerScore.innerHTML = 1;
  }
}

function handleClick(event) {
  event.preventDefault();
  getRandomOpponent();
  battle();
}

btn.addEventListener('click', handleClick);
