// Import necessary dependencies
import React, { useState } from 'react';
import axios from 'axios';
import styles from './AddUserForm.module.css'; // Assuming you are using CSS modules

const AddUserForm = () => {
  // State to manage form fields and submission status
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct user object
    const newUser = {
      name,
      email,
      role,
    };

    try {
      // Send user data to the server
      await axios.post('/api/users', newUser);
      setStatus('User added successfully!');
      setName('');
      setEmail('');
      setRole('');
    } catch (error) {
      console.error('Error adding user:', error);
      setStatus('Error adding user. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Add User</button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </div>
  );
};

export default AddUserForm;
