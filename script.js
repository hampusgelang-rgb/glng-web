// GLNG - Minimalist Contact Script

function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const statusEl = document.getElementById('formStatus');

  const subject = encodeURIComponent(`Förfrågan från ${name} (glng.se)`);
  const body = encodeURIComponent(`Namn: ${name}\nE-post: ${email}\n\nMeddelande:\n${message}`);

  // Open user mail client with prefilled details
  const mailtoUrl = `mailto:hampus@glng.se?subject=${subject}&body=${body}`;
  window.location.href = mailtoUrl;

  // Show status feedback
  if (statusEl) {
    statusEl.textContent = 'Öppnar din e-postklient... (Eller maila direkt till hampus@glng.se)';
    statusEl.classList.add('active');
  }
}

// Mobile tap interaction for tactical viewfinder
document.addEventListener('DOMContentLoaded', () => {
  const viewfinder = document.getElementById('viewfinder');
  if (viewfinder) {
    viewfinder.addEventListener('click', () => {
      viewfinder.classList.add('focused');
      setTimeout(() => {
        viewfinder.classList.remove('focused');
      }, 700);
    });
  }
});
