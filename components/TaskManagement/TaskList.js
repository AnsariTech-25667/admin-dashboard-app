// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './TaskList.module.css'; // Assuming you are using CSS modules

const TaskList = () => {
  // State to manage tasks, loading state, and error state
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch tasks from the server on component mount
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/tasks');
        setTasks(response.data);
      } catch (error) {
        setError('Error fetching tasks.');
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // Handle task completion toggle
  const handleToggleComplete = async (taskId) => {
    try {
      await axios.put(`/api/tasks/${taskId}`, { completed: true });
      setTasks(tasks.map(task => 
        task.id === taskId ? { ...task, completed: true } : task
      ));
    } catch (error) {
      setError('Error updating task status.');
      console.error('Error updating task status:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Task List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : tasks.length > 0 ? (
        <ul className={styles.list}>
          {tasks.map(task => (
            <li key={task.id} className={styles.item}>
              <span className={task.completed ? styles.completed : styles.pending}>
                {task.title}
              </span>
              {!task.completed && (
                <button 
                  className={styles.button} 
                  onClick={() => handleToggleComplete(task.id)}
                >
                  Mark as Complete
                </button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default TaskList;
