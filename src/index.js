import './scss/style.scss';
import { generateKeyboard, updateBtns } from './keyboard';
import { getLayout, specialCharacters } from './symbol-keyboards';

document.body.innerHTML = `<header class="container-header">
<h1 class="header">Virtual keyboard</h1>
</header>
<div class="container-keyboard">
<textarea class="display-keyboard" cols="100" rows="10" placeholder="Text will appear here..." autofocus></textarea>
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
let lang = 'en';

const changeLetterCase = () => {
  if (letterCase === 'lowerCase') {
    letterCase = 'upperCase';
  } else {
    letterCase = 'lowerCase';
  }
};

let currentLayout = getLayout(lang, letterCase);

const changeKeyboardLang = () => {
  lang = lang === 'en' ? 'ru' : 'en';
  currentLayout = getLayout(lang, letterCase);
  updateBtns(currentLayout);
};

allBtns.forEach((btn) => {
  btn.addEventListener('mousedown', (key) => {
    key.currentTarget.classList.remove('keyboard__button--unpress');
    key.currentTarget.classList.add('keyboard__button--press');
    key.preventDefault();
    const currentCursor = displayKeyboard.selectionStart;
    const firstPart = displayKeyboard.value.slice(0, currentCursor);
    const secondPart = displayKeyboard.value.slice(currentCursor);
    if (key.currentTarget.dataset.code === 'Delete') {
      displayKeyboard.value = `${firstPart}${secondPart.slice(1)}`;
      return;
    }
    const codeKey = key.currentTarget.dataset.code;

    displayKeyboard.value = `${firstPart}${currentLayout[codeKey]}${secondPart.slice(0)}`;
    displayKeyboard.setSelectionRange(currentCursor + 1, currentCursor + 1);
  });
  btn.addEventListener('mouseup', (key) => {
    key.preventDefault();
    key.currentTarget.classList.remove('keyboard__button--press');
    key.currentTarget.classList.add('keyboard__button--unpress');
  });
});

const activeShift = () => {
  changeLetterCase();
  currentLayout = getLayout(lang, letterCase);
  updateBtns(currentLayout);
};

leftShift.addEventListener('mousedown', () => activeShift());

leftShift.addEventListener('mouseup', () => activeShift());

rightShift.addEventListener('mousedown', () => activeShift());

rightShift.addEventListener('mouseup', () => activeShift());

capsLock.addEventListener('click', () => activeShift());

let down = false;

const setKey = new Set();

document.addEventListener('keydown', (keyboardKey) => {
  const keyboardButton = document.querySelector(`.keyboard__button[data-code='${keyboardKey.code}']`);
  keyboardButton.classList.remove('keyboard__button--unpress');
  keyboardButton.classList.add('keyboard__button--press');
  displayKeyboard.focus();
  setKey.add(keyboardKey.key);
  keyboardKey.preventDefault();

  const currentCursor = displayKeyboard.selectionStart;
  const firstPart = displayKeyboard.value.slice(0, currentCursor);
  const secondPart = displayKeyboard.value.slice(currentCursor);

  if (setKey.has('Control') && setKey.has('Alt')) {
    changeKeyboardLang();
    setKey.clear();
    return;
  }

  if (keyboardKey.key === 'CapsLock') {
    activeShift();
  }

  if (keyboardKey.key === 'Shift') {
    if (down) return;
    down = true;
    activeShift();
  }

  if (keyboardKey.key === 'Delete') {
    displayKeyboard.value = `${firstPart}${secondPart.slice(1)}`;
    displayKeyboard.setSelectionRange(currentCursor, currentCursor);
    return;
  }

  if (keyboardKey.key === 'Backspace') {
    displayKeyboard.value = `${firstPart.slice(0, -1)}${secondPart}`;
    displayKeyboard.setSelectionRange(currentCursor - 1, currentCursor - 1);
    return;
  }

  const currentValue = specialCharacters[keyboardKey.key] ?? currentLayout[keyboardKey.code];
  displayKeyboard.value = `${firstPart}${currentValue}${secondPart.slice(0)}`;

  if (keyboardKey.key === 'Tab') {
    displayKeyboard.setSelectionRange(currentCursor + 4, currentCursor + 4);
    return;
  }

  if (currentValue !== '') {
    displayKeyboard.setSelectionRange(currentCursor + 1, currentCursor + 1);
  }
});

document.addEventListener('keyup', (keyboardKey) => {
  keyboardKey.preventDefault();
  if (keyboardKey.key === 'Shift') {
    down = false;
    activeShift();
  }
  const keyboardButton = document.querySelector(`.keyboard__button[data-code='${keyboardKey.code}']`);
  keyboardButton.classList.remove('keyboard__button--press');
  keyboardButton.classList.add('keyboard__button--unpress');
  setKey.delete(keyboardKey.key);
});
