const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const pool =require('./database.js');
const port = 5000;
app.listen(port, ()=>{
    console.log(`Listening at port ${port}...`);
});

app.get('/departments', async(req,res)=>{
    try {
        const query = await pool.query('select * from departments');
        res.json(query.rows);
    } catch (error) {
        console.log(error);
    }
});
app.get('/dependents', async(req,res)=>{
    try {
        const query = await pool.query('select * from dependents');
        res.json(query.rows);
    } catch (error) {
        console.log(error);
    }
});
app.get('/employees', async(req,res)=>{
    try {
        const query = await pool.query('select * from employees');
        res.json(query.rows);
    } catch (error) {
        console.log(error);
    }
});
app.get('/jobs', async(req,res)=>{
    try {
        const query = await pool.query('select * from jobs');
        res.json(query.rows);
    } catch (error) {
        console.log(error);
    }
});
app.get('/locations', async(req,res)=>{
    try {
        const query = await pool.query('select * from locations');
        res.json(query.rows);
    } catch (error) {
        console.log(error);
    }
});

app.post('/employees', async(req,res)=>{
    try {
        const {first_name,last_name,email,phone_number,job_id,salary,manager_id,department_id} =req.body;
        console.log(req.body);
        const query = await pool.query('call insert_into_employees($1,$2,$3,$4,$5,$6,$7,$8)',[first_name,last_name,email,phone_number,job_id,salary,manager_id,department_id]);
        res.send('Inserted record into Employees table...');
    } catch (err) {
        console.error(err.message);
    }
});
app.post('/departments',async(req,res)=>{
    try {
        const {department_name,location_id} = req.body;
        console.log(req.body);
        const query = await pool.query('call insert_into_departments($1,$2)',[department_name,location_id]);
        res.send('Inserted record into departments');
    } catch (error) {
        console.log(error);
    }
});
app.post('/locations', async(req,res)=>{
    try {
        const {street_address,postal_code,city,state} = req.body;
        console.log(req.body);
        const query = await pool.query('call insert_into_locations($1,$2,$3,$4)',[street_address,postal_code,city,state]);
        res.send('Inserted record into locations');
    } catch (error) {
        console.log(error);
    }
});
app.post('/dependents', async(req,res)=>{
    try {
        const {first_name,last_name,relationship,employee_id} = req.body;
        console.log(req.body);
        const query = await pool.query('call insert_into_dependents($1,$2,$3,$4)',[first_name,last_name,relationship,employee_id]);
        res.send('Inserted record into dependents');
    } catch (error) {
        console.log(error);
    }
});
app.post('/jobs', async(req,res)=>{
    try {
        const {job_title,min_salary,max_salary} = req.body;
        console.log(req.body);
        const query = await pool.query('call insert_into_jobs($1,$2,$3)',[job_title,min_salary,max_salary]);
        res.send('Inserted record into jobs');
    } catch (error) {
        console.log(error);
    }
});

app.get('/employees/:employee_id', async(req,res)=>{
    try {
        const {employee_id}= req.params;
        const query = await pool.query('select * from employees where employee_id=$1',[employee_id]);
        console.log(query.rows);
        res.json(query.rows);
    } catch (error) {
        console.log(error);
    }
});
app.get('/locations/:location_id', async(req,res)=>{
    try {
        const {location_id}= req.params;
        const query = await pool.query('select * from locations where location_id=$1',[location_id]);
        console.log(query.rows);
        res.json(query.rows);
    } catch (error) {
        console.log(error);
    }
});
app.get('/jobs/:job_id', async(req,res)=>{
    try {
        const {job_id}= req.params;
        const query = await pool.query('select * from jobs where job_id=$1',[job_id]);
        console.log(query.rows);
        res.json(query.rows);
    } catch (error) {
        console.log(error);
    }
});
app.get('/dependents/:dependent_id', async(req,res)=>{
    try {
        const {dependent_id}= req.params;
        const query = await pool.query('select * from dependents where dependent_id=$1',[dependent_id]);
        console.log(query.rows);
        res.json(query.rows);
    } catch (error) {
        console.log(error);
    }
});
app.get('/departments/:department_id', async(req,res)=>{
    try {
        const {department_id}= req.params;
        const query = await pool.query('select * from departments where department_id=$1',[department_id]);
        console.log(query.rows);
        res.json(query.rows);
    } catch (error) {
        console.log(error);
    }
});

app.delete('/employees/:employee_id',async(req,res)=>{
    try {
        const {employee_id} = req.params;
        const query = await pool.query('delete from employees where employee_id=CAST($1 as INTEGER)',[employee_id]);
        console.log(query.rowCount);
        res.send('Deleted if present');
    } catch (error) {
        console.log(error);
    }
});
app.delete('/locations/:location_id',async(req,res)=>{
    try {
        const {location_id} = req.params;
        const query = await pool.query('delete from locations where location_id=CAST($1 as INTEGER)',[location_id]);
        console.log(query.rowCount);
        res.send('Deleted if present');
    } catch (error) {
        console.log(error);
    }
});
app.delete('/jobs/:job_id',async(req,res)=>{
    try {
        const {job_id} = req.params;
        const query = await pool.query('delete from jobs where job_id=CAST($1 as INTEGER)',[job_id]);
        console.log(query.rowCount);
        res.send('Deleted if present');
    } catch (error) {
        console.log(error);
    }
});
app.delete('/dependents/:dependent_id',async(req,res)=>{
    try {
        const {dependent_id} = req.params;
        const query = await pool.query('delete from dependents where dependent_id=CAST($1 as INTEGER)',[dependent_id]);
        console.log(query.rowCount);
        res.send('Deleted if present');
    } catch (error) {
        console.log(error);
    }
});
app.delete('/departments/:department_id',async(req,res)=>{
    try {
        const {department_id} = req.params;
        const query = await pool.query('delete from departments where department_id=CAST($1 as INTEGER)',[department_id]);
        console.log(query.rowCount);
        res.send('Deleted if present');
    } catch (error) {
        console.log(error);
    }
});





