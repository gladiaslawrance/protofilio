/* ================= MOBILE MENU ================= */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("open");

    menuBtn.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* Close menu after clicking */

nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    [...document.querySelectorAll("main section[id]")];

const links =
    [...document.querySelectorAll(".nav a")];


const navObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    links.forEach(link => {

                        link.classList.toggle(

                            "active",

                            link.getAttribute("href")
                            === "#" + entry.target.id

                        );

                    });

                }

            });

        },

        {
            rootMargin: "-40% 0px -50% 0px"
        }

    );


sections.forEach(section => {

    navObserver.observe(section);

});


/* ================= SCROLL REVEAL ================= */

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        revealObserver.observe(element);

    });


/* ================= BACK TO TOP ================= */

const topBtn =
    document.querySelector(".top-btn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "grid";

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


/* ================= PROJECT BUTTONS ================= */

document
    .querySelectorAll(".project-arrow")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelector("#contact")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });

    });