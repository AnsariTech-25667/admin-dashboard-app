// components/Sidebar/Sidebar.js
import React from 'react';
import { useRouter } from 'next/router';
import { Nav, NavItem, NavLink } from '@nextui-org/react';

const Sidebar = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <aside className="sidebar">
      <Nav>
        <NavItem>
          <NavLink onClick={() => handleNavigation('/dashboard')}>
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => handleNavigation('/user-management')}>
            User Management
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => handleNavigation('/analytics')}>
            Analytics
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => handleNavigation('/notifications')}>
            Notifications
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => handleNavigation('/settings')}>
            Settings
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => handleNavigation('/task-management')}>
            Task Management
          </NavLink>
        </NavItem>
      </Nav>
      <style jsx>{`
        .sidebar {
          width: 250px;
          height: 100vh;
          background: #f0f0f0;
          padding: 20px;
        }
        .sidebar :global(a) {
          display: block;
          margin: 10px 0;
          color: #333;
          text-decoration: none;
        }
        .sidebar :global(a:hover) {
          color: #0070f3;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
