function setHoloPosition(x, y) {
  const root = document.documentElement.style;
  root.setProperty("--mx", `${x}px`);
  root.setProperty("--my", `${y}px`);
}

window.addEventListener("pointermove", (e) => setHoloPosition(e.clientX, e.clientY));
window.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  if (touch) setHoloPosition(touch.clientX, touch.clientY);
});

const starsLayer = document.getElementById("stars");
if (starsLayer) {
  const STAR_COUNT = 40;
  for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement("span");
    star.className = "star";
    const size = 1 + Math.random() * 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${2 + Math.random() * 3}s`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    starsLayer.appendChild(star);
  }
}

fetch("/links.json")
  .then((res) => res.json())
  .then((links) => {
    const list = document.getElementById("links");
    for (const { label, url } of links) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = url;
      a.textContent = label;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      li.appendChild(a);
      list.appendChild(li);
    }
  });
