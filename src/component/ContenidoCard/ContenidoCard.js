import React from 'react'
import style from './contenidocard.module.css'


const ContenidoCard = (props) => {
  return (
    <div className={style.root}>
      <h1>{props.title}</h1>
      <a href={props.href} className={style.anchor} target="_blank" rel="noreferrer">
        <img className={style.img} src={props.imgSrc} alt="img" />
      </a>
    </div>
  )
}

export default ContenidoCard
