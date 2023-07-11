DROP DATABASE IF EXISTS management_db;
CREATE DATABASE management_db;

USE management_db;

CREATE TABLE departments (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  job_title VARCHAR(30) NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES departments(id)
  ON DELETE SET NULL,
  salary INT NOT NULL
);

CREATE TABLE employees (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    job_title_id INT,
    manager_id INT,
    FOREIGN KEY (job_title_id)
    REFERENCES roles(id)
    ON DELETE SET NULL
);

