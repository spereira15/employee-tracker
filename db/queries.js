const connection = require('./connection.js');

// Function to get all departments
function getAllDepartments() {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM department';
    connection.query(query, (error, results) => {
      if (error) {
        reject(new Error(`Error retrieving departments: ${error.message}`));
      } else {
        resolve(results);
      }
    });
  });
}

// Function to get all roles
function getAllRoles() {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM role';
    connection.query(query, (error, results) => {
      if (error) {
        reject(new Error(`Error retrieving roles: ${error.message}`));
      } else {
        resolve(results);
      }
    });
  });
}

// Function to get all employees
function getAllEmployees() {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT 
        e.id,
        e.first_name AS 'First Name',
        e.last_name AS 'Last Name',
        r.title AS 'Job Title',
        d.name AS 'Department',
        r.salary AS 'Salary',
        CONCAT(m.first_name, ' ', m.last_name) AS 'Manager'
      FROM 
        employee AS e
      LEFT JOIN
        role AS r ON e.role_id = r.id
      LEFT JOIN
        department AS d ON r.department_id = d.id
      LEFT JOIN
        employee AS m ON e.manager_id = m.id
    `;
    connection.query(query, (error, results) => {
      if (error) {
        reject(new Error(`Error retrieving employees: ${error.message}`));
      } else {
        resolve(results);
      }
    });
  });
}

// Function to add a department
function addDepartment(name) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO department (name) VALUES (?)';
    connection.query(query, [name], (error, results) => {
      if (error) {
        reject(new Error(`Error adding department: ${error.message}`));
      } else {
        resolve(results);
      }
    });
  });
}

// Function to add a role
function addRole(title, salary, departmentId) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
    connection.query(query, [title, salary, departmentId], (error, results) => {
      if (error) {
        reject(new Error(`Error adding role: ${error.message}`));
      } else {
        resolve(results);
      }
    });
  });
}

// Function to add an employee
function addEmployee(firstName, lastName, roleId, managerId) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
    connection.query(query, [firstName, lastName, roleId, managerId], (error, results) => {
      if (error) {
        reject(new Error(`Error adding employee: ${error.message}`));
      } else {
        resolve(results);
      }
    });
  });
}

// Function to update an employee's role
function updateEmployeeRole(employeeId, roleId) {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE employee SET role_id = ? WHERE id = ?';
    connection.query(query, [roleId, employeeId], (error, results) => {
      if (error) {
        reject(new Error(`Error updating employee role: ${error.message}`));
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
