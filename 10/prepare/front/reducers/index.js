import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
    user:{
        isLoggedIn:false,
        user:null,
        signUpdata:{},
        loginData:{}
    },
    post:{
        mainPosts:[],
    }
}
// action creator
const changeNickname = (data) => {
    return {
        type:'CHANGE_NICKNAME',
        data
    }
}
// action creator
export const loginAction = (data) => {
    return {
        type:'LOG_IN',
        data,
    }
}
export const logoutAction = (data) => {
    return {
        type:'LOG_OUT',

    }
}

const rootReducer = (state=initialState,action) => {
    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload};
        case 'LOG_IN':
            return {
                ...state,
                user : {
                    ...state.user,
                    isLoggedIn:true,
                    user:action.data
                }
            }
        case 'LOG_OUT':
            return {
                ...state,
                user : {
                    ...state.user,
                    isLoggedIn:false,
                    user:null
                }
            }
        // reducer 초기화할 때도 실행되므로 필요
        default:
            return state;
    }
};

export default rootReducer;