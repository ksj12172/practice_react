import React, {useState, useRef, useEffect, useMemo, useCallback} from 'react';
import Ball from './Ball';
 
function getWinNumbers() {
	console.log('getWinNumbers')
	const candidate = Array(45).fill().map((v,i) => i+1);
	const shuffle = [];
	while (candidate.length>0) {
		shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length),1)[0]);
	}
	const bonusNumber = shuffle[shuffle.length-1];
	const winNumbers = shuffle.slice(0,6).sort((p,c) => p-c);
	return [...winNumbers, bonusNumber];
}

const Lotto = () => {
	// render가 다시 될 때마다 getWinNumbers 함수가 실행된다
	// 따라서 useMemo를 사용한다, hooks가 getWinNumbers의 return값을 기억한다
	const lottoNumbers = useMemo(()=> getWinNumbers(), []);
	const [winNumbers, setWinNumbers] = useState(lottoNumbers);
	const [winBalls, setWinBalls] = useState([]);
	const [bonus, setBonus] = useState(null);
	const [redo, setRedo] = useState(false);
	const timeouts = useRef([]);

	useEffect(()=>{
		runTimeouts();
		return () => {
			timeouts.current.forEach((v) => {
				clearTimeout(v);
			})
		}
	},[timeouts.current])
	

	const onClickRedo = useCallback(() => {
		setWinNumbers(getWinNumbers());
		setWinBalls([]);
		setBonus(null);
		setRedo(false);
		timeouts.current = [];
	},[]);

	const runTimeouts = () => {
		for (let i=0;i<winNumbers.length-1;i++) {
			timeouts.current[i] = setTimeout(() => {
				setWinBalls((prevWinBalls) => 
					[...prevWinBalls, winNumbers[i]]
				)
			}, (i+1)*1000);

			timeouts.current[6] = setTimeout(() => {
				setBonus(winNumbers[6]);
				setRedo(true);
			}, 7000);
		}
	}

	return (
		<>
			<div>당첨 숫자</div>
			<div id="결과창">
				{winBalls.map((v) => <Ball key={v} number={v} />)}
			</div>
			<div>보너스!</div>
			{bonus && <Ball number={bonus} />}
			{redo && <button onClick={onClickRedo}>한 번 더!</button>}
		</>
	)
}

const {hot} = require('react-hot-loader/root');
const Hot = hot(Lotto);
export default Hot;