import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm";
import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "./services/employeeService";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Runs once when the page loads
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (err) {
        setError("Could not load employees. Is the backend running?");
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 3000);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingEmployee(null);
  };

  const handleSave = async (data) => {
    try {
      setError("");
      if (editingEmployee) {
        const updated = await updateEmployee(editingEmployee.id, data);
        setEmployees(employees.map((emp) => (emp.id === updated.id ? updated : emp)));
        showMessage("Employee updated successfully!");
      } else {
        const created = await addEmployee(data);
        setEmployees([...employees, created]);
        showMessage("Employee added successfully!");
      }
      closeForm();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;
    try {
      setError("");
      await deleteEmployee(id);
      setEmployees(employees.filter((emp) => emp.id !== id));
      showMessage("Employee deleted.");
    } catch (err) {
      setError(err.message);
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

      {error && <div className="error-message">⚠ {error}</div>}
      {loading && <p>Loading employees...</p>}
    </div>
  );
}

export default App;