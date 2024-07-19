import React, { useState } from 'react';
import { Button, Input, Form, notification } from '@nextui-org/react';

const AddUserForm = ({ onAddUser }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userData.name || !userData.email || !userData.role) {
      notification.error({ message: 'All fields are required' });
      return;
    }

    onAddUser(userData);

    setUserData({ name: '', email: '', role: '' });

    notification.success({ message: 'User added successfully' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Add User</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Item label="Name">
          <Input
            name="name"
            placeholder="Enter user name"
            value={userData.name}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            name="email"
            type="email"
            placeholder="Enter user email"
            value={userData.email}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Role">
          <Input
            name="role"
            placeholder="Enter user role"
            value={userData.role}
            onChange={handleChange}
          />
        </Form.Item>
        <Button type="submit" color="primary">
          Add User
        </Button>
      </Form>
    </div>
  );
};

export default AddUserForm;
