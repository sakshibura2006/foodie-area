const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const people = document.getElementById("people").value;

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    if (date === "") {
        alert("Please select a date.");
        return;
    }

    if (people === "") {
        alert("Please select number of people.");
        return;
    }

    alert(
        "Thank you " + name +
        "! Your table booking request has been received."
    );

    bookingForm.reset();
});