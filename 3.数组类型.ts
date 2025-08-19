const arr1: number[] = [1, 2, 3];
//或者
const arr2: Array<number> = [1, 2, 3];

console.log('arr1===>', arr1);
console.log('arr2===>', arr2);

//二维数组
const arr3: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
//或者
const arr4: Array<Array<number>> = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log('arr3===>', arr3);
console.log('arr4===>', arr4);

//any 和类数组
const fn1 = function (...args: number[]) {
  let arg: IArguments = arguments;
  console.log('arg===>', arg);
  console.log('args===>', args);
};

fn1(1, 2, 3);

export {};
