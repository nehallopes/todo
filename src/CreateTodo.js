import React, { useState } from 'react';

export function CreateTodo({ onAddTodo, user }) {

  const [title, setTitle] = useState('');
  
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (title.trim() === '') {
      return;
    }

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();

    const newTodo = {
      id: Date.now(),
      author: user,
      title: title,
      description: description,
      complete: false,
      dateCreated: formattedDate,
      dateCompleted: null,
    };

    onAddTodo(newTodo);

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>Author: <b>{user}</b></div>
        <label htmlFor="todo-title">Todo Title:</label>
        <input
          type="text"
          id="todo-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="todo-description">Description:</label>
        <textarea
          id="todo-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Add in Todo List</button>
      </div>
    </form>
  );
}
