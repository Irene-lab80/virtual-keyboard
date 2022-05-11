import { keyLayout } from './keys.js';

export default class Keyboard {
  constructor() {
    this.root = document.getElementById('root');

    // create title
    this.title = document.createElement('h1');
    this.title.classList.add('title');
    this.title.innerHTML = 'RSS Virtual Keyboard';
    this.root.append(this.title);

    // create textarea
    this.textarea = document.createElement('textarea');
    this.textarea.classList.add('textarea');
    this.root.append(this.textarea);

    // create message
    this.message = document.createElement('div');
    this.message.classList.add('message');
    this.keyboardContainer = document.createElement('div');
    this.keyboardContainer.classList.add('keyboard-container');
    this.keyboardContainer.classList.add('unselectable');
    this.root.append(this.keyboardContainer);
    this.message.innerHTML = '<p>Клавиатура создана в операционной системе Windows <br> Переключение языка: <li>левыe ctrl + alt</li> <li> клавиша Win на виртуальной клавиатуре</li></p>';
    this.root.append(this.message);
  }

  createKeys() {
    keyLayout.forEach((key, index) => {
      this.insertLineBreak = index === 13 || index === 28 || index === 41 || index === 54;
      this.keyElement = document.createElement('div');
      this.keyElement.classList.add('key');
      this.keyElement.innerText = key;
      this.keyElement.setAttribute('keyname', key);
      this.keyElement.setAttribute('keynameUpperCase', key.toUpperCase());
      this.keyboardContainer.append(this.keyElement);

      if (this.insertLineBreak) {
        this.keyboardContainer.append(document.createElement('br'));
      }
    });
  }
}
