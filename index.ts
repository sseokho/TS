interface CarType {
  model : string,
  a:number,
  tax : (price :number) => number;
}

class Car implements CarType {
  model = "ㄹㅇㄹ";   ///any 타입됨
  a = 10
  tax (a){   ///a 파라미터는 any 타입됨 
    return a * 0.1
  }
}