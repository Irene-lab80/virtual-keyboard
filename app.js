import { keyLayout } from "./keys.js";
import { keyLayoutUpper } from "./keys.js";
import { keyLayoutRus } from "./keys.js";
import { keyLayoutRusUpper } from "./keys.js";
import Keyboard from "./keyboard.js";

// CREATE UI
const keyboard = new Keyboard();
keyboard.createKeys(keyLayout);

let keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.setAttribute("id", key.innerHTML);
});

//styles for ui
keys.forEach((key) => {
  let keyCode = key.getAttribute("keyname");
  if (
    keyCode == "Caps" ||
    keyCode == "ShiftL" ||
    keyCode == "ShiftR" ||
    keyCode == "Enter" ||
    keyCode == "Backspace" ||
    keyCode == "Tab" ||
    keyCode == "CapsLock" ||
    keyCode == "Ctrl" ||
    keyCode == "Alt" ||
    keyCode == "Win" ||
    keyCode == "Del" ||
    keyCode == "Space" ||
    keyCode == "◄" ||
    keyCode == "►" ||
    keyCode == "▲" ||
    keyCode == "▼"
  ) {
    key.classList.add("key_colored");
  }
  if (keyCode == "Space") {
    key.classList.add("key_space");
  }
  if (keyCode == "ShiftL") {
    key.classList.add("key_shift_left");
    key.classList.add("shift");
  }
  if (keyCode == "ShiftR") {
    key.classList.add("key_shift_right");
    key.classList.add("shift");
  }
  if (keyCode == "Alt" || keyCode == "Alt") {
    key.innerText = "Alt";
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
      el.getAttribute("keyname") == "Alt" ||
      el.getAttribute("keyname") == "Alt" ||
      el.getAttribute("keyname") == "Ctrl" ||
      el.getAttribute("keyname") == "Ctrl" ||
      el.getAttribute("keyname") == "Win" ||
      el.getAttribute("keyname") == "ShiftL" ||
      el.getAttribute("keyname") == "ShiftR" ||
      el.getAttribute("keyname") == "CapsLock"
    ) {
      textarea.value;
    } else {
      textarea.value = textarea.value + el.innerHTML;
    }
  })
);

// remove active class from virtual keyboard keys
keys.forEach((el) =>
  el.addEventListener("mousedown", () => {
    if (
      el.getAttribute("keyname") != "CapsLock" &&
      el.getAttribute("keyname") != "ShiftL" &&
      el.getAttribute("keyname") != "ShiftR"
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
      el.getAttribute("keyname") != "ShiftL" &&
      el.getAttribute("keyname") != "ShiftR"
    ) {
      el.classList.remove("active");
    }
  });
};

//clicks on real keyboard
window.addEventListener("keydown", (e) => {
  textarea.focus();
  if (e.repeat) {
    return;
  }
  if (e.key != "CapsLock" && e.code != "ShiftLeft" && e.code != "ShiftRight") {
    keys.forEach((el) => {
      if (
        e.key == el.getAttribute("keyname") ||
        e.code == el.getAttribute("keyname") ||
        e.key == el.getAttribute("keynameUpperCase")
      ) {
        el.classList.add("active-toggle");
      }
    });
    if (e.key == "ArrowLeft") {
      textarea.value = textarea.value + "◄";
    } else if (e.key == "ArrowRight") {
      textarea.value = textarea.value + "►";
    } else if (e.key == "ArrowUp") {
      textarea.value = textarea.value + "▲";
    } else if (e.key == "ArrowDown") {
      textarea.value = textarea.value + "▼";
    }
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key != "CapsLock" && e.code != "ShiftLeft" && e.code != "ShiftRight") {
    keys.forEach((el) => {
      if (
        e.key == el.getAttribute("keyname") ||
        e.code == el.getAttribute("keyname") ||
        e.key == el.getAttribute("keynameUpperCase")
      ) {
        el.classList.remove("active-toggle");
      }
    });
    if (e.key == "◄") {
      textarea.selectionStart = textarea.value.length;
    }
  }
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
  if (e.code === "ShiftLeft" || e.code === "ShiftRigth") {
    shift.classList.add("active-toggle");
  }
});

window.addEventListener("keyup", (e) => {
  if (e.code === "ShiftLeft" || e.code === "ShiftRigth") {
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
    if (e.repeat) {
      return;
    }
    uppercase();
  }
});

capsLock.addEventListener("click", () => {
  uppercase();
});

// SHIFT UPPERCASE
// shift keydown
window.addEventListener("keydown", (e) => {
  if (e.code === "ShiftLeft" || e.code === "ShiftRigth") {
    if (e.repeat) {
      return;
    }
    uppercase();
  }
});

window.addEventListener("keyup", (e) => {
  if (e.code === "ShiftLeft" || e.code === "ShiftRigth") {
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

const changeLanguage = () => {
  if (keys[15].textContent === "q") {
    keys.forEach((key, index) => {
      key.innerHTML = keyLayoutRus[index];
    });
  } else if (keys[15].textContent === "Q") {
    keys.forEach((key, index) => {
      key.innerHTML = keyLayoutRusUpper[index];
    });
  } else if (keys[15].textContent === "й") {
    keys.forEach((key, index) => {
      key.innerHTML = keyLayout[index];
    });
  } else if (keys[15].textContent === "Й") {
    keys.forEach((key, index) => {
      key.innerHTML = keyLayoutUpper[index];
    });
  }
};

const win = document.getElementById("Win");
win.addEventListener("click", () => {
  changeLanguage();
});

document.onkeydown = (e) => {
  if (e.code == "ControlLeft") {
    document.onkeyup = (e) => {
      if (e.code == "AltLeft") {
        changeLanguage();
      }
    };
  }
};
