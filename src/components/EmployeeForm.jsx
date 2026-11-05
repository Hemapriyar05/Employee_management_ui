import { useState } from "react";

const DEPARTMENTS = ["IT", "HR", "Finance", "Marketing", "Operations"];

function EmployeeForm({ initialData, onSubmit, onCancel }) {
  const [form, setForm] = useState({
    name: initialData?.name || "",
    email: initialData?.email || "",
    phone: initialData?.phone || "",
    dob: initialData?.dob || "",
    department: initialData?.department || "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(form.phone)) newErrors.phone = "Phone must be 10 digits";
    if (!form.dob) newErrors.dob = "Date of birth is required";
    else if (new Date(form.dob) > new Date()) newErrors.dob = "Date cannot be in the future";
    if (!form.department) newErrors.department = "Department is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit(form);
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit} noValidate>
      <h2>{initialData ? "Edit Employee" : "Add Employee"}</h2>

      <label>Employee Name</label>
      <input name="name" value={form.name} onChange={handleChange} />
      {errors.name && <span className="error">{errors.name}</span>}

      <label>Email</label>
      <input name="email" type="email" value={form.email} onChange={handleChange} />
      {errors.email && <span className="error">{errors.email}</span>}

      <label>Phone Number</label>
      <input name="phone" value={form.phone} onChange={handleChange} />
      {errors.phone && <span className="error">{errors.phone}</span>}

      <label>Date of Birth</label>
      <input name="dob" type="date" value={form.dob} onChange={handleChange} />
      {errors.dob && <span className="error">{errors.dob}</span>}

      <label>Department</label>
      <select name="department" value={form.department} onChange={handleChange}>
        <option value="">Select department</option>
        {DEPARTMENTS.map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>
      {errors.department && <span className="error">{errors.department}</span>}

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="button" className="btn btn-cancel" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default EmployeeForm;