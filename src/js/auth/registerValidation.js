


//Todo
// 1.Obtener valores de los inputs
// 2.Validar
/*
    Name:  Tiene que tener mas o igual 7 caracter
    Email: Tiene que tener @
    Password:  Tiene que tener al menos 6 caracteres.

    Si alguna de las cosas pasar deberia de mostrar una alerta en el formularop
    Si todo sale bien, saldria una alertta de que todo salio bien y que la cuenta fue creada exitosamente
*/

const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const passwordInput = document.querySelector('#passwordInput');
const form = document.querySelector('form');


document.addEventListener('DOMContentLoaded', () => {


    nameInput.addEventListener('input', validateNameInput);

    emailInput.addEventListener('input', validateEmailInput);

    // passwordInput.addEventListener('input', validatePasswordInput);

    // form.addEventListener('submit', checkForm);

})


const validateNameInput = ({ target }) => {

    const nameLength = target.value.trim().length;
    const feedbackAlert = document.querySelector('#feedbackNameInput');
    const feedbackMessage = nameLength >= 7 ? 'Looks Good!' : 'The name should have 7 or more characters';
    const isValid = nameLength >= 7;

    if (!feedbackAlert) {
        const feedback = document.createElement('div');
        feedback.classList.add(isValid ? 'valid-feedback' : 'invalid-feedback');
        feedback.id = 'feedbackNameInput';
        feedback.innerHTML = feedbackMessage;

        nameInput.classList.remove('is-valid', 'is-invalid');
        nameInput.classList.add(isValid ? 'is-valid' : 'is-invalid');

        target.parentElement.appendChild(feedback);
    } else {
        feedbackAlert.innerHTML = feedbackMessage;
        feedbackAlert.classList.remove(isValid ? 'invalid-feedback' : 'valid-feedback');
        feedbackAlert.classList.add(isValid ? 'valid-feedback' : 'invalid-feedback');

        nameInput.classList.remove(isValid ? 'is-invalid' : 'is-valid');
        nameInput.classList.add(isValid ? 'is-valid' : 'is-invalid');
    }
};


