import React, { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { CurrentCo2 } from '../../components/CurrentCo2/CurrentCo2';
import { IconWithValue } from '../../components/IconWithValue/IconWithValue';
import { Icon } from '../../components/IconWithValue/Icon';
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import { TimeWithValuesGraph } from "../../components/TimeWithValuesGraph/TimeWithValuesGraph";
import { Link, Redirect } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import './Main.scss';
import { ApiService } from '../../services/ApiService/ApiService';
import { ApiResponse } from '../../types/api';
import { LateralBar } from '../../components/LateralBar/LateralBar';
import { LateralMenuTransition } from '../../components/LateralMenuTransition/LateralMenuTransition';
import { useStateWithLocalStorage } from '../../hooks/useStateWithLocalStorage';
import moment from 'moment';
import { calculateTimeScaleValue } from '../../utils/calculateTimeScaleValue';
import { ApiServiceDataProp } from '../../services/ApiService/ApiServiceDataProp';
import { Loading } from '../../components/Loading/Loading';


const hours = 8;

const Main = () => {

    const [selectedDevice, setSelectedDevice] = useStateWithLocalStorage('deviceSelected');
    const [menuActived, setMenuActived] = useState<boolean>(false);
    const [currentCo2, setCurrentCo2] = useState<number>(0);
    const [currentTemperature, setCurrentTemperature] = useState<number>(0);
    const [currentHumidity, setCurrentHumidity] = useState<number>(0)
    const [co2Data, setCo2Data] = useState<ApiResponse[]>([]);
    const [deviceList, setDeviceList] = useState<string[]>([]);
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        ApiService.getUsersList().then((apiResponse: string[]) => {
            setDeviceList(apiResponse)
        });
    }, [])

    useEffect(() => {
        const fromDate = moment().subtract(7, 'hour').format(`YYYY-MM-DD HH:mm`);
        const toDate = moment().format(`YYYY-MM-DD HH:mm`);
        if (selectedDevice) {
            const timeScaleValue = calculateTimeScaleValue(fromDate, toDate) // TODO: This might be unnecessary here
            const currentCo2 = ApiService.getCurrentData(selectedDevice, ApiServiceDataProp.co2)
            const currentTemperature = ApiService.getCurrentData(selectedDevice, ApiServiceDataProp.temperature)
            const currentHumidity = ApiService.getCurrentData(selectedDevice, ApiServiceDataProp.humidity)
            const periodCo2 = ApiService.getPeriodData(fromDate, toDate, selectedDevice, timeScaleValue, ApiServiceDataProp.co2)
            Promise.all([
                currentCo2,
                currentTemperature,
                currentHumidity,
                periodCo2
            ]).then((
                [
                    currentCo2Response,
                    currentTemperatureResponse,
                    currentHumidityResponse,
                    periodCo2Response
                ]: ApiResponse[][]) => {
                setIsLoading(false);
                setCurrentCo2(currentCo2Response[0].value);
                setCurrentTemperature(currentTemperatureResponse[0].value);
                setCurrentHumidity(currentHumidityResponse[0].value);
                setCo2Data(periodCo2Response);
            }).catch(() => setIsError(true))
        }
    }, [selectedDevice]);

    const onClickOnDevice = useCallback((device: string) => {
        setSelectedDevice(device);
        setMenuActived(false);
    }, []);

    if (isError) {
        return <Redirect to='/unexpected-error?redirectTo=/' />
    }

    if (isLoading && selectedDevice) {
        return (
            <div className='container is-loading-container light'>
                <div className="row">
                    <div className='col is-loading'>
                        <Loading color='loading-dark'></Loading>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='light'>
            <div className='container'>
                <LateralMenuTransition isVisible={menuActived}>
                    <LateralBar activeDevice={selectedDevice} devices={deviceList} onClickOnClose={() => setMenuActived(false)} onClickOnDevice={onClickOnDevice} />
                </LateralMenuTransition>
                <div className='row'>
                    <div className='col ml-4 pt-4 mt-3 h4 mb-0 d-inline menu-elem' >
                        <p className='mb-0 d-inline' onClick={() => setMenuActived(true)}><FontAwesomeIcon icon={faBars} size="lg" /></p>
                    </div>
                </div>
            </div>
            {!selectedDevice &&
                <div className='container'>
                    <div className='row'>
                        <div className='col px-5 py-3 pt-5 mt-3'>
                            <h4 className='select-a-device'>Acceda al menú lateral y seleccione un dispositivo</h4>
                        </div>
                    </div>
                </div>}
            {selectedDevice &&
                <>
                    <CurrentCo2 eCoValue={Math.round(currentCo2)} />
                    <div className='container px-5 text-center'>
                        <Card>
                            <div className='row icon-with-value-elem'>
                                <div className='col'>
                                    <IconWithValue value={`${Math.round(currentTemperature)}º`} icon={Icon.thermometer} />
                                </div>
                                <div className='col'>
                                    <IconWithValue value={`${Math.round(currentHumidity)}%`} icon={Icon.humidity} />
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='container px-5 pt-3 mt-4 mb-4 pb-2'>
                        <Card className='graph-elem'>
                            <p className='text-elem pt-3 pl-2 mb-3'>Últimas {hours} horas</p>
                            <div className='row'>
                                <div className='col text-center'>
                                    <ParentSize className='graph-elem'>
                                        {({ width }) => <TimeWithValuesGraph endTimeValue={8} uom={'ppm'} timeFormat={'H:mm'} marginY={20} marginX={60} historicalValues={co2Data} bottomAxisNumTicks={7} width={width} height={160} />}
                                    </ParentSize>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='container pt-1 pb-5'>
                        <div className='text-center m-auto rounded-circle search-elem'>
                            <Link to='/history' className='search-link'><FontAwesomeIcon icon={faSearch} size="lg" /></Link>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Main
