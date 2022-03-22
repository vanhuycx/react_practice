import React, { useState, useEffect, useCallback } from 'react';

const App = () => {
  const [color, setColor] = useState(false);

  useEffect(() => {
    document
      .getElementById('input1')
      .addEventListener(
        'keydown',
        () => (document.body.style.backgroundColor = 'red')
      );
    document
      .getElementById('input1')
      .addEventListener(
        'keyup',
        () => (document.body.style.backgroundColor = 'white')
      );

    return () => {
      document
        .getElementById('input1')
        .removeEventListener(
          'keydown',
          (document.body.style.backgroundColor = 'red')
        );
      document
        .getElementById('input1')
        .removeEventListener(
          'keup',
          (document.body.style.backgroundColor = 'white')
        );
    };
  }, [color]);

  return (
    <>
      <input id='input1' type='text' />
      <button onClick={() => setColor(!color)}>Click to change color</button>
    </>
  );
};

export default App;
