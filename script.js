function handleMove(clientX, clientY) {
  document.querySelectorAll(".pupil").forEach((pupil) => {
    const rect = pupil.parentElement.getBoundingClientRect();
    
    // 1. Get eye center
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    // 2. Calculate distance to pointer
    const dx = clientX - cx;
    const dy = clientY - cy;
    const distance = Math.hypot(dx, dy);

    // 3. Keep pupil inside the eye limit
    const maxDist = rect.width * 0.22;
    const scale = distance > maxDist ? maxDist / distance : 1;

    // 4. Move pupil smoothly
    const x = dx * scale;
    const y = dy * scale;

    pupil.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  });
}

// Track mouse movement on desktop
document.addEventListener("mousemove", (e) => {
  handleMove(e.clientX, e.clientY);
});

// Track touch movement on mobile devices
document.addEventListener("touchmove", (e) => {
  if (e.touches.length > 0) {
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
  }
}, { passive: true });
