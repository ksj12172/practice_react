import React, {useState, useRef} from 'react';

const ResponseCheck = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요');
    const [result, setResult] = useState([]);
    // ref는 current를 사용한다
    const timeout = useRef(null);
	const startTime = useRef();
	const endTime = useRef();

	const onClickScreen = () => {
		if (state === "waiting") {
            setState('ready');
            setMessage('초록색이 되면 클릭하세요.');
			timeout.current = setTimeout(()=> {
				setState('now');
				setMessage('지금 클릭');
			}, Math.floor(Math.random()*1000)+2000);//2초~3초 후

			startTime.current = new Date(); // rendering 다시 되지 않도록 state X

		} else if (state === 'ready') {
			clearTimeout(timeout.current);
			setMessage('너무 성급하셨군요! 초록색이 된 후 클릭하세요.');
		} else if (state === 'now') {
			endTime.curren = new Date();
            setState('ready');
            setMessage('클릭해서 시작하세요!');
            setResult((prevResult)=> [...prevResult, endTime.current - startTime.current]);
		}
	}

	onReset = ()=> {
		setResult([]);
	}

	const renderAverage = () => {
		return result.length === 0 ? null :
			<>
				<div>평균 시간 : {result.reduce((a, c)=> a + c) / result.length}ms</div>
				<button onClick={onReset}>reset</button>
			</>
	}
	
    return (
        <>
            <div id="screen" className={state} onClick={onClickScreen}>
                {message}
            </div>
            {renderAverage()}
        </>
    )
}


const {hot} = require('react-hot-loader/root');
const Hot = hot(ResponseCheck);
export default Hot;