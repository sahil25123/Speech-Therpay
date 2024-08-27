document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // You can add more complex validation here
    if (username && password && role) {
        // Handle login logic (e.g., send data to backend)
        alert(`Logged in as ${username} with role ${role}`);
        
        // You can redirect to the dashboard or appropriate page based on the role
        if (role === 'therapist') {
            window.location.href = 'therapist-dashboard.html';
        } else if (role === 'supervisor') {
            window.location.href = 'supervisor-dashboard.html';
        } else if (role === 'admin') {
            window.location.href = 'admin-dashboard.html';
        }
    } else {
        alert('Please fill in all fields');
    }
});
