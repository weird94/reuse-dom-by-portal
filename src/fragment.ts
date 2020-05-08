export default class Fragment extends HTMLElement {
  constructor() {
    super();
    const children = this.children;
    console.log('children', children);
  }
}

customElements.define('x-fragment', Fragment);
