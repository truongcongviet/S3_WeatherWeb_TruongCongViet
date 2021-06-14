import { api, handleResponse } from './getApi';


export const oneCall = ({lat, lon}) => {
    return api.get(`/onecall`, {lat, lon, units:'metric', appid:'31619d3e6582bb3a1e0de7ea7f6081ab'}).then(handleResponse);
}

const weatherServices = {
    oneCall
};

export default weatherServices;