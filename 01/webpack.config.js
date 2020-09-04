const path = require('path');

module.exports = {
    name:'word-relay-setting',//webpack 설정 이름
    mode:'development', // 실서비스 : production
    devtool : 'eval', // 개발 때는 eval, production 때는 hidden-source-map
    resolve:{
        extensions:['.js','.jsx'] // webpack에 포함되어야 하는 파일들의 확장자 써주면 webpack이 알아서 찾는다
    },
    entry: {
        // client.jsx가 WordRelay.jsx 파일을 부르기 때문에 client.jsx만 적어준다
        app: ['./client.jsx'],
    },//입력
    // 출력
    output: {
        // 현재 폴더명 : __dirname, join으로 dist까지 경로만든다
        path:path.join(__dirname,'dist'),
        filename: 'app.js',
    },
    module: {                                           // javascript 모듈을 생성할 규칙을 지정 (node_module을 제외한.js 파일을 babel-loader로 불러와 모듈을 생성
        rules: [
            {
                test: /\.jsx?/,          // babel loader가 파이프를 통해 js 코드를 불러옴
                loader: 'babel-loader',                // .js, .jsx로 끝나는 babel이 컴파일하게 할 모든 파일
                exclude: /node_module/,                 // node module 폴더는 babel 컴파일에서 제외
                options:{
                    presets:['@babel/preset-env', '@babel/preset-react'],
                    plugins:[
                        '@babel/plugin-proposal-class-properties',
                        'react-hot-loader/babel'
                    ]
                }
            }
        ]
    },
};