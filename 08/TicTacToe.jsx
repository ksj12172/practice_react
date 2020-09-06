import React, {useState, useReducer, useCallback} from 'react';
import Table from './Table';

const initialState = {
	winner : '',
	turn : 'o',
	tableData:[['','',''],['','',''],['','','']]
}

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';

const reducer = (state, action) => {
	// 직접 바꾸면 안 된다
	// state.winner = action.winner;
	// 불변성 : 기존 state를 바꾸지 않고 새로운 state를 만들어서 바뀌는 부분만 바꿔준다
	switch (action.type) {
		case SET_WINNER:
			return {
				...state,
				winner : action.winner
			}
		case CLICK_CELL: {
			// 객체는 얕은 복사를 해줘야 한다 ... state 바꿀 때 불변성 지켜줘야 한다
			// === 검사하면 false나온다
			const tableData = [...state.tableData];
			tableData[action.row] = [...tableData[action.row]];
			tableData[action.row][action.cell] = state.turn;
			return {
				...state,
				tableData
			}
		}
		case CHANGE_TURN: {
			return {
				...state,
				turn:state.turn === 'o' ? 'x' : 'o',
			}
		}
	}
}
const TicTacToe = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// component에 넣는 함수들은 다 useCallback
	const onClickTable = useCallback(() => {
		// dispatch안에 들어가는 action 객체를 만들어준다
		// dispatch : action을 실행해준다
		// reducer : action 해석, state 바꿔준다
		dispatch({
			type:SET_WINNER, winner : 'o'
		})
	},[]);

	return (
		<>
			<Table onClick={onClickTable} tableData={state.tableData} dispatch={dispatch}/>
			{state.winner && <div>{state.winner}님의 승리</div>}
		</>
	)
}

const {hot} = require('react-hot-loader/root');
const Hot = hot(TicTacToe);
export default Hot;