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
import { LateralBar } from '../../components/LateralBar/LateralBar';
import { LateralMenuTransition } from '../../components/LateralMenuTransition/LateralMenuTransition';
import { useStateWithLocalStorage } from '../../hooks/useStateWithLocalStorage';


const hours = 8;

const Main = () => {
    // Provisional data to work \/\/\/
    const HOUR = 1000 * 60 * 60;
    const fromDate = Math.floor((Date.now() - HOUR) / 1000);
    const toDate = new Date();
    // Provisional data to work /\/\/\
    const [selectedDevice, setSelectedDevice] = useStateWithLocalStorage('deviceSelected');
    const [menuActived, setMenuActived] = useState<boolean>(false);
    const [currentCo2, setCurrentCo2] = useState<number>(0);
    const [currentTemperature, setCurrentTemperature] = useState<number>(0);
    const [currentHumidity, setCurrentHumidity] = useState<number>(0)
    const [co2Data, setCo2Data] = useState<ApiResponse[]>([]);
    const [deviceList, setDeviceList] = useState<string[]>([]);

    useEffect(() => {
        ApiService.getUsersList().then((apiResponse: string[]) => {
            setDeviceList(apiResponse)
        });
    }, [])

    useEffect(() => {
        if (selectedDevice) {
            ApiService.getCurrentCo2(selectedDevice).then((apiResponse: any) => {
                setCurrentCo2(apiResponse[0].value);
            })
            ApiService.getCurrentTemperature(selectedDevice).then((apiResponse: any) => {
                setCurrentTemperature(apiResponse[0].value);
            })
            ApiService.getCurrentHumidity(selectedDevice).then((apiResponse: any) => {
                setCurrentHumidity(apiResponse[0].value);
            })
            ApiService.getCo2Data(fromDate, toDate, selectedDevice).then((apiResponse: ApiResponse[]) => {
                setCo2Data(apiResponse);
            })
        }
    }, [selectedDevice]);

    const onClickOnDevice = (device: string) => {
        setSelectedDevice(device);
        setMenuActived(false);
    }

    return (
        <div>
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
                    <CurrentCo2 eCoValue={currentCo2} />
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
                    <div className='container px-5 pt-1 mt-4 mb-4 pb-2'>
                        <Card className='graph-elem'>
                            <p className='text-elem pt-3 pl-2 mb-3'>Últimas {hours} horas</p>
                            <div className='row'>
                                <div className='col text-center'>
                                    <ParentSize className='graph-elem'>
                                        {({ width }) => <TimeWithValuesGraph endTimeValue={8} uom={'ppm'} timeFormat={'H:mm'} marginY={20} marginX={60} historicalValues={co2Data} width={width - 25} height={160} />}
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
                </>
            }
        </div>
    )
}

export default Main
