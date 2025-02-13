document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    let currentIndex = 0;
    let isScrolling = false;

    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            sections[index].scrollIntoView({ behavior: "smooth" });
        }
    }

    window.addEventListener("wheel", function (event) {
        if (isScrolling) return;
        isScrolling = true;

        if (event.deltaY > 0) {
            currentIndex = Math.min(currentIndex + 1, sections.length - 1);
        } else {
            currentIndex = Math.max(currentIndex - 1, 0);
        }

        scrollToSection(currentIndex);
        setTimeout(() => (isScrolling = false), 1000); // Prevent rapid scrolling
    });
});
