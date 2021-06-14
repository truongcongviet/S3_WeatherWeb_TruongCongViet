import WeatherHeader from "../WeatherHeader/WeatherHeader";
import WeatherDetail from "../WeatherDetail/WeatherDetail";
import "./style.scss";
import weatherServices from "../../services/weather.services";
import { GET_DATA_WEATHER } from "../../context/constant/actionGetDataWeather";
import { useAppContext } from "../../context/CreateContext";
import { useEffect, useState } from "react";
const WeatherInfo = () => {
  const dispatch = useAppContext()[1]
  useEffect(() => {
    getCurrentLocation()
  }, [])

  //get curent location
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getData({
        lat: position.coords.latitude,
        lon: position.coords.longitude, 
      })
    }, error => {
      alert('Cannot get current location')
      console.log('get location error:', error)
    });
  }

  //get Weather API from location
  const getData = (location) => {
    weatherServices.oneCall({ lat: location.lat, lon: location.lon }).then(res => {
      dispatch({ type: GET_DATA_WEATHER, data: res.data });
    });
  }

  return (
    <div className="weatherInfo" role="weather-test">
      <WeatherHeader></WeatherHeader>
      <WeatherDetail></WeatherDetail>
    </div>
  )
}

export default WeatherInfo;