const root = document.getElementById("root");

// create textarea
const textarea = document.createElement("textarea");
textarea.classList.add("textarea");
root.append(textarea);

// create message
const message = document.createElement("div");
message.classList.add("message");
message.innerHTML =
  "<p>Клавиатура создана в операционной системе Windows <br> Для переключения языка комбинация: левыe ctrl + alt</p>";
root.append(message);

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

// const key1 = document.createElement("div");
// key1.className = "key";
// key1.innerHTML = "1";
// keyboardContainer.append(key1);

// const key2 = document.createElement("div");
// key2.className = "key";
// key2.innerHTML = "2";
// keyboardContainer.append(key2);
// let keyElement;

// document.onkeydown = function (e) {
//   // console.log(e);
//   if (e.key == "Alt") {
//     flag = true;
//   }

//   if (e.key == "Control") {
//     flag = false;
//     console.log("HI");
//   }
//   if (e.key == "Alt") {
//     // flag = false;
//   }
// };

// CREATE UI
const createLayout = (lang) => {
  // create container
  keyboardContainer = document.createElement("div");

  keyboardContainer.classList.add("keyboard-container");
  keyboardContainer.classList.add("unselectable");
  root.append(keyboardContainer);

  let langLayout;
  if (lang === "eng") {
    langLayout = keyLayout;
    keyboardContainer.classList.add("keyboard-container-eng");
  } else if (lang === "rus") {
    langLayout = keyLayoutRus;
    keyboardContainer.classList.add("keyboard-hidden");
    keyboardContainer.classList.add("keyboard-container-rus");
  }

  langLayout.forEach((key, index) => {
    // const insertLineBreak = ["backspace", "ъ", "enter", "."].indexOf(key) !== -1;
    const insertLineBreak =
      index == 13 || index == 28 || index == 41 || index == 54;

    const keyElementWrapper = document.createElement("div");
    keyElementWrapper.classList.add("key-wrapper");
    keyboardContainer.append(keyElementWrapper);

    const keyElement = document.createElement("div");
    keyElement.classList.add("key");
    keyElement.innerText = key;
    keyElement.setAttribute("keyname", key);
    keyElement.setAttribute("keynameUpperCase", key.toUpperCase());
    keyElementWrapper.append(keyElement);

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
      keyElementWrapper.classList.add("key_colored");
    }
    if (key == "Space") {
      keyElementWrapper.classList.add("key_space");
    }
    if (key == "ShiftLeft") {
      keyElementWrapper.classList.add("key_shift_left");
      keyElement.innerText = "Shift";
    }
    if (key == "ShiftRight") {
      keyElementWrapper.classList.add("key_shift_right");
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
      keyElementWrapper.classList.add("key_wide");
    }
    if (key == "Tab") {
      keyElementWrapper.classList.add("key_tab");
    }
    // if (key == "CapsLock") {
    //   keyElement.classList.add("capslock");
    // }
    if (key == "Backspace") {
      keyElementWrapper.classList.add("key_backspace");
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

createLayout("eng");
// createLayout("eng-upper");

// createLayout("rus");
// createLayout("rus-upper");

// let flag = false;
let keyboardContainerRus = document.querySelector(".keyboard-container-rus");
let keyboardContainerEng = document.querySelector(".keyboard-container-eng");
window.addEventListener("keydown", (e) => {
  if (e.code == "AltLeft") {
    // flag = true;
    keyboardContainerRus.classList.remove("keyboard-hidden");
    keyboardContainerEng.classList.add("keyboard-hidden");
  }
});

window.addEventListener("keyup", (e) => {
  if (e.code == "AltLeft") {
    // flag = false;
    keyboardContainerRus.classList.add("keyboard-hidden");
    keyboardContainerEng.classList.remove("keyboard-hidden");
  }
});

// const CapsLock = document.querySelector(".capslock");

// CapsLock.addEventListener("click", () => {
//   CapsLock.classList.toggle("active");
// });

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
      el.getAttribute("keyname") == "MetaLeft"
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
    } else {
      el.classList.add("active");
    }
    textarea.focus();
  })
);

// remove active class from virtual keyboard keys
keys.forEach((el) =>
  el.addEventListener("mouseup", () => {
    if (el.getAttribute("keyname") != "CapsLock") {
      el.classList.remove("active");
    }
  })
);

//clicks on real keyboard
window.addEventListener("keydown", (e) => {
  textarea.focus();
  keys.forEach((el) => {
    if (
      e.key == el.getAttribute("keyname") ||
      e.code == el.getAttribute("keyname") ||
      e.key == el.getAttribute("keynameUpperCase")
    ) {
      el.classList.add("active");
    }
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

// textarea.addEventListener("input", (evt) => {
//   console.log(evt.target.value);
// });
// textarea.addEventListener("input", (evt) => {
//   console.log(evt.data);
//   window.addEventListener("keypress", (e) => {
//     textarea.focus();
//     if (e.key == evt.data) {
//       alert("123");
//     }

//     // if (e.key === evt.data) {
//     //   // keyElement.classList.add("active");
//     //   // alert("1");
//     // }
//     // if (e.key === "2") {
//     //   e.classList.add("active");
//     // }
//   });
// });

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
