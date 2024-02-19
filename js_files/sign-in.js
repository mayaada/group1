const form = document.querySelector('#my-form');
const emailInput = document.querySelector('#Email');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', signUp);

function signUp(event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (!emailValue || !passwordValue) {
        alert("Please enter both email and password.");
        return;
    }

    const foundUser = window.db.users.get(emailValue, passwordValue);

    if (!foundUser) {
        alert("Username or password are incorrect, to create a new user go to the register page.");
        return;
    }

    localStorage.setItem("user", emailValue);
    window.location.href = 'home-page.html';
}
