document.addEventListener("mousemove", (e) => {
  // Loop through all pupils
  document.querySelectorAll(".pupil").forEach((pupil) => {
    const rect = pupil.parentElement.getBoundingClientRect();
    
    // 1. Get eye center
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    // 2. Calculate distance to mouse
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const distance = Math.hypot(dx, dy);

    // 3. Keep pupil inside the eye limit
    const maxDist = rect.width * 0.22;
    const scale = distance > maxDist ? maxDist / distance : 1;

    // 4. Move pupil smoothly
    const x = dx * scale;
    const y = dy * scale;

    pupil.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  });
});
