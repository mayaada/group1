const form = document.querySelector('#my-form');
const emailInput = document.querySelector('#Email');
const passwordInput = document.querySelector('#password');

document.getElementById('signUpBtn').addEventListener('click', signUp);

function signUp(event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (!emailValue || !passwordValue) {
        alert("Please enter both email and password.");
        return;
    }
    window.userInfo = {
        email : emailValue ,
        password: passwordValue
    };
    window.open('advanced-movie-search.html' , window.userInfo);

}

