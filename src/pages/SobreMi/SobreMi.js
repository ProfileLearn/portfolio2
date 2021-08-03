import React from 'react'
import style from './sobremi.module.css'


const SobreMi = (props) => {

  return (

      <div className={style.root}>
        {props.info.presentacion}
      </div>


  )
}

export default SobreMi
