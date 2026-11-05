function EmployeeTable({ employees, onEdit, onDelete }) {
  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.length === 0 ? (
          <tr>
            <td colSpan="5" className="empty">No employees found</td>
          </tr>
        ) : (
          employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>
                <button className="btn btn-edit" onClick={() => onEdit(emp)}>Edit</button>
                <button className="btn btn-delete" onClick={() => onDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default EmployeeTable;