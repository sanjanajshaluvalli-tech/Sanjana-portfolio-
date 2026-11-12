
/* ==========================================
   SANJANA J S - PORTFOLIO JAVASCRIPT
   ========================================== */

// Automatically update copyright year
document.querySelectorAll(".current-year").forEach((element) => {
    element.textContent = new Date().getFullYear();
});

// Contact form
const contactForm = document.querySelector("#contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        // Validate required fields
        if (!contactForm.checkValidity()) {
            event.preventDefault();
            contactForm.reportValidity();
            return;
        }

        // Prevent accidental repeated clicks
        const submitButton = document.querySelector("#submit-button");

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Submitting...";
        }

    });

}
