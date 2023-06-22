import { nanoid } from 'nanoid';
import './style.css';

const passwordBtnEl = document.querySelector('button');
const displaypasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
    displaypasswordEl.innerHTML = nanoid();
});

