import React,{useState, useEffect} from 'react'

const ExDiceGame = () => {
    // 1. 버튼 클릭시 주사위 이미지 랜덤하게 변경(둘다)
    // 2. 주사위의 숫자를 비교 더큰 Score값을 +1 증가
    // 3. Score값이 먼저 10에 도달한 결과를 출력
    //    >> "user 승리" or "com 승리"
    // useEffect 이용해서 만들어주기
    let array = ['dice1.png','dice2.png', 'dice3.png','dice4.png','dice5.png','dice6.png']

  const [com, setCom] = useState(1)
  const [user, setUser] = useState(1)
  const [comScore, setComScore] = useState(0)
  const [userScore, setUserScore] = useState(0)
  const [result, setResult] = useState('')


    const start = () => {
        let comNum = parseInt(Math.random() * 6) +1
        let userNum = parseInt(Math.random() * 6) +1

    setCom(comNum)
    setUser(userNum)
    
    if(comNum>userNum){
        setComScore(comScore+1)
        setResult('컴퓨터 승')
    }
    else if(userNum>comNum){
        setUserScore(userScore+1)
        setResult('유저 승')
    }
    else{
        setResult("무승부")
    }
    }
    
    // Mount + Update

    useEffect(()=> {
      if(comScore>=10){
        setResult("컴퓨터 최종 승")
      }
      else if(userScore>=10){
        setResult("유저 최종 승")
      }

    },[comScore,userScore])


    


  return (
    <div>
      <h1>DICE GAME</h1>
      <button onClick={start}>Start</button>

      <div >
        <img src={`./src/img/dice${com}.png`}></img>
        <h1>Com Score : {comScore}</h1>
      </div>
      <div >
        <img src={`./src/img/dice${user}.png`}></img>
        <h1>User Score : {userScore}</h1>
      </div>

      <h1>결과 : {result}</h1>
    </div>
  )
}

export default ExDiceGame