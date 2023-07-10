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
    database: 'courses_db'
  },
  console.log(`Connected to the courses_db database.`)
);

const menu = 
    {
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
    }


function init() {inquirer
    .prompt(menu) 
    .then(function(data) {
            if (menu.choices === 'Exit') {
                console.log(data)
                console.log(data)
                console.log('\n Good Bye.')
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
  
init();