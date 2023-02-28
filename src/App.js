import React, { Component } from 'react';
import './App.css';
import Title from './modules/Title'
import PersonalDetails from './modules/PersonalDetails';
import ProfessionalSummary from './modules/ProfessionalSummary';
import Education from './modules/Education';
import uniqid from 'uniqid'

class App extends Component {
  constructor (){
    super();

    this.state = {
      personalDetails:{
        wantedJobTittle:'Web developer',
        photo:null,
        firstName:'Luis Arturo',
        lastName:'Torres',
        email:'dvluistorres@gmail.com',
        country:'Colombia',
        city:'Medellin'
      },
      professionalSummary:'Experienced civil engineer seeking to transition into a career in web development with 6 months of hands-on training in HTML/CSS, JavaScript, and React. Skilled in project management, team collaboration, and problem-solving, with a passion for coding and building user-focused web applications. Strong attention to detail and client relationship management skills gained from working with diverse stakeholders in civil engineering projects.',
      education:[
        {key: uniqid(),
        school: 'The Odin Project',
        degree: 'Web Developer',
        startDate: new Date ('2022-07'),
        endDate: new Date ('2023-02'),
        city: 'virtual',
        description: 'Right now studying full stack javascript course just missing the React module to complete front-end part. Willing to complete the course as i\'m also willing to learn backend and later on machine learning.'},
      ],
    }

  }

  handlePersonalDetailsChange = (e) => {
    this.setState({personalDetails:{
      wantedJobTittle: document.getElementById('wantedJob').value,
      photo:document.getElementById('photo').getAttribute('src'),
      firstName:document.getElementById('firstName').value,
      lastName:document.getElementById('lastName').value,
      email:document.getElementById('email').value,
      country:document.getElementById('country').value,
      city:document.getElementById('city').value,
    }})
  }

  handleProfessionalSummaryChange = (e) => {
    this.setState({professionalSummary:document.getElementById('professionalSummary').value})
  }

  handleEducationChange = (e) => {
    const element = e.target.parentNode
    console.log(element)
  }

  addEducationFunction = () => {
    const newEducation = {key: uniqid(),
      school: '',
      degree: '',
      startDate: new Date (),
      endDate: new Date (),
      city: '',
      description: ''}
    this.setState({education:[...this.state.education,newEducation]})
  }

  deleteEducation = (e) => {
    const key = e.currentTarget.getAttribute("key-value");
    const index = this.state.education.map(element => element.key).indexOf(key);
    const newArray = [...this.state.education];
    newArray.splice(index, 1);
    this.setState({education:newArray})
  }
  render(){
    const {personalDetails, professionalSummary, education} = this.state;
    return (
      <div>
        <Title />
        <PersonalDetails details={personalDetails} onChangeFunction={this.handlePersonalDetailsChange}/>
        <ProfessionalSummary professionalSummary={professionalSummary} onChangeFunction={this.handleProfessionalSummaryChange}/>
        <Education education={education} onChangeFunction={this.handleEducationChange} deleteEducationFunction={this.deleteEducation} addEducation={this.addEducationFunction}/>
      </div>

    );
  }
}

export default App;
