import React, {Component} from "react";
import { formatISO } from "date-fns";

const Education = ({education, onChangeFunction, deleteEducationFunction, addEducation}) => {
    return(
        <div className="education">
            {education.map(element => <EducationBullet key={element.key} bullet={element} onChangeFunction={onChangeFunction} deleteEducationFunction={deleteEducationFunction}/>)}
            <button onClick={addEducation}>Add education</button>
        </div>
    )
}



const EducationBullet = ({bullet, onChangeFunction, deleteEducationFunction}) => {
    const {key, school, degree, startDate, endDate, city, description} = bullet;
    return(
        <div className="bullet">
            <div className="information">
                <p className="detail">School</p>
                <input onChange={onChangeFunction}  className="school" value={school}/>
            </div>

            <div className="information">
                <p className="detail">Degree</p>
                <input onChange={onChangeFunction}  className="degree" value={degree}/>
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

            <button key-value={key} onClick={deleteEducationFunction}>🗑️</button>
        </div>
    )
}

export default Education