import { useState } from "react";
import SearchBar from "./components/SearchBar";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm";
import "./App.css";

const initialEmployees = [
  { id: "EMP001", name: "Rahul", email: "rahul@gmail.com", department: "IT", phone: "9876543210", dob: "2000-01-15" },
  { id: "EMP002", name: "Priya", email: "priya@gmail.com", department: "HR", phone: "9876543211", dob: "1999-05-20" },
  { id: "EMP003", name: "Amit", email: "amit@gmail.com", department: "Finance", phone: "9876543212", dob: "1998-09-10" },
];

function App() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [message, setMessage] = useState("");
  const [nextId, setNextId] = useState(4);

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 3000);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingEmployee(null);
  };

  const handleSave = (data) => {
    if (editingEmployee) {
      setEmployees(
        employees.map((emp) =>
          emp.id === editingEmployee.id ? { ...emp, ...data } : emp
        )
      );
      showMessage("Employee updated successfully!");
    } else {
      const id = "EMP" + String(nextId).padStart(3, "0");
      setEmployees([...employees, { id, ...data }]);
      setNextId(nextId + 1);
      showMessage("Employee added successfully!");
    }
    closeForm();
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees(employees.filter((emp) => emp.id !== id));
      showMessage("Employee deleted.");
    }
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Employee Management</h1>

      {message && <div className="success-message">{message}</div>}

      <div className="toolbar">
        <SearchBar value={search} onChange={setSearch} />
        <button
          className="btn btn-primary"
          onClick={() => {
            setEditingEmployee(null);
            setShowForm(true);
          }}
        >
          Add Employee
        </button>
      </div>

      {showForm && (
        <EmployeeForm
          initialData={editingEmployee}
          onSubmit={handleSave}
          onCancel={closeForm}
        />
      )}

      <EmployeeTable
        employees={filteredEmployees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;