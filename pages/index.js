import React from 'react';
// import './index.css';
import NetworkInfo from "./NetworkInfo";

function HomePage() {
    return (
        <div className="grid gap-6 lg:p-10 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
            <NetworkInfo name={"Direct"} url={"https://direct.ipapi.xiazhiri.com/json"}/>
            <NetworkInfo name={"Home"} url={"https://home.ipapi.xiazhiri.com/json"}/>
            <NetworkInfo name={"Proxy"} url={"https://proxy.ipapi.xiazhiri.com/json"}/>
            <NetworkInfo name={"Work"} url={"https://work.ipapi.xiazhiri.com/json"}/>
        </div>
    )
}

export default HomePage

