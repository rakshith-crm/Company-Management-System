import React, { useState } from 'react';

const FormJob = ()=>{
    const [job_title,setTitle] = useState('');
    const [min_salary,setMinS] = useState('');
    const [max_salary,setMaxS] = useState('');

    const PostJob = async()=>{
        try {
            const body = {job_title,min_salary,max_salary};
            const query = fetch('http://localhost:5000/jobs',{
                method : 'POST',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify(body)
            });
            console.log(query);
        } catch (error) {
            console.log(error);
        }
    };

return(
<form className='container border p-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded' style={{textAlign : 'left'}} onSubmit={PostJob}>
<h1>Add Job</h1>
<hr></hr>
<div className="form-group">
<label >Job Title</label>
<input type="text" className="form-control" onChange={e=>setTitle(e.target.value)} required/>
<label>Minimum Salary</label>
<input type="text" className="form-control" aria-describedby="emailHelp" onChange={e=>setMinS(e.target.value)} required/>
<label>Maximum Salary</label>
<input type="text" className="form-control" aria-describedby="emailHelp" onChange={e=>setMaxS(e.target.value)} required/>


</div>

<button type="submit" className="btn btn-primary">Add</button>
</form>
);
};

export default FormJob;