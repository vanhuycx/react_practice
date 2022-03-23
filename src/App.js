import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  createContext,
} from 'react';
import Component5 from './Component5';


const UserContext = createContext();

const Component2 = () => {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
};

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 UserContext={UserContext} />
    </>
  );
}



const App = () => {
  const [user, setUser] = useState('Van Pham');

  return (
    <UserContext.Provider value={user}>
      <h1>Hello {user}</h1>
      <Component2 />
    </UserContext.Provider>
  );
};

export default App;
