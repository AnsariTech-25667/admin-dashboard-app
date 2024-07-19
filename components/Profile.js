
// components/Profile/Profile.js
import React, { useState } from 'react';
import { Card, Input, Button, Text } from '@nextui-org/react'; // Example of Next UI components

const Profile = () => {
  // Sample user data
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software Engineer with a passion for developing scalable web applications.',
  });

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement save functionality here (e.g., send data to an API)
    alert('Profile updated!');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Card>
        <Card.Body>
          <Text h3>Profile</Text>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px' }}>
              <Input
                fullWidth
                clearable
                label="Name"
                placeholder="Enter your name"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <Input
                fullWidth
                clearable
                label="Email"
                placeholder="Enter your email"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <Input
                fullWidth
                clearable
                label="Bio"
                placeholder="Write something about yourself"
                name="bio"
                value={user.bio}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" auto>Save Changes</Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
