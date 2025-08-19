//联合类型
let myPhone: number | string = '010-820';

const fn = (flag: number | boolean): boolean => {
  return !!flag;
};
console.log('fn(1)===>', fn(1));

//交叉类型
interface A {
  name: string;
}
interface B {
  age: number;
}
const a: A & B = {
  name: 'ouchenyi',
  age: 18,
};

console.log('a===>', a);

//类型断言
interface C {
  run: string;
}
interface D {
  build: string;
}

const c = (type: C | D): string => {
  return (type as C).run;
};

console.log('c===>', c);

export {};
