import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//引入公共样式
import './stylesheets/main.scss'
//引入rem全局样式
import './commons/Rem'
//引入axios封装文件
import './axios'
//引入react-router-dom路由插件
import {HashRouter as Router} from 'react-router-dom'
//引入Provieder 组件来嵌套APP，让其能获取到仓库数据
import {Provider} from 'react-redux'
//引入仓库数据
import store from './store'
//引入swiper样式 
import 'swiper/dist/css/swiper.min.css'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));

