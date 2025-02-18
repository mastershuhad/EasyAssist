
 document.addEventListener("DOMContentLoaded", function () {
    const categoryDropdown = document.getElementById("category-dropdown");
    const hamburgerBtn = document.getElementById("hamburger-btn");

    hamburgerBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        categoryDropdown.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (!categoryDropdown.contains(event.target) && event.target !== hamburgerBtn) {
            categoryDropdown.classList.remove("active");
        }
    });
});
document.querySelector(".categories-button").addEventListener("click", function () {
    let dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("show");
});
