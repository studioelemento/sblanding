/**
 * SILVERBACK WEBSITE — HERO & 3-COLUMN FOOTER CONTROLLER
 * Strictly implements the client instructions:
 * 1. Background: Blurred grayscale image (assets/06-11-2026_01.png)
 * 2. Headline: "Redefining" stays still; word changes every 2 seconds with swipe-up/fade
 * 3. Footer: 3-column layout (Left: Logo, Center: Copyright, Right: Clickable & Scannable LinkedIn QR)
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. KINETIC HEADLINE ROTATOR ("Redefining [word]" every 2.0 seconds)
  // =========================================================================
  const rotatorSlot = document.getElementById('headlineRotatorSlot');
  
  // Confirmed phrases from Brand Strategy & PDF Handoff
  const phrases = [
    { word: 'dignity', subtext: 'Connecting to dignity of labour and driver welfare' },
    { word: 'the ride', subtext: 'Connecting to the purpose-engineered electric motorcycle' },
    { word: 'the pit stop', subtext: 'Connecting to charging, 45s swaps, and driver rest' },
    { word: 'the delivery experience', subtext: 'Connecting vehicle uptime, fleet economics, and human care' }
  ];

  let currentIndex = 0;
  let wordElements = [];

  function initRotator() {
    if (!rotatorSlot) return;
    rotatorSlot.innerHTML = '';

    phrases.forEach((item, index) => {
      const span = document.createElement('span');
      span.className = `headline-word-item ${index === 0 ? 'is-active' : ''}`;
      span.textContent = item.word;
      span.setAttribute('data-index', index);
      rotatorSlot.appendChild(span);
      wordElements.push(span);
    });

    // Start 2.0-second interval cycle
    setInterval(advanceWord, 2000);
  }

  function advanceWord() {
    if (wordElements.length < 2) return;

    const prevIndex = currentIndex;
    currentIndex = (currentIndex + 1) % phrases.length;

    const currentEl = wordElements[prevIndex];
    const nextEl = wordElements[currentIndex];

    // 1. Current element swipes up and fades out
    currentEl.classList.remove('is-active');
    currentEl.classList.add('is-exiting');

    // 2. Next element enters from bottom and becomes active
    nextEl.classList.remove('is-exiting');
    nextEl.classList.add('is-active');

    // 3. Reset previous element position after transition completes
    setTimeout(() => {
      currentEl.classList.remove('is-exiting');
    }, 650);

    // Optional audio feedback
    if (window.Visuals && Visuals.playTone) {
      Visuals.playTone('click');
    }
  }

  initRotator();

  // =========================================================================
  // 2. EMBED HIGH-CONTRAST LINKEDIN QR CODE INTO FOOTER
  // =========================================================================
  const footerQrSlot = document.getElementById('footerQrSlot');
  if (footerQrSlot && window.Visuals && Visuals.getLinkedInQRSVG) {
    footerQrSlot.innerHTML = Visuals.getLinkedInQRSVG();
  }

  // =========================================================================
  // 3. REVIEW DRAWER & SECTION 7 CONFIRMATION GATES (For Stakeholders)
  // =========================================================================
  const reviewDrawer = document.getElementById('reviewDrawer');
  const btnOpenDrawer = document.getElementById('btnOpenReview');
  const btnCloseDrawer = document.getElementById('btnCloseReview');

  function toggleReviewDrawer() {
    if (!reviewDrawer) return;
    reviewDrawer.classList.toggle('is-open');
    if (btnOpenDrawer) {
      btnOpenDrawer.classList.toggle('is-active', reviewDrawer.classList.contains('is-open'));
    }
  }

  if (btnOpenDrawer) btnOpenDrawer.addEventListener('click', toggleReviewDrawer);
  if (btnCloseDrawer) btnCloseDrawer.addEventListener('click', toggleReviewDrawer);

  // Keyboard shortcut: Press 'D' to toggle review drawer
  window.addEventListener('keydown', (e) => {
    if (e.key === 'd' || e.key === 'D') {
      if (!['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        toggleReviewDrawer();
      }
    }
  });

  // Section 7 Checklist management
  const checklistData = [
    { text: '1. Confirm final approved three-part "Redefining..." wording with Selva Sir / brand lead', done: false },
    { text: '2. Confirm whether first visual uses overall grayscale image (assets/06-11-2026_01.png)', done: true },
    { text: '3. Confirm exact CMO station image / composition to follow motorcycle reveal', done: false },
    { text: '4. Confirm final LinkedIn profile destination URL and QR link', done: true },
    { text: '5. Confirm 2.0s headline rotation interval and animation style', done: true }
  ];

  const checklistContainer = document.getElementById('checklistContainer');
  if (checklistContainer) {
    checklistContainer.innerHTML = checklistData.map((item, idx) => `
      <label class="checklist-item ${item.done ? 'is-done' : ''}">
        <input type="checkbox" ${item.done ? 'checked' : ''} onchange="this.parentElement.classList.toggle('is-done', this.checked)">
        <span>${item.text}</span>
      </label>
    `).join('');
  }

  // Accent Switcher
  const swatches = document.querySelectorAll('.color-swatch');
  swatches.forEach(swatch => {
    swatch.addEventListener('click', (e) => {
      const accent = e.currentTarget.getAttribute('data-accent-choice');
      document.documentElement.setAttribute('data-accent', accent);
      swatches.forEach(s => s.classList.remove('is-active'));
      e.currentTarget.classList.add('is-active');
      showToast(`Brand Accent: ${accent.toUpperCase()}`);
    });
  });

  // Toast Notification
  function showToast(msg) {
    const toast = document.getElementById('toastMsgBox');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('is-visible');
    setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 2400);
  }
});
