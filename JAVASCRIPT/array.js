// const a = new Array();
// a[0] = 'Apple';
// a[1] = 'Banana';
// a[2] = 'Cat';

// const a = new Array('Apple','Banana','Cat');

const a = ['Apple','Banana','Cat','Dog'];
// console.log(a);
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);

console.log(a.length);

//陣列迭代
// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
// }

for(let i in a){
    console.log(i);
    // console.log(a[i]);
}

for(let data of a){
    console.log(data);
}