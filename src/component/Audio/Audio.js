import React from 'react'
import style from './audio.module.css'

const Audio = (props) => {
  return (
    <div className={style.root}>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
      <p>{props.description} por:</p>
      <p className={style.small}>{props.author}</p>
      <p className={style.small}>Año: {props.age}</p>
      <audio controls>
        <source src={props.mp3} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default Audio
