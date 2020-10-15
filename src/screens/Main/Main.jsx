import React from 'react';
import { CurrentCo2 } from '../../components/CurrentCo2/CurrentCo2.jsx';
import { IconWithValue } from '../../components/IconWithValue/IconWithValue.jsx';
import { Icon } from '../../components/IconWithValue/Icon';
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import { TimeWithValuesGraph } from "../../components/TimeWithValuesGraph/TimeWithValuesGraph";
import historicalValues from "../../components/TimeWithValuesGraph/HistoricalValues";
import { Link } from 'react-router-dom';

const hours = 8;

const Main = () => {
    return (
        <div>
            <CurrentCo2 eCoValue={0} />
            <div className='container px-5 '>
                <div className='row '>
                    <div className='col'>
                        <IconWithValue value='23 ºC' icon={Icon.thermometer} />
                    </div>
                    <div className='col text-right'>
                        <IconWithValue value='85% hr' icon={Icon.humidity} />
                    </div>
                </div>
            </div>
            <div className='container px-5 py-5 my-5'>
                <p className='h3'>Últimas {hours} horas:</p>
                <div className='row'>
                    <div className='col text-center'>
                        <ParentSize className=''>
                            {({ width }) => <TimeWithValuesGraph uom={'ppm'} timeFormat={'HH:mm'} historicalValues={historicalValues} width={width} height={100} />}
                        </ParentSize>,
                    </div>
                </div>
            </div>
            <div className='container px-5 py-5 my-5'>
                <div className='row'>
                    <div className='col text-center'>
                        <Link to='/History'>Historico </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
