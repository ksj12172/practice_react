import React, { useState, useRef } from 'react';
import Try from './Try';

// 숫자 4개를 랜덤하게 뽑는 함수
function getNumbers() {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i=0;i<4;i++) {
        const chosen = candidate.splice(Math.floor(Math.random()*(9-i)),1)[0];
        array.push(chosen);
    }
    return array;
}

const NumberBaseball = () => {
    const [result, setResult] = useState('');
    const [tries, setTries] = useState([]);
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const inputRef = useRef(null);
    
    const onSubmitForm = function (e) {
        e.preventDefault();
        if (value === answer.join('')) {
            setResult('홈런');
            setTries((prevTries)=> {
                return [...prevTries, {try:value, result:'홈런!'}]
            });
            alert('홈런! 게임을 다시 시작합니다');
            setValue('');
            setAnswer(getNumbers());
            setTries([]);
        } else {
            const answerArray = value.split("").map((v)=>parseInt(v));
            let strike=0;
            let ball = 0;
            if (tries.length>=9) {
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`)
                alert('실패! 게임을 다시 시작합니다');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
            } else {
                for (let i=0;i<4;i+=1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                setTries((prevTries) => {
                    return [...prevTries, {try:value, result:`${strike} 스트라이크 ${ball} 볼`}]
                });
                setValue('');
            }
            
        }
    }
    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} maxLength={4} value={value} onChange={onChangeInput}/>
                <button type="submit">click</button>
            </form>
            <div>시도 : {tries.length}</div>
            <ul>
                {/* react에서 key를 기준으로 element를 추가하거나 수정 삭제 판단하기 대문에
                배열의 순서가 바뀌면 문제가 생긴다. key를 index로 넣지 말자 */}
                {tries.map((v,i)=> {
                    return (
                        <Try key={i+1} tryInfo={v}/>
                    )
                })}
            </ul>
        </>
    )
}

const {hot} = require('react-hot-loader/root');
const Hot = hot(NumberBaseball);
export default Hot;
// export const hello="hello";//import {hello}