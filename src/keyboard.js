import { generateButtons, sampleContentBtn } from './button';

export const generateKeyboard = (currentLayout) => {
  const keyboardRows = document.querySelectorAll('.keyboard__row');
  const keyboard = document.querySelector('.keyboard');
  keyboard.classList.add('en');

  keyboardRows.forEach((element, index) => {
    const currentElement = element;
    currentElement.innerHTML = generateButtons(index, currentLayout).join('');
  });
};

export const updateBtns = (currentLayout) => {
  const keyboardRows = document.querySelectorAll('.keyboard__row');
  keyboardRows.forEach((element, indexRow) => {
    const currentElement = Array.from(element.children);
    currentElement.forEach((btn, indexBtn) => {
      const currentBtn = btn;
      const currentContent = currentLayout[indexRow][indexBtn];
      currentBtn.innerHTML = sampleContentBtn(currentContent);
    });
  });
};
