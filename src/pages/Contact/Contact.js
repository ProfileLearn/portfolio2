import React from 'react'
import ContactCard from '../../component/ContactCard/ContactCard'
import wpp from '../../images/whatsapp.png'
import email from '../../images/email.png'
import git from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import style from './contact.module.css'


const Contact = () => {
  return (
    <div className={style.root}>
      <ContactCard image={wpp} title="Whatsapp" />
      <ContactCard image={email} title="Email" />
      <ContactCard image={git} title="Github" />
      <ContactCard image={linkedin} title="Linkedin" />

    </div>
  )
}

export default Contact
