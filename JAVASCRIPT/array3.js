const drinks = ['紅茶','綠茶','奶茶','拿鐵','冰淇淋紅茶'];

// forEach()
drinks.forEach(function(data,idx){
    console.log(data,idx);
})

// map()
const scores = [64,88,57,92,72,88,55];
// const scores_good = scores.map(function(data){
//     return data >= 80;
// })
const scores_good = scores.map(function(data){
    // if(data >= 80){
    //     return 'Good';
    // }else{
    //     return '再加油';
    // }

    return data>=80 ? 'Good':'再加油';
})
console.log(scores_good);


// filter()
const scores_filter = scores.filter(function(data){
    return data != 64;
})
console.log(scores_filter);

// reduce()
const price = [100,65,30];

const total = price.reduce(function(a,b){
    // console.log('a:'+ a);
    // console.log('b:' + b);
    return a+b;
})
console.log(total);