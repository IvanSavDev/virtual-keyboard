(()=>{"use strict";const e={en:{lowerCase:[["`",1,2,3,4,5,6,7,8,9,0,"-","=","back"],["tab","q","w","e","r","t","y","u","i","o","p","[","]","'","del"],["caps lock","a","s","d","f","g","h","j","k","l",";",'"',"enter"],["shift","z","x","c","v","b","n","m",",",".","/","▲","shift"],["ctrl","win","alt"," ","alt","◀","▼","▶","ctrl"]],upperCase:[["~","!","@","#","$","%","^","&","*","(",")","_","+","back"],["tab","Q","W","E","R","T","Y","U","I","O","P","{","}","|","del"],["caps lock","A","S","D","F","G","H","J","K","L",":",'"',"enter"],["shift","Z","X","C","V","B","N","M","<",">","?","▲","shift"],["ctrl","win","alt"," ","alt","◀","▼","▶","ctrl"]]},ru:{lowerCase:[["ё",1,2,3,4,5,6,7,8,9,0,"-","=","back"],["tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","\\","del"],["caps lock","ф","ы","в","а","п","р","о","л","д","ж","э","enter"],["shift","я","ч","с","м","и","т","ь","б","ю",".","▲","shift"],["ctrl","win","alt"," ","alt","◀","▼","▶","ctrl"]],upperCase:[["Ё","!",'"',"№",";","%",":","?","*","(",")","_","+","back"],["tab","Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","/","del"],["caps lock","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","enter"],["shift","Я","Ч","С","М","И","Т","Ь","Б","Ю",",","▲","shift"],["ctrl","win","alt"," ","alt","◀","▼","▶","ctrl"]]}},t=["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace","Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","Delete","CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter","ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight","ControlLeft","MetaLeft","AltLeft","Space","AltRight","ArrowLeft","ArrowDown","ArrowRight","ControlRight"],a=[["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace"],["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","Delete"],["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter"],["ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight"],["ControlLeft","MetaLeft","AltLeft","Space","AltRight","ArrowLeft","ArrowDown","ArrowRight","ControlRight"]],r={en:{lowerCase:{},upperCase:{}},ru:{lowerCase:{},upperCase:{}}},o=["lowerCase","upperCase"],s=(e.en.lowerCase.length,e.en.upperCase.length,e.ru.lowerCase.length,e.en.upperCase.length,{Tab:"    ",Enter:"\n",Shift:"",Alt:"",Control:"",CapsLock:"",Meta:"",Delete:"",MetaLeft:"",ControlLeft:"",ControlRight:"",AltLeft:"",AltRight:"",ShiftLeft:"",ShiftRight:""});["en","ru"].forEach((a=>{o.forEach((o=>{const s=e[a][o].flat();t.forEach(((e,t)=>{r[a][o][e]=s[t]}))}))}));const n=(e="en",t="lowerCase")=>r[e][t],l=n(),i=e=>{document.querySelectorAll(".keyboard__row").forEach(((t,r)=>{Array.from(t.children).forEach(((t,o)=>{const s=a[r][o],n=t,l=e[s];n.innerHTML=`<span class="keyboard__content">${l}</span>`}))}))};document.body.innerHTML='<header class="container-header">\n<h1 class="header">Virtual keyboard</h1>\n</header>\n<div class="container-keyboard">\n<textarea class="display-keyboard" cols="100" rows="10" placeholder="Text will appear here..." autofocus></textarea>\n<div class="keyboard">\n  <div class="keyboard__row"></div>\n  <div class="keyboard__row"></div>\n  <div class="keyboard__row"></div>\n  <div class="keyboard__row"></div>\n  <div class="keyboard__row"></div>\n</div>\n</div>\n<div class="footer">\n<p class="footer__text">Клавиатура создана в операционной системе Windows</p>\n<p class="footer__text">Для переключения языка комбинация: левыe ctrl + alt</p>\n</div>';const c=document.querySelector(".display-keyboard");let d="lowerCase",y="en";const u=localStorage.getItem("lang");y=u??"en",localStorage.setItem("lang",y),(e=>{document.querySelectorAll(".keyboard__row").forEach(((t,r)=>{t.innerHTML=((e,t=l)=>a[e].map(((a,r)=>((e,t,a,r)=>`<div data-row="${e+1}" data-btn="${t+1}" data-code="${r}" class="keyboard__button">\n  <span class="keyboard__content">${a[r]}</span>\n</div>`)(e,r,t,a))))(r,e).join("")}))})(n(y));let f=n(y,d);const k=()=>{d="lowerCase"===d?"upperCase":"lowerCase",f=n(y,d),i(f)};let p,h=!1;document.querySelectorAll(".keyboard__button").forEach((e=>{e.addEventListener("mousedown",(e=>{c.focus(),h=!0,e.currentTarget.classList.remove("keyboard__button--unpress"),e.currentTarget.classList.add("keyboard__button--press"),e.preventDefault(),p=e.currentTarget;const t=c.selectionStart,a=c.value.slice(0,t),r=c.value.slice(t),o=e.currentTarget.dataset.code;if("CapsLock"!==o&&"ShiftLeft"!==o&&"ShiftRight"!==o||k(),"Delete"===o)return c.value=`${a}${r.slice(1)}`,void c.setSelectionRange(t,t);if("Backspace"===o)return c.value=`${a.slice(0,-1)}${r}`,void c.setSelectionRange(t-1,t-1);const n=s[o]??f[o];c.value=`${a}${n}${r.slice(0)}`,"Tab"!==o?""!==n&&c.setSelectionRange(t+1,t+1):c.setSelectionRange(t+4,t+4)})),e.addEventListener("mouseup",(e=>{const t=e.currentTarget.dataset.code;e.preventDefault(),e.currentTarget.classList.remove("keyboard__button--press"),e.currentTarget.classList.add("keyboard__button--unpress"),"ShiftLeft"!==t&&"ShiftRight"!==t||k()}))})),document.body.addEventListener("mouseup",(()=>{h&&(p.classList.remove("keyboard__button--press"),p.classList.add("keyboard__button--unpress")),h=!1}));let g=!1;const b=new Set;document.addEventListener("keydown",(e=>{const t=document.querySelector(`.keyboard__button[data-code='${e.code}']`);t.classList.remove("keyboard__button--unpress"),t.classList.add("keyboard__button--press"),c.focus(),b.add(e.key),e.preventDefault();const a=c.selectionStart,r=c.value.slice(0,a),o=c.value.slice(a);if(b.has("Control")&&b.has("Alt"))return y="en"===y?"ru":"en",localStorage.setItem("lang",y),f=n(y,d),i(f),void b.clear();if("CapsLock"===e.key&&k(),"Shift"===e.key){if(g)return;g=!0,k()}if("Delete"===e.key)return c.value=`${r}${o.slice(1)}`,void c.setSelectionRange(a,a);if("Backspace"===e.key)return c.value=`${r.slice(0,-1)}${o}`,void c.setSelectionRange(a-1,a-1);const l=s[e.key]??f[e.code];c.value=`${r}${l}${o.slice(0)}`,"Tab"!==e.key?""!==l&&c.setSelectionRange(a+1,a+1):c.setSelectionRange(a+4,a+4)})),document.addEventListener("keyup",(e=>{e.preventDefault(),"Shift"===e.key&&(g=!1,k());const t=document.querySelector(`.keyboard__button[data-code='${e.code}']`);t.classList.remove("keyboard__button--press"),t.classList.add("keyboard__button--unpress"),b.delete(e.key)}))})();