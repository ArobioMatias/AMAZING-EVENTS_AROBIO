const tableEventsStatistic = document.getElementById('eventsStatistics')
const tableUpcomingEventsStatistics = document.getElementById('upcomingEventsStatistics')
const tablePastEventStatistic = document.getElementById('pastEventStatistic')

drawTableStatistic()

async function drawTableStatistic() {
    const response = await getDataFromAPI()
    const pastEvents = getPastEvents(response)
    let row = document.createElement('tr')
    let cellMostAttendance = document.createElement('td')
    let cellLessAttendance =  document.createElement('td')
    let cellLargerCapacity = document.createElement('td')

    cellMostAttendance.innerText = `${getMostAttendedEvent(pastEvents).name} (${getMostAttendedEvent(pastEvents).percentageAttendace}%)`
    cellLessAttendance.innerText = `${getlessAttendedEvent(pastEvents).name} (${getlessAttendedEvent(pastEvents).percentageAttendace}%)`
    cellLargerCapacity.innerHTML = `${getLargestCapacityEvent(pastEvents)[0].name} (${getLargestCapacityEvent(pastEvents)[0].capacity})`

    row.appendChild(cellMostAttendance)
    row.appendChild(cellLessAttendance)
    row.appendChild(cellLargerCapacity)
    tableEventsStatistic.appendChild(row)
}

function getMostAttendedEvent(events){
    return getMaxAndMin(events)[0]
}

function getlessAttendedEvent(events){
    return getMaxAndMin(events)[1]
}

function getLargestCapacityEvent(events){
    return events.sort((a,b)=>{
        if(a.capacity > b.capacity){
            return -1
        }
        if(a.capacity < b.capacity){
            return 1
        }
        return 0
    })
}

function getMaxAndMin(array){
    const maxAndMin = []
    const reduceEvents = array.map(event => {
        let reducedEvent = {}
        reducedEvent.name = event.name 
        reducedEvent.percentageAttendace = Number(percentage(event.assistance || event.estimate, event.capacity))
        return reducedEvent
    }); 

    reduceEvents.sort((a,b)=>{
        if(a.percentageAttendace > b.percentageAttendace){
            return -1
        }
        if(a.percentageAttendace < b.percentageAttendace){
            return 1
        }
        return 0
    })
    maxAndMin.push(reduceEvents[0])
    maxAndMin.push(reduceEvents[reduceEvents.length-1])
    return maxAndMin
}

function percentage(amount, total){
    return ((amount*100)/total).toFixed(2)
}

drawStatisticByCategory()


async function drawStatisticByCategory(){
    const response = await getDataFromAPI()
    const upcomingEvents = getUpcomingEvents(response)
    const pastEvents = getPastEvents(response)
    console.log(pastEvents)
    const categories = getCategories(response.events)
    drawStatistic(upcomingEvents, categories, tableUpcomingEventsStatistics)
    drawStatistic(pastEvents, categories, tablePastEventStatistic)
}

function drawStatistic(events, categories, table){
    categories.forEach(element => {
        let revenues = 0
        let percentageAttendance = 0
        let totalCapacity = 0
        let totalEstimate = 0
        let row = document.createElement('tr')
        let cellCategory = document.createElement('td')
        let cellRenenues = document.createElement('td')
        let cellPercentageAttendance = document.createElement('td')
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
            cellCategory.innerText = element
            cellRenenues.innerText = `$${revenues}`
            cellPercentageAttendance.innerText = `${percentageAttendance.toFixed(2)}%`
    
            row.appendChild(cellCategory)
            row.appendChild(cellRenenues)
            row.appendChild(cellPercentageAttendance)
            table.appendChild(row)
        }   
        
    })
}