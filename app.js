const express = require('express');
const proxy = require('http-proxy-middleware');//引入代理模块
const app = express();
const session = require('express-session');

app.use(express.static('Project'));


const apiProxy = proxy('/', { target: 'http://localhost:8888',changeOrigin: true })
app.use('/', apiProxy);


app.listen(80, () => {
    console.log('Listening on: http://localhost:80');
});
