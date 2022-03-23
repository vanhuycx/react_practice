import React, { useRef, useState, useEffect } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState();
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <p>Enter something:</p>
      <input type='text' onChange={(e) => setInputValue(e.target.value)} />
      <p>The app renders: {count.current} time(s)</p>
    </>
  );
};

export default App;
