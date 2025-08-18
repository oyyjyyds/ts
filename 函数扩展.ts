//基础的省略

// 1.ts中this是可以定义类型的
interface Obj {
  list: number[];
  add: (this: Obj, n: number) => void;
}

const obj: Obj = {
  list: [1, 2, 3],
  add(this: Obj, n: number) {
    this.list.push(n);
  },
};

obj.add(4);
console.log('obj===>', obj);

//2.函数重载
function fn(a: string): string;
function fn(a: number): number;
function fn(a: any): any {
  return a;
}

console.log(fn('12'));

export {};
