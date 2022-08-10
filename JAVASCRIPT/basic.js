var a = 10;
/* 
    1. 不可用數字開頭
    2. 不可使用特殊符號
    3. 不可使用保留字
*/

let b = 99;

console.log(b);

/* 
    var vs let
    1. 範疇(scope)不同
    2. let 不可重複宣告
*/

var a = 123;
b = b + 1;

console.log(b);


const x = 'hello';
console.log(x);
// 常數 不可重新賦值

// 資料型態

/* 
    1. 數值 Number
    2. 字串 String
    3. 布林 Boolean(true,false)
    4. 空值 Null
    5. 未定義 Undefined
    6. 陣列 Array
    7. 物件 Object
    8. 函式 Function
*/


let q = Array();
console.log(q);
console.log(typeof(q))

console.log(0.1 + 0.2)

