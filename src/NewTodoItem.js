import React, { useState } from 'react';
import { CreateTodo } from './CreateTodo';
import { TodoList } from './TodoList';

export default function NewTodoItem({ user }) {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleCompleteToggle = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        const updatedTodo = {
          ...todo,
          complete: !todo.complete,
        };

        if (updatedTodo.complete) {
          updatedTodo.dateCompleted = new Date().toLocaleString();
        } else {
          updatedTodo.dateCompleted = null;
        }

        return updatedTodo;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <CreateTodo onAddTodo={handleAddTodo} user={user} />
      <TodoList todos={todos} handleCompleteToggle={handleCompleteToggle} handleDeleteTodo={handleDeleteTodo}
/>
    </div>
  );
}
