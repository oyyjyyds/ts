//泛型约束
interface Len {
  length: number;
}

function getLength<T extends Len>(arg: T) {
  return arg.length;
}
console.log(getLength('123'));

//高级用法1
const obj = {
  name: '欧辰逸',
  sex: '男',
};

function ob<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

ob(obj, 'name');

//高级用法2
interface Data {
  name: string;
  age: number;
  sex?: string;
}

type Options<T extends object> = {
  [key in keyof T]: T[key];
};

type B = Options<Data>;

export {};
