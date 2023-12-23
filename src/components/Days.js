import React from 'react'
import { useState } from 'react';
import { useWeather } from '../contex/WeatherContex'

const Days = () => {

    const { data} = useWeather();
    const current = new Date()

    const values = {
        dayone: { min:[],max:[]},
        daytwo: { min:[],max:[]},
        daythree: { min:[],max:[]},
        dayfour: { min:[],max:[]},
        dayfive: { min:[],max:[]},
    }


    const days = {
        weekone: current.setDate(current.getDate() + 1),
        weektwo: current.setDate(current.getDate() + 1),
        weekthree: current.setDate(current.getDate() + 1),
        weekfour: current.setDate(current.getDate() + 1),
        weekfive: current.setDate(current.getDate() + 1)
    }



    for (let i = 0; i <= 39; i++) {
        if (new Date(data?.list?.[i].dt_txt).getDate() === new Date(days.weekone).getDate()) {
            const temp_max = data?.list?.[i].main.temp_max
            const temp_min = data?.list?.[i].main.temp_min
            values.dayone.max.push(temp_max)
            values.dayone.min.push(temp_min)
        }
        if (new Date(data?.list?.[i].dt_txt).getDate() === new Date(days.weektwo).getDate()) {
            const temp_max = data?.list?.[i].main.temp_max
            const temp_min = data?.list?.[i].main.temp_min
            values.daytwo.max.push(temp_max)
            values.daytwo.min.push(temp_min)
        }
        if (new Date(data?.list?.[i].dt_txt).getDate() === new Date(days.weekthree).getDate()){
            const temp_max = data?.list?.[i].main.temp_max
            const temp_min = data?.list?.[i].main.temp_min
            values.daythree.max.push(temp_max)
            values.daythree.min.push(temp_min)
        }
        if (new Date(data?.list?.[i].dt_txt).getDate() === new Date(days.weekfour).getDate()){
            const temp_max = data?.list?.[i].main.temp_max
            const temp_min = data?.list?.[i].main.temp_min
            values.dayfour.max.push(temp_max)
            values.dayfour.min.push(temp_min)

        }
        if (new Date(data?.list?.[i].dt_txt).getDate() === new Date(days.weekfive).getDate()){
            const temp_max = data?.list?.[i].main.temp_max
            const temp_min = data?.list?.[i].main.temp_min
            values.dayfive.max.push(temp_max)
            values.dayfive.min.push(temp_min)
        }
    }

    const getDayName= (date = new Date(), locale = 'tr-TR')=> {
        return date.toLocaleDateString(locale, {weekday: 'short'});
      }
     
      Array.prototype.max = function() {
        return Math.max.apply(null, this);
      };
      
      Array.prototype.min = function() {
        return Math.min.apply(null, this);
      };
      

    console.log(values)
    console.log(data)

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Sıcaklık</td>
                        <td>{getDayName(new Date(days.weekone))}</td>
                        <td>{getDayName(new Date(days.weektwo))}</td>
                        <td>{getDayName(new Date(days.weekthree))}</td>
                        <td>{getDayName(new Date(days.weekfour))}</td>
                        <td>{getDayName(new Date(days.weekfive))}</td>
                        
                    </tr>
                    <tr>
                        <td>Maks</td>
                        <td>{values.dayone.max.max().toFixed(1)}°</td>
                        <td>{values.daytwo.max.max().toFixed(1)}°</td>
                        <td>{values.daythree.max.max().toFixed(1)}°</td>
                        <td>{values.dayfour.max.max().toFixed(1)}°</td>
                        <td>{values.dayfive.max.max().toFixed(1)}°</td>
                    </tr>
                    <tr>
                        <td>Min</td>
                        <td>{values.dayone.min.min().toFixed(1)}°</td>
                        <td>{values.daytwo.min.min().toFixed(1)}°</td>
                        <td>{values.daythree.min.min().toFixed(1)}°</td>
                        <td>{values.dayfour.min.min().toFixed(1)}°</td>
                        <td>{values.dayfive.min.min().toFixed(1)}°</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Days