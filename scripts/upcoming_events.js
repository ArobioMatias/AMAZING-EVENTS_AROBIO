drawScreen("upcoming")

filterContainer.addEventListener('change', async () => {
    const response = await getDataFromAPI()
    crossFilter(getUpcomingEvents(response)) 
})
searchBar.addEventListener('input', async () => {
    const response = await getDataFromAPI()
    crossFilter(getUpcomingEvents(response)) 
})

