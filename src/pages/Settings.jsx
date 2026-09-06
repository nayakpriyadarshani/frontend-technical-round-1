import { useState } from "react";
import "./Settings.css";


function Settings() {
    const [notifications, setNotifications] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [name, setName] = useState("Priyadarshani");
    const [email, setEmail] = useState("priyadarshani@company.com");

    const handleUpdateProfile = () => { alert("Profile updated successfully!"); };

    return (
        <div className={`settings-page ${darkMode ? "dark" : ""}`}>
            <h1>Settings</h1>

            <p>Manage your account and application preferences.</p>

            <div className="settings-container">

                <div className="setting-item">
                    <h3>Update Profile</h3>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <button onClick={handleUpdateProfile}>Update Profile</button>
                </div>

                <div className="setting-item">
                    <h3>Notifications</h3>
                    <p>Manage your notification preferences.</p>
                    <button onClick={() => setNotifications(!notifications)}>
                        {notifications ? "Disable" : "Enable"}
                    </button>
                </div>

                <div className="setting-item">
                    <h3>Theme</h3>
                    <p>Choose your preferred application theme.</p>
                    <button onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </button>
                </div>

                <div className="setting-item">
                    <h3>Account</h3>
                    <p>Manage your account information.</p>
                    <button>Manage Account</button>
                </div>

            </div>
        </div>
    );
}

export default Settings;