const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Check if email is valid
function isValidEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        );
}

function checkEmail(input) {
    if (isValidEmail(input.value)) {
        showSuccess(input)
    } else {
        showError(input, `Not a valid email`)
    }
}

// Show input error message
function showError(input, message) {
    let formControl = input.parentElement;
    formControl.className = 'form_control error';
    let small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input, message) {
    let formControl = input.parentElement;
    formControl.className = 'form_control success';
}

// Check all the fields
function checkRequired(inputArray) {
    inputArray.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${capitalize(input.id)} is required`)
        } else {
            showSuccess(input)
        }
    })
}

// Check the length of the input
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${capitalize(input.id)} must be at least ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${capitalize(input.id)} must be at most ${max} characters`)
    } else {
        showSuccess(input)
    }
}

// Check if passwords match
function checkPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, `Passwords do not match`)
    }
}

// Capitalize field name
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault()
    checkRequired([username, email, password, password2])
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswords(password, password2);
})
