import React from 'react';

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>Je hebt deze letter al een keer ingevoerd.</p>
    </div>
  );
};

export default Notification;
