/**
 * Created by Tayiji on 2017/6/8.
 */

let host = 'http://121.15.156.140:8093';

function request(url, method, data, success, fail) {
        var parameters = new Array();
        for (var p in data) {
            let ss = p + "=" + data[p];
            parameters.push(ss);
        }
        if (parameters.length > 0) {
            // url += "?" + parameters.join("&");
        }
        console.log(url);
        $.ajax({
            url: url,
            type: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            data:data,
            // headers: {"Content-Type":"multipart/form-data;",
            //  }, // 设置请求的 header
            success: function (res) {
                success(res);
            },
            error: function (e) {
                fail(e);
            }
        })
}
function POST(url, data, success, fail) {
    request(url, "POST", data, success, fail);
}

function GET(url, data, success, fail) {
    request(url, "GET", data, success, fail);
}

