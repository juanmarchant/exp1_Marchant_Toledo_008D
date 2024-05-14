const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const passwordInput = document.querySelector('#passwordInput');
const btnSubmit = document.querySelector('#form button[type="submit"]')
const form = document.querySelector('#form');

const registration = {
    name: '',
    email: '',
    password: ''
}


document.addEventListener('DOMContentLoaded', () => {


    nameInput.addEventListener('input', validateNameInput);

    emailInput.addEventListener('input', validateEmailInput);

    passwordInput.addEventListener('input', validatePasswordInput);

    form.addEventListener('submit', checkForm);

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

        // console.log(isValid)

        target.parentElement.appendChild(feedback);
    } else {
        feedbackAlert.innerHTML = feedbackMessage;
        feedbackAlert.classList.remove(isValid ? 'invalid-feedback' : 'valid-feedback');
        feedbackAlert.classList.add(isValid ? 'valid-feedback' : 'invalid-feedback');

        nameInput.classList.remove(isValid ? 'is-invalid' : 'is-valid');
        nameInput.classList.add(isValid ? 'is-valid' : 'is-invalid');
    }

    if (isValid) {
        registration['name'] = target.value
        validateForm()
    } else {
        registration['name'] = ''
        validateForm()
    }
};

const validateEmailInput = ({ target }) => {
    const email = target.value.trim();
    const isValid = email.includes('@');
    const feedbackAlert = document.querySelector('#feedbackEmailInput');
    const feedbackMessage = isValid ? 'Looks Good!' : 'The email should have @';

    if (!feedbackAlert) {
        const feedback = document.createElement('div');
        feedback.classList.add(isValid ? 'valid-feedback' : 'invalid-feedback');
        feedback.id = 'feedbackEmailInput';
        feedback.innerHTML = feedbackMessage;

        emailInput.classList.remove('is-valid', 'is-invalid');
        emailInput.classList.add(isValid ? 'is-valid' : 'is-invalid');


        target.parentElement.appendChild(feedback);
    } else {
        feedbackAlert.innerHTML = feedbackMessage;
        feedbackAlert.classList.remove(isValid ? 'invalid-feedback' : 'valid-feedback');
        feedbackAlert.classList.add(isValid ? 'valid-feedback' : 'invalid-feedback');

        emailInput.classList.remove(isValid ? 'is-invalid' : 'is-valid');
        emailInput.classList.add(isValid ? 'is-valid' : 'is-invalid');
    }

    if (isValid) {
        registration['email'] = target.value
        validateForm()
    } else {
        registration['email'] = ''
        validateForm()
    }
}

const validatePasswordInput = ({ target }) => {
    const passwordLength = target.value.trim().length;
    const feedbackAlert = document.querySelector('#feedbackPasswordInput');
    const feedbackMessage = passwordLength >= 6 ? 'Looks Good!' : 'The password should have 6 or more characters';
    const isValid = passwordLength >= 6;

    if (!feedbackAlert) {
        const feedback = document.createElement('div');
        feedback.classList.add(isValid ? 'valid-feedback' : 'invalid-feedback');
        feedback.id = 'feedbackPasswordInput';
        feedback.innerHTML = feedbackMessage;

        passwordInput.classList.remove('is-valid', 'is-invalid');
        passwordInput.classList.add(isValid ? 'is-valid' : 'is-invalid');

        registration['password'] = target.value
        validateForm()
        target.parentElement.appendChild(feedback);
    } else {
        feedbackAlert.innerHTML = feedbackMessage;
        feedbackAlert.classList.remove(isValid ? 'invalid-feedback' : 'valid-feedback');
        feedbackAlert.classList.add(isValid ? 'valid-feedback' : 'invalid-feedback');

        passwordInput.classList.remove(isValid ? 'is-invalid' : 'is-valid');
        passwordInput.classList.add(isValid ? 'is-valid' : 'is-invalid');
    }

    if (isValid) {
        registration['password'] = target.value
        validateForm()
    } else {
        registration['password'] = ''
        validateForm()
    }
}


const validateForm = () => {
    if (!Object.values(registration).includes("")) {
        btnSubmit.disabled = false;
        return;
    }
    btnSubmit.disabled = true
}
const checkForm = (event) => {
    event.preventDefault();
    console.log('enviando register')
}