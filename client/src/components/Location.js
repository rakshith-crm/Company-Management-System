import React, { useState,useEffect } from 'react';

const Location = ()=>{
    const [AllLocations,setLocation] = useState([]);
    const DeleteLocation = async(location_id)=>{
      try {
        const query = await fetch(`http://localhost:5000/locations/${location_id}`,{
          method : 'DELETE'
        })
        console.log(query);
        setLocation(AllLocations.filter(loc => loc.location_id!==location_id));

      } catch (error) {
        console.log(error);
      }
    };
    const GetLocations = async()=>{
        try {
            const query = await fetch('http://localhost:5000/locations');
            const data = await query.json();
            setLocation(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(()=>{
        GetLocations();
    },[]);

    return (
<div className='p-5 mt-5'>
<h1>All Locations</h1>
<hr></hr>
<table class="mt-5 table table-borderless table-dark shadow-lg p-3 mb-5 rounded">
  <thead>
    <tr className='bg-info'>
      <th scope="col">#</th>
      <th scope="col">Street Address</th>
      <th scope="col">Postal Code</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
{AllLocations.map(loc =>(
    <tr key={loc.location_id}>
        <td>{loc.location_id}</td>
        <td>{loc.street_address}</td>
        <td>{loc.postal_code}</td>
        <td>{loc.city}</td>
        <td>{loc.state}</td>
        <td> <button className='btn btn-danger' onClick={()=>DeleteLocation(loc.location_id)}>Delete</button> </td>

    </tr>

))}
  </tbody>
</table>
</div>
       
    );
};

export default Location;