<script setup lang="ts">
  const cards = [
    {
      id: 1,
      barWidth: 73,
      icon: `<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>`,
    },
    {
      id: 2,
      barWidth: 58,
      icon: `<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>`,
    },
    {
      id: 3,
      barWidth: 85,
      icon: `<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>`,
    },
    {
      id: 4,
      barWidth: 66,
      icon: `<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>`,
    },
  ]

  onMounted(() => {
    setTimeout(() => {
      document.querySelectorAll<HTMLElement>('.bar-fill').forEach(el => {
        el.style.width = el.dataset.w + '%'
      })
    }, 1800)
  })
</script>

<template>
  <div class="wrapper">
    <!-- Connection lines -->
    <svg class="connections" viewBox="0 0 600 500">
      <path d="M 300 250 L 480 130"/>
      <path d="M 300 250 L 520 310"/>
      <path d="M 300 250 L 220 90"/>
      <path d="M 300 250 L 160 350"/>
    </svg>
    <!-- Hub -->
    <div class="hub">
      <div class="hub-pulse"></div>
      <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="16" y="16" width="6" height="6" rx="1"/>
        <rect x="2"  y="16" width="6" height="6" rx="1"/>
        <rect x="9"  y="2"  width="6" height="6" rx="1"/>
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/>
        <path d="M12 12V8"/>
      </svg>
    </div>
    <!-- Node dots -->
    <div v-for="n in 4" :key="n" :class="`node-dot dot-${n}`"></div>
    <!-- Floating cards -->
    <div
      v-for="card in cards"
      :key="card.id"
      :class="`card card-${card.id}`"
    >
      <div class="card-header">
        <div class="card-icon">
          <svg viewBox="0 0 24 24" v-html="card.icon"></svg>
        </div>
        <div class="card-bars">
          <div class="bar-track">
            <div class="bar-fill" :data-w="card.barWidth"></div>
          </div>
          <div class="bar-short"></div>
        </div>
      </div>
      <div class="card-footer">
        <div class="tick-marks">
          <div v-for="t in 3" :key="t" class="tick"></div>
        </div>
        <div class="card-status">
          <div class="card-status-dot"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* ─── WRAPPER ───────────────────────────────────── */
  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
    width: 440px;
    height: 440px;
    margin: auto;
  }

  /* ─── CONNECTION LINES ──────────────────────────── */
  .connections {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 10;
  }
  .connections path {
    stroke: rgba(59, 130, 246, 0.2);
    stroke-width: 1.5;
    fill: none;
    stroke-dasharray: 200;
    stroke-dashoffset: 200;
    animation: drawLine 1s ease-out forwards;
  }
  .connections path:nth-child(1) { animation-delay: 0.8s; }
  .connections path:nth-child(2) { animation-delay: 1.0s; }
  .connections path:nth-child(3) { animation-delay: 1.2s; }
  .connections path:nth-child(4) { animation-delay: 1.4s; }
  @keyframes drawLine {
    to { stroke-dashoffset: 0; }
  }

  /* ─── HUB ───────────────────────────────────────── */
  .hub {
    position: relative;
    z-index: 20;
    width: 104px;
    height: 104px;
    border-radius: 24px;
    background: #fff;
    border: 1px solid #f1f5f9;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.04);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    animation:
      hubIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards,
      float 4s  ease-in-out                     1.2s infinite;
  }
  .hub-pulse {
    position: absolute;
    inset: 0;
    border-radius: 24px;
    background: rgba(37, 99, 235, 0.05);
    animation: pulse 2.5s ease-in-out infinite;
  }
  .hub svg {
    width: 48px;
    height: 48px;
    stroke: #2563eb;
    fill: none;
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  @keyframes hubIn {
    from { opacity: 0; transform: scale(0.8); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-12px); }
  }

  /* ─── NODE DOTS ─────────────────────────────────── */
  .node-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #2563eb;
    z-index: 20;
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
    opacity: 0;
    animation: dotIn 0.4s ease forwards;
  }
  .node-dot::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: rgba(96, 165, 250, 0.5);
    animation: ripple 2s ease-in-out infinite;
  }
  .dot-1 { right: 30%; top: 15%; animation-delay: 1.6s; }
  .dot-2 { right: 15%; bottom: 40%; animation-delay: 1.8s; }
  .dot-3 { left: 30%; top: 35%; animation-delay: 2.0s; }
  .dot-4 { left: 25%; bottom: 40%; animation-delay: 2.2s; }
  @keyframes dotIn {
    to { opacity: 1; }
  }
  @keyframes ripple {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50%       { transform: scale(2); opacity: 0; }
  }

  /* ─── FLOATING CARDS ────────────────────────────── */
  .card {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 200px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.65);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.9);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04);
    z-index: 30;
    opacity: 0;
  }
  .card-1 {
    transform: translateX(25%) translateY(-145%) rotate(-15deg);
    animation:
      cardIn     0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.0s forwards,
      cardFloat1 5s   ease-in-out                    1.8s infinite;
  }
  .card-2 {
    transform: translateX(25%) translateY(40%) rotate(10deg);
    animation:
      cardIn     0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards,
      cardFloat2 6s   ease-in-out                    2.0s infinite;
  }
  .card-3 {
    transform: translateX(-95%) translateY(-200%) rotate(5deg);
    animation:
      cardIn     0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.4s forwards,
      cardFloat3 5.5s ease-in-out                    2.2s infinite;
  }
  .card-4 {
    transform: translateX(-115%) translateY(60%) rotate(-8deg);
    animation:
      cardIn     0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.6s forwards,
      cardFloat4 4.8s ease-in-out                    2.4s infinite;
  }
  @keyframes cardIn {
    to { opacity: 1; }
  }
  @keyframes cardFloat1 {
    0%, 100% { transform: translateX(25%)  translateY(-145%) rotate(-15deg); }
    50%       { transform: translateX(25%)  translateY(-130%) rotate(-15deg); }
  }
  @keyframes cardFloat2 {
    0%, 100% { transform: translateX(25%)  translateY(40%)   rotate(10deg); }
    50%       { transform: translateX(25%)  translateY(60%)   rotate(10deg); }
  }
  @keyframes cardFloat3 {
    0%, 100% { transform: translateX(-95%)  translateY(-200%) rotate(5deg); }
    50%       { transform: translateX(-95%)  translateY(-185%) rotate(5deg); }
  }
  @keyframes cardFloat4 {
    0%, 100% { transform: translateX(-115%) translateY(60%)  rotate(-8deg); }
    50%       { transform: translateX(-115%) translateY(70%)  rotate(-8deg); }
  }
  @keyframes cardFloat1Sp {
    0%, 100% { transform: translateX(25%)  translateY(-145%) rotate(-15deg); }
    50%       { transform: translateX(25%)  translateY(-130%) rotate(-15deg); }
  }
  @keyframes cardFloat2Sp {
    0%, 100% { transform: translateX(25%)  translateY(40%)   rotate(10deg); }
    50%       { transform: translateX(25%)  translateY(60%)   rotate(10deg); }
  }
  @keyframes cardFloat3Sp {
    0%, 100% { transform: translateX(-115%)  translateY(-150%) rotate(5deg); }
    50%       { transform: translateX(-115%)  translateY(-140%) rotate(5deg); }
  }
  @keyframes cardFloat4Sp {
    0%, 100% { transform: translateX(-115%) translateY(50%)  rotate(-8deg); }
    50%       { transform: translateX(-115%) translateY(60%)  rotate(-8deg); }
  }

  /* ─── CARD INTERNALS ────────────────────────────── */
  .card-header {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .card-icon {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: rgba(239, 246, 255, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card-icon svg {
    width: 20px;
    height: 20px;
    stroke: #2563eb;
    fill: none;
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .card-bars {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .bar-track {
    height: 7px;
    background: rgba(241, 245, 249, 0.6);
    border-radius: 9999px;
    overflow: hidden;
  }
  .bar-fill {
    height: 100%;
    border-radius: 9999px;
    background: rgba(96, 165, 250, 0.5);
    width: 0;
    transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .bar-short {
    height: 6px;
    width: 60%;
    background: #f8fafc;
    border-radius: 9999px;
  }
  .card-footer {
    padding-top: 8px;
    border-top: 1px solid #f8fafc;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .tick-marks {
    display: flex;
    gap: 4px;
  }
  .tick {
    width: 24px;
    height: 4px;
    background: #f1f5f9;
    border-radius: 9999px;
  }
  .card-status {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid rgba(219, 234, 254, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card-status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(96, 165, 250, 0.8);
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1;   transform: scale(1); }
    50%       { opacity: 0.6; transform: scale(0.85); }
  }
  @media screen and (max-width: 640px) {
    .wrapper {
      width: 320px;
      height: 320px;
    }
    .hub {
      width: 80px;
      height: 80px;
    }
    .hub svg {
      width: 40px;
      height: 40px;
    }
    .card {
      width: 144px;
      padding: 16px;
    }
    .card-1 {
      transform: translateX(25%) translateY(-145%) rotate(-15deg);
      animation:
        cardIn     0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.0s forwards,
        cardFloat1Sp 5s   ease-in-out                    1.8s infinite;
    }
    .card-2 {
      transform: translateX(25%) translateY(40%) rotate(10deg);
      animation:
        cardIn     0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards,
        cardFloat2Sp 6s   ease-in-out                    2.0s infinite;
    }
    .card-3 {
      transform: translateX(-115%) translateY(-150%) rotate(5deg);
      animation:
        cardIn     0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.4s forwards,
        cardFloat3Sp 5.5s ease-in-out                    2.2s infinite;
    }
    .card-4 {
      transform: translateX(-115%) translateY(50%) rotate(-8deg);
      animation:
        cardIn     0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.6s forwards,
        cardFloat4Sp 4.8s ease-in-out                    2.4s infinite;
    }

  }
</style>
