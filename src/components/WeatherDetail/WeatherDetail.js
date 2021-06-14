import { Fragment, useEffect } from "react";
import { useAppContext } from "../../context/CreateContext";
import "./style.scss";
const WeatherDetail = () => {
    const [{ weather }] = useAppContext();
    console.log('dataweather', weather);
    return (
        <div className="weatherDetail">
            <div className="cloudyInfo">
                <div className="cloud-icon p-2 mb-4">
                    {weather ?
                        <img src={`http://openweathermap.org/img/wn/${weather && weather.current.weather[0].icon}@2x.png`} alt='cloud-icon' />
                        : <i className="bi bi-cloud-minus"></i>}
                </div>
                <div className="weatherData p-2">
                    <div className="h2">{weather && weather.current.weather[0].main}</div>
                    <div className="d-flex h4 justify-content-between">
                        <div className=""><i className="bi bi-thermometer-half"></i> {weather && weather.current.temp} °C</div>
                        <div><i className="bi bi-droplet"></i> {weather && weather.current.humidity} %</div>
                    </div>
                </div>
            </div>
            <ul className="rainingInfo p-0">
                <li>
                    <h5>PSI</h5>
                    <div className="feel_like">{weather && weather.current.feels_like}</div>
                    <p>good</p>
                </li>
                <li>
                    <h5>RAIN</h5>
                    <div>{weather && weather.current.rain?weather.current.rain["1h"]:0}</div>
                    <p>mm</p>
                </li>
                <li>
                    <h5>DENGUE</h5>
                    <div className="dengue"></div>
                </li>
                <li>
                    <i className="bi bi-plus-circle h1 text-dark"></i>
                    <p className="text-dark font-weight-bold h4">add</p>
                </li>
            </ul>

        </div>
    )
}
export default WeatherDetail;