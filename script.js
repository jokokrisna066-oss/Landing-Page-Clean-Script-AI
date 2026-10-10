const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  mobileMenu?.classList.toggle('is-open', !isOpen);
});

document.querySelectorAll('#mobile-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    mobileMenu?.classList.remove('is-open');
  });
});

const waitlistForm = document.querySelector('#waitlist-form');
const emailInput = document.querySelector('#email');
const formMessage = document.querySelector('.form-message');

waitlistForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();

  if (!email || !emailInput.validity.valid) {
    formMessage.textContent = 'Masukkan alamat email yang valid terlebih dahulu.';
    formMessage.classList.add('error');
    emailInput.focus();
    return;
  }

  formMessage.classList.remove('error');
  formMessage.textContent = 'Terima kasih! Kami akan mengabari Anda saat CleanScript AI siap.';
  emailInput.value = '';
});

const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => revealObserver.observe(item));
