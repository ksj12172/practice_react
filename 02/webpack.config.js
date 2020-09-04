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
                    ['@babel/preset-env', {
                        targets:{                    
                            browsers:['last 2 chrom versions'],                    
                        },                    
                    }],
                    '@babel/preset-react'
                ],
                plugins:['@babel/plugin-proposal-class-properties']
            }
        }]
    },
    plugins:[
        new webpack.LoaderOptionsPlugin.Plugin({debug:true}),
    ], // 확장 프로그램
    output: {
        filename:'app.js',
        path:path.join(__dirname, 'dist'),
    }
};