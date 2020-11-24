import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import { DatePicker } from '../../components/DatePicker/DatePicker';
import { TimeWithValuesGraph } from '../../components/TimeWithValuesGraph/TimeWithValuesGraph';
import { CardWithTextTab } from '../../components/CardWithTextTab/CardWithTextTab'
import './History.scss'
import { ApiService } from '../../services/ApiService/ApiService';
import { ApiResponse } from '../../types/api';
import { useStateWithLocalStorage } from '../../hooks/useStateWithLocalStorage';
import { calculateTimeScaleValue } from '../../utils/calculateTimeScaleValue';
import { ApiServiceDataProp } from '../../services/ApiService/ApiServiceDataProp';
import { Loading } from '../../components/Loading/Loading';
import { GreyScreenWithTittleLayout } from '../../components/GreyScreenWithTittleLayout/GreyScreenWithTittleLayout';



const History = (): JSX.Element => {
    const [fromDate, setFromDate] = useState<string>("");
    const [toDate, setToDate] = useState<string>("");
    const [co2Data, setCo2Data] = useState<ApiResponse[]>();
    const [temperatureData, setTemperatureData] = useState<ApiResponse[]>();
    const [humidityData, setHumidityData] = useState<ApiResponse[]>();
    const [selectedDevice] = useStateWithLocalStorage('deviceSelected');
    const [timeScaleValue, setTimeScaleValue] = useState<string>();
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);



    const refetchData = () => {
        setCo2Data(undefined)
        setTemperatureData(undefined)
        setHumidityData(undefined)
        setIsLoading(true);
        const timeScaleValue = calculateTimeScaleValue(fromDate, toDate);
        setTimeScaleValue(timeScaleValue)
        const periodCo2 = ApiService.getPeriodData(fromDate, toDate, selectedDevice, timeScaleValue, ApiServiceDataProp.co2)
        const periodTemperature = ApiService.getPeriodData(fromDate, toDate, selectedDevice, timeScaleValue, ApiServiceDataProp.temperature)
        const periodHumidity = ApiService.getPeriodData(fromDate, toDate, selectedDevice, timeScaleValue, ApiServiceDataProp.humidity)
        Promise.all([periodCo2, periodTemperature, periodHumidity]).then(([co2, temperature, humidity]: ApiResponse[][]) => {
            setIsLoading(false);
            setCo2Data(co2)
            setTemperatureData(temperature)
            setHumidityData(humidity)
        }).catch(() => setIsError(true));

    }

    if (isError) {
        return <Redirect to='/unexpected-error?redirectTo=history' />
    }


    return (
        <GreyScreenWithTittleLayout tittle='Histórico'>
            <>
            <div className='row date-range-pickers-container pt-3 mt-3'>
                <div className="col px-5 my-3">
                    <DatePicker date={fromDate} onDateChanged={(value: string) => setFromDate(value)} text='Desde' />
                    <DatePicker date={toDate} onDateChanged={(value: string) => setToDate(value)} text='Hasta' />
                </div>
            </div>

            <div className='row'>
                <div className="col pl-5 my-3">
                    <button className='search-button btn' disabled={(!fromDate || !toDate) || (fromDate === toDate)} onClick={refetchData}>Buscar </button>
                </div>
            </div>
            {(fromDate === toDate && fromDate !== "") && <p className='row px-5 pt-5 invalid-dates'>Por favor, seleccione un periodo mayor entre fechas.</p>}

            {isLoading && <Loading color='loading-white' />}
            {temperatureData && humidityData && co2Data &&
                <>
                    <CardWithTextTab value='eCO²'>
                        <div className="row">
                            <ParentSize className='history-graph-elem'>
                                {({ width }) => <TimeWithValuesGraph
                                    endTimeValue={10}
                                    uom={'ppm'}
                                    timeFormat={timeScaleValue === '1h' ? 'H:mm' : 'DD-MM'}
                                    marginY={20}
                                    marginX={55}
                                    historicalValues={co2Data}
                                    bottomAxisNumTicks={5}
                                    width={width - 20}
                                    height={118}
                                />}
                            </ParentSize>
                        </div>
                    </CardWithTextTab>
                    <CardWithTextTab value='Temp.'>
                        <div className="row">
                            <ParentSize className='history-graph-elem'>
                                {({ width }) => <TimeWithValuesGraph
                                    endTimeValue={10}
                                    uom={'ºC'}
                                    timeFormat={timeScaleValue === '1h' ? 'H:mm' : 'DD-MM'}
                                    marginY={20}
                                    marginX={55}
                                    historicalValues={temperatureData}
                                    bottomAxisNumTicks={5}
                                    width={width - 20}
                                    height={118} />}
                            </ParentSize>
                        </div>
                    </CardWithTextTab>
                    <CardWithTextTab value='Humidity'>
                        <div className="row">
                            <ParentSize className='history-graph-elem'>
                                {({ width }) => <TimeWithValuesGraph
                                    endTimeValue={10}
                                    uom={'%'}
                                    timeFormat={timeScaleValue === '1h' ? 'H:mm' : 'DD-MM'}
                                    marginY={20}
                                    marginX={55}
                                    historicalValues={humidityData}
                                    bottomAxisNumTicks={5}
                                    width={width - 20}
                                    height={118} />}
                            </ParentSize>
                        </div>
                    </CardWithTextTab>
                </>
            }
            </>
        </GreyScreenWithTittleLayout>
    );
}

export default History