import React from 'react';
import employee from '../images/employee.png';
import department from '../images/department.png';
import jobs from '../images/jobs.png';
import dependent from '../images/dependent.png';
import location from '../images/location.png';
const Home = ()=>{

    return (
<div>

<div className='container mt-5 p-5 border shadow-lg p-3 mb-5' style={{backgroundColor : '#07a0c3'}}>

<h1 className='mb-5' style={{color : '#000000'}}>Portal</h1>

<hr></hr>
<div class="card mb-3 shadow-lg p-3 mb-5 bg-white rounded">
  <div class="card-body">
    <h3 class="card-title float-left">Departments</h3>
    <a href='http://localhost:3000/departments' type='button' className='btn ml-5 btn-lg btn-primary float-right'>Enter</a>
    <img src={department} alt="..."></img>
  </div>
</div>
<hr></hr>
<div class="card mb-3 shadow-lg p-3 mb-5 bg-white rounded">
  <div class="card-body">
    <h3 class="card-title float-left">Employees</h3>
    <a href='http://localhost:3000/employees' type='button' className='btn ml-5 btn-lg btn-primary float-right'>Enter</a>
    <img src={employee} alt="..." className='avatar' height='70px'></img>
  </div>
</div>
<hr></hr>
<div class="card mb-3 shadow-lg p-3 mb-5 bg-white rounded">
  <div class="card-body">
    <h3 class="card-title float-left">Jobs</h3>
    <a href='http://localhost:3000/jobs' type='button' className='btn ml-5 btn-lg btn-primary float-right'>Enter</a>
    <img src={jobs} alt="..." className='ml-5 avatar'></img>
  </div>
</div>
<hr></hr>
<div class="card mb-3 shadow-lg p-3 mb-5 bg-white rounded">
  <div class="card-body">
    <h3 class="card-title float-left">Dependent</h3>
    <a href='http://localhost:3000/dependents' type='button' className='btn ml-5 btn-lg btn-primary float-right'>Enter</a>
    <img src={dependent} alt="..." className='ml-5 avatar'></img>
  </div>
</div>
<hr></hr>
<div class="card mb-3 shadow-lg p-3 mb-5 bg-white rounded">
  <div class="card-body">
    <h3 class="card-title float-left">Location</h3>
    <a href='http://localhost:3000/locations' type='button' className='btn ml-5 btn-lg btn-primary float-right'>Enter</a>
    <img src={location} alt="..." className='ml-5 avatar'></img>
  </div>
</div>
<hr></hr>
</div>
</div>
    );
};

export default Home;