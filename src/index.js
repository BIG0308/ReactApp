/*
* React App 入口文件
* 兼容
* */
// 兼容ie11  --start
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
// 兼容ie11  --end

// React核心  --start
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
// React核心  --end

import App from './App';
import "normalize.css";
import "antd/dist/antd.css";
import "./index.css";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);

serviceWorker.unregister();
