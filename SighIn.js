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

    localStorage.setItem("user",emailValue)

    window.open('home-page.html');

}

