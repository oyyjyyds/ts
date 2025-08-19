//never类型表示不应该存在的类型

//返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

function loop(): never {
  while (true) {}
}

//运用场景-兜底逻辑
type A = '欧辰逸' | '小欧';

// type A = '欧辰逸' | '小欧' | 'ouchen';

function isA(value: A) {
  switch (value) {
    case '欧辰逸':
      return true;
    case '小欧':
      return false;
    default:
      const error: never = value;
      return error;
  }
}

export {};
