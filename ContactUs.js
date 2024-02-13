// Function to handle form submission
function sendContactForm() {
    // Get form inputs
    var email = document.getElementById('Email').value;
    var name = document.getElementById('Name').value;
    var phone = document.getElementById('Phone').value;
    var content = document.getElementById('Content').value;

    // Perform basic validation
    if (!email || !name || !content) {
        alert("Please fill out all required fields.");
        return;
    }

    // Simulate sending data to a backend server
    // Here, we'll just log the data to the console
    console.log("Contact Form Submission:");
    console.log("Email: " + email);
    console.log("Name: " + name);
    console.log("Phone: " + phone);
    console.log("Content: " + content);

    // Clear form fields after submission
    document.getElementById('Email').value = '';
    document.getElementById('Name').value = '';
    document.getElementById('Phone').value = '';
    document.getElementById('Content').value = '';

    // You can optionally redirect the user or show a success message here
}

// Add event listener to the send button
document.getElementById('sendBtn').addEventListener('click', sendContactForm);
