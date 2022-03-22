import React, { useState, useEffect, useCallback } from 'react';
import { memo } from 'react';
import './App.css';
import { useGetCryptoQuery } from './api/cryptoApi';
import './App.scss';

const App = () => {
  const [arrayOfObject, setArrayOfObject] = useState([{}]);
  console.log(arrayOfObject);
  return (
    <>
      <button
        onClick={() =>
          setArrayOfObject([...arrayOfObject, { 1: 'hello', 2: 'hi' }])
        }
      >
        Click
      </button>
    </>
  );
};

export default App;
