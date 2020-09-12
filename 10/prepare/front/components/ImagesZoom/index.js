import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import Slick from 'react-slick';

import {Overlay, Global, Header, CloseBtn, ImgWrapper, Indicator, SlickWrapper} from './styles';

// npm i react-slick
const ImagesZoom = ({images,onClose}) => {
    return (

    )
}

ImagesZoom.propTypes = {
    images:PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose : PropTypes.func.isRequired
}

export default ImagesZoom;./node_modules/react./node_modules/prop-types