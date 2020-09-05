import React, {Component} from 'react';

class ResponseCheck extends Component {
	state = {
		state : 'waiting', // waiting, ready, now가 있다
		message : '클릭해서 시작하세요',
		result:[]
	}

	timeout;
	startTime;
	endTime;

	onClickScreen = () => {
		// 미리 꺼내놓는게 좋음
		const {state, message, result} = this.state;
		if (state === "waiting") {
			this.setState({
				state:'ready',
				message:'초록색이 되면 클릭하세요.'
			})
			this.timeout = setTimeout(()=> {
				this.setState({
					state:'now',
					message:'지금 클릭'
				})
			}, Math.floor(Math.random()*1000)+2000);//2초~3초 후

			this.startTime = new Date(); // rendering 다시 되지 않도록 state X

		} else if (state === 'ready') {
			clearTimeout(this.timeout);
			this.setState({
				state:'waiting',
				message:'너무 성급하셨군요! 초록색이 된 후 클릭하세요.'
			})
		} else if (state === 'now') {
			this.endTime = new Date();

			this.setState((prevState) => {
				console.log('prevState.result', prevState.result)
				return {
					state:'waiting',
					message:'클릭해서 시작하세요!',
					result:[...prevState.result, this.endTime - this.startTime]
				}
			})
		}
	}

	onReset = ()=> {
		this.setState({
			result:[]
		})
	}

	renderAverage = () => {
		const {result} = this.state
		console.log(result);
		return result.length === 0 ? null :
			<>
				<div>평균 시간 : {result.reduce((a, c)=> a + c) / result.length}ms</div>
				<button onClick={this.onReset}>reset</button>
			</>
	}
	render() {
		return (
			<>
				<div id="screen" className={this.state.state} onClick={this.onClickScreen}>
					{this.state.message}
				</div>
				{this.renderAverage()}
			</>
		)
	}
}


const {hot} = require('react-hot-loader/root');
const Hot = hot(ResponseCheck);
export default Hot;