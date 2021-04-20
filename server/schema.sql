CREATE TABLE locations (
	location_id SERIAL PRIMARY KEY,
	street_address varchar(255) NOT NULL,
	postal_code varchar(255) NOT NULL,
	city varchar(255) NOT NULL,
	state varchar(255) NOT NULL
);

CREATE TABLE departments (
	department_id SERIAL PRIMARY KEY,
	department_name varchar(255) NOT NULL,
	location_id INTEGER NOT NULL,
	FOREIGN KEY (location_id) REFERENCES locations (location_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE jobs (
	job_id SERIAL PRIMARY KEY,
	job_title varchar(255) NOT NULL,
	min_salary float NOT NULL,
	max_salary float NOT NULL
);

CREATE TABLE employees (
	employee_id SERIAL PRIMARY KEY,
	first_name varchar(255) NOT NULL,
	last_name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	phone_number varchar(255) NOT NULL,
	hire_date DATE DEFAULT CURRENT_DATE,
	job_id INTEGER NOT NULL,
	salary float NOT NULL,
	manager_id INTEGER,
	department_id INTEGER,
	FOREIGN KEY (job_id) REFERENCES jobs (job_id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (department_id) REFERENCES departments (department_id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (manager_id) REFERENCES employees (employee_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE dependents (
	dependent_id SERIAL PRIMARY KEY,
	first_name varchar(255) NOT NULL,
	last_name varchar(255) NOT NULL,
	relationship varchar(255) NOT NULL,
	employee_id INTEGER NOT NULL,
	FOREIGN KEY (employee_id) REFERENCES employees (employee_id) ON DELETE CASCADE ON UPDATE CASCADE
);

drop table locations ;
drop table dependents;
drop table jobs ;
drop table employees ;
drop table departments ;