// Import necessary dependencies
import React, { useState } from 'react';
import axios from 'axios';
import styles from './SendNotification.module.css'; 

const SendNotification = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newNotification = {
      title,
      message,
      date: new Date().toISOString(),
    };

    try {
      await axios.post('/api/notifications', newNotification);
      setStatus('Notification sent successfully!');
      setTitle('');
      setMessage('');
    } catch (error) {
      console.error('Error sending notification:', error);
      setStatus('Error sending notification. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Send Notification</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Send</button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </div>
  );
};

export default SendNotification;
