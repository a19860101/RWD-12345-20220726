// if
let x = 0;

if(x > 0){
    console.log('Success');
}

//if ... else

if(x > 0){
    console.log('Success 2');
}else{
    console.log('Error 2');
}

// if ... elseif
if(x > 0){
    console.log('正數');
}else if(x < 0){
    console.log('負數');
}else {
    console.log('Error 3');
}

// switch
let error = 212312;
switch(error){
    case 0:
        console.log('註冊成功');
        break;
    case 1:
        console.log('會員已存在');
        break;
    case 2:
        console.log('密碼錯誤');
        break;
    default:
        console.log('發生錯誤，請洽系統管理員');
}

let a = -23;

switch(true){
    case a > 0:
        console.log('+');
        break;
    case a < 0:
        console.log('-');
        break;
    default:
        console.log(0);
}