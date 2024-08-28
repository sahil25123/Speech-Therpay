document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    clearErrors();

    // Get form values
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const sex = document.getElementById("sex").value;
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const specialization = document.getElementById("specialization").value;
    const qualification = document.getElementById("qualification").value.trim();
    const experience = document.getElementById("experience").value;
    const address = document.getElementById("address").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    let isValid = true;

    // Validate fields
    if (firstName === "") {
        showError("first-name-error", "First name is required");
        isValid = false;
    }

    if (lastName === "") {
        showError("last-name-error", "Last name is required");
        isValid = false;
    }

    if (sex === "") {
        showError("sex-error", "Sex is required");
        isValid = false;
    }

    if (!validateEmail(email)) {
        showError("email-error", "Invalid email format");
        isValid = false;
    }

    if (!validatePhone(phone)) {
        showError("phone-error", "Invalid phone number");
        isValid = false;
    }

    if (specialization === "") {
        showError("specialization-error", "Specialization is required");
        isValid = false;
    }

    if (qualification === "") {
        showError("qualification-error", "Qualification is required");
        isValid = false;
    }

    if (experience === "" || experience < 0) {
        showError("experience-error", "Experience must be a positive number");
        isValid = false;
    }

    if (address === "") {
        showError("address-error", "Address is required");
        isValid = false;
    }

    if (password === "") {
        showError("password-error", "Password is required");
        isValid = false;
    }

    if (password !== confirmPassword) {
        showError("confirm-password-error", "Passwords do not match");
        isValid = false;
    }

    if (isValid) {
        alert("Signup successful!");
        // Here you can handle the form submission, e.g., sending data to the server
        document.getElementById("signupForm").reset();
    }
});

function showError(elementId, errorMessage) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = errorMessage;
    errorElement.style.display = "block";
}

function clearErrors() {
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(function(element) {
        element.style.display = "none";
        element.textContent = "";
    });
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
}
