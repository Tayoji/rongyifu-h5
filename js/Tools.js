/**
 * Created by Tayiji on 2017/6/8.
 */

// 验证帐号是否合法
function
checkUser(str){
    var
        re = /^[a-zA-z]\w{3,15}$/;
    if(re.test(str)){
        return true;
    }else{
        return false;
    }
}
// 验证密码是否合法
function
checkPwd(str){
    var
        re = /\w{6,16}$/;
    if(re.test(str)){
        return true;
    }else{
        return false;
    }
}

// 验证验证码是否合法
function
checkCode(str){
    var
        re = /^\d{6}$/;
    if(re.test(str)){
        return true;
    }else{
        return false;
    }
}

//验证手机号码
function
checkMobile(str) {
    var
        re = /^1\d{10}$/
    if (re.test(str)) {
        return true;
    } else {
        return false;
    }
}

//验证电话号码

function
checkPhone(str){
    var
        re = /^0\d{2,3}-?\d{7,8}$/;
    if(re.test(str)){
        return true;
    }else{
        return false;
    }
}
//验证邮箱
function
checkEmail(str){
    var
        re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if(re.test(str)){
        return true;
    }else{
        return false;
    }
}

//验证银行卡
function
checkBank(str){
    var
        re = /^\d{16}|\d{19}$/;
    if(re.test(str)){
        return true;
    }else{
        return false;
    }
}

//验证身份证
function
checkCarkNo(str){
    var re = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if(re.test(str)){
        return true;
    }else{
        return false;
    }
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function convertBase64UrlToBlob(urlData){
   let path = urlData.split(',').pop();
    var bytes=window.atob(path);        //去掉url的头，并转换为byte
    //处理异常,将ascii码小于0的转换为大于0
    var ab = new ArrayBuffer(bytes.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }

    return new Blob( [ab] , {type : 'image/png'});
}