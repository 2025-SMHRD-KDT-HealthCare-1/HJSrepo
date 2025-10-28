import React from 'react'
import ClassComponent from '../components/ClassComponent' 
import { useState } from 'react'

const Ex10 = () => {
    const [isShow, setIsShow] = useState(true);

    return (
        <div>
            <h1>React 생명주기(클래스 컴포넌트)</h1>
            <button onClick={() => setIsShow(!isShow)}>Show Toggle</button>
            {isShow && <ClassComponent />}
        </div>
    )
}

export default Ex10