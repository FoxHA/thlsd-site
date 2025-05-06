document.addEventListener("DOMContentLoaded", function () {
  const calendar = document.getElementById("calendar");
  const calendarHeader = document.getElementById("calendar-header");
  const cardContainer = document.getElementById("event-cards");

  let currentDate = new Date();

  function renderCalendar(date) {
    calendar.innerHTML = "";
    calendarHeader.textContent = date.toLocaleString("default", { month: "long", year: "numeric" });

    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDay = firstDay.getDay();

    // Blank cells for days before the 1st
    for (let i = 0; i < startDay; i++) {
      const emptyCell = document.createElement("div");
      calendar.appendChild(emptyCell);
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      const dateStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      const cell = document.createElement("div");
      cell.textContent = day;

      const hasEvent = events.some(e => e.date === dateStr);
      if (hasEvent) {
        cell.classList.add("has-event");
        cell.addEventListener("click", () => {
          const el = document.getElementById("event-" + dateStr);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }

      calendar.appendChild(cell);
    }

    renderEventCards(year, month);
  }

  function renderEventCards(year, month) {
    cardContainer.innerHTML = "";
    const filteredEvents = events.filter(e => {
      const eDate = new Date(e.date);
      return eDate.getFullYear() === year && eDate.getMonth() === month;
    }).sort((a, b) => new Date(a.date) - new Date(b.date));

    filteredEvents.forEach(event => {
      const card = document.createElement("div");
      card.className = "event-card";
      card.id = "event-" + event.date;
      card.innerHTML = `
        <h2>${event.title}</h2>
        <p><strong>Date:</strong> ${event.date} at ${event.time}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p>${event.description}</p>
      `;
      cardContainer.appendChild(card);
    });
  }

  document.getElementById("prev-month").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });

  document.getElementById("next-month").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });

  renderCalendar(currentDate);
});
