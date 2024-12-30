export function setupFormHandlers() {
    // Prevent form submission and reset the form
    function submitForm(event) {
        event.preventDefault(); // Prevent form submission
        event.target.reset(); // Reset the form
        console.log("Form submitted and reset.");
    }

    // Attach the form submission event listener
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", submitForm);
        console.log("Form handler attached.");
    } else {
        console.warn("Contact form not found.");
    }
}
