abstract class A {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract init(): void;
}

class B extends A {
  constructor(name: string) {
    super(name);
  }
  init(): void {
    console.log(this.name);
  }
}

const b = new B('我是B');
b.init();
