// signup.js
function validateForm() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const specialization = document.getElementById('specialization').value;
    const experience = document.getElementById('experience').value;

    // Example of simple validation
    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' ||
        password.trim() === '' || phone.trim() === '' || specialization.trim() === '' ||
        experience.trim() === '') {
        alert('All fields are required.');
        return false;
    }

    // Additional checks (e.g., password strength) can be added here

    return true; // Allow form submission
}
