//重名的interface可以合并
interface A {
  name: string;
}
interface A {
  age: number;
}

const a: A = {
  name: '欧辰逸',
  age: 18,
};

console.log('a===>', a);

//interface可以被继承
interface B extends A {
  address?: string; //可选链
}

const b: B = {
  name: '欧辰逸',
  age: 18,
};

console.log('b===>', b);

//任意属性
interface Person {
  readonly id: number; //readonly : 只读属性
  name: string;
  age: number;
  [propName: string]: any;
}

const person: Person = {
  id: 1,
  name: '欧辰逸',
  age: 18,
  sex: '男',
};

console.log('person===>', person);

//声明函数
interface Fn {
  (a: number): Number[];
}

const fn: Fn = (a: number) => {
  return [1, 2, 3];
};

console.log('fn()===>', fn(1));

export {};
