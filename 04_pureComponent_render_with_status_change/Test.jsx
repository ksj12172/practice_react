import React, { PureComponent } from 'react';

class Test extends PureComponent {
    state = {
        count:0,
        array : []
    }

    onClick = () => {
        // state 변화 감지하려면 push 말고 이런 식으로!
        this.setState({
            array:[...this.state.array, 5]
        })
    }

    render() {
        console.log('rendering')
        return(
            <div>
                <button onClick={this.onClick}>click!</button>
            </div>
        )
    }
}

const {hot} = require('react-hot-loader/root');
const Hot = hot(Test);
export default Hot;
// export const hello="hello";//import {hello}