import React from 'react';
import { handleResponse } from './getApi';
import axios from "axios";
import { oneCall } from './weather.services';
import  create  from 'apisauce';
import {initialState} from '../context/reducers/weatherReducer';

jest.mock('axios');

describe('handle response from API', () => {
    test('handle data ', () => {
        const response = handleResponse({ ok: true, status: 200 });
        expect(response).toBeTruthy();
    })
    test('handle data crashing', () => {
        const response = handleResponse({ ok: false, status: 404 });
        expect(response.ok).toBeUndefined;
    })
})

describe('call data to API', () => {
    test('call data success', async () => {
        axios.get.mockResolvedValue({initialState})
        await expect(oneCall({lat:10.8231, lon:106.6297})).toBeTruthy();

        expect(create.get).toHaveBeenCalledWith(
            `https://api.openweathermap.org/data/2.5/weather?lat=10.8231&lon=106.6297&appid=31619d3e6582bb3a1e0de7ea7f6081ab&units=metric`
        );
        // expect(title).toEqual('My First Album');

    })

})