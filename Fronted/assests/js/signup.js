// signup.js
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Clear previous error messages
    clearErrors();

    // Validate form fields
    let isValid = true;

    // Fetch form values
    const username = document.getElementById('username').value.trim();
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const specialization = document.getElementById('specialization').value;
    const experience = document.getElementById('experience').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Basic validation logic
    if (username === '') {
        showError('username-error', 'Username is required.');
        isValid = false;
    }

    if (firstName === '') {
        showError('first-name-error', 'First name is required.');
        isValid = false;
    }

    if (lastName === '') {
        showError('last-name-error', 'Last name is required.');
        isValid = false;
    }

    if (email === '') {
        showError('email-error', 'Email is required.');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('email-error', 'Enter a valid email address.');
        isValid = false;
    }

    if (phone === '') {
        showError('phone-error', 'Phone number is required.');
        isValid = false;
    } else if (!validatePhone(phone)) {
        showError('phone-error', 'Enter a valid phone number.');
        isValid = false;
    }

    if (specialization === '') {
        showError('specialization-error', 'Please select your specialization.');
        isValid = false;
    }

    if (experience === '') {
        showError('experience-error', 'Please provide your years of experience.');
        isValid = false;
    }

    if (password === '') {
        showError('password-error', 'Password is required.');
        isValid = false;
    } else if (password.length < 6) {
        showError('password-error', 'Password must be at least 6 characters.');
        isValid = false;
    }

    if (confirmPassword !== password) {
        showError('confirm-password-error', 'Passwords do not match.');
        isValid = false;
    }

    // If valid, display a success message or proceed to submit data
    if (isValid) {
        alert('Sign up successful!');
        // Here you can add code to submit the form data to your server
        document.getElementById('signupForm').reset();
    }
});

// Function to show error messages
function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Function to clear all error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.style.display = 'none');
}

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Phone number validation function
function validatePhone(phone) {
    const re = /^[0-9]{10}$/; // Assuming a 10-digit phone number format
    return re.test(phone);
}
