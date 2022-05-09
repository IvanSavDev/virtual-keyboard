const keyboardLayouts = {
  en: {
    lowerCase:
      [
        ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'back'],
        ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\'', 'del'],
        ['caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'enter'],
        ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'shift'],
        ['ctrl', 'win', 'alt', ' ', 'alt', '◀', '▼', '▶', 'ctrl'],
      ],
    upperCase:
      [
        ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'back'],
        ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'del'],
        ['caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'enter'],
        ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'shift'],
        ['ctrl', 'win', 'alt', ' ', 'alt', '◀', '▼', '▶', 'ctrl'],
      ],
  },

  ru: {
    lowerCase:
      [
        ['ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'back'],
        ['tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del'],
        ['caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter'],
        ['shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'shift'],
        ['ctrl', 'win', 'alt', ' ', 'alt', '◀', '▼', '▶', 'ctrl'],
      ],
    upperCase:
      [
        ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'back'],
        ['tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'del'],
        ['caps lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'enter'],
        ['shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'shift'],
        ['ctrl', 'win', 'alt', ' ', 'alt', '◀', '▼', '▶', 'ctrl'],
      ],
  },
};

const codeKeyboard = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const keyboardCodeRows = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
];

const keyboardLayoutsWithCode = {
  en: {
    lowerCase: {
    },

    upperCase: {
    },
  },

  ru: {
    lowerCase: {
    },

    upperCase: {
    },
  },
};

const langLayout = ['en', 'ru'];
const letterCase = ['lowerCase', 'upperCase'];

export const countLetterInRows = [
  keyboardLayouts.en.lowerCase.length,
  keyboardLayouts.en.upperCase.length,
  keyboardLayouts.ru.lowerCase.length,
  keyboardLayouts.en.upperCase.length,
];

export const specialCharacters = {
  Tab: '\u00A0\u00A0\u00A0\u00A0',
  Enter: '\n',
  Shift: '',
  Alt: '',
  Control: '',
  CapsLock: '',
  Meta: '',
  Delete: '',
  MetaLeft: '',
  ControlLeft: '',
  ControlRight: '',
  AltLeft: '',
  AltRight: '',
  ShiftLeft: '',
  ShiftRight: '',
};

langLayout.forEach((lang) => {
  letterCase.forEach((letter) => {
    const currentLayout = keyboardLayouts[lang][letter].flat();
    codeKeyboard.forEach((code, index) => {
      keyboardLayoutsWithCode[lang][letter][code] = currentLayout[index];
    });
  });
});

const getLayout = (en = 'en', wordCase = 'lowerCase') => keyboardLayoutsWithCode[en][wordCase];
export { getLayout, codeKeyboard, keyboardCodeRows };
