## zerocho, react 강의 들으면서 실습한 결과물



## npm install 

: 프로젝트 root 경로에 package.json 파일을 두고 npm install 명령어를 입력하면
npm이 package.json에 명시된 dependencies 부분의 모듈들을 모두 설치해준다.



## npm으로 설치해준 모듈들

npm init : package.json 파일 생성

npm i react react-dom

npm i -D webpack webpack-cli (-D : 개발 모드용)

npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader @babel/plugin-proposal-class-properties

npm i -D react-hot-loader

npm i -D webpack-dev-server



## webpack.config.js

```javascript
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode : 'development',
    devtool:'eval',
    resolve:{
        extensions:['.js','.jsx']
    },
    entry:{
        app : './client'
    },
    module:{
        rules:[{
            test:/\.jsx?$/,
            loader:'babel-loader',
            options:{
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react'
                ],
                plugins:['@babel/plugin-proposal-class-properties']
            }
        }]
    },
    output: {
        filename:'app.js',
        path:path.join(__dirname, 'dist'),
    }
};
```

