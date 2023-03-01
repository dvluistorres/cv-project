import React, { Component } from 'react';
import './App.css';
import Title from './modules/Title'
import PersonalDetails from './modules/PersonalDetails';
import ProfessionalSummary from './modules/ProfessionalSummary';
import Education from './modules/Education';
import WorkExperience from './modules/WorkExperience';
import uniqid from 'uniqid';
import { formatISO } from 'date-fns';


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
        startDate: formatISO(new Date ('2022-07-01'), { representation: 'date' }),
        endDate: formatISO(new Date ('2023-02-28'), { representation: 'date' }),
        city: 'Virtual',
        description: 'Right now studying full stack javascript course just missing the React module to complete front-end part. Willing to complete the course as i\'m also willing to learn backend and later on machine learning.'},
        {key: uniqid(),
          school: 'Universidad Nacional de Colombia',
          degree: 'Civil engineer Specialist in structures',
          startDate: formatISO(new Date ('2011-02-02'), { representation: 'date' }),
          endDate: formatISO(new Date ('2017-06-12'), { representation: 'date' }),
          city: 'Medellin',
          description:'Career and specialization in one of the most acclaimed universities in Colombia.'}
      ],
      workExperience:[
        {
          key:uniqid(),
          jobTitle:'Technical Supervisor',
          employer:'Construcciones e inversiones SAS',
          startDate: formatISO(new Date ('2020-06-31'), { representation: 'date' }),
          endDate: formatISO(new Date ('2022-08-28'), { representation: 'date' }),
          city:'Medellin',
          description:'Supervise the construction of a 23 stories building.\r\n Work with a team with several teams to build with quality and within budget.\r\nAutomate most of the formats that we used there so we could be less time in the computer and more time in the construction site.'
        },{
          key:uniqid(),
          jobTitle:'Head in a road construction team',
          employer:'TJ ingenieros SAS',
          startDate: formatISO(new Date ('2017-09-01'), { representation: 'date' }),
          endDate: formatISO(new Date ('2022-01-30'), { representation: 'date' }),
          city:'Monteria',
          description:'Led a team of 20 construction workers to build a concrete road in Arboletes.\r\nWorked closely with the local mayor\'s office to ensure the project met all regulations and requirements.\r\nManaged the project budget, timelines, and resources to ensure successful completion within deadlines.\r\nCoordinated with engineers, architects, and other stakeholders to ensure project goals were met.\r\nUtilized strong leadership and communication skills to effectively manage the team and collaborate with stakeholders.'
        }
      ]
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
    const element = e.target;
    const parentElement = element.parentNode.parentNode;
    const currentKey = parentElement.querySelector('button').getAttribute('key-value');
    const index = this.state.education.map(element => element.key).indexOf(currentKey);
    const newEducation = [...this.state.education];

    // Get the values of each input element

    const school = parentElement.querySelector('.school').value;
    const degree = parentElement.querySelector('.degree').value;
    const startDate = formatISO(new Date(parentElement.querySelector('.startDate').value), { representation: 'date' });
    console.log(parentElement.querySelector('.startDate').value)
    console.log(startDate)
    const endDate = formatISO(new Date(parentElement.querySelector('.endDate').value), { representation: 'date' });
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

    this.setState({education:[...newEducation]})
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

  handleWorkChange = (e) => {
    const element = e.target;
    const parentElement = element.parentNode.parentNode;
    const currentKey = parentElement.querySelector('button').getAttribute('key-value');
    const index = this.state.workExperience.map(element => element.key).indexOf(currentKey);
    const newWorkExperience = [...this.state.workExperience];

    // Get the values of each input element

    const jobTitle = parentElement.querySelector('.jobTitle').value;
    const employer = parentElement.querySelector('.employer').value;
    const startDate = formatISO(new Date(parentElement.querySelector('.startDate').value), { representation: 'date' });
    const endDate = formatISO(new Date(parentElement.querySelector('.endDate').value), { representation: 'date' });
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

    this.setState({workExperience:[...newWorkExperience]})
  }

  addWorkFunction = () => {
    const newWork = {key: uniqid(),
      jobTitle: '',
      employer: '',
      startDate: new Date (),
      endDate: new Date (),
      city: '',
      description: ''}
    this.setState({workExperience:[...this.state.workExperience,newWork]})
  }

  deleteWork = (e) => {
    const key = e.currentTarget.getAttribute("key-value");
    const index = this.state.workExperience.map(element => element.key).indexOf(key);
    const newArray = [...this.state.workExperience];
    newArray.splice(index, 1);
    this.setState({workExperience:newArray})
  }

  render(){
    const {personalDetails, professionalSummary, education, workExperience} = this.state;
    return (
      <div>
        <Title />
        <PersonalDetails details={personalDetails} onChangeFunction={this.handlePersonalDetailsChange}/>
        <ProfessionalSummary professionalSummary={professionalSummary} onChangeFunction={this.handleProfessionalSummaryChange}/>
        <Education education={education} onChangeFunction={this.handleEducationChange} deleteEducationFunction={this.deleteEducation} addEducation={this.addEducationFunction}/>
        <WorkExperience workExperience={workExperience} onChangeFunction={this.handleWorkChange} deleteWorkFunction={this.deleteWork} addWork={this.addWorkFunction}/>
      </div>

    );
  }
}

export default App;
