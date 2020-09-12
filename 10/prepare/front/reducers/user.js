export const initialState = {
    isLoggedIn:false,
    me:null,
    signUpData:{},
    loginData:{}
}
// action creator
export const loginAction = (data) => {
    console.log('loginAction', data)
    return {
        type:'LOG_IN',
        data,
    }
}

export const logoutAction = () => {
    return {
        type:'LOG_OUT',
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