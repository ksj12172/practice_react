import React from 'react';

// 구조 분해해서 props 대신 {tryInfo} 쓸 수 있다
const Try = ({tryInfo}) => {
    return (
        <>
            <div>
                <div>{tryInfo.try} </div>
                <div>{tryInfo.result} </div>
            </div>
        </>
    )
}

export default Try;