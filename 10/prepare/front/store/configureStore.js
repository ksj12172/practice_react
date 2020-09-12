import {createWrapper} from 'next-redux-wrapper';
import {applyMiddleware, createStore, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from '../reducers'; // 그럼 바로 index.js 가져오나?

//configureStore.js
const configureStore = () => {
    const middlewares = [];
    const enhancer = process.env.NODE_ENV === 'production'
     ? compose(applyMiddleware(...middlewares)) // 배포용
     : composeWithDevTools(applyMiddleware(...middlewares));

    const store = createStore(reducer, enhancer);
    return store;
}

const wrapper = createWrapper(configureStore, {debug:process.env.NODE_ENV === 'development'});

export default wrapper;