import axios, { AxiosError, AxiosResponse } from 'axios';
import path from 'path';

export class Client {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    isAxiosError(response: AxiosResponse | AxiosError): response is AxiosError {
        return !!(response as AxiosError).isAxiosError;
    }

    async post<T>(url: string, body: T): Promise<AxiosResponse | AxiosError> {
        try {
            const response = await axios.post(path.join(this.baseUrl, url), body);
            return response;
        }
        catch (error: any) {
            return error as AxiosError;
        }
    }
}
