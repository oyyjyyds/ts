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

export {};
