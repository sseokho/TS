type Age<T> = T extends [string, ...any] ? T[0] : unknown;
declare let age1: Age<[string, number]>;
declare let age2: Age<[boolean, number]>;
type 타입뽑기<T> = T extends (x: infer R) => void ? R : any;
type a = 타입뽑기<(x: string) => void>;
