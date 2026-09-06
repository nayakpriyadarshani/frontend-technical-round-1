import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>AI Employee Assistant</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/chat">AI Chat</Link>
        <Link to="/employees">Employees</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </nav>
  );
}

export default Navbar;