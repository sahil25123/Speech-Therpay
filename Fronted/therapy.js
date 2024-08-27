function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

function logout() {
    alert('Logging out...');
    // Perform logout logic, then redirect to the login page
    window.location.href = 'login.html';
}

// Initial display of the first section
document.addEventListener('DOMContentLoaded', () => {
    showSection('patients');
    
    // Simulate loading data for each section
    setTimeout(() => {
        document.querySelector('.patients-list').innerHTML = `
            <p><strong>John Doe</strong> - Session 1: Completed</p>
            <p><strong>Jane Smith</strong> - Session 1: Pending</p>
        `;
    }, 1000);
    
    setTimeout(() => {
        document.querySelector('.sessions-scheduler').innerHTML = `
            <p>Next session: John Doe - 12:00 PM, Sep 1</p>
            <p>Next session: Jane Smith - 1:00 PM, Sep 2</p>
        `;
    }, 1000);
    
    setTimeout(() => {
        document.querySelector('.reports-list').innerHTML = `
            <p>Progress Report for John Doe - <a href="#">View</a></p>
            <p>Progress Report for Jane Smith - <a href="#">View</a></p>
        `;
    }, 1000);

    setTimeout(() => {
        document.querySelector('.communication-tools').innerHTML = `
            <p><strong>Message John Doe:</strong> <textarea placeholder="Type your message..."></textarea> <button>Send</button></p>
            <p><strong>Message Jane Smith:</strong> <textarea placeholder="Type your message..."></textarea> <button>Send</button></p>
        `;
    }, 1000);
    
    setTimeout(() => {
        document.querySelector('.resources-list').innerHTML = `
            <p><a href="#">Therapy Tool 1</a></p>
            <p><a href="#">Therapy Tool 2</a></p>
        `;
    }, 1000);
    
    setTimeout(() => {
        document.querySelector('.session-history-list').innerHTML = `
            <p>John Doe - Session 1: Completed</p>
            <p>Jane Smith - Session 1: Completed</p>
        `;
    }, 1000);
    
    setTimeout(() => {
        document.querySelector('.notes-section').innerHTML = `
            <textarea placeholder="Write your notes here..."></textarea>
        `;
    }, 1000);
    
    setTimeout(() => {
        document.querySelector('.analytics-reports').innerHTML = `
            <p><strong>Patient Progress Overview</strong></p>
            <p>Graph of progress here...</p>
        `;
    }, 1000);
});
