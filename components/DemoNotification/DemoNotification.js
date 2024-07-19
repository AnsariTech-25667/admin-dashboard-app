// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import styles from './DemoNotification.module.css'; // Assuming you are using CSS modules

// Initialize toast notifications
toast.configure();

const DemoNotification = () => {
  // State to manage notification messages and loading state
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch existing notifications from server on component mount
    const fetchNotifications = async () => {
      setLoading(true);
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

  // Function to handle notification sending
  const sendNotification = async () => {
    if (message.trim() === '') {
      toast.error('Message cannot be empty');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('/api/notifications', { message });
      setNotifications((prev) => [...prev, response.data]);
      setMessage('');
      toast.success('Notification sent successfully!');
    } catch (error) {
      console.error('Error sending notification:', error);
      toast.error('Failed to send notification');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Send a Notification</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
        className={styles.input}
      />
      <button onClick={sendNotification} disabled={loading} className={styles.button}>
        {loading ? 'Sending...' : 'Send Notification'}
      </button>
      <div className={styles.notifications}>
        <h3>Notifications</h3>
        {loading ? (
          <p>Loading notifications...</p>
        ) : (
          <ul>
            {notifications.map((notification) => (
              <li key={notification.id}>{notification.message}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DemoNotification;
