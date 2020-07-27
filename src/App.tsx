import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model'; 

const App: React.FC = () => { 
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.floor(Math.random() * 100).toString(), text: text }
    ]);
  }

  const todoDeleteHandler = (todoId: string) => { 
    // const updatedTodos = todos.filter(todo => todo.id !== todoId); 
    // setTodos(prevTodos => updatedTodos);
    setTodos(prevTodos => {
      return prevTodos.filter(prev=>prev.id !== todoId);
    });
  }
  return (
    <div className="Apps">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  )
}

export default App; 