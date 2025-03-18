// Typing Animation Effect
const typingText = document.querySelector(".typing");
const words = ["Full-Stack Web", "Blockchain", "Web3"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    let currentWord = words[wordIndex];
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});

// Smooth Scrolling Effect
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Navbar Active Link Highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === current) {
            link.classList.add("active");
        }
    });
});

const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;

// 🌙 Check for saved theme in local storage OR system preference
const currentTheme = localStorage.getItem("theme") || 
                     (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

if (currentTheme === "dark") {
    body.classList.add("dark-mode");
}

// 🌟 Toggle dark mode on button click
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const theme = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);
});




// Project Filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        projects.forEach(project => {
            if (filter === "all" || project.classList.contains(filter)) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
});

// Scroll Reveal Animations
const scrollElements = document.querySelectorAll(".scroll-reveal");

const scrollReveal = () => {
    scrollElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
            el.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);

// Parallax Effect
window.addEventListener("scroll", () => {
    document.querySelector(".hero").style.backgroundPositionY = `${window.scrollY * 0.5}px`;
});

// Contact Form Validation
document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields!");
        return;
    }

    alert("Message sent successfully!");
    this.reset();
});
