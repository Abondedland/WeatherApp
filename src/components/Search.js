import React from 'react'
import { useState } from 'react'
import {useWeather} from '../contex/WeatherContex'


const Search = () => {

    const { search, setSearch, error}= useWeather();
    const [ initialValue, setInitialValue]=useState({city:'', location:'' })
    const [warning, setWarning]=useState(false);


    const onChangeValue =(e)=>{
        setInitialValue({...initialValue, [e.target.name]:[e.target.value]})
    }

    const submitValue=(e)=>{
        e.preventDefault();
        if (!initialValue) return; 
        setSearch(initialValue)
        setInitialValue({city:'', location:'' });
        setWarning(!warning);
    }



    return (
        <div className="weather-input">
            <form onSubmit={submitValue}>
                <h3>Enter a City Name</h3>
                <input
                    className="city-input"
                    name='city'
                    type="text"
                    placeholder="E.g., İstanbul, İzmir"
                    value={initialValue.city}
                    onChange={onChangeValue}
                />
                {
                    warning ?
                    <div style={{color: "red"}}>{error}</div>
                    :
                    setWarning(!warning)
                    
                }
                <button className="search-btn">Search</button>
                <div className="separator"></div>
                <button className="location-btn">Use Current Location</button>
            </form>
        </div>
    )
}

export default Search