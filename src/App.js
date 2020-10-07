import React from 'react';
import {CurrentCo2} from './components/CurrentCo2/CurrentCo2.jsx';

function App() {
  return (
    <>
      <h1>Hello!</h1>
      <button className="btn btn-primary">Click me</button>
      <CurrentCo2 name={'Roberto'}></CurrentCo2>
    </>
  );
}

export default App;
