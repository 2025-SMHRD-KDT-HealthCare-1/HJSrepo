import React from 'react'

const Member = (props) => {
    console.log(props)

    let boxStyle = {
        backgroundColor : 'whitesmoke',
        border : '1px solid black',
        padding : '30px',
        borderRadius : '10px',
        texAlign : 'center',
        marginTop : '10px',
        color : 'black',
        width : '500px'
    }
  return (
    <div>
        <div style={boxStyle}>
       <h1>{props.memb}</h1> 
    </div>
    </div>
  )
}

export default Member