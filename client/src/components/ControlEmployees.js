import React from 'react';
import Department from './Department';
import Employee from './Employee';
import FormEmployee from './FormEmployee';
import Job from './Job';


const ControlEmployee = ()=>{
    return (
<div>
<FormEmployee />
<button class="mt-5 ml-3 btn btn-primary ml-3" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
    View Employees
</button>
<button class="mt-5 ml-3 btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
    View Jobs
</button>
<button class="mt-5 ml-3 btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
    View Departments
</button>
<div class="collapse" id="collapseExample1">
  <div class="card card-body">
   <Employee />
  </div>
</div>
<div class="collapse" id="collapseExample2">
  <div class="card card-body">
    <Job />
  </div>
</div>
<div class="collapse" id="collapseExample3">
  <div class="card card-body">
    <Department />
  </div>
</div>

</div>

    );
};

export default ControlEmployee;