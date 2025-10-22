const form = document.getElementById('contactForm');
const success = document.getElementById('success');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Input values
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  // Error elements
  const errors = {
    name: document.getElementById('error-name'),
    email: document.getElementById('error-email'),
    subject: document.getElementById('error-subject'),
    message: document.getElementById('error-message'),
  };

  // Reset
  Object.values(errors).forEach(el => el.textContent = '');
  success.textContent = '';

  let valid = true;

  // Validation
  if (!name.value.trim()) {
    errors.name.textContent = 'Full name is required.';
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    errors.email.textContent = 'Enter a valid email address.';
    valid = false;
  }

  if (!subject.value.trim()) {
    errors.subject.textContent = 'Subject is required.';
    valid = false;
  }

  if (message.value.trim().length < 10) {
    errors.message.textContent = 'Message must be at least 10 characters.';
    valid = false;
  }

  // Success message
  if (valid) {
    success.textContent = '✅ Message sent successfully!';
    form.reset();
  }
});
