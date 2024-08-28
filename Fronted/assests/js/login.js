function handleLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const role = document.getElementById('role').value;

    // Basic validation
    if (username === "" || password === "" || role === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Storing user data in local storage (for demonstration purposes)
    const userData = {
        username: username,
        role: role
    };

    // Save user data to local storage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Clear form fields after submission
    document.getElementById('loginForm').reset();

    // Alert for successful login
    alert(`Logged in as ${role}. Data has been stored.`);

    // Redirect to another page or handle further actions
    return false; // Prevents actual form submission for demonstration
}

// Function to retrieve stored data (optional for testing purposes)
function getStoredUserData() {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
        const { username, role } = JSON.parse(storedData);
        alert(`Stored User: ${username}, Role: ${role}`);
    } else {
        alert("No stored user data found.");
    }
}
