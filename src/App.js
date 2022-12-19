import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {

  const [users, setUsers] = useState([
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Jane', age: 22 },
    { id: 3, name: 'Jack', age: 24 },
  ]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      user.id = Math.random().toString();
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
