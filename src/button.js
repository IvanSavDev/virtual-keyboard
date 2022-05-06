import { engLayout } from './symbol-keyboards';

const sampleBtn = (numberRow, numberBtn, content) => `<div data-row="${numberRow + 1}" data-btn="${numberBtn + 1}" class="keyboard__button">
  <span class="keyboard__content">${content}</span>
</div>`;

export const sampleContentBtn = (content) => `<span class="keyboard__content">${content}</span>`;

export const generateButtons = (currentRow, currentLayout = engLayout) => currentLayout[currentRow]
  .map((element, index) => sampleBtn(currentRow, index, element));

export const updateBtn = (currentRow, currentLayout) => currentLayout[currentRow]
  .map((element) => sampleContentBtn(element));

// <div data-row='1' class="keybord__button">
//   <div class="keyboard-layout keyboard__lang--eng">
//     <div data-btn='1' class="keyboard__content">tab</div>
//   </div>
// </div>
