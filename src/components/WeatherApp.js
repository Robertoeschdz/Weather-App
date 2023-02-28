import { useEffect, useState } from "react"
import WeatherForm from "./WeatherForm"
import WeatherMainInfo from "./WeatherMainInfo"
import Loading from "./Loading"

import styles from './WeatherApp.module.css'

export default function WeatherApp() {

  const [weather, setWeather] = useState([])
  const [load, setLoad] = useState(false)

  useEffect(()=>{
    loadInfo()
  },[])

  useEffect(()=>{
    document.title = `Weather | ${load ? weather.location.name : ''}`
  }, [weather,load])

  const loadInfo = async (city = "london")=>{
      try {
          setLoad(false)
          const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`)
          const json = await request.json()
          setWeather(json)
          setLoad(true)
      }catch(err){
        console.error(err)
      }
  }

  const handleChangeCity = (city)=>{
    setWeather(null)
    loadInfo(city)
  }

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity}/>
      
      {
        load ? <WeatherMainInfo weather={weather}/>
        : <Loading/>
      }
    </div>
  )
}
