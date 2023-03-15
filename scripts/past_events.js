let pastEvents = data.events.filter((event) => data.currentDate > event.date)

drawCards(pastEvents)
drawCategories(getCategories(data.events))

filterContainer.addEventListener('change', () => {
    crossFilter(pastEvents)
})
searchBar.addEventListener('input', () => {
    crossFilter(pastEvents)
})

