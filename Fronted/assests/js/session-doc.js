document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-btn');
    const sidebar = document.getElementById('sidebar');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('hidden');
        // Adjust content margin if needed
        document.querySelector('.content').style.marginLeft = sidebar.classList.contains('hidden') ? '0' : '250px';
    });
});
