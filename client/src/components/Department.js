import React, {useState,useEffect} from 'react';

const Department = ()=>{
    const [AllDepartments,setDepartments] = useState([]);
    const DeleteDepartment = async(department_id)=>{
      try {
        const query = await fetch(`http://localhost:5000/departments/${department_id}`,{
          method : 'DELETE'
        })
        console.log(query);
        setDepartments(AllDepartments.filter(dep=>dep.department_id!==department_id));

      } catch (error) {
        console.log(error);
      }
    };
    const GetDepartments= async()=>{
        try {
            const query = await fetch('http://localhost:5000/departments');
            const data = await query.json();
            setDepartments(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(()=>{
        GetDepartments();
    },[]);

    return (

<div className='p-5 mt-5'>
<h1>All Departments</h1>
<hr></hr>
<table class="mt-5 table table-borderless table-dark shadow-lg p-3 mb-5 rounded">
  <thead>
    <tr className='bg-info'>
      <th scope="col">#</th>
      <th scope="col">Department Name</th>
      <th scope="col">Location</th>
      <th scope="col"></th>
      
    </tr>
  </thead>
  <tbody>
{AllDepartments.map(dept => (
    <tr key={dept.department_id}>
        <td>{dept.department_id}</td>
        <td>{dept.department_name}</td>
        <td>{dept.location_id}</td>
        <td> <button className='btn btn-danger' onClick={()=>DeleteDepartment(dept.department_id)}>Delete</button> </td>
    </tr>
))}
  </tbody>
</table>
</div>
    );
};

export default Department;