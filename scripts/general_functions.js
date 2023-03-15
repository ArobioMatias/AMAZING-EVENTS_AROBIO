const cardsContainer = document.querySelector('.galleryEvent')
const filterContainer = document.querySelector(".form-filters")
const searchBar = document.querySelector('.searchBar-entry')

function drawCards(arrayCards) {
    const cards = arrayCards.reduce((acc, card) => {
        return acc + `<div class="cardEvent">
        <figure class="cardEvent-img">
            <img src="${card.image}" alt="Personas en un cine">
        </figure>
        <div class="cardEvent-text">
            <h3>${card.name}</h3>
            <p>${card.description}</p>
        </div>
        <div class="cardEvent-footer">
            <p>Price: $${card.price}</p>
            <button><a href="./details.html?id=${card._id}">See More</a></button>
        </div>
    </div>`
    }, "")
    cardsContainer.innerHTML = cards
}

function getCategories(eventos){
    const categorias = []
    eventos.forEach(evento => {
        if(!categorias.includes(evento.category)){
            categorias.push(evento.category)
        }
    })
    return categorias
}

function drawCategories(arrayCategories) {
    const categories = arrayCategories.reduce((acc, category) => {
        return acc + `<div class="form-check">
        <label class="form-check-label">
            <input class="form-check-input" type="checkbox" value="${category}">
            ${category}
        </label>
    </div>`
    }, "")
    filterContainer.innerHTML = categories
}

function filterByCategory(cards){
    let checkboxes = Array.from(document.querySelectorAll(".form-check-input")) 
    let checkboxesChecked = checkboxes.filter(checkbox => checkbox.checked)
    if(checkboxesChecked.length == 0){
        return cards
    }
    let categoriesChecked = checkboxesChecked.map(checkbox => checkbox.value)
    return cards.filter(card => categoriesChecked.includes(card.category))
}

function filterByText(cards){
    return cards.filter(card => card.name.toLowerCase().includes(searchBar.value.toLowerCase()))
}

function crossFilter(events){
    let cardsFiltered1 = filterByCategory(events)
    let cardsFiltered2 = filterByText(cardsFiltered1)
    drawCards(cardsFiltered2)
}