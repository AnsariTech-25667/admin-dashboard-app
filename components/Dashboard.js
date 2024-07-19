
import React from 'react';
import { Card, Grid, Text, Progress } from '@nextui-org/react'; // Example of Next UI components
import UserList from '../UserManagement/UserList';
import TaskList from '../TaskManagement/TaskList';
import Analytics from '../Analytics/Analytics';
import Notifications from '../Notifications/Notifications';
import Settings from '../Settings/Settings';

const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>
      
      <Grid.Container gap={2} justify="flex-start">
        {}
        <Grid xs={12} sm={6} md={4}>
          <Card>
            <Card.Body>
              <Text h4>Analytics</Text>
              <Analytics />
            </Card.Body>
          </Card>
        </Grid>

        {}
        <Grid xs={12} sm={6} md={4}>
          <Card>
            <Card.Body>
              <Text h4>User Management</Text>
              <UserList />
            </Card.Body>
          </Card>
        </Grid>

        {/* Task Management Card */}
        <Grid xs={12} sm={6} md={4}>
          <Card>
            <Card.Body>
              <Text h4>Task Management</Text>
              <TaskList />
            </Card.Body>
          </Card>
        </Grid>
        
        {/* Notifications Card */}
        <Grid xs={12} sm={6} md={4}>
          <Card>
            <Card.Body>
              <Text h4>Notifications</Text>
              <Notifications />
            </Card.Body>
          </Card>
        </Grid>

        {/* Settings Card */}
        <Grid xs={12} sm={6} md={4}>
          <Card>
            <Card.Body>
              <Text h4>Settings</Text>
              <Settings />
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
      
      {/* Progress Bar Example */}
      <div style={{ marginTop: '20px' }}>
        <Text h4>System Health</Text>
        <Progress value={75} color="success" />
      </div>
    </div>
  );
};

export default Dashboard;
