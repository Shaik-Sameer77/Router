import React from 'react';

function User({ username, onDelete }) {
  return (
    <li>
      {username}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default User;
