import { SubmissionList } from "./List.js"
import { OwnJeansChoices } from "./OwnsJeans.js"
import { locationsTypeChoices } from "./UrbanDweller.js"
import { SaveSubmission } from "./submission.js"

const container = document.querySelector("#container")

const render = async () => {  
    const jeanOwnershipHtml = OwnJeansChoices()
    const locationsHtml = await locationsTypeChoices()
    const buttonHtml = await SaveSubmission()
    const submissionListHTML = await SubmissionList()

        container.innerHTML = `
        ${jeanOwnershipHtml}
        ${locationsHtml}
        ${buttonHtml}
        ${submissionListHTML}`


}

document.addEventListener("theEvent", render)

render()