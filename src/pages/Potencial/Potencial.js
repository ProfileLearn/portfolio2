import React from 'react'
import PotencialCard from '../../component/PotencialCard/PotencialCard'
import style from './potencial.module.css'

const Potencial = (props) => {
  return (
    <div>
      <h1 className={style.h1}>En el ambito laboral y gracias a potenciales adquiridos soy:</h1>

      <PotencialCard info={props.info}/>
    </div>
  )
}

export default Potencial
