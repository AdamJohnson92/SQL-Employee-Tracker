DROP DATABASE IF EXISTS management_db;
CREATE DATABASE management_db;

USE management_db;

CREATE TABLE departments (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  id INT NOT NULL PRIMARY KEY,
  job_title VARCHAR(30) NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES departments(id)
  ON DELETE SET NULL,
  salary INT NOT NULL
);

CREATE TABLE employees (
  id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    job_title INT,
    department_id INT,
    salary INT NOT NULL,
    manager VARCHAR(30) NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE SET NULL,
    FOREIGN KEY (job_title)
    REFERENCES roles(id)
    ON DELETE SET NULL
);

