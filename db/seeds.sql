INSERT INTO departments (id, name)
VALUES (001, "billing"),
       (002, "legal"),
       (003, "reception");

INSERT INTO roles (id, job_title, department_id, salary)
VALUES (001, "accountant", 001, 90000),
       (002, "payroll", 001, 70000),
       (003, "lawyer", 002, 100000),
       (004, "paralegal", 002,80000),
       (005, "front desk attendant", 003,60000);

INSERT INTO employees (id, first_name, last_name, job_title_id, department_id, salary, manager)
VALUES (001, "John", "Johnson", 001, 001, 90000,    "Hank"),
       (002, "Jack", "Jackson", 002, 001, 70000, "Hank"),
       (003, "Samantha", "Samson",  003, 002, 100000, "Kelly"),
       (004, "Michelle", "Michaelson", 004, 002, 80000, "Kelly"),
       (005, "Robert", "Robertson", 005, 003, 60000, "Claire");