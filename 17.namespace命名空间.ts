//基础用法
namespace a {
  export const Time: number = 1000;
  export const fn = <T>(arg: T): T => {
    return arg;
  };
  fn(Time);
}

a.Time;

//嵌套使用
namespace a {
  export namespace b {
    export const demo = '123';
  }
}

let v = a.b.demo;
//其他文件导入引用
// import { a } from './17.namespace命名空间';
//  import c=a.b.demo;  或者 const c = a.b.demo;

//常用兼容不同端的类型声明
namespace ios {
  export const sendmsg = (msg: string, type: string) => {
    console.log(msg, type);
  };
}

namespace android {
  export const sendmsg = (msg: string) => {
    console.log(msg);
  };
}
