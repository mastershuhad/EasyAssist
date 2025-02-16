document.addEventListener("DOMContentLoaded", () => {
    // Hamburger Menu Toggle
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    if (menuIcon && navLinks) {
        menuIcon.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Smooth Scroll for Services and Contact Sections
    const servicesLink = document.getElementById("services-link");
    const servicesSection = document.getElementById("services-section");

    const contactLink = document.getElementById("contact-link");
    const contactSection = document.getElementById("contact-section");

    if (servicesLink && servicesSection) {
        servicesLink.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default navigation
            servicesSection.style.display = "block"; // Show the services section
            servicesSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
        });
    }

    if (contactLink && contactSection) {
        contactLink.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default navigation
            contactSection.style.display = "block"; // Show the contact section
            contactSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
        });
    }

    // Scroll to Top Button (Optional)
    const scrollToTopButton = document.getElementById("scroll-to-top");
    if (scrollToTopButton) {
        scrollToTopButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Add a smooth scroll effect to all anchor links on the page
    const anchorLinks = document.querySelectorAll("a[href^='#']");
    anchorLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

// Function to toggle the mobile menu
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// Dynamic content for the footer (optional)
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");
    if (footer) {
        const date = new Date();
        const year = date.getFullYear();
        const footerText = footer.querySelector(".footer-text");
        if (footerText) {
            footerText.innerHTML = `© ${year} Easy Assist. All rights reserved.`;
        }
    }
});

// Additional functionality for login/signup toggle (if required)
const loginSignupToggle = document.getElementById("login-signup-toggle");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

if (loginSignupToggle) {
    loginSignupToggle.addEventListener("click", (event) => {
        event.preventDefault();
        if (loginForm && signupForm) {
            loginForm.classList.toggle("active");
            signupForm.classList.toggle("active");
        }
    });
}

// Services section dynamic display
document.addEventListener("DOMContentLoaded", () => {
    const servicesLink = document.getElementById("services-link");
    const servicesSection = document.getElementById("services-section");
    if (servicesLink && servicesSection) {
        servicesLink.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default navigation
            servicesSection.style.display = "block"; // Show the services section
            servicesSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
        });
    }
});
