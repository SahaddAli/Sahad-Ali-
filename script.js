// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    
    // Hamburger menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinksContainer.classList.toggle('active');
        });
    }
    
    // Restaurant form submission
    const restaurantForm = document.getElementById('restaurant-form');
    if (restaurantForm) {
        restaurantForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            const guests = document.getElementById('guests').value;
            const message = document.getElementById('message').value;
            
            // Create email content
            const subject = "Bella Vista Restaurant Booking/Feedback";
            const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0APreferred Date: ${date}%0D%0ANumber of Guests: ${guests}%0D%0AMessage: ${message}`;
            
            // Open default email client
            window.location.href = `mailto:info@bellavista.com?subject=${subject}&body=${body}`;
            
            // Show success message
            alert('Thank you for your submission! Your email client will open with your booking details.');
            
            // Reset form
            restaurantForm.reset();
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const subject = document.getElementById('contact-subject').value;
            const message = document.getElementById('contact-message').value;
            
            // Create email content
            const emailSubject = `Portfolio Contact: ${subject}`;
            const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
            
            // Open default email client
            window.location.href = `mailto:sahadalimcr@gmail.com?subject=${emailSubject}&body=${emailBody}`;
            
            // Show success message
            alert('Thank you for your message! Your email client will open with your message.');
            
            // Reset form
            contactForm.reset();
        });
    }
});
