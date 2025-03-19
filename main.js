var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Java Developer","Full Stack Java Developer"], 
    typeSpeed: 100, 
    backSpeed: 100, 
    backDelay: 1000, 
    loop: true
});
function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("active");
  }

document.addEventListener("DOMContentLoaded", function () {
    const bars = document.querySelectorAll(".bar");

    function checkScroll() {
        bars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight - 50; // Adjust threshold

            if (barPosition < screenPosition) {
                bar.classList.add("visible");
                bar.querySelector(".progress-line span").style.width =
                    bar.querySelector(".progress-line span").dataset.width;
            }
        });
    }

    // Set widths dynamically from CSS
    bars.forEach(bar => {
        const span = bar.querySelector(".progress-line span");
        span.dataset.width = span.style.width;
        span.style.width = "0"; // Reset for animation
    });

    // Run check on scroll
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run once on load in case already in view
});
document.addEventListener("DOMContentLoaded", function () {
    const radialBars = document.querySelectorAll(".radial-bars");

    function animateRadialBars() {
        radialBars.forEach((bar, index) => {
            const circle = bar.querySelector(".path");
            const percentage = parseInt(bar.querySelector(".percentage").innerText);
            const progressValue = (502 * (100 - percentage)) / 100;

            circle.style.setProperty("--progress", progressValue);
            circle.style.animation = "animateProgress 1.5s ease-in-out forwards";
        });
    }

    // Trigger animation when in view
    function checkScroll() {
        const triggerPosition = window.innerHeight - 50; // Adjust threshold
        radialBars.forEach(bar => {
            if (bar.getBoundingClientRect().top < triggerPosition) {
                animateRadialBars();
            }
        });
    }

    // Run check on scroll
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run once on load
});
