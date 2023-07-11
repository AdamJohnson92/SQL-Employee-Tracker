const express = require('express');
const mysql = require('mysql2');
const PORT = 3001;
const port = process.env.PORT || 3001;
const inquirer = require('inquirer')

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'MakiTheMenace1734!',
    database: 'management_db'
  },
  console.log(`Connected to the management_db database.`)
);

function init() {
    const menu = 
    {
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
    }


    inquirer
    .prompt(menu) 
    .then(function(data) {
            if (data.menu === 'Exit') {
                console.log(data)
                console.log('\n Good Bye.')
            } else if (data.menu === 'Add a department'){
                console.log(data)
                addDepartmentHandler()
            } else if (data.menu === 'Add a role'){
                console.log(data)
                addRoleHandler()
            } else if (data.menu === 'Add an employee'){
                console.log(data)
                addEmployeeHandler()
            } else {
                console.log(data)
                init()
            }
            
    })
};
  


// db.query(`DELETE FROM course_names WHERE id = ?`, 3, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//   });
  
  // Query database
//   db.query('SELECT * FROM course_names', function (err, results) {
//     console.log(results);
//   });
  
  // Default response for any other request (Not Found)
  app.use((req, res) => {
    res.status(404).end();
  });
  
//   app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
//   });  

function addDepartmentHandler(){
    const addDepartmentQuestions = [
        {
            type: 'input',
            name: 'departmentID',
            message: 'Please enter a new 3-digit ID number for the new department'
        },

        {
            type: 'input',
            name: 'departmentName',
            message: 'Please enter the name of the new department'
        }
    ]

    inquirer
    .prompt(addDepartmentQuestions) 
    .then(function(data) {
        console.log(data)
        init()
    })
};

function addRoleHandler(){
    const addRoleQuestions = [
        {
            type: 'input',
            name: 'roleID',
            message: 'Please enter a new 3-digit ID number for the new role'
        },

        {
            type: 'input',
            name: 'jobTitle',
            message: 'Please enter the new job title'
        },

        {
            type: 'input', 
            name: 'roleDepID',
            message: 'Please enter the ID of the department to which this new role will belong'
        },

        {
            type: 'input',
            name: 'roleSalary',
            message: 'Please enter the salary for this new position. Please only use whole numbers, and do NOT include dollar signs or commas.'
        }

    ]

    inquirer
    .prompt(addRoleQuestions) 
    .then(function(data) {
        console.log(data)
        init()
    })
};


function addEmployeeHandler() {
    const addEmployeeQuestions = [
        {
            type: 'input',
            name: 'employeeID',
            message: 'Please enter a new 3-digit ID number for the new employee'
        },

        {
            type: 'input',
            name: 'firstName',
            message: "Please enter the new employee's first name"
        },

        {
            type: 'input',
            name: 'lastName',
            message: "Please enter the new employee's last name"
        },

        {
            type: 'input', 
            name: 'employeeDepID',
            message: 'Please enter the ID of the department to which this new employee will belong'
        },

        {
            type: 'input', 
            name: 'employeeRoleID',
            message: 'Please enter the ID of the job title of the position this new employee is filling'
        },

        {
            type: 'input',
            name: 'employeeSalary',
            message: "Please enter the salary for this new employee's position. Please only use whole numbers, and do NOT include dollar signs or commas."
        }
    ]

    inquirer
    .prompt(addEmployeeQuestions) 
    .then(function(data) {
        console.log(data)
        init()
    })
};

init();