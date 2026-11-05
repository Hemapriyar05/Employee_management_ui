const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "..", "data", "employees.json");

const readEmployees = () => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data || "[]");
};

const writeEmployees = (employees) => {
  fs.writeFileSync(filePath, JSON.stringify(employees, null, 2));
};

module.exports = { readEmployees, writeEmployees };