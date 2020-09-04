const React = require('react');
const {useState, useRef} = React;

const GuGuDan = () => {
    // 무조건 component 안에 있어야 한다
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(); // useRef로 DOM에 접근, 나중에 사용할 때 current 사용

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * second) {
            // [비동기] setState를 여러번 하면 모아서 한 번에 처리한다 = render를 한 번만
            setResult('정답' + value);
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
        } else {
            setResult('땡');
            setValue('');
        }
        inputRef.current.focus();
    }

    return (
        <>
            <div>{first} 곱하기 {second}는? </div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} type="number" value={value} 
                        onChange={onChangeInput} />
                <button>입력</button>
            </form>
            <div id="result">{result}</div>
        </>
    )
}

module.exports = GuGuDan;