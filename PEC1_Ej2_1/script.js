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

//Check whether the age is correct
function checkAge(input) {
    if (+input.value < 0) {
        showError(input, "Age cannot be negative")
    } else if (+input.value > 1000) {
        showError(input, "Age cannot be above 1000 years")
    }
}

// Check if passwords match
function checkPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, `Passwords do not match`)
    }
}

// Check if password has all the letters/numbers/special chars it must have

function isPasswordCorrect(input) {
    // Check if the password contains at least one uppercase letter
    if (!/[A-Z]/.test(input)) {
        isMissing = 'one uppercase letter'
        return isMissing;
    }

    // Check if the password contains at least one number
    if (!/\d/.test(input)) {
        isMissing = 'one number'
        return isMissing;
    }

    // Check if the password contains at least one special character
    if (!/[~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(input)) {
        isMissing = 'a special character'
        return isMissing;
    }

    // If all conditions are met, return true
    return true;
}

function checkPassword(input) {
    validationResult = isPasswordCorrect(input.value)
    if (typeof validationResult === 'string') {
        showError(input, `Must have at least ${validationResult}`)
    }
}

// Capitalize field name
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault()
    checkRequired([username, age, email, password, password2])
    checkLength(username, 3, 15);
    checkLength(password, 8, 25);
    checkAge(age)
    checkEmail(email);
    checkPassword(password);
    checkPasswords(password, password2);
})
