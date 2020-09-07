import React, {useState, useReducer, useCallback, useEffect} from 'react';
import Table from './Table';

const initialState = {
	winner : '',
	turn : 'o',
	tableData:[['','',''],['','',''],['','','']],
	recentCell : [-1,-1]
}

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';

const reducer = (state, action) => {
	// 직접 바꾸면 안 된다
	// state.winner = action.winner;
	// 불변성 : 기존 state를 바꾸지 않고 새로운 state를 만들어서 바뀌는 부분만 바꿔준다
	switch (action.type) {
		case SET_WINNER:
			console.log('winner',action.winner)
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
				tableData,
				recentCell:[action.row, action.cell]
			}
		}
		case CHANGE_TURN: {
			return {
				...state,
				turn:state.turn === 'o' ? 'x' : 'o',
			}
		}
		case RESET_GAME: {
			return {
				...state,
				winner : '',
				turn : 'o',
				tableData:[['','',''],['','',''],['','','']],
				recentCell : [-1,-1]
			}
		}
		default:
			return state;
	}
}
const TicTacToe = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const {tableData, turn, winner, recentCell} = state;

	useEffect(() => {
		let win = false;
		const [row,cell] = recentCell;
		if (row <0) return;
		if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
			win = true;
		}
		if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
			win = true;
		}
		if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
			win = true;
		}
		if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
			win = true;
		}
		if (win) {
			dispatch({type:SET_WINNER, winner:turn});
			setTimeout(() => {
				dispatch({type:RESET_GAME});
			}, 1000);			
		} else {
			// 무승부 검사시
			let all = true;
			tableData.forEach((row) => {
				row.forEach((cell) => {
					if (!cell) all = false;
				})
			})
			if (all) {
				dispatch({type:RESET_GAME});
			} else {
				dispatch({type:CHANGE_TURN});
			}        	
		}
	}, [recentCell]);

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
			<Table onClick={onClickTable} tableData={tableData} dispatch={dispatch}/>
			{winner && <div>{winner}님의 승리</div>}
		</>
	)
}

const {hot} = require('react-hot-loader/root');
const Hot = hot(TicTacToe);
export default Hot;