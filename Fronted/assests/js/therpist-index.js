// Toggle Sidebar
// document.addEventListener('DOMContentLoaded', function() {
//     const sidebar = document.querySelector('.sidebar');
//     const toggleButton = document.createElement('button');
//     toggleButton.innerText = 'Toggle Sidebar';
//     toggleButton.style.position = 'fixed';
//     toggleButton.style.top = '10px';
//     toggleButton.style.left = '10px';
//     toggleButton.style.zIndex = '1000';

//     document.body.appendChild(toggleButton);

//     toggleButton.addEventListener('click', function() {
//         sidebar.classList.toggle('hidden');
//     });
// });

// Example: Display current date in Recent Activities
document.addEventListener('DOMContentLoaded', function() {
    const recentActivities = document.querySelector('.recent-activities');
    const today = new Date().toLocaleDateString();
    recentActivities.innerHTML += `<ul><li><strong>System</strong> displayed today's date (${today}) in Recent Activities.</li></ul>`;
});
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('sidebarToggle');
    const mainContent = document.getElementById('mainContent');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('closed');
        mainContent.classList.toggle('shifted');
    });
});
