import React, { useState } from 'react';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import NewTodoItem from './NewTodoItem'; 

export default function UserBar() {
  const [user, setUser] = useState(null);

  if (user) {
    return (
      <>
        <Logout user={user} setUser={setUser} />
        <NewTodoItem user={user} />
      </>
    );
  } else {
    return (
      <>
        <Login setUser={setUser} />
        <Register setUser={setUser} />
      </>
    );
  }
}
