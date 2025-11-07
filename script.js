/* script.js
   Handles:
   - mobile nav toggle (accessible)
   - recruiter quick form on contact page (mailto)
   - restaurant form submission (construct mailto)
   - small helpers (clear form)
   All code uses vanilla JS (no libraries) and is commented for clarity.
*/

document.addEventListener('DOMContentLoaded', function () {
  // ------- NAV TOGGLE (mobile) -------
  function setupNav(toggleId, navId) {
    const toggle = document.getElementById(toggleId);
    // The nav element immediately following is used; if not present, skip
    const nav = document.querySelector(`#${navId}`) || document.querySelector('.main-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      const isShown = nav.classList.toggle('show');
      toggle.setAttribute('aria-expanded', String(isShown));
    });
  }
  // Multiple toggles exist across pages; call with IDs where present
  setupNav('navToggle', 'mainNav');
  setupNav('navToggle2', 'mainNav2');
  setupNav('navToggle3', 'mainNav3');
  setupNav('navToggle4', 'mainNav4');
  setupNav('navToggle5', 'mainNav5');

  // ------- CONTACT PAGE: Recruiter quick message form (mailto) -------
  const recruiterForm = document.getElementById('recruiterForm');
  if (recruiterForm) {
    recruiterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = encodeURIComponent(document.getElementById('r-name').value.trim());
      const email = encodeURIComponent(document.getElementById('r-email').value.trim());
      const message = encodeURIComponent(document.getElementById('r-message').value.trim());

      // Subject and body for your personal email (provided by user)
      const subject = encodeURIComponent(`Message from ${name} via portfolio`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

      // Note: This uses the user's email client to send the message (no DB)
      window.location.href = `mailto:Sahadaliknr@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  // ------- PROBLEM-SOLVING PAGE: Restaurant form -------
  const restaurantForm = document.getElementById('restaurantForm');
  if (restaurantForm) {
    restaurantForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Collect values and sanitise minimally (trim)
      const name = document.getElementById('cust-name').value.trim();
      const email = document.getElementById('cust-email').value.trim();
      const phone = document.getElementById('cust-phone').value.trim();
      const type = document.getElementById('booking-type').value;
      const datetime = document.getElementById('cust-date').value;
      const message = document.getElementById('cust-message').value.trim();

      // Build subject and body for the restaurant email
      let subject = `${type === 'booking' ? 'Booking' : (type === 'feedback' ? 'Feedback' : 'Enquiry')} from ${name}`;
      subject = encodeURIComponent(subject);

      // Assemble body with line breaks
      let bodyText = `Name: ${name}\nEmail: ${email}\n`;
      if (phone) bodyText += `Phone: ${phone}\n`;
      bodyText += `Request type: ${type}\n`;
      if (datetime) bodyText += `Preferred date/time: ${datetime}\n`;
      bodyText += `\nDetails:\n${message}\n\n--\nSent via Delight Dine booking form (prototype)`;

      const body = encodeURIComponent(bodyText);

      // Restaurant email (prototype contact) — specified in brief
      const restaurantEmail = 'info@delightdine.com';

      // Open user's mail client with prefilled subject & body
      window.location.href = `mailto:${restaurantEmail}?subject=${subject}&body=${body}`;
    });

    // Clear form button
    const clearBtn = document.getElementById('clearForm');
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        restaurantForm.reset();
      });
    }
  }
});
