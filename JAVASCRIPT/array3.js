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