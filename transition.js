function transitionPage(event) {
    event.preventDefault();
    let targetUrl = event.currentTarget.href;

    document.body.style.opacity = "0";
    document.body.style.transform = "translateX(-50px)"; // Soft slide left
    setTimeout(() => {
        window.location.href = targetUrl;
    }, 800); // Wait 0.8s before changing page
}

// Apply smooth fade-in effect when the page loads
document.addEventListener("DOMContentLoaded", function () {
    document.body.style.transition = "opacity 0.5s ease-in-out, transform 0.8s ease-in-out";
    document.body.style.opacity = "1";
    document.body.style.transform = "translateX(0px)"; // Reset position

    document.querySelectorAll("a").forEach(link => {
        if (link.hostname === window.location.hostname) {
            link.addEventListener("click", transitionPage);
        }
    });
});
