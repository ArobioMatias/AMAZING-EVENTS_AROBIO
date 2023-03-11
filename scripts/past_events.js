const galleryEvents = document.querySelector('.galleryEvent')

pastEvents = data.events.filter((event) => data.currentDate > event.date)

drawCards(pastEvents, galleryEvents)