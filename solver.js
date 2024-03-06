/*
░█▀▀░▀█▀░█▀▀▄░█▀▀▄░█░░░▀░░█▀▀▄░█░▄░░░█░░░░█▀▄░█▀▀▄░▄▀▀▄
░▀▀▄░░█░░█▄▄█░█▄▄▀░█░░░█▀░█░▒█░█▀▄░░░█▀▀█░█░░░█▄▄█░█▄▄█
░▀▀▀░░▀░░▀░░▀░▀░▀▀░▀▀░▀▀▀░▀░░▀░▀░▀░░░▀░░▀░▀▀▀░▀░░▀░█░░░

** captcha token generator for starlink.com
** reversed by x.com/machiyouness
** March 6, 2024
*/


const hsw = require("./hsw_obf")();
const axios = require("axios");
const qs = require('qs');

axios.request({
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.hcaptcha.com/checksiteconfig?v=fadb9c6&host=www.starlink.com&sitekey=f21f5897-3544-42b2-9749-62443db53797&sc=1&swa=1&spst=0',
  headers: { 
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0', 
    'Accept': 'application/json', 
    'Accept-Language': 'en-US,en;q=0.5', 
    'Accept-Encoding': 'gzip, deflate, br', 
    'Content-Type': 'text/plain', 
    'Origin': 'https://newassets.hcaptcha.com', 
    'Alt-Used': 'api.hcaptcha.com', 
    'Connection': 'keep-alive', 
    'Referer': 'https://newassets.hcaptcha.com/', 
    'Cookie': 'hmt_id=956b0397-64de-448a-ae0b-bd72a67aec1f', 
    'Sec-Fetch-Dest': 'empty', 
    'Sec-Fetch-Mode': 'cors', 
    'Sec-Fetch-Site': 'same-site', 
    'Content-Length': '0'
  }
})
.then((response) => {
  const checksiteconfig = response.data.c;
  hsw(checksiteconfig.req, {
    "assethost": null,
    "href": "https://www.starlink.com/",
    "ardata": "nwkFPM5f6STXCpKWdEJprog+xdFpcIqeTwQ+7hk3ByqpPS7u6GWnEA+Xjbq2T7m6YF6T09IdFjOCDnG8ZyoKCpyqnolynx72Qy8HfLaMe0Scg0BkAQ==a+7zjp0Hw8tT38QR"
  }).then((n) => {
    let data = qs.stringify({
      'v': 'fadb9c6',
      'sitekey': 'f21f5897-3544-42b2-9749-62443db53797',
      'host': 'www.starlink.com',
      'hl': 'en',
      'motionData': '{"st":1709668032010,"v":1,"topLevel":{"st":1709668007059,"sc":{"availWidth":1920,"availHeight":1030,"width":1920,"height":1080,"colorDepth":24,"pixelDepth":24,"top":0,"left":0,"availTop":26,"availLeft":0,"mozOrientation":"landscape-primary","onmozorientationchange":null},"nv":{"permissions":{},"pdfViewerEnabled":true,"doNotTrack":"unspecified","maxTouchPoints":0,"mediaCapabilities":{},"oscpu":"Linux x86_64","vendor":"","vendorSub":"","productSub":"20100101","cookieEnabled":true,"buildID":"20181001000000","mediaDevices":{},"serviceWorker":{},"credentials":{},"clipboard":{},"mediaSession":{},"webdriver":false,"hardwareConcurrency":4,"geolocation":{},"appCodeName":"Mozilla","appName":"Netscape","appVersion":"5.0 (X11)","platform":"Linux x86_64","userAgent":"Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0","product":"Gecko","language":"en-US","languages":["en-US","en"],"locks":{},"onLine":true,"storage":{},"plugins":["internal-pdf-viewer","internal-pdf-viewer","internal-pdf-viewer","internal-pdf-viewer","internal-pdf-viewer"]},"dr":"","inv":true,"exec":true,"wn":[],"wn-mp":0,"xy":[],"xy-mp":0,"mm":[],"mm-mp":59.59000000000001,"md":[],"md-mp":2014.5,"mu":[],"mu-mp":2011},"session":[],"widgetList":["0zxjr3wd5qbe"],"widgetId":"0zxjr3wd5qbe","href":"https://www.starlink.com/","prev":{"escaped":false,"passed":false,"expiredChallenge":false,"expiredResponse":false}}',
      'pdc': '{"s":1709668032104,"n":0,"p":299379,"gcs":300515}',
      'n': n,
      'c': JSON.stringify(checksiteconfig)
    });

    axios.request({
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.hcaptcha.com/getcaptcha/f21f5897-3544-42b2-9749-62443db53797',
      headers: { 
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0', 
        'Accept': 'application/json', 
        'Accept-Language': 'en-US,en;q=0.5', 
        'Accept-Encoding': 'gzip, deflate, br', 
        'content-type': 'application/x-www-form-urlencoded', 
        'Origin': 'https://newassets.hcaptcha.com', 
        'Alt-Used': 'api.hcaptcha.com', 
        'Connection': 'keep-alive', 
        'Referer': 'https://newassets.hcaptcha.com/', 
        'Cookie': 'hmt_id=956b0397-64de-448a-ae0b-bd72a67aec1f', 
        'Sec-Fetch-Dest': 'empty', 
        'Sec-Fetch-Mode': 'cors', 
        'Sec-Fetch-Site': 'same-site'
      },
      data : data
    })
    .then((response) => {
      console.log(response.data.generated_pass_UUID)
    })
    .catch((error) => {
      console.log(error);
    });
  });
})
.catch((error) => {
  console.log(error);
});
