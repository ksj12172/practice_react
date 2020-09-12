import {HYDRATE} from 'next-redux-wrapper';
// 쪼갠걸 합쳐주는 거 : 객체와 달리 함수는 합치기 쉽지 않아서 필요
import {combineReducers} from 'redux';
// 쪼갠걸 불러온다
import user from './user';
import post from './post';

// initialState에서 state를 user와 post로 구분해서 각각을 위해 js 파일을 만든다
// user와 post 안에 있던 state들을 파일로 옮긴다
// 또한 해당 파일 안에서 export 시킨다
const initialState = {
    user:{        
    },
    post:{
    }
}
// action creator
const changeNickname = (data) => {
    return {
        type:'CHANGE_NICKNAME',
        data
    }
}

// (이전 상태, action) => 다음 상태
const rootReducer = combineReducers({
	// redux serverside rendering을 위해서 HYDRATE가 필요하다
	// HYDRATE를 위해서 index reducer 추가
	index:(state={},action) => {
    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload};
        // reducer 초기화할 때도 실행되므로 필요
        default:
            return state;
		}
	},
	// combine reducer가 알아서 initialState 넣어준다
	user,
	post
});

export default rootReducer;