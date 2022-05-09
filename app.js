import { keyLayout, keyLayoutRusUpper } from "./keys.js";
import { keyLayoutUpper } from "./keys.js";
import { keyLayoutRus } from "./keys.js";
// import { keyLayoutRusUpper } from "./keys.js";
import Keyboard from "./keyboard.js";

// CREATE UI
const keyboard = new Keyboard();
keyboard.createKeys(keyLayout);

let keys = document.querySelectorAll(".key");

//styles for ui
keys.forEach((key) => {
  let keyCode = key.getAttribute("keyname");
  if (
    keyCode == "Caps" ||
    keyCode == "ShiftLeft" ||
    keyCode == "ShiftRight" ||
    keyCode == "Enter" ||
    keyCode == "Backspace" ||
    keyCode == "Tab" ||
    keyCode == "CapsLock" ||
    keyCode == "ControlLeft" ||
    keyCode == "ControlRight" ||
    keyCode == "AltLeft" ||
    keyCode == "AltRight" ||
    keyCode == "MetaLeft" ||
    keyCode == "Del" ||
    keyCode == "Space" ||
    keyCode == "ArrowLeft" ||
    keyCode == "ArrowRight" ||
    keyCode == "ArrowUp" ||
    keyCode == "ArrowDown"
  ) {
    key.classList.add("key_colored");
  }
  if (keyCode == "Space") {
    key.classList.add("key_space");
  }
  if (keyCode == "ShiftLeft") {
    key.classList.add("key_shift_left");
    key.classList.add("shift");
    key.innerText = "Shift";
  }
  if (keyCode == "ShiftRight") {
    key.classList.add("key_shift_right");
    key.classList.add("shift");
    key.innerText = "Shift";
  }
  if (keyCode == "AltLeft" || keyCode == "AltRight") {
    key.innerText = "Alt";
  }
  if (keyCode == "MetaLeft") {
    key.innerText = "Win";
  }
  if (keyCode == "ControlLeft" || keyCode == "ControlRight") {
    key.innerText = "Ctrl";
  }
  if (keyCode == "Enter" || keyCode == "CapsLock") {
    key.classList.add("key_wide");
  }
  if (keyCode == "Tab") {
    key.classList.add("key_tab");
  }
  if (keyCode == "CapsLock") {
    key.classList.add("capslock");
  }
  if (keyCode == "Backspace") {
    key.classList.add("key_backspace");
  }
  if (keyCode == "ArrowLeft") {
    key.innerHTML = "◄";
  }
  if (keyCode == "ArrowRight") {
    key.innerHTML = "►";
  }
  if (keyCode == "ArrowUp") {
    key.innerHTML = "▲";
  }
  if (keyCode == "ArrowDown") {
    key.innerHTML = "▼";
  }
});

// virtual keyboard input
const textarea = document.querySelector(".textarea");
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

// remove active class from virtual keyboard keys
keys.forEach((el) =>
  el.addEventListener("mousedown", () => {
    if (
      el.getAttribute("keyname") != "CapsLock" &&
      el.getAttribute("keyname") != "ShiftLeft" &&
      el.getAttribute("keyname") != "ShiftRight"
    ) {
      el.classList.add("active");
      textarea.focus();
      setTimeout(removeActive, 300);
    }
  })
);

// remove active class from virtual keyboard keys
const removeActive = () => {
  keys.forEach((el) => {
    if (
      el.getAttribute("keyname") != "CapsLock" &&
      el.getAttribute("keyname") != "ShiftLeft" &&
      el.getAttribute("keyname") != "ShifRight"
    ) {
      el.classList.remove("active");
    }
  });
};

//clicks on real keyboard
window.addEventListener("keydown", (e) => {
  textarea.focus();
  if (e.key != "CapsLock" && e.code != "ShiftLeft" && e.code != "ShiftRight") {
    keys.forEach((el) => {
      if (
        e.key == el.getAttribute("keyname") ||
        e.code == el.getAttribute("keyname") ||
        e.key == el.getAttribute("keynameUpperCase")
      ) {
        el.classList.add("active");
      }
      setTimeout(removeActive, 300);
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
  }
});

// window.addEventListener("keyup", (e) => {
//   keys.forEach((el) => {
//     if (
//       e.key == el.getAttribute("keyname") ||
//       e.code == el.getAttribute("keyname") ||
//       e.key == el.getAttribute("keynameUpperCase")
//     ) {
//       el.classList.remove("active");
//     }
//   });
// });

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

const capsLock = document.querySelector(".capslock");

capsLock.addEventListener("click", () => {
  capsLock.classList.toggle("active-toggle");
});

window.addEventListener("keydown", (e) => {
  if (e.key == "CapsLock") {
    capsLock.classList.toggle("active-toggle");
  }
});

const shift = document.querySelector(".shift");

shift.addEventListener("mousedown", () => {
  shift.classList.add("active-toggle");
});
shift.addEventListener("mouseup", () => {
  shift.classList.remove("active-toggle");
});

window.addEventListener("keydown", (e) => {
  if (e.key == "Shift") {
    shift.classList.add("active-toggle");
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key == "Shift") {
    shift.classList.remove("active-toggle");
  }
});

const uppercase = () => {
  if (keys[15].textContent === "q") {
    keys.forEach((key, index) => {
      key.innerHTML = keyLayoutUpper[index];
    });
  } else if (keys[15].textContent === "Q") {
    keys.forEach((key, index) => {
      key.innerHTML = keyLayout[index];
    });
  } else if (keys[15].textContent === "й") {
    keys.forEach((key, index) => {
      key.innerHTML = keyLayoutRusUpper[index];
    });
  } else if (keys[15].textContent === "Й") {
    keys.forEach((key, index) => {
      key.innerHTML = keyLayoutRus[index];
    });
  }
};

// CAPSLOCK UPPERCASE
window.addEventListener("keydown", (e) => {
  if (e.key == "CapsLock") {
    uppercase();
  }
});

capsLock.addEventListener("click", () => {
  uppercase();
});

// SHIFT UPPERCASE
// shift keydown
window.addEventListener("keydown", (e) => {
  if (e.key == "Shift") {
    if (e.repeat) {
      return;
    }
    uppercase();
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key == "Shift") {
    if (e.repeat) {
      return;
    }
    uppercase();
  }
});

// shift mousedown
shift.addEventListener("mousedown", () => {
  uppercase();
});

shift.addEventListener("mouseup", () => {
  uppercase();
});
