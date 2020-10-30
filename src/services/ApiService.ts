import axios from 'axios';
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
        return ApiService.makeGetRequest('/co2', fromDate, toDate);
    }
    static async getCurrentCo2(): Promise<ApiResponse> {
        //return ApiService.makeGetRequest('/current/co2');
        return Promise.resolve({value: 65, time: `82827277663`});
    }
}