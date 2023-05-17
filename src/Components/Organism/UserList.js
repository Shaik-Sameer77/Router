import React, { useState } from 'react';
import User from '../molecules/User';
import UsernameInput from '../atoms/UsernameInput';
import './UserList.css';

function UserList() {
  const [usernames, setUsernames] = useState([]);
  const [username, setUsername] = useState('');

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const addUser = event => {
    event.preventDefault();
    if (username.trim() !== '') {
      setUsernames(prevUsernames => [...prevUsernames, username.trim()]);
      setUsername('');
    }
  };

  const deleteUser = index => {
    setUsernames(prevUsernames => {
      const updatedUsernames = [...prevUsernames];
      updatedUsernames.splice(index, 1);
      return updatedUsernames;
    });
  };

  return (
    <div className="user-list-container">
      <form onSubmit={addUser}>
        <UsernameInput value={username} onChange={handleUsernameChange} />
        <button type="submit">Add</button>
      </form>
      <ul className="user-list">
        {usernames.map((username, index) => (
          <User
            key={index}
            username={username}
            onDelete={() => deleteUser(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default UserList;
