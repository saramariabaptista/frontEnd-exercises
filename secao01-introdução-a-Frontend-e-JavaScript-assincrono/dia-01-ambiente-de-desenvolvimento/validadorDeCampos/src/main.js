import validator from 'validator';
import './style.css';

const textField = document.querySelector('#textvalue');
const dropDown = document.querySelector('#options');
const validateBtn = document.querySelector('#btn');
const result = document.querySelector('#result');

validateBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const elements = {
        email: validator.isEmail(textField.value),
        cpf: validator.isTaxID(textField.value, 'pt-BR'),
        data: validator.isDate(textField.value, 'DD/MM/YYYY'),
        url: validator.isURL(textField.value),
        hexColor: validator.isHexColor(textField.value),
    };

    result.innerHTML = `A validação retornou ${elements[dropDown.value]}`;
})