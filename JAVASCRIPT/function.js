

// function declaration 函式宣告式 (提升性)
function test(){
    alert('test');
}



// function expression 函式表達式
const test2 = function(){
    alert('test2');
}


// function area(x,y){
//     return x * y;
// }

// console.log(area(12,24));

// const square = function(x){
//     return x * x;
// }
// console.log(square(11));

// 箭頭函式

// const square = (x) => {
//     return x * x;
// }

// 參數只有一個的時候，小括號可以省略
// const square = x => {
//     return x * x;
// }

// 動作只有return時，大括號跟return可省略
const square = x => x * x;

console.log(square(11));
// 箭頭函式的this跟一般函式有些許不同