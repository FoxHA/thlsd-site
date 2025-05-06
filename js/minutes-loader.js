const expectedMinutes = [
  { label: "May 2025", file: "minutes/2025-05.pdf" },
  { label: "April 2025", file: "minutes/2025-04.pdf" },
  { label: "March 2025", file: "minutes/2025-03.pdf" },
  { label: "February 2025", file: "minutes/2025-02.pdf" },
  { label: "January 2025", file: "minutes/2025-01.pdf" }
];

document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("minutes-table-body");

  expectedMinutes.forEach(entry => {
    fetch(entry.file, { method: 'HEAD' })
      .then(res => {
        if (res.ok) {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${entry.label}</td>
            <td><a href="${entry.file}" target="_blank">View PDF</a></td>
          `;
          table.appendChild(row);
        }
      });
  });
});
