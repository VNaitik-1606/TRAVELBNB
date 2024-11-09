document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();
    let errorMessage = document.getElementById("error-message");

 
    errorMessage.textContent = "";

    if (name.length < 2) {
        errorMessage.textContent = "Name should be at least 2 characters.";
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }

    if (subject.length === 0) {
        errorMessage.textContent = "Subject cannot be empty.";
        return;
    }

    if (message.length < 10) {
        errorMessage.textContent = "Message should be at least 10 characters.";
        return;
    }

    alert("Thank you for reaching out, " + name + "! We'll get back to you shortly.");
    document.getElementById("contactForm").reset();
});
