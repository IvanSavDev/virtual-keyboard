import { getLayout, keyboardCodeRows } from './symbol-keyboards';

const sampleBtn = (numberRow, numberBtn, content, code) => `<div data-row="${numberRow + 1}" data-btn="${numberBtn + 1}" data-code="${code}" class="keyboard__button">
  <span class="keyboard__content">${content[code]}</span>
</div>`;

export const sampleContentBtn = (content) => `<span class="keyboard__content">${content}</span>`;

const defLayout = getLayout();

export const generateButtons = (currentRow, currentLayout = defLayout) => {
  const rowCodes = keyboardCodeRows[currentRow];
  return rowCodes.map((code, index) => sampleBtn(currentRow, index, currentLayout, code));
};
