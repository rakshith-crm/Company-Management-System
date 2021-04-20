import React, { useState,useEffect } from 'react';

const Dependent = ()=>{
    const [AllDependents,setDependents] = useState([]);
    const DeleteDependent = async(dependent_id)=>{
      try {
        const query = await fetch(`http://localhost:5000/dependents/${dependent_id}`,{
          method : 'DELETE'
        })
        console.log(query);
        setDependents(AllDependents.filter(dep=>dep.dependent_id!==dependent_id));

      } catch (error) {
        console.log(error);
      }
    };
    const GetDependent= async()=>{
        try {
            const query = await fetch('http://localhost:5000/dependents');
            const data = await query.json();
            setDependents(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(()=>{
        GetDependent();
    },[]);
    return (
<div className='p-5 mt-5'>
<h1>All Dependents</h1>
<hr></hr>
<table class="mt-5 table table-borderless table-dark shadow-lg p-3 mb-5 rounded">
  <thead>
    <tr className='bg-info'>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Relationship</th>
      <th scope="col">Employee ID</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
{AllDependents.map(dep => (
    <tr key={dep.dependent_id}>
        <td>{dep.dependent_id}</td>
        <td>{dep.first_name}</td>
        <td>{dep.last_name}</td>
        <td>{dep.relationship}</td>
        <td>{dep.employee_id}</td>
        <td> <button className='btn btn-danger' onClick={()=>DeleteDependent(dep.dependent_id)}>Delete</button> </td>
    </tr>
))}

  </tbody>
</table>
</div>
    );
};

export default Dependent;