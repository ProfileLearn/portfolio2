import React from 'react'
import ContactCard from '../../component/ContactCard/ContactCard'
import wpp from '../../images/whatsapp.png'
import email from '../../images/email.png'
import git from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import style from './contact.module.css'


const Contact = (props) => {
  return (
    <div className={style.root}>
      <a href={props.wpp} target="_blank" rel="noreferrer">
        <ContactCard image={wpp} title="Whatsapp" />

      </a>
      <a href={props.mail} target="_blank" rel="noreferrer" >
        <ContactCard image={email} title="Email" />

      </a>
      <a href={props.git} target="_blank" rel="noreferrer">
        <ContactCard image={git} title="Github" />

      </a>
      <a href={props.lin} target="_blank" rel="noreferrer" >
        <ContactCard image={linkedin} title="Linkedin" />

      </a>

    </div>
  )
}

export default Contact
