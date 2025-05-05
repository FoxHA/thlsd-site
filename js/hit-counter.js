// Global counter using CountAPI
fetch('https://api.countapi.xyz/hit/mburt-thlsd/visits')
  .then(response => response.json())
  .then(data => {
    const global = document.getElementById('hit-counter');
    if (global) global.textContent = data.value;
  })
  .catch(error => {
    console.error("Global hit counter failed:", error);
    document.getElementById('hit-counter').textContent = "N/A";
  });

// Local counter using localStorage
const localKey = 'thlsd_local_visit_count';
let personalCount = localStorage.getItem(localKey) || 0;
personalCount++;
localStorage.setItem(localKey, personalCount);

// Display personal count if a placeholder exists
const localDisplay = document.getElementById('personal-hit-counter');
if (localDisplay) localDisplay.textContent = personalCount;