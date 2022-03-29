function getWeek(date, daysOffSet = 0) {
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

function getData(url) {
  return fetch(url).then(resp => {
    if (!resp.ok) {
       throw new Error("Error fetching data from server");
    }
    return resp.json();
  });
}

export { getData, getWeek }