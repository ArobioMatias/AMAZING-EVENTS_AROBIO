const galleryEvents = document.querySelector('.galleryEvent');

upcomingEvents = data.events.filter((event) => data.currentDate < event.date)

drawCards(upcomingEvents, galleryEvents);