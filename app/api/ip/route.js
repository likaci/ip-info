import { NextResponse, NextRequest } from 'next/server'
import axios from 'axios'

export async function GET(request) {
    console.log('==========')
    // console.log('request', request)
    console.log('method', request.method)
    console.log('url', request.url)
    console.log('path', request.nextUrl.pathname)
    console.log('ip', request.headers.get('x-real-ip'))
    console.log('ua', request.headers.get('user-agent'))
    // console.log('header', request.headers)

    // /json|xml|csv|line
    // /json?lang=zh-CN&key=EEKS6bLi6D91G1p
    // /json/192.168.2.1
    // /json/192.168.2.1?lang=zh-CN&key=EEKS6bLi6D91G1p

    let nextUrl = request.nextUrl
    let pathName = nextUrl.pathname
    let searchParams = nextUrl.searchParams

    if (pathName.includes('/api/ip')) {
        pathName = pathName.replace('api/ip', 'json')
    }
    if (pathName.match(/^\/json$/)) {
        pathName += `/${request.headers.get('x-real-ip')}`
    }
    if (!searchParams.has('key')) {
        searchParams.append('key', 'EEKS6bLi6D91G1p')
    }

    let url = `https://pro.ip-api.com${pathName}?${nextUrl.searchParams}`
    console.log(url)
    let response = await axios.get(url, {
        headers: {
            'User-Agent': request.headers.get('user-agent'),
        }
    }).catch((error) => error.response || { data: { error: error.message } });

    console.log('response', response);

    return NextResponse.json(
        response.data,
        { status: response.status }
    )
}