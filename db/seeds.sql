-- Insert sample departments
INSERT INTO department (id, name)
VALUES
  (1, 'Sales'),
  (2, 'Marketing'),
  (3, 'Engineering');

-- Insert sample roles
INSERT INTO role (id, title, salary, department_id)
VALUES
  (1, 'Sales Manager', 60000, 1),
  (2, 'Sales Representative', 40000, 1),
  (3, 'Marketing Manager', 55000, 2),
  (4, 'Marketing Coordinator', 35000, 2),
  (5, 'Software Engineer', 80000, 3),
  (6, 'QA Engineer', 60000, 3);

-- Insert sample employees
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
  (1, 'John', 'Doe', 1, NULL),
  (2, 'Jane', 'Smith', 2, 1),
  (3, 'Michael', 'Johnson', 3, NULL),
  (4, 'Emily', 'Davis', 4, 3),
  (5, 'David', 'Anderson', 5, NULL),
  (6, 'Sarah', 'Taylor', 6, 5);
