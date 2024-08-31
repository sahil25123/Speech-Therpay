document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    const sidebarToggle = document.getElementById("sidebarToggle");

    sidebarToggle.addEventListener("click", function() {
        sidebar.classList.toggle("closed");
        content.classList.toggle("shifted");
    });

    document.getElementById("generatePDF").addEventListener("click", function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const lineHeight = 10;
        const pageHeight = doc.internal.pageSize.height;
        let y = 20;
        const leftMargin = 15;

        // Function to check if there's enough space and add a new page if needed
        function checkPageSpace(remainingHeight) {
            if (y + remainingHeight > pageHeight - 20) { // 20 is a bottom margin
                doc.addPage();
                y = 20; // Reset y position for new page
            }
        }

        // Title
        doc.setFontSize(18);
        doc.setFont("Helvetica", "bold");
        doc.text('Session Documentation Report', 105, y, { align: 'center' });
        y += lineHeight * 1.5;

        // Draw a line below the title
        doc.setLineWidth(0.5);
        doc.line(leftMargin, y, 195, y);
        y += lineHeight * 0.5;

        // Patient Information Section
        checkPageSpace(lineHeight * 5);
        doc.setFontSize(14);
        doc.setFont("Helvetica", "bold");
        doc.text('Patient Information', leftMargin, y);
        y += lineHeight;
        doc.setLineWidth(0.2);
        doc.line(leftMargin, y, 80, y);
        y += lineHeight * 0.5;

        doc.setFontSize(12);
        doc.setFont("Helvetica", "normal");
        doc.text(`Patient Name: ${document.getElementById("patient-name").value}`, leftMargin, y);
        y += lineHeight;
        doc.text(`Date of Birth: ${document.getElementById("dob").value}`, leftMargin, y);
        y += lineHeight;
        doc.text(`Diagnosis: ${document.getElementById("diagnosis").value}`, leftMargin, y);
        y += lineHeight;
        doc.text(`Date of Report: ${document.getElementById("report-date").value}`, leftMargin, y);
        y += lineHeight * 1.5;

        // Therapy Goals Section
        checkPageSpace(lineHeight * 4);
        doc.setFontSize(14);
        doc.setFont("Helvetica", "bold");
        doc.text('Therapy Goals', leftMargin, y);
        y += lineHeight;
        doc.setLineWidth(0.2);
        doc.line(leftMargin, y, 60, y);
        y += lineHeight * 0.5;

        doc.setFontSize(12);
        doc.setFont("Helvetica", "normal");
        doc.text(`Long-Term Goals: ${document.getElementById("long-term-goals").value}`, leftMargin, y);
        y += lineHeight * 1.5;
        doc.text(`Short-Term Goals: ${document.getElementById("short-term-goals").value}`, leftMargin, y);
        y += lineHeight * 1.5;

        // Session Summary Section
        checkPageSpace(lineHeight * 4);
        doc.setFontSize(14);
        doc.setFont("Helvetica", "bold");
        doc.text('Session Summary', leftMargin, y);
        y += lineHeight;
        doc.setLineWidth(0.2);
        doc.line(leftMargin, y, 60, y);
        y += lineHeight * 0.5;

        doc.setFontSize(12);
        doc.setFont("Helvetica", "normal");
        doc.text(`Number of Sessions Attended: ${document.getElementById("num-sessions").value}`, leftMargin, y);
        y += lineHeight;
        doc.text(`Attendance Record: ${document.getElementById("attendance-record").value}`, leftMargin, y);
        y += lineHeight;
        doc.text(`Therapy Activities: ${document.getElementById("therapy-activities").value}`, leftMargin, y);
        y += lineHeight * 1.5;

        // Ratings Section
        checkPageSpace(lineHeight * 12);
        doc.setFontSize(14);
        doc.setFont("Helvetica", "bold");
        doc.text('Ratings', leftMargin, y);
        y += lineHeight;
        doc.setLineWidth(0.2);
        doc.line(leftMargin, y, 40, y);
        y += lineHeight * 0.5;

        doc.setFontSize(12);
        doc.setFont("Helvetica", "normal");

        const ratings = [
            { label: "Speech Clarity (Articulation)", rating: "1 to 5 (Poor to Excellent)" },
            { label: "Language Comprehension (Receptive Language)", rating: "1 to 5 (Minimal to Significant Improvement)" },
            { label: "Language Expression (Expressive Language)", rating: "1 to 5 (Poor to Excellent)" },
            { label: "Fluency", rating: "1 to 5 (Minimal to Excellent Fluency)" },
            { label: "Voice Quality", rating: "1 to 5 (Poor to Excellent)" },
            { label: "Social Communication (Pragmatics)", rating: "1 to 5 (Minimal to Excellent Social Communication)" },
            { label: "Cognitive-Communication Skills", rating: "1 to 5 (Minimal to Significant Improvement)" },
            { label: "Swallowing (Dysphagia)", rating: "1 to 5 (Poor to Excellent)" },
            { label: "Patient Engagement and Motivation", rating: "1 to 5 (Low to High Engagement)" },
            { label: "Overall Progress Toward Goals", rating: "1 to 5 (Minimal to Significant Progress)" }
        ];

        ratings.forEach(rating => {
            checkPageSpace(lineHeight);
            doc.text(`${rating.label}: ${rating.rating}`, leftMargin, y);
            y += lineHeight;
        });
        y += lineHeight;

        // Progress Evaluation Section
        checkPageSpace(lineHeight * 4);
        doc.setFontSize(14);
        doc.setFont("Helvetica", "bold");
        doc.text('Progress Evaluation', leftMargin, y);
        y += lineHeight;
        doc.setLineWidth(0.2);
        doc.line(leftMargin, y, 60, y);
        y += lineHeight * 0.5;

        doc.setFontSize(12);
        doc.setFont("Helvetica", "normal");
        doc.text(`Baseline Performance: ${document.getElementById("baseline-performance").value}`, leftMargin, y);
        y += lineHeight * 1.5;
        doc.text(`Current Performance: ${document.getElementById("current-performance").value}`, leftMargin, y);
        y += lineHeight * 1.5;
        doc.text(`Achievement of Goals: ${document.getElementById("achievement-goals").value}`, leftMargin, y);
        y += lineHeight * 1.5;

        // Therapist Observations Section
        checkPageSpace(lineHeight * 4);
        doc.setFontSize(14);
        doc.setFont("Helvetica", "bold");
        doc.text('Therapist Observations', leftMargin, y);
        y += lineHeight;
        doc.setLineWidth(0.2);
        doc.line(leftMargin, y, 70, y);
        y += lineHeight * 0.5;

        doc.setFontSize(12);
        doc.setFont("Helvetica", "normal");
        doc.text(`Strengths: ${document.getElementById("strengths").value}`, leftMargin, y);
        y += lineHeight * 1.5;
        doc.text(`Challenges: ${document.getElementById("challenges").value}`, leftMargin, y);
        y += lineHeight * 1.5;
        doc.text(`Behavioral Observations: ${document.getElementById("behavioral-observations").value}`, leftMargin, y);
        y += lineHeight * 1.5;

        // Parent/Guardian Feedback Section
        checkPageSpace(lineHeight * 4);
        doc.setFontSize(14);
        doc.setFont("Helvetica", "bold");
        doc.text('Parent/Guardian Feedback', leftMargin, y);
        y += lineHeight;
        doc.setLineWidth(0.2);
        doc.line(leftMargin, y, 90, y);
        y += lineHeight * 0.5;

        doc.setFontSize(12);
        doc.setFont("Helvetica", "normal");
        doc.text(`Home Practice: ${document.getElementById("home-practice").value}`, leftMargin, y);
        y += lineHeight * 1.5;
        doc.text(`Observations: ${document.getElementById("observations").value}`, leftMargin, y);
        y += lineHeight * 1.5;

        // Recommendations Section
        checkPageSpace(lineHeight * 4);
        doc.setFontSize(14);
        doc.setFont("Helvetica", "bold");
        doc.text('Recommendations', leftMargin, y);
        y += lineHeight;
        doc.setLineWidth(0.2);
        doc.line(leftMargin, y, 80, y);
        y += lineHeight * 0.5;

        doc.setFontSize(12);
        doc.setFont("Helvetica", "normal");
        doc.text(`Continuation of Therapy: ${document.getElementById("continuation-therapy").value}`, leftMargin, y);
        y += lineHeight * 1.5;
        doc.text(`Modification of Goals: ${document.getElementById("modification-goals").value}`, leftMargin, y);
        y += lineHeight * 1.5;
        doc.text(`Suggestions for Home Practice: ${document.getElementById("home-practice-suggestions").value}`, leftMargin, y);
        y += lineHeight * 1.5;

        // Next Steps Section
        checkPageSpace(lineHeight * 4);
        doc.setFontSize(14);
        doc.setFont("Helvetica", "bold");
        doc.text('Next Steps', leftMargin, y);
        y += lineHeight;
        doc.setLineWidth(0.2);
        doc.line(leftMargin, y, 60, y);
        y += lineHeight * 0.5;

        doc.setFontSize(12);
        doc.setFont("Helvetica", "normal");
        doc.text(`Plan for Future Sessions: ${document.getElementById("future-plan").value}`, leftMargin, y);
        y += lineHeight * 1.5;
        doc.text(`Referral: ${document.getElementById("referral").value}`, leftMargin, y);
        y += lineHeight * 1.5;

        // Therapist's Signature Section
        checkPageSpace(lineHeight * 3);
        doc.setFontSize(14);
        doc.setFont("Helvetica", "bold");
        doc.text("Therapist's Signature", leftMargin, y);
        y += lineHeight;
        doc.setLineWidth(0.2);
        doc.line(leftMargin, y, 70, y);
        y += lineHeight * 0.5;

        doc.setFontSize(12);
        doc.setFont("Helvetica", "normal");
        doc.text(`Name of Therapist: ${document.getElementById("therapist-name-signature").value}`, leftMargin, y);
        y += lineHeight;
        doc.text(`Contact Information: ${document.getElementById("contact-info").value}`, leftMargin, y);
        y += lineHeight * 1.5;

        // Save the PDF
        doc.save('Session_Documentation_Report.pdf');
    });
});
