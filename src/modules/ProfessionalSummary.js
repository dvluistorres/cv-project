import React from "react";

const ProfessionalSummary = ({professionalSummary, onChangeFunction}) => {
    return(
        <div className="ProfessionalSummary">
            <h1 className="title">Professional Summary</h1>
            <p className="detail">Write about you, your expectations and how can you help the company where you will work</p>
            <input onBlur={onChangeFunction} id='professionalSummary' className="text" defaultValue={professionalSummary}/>
        </div>
    )
}

export default ProfessionalSummary