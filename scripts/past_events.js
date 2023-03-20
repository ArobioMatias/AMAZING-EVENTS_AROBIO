drawScreen("past")

filterContainer.addEventListener('change', async () => {
    const response = await getDataFromAPI()
    crossFilter(getPastEvents(response)) 
})
searchBar.addEventListener('input', async () => {
    const response = await getDataFromAPI()
    crossFilter(getPastEvents(response)) 
})

