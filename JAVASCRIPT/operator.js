//運算子

let x = 10;
let y = 6;

// 算術運算子
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

// 比較運算子
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);
console.log(x == y);
console.log(x === y);
console.log(x != y);

// 賦值運算子
console.log(x = y); // x = 6
console.log(x += y); // x = x + y 12
console.log(x -= y); // x = x - y 6
console.log(x *= y); // x = x * y 36
console.log(x /= y); // x = x / y 6
console.log(x %= y); // x = x % y 0

// 邏輯運算子
console.log(x > 0 && y > 0);
console.log(x > 0 || y > 0);
console.log(!y);

// 三元運算子
let a = -10;

console.log( a > 0 ? '正數':'負數');