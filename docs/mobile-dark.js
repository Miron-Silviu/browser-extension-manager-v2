'use strict';

const toogleButton = document.querySelector('.toggle-button');
const mainContainer = document.querySelector('.main-container');

toogleButton.addEventListener('click', function () {
  mainContainer.style.background =
    'linear-gradient(180deg, #040918 0%, #091540 100%)';
});
