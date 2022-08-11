var a = 100;

var a = 999;

console.log(a);

// var -> function scope
// let -> block scope

function test (){
    var q = 100;
    let x = 100;
}

if(a){
    let z1 = 100;
    var z2 = 100;
}
console.log(z1)
