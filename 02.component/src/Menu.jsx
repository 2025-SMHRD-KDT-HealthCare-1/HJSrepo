import React from 'react'

const Menu = (props) => {
    console.log(props)
  return (
    <div>
        <h1>{props.menu}</h1>
        <p>{props.won}</p>
    </div>
  )
}

export default Menu