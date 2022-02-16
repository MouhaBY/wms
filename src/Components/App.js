import React, { useState } from 'react';
import Login from './Login';
import Main from './Main';


function App() {
  const [authenticated, setAuthenticated] = useState(false)

  return (
    <>
     {
       authenticated ?
       <Main  setAuthenticated={setAuthenticated} />
       : <Login setAuthenticated={setAuthenticated} />
     } 
    </>
  );
}

export default App;
