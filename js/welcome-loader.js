  document.addEventListener("DOMContentLoaded", function () {
    const welcomeBox = document.getElementById("welcome-box");
    const welcomeMessage = document.getElementById("welcome-message");
    const filePath = "uploads/welcome.txt";

    fetch(filePath)
      .then(res => {
        if (res.ok) {
          return res.text();
        } else {
          throw new Error("No welcome file.");
        }
      })
      .then(text => {
        welcomeMessage.textContent = text.trim();
        welcomeBox.style.display = "block";
      })
      .catch(() => {
        welcomeBox.style.display = "none";
      });
  });

