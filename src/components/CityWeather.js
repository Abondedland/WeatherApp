import React from 'react'
import '../App.css';
import { useWeather } from '../contex/WeatherContex'
import Days from './Days';


const CityWeather = () => {

    const { data, cities } = useWeather();
    console.log(data.cities)
    return (
        <div>
            <div className="addedcard">

                <h2><b>{cities.name}</b></h2>
                <h3 className="description">{cities?.weather?.[0].description.charAt(0).toUpperCase() + cities?.weather?.[0].description.slice(1)}<span></span></h3>
                <h3><span>Rüzgar {cities?.wind?.speed}m/s Nem %{cities?.main?.humidity}  Görüş {(cities.visibility/1000).toFixed(1)} km</span></h3>
                <h4> </h4>
                <div className="celcius">
                    <h1>{cities?.main?.temp?.toFixed(1)}°</h1>
                    <h3>Hissedilen sıcaklık:{cities?.main?.feels_like.toFixed(1)}°</h3>
                </div>
                <div className="addedsky" style={ {backgroundImage: `url(https://openweathermap.org/img/wn/${cities?.weather?.[0]?.icon}@2x.png)`}}>
                </div>
                <Days/>
            </div>
        </div>
    )
}

export default CityWeather