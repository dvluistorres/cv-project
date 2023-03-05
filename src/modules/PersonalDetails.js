import React from "react";
import UploadAndDisplayImage from "./UploadAndDisplayImage";

const PersonalDetails = ({details, onChangeFunction}) => {
    const {wantedJobTittle, firstName, lastName, email, cellphone, country, city} = details;

    return(
        <div className="personalDetails">
            <h1>PERSONAL DETAILS</h1>
            <div className="title">
                <p className="detail">Wanted job tittle</p>
                <input onChange={onChangeFunction} id='wantedJob' className="text" value={wantedJobTittle}/>
            </div>

            <UploadAndDisplayImage updateImage={onChangeFunction}/>

            <div className="title">
                <p className="detail">First name</p>
                <input onChange={onChangeFunction} id='firstName' className="text" value={firstName}/>
            </div>

            <div className="title">
                <p className="detail">Last name</p>
                <input onChange={onChangeFunction} id='lastName' className="text" value={lastName}/>
            </div>
            
            <div className="title">
                <p className="detail">Email</p>
                <input onChange={onChangeFunction} id='email' className="text" value={email}/>
            </div>

            <div className="title">
                <p className="detail">Cellphone</p>
                <input onChange={onChangeFunction} id='cellphone' className="text" value={cellphone}/>
            </div>

            <div className="title">
                <p className="detail">Country</p>
                <input onChange={onChangeFunction} id='country' className="text" value={country}/>
            </div>

            <div className="title">
                <p className="detail">City</p>
                <input onChange={onChangeFunction} id='city' className="text" value={city}/>
            </div>
        </div>
    )
}

export default PersonalDetails
