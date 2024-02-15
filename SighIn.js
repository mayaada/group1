const form = document.querySelector('#my-form');
const emailInput = document.querySelector('#Email');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', signUp);

function signUp(event) {

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (!emailValue || !passwordValue) {
        alert("Please enter both email and password.");
        return;
    }

    localStorage.setItem("user", emailValue)
    const newWindow =window.open('home-page.html');
    window.close();
}
