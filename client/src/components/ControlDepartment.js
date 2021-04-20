import React from 'react';
import Department from './Department';
import FormDepartment from './FormDepartment';
import Location from './Location';

const ControlDepartment = ()=>{
    return (
<div>
<FormDepartment />
<button class="mt-5 btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    View Departments
</button>
<button class="mt-5 btn btn-primary ml-3" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
    View Locations
</button>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    <Department />
  </div>
</div>
<div class="collapse" id="collapseExample2">
  <div class="card card-body">
    <Location />
  </div>
</div>

</div>
    );
};

export default ControlDepartment;