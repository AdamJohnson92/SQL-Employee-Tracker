-- USE management_db;

-- SELECT employees.id, employees.first_name, employees.last_name, roles.job_title, roles.salary, departments.department_name FROM employees LEFT JOIN roles ON employees.job_title_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id;

SELECT employees.id, employees.first_name, employees.last_name, roles.job_title, roles.salary, departments.department_name, employees.manager_id FROM employees LEFT JOIN roles ON employees.job_title_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id
JOIN employees ON employees.last_name = employees.id;