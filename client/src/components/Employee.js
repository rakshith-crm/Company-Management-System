import React, { useState,useEffect } from 'react';

const Employee = ()=>{
    const [AllEmployees,setEmployee] = useState([]);
    const DeleteEmployee = async(employee_id)=>{
      try {
        const query = await fetch(`http://localhost:5000/employees/${employee_id}`,{
          method : 'DELETE'
        })
        console.log(query);
        setEmployee(AllEmployees.filter(emp => emp.employee_id!==employee_id));

      } catch (error) {
        console.log(error);
      }
    };
    const GetEmployees= async()=>{
        try {
            const query = await fetch('http://localhost:5000/employees');
            const data = await query.json();
            setEmployee(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(()=>{
        GetEmployees();
    },[]);
return (
<div className='mt-5' style={{textAlign : 'left'}}>
<h1 style={{textAlign : 'center'}}>All Employees</h1>
<hr></hr>
<table class="mt-5 table table-borderless table-dark shadow-lg p-3 mb-5 rounded">
  <thead>
    <tr className='bg-info'>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Hire Date</th>
      <th scope="col">Job ID</th>
      <th scope="col">Salary</th>
      <th scope="col">Manager ID</th>
      <th scope="col">Department ID</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
{AllEmployees.map(emp =>(
    <tr key={emp.employee_id}>
        <td>{emp.employee_id}</td>
        <td>{emp.first_name}</td>
        <td>{emp.last_name}</td>
        <td>{emp.email}</td>
        <td>{emp.phone_number}</td>
        <td>{emp.hire_date.substring(0,10)}</td>
        <td>{emp.job_id}</td>
        <td>{emp.salary}</td>
        <td>{emp.manager_id}</td>
        <td>{emp.department_id}</td>
        <td> <button className='btn btn-danger' onClick={()=>DeleteEmployee(emp.employee_id)}>Delete</button> </td>
    </tr>
))}
  </tbody>
</table>
</div>
);
};

export default Employee;