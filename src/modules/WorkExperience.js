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
                <input onChange={onChangeFunction}  className="jobTitle" value={jobTitle}/>
            </div>

            <div className="information">
                <p className="detail">Employer</p>
                <input onChange={onChangeFunction}  className="employer" value={employer}/>
            </div>

            <div className="information">
                <p className="detail">Start and end date</p>
                <input type='date' onChange={onChangeFunction}  className="startDate" value={startDate}/>
                <input type='date' onChange={onChangeFunction}  className="endDate" value={endDate}/>
            </div>

            <div className="information">
                <p className="detail">City</p>
                <input onChange={onChangeFunction}  className="city" value={city}/>
            </div>

            <div className="information">
                <p className="detail">Description</p>
                <input onChange={onChangeFunction}  className="description" value={description}/>
            </div>

            <button key-value={key} onClick={deleteWorkFunction}>🗑️</button>
        </div>
    )
}

export default WorkExperience