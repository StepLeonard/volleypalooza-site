(function () {
  const target = new Date("2026-11-22T09:00:00");
  const d = document.querySelector("[data-days]");
  const h = document.querySelector("[data-hours]");
  const m = document.querySelector("[data-minutes]");
  const s = document.querySelector("[data-seconds]");

  if (!d || !h || !m || !s) return;

  const pad = (n) => String(n).padStart(2, "0");

  function tick() {
    const diff = Math.max(0, target - Date.now()) / 1000;

    const D = Math.floor(diff / 86400);
    const H = Math.floor((diff % 86400) / 3600);
    const M = Math.floor((diff % 3600) / 60);
    const S = Math.floor(diff % 60);

    d.textContent = pad(D);
    h.textContent = pad(H);
    m.textContent = pad(M);
    s.textContent = pad(S);
  }

  tick();
  setInterval(tick, 1000);
})();