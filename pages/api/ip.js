import request from "request";

export default async function handler(req, res) {
    console.log("==========");
    console.log(req.method);
    console.log(req.query);
    console.log(req.headers);
    console.log(req.body);
    console.log(req.url);

    // json|xml|csv|line
    // json?lang=zh-CN&key=EEKS6bLi6D91G1p
    // json/192.168.2.1
    // json/192.168.2.1?lang=zh-CN&key=EEKS6bLi6D91G1p

    let url = req.url;

    if (url.match(/^\/(json|xml|csv|line)$/g)) {
        url += `/${req.headers["x-real-ip"]}`
    }
    if (!req.query?.key) {
        url += (url.includes("?") ? "&" : "?") + "key=EEKS6bLi6D91G1p";
    }
    if (!req.query?.lang) {
        url += (url.includes("?") ? "&" : "?") + "lang=zh-CN"
    }
    url = `https://pro.ip-api.com${url}`;
    console.log(url);
    request(url).pipe(res);
}