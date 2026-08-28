document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    let message = document.getElementById("message");

    // Validation
    if (name === "") {
        message.style.color = "red";
        message.textContent = "Please enter your name.";
        return;
    }



    if (mobile === "") {
        message.style.color = "red";
        message.textContent = "Please enter your mobile number.";
        return;
    }

    // Mobile number validation
    if (!/^[0-9]{10}$/.test(mobile)) {
        message.style.color = "red";
        message.textContent = "Mobile number must contain 10 digits.";
        return;
    }

    if (password === "") {
        message.style.color = "red";
        message.textContent = "Please enter your password.";
        return;
    }

    if (password.length < 6) {
        message.style.color = "red";
        message.textContent = "Password must be at least 6 characters.";
        return;
    }

    if (confirmPassword === "") {
        message.style.color = "red";
        message.textContent = "Please confirm your password.";
        return;
    }

    if (password !== confirmPassword) {
        message.style.color = "red";
        message.textContent = "Passwords do not match.";
        return;
    }

    if (!gender) {
        message.style.color = "red";
        message.textContent = "Please select your gender.";
        return;
    }

    // Success
    message.style.color = "green";
    message.textContent = "Registration successful!";

    // Clear form
    document.getElementById("registrationForm").reset();
});
