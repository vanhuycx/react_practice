import React, { useState, useEffect, useCallback } from 'react';

const App = () => {
  const [arrayKey, setArrayKey] = useState(0);

  const [arrayOfObject, setArrayOfObject] = useState({});

  console.log(arrayOfObject);
  return (
    <>
      <input type='text' onChange={(e) => setArrayKey(e.target.value)} />

      <button
        onClick={() =>
          setArrayOfObject({ ...arrayOfObject, [arrayKey]: [12, 3, 4] })
        }
      >
        Click
      </button>
    </>
  );
};

export default App;
