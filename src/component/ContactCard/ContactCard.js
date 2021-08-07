import React from 'react'
import style from './contactcard.module.css'


const ContactCard = (props) => {
  return (
    <div className={style.root}>
      <h1 className={style.title}>{props.title}</h1>
      <img className={style.img} src={props.image} alt="img" />
    </div>
  )
}

export default ContactCard
