import React, { useState, useEffect } from 'react';
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
import classNames from 'classnames';

const History = (): JSX.Element => {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [display, setDisplay] = useState(false);
    const [co2Data, setCo2Data] = useState<ApiResponse[]>([{ time: "2020-04-24T00:00:00.000Z", value: 5 }]);
    const [temperatureData, setTemperatureData] = useState<ApiResponse[]>([{ time: "2020-04-24T00:00:00.000Z", value: 5 }]);
    const [humidityData, setHumidityData] = useState<ApiResponse[]>([{ time: "2020-04-24T00:00:00.000Z", value: 5 }]);

    const handleSearchButtonClick = () => {
        ApiService.getCo2Data(fromDate, toDate).then((apiResponse: ApiResponse[]) => setCo2Data(apiResponse))
        ApiService.getTemperatureData(fromDate, toDate).then((apiResponse: ApiResponse[]) => setTemperatureData(apiResponse))
        ApiService.getHumidityData(fromDate, toDate).then((apiResponse: ApiResponse[]) => setHumidityData(apiResponse))
        setDisplay(true);
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
                    <button className='search-button btn' disabled={fromDate && toDate ? false: true} onClick={handleSearchButtonClick}>Buscar </button>
                </div>
            </div>
            <div className={'d-none' + classNames({'d-block': display})}>
                <CardWithTextTab value='eCO²'>
                    <div className="row">
                        <ParentSize className='history-graph-elem'>
                            {({ width }) => <TimeWithValuesGraph endTimeValue={10} uom={'ppm'} timeFormat={'H:mm'} marginY={20} marginX={50} historicalValues={co2Data} width={width - 20} height={118} />}
                        </ParentSize>
                    </div>
                </CardWithTextTab>
            </div>
            <div className={'d-none' + classNames({'d-block': display})}>
                <CardWithTextTab value='Temp.'>
                    <div className="row">
                        <ParentSize className='history-graph-elem'>
                            {({ width }) => <TimeWithValuesGraph endTimeValue={10} uom={'ºC'} timeFormat={'H:mm'} marginY={20} marginX={50} historicalValues={temperatureData} width={width - 20} height={118} />}
                        </ParentSize>
                    </div>
                </CardWithTextTab>
            </div>
            <div className={'d-none' + classNames({'d-block': display})}>
                <CardWithTextTab value='Humidity'>
                    <div className="row">
                        <ParentSize className='history-graph-elem'>
                            {({ width }) => <TimeWithValuesGraph endTimeValue={10} uom={'%'} timeFormat={'H:mm'} marginY={20} marginX={50} historicalValues={humidityData} width={width - 20} height={118} />}
                        </ParentSize>
                    </div>
                </CardWithTextTab>
            </div>
        </div>
    );
}

export default History