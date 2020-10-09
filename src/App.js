import React from 'react';
import { CurrentCo2 } from './components/CurrentCo2/CurrentCo2.jsx';
import { IconWithValue } from './components/IconWithValue/IconWithValue.jsx';
import { Icon } from './components/IconWithValue/Icon';

function App() {
  return (
    <>
      <CurrentCo2 eCoValue={0} />
      <div className='container px-5'>
        <div className='row'>
          <div className='col text-center'>
            <IconWithValue value='23 Cº' icon={Icon.thermometer} />
          </div>
          <div className='col text-center'>
            <IconWithValue value='85% hr' icon={Icon.thermometer} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
