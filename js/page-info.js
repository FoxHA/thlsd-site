// Set the visible "last updated" date to today's date
const updatedSpan = document.getElementById("last-updated");
if (updatedSpan) {
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  updatedSpan.textContent = today.toLocaleDateString(undefined, options);
}