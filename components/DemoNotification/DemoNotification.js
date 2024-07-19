import React from 'react';

const DemoNotification = () => {
  const sendNotification = () => {
    alert('This is a demo notification');
  };

  return (
    <button onClick={sendNotification}>
      Send Notification
    </button>
  );
};

export default DemoNotification;
