import React, {useState}from 'react'
import pic from '../img/img1.jpg'

const Ex02 = () => {
    // useState의 초기값은 다양한 데이터 자료형이 가능
    // state : 바뀐값으로 출력하기 위해서 사용한다.
    // React Hooks : 기존 함수 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 도와주는 기술
    const [ likeEmoji, setLikeEmoji ] = useState("🤍")
    const [ likeNum, setLikeNum] = useState(0)

    // 빈 하트 클릭시, => 채워진 하트로 변경
    // 빈 하트 클릭시, => 숫자 0을 1로 변경
    // 채워진 하트 클릭 시 => 빈 하트로 변경
    // 채워진 하트 클릭 시 => 숫자 1을 0으로 변경
    const handleLicke = () =>{
        // 클릭했을 때 비어있는 하트라면 (조건)
        if(likeEmoji ==="🤍"){
            setLikeEmoji ('❤️')
            setLikeNum(likeNum +1)
        }else{
            setLikeEmoji('🤍')
            setLikeNum(likeNum -1)
        }
    }
  return (
    <div>
        {/* src폴더 내 접근 */}
        {/* import 이미지변수 from '경로' */}
        <img width= '300px' src={pic}></img>
        {/* 외부주소값 접근 */}
        <img width="300px" src='https://pbs.twimg.com/media/G3E1IbDbQAAkLrP.jpg:large'></img>
        <br></br>
        {/* public 폴더에 이미지가 있다면?
            http://localhost:5173/img/im2.jpg
            public 폴더는 서버와 통신 중 => 이곳에 저장하는 것만으로도 고유한 주소값이 생김
         */}
        <img width="300px" src='/img/img2.jpg'></img>
        <br />
        <p>
            <span onClick={handleLicke}>{likeEmoji}</span>
            <span>{" "} 좋아요 {likeNum}개</span>
        </p>
    </div>  
  )
}

export default Ex02