import axios from 'axios';
// This import is only to check the app while we wait for the api work.
import historicalValues from '../components/TimeWithValuesGraph/HistoricalValues';
import { config } from '../config';
import { ApiResponse } from '../types/api';
import moment from 'moment';

export class ApiService {
    static user: string;
    static async makeGetRequest(endpoint: string, user?: string, fromDate?: number, toDate?: number) {
        return axios({
            method: 'GET',
            url: config.apiUrl + endpoint,
            params: {
                fromDate: fromDate,
                toDate: toDate,
                user: user
            },
        }).then((response) => {
            return response.data;
        })  
    }

    static async getCo2Data(fromDate: any, toDate: any, selectedDevice: string): Promise<ApiResponse[]> {
        const fromDateTs = Math.round(moment(fromDate).valueOf()/1000);
        const toDateTs = Math.round(moment(toDate).valueOf()/1000);
        return ApiService.makeGetRequest('data/co2', selectedDevice, fromDateTs, toDateTs);
        //return Promise.resolve(historicalValues);
    }
    static async getTemperatureData(fromDate: number, toDate: number, selectedDevice: string): Promise<ApiResponse[]> {
        const fromDateTs = Math.round(moment(fromDate).valueOf()/1000);
        const toDateTs = Math.round(moment(toDate).valueOf()/1000);
        return ApiService.makeGetRequest('data/temperature', selectedDevice, fromDateTs, toDateTs);
        //return Promise.resolve(historicalValues);
    }
    static async getHumidityData(fromDate: number, toDate: number, selectedDevice: string): Promise<ApiResponse[]> {
        const fromDateTs = Math.round(moment(fromDate).valueOf()/1000);
        const toDateTs = Math.round(moment(toDate).valueOf()/1000);
        
        return ApiService.makeGetRequest('data/humidity', selectedDevice, fromDateTs, toDateTs);
        //return Promise.resolve(historicalValues);
    }

    static async getUsersList(): Promise<Array<string>> {
        //return ApiService.makeGetRequest('/users');
        return Promise.resolve(['@erguro1973', 'Andreas_IBZ']);
    }

    static async getCurrentCo2(selectedDevice: string): Promise<ApiResponse> {
        return ApiService.makeGetRequest('current/co2', selectedDevice);
        //return Promise.resolve({value: 29, time: "1587726000000"});
        
    }
    static async getCurrentTemperature(selectedDevice: string): Promise<ApiResponse> {
        return ApiService.makeGetRequest('current/temperature', selectedDevice);
        //return Promise.resolve({value: 22, time: "1587726000000"});
    }
    static async getCurrentHumidity(selectedDevice: string): Promise<ApiResponse> {
        return ApiService.makeGetRequest('current/humidity', selectedDevice);
        //return Promise.resolve({value: 85, time: "1587726000000"});
    }
    
}