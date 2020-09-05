import React, {memo} from 'react';

// state 안 쓰는 경우 함수형 component 쓸 수 있다
// component를 다른 component로 감싸는 것 : high order component (h.o.c)
const Ball = memo(({number}) => {
    const {number} = this.props;
    let background;
    if (number < 10) {
        background = 'red';
    } else if (number <= 20) {
        background = 'orange';
    } else if (number <= 30) {
        background= 'yellow';
    } else if (number <= 40) {
        background='blue';
    } else {
        background='green';
    }

    return(
        <div className="ball" style={{background}}>{number}</div>
    )
});

export default Ball;