import React from 'react'

const Menu = ({temp,menu,won}) => {
    console.log(temp,menu,won)
    // console.log(props)
  return (
    <div>
        {/* <h1>{props.temp}{props.menu}</h1>
        <p>{props.won}</p> */}
        <h1>{temp}{menu}</h1>
        <p>{won}</p>
    </div>
  )
}

export default Menu