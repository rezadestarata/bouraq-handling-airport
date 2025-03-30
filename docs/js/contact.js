document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
            
            window.open(`https://wa.me/6282123128496?text=${text}`);
        });
    }
});