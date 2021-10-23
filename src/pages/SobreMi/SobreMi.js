import React from 'react'
import style from './sobremi.module.css'


const SobreMi = (props) => {

  return (

    <div className={style.root}>
      {props.info.presentacion.map(e => {
        return (<>
          {e}
          <br />
        </>)
      })}
      <br />
    </div>


  )
}

export default SobreMi
