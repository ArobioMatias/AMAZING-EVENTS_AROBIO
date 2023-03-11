const galleryEvents = document.querySelector('.galleryEvent');
const contenedorFiltros = document.querySelector(".form-filters");

upcomingEvents = data.events.filter((event) => data.currentDate < event.date)

drawCards(upcomingEvents, galleryEvents);
drawCategories(getCategories(data.events), contenedorFiltros)
