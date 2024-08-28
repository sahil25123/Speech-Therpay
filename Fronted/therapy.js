document.addEventListener('DOMContentLoaded', function() {
    // Example Data
    const sessions = [
        { patient: 'John Doe', time: '10:00 AM' },
        { patient: 'Jane Smith', time: '11:30 AM' },
    ];

    const patients = [
        { name: 'John Doe', therapyType: 'Speech Therapy', lastSession: '01/01/2024' },
        { name: 'Jane Smith', therapyType: 'Language Therapy', lastSession: '01/02/2024' },
    ];

    const therapyPlans = [
        { plan: 'Plan A for John Doe', status: 'Active' },
        { plan: 'Plan B for Jane Smith', status: 'Pending Approval' },
    ];

    const sessionDocs = [
        { session: 'Session 1 for John Doe', date: '01/03/2024' },
        { session: 'Session 2 for Jane Smith', date: '01/04/2024' },
    ];

    const progressReports = [
        { report: 'Report for John Doe', date: '01/05/2024' },
        { report: 'Report for Jane Smith', date: '01/06/2024' },
    ];

    // Populate Upcoming Sessions
    const sessionList = document.getElementById('session-list');
    sessions.forEach(session => {
        const li = document.createElement('li');
        li.textContent = `${session.patient} - ${session.time}`;
        sessionList.appendChild(li);
    });

    // Populate Patient Management Table
    const patientTable = document.getElementById('patient-table').querySelector('tbody');
    patients.forEach(patient => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${patient.name}</td>
            <td>${patient.therapyType}</td>
            <td>${patient.lastSession}</td>
            <td><button>View</button></td>
        `;
        patientTable.appendChild(tr);
    });

    // Populate Therapy Plans
    const therapyPlanList = document.getElementById('therapy-plan-list');
    therapyPlans.forEach(plan => {
        const li = document.createElement('li');
        li.textContent = `${plan.plan} - ${plan.status}`;
        therapyPlanList.appendChild(li);
    });

    // Populate Session Documentation
    const sessionDocumentationList = document.getElementById('session-documentation-list');
    sessionDocs.forEach(doc => {
        const li = document.createElement('li');
        li.textContent = `${doc.session} - ${doc.date}`;
        sessionDocumentationList.appendChild(li);
    });

    // Populate Progress Reports
    const progressReportList = document.getElementById('progress-report-list');
    progressReports.forEach(report => {
        const li = document.createElement('li');
        li.textContent = `${report.report} - ${report.date}`;
        progressReportList.appendChild(li);
    });
});

function createTherapyPlan() {
    alert('Create a new therapy plan');
}

function documentSession() {
    alert('Document a new session');
}

function generateReport() {
    alert('Generate a new progress report');
}
function logout() {
    alert('Logging out...');
    // Redirect to login page or perform logout action here
    window.location.href = "login.html";
}
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px"; /* Set the width of the sidebar */
    }
}