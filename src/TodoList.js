import React from 'react';

export function TodoList({ todos, handleCompleteToggle }) {
  return (
    <div>
      <h3>Todo List:</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>Author:</strong> {todo.author}<br />
            <strong>Title:</strong> {todo.title}<br />
            <strong>Description:</strong> {todo.description}<br />
            <strong>Date Created:</strong> {todo.dateCreated}<br />
            <strong>Complete:</strong> {todo.complete ? 'Yes' : 'No'}<br />
            <label>
              Complete:
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleCompleteToggle(todo.id)}
              />
            </label>
            {todo.complete && (
              <div>
                <strong>Date Completed:</strong> {todo.dateCompleted}<br />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
