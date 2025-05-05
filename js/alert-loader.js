// Load alert.txt content if available
fetch('alerts/alert.txt')
  .then(response => response.text())
  .then(text => {
    const msgBox = document.getElementById("urgent-message");
    const trimmed = text.trim();
    if (trimmed.length > 0) {
      msgBox.innerHTML = `
        <hr class="urgent-rule">
        <p><strong>${trimmed}</strong></p>
        <hr class="urgent-rule">
      `;
      msgBox.style.display = 'block';
    }
  })
  .catch(error => {
    console.error("Couldn't load alert.txt:", error);
  });