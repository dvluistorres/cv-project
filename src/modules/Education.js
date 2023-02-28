import React, {Component} from "react";

const Education = ({education, onChangeFunction, deleteEducationFunction, addEducation}) => {
    return(
        <div>
            {education.map(element => <EducationBullet key={element.key} bullet={element} onChangeFunction={onChangeFunction} deleteEducationFunction={deleteEducationFunction}/>)}
            <button onClick={addEducation}>Add education</button>
        </div>
    )
}



const EducationBullet = ({bullet, onChangeFunction, deleteEducationFunction}) => {
    const {key, school, degree, startDate, endDate, city, description} = bullet;
    return(
        <div className="bullet">
            <div className="school">
                <p className="detail">School</p>
                <input onChange={onChangeFunction}  className="school text" value={school}/>
            </div>

            <div className="degree">
                <p className="detail">Degree</p>
                <input onChange={onChangeFunction}  className="degree text" value={degree}/>
            </div>

            <div className="dates">
                <p className="detail">Start and end date</p>
                <input type='date' onChange={onChangeFunction}  className="startDate text" value={startDate.toISOString().substr(0, 10)}/>
                <input type='date' onChange={onChangeFunction}  className="endDate text" value={endDate.toISOString().substr(0, 10)}/>
            </div>

            <div className="city">
                <p className="detail">City</p>
                <input onChange={onChangeFunction}  className="city text" value={city}/>
            </div>

            <div className="description">
                <p className="detail">Description</p>
                <input onChange={onChangeFunction}  className="description text" value={description}/>
            </div>

            <button key-value={key} onClick={deleteEducationFunction}>🗑️</button>
        </div>
    )
}

export default Education