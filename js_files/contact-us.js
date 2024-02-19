const form = document.querySelector('#my-form');
const email = document.querySelector('#Email');
const name = document.querySelector('#Name');
const phone = document.querySelector('#Phone');
const content = document.querySelector('#Content');

document.getElementById('my-form').addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const emailValue = email.value.trim();
    const nameValue = name.value.trim();
    const phoneValue = phone.value.trim();
    const contentValue = content.value.trim();

    if (emailValue === '' || nameValue === '' || phoneValue === '' || contentValue === '') {
        alert('Please fill out all required fields.');
        return;
    }

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(emailValue)) {
        alert('Please enter a valid email address');
        email.focus();
        return;
    }

    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(phoneValue)) {
        alert('Please enter a valid phone number starting with 0');
        phone.focus();
        return;
    }

    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(nameValue)) {
        alert('Please enter a name containing only letters');
        name.focus();
        return;
    }

    window.location.href = "ThankYouPage.html"
}

