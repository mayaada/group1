const registerBtn = document.querySelector('#my-form');
const email = document.querySelector('#Email');
const name = document.querySelector('#Name');
const phone = document.querySelector('#Phone');
const password = document.querySelector('#password');
const gender = document.querySelector('#Gender');
const birthday = document.querySelector('#Birthday');

registerBtn.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const emailValue = email.value.trim();
    const nameValue = name.value.trim();
    const passwordValue = password.value.trim();
    const genderValue = gender.value;
    const birthdayValue = birthday.value.trim();
    const phoneValue = phone.value.trim();

    if (emailValue === '' || nameValue === '' || passwordValue === '' || genderValue === '' || birthdayValue === '' || phoneValue === '') {
        alert('Please fill in all fields');
        return;
    }

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(emailValue)) {
        alert('Please enter a valid email address');
        email.focus();
        return;
    }

    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(nameValue)) {
        alert('Please enter a name containing only letters');
        name.focus();
        return;
    }

    if (passwordValue.length < 8) {
        alert('Password must be at least 8 characters long');
        password.focus();
        return;
    }

    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(phoneValue)) {
        alert('Please enter a valid phone number starting with 0 and containing only numbers');
        phone.focus();
        return;
    }


    alert('User information saved successfully!');

    window.db.users.addUser({
        email: emailValue,
        name: nameValue,
        password: passwordValue,
        gender: genderValue,
        birthday: birthdayValue,
        phone: phoneValue,
    });

    localStorage.setItem("user", emailValue);

    window.location.href = 'home-page.html';
}
