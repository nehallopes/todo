import React, { useState, useReducer } from 'react';
import UserBar from './UserBar';
import NewTodoItem from './NewTodoItem';
import { userReducer,todoReducer } from './Reducer';


function App() {
  
  const [addedTodos, setAddedTodos] = useState([]);

  const [user, dispatchUser] = useReducer(userReducer, "");

  const [dispatchTodo] = useReducer(todoReducer, []);

  const handleLogin = (loggedInUser) => {
    dispatchUser(loggedInUser);
  };

  const handleLogout = () => {
    dispatchUser(null);
  };

  const addTodo = (newTodo) => {
    dispatchTodo({type:"CREATE_TODO", ...newTodo});
    setAddedTodos([...addedTodos, newTodo]);
  };

  return (
    <div>
      <UserBar user={user} dispatchUser={dispatchUser} onLogin={handleLogin} onLogout={handleLogout} />
      {user ? (
        <>
          <NewTodoItem onAddTodo={addTodo} user={user} />
          <div>
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
