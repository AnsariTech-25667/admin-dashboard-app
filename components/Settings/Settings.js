import React, { useState, useEffect } from 'react';
import { Button, Select, Input, Form, Switch, notification } from '@nextui-org/react';

const Settings = () => {
  const [theme, setTheme] = useState('light');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [apiEndpoint, setApiEndpoint] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        setIsLoading(true);
        const settings = await new Promise((resolve) =>
          setTimeout(() => resolve({
            theme: 'light',
            notificationsEnabled: true,
            apiEndpoint: 'https://api.example.com'
          }), 1000)
        );
        setTheme(settings.theme);
        setNotificationsEnabled(settings.notificationsEnabled);
        setApiEndpoint(settings.apiEndpoint);
      } catch (error) {
        notification.error({ message: 'Failed to fetch settings' });
      } finally {
        setIsLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const handleSave = async () => {
    try {
      setIsLoading(true);
      // Mock API call
      await new Promise((resolve) =>
        setTimeout(() => resolve('Settings saved successfully'), 1000)
      );
      notification.success({ message: 'Settings saved successfully' });
    } catch (error) {
      notification.error({ message: 'Failed to save settings' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Settings</h1>
      <Form>
        <Form.Item label="Theme">
          <Select
            placeholder="Select theme"
            value={theme}
            onChange={(value) => setTheme(value)}
          >
            <Select.Option value="light">Light</Select.Option>
            <Select.Option value="dark">Dark</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Enable Notifications">
          <Switch
            checked={notificationsEnabled}
            onChange={(e) => setNotificationsEnabled(e.target.checked)}
          />
        </Form.Item>

        <Form.Item label="API Endpoint">
          <Input
            placeholder="Enter API endpoint"
            value={apiEndpoint}
            onChange={(e) => setApiEndpoint(e.target.value)}
          />
        </Form.Item>

        <Button
          onClick={handleSave}
          disabled={isLoading}
          color="primary"
        >
          {isLoading ? 'Saving...' : 'Save Settings'}
        </Button>
      </Form>
    </div>
  );
};

export default Settings;
