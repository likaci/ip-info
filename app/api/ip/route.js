import { NextResponse, NextRequest } from 'next/server'

export async function GET(request) {
    let nextUrl = request.nextUrl
    let pathName = nextUrl.pathname
    let searchParams = nextUrl.searchParams
    let ip = request.headers.get('x-real-ip')

    console.log('==========')
    console.log('url', request.url)
    // console.log('headers', headers)
    console.log('pathName', pathName)
    console.log('ip', ip)

    // /json|xml|csv|line
    // /json?lang=zh-CN&key=EEKS6bLi6D91G1p
    // /json/192.168.2.1
    // /json/192.168.2.1?lang=zh-CN&key=EEKS6bLi6D91G1p

    if (pathName.includes('/api/ip')) {
        pathName = pathName.replace('api/ip', 'json')
    }
    if (pathName.match(/^\/(json|xml|csv|line)$/)) {
        pathName += `/${ip}`
    }
    if (!searchParams.has('key')) {
        searchParams.append('key', 'EEKS6bLi6D91G1p')
    }
    let url = `https://pro.ip-api.com${pathName}?${nextUrl.searchParams}`
    console.log('url', url)

    return fetch(url)
}