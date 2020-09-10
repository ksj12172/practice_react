import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css'
import wrapper from '../store/configureStore'

const NodeBird = ({Component}) => {
    return (
        <Provider store={store}>
            <Head>
                <meta charset="utf-8"/>
                <title>NodeBird</title>
            </Head>
            <Component />
        </Provider>
    )
}

NodeBird.propTypes = {
    Component : PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);