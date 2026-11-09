/**
 * SILVERBACK REVIEW MODE & BRAND EVALUATION CONTROLLER
 * Features:
 * 1. "Redefining..." headline proposal switcher (Proposals A, B, and custom input)
 * 2. Brand accent palette switcher (Ember, Volt, Cyan, Titanium)
 * 3. Section 7 Handoff confirmation checklist with localStorage persistence
 * 4. Export & Copy summary tool for Studio Elemento & Selva Sir
 */

const ReviewMode = {
  proposals: {
    proposalA: {
      id: 'proposalA',
      name: 'Proposal A (Confirmed Strategy Focus)',
      beats: [
        {
          index: '01',
          highlight: 'DIGNITY.',
          prefix: 'REDEFINING ',
          subtext: 'Acknowledging delivery riders and technicians as people with dignity of labour, rest, and care.'
        },
        {
          index: '02',
          highlight: 'THE RIDE.',
          prefix: 'REDEFINING ',
          subtext: 'Purpose-engineered heavy-duty electric motorcycle with 220kg rated fleet cargo capacity.'
        },
        {
          index: '03',
          highlight: 'THE PIT STOP.',
          prefix: 'REDEFINING ',
          subtext: 'CMO Station integrating 45-second battery swaps with chilled water, shade, and human amenities.'
        }
      ],
      note: 'Connects dignity of labour, the purpose-built vehicle, and physical energy/rest infrastructure.'
    },
    proposalB: {
      id: 'proposalB',
      name: 'Proposal B (Delivery Experience Focus)',
      beats: [
        {
          index: '01',
          highlight: 'DIGNITY.',
          prefix: 'REDEFINING ',
          subtext: 'Improving driver welfare, roadside amenities, and human conditions across the fleet.'
        },
        {
          index: '02',
          highlight: 'THE RIDE.',
          prefix: 'REDEFINING ',
          subtext: 'Industrial-grade electric powertrain built for quick-commerce and heavy urban duty.'
        },
        {
          index: '03',
          highlight: 'THE DELIVERY EXPERIENCE.',
          prefix: 'REDEFINING ',
          subtext: 'Connecting vehicle uptime, fleet management, and operator well-being into one ecosystem.'
        }
      ],
      note: 'Focuses on end-to-end B2B fleet logistics and delivery operations.'
    }
  },

  activeProposalId: 'proposalA',
  customProposal: null,

  // Initialize review controller
  init: function(timelineDirector) {
    this.timeline = timelineDirector;
    this.drawer = document.getElementById('reviewDrawer');
    this.initChecklist();
    this.initAccentSwitcher();
    this.initCustomProposalInputs();
    this.initHotspots();
    this.initFleetCalculator();
    this.renderProposals();
    this.applyProposal(this.activeProposalId);
  },

  // Initialize interactive hotspots on motorcycle & CMO station
  initHotspots: function() {
    const hotspotData = {
      'battery': {
        title: 'Modular Dual 3.2 kWh Battery Packs',
        tag: 'CORE POWERTRAIN INNOVATION',
        desc: 'Slide-in swappable battery packs designed for quick 45-second manual or automated replacement. Zero cell strain, IP67 waterproof sealed, integrated BMS telemetry.',
        metric: '45 SEC / 160 KM'
      },
      'suspension': {
        title: 'Heavy-Duty Inverted Telescopic Fork',
        tag: 'DURABILITY ARCHITECTURE',
        desc: 'Built to withstand brutal urban potholes and heavily loaded delivery routes without frame stress or rider wrist fatigue.',
        metric: '120 MM TRAVEL'
      },
      'cargo': {
        title: 'Fleet Quick-Commerce Cargo Deck',
        tag: 'COMMERCIAL UTILITY',
        desc: 'Reinforced tubular steel subframe supporting up to 220kg rated cargo load. Modular universal mounts accommodate crates, thermal delivery boxes, and cargo bags.',
        metric: '220 KG PAYLOAD'
      },
      'motor': {
        title: 'Permanent Magnet Synchronous Motor',
        tag: 'HIGH-TORQUE EFFICIENCY',
        desc: 'Direct belt drive delivering instantaneous 120 Nm torque for smooth uphill starts under maximum payload with 99.4% powertrain reliability.',
        metric: '99.4% UPTIME'
      },
      'station-swap': {
        title: '12-Bay Automated Swapping Vault',
        tag: 'CMO INFRASTRUCTURE',
        desc: 'Intelligent battery staging system that conditions, trickle-charges, and cools power packs. Riders simply slide exhausted cells in and grab 100% charged units in 45 seconds.',
        metric: '12 ACTIVE BAYS'
      },
      'station-water': {
        title: 'Chilled Filtered Drinking Water Tap',
        tag: 'DIGNITY OF LABOUR ESSENTIAL',
        desc: 'Dedicated roadside hydration for delivery riders and battery swap technicians. Acknowledging frontline workers as humans entitled to basic physical dignity.',
        metric: 'PURE REHYDRATION'
      },
      'station-rest': {
        title: 'Ergonomic Shaded Driver Lounge',
        tag: 'HUMAN WELFARE INFRASTRUCTURE',
        desc: 'Weather-shielded rest seating equipped with 65W USB-PD charging for driver phones and order terminals. Keeps riders cool, refreshed, and safe during shift breaks.',
        metric: 'CLIMATE SHADE'
      }
    };

    document.addEventListener('click', (e) => {
      const pin = e.target.closest('.hotspot-pin');
      if (pin) {
        const id = pin.getAttribute('data-hotspot');
        const data = hotspotData[id];
        if (data) {
          this.showHotspotModal(data);
          if (window.Visuals) Visuals.playTone('click');
        }
      }
    });
  },

  showHotspotModal: function(data) {
    const modal = document.getElementById('hotspotModal');
    if (!modal) return;
    document.getElementById('modalHotspotTag').textContent = data.tag;
    document.getElementById('modalHotspotTitle').textContent = data.title;
    document.getElementById('modalHotspotDesc').textContent = data.desc;
    document.getElementById('modalHotspotMetric').textContent = data.metric;
    modal.classList.add('is-open');
  },

  closeHotspotModal: function() {
    const modal = document.getElementById('hotspotModal');
    if (modal) modal.classList.remove('is-open');
  },

  // Live Custom Tagline Editor for Client Review
  initCustomProposalInputs: function() {
    const inputB1 = document.getElementById('customBeat1');
    const inputB2 = document.getElementById('customBeat2');
    const inputB3 = document.getElementById('customBeat3');
    if (!inputB1 || !inputB2 || !inputB3) return;

    const updateCustomProposal = () => {
      this.proposals.custom = {
        id: 'custom',
        name: 'Custom Creative Taglines (Client Live Input)',
        beats: [
          { index: '01', prefix: 'REDEFINING ', highlight: inputB1.value.trim().toUpperCase() || 'DIGNITY.', subtext: 'Custom client proposal line 1' },
          { index: '02', prefix: 'REDEFINING ', highlight: inputB2.value.trim().toUpperCase() || 'THE RIDE.', subtext: 'Custom client proposal line 2' },
          { index: '03', prefix: 'REDEFINING ', highlight: inputB3.value.trim().toUpperCase() || 'THE PIT STOP.', subtext: 'Custom client proposal line 3' }
        ],
        note: 'Live custom text entered during brand review session.'
      };
      this.selectProposal('custom');
    };

    [inputB1, inputB2, inputB3].forEach(input => {
      input.addEventListener('input', updateCustomProposal);
    });
  },

  // Interactive B2B Fleet Calculator (ROI & Driver Retention)
  initFleetCalculator: function() {
    const sliderFleet = document.getElementById('calcFleetSize');
    const sliderDistance = document.getElementById('calcDailyKm');
    if (!sliderFleet || !sliderDistance) return;

    const calcOutputSavings = document.getElementById('calcAnnualSavings');
    const calcOutputHours = document.getElementById('calcHoursSaved');
    const calcOutputRetention = document.getElementById('calcRetentionLift');

    const updateCalc = () => {
      const fleetSize = parseInt(sliderFleet.value, 10);
      const dailyKm = parseInt(sliderDistance.value, 10);

      document.getElementById('valFleetSize').textContent = fleetSize;
      document.getElementById('valDailyKm').textContent = dailyKm + ' km';

      // Calculation models
      // Fuel vs EV savings: ~Rs. 1.80 per km savings vs ICE bike
      const annualKm = fleetSize * dailyKm * 300;
      const annualSavings = Math.round(annualKm * 1.85);

      // Charging hours saved vs overnight 4hr plug: 45s swap saves ~3.5 hrs per day per bike
      const hoursSaved = Math.round(fleetSize * 3.5 * 300);

      // Driver turnover reduction factor (from dignity of labour amenities)
      const retentionLift = Math.min(42, Math.round(28 + (fleetSize > 100 ? 10 : 5)));

      if (calcOutputSavings) {
        calcOutputSavings.textContent = '₹' + annualSavings.toLocaleString('en-IN');
      }
      if (calcOutputHours) {
        calcOutputHours.textContent = hoursSaved.toLocaleString('en-IN') + ' HRS';
      }
      if (calcOutputRetention) {
        calcOutputRetention.textContent = '+' + retentionLift + '%';
      }
    };

    sliderFleet.addEventListener('input', updateCalc);
    sliderDistance.addEventListener('input', updateCalc);
    updateCalc();
  },

  toggleDrawer: function() {
    if (!this.drawer) return;
    this.drawer.classList.toggle('is-open');
    const toggleBtn = document.getElementById('btnReviewToggle');
    if (toggleBtn) {
      toggleBtn.classList.toggle('is-active', this.drawer.classList.contains('is-open'));
    }
  },

  closeDrawer: function() {
    if (this.drawer) {
      this.drawer.classList.remove('is-open');
      const toggleBtn = document.getElementById('btnReviewToggle');
      if (toggleBtn) toggleBtn.classList.remove('is-active');
    }
  },

  renderProposals: function() {
    const container = document.getElementById('proposalsContainer');
    if (!container) return;

    let html = '';
    for (const [key, p] of Object.entries(this.proposals)) {
      const isSelected = key === this.activeProposalId;
      html += `
        <div class="proposal-card ${isSelected ? 'is-selected' : ''}" onclick="ReviewMode.selectProposal('${key}')">
          <div class="proposal-name">${p.name}</div>
          <div class="proposal-lines">
            ${p.beats.map(b => `• <strong>${b.prefix}${b.highlight}</strong>`).join('<br>')}
          </div>
          <div class="proposal-tagline-note">${p.note}</div>
        </div>
      `;
    }

    container.innerHTML = html;
  },

  selectProposal: function(id) {
    this.activeProposalId = id;
    this.renderProposals();
    this.applyProposal(id);
    this.showToast(`Applied ${id === 'proposalA' ? 'Proposal A' : 'Proposal B'} headlines`);
  },

  applyProposal: function(id) {
    const p = this.proposals[id];
    if (!p) return;

    const beatsWrapper = document.getElementById('headlineSequenceWrapper');
    if (!beatsWrapper) return;

    beatsWrapper.innerHTML = p.beats.map((b, idx) => `
      <div class="headline-beat" id="beat-${idx + 1}">
        <span class="beat-index">${b.index}</span>
        <div>
          <h2 class="beat-text">${b.prefix}<span class="highlight">${b.highlight}</span></h2>
          <p class="beat-subtext">${b.subtext}</p>
        </div>
      </div>
    `).join('');

    // Update static fallback view as well
    const staticContainer = document.getElementById('staticHeadlinePreview');
    if (staticContainer) {
      staticContainer.innerHTML = p.beats.map(b => `
        <div style="margin-bottom: 1rem;">
          <h2 class="beat-text" style="font-size: 2.2rem;">${b.prefix}<span class="highlight">${b.highlight}</span></h2>
          <p class="beat-subtext" style="margin-left: 0;">${b.subtext}</p>
        </div>
      `).join('');
    }
  },

  initAccentSwitcher: function() {
    const swatches = document.querySelectorAll('.color-swatch');
    swatches.forEach(swatch => {
      swatch.addEventListener('click', (e) => {
        const accent = e.currentTarget.getAttribute('data-accent-choice');
        document.documentElement.setAttribute('data-accent', accent);
        swatches.forEach(s => s.classList.remove('is-active'));
        e.currentTarget.classList.add('is-active');
        this.showToast(`Active accent: ${accent.toUpperCase()}`);
      });
    });
  },

  // Section 7 Checklist management
  initChecklist: function() {
    const defaultChecklist = [
      { id: 'item1', text: '1. Confirm final approved three-part "Redefining..." wording with Selva Sir / brand lead', done: false },
      { id: 'item2', text: '2. Confirm whether the first visual should use the overall grayscale image or new selected image', done: false },
      { id: 'item3', text: '3. Confirm exact CMO station image / composition to follow the motorcycle reveal', done: false },
      { id: 'item4', text: '4. Confirm final LinkedIn QR destination URL and CTA wording', done: true },
      { id: 'item5', text: '5. Confirm animation duration (5.5s vs 3.0s) and loop behavior for live deployment', done: false }
    ];

    let saved = localStorage.getItem('silverback_section7_checklist');
    this.checklistState = saved ? JSON.parse(saved) : defaultChecklist;
    this.renderChecklist();
  },

  renderChecklist: function() {
    const container = document.getElementById('checklistContainer');
    if (!container) return;

    container.innerHTML = this.checklistState.map((item, index) => `
      <label class="checklist-item ${item.done ? 'is-done' : ''}">
        <input type="checkbox" ${item.done ? 'checked' : ''} onchange="ReviewMode.toggleChecklistItem(${index}, this.checked)">
        <span>${item.text}</span>
      </label>
    `).join('');
  },

  toggleChecklistItem: function(index, checked) {
    if (this.checklistState[index]) {
      this.checklistState[index].done = checked;
      localStorage.setItem('silverback_section7_checklist', JSON.stringify(this.checklistState));
      this.renderChecklist();
    }
  },

  exportHandoffSummary: function() {
    const completedCount = this.checklistState.filter(i => i.done).length;
    const totalCount = this.checklistState.length;

    const summaryText = `SILVERBACK HERO & BRAND HANDOFF STATUS
Studio Elemento Web Development Team
--------------------------------------------------
Active Headline Proposal: ${this.proposals[this.activeProposalId].name}
Selected Accent Color: ${document.documentElement.getAttribute('data-accent') || 'Default Ember'}
Timeline Mode: ${this.timeline ? this.timeline.durationMode : '5.5s Standard'}

SECTION 7 CONFIRMATION ITEMS (${completedCount}/${totalCount} completed):
${this.checklistState.map(i => `[${i.done ? 'X' : ' '}] ${i.text}`).join('\n')}

Notes:
- Visual sequence adheres to Oct 23 meeting specifications.
- Aldrich used for logotype & numerals.
- Gemunu Libre used for titles & CTAs.
- Space Grotesk used for body copy.`;

    navigator.clipboard.writeText(summaryText).then(() => {
      this.showToast('Handoff status summary copied to clipboard!');
    }).catch(() => {
      this.showToast('Summary generated. Check console.');
      console.log(summaryText);
    });
  },

  showToast: function(message) {
    const toast = document.getElementById('toastNotice');
    if (!toast) return;
    toast.querySelector('.toast-msg').textContent = message;
    toast.classList.add('show');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
};

window.ReviewMode = ReviewMode;

