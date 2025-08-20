const a: Symbol = Symbol(1);
const b: Symbol = Symbol(1);

const c = {
  name: '欧辰逸',
  [a as symbol]: 1,
  [b as symbol]: 2,
};

//一起取出symbol和属性值
console.log(Reflect.ownKeys(c));

export {};
