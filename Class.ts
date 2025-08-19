interface Options {
  el: string | HTMLElement;
}
interface VCls {
  options: Options;
  init(): void;
  demo(): void;
}

interface Vnode {
  tag: string;
  text?: string;
  children?: Vnode[];
}

class Dom {
  //创建节点
  createElement(el: string) {
    return document.createElement(el);
  }
  //填充文本
  setText(el: HTMLElement, text: string) {
    el.textContent = text;
  }
  //渲染函数
  render(data: Vnode): HTMLElement {
    // 明确返回类型

    const root = this.createElement(data.tag);

    if (data.text) {
      this.setText(root, data.text);
    }

    if (data.children && Array.isArray(data.children)) {
      data.children.forEach((item) => {
        let child = this.render(item);
        root.appendChild(child);
      });
    }

    return root;
  }
}

class Vue extends Dom implements VCls {
  options: Options;
  constructor(options: Options) {
    super();
    this.options = options;
    this.init();
  }
  init(): void {
    let data: Vnode = {
      tag: 'div',
      children: [
        {
          tag: 'section',
          text: '我是子节点1',
          children: [
            {
              tag: 'section',
              text: '我是子节点1的子节点',
              children: [
                {
                  tag: 'section',
                  text: '我是子节点1的子节点的子节点',
                },
              ],
            },
          ],
        },
        { tag: 'section', text: '我是子节点2' },
      ],
    };

    let app =
      typeof this.options.el == 'string'
        ? document.querySelector(this.options.el)
        : this.options.el;
    app.appendChild(this.render(data));
  }
  demo(): void {
    console.log('测试一下');
  }
}

new Vue({
  el: '#app',
}).demo();
