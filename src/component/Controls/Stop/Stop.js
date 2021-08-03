import React from 'react'
import stop from './stop.png'
import IconButton from '@material-ui/core/IconButton';
import styles from './stop.module.css'


const Stop = (props) => {
  return (
    <IconButton onClick={props.onClick}>
      <img src={stop} alt="img" className={styles.imagen} />
    </IconButton>
  )
}

export default Stop