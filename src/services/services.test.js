import { handleResponse } from './getApi';
import axios from "axios";
import { oneCall } from './weather.services';
import { fakeData } from './fakeData';
import { initialState } from '../context/reducers/weatherReducer';

jest.mock('axios');

describe('handle response from API', () => {
    test('handle response status is 200 or status is 404 should be return response', async () => {
        var res = { status: 200 };
        var result = await handleResponse(res);
        expect(result).toBe(res);
    })
    test('handle response status other(not 200 or 404) should be return problem', async () => {
        var res = { status: 401, problem: 'Unauthorize' };
        try {
            await handleResponse(res);;
            throw 'Invalid';
        } catch (error) {
            expect(error).toBe(res.problem);
        }

        var res = { status: 400, problem: 'Bad Request' };
        try {
            await handleResponse(res);;
            throw 'Invalid';
        } catch (error) {
            expect(error).toBe(res.problem);
        }

        var res = { status: 403, problem: 'Forbidden' };
        try {
            await handleResponse(res);;
            throw 'Invalid';
        } catch (error) {
            expect(error).toBe(res.problem);
        }

        var res = { status: 500, problem: 'Internal Server Error' };
        try {
            await handleResponse(res);;
            throw 'Invalid';
        } catch (error) {
            expect(error).toBe(res.problem);
        }
    })
})

describe('call data to API', () => {
    test('call data success', async () => {
        axios.get.mockResolvedValue({ initialState })
        await expect(oneCall({ lat: 10.8231, lon: 106.6297 })).toBeTruthy();

    })
    test("fetch API test successfull", async () => {
        axios.get.mockResolvedValue({ fakeData });

        const res = await oneCall({ lat: 10.8231, lon: 106.6297 });
        expect(res.ok).toEqual(true);
    })

})