import React from 'react';
import {CurrentCo2} from './components/CurrentCo2/CurrentCo2.jsx';
import {IndexValuesAndIcon} from './components/IndexValuesAndIcon/IndexValuesAndIcon.jsx';
import { faThermometerHalf, faTint } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
      <CurrentCo2 eCoValue='0' />
      <div className='container px-5'>
            <div className='row'>
              <IndexValuesAndIcon value='23 Cº' icon={faThermometerHalf} />
              <IndexValuesAndIcon value='85% hr' icon={faTint} />
            </div>
      </div>
    </>
  );
}

export default App;
