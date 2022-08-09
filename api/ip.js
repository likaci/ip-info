import request from "request";

export default async function handler(req, res) {
    console.log("==========");
    console.log(req.method);
    console.log(req.query);
    console.log(req.headers);
    console.log(req.body);
    console.log(req.url);

    // /ip/192.168.2.1?lang=zh-CN&key=EEKS6bLi6D91G1p
    // json?lang=zh-CN&key=EEKS6bLi6D91G1p
    // json/?lang=zh-CN&key=EEKS6bLi6D91G1p
    // json/192.168.2.1?lang=zh-CN&key=EEKS6bLi6D91G1p

    let url = req.url.replace(/\\ip/g, "");

    let key = res.query?.key || "EEKS6bLi6D91G1p";
    let lang = res.query?.lang || "zh-CN";

    // let uri = `https://pro.ip-api.com/json/${req.headers["x-real-ip"]}?lang=${lang}&key=${key}`;
    let uri = `https://pro.ip-api.com/json/${req.headers["x-real-ip"]}?lang=${lang}&key=${key}`;
    console.log(uri);
    request(uri).pipe(res);
}