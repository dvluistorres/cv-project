import React, { useState } from 'react';

import Title from './modules/Title'
import PersonalDetails from './modules/PersonalDetails';
import ProfessionalSummary from './modules/ProfessionalSummary';
import Education from './modules/Education';
import WorkExperience from './modules/WorkExperience';
import DisplayCV from './modules/DisplayCV';
import luisPicture from './images/luisPicture.png'
import ExportAsCanvas from './modules/ExportAsCanvas';
import './styles/styles.scss'


import uniqid from 'uniqid';
import { parseISO, format } from 'date-fns';

export default function App () {
  const [personalDetails, setPersonalDetails] = useState({
      wantedJobTittle:'Web developer',
      photo:luisPicture,
      firstName:'Luis Arturo',
      lastName:'Torres',
      email:'dvluistorres@gmail.com',
      cellphone: '+573012628026',
      country:'Colombia',
      city:'Medellin'
    })

  const [professionalSummary, setProfessionalSummary] = useState('Experienced civil engineer seeking to transition into a career in web development with 6 months of hands-on training in HTML/CSS, JavaScript, and React. Skilled in project management, team collaboration, and problem-solving, with a passion for coding and building user-focused web applications. Strong attention to detail and client relationship management skills gained from working with diverse stakeholders in civil engineering projects.')

  const [education, setEducation] = useState([
  {
    key: uniqid(),
    school: 'The Odin Project',
    degree: 'Web Developer',
    startDate: '2022-07-01',
    endDate: '2023-02-28',
    city: 'Virtual',
    description: 'Right now studying full stack javascript course just missing the React module to complete front-end part. Willing to complete the course as i\'m also willing to learn backend and later on machine learning.'
  },{
    key: uniqid(),
    school: 'Universidad Nacional de Colombia',
    degree: 'Civil engineer Specialist in structures',
    startDate: '2011-02-02',
    endDate: '2017-06-12',
    city: 'Medellin',
    description:'Career and specialization in one of the most acclaimed universities in Colombia.'
  }
  ])

  const [workExperience, setWorkExperience] = useState([
    {
      key:uniqid(),
      jobTitle:'Technical Supervisor',
      employer:'Construcciones e inversiones SAS',
      startDate: '2020-06-30',
      endDate: '2022-08-28',
      city:'Medellin',
      description:'Supervise the construction of a 23 stories building.\r\n Work with a team with several teams to build with quality and within budget.\r\nAutomate most of the formats that we used there so we could be less time in the computer and more time in the construction site.'
    },{
      key:uniqid(),
      jobTitle:'Head in a road construction team',
      employer:'TJ ingenieros SAS',
      startDate: '2017-09-01',
      endDate: '2022-01-30',
      city:'Monteria',
      description:'Led a team of 20 construction workers to build a concrete road in Arboletes.\r\nWorked closely with the local mayor\'s office to ensure the project met all regulations and requirements.\r\nManaged the project budget, timelines, and resources to ensure successful completion within deadlines.\r\nCoordinated with engineers, architects, and other stakeholders to ensure project goals were met.\r\nUtilized strong leadership and communication skills to effectively manage the team and collaborate with stakeholders.'
    }
  ])

  const handlePersonalDetailsChange = (e) => {
    setPersonalDetails({
      wantedJobTittle: document.getElementById('wantedJob').value,
      photo: (document.getElementById('photo') ? document.getElementById('photo').getAttribute('src') : personalDetails.photo),
      firstName:document.getElementById('firstName').value,
      lastName:document.getElementById('lastName').value,
      email:document.getElementById('email').value,
      country:document.getElementById('country').value,
      city:document.getElementById('city').value,
    })
  }

  const handleProfessionalSummaryChange = (e) => {
    setProfessionalSummary(document.getElementById('professionalSummary').value)
  }

  const handleEducationChange = (e) => {
    const element = e.target;
    const parentElement = element.parentNode.parentNode;
    const currentKey = parentElement.querySelector('button').getAttribute('key-value');
    const index = education.map(element => element.key).indexOf(currentKey);
    const newEducation = [...education];

    // Get the values of each input element

    const school = parentElement.querySelector('.school').value;
    const degree = parentElement.querySelector('.degree').value;
    const startDate = format(parseISO(parentElement.querySelector('.startDate').value), 'yyyy-MM-dd');
    const endDate = format(parseISO(parentElement.querySelector('.endDate').value), 'yyyy-MM-dd');
    const city = parentElement.querySelector('.city').value;
    const description = parentElement.querySelector('.description').value;

    // Create a new object with the values
    newEducation[index] = {
      key: uniqid(),
      school,
      degree,
      startDate,
      endDate,
      city,
      description
    };

    console.log(newEducation);

    setEducation([...newEducation])
  }

  const addEducationFunction = () => {
    const newEducation = {key: uniqid(),
      school: '',
      degree: '',
      startDate: format(new Date(),'yyyy-MM-dd'),
      endDate: format(new Date(),'yyyy-MM-dd'),
      city: '',
      description: ''}
    setEducation([...education, newEducation])
  }

  const deleteEducation = (e) => {
    const key = e.currentTarget.getAttribute("key-value");
    const index = education.map(element => element.key).indexOf(key);
    const newArray = [...education];
    newArray.splice(index, 1);
    setEducation(newArray);
  }

  const handleWorkChange = (e) => {
    const element = e.target;
    const parentElement = element.parentNode.parentNode;
    const currentKey = parentElement.querySelector('button').getAttribute('key-value');
    const index = workExperience.map(element => element.key).indexOf(currentKey);
    const newWorkExperience = [...workExperience];

    // Get the values of each input element

    const jobTitle = parentElement.querySelector('.jobTitle').value;
    const employer = parentElement.querySelector('.employer').value;
    const startDate = format(parseISO(parentElement.querySelector('.startDate').value), 'yyyy-MM-dd');
    const endDate = format(parseISO(parentElement.querySelector('.endDate').value), 'yyyy-MM-dd');
    const city = parentElement.querySelector('.city').value;
    const description = parentElement.querySelector('.description').value;

    // Create a new object with the values
    newWorkExperience[index] = {
      key: uniqid(),
      jobTitle,
      employer,
      startDate,
      endDate,
      city,
      description
    };

    setWorkExperience(...newWorkExperience)
  }

  const addWorkFunction = () => {
    const newWork = {key: uniqid(),
      jobTitle: '',
      employer: '',
      startDate: format(new Date(),'yyyy-MM-dd'),
      endDate: format(new Date(),'yyyy-MM-dd'),
      city: '',
      description: ''}
    setWorkExperience(...workExperience,newWork)
  }

  const deleteWork = (e) => {
    const key = e.currentTarget.getAttribute("key-value");
    const index = workExperience.map(element => element.key).indexOf(key);
    const newArray = [...workExperience];
    newArray.splice(index, 1);
    setWorkExperience(newArray);
  }


  return(
    <div className='container'>
      <div className='insertData'>
        <PersonalDetails details={personalDetails} onChangeFunction={handlePersonalDetailsChange}/>
        <ProfessionalSummary professionalSummary={professionalSummary} onChangeFunction={handleProfessionalSummaryChange}/>
        <Education education={education} onChangeFunction={handleEducationChange} deleteEducationFunction={deleteEducation} addEducation={addEducationFunction}/>
        <WorkExperience workExperience={workExperience} onChangeFunction={handleWorkChange} deleteWorkFunction={deleteWork} addWork={addWorkFunction}/>
        <ExportAsCanvas id="cv" filename="my-cv" />
      </div>
      <div className='displayData'>
          <DisplayCV personalDetails={personalDetails} professionalSummary={professionalSummary} education={education} workExperience={workExperience}/>
      </div>
    </div>
  )
}

