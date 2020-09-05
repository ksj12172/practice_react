import React, {Component} from 'react';
import Ball from './Ball';
 
function getWinNumbers() {
	const candidate = Array(45).fill().map((v,i) => i+1);
	const shuffle = [];
	while (candidate.length>0) {
		shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length),1)[0]);
	}
	const bonusNumber = shuffle[shuffle.length-1];
	const winNumbers = shuffle.slice(0,6).sort((p,c) => p-c);
	return [...winNumbers, bonusNumber];
}

class Lotto extends Component {
	state = {
		// 당첨 숫자들
		winNumbers :getWinNumbers(), // 대부분의 게임들은 데이터를 미리 준비해놓는다
		winBalls:[], // 앞의 여섯개
		bonus:null, // 보너스 공
		redo:false
	}

	timeouts = [];

	runTimeouts = () => {
		const {winNumbers} = this.state;
		console.log('winNumbers: ',winNumbers)
		for (let i=0;i<this.state.winNumbers.length-1;i++) {
			this.timeouts[i] = setTimeout(() => {
				this.setState((prevState) => {
					return {
						winBalls : [...prevState.winBalls, winNumbers[i]]
					}
				})
			}, (i+1)*1000);

			this.timeouts[6] = setTimeout(() => {
				this.setState({
					bonus:winNumbers[6],
					redo:true
				})
			}, 7000);
		}
	}
	componentDidMount() {
		this.runTimeouts();
	}

	// setState할 때마다 실행된다
	// 조건문을 잘 줘야 한다
	// 이전 state는 prevState에, 지금 state는 this.state에 있다
	componentDidUpdate(prevProps, prevState) {
		if (this.state.winBalls.length === 0) {
			this.runTimeouts();
		}
	}

	// 원치 않게 부모 component가 자식 component를 제거하는 경우있어
	// 꼭 clearSetTimeout 해줘야 해
	componentWillUnMount = () => {
		this.timeouts.forEach((v) => {
			clearTimeout(v);
		})
	}

	onClickRedo = () => {
		this.setState({
			winNumbers :getWinNumbers(), // 대부분의 게임들은 데이터를 미리 준비해놓는다
			winBalls:[], // 앞의 여섯개
			bonus:null, // 보너스 공
			redo:false
		});
		this.timeouts = [];
	}

	render() {
		const {winBalls, bonus, redo} = this.state;
		return (
			<>
				<div>당첨 숫자</div>
				<div id="결과창">
					{winBalls.map((v) => <Ball key={v} number={v} />)}
				</div>
				<div>보너스!</div>
				{bonus && <Ball number={bonus} />}
				{redo && <button onClick={this.onClickRedo}>한 번 더!</button>}
			</>
		)
	}
}

const {hot} = require('react-hot-loader/root');
const Hot = hot(Lotto);
export default Hot;