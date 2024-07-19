import React, { useState } from 'react';
import { Input, Button } from '@nextui-org/react';

const UserFilter = ({ onFilter }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
    // Debounce or immediate filtering can be handled here
  };

  const handleSubmit = () => {
    onFilter(search);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Filter</h2>
      <Input
        clearable
        underlined
        placeholder="Search users by name or email"
        value={search}
        onChange={handleChange}
        style={{ width: '300px' }}
      />
      <Button
        auto
        color="primary"
        onClick={handleSubmit}
        style={{ marginTop: '10px' }}
      >
        Apply Filter
      </Button>
    </div>
  );
};

export default UserFilter;
