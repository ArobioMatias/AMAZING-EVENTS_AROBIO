drawScreen("all")

filterContainer.addEventListener('change', async () => {
    const response = await getDataFromAPI()
    crossFilter(response.events) 
})
searchBar.addEventListener('input', async () => {
    const response = await getDataFromAPI()
    crossFilter(response.events) 
})


