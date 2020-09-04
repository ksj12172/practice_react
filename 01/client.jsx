// node module 시스템으로 불러오기(script tag 말고)
const React = require('react');
const ReactDom = require('react-dom');
const Hot = require('./WordRelay.jsx');

ReactDom.render(<Hot/>, document.querySelector('#root'));