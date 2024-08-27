document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    let valid = true;

    // Username validation
    if (username.length < 3) {
        document.getElementById('usernameFeedback').textContent = 'Username must be at least 3 characters';
        document.getElementById('usernameFeedback').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('usernameFeedback').style.display = 'none';
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById('passwordFeedback').textContent = 'Password must be at least 6 characters';
        document.getElementById('passwordFeedback').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('passwordFeedback').style.display = 'none';
    }

    if (valid) {
        // Handle login logic (e.g., send data to backend)
        alert(`Logged in as ${username} with role ${role}`);
        
        // Redirect to the appropriate dashboard based on role
        if (role === 'therapist') {
            window.location.href = 'therapist-dashboard.html';
        } else if (role === 'supervisor') {
            window.location.href = 'supervisor-dashboard.html';
        } else if (role === 'admin') {
            window.location.href = 'admin-dashboard.html';
        }
    }
});
