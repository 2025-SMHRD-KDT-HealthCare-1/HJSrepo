import React, { useRef, useState,useEffect } from 'react'

const Ex07 = () => {
    
    const inputRef = useRef();
    const pRef = useRef();
    const [chance, setchance] = useState("10")

    const [ranNum, setRanNum] = useState(Math.floor(Math.random() * 50) + 1);

    console.log(ranNum)

    const btnClick = () => {
        let text = inputRef.current.value
        let pr = pRef.current
        if(ranNum==text){
            pr.innerHTML="<h1>정답!</h1>"+ranNum
            inputRef.current.value=""
        }
        else if(ranNum<text){
            pr.innerHTML="Hint : 더 작은 숫자를 입력하세요"
            inputRef.current.value=""
            setchance(chance -1)
        }
        else {
            pr.innerHTML="Hint : 더 큰 숫자를 입력하세요"
            inputRef.current.value=""
            setchance(chance -1)
        }
    }
    useEffect(()=> {
          if(chance == 0){
            alert("없음")
          }
        },[chance])

  return (
    <div>
        <h1>1~50 사이 랜덤수 맞추기</h1>
        <p>기회 : {chance}</p>
        <input ref={inputRef}></input>
        <button onClick={btnClick}>추측</button>
        <p ref={pRef}>Hint : </p>
    </div>
  )
}

export default Ex07