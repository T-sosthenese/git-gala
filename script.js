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
        document.body.style.backgroundImage = 'url("https://media.giphy.com/media/l2JHPB58MjfV8W3K0/giphy.gif")';
        document.body.style.backgroundSize = 'cover'; // Cover the entire background area
    } else {
        confirmationMessage.innerHTML = '<p>😢 We will miss you at the gala</p>'
        document.body.style.backgroundImage = 'url("https://media.giphy.com/media/JER2en0ZRiGUE/giphy.gif")';
        document.body.style.backgroundSize = 'cover';
    }

    // Display the confirmation message
    confirmationMessage.style.display = 'block';
    console.log("Confirmation message displayed"); // Log to console

    // Reset the form
    rsvpForm.reset();
});
