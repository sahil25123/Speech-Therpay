// Function to toggle the sidebar visibility
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('closed');
}

// Event listener for the DOMContentLoaded event to ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const sidebarToggleBtn = document.querySelector('.toggle-btn');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    // Toggle sidebar visibility on button click
    sidebarToggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('closed');
        mainContent.classList.toggle('shifted');
    });
});

// Optional: Add more interactive features as needed

// Example: Search Bar Functionality
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', function () {
        // Implement search logic here
        const query = searchInput.value.toLowerCase();
        console.log(`Searching for: ${query}`);
        // Filter cards or other content based on the query
    });
});

// Example: User Profile Interaction (Optional)
document.addEventListener('DOMContentLoaded', function () {
    const userProfile = document.querySelector('.user-profile img');
    userProfile.addEventListener('click', function () {
        // Implement user profile dropdown or other interactions here
        alert('User profile clicked!');
    });
});

// Example: Handle card hover interactions for animations
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
        card.addEventListener('mouseenter', function () {
            card.classList.add('hovered');
        });
        card.addEventListener('mouseleave', function () {
            card.classList.remove('hovered');
        });
    });
});
