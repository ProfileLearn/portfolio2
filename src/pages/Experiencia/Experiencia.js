import React from 'react'
import Card from '../../component/Card/Card'

const Experiencia = (props) => {
  return (
    <div>
      {props.info.map(e=> <Card info={e} />)}
    </div>
  )
}

export default Experiencia
