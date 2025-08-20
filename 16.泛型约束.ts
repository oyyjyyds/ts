const obj = {
  name: '欧辰逸',
  sex: '男',
};

function ob<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

ob(obj, 'name');
export {};
