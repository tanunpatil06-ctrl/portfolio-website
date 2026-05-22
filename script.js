// Smooth Scroll
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = this.getAttribute('href');

        if (target.startsWith("#")) {
            e.preventDefault();
            document.querySelector(target).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Fade Animation
window.addEventListener("load", () => {

    const faders = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.3
    });

    faders.forEach(el => observer.observe(el));

});