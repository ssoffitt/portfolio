import '@webcomponents/webcomponentsjs'
import 'milligram/dist/milligram.min.css'
import choo from 'choo'
import html from 'choo/html'
import './app.css'
// import builtins from 'rollup-plugin-node-builtins';
// import 'assert'

// var assert = require('assert')
var app = choo()


app.use(countStore)
app.route('/', mainView)
// app.mount('div id="test2"')
 
function mainView (state, emit) {
  return html`
    <div id="test-t">
      <h1>count is ${state.count}</h1>
      <button onclick=${onclick}>Increment</button>
    </div>
  `

  function onclick () {
    emit('increment', 1)
  }
}

function countStore (state, emitter) {
    state.count = 0
    emitter.on('increment', function (count) {
      state.count += count
      emitter.emit('render')
    })
  }
  // const tree = app.start()
  // document.getElementById('test2').appendChild(tree)
  // document.body.appendChild(tree)
// app.mount('div')
// var main = function () {
  // return html`<div id="test">choo animals</div>`
// }

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


console.log('test23');
<<<<<<< HEAD
console.log('test18');
=======
console.log('test30');
>>>>>>> master
// if (!window.customElements.get('local-time')) {
    // console.log('registered')
    // window.CustomElement = CustomElement
    // window.customElements.define('local-time', CustomElement)
// }
