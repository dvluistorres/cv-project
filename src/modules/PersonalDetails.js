import React from "react";
import UploadAndDisplayImage from "./UploadAndDisplayImage";

const PersonalDetails = ({details, onChangeFunction}) => {
    const {wantedJobTittle, firstName, lastName, email, cellphone, country, city} = details;

    return(
        <div className="personalDetails">
            <h1>PERSONAL DETAILS</h1>
            <div className="title">
                <p className="detail">Wanted job tittle</p>
                <input onBlur={onChangeFunction} id='wantedJob' className="text" defaultValue={wantedJobTittle}/>
            </div>

            <UploadAndDisplayImage/>

            <div className="title">
                <p className="detail">First name</p>
                <input onBlur={onChangeFunction} id='firstName' className="text" defaultValue={firstName}/>
            </div>

            <div className="title">
                <p className="detail">Last name</p>
                <input onBlur={onChangeFunction} id='lastName' className="text" defaultValue={lastName}/>
            </div>
            
            <div className="title">
                <p className="detail">Email</p>
                <input onBlur={onChangeFunction} id='email' className="text" defaultValue={email}/>
            </div>

            <div className="title">
                <p className="detail">Cellphone</p>
                <input onBlur={onChangeFunction} id='cellphone' className="text" defaultValue={cellphone}/>
            </div>

            <div className="title">
                <p className="detail">Country</p>
                <input onBlur={onChangeFunction} id='country' className="text" defaultValue={country}/>
            </div>

            <div className="title">
                <p className="detail">City</p>
                <input onBlur={onChangeFunction} id='city' className="text" defaultValue={city}/>
            </div>
        </div>
    )
}

export default PersonalDetails
