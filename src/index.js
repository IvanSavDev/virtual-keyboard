import './scss/style.scss';
import { generateKeyboard, updateBtns } from './keyboard';
import { getLayout } from './symbol-keyboards';

document.body.innerHTML = `<header class="container-header">
<h1 class="header">Virtual keyboard</h1>
</header>
<div class="container-keyboard">
<textarea class="display-keyboard" cols="100" rows="10" placeholder="Text will appear here..." autofocus
></textarea>
<div class="keyboard">
  <div class="keyboard__row"></div>
  <div class="keyboard__row"></div>
  <div class="keyboard__row"></div>
  <div class="keyboard__row"></div>
  <div class="keyboard__row"></div>
</div>
</div>`;

generateKeyboard(getLayout());

const leftShift = document.querySelector('.keyboard__button[data-row=\'4\'][data-btn=\'1\'');
const rightShift = document.querySelector('.keyboard__button[data-row=\'4\'][data-btn=\'13\'');
const capsLock = document.querySelector('.keyboard__button[data-row=\'3\'][data-btn=\'1\'');
const displayKeyboard = document.querySelector('.display-keyboard');
const allBtns = document.querySelectorAll('.keyboard__button');

let letterCase = 'lowerCase';
const lang = 'en';

const changeLetterCase = () => {
  if (letterCase === 'lowerCase') {
    letterCase = 'upperCase';
  } else {
    letterCase = 'lowerCase';
  }
};

let currentLayout = getLayout(lang, letterCase);

// const changeLang = () => (lang === 'en' ? 'ru' : 'en');

allBtns.forEach((btn) => {
  btn.addEventListener('click', (key) => {
    const codeKey = key.currentTarget.dataset.code;
    // if (content !== 'shift') {
    //   displayKeyboard.value += content;
    // }
    displayKeyboard.value += currentLayout[codeKey];
  });
});

const activeShift = () => {
  // const keyboard = document.querySelector('.keyboard');
  // const currentLetterCase = changeLetterCase();
  changeLetterCase();
  currentLayout = getLayout(lang, letterCase);
  updateBtns(currentLayout);
};

leftShift.addEventListener('pointerdown', () => activeShift());

leftShift.addEventListener('pointerup', () => activeShift());

rightShift.addEventListener('mousedown', () => activeShift());

rightShift.addEventListener('pointerup', () => activeShift());

capsLock.addEventListener('click', () => activeShift());

// document.addEventListener('keydown', (e) => {
//   displayKeyboard.focus();
//   if (e.code === 'CapsLock' || e.code === 'Shift') {
//     activeShift();
//   }
//   if (!['Shift', 'CapsLock', 'Alt', 'Ctrl', 'Tab', 'Enter'].includes(e.key)) {
//     displayKeyboard.value += e.key;
//   }
// });

document.addEventListener('keyup', (button) => {
  console.log(button);
  if (button.code === 'CapsLock' || button.code === 'Shift') {
    activeShift();
  }
  if (!['Shift', 'CapsLock', 'Alt', 'Ctrl', 'Tab', 'Enter'].includes(button.key)) {
    displayKeyboard.value += currentLayout[button.code];
  }
});
