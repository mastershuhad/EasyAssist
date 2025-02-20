document.getElementById("hamburger-btn").addEventListener("click", function () {
    document.getElementById("category-dropdown").classList.toggle("show");
});

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
    const dropdown = document.getElementById("category-dropdown");
    const button = document.getElementById("hamburger-btn");

    if (!dropdown.contains(event.target) && !button.contains(event.target)) {
        dropdown.classList.remove("show");
    }
});
