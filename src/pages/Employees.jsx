import { useState } from "react";
import "./Employees.css";

const employees = [
  {
    name: "Rahul Sharma",
    department: "Engineering",
    position: "Frontend Developer",
    email: "rahul@company.com",
  },
  {
    name: "Priya Singh",
    department: "Engineering",
    position: "Backend Developer",
    email: "priya@company.com",
  },
  {
    name: "Amit Kumar",
    department: "Design",
    position: "UI/UX Designer",
    email: "amit@company.com",
  },
  {
    name: "Sneha Patel",
    department: "HR",
    position: "HR Manager",
    email: "sneha@company.com",
  },
  {
    name: "Arjun Mehta",
    department: "Marketing",
    position: "Marketing Executive",
    email: "arjun@company.com",
  },
  {
    name: "Neha Verma",
    department: "Finance",
    position: "Financial Analyst",
    email: "neha@company.com",
  },
];

function Employees() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) &&
      (department === "" || employee.department === department)
  );

  return (
    <main className="employees-page">
      <div className="employees-header">
        <div>
          <p className="page-label">TEAM DIRECTORY</p>
          <h1>Employee Directory</h1>
          <p>Search and find employee information easily.</p>
        </div>

        <div className="employee-count">
          <strong>{filteredEmployees.length}</strong>
          <span>Employees</span>
        </div>
      </div>

      <div className="employee-filters">
        <input
          type="text"
          placeholder="Search employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">All Departments</option>
          <option value="Engineering">Engineering</option>
          <option value="Design">Design</option>
          <option value="HR">HR</option>
          <option value="Marketing">Marketing</option>
          <option value="Finance">Finance</option>
        </select>
      </div>

      {filteredEmployees.length === 0 ? (
        <div className="empty-state">
          <h3>No employees found</h3>
          <p>Try changing your search or department filter.</p>
        </div>
      ) : (
        <div className="employee-grid">
          {filteredEmployees.map((employee) => (
            <div className="employee-card" key={employee.email}>
              <div className="employee-avatar">
                {employee.name.charAt(0)}
              </div>

              <h3>{employee.name}</h3>
              <span className="department-badge">
                {employee.department}
              </span>

              <p className="employee-position">
                {employee.position}
              </p>

              <p className="employee-email">
                {employee.email}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Employees;