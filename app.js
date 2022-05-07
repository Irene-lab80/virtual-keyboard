const container = document.getElementById("root");

// create textarea
const textarea = document.createElement("textarea");
textarea.classList.add("textarea");
container.append(textarea);

// create container
const keyboardContainer = document.createElement("div");
keyboardContainer.classList.add("keyboard-container");
keyboardContainer.classList.add("unselectable");
container.append(keyboardContainer);

// create message
const message = document.createElement("div");
message.classList.add("message");
message.innerHTML =
  "<p>Клавиатура создана в операционной системе Windows <br> Для переключения языка комбинация: левыe ctrl + alt</p>";
container.append(message);

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
  "Shift",
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
  "^",
  "Shift",
  "Ctrl",
  "Win",
  "Alt",
  "Space",
  "Alt",
  "<",
  "v",
  ">",
  "Ctrl",
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
  "Shift",
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
  "^",
  "Shift",
  "Ctrl",
  "Win",
  "Alt",
  "Space",
  "Alt",
  "<",
  "v",
  ">",
  "Ctrl",
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

let flag = false;

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
const createLayout = () => {
  let langLayout;
  if (flag === false) {
    console.log("123");
    langLayout = keyLayout;
  } else {
    langLayout = keyLayoutRus;
  }

  langLayout.forEach((key, index) => {
    // const insertLineBreak = ["backspace", "ъ", "enter", "."].indexOf(key) !== -1;
    const insertLineBreak =
      index == 13 || index == 28 || index == 41 || index == 54;

    const keyElement = document.createElement("div");
    keyElement.classList.add("key");
    keyElement.innerText = key;
    keyElement.setAttribute("keyname", key);
    keyboardContainer.append(keyElement);

    if (insertLineBreak) {
      keyboardContainer.append(document.createElement("br"));
    }

    if (
      key == "Caps" ||
      key == "Shift" ||
      key == "Enter" ||
      key == "Backspace" ||
      key == "Tab" ||
      key == "CapsLock" ||
      key == "Ctrl" ||
      key == "Alt" ||
      key == "CapsLock" ||
      key == "Win" ||
      key == "Del" ||
      key == "Space"
    ) {
      // console.log("ok");
      keyElement.classList.add("key_colored");
    }
    if (key == "Space") {
      // console.log("ok");
      keyElement.classList.add("key_space");
    }
    if (
      key == "Shift" ||
      key == "Enter" ||
      key == "Backspace" ||
      key == "CapsLock"
    ) {
      keyElement.classList.add("key_wide");
    }
    if (key == "Tab") {
      keyElement.classList.add("key_tab");
    }
  });
};

createLayout();

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
      el.getAttribute("keyname") == "Alt" ||
      el.getAttribute("keyname") == "Ctrl" ||
      el.getAttribute("keyname") == "Win"
    ) {
      textarea.value;
    } else {
      textarea.value = textarea.value + el.getAttribute("keyname");
    }
  })
);

// add active class from virtual keyboard keys
keys.forEach((el) =>
  el.addEventListener("mousedown", () => {
    el.classList.add("active");
    textarea.focus();
  })
);

// remove active class from virtual keyboard keys
keys.forEach((el) =>
  el.addEventListener("mouseup", () => {
    el.classList.remove("active");
  })
);

//clicks on real keyboard
window.addEventListener("keydown", (e) => {
  textarea.focus();

  keys.forEach((el) => {
    if (e.key == el.getAttribute("keyname")) {
      el.classList.add("active");
      // console.log(el.getAttribute("keyname"));
      // console.log(el);
    }
  });
});

window.addEventListener("keyup", (e) => {
  keys.forEach((el) => {
    if (e.key == el.getAttribute("keyname")) {
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
