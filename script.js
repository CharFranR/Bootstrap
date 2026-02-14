document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('toggle-view-btn');
  const tableContainer = document.getElementById('table-container');
  const calendarContainer = document.getElementById('calendar-container');
  let calendarLoaded = false;
  let showingCalendar = false;

  btn.addEventListener('click', async function () {
    if (!showingCalendar) {
      if (!calendarLoaded) {
        try {
          const res = await fetch('calendar.html');
          const text = await res.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(text, 'text/html');
          calendarContainer.innerHTML = doc.body.innerHTML;
          calendarLoaded = true;
        } catch (err) {
          calendarContainer.innerHTML = '<div class="alert alert-danger">No se pudo cargar el calendario.</div>';
        }
      }
      tableContainer.style.display = 'none';
      calendarContainer.style.display = '';
      btn.textContent = 'Ver Lista';
      showingCalendar = true;
    } else {
      calendarContainer.style.display = 'none';
      tableContainer.style.display = '';
      btn.textContent = 'Vista Lista | Calendario';
      showingCalendar = false;
    }
  });
});
