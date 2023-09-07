'use client'

import { useState, useEffect } from "react"
import axios from "axios";

const NetworkInfo = ({ name, url }) => {
    let [networkInfo, setNetworkInfo] = useState(null)

    const fetchNetworkInfo = () => {
        setNetworkInfo(null)
        axios.get(url)
            .then(res => {
                setNetworkInfo(res.data)
            })
    }

    useEffect(() => {
        fetchNetworkInfo()
    }, [])

    return <div className="flex flex-col flex-wrap min-w-72 h-36 place-content-between p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {/* name */}
        <a className="text-xl font-bold text-gray-900 dark:text-white">{name}</a>
        {networkInfo ?
            // info
            <div className="text-gray-700 dark:text-gray-400">
                <a className="h-4 mb-2.5 block"> {networkInfo?.query} </a>
                <a className="h-4 mb-2.5 block"> {networkInfo?.city}{networkInfo?.country} </a>
                <a className="h-4 mb-2.5 block"> {networkInfo?.isp} </a>
            </div>
            :
            // loading
            <div className="animate-pulse h-20">
                <div className="h-2 w-32 bg-gray-200 rounded-full dark:bg-gray-700 mt-4 mb-2.5"></div>
                <div className="h-2 w-20 bg-gray-200 rounded-full dark:bg-gray-700 mt-4 mb-2.5"></div>
                <div className="h-2 w-40 bg-gray-200 rounded-full dark:bg-gray-700 mt-4 mb-2.5"></div>
            </div>}
        {/* refresh */}

        <span className="h-4" />

        <button type="button"
            onClick={() => { fetchNetworkInfo() }}
            className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white rounded-lg p-2
                dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 3V8M21 8H16M21 8L18 5.29168C16.4077 3.86656 14.3051 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.2832 21 19.8675 18.008 20.777 14"
                    stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
        {/* open in google map */}
        <a href={`https://www.google.com/maps/place/${networkInfo?.lat},${networkInfo?.lon}`} target="_blank"
            className="text-blue-600 hover:underline">
            <svg className="w-4 h-4 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </a>
    </div>
}

export default NetworkInfo