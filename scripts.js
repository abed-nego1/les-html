    document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header_content");
    const nav = document.querySelector(".header_nav");

    const hamburger = document.createElement("div");
    hamburger.classList.add("hamburger");
    hamburger.setAttribute("aria-label", "Menu");
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    header.appendChild(hamburger);

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("open");
        nav.classList.toggle("open");

        document.body.style.overflow = nav.classList.contains("open")
        ? "hidden"
        : "";
    });

    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
        hamburger.classList.remove("open");
        nav.classList.remove("open");
        document.body.style.overflow = "";
        });
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
        hamburger.classList.remove("open");
        nav.classList.remove("open");
        document.body.style.overflow = "";
        }
    });
    });
