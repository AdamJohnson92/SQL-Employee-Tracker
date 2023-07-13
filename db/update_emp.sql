UPDATE employees SET job_title_id = '006', WHERE id = 001;

SELECT employees.id, employees.first_name, employees.last_name, roles.job_title, roles.salary, departments.department_name, employees.manager_id, CONCAT(manager.first_name,' ', manager.last_name) AS manager FROM employees LEFT JOIN roles ON employees.job_title_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id
LEFT JOIN employees manager ON manager.id = employees.manager_id;