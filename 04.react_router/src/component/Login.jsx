import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'

const Login = () => {
  const nav = useNavigate();
  
  
  const inputIdRef = useRef();
  const inputPwRef = useRef();

  const [inputPw, setInputPw] = useState('')
  const [inputId, setInputId] = useState('')

  const btnlogin =()=>{
    const inputId = inputIdRef.current.value
    const inputPw = inputPwRef.current.value
    if(inputId== 'smhrd' && inputPw=='123'){
      
      nav('/')
    }
    else{
      alert("잘못 입력했습니다")
    }
  }
  // 사용자가 입력한 ID: smhrd, PW : 123
  // 일때만 Home 으로 이동
  // 둘중 하나라도 다르면 '잘못 입력했습니다' 알림 출력
  return (
    <div>
        <h1>즐거운 React 수업</h1>
        ID : <input ref={inputIdRef}></input>
        <br></br>
        PW : <input ref={inputPwRef}></input>
        <button onClick={btnlogin}>Login</button>
        
    </div>
  )
}

export default Login