const galleryEvents = document.querySelector('.galleryEvent')
const contenedorFiltros = document.querySelector(".form-filters");

pastEvents = data.events.filter((event) => data.currentDate > event.date)

drawCards(pastEvents, galleryEvents)
drawCategories(getCategories(data.events), contenedorFiltros)
