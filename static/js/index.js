// Keep the page functional without third-party JavaScript.
async function copyBibTeX() {
  const code = document.getElementById('bibtex-code');
  const button = document.querySelector('.copy-bibtex-btn');
  const label = button?.querySelector('.copy-text');
  if (!code || !button || !label) return;

  let copied = false;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(code.textContent);
      copied = true;
    }
  } catch {
    // Try the local-file / older-browser fallback below.
  }
  if (!copied) {
    const field = document.createElement('textarea');
    field.value = code.textContent;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    try {
      copied = document.execCommand('copy');
    } finally {
      field.remove();
      button.focus({ preventScroll: true });
    }
  }
  button.classList.toggle('copied', copied);
  label.textContent = copied ? 'Copied!' : 'Select text to copy';
  clearTimeout(button.copyFeedbackTimer);
  button.copyFeedbackTimer = setTimeout(() => {
    button.classList.remove('copied');
    label.textContent = 'Copy';
  }, 2500);
}

function scrollToTop() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reducedMotion ? 'instant' : 'smooth' });
}

const scrollButton = document.querySelector('.scroll-to-top');
function updateScrollButton() {
  scrollButton?.classList.toggle('visible', window.scrollY > 300);
}
window.addEventListener('scroll', updateScrollButton, { passive: true });
updateScrollButton();

// Pause offscreen demos and respect the viewer's reduced-motion preference.
const videos = document.querySelectorAll('.demo-video');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
function applyMotionPreference() {
  videos.forEach(video => {
    video.autoplay = !motionPreference.matches;
    if (motionPreference.matches) video.pause();
  });
}
applyMotionPreference();
motionPreference.addEventListener('change', applyMotionPreference);
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(({ target: video, isIntersecting }) => {
      if (!isIntersecting) video.pause();
      else if (video.autoplay && !motionPreference.matches) video.play().catch(() => {});
    });
  }, { threshold: 0.15 });
  videos.forEach(video => observer.observe(video));
}
