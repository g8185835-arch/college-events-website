
document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const eventSelect = document.getElementById("event");
    const formMessage = document.getElementById("formMessage");

    // Event buttons select the event and scroll to registration.
    document.querySelectorAll(".register-event").forEach(function (button) {
        button.addEventListener("click", function () {
            eventSelect.value = button.dataset.event;

            formMessage.textContent = "";
            formMessage.classList.remove("success");

            document.getElementById("registration").scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Display the success message when a valid form is submitted.
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!registrationForm.checkValidity()) {
            registrationForm.reportValidity();
            return;
        }

        const studentName = document.getElementById("name").value.trim();
        const selectedEvent = eventSelect.value;

        formMessage.textContent =
            "🎉 Registration Successful! Thank you, " +
            studentName +
            "! You have successfully registered for " +
            selectedEvent +
            ".";

        formMessage.classList.add("success");

        // Keep the success message visible after clearing the form.
        registrationForm.reset();

        formMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });

    // Hide the previous message when a new registration is started.
    registrationForm.addEventListener("input", function () {
        formMessage.textContent = "";
        formMessage.classList.remove("success");
    });

    registrationForm.addEventListener("change", function () {
        formMessage.textContent = "";
        formMessage.classList.remove("success");
    });
});
