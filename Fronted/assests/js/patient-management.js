const patients = [
    { name: "John Doe", age: 30, gender: "Male", contact: "123-456-7890", therapyPlan: "Plan A" },
    { name: "Jane Smith", age: 25, gender: "Female", contact: "987-654-3210", therapyPlan: "Plan B" },
    // Add more patient objects as needed
];

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

document.getElementById('add-patient-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const newPatient = {
        name: document.getElementById('patient-name').value,
        age: document.getElementById('patient-age').value,
        gender: document.getElementById('patient-gender').value,
        contact: document.getElementById('patient-contact').value,
        therapyPlan: document.getElementById('therapy-plan').value,
        sessionSchedule: document.getElementById('session-schedule').value
    };

    patients.push(newPatient);
    renderPatientList();
    this.reset();
});

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

function closeModal() {
    document.getElementById('patient-modal').style.display = 'none';
}

function sendReminder() {
    alert('Reminder sent to patient.');
}

function generateReport() {
    alert('Patient report generated.');
}

function deletePatient(index) {
    patients.splice(index, 1);
    renderPatientList();
}

function exportData() {
    const csvContent = "data:text/csv;charset=utf-8,"
        + patients.map(patient => 
            `${patient.name},${patient.age},${patient.gender},${patient.contact},${patient.therapyPlan}`
        ).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "patients.csv");
    document.body.appendChild(link);

    link.click();
}

document.getElementById('search-bar').addEventListener('input', renderPatientList);
document.getElementById('filter-gender').addEventListener('change', renderPatientList);

document.addEventListener('DOMContentLoaded', function() {
    renderPatientList();
});

