const express = require('express');
const mysql = require('mysql2');
const PORT = 3001;
const port = process.env.PORT || 3001;

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

const inquirer = require('inquirer')

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
        .then(function (data) {
            if (data.menu === 'Exit') {
                console.log('\n Good Bye.')
            } else if (data.menu === 'Add a department') {
                console.log(data)
                addDepartmentHandler()
            } else if (data.menu === 'Add a role') {
                console.log(data)
                addRoleHandler()
            } else if (data.menu === 'Add an employee') {
                console.log(data)
                addEmployeeHandler()
            } else if (data.menu === 'View all departments') {
                db.query('SELECT * FROM departments;', function (err, results) {
                    console.table(results);
                    console.log('\n');
                    init();
                });

            } else if (data.menu === 'View all roles') {
                db.query('SELECT roles.id, roles.job_title, roles.salary, departments.department_name FROM roles LEFT JOIN departments ON roles.department_id = departments.id;', function (err, results) {
                    console.table(results);
                    console.log('\n');
                    init();
                });
            } else if (data.menu === 'View all employees') {
                db.query('SELECT employees.id, employees.first_name, employees.last_name, roles.job_title, roles.salary, departments.department_name, employees.manager_id FROM employees LEFT JOIN roles ON employees.job_title_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id;', function (err, results) {
                    console.table(results);
                    console.log('\n');
                    init();
                });
            } else if (data.menu === 'Update an employee role') {
                db.query('SELECT employees.id, employees.first_name, employees.last_name FROM employees', function (err, results) {
                    updateEmployeeHandler(results)
                    console.log(results);
                    console.log('\n');
                });
            }
        })
};

app.use((req, res) => {
    res.status(404).end();
});

//   app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
//   });  

function addDepartmentHandler() {
    const addDepartmentQuestions = [
        {
            type: 'input',
            name: 'departmentName',
            message: 'Please enter the name of the new department'
        }
    ]

    inquirer
        .prompt(addDepartmentQuestions)
        .then(function (data) {
            let departmentInsertStr = `INSERT INTO departments (department_name)
        VALUES ("${data.departmentName}");`;
            db.query(departmentInsertStr, function (err, results) {
                console.log(`New department, ${data.departmentName}, added.`)
                db.query('SELECT * FROM departments;', function (err, results) {
                    console.table(results);
                    console.log('\n');
                    init();
                });
            });
        });
};

function addRoleHandler() {
    const addRoleQuestions = [
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
        .then(function (data) {
            let roleInsertStr = `INSERT INTO roles (job_title, department_id, salary)
        VALUES ("${data.jobTitle}", ${data.roleDepID}, ${data.roleSalary});`;
            db.query(roleInsertStr, function (err, results) {
                console.log(`New role, ${data.jobTitle}, added.`)
                db.query('SELECT roles.id, roles.job_title, roles.salary, departments.department_name FROM roles LEFT JOIN departments ON roles.department_id = departments.id;', function (err, results) {
                    console.table(results);
                    console.log('\n');
                    init();
                });
            });
        });
};


function addEmployeeHandler() {
    const addEmployeeQuestions = [
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
            name: 'employeeRoleID',
            message: 'Please enter the ID of the job title of the position this new employee is filling'
        },

        {
            type: 'input',
            name: 'employeeManagerID',
            message: 'Please enter the ID of the manager for this department'
        }
    ]

    inquirer
        .prompt(addEmployeeQuestions)
        .then(function (data) {
            let employeeInsertStr = `INSERT INTO employees (first_name, last_name, job_title_id, manager_id)
        VALUES ("${data.firstName}", "${data.lastName}", ${data.employeeRoleID}, ${data.employeeManagerID});`;
            db.query(employeeInsertStr, function (err, results) {
                console.log(`New employee, ${data.firstName} ${data.lastName}, added.`)
                db.query('SELECT employees.id, employees.first_name, employees.last_name, roles.job_title, roles.salary, departments.department_name FROM employees LEFT JOIN roles ON employees.job_title_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id;', function (err, results) {
                    console.table(results);
                    console.log('\n');
                    init();
                });
            });
            console.log(data)
            init()
        })
};

 function updateEmployeeHandler(employeeList) {
    //Declare variable for new array
    //CREATE FOR LOOP
    //

    const testArray = [{name: "Adam", value:1}, {name: "John", value:2}]
    const chooseEmployee =
    {
        type: 'list',
        name: 'chooseEmployee',
        message: 'Which employee would you like to edit?',
        choices: testArray
    }

    inquirer
        .prompt(chooseEmployee)
        .then(function (data) {

            if (data.menu === 'Back to Main Menu') {
                init()
            }
        })
 }


init();