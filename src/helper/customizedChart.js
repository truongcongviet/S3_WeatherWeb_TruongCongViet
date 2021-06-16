import MoonIcon from "../components/WeatherIcon/moonIcon";
import SunIcon from "../components/WeatherIcon/sunIcon";
import './style.scss';

export const CustomizeActiveIcon = (props) => {
  const { cx, cy, payload } = props;
  if (payload.hours >= 6 && payload.hours <= 18) {
    return <SunIcon cx={cx} cy={cy} />;
  }
  return <MoonIcon cx={cx} cy={cy+15} />;


};

export const CustomizedMarker = ({ active, payload }) => {
  console.log('payload', payload);
  if (!active || !payload.length) return null;
  return (
    <div className="customizedMarker">
      <p className="marker"><span>Hours :</span>{`${payload[0]?.payload?.hour}`}</p>
      <p className="marker"><span>Temp :</span>{`${payload[0].payload?.temp}°C`}</p>
      <p className="marker"><span>Tide :</span>{`${payload[0].payload.tide}m`}</p>
    </div>
  );
};
