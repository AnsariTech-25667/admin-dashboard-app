// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Settings.module.css'; // Assuming you are using CSS modules

const Settings = () => {
  // State to manage user settings and loading state
  const [settings, setSettings] = useState({
    theme: 'light',
    notifications: true,
  });
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    // Fetch user settings from server on component mount
    const fetchSettings = async () => {
      try {
        const response = await axios.get('/api/settings');
        setSettings(response.data);
      } catch (error) {
        console.error('Error fetching settings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  // Handle settings form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send updated settings to the server
      await axios.put('/api/settings', settings);
      setStatus('Settings updated successfully!');
    } catch (error) {
      console.error('Error updating settings:', error);
      setStatus('Error updating settings. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prevSettings => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className={styles.container}>
      <h1>Settings</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="theme">Theme</label>
            <select
              id="theme"
              name="theme"
              value={settings.theme}
              onChange={handleChange}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="notifications">Enable Notifications</label>
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className={styles.button}>Save</button>
          {status && <p className={styles.status}>{status}</p>}
        </form>
      )}
    </div>
  );
};

export default Settings;
