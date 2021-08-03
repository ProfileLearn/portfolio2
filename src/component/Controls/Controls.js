import React from 'react'
import Play from './Play/Play'
import Stop from './Stop/Stop'
import styles from './controls.module.css'
import { Hidden } from '@material-ui/core'
import Speed from './Speed/Speed'
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import IconButton from '@material-ui/core/IconButton';


const Controls = (props) => {
  return (
    <div className={styles.controls}>
      <Hidden xsUp={props.play}>
        <Play onClick={props.onPlayClick} />
      </Hidden>
      <Hidden xsUp={!props.play}>
        <Stop onClick={props.onStopClick} />
      </Hidden>
      <Speed onChange={props.onChange} speed={props.speed} />
      <Hidden xsUp={document.fullscreenElement}>
        <IconButton>
          <FullscreenIcon onClick={props.onFullClick} />
        </IconButton>
      </Hidden>
    </div>
  )
}

export default Controls
