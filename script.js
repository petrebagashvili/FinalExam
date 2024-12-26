
const email = document.getElementById('email');
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailError = document.getElementById('emailError');

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    if (!emailPattern.test(email.value)) {
        emailError.textContent = "Valid email required";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    if (isValid) {
        alert("Successfully submitted");
        window.location.href="./index1.html"
    }
});
