const { readEmployees, writeEmployees } = require("../utils/fileHelper");

// EMP001-style ID based on the highest existing number
const generateId = (employees) => {
  const maxNumber = employees.reduce((max, emp) => {
    const num = parseInt(emp.id.replace("EMP", ""), 10);
    return num > max ? num : max;
  }, 0);
  return "EMP" + String(maxNumber + 1).padStart(3, "0");
};

// GET /api/employees
const getEmployees = (req, res) => {
  try {
    res.status(200).json(readEmployees());
  } catch (error) {
    res.status(500).json({ message: "Failed to read employees" });
  }
};

// POST /api/employees
const addEmployee = (req, res) => {
  try {
    const employees = readEmployees();
    const newEmployee = { ...req.body, id: generateId(employees) };
    employees.push(newEmployee);
    writeEmployees(employees);
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ message: "Failed to add employee" });
  }
};

// PUT /api/employees/:id
const updateEmployee = (req, res) => {
  try {
    const { id } = req.params;
    const employees = readEmployees();
    const index = employees.findIndex((emp) => emp.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "Employee not found" });
    }

    employees[index] = { ...employees[index], ...req.body, id };
    writeEmployees(employees);
    res.status(200).json(employees[index]);
  } catch (error) {
    res.status(500).json({ message: "Failed to update employee" });
  }
};

// DELETE /api/employees/:id
const deleteEmployee = (req, res) => {
  try {
    const { id } = req.params;
    const employees = readEmployees();
    const remaining = employees.filter((emp) => emp.id !== id);

    if (remaining.length === employees.length) {
      return res.status(404).json({ message: "Employee not found" });
    }

    writeEmployees(remaining);
    res.status(200).json({ message: "Employee deleted successfully", id });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete employee" });
  }
};

module.exports = { getEmployees, addEmployee, updateEmployee, deleteEmployee };