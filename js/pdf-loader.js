document.addEventListener("DOMContentLoaded", function () {
  console.log("PDF loader script running..."); // ✅ Add this line

  const flyerSection = document.getElementById("pdf-flyer");
  const pdfUrl = "uploads/special.pdf";

  fetch(pdfUrl, { method: 'HEAD' })
    .then(res => {
      console.log("Fetch result:", res.status); // ✅ See if you get 200 or 404
      if (res.ok) {
        flyerSection.style.display = "block";
      }
    })
    .catch(err => {
      console.error("Fetch error:", err);
      flyerSection.style.display = "none";
    });
});