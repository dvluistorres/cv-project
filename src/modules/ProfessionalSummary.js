import React from "react";

const ProfessionalSummary = ({professionalSummary, onChangeFunction}) => {
    return(
        <div className="professionalSummary">
            <h1 className="title">PROFESSIONAL SUMMARY</h1>
            <p className="detail">Write about you, your expectations and how can you help the company where you will work</p>
            <textarea rows="8" onBlur={onChangeFunction} id='professionalSummary' className="text" defaultValue={professionalSummary}/>
        </div>
    )
}
export default ProfessionalSummary