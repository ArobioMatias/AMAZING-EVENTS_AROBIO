const galleryEvents = document.querySelector('.galleryEvent');
const contenedorFiltros = document.querySelector(".form-filters");

drawCards(data.events, galleryEvents);
drawCategories(getCategories(data.events), contenedorFiltros)

