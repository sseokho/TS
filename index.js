"use strict";
// interface LengthCheck{
//   length : number
// }
// function 함수<MyType extends LengthCheck>(x:MyType){
//   return x.length
// }
function 함수(x) {
    return JSON.parse(x);
}
var data = '{"name" : "dog", "age" : 1 }';
var 값 = 함수(data);
console.log(값);
// return JSON.parse(data);
