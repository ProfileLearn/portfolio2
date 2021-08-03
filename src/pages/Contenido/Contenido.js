import React from 'react'
import style from './contenido.module.css'
import img from '../../images/img.jpg'
import Audio from '../../component/Audio/Audio'
import funky from '../../media/Funky.mp3'
import electro from '../../media/electro.mp3'
import instrumental from '../../media/instrumental4.mp3'



const Contenido = () => {
  return (
    <div className = {style.root}>
      <Audio mp3={funky} image={img} title="Funky" subtitle="Hernan Porfirio" description="Compuesto, grabado y mezclado" author="Hernan Porfirio" age="2016" />
      <Audio mp3={electro} image={img} title="Electro" subtitle="Hernan Porfirio" description="Compuesto, grabado y mezclado" author="Hernan Porfirio" age="2016" />
      <Audio mp3={instrumental} image={img} title="Instrumental" subtitle="Hernan Porfirio" description="Compuesto, grabado y mezclado" author="Hernan Porfirio" age="2016" />
    </div>
  )
}

export default Contenido
