import React from 'react';
import Dependent from './Dependent';
import Employee from './Employee';
import FormDependent from './FormDependent';


const ControlDependent = ()=>{
    return (
<div>
<FormDependent />
<button class="mt-5 ml-3 btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
    View Dependents
</button>
<button class="mt-5 ml-3 btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
    View Employees
</button>
<div class="collapse" id="collapseExample1">
  <div class="card card-body">
    <Dependent />
  </div>
</div>
<div class="collapse" id="collapseExample2">
  <div class="card card-body">
    <Employee />
  </div>
</div>


</div>
    );
};

export default ControlDependent;