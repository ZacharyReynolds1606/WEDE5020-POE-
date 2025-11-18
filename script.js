// Simple form + UI helpers
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.checkValidity()) {
        alert('Please complete the form correctly.');
        return;
      }
      // Collect data (example)
      const data = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        message: form.message.value.trim()
      };
      console.log('Form data:', data);
      // Replace with real POST endpoint or service
      alert('Form validated (demo). Replace with a real submit endpoint.');
      form.reset();
    });
  }

  // Lightbox (minimal)
  document.querySelectorAll('.lightbox-trigger').forEach(img => {
    img.addEventListener('click', () => {
      const lb = document.getElementById('lightbox');
      if (!lb) return;
      document.getElementById('lightboxImg').src = img.src;
      lb.setAttribute('aria-hidden', 'false');
    });
  });
  const lbClose = document.getElementById('lightboxClose');
  if (lbClose) lbClose.addEventListener('click', () => {
    document.getElementById('lightbox').setAttribute('aria-hidden', 'true');
    document.getElementById('lightboxImg').src = '';
  });

  // Accordion (minimal)
  document.querySelectorAll('.accordion-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      if (panel) panel.hidden = open;
    });
  });
});