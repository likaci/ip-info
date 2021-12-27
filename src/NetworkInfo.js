import React from "react";

class NetworkInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: null,
            error: null
        }
    }

    render() {
        const {isLoaded, data, error} = this.state
        return (
            <li>
                <a>{this.props.name}</a>: {isLoaded ? this.parseData(data, error) : "Loading"}
            </li>
        );
    }

    // {
    //     "status": "success",
    //     "country": "中華民國",
    //     "countryCode": "TW",
    //     "region": "TPE",
    //     "regionName": "臺灣省 or 台灣省",
    //     "city": "臺北市",
    //     "zip": "",
    //     "lat": 25.0329,
    //     "lon": 121.5654,
    //     "timezone": "Asia/Taipei",
    //     "isp": "Google LLC",
    //     "org": "Google Cloud (asia-east1)",
    //     "as": "AS396982 Google LLC",
    //     "query": "34.81.2.2"
    // }
    parseData(data, error) {
        return error ? JSON.stringify(error) :
            <a> {data.query} {data.city} {data.org ? data.org : data.isp} </a>
    }

    async componentDidMount() {
        fetch(this.props.url)
            .then(res => res.json())
            .then(res => {
                this.setState({isLoaded: true, data: res})
            }, error => {
                this.setState({isLoaded: true, error: error})
            })
    }
}

export default NetworkInfo