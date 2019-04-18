/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.
*/

function parseQueryString(url) {
    if (url.indexOf('?') === -1) return undefined;
    const result = [];
    url.split('?')[1].split('&').forEach(str => {
        let arr = str.split('=');
        for (let i = 0; i < arr.length; i++) {
            arr[i] = decodeURIComponent(arr[i]);
        }
        result.push(arr);
    })
    return result;
};

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined