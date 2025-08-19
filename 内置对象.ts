//es的内置对象 Boolean Number String RegExp Date Error

//dom和bom的内置对象 HTMLDivElement HTMLElement NodeList NodeListOf
// const div: NodeListOf<HTMLDivElement | HTMLSpanElement | HTMLElement> =
//   document.querySelectorAll('div');

//promise的类型说明
function promise(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    resolve('123');
  });
}

promise().then((value) => {
  console.log(value);
});

export {};
