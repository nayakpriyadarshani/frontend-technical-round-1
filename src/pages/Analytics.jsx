import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const departmentData = [
  { department: "Engineering", employees: 45 },
  { department: "Design", employees: 20 },
  { department: "HR", employees: 15 },
  { department: "Marketing", employees: 25 },
  { department: "Finance", employees: 15 },
];

const pieData = [
  { name: "Engineering", value: 45 },
  { name: "Design", value: 20 },
  { name: "HR", value: 15 },
  { name: "Marketing", value: 25 },
  { name: "Finance", value: 15 },
];

const COLORS = [
  "#7c3aed",
  "#2563eb",
  "#16a34a",
  "#f59e0b",
  "#ef4444",
];

function Analytics() {
  return (
    <div className="analytics-page">
      <h1>Analytics</h1>

      <p>View important employee and department statistics.</p>

      <div className="analytics-container">
        <div className="analytics-card">
          <h3>Total Employees</h3>
          <p>120</p>
        </div>

        <div className="analytics-card">
          <h3>Departments</h3>
          <p>8</p>
        </div>

        <div className="analytics-card">
          <h3>Active Employees</h3>
          <p>105</p>
        </div>
      </div>

      <div className="chart-container">
        <h2>Employees by Department</h2>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={departmentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="department" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="employees" fill="#7c3aed" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h2>Department Distribution</h2>

        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Analytics;