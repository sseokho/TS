// interface LengthCheck{
//   length : number
// }
// function 함수<MyType extends LengthCheck>(x:MyType){
//   return x.length
// }

// let a = 함수<string>('21323')
// console.log(a);





// type 타입 = {
//   length : number;
// }
// function 함수<MyType extends 타입>(x:MyType){
//   return x.length
// }





// // let 값 = 함수<string>('hello') 
// let 값 = 함수<string[]>( ['kim', 'park'] ) 
// console.log(값)




interface Animal {
  name : string;
  age : number 
}


function 함수<T>(x:string){
  return JSON.parse(x)
}
let data = '{"name" : "dog", "age" : 1 }'
let 값 = 함수<Animal>(data) 




console.log(값)



// return JSON.parse(data);