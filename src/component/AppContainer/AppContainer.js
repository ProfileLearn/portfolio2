import React from 'react';
import Display from '../Display/Display';
import Controls from '../Controls/Controls';
import styles from './appContainer.module.css'
import clic from '../../media/metronomo.mp3'

const words = ["ROJO", "VERDE", "AZUL", "AMARILLO", "NEGRO", "BLANCO"]
const colors = ["red", "green", "blue", "yellow", "black"];

export default class AppContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      play: false,
      palabra: "COMIENZA",
      color: "black",
      counter: 3,
      speed: 1000,
      fullscreen: false,
      clic: new Audio(clic)
    };
  }

  randomize = (words, colors) => {
    
    const word = Math.floor(Math.random() * words.length);
    const color = Math.floor(Math.random() * colors.length);
    this.setState({
      palabra: words[word],
      color: colors[color],
    })
  }

  handleClick = () => {
    this.setState({
      play: !this.state.play
    });
    this.timer(this.state.speed);
  }

  handleChange = (event) => {
    this.setState({
      speed: event.target.value
    })
  }

  toggleFullScreen = () => {
    const elem = document.getElementById("appContainer");
    if (!this.state.fullscreen) {
      this.setState({fullscreen: true})
      elem.requestFullscreen();

    } else {
      if (this.state.fullscreen) {
        this.setState({ fullscreen: false })
        document.exitFullscreen();

      }
    }
  }

  timer = (speed) => {
    
    const intervalo = setInterval(() => {
      
      if (this.state.play === false) {
        clearInterval(intervalo)
        this.setState({
          counter: 3,
          palabra: "COMIENZA",
          color: "black"
        })
      } else {
        if (this.state.counter < 4 && this.state.counter > 0) {
          this.setState({
            palabra: this.state.counter,
            color: "black",
            counter: this.state.counter - 1
          });
        } else {

          this.randomize(words, colors)
          
        }
        
        this.state.clic.play()
      }
    }, speed);
  }

  

  render() {
    return (
      <div className={styles.root} id="appContainer">
        <div>
          <br />
          <p className={styles.parrafo}>Entrena tu coordinación entre los Hemisferios Cerebrales</p>
          <p className={styles.parrafo}>Debes Decir en voz alta el color de las letras</p>
        </div>
        <Display word={this.state.palabra} className={this.state.color} />
        <Controls
          play={this.state.play}
          onPlayClick={this.handleClick}
          onStopClick={this.handleClick}
          onChange={this.handleChange}
          onFullClick={this.toggleFullScreen}
          fullscreen={this.state.fullscreen}
          speed={this.state.speed}
        />
        
      </div>
    )
  }
}
