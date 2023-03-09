import React from "react";

const DisplayCV = ({ personalDetails, professionalSummary, education, workExperience } ) => {

    return(
        <div className="allPage" id="cv">
            <div className="left">
                <p className="name">{personalDetails.firstName} {personalDetails.lastName}</p>
                <img src={personalDetails.photo} alt='Profile'/>
                <p className="jobTitle">{personalDetails.wantedJobTittle}</p>
                <h3 className="title">Details</h3>
                    <p className="details">{personalDetails.city}</p>
                    <p className="details">{personalDetails.country}</p>
                    <p className="details">{personalDetails.email}</p>
                    <p className="details">{personalDetails.cellphone}</p>
            </div>
            <div className="right">
                <h1 className="title">Profile</h1>
                <p className="professionalSummary">{professionalSummary}</p>
                <h1 className="title">Education</h1>
                {education.map(element => {
                    return (
                        <div className='education' key={'k1' + element.key}>
                            <h2>{element.degree}, {element.school}, {element.city}</h2>
                            <h5>{element.startDate} to {element.endDate}</h5>
                            <p>{element.description}</p>
                        </div>
                        )
                })}
                <h1 className="title">Job history</h1>
                {workExperience.map(element => {
                    return (
                        <div className='work' key={'k2' + element.key}>
                            <h2>{element.jobTitle}, {element.employer}, {element.city}</h2>
                            <h5>{element.startDate} to {element.endDate}</h5>
                            <p>{element.description}</p>
                        </div>
                        )
                })}
            </div>
        </div>
    )
}

export default DisplayCV

