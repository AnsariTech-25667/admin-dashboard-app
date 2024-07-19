// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Notifications.module.css'; // Assuming you are using CSS modules

const Notifications = () => {
  // State to manage notifications and loading state
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch notifications from server on component mount
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/api/notifications');
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Notifications</h1>
      {loading ? (
        <p>Loading...</p>
      ) : notifications.length > 0 ? (
        <ul className={styles.list}>
          {notifications.map((notification) => (
            <li key={notification.id} className={styles.item}>
              <h3>{notification.title}</h3>
              <p>{notification.message}</p>
              <span className={styles.date}>{new Date(notification.date).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No notifications available.</p>
      )}
    </div>
  );
};

export default Notifications;
