import React, { useRef, useState, useEffect } from 'react';

const App = () => {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };
  return (
    <>
      <input type='text' ref={inputElement} />

      <button onClick={focusInput}>Focus Input</button>
    </>
  );
};

export default App;
