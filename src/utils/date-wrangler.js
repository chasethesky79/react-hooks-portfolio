export function getWeek(current, daysOffSet = 0) {
    if (daysOffSet > 0) {
      current.setDate(current.getDate() + daysOffSet);
    }
    const day = current.getDay();
    const firstDayOfWeek = new Date(current);
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - day);
    const lastDayOfWeek = new Date(current);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + (7 - day));
    return {
      current,
      firstDayOfWeek,
      lastDayOfWeek
    }
}