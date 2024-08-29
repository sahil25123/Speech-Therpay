const patients = [
    { name: "John Doe", age: 30, gender: "Male", contact: "123-456-7890", therapyPlan: "Plan A", sessionSchedule: "2024-09-01", address: "123 Elm Street" },
    { name: "Jane Smith", age: 25, gender: "Female", contact: "987-654-3210", therapyPlan: "Plan B", sessionSchedule: "2024-09-02", address: "456 Oak Avenue" },
    // Add more patient objects as needed
];

// Function to render the patient list based on search and filter criteria
function renderPatientList() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const filterGender = document.getElementById('filter-gender').value;
    const patientTableBody = document.getElementById('patient-table-body');
    patientTableBody.innerHTML = '';

    patients.forEach((patient, index) => {
        if (
            (patient.name.toLowerCase().includes(searchQuery) || patient.therapyPlan.toLowerCase().includes(searchQuery)) &&
            (filterGender === 'all' || patient.gender.toLowerCase() === filterGender)
        ) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${patient.name}</td>
                <td>${patient.age}</td>
                <td>${patient.gender}</td>
                <td>${patient.contact}</td>
                <td>${patient.therapyPlan}</td>
                <td class="actions">
                    <button onclick="viewPatientProfile(${index})">View</button>
                    <button onclick="editPatient(${index})">Edit</button>
                    <button onclick="deletePatient(${index})">Delete</button>
                </td>
            `;
            patientTableBody.appendChild(row);
        }
    });
}

// Function to handle the form submission for adding a new patient
document.getElementById('add-patient-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const newPatient = {
        name: document.getElementById('patient-name').value,
        age: document.getElementById('patient-age').value,
        gender: document.getElementById('patient-gender').value,
        contact: document.getElementById('patient-contact').value,
        therapyPlan: document.getElementById('therapy-plan').value,
        sessionSchedule: document.getElementById('session-schedule').value,
        address: document.getElementById('patient-address').value
    };

    patients.push(newPatient);
    renderPatientList();
    this.reset();
});

// Function to view the patient profile in a modal
function viewPatientProfile(index) {
    const patient = patients[index];
    const modal = document.getElementById('patient-modal');
    const profileDiv = document.getElementById('patient-profile');

    profileDiv.innerHTML = `
        <p><strong>Name:</strong> ${patient.name}</p>
        <p><strong>Age:</strong> ${patient.age}</p>
        <p><strong>Gender:</strong> ${patient.gender}</p>
        <p><strong>Contact:</strong> ${patient.contact}</p>
        <p><strong>Therapy Plan:</strong> ${patient.therapyPlan}</p>
        <p><strong>Session Schedule:</strong> ${patient.sessionSchedule}</p>
        <p><strong>Address:</strong> ${patient.address}</p>
    `;

    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('patient-modal').style.display = 'none';
}

// Function to send a reminder to the patient
function sendReminder() {
    alert('Reminder sent to patient.');
}

// Function to generate a report for the patient
function generateReport() {
    alert('Patient report generated.');
}

// Function to delete a patient from the list
function deletePatient(index) {
    if (confirm('Are you sure you want to delete this patient?')) {
        patients.splice(index, 1);
        renderPatientList();
    }
}

// Function to export the patient data as CSV
function exportData() {
    const csvContent = "data:text/csv;charset=utf-8,"
        + patients.map(patient => 
            `${patient.name},${patient.age},${patient.gender},${patient.contact},${patient.therapyPlan},${patient.sessionSchedule},${patient.address}`
        ).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "patients.csv");
    document.body.appendChild(link);

    link.click();
}

// Event listeners for search and filter
document.getElementById('search-bar').addEventListener('input', renderPatientList);
document.getElementById('filter-gender').addEventListener('change', renderPatientList);

// Initial rendering of the patient list when the page loads
document.addEventListener('DOMContentLoaded', function() {
    renderPatientList();
});

const toggleButton = document.getElementById('toggle-sidebar');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

// Toggle sidebar visibility
toggleButton.addEventListener('click', function() {
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('expanded');
});
