import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { CurrentCo2 } from '../../components/CurrentCo2/CurrentCo2.jsx';
import { IconWithValue } from '../../components/IconWithValue/IconWithValue.jsx';
import { Icon } from '../../components/IconWithValue/Icon';
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import { TimeWithValuesGraph } from "../../components/TimeWithValuesGraph/TimeWithValuesGraph";
import historicalValues from "../../components/TimeWithValuesGraph/HistoricalValues";
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import './Main.scss';

const hours = 8;

const Main = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col ml-4 pt-4 mt-3 h4 mb-0 d-inline menu-elem' >
                        <p className='mb-0'><FontAwesomeIcon icon={faBars} size="lg" /></p>
                    </div>
                </div>
            </div>
            <CurrentCo2 eCoValue={0} />
            <div className='container px-5'>
                <Card>
                    <div className='row icon-with-value-elem'>
                        <div className='col'>
                            <IconWithValue value='23º' icon={Icon.thermometer} />
                        </div>
                        <div className='col'>
                            <IconWithValue value='85%' icon={Icon.humidity} />
                        </div>
                    </div>
                </Card>
            </div>
            <div className='container px-5 pt-1 mt-4 mb-4 pb-2'>
                <Card className='graph-elem'>
                    <p className='text-elem pt-3 pl-2 mb-3'>Últimas {hours} horas</p>
                    <div className='row'>
                        <div className='col text-center'>
                            <ParentSize className='graph-elem'>
                                {({ width }) => <TimeWithValuesGraph uom={'ppm'} timeFormat={'HH:mm'} historicalValues={historicalValues} width={width - 25} height={160} />}
                            </ParentSize>
                    </div>
                    </div>
                </Card>
            </div>
            <div className='container pt-1 pb-5'>
                <div className='text-center m-auto rounded-circle search-elem'>
                    <Link to='/History' className='search-link'><FontAwesomeIcon icon={faSearch} size="lg" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Main
