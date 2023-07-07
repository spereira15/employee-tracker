const inquirer = require('inquirer');
const {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require('./queries');

function startApp() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
        ],
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        case 'View all departments':
          viewAllDepartments();
          break;
        case 'View all roles':
          viewAllRoles();
          break;
        case 'View all employees':
          viewAllEmployees();
          break;
        case 'Add a department':
          promptAddDepartment();
          break;
        case 'Add a role':
          promptAddRole();
          break;
        case 'Add an employee':
          promptAddEmployee();
          break;
        case 'Update an employee role':
          promptUpdateEmployeeRole();
          break;
        default:
          console.log('Invalid choice');
          startApp();
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function viewAllDepartments() {
  getAllDepartments()
    .then((departments) => {
      console.table(departments);
      startApp();
    })
    .catch((error) => {
      console.error(error);
      startApp();
    });
}

function viewAllRoles() {
  getAllRoles()
    .then((roles) => {
      console.table(roles);
      startApp();
    })
    .catch((error) => {
      console.error(error);
      startApp();
    });
}

function viewAllEmployees() {
  getAllEmployees()
    .then((employees) => {
      console.table(employees);
      startApp();
    })
    .catch((error) => {
      console.error(error);
      startApp();
    });
}

function promptAddDepartment() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the department:',
      },
    ])
    .then((answers) => {
      addDepartment(answers.name)
        .then(() => {
          console.log('Department added successfully!');
          startApp();
        })
        .catch((error) => {
          console.error(error);
          startApp();
        });
    })
    .catch((error) => {
      console.error(error);
      startApp();
    });
}

function promptAddRole() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the role:',
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Enter the salary for the role:',
      },
      {
        type: 'input',
        name: 'departmentId',
        message: 'Enter the department ID for the role:',
      },
    ])
    .then((answers) => {
      addRole(answers.title, answers.salary, answers.departmentId)
        .then(() => {
          console.log('Role added successfully!');
          startApp();
        })
        .catch((error) => {
          console.error(error);
          startApp();
        });
    })
    .catch((error) => {
      console.error(error);
      startApp();
    });
}

function promptAddEmployee() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'firstName',
        message: 'Enter the first name of the employee:',
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'Enter the last name of the employee:',
      },
      {
        type: 'input',
        name: 'roleId',
        message: 'Enter the role ID for the employee:',
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'Enter the manager ID for the employee (optional):',
      },
    ])
    .then((answers) => {
      addEmployee(answers.firstName, answers.lastName, answers.roleId, answers.managerId || null)
        .then(() => {
          console.log('Employee added successfully!');
          startApp();
        })
        .catch((error) => {
          console.error(error);
          startApp();
        });
    })
    .catch((error) => {
      console.error(error);
      startApp();
    });
}

function promptUpdateEmployeeRole() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'employeeId',
        message: 'Enter the ID of the employee to update:',
      },
      {
        type: 'input',
        name: 'roleId',
        message: 'Enter the new role ID for the employee:',
      },
    ])
    .then((answers) => {
      updateEmployeeRole(answers.employeeId, answers.roleId)
        .then(() => {
          console.log('Employee role updated successfully!');
          startApp();
        })
        .catch((error) => {
          console.error(error);
          startApp();
        });
    })
    .catch((error) => {
      console.error(error);
      startApp();
    });
}

startApp();
