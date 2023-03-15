drawCards(data.events)
drawCategories(getCategories(data.events))


filterContainer.addEventListener('change', () => {
    crossFilter(data.events)
})
searchBar.addEventListener('input', () => {
    crossFilter(data.events)
})

