import React, { useState, useEffect } from 'react';

import UsersList from '../../containers/UsersList/UsersList';

const UsersRoute = () => {
  const [userList, setUsers] = useState([])

  useEffect(() => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')
    .then(res => res.json())
    .then(users => setUsers(users))
  }, [])

  return (
    <div className="container" data-testid="users-route">
        <UsersList users={userList}/>
    </div>
  );
};

export default UsersRoute;
  