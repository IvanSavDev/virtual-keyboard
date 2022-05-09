import { generateButtons, sampleContentBtn } from './button';
import { keyboardCodeRows } from './symbol-keyboards';

export const generateKeyboard = (currentLayout) => {
  const keyboardRows = document.querySelectorAll('.keyboard__row');

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
      const codeBtn = keyboardCodeRows[indexRow][indexBtn];
      const currentBtn = btn;
      const currentContent = currentLayout[codeBtn];
      currentBtn.innerHTML = sampleContentBtn(currentContent);
    });
  });
};
