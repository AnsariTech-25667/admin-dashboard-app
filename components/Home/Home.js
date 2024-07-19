// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Home.module.css'; // Assuming you are using CSS modules
import Link from 'next/link';

const Home = () => {
  // State to manage data and loading state
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from server on component mount
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/home');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Welcome to the Home Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.grid}>
          {data.map((item) => (
            <div key={item.id} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link href={`/details/${item.id}`}>
                <a className={styles.link}>Learn More</a>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
