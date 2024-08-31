document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get the values entered by the user
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Check if all fields are filled
    if (username && password && role) {
        // Redirect based on role
        if (role === 'Admin') {
            window.location.href = '/Fronted/views/admin.html';
        } else if (role === 'Supervisor') {
            window.location.href = '/Fronted/views/supervisor-dashboard.html';
        } else if (role === 'Therapist') {
            window.location.href = 'Fronted\views\therpist-index.html';
        }
    } else {
        // Display an alert if the fields are not filled properly
        alert('Please fill in all fields.');
    }
});
