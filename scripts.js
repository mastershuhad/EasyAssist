document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll for Services and Contact Sections
    const scrollToSection = (linkId, sectionId) => {
        const link = document.getElementById(linkId);
        const section = document.getElementById(sectionId);
        if (link && section) {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                section.style.display = "block"; // Ensure section is visible
                section.scrollIntoView({ behavior: "smooth" });
            });
        }
    };

    scrollToSection("services-link", "services-section");
    scrollToSection("contact-link", "contact-section");

    // Scroll to Top Button
    const scrollToTopButton = document.getElementById("scroll-to-top");
    if (scrollToTopButton) {
        scrollToTopButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Smooth Scroll for Internal Anchor Links
    document.querySelectorAll("a[href^='#']").forEach((link) => {
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                targetElement.scrollIntoView({ behavior: "smooth" });
            });
        }
    });

    // Dynamic Footer Year
    const footerText = document.querySelector(".footer-text");
    if (footerText) {
        footerText.innerHTML = `© ${new Date().getFullYear()} Easy Assist. All rights reserved.`;
    }

    // Login/Signup Toggle
    const loginSignupToggle = document.getElementById("login-signup-toggle");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    if (loginSignupToggle && loginForm && signupForm) {
        loginSignupToggle.addEventListener("click", (event) => {
            event.preventDefault();
            loginForm.classList.toggle("active");
            signupForm.classList.toggle("active");
        });
    }
});
