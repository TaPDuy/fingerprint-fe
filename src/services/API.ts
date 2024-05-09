import {defer, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	timeout: 20000
});

const get = <T>(url: string, config?: AxiosRequestConfig): Observable<T> => {
    return defer(() => axiosInstance.get<T>(url, config))
        .pipe(map(result => result.data));
};

const post = <T>(url: string, body: object, config?: AxiosRequestConfig): Observable<T | void> => {
    return defer(() => axiosInstance.post<T>(url, body, config))
        .pipe(map(result => result.data));
};

const put = <T>(url: string, body: object, config?: AxiosRequestConfig): Observable<T | void> => {
    return defer(() =>axiosInstance.put<T>(url, body, config))
        .pipe(map(result => result.data));
};

const patch = <T>(url: string, body: object, config?: AxiosRequestConfig): Observable<T | void> => {
    return defer(() => axiosInstance.patch<T>(url, body, config))
        .pipe(map(result => result.data));
};

const deleteR = <T>(url: string, config?: AxiosRequestConfig): Observable<T | void> => {
    return defer(() => (axiosInstance.delete(url, config)))
        .pipe(map(result => result.data)
    );
};

const API =  {
	get, post, put, patch, deleteR
};

export default API;