import React from 'react'
import pic from '../img/img1.jpg'
import pic2 from '../img/img1.jpg'
import { useState } from 'react'

const Ex08 = () => {
    let imgArray = ['./src/img/ca.jpg','./src/img/ya.jpg','./src/img/hk.jpg']
    // let pos = 0;
    const [pos, setPos] = useState(0) 

    const [mySrc, setSrc] = useState('./src/img/ca.jpg')

    const chImg = () =>{
        if(pos==2){
            setPos(0)
        }else{
            setPos(pos+1)
        }
        // pos++
        //setSrc('./src/img/ya.jpg')
    }

    const artImg = () =>{
       if(pos==0){
            setPos(2)
        }else{
            setPos(pos-1)
        }

    }
   
  return (
    <div>
        <img src={imgArray[pos]}></img>
        <button onClick={artImg}>이전</button>
        <button onClick={chImg}>다음</button>
        
    </div>
  )
}

export default Ex08