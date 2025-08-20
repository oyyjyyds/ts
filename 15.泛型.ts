//函数泛型
function Fn<T, K>(a: T, b: K): Array<T | K> {
  return [a, b];
}

console.log('===>', Fn<number, boolean>(1, false));

//泛型接口
interface A<T> {
  title: T;
}
const a: A<number> = { title: 123 };

console.log('a===>', a);

export {};
