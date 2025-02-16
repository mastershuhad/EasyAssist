document.addEventListener("DOMContentLoaded", () => {
    const servicesLink = document.getElementById("services-link");
    const servicesSection = document.getElementById("services-section");

    const contactLink = document.getElementById("contact-link"); // New contact link
    const contactSection = document.getElementById("contact-section"); // New contact section

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
});
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
