// type 타입추출<T> = T extends ( () => infer R) ? R :unknown;

// type a = 타입추출< ()=> void >


// type b = ReturnType<() => void>



type Age<T> = T extends [string, ...any ] ? T[0] : unknown;
let age1 :Age<[string, number]>;
let age2 :Age<[boolean, number]>;



type 타입뽑기<T> = T extends (x :infer R) => any  ? R : any

type a = 타입뽑기<(x :string) => void>