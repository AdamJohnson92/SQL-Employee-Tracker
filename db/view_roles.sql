SELECT roles.id, roles.job_title, roles.salary, departments.department_name
FROM roles
LEFT JOIN departments ON roles.department_id = departments.id;

--must rename column with department name in it--