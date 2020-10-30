import axios from 'axios';
// This import is only to check the app while we wait for the api work.
import historicalValues from '../components/TimeWithValuesGraph/HistoricalValues';
import { config } from '../config';
import { ApiResponse } from '../types/api';

export class ApiService {
    static async makeGetRequest(endpoint: string, fromDate: string, toDate: string): Promise<ApiResponse[]> {
        return axios({
            method: 'GET',
            url: config.apiUrl + endpoint,
            params: {
                fromDate: fromDate,
                toDate: toDate
            },
        }).then((response) => {
            return response.data;
        })
    }
    static async getCo2Data(fromDate: string, toDate: string): Promise<ApiResponse[]> {
        //return ApiService.makeGetRequest('/co2', fromDate, toDate);
        return Promise.resolve(historicalValues);
    }
    static async getTemperatureData(fromDate: string, toDate: string): Promise<ApiResponse[]> {
        //return ApiService.makeGetRequest('/temperature');
        return Promise.resolve(historicalValues);
    }
    static async getHumidityData(fromDate: string, toDate: string): Promise<ApiResponse[]> {
        //return ApiService.makeGetRequest('/humidity');
        return Promise.resolve(historicalValues);
    }
    static async getCurrentCo2(): Promise<ApiResponse> {
        //return ApiService.makeGetRequest('/current/co2');
        return Promise.resolve({value: 65, time: `82827277663`});
    }
    static async getCurrentTemperature(): Promise<ApiResponse> {
        //return ApiService.makeGetRequest('/current/temperature');
        return Promise.resolve({value: 22, time: `82827277663`});
    }
    static async getCurrentHumidity(): Promise<ApiResponse> {
        //return ApiService.makeGetRequest('/current/humidity');
        return Promise.resolve({value: 85, time: `82827277663`});
    }
    
}