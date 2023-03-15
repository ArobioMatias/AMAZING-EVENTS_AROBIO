let upcomingEvents = data.events.filter((event) => data.currentDate < event.date)

drawCards(upcomingEvents)
drawCategories(getCategories(data.events))

filterContainer.addEventListener('change', () => {
    crossFilter(upcomingEvents)
})
searchBar.addEventListener('input', () => {
    crossFilter(upcomingEvents)
})

