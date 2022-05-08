import { getLayout, keyboardCodeRows } from './symbol-keyboards';

const sampleBtn = (numberRow, numberBtn, content, code) => `<div data-row="${numberRow + 1}" data-btn="${numberBtn + 1}" data-code="${code}" class="keyboard__button">
  <span class="keyboard__content">${content[code]}</span>
</div>`;

export const sampleContentBtn = (content) => `<span class="keyboard__content">${content}</span>`;

const defLayout = getLayout();
// let letterPosititon = 0;
// const countLetter = [13, 14, 12, 12, 8];

export const generateButtons = (currentRow, currentLayout = defLayout) => {
  const rowCodes = keyboardCodeRows[currentRow];
  return rowCodes.map((code, index) => sampleBtn(currentRow, index, currentLayout, code));
};
// countLetterInRows[currentRow].
//   .map((element, index) => sampleBtn(currentRow, index, element, codeKeyboard));

// export const updateBtn = (currentRow, currentLayout) => currentLayout[currentRow]
//   .map((element) => sampleContentBtn(element)); ?????????мей би была полезна

//   const defLayout = getLayout();
// let letterPosititon = 0;
// const countLetter = [13, 14, 12, 12, 8];

// export const generateButtons = (currentRow, currentLayout = defLayout) => {
//   const currentRowLength = countLetter[currentRow];
//   const btns = [];
//   for (let i = 0; i <= currentRowLength; i += 1) {
//     btns.push(sampleBtn(currentRow, i, currentLayout, letterPosititon));
//     letterPosititon += 1;
//   }

//   return btns;
// };
