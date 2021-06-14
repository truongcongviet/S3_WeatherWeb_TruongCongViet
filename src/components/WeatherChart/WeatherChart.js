import { useEffect, useState } from "react";
import { XAxis, Tooltip, AreaChart, Area, ResponsiveContainer, YAxis } from "recharts";
import { CustomizedMarker, CustomizeActiveIcon, } from "../../helper/customizedChart";
import './style.scss';
import { useAppContext } from "../../context/CreateContext";

const WeatherChart = () => {
  const [data, dispatch] = useAppContext();

  return (

    <div className="weatherChart">

      <div className="noteText" data-testid ="showInfo">
        <span className="tide-text">Tide</span>
        <span className="dot">•</span>
        <span>Sunrise and Sunset</span>
        <div className="date">{data.weather && data.weather.date}</div>
      </div>

      {data.virtualData ? (
        <AreaChart
          data={data.virtualData}
          margin={{
            top: 0,
            left: 0,
            bottom: 0,
          }}
          width={2000}
          height={280}
        >
          <Tooltip content={<CustomizedMarker />} wrapperStyle={{ zIndex: 2 }} />

          <Area
            type="monotone"
            dataKey="tide"
            fill="var(--stellblue)"
            activeDot={false}
          />

          <Area
            type="monotone"
            dataKey="temp"
            stroke="var(--orange)"
            activeDot={<CustomizeActiveIcon />}
            fill="none"
            yAxisId="temp"

          />
          <YAxis yAxisId="temp" width={0}
            ticks={[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]}
          />
          <YAxis width={0}
            ticks={[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]}
          />
          <XAxis dataKey="hour" />
        </AreaChart>
      ) : (
        "No data chart"

      )}
    </div>
  )
}

export default WeatherChart;