import React from 'react'
import play from './play.png'
import IconButton from '@material-ui/core/IconButton';
import styles from './play.module.css'


const Play = (props) => {
  return (
    <IconButton onClick={props.onClick}>
      <img src={play} alt="img" className={styles.imagen} />
    </IconButton>
  )
}

export default Play
