import React from 'react';

export default function Home() {
  // Array containing a minimum of 5 objects with at least 5 key-value pairs each
  const employees = [
    { id: 1, name: 'Aarav Sharma', email: 'aarav.sharma@example.com', age: 28, city: 'Bengaluru', role: 'Frontend Developer' },
    { id: 2, name: 'Priya Patel', email: 'priya.patel@example.com', age: 26, city: 'Mumbai', role: 'UI/UX Designer' },
    { id: 3, name: 'Rohan Verma', email: 'rohan.verma@example.com', age: 32, city: 'Hyderabad', role: 'Full Stack Engineer' },
    { id: 4, name: 'Ananya Iyer', email: 'ananya.iyer@example.com', age: 29, city: 'Chennai', role: 'Product Manager' },
    { id: 5, name: 'Kabir Mehta', email: 'kabir.mehta@example.com', age: 35, city: 'Pune', role: 'DevOps Engineer' },
  ];

  return (
    <div className="home-container">
      <div className="welcome-banner">
        <h2>Dashboard Home</h2>
        <p>Explore your team directory below, rendered dynamically using the <code>map()</code> method.</p>
      </div>

      {/* List Rendering using Cards Layout */}
      <div className="card-grid">
        {employees.map((emp) => (
          <div className="employee-card" key={emp.id}>
            <div className="card-header">
              <h3>{emp.name}</h3>
              <span className="badge">{emp.role}</span>
            </div>
            <div className="card-body">
              <p><strong>Email:</strong> {emp.email}</p>
              <p><strong>Age:</strong> {emp.age} years</p>
              <p><strong>City:</strong> {emp.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}