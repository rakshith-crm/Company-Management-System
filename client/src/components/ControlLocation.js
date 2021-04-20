import React from 'react';
import FormLocation from './FormLocation';
import Location from './Location';

const ControlLocation = ()=>{
    return (
<div>
<FormLocation />
<button class="mt-5 ml-3 btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
    View Locations
</button>
<div class="collapse" id="collapseExample2">
  <div class="card card-body">
    <Location />
  </div>
</div>

</div>

    );
};

export default ControlLocation;