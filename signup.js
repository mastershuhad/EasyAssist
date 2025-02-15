document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const loginForms = document.querySelectorAll(".login-form");

    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove 'active' class from all buttons
            tabButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Hide all login forms
            loginForms.forEach(form => form.style.display = "none");

            // Get the target form and display it
            const targetForm = document.getElementById(this.dataset.target);
            targetForm.style.display = "flex"; // Show the selected form
        });
    });

    // Ensure the first form is visible by default
    document.getElementById("customer-login").style.display = "flex";
});
