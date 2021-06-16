import { weatherReducer, initialState } from './weatherReducer';

describe('return state Data to WeatherChart', () => {
    test('update state Data', () => {
        //input
        const action = {
            type: "GET_DATA_WEATHER",
            data: {
                hourly: [{ dt: (new Date()).getTime() }],
                current: { dt: (new Date()).getTime() }
            }
        };
        const defaultState = initialState;
        const result = weatherReducer(defaultState, action);
        expect(result.weather).toBe(action.data);
        expect(result.weather.date1 != undefined).toBe(true);
        expect(result.virtualData[0].time != undefined).toBe(true);
        expect(result.virtualData).toBe(defaultState.virtualData);
        expect(result.cities).toBe(defaultState.cities);
    });

    test('update state Data', () => {
        //input
        const action = {
            type: "",
            data: {
                hourly: [{ dt: (new Date()).getTime() }],
                current: { dt: (new Date()).getTime() }
            }
        };
        const defaultState = initialState;
        const result = weatherReducer(defaultState, action);
        expect(result.virtualData).toBe(defaultState.virtualData);
        expect(result.cities).toBe(defaultState.cities);
    });

})
    