import React from 'react';
import { Table, Button, Text } from '@nextui-org/react';

// Example user data, replace with your actual data fetching logic
const sampleUsers = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
];

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>User List</h1>
      <Table
        aria-label="User List"
        css={{ minWidth: "100%" }}
      >
        <Table.Header>
          <Table.Column>Name</Table.Column>
          <Table.Column>Email</Table.Column>
          <Table.Column>Role</Table.Column>
          <Table.Column>Actions</Table.Column>
        </Table.Header>
        <Table.Body>
          {users.length > 0 ? (
            users.map(user => (
              <Table.Row key={user.id}>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>
                <Table.Cell>
                  <Button
                    auto
                    color="primary"
                    onClick={() => onEdit(user.id)}
                    style={{ marginRight: '10px' }}
                  >
                    Edit
                  </Button>
                  <Button
                    auto
                    color="error"
                    onClick={() => onDelete(user.id)}
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell colSpan={4}>
                <Text>No users found</Text>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default UserList;
