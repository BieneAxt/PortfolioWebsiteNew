// Initialize EmailJS
emailjs.init("leLpSwa5eszwgODy_");

// Contact Form Handler
(function () {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector(".submit-btn");
            const originalText = submitBtn.textContent;
            submitBtn.textContent = "Wird gesendet...";
            submitBtn.disabled = true;

            emailjs
                .sendForm("service_wx0l1b5", "template_990emu3", contactForm)
                .then(
                    function () {
                        formMessage.style.display = "block";
                        formMessage.style.color = "#4CAF50";
                        formMessage.textContent =
                            "Nachricht erfolgreich versendet! 🎉";
                        contactForm.reset();
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;

                        setTimeout(() => {
                            formMessage.style.display = "none";
                        }, 5000);
                    },
                    function (error) {
                        formMessage.style.display = "block";
                        formMessage.style.color = "#f44336";
                        formMessage.textContent =
                            "Fehler beim Versenden. Bitte versuche es später erneut.";
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }
                );
        });
    }
})();
