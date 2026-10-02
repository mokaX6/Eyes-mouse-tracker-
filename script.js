function handleMove(clientX, clientY) {
  document.querySelectorAll(".pupil").forEach((pupil) => {
    const rect = pupil.parentElement.getBoundingClientRect();
    
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = clientX - cx;
    const dy = clientY - cy;
    const distance = Math.hypot(dx, dy);

    const maxDist = rect.width * 0.22;
    const scale = distance > maxDist ? maxDist / distance : 1;

    const x = dx * scale;
    const y = dy * scale;

    pupil.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  });
}

// Mouse event
document.addEventListener("mousemove", (e) => {
  handleMove(e.clientX, e.clientY);
});

// Touch events for mobile (GitHub Pages)
document.addEventListener("touchstart", (e) => {
  if (e.touches.length > 0) {
    handleMove(e.touches[0].clientX, e.touches[0].clientY);
  }
}, { passive: true });

document.addEventListener("touchmove", (e) => {
  if (e.touches.length > 0) {
    handleMove(e.touches[0].clientX, e.touches[0].clientY);
  }
}, { passive: true });
