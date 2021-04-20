import React, { useState } from 'react';

const FormDepartment = ()=>{
    const [department_name,setName] = useState('');
    const [location_id,setLocation] = useState('');

    const PostDepartment = async()=>{
        try {
            const body = {department_name,location_id};
            const query = fetch('http://localhost:5000/departments',{
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
<form className='container border p-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded' style={{textAlign : 'left'}} onSubmit={PostDepartment}>
<h1>Add Department</h1>
<hr></hr>
<div className="form-group">
<label >Name</label>
<input type="text" className="form-control" onChange={e=>setName(e.target.value)} required/>
<label>Location ID</label>
<input type="text" className="form-control" aria-describedby="emailHelp" onChange={e=>setLocation(e.target.value)} required/>


</div>

<button type="submit" className="btn btn-primary">Add</button>
</form>
);
};

export default FormDepartment;