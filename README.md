# Company-Management-System
<p>
The package is a Company Management System which can be used by admins of any company. The package enforces referential constraints that prevents illegal entries in the management system. The package is User-Friendly allowing the company admins to easily manage all necessary details about the company and allows easy access, inserting new data and deleting unwanted data. The Back-End has 5 relations related to each other as shown in the ER diagram given below, the Back-End is used to connect to Postgre SQL using Node. All functionalities are made using plsql queries which includes all the procedures, functions and triggers.
</p>
<p>
The package is made using PERN Stack (P - PostgreSQL, E - Express Js, R - React Js,N - Node Js). The Front-End and Back-End is made using React Js and Node Js (Express Js, Cors and pg) respectively.
</p>

# Requirements
- npm v6.14.12
- node v14.16.1
- React Js
- PostgreSQL

# Installing
- Install <a href="https://www.postgresql.org/">PostgreSQL</a> 
- Clone this repo
```
git clone https://github.com/rakshith-crm/Company-Management-System
```


# Usage

- Setup Postgre Database
  - Create Database 'EMPLOYEE'
  - Create Tables (refer schema.sql)
  - Create procedures (refer plsql.sql)
  - Start PostgreSQL server at port 5432
- Navigate to project folder
- cd Company-Management-System
- Open 2 Terminals
  - Terminal 1
    - cd server
    - node app.js (or) nodemon
  - Terminal 2
    - cd client
    - npm start
- Navigate to http://<span></span>localhost:3000 to view application

