import React, { useState } from 'react';
import UserBar from './UserBar';
import Logout from './Logout';
import NewTodoItem from './NewTodoItem';

function App() {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);
  const [addedTodos, setAddedTodos] = useState([]);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    setAddedTodos([...addedTodos, newTodo]);
  };

  return (
    <div>
      <UserBar user={user} onLogin={handleLogin} onLogout={handleLogout} />
      {user ? (
        <>
          <Logout user={user} setUser={handleLogout} />
          <NewTodoItem onAddTodo={addTodo} user={user} />
          <div>
            <h2>Added Todos:</h2>
            <ul>
              {addedTodos.map((todo) => (
                <li key={todo.id}>
                  <strong>Author:</strong> {todo.author}<br />
                  <strong>Title:</strong> {todo.title}<br />
                  <strong>Description:</strong> {todo.description}<br />
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default App;
