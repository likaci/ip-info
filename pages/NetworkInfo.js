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
            <div className="card shadow-lg compact side bg-base-100">
                <div className="flex-row items-center space-x-4 card-body">
                    <div className="flex-1">
                        <h2 className="card-title text-primary">{this.props.name}</h2>
                        <p className="text-base-content text-opacity-90">{isLoaded ? (error ? "Error" : data.query) : "Loading"}</p>
                        <p className="text-base-content text-opacity-90">{isLoaded && data && !error ? data.city : "-"}</p>
                        <p className="text-base-content text-opacity-90">{isLoaded && data ? (data.org ? data.org : data.isp) : "-"}</p>
                    </div>
                    <div className="flex space-x-2 flex-0">
                        <button className="btn btn-sm btn-square" onClick={this.refreshData}>
                            <svg viewBox="0 0 24 24" height="80%" width="80%">
                                <path fill="#ffffff"
                                      d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    refreshData = (e) => {
        this.setState({isLoaded: false, data: null, error: null})
        this.fetchData()
    }

    async fetchData() {
        await fetch(this.props.url)
            .then(res => res.json())
            .then(res => {
                this.setState({isLoaded: true, data: res})
            }, error => {
                this.setState({isLoaded: true, error: error})
            })
    }

    async componentDidMount() {
        await this.fetchData()
    }

}

export default NetworkInfo