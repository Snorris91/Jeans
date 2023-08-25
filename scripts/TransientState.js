// Set up the transient state data structure and provide initial valuess
const transientState = new Map()
transientState.set("ownsBlueJeans", false)
transientState.set("socioLocationId", 0)





// {
//     "ownsBlueJeans": false,
//     "socioLocationId": 0
// }


// Functions to modify each property of transient state

export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.set("ownsBlueJeans", chosenOwnership)
}
export const setSocioLocationID = (chosenLocation) => {
    transientState.set("socioLocationId", chosenLocation)
}



// Function to convert transient state to permanent state


export const saveSurveySubmission = async () => {
    const selection = Object.fromEntries(transientState)
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(selection)
    }

     const response = await fetch("http://localhost:8088/submissions", postOptions)

//     // Define your very own event
const customEvent = new CustomEvent("theEvent")

// // Broadcast, or dispatch, the event
document.dispatchEvent(customEvent)
}