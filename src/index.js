import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NetworkInfo from './NetworkInfo'

ReactDOM.render(
    (
        <ul>
            <NetworkInfo name={"Direct"} url={"http://direct.ipapi.xiazhiri.com/json/?lang=zh-CN"}/>
            <NetworkInfo name={"Home"} url={"http://home.ipapi.xiazhiri.com/json/?lang=zh-CN"}/>
            <NetworkInfo name={"Proxy"} url={"http://proxy.ipapi.xiazhiri.com/json/?lang=zh-CN"}/>
            <NetworkInfo name={"Work"} url={"http://work.ipapi.xiazhiri.com/json/?lang=zh-CN"}/>
        </ul>
    ),
    document.getElementById('root')
);

