import React from 'react';

function UsernameInput({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter username"
    />
  );
}

export default UsernameInput;
