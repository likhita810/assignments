// accessing the ids
const form = document.getElementById("form");
const username = document.getElementById("username");
const emailaddress = document.getElementById("emailaddress");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector("small");
    small.innerText = message;
};

// show input success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// check username is valid -
function checkUsername(username) {
    const regExp = /^(?=[\w.-]{5,20})(?:[\d_.-]*[a-zA-Z]){3}[\w.-]*$/;
    // first set specifies any word (lower/uppercase chars, nums, sp symbols) length should be btw 5-20
    // sec set signifies >=0 occurance of any digits,_,.,- and 3 chars from a-z/A-Z and >=0 occarance of words.

    // ?= matches string only that is followed by sp string, simply, this is more specific n particular
    // ?: matches specific string with any string
    if (regExp.test(username.value.trim())) {
        showSuccess(username);
    } else {
        showError(username, 'username is not valid');
    }
}

// check emailaddress is valid -
function checkEmailaddress(emailaddress) {
    const regExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (regExp.test(emailaddress.value.trim())) {
        showSuccess(emailaddress);
    } else {
        showError(emailaddress, 'emailaddres is not valid');
    }
}

// check password is valid -
function checkPassword(password) {
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w!@#$%^&*?~()-]{8,}$/;
    if (regExp.test(password.value.trim())) {
        showSuccess(password);
    } else {
        showError(password, 'password is not valid');
    }
}

// check password2 is valid -
function checkPassword2(password2) {
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w!@#$%^&*?~()-]{8,}$/;
    if (regExp.test(password2.value.trim())) {
        showSuccess(password2);
    } else {
        showError(password2, 'password is not valid');
    }
}

// Check required fields
// checking if the fields are left empty
function checkRequired (inputArr) {
    inputArr.forEach (function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// check input length 
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be atleast ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// confirm password
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

// getFieldName
function getFieldName (input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    // the first char of the field name is capitalized to show in error text
}


// Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // to prevent previous catch action

    // checking whether user entered or not
    checkRequired([username, emailaddress, password, password2]);

    // checking the values are in the range of min & max
    checkLength(username, 5, 18);
    checkLength(emailaddress, 10, 25);
    checkLength(password, 6, 12);
    checkLength(password2, 6, 12);

    // checking inputs individually
    checkUsername(username);
    checkEmailaddress(emailaddress);
    checkPassword(password);
    checkPassword2(password2);

    // checking if passwords are matching
    checkPasswordMatch(password, password2);
})