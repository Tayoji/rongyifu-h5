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
        re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
    if(re.test(str)){
        return true;
    }else{
        return false;
    }
}