import React,{useState,useEffect} from 'react';

const Job = ()=>{
    const [AllJobs,setJobs] = useState([]);
    const DeleteJob = async(job_id)=>{
      try {
        const query = await fetch(`http://localhost:5000/jobs/${job_id}`,{
          method : 'DELETE'
        })
        console.log(query);
        setJobs(AllJobs.filter(job => job.job_id!==job_id));

      } catch (error) {
        console.log(error);
      }
    };
    const GetJobs= async()=>{
        try {
            const query = await fetch('http://localhost:5000/jobs');
            const data = await query.json();
            setJobs(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(()=>{
        GetJobs();
    },[]);
return (
<div className='p-5 mt-5'>
<h1>All Jobs</h1>
<hr></hr>
<table class="mt-5 table table-borderless table-dark shadow-lg p-3 mb-5 rounded">
  <thead>
    <tr className='bg-info'>
      <th scope="col">#</th>
      <th scope="col">Job Title</th>
      <th scope="col">Minimum Salary</th>
      <th scope="col">Maximum Salary</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
{AllJobs.map(job => (
    <tr key={job.job_id}>
        <td>{job.job_id}</td>
        <td>{job.job_title}</td>
        <td>{job.min_salary}</td>
        <td>{job.max_salary}</td>
        <td> <button className='btn btn-danger' onClick={()=>DeleteJob(job.job_id)}>Delete</button> </td>
    </tr>
))}
  </tbody>
</table>
</div>
);
};

export default Job;