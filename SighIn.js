// Function to handle form submission
function signUp() {
    // Get form inputs
    var email = document.getElementById('Email').value;
    var password = document.getElementById('password').value;

    // Perform basic validation
    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    // You can perform more advanced validation here, like checking email format

    // Simulate sending data to a backend server
    // Here, we'll just log the data to the console
    console.log("Signing up user:");
    console.log("Email: " + email);
    console.log("Password: " + password);

    // Clear form fields after submission
    document.getElementById('Email').value = '';
    document.getElementById('password').value = '';

    // You can optionally redirect the user or show a success message here
}

// Add event listener to the sign-up button
document.getElementById('signUpBtn').addEventListener('click', signUp);
