document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("mainContent");
    const sidebarToggle = document.getElementById("sidebarToggle");

    sidebarToggle.addEventListener("click", function() {
        sidebar.classList.toggle("closed");
        mainContent.classList.toggle("shifted");
    });

    const addSupervisorButton = document.getElementById("addSupervisor");
    const addTherapistButton = document.getElementById("addTherapist");
    const addPatientButton = document.getElementById("addPatient");

    const addSupervisorModal = document.getElementById("addSupervisorModal");
    const addTherapistModal = document.getElementById("addTherapistModal");
    const addPatientModal = document.getElementById("addPatientModal");

    const closeAddSupervisor = document.getElementById("closeAddSupervisor");
    const closeAddTherapist = document.getElementById("closeAddTherapist");
    const closeAddPatient = document.getElementById("closeAddPatient");

    addSupervisorButton.addEventListener("click", function() {
        addSupervisorModal.style.display = "block";
    });

    addTherapistButton.addEventListener("click", function() {
        addTherapistModal.style.display = "block";
    });

    addPatientButton.addEventListener("click", function() {
        addPatientModal.style.display = "block";
    });

    closeAddSupervisor.addEventListener("click", function() {
        addSupervisorModal.style.display = "none";
    });

    closeAddTherapist.addEventListener("click", function() {
        addTherapistModal.style.display = "none";
    });

    closeAddPatient.addEventListener("click", function() {
        addPatientModal.style.display = "none";
    });

    window.onclick = function(event) {
        if (event.target === addSupervisorModal || event.target === addTherapistModal || event.target === addPatientModal) {
            addSupervisorModal.style.display = "none";
            addTherapistModal.style.display = "none";
            addPatientModal.style.display = "none";
        }
    };

    const supervisors = [
        { id: 1, name: "Alice Johnson", email: "alice@example.com", phone: "123-456-7890" },
        { id: 2, name: "Bob Smith", email: "bob@example.com", phone: "234-567-8901" }
    ];

    const therapists = [
        { id: 1, name: "Charlie Brown", email: "charlie@example.com", phone: "345-678-9012", supervisorId: 1 },
        { id: 2, name: "Dana White", email: "dana@example.com", phone: "456-789-0123", supervisorId: 2 }
    ];

    const patients = [
        { id: 1, name: "Emily Davis", email: "emily@example.com", phone: "567-890-1234", therapistId: 1 },
        { id: 2, name: "Frank Harris", email: "frank@example.com", phone: "678-901-2345", therapistId: 2 }
    ];

    function populateTable(tableId, data, columns) {
        const tableBody = document.querySelector(`#${tableId} tbody`);
        tableBody.innerHTML = ""; // Clear existing rows

        data.forEach(item => {
            const row = document.createElement("tr");
            columns.forEach(column => {
                const cell = document.createElement("td");
                cell.textContent = item[column];
                row.appendChild(cell);
            });

            // Add action buttons
            const actionCell = document.createElement("td");
            actionCell.innerHTML = `
                <a href="#" class="btn edit" data-id="${item.id}" data-type="${tableId}">Edit</a>
                <a href="#" class="btn delete" data-id="${item.id}" data-type="${tableId}">Delete</a>
            `;
            row.appendChild(actionCell);

            tableBody.appendChild(row);
        });
    }

    function populateSelect(selectId, options) {
        const select = document.getElementById(selectId);
        select.innerHTML = ""; // Clear existing options
        options.forEach(option => {
            const opt = document.createElement("option");
            opt.value = option.id;
            opt.textContent = option.name;
            select.appendChild(opt);
        });
    }

    populateTable("supervisors", supervisors, ["name", "email", "phone"]);
    populateTable("therapists", therapists, ["name", "email", "phone", "supervisorId"]);
    populateTable("patients", patients, ["name", "email", "phone", "therapistId"]);

    populateSelect("therapist-supervisor", supervisors.map(s => ({ id: s.id, name: s.name })));
    populateSelect("patient-therapist", therapists.map(t => ({ id: t.id, name: t.name })));

    function handleEdit(id, type) {
        // Find the item by ID and open a modal to edit its details
        let item = {};
        switch (type) {
            case 'supervisors':
                item = supervisors.find(s => s.id === parseInt(id));
                break;
            case 'therapists':
                item = therapists.find(t => t.id === parseInt(id));
                break;
            case 'patients':
                item = patients.find(p => p.id === parseInt(id));
                break;
        }
        if (item) {
            // Populate a modal with item details for editing
            console.log("Edit item:", item); // Replace with modal functionality
        }
    }

    function handleDelete(id, type) {
        // Confirm and delete the item by ID
        const confirmation = confirm(`Are you sure you want to delete this ${type.slice(0, -1)}?`);
        if (confirmation) {
            switch (type) {
                case 'supervisors':
                    const supervisorIndex = supervisors.findIndex(s => s.id === parseInt(id));
                    if (supervisorIndex > -1) {
                        supervisors.splice(supervisorIndex, 1);
                        populateTable("supervisors", supervisors, ["name", "email", "phone"]);
                    }
                    break;
                case 'therapists':
                    const therapistIndex = therapists.findIndex(t => t.id === parseInt(id));
                    if (therapistIndex > -1) {
                        therapists.splice(therapistIndex, 1);
                        populateTable("therapists", therapists, ["name", "email", "phone", "supervisorId"]);
                    }
                    break;
                case 'patients':
                    const patientIndex = patients.findIndex(p => p.id === parseInt(id));
                    if (patientIndex > -1) {
                        patients.splice(patientIndex, 1);
                        populateTable("patients", patients, ["name", "email", "phone", "therapistId"]);
                    }
                    break;
            }
        }
    }

    document.querySelector("body").addEventListener("click", function(event) {
        if (event.target.classList.contains("edit")) {
            event.preventDefault();
            const id = event.target.getAttribute("data-id");
            const type = event.target.getAttribute("data-type");
            handleEdit(id, type);
        } else if (event.target.classList.contains("delete")) {
            event.preventDefault();
            const id = event.target.getAttribute("data-id");
            const type = event.target.getAttribute("data-type");
            handleDelete(id, type);
        }
    });

    document.getElementById("addSupervisorForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("supervisor-name").value;
        const email = document.getElementById("supervisor-email").value;
        const phone = document.getElementById("supervisor-phone").value;
        const id = supervisors.length ? Math.max(...supervisors.map(s => s.id)) + 1 : 1;
        supervisors.push({ id, name, email, phone });
        populateTable("supervisors", supervisors, ["name", "email", "phone"]);
        addSupervisorModal.style.display = "none";
    });

    document.getElementById("addTherapistForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("therapist-name").value;
        const email = document.getElementById("therapist-email").value;
        const phone = document.getElementById("therapist-phone").value;
        const supervisorId = parseInt(document.getElementById("therapist-supervisor").value);
        const id = therapists.length ? Math.max(...therapists.map(t => t.id)) + 1 : 1;
        therapists.push({ id, name, email, phone, supervisorId });
        populateTable("therapists", therapists, ["name", "email", "phone", "supervisorId"]);
        addTherapistModal.style.display = "none";
    });

    document.getElementById("addPatientForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("patient-name").value;
        const email = document.getElementById("patient-email").value;
        const phone = document.getElementById("patient-phone").value;
        const therapistId = parseInt(document.getElementById("patient-therapist").value);
        const id = patients.length ? Math.max(...patients.map(p => p.id)) + 1 : 1;
        patients.push({ id, name, email, phone, therapistId });
        populateTable("patients", patients, ["name", "email", "phone", "therapistId"]);
        addPatientModal.style.display = "none";
    });
});
