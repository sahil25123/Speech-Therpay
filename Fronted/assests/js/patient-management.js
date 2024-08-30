document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("mainContent");
    const sidebarToggle = document.getElementById("sidebarToggle");
    const toggleSidebarButton = document.getElementById('sidebar-toogle');
    const addPatientForm = document.getElementById('add-patient-form');
    const patientTableBody = document.getElementById('patient-table-body');
    const patientModal = document.getElementById('patient-modal');
    const patientProfile = document.getElementById('patient-profile');

    // Toggle sidebar functionality
    sidebarToggle.addEventListener("click", function() {
        sidebar.classList.toggle("closed");
        mainContent.classList.toggle("shifted");
    });

    toggleSidebarButton.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('collapsed');
    });

    // Mock data for patients
    const patients = [
        {
            name: "John Doe",
            age: 30,
            dob: "1993-01-10",
            gender: "Male",
            contact: "1234567890",
            address: "123 Street, City",
            therapyPlan: "Plan A"
        },
    ];

    function loadPatients() {
        patientTableBody.innerHTML = '';
        patients.forEach((patient, index) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${patient.name}</td>
                <td>${patient.age}</td>
                <td>${patient.dob}</td>
                <td>${patient.gender}</td>
                <td>${patient.contact}</td>
                <td>${patient.address}</td>
                <td>${patient.therapyPlan}</td>
                <td class="actions">
                    <button onclick="editPatient(${index})">Edit</button>
                    <button onclick="deletePatient(${index})">Delete</button>
                </td>
            `;

            patientTableBody.appendChild(row);
        });
    }

    loadPatients();

    addPatientForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const newPatient = {
            name: document.getElementById('patient-name').value,
            age: document.getElementById('patient-age').value,
            dob: document.getElementById('patient-dob').value,
            gender: document.getElementById('patient-gender').value,
            contact: document.getElementById('patient-contact').value,
            address: document.getElementById('patient-address').value,
            therapyPlan: document.getElementById('therapy-plan').value
        };

        patients.push(newPatient);
        loadPatients();
        addPatientForm.reset();
    });

    window.editPatient = function(index) {
        const patient = patients[index];
        document.getElementById('patient-name').value = patient.name;
        document.getElementById('patient-age').value = patient.age;
        document.getElementById('patient-dob').value = patient.dob;
        document.getElementById('patient-gender').value = patient.gender;
        document.getElementById('patient-contact').value = patient.contact;
        document.getElementById('patient-address').value = patient.address;
        document.getElementById('therapy-plan').value = patient.therapyPlan;

        patients.splice(index, 1);
        loadPatients();
    };

    window.deletePatient = function(index) {
        patients.splice(index, 1);
        loadPatients();
    };

    window.closeModal = function() {
        patientModal.style.display = "none";
    };

    window.openPatientProfile = function(index) {
        const patient = patients[index];
        patientProfile.innerHTML = `
            <p><strong>Name:</strong> ${patient.name}</p>
            <p><strong>Age:</strong> ${patient.age}</p>
            <p><strong>DOB:</strong> ${patient.dob}</p>
            <p><strong>Gender:</strong> ${patient.gender}</p>
            <p><strong>Contact:</strong> ${patient.contact}</p>
            <p><strong>Address:</strong> ${patient.address}</p>
            <p><strong>Therapy Plan:</strong> ${patient.therapyPlan}</p>
        `;
        patientModal.style.display = "block";
    };

    window.sendReminder = function() {
        alert("Reminder sent!");
    };

    window.generateReport = function() {
        alert("Report generated!");
    };

    // Initialize Charts
    const ctxProgress = document.getElementById("progressChart").getContext("2d");
    const ctxSessionCount = document.getElementById("sessionCountChart").getContext("2d");
    const ctxGoals = document.getElementById("goalsChart").getContext("2d");

    const progressChart = new Chart(ctxProgress, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Patient Progress (%)',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const sessionCountChart = new Chart(ctxSessionCount, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: '# of Sessions',
                data: [12, 19, 3, 5, 2, 3, 7],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const goalsChart = new Chart(ctxGoals, {
        type: 'pie',
        data: {
            labels: ['Achieved', 'In Progress', 'Pending'],
            datasets: [{
                label: 'Therapy Goals',
                data: [10, 20, 30],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    // Add New Task
    window.addTask = function() {
        const taskList = document.getElementById("taskList");
        const newTaskInput = document.getElementById("newTaskInput");
        const newTaskText = newTaskInput.value.trim();

        if (newTaskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `<input type="checkbox"> ${newTaskText} <button onclick="deleteTask(this)">Delete</button>`;
            taskList.appendChild(li);
            newTaskInput.value = ""; // Clear the input field after adding
        }
    };

    // Delete Task
    window.deleteTask = function(button) {
        const li = button.parentElement;
        li.remove();
    };
});
