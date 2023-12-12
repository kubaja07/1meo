window.onload = function() {
    highlightCurrentHour();
};

function highlightCurrentHour() {
    const currentTime = new Date();
    const currentDay = currentTime.getDay();
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const rows = document.querySelectorAll('table tr');

    rows.forEach((row, index) => {
        if (index === 0) return; // Přeskočíme první řádek s názvy dnů
        const timeCell = row.cells[0].textContent;
        if (timeCell) {
            const [startHour, startMinutes] = timeCell.split(' - ')[0].split(':');
            const [endHour, endMinutes] = timeCell.split(' - ')[1].split(':');

            if (currentHour > startHour || (currentHour == startHour && currentMinutes >= startMinutes)) {
                if (currentHour < endHour || (currentHour == endHour && currentMinutes <= endMinutes)) {
                    row.cells[currentDay].classList.add('current-hour');
                }
            }
        }
    });
}

