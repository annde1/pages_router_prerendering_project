export async function getAllEvents() {
  const response = await fetch(
    "https://next-js-udemy-4edf2-default-rtdb.firebaseio.com/events.json"
  );

  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key, //add unique id
      ...data[key], //spread all the properties
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}
