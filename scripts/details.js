const querySearch = location.search
const id = new URLSearchParams(querySearch).get("id")
const cardDetailContainer = document.querySelector(".eventDetails")
drawCardDetail()

async function drawCardDetail() {
    const response = await getDataFromAPI()
    const selectedEvent = response.events.find(event => event._id == id)

    cardDetailContainer.innerHTML = `<article class="cardDetail"> 
<figure class="cardDetail-image">
    <img src="${selectedEvent.image}" alt="imagen de ${selectedEvent.name}">
</figure>
<div class="cardDetail-text">
    <h2 class="cardDetail-title">${selectedEvent.name}</h2>
    <p class="cardDetail-description">
    ${selectedEvent.description}
    </p>
    <p class="cardDetail-date">
        <span>Date: </span>${selectedEvent.date}
    </p>
    <p class="cardDetail-place">
        <span>Place: </span>${selectedEvent.place}
    </p>
    <p class="cardDetail-category">
        <span>Category: </span>${selectedEvent.category}
    </p>
    <p class="cardDetail-capacity">
        <span>Capacity: </span>${selectedEvent.capacity}
    </p>
    <p class="cardDetail-assistance">
        <span>Assistance/Estimate: </span>${selectedEvent.assistance || selectedEvent.estimate}
    </p>
    <p class="cardDetail-price">
        <span>Price: </span>$${selectedEvent.price}
    </p>
    
</div>
</article>`
}