'use strict';

//  Define new constants
const toogleButton = document.querySelector('.toggle-button');
const moonImage = document.querySelector('.moon-img');
const sunImage = document.querySelector('.sun-img');
const mainContainer = document.querySelector('.main-container');
const alignButton = document.querySelector('.align-button');
const extensionList = document.querySelector('.extension-list');
const titleContainer = document.querySelector('.title-container');

// Naming functions
const linearGradient = function () {
  return `linear-gradient(180deg, #040918 0%, #091540 100%)`;
};

const whiteColor = function () {
  return `white`;
};

// Toggle button
toogleButton.addEventListener('click', function () {
  sunImage.style.display = 'block';
  moonImage.classList.toggle('sunImage');

  // mainContainer.textContent = `Test ${moonImage ? 'added' : 'removed'} : `;

  mainContainer.style.background = linearGradient();
  extensionList.style.color = whiteColor();
});
