// const obj = Object();
// obj.id = 1;
// obj.name = 'John';
// obj.mail = 'john1234@gmail.com'

const obj = {
    id: 1,
    name: 'John',
    mail: 'john333@gmail.com'
}
console.log(obj);
console.log(obj.id);
console.log(obj.name);
console.log(obj.mail);
console.log(obj['id']);
console.log(obj['name']);
console.log(obj['mail']);

const drinks = [
    {
        id: 1,
        name: '阿薩姆紅茶',
        price: 20
    },
    {
        id: 2,
        name: '茉莉綠茶',
        price: 20,
    },{
        id: 3,
        name: '珍珠奶茶',
        price: 45,
    },
    {
        id: 4,
        name: '冰淇淋紅茶',
        price: 55
    }
];
console.log(drinks);

const drink_name = drinks.map(function(data){
    return data.name;
})
const drink_price = drinks.map(function(data){
    return data.price;
})

console.log(drink_name)
console.log(drink_price)