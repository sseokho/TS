interface Child {
  plus: (x: number, y: number) => number;
}
const 장바구니: Child = {
  plus :(x,y) => x + y
};
console.log(장바구니.plus(3,6));
