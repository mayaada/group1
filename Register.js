// Function to validate email format
function validateEmail(email) {
    // Regular expression for email format
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Function to handle form submission
function register() {
    // Get form inputs
    var email = document.getElementById('Email').value;
    var name = document.getElementById('Name').value;
    var password = document.getElementById('password').value;
    var gender = document.getElementById('Gender').value;
    var birthday = document.getElementById('Birthday').value;

    // Perform basic validation
    if (!email || !name || !password || !gender || !birthday) {
        alert("Please fill out all fields.");
        return;
    }

    // Validate email format
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Simulate sending data to a backend server
    // Here, we'll just log the data to the console
    console.log("Registering new user:");
    console.log("Email: " + email);
    console.log("Name: " + name);
    console.log("Password: " + password);
    console.log("Gender: " + gender);
    console.log("Birthday: " + birthday);

    // Clear form fields after submission
    document.getElementById('Email').value = '';
    document.getElementById('Name').value = '';
    document.getElementById('password').value = '';
    document.getElementById('Gender').value = 'male'; // Reset gender to default
    document.getElementById('Birthday').value = '';

    // You can optionally redirect the user or show a success message here
}

// Add event listener to the register button
document.getElementById('registerBtn').addEventListener('click', register);
