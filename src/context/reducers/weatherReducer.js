import { formatTime } from '../../helper/functional';
import { GET_DATA_WEATHER } from '../constant/actionGetDataWeather'

export const initialState = {
    cities: [
        {
            nameCity: "Hồ Chí Minh",
            lat: 10.8231,
            lon: 106.6297
        },

        {
            nameCity: "Singapore",
            lat: 1.3521,
            lon: 103.8198
        },
        
        {
            nameCity: "Jerusalem",
            lat: 31.7683,
            lon: 35.2137
        },

        {
            nameCity: "California",
            lat: 36.7783,
            lon: 119.4179
        },

        {
            nameCity: "AlasKa",
            lat: 64.2008,
            lon: 149.4937
        },
    ],

    virtualData: [
        { tide: 2 },
        { tide: 2.8 },
        { tide: 2.5 },
        { tide: 2 },
        { tide: 1.5 },
        { tide: 1 },
        { tide: 0.7 },
        { tide: 1 },
        { tide: 1.5 },
        { tide: 3 },
        { tide: 5 },
        { tide: 4.1 },
        { tide: 2.2 },
        { tide: 2.8 },
        { tide: 2.5 },
        { tide: 2 },
        { tide: 1.5 },
        { tide: 0.8 },
        { tide: 0.1 },
        { tide: 1.2 },
        { tide: 2 },
        { tide: 2 },
        { tide: 2.5 },
        { tide: 3.1 },
        { tide: 3 },
        { tide: 4 },
        { tide: 3 },
        { tide: 2 },
        { tide: 1.5 },
        { tide: 1.2 },
        { tide: 0.7 },
        { tide: 1 },
        { tide: 1.5 },
        { tide: 2 },
        { tide: 2.5 },
        { tide: 2.8 },
        { tide: 2.9 },
        { tide: 2.8 },
        { tide: 2.5 },
        { tide: 2 },
        { tide: 1.5 },
        { tide: 1 },
        { tide: 0.7 },
        { tide: 1 },
        { tide: 1.5 },
        { tide: 2 },
        { tide: 2.5 },
        { tide: 2.8 },
    ],
}

export const weatherReducer = (state, action = {}) => {
    switch (action.type) {
        case GET_DATA_WEATHER:

            let virtualDataTemp = state.virtualData
            action.data.hourly.map((item, index) => {
                let virtualDataItem = { ...virtualDataTemp[index], ...item };

                virtualDataItem.time = new Date(item.dt * 1000);
                virtualDataItem.hour = formatTime(virtualDataItem.time);
                virtualDataItem.hours = virtualDataItem.time.getHours();
                virtualDataTemp[index] = virtualDataItem;
            });
            
            //format date
            action.data.date = new Date(action.data.current.dt * 1000);
            action.data.date = action.data.date.toString();
            action.data.date = action.data.date.slice(0, action.data.date.length - 35);

            return {
                ...state,
                weather: action.data,
                virtualData: virtualDataTemp,
                cities: initialState.cities
            }
        default:
            return state
    }
}