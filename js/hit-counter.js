document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("hit-counter");
  let hits = localStorage.getItem("thlsd-hits") || 0;
  hits++;
  localStorage.setItem("thlsd-hits", hits);
  counter.textContent = hits;
});
