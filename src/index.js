import './scss/style.scss';
import { generateKeyboard, updateBtns } from './keyboard';
import {
  engLayout, engLayoutShift, rusLayout, rusLayoutShift,
} from './symbol-keyboards';

document.body.innerHTML = `<header class="container-header">
<h1 class="header">Virtual keyboard</h1>
</header>
<div class="container-keyboard">
<textarea class="display-keyboard" cols="100" rows="10" placeholder="Text will appear here..."></textarea>
<div class="keyboard">
  <div class="keyboard__row"></div>
  <div class="keyboard__row"></div>
  <div class="keyboard__row"></div>
  <div class="keyboard__row"></div>
  <div class="keyboard__row"></div>
</div>
</div>`;

generateKeyboard(engLayout, 'eng');

const leftShift = document.querySelector('.keyboard__button[data-row=\'4\'][data-btn=\'1\'');
const rightShift = document.querySelector('.keyboard__button[data-row=\'4\'][data-btn=\'13\'');
const capsLock = document.querySelector('.keyboard__button[data-row=\'3\'][data-btn=\'1\'');

let active = false;

const activeShift = () => {
  const keyboard = document.querySelector('.keyboard');
  active = !active;
  if (keyboard.classList.contains('en')) {
    updateBtns(active ? engLayoutShift : engLayout);
  } else {
    updateBtns(active ? rusLayoutShift : rusLayout);
  }
};

leftShift.addEventListener('pointerdown', () => activeShift());

leftShift.addEventListener('pointerup', () => activeShift());

// document.body.addEventListener('mouseup', () => activeShift());

rightShift.addEventListener('mousedown', () => activeShift());

rightShift.addEventListener('pointerup', () => activeShift());

capsLock.addEventListener('click', () => activeShift());
