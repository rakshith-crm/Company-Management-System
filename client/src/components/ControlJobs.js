import React from 'react';
import FormJob from './FormJob';
import Job from './Job';


const ControlJob = ()=>{
    return (
<div>
<FormJob />
<button class="mt-5 ml-3 btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
    View Jobs
</button>
<div class="collapse" id="collapseExample2">
  <div class="card card-body">
    <Job />
  </div>
</div>

</div>

    );
};

export default ControlJob;