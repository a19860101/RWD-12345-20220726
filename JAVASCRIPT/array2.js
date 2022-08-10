const drinks = ['紅茶','綠茶','奶茶','拿鐵'];

// push()
drinks.push('美式咖啡');

// pop()
drinks.pop();

// unshift()
drinks.unshift('可樂');

// shift()
drinks.shift()

// splice()
// drinks.splice(1,1,'茉莉綠茶','test');
// drinks.splice(0,1);

// slice()
let myDrinks = drinks.slice(0,2);
console.log(myDrinks);

// join()
let drinkStr = drinks.join('+++');
console.log(drinkStr);

// toString()
let drinkStr2 = drinks.toString();
console.log(drinkStr2);

console.log(drinks);