document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      const subject = encodeURIComponent(`Booking/Feedback from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

      // Opens user's email client with pre-filled email content
      window.location.href = `mailto:info@delightdine.com?subject=${subject}&body=${body}`;
    });
  }
});

