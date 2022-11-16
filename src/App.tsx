import React from 'react';
import './App.css';
import TodoList from './components/todoList/TodoList';
import { TodoProvider } from './context/TodoContext';

function App (): JSX.Element {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
}

export default App;
