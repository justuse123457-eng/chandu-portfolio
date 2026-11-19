// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {

    menu.classList.toggle("active");

    menuBtn.textContent =
        menu.classList.contains("active") ? "✕" : "☰";

});

// CLOSE MENU AFTER CLICK

document.querySelectorAll(".menu a").forEach(function(link) {

    link.addEventListener("click", function() {

        menu.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});

// CONTACT FORM

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const formData = {
        name: contactForm.name.value,
        email: contactForm.email.value,
        subject: contactForm.subject.value,
        message: contactForm.message.value
    };

    formStatus.textContent = "Sending message...";

    try {

        const response = await fetch("/api/contact", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(formData)

        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Message sending failed.");
        }

        formStatus.textContent = result.message;

        contactForm.reset();

    } catch(error) {

        formStatus.textContent =
            error.message + " You can email me directly.";

    }

});

// FOOTER YEAR

console.log("Welcome to Chandan G Portfolio!");
