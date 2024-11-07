document.addEventListener("DOMContentLoaded", function () {
    // Form submission reset
    document.getElementById('waitlist-form').addEventListener('submit', function(event) {
        setTimeout(() => {
            event.target.reset();
        }, 100);
    })
});