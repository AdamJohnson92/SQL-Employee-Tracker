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

const questions = [ 

    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape from the following list.',
        choices: ['circle', 'triangle', 'square']
    },

]

function init() {inquirer
    .prompt(questions) 
    .then(function(data) {
      console.log(data)
    });}
  


db.query(`DELETE FROM course_names WHERE id = ?`, 3, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
  
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