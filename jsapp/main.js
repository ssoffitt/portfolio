import '@webcomponents/webcomponentsjs'
import 'milligram/dist/milligram.min.css'
import 'choo'
import 'choo/html'
import './app.css'
// import builtins from 'rollup-plugin-node-builtins';
// import 'assert'

// var assert = require('assert')

var main = function () {
  return html`<div id="test">choo animals</div>`
}

// Choo.route('/', main)
// Choo.mount('div id="test2"')



// class CustomElement extends HTMLElement {
    // static get observedAttributes() {
        // return ['title', 'other']
    // }

    // Returns nothing.
    // attributeChangedCallback(attrName, oldValue, newValue) {
        // if (attrName !== '') {
            // const val = this.getAttribute(attrName);
            // this.setAttribute(attrName + 'changed', val);
        // }
        // this.textContent = this.getAttribute('title')
    // }
// }


console.log('test');
console.log('test22');
console.log('test3');
// if (!window.customElements.get('local-time')) {
    // console.log('registered')
    // window.CustomElement = CustomElement
    // window.customElements.define('local-time', CustomElement)
// }
