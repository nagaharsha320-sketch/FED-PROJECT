// Event data
const events = [
    {
        name: "Tech Fest 2026",
        date: "15 September 2026",
        time: "10:00 AM",
        location: "College Auditorium"
    },
    {
        name: "Cultural Fest",
        date: "20 September 2026",
        time: "5:00 PM",
        location: "Open Ground"
    },
    {
        name: "Sports Meet",
        date: "25 September 2026",
        time: "9:00 AM",
        location: "College Stadium"
    }
];

// Shortcut for selecting elements
const $ = (selector) => document.querySelector(selector);


// Select an event
function selectEvent(eventName) {

    document.getElementById("event").value = eventName;

    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });
}


// Register user
function registerUser(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let selectedEvent = document.getElementById("event").value;

    if (selectedEvent === "") {
        alert("Please select an event.");
        return;
    }

    // Store registration data in LocalStorage
    let registration = {
        name: name,
        email: email,
        phone: phone,
        event: selectedEvent,
        date: new Date().toLocaleString()
    };

    localStorage.setItem(
        "eventRegistration",
        JSON.stringify(registration)
    );

    alert(
        "Registration Successful!\n\n" +
        "Name: " + name +
        "\nEmail: " + email +
        "\nEvent: " + selectedEvent
    );

    document.querySelector("form").reset();
}


// Navigation links
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function () {

        let target = this.getAttribute("href");

        document.querySelector(target).scrollIntoView({
            behavior: "smooth"
        });

    });

});


// Display previously saved registration
function checkRegistration() {

    let savedData = localStorage.getItem("eventRegistration");

    if (savedData) {

        let registration = JSON.parse(savedData);

        console.log("Previous Registration:");
        console.log("Name:", registration.name);
        console.log("Event:", registration.event);
        console.log("Date:", registration.date);

    }
}


// Run when page loads
window.onload = function () {

    checkRegistration();

};