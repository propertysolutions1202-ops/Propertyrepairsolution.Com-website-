// main JS for form handling
const form = document.getElementById('quote-form');
const status = document.getElementById('form-status');

if (form && status) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    if (!submitButton) return;

    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    status.textContent = '';

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      form.reset();
      status.textContent = 'Thanks! Your message and files were sent successfully.';
      status.style.color = '#d9f5db';
    } catch (error) {
      console.error(error);
      status.textContent = 'There was a problem sending your message. Please try again or call the office directly.';
      status.style.color = '#ffd3d3';
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Send request';
    }
  });
}
