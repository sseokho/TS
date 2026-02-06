"use strict";
// 숙제 2
// interface Animal {
//   name : string;
//   age : number
// }
// function 함수<T extends Animal>(x:string):T{
//   return JSON.parse(x)
// }
// let data = '{"name" : "dog", "age" : 1 }';
// let 값 = 함수<Animal>(data)
// console.log(값);
// class Person<T extends string | number | string[]> {
//   name: T;
//   constructor(a :T){
//     this.name = a;
//   }
// }
// let a = new Person<string>('어쩌구');
// let b = new Person<number>(123);
// let c = new Person<string[]>(["gg","gg"]);
// a.name //any 타입이 되었넹
