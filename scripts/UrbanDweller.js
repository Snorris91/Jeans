import { setSocioLocationID } from "./TransientState.js"



export const locationsTypeChoices = async () => {
    const response = await fetch ("http://localhost:8088/socioLocations")
    const locations = await response.json()

    document.addEventListener("change", handleLocation)

    let choicesHTML = "<h2>Which type of area do you live in?</h2>"
    const locationArr = locations.map((location) =>  {
        return `<input type="radio" name="location" value="${location.id}" />${location.label}`
    })
    choicesHTML += locationArr.join("")
    return choicesHTML
}

const handleLocation = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const converted = parseInt(changeEvent.target.value)
        setSocioLocationID(converted)
    }
}