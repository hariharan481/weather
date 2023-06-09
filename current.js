import React from "react";
import "./Current.css";

const Current = ({ current, city }) => {
  return (
    <div className="current">
      <b>{city} weather</b>
      <hr />
      <br />
      <b>Current weather</b>
      <div className="currentbody">
        <img src={current.condition.icon} />
        <span>{current.condition.text}</span>
        <span>
          <b>Temp:</b>
          {current.temp_c}deg
        </span>
        <span>
          <b>Feels like:</b>
          {current.feelslike_c}deg
        </span>
        <span>
          <b>wind speed:</b>
          {current.wind_kph}deg
        </span>
      </div>
    </div>
  );
};

export default Current;
