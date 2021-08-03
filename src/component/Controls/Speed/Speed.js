import React from 'react'


const Speed = (props) => {
  return (
    <div>
      <input placeholder={props.speed} type="number" onChange={props.onChange} size={4} maxLength={4} min={100} max={2000} />
    </div>
  )
}

export default Speed
