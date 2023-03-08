const galleryEvents = document.querySelector('.galleryEvent');

drawCards(data.events, galleryEvents);

function drawCards(arrayCards, cardsContainer) {
    let cards = "";
    for (const card of arrayCards) {
        if (verifyTemporality(data.currentDate, card.date) == "future") {
            cards += `<div class="cardEvent">
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
            </div>`;
        }
    }
    cardsContainer.innerHTML = cards;
}

function verifyTemporality(referenceDate, date) {
    return referenceDate > date ? "future" : "past";
}