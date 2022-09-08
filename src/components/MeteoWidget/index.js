import PropTypes from 'prop-types';
import axios from 'axios';
import './MeteoWidget.scss';
import { useEffect, useState } from 'react';

function MeteoWidget({ code, city }) {

  const [temperature, setTemperature] = useState(null);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${code},fr&appid=${API_KEY}&units=metric`)
      .then((response) => {
        console.log(response.data);
        
        setTemperature(Math.round(response.data.main.temp));
        setIcon(response.data.weather[0].icon);
      });
  }, []);

  console.log("Envirronement : ", process.env.NODE_ENV);

  return (
    <div className="meteo">
      <div className="meteo-city">{city}</div>
      <div className="meteo-code">{code}</div>
      <div className="meteo-temperature">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        {temperature}°
      </div>
    </div>
  );
}

MeteoWidget.propTypes = {
  city: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
}

export default MeteoWidget;