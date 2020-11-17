import axios from 'axios';
import { config } from '../../config';
import { ApiResponse } from '../../types/api';
import moment from 'moment';
import { ApiServiceDataProp } from './ApiServiceDataProp';

export class ApiService {
    static user: string;
    static async makeGetRequest(endpoint: string, user?: string, fromDate?: number, toDate?: number, timeScaleValue?: string, dataValue?: string) {
        return axios({
            method: 'get',
            url: config.apiUrl + endpoint,
            
            params: {
                fromDate: fromDate,
                toDate: toDate,
                user: user,
                aggregateTimeScale: timeScaleValue,
                dataToGet: dataValue
            },
        }).then((response) => {
            return response.data;
        })
    }

    static async getPeriodData(fromDate: string, toDate: string, selectedDevice: string, timeScaleValue: string, dataValue: ApiServiceDataProp): Promise<ApiResponse[]> {
        const fromDateTs = Math.round(moment(fromDate).valueOf()/1000);
        const toDateTs = Math.round(moment(toDate).valueOf()/1000);
        return ApiService.makeGetRequest('data/period', selectedDevice, fromDateTs, toDateTs, timeScaleValue, dataValue);
        //return Promise.resolve(historicalValues);
    }
    static async getUsersList(): Promise<Array<string>> {
        return ApiService.makeGetRequest('users');
        // return Promise.resolve(['@erguro1973', 'Andreas_IBZ', '@Andreas_IBZ']);
    }

    static async getCurrentData(selectedDevice: string, dataValue: string): Promise<ApiResponse[]> {
        return ApiService.makeGetRequest('data/current', selectedDevice, undefined, undefined, undefined, dataValue);
        //return Promise.resolve({value: 29, time: "1587726000000"});
        
    }
    
}