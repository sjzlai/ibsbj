let baseUrl;
let imgBaseUrl;

if (process.env.NODE_ENV === 'production') {
    baseUrl = 'http://admin.ibs-bj.com';
    imgBaseUrl = 'http://admin.ibs-bj.com/';
} else {
    baseUrl = '';
    imgBaseUrl = 'http://admin.ibs-bj.com/';
}

export {
    baseUrl,
    imgBaseUrl
}
