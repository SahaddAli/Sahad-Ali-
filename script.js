document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('bookingForm');
  const messageElem = document.getElementById('message');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const request = form.request.value.trim();

    if (!name || !email || !request) {
      messageElem.textContent = 'Please fill in all fields.';
      messageElem.style.color = 'red';
      return;
    }

    const subject = encodeURIComponent('Booking/Feedback from ' + name);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nRequest/Feedback:\n${request}`
    );

    const mailtoLink = `mailto:contact@restaurant.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    messageElem.textContent = 'Your email client should now open. If not, please ensure you have an email client configured.';
    messageElem.style.color = 'green';
    form.reset();
  });
});
