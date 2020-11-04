import axios from 'axios';
import { setSourceMapRange } from 'typescript';
// This import is only to check the app while we wait for the api work.
import historicalValues from '../components/TimeWithValuesGraph/HistoricalValues';
import { config } from '../config';
import { ApiResponse } from '../types/api';

export class ApiService {
    static user: string;
    static async makeGetRequest(endpoint: string, user: string, fromDate?: number, toDate?: number): Promise<ApiResponse[]> {
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

    static setUser(name:any){
        this.user = name;
    }

    static async getCo2Data(fromDate: number, toDate: number): Promise<ApiResponse[]> {
        const fromDateTs = new Date (fromDate).getTime();
        const toDateTs = new Date (toDate).getTime();
        //return ApiService.makeGetRequest('/co2', this.user, fromDateTs, toDateTs);
        return Promise.resolve(historicalValues);
    }
    static async getTemperatureData(fromDate: number, toDate: number): Promise<ApiResponse[]> {
        const fromDateTs = new Date (fromDate).getTime();
        const toDateTs = new Date (toDate).getTime();
        //return ApiService.makeGetRequest('/temperature', this.user, fromDateTs, toDateTs);
        return Promise.resolve(historicalValues);
    }
    static async getHumidityData(fromDate: number, toDate: number): Promise<ApiResponse[]> {
        const fromDateTs = new Date (fromDate).getTime();
        const toDateTs = new Date (toDate).getTime();
        //return ApiService.makeGetRequest('/humidity', this.user, fromDateTs, toDateTs);
        return Promise.resolve(historicalValues);
    }

    static async getUsersList(): Promise<Array<string>> {
        //return ApiService.makeGetRequest('/users', ApiService.user);
        return Promise.resolve(['Paco', 'Pepe', 'Pili']);
    }

    static async getCurrentCo2(device: string): Promise<ApiResponse> {
        //return ApiService.makeGetRequest('/current/co2');
        return Promise.resolve({value: 29, time: "1587726000000"});
    }
    static async getCurrentTemperature(device: string): Promise<ApiResponse> {
        //return ApiService.makeGetRequest('/current/temperature');
        return Promise.resolve({value: 22, time: "1587726000000"});
    }
    static async getCurrentHumidity(device: string): Promise<ApiResponse> {
        //return ApiService.makeGetRequest('/current/humidity');
        return Promise.resolve({value: 85, time: "1587726000000"});
    }
    
}