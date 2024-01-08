// Function to initialize the Google Map
function initMap() {
    // Location coordinates
    var location = { lat: 34.2874, lng: -118.7207 }; // Replace with your actual coordinates

    // Map options
    var mapOptions = {
        center: location,
        zoom: 15 // Adjust zoom level as needed
    };

    // Create a new map object
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Marker for the location
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Cigar Store Location' // Replace with your location title
    });
}

// Function to display the pop-up alert
function displayAlert() {
    alert("Join our email list and receive 25% off your first order. Contact the store for more information.");
}

// Event listener for when the main page loads
window.addEventListener('load', function() {
    // Display the alert once the page loads
    displayAlert();
});

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    // Send a POST request to the backend to handle email sending
    fetch('https://example.com/sendEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for subscribing! You will receive updates via email.');
        } else {
            alert('Failed to subscribe. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
}

// Event listener for form submission
document.getElementById('emailForm').addEventListener('submit', handleSubmit);

