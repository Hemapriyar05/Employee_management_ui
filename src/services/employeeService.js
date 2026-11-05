const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api/employees";

// fetch() only rejects on network failure, not on 404 or 500,
// so we check response.ok ourselves.
const handleResponse = async (response) => {
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.message || "Request failed");
  }
  return response.json();
};

export const getEmployees = async () => {
  return handleResponse(await fetch(API_URL));
};

export const addEmployee = async (employee) => {
  return handleResponse(
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    })
  );
};

export const updateEmployee = async (id, employee) => {
  return handleResponse(
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    })
  );
};

export const deleteEmployee = async (id) => {
  return handleResponse(await fetch(`${API_URL}/${id}`, { method: "DELETE" }));
};