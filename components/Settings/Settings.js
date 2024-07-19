import React, { useState, useEffect } from 'react';
import { Card, Text, Switch, Select, Button, Input, Spacer } from '@nextui-org/react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Settings = () => {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    language: 'en',
    timezone: 'UTC',
    emailFrequency: 'daily',
    twoFactorAuth: false,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/settings');
      setSettings(response.data);
    } catch (error) {
      console.error('Error fetching settings:', error);
      toast.error('Failed to load settings');
    } finally {
      setLoading(false);
    }
  };

  const updateSetting = async (key, value) => {
    try {
      setLoading(true);
      await axios.patch('/api/settings', { [key]: value });
      setSettings(prev => ({ ...prev, [key]: value }));
      toast.success('Setting updated successfully');
    } catch (error) {
      console.error('Error updating setting:', error);
      toast.error('Failed to update setting');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (key, value) => {
    updateSetting(key, value);
  };

  if (loading) {
    return <Text>Loading settings...</Text>;
  }

  return (
    <Card css={{ mw: '600px', p: '$6' }}>
      <Text h3>Settings</Text>
      <Spacer y={1} />
      
      <Text h4>Appearance</Text>
      <Switch
        checked={settings.darkMode}
        onChange={(e) => handleChange('darkMode', e.target.checked)}
        label="Dark Mode"
      />
      <Spacer y={1} />

      <Text h4>Notifications</Text>
      <Switch
        checked={settings.notifications}
        onChange={(e) => handleChange('notifications', e.target.checked)}
        label="Enable Notifications"
      />
      <Spacer y={1} />

      <Text h4>Language</Text>
      <Select
        value={settings.language}
        onChange={(e) => handleChange('language', e.target.value)}
      >
        <Select.Option value="en">English</Select.Option>
        <Select.Option value="es">Español</Select.Option>
        <Select.Option value="fr">Français</Select.Option>
      </Select>
      <Spacer y={1} />

      <Text h4>Timezone</Text>
      <Select
        value={settings.timezone}
        onChange={(e) => handleChange('timezone', e.target.value)}
      >
        <Select.Option value="UTC">UTC</Select.Option>
        <Select.Option value="EST">EST</Select.Option>
        <Select.Option value="PST">PST</Select.Option>
      </Select>
      <Spacer y={1} />

      <Text h4>Email Frequency</Text>
      <Select
        value={settings.emailFrequency}
        onChange={(e) => handleChange('emailFrequency', e.target.value)}
      >
        <Select.Option value="daily">Daily</Select.Option>
        <Select.Option value="weekly">Weekly</Select.Option>
        <Select.Option value="monthly">Monthly</Select.Option>
      </Select>
      <Spacer y={1} />

      <Text h4>Security</Text>
      <Switch
        checked={settings.twoFactorAuth}
        onChange={(e) => handleChange('twoFactorAuth', e.target.checked)}
        label="Enable Two-Factor Authentication"
      />
      <Spacer y={2} />

      <Button onClick={fetchSettings}>
        Refresh Settings
      </Button>
    </Card>
  );
};

export default Settings;
