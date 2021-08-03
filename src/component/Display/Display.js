import React from 'react'
import styles from "./display.module.css"

const Display = (props) => {
  return (
    <div>
      <h1 className={styles[props.className]}>{props.word}</h1>
    </div>
  )
}

export default Display
