import { useState } from "react"

import styles from './weatherForm.module.css'

export default function WeatherForm({onChangeCity}) {

    const [city, setCity] = useState('')

    function onChange(e){
        const value = e.target.value

        if(value !== ''){
            setCity(value)
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        onChangeCity(city)
    }
  
    return (
    <div>
        <form onSubmit={handleSubmit} className={styles.container}>
            <input type='text' onChange={onChange} className={styles.input} placeholder='De donde quieres saber el clima'/>
        </form>
    </div>
  )
}
