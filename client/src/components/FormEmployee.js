import React, { useState } from 'react';

const FormEmployee = ()=>{
    const [first_name,setFname] = useState('');
    const [last_name,setLname] = useState('');
    const [email,setEmail] = useState('');
    const [phone_number,setPhone] = useState('');
    const [job_id,setJob] = useState('');
    const [salary,setSalary] = useState('');
    const [manager_id,setManager] = useState('');
    const [department_id,setDepartment] = useState('');
    const PostEmployee = async()=>{
        try {
            const body = {first_name,last_name,email,phone_number,job_id,salary,manager_id,department_id};
            const query = fetch('http://localhost:5000/employees',{
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
<form className='container border p-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded' style={{textAlign : 'left'}} onSubmit={PostEmployee}>
<h1>Add Employee</h1>
<hr></hr>
<div className="form-group">
<label >First Name</label>
<input type="text" className="form-control" onChange={e=>setFname(e.target.value)} required/>
<label>Last Name</label>
<input type="text" className="form-control" aria-describedby="emailHelp" onChange={e=>setLname(e.target.value)}  required/>
<label>Email</label>
<input type="text" className="form-control" aria-describedby="emailHelp" onChange={e=>setEmail(e.target.value)}  required/>
<label>Phone Number</label>
<input type="text" className="form-control" aria-describedby="emailHelp" onChange={e=>setPhone(e.target.value)}  required/>
<label>Job ID</label>
<input type="text" className="form-control" aria-describedby="emailHelp" onChange={e=>setJob(e.target.value)}  required/>
<label>Salary</label>
<input type="text" className="form-control" aria-describedby="emailHelp" onChange={e=>setSalary(e.target.value)}  required/>
<label>Manager ID</label>
<input type="text" className="form-control" aria-describedby="emailHelp" onChange={e=>setManager(e.target.value)}  required/>
<label>Department ID</label>
<input type="text" className="form-control" aria-describedby="emailHelp" onChange={e=>setDepartment(e.target.value)}  required/>


</div>

<button type="submit" className="btn btn-primary">Add</button>
</form>
);
};

export default FormEmployee;