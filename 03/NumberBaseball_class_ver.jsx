import React, {PureComponent, createRef} from 'react';
import Try from './Try';

// 숫자 4개를 랜덤하게 뽑는 함수
function getNumbers() {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i=0;i<4;i++) {
        const chosen = candidate.splice(Math.floor(Math.random()*(9-i)),1)[0];
        array.push(chosen);
    }
    return array;
}

class NumberBaseball extends PureComponent {
    constructor(props) {
        super(props);
        this.state= {
            result:'',
            value:'',
            answer:getNumbers(),
            tries:[]
        }
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }
    
    // 화살표 함수 안 쓰면 this를 못 쓴다
    // this binding 하면 화살표 함수 안 써줘도 된다
    // 화살표 함수가 bind this 해주는 것!
    onSubmitForm = function (e) {
        e.preventDefault();
        if (this.state.value === this.state.answer.join('')) {
             this.setState((prevState) => {
                return {
                    result : '홈런!',
                    tries: [...prevState.tries, 
                        {try:this.state.value, result:'홈런!'}
                    ]
                }
             });
             alert('게임을 다시 시작합니다');
             this.setState({
                 value:'',
                 answer:getNumbers(),
                 tries:[],
             })
        } else {
            const answerArray = this.state.value.split("").map((v)=>parseInt(v));
            let strike=0;
            let ball = 0;
            if (this.state.tries.length>=9) {
                this.setState({
                    result:`10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(',')}였습니다!`
                })
                alert('게임을 다시 시작합니다');
                this.setState({
                    value:"",
                    answer : getNumbers(),
                    tries:[]
                })
            } else {
                for (let i=0;i<4;i+=1) {
                    if (answerArray[i] === this.state.answer[i]) {
                        strike += 1;
                    } else if (this.state.answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState((prevState) => {
                    return {
                        tries:[...prevState.tries,
                            {try:this.state.value, result:`${strike} 스트라이크 ${ball} 볼`}
                        ],
                        value:'',
                    }
                })
            }
            
        }
        this.inputRef.current.focus();
    }
    onChangeInput = (e) => {
        this.setState({
            value:e.target.value
        })
    }

    inputRef = createRef();

    render() {
        const {result, value, tries} = this.state;
        return (
            <>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.inputRef} maxLength={4} value={value} onChange={this.onChangeInput}/>
                    <button type="submit">click</button>
                </form>
                <div>시도 : {tries.length}</div>
                <ul>
                    {/* react에서 key를 기준으로 element를 추가하거나 수정 삭제 판단하기 대문에
                    배열의 순서가 바뀌면 문제가 생긴다. key를 index로 넣지 말자 */}
                    {tries.map((v,i)=> {
                        return (
                            <Try key={i+1} tryInfo={v}/>
                        )
                    })}
                </ul>
            </>
        )
    }
}

const {hot} = require('react-hot-loader/root');
const Hot = hot(NumberBaseball);
export default Hot;
// export const hello="hello";//import {hello}