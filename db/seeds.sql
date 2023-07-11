INSERT INTO departments (department_name)
VALUES ("accounting"),
       ("legal"),
       ("customer service");

INSERT INTO roles (job_title, department_id, salary)
VALUES ("accountant", 001, 90000),
       ("payroll", 001, 70000),
       ("finance team lead", 001, 120000),
       ("lawyer", 002, 100000),
       ("paralegal", 002,80000),
       ("legal team lead", 002, 120000),
       ("front desk attendant", 003,60000),
       ("customer service team lead", 003, 120000);

INSERT INTO employees (first_name, last_name, job_title_id, manager_id)
VALUES ("John", "Johnson", 001, 003),
       ("Jack", "Jackson", 002, 003),
       ("Hank", "Boss", 003, null),
       ("Samantha", "Samson",  004, 006),
       ("Michelle", "Michaelson", 005, 006),
       ("Sarah", "Boss", 006, null),
       ("Robert", "Robertson", 007, 008),
       ("Laura", "Boss", 008, null);