import React from 'react'
import style from './contenido.module.css'
import img from '../../images/img.jpg'
import Audio from '../../component/Audio/Audio'
import funky from '../../media/Funky.mp3'
import electro from '../../media/electro.mp3'
import instrumental from '../../media/instrumental4.mp3'
import silverHawks from '../../media/Silverhawks.mp3'
import yoLosConozco from '../../media/Yolosconozco.mp3'
import melodiaFrenetica from '../../media/MelodiaFrenetica.mp3'
import ContenidoCard from '../../component/ContenidoCard/ContenidoCard'
import img2 from '../../images/interescompuestobs4.gif'
import img3 from '../../images/app_enfoque.gif'
import sliderImg from '../../images/slider.png'

const Contenido = () => {
  return (
    <div className = {style.root}>
      <ContenidoCard imgSrc={img2} href="https://profilelearn.github.io/interescompuestobs4/" title="Calculadora de intereses compuestos" />
      <ContenidoCard imgSrc={img3} href="https://profilelearn.github.io/app_enfoque/" title="MindGame" />
      <ContenidoCard imgSrc={sliderImg} href="https://profilelearn.github.io/portrait-4/" title="Portaretratos Digital" />

      <Audio mp3={silverHawks} image={img} title="Silverhawks" subtitle="Hernan Porfirio" description="ejecutado, grabado y mezclado" author="Hernan Porfirio" age="2012" />
      <Audio mp3={yoLosConozco} image={img} title="Yo los conozco" subtitle="Salma" description="grabado y mezclado" author="Hernán Porfirio" age="2017" />
      <Audio mp3={funky} image={img} title="Funky" subtitle="Hernan Porfirio" description="Compuesto, grabado y mezclado" author="Hernan Porfirio" age="2016" />
      <Audio mp3={electro} image={img} title="Electro" subtitle="Hernan Porfirio" description="Compuesto, ejecutado, grabado y mezclado" author="Hernan Porfirio" age="2016" />
      <Audio mp3={melodiaFrenetica} image={img} title="Melodía Frenética" subtitle="Hernan Porfirio" description="compuesto, ejecutado, grabado y mezclado" author="Hernan Porfirio" age="2012" />
      <Audio mp3={instrumental} image={img} title="Instrumental" subtitle="Hernan Porfirio" description="Compuesto, ejecutado, grabado y mezclado" author="Hernan Porfirio" age="2016" />

    </div>
  )
}

export default Contenido
