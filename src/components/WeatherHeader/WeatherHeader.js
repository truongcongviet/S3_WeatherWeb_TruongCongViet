import './style.scss';
import { useAppContext } from '../../context/CreateContext';
import weatherServices from '../../services/weather.services';
import { GET_DATA_WEATHER } from "../../context/constant/actionGetDataWeather";

const WeatherHeader = () => {
    const [{ cities }] = useAppContext();
    const dispatch = useAppContext()[1];

    //get data weather from select city 
    const handleChangeCity = (e) => {
        let idCity = parseInt(e.target.value);
        weatherServices.oneCall({ lat: cities[idCity].lat, lon: cities[idCity].lon }).then(res => {
            dispatch({ type: GET_DATA_WEATHER, data: res.data });
        });
    }
    return (
        <div className="weatherHeader" role="header">
            <div className="menu-icon">
                <i className="bi bi-list h1"></i>
            </div>
            <div className="get-location">
                <div>myENV</div>
                <select className="custom-select-cities" onClick={(e) => handleChangeCity(e)}>
                    {cities.map((city, index) => {
                        return <option className="city" value={index} key={index} >{city.nameCity}</option>
                    })
                    }
                </select>
            </div>
            <div className="bell-icon">
                <i className="bi bi-bell-fill h2"></i>
            </div>
        </div>
    )
}

export default WeatherHeader;