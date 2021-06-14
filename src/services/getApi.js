import { create } from 'apisauce';
import { config } from '../constants';

//get API
export const api = create({
    baseURL: config.apiUrl,
    headers: { Accept: 'application/json' },
    timeout: 30000
})

export const handleResponse = (response) => {

    console.log('reponse',  response);
    if (response.ok || response.status === 200) {
        return response;
    } else {
        if (response.status === 404) {
            return Promise.reject(response.status);
        }
        const error = response.problem;
        return Promise.reject(error);
    }
}