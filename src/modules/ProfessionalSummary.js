import React from "react";

const ProfessionalSummary = ({professionalSummary, onChangeFunction}) => {
    return(
        <div className="ProfessionalSummary">
            <p className="title">Professional Summary</p>
            <p className="detail">Write about you, your expectations and how can you help the company where you will work</p>
            <input onBlur={onChangeFunction} id='professionalSummary' className="text" defaultValue={professionalSummary}/>
        </div>
    )
}

export default ProfessionalSummary