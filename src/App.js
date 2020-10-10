import React from 'react';
import { CurrentCo2 } from './components/CurrentCo2/CurrentCo2.jsx';
import { IconWithValue } from './components/IconWithValue/IconWithValue.jsx';
import { Icon } from './components/IconWithValue/Icon';
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import TimeWithValuesGraph from "./components/TimeWithValuesGraph/TimeWithValuesGraph";

function App() {
  return (
    <>
      <CurrentCo2 eCoValue={0} />
      <div className='container px-5 '>
        <div className='row'>
          <div className='col'>
            <IconWithValue value='23 Cº' icon={Icon.thermometer} />
          </div>
          <div className='col text-right'>
            <IconWithValue value='85% hr' icon={Icon.thermometer} />
          </div>
        </div>
      </div>
      <div className='container px-5 py-5 my-5'>
        <p className='h3'>Últimas horas:</p>
        <div className='row'>
          <div className='col text-center'>

            <ParentSize className=''>
              {({ width }) => <TimeWithValuesGraph width={width} height={100} />}
            </ParentSize>,
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
