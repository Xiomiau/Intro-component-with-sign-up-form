const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#emailAdress');
const password = document.querySelector('#password');

const firstNameError = document.querySelector('#firstNameError');
const LastNameError = document.querySelector('#lastNameError');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');

const sumbit = document.querySelector('#button');

sumbit.addEventListener('click', (e)=> {
    e.preventDefault()
    validateEmpty(firstName.value, firstName);
});

function validateEmpty (valueInput, divError) {
    if(valueInput==0) {
        showError(divError)
    } else {
        hideError()
    }
}

function showError (divError) {
    divError.style.border='1px solid red';
}

function hideError(divError) {

}


