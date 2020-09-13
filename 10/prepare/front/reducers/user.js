export const initialState = {
    isLoggedIn:false,
    me:null,
    signUpData:{},
    loginData:{}
}
// 함수를 return하는 비동기 action creator 추가
export const loginAction = (data) => {
    return (dispatch, getState) => {
        const state = getState();
        dispatch(loginRequestAction());
        axios.post('/api/login')
            .then((res) => {
                dispatch(loginSuccessAction(res.data));
            })
            .catch((err) => {
                dispatch(loginFailureAction(err));
            })
    }
}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
// action creator
export const loginRequestAction = (data) => {
    return {
        type:LOG_IN_REQUEST,
        data,
    }
}

export const logoutRequestAction = () => {
    return {
        type:LOG_OUT_REQUEST,
    }
}

// initialState depth가 줄어서 return 부분도 depth를 줄여야 한다
const reducer = (state=initialState, action) => {
    switch ( action.type ) {
        case 'LOG_IN':
            return {
                ...state,
                isLoggedIn:true,
                me:action.data
            }
        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn:false,
                me:null
            }
        default:
            return state;
    }
}

export default reducer;