const root = document.getElementById("root");
// create title
const title = document.createElement("h1");
title.classList.add("title");
title.innerHTML = "RSS Virtual Keyboard";
root.append(title);

// create textarea
const textarea = document.createElement("textarea");
textarea.classList.add("textarea");
root.append(textarea);

// create message
const message = document.createElement("div");
message.classList.add("message");

// array of keys
let keyboardContainer;
const keyLayout = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "\\",
  "Del",
  "CapsLock",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
  "Enter",
  "ShiftLeft",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "/",
  "ArrowUp",
  "ShiftRight",
  "ControlLeft",
  "MetaLeft",
  "AltLeft",
  "Space",
  "AltRight",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
  "ControlRight",
];

const keyLayoutUpper = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "{",
  "}",
  "|",
  "Del",
  "CapsLock",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ":",
  '"',
  "Enter",
  "ShiftLeft",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "<",
  ">",
  "?",
  "ArrowUp",
  "ShiftRight",
  "ControlLeft",
  "MetaLeft",
  "AltLeft",
  "Space",
  "AltRight",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
  "ControlRight",
];

const keyLayoutRus = [
  "ё",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "й",
  "ц",
  "у",
  "к",
  "е",
  "н",
  "г",
  "ш",
  "щ",
  "з",
  "х",
  "ъ",
  "\\",
  "Del",
  "CapsLock",
  "ф",
  "ы",
  "в",
  "а",
  "п",
  "р",
  "о",
  "л",
  "д",
  "ж",
  "э",
  "Enter",
  "ShiftLeft",
  "я",
  "ч",
  "с",
  "м",
  "и",
  "т",
  "ь",
  "б",
  "ю",
  ".",
  "ArrowUp",
  "ShiftRight",
  "ControlLeft",
  "MetaLeft",
  "AltLeft",
  "Space",
  "AltRight",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
  "ControlRight",
];

const keyLayoutRusUpper = [
  "Ё",
  "!",
  '"',
  "№",
  ";",
  "%",
  ":",
  "?",
  "*",
  "(",
  ")",
  "_",
  "+",
  "Backspace",
  "Tab",
  "Й",
  "Ц",
  "У",
  "К",
  "Е",
  "Н",
  "Г",
  "Ш",
  "Щ",
  "З",
  "Х",
  "Ъ",
  "/",
  "Del",
  "CapsLock",
  "Ф",
  "Ы",
  "В",
  "А",
  "П",
  "Р",
  "О",
  "Л",
  "Д",
  "Ж",
  "Э",
  "Enter",
  "ShiftLeft",
  "Я",
  "Ч",
  "С",
  "М",
  "И",
  "Т",
  "Ь",
  "Б",
  "Ю",
  ",",
  "ArrowUp",
  "ShiftRight",
  "ControlLeft",
  "MetaLeft",
  "AltLeft",
  "Space",
  "AltRight",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
  "ControlRight",
];

// CREATE UI
const createLayout = (lang) => {
  keyboardContainer = document.createElement("div");
  keyboardContainer.classList.add("keyboard-container");
  keyboardContainer.classList.add("unselectable");
  root.append(keyboardContainer);

  let langLayout;

  if (lang == "eng") {
    langLayout = keyLayout;
    keyboardContainer.classList.add("keyboard-container-eng");
  } else if (lang == "rus") {
    langLayout = keyLayoutRus;
    keyboardContainer.classList.add("keyboard-hidden");
    keyboardContainer.classList.add("keyboard-container-rus");
  } else if (lang == "eng-upper") {
    langLayout = keyLayoutUpper;
    keyboardContainer.classList.add("keyboard-hidden");
    keyboardContainer.classList.add("keyboard-container-upper");
  } else if (lang == "rus-upper") {
    langLayout = keyLayoutUpper;
    keyboardContainer.classList.add("keyboard-hidden");
    keyboardContainer.classList.add("keyboard-container-rus-upper");
  }

  langLayout.forEach((key, index) => {
    const insertLineBreak =
      index == 13 || index == 28 || index == 41 || index == 54;
    const keyElement = document.createElement("div");
    keyElement.classList.add("key");
    keyElement.innerText = key;
    keyElement.setAttribute("keyname", key);
    keyElement.setAttribute("keynameUpperCase", key.toUpperCase());
    keyboardContainer.append(keyElement);

    if (insertLineBreak) {
      keyboardContainer.append(document.createElement("br"));
    }
    if (
      key == "Caps" ||
      key == "ShiftLeft" ||
      key == "ShiftRight" ||
      key == "Enter" ||
      key == "Backspace" ||
      key == "Tab" ||
      key == "CapsLock" ||
      key == "ControlLeft" ||
      key == "ControlRight" ||
      key == "AltLeft" ||
      key == "AltRight" ||
      key == "CapsLock" ||
      key == "MetaLeft" ||
      key == "Del" ||
      key == "Space" ||
      key == "ArrowLeft" ||
      key == "ArrowRight" ||
      key == "ArrowUp" ||
      key == "ArrowDown"
    ) {
      keyElement.classList.add("key_colored");
    }
    if (key == "Space") {
      keyElement.classList.add("key_space");
    }
    if (key == "ShiftLeft") {
      keyElement.classList.add("key_shift_left");
      keyElement.classList.add("shift");
      keyElement.innerText = "Shift";
    }
    if (key == "ShiftRight") {
      keyElement.classList.add("key_shift_right");
      keyElement.classList.add("shift");
      keyElement.innerText = "Shift";
    }
    if (key == "AltLeft" || key == "AltRight") {
      keyElement.innerText = "Alt";
    }
    if (key == "MetaLeft") {
      keyElement.innerText = "Win";
    }
    if (key == "ControlLeft" || key == "ControlRight") {
      keyElement.innerText = "Ctrl";
    }
    if (key == "Enter" || key == "CapsLock") {
      keyElement.classList.add("key_wide");
    }
    if (key == "Tab") {
      keyElement.classList.add("key_tab");
    }
    if (key == "CapsLock") {
      keyElement.classList.add("capslock");
    }
    if (key == "Backspace") {
      keyElement.classList.add("key_backspace");
    }
    if (key == "ArrowLeft") {
      keyElement.innerHTML = "◄";
      keyElement.classList.add("arrow");
    }
    if (key == "ArrowRight") {
      keyElement.innerHTML = "►";
      keyElement.classList.add("arrow");
    }
    if (key == "ArrowUp") {
      keyElement.innerHTML = "▲";
      keyElement.classList.add("arrow");
    }
    if (key == "ArrowDown") {
      keyElement.innerHTML = "▼";
      keyElement.classList.add("arrow");
    }
  });
};

// create layouts / ================================================================
createLayout("eng");
createLayout("eng-upper");
createLayout("rus");
createLayout("rus-upper");

//create message
message.innerHTML =
  "<p>Клавиатура создана в операционной системе Windows <br> Для переключения языка комбинация: левыe ctrl + alt</p>";
root.append(message);

// clicks on virtual keyboard
let keys = document.querySelectorAll(".key");

// listen for clicks on virtual keyboard
keys.forEach((el) =>
  el.addEventListener("mousedown", () => {
    if (el.getAttribute("keyname") == "Backspace") {
      textarea.value = textarea.value.slice(0, -1);
    } else if (el.getAttribute("keyname") == "Enter") {
      textarea.value = textarea.value + "\n";
    } else if (el.getAttribute("keyname") == "Space") {
      textarea.value = textarea.value + " ";
    } else if (el.getAttribute("keyname") == "Del") {
      textarea.value = "";
    } else if (el.getAttribute("keyname") == "Tab") {
      textarea.value = textarea.value + "    ";
    } else if (
      el.getAttribute("keyname") == "AltLeft" ||
      el.getAttribute("keyname") == "AltRight" ||
      el.getAttribute("keyname") == "ControlLeft" ||
      el.getAttribute("keyname") == "ControlRight" ||
      el.getAttribute("keyname") == "MetaLeft" ||
      el.getAttribute("keyname") == "ShiftLeft" ||
      el.getAttribute("keyname") == "ShiftRight" ||
      el.getAttribute("keyname") == "CapsLock"
    ) {
      textarea.value;
    } else if (el.getAttribute("keyname") == "ArrowLeft") {
      textarea.value = textarea.value + "◄";
    } else if (el.getAttribute("keyname") == "ArrowRight") {
      textarea.value = textarea.value + "►";
    } else if (el.getAttribute("keyname") == "ArrowUp") {
      textarea.value = textarea.value + "▲";
    } else if (el.getAttribute("keyname") == "ArrowDown") {
      textarea.value = textarea.value + "▼";
    } else {
      textarea.value = textarea.value + el.getAttribute("keyname");
    }
  })
);

// add active class on virtual keyboard keys
keys.forEach((el) =>
  el.addEventListener("mousedown", () => {
    if (el.getAttribute("keyname") == "CapsLock") {
      el.classList.toggle("active");
    } else if (el.getAttribute("keyname") == "ShiftLeft") {
      el.classList.toggle("active");
    } else {
      el.classList.add("active");
    }
    textarea.focus();
  })
);

// remove active class from virtual keyboard keys
keys.forEach((el) =>
  el.addEventListener("mouseup", () => {
    if (
      el.getAttribute("keyname") != "CapsLock" &&
      el.getAttribute("keyname") != "ShiftLeft"
    ) {
      el.classList.remove("active");
    }
  })
);

//clicks on real keyboard
window.addEventListener("keydown", (e) => {
  console.log(e);
  textarea.focus();
  keys.forEach((el) => {
    if (
      e.key == el.getAttribute("keyname") ||
      e.code == el.getAttribute("keyname") ||
      e.key == el.getAttribute("keynameUpperCase")
    ) {
      el.classList.add("active");
    }
    // if (e.key == el.getAttribute("keyname")) {
    //   el.classList.toggle("active");
    // }
  });
  if (e.key == "ArrowLeft") {
    textarea.value = textarea.value + "◄";
    textarea.selectionStart = textarea.value.length;
  }
  if (e.key == "ArrowRight") {
    textarea.value = textarea.value + "►";
  }
  if (e.key == "ArrowUp") {
    textarea.value = textarea.value + "▲";
  }
  if (e.key == "ArrowDown") {
    textarea.value = textarea.value + "▼";
  }
});

window.addEventListener("keyup", (e) => {
  keys.forEach((el) => {
    if (
      e.key == el.getAttribute("keyname") ||
      e.code == el.getAttribute("keyname") ||
      e.key == el.getAttribute("keynameUpperCase")
    ) {
      el.classList.remove("active");
    }
  });
});

// PREVENT DEFAULT ===========================================
window.addEventListener("keydown", (e) => {
  // console.log(e.code);
  if (e.key == "Tab") {
    e.preventDefault();
  }
  if (e.key == "ArrowLeft") {
    e.preventDefault();
  }
  if (e.key == "ArrowRight") {
    e.preventDefault();
  }
  if (e.key == "ArrowUp") {
    e.preventDefault();
  }
  if (e.key == "ArrowDown") {
    e.preventDefault();
  }
  if (e.key == "Alt") {
    e.preventDefault();
  }
});

// the application saves a chosen language after the page is reloaded and displays the keyboard on that language
// the Del key removes character after the text cursor
