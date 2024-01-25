// Selecting the form and confirmation message elements
const rsvpForm = document.getElementById('rsvpForm');
const confirmationMessage = document.getElementById('confirmationMessage');

// Adding submit event listener to the form
rsvpForm.addEventListener('submit', function (event) {
    // Preventing the default form submission behavior
    event.preventDefault();
    console.log("Form submitted"); // Log to console

    // Getting the selected value of attendance
    const attendance = document.getElementById('attendance').value;
    console.log("Attendance: " + attendance); // Log to console

    // Checking if the user selected 'attending'
    if (attendance === 'Yes') {
        // Displaying party emoji and positive image
        confirmationMessage.innerHTML = '<p>🎉 Thank you for RSVPing! We look forward to seeing you at the Gif Gala.</p>';
    }

    // Display the confirmation message
    confirmationMessage.style.display = 'block';
    console.log("Confirmation message displayed"); // Log to console

    // Reset the form
    rsvpForm.reset();
});
