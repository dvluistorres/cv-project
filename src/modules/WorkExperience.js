import React from "react";

const WorkExperience = ({workExperience, onChangeFunction, deleteWorkFunction, addWork}) => {
    return(
        <div className="workExperience">
            <h1>WORK EXPERIENCE</h1>
            {workExperience.map(element => <WorkBullet key={element.key} bullet={element} onChangeFunction={onChangeFunction} deleteWorkFunction={deleteWorkFunction}/>)}
            <button onClick={addWork}>Add work experience</button>
        </div>
    )
}



const WorkBullet = ({bullet, onChangeFunction, deleteWorkFunction}) => {
    const {key, jobTitle, employer, startDate, endDate, city, description} = bullet;
    return(
        <div className="bullet">
            <div className="information">
                <p className="detail">Job title</p>
                <input onBlur={onChangeFunction}  className="jobTitle" defaultValue={jobTitle}/>
            </div>

            <div className="information">
                <p className="detail">Employer</p>
                <input onBlur={onChangeFunction}  className="employer" defaultValue={employer}/>
            </div>

            <div className="information">
                <p className="detail">Start and end date</p>
                <input type='date' onChange={onChangeFunction}  className="startDate" value={startDate}/>
                <input type='date' onChange={onChangeFunction}  className="endDate" value={endDate}/>
            </div>

            <div className="information">
                <p className="detail">City</p>
                <input onBlur={onChangeFunction}  className="city" defaultValue={city}/>
            </div>

            <div className="information">
                <p className="detail">Description</p>
                <input onBlur={onChangeFunction}  className="description" defaultValue={description}/>
            </div>

            <button key-value={key} onClick={deleteWorkFunction}>🗑️</button>
        </div>
    )
}

export default WorkExperience