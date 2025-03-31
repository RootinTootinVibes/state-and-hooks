import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './components/Counter';
import TextField from './components/TextField';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <Counter />
      <br />
      <TextField />
      <br />
      <TodoList />
    </div>
  );
}

export default App;
