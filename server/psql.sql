--PROCEDURES
create or replace procedure insert_into_jobs(jt in varchar(255),mins in varchar(255),maxs in varchar(255))
LANGUAGE SQL AS
$$
	insert into jobs(job_title,min_salary,max_salary)
	values 
	(jt,CAST(mins AS FLOAT),CAST(maxs AS FLOAT));
$$;

create or replace procedure insert_into_locations(sa in varchar(255),pc in varchar(255),cty in varchar(255),sta in varchar(255))
LANGUAGE SQL AS
$$
	insert into locations(street_address,postal_code,city,state) values
	(sa,pc,cty,sta);
$$;

create or replace procedure insert_into_departments(dn in varchar(255),loc_id in varchar(255))
LANGUAGE SQL AS
$$
	insert into departments(department_name,location_id) values
	(dn,CAST(LOC_ID AS INTEGER));
$$;

create or replace procedure insert_into_employees(fn in varchar(255),ln in varchar(255),em in varchar(255),ph in varchar(255),
												  jid in varchar(255), sal in varchar(255), mid in varchar(255), did in varchar(255))
LANGUAGE SQL AS
$$
	insert into employees(first_name,last_name,email,phone_number,job_id,salary,manager_id,department_id)
	values
	(fn,ln,em,ph,CAST(jid as INTEGER),CAST(sal as FLOAT),CAST(mid as INTEGER),CAST(did as INTEGER));
$$;

create or replace procedure insert_into_dependents(fn in varchar(255),ln in varchar(255),rln in varchar(255),eid in varchar(255))
LANGUAGE SQL AS
$$
	insert into dependents(first_name,last_name,relationship,employee_id) values
	(fn,ln,rln,CAST(eid as INTEGER));
$$;



CALL insert_into_locations('Schwanthalerstr. 7031','80925','Munich','Bavaria');
CALL insert_into_jobs('Thyaga','4200.00','9000.00');
CALL insert_into_employees('William','Gietz','william.gietz@sqltutorial.org','515.123.8181','1','8300.00','205','11');
CALL insert_into_departments('Dep1','1');
CALL insert_into_dependents('Sandra','Taylor','Child','176');









--INSERTS
----------------------------------------------------------------

INSERT INTO locations(location_id,street_address,postal_code,city,state) VALUES (1400,'2014 Jabberwocky Rd','26192','Southlake','Texas');
INSERT INTO locations(location_id,street_address,postal_code,city,state) VALUES (1500,'2011 Interiors Blvd','99236','South San Francisco','California');
INSERT INTO locations(location_id,street_address,postal_code,city,state) VALUES (1700,'2004 Charade Rd','98199','Seattle','Washington');
INSERT INTO locations(location_id,street_address,postal_code,city,state) VALUES (1800,'147 Spadina Ave','M5V 2L7','Toronto','Ontario');
INSERT INTO locations(location_id,street_address,postal_code,city,state) VALUES (2400,'8204 Arthur St','ABC','London','DEF');
INSERT INTO locations(location_id,street_address,postal_code,city,state) VALUES (2500,'Magdalen Centre, The Oxford Science Park','OX9 9ZB','Oxford','Oxford');
INSERT INTO locations(location_id,street_address,postal_code,city,state) VALUES (2700,'Schwanthalerstr. 7031','80925','Munich','Bavaria');

INSERT INTO jobs(job_title,min_salary,max_salary) VALUES ('Public Accountant',4200.00,9000.00);
INSERT INTO jobs(job_title,min_salary,max_salary) VALUES ('Accounting Manager',8200.00,16000.00);
INSERT INTO jobs(job_title,min_salary,max_salary) VALUES ('Administration Assistant',3000.00,6000.00);
INSERT INTO jobs(job_title,min_salary,max_salary) VALUES ('President',20000.00,40000.00);
INSERT INTO jobs(job_title,min_salary,max_salary) VALUES ('Administration Vice President',15000.00,30000.00);
INSERT INTO jobs(job_title,min_salary,max_salary) VALUES ('Accountant',4200.00,9000.00);
INSERT INTO jobs(job_title,min_salary,max_salary) VALUES ('Finance Manager',8200.00,16000.00);
INSERT INTO jobs(job_title,min_salary,max_salary) VALUES ('Human Resources Representative',4000.00,9000.00);
INSERT INTO jobs(job_title,min_salary,max_salary) VALUES ('Programmer',4000.00,10000.00);
INSERT INTO jobs(job_title,min_salary,max_salary) VALUES ('Marketing Manager',9000.00,15000.00);
INSERT INTO jobs(job_title,min_salary,max_salary) VALUES ('Marketing Representative',4000.00,9000.00);
INSERT INTO jobs(job_title,min_salary,max_salary) VALUES ('Public Relations Representative',4500.00,10500.00);
INSERT INTO jobs(job_title,min_salary,max_salary) VALUES ('Purchasing Clerk',2500.00,5500.00);
INSERT INTO jobs(job_title,min_salary,max_salary) VALUES ('Purchasing Manager',8000.00,15000.00);
INSERT INTO jobs(job_title,min_salary,max_salary) VALUES ('Sales Manager',10000.00,20000.00);
INSERT INTO jobs(job_title,min_salary,max_salary) VALUES ('Sales Representative',6000.00,12000.00);
INSERT INTO jobs(job_title,min_salary,max_salary) VALUES ('Shipping Clerk',2500.00,5500.00);
INSERT INTO jobs(job_title,min_salary,max_salary) VALUES ('Stock Clerk',2000.00,5000.00);
INSERT INTO jobs(job_title,min_salary,max_salary) VALUES ('Stock Manager',5500.00,8500.00);

INSERT INTO departments(department_name,location_id) VALUES ('Administration',1700);
INSERT INTO departments(department_name,location_id) VALUES ('Marketing',1800);
INSERT INTO departments(department_name,location_id) VALUES ('Purchasing',1700);
INSERT INTO departments(department_name,location_id) VALUES ('Human Resources',2400);
INSERT INTO departments(department_name,location_id) VALUES ('Shipping',1500);
INSERT INTO departments(department_name,location_id) VALUES ('IT',1400);
INSERT INTO departments(department_name,location_id) VALUES ('Public Relations',2700);
INSERT INTO departments(department_name,location_id) VALUES ('Sales',2500);
INSERT INTO departments(department_name,location_id) VALUES ('Executive',1700);
INSERT INTO departments(department_name,location_id) VALUES ('Finance',1700);
INSERT INTO departments(department_name,location_id) VALUES ('Accounting',1700);


INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (100,'Steven','King','steven.king@sqltutorial.org','515.123.4567','1987-06-17',4,24000.00,100,9);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (101,'Neena','Kochhar','neena.kochhar@sqltutorial.org','515.123.4568','1989-09-21',5,17000.00,100,9);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (102,'Lex','De Haan','lex.de haan@sqltutorial.org','515.123.4569','1993-01-13',5,17000.00,100,9);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (103,'Alexander','Hunold','alexander.hunold@sqltutorial.org','590.423.4567','1990-01-03',9,9000.00,102,6);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (104,'Bruce','Ernst','bruce.ernst@sqltutorial.org','590.423.4568','1991-05-21',9,6000.00,103,6);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (105,'David','Austin','david.austin@sqltutorial.org','590.423.4569','1997-06-25',9,4800.00,103,6);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (106,'Valli','Pataballa','valli.pataballa@sqltutorial.org','590.423.4560','1998-02-05',9,4800.00,103,6);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (107,'Diana','Lorentz','diana.lorentz@sqltutorial.org','590.423.5567','1999-02-07',9,4200.00,103,6);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (108,'Nancy','Greenberg','nancy.greenberg@sqltutorial.org','515.124.4569','1994-08-17',7,12000.00,101,10);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (109,'Daniel','Faviet','daniel.faviet@sqltutorial.org','515.124.4169','1994-08-16',6,9000.00,108,10);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (110,'John','Chen','john.chen@sqltutorial.org','515.124.4269','1997-09-28',6,8200.00,108,10);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (111,'Ismael','Sciarra','ismael.sciarra@sqltutorial.org','515.124.4369','1997-09-30',6,7700.00,108,10);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (112,'Jose Manuel','Urman','jose manuel.urman@sqltutorial.org','515.124.4469','1998-03-07',6,7800.00,108,10);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (113,'Luis','Popp','luis.popp@sqltutorial.org','515.124.4567','1999-12-07',6,6900.00,108,10);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (114,'Den','Raphaely','den.raphaely@sqltutorial.org','515.127.4561','1994-12-07',14,11000.00,100,3);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (115,'Alexander','Khoo','alexander.khoo@sqltutorial.org','515.127.4562','1995-05-18',13,3100.00,114,3);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (116,'Shelli','Baida','shelli.baida@sqltutorial.org','515.127.4563','1997-12-24',13,2900.00,114,3);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (117,'Sigal','Tobias','sigal.tobias@sqltutorial.org','515.127.4564','1997-07-24',13,2800.00,114,3);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (118,'Guy','Himuro','guy.himuro@sqltutorial.org','515.127.4565','1998-11-15',13,2600.00,114,3);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (119,'Karen','Colmenares','karen.colmenares@sqltutorial.org','515.127.4566','1999-08-10',13,2500.00,114,3);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (120,'Matthew','Weiss','matthew.weiss@sqltutorial.org','650.123.1234','1996-07-18',19,8000.00,100,5);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (121,'Adam','Fripp','adam.fripp@sqltutorial.org','650.123.2234','1997-04-10',19,8200.00,100,5);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (122,'Payam','Kaufling','payam.kaufling@sqltutorial.org','650.123.3234','1995-05-01',19,7900.00,100,5);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (123,'Shanta','Vollman','shanta.vollman@sqltutorial.org','650.123.4234','1997-10-10',19,6500.00,100,5);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (126,'Irene','Mikkilineni','irene.mikkilineni@sqltutorial.org','650.124.1224','1998-09-28',18,2700.00,120,5);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (145,'John','Russell','john.russell@sqltutorial.org','NULL','1996-10-01',15,14000.00,100,8);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (146,'Karen','Partners','karen.partners@sqltutorial.org','NULL','1997-01-05',15,13500.00,100,8);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (176,'Jonathon','Taylor','jonathon.taylor@sqltutorial.org','NULL','1998-03-24',16,8600.00,100,8);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (177,'Jack','Livingston','jack.livingston@sqltutorial.org','NULL','1998-04-23',16,8400.00,100,8);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (178,'Kimberely','Grant','kimberely.grant@sqltutorial.org','NULL','1999-05-24',16,7000.00,100,8);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (179,'Charles','Johnson','charles.johnson@sqltutorial.org','NULL','2000-01-04',16,6200.00,100,8);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (192,'Sarah','Bell','sarah.bell@sqltutorial.org','650.501.1876','1996-02-04',17,4000.00,123,5);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (193,'Britney','Everett','britney.everett@sqltutorial.org','650.501.2876','1997-03-03',17,3900.00,123,5);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (200,'Jennifer','Whalen','jennifer.whalen@sqltutorial.org','515.123.4444','1987-09-17',3,4400.00,101,1);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (201,'Michael','Hartstein','michael.hartstein@sqltutorial.org','515.123.5555','1996-02-17',10,13000.00,100,2);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (202,'Pat','Fay','pat.fay@sqltutorial.org','603.123.6666','1997-08-17',11,6000.00,201,2);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (203,'Susan','Mavris','susan.mavris@sqltutorial.org','515.123.7777','1994-06-07',8,6500.00,101,4);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (204,'Hermann','Baer','hermann.baer@sqltutorial.org','515.123.8888','1994-06-07',12,10000.00,101,7);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (205,'Shelley','Higgins','shelley.higgins@sqltutorial.org','515.123.8080','1994-06-07',2,12000.00,101,11);
INSERT INTO employees(employee_id,first_name,last_name,email,phone_number,hire_date,job_id,salary,manager_id,department_id) VALUES (206,'William','Gietz','william.gietz@sqltutorial.org','515.123.8181','1994-06-07',1,8300.00,205,11);


INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Penelope','Gietz','Child',206);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Nick','Higgins','Child',205);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Ed','Whalen','Child',200);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Jennifer','King','Child',100);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Johnny','Kochhar','Child',101);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Bette','De Haan','Child',102);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Grace','Faviet','Child',109);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Matthew','Chen','Child',110);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Joe','Sciarra','Child',111);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Christian','Urman','Child',112);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Zero','Popp','Child',113);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Karl','Greenberg','Child',108);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Uma','Mavris','Child',203);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Vivien','Hunold','Child',103);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Cuba','Ernst','Child',104);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Fred','Austin','Child',105);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Helen','Pataballa','Child',106);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Dan','Lorentz','Child',107);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Bob','Hartstein','Child',201);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Lucille','Fay','Child',202);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Kirsten','Baer','Child',204);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Elvis','Khoo','Child',115);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Sandra','Baida','Child',116);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Cameron','Tobias','Child',117);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Kevin','Himuro','Child',118);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Rip','Colmenares','Child',119);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Julia','Raphaely','Child',114);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Woody','Russell','Child',145);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Alec','Partners','Child',146);
INSERT INTO dependents(first_name,last_name,relationship,employee_id) VALUES ('Sandra','Taylor','Child',176);









--TRIGGERS
CREATE TRIGGER department_on_delete AFTER INSERT ON Price
FOR EACH ROW EXECUTE PROCEDURE get_department_count();

create function get_department_count(len_from integer, len_to integer)
returns int
language plpgsql
as
$$
declare
   department_count integer;
begin
   select count(*) 
   into department_count
   from departments
   where length between len_from and len_to;
   
   return department_count;
end;
$$;
create function get_job_count(len_from integer, len_to integer)
returns int
language plpgsql
as
$$
declare
   job_count integer;
begin
   select count(*) 
   into job_count
   from jobs
   where length between len_from and len_to;
   
   return job_count;
end;
$$;
create function get_employee_count(len_from integer, len_to integer)
returns int
language plpgsql
as
$$
declare
   employee_count integer;
begin
   select count(*) 
   into employee_count
   from employees
   where length between len_from and len_to;
   
   return employee_count;
end;
$$;