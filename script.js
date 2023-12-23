const navLinks = document.querySelector(".nav-links");

function toggleNav() {
    navLinks.classList.toggle("show");
}

document.querySelector(".logo").addEventListener("click", toggleNav);
