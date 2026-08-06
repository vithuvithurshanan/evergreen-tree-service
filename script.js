/* ============================================================
   EVERGREEN TREE SERVICE — Main Script
   ============================================================ */

/* ---------- Hamburger Menu ---------- */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

// Close mobile nav when a link is clicked
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileNav.classList.remove('open'));
});

/* ---------- Image Carousel ---------- */
function initCarousel(trackId, dotsContainerId) {
  const track = document.getElementById(trackId);
  if (!track) return;

  const images = track.querySelectorAll('img');
  const dotsContainer = document.getElementById(dotsContainerId);
  let current = 0;
  let timer;

  // Build dots
  images.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    current = (index + images.length) % images.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsContainer.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
    resetTimer();
  }

  function next() { goTo(current + 1); }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(next, 4000);
  }

  resetTimer();

  // Pause on hover
  track.parentElement.addEventListener('mouseenter', () => clearInterval(timer));
  track.parentElement.addEventListener('mouseleave', resetTimer);

  // Touch/swipe support
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
  });
}

initCarousel('carouselTrack1', 'dots1');
initCarousel('carouselTrack2', 'dots2');

/* ---------- FAQ Accordion ---------- */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    // Close all
    document.querySelectorAll('.faq-question').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('open');
    });

    // Open clicked if it was closed
    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      btn.nextElementSibling.classList.add('open');
    }
  });
});

/* ---------- Mailing List Form ---------- */
function handleSubscribe(e) {
  e.preventDefault();
  const confirm = document.getElementById('mailingConfirm');
  confirm.style.display = 'block';
  e.target.reset();
  e.target.style.display = 'none';
}

/* ---------- Contact Form ---------- */
function handleContact(e) {
  e.preventDefault();
  const confirm = document.getElementById('contactConfirm');
  confirm.style.display = 'block';
  e.target.reset();
  e.target.style.display = 'none';
}

/* ---------- Smooth header shadow on scroll ---------- */
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 20
    ? '0 2px 20px rgba(0,0,0,.25)'
    : '0 2px 12px rgba(0,0,0,.15)';
}, { passive: true });

/* ---------- Active nav highlight (using .active class) ---------- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.main-nav a');

function setActiveLink(id) {
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === '#' || href === '#' + id) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Mark "Home" active when near top
window.addEventListener('scroll', () => {
  if (window.scrollY < 100) {
    setActiveLink('');
  }
}, { passive: true });

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setActiveLink(entry.target.id);
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

/* ---------- Modal Logic ---------- */
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Open buttons
['openPrivacyBtn', 'openPrivacyInline'].forEach(btnId => {
  const btn = document.getElementById(btnId);
  if (btn) btn.addEventListener('click', e => { e.preventDefault(); openModal('privacyModal'); });
});

['openTermsBtn', 'openTermsInline'].forEach(btnId => {
  const btn = document.getElementById(btnId);
  if (btn) btn.addEventListener('click', e => { e.preventDefault(); openModal('termsModal'); });
});

// Close buttons
const closePrivacy = document.getElementById('closePrivacyBtn');
const closeTerms = document.getElementById('closeTermsBtn');
if (closePrivacy) closePrivacy.addEventListener('click', () => closeModal('privacyModal'));
if (closeTerms) closeTerms.addEventListener('click', () => closeModal('termsModal'));

// Close on backdrop click
['privacyModal', 'termsModal'].forEach(id => {
  const modal = document.getElementById(id);
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal(id);
    });
  }
});

// Close modals with Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal('privacyModal');
    closeModal('termsModal');
  }
});


