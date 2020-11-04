import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { CurrentCo2 } from '../../components/CurrentCo2/CurrentCo2';
import { IconWithValue } from '../../components/IconWithValue/IconWithValue';
import { Icon } from '../../components/IconWithValue/Icon';
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import { TimeWithValuesGraph } from "../../components/TimeWithValuesGraph/TimeWithValuesGraph";
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import './Main.scss';
import { ApiService } from '../../services/ApiService';
import { ApiResponse } from '../../types/api';
import { LateralBar } from '../LateralBar/LateralBar';
import { LateralMenuTransition } from '../../components/LateralMenuTransition/LateralMenuTransition';

const hours = 8;

const Main = () => {
    const fromDate = 0;
    const toDate = 0;
    const [menuActived, setMenuActived] = useState<boolean>(false);
    const [currentCo2, setCurrentCo2] = useState<number>(0);
    const [currentTemperature, setCurrentTemperature] = useState<number>(0);
    const [currentHumidity, setCurrentHumidity] = useState<number>(0)
    const [co2Data, setCo2Data] = useState<ApiResponse[]>([{ time: 1587726000000, value: 5 }]);

    useEffect(() => {
        ApiService.getCurrentCo2().then((apiResponse: ApiResponse) => {
            setCurrentCo2(apiResponse.value);
        })
        ApiService.getCurrentTemperature().then((apiResponse: ApiResponse) => {
            setCurrentTemperature(apiResponse.value);
        })
        ApiService.getCurrentHumidity().then((apiResponse: ApiResponse) => {
            setCurrentHumidity(apiResponse.value);
        })
        ApiService.getCo2Data(fromDate, toDate).then((apiResponse: ApiResponse[]) => {
            setCo2Data(apiResponse);
        })
    }, []);

    return (
        <div>
            <LateralMenuTransition in={menuActived}>
                    <LateralBar onClick={() => setMenuActived(!menuActived)} />
            </LateralMenuTransition>
            <div className='container'>
                <div className='row'>
                    <div className='col ml-4 pt-4 mt-3 h4 mb-0 d-inline menu-elem' >
                        <p className='mb-0 d-inline' onClick={() => setMenuActived(!menuActived)}><FontAwesomeIcon icon={faBars} size="lg" /></p>
                    </div>
                </div>
            </div>
            <CurrentCo2 eCoValue={currentCo2} />
            <div className='container px-5 text-center'>
                <Card>
                    <div className='row icon-with-value-elem'>
                        <div className='col'>
                            <IconWithValue value={`${currentTemperature}º`} icon={Icon.thermometer} />
                        </div>
                        <div className='col'>
                            <IconWithValue value={`${currentHumidity}%`} icon={Icon.humidity} />
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
                                {({ width }) => <TimeWithValuesGraph endTimeValue={8} uom={'ppm'} timeFormat={'HH:mm'} marginY={20} marginX={50} historicalValues={co2Data} width={width - 25} height={160} />}
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
        </div >
    )
}

export default Main
