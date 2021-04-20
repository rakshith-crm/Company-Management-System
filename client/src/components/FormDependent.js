import React, { useState } from 'react';

const FormDependent = ()=>{
    const [first_name,setFname] = useState('');
    const [last_name,setLname] = useState('');
    const [relationship,setRelation] = useState('');
    const [employee_id,setEmployee] = useState('');

    const PostDependent = async()=>{
        try {
            const body = {first_name,last_name,relationship,employee_id};
            const query = fetch('http://localhost:5000/dependents',{
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
<form className='container border p-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded' style={{textAlign : 'left'}} onSubmit={PostDependent}>
<h1>Add Dependent</h1>
<hr></hr>
<div className="form-group">
<label >First Name</label>
<input type="text" className="form-control" onChange={e=>setFname(e.target.value)} required/>
<label >Last Name</label>
<input type="text" className="form-control" onChange={e=>setLname(e.target.value)} required/>
<label >Relationship</label>
<input type="text" className="form-control" onChange={e=>setRelation(e.target.value)} required/>
<label>Employee ID</label>
<input type="text" className="form-control" onChange={e=>setEmployee(e.target.value)} required/>


</div>

<button type="submit" className="btn btn-primary">Add</button>
</form>
);
};

export default FormDependent;