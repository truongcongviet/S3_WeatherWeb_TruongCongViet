
import WeatherChart from "../components/WeatherChart/WeatherChart";
import WeatherInfo from "../components/WeatherInfo/WeatherInfo";
import { WeatherProvider } from "../context/CreateContext";

const HomeScreen = () => {
  return (
      <WeatherProvider>
          <WeatherInfo />
          <WeatherChart />
      </WeatherProvider>
  )
}

export default HomeScreen;