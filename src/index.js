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
</div>
<div class="footer">
<p class="footer__text">Клавиатура создана в операционной системе Windows</p>
<p class="footer__text">Для переключения языка комбинация: ctrl + alt</p>
</div>`;

const displayKeyboard = document.querySelector('.display-keyboard');

let letterCase = 'lowerCase';
let lang = 'en';

const storageLang = localStorage.getItem('lang');

lang = storageLang ?? 'en';

localStorage.setItem('lang', lang);

generateKeyboard(getLayout(lang));

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
  localStorage.setItem('lang', lang);
  currentLayout = getLayout(lang, letterCase);
  updateBtns(currentLayout);
};

const activeShift = () => {
  changeLetterCase();
  currentLayout = getLayout(lang, letterCase);
  updateBtns(currentLayout);
};

let currentBtn;
let pressBtn = false;
const allBtns = document.querySelectorAll('.keyboard__button');

allBtns.forEach((btn) => {
  btn.addEventListener('mousedown', (buttonKey) => {
    displayKeyboard.focus();
    pressBtn = true;
    buttonKey.currentTarget.classList.remove('keyboard__button--unpress');
    buttonKey.currentTarget.classList.add('keyboard__button--press');
    buttonKey.preventDefault();
    currentBtn = buttonKey.currentTarget;
    const currentCursor = displayKeyboard.selectionStart;
    const firstPart = displayKeyboard.value.slice(0, currentCursor);
    const secondPart = displayKeyboard.value.slice(currentCursor);

    const currentCode = buttonKey.currentTarget.dataset.code;

    if (currentCode === 'CapsLock' || currentCode === 'ShiftLeft' || currentCode === 'ShiftRight') {
      activeShift();
    }

    if (currentCode === 'Delete') {
      displayKeyboard.value = `${firstPart}${secondPart.slice(1)}`;
      displayKeyboard.setSelectionRange(currentCursor, currentCursor);
      return;
    }

    if (currentCode === 'Backspace') {
      displayKeyboard.value = `${firstPart.slice(0, -1)}${secondPart}`;
      displayKeyboard.setSelectionRange(currentCursor - 1, currentCursor - 1);
      return;
    }

    const currentValue = specialCharacters[currentCode] ?? currentLayout[currentCode];
    displayKeyboard.value = `${firstPart}${currentValue}${secondPart.slice(0)}`;

    if (currentCode === 'Tab') {
      displayKeyboard.setSelectionRange(currentCursor + 4, currentCursor + 4);
      return;
    }

    if (currentValue !== '') {
      displayKeyboard.setSelectionRange(currentCursor + 1, currentCursor + 1);
    }
  });
  btn.addEventListener('mouseup', (buttonKey) => {
    const currentCode = buttonKey.currentTarget.dataset.code;
    buttonKey.preventDefault();
    buttonKey.currentTarget.classList.remove('keyboard__button--press');
    buttonKey.currentTarget.classList.add('keyboard__button--unpress');
    if (currentCode === 'ShiftLeft' || currentCode === 'ShiftRight') {
      activeShift();
    }
  });
});

document.body.addEventListener('mouseup', () => {
  if (pressBtn) {
    currentBtn.classList.remove('keyboard__button--press');
    currentBtn.classList.add('keyboard__button--unpress');
  }
  pressBtn = false;
});

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
