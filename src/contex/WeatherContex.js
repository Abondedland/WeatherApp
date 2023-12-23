import {createContext, useEffect, useState, useContext} from 'react'
import React from 'react'

const WeatherContex = createContext();

export const WeatherProvider= ({children})=>{

  const API={
    base:'https://api.openweathermap.org/data/2.5/weather?',
    keyone:'moPT5JdGp4h6KAcAYm1WdAPwDRJUKmVw',
    keytwo:'2f3fbf9859b39eebaae005a94dca75ae',

  }


  const [search,setSearch] = useState({city:'İstanbul', location:''});
  const [cities, setCities] = useState({})
  const [error, setError]=useState(null) 
  const [state, setState]= useState(true)
  const [data, setData]= useState({})

  
    const fetchItems= async()=>{
      try{
        const response = await fetch(`${API.base}q=${search.city}&appid=${API.keytwo}&units=metric&lang=tr&details=true`);
        if (!response.ok) throw new Error('Hatalı şehir ismi. Tekrar deneyiniz')
        const items= await response.json();
        setCities(items)
        setError(null)
        getDatafor7days(items.coord.lat,items.coord.lon )
      }catch(err){
        setError(err.message)
      }
    }

    useEffect(()=>{
      const interval= setTimeout(()=>{
        setState(!state)
      }, 120000)
      return ()=>{
        clearTimeout(interval)
      }
    },[state])

    useEffect(()=>{
      fetchItems()
    }, [state,search])

 
  
  const getDatafor7days = async (lat, lon) => {
      try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API.keytwo}&units=metric&lang={tr}`);
        if (!response.ok) throw new Error('Şehir bilgisi alınamadı Lütfen tekrar deneyiniz')
        const data = await response.json();
        setData(data)
        
      } catch (err) {
        setError(err.message);
      }
    };




  const values= {data,cities,search,setSearch,error}


  return <WeatherContex.Provider value={values}>{children}</WeatherContex.Provider>

  }


export const useWeather=()=>useContext(WeatherContex);
