function drawCards(arrayCards, cardsContainer) {
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
            <button><a href="./details.html">See More</a></button>
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

function drawCategories(arrayCategories, categoriesContainer) {
    const categories = arrayCategories.reduce((acc, category) => {
        return acc + `<div class="form-check">
        <label class="form-check-label">
            <input class="form-check-input" type="checkbox">
            ${category}
        </label>
    </div>`
    }, "")
    categoriesContainer.innerHTML = categories
}
