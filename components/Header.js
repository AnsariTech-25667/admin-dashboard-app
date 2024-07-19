
// components/Header/Header.js
import React from 'react';
import { Link } from 'next/link'; // Use Next.js's Link for client-side navigation
import { Navbar, Text, Button } from '@nextui-org/react'; // Example of Next UI components

const Header = () => {
  // Handle logout or other actions
  const handleLogout = () => {
    // Implement logout functionality here
    alert('Logged out');
  };

  return (
    <Navbar isCompact>
      <Navbar.Brand>
        <Text h2>MyApp</Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link>
          <Link href="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link href="/profile">Profile</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link href="/dashboard">Dashboard</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link href="/settings">Settings</Link>
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Button auto flat onClick={handleLogout}>Logout</Button>
      </Navbar.Content>
    </Navbar>
  );
};

export default Header;
