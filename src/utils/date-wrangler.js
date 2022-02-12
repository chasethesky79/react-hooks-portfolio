export function getWeek(date, daysOffSet = 0) {
    if (daysOffSet) {
      date.setDate(date.getDate() + daysOffSet);
    }
    const day = date.getDay();
    const firstDayOfWeek = new Date(date);
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - day);
    const lastDayOfWeek = new Date(date);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + (7 - day));
    return {
      date,
      firstDayOfWeek,
      lastDayOfWeek
    }
}