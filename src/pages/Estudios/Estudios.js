import React from 'react'
import Card from '../../component/Card/Card'


const Estudios = (props) => {


  return (
    <div>
      {props.info.map(e=> <Card info={e} />)}
     </div>
  )
}

export default Estudios
