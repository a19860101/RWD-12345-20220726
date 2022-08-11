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


// split()
let str ='test,test1,test2,test3,test4';
console.log(str.split(','))
console.log(drinks);


const numberArray = [12,46,6,24,92];
const letterArray = ['c','a','h','f'];
// sort()
console.log(letterArray.sort())

// reverse()
console.log(letterArray.reverse())

// indexOf()
let test = 'apple';
console.log(test.indexOf('z'));

console.log(drinks.indexOf('奶茶'));

// concat()
console.log(drinks.concat(numberArray));
console.log(numberArray.concat(drinks));