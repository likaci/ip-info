import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NetworkInfo from './NetworkInfo'

ReactDOM.render(
    (
        <div className="grid gap-6 lg:p-10 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
            <NetworkInfo name={"Direct"} url={"http://direct.ipapi.xiazhiri.com/json/?lang=zh-CN"}/>
            <NetworkInfo name={"Home"} url={"http://home.ipapi.xiazhiri.com/json/?lang=zh-CN"}/>
            <NetworkInfo name={"Proxy"} url={"http://proxy.ipapi.xiazhiri.com/json/?lang=zh-CN"}/>
            <NetworkInfo name={"Work"} url={"http://work.ipapi.xiazhiri.com/json/?lang=zh-CN"}/>
        </div>
    ),
    document.getElementById('root')
);

