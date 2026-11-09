/**
 * SILVERBACK VISUALS & SVG ASSET GENERATOR
 * High-fidelity vector illustrations and interactive canvas backgrounds:
 * 1. Particle & HUD Grid Canvas
 * 2. Silverback Heavy-Duty Fleet Motorcycle SVG
 * 3. Silverback + CMO Station Ecosystem Composition SVG
 * 4. High-Resolution LinkedIn QR Code SVG
 */

const Visuals = {
  // Initialize dynamic canvas background
  initCanvas: function(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(width < 768 ? 25 : 55, 60);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.35 + 0.1
      });
    }

    let animationFrame;
    function render() {
      ctx.clearRect(0, 0, width, height);

      // Draw faint coordinate grid
      const gridSize = 64;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;

      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Update & draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(render);
    }
    render();
  },

  // Returns SVG for Silverback Electric Fleet Motorcycle
  getMotorcycleSVG: function() {
    return `
    <svg viewBox="0 0 900 480" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Gradients -->
        <linearGradient id="chassisGrad" x1="150" y1="200" x2="700" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#22252E" />
          <stop offset="50%" stop-color="#15171D" />
          <stop offset="100%" stop-color="#0E1015" />
        </linearGradient>
        <linearGradient id="accentGlowGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="var(--brand-accent)" stop-opacity="1" />
          <stop offset="100%" stop-color="var(--brand-accent)" stop-opacity="0.2" />
        </linearGradient>
        <linearGradient id="rimGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#3A3E4D" />
          <stop offset="100%" stop-color="#12141A" />
        </linearGradient>
        <filter id="bikeGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <!-- Ground Shadow & Reflection -->
      <ellipse cx="450" cy="435" rx="360" ry="18" fill="rgba(0,0,0,0.6)" filter="blur(8px)" />
      <ellipse cx="450" cy="435" rx="280" ry="8" fill="var(--brand-accent)" opacity="0.12" filter="blur(6px)" />

      <!-- REAR WHEEL ASSEMBLY -->
      <g id="rear-wheel">
        <!-- Tyre Outer -->
        <circle cx="240" cy="350" r="82" stroke="#1B1E26" stroke-width="26" />
        <circle cx="240" cy="350" r="95" stroke="#121419" stroke-width="2" stroke-dasharray="4 4" />
        <!-- Rim -->
        <circle cx="240" cy="350" r="69" fill="url(#rimGrad)" stroke="#2E3342" stroke-width="3" />
        <!-- Rotor & Brake Calliper -->
        <circle cx="240" cy="350" r="42" stroke="#484E60" stroke-width="2" stroke-dasharray="6 3" />
        <rect x="228" y="300" width="16" height="24" rx="2" fill="var(--brand-accent)" opacity="0.9" />
        <!-- Hub -->
        <circle cx="240" cy="350" r="22" fill="#0C0D12" stroke="#3D4253" stroke-width="3" />
        <!-- Spokes Structure -->
        <line x1="240" y1="281" x2="240" y2="419" stroke="#252936" stroke-width="6" />
        <line x1="171" y1="350" x2="309" y2="350" stroke="#252936" stroke-width="6" />
        <line x1="191" y1="301" x2="289" y2="399" stroke="#252936" stroke-width="6" />
        <line x1="191" y1="399" x2="289" y2="301" stroke="#252936" stroke-width="6" />
      </g>

      <!-- FRONT WHEEL ASSEMBLY -->
      <g id="front-wheel">
        <!-- Tyre Outer -->
        <circle cx="670" cy="350" r="82" stroke="#1B1E26" stroke-width="26" />
        <circle cx="670" cy="350" r="95" stroke="#121419" stroke-width="2" stroke-dasharray="4 4" />
        <!-- Rim -->
        <circle cx="670" cy="350" r="69" fill="url(#rimGrad)" stroke="#2E3342" stroke-width="3" />
        <!-- Front Disc Brake Rotor -->
        <circle cx="670" cy="350" r="48" stroke="#484E60" stroke-width="2" stroke-dasharray="6 3" />
        <rect x="658" y="295" width="18" height="28" rx="2" fill="var(--brand-accent)" opacity="0.9" />
        <!-- Hub -->
        <circle cx="670" cy="350" r="22" fill="#0C0D12" stroke="#3D4253" stroke-width="3" />
        <!-- Spokes Structure -->
        <line x1="670" y1="281" x2="670" y2="419" stroke="#252936" stroke-width="6" />
        <line x1="601" y1="350" x2="739" y2="350" stroke="#252936" stroke-width="6" />
        <line x1="621" y1="301" x2="719" y2="399" stroke="#252936" stroke-width="6" />
        <line x1="621" y1="399" x2="719" y2="301" stroke="#252936" stroke-width="6" />
      </g>

      <!-- REAR SWINGARM & DRIVE BELT -->
      <path d="M240 350 L390 350 L430 320 L270 320 Z" fill="#1C1F28" stroke="#2D3342" stroke-width="2" />
      <!-- Monoshock Damper -->
      <line x1="330" y1="335" x2="380" y2="260" stroke="var(--brand-accent)" stroke-width="10" stroke-linecap="round" />
      <line x1="330" y1="335" x2="380" y2="260" stroke="#FFFFFF" stroke-width="3" stroke-dasharray="4 4" />

      <!-- MAIN INDUSTRIAL TRELLIS CHASSIS -->
      <path d="M270 320 L370 210 L540 210 L640 180 L590 340 L380 370 Z" fill="url(#chassisGrad)" stroke="#383E50" stroke-width="2.5" />
      
      <!-- Trellis Frame Tubes -->
      <line x1="370" y1="210" x2="480" y2="360" stroke="#2B303E" stroke-width="7" />
      <line x1="540" y1="210" x2="410" y2="360" stroke="#2B303E" stroke-width="7" />
      <line x1="450" y1="210" x2="570" y2="330" stroke="#232733" stroke-width="5" />

      <!-- DUAL SWAPPABLE BATTERY MODULES (Core Differentiator) -->
      <g id="battery-bay">
        <!-- Battery Pack 1 -->
        <rect x="400" y="235" width="82" height="110" rx="4" fill="#0C0E13" stroke="#2E3444" stroke-width="2" />
        <rect x="408" y="245" width="66" height="24" rx="2" fill="#181B23" />
        <text x="441" y="261" fill="#6A7285" font-size="8" font-family="var(--font-digits)" text-anchor="middle">PACK A // 3.2kWh</text>
        <circle cx="418" cy="285" r="4" fill="var(--brand-accent)" />
        <circle cx="430" cy="285" r="4" fill="var(--brand-accent)" />
        <circle cx="442" cy="285" r="4" fill="var(--brand-accent)" />
        <circle cx="454" cy="285" r="4" fill="var(--brand-accent)" />
        <path d="M410 320 L472 320" stroke="var(--brand-accent)" stroke-width="2" opacity="0.8" />

        <!-- Battery Pack 2 -->
        <rect x="495" y="235" width="82" height="110" rx="4" fill="#0C0E13" stroke="#2E3444" stroke-width="2" />
        <rect x="503" y="245" width="66" height="24" rx="2" fill="#181B23" />
        <text x="536" y="261" fill="#6A7285" font-size="8" font-family="var(--font-digits)" text-anchor="middle">PACK B // 3.2kWh</text>
        <circle cx="513" cy="285" r="4" fill="var(--brand-accent)" />
        <circle cx="525" cy="285" r="4" fill="var(--brand-accent)" />
        <circle cx="537" cy="285" r="4" fill="var(--brand-accent)" />
        <circle cx="549" cy="285" r="4" fill="var(--brand-accent)" />
        <path d="M505 320 L567 320" stroke="var(--brand-accent)" stroke-width="2" opacity="0.8" />
      </g>

      <!-- ELECTRIC POWERTRAIN MOTOR CASING -->
      <circle cx="390" cy="355" r="38" fill="#13161D" stroke="#3A4052" stroke-width="3" />
      <circle cx="390" cy="355" r="24" fill="#1E222D" stroke="var(--brand-accent)" stroke-width="1.5" />
      <text x="390" y="359" fill="#9BA3B4" font-size="8" font-family="var(--font-digits)" text-anchor="middle">DRIVE</text>

      <!-- HEAVY-DUTY CARGO RACK (Commercial Fleet Focus) -->
      <g id="fleet-cargo-deck">
        <path d="M170 205 L310 205 L340 240 L180 240 Z" fill="#1A1D26" stroke="#343A4B" stroke-width="2" />
        <!-- Tie down bars -->
        <line x1="175" y1="190" x2="315" y2="190" stroke="#3C4356" stroke-width="4" stroke-linecap="round" />
        <line x1="190" y1="190" x2="190" y2="205" stroke="#3C4356" stroke-width="3" />
        <line x1="240" y1="190" x2="240" y2="205" stroke="#3C4356" stroke-width="3" />
        <line x1="290" y1="190" x2="290" y2="205" stroke="#3C4356" stroke-width="3" />
        <!-- Rear payload spec badge -->
        <rect x="200" y="212" width="80" height="18" rx="2" fill="#0F1117" />
        <text x="240" y="224" fill="#9BA3B4" font-size="8" font-family="var(--font-digits)" text-anchor="middle">PAYLOAD 220KG</text>
      </g>

      <!-- RIDER ERGONOMIC SEAT -->
      <path d="M315 205 Q375 220 440 205 L445 225 L320 225 Z" fill="#1C1E24" stroke="#2B2F3D" stroke-width="2" />

      <!-- FRONT INVERTED TELESCOPIC FORKS -->
      <g id="front-forks">
        <!-- Fork stanchions -->
        <line x1="640" y1="180" x2="670" y2="350" stroke="#484F65" stroke-width="12" stroke-linecap="round" />
        <line x1="640" y1="180" x2="670" y2="350" stroke="var(--brand-accent)" stroke-width="3" />
        <!-- Triple Clamp -->
        <rect x="625" y="172" width="28" height="14" rx="2" fill="#20242E" stroke="#3D4357" stroke-width="2" />
        <!-- Handlebars & Controls -->
        <path d="M625 168 L605 145 L585 148" stroke="#3F465B" stroke-width="6" stroke-linecap="round" />
        <circle cx="585" cy="148" r="4" fill="#1B1E26" />
      </g>

      <!-- AERODYNAMIC FRONT COWL & CYBER LED STRIP -->
      <g id="headlight-cowl">
        <path d="M640 180 L685 200 L715 210 L680 235 L640 220 Z" fill="#181B22" stroke="#32384A" stroke-width="2" />
        <!-- Cyber LED Horizon Lightbar -->
        <path d="M690 205 L718 212" stroke="var(--brand-accent)" stroke-width="5" stroke-linecap="round" filter="url(#bikeGlow)" />
        <path d="M690 205 L718 212" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round" />
      </g>

      <!-- INTERACTIVE HOTSPOTS FOR MOTORCYCLE -->
      <g id="bike-hotspots" class="interactive-hotspot-group">
        <!-- Hotspot 1: Front Suspension -->
        <g class="hotspot-pin" data-hotspot="suspension" transform="translate(650, 240)" style="cursor: pointer;">
          <circle cx="0" cy="0" r="14" fill="var(--brand-accent)" opacity="0.25" class="hotspot-pulse" />
          <circle cx="0" cy="0" r="7" fill="var(--brand-accent)" stroke="#FFFFFF" stroke-width="2" />
        </g>

        <!-- Hotspot 2: Battery Bay -->
        <g class="hotspot-pin" data-hotspot="battery" transform="translate(480, 290)" style="cursor: pointer;">
          <circle cx="0" cy="0" r="14" fill="var(--brand-accent)" opacity="0.25" class="hotspot-pulse" />
          <circle cx="0" cy="0" r="7" fill="var(--brand-accent)" stroke="#FFFFFF" stroke-width="2" />
        </g>

        <!-- Hotspot 3: Fleet Cargo Deck -->
        <g class="hotspot-pin" data-hotspot="cargo" transform="translate(250, 195)" style="cursor: pointer;">
          <circle cx="0" cy="0" r="14" fill="var(--brand-accent)" opacity="0.25" class="hotspot-pulse" />
          <circle cx="0" cy="0" r="7" fill="var(--brand-accent)" stroke="#FFFFFF" stroke-width="2" />
        </g>

        <!-- Hotspot 4: Electric Powertrain -->
        <g class="hotspot-pin" data-hotspot="motor" transform="translate(390, 355)" style="cursor: pointer;">
          <circle cx="0" cy="0" r="14" fill="var(--brand-accent)" opacity="0.25" class="hotspot-pulse" />
          <circle cx="0" cy="0" r="7" fill="var(--brand-accent)" stroke="#FFFFFF" stroke-width="2" />
        </g>
      </g>
    </svg>`;
  },

  // Returns SVG for Motorcycle + CMO Station (Pit Stop & Rider Welfare Hub)
  getEcosystemSVG: function() {
    return `
    <svg viewBox="0 0 1100 480" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="canopyGrad" x1="100" y1="50" x2="700" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#242834" />
          <stop offset="100%" stop-color="#12141A" />
        </linearGradient>
        <linearGradient id="vaultGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1B1E28" />
          <stop offset="100%" stop-color="#0E1015" />
        </linearGradient>
        <filter id="cmoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <!-- Ground Platform -->
      <rect x="40" y="420" width="1020" height="24" rx="3" fill="#111319" stroke="#252A38" stroke-width="1.5" />
      <!-- Guidance line -->
      <line x1="60" y1="428" x2="1040" y2="428" stroke="var(--brand-accent)" stroke-width="2" stroke-dasharray="12 8" opacity="0.6" />

      <!-- ==========================================
           CMO STATION STRUCTURE (Left & Center)
           Charging, Maintenance & Operations Hub
           ========================================== -->
      
      <!-- Architectural Overhead Shaded Canopy (Rest & Cooling) -->
      <path d="M60 85 L720 85 L690 120 L80 120 Z" fill="url(#canopyGrad)" stroke="#383F54" stroke-width="2" />
      <!-- Solar panel trim on roof -->
      <line x1="80" y1="92" x2="700" y2="92" stroke="var(--brand-accent)" stroke-width="3" opacity="0.8" />
      <!-- Canopy Pillars -->
      <rect x="95" y="120" width="16" height="300" fill="#1C1F2A" stroke="#2E3446" stroke-width="2" />
      <rect x="665" y="120" width="16" height="300" fill="#1C1F2A" stroke="#2E3446" stroke-width="2" />
      <!-- Cross Beams -->
      <line x1="95" y1="160" x2="680" y2="160" stroke="#282D3D" stroke-width="4" />

      <!-- Station Header Display -->
      <rect x="130" y="130" width="280" height="36" rx="2" fill="#0C0E13" stroke="#2A3040" stroke-width="1.5" />
      <text x="145" y="152" fill="#FFFFFF" font-size="12" font-family="var(--font-title)" font-weight="700" letter-spacing="1">CMO HUB 01 // PIT STOP & REST</text>
      <circle cx="390" cy="148" r="4" fill="var(--brand-accent)" filter="url(#cmoGlow)" />

      <!-- BATTERY SWAPPING VAULT (Automated 45-second swap) -->
      <g id="swap-kiosk">
        <rect x="130" y="180" width="220" height="240" rx="4" fill="url(#vaultGrad)" stroke="#30374A" stroke-width="2" />
        <rect x="145" y="195" width="190" height="24" rx="2" fill="#0A0C10" />
        <text x="240" y="211" fill="var(--brand-accent)" font-size="10" font-family="var(--font-digits)" text-anchor="middle">SWAP MATRIX // 12 BAYS</text>

        <!-- 8 Charging Module Slots -->
        <!-- Row 1 -->
        <rect x="148" y="230" width="40" height="40" rx="3" fill="#141720" stroke="var(--brand-accent)" stroke-width="1.5" />
        <circle cx="168" cy="250" r="5" fill="var(--brand-accent)" />
        <rect x="194" y="230" width="40" height="40" rx="3" fill="#141720" stroke="var(--brand-accent)" stroke-width="1.5" />
        <circle cx="214" cy="250" r="5" fill="var(--brand-accent)" />
        <rect x="240" y="230" width="40" height="40" rx="3" fill="#141720" stroke="var(--brand-accent)" stroke-width="1.5" />
        <circle cx="260" cy="250" r="5" fill="var(--brand-accent)" />
        <rect x="286" y="230" width="40" height="40" rx="3" fill="#141720" stroke="#3D455C" stroke-width="1.5" />
        <text x="306" y="254" fill="#6A7285" font-size="8" font-family="var(--font-digits)" text-anchor="middle">CHARG</text>

        <!-- Row 2 -->
        <rect x="148" y="280" width="40" height="40" rx="3" fill="#141720" stroke="var(--brand-accent)" stroke-width="1.5" />
        <circle cx="168" cy="300" r="5" fill="var(--brand-accent)" />
        <rect x="194" y="280" width="40" height="40" rx="3" fill="#141720" stroke="var(--brand-accent)" stroke-width="1.5" />
        <circle cx="214" cy="300" r="5" fill="var(--brand-accent)" />
        <rect x="240" y="280" width="40" height="40" rx="3" fill="#141720" stroke="#3D455C" stroke-width="1.5" />
        <text x="260" y="304" fill="#6A7285" font-size="8" font-family="var(--font-digits)" text-anchor="middle">CHARG</text>
        <rect x="286" y="280" width="40" height="40" rx="3" fill="#141720" stroke="var(--brand-accent)" stroke-width="1.5" />
        <circle cx="306" cy="300" r="5" fill="var(--brand-accent)" />

        <!-- Status Bar -->
        <rect x="148" y="340" width="178" height="30" rx="2" fill="#0C0E13" />
        <text x="160" y="360" fill="#9BA3B4" font-size="9" font-family="var(--font-digits)">READY UNITS: 08</text>
        <text x="270" y="360" fill="var(--brand-accent)" font-size="9" font-family="var(--font-digits)">AVG 42 SEC</text>

        <!-- Return / Eject Bay -->
        <rect x="148" y="380" width="178" height="32" rx="2" fill="#1A1E29" stroke="var(--brand-accent)" stroke-width="2" stroke-dasharray="6 3" />
        <text x="237" y="400" fill="#FFFFFF" font-size="10" font-family="var(--font-digits)" text-anchor="middle">INSERT EXHAUSTED PACK</text>
      </g>

      <!-- DIGNITY OF LABOUR AMENITY 1: FILTERED COLD WATER TAP -->
      <g id="hydration-station">
        <rect x="375" y="250" width="55" height="170" rx="3" fill="#171A24" stroke="#2E3547" stroke-width="1.5" />
        <rect x="385" y="260" width="35" height="40" rx="2" fill="#0E1015" />
        <path d="M402 270 C398 276 396 280 396 284 C396 288 399 291 402 291 C405 291 408 288 408 284 C408 280 406 276 402 270 Z" fill="#00D4FF" />
        <text x="402" y="315" fill="#CBD2DE" font-size="8" font-family="var(--font-digits)" text-anchor="middle">WATER</text>
        <!-- Dispenser shelf -->
        <rect x="382" y="335" width="41" height="8" rx="1" fill="#2E3547" />
        <!-- Status LED -->
        <circle cx="402" cy="355" r="3" fill="#00D4FF" />
        <text x="402" y="395" fill="#6A7285" font-size="7" font-family="var(--font-digits)" text-anchor="middle">CHILLED</text>
      </g>

      <!-- DIGNITY OF LABOUR AMENITY 2: SHADED REST BENCH & RECHARGE ZONE -->
      <g id="rest-bench">
        <!-- Ergonomic Seating Bench for Delivery Drivers -->
        <rect x="450" y="350" width="120" height="16" rx="3" fill="#202431" stroke="#384056" stroke-width="1.5" />
        <!-- Bench legs -->
        <line x1="470" y1="366" x2="470" y2="420" stroke="#2B3142" stroke-width="6" />
        <line x1="550" y1="366" x2="550" y2="420" stroke="#2B3142" stroke-width="6" />
        <!-- Backrest -->
        <rect x="450" y="310" width="120" height="12" rx="2" fill="#1C202C" stroke="#333B50" stroke-width="1" />
        <!-- Backrest supports -->
        <line x1="470" y1="322" x2="470" y2="350" stroke="#2B3142" stroke-width="4" />
        <line x1="550" y1="322" x2="550" y2="350" stroke="#2B3142" stroke-width="4" />
        <!-- Device Charging Ports -->
        <rect x="485" y="275" width="50" height="22" rx="2" fill="#0C0E13" stroke="#2A3040" stroke-width="1" />
        <text x="510" y="290" fill="#9BA3B4" font-size="7" font-family="var(--font-digits)" text-anchor="middle">USB-PD 65W</text>
      </g>

      <!-- TECHNICIAN SERVICE & DIAGNOSTICS BAY (Maintenance) -->
      <g id="technician-bay">
        <rect x="590" y="230" width="60" height="190" rx="3" fill="#171A23" stroke="#2C3243" stroke-width="1.5" />
        <rect x="600" y="245" width="40" height="30" rx="2" fill="#0B0D12" />
        <path d="M608 260 L618 253 L628 263 L634 256" stroke="var(--brand-accent)" stroke-width="1.5" fill="none" />
        <text x="620" y="290" fill="#CBD2DE" font-size="7" font-family="var(--font-digits)" text-anchor="middle">TELEMETRY</text>
        <text x="620" y="320" fill="#6A7285" font-size="7" font-family="var(--font-digits)" text-anchor="middle">TOOL BAY</text>
      </g>

      <!-- ==========================================
           SILVERBACK MOTORCYCLE IN THE PIT STOP (Right)
           ========================================== -->
      <g id="pit-stop-bike" transform="translate(480, 50) scale(0.68)">
        <!-- Rear Wheel -->
        <circle cx="240" cy="350" r="75" stroke="#1B1E26" stroke-width="22" />
        <circle cx="240" cy="350" r="62" fill="url(#vaultGrad)" stroke="#2E3342" stroke-width="2.5" />
        <circle cx="240" cy="350" r="20" fill="#0C0D12" stroke="#3D4253" stroke-width="3" />
        <!-- Front Wheel -->
        <circle cx="670" cy="350" r="75" stroke="#1B1E26" stroke-width="22" />
        <circle cx="670" cy="350" r="62" fill="url(#vaultGrad)" stroke="#2E3342" stroke-width="2.5" />
        <circle cx="670" cy="350" r="20" fill="#0C0D12" stroke="#3D4253" stroke-width="3" />
        
        <!-- Chassis & Battery Pack -->
        <path d="M240 350 L370 210 L540 210 L640 180 L590 340 L380 370 Z" fill="#1A1D25" stroke="#383E50" stroke-width="2" />
        <!-- Battery Modules Glowing in Pit Stop -->
        <rect x="400" y="235" width="75" height="100" rx="3" fill="#0C0E13" stroke="var(--brand-accent)" stroke-width="2" />
        <rect x="485" y="235" width="75" height="100" rx="3" fill="#0C0E13" stroke="var(--brand-accent)" stroke-width="2" />
        <!-- Cargo Deck -->
        <path d="M170 205 L310 205 L340 240 L180 240 Z" fill="#141720" stroke="#343A4B" stroke-width="2" />
        <!-- Front Inverted Fork -->
        <line x1="640" y1="180" x2="670" y2="350" stroke="var(--brand-accent)" stroke-width="8" stroke-linecap="round" />
        <!-- Front LED -->
        <path d="M690 205 L718 212" stroke="var(--brand-accent)" stroke-width="6" stroke-linecap="round" filter="url(#cmoGlow)" />
      </g>

      <!-- Connected Power & Diagnostics Umbilical Cable -->
      <path d="M350 400 Q440 440 520 380 Q580 340 760 300" stroke="var(--brand-accent)" stroke-width="2.5" stroke-dasharray="6 4" fill="none" opacity="0.85" />

      <!-- INTERACTIVE HOTSPOTS FOR CMO STATION -->
      <g id="station-hotspots" class="interactive-hotspot-group">
        <!-- Hotspot 1: Swapping Vault -->
        <g class="hotspot-pin" data-hotspot="station-swap" transform="translate(240, 270)" style="cursor: pointer;">
          <circle cx="0" cy="0" r="14" fill="var(--brand-accent)" opacity="0.25" class="hotspot-pulse" />
          <circle cx="0" cy="0" r="7" fill="var(--brand-accent)" stroke="#FFFFFF" stroke-width="2" />
        </g>
        <!-- Hotspot 2: Chilled Hydration Tap -->
        <g class="hotspot-pin" data-hotspot="station-water" transform="translate(402, 335)" style="cursor: pointer;">
          <circle cx="0" cy="0" r="14" fill="#00D4FF" opacity="0.25" class="hotspot-pulse" />
          <circle cx="0" cy="0" r="7" fill="#00D4FF" stroke="#FFFFFF" stroke-width="2" />
        </g>
        <!-- Hotspot 3: Shaded Driver Rest Lounge -->
        <g class="hotspot-pin" data-hotspot="station-rest" transform="translate(510, 340)" style="cursor: pointer;">
          <circle cx="0" cy="0" r="14" fill="var(--brand-accent)" opacity="0.25" class="hotspot-pulse" />
          <circle cx="0" cy="0" r="7" fill="var(--brand-accent)" stroke="#FFFFFF" stroke-width="2" />
        </g>
      </g>
    </svg>`;
  },

  // Returns crisp SVG LinkedIn QR Code with center brand symbol and positioning targets
  getLinkedInQRSVG: function() {
    return `
    <svg viewBox="0 0 200 200" width="150" height="150" xmlns="http://www.w3.org/2000/svg">
      <!-- High contrast white base -->
      <rect width="200" height="200" fill="#FFFFFF" rx="4" />
      
      <!-- Top-Left Finder Pattern -->
      <rect x="15" y="15" width="46" height="46" fill="#0A0B0E" rx="3" />
      <rect x="23" y="23" width="30" height="30" fill="#FFFFFF" rx="2" />
      <rect x="30" y="30" width="16" height="16" fill="#0A0B0E" rx="1" />

      <!-- Top-Right Finder Pattern -->
      <rect x="139" y="15" width="46" height="46" fill="#0A0B0E" rx="3" />
      <rect x="147" y="23" width="30" height="30" fill="#FFFFFF" rx="2" />
      <rect x="154" y="30" width="16" height="16" fill="#0A0B0E" rx="1" />

      <!-- Bottom-Left Finder Pattern -->
      <rect x="15" y="139" width="46" height="46" fill="#0A0B0E" rx="3" />
      <rect x="23" y="147" width="30" height="30" fill="#FFFFFF" rx="2" />
      <rect x="30" y="154" width="16" height="16" fill="#0A0B0E" rx="1" />

      <!-- Timing Patterns -->
      <g fill="#0A0B0E">
        <rect x="68" y="30" width="8" height="8" />
        <rect x="84" y="30" width="8" height="8" />
        <rect x="100" y="30" width="8" height="8" />
        <rect x="116" y="30" width="8" height="8" />

        <rect x="30" y="68" width="8" height="8" />
        <rect x="30" y="84" width="8" height="8" />
        <rect x="30" y="100" width="8" height="8" />
        <rect x="30" y="116" width="8" height="8" />

        <!-- Data Matrix Modules -->
        <rect x="68" y="46" width="8" height="8" />
        <rect x="76" y="54" width="8" height="8" />
        <rect x="92" y="46" width="8" height="8" />
        <rect x="108" y="54" width="8" height="8" />
        <rect x="124" y="46" width="8" height="8" />

        <rect x="46" y="68" width="8" height="8" />
        <rect x="54" y="76" width="8" height="8" />
        <rect x="46" y="92" width="8" height="8" />
        <rect x="54" y="108" width="8" height="8" />
        <rect x="46" y="124" width="8" height="8" />

        <rect x="68" y="139" width="8" height="8" />
        <rect x="76" y="147" width="8" height="8" />
        <rect x="68" y="163" width="8" height="8" />
        <rect x="84" y="171" width="8" height="8" />
        <rect x="100" y="155" width="8" height="8" />
        <rect x="116" y="147" width="8" height="8" />

        <rect x="139" y="68" width="8" height="8" />
        <rect x="147" y="76" width="8" height="8" />
        <rect x="163" y="68" width="8" height="8" />
        <rect x="171" y="84" width="8" height="8" />
        <rect x="155" y="100" width="8" height="8" />
        <rect x="147" y="116" width="8" height="8" />
        <rect x="163" y="124" width="8" height="8" />
        <rect x="171" y="132" width="8" height="8" />

        <rect x="139" y="147" width="8" height="8" />
        <rect x="155" y="155" width="8" height="8" />
        <rect x="171" y="163" width="8" height="8" />
        <rect x="147" y="171" width="8" height="8" />
        <rect x="163" y="179" width="8" height="8" />
      </g>

      <!-- Center LinkedIn Badge -->
      <rect x="76" y="76" width="48" height="48" rx="6" fill="#0A66C2" />
      <g fill="#FFFFFF" transform="translate(86, 86) scale(0.68)">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </g>
    </svg>`;
  },

  // Audio System using Native Web Audio API (No external sound files required)
  audioCtx: null,
  audioEnabled: false,

  toggleAudio: function() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    this.audioEnabled = !this.audioEnabled;
    return this.audioEnabled;
  },

  playTone: function(type = 'click') {
    if (!this.audioEnabled || !this.audioCtx) return;
    try {
      const ctx = this.audioCtx;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (type === 'stage') {
        // High-tech subtle confirmation chirp
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === 'click') {
        // Subtle haptic tick
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, now);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'reveal') {
        // Low futuristic swell
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(110, now);
        osc.frequency.exponentialRampToValueAtTime(220, now + 0.25);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      }
    } catch (e) {
      // Audio context might be restricted before gesture
    }
  }
};

window.Visuals = Visuals;

