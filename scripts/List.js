export const SubmissionList = async () => {

    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()

    let submissionHTML = ``
   const submissionArr = submissions.map((submission) =>  {
        return `<section class="submission">
        <div>Owns Jeans? ${submission.ownsBlueJeans}</div>
        <div>Area type foreign key? ${submission.socioLocationId}</div>
        </section>`
        
    })
    submissionHTML = submissionArr.join("")
    return submissionHTML
}