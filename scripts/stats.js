const tableEventsStatistic = document.getElementById('eventsStatistics')
const tableUpcomingEventsStatistics = document.getElementById('upcomingEventsStatistics')
const tablePastEventStatistic = document.getElementById('pastEventStatistic')

fillStatisticsTable()

async function fillStatisticsTable() {
    const response = await getDataFromAPI()
    const pastEvents = getPastEvents(response)
    const upcomingEvents = getUpcomingEvents(response)
    const categories = getCategories(response.events)
    
    fillEventStatistic(pastEvents)
    fillStatisticByCategory(upcomingEvents, categories, tableUpcomingEventsStatistics)
    fillStatisticByCategory(pastEvents, categories, tablePastEventStatistic)   
}

function fillEventStatistic(events){
    let contentMostAttendance = `${getMostAttendedEvent(events).name} (${getMostAttendedEvent(events).percentageAttendace}%)`
    let contentLessAttendance = `${getlessAttendedEvent(events).name} (${getlessAttendedEvent(events).percentageAttendace}%)`
    let contentLargerCapacity = `${getLargestCapacityEvent(events).name} (${getLargestCapacityEvent(events).capacity})`
    let row = document.createElement('tr')

    addNewCell(row, contentMostAttendance)
    addNewCell(row, contentLessAttendance)
    addNewCell(row, contentLargerCapacity)
    tableEventsStatistic.appendChild(row)
}

function fillStatisticByCategory(events, categories, table){
    categories.forEach(element => {
        let revenues = 0, percentageAttendance = 0,totalCapacity = 0,totalEstimate = 0
        let empty = true

        events.forEach(event => {
            if(element == event.category){
                empty = false
                revenues += event.price * (event.estimate || event.assistance)
                totalCapacity += event.capacity
                totalEstimate += (event.estimate || event.assistance)
            }
        })    

        percentageAttendance = (totalEstimate*100)/totalCapacity

        if(!empty){
            let row = document.createElement('tr')
            contentCategory = element
            contentRenenues = `$${revenues}`
            contentPercentageAttendance = `${percentageAttendance.toFixed(2)}%`
    
            addNewCell(row, contentCategory)
            addNewCell(row, contentRenenues)
            addNewCell(row, contentPercentageAttendance)
            table.appendChild(row)
        }   
        
    })
}

function addNewCell(row, content){
    let cell = document.createElement('td')
    cell.innerText = content
    row.appendChild(cell)
}

function getMostAttendedEvent(events){
    return eventsHigherAndLowerAttendance(events).higher
}

function getlessAttendedEvent(events){
    return eventsHigherAndLowerAttendance(events).lower
}

function getLargestCapacityEvent(events){
    const orderedEvents = orderBy(events, "capacity")
    return orderedEvents[0]
}

function eventsHigherAndLowerAttendance(events){
    const reduceEvents = events.map(event => {
        let reducedEvent = {}
        reducedEvent.name = event.name 
        reducedEvent.percentageAttendace = Number(percentage(event.assistance || event.estimate, event.capacity))
        return reducedEvent
    }); 

    const orderedEvents = orderBy(reduceEvents, "percentageAttendace")
    return getHigherAndLower(orderedEvents)
}

