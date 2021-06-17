import { create } from 'apisauce';
import { config } from '../constants';

//get API
export const api = create({
    baseURL: config.apiUrl,
    headers: { Accept: 'application/json' },
    timeout: 30000
})

export const handleResponse = (response) => {
        if (response.status === 200) {
        return Promise.resolve(response);
    } else {
        const error = response.problem;
        return Promise.reject(error);
    }
}