# Jinx Eye Tracker

An interactive character animation featuring Jinx, where her eyes dynamically track the user's mouse movement across the screen in real-time.

---

## Features

- **Mouse Tracking Mechanics:** Smooth and responsive pupil movement that follows cursor coordinates within bounded eye sockets.
- **Dynamic Physics Calculation:** Utilizes vector math and bounding rects to keep the pupils naturally constrained inside the eye frames.

---

## Built With

- **HTML5:** Semantic markup structure for the character wrapper, image asset, and eye/pupil elements.
- **CSS3:** Absolute positioning, flexbox centering, border radii, and radial highlights.
- **JavaScript (ES6):** Mousemove event listeners, distance calculations (`Math.hypot`), and dynamic CSS transform updates.

---

Developed by **Moka**.

## Project Structure

```text
jinx-eye-tracker/
│
├── index.html       # Character markup and eye structures
├── style.css        # Visual styling, layout, and eye positioning
├── script.js        # Mouse tracking logic and pupil movement math
└── README.md        # Documentation
