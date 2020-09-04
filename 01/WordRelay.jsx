const React =require('react');
const {useState, useRef} = React;

const WordRelay = () => {
    // 무조건 component 안에 있어야 한다
    const [word, setWord] = useState('제로초');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null) // useRef로 DOM에 접근, 나중에 사용할 때 current 사용

    const onSubmitForm = (e) => {
        e.preventDefault();
        // [비동기] setState를 여러번 하면 모아서 한 번에 처리한다 = render를 한 번만
        if (word[this.state.word.length - 1] === value[0]) {
            setResult('딩동댕');
            setWord(value);
            setValue('');
        } else {
            setResult('땡');
            setValue('');
        }
        inputRef.current.focus();
    }
    const onChangeInput = (e) => {
        setVluae(e.target.value);
    }
    
    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="wordInput">글자를 입력하세요.</label><br/>
                <input className="wordInput" ref={inputRef} value={value} onChange={onChangeInput} />
                <button>click!</button>
            </form>
            <div>{result}</div>
        </>
    )
    
}

const {hot} = require('react-hot-loader/root');
const Hot = hot(WordRelay);
module.exports = Hot;