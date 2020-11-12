import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import { DatePicker } from '../../components/DatePicker/DatePicker';
import { TimeWithValuesGraph } from '../../components/TimeWithValuesGraph/TimeWithValuesGraph';
import { CardWithTextTab } from '../../components/CardWithTextTab/CardWithTextTab'
import './History.scss'
import { ApiService } from '../../services/ApiService';
import { ApiResponse } from '../../types/api';
import { useStateWithLocalStorage } from '../../hooks/useStateWithLocalStorage';
import { calculateTimeScaleValue } from '../../utils/calculateTimeScaleValue';


const History = (): JSX.Element => {
    const [fromDate, setFromDate] = useState<string>("");
    const [toDate, setToDate] = useState<string>("");
    const [co2Data, setCo2Data] = useState<ApiResponse[]>();
    const [temperatureData, setTemperatureData] = useState<ApiResponse[]>();
    const [humidityData, setHumidityData] = useState<ApiResponse[]>();
    const [selectedDevice] = useStateWithLocalStorage('deviceSelected');

    

    const refetchData = () => {
            const aggregateMinutes = calculateTimeScaleValue(fromDate, toDate);
            ApiService.getCo2Data(fromDate, toDate, selectedDevice, aggregateMinutes).then((apiResponse: ApiResponse[]) => setCo2Data(apiResponse));
            ApiService.getTemperatureData(fromDate, toDate, selectedDevice, aggregateMinutes).then((apiResponse: ApiResponse[]) => setTemperatureData(apiResponse));
            ApiService.getHumidityData(fromDate, toDate, selectedDevice, aggregateMinutes).then((apiResponse: ApiResponse[]) => setHumidityData(apiResponse));
    }

    return (
        <div className='container history-elem-container'>
            <div className='row'>
                <Link to='/' className='ml-4 mt-4 rounded-circle arrow-back-elem'><FontAwesomeIcon icon={faChevronLeft} size="lg" /></Link>
            </div>
            <div className='row'>
                <h1 className='text-center history-text-elem'>Histórico</h1>
            </div>
            <div className='row date-range-pickers-container pt-3 mt-3'>
                <div className="col mx-4 my-3">
                    <DatePicker date={fromDate} onDateChanged={(value: string) => setFromDate(value)} text='Desde' />
                    <DatePicker date={toDate} onDateChanged={(value: string) => setToDate(value)} text='Hasta' />
                </div>
            </div>
            <div className='row'>
                <div className="col pl-4 ml-3 my-3">
                    <button className='search-button btn' disabled={!fromDate || !toDate} onClick={refetchData}>Buscar </button>
                </div>
            </div>
            {temperatureData && humidityData && co2Data &&
                <>
                    <CardWithTextTab value='eCO²'>
                        <div className="row">
                            <ParentSize className='history-graph-elem'>
                                {({ width }) => <TimeWithValuesGraph 
                                endTimeValue={10} 
                                uom={'ppm'} 
                                timeFormat={'DD-MM'} 
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
                                timeFormat={'DD-MM'}
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
                                timeFormat={'DD-MM'} 
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
        </div>
    );
}

export default History