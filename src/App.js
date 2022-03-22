import React, { useState, useEffect, useCallback } from 'react';
import { memo } from 'react';
import './App.css';
import { useGetCryptoQuery } from './api/cryptoApi';
import './App.scss';

const Todos = ({ todos }) => {
  console.log('child rendered');
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};
const MemoizedTodos = memo(Todos);

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(['todo 1', 'todo 2']);
  const [inputTodo, setInputTodo] = useState();

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <MemoizedTodos todos={todos} />
      <input type='text' onChange={(e) => setInputTodo(e.target.value)} />
      <button
        onClick={() =>
          inputTodo &&
          !todos.includes(inputTodo) &&
          setTodos([...todos, inputTodo])
        }
      >
        Add todo
      </button>

      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>

      <br />
    </>
  );
};

export default App;
