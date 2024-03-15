import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [userType, setUserType] = useState('');
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (userType === 'student') {
            // Handle student login
            console.log('Logging in as student with Roll No:', userId, 'and password:', password);
        } else if (userType === 'faculty') {
            // Handle faculty login
            console.log('Logging in as faculty with User ID:', userId, 'and password:', password);
        } else {
            alert('Please select user type (student/faculty)');
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <div className="input-group">
                <label>User Type:</label>
                <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                    <option value="">Select User Type</option>
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                </select>
            </div>
            <div className="input-group">
                <label>{userType === 'student' ? 'Roll No' : 'User ID'}:</label>
                <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
            </div>
            <div className="input-group">
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
