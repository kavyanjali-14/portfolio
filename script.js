// =========================
// PRELOADER
// =========================

window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.style.opacity = "0";

        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }
});


// =========================
// AOS ANIMATION
// =========================

if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true
    });
}


// =========================
// TYPING EFFECT
// =========================

if (typeof Typed !== "undefined") {

    new Typed("#typing", {

        strings: [

            "Full Stack Developer",

            "Cloud Enthusiast",

            "DevOps Learner",

            "Java Developer"

        ],

        typeSpeed: 70,

        backSpeed: 40,

        backDelay: 1500,

        loop: true

    });

}


// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}


// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

        if (navLinks) {

            navLinks.classList.remove("show");

        }

    });

});


// =========================
// STICKY NAVBAR
// =========================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});


// =========================
// ACTIVE NAV LINK
// =========================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// =========================
// CONTACT FORM
// =========================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();

        const email = form.querySelector('input[type="email"]').value.trim();

        const message = form.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {

            alert("Please fill all fields.");

            return;

        }

        alert("Message Sent Successfully!");

        form.reset();

    });

}


// =========================
// SCROLL TO TOP BUTTON
// =========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "45px";
topBtn.style.height = "45px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.background = "#3B82F6";
topBtn.style.color = "#fff";
topBtn.style.display = "none";
topBtn.style.fontSize = "20px";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});