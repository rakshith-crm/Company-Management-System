import React, { useState } from 'react';

const FormLocation = ()=>{
    const [street_address,setStreet] = useState('');
    const [postal_code,setPostal] = useState('');
    const [city,setCity] = useState('');
    const [state,setState] = useState('');

    const PostLocation = async()=>{
        try {
            const body = {street_address,postal_code,city,state};
            const query = fetch('http://localhost:5000/locations',{
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
<form className='container border p-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded' style={{textAlign : 'left'}} onSubmit={PostLocation}>
<h1>Add Location</h1>
<hr></hr>
<div className="form-group">
<label >Street Address</label>
<input type="text" className="form-control" onChange={e=>setStreet(e.target.value)} required/>
<label>Postal Code</label>
<input type="text" className="form-control" aria-describedby="emailHelp" onChange={e=>setPostal(e.target.value)} required/>
<label>City</label>
<input type="text" className="form-control" aria-describedby="emailHelp" onChange={e=>setCity(e.target.value)} required/>
<label>State</label>
<input type="text" className="form-control" aria-describedby="emailHelp" onChange={e=>setState(e.target.value)} required/>


</div>

<button type="submit" className="btn btn-primary">Add</button>
</form>
);
};

export default FormLocation;