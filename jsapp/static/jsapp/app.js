(function () {
	'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/**
	@license @nocompile
	Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
	This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	Code distributed by Google as part of the polymer project is also
	subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	*/
	(function(){/*

	 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
	 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	 Code distributed by Google as part of the polymer project is also
	 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	*/
	var r,t="undefined"!=typeof window&&window===this?this:"undefined"!=typeof commonjsGlobal&&null!=commonjsGlobal?commonjsGlobal:this,ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value);};function ca(){ca=function(){};t.Symbol||(t.Symbol=da);}var da=function(){var a=0;return function(b){return "jscomp_symbol_"+(b||"")+a++}}();
	function ea(){ca();var a=t.Symbol.iterator;a||(a=t.Symbol.iterator=t.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(this)}});ea=function(){};}function fa(a){var b=0;return ha(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ha(a){ea();a={next:a};a[t.Symbol.iterator]=function(){return this};return a}function ia(a){ea();var b=a[Symbol.iterator];return b?b.call(a):fa(a)}
	function ja(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var ka;if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={Ga:!0},na={};try{na.__proto__=ma;la=na.Ga;break a}catch(a){}la=!1;}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null;}var oa=ka;function pa(){this.f=!1;this.b=null;this.ca=void 0;this.a=1;this.F=0;this.c=null;}
	function qa(a){if(a.f)throw new TypeError("Generator is already running");a.f=!0;}pa.prototype.u=function(a){this.ca=a;};function ra(a,b){a.c={Ja:b,Na:!0};a.a=a.F;}pa.prototype.return=function(a){this.c={return:a};this.a=this.F;};function sa(a,b){a.a=3;return {value:b}}function ta(a){this.a=new pa;this.b=a;}function ua(a,b){qa(a.a);var c=a.a.b;if(c)return va(a,"return"in c?c["return"]:function(a){return {value:a,done:!0}},b,a.a.return);a.a.return(b);return wa(a)}
	function va(a,b,c,d){try{var e=b.call(a.a.b,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.a.f=!1,e;var f=e.value;}catch(g){return a.a.b=null,ra(a.a,g),wa(a)}a.a.b=null;d.call(a.a,f);return wa(a)}function wa(a){for(;a.a.a;)try{var b=a.b(a.a);if(b)return a.a.f=!1,{value:b.value,done:!1}}catch(c){a.a.ca=void 0,ra(a.a,c);}a.a.f=!1;if(a.a.c){b=a.a.c;a.a.c=null;if(b.Na)throw b.Ja;return {value:b.return,done:!0}}return {value:void 0,done:!0}}
	function xa(a){this.next=function(b){qa(a.a);a.a.b?b=va(a,a.a.b.next,b,a.a.u):(a.a.u(b),b=wa(a));return b};this.throw=function(b){qa(a.a);a.a.b?b=va(a,a.a.b["throw"],b,a.a.u):(ra(a.a,b),b=wa(a));return b};this.return=function(b){return ua(a,b)};ea();this[Symbol.iterator]=function(){return this};}function Aa(a,b){b=new xa(new ta(b));oa&&oa(b,a.prototype);return b}
	(function(){if(!function(){var a=document.createEvent("Event");a.initEvent("foo",!0,!0);a.preventDefault();return a.defaultPrevented}()){var a=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(a.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return !0},configurable:!0}));};}var b=/Trident/.test(navigator.userAgent);if(!window.CustomEvent||b&&"function"!==typeof window.CustomEvent)window.CustomEvent=function(a,b){b=b||{};var c=document.createEvent("CustomEvent");
	c.initCustomEvent(a,!!b.bubbles,!!b.cancelable,b.detail);return c},window.CustomEvent.prototype=window.Event.prototype;if(!window.Event||b&&"function"!==typeof window.Event){var c=window.Event;window.Event=function(a,b){b=b||{};var c=document.createEvent("Event");c.initEvent(a,!!b.bubbles,!!b.cancelable);return c};if(c)for(var d in c)window.Event[d]=c[d];window.Event.prototype=c.prototype;}if(!window.MouseEvent||b&&"function"!==typeof window.MouseEvent){b=window.MouseEvent;window.MouseEvent=function(a,
	b){b=b||{};var c=document.createEvent("MouseEvent");c.initMouseEvent(a,!!b.bubbles,!!b.cancelable,b.view||window,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget);return c};if(b)for(d in b)window.MouseEvent[d]=b[d];window.MouseEvent.prototype=b.prototype;}Array.from||(Array.from=function(a){return [].slice.call(a)});Object.assign||(Object.assign=function(a,b){for(var c=[].slice.call(arguments,1),d=0,e;d<c.length;d++)if(e=c[d])for(var f=
	a,n=e,p=Object.getOwnPropertyNames(n),G=0;G<p.length;G++)e=p[G],f[e]=n[e];return a});})(window.WebComponents);(function(){function a(){}function b(a,b){if(!a.childNodes.length)return [];switch(a.nodeType){case Node.DOCUMENT_NODE:return Q.call(a,b);case Node.DOCUMENT_FRAGMENT_NODE:return Ab.call(a,b);default:return x.call(a,b)}}var c="undefined"===typeof HTMLTemplateElement,d=!(document.createDocumentFragment().cloneNode()instanceof DocumentFragment),e=!1;/Trident/.test(navigator.userAgent)&&function(){function a(a,b){if(a instanceof DocumentFragment)for(var d;d=a.firstChild;)c.call(this,d,b);else c.call(this,
	a,b);return a}e=!0;var b=Node.prototype.cloneNode;Node.prototype.cloneNode=function(a){a=b.call(this,a);this instanceof DocumentFragment&&(a.__proto__=DocumentFragment.prototype);return a};DocumentFragment.prototype.querySelectorAll=HTMLElement.prototype.querySelectorAll;DocumentFragment.prototype.querySelector=HTMLElement.prototype.querySelector;Object.defineProperties(DocumentFragment.prototype,{nodeType:{get:function(){return Node.DOCUMENT_FRAGMENT_NODE},configurable:!0},localName:{get:function(){},
	configurable:!0},nodeName:{get:function(){return "#document-fragment"},configurable:!0}});var c=Node.prototype.insertBefore;Node.prototype.insertBefore=a;var d=Node.prototype.appendChild;Node.prototype.appendChild=function(b){b instanceof DocumentFragment?a.call(this,b,null):d.call(this,b);return b};var f=Node.prototype.removeChild,g=Node.prototype.replaceChild;Node.prototype.replaceChild=function(b,c){b instanceof DocumentFragment?(a.call(this,b,c),f.call(this,c)):g.call(this,b,c);return c};Document.prototype.createDocumentFragment=
	function(){var a=this.createElement("df");a.__proto__=DocumentFragment.prototype;return a};var h=Document.prototype.importNode;Document.prototype.importNode=function(a,b){b=h.call(this,a,b||!1);a instanceof DocumentFragment&&(b.__proto__=DocumentFragment.prototype);return b};}();var f=Node.prototype.cloneNode,g=Document.prototype.createElement,h=Document.prototype.importNode,k=Node.prototype.removeChild,m=Node.prototype.appendChild,n=Node.prototype.replaceChild,p=DOMParser.prototype.parseFromString,
	G=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML")||{get:function(){return this.innerHTML},set:function(a){this.innerHTML=a;}},u=Object.getOwnPropertyDescriptor(window.Node.prototype,"childNodes")||{get:function(){return this.childNodes}},x=Element.prototype.querySelectorAll,Q=Document.prototype.querySelectorAll,Ab=DocumentFragment.prototype.querySelectorAll,Bb=function(){if(!c){var a=document.createElement("template"),b=document.createElement("template");b.content.appendChild(document.createElement("div"));
	a.content.appendChild(b);a=a.cloneNode(!0);return 0===a.content.childNodes.length||0===a.content.firstChild.content.childNodes.length||d}}();if(c){var T=document.implementation.createHTMLDocument("template"),Ka=!0,q=document.createElement("style");q.textContent="template{display:none;}";var ya=document.head;ya.insertBefore(q,ya.firstElementChild);a.prototype=Object.create(HTMLElement.prototype);var Z=!document.createElement("div").hasOwnProperty("innerHTML");a.P=function(b){if(!b.content&&b.namespaceURI===
	document.documentElement.namespaceURI){b.content=T.createDocumentFragment();for(var c;c=b.firstChild;)m.call(b.content,c);if(Z)b.__proto__=a.prototype;else if(b.cloneNode=function(b){return a.b(this,b)},Ka)try{l(b),y(b);}catch(jh){Ka=!1;}a.a(b.content);}};var X={option:["select"],thead:["table"],col:["colgroup","table"],tr:["tbody","table"],th:["tr","tbody","table"],td:["tr","tbody","table"]},l=function(b){Object.defineProperty(b,"innerHTML",{get:function(){return aa(this)},set:function(b){var c=X[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(b)||
	["",""])[1].toLowerCase()];if(c)for(var d=0;d<c.length;d++)b="<"+c[d]+">"+b+"</"+c[d]+">";T.body.innerHTML=b;for(a.a(T);this.content.firstChild;)k.call(this.content,this.content.firstChild);b=T.body;if(c)for(d=0;d<c.length;d++)b=b.lastChild;for(;b.firstChild;)m.call(this.content,b.firstChild);},configurable:!0});},y=function(a){Object.defineProperty(a,"outerHTML",{get:function(){return "<template>"+this.innerHTML+"</template>"},set:function(a){if(this.parentNode){T.body.innerHTML=a;for(a=this.ownerDocument.createDocumentFragment();T.body.firstChild;)m.call(a,
	T.body.firstChild);n.call(this.parentNode,a,this);}else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");},configurable:!0});};l(a.prototype);y(a.prototype);a.a=function(c){c=b(c,"template");for(var d=0,e=c.length,f;d<e&&(f=c[d]);d++)a.P(f);};document.addEventListener("DOMContentLoaded",function(){a.a(document);});Document.prototype.createElement=function(){var b=g.apply(this,arguments);"template"===b.localName&&a.P(b);return b};DOMParser.prototype.parseFromString=
	function(){var b=p.apply(this,arguments);a.a(b);return b};Object.defineProperty(HTMLElement.prototype,"innerHTML",{get:function(){return aa(this)},set:function(b){G.set.call(this,b);a.a(this);},configurable:!0,enumerable:!0});var Y=/[&\u00A0"]/g,Cb=/[&\u00A0<>]/g,La=function(a){switch(a){case "&":return "&amp;";case "<":return "&lt;";case ">":return "&gt;";case '"':return "&quot;";case "\u00a0":return "&nbsp;"}};q=function(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b};var za=q("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
	Ma=q("style script xmp iframe noembed noframes plaintext noscript".split(" ")),aa=function(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):u.get.call(a),e=0,f=d.length,g;e<f&&(g=d[e]);e++){a:{var h=g;var k=a;var m=b;switch(h.nodeType){case Node.ELEMENT_NODE:for(var l=h.localName,n="<"+l,p=h.attributes,x=0;k=p[x];x++)n+=" "+k.name+'="'+k.value.replace(Y,La)+'"';n+=">";h=za[l]?n:n+aa(h,m)+"</"+l+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&Ma[k.localName]?h:h.replace(Cb,La);break a;
	case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),Error("not implemented");}}c+=h;}return c};}if(c||Bb){a.b=function(a,b){var c=f.call(a,!1);this.P&&this.P(c);b&&(m.call(c.content,f.call(a.content,!0)),Na(c.content,a.content));return c};var Na=function(c,d){if(d.querySelectorAll&&(d=b(d,"template"),0!==d.length)){c=b(c,"template");for(var e=0,f=c.length,g,h;e<f;e++)h=d[e],g=c[e],a&&a.P&&a.P(h),n.call(g.parentNode,mf.call(h,!0),g);}},mf=Node.prototype.cloneNode=
	function(b){if(!e&&d&&this instanceof DocumentFragment)if(b)var c=nf.call(this.ownerDocument,this,!0);else return this.ownerDocument.createDocumentFragment();else this.nodeType===Node.ELEMENT_NODE&&"template"===this.localName&&this.namespaceURI==document.documentElement.namespaceURI?c=a.b(this,b):c=f.call(this,b);b&&Na(c,this);return c},nf=Document.prototype.importNode=function(c,d){d=d||!1;if("template"===c.localName)return a.b(c,d);var e=h.call(this,c,d);if(d){Na(e,c);c=b(e,'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');
	for(var f,k=0;k<c.length;k++){f=c[k];d=g.call(document,"script");d.textContent=f.textContent;for(var m=f.attributes,l=0,p;l<m.length;l++)p=m[l],d.setAttribute(p.name,p.value);n.call(f.parentNode,d,f);}}return e};}c&&(window.HTMLTemplateElement=a);})();var Ba=setTimeout;function Ca(){}function Da(a,b){return function(){a.apply(b,arguments);}}function v(a){if(!(this instanceof v))throw new TypeError("Promises must be constructed via new");if("function"!==typeof a)throw new TypeError("not a function");this.I=0;this.sa=!1;this.w=void 0;this.S=[];Ea(a,this);}
	function Fa(a,b){for(;3===a.I;)a=a.w;0===a.I?a.S.push(b):(a.sa=!0,Ga(function(){var c=1===a.I?b.Pa:b.Qa;if(null===c)(1===a.I?Ha:Ia)(b.oa,a.w);else{try{var d=c(a.w);}catch(e){Ia(b.oa,e);return}Ha(b.oa,d);}}));}function Ha(a,b){try{if(b===a)throw new TypeError("A promise cannot be resolved with itself.");if(b&&("object"===typeof b||"function"===typeof b)){var c=b.then;if(b instanceof v){a.I=3;a.w=b;Ja(a);return}if("function"===typeof c){Ea(Da(c,b),a);return}}a.I=1;a.w=b;Ja(a);}catch(d){Ia(a,d);}}
	function Ia(a,b){a.I=2;a.w=b;Ja(a);}function Ja(a){2===a.I&&0===a.S.length&&Ga(function(){a.sa||"undefined"!==typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",a.w);});for(var b=0,c=a.S.length;b<c;b++)Fa(a,a.S[b]);a.S=null;}function Oa(a,b,c){this.Pa="function"===typeof a?a:null;this.Qa="function"===typeof b?b:null;this.oa=c;}function Ea(a,b){var c=!1;try{a(function(a){c||(c=!0,Ha(b,a));},function(a){c||(c=!0,Ia(b,a));});}catch(d){c||(c=!0,Ia(b,d));}}
	v.prototype["catch"]=function(a){return this.then(null,a)};v.prototype.then=function(a,b){var c=new this.constructor(Ca);Fa(this,new Oa(a,b,c));return c};v.prototype["finally"]=function(a){var b=this.constructor;return this.then(function(c){return b.resolve(a()).then(function(){return c})},function(c){return b.resolve(a()).then(function(){return b.reject(c)})})};
	function Pa(a){return new v(function(b,c){function d(a,g){try{if(g&&("object"===typeof g||"function"===typeof g)){var h=g.then;if("function"===typeof h){h.call(g,function(b){d(a,b);},c);return}}e[a]=g;0===--f&&b(e);}catch(n){c(n);}}if(!a||"undefined"===typeof a.length)throw new TypeError("Promise.all accepts an array");var e=Array.prototype.slice.call(a);if(0===e.length)return b([]);for(var f=e.length,g=0;g<e.length;g++)d(g,e[g]);})}
	function Qa(a){return a&&"object"===typeof a&&a.constructor===v?a:new v(function(b){b(a);})}function Ra(a){return new v(function(b,c){c(a);})}function Sa(a){return new v(function(b,c){for(var d=0,e=a.length;d<e;d++)a[d].then(b,c);})}var Ga="function"===typeof setImmediate&&function(a){setImmediate(a);}||function(a){Ba(a,0);};/*

	Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	Code distributed by Google as part of the polymer project is also
	subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	*/
	if(!window.Promise){window.Promise=v;v.prototype.then=v.prototype.then;v.all=Pa;v.race=Sa;v.resolve=Qa;v.reject=Ra;var Ta=document.createTextNode(""),Ua=[];(new MutationObserver(function(){for(var a=Ua.length,b=0;b<a;b++)Ua[b]();Ua.splice(0,a);})).observe(Ta,{characterData:!0});Ga=function(a){Ua.push(a);Ta.textContent=0<Ta.textContent.length?"":"a";};}(function(a,b){if(!(b in a)){var c=typeof commonjsGlobal===typeof c?window:commonjsGlobal,d=0,e=""+Math.random(),f="__\u0001symbol@@"+e,g=a.getOwnPropertyNames,h=a.getOwnPropertyDescriptor,k=a.create,m=a.keys,n=a.freeze||a,p=a.defineProperty,G=a.defineProperties,u=h(a,"getOwnPropertyNames"),x=a.prototype,Q=x.hasOwnProperty,Ab=x.propertyIsEnumerable,Bb=x.toString,T=function(a,b,c){Q.call(a,f)||p(a,f,{enumerable:!1,configurable:!1,writable:!1,value:{}});a[f]["@@"+b]=c;},Ka=function(a,b){var c=k(a);g(b).forEach(function(a){X.call(b,
	a)&&za(c,a,b[a]);});return c},q=function(){},ya=function(a){return a!=f&&!Q.call(Y,a)},Z=function(a){return a!=f&&Q.call(Y,a)},X=function(a){var b=""+a;return Z(b)?Q.call(this,b)&&this[f]["@@"+b]:Ab.call(this,a)},l=function(b){p(x,b,{enumerable:!1,configurable:!0,get:q,set:function(a){aa(this,b,{enumerable:!1,configurable:!0,writable:!0,value:a});T(this,b,!0);}});return n(Y[b]=p(a(b),"constructor",Cb))},y=function(a){if(this&&this!==c)throw new TypeError("Symbol is not a constructor");return l("__\u0001symbol:".concat(a||
	"",e,++d))},Y=k(null),Cb={value:y},La=function(a){return Y[a]},za=function(a,b,c){var d=""+b;if(Z(d)){b=aa;if(c.enumerable){var e=k(c);e.enumerable=!1;}else e=c;b(a,d,e);T(a,d,!!c.enumerable);}else p(a,b,c);return a},Ma=function(a){return g(a).filter(Z).map(La)};u.value=za;p(a,"defineProperty",u);u.value=Ma;p(a,b,u);u.value=function(a){return g(a).filter(ya)};p(a,"getOwnPropertyNames",u);u.value=function(a,b){var c=Ma(b);c.length?m(b).concat(c).forEach(function(c){X.call(b,c)&&za(a,c,b[c]);}):G(a,b);
	return a};p(a,"defineProperties",u);u.value=X;p(x,"propertyIsEnumerable",u);u.value=y;p(c,"Symbol",u);u.value=function(a){a="__\u0001symbol:".concat("__\u0001symbol:",a,e);return a in x?Y[a]:l(a)};p(y,"for",u);u.value=function(a){if(ya(a))throw new TypeError(a+" is not a symbol");return Q.call(Y,a)?a.slice(20,-e.length):void 0};p(y,"keyFor",u);u.value=function(a,b){var c=h(a,b);c&&Z(b)&&(c.enumerable=X.call(a,b));return c};p(a,"getOwnPropertyDescriptor",u);u.value=function(a,b){return 1===arguments.length?
	k(a):Ka(a,b)};p(a,"create",u);u.value=function(){var a=Bb.call(this);return "[object String]"===a&&Z(this)?"[object Symbol]":a};p(x,"toString",u);try{var aa=k(p({},"__\u0001symbol:",{get:function(){return p(this,"__\u0001symbol:",{value:!1})["__\u0001symbol:"]}}))["__\u0001symbol:"]||p;}catch(Na){aa=function(a,b,c){var d=h(x,b);delete x[b];p(a,b,c);p(x,b,d);};}}})(Object,"getOwnPropertySymbols");
	(function(a){var b=a.defineProperty,c=a.prototype,d=c.toString,e;"iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function(f){if(!(f in Symbol))switch(b(Symbol,f,{value:Symbol(f)}),f){case "toStringTag":e=a.getOwnPropertyDescriptor(c,"toString"),e.value=function(){var a=d.call(this),b=this[Symbol.toStringTag];return "undefined"===typeof b?a:"[object "+b+"]"},b(c,"toString",e);}});})(Object,Symbol);
	(function(a,b,c){function d(){return this}b[a]||(b[a]=function(){var b=0,c=this,g={next:function(){var a=c.length<=b;return a?{done:a}:{done:a,value:c[b++]}}};g[a]=d;return g});c[a]||(c[a]=function(){var b=String.fromCodePoint,c=this,g=0,h=c.length,k={next:function(){var a=h<=g,d=a?"":b(c.codePointAt(g));g+=d.length;return a?{done:a}:{done:a,value:d}}};k[a]=d;return k});})(Symbol.iterator,Array.prototype,String.prototype);/*

	Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
	This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	Code distributed by Google as part of the polymer project is also
	subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	*/
	var Va=Object.prototype.toString;Object.prototype.toString=function(){return void 0===this?"[object Undefined]":null===this?"[object Null]":Va.call(this)};Object.keys=function(a){return Object.getOwnPropertyNames(a).filter(function(b){return (b=Object.getOwnPropertyDescriptor(a,b))&&b.enumerable})};var Wa=window.Symbol.iterator;
	String.prototype[Wa]&&String.prototype.codePointAt||(String.prototype[Wa]=function Xa(){var b,c=this;return Aa(Xa,function(d){1==d.a&&(b=0);if(3!=d.a)return b<c.length?d=sa(d,c[b]):(d.a=0,d=void 0),d;b++;d.a=2;})});Set.prototype[Wa]||(Set.prototype[Wa]=function Ya(){var b,c=this,d;return Aa(Ya,function(e){1==e.a&&(b=[],c.forEach(function(c){b.push(c);}),d=0);if(3!=e.a)return d<b.length?e=sa(e,b[d]):(e.a=0,e=void 0),e;d++;e.a=2;})});
	Map.prototype[Wa]||(Map.prototype[Wa]=function Za(){var b,c=this,d;return Aa(Za,function(e){1==e.a&&(b=[],c.forEach(function(c,d){b.push([d,c]);}),d=0);if(3!=e.a)return d<b.length?e=sa(e,b[d]):(e.a=0,e=void 0),e;d++;e.a=2;})});/*

	 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
	 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	 Code distributed by Google as part of the polymer project is also
	 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	*/
	window.WebComponents=window.WebComponents||{flags:{}};var $a=document.querySelector('script[src*="webcomponents-bundle"]'),ab=/wc-(.+)/,w={};if(!w.noOpts){location.search.slice(1).split("&").forEach(function(a){a=a.split("=");var b;a[0]&&(b=a[0].match(ab))&&(w[b[1]]=a[1]||!0);});if($a)for(var bb=0,cb=void 0;cb=$a.attributes[bb];bb++)"src"!==cb.name&&(w[cb.name]=cb.value||!0);if(w.log&&w.log.split){var db=w.log.split(",");w.log={};db.forEach(function(a){w.log[a]=!0;});}else w.log={};}
	window.WebComponents.flags=w;var eb=w.shadydom;eb&&(window.ShadyDOM=window.ShadyDOM||{},window.ShadyDOM.force=eb);var fb=w.register||w.ce;fb&&window.customElements&&(window.customElements.forcePolyfill=fb);/*

	Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
	This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	Code distributed by Google as part of the polymer project is also
	subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	*/
	function gb(){this.va=this.root=null;this.ba=!1;this.N=this.Z=this.ka=this.assignedSlot=this.assignedNodes=this.R=null;this.childNodes=this.nextSibling=this.previousSibling=this.lastChild=this.firstChild=this.parentNode=this.U=void 0;this.qa=this.ra=!1;this.Y={};}gb.prototype.toJSON=function(){return {}};function z(a){a.__shady||(a.__shady=new gb);return a.__shady}function A(a){return a&&a.__shady}var B=window.ShadyDOM||{};B.La=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var hb=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");B.D=!!(hb&&hb.configurable&&hb.get);B.ma=B.force||!B.La;B.T=B.noPatch||!1;B.ua=B.preferPerformance;function ib(a){return (a=A(a))&&void 0!==a.firstChild}function C(a){return "ShadyRoot"===a.Da}function jb(a){return (a=(a=A(a))&&a.root)&&kb(a)}
	var lb=Element.prototype,mb=lb.matches||lb.matchesSelector||lb.mozMatchesSelector||lb.msMatchesSelector||lb.oMatchesSelector||lb.webkitMatchesSelector,nb=document.createTextNode(""),ob=0,pb=[];(new MutationObserver(function(){for(;pb.length;)try{pb.shift()();}catch(a){throw nb.textContent=ob++,a;}})).observe(nb,{characterData:!0});function qb(a){pb.push(a);nb.textContent=ob++;}var rb=!!document.contains;function sb(a,b){for(;b;){if(b==a)return !0;b=b.__shady_parentNode;}return !1}
	function tb(a){for(var b=a.length-1;0<=b;b--){var c=a[b],d=c.getAttribute("id")||c.getAttribute("name");d&&"length"!==d&&isNaN(d)&&(a[d]=c);}a.item=function(b){return a[b]};a.namedItem=function(b){if("length"!==b&&isNaN(b)&&a[b])return a[b];for(var c=ia(a),d=c.next();!d.done;d=c.next())if(d=d.value,(d.getAttribute("id")||d.getAttribute("name"))==b)return d;return null};return a}
	function D(a,b,c,d){c=void 0===c?"":c;for(var e in b){var f=b[e];if(!(d&&0<=d.indexOf(e))){f.configurable=!0;var g=c+e;if(f.value)a[g]=f.value;else try{Object.defineProperty(a,g,f);}catch(h){}}}}function E(a){var b={};Object.getOwnPropertyNames(a).forEach(function(c){b[c]=Object.getOwnPropertyDescriptor(a,c);});return b}var ub=[],vb;function wb(a){vb||(vb=!0,qb(xb));ub.push(a);}function xb(){vb=!1;for(var a=!!ub.length;ub.length;)ub.shift()();return a}xb.list=ub;function yb(){this.a=!1;this.addedNodes=[];this.removedNodes=[];this.aa=new Set;}function zb(a){a.a||(a.a=!0,qb(function(){a.flush();}));}yb.prototype.flush=function(){if(this.a){this.a=!1;var a=this.takeRecords();a.length&&this.aa.forEach(function(b){b(a);});}};yb.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a}return []};
	function Db(a,b){var c=z(a);c.R||(c.R=new yb);c.R.aa.add(b);var d=c.R;return {Ca:b,O:d,Ea:a,takeRecords:function(){return d.takeRecords()}}}function Eb(a){var b=a&&a.O;b&&(b.aa.delete(a.Ca),b.aa.size||(z(a.Ea).R=null));}
	function Fb(a,b){var c=b.getRootNode();return a.map(function(a){var b=c===a.target.getRootNode();if(b&&a.addedNodes){if(b=Array.from(a.addedNodes).filter(function(a){return c===a.getRootNode()}),b.length)return a=Object.create(a),Object.defineProperty(a,"addedNodes",{value:b,configurable:!0}),a}else if(b)return a}).filter(function(a){return a})}var Gb=/[&\u00A0"]/g,Hb=/[&\u00A0<>]/g;function Ib(a){switch(a){case "&":return "&amp;";case "<":return "&lt;";case ">":return "&gt;";case '"':return "&quot;";case "\u00a0":return "&nbsp;"}}function Jb(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}var Kb=Jb("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),Lb=Jb("style script xmp iframe noembed noframes plaintext noscript".split(" "));
	function Mb(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,f=d.length,g=void 0;e<f&&(g=d[e]);e++){a:{var h=g;var k=a,m=b;switch(h.nodeType){case Node.ELEMENT_NODE:k=h.localName;for(var n="<"+k,p=h.attributes,G=0,u;u=p[G];G++)n+=" "+u.name+'="'+u.value.replace(Gb,Ib)+'"';n+=">";h=Kb[k]?n:n+Mb(h,m)+"</"+k+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&Lb[k.localName]?h:h.replace(Hb,Ib);break a;case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),
	Error("not implemented");}}c+=h;}return c}var Nb=B.D,Ob={querySelector:function(a){return this.__shady_native_querySelector(a)},querySelectorAll:function(a){return this.__shady_native_querySelectorAll(a)}},Pb={};function Qb(a){Pb[a]=function(b){return b["__shady_native_"+a]};}function Rb(a,b){D(a,b,"__shady_native_");for(var c in b)Qb(c);}function F(a,b){b=void 0===b?[]:b;for(var c=0;c<b.length;c++){var d=b[c],e=Object.getOwnPropertyDescriptor(a,d);e&&(Object.defineProperty(a,"__shady_native_"+d,e),e.value?Ob[d]||(Ob[d]=e.value):Qb(d));}}
	var H=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),I=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1),Sb=document.implementation.createHTMLDocument("inert");function Tb(a){for(var b;b=a.__shady_native_firstChild;)a.__shady_native_removeChild(b);}var Ub=["firstElementChild","lastElementChild","children","childElementCount"],Vb=["querySelector","querySelectorAll"];
	function Wb(){var a=["dispatchEvent","addEventListener","removeEventListener"];window.EventTarget?F(window.EventTarget.prototype,a):(F(Node.prototype,a),F(Window.prototype,a));Nb?F(Node.prototype,"parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")):Rb(Node.prototype,{parentNode:{get:function(){H.currentNode=this;return H.parentNode()}},firstChild:{get:function(){H.currentNode=this;return H.firstChild()}},lastChild:{get:function(){H.currentNode=
	this;return H.lastChild()}},previousSibling:{get:function(){H.currentNode=this;return H.previousSibling()}},nextSibling:{get:function(){H.currentNode=this;return H.nextSibling()}},childNodes:{get:function(){var a=[];H.currentNode=this;for(var c=H.firstChild();c;)a.push(c),c=H.nextSibling();return a}},parentElement:{get:function(){I.currentNode=this;return I.parentNode()}},textContent:{get:function(){switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:for(var a=document.createTreeWalker(this,
	NodeFilter.SHOW_TEXT,null,!1),c="",d;d=a.nextNode();)c+=d.nodeValue;return c;default:return this.nodeValue}},set:function(a){if("undefined"===typeof a||null===a)a="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:Tb(this);(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_native_insertBefore(document.createTextNode(a),void 0);break;default:this.nodeValue=a;}}}});F(Node.prototype,"appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
	a={firstElementChild:{get:function(){I.currentNode=this;return I.firstChild()}},lastElementChild:{get:function(){I.currentNode=this;return I.lastChild()}},children:{get:function(){var a=[];I.currentNode=this;for(var c=I.firstChild();c;)a.push(c),c=I.nextSibling();return tb(a)}},childElementCount:{get:function(){return this.children?this.children.length:0}}};Nb?(F(Element.prototype,Ub),F(Element.prototype,["previousElementSibling","nextElementSibling","innerHTML"]),Object.getOwnPropertyDescriptor(HTMLElement.prototype,
	"children")&&F(HTMLElement.prototype,["children"]),Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerHTML")&&F(HTMLElement.prototype,["innerHTML"])):(Rb(Element.prototype,a),Rb(Element.prototype,{previousElementSibling:{get:function(){I.currentNode=this;return I.previousSibling()}},nextElementSibling:{get:function(){I.currentNode=this;return I.nextSibling()}},innerHTML:{get:function(){return Mb(this,function(a){return a.__shady_native_childNodes})},set:function(a){var b="template"===this.localName?
	this.content:this;Tb(b);var d=this.localName||"div";d=this.namespaceURI&&this.namespaceURI!==Sb.namespaceURI?Sb.createElementNS(this.namespaceURI,d):Sb.createElement(d);d.innerHTML=a;for(a="template"===this.localName?d.content:d;d=a.__shady_native_firstChild;)b.__shady_native_insertBefore(d,void 0);}}}));F(Element.prototype,"setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));F(Element.prototype,Vb);F(HTMLElement.prototype,["focus","blur","contains"]);Nb&&F(HTMLElement.prototype,
	["parentElement","children","innerHTML"]);window.HTMLTemplateElement&&F(window.HTMLTemplateElement.prototype,["innerHTML"]);Nb?F(DocumentFragment.prototype,Ub):Rb(DocumentFragment.prototype,a);F(DocumentFragment.prototype,Vb);Nb?(F(Document.prototype,Ub),F(Document.prototype,["activeElement"])):Rb(Document.prototype,a);F(Document.prototype,["importNode","getElementById"]);F(Document.prototype,Vb);}var Xb=E({get childNodes(){return this.__shady_childNodes},get firstChild(){return this.__shady_firstChild},get lastChild(){return this.__shady_lastChild},get textContent(){return this.__shady_textContent},set textContent(a){this.__shady_textContent=a;},get childElementCount(){return this.__shady_childElementCount},get children(){return this.__shady_children},get firstElementChild(){return this.__shady_firstElementChild},get lastElementChild(){return this.__shady_lastElementChild},get innerHTML(){return this.__shady_innerHTML},
	set innerHTML(a){return this.__shady_innerHTML=a},get shadowRoot(){return this.__shady_shadowRoot}}),Yb=E({get parentElement(){return this.__shady_parentElement},get parentNode(){return this.__shady_parentNode},get nextSibling(){return this.__shady_nextSibling},get previousSibling(){return this.__shady_previousSibling},get nextElementSibling(){return this.__shady_nextElementSibling},get previousElementSibling(){return this.__shady_previousElementSibling},get className(){return this.__shady_className},
	set className(a){return this.__shady_className=a}}),Zb;for(Zb in Xb)Xb[Zb].enumerable=!1;for(var $b in Yb)Yb[$b].enumerable=!1;var ac=B.D||B.T,bc=ac?function(){}:function(a){var b=z(a);b.ra||(b.ra=!0,D(a,Yb));},cc=ac?function(){}:function(a){var b=z(a);b.qa||(b.qa=!0,D(a,Xb));};var dc="__eventWrappers"+Date.now(),ec=function(){var a=Object.getOwnPropertyDescriptor(Event.prototype,"composed");return a?function(b){return a.get.call(b)}:null}(),fc={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,
	pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,dragstart:!0,drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0},gc={DOMAttrModified:!0,DOMAttributeNameChanged:!0,DOMCharacterDataModified:!0,DOMElementNameChanged:!0,DOMNodeInserted:!0,DOMNodeInsertedIntoDocument:!0,DOMNodeRemoved:!0,DOMNodeRemovedFromDocument:!0,DOMSubtreeModified:!0};
	function hc(a){return a instanceof Node?a.__shady_getRootNode():a}function ic(a,b){var c=[],d=a;for(a=hc(a);d;)c.push(d),d.__shady_assignedSlot?d=d.__shady_assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d=d.host:d=d.__shady_parentNode;c[c.length-1]===document&&c.push(window);return c}function jc(a){a.__composedPath||(a.__composedPath=ic(a.target,!0));return a.__composedPath}
	function kc(a,b){if(!C)return a;a=ic(a,!0);for(var c=0,d,e=void 0,f,g=void 0;c<b.length;c++)if(d=b[c],f=hc(d),f!==e&&(g=a.indexOf(f),e=f),!C(f)||-1<g)return d}function lc(a){function b(b,d){b=new a(b,d);b.__composed=d&&!!d.composed;return b}b.__proto__=a;b.prototype=a.prototype;return b}var mc={focus:!0,blur:!0};function nc(a){return a.__target!==a.target||a.__relatedTarget!==a.relatedTarget}
	function oc(a,b,c){if(c=b.__handlers&&b.__handlers[a.type]&&b.__handlers[a.type][c])for(var d=0,e;(e=c[d])&&(!nc(a)||a.target!==a.relatedTarget)&&(e.call(b,a),!a.__immediatePropagationStopped);d++);}
	function pc(a){var b=a.composedPath();Object.defineProperty(a,"currentTarget",{get:function(){return d},configurable:!0});for(var c=b.length-1;0<=c;c--){var d=b[c];oc(a,d,"capture");if(a.ha)return}Object.defineProperty(a,"eventPhase",{get:function(){return Event.AT_TARGET}});var e;for(c=0;c<b.length;c++){d=b[c];var f=A(d);f=f&&f.root;if(0===c||f&&f===e)if(oc(a,d,"bubble"),d!==window&&(e=d.__shady_getRootNode()),a.ha)break}}
	function qc(a,b,c,d,e,f){for(var g=0;g<a.length;g++){var h=a[g],k=h.type,m=h.capture,n=h.once,p=h.passive;if(b===h.node&&c===k&&d===m&&e===n&&f===p)return g}return -1}
	function rc(a,b,c){if(b){var d=typeof b;if("function"===d||"object"===d)if("object"!==d||b.handleEvent&&"function"===typeof b.handleEvent){if(gc[a])return this.__shady_native_addEventListener(a,b,c);if(c&&"object"===typeof c){var e=!!c.capture;var f=!!c.once;var g=!!c.passive;}else e=!!c,g=f=!1;var h=c&&c.ia||this,k=b[dc];if(k){if(-1<qc(k,h,a,e,f,g))return}else b[dc]=[];k=function(e){f&&this.__shady_removeEventListener(a,b,c);e.__target||sc(e);if(h!==this){var g=Object.getOwnPropertyDescriptor(e,"currentTarget");
	Object.defineProperty(e,"currentTarget",{get:function(){return h},configurable:!0});}e.__previousCurrentTarget=e.currentTarget;if(!C(h)||-1!=e.composedPath().indexOf(h))if(e.composed||-1<e.composedPath().indexOf(h))if(nc(e)&&e.target===e.relatedTarget)e.eventPhase===Event.BUBBLING_PHASE&&e.stopImmediatePropagation();else if(e.eventPhase===Event.CAPTURING_PHASE||e.bubbles||e.target===h||h instanceof Window){var k="function"===d?b.call(h,e):b.handleEvent&&b.handleEvent(e);h!==this&&(g?(Object.defineProperty(e,
	"currentTarget",g),g=null):delete e.currentTarget);return k}};b[dc].push({node:h,type:a,capture:e,once:f,passive:g,$a:k});mc[a]?(this.__handlers=this.__handlers||{},this.__handlers[a]=this.__handlers[a]||{capture:[],bubble:[]},this.__handlers[a][e?"capture":"bubble"].push(k)):this.__shady_native_addEventListener(a,k,c);}}}
	function tc(a,b,c){if(b){if(gc[a])return this.__shady_native_removeEventListener(a,b,c);if(c&&"object"===typeof c){var d=!!c.capture;var e=!!c.once;var f=!!c.passive;}else d=!!c,f=e=!1;var g=c&&c.ia||this,h=void 0;var k=null;try{k=b[dc];}catch(m){}k&&(e=qc(k,g,a,d,e,f),-1<e&&(h=k.splice(e,1)[0].$a,k.length||(b[dc]=void 0)));this.__shady_native_removeEventListener(a,h||b,c);h&&mc[a]&&this.__handlers&&this.__handlers[a]&&(a=this.__handlers[a][d?"capture":"bubble"],h=a.indexOf(h),-1<h&&a.splice(h,1));}}
	function uc(){for(var a in mc)window.__shady_native_addEventListener(a,function(a){a.__target||(sc(a),pc(a));},!0);}
	var vc=E({get composed(){void 0===this.__composed&&(ec?this.__composed="focusin"===this.type||"focusout"===this.type||ec(this):!1!==this.isTrusted&&(this.__composed=fc[this.type]));return this.__composed||!1},composedPath:function(){this.__composedPath||(this.__composedPath=ic(this.__target,this.composed));return this.__composedPath},get target(){return kc(this.currentTarget||this.__previousCurrentTarget,this.composedPath())},get relatedTarget(){if(!this.__relatedTarget)return null;this.__relatedTargetComposedPath||
	(this.__relatedTargetComposedPath=ic(this.__relatedTarget,!0));return kc(this.currentTarget||this.__previousCurrentTarget,this.__relatedTargetComposedPath)},stopPropagation:function(){Event.prototype.stopPropagation.call(this);this.ha=!0;},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this);this.ha=this.__immediatePropagationStopped=!0;}});
	function sc(a){a.__target=a.target;a.__relatedTarget=a.relatedTarget;if(B.D){var b=Object.getPrototypeOf(a);if(!Object.hasOwnProperty(b,"__shady_patchedProto")){var c=Object.create(b);c.__shady_sourceProto=b;D(c,vc);b.__shady_patchedProto=c;}a.__proto__=b.__shady_patchedProto;}else D(a,vc);}var wc=lc(Event),xc=lc(CustomEvent),yc=lc(MouseEvent);
	function zc(){if(!ec&&Object.getOwnPropertyDescriptor(Event.prototype,"isTrusted")){var a=function(){var a=new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0});this.__shady_dispatchEvent(a);};Element.prototype.click?Element.prototype.click=a:HTMLElement.prototype.click&&(HTMLElement.prototype.click=a);}}var Ac=Object.getOwnPropertyNames(Document.prototype).filter(function(a){return "on"===a.substring(0,2)});function Bc(a,b){return {index:a,V:[],$:b}}
	function Cc(a,b,c,d){var e=0,f=0,g=0,h=0,k=Math.min(b-e,d-f);if(0==e&&0==f)a:{for(g=0;g<k;g++)if(a[g]!==c[g])break a;g=k;}if(b==a.length&&d==c.length){h=a.length;for(var m=c.length,n=0;n<k-g&&Dc(a[--h],c[--m]);)n++;h=n;}e+=g;f+=g;b-=h;d-=h;if(0==b-e&&0==d-f)return [];if(e==b){for(b=Bc(e,0);f<d;)b.V.push(c[f++]);return [b]}if(f==d)return [Bc(e,b-e)];k=e;g=f;d=d-g+1;h=b-k+1;b=Array(d);for(m=0;m<d;m++)b[m]=Array(h),b[m][0]=m;for(m=0;m<h;m++)b[0][m]=m;for(m=1;m<d;m++)for(n=1;n<h;n++)if(a[k+n-1]===c[g+m-1])b[m][n]=
	b[m-1][n-1];else{var p=b[m-1][n]+1,G=b[m][n-1]+1;b[m][n]=p<G?p:G;}k=b.length-1;g=b[0].length-1;d=b[k][g];for(a=[];0<k||0<g;)0==k?(a.push(2),g--):0==g?(a.push(3),k--):(h=b[k-1][g-1],m=b[k-1][g],n=b[k][g-1],p=m<n?m<h?m:h:n<h?n:h,p==h?(h==d?a.push(0):(a.push(1),d=h),k--,g--):p==m?(a.push(3),k--,d=m):(a.push(2),g--,d=n));a.reverse();b=void 0;k=[];for(g=0;g<a.length;g++)switch(a[g]){case 0:b&&(k.push(b),b=void 0);e++;f++;break;case 1:b||(b=Bc(e,0));b.$++;e++;b.V.push(c[f]);f++;break;case 2:b||(b=Bc(e,0));
	b.$++;e++;break;case 3:b||(b=Bc(e,0)),b.V.push(c[f]),f++;}b&&k.push(b);return k}function Dc(a,b){return a===b}function Ec(a,b,c){bc(a);c=c||null;var d=z(a),e=z(b),f=c?z(c):null;d.previousSibling=c?f.previousSibling:b.__shady_lastChild;if(f=A(d.previousSibling))f.nextSibling=a;if(f=A(d.nextSibling=c))f.previousSibling=a;d.parentNode=b;c?c===e.firstChild&&(e.firstChild=a):(e.lastChild=a,e.firstChild||(e.firstChild=a));e.childNodes=null;}
	function Fc(a,b,c){cc(b);var d=z(b);void 0!==d.firstChild&&(d.childNodes=null);if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE){d=a.__shady_childNodes;for(var e=0;e<d.length;e++)Ec(d[e],b,c);a=z(a);b=void 0!==a.firstChild?null:void 0;a.firstChild=a.lastChild=b;a.childNodes=b;}else Ec(a,b,c);}
	function Gc(a,b){var c=z(a);b=z(b);a===b.firstChild&&(b.firstChild=c.nextSibling);a===b.lastChild&&(b.lastChild=c.previousSibling);a=c.previousSibling;var d=c.nextSibling;a&&(z(a).nextSibling=d);d&&(z(d).previousSibling=a);c.parentNode=c.previousSibling=c.nextSibling=void 0;void 0!==b.childNodes&&(b.childNodes=null);}
	function Hc(a){var b=z(a);if(void 0===b.firstChild){b.childNodes=null;var c=b.firstChild=a.__shady_native_firstChild||null;b.lastChild=a.__shady_native_lastChild||null;cc(a);b=c;for(c=void 0;b;b=b.__shady_native_nextSibling){var d=z(b);d.parentNode=a;d.nextSibling=b.__shady_native_nextSibling||null;d.previousSibling=c||null;c=b;bc(b);}}}var Ic=null;function Jc(){Ic||(Ic=window.ShadyCSS&&window.ShadyCSS.ScopingShim);return Ic||null}function Kc(a,b){var c=Jc();c&&c.unscopeNode(a,b);}function Lc(a,b){var c=Jc();if(!c)return !0;if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE){c=!0;a=a.__shady_childNodes;for(var d=0;c&&d<a.length;d++)c=c&&Lc(a[d],b);return c}return a.nodeType!==Node.ELEMENT_NODE?!0:c.currentScopeForNode(a)===b}function Mc(a){if(a.nodeType!==Node.ELEMENT_NODE)return "";var b=Jc();return b?b.currentScopeForNode(a):""}
	function Nc(a,b){if(a){a.nodeType===Node.ELEMENT_NODE&&b(a);a=a.__shady_childNodes;for(var c=0,d;c<a.length;c++)d=a[c],d.nodeType===Node.ELEMENT_NODE&&Nc(d,b);}}var Oc=window.document,Pc=B.ua,Qc=Object.getOwnPropertyDescriptor(Node.prototype,"isConnected"),Rc=Qc&&Qc.get;function Sc(a){for(var b;b=a.__shady_firstChild;)a.__shady_removeChild(b);}function Tc(a){var b=A(a);if(b&&void 0!==b.U){b=a.__shady_childNodes;for(var c=0,d=b.length,e=void 0;c<d&&(e=b[c]);c++)Tc(e);}if(a=A(a))a.U=void 0;}function Uc(a){var b=a;a&&"slot"===a.localName&&(b=(b=(b=A(a))&&b.N)&&b.length?b[0]:Uc(a.__shady_nextSibling));return b}
	function Vc(a,b,c){if(a=(a=A(a))&&a.R)b&&a.addedNodes.push(b),c&&a.removedNodes.push(c),zb(a);}
	var Zc=E({get parentNode(){var a=A(this);a=a&&a.parentNode;return void 0!==a?a:this.__shady_native_parentNode},get firstChild(){var a=A(this);a=a&&a.firstChild;return void 0!==a?a:this.__shady_native_firstChild},get lastChild(){var a=A(this);a=a&&a.lastChild;return void 0!==a?a:this.__shady_native_lastChild},get nextSibling(){var a=A(this);a=a&&a.nextSibling;return void 0!==a?a:this.__shady_native_nextSibling},get previousSibling(){var a=A(this);a=a&&a.previousSibling;return void 0!==a?a:this.__shady_native_previousSibling},
	get childNodes(){if(ib(this)){var a=A(this);if(!a.childNodes){a.childNodes=[];for(var b=this.__shady_firstChild;b;b=b.__shady_nextSibling)a.childNodes.push(b);}var c=a.childNodes;}else c=this.__shady_native_childNodes;c.item=function(a){return c[a]};return c},get parentElement(){var a=A(this);(a=a&&a.parentNode)&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:this.__shady_native_parentElement},get isConnected(){if(Rc&&Rc.call(this))return !0;if(this.nodeType==Node.DOCUMENT_FRAGMENT_NODE)return !1;
	var a=this.ownerDocument;if(rb){if(a.__shady_native_contains(this))return !0}else if(a.documentElement&&a.documentElement.__shady_native_contains(this))return !0;for(a=this;a&&!(a instanceof Document);)a=a.__shady_parentNode||(C(a)?a.host:void 0);return !!(a&&a instanceof Document)},get textContent(){if(ib(this)){for(var a=[],b=0,c=this.__shady_childNodes,d;d=c[b];b++)d.nodeType!==Node.COMMENT_NODE&&a.push(d.__shady_textContent);return a.join("")}return this.__shady_native_textContent},set textContent(a){if("undefined"===
	typeof a||null===a)a="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:if(!ib(this)&&B.D){var b=this.__shady_firstChild;(b!=this.__shady_lastChild||b&&b.nodeType!=Node.TEXT_NODE)&&Sc(this);this.__shady_native_textContent=a;}else Sc(this),(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.__shady_insertBefore(document.createTextNode(a));break;default:this.nodeValue=a;}},insertBefore:function(a,b){if(this.ownerDocument!==Oc&&a.ownerDocument!==Oc)return this.__shady_native_insertBefore(a,
	b),a;if(a===this)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if(b){var c=A(b);c=c&&c.parentNode;if(void 0!==c&&c!==this||void 0===c&&b.__shady_native_parentNode!==this)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(b===a)return a;var d=[],e=(c=Wc(this))?c.host.localName:Mc(this),f=a.__shady_parentNode;if(f){var g=Mc(a);f.__shady_removeChild(a,!!c||
	!Wc(a));}f=!0;var h=(!Pc||void 0===a.__noInsertionPoint)&&!Lc(a,e),k=c&&!a.__noInsertionPoint&&(!Pc||a.nodeType===Node.DOCUMENT_FRAGMENT_NODE);if(k||h)h&&(g=g||Mc(a)),Nc(a,function(a){k&&"slot"===a.localName&&d.push(a);if(h){var b=g;Jc()&&(b&&Kc(a,b),(b=Jc())&&b.scopeNode(a,e));}});if("slot"===this.localName||d.length)d.length&&(c.c=c.c||[],c.a=c.a||[],c.b=c.b||{},c.c.push.apply(c.c,d instanceof Array?d:ja(ia(d)))),c&&Xc(c);ib(this)&&(Fc(a,this,b),c=A(this),jb(this)?(Xc(c.root),f=!1):c.root&&(f=!1));
	f?(c=C(this)?this.host:this,b?(b=Uc(b),c.__shady_native_insertBefore(a,b)):c.__shady_native_appendChild(a)):a.ownerDocument!==this.ownerDocument&&this.ownerDocument.adoptNode(a);Vc(this,a);return a},appendChild:function(a){return this.__shady_insertBefore(a)},removeChild:function(a,b){b=void 0===b?!1:b;if(this.ownerDocument!==Oc)return this.__shady_native_removeChild(a);if(a.__shady_parentNode!==this)throw Error("The node to be removed is not a child of this node: "+a);var c=Wc(a),d=c&&Yc(c,a),e=
	A(this);if(ib(this)&&(Gc(a,this),jb(this))){Xc(e.root);var f=!0;}if(Jc()&&!b&&c){var g=Mc(a);Nc(a,function(a){Kc(a,g);});}Tc(a);c&&((b=this&&"slot"===this.localName)&&(f=!0),(d||b)&&Xc(c));f||(f=C(this)?this.host:this,(!e.root&&"slot"!==a.localName||f===a.__shady_native_parentNode)&&f.__shady_native_removeChild(a));Vc(this,null,a);return a},replaceChild:function(a,b){this.__shady_insertBefore(a,b);this.__shady_removeChild(b);return a},cloneNode:function(a){if("template"==this.localName)return this.__shady_native_cloneNode(a);
	var b=this.__shady_native_cloneNode(!1);if(a&&b.nodeType!==Node.ATTRIBUTE_NODE){a=this.__shady_childNodes;for(var c=0,d;c<a.length;c++)d=a[c].__shady_cloneNode(!0),b.__shady_appendChild(d);}return b},getRootNode:function(a){if(this&&this.nodeType){var b=z(this),c=b.U;void 0===c&&(C(this)?(c=this,b.U=c):(c=(c=this.__shady_parentNode)?c.__shady_getRootNode(a):this,document.documentElement.__shady_native_contains(this)&&(b.U=c)));return c}},contains:function(a){return sb(this,a)}});function $c(a,b,c){var d=[];ad(a.__shady_childNodes,b,c,d);return d}function ad(a,b,c,d){for(var e=0,f=a.length,g=void 0;e<f&&(g=a[e]);e++){var h;if(h=g.nodeType===Node.ELEMENT_NODE){h=g;var k=b,m=c,n=d,p=k(h);p&&n.push(h);m&&m(p)?h=p:(ad(h.__shady_childNodes,k,m,n),h=void 0);}if(h)break}}
	var bd=E({get firstElementChild(){var a=A(this);if(a&&void 0!==a.firstChild){for(a=this.__shady_firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_nextSibling;return a}return this.__shady_native_firstElementChild},get lastElementChild(){var a=A(this);if(a&&void 0!==a.lastChild){for(a=this.__shady_lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_previousSibling;return a}return this.__shady_native_lastElementChild},get children(){return ib(this)?tb(Array.prototype.filter.call(this.__shady_childNodes,
	function(a){return a.nodeType===Node.ELEMENT_NODE})):this.__shady_native_children},get childElementCount(){var a=this.__shady_children;return a?a.length:0}}),cd=E({querySelector:function(a){return $c(this,function(b){return mb.call(b,a)},function(a){return !!a})[0]||null},querySelectorAll:function(a,b){if(b){b=Array.prototype.slice.call(this.__shady_native_querySelectorAll(a));var c=this.__shady_getRootNode();return b.filter(function(a){return a.__shady_getRootNode()==c})}return $c(this,function(b){return mb.call(b,
	a)})}}),dd=B.ua?Object.assign({},bd):bd;Object.assign(bd,cd);var ed=E({getElementById:function(a){return ""===a?null:$c(this,function(b){return b.id==a},function(a){return !!a})[0]||null}});var fd=E({get activeElement(){var a=B.D?document.__shady_native_activeElement:document.activeElement;if(!a||!a.nodeType)return null;var b=!!C(this);if(!(this===document||b&&this.host!==a&&this.host.__shady_native_contains(a)))return null;for(b=Wc(a);b&&b!==this;)a=b.host,b=Wc(a);return this===document?b?null:a:b===this?a:null}});var gd=document.implementation.createHTMLDocument("inert"),hd=E({get innerHTML(){return ib(this)?Mb("template"===this.localName?this.content:this,function(a){return a.__shady_childNodes}):this.__shady_native_innerHTML},set innerHTML(a){if("template"===this.localName)this.__shady_native_innerHTML=a;else{Sc(this);var b=this.localName||"div";b=this.namespaceURI&&this.namespaceURI!==gd.namespaceURI?gd.createElementNS(this.namespaceURI,b):gd.createElement(b);for(B.D?b.__shady_native_innerHTML=a:b.innerHTML=
	a;a=b.__shady_firstChild;)this.__shady_insertBefore(a);}}});var id=E({addEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.ia=this;this.host.__shady_addEventListener(a,b,c);},removeEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.ia=this;this.host.__shady_removeEventListener(a,b,c);}});function jd(a,b){D(a,id,b);D(a,fd,b);D(a,hd,b);D(a,bd,b);B.T&&!b?(D(a,Zc,b),D(a,ed,b)):B.D||(D(a,Yb),D(a,Xb));}var kd={},ld=B.deferConnectionCallbacks&&"loading"===document.readyState,md;function nd(a){var b=[];do b.unshift(a);while(a=a.__shady_parentNode);return b}
	function od(a,b,c){if(a!==kd)throw new TypeError("Illegal constructor");this.Da="ShadyRoot";this.host=b;this.mode=c&&c.mode;Hc(b);a=z(b);a.root=this;a.va="closed"!==this.mode?this:null;a=z(this);a.firstChild=a.lastChild=a.parentNode=a.nextSibling=a.previousSibling=null;a.childNodes=[];this.ja=this.M=!1;this.c=this.b=this.a=null;if(B.preferPerformance)for(;a=b.__shady_native_firstChild;)b.__shady_native_removeChild(a);else Xc(this);}function Xc(a){a.M||(a.M=!0,wb(function(){return pd(a)}));}
	function pd(a){var b;if(b=a.M){for(var c;a;)a:{a.M&&(c=a),b=a;a=b.host.__shady_getRootNode();if(C(a)&&(b=A(b.host))&&0<b.X)break a;a=void 0;}b=c;}(c=b)&&c._renderSelf();}
	od.prototype._renderSelf=function(){var a=ld;ld=!0;this.M=!1;if(this.a){qd(this);for(var b=0,c;b<this.a.length;b++){c=this.a[b];var d=A(c),e=d.assignedNodes;d.assignedNodes=[];d.N=[];if(d.ka=e)for(d=0;d<e.length;d++){var f=A(e[d]);f.Z=f.assignedSlot;f.assignedSlot===c&&(f.assignedSlot=null);}}for(b=this.host.__shady_firstChild;b;b=b.__shady_nextSibling)rd(this,b);for(b=0;b<this.a.length;b++){c=this.a[b];e=A(c);if(!e.assignedNodes.length)for(d=c.__shady_firstChild;d;d=d.__shady_nextSibling)rd(this,
	d,c);(d=(d=A(c.__shady_parentNode))&&d.root)&&(kb(d)||d.M)&&d._renderSelf();sd(this,e.N,e.assignedNodes);if(d=e.ka){for(f=0;f<d.length;f++)A(d[f]).Z=null;e.ka=null;d.length>e.assignedNodes.length&&(e.ba=!0);}e.ba&&(e.ba=!1,td(this,c));}c=this.a;b=[];for(e=0;e<c.length;e++)d=c[e].__shady_parentNode,(f=A(d))&&f.root||!(0>b.indexOf(d))||b.push(d);for(c=0;c<b.length;c++){f=b[c];e=f===this?this.host:f;d=[];f=f.__shady_childNodes;for(var g=0;g<f.length;g++){var h=f[g];if("slot"==h.localName){h=A(h).N;for(var k=
	0;k<h.length;k++)d.push(h[k]);}else d.push(h);}f=Array.prototype.slice.call(e.__shady_native_childNodes);g=Cc(d,d.length,f,f.length);k=h=0;for(var m=void 0;h<g.length&&(m=g[h]);h++){for(var n=0,p=void 0;n<m.V.length&&(p=m.V[n]);n++)p.__shady_native_parentNode===e&&e.__shady_native_removeChild(p),f.splice(m.index+k,1);k-=m.$;}k=0;for(m=void 0;k<g.length&&(m=g[k]);k++)for(h=f[m.index],n=m.index;n<m.index+m.$;n++)p=d[n],e.__shady_native_insertBefore(p,h),f.splice(n,0,p);}}if(!B.preferPerformance&&!this.ja)for(b=
	this.host.__shady_childNodes,c=0,e=b.length;c<e;c++)d=b[c],f=A(d),d.__shady_native_parentNode!==this.host||"slot"!==d.localName&&f.assignedSlot||this.host.__shady_native_removeChild(d);this.ja=!0;ld=a;md&&md();};function rd(a,b,c){var d=z(b),e=d.Z;d.Z=null;c||(c=(a=a.b[b.__shady_slot||"__catchall"])&&a[0]);c?(z(c).assignedNodes.push(b),d.assignedSlot=c):d.assignedSlot=void 0;e!==d.assignedSlot&&d.assignedSlot&&(z(d.assignedSlot).ba=!0);}
	function sd(a,b,c){for(var d=0,e=void 0;d<c.length&&(e=c[d]);d++)if("slot"==e.localName){var f=A(e).assignedNodes;f&&f.length&&sd(a,b,f);}else b.push(c[d]);}function td(a,b){b.__shady_native_dispatchEvent(new Event("slotchange"));b=A(b);b.assignedSlot&&td(a,b.assignedSlot);}
	function qd(a){if(a.c&&a.c.length){for(var b=a.c,c,d=0;d<b.length;d++){var e=b[d];Hc(e);var f=e.__shady_parentNode;Hc(f);f=A(f);f.X=(f.X||0)+1;f=ud(e);a.b[f]?(c=c||{},c[f]=!0,a.b[f].push(e)):a.b[f]=[e];a.a.push(e);}if(c)for(var g in c)a.b[g]=vd(a.b[g]);a.c=[];}}function ud(a){var b=a.name||a.getAttribute("name")||"__catchall";return a.Ba=b}
	function vd(a){return a.sort(function(a,c){a=nd(a);for(var b=nd(c),e=0;e<a.length;e++){c=a[e];var f=b[e];if(c!==f)return a=Array.from(c.__shady_parentNode.__shady_childNodes),a.indexOf(c)-a.indexOf(f)}})}
	function Yc(a,b){if(a.a){qd(a);var c=a.b,d;for(d in c)for(var e=c[d],f=0;f<e.length;f++){var g=e[f];if(sb(b,g)){e.splice(f,1);var h=a.a.indexOf(g);0<=h&&(a.a.splice(h,1),(h=A(g.__shady_parentNode))&&h.X&&h.X--);f--;g=A(g);if(h=g.N)for(var k=0;k<h.length;k++){var m=h[k],n=m.__shady_native_parentNode;n&&n.__shady_native_removeChild(m);}g.N=[];g.assignedNodes=[];h=!0;}}return h}}function kb(a){qd(a);return !(!a.a||!a.a.length)}
	(function(a){a.__proto__=DocumentFragment.prototype;jd(a,"__shady_");jd(a);Object.defineProperties(a,{nodeType:{value:Node.DOCUMENT_FRAGMENT_NODE,configurable:!0},nodeName:{value:"#document-fragment",configurable:!0},nodeValue:{value:null,configurable:!0}});["localName","namespaceURI","prefix"].forEach(function(b){Object.defineProperty(a,b,{value:void 0,configurable:!0});});["ownerDocument","baseURI","isConnected"].forEach(function(b){Object.defineProperty(a,b,{get:function(){return this.host[b]},
	configurable:!0});});})(od.prototype);
	if(window.customElements&&B.ma&&!B.preferPerformance){var wd=new Map;md=function(){var a=[];wd.forEach(function(b,c){a.push([c,b]);});wd.clear();for(var b=0;b<a.length;b++){var c=a[b][0];a[b][1]?c.za():c.Aa();}};ld&&document.addEventListener("readystatechange",function(){ld=!1;md();},{once:!0});var xd=function(a,b,c){var d=0,e="__isConnected"+d++;if(b||c)a.prototype.connectedCallback=a.prototype.za=function(){ld?wd.set(this,!0):this[e]||(this[e]=!0,b&&b.call(this));},a.prototype.disconnectedCallback=
	a.prototype.Aa=function(){ld?this.isConnected||wd.set(this,!1):this[e]&&(this[e]=!1,c&&c.call(this));};return a},define=window.customElements.define;Object.defineProperty(window.CustomElementRegistry.prototype,"define",{value:function(a,b){var c=b.prototype.connectedCallback,d=b.prototype.disconnectedCallback;define.call(window.customElements,a,xd(b,c,d));b.prototype.connectedCallback=c;b.prototype.disconnectedCallback=d;}});}function Wc(a){a=a.__shady_getRootNode();if(C(a))return a}function yd(a){this.node=a;}r=yd.prototype;r.addEventListener=function(a,b,c){return this.node.__shady_addEventListener(a,b,c)};r.removeEventListener=function(a,b,c){return this.node.__shady_removeEventListener(a,b,c)};r.appendChild=function(a){return this.node.__shady_appendChild(a)};r.insertBefore=function(a,b){return this.node.__shady_insertBefore(a,b)};r.removeChild=function(a){return this.node.__shady_removeChild(a)};r.replaceChild=function(a,b){return this.node.__shady_replaceChild(a,b)};
	r.cloneNode=function(a){return this.node.__shady_cloneNode(a)};r.getRootNode=function(a){return this.node.__shady_getRootNode(a)};r.contains=function(a){return this.node.__shady_contains(a)};r.dispatchEvent=function(a){return this.node.__shady_dispatchEvent(a)};r.setAttribute=function(a,b){this.node.__shady_setAttribute(a,b);};r.getAttribute=function(a){return this.node.__shady_native_getAttribute(a)};r.hasAttribute=function(a){return this.node.__shady_native_hasAttribute(a)};r.removeAttribute=function(a){this.node.__shady_removeAttribute(a);};
	r.attachShadow=function(a){return this.node.__shady_attachShadow(a)};r.focus=function(){this.node.__shady_native_focus();};r.blur=function(){this.node.__shady_blur();};r.importNode=function(a,b){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_importNode(a,b)};r.getElementById=function(a){if(this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_getElementById(a)};r.querySelector=function(a){return this.node.__shady_querySelector(a)};
	r.querySelectorAll=function(a,b){return this.node.__shady_querySelectorAll(a,b)};r.assignedNodes=function(a){if("slot"===this.node.localName)return this.node.__shady_assignedNodes(a)};
	t.Object.defineProperties(yd.prototype,{activeElement:{configurable:!0,enumerable:!0,get:function(){if(C(this.node)||this.node.nodeType===Node.DOCUMENT_NODE)return this.node.__shady_activeElement}},_activeElement:{configurable:!0,enumerable:!0,get:function(){return this.activeElement}},host:{configurable:!0,enumerable:!0,get:function(){if(C(this.node))return this.node.host}},parentNode:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_parentNode}},firstChild:{configurable:!0,
	enumerable:!0,get:function(){return this.node.__shady_firstChild}},lastChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastChild}},nextSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextSibling}},previousSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousSibling}},childNodes:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childNodes}},parentElement:{configurable:!0,enumerable:!0,
	get:function(){return this.node.__shady_parentElement}},firstElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_firstElementChild}},lastElementChild:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_lastElementChild}},nextElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_nextElementSibling}},previousElementSibling:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_previousElementSibling}},
	children:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_children}},childElementCount:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_childElementCount}},shadowRoot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_shadowRoot}},assignedSlot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_assignedSlot}},isConnected:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_isConnected}},innerHTML:{configurable:!0,
	enumerable:!0,get:function(){return this.node.__shady_innerHTML},set:function(a){this.node.__shady_innerHTML=a;}},textContent:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_textContent},set:function(a){this.node.__shady_textContent=a;}},slot:{configurable:!0,enumerable:!0,get:function(){return this.node.__shady_slot},set:function(a){this.node.__shady_slot=a;}}});
	Ac.forEach(function(a){Object.defineProperty(yd.prototype,a,{get:function(){return this.node["__shady_"+a]},set:function(b){this.node["__shady_"+a]=b;},configurable:!0});});var zd=new WeakMap;function Ad(a){if(C(a)||a instanceof yd)return a;var b=zd.get(a);b||(b=new yd(a),zd.set(a,b));return b}var Bd=E({dispatchEvent:function(a){xb();return this.__shady_native_dispatchEvent(a)},addEventListener:rc,removeEventListener:tc});var Cd=E({get assignedSlot(){var a=this.__shady_parentNode;(a=a&&a.__shady_shadowRoot)&&pd(a);return (a=A(this))&&a.assignedSlot||null}});var Dd=window.document;function Ed(a,b){if("slot"===b)a=a.__shady_parentNode,jb(a)&&Xc(A(a).root);else if("slot"===a.localName&&"name"===b&&(b=Wc(a))){if(b.a){qd(b);var c=a.Ba,d=ud(a);if(d!==c){c=b.b[c];var e=c.indexOf(a);0<=e&&c.splice(e,1);c=b.b[d]||(b.b[d]=[]);c.push(a);1<c.length&&(b.b[d]=vd(c));}}Xc(b);}}
	var Fd=E({get previousElementSibling(){var a=A(this);if(a&&void 0!==a.previousSibling){for(a=this.__shady_previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_previousSibling;return a}return this.__shady_native_previousElementSibling},get nextElementSibling(){var a=A(this);if(a&&void 0!==a.nextSibling){for(a=this.__shady_nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.__shady_nextSibling;return a}return this.__shady_native_nextElementSibling},get slot(){return this.getAttribute("slot")},
	set slot(a){this.__shady_setAttribute("slot",a);},get shadowRoot(){var a=A(this);return a&&a.va||null},get className(){return this.getAttribute("class")||""},set className(a){this.__shady_setAttribute("class",a);},setAttribute:function(a,b){if(this.ownerDocument!==Dd)this.__shady_native_setAttribute(a,b);else{var c;(c=Jc())&&"class"===a?(c.setElementClass(this,b),c=!0):c=!1;c||(this.__shady_native_setAttribute(a,b),Ed(this,a));}},removeAttribute:function(a){this.__shady_native_removeAttribute(a);Ed(this,
	a);},attachShadow:function(a){if(!this)throw Error("Must provide a host.");if(!a)throw Error("Not enough arguments.");return new od(kd,this,a)}});var Gd=E({blur:function(){var a=A(this);(a=(a=a&&a.root)&&a.activeElement)?a.__shady_blur():this.__shady_native_blur();}});Ac.forEach(function(a){Gd[a]={set:function(b){var c=z(this),d=a.substring(2);c.Y[a]&&this.removeEventListener(d,c.Y[a]);this.__shady_addEventListener(d,b);c.Y[a]=b;},get:function(){var b=A(this);return b&&b.Y[a]},configurable:!0};});var Hd=E({assignedNodes:function(a){if("slot"===this.localName){var b=this.__shady_getRootNode();b&&C(b)&&pd(b);return (b=A(this))?(a&&a.flatten?b.N:b.assignedNodes)||[]:[]}}});var Id=window.document,Jd=E({importNode:function(a,b){if(a.ownerDocument!==Id||"template"===a.localName)return this.__shady_native_importNode(a,b);var c=this.__shady_native_importNode(a,!1);if(b){a=a.__shady_childNodes;b=0;for(var d;b<a.length;b++)d=this.__shady_importNode(a[b],!0),c.__shady_appendChild(d);}return c}});var Kd=E({addEventListener:rc.bind(window),removeEventListener:tc.bind(window)});var Ld={};Object.getOwnPropertyDescriptor(HTMLElement.prototype,"parentElement")&&(Ld.parentElement=Zc.parentElement);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"contains")&&(Ld.contains=Zc.contains);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"children")&&(Ld.children=bd.children);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerHTML")&&(Ld.innerHTML=hd.innerHTML);Object.getOwnPropertyDescriptor(HTMLElement.prototype,"className")&&(Ld.className=Fd.className);
	var Md={EventTarget:[Bd],Node:[Zc,window.EventTarget?null:Bd],Text:[Cd],Element:[Fd,bd,Cd,!B.D||"innerHTML"in Element.prototype?hd:null,window.HTMLSlotElement?null:Hd],HTMLElement:[Gd,Ld],HTMLSlotElement:[Hd],DocumentFragment:[dd,ed],Document:[Jd,dd,ed,fd],Window:[Kd]},Nd=B.D?null:["innerHTML","textContent"];function Od(a){var b=a?null:Nd,c={},d;for(d in Md)c.fa=window[d]&&window[d].prototype,Md[d].forEach(function(c){return function(d){return c.fa&&d&&D(c.fa,d,a,b)}}(c)),c={fa:c.fa};}if(B.ma){var ShadyDOM={inUse:B.ma,patch:function(a){cc(a);bc(a);return a},isShadyRoot:C,enqueue:wb,flush:xb,flushInitial:function(a){!a.ja&&a.M&&pd(a);},settings:B,filterMutations:Fb,observeChildren:Db,unobserveChildren:Eb,deferConnectionCallbacks:B.deferConnectionCallbacks,preferPerformance:B.preferPerformance,handlesDynamicScoping:!0,wrap:B.T?Ad:function(a){return a},Wrapper:yd,composedPath:jc,noPatch:B.T,nativeMethods:Ob,nativeTree:Pb};window.ShadyDOM=ShadyDOM;Wb();Od("__shady_");Object.defineProperty(document,
	"_activeElement",fd.activeElement);D(Window.prototype,Kd,"__shady_");B.T||(Od(),zc());uc();window.Event=wc;window.CustomEvent=xc;window.MouseEvent=yc;window.ShadowRoot=od;}var Pd=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function Qd(a){var b=Pd.has(a);a=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return !b&&a}function J(a){var b=a.isConnected;if(void 0!==b)return b;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return !(!a||!(a.__CE_isImportDocument||a instanceof Document))}
	function Rd(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
	function Sd(a,b,c){c=void 0===c?new Set:c;for(var d=a;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)Sd(d,b,c);d=Rd(a,e);continue}else if("template"===f){d=Rd(a,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)Sd(e,b,c);}d=d.firstChild?d.firstChild:Rd(a,d);}}function K(a,b,c){a[b]=c;}function Td(){this.a=new Map;this.u=new Map;this.f=[];this.c=!1;}function Ud(a,b,c){a.a.set(b,c);a.u.set(c.constructorFunction,c);}function Vd(a,b){a.c=!0;a.f.push(b);}function Wd(a,b){a.c&&Sd(b,function(b){return a.b(b)});}Td.prototype.b=function(a){if(this.c&&!a.__CE_patched){a.__CE_patched=!0;for(var b=0;b<this.f.length;b++)this.f[b](a);}};function L(a,b){var c=[];Sd(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state?a.connectedCallback(d):Xd(a,d);}}
	function M(a,b){var c=[];Sd(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state&&a.disconnectedCallback(d);}}
	function N(a,b,c){c=void 0===c?{}:c;var d=c.Za||new Set,e=c.ga||function(b){return Xd(a,b)},f=[];Sd(b,function(b){if("link"===b.localName&&"import"===b.getAttribute("rel")){var c=b.import;c instanceof Node&&(c.__CE_isImportDocument=!0,c.__CE_hasRegistry=!0);c&&"complete"===c.readyState?c.__CE_documentLoadHandled=!0:b.addEventListener("load",function(){var c=b.import;if(!c.__CE_documentLoadHandled){c.__CE_documentLoadHandled=!0;var f=new Set(d);f.delete(c);N(a,c,{Za:f,ga:e});}});}else f.push(b);},d);
	if(a.c)for(b=0;b<f.length;b++)a.b(f[b]);for(b=0;b<f.length;b++)e(f[b]);}
	function Xd(a,b){if(void 0===b.__CE_state){var c=b.ownerDocument;if(c.defaultView||c.__CE_isImportDocument&&c.__CE_hasRegistry)if(c=a.a.get(b.localName)){c.constructionStack.push(b);var d=c.constructorFunction;try{try{if(new d!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{c.constructionStack.pop();}}catch(g){throw b.__CE_state=2,g;}b.__CE_state=1;b.__CE_definition=c;if(c.attributeChangedCallback)for(c=c.observedAttributes,d=0;d<c.length;d++){var e=
	c[d],f=b.getAttribute(e);null!==f&&a.attributeChangedCallback(b,e,null,f,null);}J(b)&&a.connectedCallback(b);}}}Td.prototype.connectedCallback=function(a){var b=a.__CE_definition;b.connectedCallback&&b.connectedCallback.call(a);};Td.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;b.disconnectedCallback&&b.disconnectedCallback.call(a);};
	Td.prototype.attributeChangedCallback=function(a,b,c,d,e){var f=a.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b)&&f.attributeChangedCallback.call(a,b,c,d,e);};function Yd(a){var b=document;this.b=a;this.a=b;this.O=void 0;N(this.b,this.a);"loading"===this.a.readyState&&(this.O=new MutationObserver(this.c.bind(this)),this.O.observe(this.a,{childList:!0,subtree:!0}));}function Zd(a){a.O&&a.O.disconnect();}Yd.prototype.c=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||Zd(this);for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,d=0;d<c.length;d++)N(this.b,c[d]);};function $d(){var a=this;this.a=this.w=void 0;this.b=new Promise(function(b){a.a=b;a.w&&b(a.w);});}$d.prototype.resolve=function(a){if(this.w)throw Error("Already resolved.");this.w=a;this.a&&this.a(a);};function O(a){this.c=!1;this.a=a;this.F=new Map;this.f=function(a){return a()};this.b=!1;this.u=[];this.ca=new Yd(a);}r=O.prototype;
	r.xa=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!Qd(a))throw new SyntaxError("The element name '"+a+"' is not valid.");if(this.a.a.get(a))throw Error("A custom element with name '"+a+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var d=function(a){var b=e[a];if(void 0!==b&&!(b instanceof Function))throw Error("The '"+a+"' callback must be a function.");
	return b},e=b.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=d("connectedCallback");var g=d("disconnectedCallback");var h=d("adoptedCallback");var k=d("attributeChangedCallback");var m=b.observedAttributes||[];}catch(n){return}finally{this.c=!1;}b={localName:a,constructorFunction:b,connectedCallback:f,disconnectedCallback:g,adoptedCallback:h,attributeChangedCallback:k,observedAttributes:m,constructionStack:[]};Ud(this.a,
	a,b);this.u.push(b);this.b||(this.b=!0,this.f(function(){return ae(c)}));};r.ga=function(a){N(this.a,a);};
	function ae(a){if(!1!==a.b){a.b=!1;for(var b=a.u,c=[],d=new Map,e=0;e<b.length;e++)d.set(b[e].localName,[]);N(a.a,document,{ga:function(b){if(void 0===b.__CE_state){var e=b.localName,f=d.get(e);f?f.push(b):a.a.a.get(e)&&c.push(b);}}});for(e=0;e<c.length;e++)Xd(a.a,c[e]);for(;0<b.length;){var f=b.shift();e=f.localName;f=d.get(f.localName);for(var g=0;g<f.length;g++)Xd(a.a,f[g]);(e=a.F.get(e))&&e.resolve(void 0);}}}r.get=function(a){if(a=this.a.a.get(a))return a.constructorFunction};
	r.ya=function(a){if(!Qd(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.F.get(a);if(b)return b.b;b=new $d;this.F.set(a,b);this.a.a.get(a)&&!this.u.some(function(b){return b.localName===a})&&b.resolve(void 0);return b.b};r.Ra=function(a){Zd(this.ca);var b=this.f;this.f=function(c){return a(function(){return b(c)})};};window.CustomElementRegistry=O;O.prototype.define=O.prototype.xa;O.prototype.upgrade=O.prototype.ga;O.prototype.get=O.prototype.get;
	O.prototype.whenDefined=O.prototype.ya;O.prototype.polyfillWrapFlushCallback=O.prototype.Ra;var be=window.Document.prototype.createElement,ce=window.Document.prototype.createElementNS,de=window.Document.prototype.importNode,ee=window.Document.prototype.prepend,fe=window.Document.prototype.append,ge=window.DocumentFragment.prototype.prepend,he=window.DocumentFragment.prototype.append,ie=window.Node.prototype.cloneNode,je=window.Node.prototype.appendChild,ke=window.Node.prototype.insertBefore,le=window.Node.prototype.removeChild,me=window.Node.prototype.replaceChild,ne=Object.getOwnPropertyDescriptor(window.Node.prototype,
	"textContent"),oe=window.Element.prototype.attachShadow,pe=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),qe=window.Element.prototype.getAttribute,re=window.Element.prototype.setAttribute,se=window.Element.prototype.removeAttribute,te=window.Element.prototype.getAttributeNS,ue=window.Element.prototype.setAttributeNS,ve=window.Element.prototype.removeAttributeNS,we=window.Element.prototype.insertAdjacentElement,xe=window.Element.prototype.insertAdjacentHTML,ye=window.Element.prototype.prepend,
	ze=window.Element.prototype.append,Ae=window.Element.prototype.before,Be=window.Element.prototype.after,Ce=window.Element.prototype.replaceWith,De=window.Element.prototype.remove,Ee=window.HTMLElement,Fe=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),Ge=window.HTMLElement.prototype.insertAdjacentElement,He=window.HTMLElement.prototype.insertAdjacentHTML;var Ie=new function(){};function Je(){var a=Ke;window.HTMLElement=function(){function b(){var b=this.constructor,d=a.u.get(b);if(!d)throw Error("The custom element being constructed was not registered with `customElements`.");var e=d.constructionStack;if(0===e.length)return e=be.call(document,d.localName),Object.setPrototypeOf(e,b.prototype),e.__CE_state=1,e.__CE_definition=d,a.b(e),e;d=e.length-1;var f=e[d];if(f===Ie)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
	e[d]=Ie;Object.setPrototypeOf(f,b.prototype);a.b(f);return f}b.prototype=Ee.prototype;Object.defineProperty(b.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b});return b}();}function Le(a,b,c){function d(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];e=[];for(var f=[],m=0;m<d.length;m++){var n=d[m];n instanceof Element&&J(n)&&f.push(n);if(n instanceof DocumentFragment)for(n=n.firstChild;n;n=n.nextSibling)e.push(n);else e.push(n);}b.apply(this,d);for(d=0;d<f.length;d++)M(a,f[d]);if(J(this))for(d=0;d<e.length;d++)f=e[d],f instanceof Element&&L(a,f);}}void 0!==c.ea&&(b.prepend=d(c.ea));void 0!==c.append&&(b.append=d(c.append));}function Me(){var a=Ke;K(Document.prototype,"createElement",function(b){if(this.__CE_hasRegistry){var c=a.a.get(b);if(c)return new c.constructorFunction}b=be.call(this,b);a.b(b);return b});K(Document.prototype,"importNode",function(b,c){b=de.call(this,b,!!c);this.__CE_hasRegistry?N(a,b):Wd(a,b);return b});K(Document.prototype,"createElementNS",function(b,c){if(this.__CE_hasRegistry&&(null===b||"http://www.w3.org/1999/xhtml"===b)){var d=a.a.get(c);if(d)return new d.constructorFunction}b=ce.call(this,
	b,c);a.b(b);return b});Le(a,Document.prototype,{ea:ee,append:fe});}function Ne(){function a(a,d){Object.defineProperty(a,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(a){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,a);else{var c=void 0;if(this.firstChild){var e=this.childNodes,h=e.length;if(0<h&&J(this)){c=Array(h);for(var k=0;k<h;k++)c[k]=e[k];}}d.set.call(this,a);if(c)for(a=0;a<c.length;a++)M(b,c[a]);}}});}var b=Ke;K(Node.prototype,"insertBefore",function(a,d){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);
	a=ke.call(this,a,d);if(J(this))for(d=0;d<c.length;d++)L(b,c[d]);return a}c=J(a);d=ke.call(this,a,d);c&&M(b,a);J(this)&&L(b,a);return d});K(Node.prototype,"appendChild",function(a){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=je.call(this,a);if(J(this))for(var e=0;e<c.length;e++)L(b,c[e]);return a}c=J(a);e=je.call(this,a);c&&M(b,a);J(this)&&L(b,a);return e});K(Node.prototype,"cloneNode",function(a){a=ie.call(this,!!a);this.ownerDocument.__CE_hasRegistry?N(b,a):
	Wd(b,a);return a});K(Node.prototype,"removeChild",function(a){var c=J(a),e=le.call(this,a);c&&M(b,a);return e});K(Node.prototype,"replaceChild",function(a,d){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=me.call(this,a,d);if(J(this))for(M(b,d),d=0;d<c.length;d++)L(b,c[d]);return a}c=J(a);var f=me.call(this,a,d),g=J(this);g&&M(b,d);c&&M(b,a);g&&L(b,a);return f});ne&&ne.get?a(Node.prototype,ne):Vd(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){for(var a=
	[],b=0;b<this.childNodes.length;b++)a.push(this.childNodes[b].textContent);return a.join("")},set:function(a){for(;this.firstChild;)le.call(this,this.firstChild);je.call(this,document.createTextNode(a));}});});}function Oe(a){function b(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];e=[];for(var h=[],k=0;k<d.length;k++){var m=d[k];m instanceof Element&&J(m)&&h.push(m);if(m instanceof DocumentFragment)for(m=m.firstChild;m;m=m.nextSibling)e.push(m);else e.push(m);}b.apply(this,d);for(d=0;d<h.length;d++)M(a,h[d]);if(J(this))for(d=0;d<e.length;d++)h=e[d],h instanceof Element&&L(a,h);}}var c=Element.prototype;void 0!==Ae&&(c.before=b(Ae));void 0!==Ae&&(c.after=b(Be));void 0!==Ce&&
	K(c,"replaceWith",function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=[];for(var g=[],h=0;h<c.length;h++){var k=c[h];k instanceof Element&&J(k)&&g.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)d.push(k);else d.push(k);}h=J(this);Ce.apply(this,c);for(c=0;c<g.length;c++)M(a,g[c]);if(h)for(M(a,this),c=0;c<d.length;c++)g=d[c],g instanceof Element&&L(a,g);});void 0!==De&&K(c,"remove",function(){var b=J(this);De.call(this);b&&M(a,this);});}function Pe(){function a(a,b){Object.defineProperty(a,"innerHTML",{enumerable:b.enumerable,configurable:!0,get:b.get,set:function(a){var c=this,e=void 0;J(this)&&(e=[],Sd(this,function(a){a!==c&&e.push(a);}));b.set.call(this,a);if(e)for(var f=0;f<e.length;f++){var g=e[f];1===g.__CE_state&&d.disconnectedCallback(g);}this.ownerDocument.__CE_hasRegistry?N(d,this):Wd(d,this);return a}});}function b(a,b){K(a,"insertAdjacentElement",function(a,c){var e=J(c);a=b.call(this,a,c);e&&M(d,c);J(a)&&L(d,c);return a});}
	function c(a,b){function c(a,b){for(var c=[];a!==b;a=a.nextSibling)c.push(a);for(b=0;b<c.length;b++)N(d,c[b]);}K(a,"insertAdjacentHTML",function(a,d){a=a.toLowerCase();if("beforebegin"===a){var e=this.previousSibling;b.call(this,a,d);c(e||this.parentNode.firstChild,this);}else if("afterbegin"===a)e=this.firstChild,b.call(this,a,d),c(this.firstChild,e);else if("beforeend"===a)e=this.lastChild,b.call(this,a,d),c(e||this.firstChild,null);else if("afterend"===a)e=this.nextSibling,b.call(this,a,d),c(this.nextSibling,
	e);else throw new SyntaxError("The value provided ("+String(a)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");});}var d=Ke;oe&&K(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=oe.call(this,a)});pe&&pe.get?a(Element.prototype,pe):Fe&&Fe.get?a(HTMLElement.prototype,Fe):Vd(d,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){return ie.call(this,!0).innerHTML},set:function(a){var b="template"===this.localName,c=b?this.content:this,d=ce.call(document,
	this.namespaceURI,this.localName);for(d.innerHTML=a;0<c.childNodes.length;)le.call(c,c.childNodes[0]);for(a=b?d.content:d;0<a.childNodes.length;)je.call(c,a.childNodes[0]);}});});K(Element.prototype,"setAttribute",function(a,b){if(1!==this.__CE_state)return re.call(this,a,b);var c=qe.call(this,a);re.call(this,a,b);b=qe.call(this,a);d.attributeChangedCallback(this,a,c,b,null);});K(Element.prototype,"setAttributeNS",function(a,b,c){if(1!==this.__CE_state)return ue.call(this,a,b,c);var e=te.call(this,a,
	b);ue.call(this,a,b,c);c=te.call(this,a,b);d.attributeChangedCallback(this,b,e,c,a);});K(Element.prototype,"removeAttribute",function(a){if(1!==this.__CE_state)return se.call(this,a);var b=qe.call(this,a);se.call(this,a);null!==b&&d.attributeChangedCallback(this,a,b,null,null);});K(Element.prototype,"removeAttributeNS",function(a,b){if(1!==this.__CE_state)return ve.call(this,a,b);var c=te.call(this,a,b);ve.call(this,a,b);var e=te.call(this,a,b);c!==e&&d.attributeChangedCallback(this,b,c,e,a);});Ge?b(HTMLElement.prototype,
	Ge):we?b(Element.prototype,we):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");He?c(HTMLElement.prototype,He):xe?c(Element.prototype,xe):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");Le(d,Element.prototype,{ea:ye,append:ze});Oe(d);}var Qe=window.customElements;if(!Qe||Qe.forcePolyfill||"function"!=typeof Qe.define||"function"!=typeof Qe.get){var Ke=new Td;Je();Me();Le(Ke,DocumentFragment.prototype,{ea:ge,append:he});Ne();Pe();document.__CE_hasRegistry=!0;var customElements=new O(Ke);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements});}function Re(){this.end=this.start=0;this.rules=this.parent=this.previous=null;this.cssText=this.parsedCssText="";this.atRule=!1;this.type=0;this.parsedSelector=this.selector=this.keyframesName="";}
	function Se(a){a=a.replace(Te,"").replace(Ue,"");var b=Ve,c=a,d=new Re;d.start=0;d.end=c.length;for(var e=d,f=0,g=c.length;f<g;f++)if("{"===c[f]){e.rules||(e.rules=[]);var h=e,k=h.rules[h.rules.length-1]||null;e=new Re;e.start=f+1;e.parent=h;e.previous=k;h.rules.push(e);}else"}"===c[f]&&(e.end=f+1,e=e.parent||d);return b(d,a)}
	function Ve(a,b){var c=b.substring(a.start,a.end-1);a.parsedCssText=a.cssText=c.trim();a.parent&&(c=b.substring(a.previous?a.previous.end:a.parent.start,a.start-1),c=We(c),c=c.replace(Xe," "),c=c.substring(c.lastIndexOf(";")+1),c=a.parsedSelector=a.selector=c.trim(),a.atRule=0===c.indexOf("@"),a.atRule?0===c.indexOf("@media")?a.type=Ye:c.match(Ze)&&(a.type=$e,a.keyframesName=a.selector.split(Xe).pop()):a.type=0===c.indexOf("--")?af:bf);if(c=a.rules)for(var d=0,e=c.length,f=void 0;d<e&&(f=c[d]);d++)Ve(f,
	b);return a}function We(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,function(a,c){a=c;for(c=6-a.length;c--;)a="0"+a;return "\\"+a})}
	function cf(a,b,c){c=void 0===c?"":c;var d="";if(a.cssText||a.rules){var e=a.rules,f;if(f=e)f=e[0],f=!(f&&f.selector&&0===f.selector.indexOf("--"));if(f){f=0;for(var g=e.length,h=void 0;f<g&&(h=e[f]);f++)d=cf(h,b,d);}else b?b=a.cssText:(b=a.cssText,b=b.replace(df,"").replace(ef,""),b=b.replace(ff,"").replace(gf,"")),(d=b.trim())&&(d="  "+d+"\n");}d&&(a.selector&&(c+=a.selector+" {\n"),c+=d,a.selector&&(c+="}\n\n"));return c}
	var bf=1,$e=7,Ye=4,af=1E3,Te=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,Ue=/@import[^;]*;/gim,df=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,ef=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,ff=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,gf=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,Ze=/^@[^\s]*keyframes/,Xe=/\s+/g;var P=!(window.ShadyDOM&&window.ShadyDOM.inUse),hf;function jf(a){hf=a&&a.shimcssproperties?!1:P||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)"));}var kf;window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(kf=window.ShadyCSS.cssBuild);var lf=!(!window.ShadyCSS||!window.ShadyCSS.disableRuntime);
	window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?hf=window.ShadyCSS.nativeCss:window.ShadyCSS?(jf(window.ShadyCSS),window.ShadyCSS=void 0):jf(window.WebComponents&&window.WebComponents.flags);var R=hf,of=kf;var pf=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,qf=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,rf=/(--[\w-]+)\s*([:,;)]|$)/gi,sf=/(animation\s*:)|(animation-name\s*:)/,tf=/@media\s(.*)/,uf=/\{[^}]*\}/g;var vf=new Set;function wf(a,b){if(!a)return "";"string"===typeof a&&(a=Se(a));b&&xf(a,b);return cf(a,R)}function yf(a){!a.__cssRules&&a.textContent&&(a.__cssRules=Se(a.textContent));return a.__cssRules||null}function zf(a){return !!a.parent&&a.parent.type===$e}function xf(a,b,c,d){if(a){var e=!1,f=a.type;if(d&&f===Ye){var g=a.selector.match(tf);g&&(window.matchMedia(g[1]).matches||(e=!0));}f===bf?b(a):c&&f===$e?c(a):f===af&&(e=!0);if((a=a.rules)&&!e)for(e=0,f=a.length,g=void 0;e<f&&(g=a[e]);e++)xf(g,b,c,d);}}
	function Af(a,b,c,d){var e=document.createElement("style");b&&e.setAttribute("scope",b);e.textContent=a;Bf(e,c,d);return e}var Cf=null;function Df(a){a=document.createComment(" Shady DOM styles for "+a+" ");var b=document.head;b.insertBefore(a,(Cf?Cf.nextSibling:null)||b.firstChild);return Cf=a}function Bf(a,b,c){b=b||document.head;b.insertBefore(a,c&&c.nextSibling||b.firstChild);Cf?a.compareDocumentPosition(Cf)===Node.DOCUMENT_POSITION_PRECEDING&&(Cf=a):Cf=a;}
	function Ef(a,b){for(var c=0,d=a.length;b<d;b++)if("("===a[b])c++;else if(")"===a[b]&&0===--c)return b;return -1}function Ff(a,b){var c=a.indexOf("var(");if(-1===c)return b(a,"","","");var d=Ef(a,c+3),e=a.substring(c+4,d);c=a.substring(0,c);a=Ff(a.substring(d+1),b);d=e.indexOf(",");return -1===d?b(c,e.trim(),"",a):b(c,e.substring(0,d).trim(),e.substring(d+1).trim(),a)}function Gf(a,b){P?a.setAttribute("class",b):window.ShadyDOM.nativeMethods.setAttribute.call(a,"class",b);}
	var Hf=window.ShadyDOM&&window.ShadyDOM.wrap||function(a){return a};function If(a){var b=a.localName,c="";b?-1<b.indexOf("-")||(c=b,b=a.getAttribute&&a.getAttribute("is")||""):(b=a.is,c=a.extends);return {is:b,W:c}}function Jf(a){for(var b=[],c="",d=0;0<=d&&d<a.length;d++)if("("===a[d]){var e=Ef(a,d);c+=a.slice(d,e+1);d=e;}else","===a[d]?(b.push(c),c=""):c+=a[d];c&&b.push(c);return b}
	function Kf(a){if(void 0!==of)return of;if(void 0===a.__cssBuild){var b=a.getAttribute("css-build");if(b)a.__cssBuild=b;else{a:{b="template"===a.localName?a.content.firstChild:a.firstChild;if(b instanceof Comment&&(b=b.textContent.trim().split(":"),"css-build"===b[0])){b=b[1];break a}b="";}if(""!==b){var c="template"===a.localName?a.content.firstChild:a.firstChild;c.parentNode.removeChild(c);}a.__cssBuild=b;}}return a.__cssBuild||""}
	function Lf(a){a=void 0===a?"":a;return ""!==a&&R?P?"shadow"===a:"shady"===a:!1}function Mf(){}function Nf(a,b){Of(S,a,function(a){Pf(a,b||"");});}function Of(a,b,c){b.nodeType===Node.ELEMENT_NODE&&c(b);var d;"template"===b.localName?d=(b.content||b._content||b).childNodes:d=b.children||b.childNodes;if(d)for(b=0;b<d.length;b++)Of(a,d[b],c);}
	function Pf(a,b,c){if(b)if(a.classList)c?(a.classList.remove("style-scope"),a.classList.remove(b)):(a.classList.add("style-scope"),a.classList.add(b));else if(a.getAttribute){var d=a.getAttribute("class");c?d&&(b=d.replace("style-scope","").replace(b,""),Gf(a,b)):Gf(a,(d?d+" ":"")+"style-scope "+b);}}function Qf(a,b,c){Of(S,a,function(a){Pf(a,b,!0);Pf(a,c);});}function Rf(a,b){Of(S,a,function(a){Pf(a,b||"",!0);});}
	function Sf(a,b,c,d,e){var f=S;e=void 0===e?"":e;""===e&&(P||"shady"===(void 0===d?"":d)?e=wf(b,c):(a=If(a),e=Tf(f,b,a.is,a.W,c)+"\n\n"));return e.trim()}function Tf(a,b,c,d,e){var f=Uf(c,d);c=c?"."+c:"";return wf(b,function(b){b.c||(b.selector=b.C=Vf(a,b,a.b,c,f),b.c=!0);e&&e(b,c,f);})}function Uf(a,b){return b?"[is="+a+"]":a}
	function Vf(a,b,c,d,e){var f=Jf(b.selector);if(!zf(b)){b=0;for(var g=f.length,h=void 0;b<g&&(h=f[b]);b++)f[b]=c.call(a,h,d,e);}return f.filter(function(a){return !!a}).join(",")}function Wf(a){return a.replace(Xf,function(a,c,d){-1<d.indexOf("+")?d=d.replace(/\+/g,"___"):-1<d.indexOf("___")&&(d=d.replace(/___/g,"+"));return ":"+c+"("+d+")"})}
	function Yf(a){for(var b=[],c;c=a.match(Zf);){var d=c.index,e=Ef(a,d);if(-1===e)throw Error(c.input+" selector missing ')'");c=a.slice(d,e+1);a=a.replace(c,"\ue000");b.push(c);}return {pa:a,matches:b}}function $f(a,b){var c=a.split("\ue000");return b.reduce(function(a,b,f){return a+b+c[f+1]},c[0])}
	Mf.prototype.b=function(a,b,c){var d=!1;a=a.trim();var e=Xf.test(a);e&&(a=a.replace(Xf,function(a,b,c){return ":"+b+"("+c.replace(/\s/g,"")+")"}),a=Wf(a));var f=Zf.test(a);if(f){var g=Yf(a);a=g.pa;g=g.matches;}a=a.replace(ag,":host $1");a=a.replace(bg,function(a,e,f){d||(a=cg(f,e,b,c),d=d||a.stop,e=a.Ha,f=a.value);return e+f});f&&(a=$f(a,g));e&&(a=Wf(a));return a};
	function cg(a,b,c,d){var e=a.indexOf("::slotted");0<=a.indexOf(":host")?a=dg(a,d):0!==e&&(a=c?eg(a,c):a);c=!1;0<=e&&(b="",c=!0);if(c){var f=!0;c&&(a=a.replace(fg,function(a,b){return " > "+b}));}a=a.replace(gg,function(a,b,c){return '[dir="'+c+'"] '+b+", "+b+'[dir="'+c+'"]'});return {value:a,Ha:b,stop:f}}
	function eg(a,b){a=a.split(/(\[.+?\])/);for(var c=[],d=0;d<a.length;d++)if(1===d%2)c.push(a[d]);else{var e=a[d];if(""!==e||d!==a.length-1)e=e.split(":"),e[0]+=b,c.push(e.join(":"));}return c.join("")}function dg(a,b){var c=a.match(hg);return (c=c&&c[2].trim()||"")?c[0].match(ig)?a.replace(hg,function(a,c,f){return b+f}):c.split(ig)[0]===b?c:"should_not_match":a.replace(":host",b)}function jg(a){":root"===a.selector&&(a.selector="html");}
	Mf.prototype.c=function(a){return a.match(":host")?"":a.match("::slotted")?this.b(a,":not(.style-scope)"):eg(a.trim(),":not(.style-scope)")};t.Object.defineProperties(Mf.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return "style-scope"}}});
	var Xf=/:(nth[-\w]+)\(([^)]+)\)/,bg=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,ig=/[[.:#*]/,ag=/^(::slotted)/,hg=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,fg=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,gg=/(.*):dir\((?:(ltr|rtl))\)/,Zf=/:(?:matches|any|-(?:webkit|moz)-any)/,S=new Mf;function kg(a,b,c,d,e){this.L=a||null;this.b=b||null;this.na=c||[];this.G=null;this.cssBuild=e||"";this.W=d||"";this.a=this.H=this.K=null;}function U(a){return a?a.__styleInfo:null}function lg(a,b){return a.__styleInfo=b}kg.prototype.c=function(){return this.L};kg.prototype._getStyleRules=kg.prototype.c;function mg(a){var b=this.matches||this.matchesSelector||this.mozMatchesSelector||this.msMatchesSelector||this.oMatchesSelector||this.webkitMatchesSelector;return b&&b.call(this,a)}var ng=navigator.userAgent.match("Trident");function og(){}function pg(a){var b={},c=[],d=0;xf(a,function(a){qg(a);a.index=d++;a=a.A.cssText;for(var c;c=rf.exec(a);){var e=c[1];":"!==c[2]&&(b[e]=!0);}},function(a){c.push(a);});a.b=c;a=[];for(var e in b)a.push(e);return a}
	function qg(a){if(!a.A){var b={},c={};rg(a,c)&&(b.J=c,a.rules=null);b.cssText=a.parsedCssText.replace(uf,"").replace(pf,"");a.A=b;}}function rg(a,b){var c=a.A;if(c){if(c.J)return Object.assign(b,c.J),!0}else{c=a.parsedCssText;for(var d;a=pf.exec(c);){d=(a[2]||a[3]).trim();if("inherit"!==d||"unset"!==d)b[a[1].trim()]=d;d=!0;}return d}}
	function sg(a,b,c){b&&(b=0<=b.indexOf(";")?tg(a,b,c):Ff(b,function(b,e,f,g){if(!e)return b+g;(e=sg(a,c[e],c))&&"initial"!==e?"apply-shim-inherit"===e&&(e="inherit"):e=sg(a,c[f]||f,c)||f;return b+(e||"")+g}));return b&&b.trim()||""}
	function tg(a,b,c){b=b.split(";");for(var d=0,e,f;d<b.length;d++)if(e=b[d]){qf.lastIndex=0;if(f=qf.exec(e))e=sg(a,c[f[1]],c);else if(f=e.indexOf(":"),-1!==f){var g=e.substring(f);g=g.trim();g=sg(a,g,c)||g;e=e.substring(0,f)+g;}b[d]=e&&e.lastIndexOf(";")===e.length-1?e.slice(0,-1):e||"";}return b.join(";")}
	function ug(a,b){var c={},d=[];xf(a,function(a){a.A||qg(a);var e=a.C||a.parsedSelector;b&&a.A.J&&e&&mg.call(b,e)&&(rg(a,c),a=a.index,e=parseInt(a/32,10),d[e]=(d[e]||0)|1<<a%32);},null,!0);return {J:c,key:d}}
	function vg(a,b,c,d){b.A||qg(b);if(b.A.J){var e=If(a);a=e.is;e=e.W;e=a?Uf(a,e):"html";var f=b.parsedSelector,g=":host > *"===f||"html"===f,h=0===f.indexOf(":host")&&!g;"shady"===c&&(g=f===e+" > *."+e||-1!==f.indexOf("html"),h=!g&&0===f.indexOf(e));if(g||h)c=e,h&&(b.C||(b.C=Vf(S,b,S.b,a?"."+a:"",e)),c=b.C||e),d({pa:c,Oa:h,ab:g});}}function wg(a,b,c){var d={},e={};xf(b,function(b){vg(a,b,c,function(c){mg.call(a._element||a,c.pa)&&(c.Oa?rg(b,d):rg(b,e));});},null,!0);return {Ta:e,Ma:d}}
	function xg(a,b,c,d){var e=If(b),f=Uf(e.is,e.W),g=new RegExp("(?:^|[^.#[:])"+(b.extends?"\\"+f.slice(0,-1)+"\\]":f)+"($|[.:[\\s>+~])"),h=U(b);e=h.L;h=h.cssBuild;var k=yg(e,d);return Sf(b,e,function(b){var e="";b.A||qg(b);b.A.cssText&&(e=tg(a,b.A.cssText,c));b.cssText=e;if(!P&&!zf(b)&&b.cssText){var h=e=b.cssText;null==b.ta&&(b.ta=sf.test(e));if(b.ta)if(null==b.da){b.da=[];for(var m in k)h=k[m],h=h(e),e!==h&&(e=h,b.da.push(m));}else{for(m=0;m<b.da.length;++m)h=k[b.da[m]],e=h(e);h=e;}b.cssText=h;b.C=
	b.C||b.selector;e="."+d;m=Jf(b.C);h=0;for(var u=m.length,x=void 0;h<u&&(x=m[h]);h++)m[h]=x.match(g)?x.replace(f,e):e+" "+x;b.selector=m.join(",");}},h)}function yg(a,b){a=a.b;var c={};if(!P&&a)for(var d=0,e=a[d];d<a.length;e=a[++d]){var f=e,g=b;f.f=new RegExp("\\b"+f.keyframesName+"(?!\\B|-)","g");f.a=f.keyframesName+"-"+g;f.C=f.C||f.selector;f.selector=f.C.replace(f.keyframesName,f.a);c[e.keyframesName]=zg(e);}return c}function zg(a){return function(b){return b.replace(a.f,a.a)}}
	function Ag(a,b){var c=Bg,d=yf(a);a.textContent=wf(d,function(a){var d=a.cssText=a.parsedCssText;a.A&&a.A.cssText&&(d=d.replace(df,"").replace(ef,""),a.cssText=tg(c,d,b));});}t.Object.defineProperties(og.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return "x-scope"}}});var Bg=new og;var Cg={},Dg=window.customElements;if(Dg&&!P&&!lf){var Eg=Dg.define;Dg.define=function(a,b,c){Cg[a]||(Cg[a]=Df(a));Eg.call(Dg,a,b,c);};}function Fg(){this.cache={};}Fg.prototype.store=function(a,b,c,d){var e=this.cache[a]||[];e.push({J:b,styleElement:c,H:d});100<e.length&&e.shift();this.cache[a]=e;};function Gg(){}var Hg=new RegExp(S.a+"\\s*([^\\s]*)");function Ig(a){return (a=(a.classList&&a.classList.value?a.classList.value:a.getAttribute("class")||"").match(Hg))?a[1]:""}function Jg(a){var b=Hf(a).getRootNode();return b===a||b===a.ownerDocument?"":(a=b.host)?If(a).is:""}
	function Kg(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.target!==document.documentElement&&c.target!==document.head)for(var d=0;d<c.addedNodes.length;d++){var e=c.addedNodes[d];if(e.nodeType===Node.ELEMENT_NODE){var f=e.getRootNode(),g=Ig(e);if(g&&f===e.ownerDocument&&("style"!==e.localName&&"template"!==e.localName||""===Kf(e)))Rf(e,g);else if(f instanceof ShadowRoot)for(f=Jg(e),f!==g&&Qf(e,g,f),e=window.ShadyDOM.nativeMethods.querySelectorAll.call(e,":not(."+S.a+")"),g=0;g<e.length;g++){f=e[g];
	var h=Jg(f);h&&Pf(f,h);}}}}}
	if(!(P||window.ShadyDOM&&window.ShadyDOM.handlesDynamicScoping)){var Lg=new MutationObserver(Kg),Mg=function(a){Lg.observe(a,{childList:!0,subtree:!0});};if(window.customElements&&!window.customElements.polyfillWrapFlushCallback)Mg(document);else{var Ng=function(){Mg(document.body);};window.HTMLImports?window.HTMLImports.whenReady(Ng):requestAnimationFrame(function(){if("loading"===document.readyState){var a=function(){Ng();document.removeEventListener("readystatechange",a);};document.addEventListener("readystatechange",
	a);}else Ng();});}Gg=function(){Kg(Lg.takeRecords());};}var Og=Gg;var Pg={};var Qg=Promise.resolve();function Rg(a){if(a=Pg[a])a._applyShimCurrentVersion=a._applyShimCurrentVersion||0,a._applyShimValidatingVersion=a._applyShimValidatingVersion||0,a._applyShimNextVersion=(a._applyShimNextVersion||0)+1;}function Sg(a){return a._applyShimCurrentVersion===a._applyShimNextVersion}function Tg(a){a._applyShimValidatingVersion=a._applyShimNextVersion;a._validating||(a._validating=!0,Qg.then(function(){a._applyShimCurrentVersion=a._applyShimNextVersion;a._validating=!1;}));}var Ug={},Vg=new Fg;function V(){this.F={};this.c=document.documentElement;var a=new Re;a.rules=[];this.f=lg(this.c,new kg(a));this.u=!1;this.b=this.a=null;}r=V.prototype;r.flush=function(){Og();};r.Ka=function(a){return yf(a)};r.Xa=function(a){return wf(a)};r.prepareTemplate=function(a,b,c){this.prepareTemplateDom(a,b);this.prepareTemplateStyles(a,b,c);};
	r.prepareTemplateStyles=function(a,b,c){if(!a._prepared&&!lf){P||Cg[b]||(Cg[b]=Df(b));a._prepared=!0;a.name=b;a.extends=c;Pg[b]=a;var d=Kf(a),e=Lf(d);c={is:b,extends:c};for(var f=[],g=a.content.querySelectorAll("style"),h=0;h<g.length;h++){var k=g[h];if(k.hasAttribute("shady-unscoped")){if(!P){var m=k.textContent;vf.has(m)||(vf.add(m),m=k.cloneNode(!0),document.head.appendChild(m));k.parentNode.removeChild(k);}}else f.push(k.textContent),k.parentNode.removeChild(k);}f=f.join("").trim()+(Ug[b]||"");
	Wg(this);if(!e){if(g=!d)g=qf.test(f)||pf.test(f),qf.lastIndex=0,pf.lastIndex=0;h=Se(f);g&&R&&this.a&&this.a.transformRules(h,b);a._styleAst=h;}g=[];R||(g=pg(a._styleAst));if(!g.length||R)h=P?a.content:null,b=Cg[b]||null,d=Sf(c,a._styleAst,null,d,e?f:""),d=d.length?Af(d,c.is,h,b):null,a._style=d;a.a=g;}};r.Sa=function(a,b){Ug[b]=a.join(" ");};r.prepareTemplateDom=function(a,b){if(!lf){var c=Kf(a);P||"shady"===c||a._domPrepared||(a._domPrepared=!0,Nf(a.content,b));}};
	function Xg(a){var b=If(a),c=b.is;b=b.W;var d=Cg[c]||null,e=Pg[c];if(e){c=e._styleAst;var f=e.a;e=Kf(e);b=new kg(c,d,f,b,e);lg(a,b);return b}}function Yg(a){!a.b&&window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&(a.b=window.ShadyCSS.CustomStyleInterface,a.b.transformCallback=function(b){a.wa(b);},a.b.validateCallback=function(){requestAnimationFrame(function(){(a.b.enqueued||a.u)&&a.flushCustomStyles();});});}
	function Wg(a){!a.a&&window.ShadyCSS&&window.ShadyCSS.ApplyShim&&(a.a=window.ShadyCSS.ApplyShim,a.a.invalidCallback=Rg);Yg(a);}
	r.flushCustomStyles=function(){if(!lf&&(Wg(this),this.b)){var a=this.b.processStyles();if(this.b.enqueued&&!Lf(this.f.cssBuild)){if(R){if(!this.f.cssBuild)for(var b=0;b<a.length;b++){var c=this.b.getStyleForCustomStyle(a[b]);if(c&&R&&this.a){var d=yf(c);Wg(this);this.a.transformRules(d);c.textContent=wf(d);}}}else{Zg(this,this.c,this.f);for(b=0;b<a.length;b++)(c=this.b.getStyleForCustomStyle(a[b]))&&Ag(c,this.f.K);this.u&&this.styleDocument();}this.b.enqueued=!1;}}};
	r.styleElement=function(a,b){if(lf){if(b){U(a)||lg(a,new kg(null));var c=U(a);c.G=c.G||{};Object.assign(c.G,b);$g(this,a,c);}}else if(c=U(a)||Xg(a))if(a!==this.c&&(this.u=!0),b&&(c.G=c.G||{},Object.assign(c.G,b)),R)$g(this,a,c);else if(this.flush(),Zg(this,a,c),c.na&&c.na.length){b=If(a).is;var d;a:{if(d=Vg.cache[b])for(var e=d.length-1;0<=e;e--){var f=d[e];b:{var g=c.na;for(var h=0;h<g.length;h++){var k=g[h];if(f.J[k]!==c.K[k]){g=!1;break b}}g=!0;}if(g){d=f;break a}}d=void 0;}g=d?d.styleElement:null;
	e=c.H;(f=d&&d.H)||(f=this.F[b]=(this.F[b]||0)+1,f=b+"-"+f);c.H=f;f=c.H;h=Bg;h=g?g.textContent||"":xg(h,a,c.K,f);k=U(a);var m=k.a;m&&!P&&m!==g&&(m._useCount--,0>=m._useCount&&m.parentNode&&m.parentNode.removeChild(m));P?k.a?(k.a.textContent=h,g=k.a):h&&(g=Af(h,f,a.shadowRoot,k.b)):g?g.parentNode||(ng&&-1<h.indexOf("@media")&&(g.textContent=h),Bf(g,null,k.b)):h&&(g=Af(h,f,null,k.b));g&&(g._useCount=g._useCount||0,k.a!=g&&g._useCount++,k.a=g);f=g;P||(g=c.H,k=h=a.getAttribute("class")||"",e&&(k=h.replace(new RegExp("\\s*x-scope\\s*"+
	e+"\\s*","g")," ")),k+=(k?" ":"")+"x-scope "+g,h!==k&&Gf(a,k));d||Vg.store(b,c.K,f,c.H);}};
	function $g(a,b,c){var d=If(b).is;if(c.G){var e=c.G,f;for(f in e)null===f?b.style.removeProperty(f):b.style.setProperty(f,e[f]);}e=Pg[d];if(!(!e&&b!==a.c||e&&""!==Kf(e))&&e&&e._style&&!Sg(e)){if(Sg(e)||e._applyShimValidatingVersion!==e._applyShimNextVersion)Wg(a),a.a&&a.a.transformRules(e._styleAst,d),e._style.textContent=Sf(b,c.L),Tg(e);P&&(a=b.shadowRoot)&&(a=a.querySelector("style"))&&(a.textContent=Sf(b,c.L));c.L=e._styleAst;}}
	function ah(a,b){return (b=Hf(b).getRootNode().host)?U(b)||Xg(b)?b:ah(a,b):a.c}function Zg(a,b,c){var d=ah(a,b),e=U(d),f=e.K;d===a.c||f||(Zg(a,d,e),f=e.K);a=Object.create(f||null);d=wg(b,c.L,c.cssBuild);b=ug(e.L,b).J;Object.assign(a,d.Ma,b,d.Ta);b=c.G;for(var g in b)if((e=b[g])||0===e)a[g]=e;g=Bg;b=Object.getOwnPropertyNames(a);for(e=0;e<b.length;e++)d=b[e],a[d]=sg(g,a[d],a);c.K=a;}r.styleDocument=function(a){this.styleSubtree(this.c,a);};
	r.styleSubtree=function(a,b){var c=Hf(a),d=c.shadowRoot;(d||a===this.c)&&this.styleElement(a,b);if(a=d&&(d.children||d.childNodes))for(c=0;c<a.length;c++)this.styleSubtree(a[c]);else if(c=c.children||c.childNodes)for(a=0;a<c.length;a++)this.styleSubtree(c[a]);};
	r.wa=function(a){var b=this,c=Kf(a);c!==this.f.cssBuild&&(this.f.cssBuild=c);if(!Lf(c)){var d=yf(a);xf(d,function(a){if(P)jg(a);else{var d=S;a.selector=a.parsedSelector;jg(a);a.selector=a.C=Vf(d,a,d.c,void 0,void 0);}R&&""===c&&(Wg(b),b.a&&b.a.transformRule(a));});R?a.textContent=wf(d):this.f.L.rules.push(d);}};r.getComputedStyleValue=function(a,b){var c;R||(c=(U(a)||U(ah(this,a))).K[b]);return (c=c||window.getComputedStyle(a).getPropertyValue(b))?c.trim():""};
	r.Wa=function(a,b){var c=Hf(a).getRootNode();b=b?b.split(/\s/):[];c=c.host&&c.host.localName;if(!c){var d=a.getAttribute("class");if(d){d=d.split(/\s/);for(var e=0;e<d.length;e++)if(d[e]===S.a){c=d[e+1];break}}}c&&b.push(S.a,c);R||(c=U(a))&&c.H&&b.push(Bg.a,c.H);Gf(a,b.join(" "));};r.Fa=function(a){return U(a)};r.Va=function(a,b){Pf(a,b);};r.Ya=function(a,b){Pf(a,b,!0);};r.Ua=function(a){return Jg(a)};r.Ia=function(a){return Ig(a)};V.prototype.flush=V.prototype.flush;V.prototype.prepareTemplate=V.prototype.prepareTemplate;
	V.prototype.styleElement=V.prototype.styleElement;V.prototype.styleDocument=V.prototype.styleDocument;V.prototype.styleSubtree=V.prototype.styleSubtree;V.prototype.getComputedStyleValue=V.prototype.getComputedStyleValue;V.prototype.setElementClass=V.prototype.Wa;V.prototype._styleInfoForNode=V.prototype.Fa;V.prototype.transformCustomStyleForDocument=V.prototype.wa;V.prototype.getStyleAst=V.prototype.Ka;V.prototype.styleAstToString=V.prototype.Xa;V.prototype.flushCustomStyles=V.prototype.flushCustomStyles;
	V.prototype.scopeNode=V.prototype.Va;V.prototype.unscopeNode=V.prototype.Ya;V.prototype.scopeForNode=V.prototype.Ua;V.prototype.currentScopeForNode=V.prototype.Ia;V.prototype.prepareAdoptedCssText=V.prototype.Sa;Object.defineProperties(V.prototype,{nativeShadow:{get:function(){return P}},nativeCss:{get:function(){return R}}});var W=new V,bh,ch;window.ShadyCSS&&(bh=window.ShadyCSS.ApplyShim,ch=window.ShadyCSS.CustomStyleInterface);
	window.ShadyCSS={ScopingShim:W,prepareTemplate:function(a,b,c){W.flushCustomStyles();W.prepareTemplate(a,b,c);},prepareTemplateDom:function(a,b){W.prepareTemplateDom(a,b);},prepareTemplateStyles:function(a,b,c){W.flushCustomStyles();W.prepareTemplateStyles(a,b,c);},styleSubtree:function(a,b){W.flushCustomStyles();W.styleSubtree(a,b);},styleElement:function(a){W.flushCustomStyles();W.styleElement(a);},styleDocument:function(a){W.flushCustomStyles();W.styleDocument(a);},flushCustomStyles:function(){W.flushCustomStyles();},
	getComputedStyleValue:function(a,b){return W.getComputedStyleValue(a,b)},nativeCss:R,nativeShadow:P,cssBuild:of,disableRuntime:lf};bh&&(window.ShadyCSS.ApplyShim=bh);ch&&(window.ShadyCSS.CustomStyleInterface=ch);(function(a){function b(a){""==a&&(f.call(this),this.i=!0);return a.toLowerCase()}function c(a){var b=a.charCodeAt(0);return 32<b&&127>b&&-1==[34,35,60,62,63,96].indexOf(b)?a:encodeURIComponent(a)}function d(a){var b=a.charCodeAt(0);return 32<b&&127>b&&-1==[34,35,60,62,96].indexOf(b)?a:encodeURIComponent(a)}function e(a,e,g){function h(a){}var k=e||"scheme start",x=0,q="",u=!1,Q=!1;a:for(;(void 0!=a[x-1]||0==x)&&!this.i;){var l=a[x];switch(k){case "scheme start":if(l&&p.test(l))q+=l.toLowerCase(),
	k="scheme";else if(e){break a}else{q="";k="no scheme";continue}break;case "scheme":if(l&&G.test(l))q+=l.toLowerCase();else if(":"==l){this.h=q;q="";if(e)break a;void 0!==m[this.h]&&(this.B=!0);k="file"==this.h?"relative":this.B&&g&&g.h==this.h?"relative or authority":this.B?"authority first slash":"scheme data";}else if(e){break a}else{q="";x=0;k="no scheme";continue}break;case "scheme data":"?"==l?(this.o="?",k="query"):"#"==
	l?(this.v="#",k="fragment"):void 0!=l&&"\t"!=l&&"\n"!=l&&"\r"!=l&&(this.la+=c(l));break;case "no scheme":if(g&&void 0!==m[g.h]){k="relative";continue}else f.call(this),this.i=!0;break;case "relative or authority":if("/"==l&&"/"==a[x+1])k="authority ignore slashes";else{k="relative";continue}break;case "relative":this.B=!0;"file"!=this.h&&(this.h=g.h);if(void 0==l){this.j=g.j;this.m=g.m;this.l=g.l.slice();this.o=g.o;this.s=g.s;this.g=g.g;break a}else if("/"==
	l||"\\"==l)k="relative slash";else if("?"==l)this.j=g.j,this.m=g.m,this.l=g.l.slice(),this.o="?",this.s=g.s,this.g=g.g,k="query";else if("#"==l)this.j=g.j,this.m=g.m,this.l=g.l.slice(),this.o=g.o,this.v="#",this.s=g.s,this.g=g.g,k="fragment";else{k=a[x+1];var y=a[x+2];if("file"!=this.h||!p.test(l)||":"!=k&&"|"!=k||void 0!=y&&"/"!=y&&"\\"!=y&&"?"!=y&&"#"!=y)this.j=g.j,this.m=g.m,this.s=g.s,this.g=g.g,this.l=g.l.slice(),this.l.pop();k="relative path";continue}break;
	case "relative slash":if("/"==l||"\\"==l)k="file"==this.h?"file host":"authority ignore slashes";else{"file"!=this.h&&(this.j=g.j,this.m=g.m,this.s=g.s,this.g=g.g);k="relative path";continue}break;case "authority first slash":if("/"==l)k="authority second slash";else{k="authority ignore slashes";continue}break;case "authority second slash":k="authority ignore slashes";if("/"!=l){continue}break;case "authority ignore slashes":if("/"!=
	l&&"\\"!=l){k="authority";continue}break;case "authority":if("@"==l){u&&(q+="%40");u=!0;for(l=0;l<q.length;l++)y=q[l],"\t"==y||"\n"==y||"\r"==y?h("Invalid whitespace in authority."):":"==y&&null===this.g?this.g="":(y=c(y),null!==this.g?this.g+=y:this.s+=y);q="";}else if(void 0==l||"/"==l||"\\"==l||"?"==l||"#"==l){x-=q.length;q="";k="host";continue}else q+=l;break;case "file host":if(void 0==l||"/"==l||"\\"==l||"?"==l||"#"==l){2!=q.length||
	!p.test(q[0])||":"!=q[1]&&"|"!=q[1]?(0!=q.length&&(this.j=b.call(this,q),q=""),k="relative path start"):k="relative path";continue}else"\t"==l||"\n"==l||"\r"==l?h("Invalid whitespace in file host."):q+=l;break;case "host":case "hostname":if(":"!=l||Q)if(void 0==l||"/"==l||"\\"==l||"?"==l||"#"==l){this.j=b.call(this,q);q="";k="relative path start";if(e)break a;continue}else"\t"!=l&&"\n"!=l&&"\r"!=l?("["==l?Q=!0:"]"==l&&(Q=!1),q+=l):h("Invalid code point in host/hostname: "+l);else if(this.j=b.call(this,
	q),q="",k="port","hostname"==e)break a;break;case "port":if(/[0-9]/.test(l))q+=l;else if(void 0==l||"/"==l||"\\"==l||"?"==l||"#"==l||e){""!=q&&(q=parseInt(q,10),q!=m[this.h]&&(this.m=q+""),q="");if(e)break a;k="relative path start";continue}else"\t"==l||"\n"==l||"\r"==l?h("Invalid code point in port: "+l):(f.call(this),this.i=!0);break;case "relative path start":k="relative path";if("/"!=l&&"\\"!=l)continue;break;case "relative path":if(void 0!=l&&"/"!=l&&"\\"!=
	l&&(e||"?"!=l&&"#"!=l))"\t"!=l&&"\n"!=l&&"\r"!=l&&(q+=c(l));else{if(y=n[q.toLowerCase()])q=y;".."==q?(this.l.pop(),"/"!=l&&"\\"!=l&&this.l.push("")):"."==q&&"/"!=l&&"\\"!=l?this.l.push(""):"."!=q&&("file"==this.h&&0==this.l.length&&2==q.length&&p.test(q[0])&&"|"==q[1]&&(q=q[0]+":"),this.l.push(q));q="";"?"==l?(this.o="?",k="query"):"#"==l&&(this.v="#",k="fragment");}break;case "query":e||"#"!=l?void 0!=l&&"\t"!=l&&"\n"!=l&&"\r"!=l&&(this.o+=d(l)):(this.v=
	"#",k="fragment");break;case "fragment":void 0!=l&&"\t"!=l&&"\n"!=l&&"\r"!=l&&(this.v+=l);}x++;}}function f(){this.s=this.la=this.h="";this.g=null;this.m=this.j="";this.l=[];this.v=this.o="";this.B=this.i=!1;}function g(a,b){void 0===b||b instanceof g||(b=new g(String(b)));this.a=a;f.call(this);a=this.a.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"");e.call(this,a,null,b);}var h=!1;try{var k=new URL("b","http://a");k.pathname="c%20d";h="http://a/c%20d"===k.href;}catch(x){}if(!h){var m=Object.create(null);m.ftp=
	21;m.file=0;m.gopher=70;m.http=80;m.https=443;m.ws=80;m.wss=443;var n=Object.create(null);n["%2e"]=".";n[".%2e"]="..";n["%2e."]="..";n["%2e%2e"]="..";var p=/[a-zA-Z]/,G=/[a-zA-Z0-9\+\-\.]/;g.prototype={toString:function(){return this.href},get href(){if(this.i)return this.a;var a="";if(""!=this.s||null!=this.g)a=this.s+(null!=this.g?":"+this.g:"")+"@";return this.protocol+(this.B?"//"+a+this.host:"")+this.pathname+this.o+this.v},set href(a){f.call(this);e.call(this,a);},get protocol(){return this.h+
	":"},set protocol(a){this.i||e.call(this,a+":","scheme start");},get host(){return this.i?"":this.m?this.j+":"+this.m:this.j},set host(a){!this.i&&this.B&&e.call(this,a,"host");},get hostname(){return this.j},set hostname(a){!this.i&&this.B&&e.call(this,a,"hostname");},get port(){return this.m},set port(a){!this.i&&this.B&&e.call(this,a,"port");},get pathname(){return this.i?"":this.B?"/"+this.l.join("/"):this.la},set pathname(a){!this.i&&this.B&&(this.l=[],e.call(this,a,"relative path start"));},get search(){return this.i||
	!this.o||"?"==this.o?"":this.o},set search(a){!this.i&&this.B&&(this.o="?","?"==a[0]&&(a=a.slice(1)),e.call(this,a,"query"));},get hash(){return this.i||!this.v||"#"==this.v?"":this.v},set hash(a){this.i||(a?(this.v="#","#"==a[0]&&(a=a.slice(1)),e.call(this,a,"fragment")):this.v="");},get origin(){var a;if(this.i||!this.h)return "";switch(this.h){case "data":case "file":case "javascript":case "mailto":return "null"}return (a=this.host)?this.h+"://"+a:""}};var u=a.URL;u&&(g.createObjectURL=function(a){return u.createObjectURL.apply(u,
	arguments)},g.revokeObjectURL=function(a){u.revokeObjectURL(a);});a.URL=g;}})(window);Object.getOwnPropertyDescriptor(Node.prototype,"baseURI")||Object.defineProperty(Node.prototype,"baseURI",{get:function(){var a=(this.ownerDocument||this).querySelector("base[href]");return a&&a.href||window.location.href},configurable:!0,enumerable:!0});var dh=document.createElement("style");dh.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var eh=document.querySelector("head");eh.insertBefore(dh,eh.firstChild);var fh=window.customElements,gh=!1,hh=null;fh.polyfillWrapFlushCallback&&fh.polyfillWrapFlushCallback(function(a){hh=a;gh&&a();});function ih(){window.HTMLTemplateElement.bootstrap&&window.HTMLTemplateElement.bootstrap(window.document);hh&&hh();gh=!0;window.WebComponents.ready=!0;document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}));}
	"complete"!==document.readyState?(window.addEventListener("load",ih),window.addEventListener("DOMContentLoaded",function(){window.removeEventListener("load",ih);ih();})):ih();}).call(commonjsGlobal);

	var scrollToAnchor_1 = scrollToAnchor;

	function scrollToAnchor (anchor, options) {
	  if (anchor) {
	    try {
	      var el = document.querySelector(anchor);
	      if (el) el.scrollIntoView(options);
	    } catch (e) {}
	  }
	}

	var documentReady = ready;

	function ready (callback) {
	  if (typeof document === 'undefined') {
	    throw new Error('document-ready only runs in the browser')
	  }
	  var state = document.readyState;
	  if (state === 'complete' || state === 'interactive') {
	    return setTimeout(callback, 0)
	  }

	  document.addEventListener('DOMContentLoaded', function onLoad () {
	    callback();
	  });
	}

	var global$1 = (typeof global !== "undefined" ? global :
	            typeof self !== "undefined" ? self :
	            typeof window !== "undefined" ? window : {});

	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
	var inited = false;
	function init () {
	  inited = true;
	  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	  for (var i = 0, len = code.length; i < len; ++i) {
	    lookup[i] = code[i];
	    revLookup[code.charCodeAt(i)] = i;
	  }

	  revLookup['-'.charCodeAt(0)] = 62;
	  revLookup['_'.charCodeAt(0)] = 63;
	}

	function toByteArray (b64) {
	  if (!inited) {
	    init();
	  }
	  var i, j, l, tmp, placeHolders, arr;
	  var len = b64.length;

	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

	  // base64 is 4/3 + up to two characters of the original data
	  arr = new Arr(len * 3 / 4 - placeHolders);

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len;

	  var L = 0;

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
	    arr[L++] = (tmp >> 16) & 0xFF;
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
	    arr[L++] = tmp & 0xFF;
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  if (!inited) {
	    init();
	  }
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
	  var output = '';
	  var parts = [];
	  var maxChunkLength = 16383; // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    output += lookup[tmp >> 2];
	    output += lookup[(tmp << 4) & 0x3F];
	    output += '==';
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
	    output += lookup[tmp >> 10];
	    output += lookup[(tmp >> 4) & 0x3F];
	    output += lookup[(tmp << 2) & 0x3F];
	    output += '=';
	  }

	  parts.push(output);

	  return parts.join('')
	}

	function read (buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? (nBytes - 1) : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];

	  i += d;

	  e = s & ((1 << (-nBits)) - 1);
	  s >>= (-nBits);
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1);
	  e >>= (-nBits);
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	function write (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
	  var i = isLE ? 0 : (nBytes - 1);
	  var d = isLE ? 1 : -1;
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

	  value = Math.abs(value);

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }

	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128;
	}

	var toString = {}.toString;

	var isArray = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};

	var INSPECT_MAX_BYTES = 50;

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
	  ? global$1.TYPED_ARRAY_SUPPORT
	  : true;

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length);
	    that.__proto__ = Buffer.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length);
	    }
	    that.length = length;
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192; // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype;
	  return arr
	};

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	};

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype;
	  Buffer.__proto__ = Uint8Array;
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size);
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	};

	function allocUnsafe (that, size) {
	  assertSize(size);
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0;
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	};
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	};

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8';
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0;
	  that = createBuffer(that, length);

	  var actual = that.write(string, encoding);

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual);
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0;
	  that = createBuffer(that, length);
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255;
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array);
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset);
	  } else {
	    array = new Uint8Array(array, byteOffset, length);
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array;
	    that.__proto__ = Buffer.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array);
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (internalIsBuffer(obj)) {
	    var len = checked(obj.length) | 0;
	    that = createBuffer(that, len);

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len);
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	Buffer.isBuffer = isBuffer;
	function internalIsBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length;
	  var y = b.length;

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	};

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i;
	  if (length === undefined) {
	    length = 0;
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length;
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length);
	  var pos = 0;
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i];
	    if (!internalIsBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos);
	    pos += buf.length;
	  }
	  return buffer
	};

	function byteLength (string, encoding) {
	  if (internalIsBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string;
	  }

	  var len = string.length;
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer.byteLength = byteLength;

	function slowToString (encoding, start, end) {
	  var loweredCase = false;

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0;
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length;
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0;
	  start >>>= 0;

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8';

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase();
	        loweredCase = true;
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true;

	function swap (b, n, m) {
	  var i = b[n];
	  b[n] = b[m];
	  b[m] = i;
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length;
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1);
	  }
	  return this
	};

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length;
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3);
	    swap(this, i + 1, i + 2);
	  }
	  return this
	};

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length;
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7);
	    swap(this, i + 1, i + 6);
	    swap(this, i + 2, i + 5);
	    swap(this, i + 3, i + 4);
	  }
	  return this
	};

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0;
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	};

	Buffer.prototype.equals = function equals (b) {
	  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	};

	Buffer.prototype.inspect = function inspect () {
	  var str = '';
	  var max = INSPECT_MAX_BYTES;
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
	    if (this.length > max) str += ' ... ';
	  }
	  return '<Buffer ' + str + '>'
	};

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!internalIsBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0;
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0;
	  }
	  if (thisStart === undefined) {
	    thisStart = 0;
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length;
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0;
	  end >>>= 0;
	  thisStart >>>= 0;
	  thisEnd >>>= 0;

	  if (this === target) return 0

	  var x = thisEnd - thisStart;
	  var y = end - start;
	  var len = Math.min(x, y);

	  var thisCopy = this.slice(thisStart, thisEnd);
	  var targetCopy = target.slice(start, end);

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i];
	      y = targetCopy[i];
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset;
	    byteOffset = 0;
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff;
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000;
	  }
	  byteOffset = +byteOffset;  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1);
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1;
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0;
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding);
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (internalIsBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF; // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1;
	  var arrLength = arr.length;
	  var valLength = val.length;

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase();
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2;
	      arrLength /= 2;
	      valLength /= 2;
	      byteOffset /= 2;
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i;
	  if (dir) {
	    var foundIndex = -1;
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i;
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex;
	        foundIndex = -1;
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true;
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false;
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	};

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	};

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	};

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0;
	  var remaining = buf.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = Number(length);
	    if (length > remaining) {
	      length = remaining;
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length;
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2;
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16);
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed;
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8';
	    length = this.length;
	    offset = 0;
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset;
	    length = this.length;
	    offset = 0;
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0;
	    if (isFinite(length)) {
	      length = length | 0;
	      if (encoding === undefined) encoding = 'utf8';
	    } else {
	      encoding = length;
	      length = undefined;
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset;
	  if (length === undefined || length > remaining) length = remaining;

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8';

	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	};

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	};

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return fromByteArray(buf)
	  } else {
	    return fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end);
	  var res = [];

	  var i = start;
	  while (i < end) {
	    var firstByte = buf[i];
	    var codePoint = null;
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1;

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint;

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte;
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1];
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          fourthByte = buf[i + 3];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint;
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD;
	      bytesPerSequence = 1;
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000;
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
	      codePoint = 0xDC00 | codePoint & 0x3FF;
	    }

	    res.push(codePoint);
	    i += bytesPerSequence;
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000;

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length;
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = '';
	  var i = 0;
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    );
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F);
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i]);
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length;

	  if (!start || start < 0) start = 0;
	  if (!end || end < 0 || end > len) end = len;

	  var out = '';
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i]);
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end);
	  var res = '';
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length;
	  start = ~~start;
	  end = end === undefined ? len : ~~end;

	  if (start < 0) {
	    start += len;
	    if (start < 0) start = 0;
	  } else if (start > len) {
	    start = len;
	  }

	  if (end < 0) {
	    end += len;
	    if (end < 0) end = 0;
	  } else if (end > len) {
	    end = len;
	  }

	  if (end < start) end = start;

	  var newBuf;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end);
	    newBuf.__proto__ = Buffer.prototype;
	  } else {
	    var sliceLen = end - start;
	    newBuf = new Buffer(sliceLen, undefined);
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start];
	    }
	  }

	  return newBuf
	};

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }

	  return val
	};

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length);
	  }

	  var val = this[offset + --byteLength];
	  var mul = 1;
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul;
	  }

	  return val
	};

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  return this[offset]
	};

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] | (this[offset + 1] << 8)
	};

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return (this[offset] << 8) | this[offset + 1]
	};

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	};

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	};

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val
	};

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var i = byteLength;
	  var mul = 1;
	  var val = this[offset + --i];
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val
	};

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	};

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset] | (this[offset + 1] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset + 1] | (this[offset] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	};

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	};

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return read(this, offset, true, 23, 4)
	};

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return read(this, offset, false, 23, 4)
	};

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return read(this, offset, true, 52, 8)
	};

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return read(this, offset, false, 52, 8)
	};

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var mul = 1;
	  var i = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  this[offset] = (value & 0xff);
	  return offset + 1
	};

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8;
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2
	};

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8);
	    this[offset + 1] = (value & 0xff);
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2
	};

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24);
	    this[offset + 2] = (value >>> 16);
	    this[offset + 1] = (value >>> 8);
	    this[offset] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4
	};

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24);
	    this[offset + 1] = (value >>> 16);
	    this[offset + 2] = (value >>> 8);
	    this[offset + 3] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4
	};

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = 0;
	  var mul = 1;
	  var sub = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  var sub = 0;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  if (value < 0) value = 0xff + value + 1;
	  this[offset] = (value & 0xff);
	  return offset + 1
	};

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2
	};

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8);
	    this[offset + 1] = (value & 0xff);
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2
	};

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	    this[offset + 2] = (value >>> 16);
	    this[offset + 3] = (value >>> 24);
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4
	};

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (value < 0) value = 0xffffffff + value + 1;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24);
	    this[offset + 1] = (value >>> 16);
	    this[offset + 2] = (value >>> 8);
	    this[offset + 3] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4
	};

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
	  }
	  write(buf, value, offset, littleEndian, 23, 4);
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	};

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	};

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
	  }
	  write(buf, value, offset, littleEndian, 52, 8);
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	};

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	};

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0;
	  if (!end && end !== 0) end = this.length;
	  if (targetStart >= target.length) targetStart = target.length;
	  if (!targetStart) targetStart = 0;
	  if (end > 0 && end < start) end = start;

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length;
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start;
	  }

	  var len = end - start;
	  var i;

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    );
	  }

	  return len
	};

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start;
	      start = 0;
	      end = this.length;
	    } else if (typeof end === 'string') {
	      encoding = end;
	      end = this.length;
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0);
	      if (code < 256) {
	        val = code;
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255;
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0;
	  end = end === undefined ? this.length : end >>> 0;

	  if (!val) val = 0;

	  var i;
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val;
	    }
	  } else {
	    var bytes = internalIsBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString());
	    var len = bytes.length;
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len];
	    }
	  }

	  return this
	};

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '=';
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity;
	  var codePoint;
	  var length = string.length;
	  var leadSurrogate = null;
	  var bytes = [];

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i);

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint;

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	        leadSurrogate = codePoint;
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	    }

	    leadSurrogate = null;

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint);
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF);
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo;
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i);
	    hi = c >> 8;
	    lo = c % 256;
	    byteArray.push(lo);
	    byteArray.push(hi);
	  }

	  return byteArray
	}


	function base64ToBytes (str) {
	  return toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i];
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}


	// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	function isBuffer(obj) {
	  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
	}

	function isFastBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}

	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
	}

	if (typeof global$1.setTimeout === 'function') ;
	if (typeof global$1.clearTimeout === 'function') ;

	// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
	var performance = global$1.performance || {};
	var performanceNow =
	  performance.now        ||
	  performance.mozNow     ||
	  performance.msNow      ||
	  performance.oNow       ||
	  performance.webkitNow  ||
	  function(){ return (new Date()).getTime() };

	var inherits;
	if (typeof Object.create === 'function'){
	  inherits = function inherits(ctor, superCtor) {
	    // implementation from standard node.js 'util' module
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  inherits = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    var TempCtor = function () {};
	    TempCtor.prototype = superCtor.prototype;
	    ctor.prototype = new TempCtor();
	    ctor.prototype.constructor = ctor;
	  };
	}
	var inherits$1 = inherits;

	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    _extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}

	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray$1(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var length = output.reduce(function(prev, cur) {
	    if (cur.indexOf('\n') >= 0) ;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray$1(ar) {
	  return Array.isArray(ar);
	}

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}

	function isNull(arg) {
	  return arg === null;
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isString(arg) {
	  return typeof arg === 'string';
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}

	function _extend(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	}
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	function compare(a, b) {
	  if (a === b) {
	    return 0;
	  }

	  var x = a.length;
	  var y = b.length;

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break;
	    }
	  }

	  if (x < y) {
	    return -1;
	  }
	  if (y < x) {
	    return 1;
	  }
	  return 0;
	}
	var hasOwn = Object.prototype.hasOwnProperty;

	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    if (hasOwn.call(obj, key)) keys.push(key);
	  }
	  return keys;
	};
	var pSlice = Array.prototype.slice;
	var _functionsHaveNames;
	function functionsHaveNames() {
	  if (typeof _functionsHaveNames !== 'undefined') {
	    return _functionsHaveNames;
	  }
	  return _functionsHaveNames = (function () {
	    return function foo() {}.name === 'foo';
	  }());
	}
	function pToString (obj) {
	  return Object.prototype.toString.call(obj);
	}
	function isView(arrbuf) {
	  if (isBuffer(arrbuf)) {
	    return false;
	  }
	  if (typeof global$1.ArrayBuffer !== 'function') {
	    return false;
	  }
	  if (typeof ArrayBuffer.isView === 'function') {
	    return ArrayBuffer.isView(arrbuf);
	  }
	  if (!arrbuf) {
	    return false;
	  }
	  if (arrbuf instanceof DataView) {
	    return true;
	  }
	  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
	    return true;
	  }
	  return false;
	}
	// 1. The assert module provides functions that throw
	// AssertionError's when particular conditions are not met. The
	// assert module must conform to the following interface.

	function assert(value, message) {
	  if (!value) fail(value, true, message, '==', ok);
	}

	// 2. The AssertionError is defined in assert.
	// new assert.AssertionError({ message: message,
	//                             actual: actual,
	//                             expected: expected })

	var regex = /\s*function\s+([^\(\s]*)\s*/;
	// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
	function getName(func) {
	  if (!isFunction(func)) {
	    return;
	  }
	  if (functionsHaveNames()) {
	    return func.name;
	  }
	  var str = func.toString();
	  var match = str.match(regex);
	  return match && match[1];
	}
	assert.AssertionError = AssertionError;
	function AssertionError(options) {
	  this.name = 'AssertionError';
	  this.actual = options.actual;
	  this.expected = options.expected;
	  this.operator = options.operator;
	  if (options.message) {
	    this.message = options.message;
	    this.generatedMessage = false;
	  } else {
	    this.message = getMessage(this);
	    this.generatedMessage = true;
	  }
	  var stackStartFunction = options.stackStartFunction || fail;
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, stackStartFunction);
	  } else {
	    // non v8 browsers so we can have a stacktrace
	    var err = new Error();
	    if (err.stack) {
	      var out = err.stack;

	      // try to strip useless frames
	      var fn_name = getName(stackStartFunction);
	      var idx = out.indexOf('\n' + fn_name);
	      if (idx >= 0) {
	        // once we have located the function frame
	        // we need to strip out everything before it (and its line)
	        var next_line = out.indexOf('\n', idx + 1);
	        out = out.substring(next_line + 1);
	      }

	      this.stack = out;
	    }
	  }
	}

	// assert.AssertionError instanceof Error
	inherits$1(AssertionError, Error);

	function truncate(s, n) {
	  if (typeof s === 'string') {
	    return s.length < n ? s : s.slice(0, n);
	  } else {
	    return s;
	  }
	}
	function inspect$1(something) {
	  if (functionsHaveNames() || !isFunction(something)) {
	    return inspect(something);
	  }
	  var rawname = getName(something);
	  var name = rawname ? ': ' + rawname : '';
	  return '[Function' +  name + ']';
	}
	function getMessage(self) {
	  return truncate(inspect$1(self.actual), 128) + ' ' +
	         self.operator + ' ' +
	         truncate(inspect$1(self.expected), 128);
	}

	// At present only the three keys mentioned above are used and
	// understood by the spec. Implementations or sub modules can pass
	// other keys to the AssertionError's constructor - they will be
	// ignored.

	// 3. All of the following functions must throw an AssertionError
	// when a corresponding condition is not met, with a message that
	// may be undefined if not provided.  All assertion methods provide
	// both the actual and expected values to the assertion error for
	// display purposes.

	function fail(actual, expected, message, operator, stackStartFunction) {
	  throw new AssertionError({
	    message: message,
	    actual: actual,
	    expected: expected,
	    operator: operator,
	    stackStartFunction: stackStartFunction
	  });
	}

	// EXTENSION! allows for well behaved errors defined elsewhere.
	assert.fail = fail;

	// 4. Pure assertion tests whether a value is truthy, as determined
	// by !!guard.
	// assert.ok(guard, message_opt);
	// This statement is equivalent to assert.equal(true, !!guard,
	// message_opt);. To test strictly for the value true, use
	// assert.strictEqual(true, guard, message_opt);.

	function ok(value, message) {
	  if (!value) fail(value, true, message, '==', ok);
	}
	assert.ok = ok;

	// 5. The equality assertion tests shallow, coercive equality with
	// ==.
	// assert.equal(actual, expected, message_opt);
	assert.equal = equal;
	function equal(actual, expected, message) {
	  if (actual != expected) fail(actual, expected, message, '==', equal);
	}

	// 6. The non-equality assertion tests for whether two objects are not equal
	// with != assert.notEqual(actual, expected, message_opt);
	assert.notEqual = notEqual;
	function notEqual(actual, expected, message) {
	  if (actual == expected) {
	    fail(actual, expected, message, '!=', notEqual);
	  }
	}

	// 7. The equivalence assertion tests a deep equality relation.
	// assert.deepEqual(actual, expected, message_opt);
	assert.deepEqual = deepEqual;
	function deepEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected, false)) {
	    fail(actual, expected, message, 'deepEqual', deepEqual);
	  }
	}
	assert.deepStrictEqual = deepStrictEqual;
	function deepStrictEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected, true)) {
	    fail(actual, expected, message, 'deepStrictEqual', deepStrictEqual);
	  }
	}

	function _deepEqual(actual, expected, strict, memos) {
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	  } else if (isBuffer(actual) && isBuffer(expected)) {
	    return compare(actual, expected) === 0;

	  // 7.2. If the expected value is a Date object, the actual value is
	  // equivalent if it is also a Date object that refers to the same time.
	  } else if (isDate(actual) && isDate(expected)) {
	    return actual.getTime() === expected.getTime();

	  // 7.3 If the expected value is a RegExp object, the actual value is
	  // equivalent if it is also a RegExp object with the same source and
	  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
	  } else if (isRegExp(actual) && isRegExp(expected)) {
	    return actual.source === expected.source &&
	           actual.global === expected.global &&
	           actual.multiline === expected.multiline &&
	           actual.lastIndex === expected.lastIndex &&
	           actual.ignoreCase === expected.ignoreCase;

	  // 7.4. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if ((actual === null || typeof actual !== 'object') &&
	             (expected === null || typeof expected !== 'object')) {
	    return strict ? actual === expected : actual == expected;

	  // If both values are instances of typed arrays, wrap their underlying
	  // ArrayBuffers in a Buffer each to increase performance
	  // This optimization requires the arrays to have the same type as checked by
	  // Object.prototype.toString (aka pToString). Never perform binary
	  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
	  // bit patterns are not identical.
	  } else if (isView(actual) && isView(expected) &&
	             pToString(actual) === pToString(expected) &&
	             !(actual instanceof Float32Array ||
	               actual instanceof Float64Array)) {
	    return compare(new Uint8Array(actual.buffer),
	                   new Uint8Array(expected.buffer)) === 0;

	  // 7.5 For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else if (isBuffer(actual) !== isBuffer(expected)) {
	    return false;
	  } else {
	    memos = memos || {actual: [], expected: []};

	    var actualIndex = memos.actual.indexOf(actual);
	    if (actualIndex !== -1) {
	      if (actualIndex === memos.expected.indexOf(expected)) {
	        return true;
	      }
	    }

	    memos.actual.push(actual);
	    memos.expected.push(expected);

	    return objEquiv(actual, expected, strict, memos);
	  }
	}

	function isArguments(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	}

	function objEquiv(a, b, strict, actualVisitedObjects) {
	  if (a === null || a === undefined || b === null || b === undefined)
	    return false;
	  // if one is a primitive, the other must be same
	  if (isPrimitive(a) || isPrimitive(b))
	    return a === b;
	  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
	    return false;
	  var aIsArgs = isArguments(a);
	  var bIsArgs = isArguments(b);
	  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
	    return false;
	  if (aIsArgs) {
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return _deepEqual(a, b, strict);
	  }
	  var ka = objectKeys(a);
	  var kb = objectKeys(b);
	  var key, i;
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length !== kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] !== kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
	      return false;
	  }
	  return true;
	}

	// 8. The non-equivalence assertion tests for any deep inequality.
	// assert.notDeepEqual(actual, expected, message_opt);
	assert.notDeepEqual = notDeepEqual;
	function notDeepEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected, false)) {
	    fail(actual, expected, message, 'notDeepEqual', notDeepEqual);
	  }
	}

	assert.notDeepStrictEqual = notDeepStrictEqual;
	function notDeepStrictEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected, true)) {
	    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
	  }
	}


	// 9. The strict equality assertion tests strict equality, as determined by ===.
	// assert.strictEqual(actual, expected, message_opt);
	assert.strictEqual = strictEqual;
	function strictEqual(actual, expected, message) {
	  if (actual !== expected) {
	    fail(actual, expected, message, '===', strictEqual);
	  }
	}

	// 10. The strict non-equality assertion tests for strict inequality, as
	// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);
	assert.notStrictEqual = notStrictEqual;
	function notStrictEqual(actual, expected, message) {
	  if (actual === expected) {
	    fail(actual, expected, message, '!==', notStrictEqual);
	  }
	}

	function expectedException(actual, expected) {
	  if (!actual || !expected) {
	    return false;
	  }

	  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
	    return expected.test(actual);
	  }

	  try {
	    if (actual instanceof expected) {
	      return true;
	    }
	  } catch (e) {
	    // Ignore.  The instanceof check doesn't work for arrow functions.
	  }

	  if (Error.isPrototypeOf(expected)) {
	    return false;
	  }

	  return expected.call({}, actual) === true;
	}

	function _tryBlock(block) {
	  var error;
	  try {
	    block();
	  } catch (e) {
	    error = e;
	  }
	  return error;
	}

	function _throws(shouldThrow, block, expected, message) {
	  var actual;

	  if (typeof block !== 'function') {
	    throw new TypeError('"block" argument must be a function');
	  }

	  if (typeof expected === 'string') {
	    message = expected;
	    expected = null;
	  }

	  actual = _tryBlock(block);

	  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
	            (message ? ' ' + message : '.');

	  if (shouldThrow && !actual) {
	    fail(actual, expected, 'Missing expected exception' + message);
	  }

	  var userProvidedMessage = typeof message === 'string';
	  var isUnwantedException = !shouldThrow && isError(actual);
	  var isUnexpectedException = !shouldThrow && actual && !expected;

	  if ((isUnwantedException &&
	      userProvidedMessage &&
	      expectedException(actual, expected)) ||
	      isUnexpectedException) {
	    fail(actual, expected, 'Got unwanted exception' + message);
	  }

	  if ((shouldThrow && actual && expected &&
	      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
	    throw actual;
	  }
	}

	// 11. Expected to throw an error:
	// assert.throws(block, Error_opt, message_opt);
	assert.throws = throws;
	function throws(block, /*optional*/error, /*optional*/message) {
	  _throws(true, block, error, message);
	}

	// EXTENSION! This is annoying to write outside this module.
	assert.doesNotThrow = doesNotThrow;
	function doesNotThrow(block, /*optional*/error, /*optional*/message) {
	  _throws(false, block, error, message);
	}

	assert.ifError = ifError;
	function ifError(err) {
	  if (err) throw err;
	}

	var assert$1 = /*#__PURE__*/Object.freeze({
		default: assert,
		AssertionError: AssertionError,
		fail: fail,
		ok: ok,
		assert: ok,
		equal: equal,
		notEqual: notEqual,
		deepEqual: deepEqual,
		deepStrictEqual: deepStrictEqual,
		notDeepEqual: notDeepEqual,
		notDeepStrictEqual: notDeepStrictEqual,
		strictEqual: strictEqual,
		notStrictEqual: notStrictEqual,
		throws: throws,
		doesNotThrow: doesNotThrow,
		ifError: ifError
	});

	var assert$2 = ( assert$1 && assert ) || assert$1;

	var hasWindow = typeof window !== 'undefined';

	function createScheduler () {
	  var scheduler;
	  if (hasWindow) {
	    if (!window._nanoScheduler) window._nanoScheduler = new NanoScheduler(true);
	    scheduler = window._nanoScheduler;
	  } else {
	    scheduler = new NanoScheduler();
	  }
	  return scheduler
	}

	function NanoScheduler (hasWindow) {
	  this.hasWindow = hasWindow;
	  this.hasIdle = this.hasWindow && window.requestIdleCallback;
	  this.method = this.hasIdle ? window.requestIdleCallback.bind(window) : this.setTimeout;
	  this.scheduled = false;
	  this.queue = [];
	}

	NanoScheduler.prototype.push = function (cb) {
	  assert$2.equal(typeof cb, 'function', 'nanoscheduler.push: cb should be type function');

	  this.queue.push(cb);
	  this.schedule();
	};

	NanoScheduler.prototype.schedule = function () {
	  if (this.scheduled) return

	  this.scheduled = true;
	  var self = this;
	  this.method(function (idleDeadline) {
	    var cb;
	    while (self.queue.length && idleDeadline.timeRemaining() > 0) {
	      cb = self.queue.shift();
	      cb(idleDeadline);
	    }
	    self.scheduled = false;
	    if (self.queue.length) self.schedule();
	  });
	};

	NanoScheduler.prototype.setTimeout = function (cb) {
	  setTimeout(cb, 0, {
	    timeRemaining: function () {
	      return 1
	    }
	  });
	};

	var nanoscheduler = createScheduler;

	var scheduler = nanoscheduler();


	var perf;
	nanotiming.disabled = true;
	try {
	  perf = window.performance;
	  nanotiming.disabled = window.localStorage.DISABLE_NANOTIMING === 'true' || !perf.mark;
	} catch (e) { }

	var browser = nanotiming;

	function nanotiming (name) {
	  assert$2.equal(typeof name, 'string', 'nanotiming: name should be type string');

	  if (nanotiming.disabled) return noop

	  var uuid = (perf.now() * 10000).toFixed() % Number.MAX_SAFE_INTEGER;
	  var startName = 'start-' + uuid + '-' + name;
	  perf.mark(startName);

	  function end (cb) {
	    var endName = 'end-' + uuid + '-' + name;
	    perf.mark(endName);

	    scheduler.push(function () {
	      var err = null;
	      try {
	        var measureName = name + ' [' + uuid + ']';
	        perf.measure(measureName, startName, endName);
	        perf.clearMarks(startName);
	        perf.clearMarks(endName);
	      } catch (e) { err = e; }
	      if (cb) cb(err, name);
	    });
	  }

	  end.uuid = uuid;
	  return end
	}

	function noop (cb) {
	  if (cb) {
	    scheduler.push(function () {
	      cb(new Error('nanotiming: performance API unavailable'));
	    });
	  }
	}

	var mutable = extend;

	var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

	function extend(target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];

	        for (var key in source) {
	            if (hasOwnProperty$1.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }

	    return target
	}

	var immutable = extend$1;

	var hasOwnProperty$2 = Object.prototype.hasOwnProperty;

	function extend$1() {
	    var target = {};

	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i];

	        for (var key in source) {
	            if (hasOwnProperty$2.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }

	    return target
	}

	var trie = Trie;

	// create a new trie
	// null -> obj
	function Trie () {
	  if (!(this instanceof Trie)) return new Trie()
	  this.trie = { nodes: {} };
	}

	// create a node on the trie at route
	// and return a node
	// str -> null
	Trie.prototype.create = function (route) {
	  assert$2.equal(typeof route, 'string', 'route should be a string');
	  // strip leading '/' and split routes
	  var routes = route.replace(/^\//, '').split('/');

	  function createNode (index, trie) {
	    var thisRoute = (routes.hasOwnProperty(index) && routes[index]);
	    if (thisRoute === false) return trie

	    var node = null;
	    if (/^:|^\*/.test(thisRoute)) {
	      // if node is a name match, set name and append to ':' node
	      if (!trie.nodes.hasOwnProperty('$$')) {
	        node = { nodes: {} };
	        trie.nodes['$$'] = node;
	      } else {
	        node = trie.nodes['$$'];
	      }

	      if (thisRoute[0] === '*') {
	        trie.wildcard = true;
	      }

	      trie.name = thisRoute.replace(/^:|^\*/, '');
	    } else if (!trie.nodes.hasOwnProperty(thisRoute)) {
	      node = { nodes: {} };
	      trie.nodes[thisRoute] = node;
	    } else {
	      node = trie.nodes[thisRoute];
	    }

	    // we must recurse deeper
	    return createNode(index + 1, node)
	  }

	  return createNode(0, this.trie)
	};

	// match a route on the trie
	// and return the node
	// str -> obj
	Trie.prototype.match = function (route) {
	  assert$2.equal(typeof route, 'string', 'route should be a string');

	  var routes = route.replace(/^\//, '').split('/');
	  var params = {};

	  function search (index, trie) {
	    // either there's no match, or we're done searching
	    if (trie === undefined) return undefined
	    var thisRoute = routes[index];
	    if (thisRoute === undefined) return trie

	    if (trie.nodes.hasOwnProperty(thisRoute)) {
	      // match regular routes first
	      return search(index + 1, trie.nodes[thisRoute])
	    } else if (trie.name) {
	      // match named routes
	      try {
	        params[trie.name] = decodeURIComponent(thisRoute);
	      } catch (e) {
	        return search(index, undefined)
	      }
	      return search(index + 1, trie.nodes['$$'])
	    } else if (trie.wildcard) {
	      // match wildcards
	      try {
	        params['wildcard'] = decodeURIComponent(routes.slice(index).join('/'));
	      } catch (e) {
	        return search(index, undefined)
	      }
	      // return early, or else search may keep recursing through the wildcard
	      return trie.nodes['$$']
	    } else {
	      // no matches found
	      return search(index + 1)
	    }
	  }

	  var node = search(0, this.trie);

	  if (!node) return undefined
	  node = immutable(node);
	  node.params = params;
	  return node
	};

	// mount a trie onto a node at route
	// (str, obj) -> null
	Trie.prototype.mount = function (route, trie) {
	  assert$2.equal(typeof route, 'string', 'route should be a string');
	  assert$2.equal(typeof trie, 'object', 'trie should be a object');

	  var split = route.replace(/^\//, '').split('/');
	  var node = null;
	  var key = null;

	  if (split.length === 1) {
	    key = split[0];
	    node = this.create(key);
	  } else {
	    var head = split.join('/');
	    key = split[0];
	    node = this.create(head);
	  }

	  mutable(node.nodes, trie.nodes);
	  if (trie.name) node.name = trie.name;

	  // delegate properties from '/' to the new node
	  // '/' cannot be reached once mounted
	  if (node.nodes['']) {
	    Object.keys(node.nodes['']).forEach(function (key) {
	      if (key === 'nodes') return
	      node[key] = node.nodes[''][key];
	    });
	    mutable(node.nodes, node.nodes[''].nodes);
	    delete node.nodes[''].nodes;
	  }
	};

	var wayfarer = Wayfarer;

	// create a router
	// str -> obj
	function Wayfarer (dft) {
	  if (!(this instanceof Wayfarer)) return new Wayfarer(dft)

	  var _default = (dft || '').replace(/^\//, '');
	  var _trie = trie();

	  emit._trie = _trie;
	  emit.on = on;
	  emit.emit = emit;
	  emit.match = match;
	  emit._wayfarer = true;

	  return emit

	  // define a route
	  // (str, fn) -> obj
	  function on (route, fn) {
	    assert$2.equal(typeof route, 'string');
	    assert$2.equal(typeof fn, 'function');

	    var cb = fn._wayfarer && fn._trie ? fn : proxy;
	    route = route || '/';
	    cb.route = route;

	    if (cb._wayfarer && cb._trie) {
	      _trie.mount(route, cb._trie.trie);
	    } else {
	      var node = _trie.create(route);
	      node.cb = cb;
	    }

	    return emit

	    function proxy () {
	      return fn.apply(this, Array.prototype.slice.call(arguments))
	    }
	  }

	  // match and call a route
	  // (str, obj?) -> null
	  function emit (route) {
	    var matched = match(route);

	    var args = new Array(arguments.length);
	    args[0] = matched.params;
	    for (var i = 1; i < args.length; i++) {
	      args[i] = arguments[i];
	    }

	    return matched.cb.apply(matched.cb, args)
	  }

	  function match (route) {
	    assert$2.notEqual(route, undefined, "'route' must be defined");

	    var matched = _trie.match(route);
	    if (matched && matched.cb) return new Route(matched)

	    var dft = _trie.match(_default);
	    if (dft && dft.cb) return new Route(dft)

	    throw new Error("route '" + route + "' did not match")
	  }

	  function Route (matched) {
	    this.cb = matched.cb;
	    this.route = matched.cb.route;
	    this.params = matched.params;
	  }
	}

	// electron support
	var isLocalFile = (/file:\/\//.test(
	  typeof window === 'object' &&
	  window.location &&
	  window.location.origin
	));

	/* eslint-disable no-useless-escape */
	var electron = '^(file:\/\/|\/)(.*\.html?\/?)?';
	var protocol = '^(http(s)?(:\/\/))?(www\.)?';
	var domain = '[a-zA-Z0-9-_\.]+(:[0-9]{1,5})?(\/{1})?';
	var qs = '[\?].*$';
	/* eslint-enable no-useless-escape */

	var stripElectron = new RegExp(electron);
	var prefix = new RegExp(protocol + domain);
	var normalize = new RegExp('#');
	var suffix = new RegExp(qs);

	var nanorouter = Nanorouter;

	function Nanorouter (opts) {
	  if (!(this instanceof Nanorouter)) return new Nanorouter(opts)
	  opts = opts || {};
	  this.router = wayfarer(opts.default || '/404');
	}

	Nanorouter.prototype.on = function (routename, listener) {
	  assert$2.equal(typeof routename, 'string');
	  routename = routename.replace(/^[#/]/, '');
	  this.router.on(routename, listener);
	};

	Nanorouter.prototype.emit = function (routename) {
	  assert$2.equal(typeof routename, 'string');
	  routename = pathname(routename, isLocalFile);
	  return this.router.emit(routename)
	};

	Nanorouter.prototype.match = function (routename) {
	  assert$2.equal(typeof routename, 'string');
	  routename = pathname(routename, isLocalFile);
	  return this.router.match(routename)
	};

	// replace everything in a route but the pathname and hash
	function pathname (routename, isElectron) {
	  if (isElectron) routename = routename.replace(stripElectron, '');
	  else routename = routename.replace(prefix, '');
	  return decodeURI(routename.replace(suffix, '').replace(normalize, '/'))
	}

	assert$3.notEqual = notEqual$1;
	assert$3.notOk = notOk;
	assert$3.equal = equal$1;
	assert$3.ok = assert$3;

	var nanoassert = assert$3;

	function equal$1 (a, b, m) {
	  assert$3(a == b, m); // eslint-disable-line eqeqeq
	}

	function notEqual$1 (a, b, m) {
	  assert$3(a != b, m); // eslint-disable-line eqeqeq
	}

	function notOk (t, m) {
	  assert$3(!t, m);
	}

	function assert$3 (t, m) {
	  if (!t) throw new Error(m || 'AssertionError')
	}

	var events = [
	  // attribute events (can be set with attributes)
	  'onclick',
	  'ondblclick',
	  'onmousedown',
	  'onmouseup',
	  'onmouseover',
	  'onmousemove',
	  'onmouseout',
	  'onmouseenter',
	  'onmouseleave',
	  'ontouchcancel',
	  'ontouchend',
	  'ontouchmove',
	  'ontouchstart',
	  'ondragstart',
	  'ondrag',
	  'ondragenter',
	  'ondragleave',
	  'ondragover',
	  'ondrop',
	  'ondragend',
	  'onkeydown',
	  'onkeypress',
	  'onkeyup',
	  'onunload',
	  'onabort',
	  'onerror',
	  'onresize',
	  'onscroll',
	  'onselect',
	  'onchange',
	  'onsubmit',
	  'onreset',
	  'onfocus',
	  'onblur',
	  'oninput',
	  // other common events
	  'oncontextmenu',
	  'onfocusin',
	  'onfocusout'
	];

	var eventsLength = events.length;

	var ELEMENT_NODE = 1;
	var TEXT_NODE = 3;
	var COMMENT_NODE = 8;

	var morph_1 = morph;

	// diff elements and apply the resulting patch to the old node
	// (obj, obj) -> null
	function morph (newNode, oldNode) {
	  var nodeType = newNode.nodeType;
	  var nodeName = newNode.nodeName;

	  if (nodeType === ELEMENT_NODE) {
	    copyAttrs(newNode, oldNode);
	  }

	  if (nodeType === TEXT_NODE || nodeType === COMMENT_NODE) {
	    if (oldNode.nodeValue !== newNode.nodeValue) {
	      oldNode.nodeValue = newNode.nodeValue;
	    }
	  }

	  // Some DOM nodes are weird
	  // https://github.com/patrick-steele-idem/morphdom/blob/master/src/specialElHandlers.js
	  if (nodeName === 'INPUT') updateInput(newNode, oldNode);
	  else if (nodeName === 'OPTION') updateOption(newNode, oldNode);
	  else if (nodeName === 'TEXTAREA') updateTextarea(newNode, oldNode);

	  copyEvents(newNode, oldNode);
	}

	function copyAttrs (newNode, oldNode) {
	  var oldAttrs = oldNode.attributes;
	  var newAttrs = newNode.attributes;
	  var attrNamespaceURI = null;
	  var attrValue = null;
	  var fromValue = null;
	  var attrName = null;
	  var attr = null;

	  for (var i = newAttrs.length - 1; i >= 0; --i) {
	    attr = newAttrs[i];
	    attrName = attr.name;
	    attrNamespaceURI = attr.namespaceURI;
	    attrValue = attr.value;
	    if (attrNamespaceURI) {
	      attrName = attr.localName || attrName;
	      fromValue = oldNode.getAttributeNS(attrNamespaceURI, attrName);
	      if (fromValue !== attrValue) {
	        oldNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
	      }
	    } else {
	      if (!oldNode.hasAttribute(attrName)) {
	        oldNode.setAttribute(attrName, attrValue);
	      } else {
	        fromValue = oldNode.getAttribute(attrName);
	        if (fromValue !== attrValue) {
	          // apparently values are always cast to strings, ah well
	          if (attrValue === 'null' || attrValue === 'undefined') {
	            oldNode.removeAttribute(attrName);
	          } else {
	            oldNode.setAttribute(attrName, attrValue);
	          }
	        }
	      }
	    }
	  }

	  // Remove any extra attributes found on the original DOM element that
	  // weren't found on the target element.
	  for (var j = oldAttrs.length - 1; j >= 0; --j) {
	    attr = oldAttrs[j];
	    if (attr.specified !== false) {
	      attrName = attr.name;
	      attrNamespaceURI = attr.namespaceURI;

	      if (attrNamespaceURI) {
	        attrName = attr.localName || attrName;
	        if (!newNode.hasAttributeNS(attrNamespaceURI, attrName)) {
	          oldNode.removeAttributeNS(attrNamespaceURI, attrName);
	        }
	      } else {
	        if (!newNode.hasAttributeNS(null, attrName)) {
	          oldNode.removeAttribute(attrName);
	        }
	      }
	    }
	  }
	}

	function copyEvents (newNode, oldNode) {
	  for (var i = 0; i < eventsLength; i++) {
	    var ev = events[i];
	    if (newNode[ev]) {           // if new element has a whitelisted attribute
	      oldNode[ev] = newNode[ev];  // update existing element
	    } else if (oldNode[ev]) {    // if existing element has it and new one doesnt
	      oldNode[ev] = undefined;    // remove it from existing element
	    }
	  }
	}

	function updateOption (newNode, oldNode) {
	  updateAttribute(newNode, oldNode, 'selected');
	}

	// The "value" attribute is special for the <input> element since it sets the
	// initial value. Changing the "value" attribute without changing the "value"
	// property will have no effect since it is only used to the set the initial
	// value. Similar for the "checked" attribute, and "disabled".
	function updateInput (newNode, oldNode) {
	  var newValue = newNode.value;
	  var oldValue = oldNode.value;

	  updateAttribute(newNode, oldNode, 'checked');
	  updateAttribute(newNode, oldNode, 'disabled');

	  if (newValue !== oldValue) {
	    oldNode.setAttribute('value', newValue);
	    oldNode.value = newValue;
	  }

	  if (newValue === 'null') {
	    oldNode.value = '';
	    oldNode.removeAttribute('value');
	  }

	  if (!newNode.hasAttributeNS(null, 'value')) {
	    oldNode.removeAttribute('value');
	  } else if (oldNode.type === 'range') {
	    // this is so elements like slider move their UI thingy
	    oldNode.value = newValue;
	  }
	}

	function updateTextarea (newNode, oldNode) {
	  var newValue = newNode.value;
	  if (newValue !== oldNode.value) {
	    oldNode.value = newValue;
	  }

	  if (oldNode.firstChild && oldNode.firstChild.nodeValue !== newValue) {
	    // Needed for IE. Apparently IE sets the placeholder as the
	    // node value and vise versa. This ignores an empty update.
	    if (newValue === '' && oldNode.firstChild.nodeValue === oldNode.placeholder) {
	      return
	    }

	    oldNode.firstChild.nodeValue = newValue;
	  }
	}

	function updateAttribute (newNode, oldNode, name) {
	  if (newNode[name] !== oldNode[name]) {
	    oldNode[name] = newNode[name];
	    if (newNode[name]) {
	      oldNode.setAttribute(name, '');
	    } else {
	      oldNode.removeAttribute(name);
	    }
	  }
	}

	var TEXT_NODE$1 = 3;
	// var DEBUG = false

	var nanomorph_1 = nanomorph;

	// Morph one tree into another tree
	//
	// no parent
	//   -> same: diff and walk children
	//   -> not same: replace and return
	// old node doesn't exist
	//   -> insert new node
	// new node doesn't exist
	//   -> delete old node
	// nodes are not the same
	//   -> diff nodes and apply patch to old node
	// nodes are the same
	//   -> walk all child nodes and append to old node
	function nanomorph (oldTree, newTree, options) {
	  // if (DEBUG) {
	  //   console.log(
	  //   'nanomorph\nold\n  %s\nnew\n  %s',
	  //   oldTree && oldTree.outerHTML,
	  //   newTree && newTree.outerHTML
	  // )
	  // }
	  nanoassert.equal(typeof oldTree, 'object', 'nanomorph: oldTree should be an object');
	  nanoassert.equal(typeof newTree, 'object', 'nanomorph: newTree should be an object');
	  nanoassert.notEqual(
	    newTree.nodeType,
	    11,
	    'nanomorph: newTree should have one root node (which is not a DocumentFragment)'
	  );

	  if (options && options.childrenOnly) {
	    updateChildren(newTree, oldTree);
	    return oldTree
	  }

	  return walk(newTree, oldTree)
	}

	// Walk and morph a dom tree
	function walk (newNode, oldNode) {
	  // if (DEBUG) {
	  //   console.log(
	  //   'walk\nold\n  %s\nnew\n  %s',
	  //   oldNode && oldNode.outerHTML,
	  //   newNode && newNode.outerHTML
	  // )
	  // }
	  if (!oldNode) {
	    return newNode
	  } else if (!newNode) {
	    return null
	  } else if (newNode.isSameNode && newNode.isSameNode(oldNode)) {
	    return oldNode
	  } else if (newNode.tagName !== oldNode.tagName) {
	    return newNode
	  } else {
	    morph_1(newNode, oldNode);
	    updateChildren(newNode, oldNode);
	    return oldNode
	  }
	}

	// Update the children of elements
	// (obj, obj) -> null
	function updateChildren (newNode, oldNode) {
	  // if (DEBUG) {
	  //   console.log(
	  //   'updateChildren\nold\n  %s\nnew\n  %s',
	  //   oldNode && oldNode.outerHTML,
	  //   newNode && newNode.outerHTML
	  // )
	  // }
	  var oldChild, newChild, morphed, oldMatch;

	  // The offset is only ever increased, and used for [i - offset] in the loop
	  var offset = 0;

	  for (var i = 0; ; i++) {
	    oldChild = oldNode.childNodes[i];
	    newChild = newNode.childNodes[i - offset];
	    // if (DEBUG) {
	    //   console.log(
	    //   '===\n- old\n  %s\n- new\n  %s',
	    //   oldChild && oldChild.outerHTML,
	    //   newChild && newChild.outerHTML
	    // )
	    // }
	    // Both nodes are empty, do nothing
	    if (!oldChild && !newChild) {
	      break

	    // There is no new child, remove old
	    } else if (!newChild) {
	      oldNode.removeChild(oldChild);
	      i--;

	    // There is no old child, add new
	    } else if (!oldChild) {
	      oldNode.appendChild(newChild);
	      offset++;

	    // Both nodes are the same, morph
	    } else if (same(newChild, oldChild)) {
	      morphed = walk(newChild, oldChild);
	      if (morphed !== oldChild) {
	        oldNode.replaceChild(morphed, oldChild);
	        offset++;
	      }

	    // Both nodes do not share an ID or a placeholder, try reorder
	    } else {
	      oldMatch = null;

	      // Try and find a similar node somewhere in the tree
	      for (var j = i; j < oldNode.childNodes.length; j++) {
	        if (same(oldNode.childNodes[j], newChild)) {
	          oldMatch = oldNode.childNodes[j];
	          break
	        }
	      }

	      // If there was a node with the same ID or placeholder in the old list
	      if (oldMatch) {
	        morphed = walk(newChild, oldMatch);
	        if (morphed !== oldMatch) offset++;
	        oldNode.insertBefore(morphed, oldChild);

	      // It's safe to morph two nodes in-place if neither has an ID
	      } else if (!newChild.id && !oldChild.id) {
	        morphed = walk(newChild, oldChild);
	        if (morphed !== oldChild) {
	          oldNode.replaceChild(morphed, oldChild);
	          offset++;
	        }

	      // Insert the node at the index if we couldn't morph or find a matching node
	      } else {
	        oldNode.insertBefore(newChild, oldChild);
	        offset++;
	      }
	    }
	  }
	}

	function same (a, b) {
	  if (a.id) return a.id === b.id
	  if (a.isSameNode) return a.isSameNode(b)
	  if (a.tagName !== b.tagName) return false
	  if (a.type === TEXT_NODE$1) return a.nodeValue === b.nodeValue
	  return false
	}

	var reg = /([^?=&]+)(=([^&]*))?/g;


	var browser$1 = qs$1;

	function qs$1 (url) {
	  assert$2.equal(typeof url, 'string', 'nanoquery: url should be type string');

	  var obj = {};
	  url.replace(/^.*\?/, '').replace(reg, function (a0, a1, a2, a3) {
	    obj[decodeURIComponent(a1)] = decodeURIComponent(a3);
	  });

	  return obj
	}

	var safeExternalLink = /(noopener|noreferrer) (noopener|noreferrer)/;
	var protocolLink = /^[\w-_]+:/;

	var nanohref = href;

	function href (cb, root) {
	  assert$2.notEqual(typeof window, 'undefined', 'nanohref: expected window to exist');

	  root = root || window.document;

	  assert$2.equal(typeof cb, 'function', 'nanohref: cb should be type function');
	  assert$2.equal(typeof root, 'object', 'nanohref: root should be type object');

	  window.addEventListener('click', function (e) {
	    if ((e.button && e.button !== 0) ||
	      e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ||
	      e.defaultPrevented) return

	    var anchor = (function traverse (node) {
	      if (!node || node === root) return
	      if (node.localName !== 'a' || node.href === undefined) {
	        return traverse(node.parentNode)
	      }
	      return node
	    })(e.target);

	    if (!anchor) return

	    if (window.location.protocol !== anchor.protocol ||
	        window.location.hostname !== anchor.hostname ||
	        window.location.port !== anchor.port ||
	      anchor.hasAttribute('data-nanohref-ignore') ||
	      anchor.hasAttribute('download') ||
	      (anchor.getAttribute('target') === '_blank' &&
	        safeExternalLink.test(anchor.getAttribute('rel'))) ||
	      protocolLink.test(anchor.getAttribute('href'))) return

	    e.preventDefault();
	    cb(anchor);
	  });
	}

	var nanoraf_1 = nanoraf;

	// Only call RAF when needed
	// (fn, fn?) -> fn
	function nanoraf (render, raf) {
	  assert$2.equal(typeof render, 'function', 'nanoraf: render should be a function');
	  assert$2.ok(typeof raf === 'function' || typeof raf === 'undefined', 'nanoraf: raf should be a function or undefined');

	  if (!raf) raf = window.requestAnimationFrame;
	  var redrawScheduled = false;
	  var args = null;

	  return function frame () {
	    if (args === null && !redrawScheduled) {
	      redrawScheduled = true;

	      raf(function redraw () {
	        redrawScheduled = false;

	        var length = args.length;
	        var _args = new Array(length);
	        for (var i = 0; i < length; i++) _args[i] = args[i];

	        render.apply(render, _args);
	        args = null;
	      });
	    }

	    args = arguments;
	  }
	}

	/**
	 * Remove a range of items from an array
	 *
	 * @function removeItems
	 * @param {Array<*>} arr The target array
	 * @param {number} startIdx The index to begin removing from (inclusive)
	 * @param {number} removeCount How many items to remove
	 */
	var removeArrayItems = function removeItems (arr, startIdx, removeCount) {
	  var i, length = arr.length;

	  if (startIdx >= length || removeCount === 0) {
	    return
	  }

	  removeCount = (startIdx + removeCount > length ? length - startIdx : removeCount);

	  var len = length - removeCount;

	  for (i = startIdx; i < len; ++i) {
	    arr[i] = arr[i + removeCount];
	  }

	  arr.length = len;
	};

	var nanobus = Nanobus;

	function Nanobus (name) {
	  if (!(this instanceof Nanobus)) return new Nanobus(name)

	  this._name = name || 'nanobus';
	  this._starListeners = [];
	  this._listeners = {};
	}

	Nanobus.prototype.emit = function (eventName) {
	  assert$2.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.emit: eventName should be type string or symbol');

	  var data = [];
	  for (var i = 1, len = arguments.length; i < len; i++) {
	    data.push(arguments[i]);
	  }

	  var emitTiming = browser(this._name + "('" + eventName.toString() + "')");
	  var listeners = this._listeners[eventName];
	  if (listeners && listeners.length > 0) {
	    this._emit(this._listeners[eventName], data);
	  }

	  if (this._starListeners.length > 0) {
	    this._emit(this._starListeners, eventName, data, emitTiming.uuid);
	  }
	  emitTiming();

	  return this
	};

	Nanobus.prototype.on = Nanobus.prototype.addListener = function (eventName, listener) {
	  assert$2.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.on: eventName should be type string or symbol');
	  assert$2.equal(typeof listener, 'function', 'nanobus.on: listener should be type function');

	  if (eventName === '*') {
	    this._starListeners.push(listener);
	  } else {
	    if (!this._listeners[eventName]) this._listeners[eventName] = [];
	    this._listeners[eventName].push(listener);
	  }
	  return this
	};

	Nanobus.prototype.prependListener = function (eventName, listener) {
	  assert$2.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.prependListener: eventName should be type string or symbol');
	  assert$2.equal(typeof listener, 'function', 'nanobus.prependListener: listener should be type function');

	  if (eventName === '*') {
	    this._starListeners.unshift(listener);
	  } else {
	    if (!this._listeners[eventName]) this._listeners[eventName] = [];
	    this._listeners[eventName].unshift(listener);
	  }
	  return this
	};

	Nanobus.prototype.once = function (eventName, listener) {
	  assert$2.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.once: eventName should be type string or symbol');
	  assert$2.equal(typeof listener, 'function', 'nanobus.once: listener should be type function');

	  var self = this;
	  this.on(eventName, once);
	  function once () {
	    listener.apply(self, arguments);
	    self.removeListener(eventName, once);
	  }
	  return this
	};

	Nanobus.prototype.prependOnceListener = function (eventName, listener) {
	  assert$2.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.prependOnceListener: eventName should be type string or symbol');
	  assert$2.equal(typeof listener, 'function', 'nanobus.prependOnceListener: listener should be type function');

	  var self = this;
	  this.prependListener(eventName, once);
	  function once () {
	    listener.apply(self, arguments);
	    self.removeListener(eventName, once);
	  }
	  return this
	};

	Nanobus.prototype.removeListener = function (eventName, listener) {
	  assert$2.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.removeListener: eventName should be type string or symbol');
	  assert$2.equal(typeof listener, 'function', 'nanobus.removeListener: listener should be type function');

	  if (eventName === '*') {
	    this._starListeners = this._starListeners.slice();
	    return remove(this._starListeners, listener)
	  } else {
	    if (typeof this._listeners[eventName] !== 'undefined') {
	      this._listeners[eventName] = this._listeners[eventName].slice();
	    }

	    return remove(this._listeners[eventName], listener)
	  }

	  function remove (arr, listener) {
	    if (!arr) return
	    var index = arr.indexOf(listener);
	    if (index !== -1) {
	      removeArrayItems(arr, index, 1);
	      return true
	    }
	  }
	};

	Nanobus.prototype.removeAllListeners = function (eventName) {
	  if (eventName) {
	    if (eventName === '*') {
	      this._starListeners = [];
	    } else {
	      this._listeners[eventName] = [];
	    }
	  } else {
	    this._starListeners = [];
	    this._listeners = {};
	  }
	  return this
	};

	Nanobus.prototype.listeners = function (eventName) {
	  var listeners = eventName !== '*'
	    ? this._listeners[eventName]
	    : this._starListeners;

	  var ret = [];
	  if (listeners) {
	    var ilength = listeners.length;
	    for (var i = 0; i < ilength; i++) ret.push(listeners[i]);
	  }
	  return ret
	};

	Nanobus.prototype._emit = function (arr, eventName, data, uuid) {
	  if (typeof arr === 'undefined') return
	  if (arr.length === 0) return
	  if (data === undefined) {
	    data = eventName;
	    eventName = null;
	  }

	  if (eventName) {
	    if (uuid !== undefined) {
	      data = [eventName].concat(data, uuid);
	    } else {
	      data = [eventName].concat(data);
	    }
	  }

	  var length = arr.length;
	  for (var i = 0; i < length; i++) {
	    var listener = arr[i];
	    listener.apply(listener, data);
	  }
	};

	var nanolru = LRU;

	function LRU (opts) {
	  if (!(this instanceof LRU)) return new LRU(opts)
	  if (typeof opts === 'number') opts = {max: opts};
	  if (!opts) opts = {};
	  this.cache = {};
	  this.head = this.tail = null;
	  this.length = 0;
	  this.max = opts.max || 1000;
	  this.maxAge = opts.maxAge || 0;
	}

	Object.defineProperty(LRU.prototype, 'keys', {
	  get: function () { return Object.keys(this.cache) }
	});

	LRU.prototype.clear = function () {
	  this.cache = {};
	  this.head = this.tail = null;
	  this.length = 0;
	};

	LRU.prototype.remove = function (key) {
	  if (typeof key !== 'string') key = '' + key;
	  if (!this.cache.hasOwnProperty(key)) return

	  var element = this.cache[key];
	  delete this.cache[key];
	  this._unlink(key, element.prev, element.next);
	  return element.value
	};

	LRU.prototype._unlink = function (key, prev, next) {
	  this.length--;

	  if (this.length === 0) {
	    this.head = this.tail = null;
	  } else {
	    if (this.head === key) {
	      this.head = prev;
	      this.cache[this.head].next = null;
	    } else if (this.tail === key) {
	      this.tail = next;
	      this.cache[this.tail].prev = null;
	    } else {
	      this.cache[prev].next = next;
	      this.cache[next].prev = prev;
	    }
	  }
	};

	LRU.prototype.peek = function (key) {
	  if (!this.cache.hasOwnProperty(key)) return

	  var element = this.cache[key];

	  if (!this._checkAge(key, element)) return
	  return element.value
	};

	LRU.prototype.set = function (key, value) {
	  if (typeof key !== 'string') key = '' + key;

	  var element;

	  if (this.cache.hasOwnProperty(key)) {
	    element = this.cache[key];
	    element.value = value;
	    if (this.maxAge) element.modified = Date.now();

	    // If it's already the head, there's nothing more to do:
	    if (key === this.head) return value
	    this._unlink(key, element.prev, element.next);
	  } else {
	    element = {value: value, modified: 0, next: null, prev: null};
	    if (this.maxAge) element.modified = Date.now();
	    this.cache[key] = element;

	    // Eviction is only possible if the key didn't already exist:
	    if (this.length === this.max) this.evict();
	  }

	  this.length++;
	  element.next = null;
	  element.prev = this.head;

	  if (this.head) this.cache[this.head].next = key;
	  this.head = key;

	  if (!this.tail) this.tail = key;
	  return value
	};

	LRU.prototype._checkAge = function (key, element) {
	  if (this.maxAge && (Date.now() - element.modified) > this.maxAge) {
	    this.remove(key);
	    return false
	  }
	  return true
	};

	LRU.prototype.get = function (key) {
	  if (typeof key !== 'string') key = '' + key;
	  if (!this.cache.hasOwnProperty(key)) return

	  var element = this.cache[key];

	  if (!this._checkAge(key, element)) return

	  if (this.head !== key) {
	    if (key === this.tail) {
	      this.tail = element.next;
	      this.cache[this.tail].prev = null;
	    } else {
	      // Set prev.next -> element.next:
	      this.cache[element.prev].next = element.next;
	    }

	    // Set element.next.prev -> element.prev:
	    this.cache[element.next].prev = element.prev;

	    // Element is the new head
	    this.cache[this.head].next = key;
	    element.prev = this.head;
	    element.next = null;
	    this.head = key;
	  }

	  return element.value
	};

	LRU.prototype.evict = function () {
	  if (!this.tail) return
	  this.remove(this.tail);
	};

	var cache = ChooComponentCache;

	function ChooComponentCache (state, emit, lru) {
	  assert$2.ok(this instanceof ChooComponentCache, 'ChooComponentCache should be created with `new`');

	  assert$2.equal(typeof state, 'object', 'ChooComponentCache: state should be type object');
	  assert$2.equal(typeof emit, 'function', 'ChooComponentCache: emit should be type function');

	  if (typeof lru === 'number') this.cache = new nanolru(lru);
	  else this.cache = lru || new nanolru(100);
	  this.state = state;
	  this.emit = emit;
	}

	// Get & create component instances.
	ChooComponentCache.prototype.render = function (Component, id) {
	  assert$2.equal(typeof Component, 'function', 'ChooComponentCache.render: Component should be type function');
	  assert$2.ok(typeof id === 'string' || typeof id === 'number', 'ChooComponentCache.render: id should be type string or type number');

	  var el = this.cache.get(id);
	  if (!el) {
	    var args = [];
	    for (var i = 2, len = arguments.length; i < len; i++) {
	      args.push(arguments[i]);
	    }
	    args.unshift(Component, id, this.state, this.emit);
	    el = newCall.apply(newCall, args);
	    this.cache.set(id, el);
	  }

	  return el
	};

	// Because you can't call `new` and `.apply()` at the same time. This is a mad
	// hack, but hey it works so we gonna go for it. Whoop.
	function newCall (Cls) {
	  return new (Cls.bind.apply(Cls, arguments)) // eslint-disable-line
	}

	var choo = Choo;

	var HISTORY_OBJECT = {};

	function Choo (opts) {
	  if (!(this instanceof Choo)) return new Choo(opts)
	  opts = opts || {};

	  assert$2.equal(typeof opts, 'object', 'choo: opts should be type object');

	  var self = this;

	  // define events used by choo
	  this._events = {
	    DOMCONTENTLOADED: 'DOMContentLoaded',
	    DOMTITLECHANGE: 'DOMTitleChange',
	    REPLACESTATE: 'replaceState',
	    PUSHSTATE: 'pushState',
	    NAVIGATE: 'navigate',
	    POPSTATE: 'popState',
	    RENDER: 'render'
	  };

	  // properties for internal use only
	  this._historyEnabled = opts.history === undefined ? true : opts.history;
	  this._hrefEnabled = opts.href === undefined ? true : opts.href;
	  this._hashEnabled = opts.hash === undefined ? true : opts.hash;
	  this._hasWindow = typeof window !== 'undefined';
	  this._cache = opts.cache;
	  this._loaded = false;
	  this._stores = [];
	  this._tree = null;

	  // state
	  var _state = {
	    events: this._events,
	    components: {}
	  };
	  if (this._hasWindow) {
	    this.state = window.initialState
	      ? immutable(window.initialState, _state)
	      : _state;
	    delete window.initialState;
	  } else {
	    this.state = _state;
	  }

	  // properties that are part of the API
	  this.router = nanorouter({ curry: true });
	  this.emitter = nanobus('choo.emit');
	  this.emit = this.emitter.emit.bind(this.emitter);

	  // listen for title changes; available even when calling .toString()
	  if (this._hasWindow) this.state.title = document.title;
	  this.emitter.prependListener(this._events.DOMTITLECHANGE, function (title) {
	    assert$2.equal(typeof title, 'string', 'events.DOMTitleChange: title should be type string');
	    self.state.title = title;
	    if (self._hasWindow) document.title = title;
	  });
	}

	Choo.prototype.route = function (route, handler) {
	  assert$2.equal(typeof route, 'string', 'choo.route: route should be type string');
	  assert$2.equal(typeof handler, 'function', 'choo.handler: route should be type function');
	  this.router.on(route, handler);
	};

	Choo.prototype.use = function (cb) {
	  assert$2.equal(typeof cb, 'function', 'choo.use: cb should be type function');
	  var self = this;
	  this._stores.push(function (state) {
	    var msg = 'choo.use';
	    msg = cb.storeName ? msg + '(' + cb.storeName + ')' : msg;
	    var endTiming = browser(msg);
	    cb(state, self.emitter, self);
	    endTiming();
	  });
	};

	Choo.prototype.start = function () {
	  assert$2.equal(typeof window, 'object', 'choo.start: window was not found. .start() must be called in a browser, use .toString() if running in Node');

	  var self = this;
	  if (this._historyEnabled) {
	    this.emitter.prependListener(this._events.NAVIGATE, function () {
	      self._matchRoute();
	      if (self._loaded) {
	        self.emitter.emit(self._events.RENDER);
	        setTimeout(scrollToAnchor_1.bind(null, window.location.hash), 0);
	      }
	    });

	    this.emitter.prependListener(this._events.POPSTATE, function () {
	      self.emitter.emit(self._events.NAVIGATE);
	    });

	    this.emitter.prependListener(this._events.PUSHSTATE, function (href) {
	      assert$2.equal(typeof href, 'string', 'events.pushState: href should be type string');
	      window.history.pushState(HISTORY_OBJECT, null, href);
	      self.emitter.emit(self._events.NAVIGATE);
	    });

	    this.emitter.prependListener(this._events.REPLACESTATE, function (href) {
	      assert$2.equal(typeof href, 'string', 'events.replaceState: href should be type string');
	      window.history.replaceState(HISTORY_OBJECT, null, href);
	      self.emitter.emit(self._events.NAVIGATE);
	    });

	    window.onpopstate = function () {
	      self.emitter.emit(self._events.POPSTATE);
	    };

	    if (self._hrefEnabled) {
	      nanohref(function (location) {
	        var href = location.href;
	        var hash = location.hash;
	        if (href === window.location.href) {
	          if (!self._hashEnabled && hash) scrollToAnchor_1(hash);
	          return
	        }
	        self.emitter.emit(self._events.PUSHSTATE, href);
	      });
	    }
	  }

	  this._setCache(this.state);
	  this._stores.forEach(function (initStore) {
	    initStore(self.state);
	  });

	  this._matchRoute();
	  this._tree = this._prerender(this.state);
	  assert$2.ok(this._tree, 'choo.start: no valid DOM node returned for location ' + this.state.href);

	  this.emitter.prependListener(self._events.RENDER, nanoraf_1(function () {
	    var renderTiming = browser('choo.render');
	    var newTree = self._prerender(self.state);
	    assert$2.ok(newTree, 'choo.render: no valid DOM node returned for location ' + self.state.href);

	    assert$2.equal(self._tree.nodeName, newTree.nodeName, 'choo.render: The target node <' +
	      self._tree.nodeName.toLowerCase() + '> is not the same type as the new node <' +
	      newTree.nodeName.toLowerCase() + '>.');

	    var morphTiming = browser('choo.morph');
	    nanomorph_1(self._tree, newTree);
	    morphTiming();

	    renderTiming();
	  }));

	  documentReady(function () {
	    self.emitter.emit(self._events.DOMCONTENTLOADED);
	    self._loaded = true;
	  });

	  return this._tree
	};

	Choo.prototype.mount = function mount (selector) {
	  if (typeof window !== 'object') {
	    assert$2.ok(typeof selector === 'string', 'choo.mount: selector should be type String');
	    this.selector = selector;
	    return this
	  }

	  assert$2.ok(typeof selector === 'string' || typeof selector === 'object', 'choo.mount: selector should be type String or HTMLElement');

	  var self = this;

	  documentReady(function () {
	    var renderTiming = browser('choo.render');
	    var newTree = self.start();
	    if (typeof selector === 'string') {
	      self._tree = document.querySelector(selector);
	    } else {
	      self._tree = selector;
	    }

	    assert$2.ok(self._tree, 'choo.mount: could not query selector: ' + selector);
	    assert$2.equal(self._tree.nodeName, newTree.nodeName, 'choo.mount: The target node <' +
	      self._tree.nodeName.toLowerCase() + '> is not the same type as the new node <' +
	      newTree.nodeName.toLowerCase() + '>.');

	    var morphTiming = browser('choo.morph');
	    nanomorph_1(self._tree, newTree);
	    morphTiming();

	    renderTiming();
	  });
	};

	Choo.prototype.toString = function (location, state) {
	  this.state = immutable(this.state, state || {});

	  assert$2.notEqual(typeof window, 'object', 'choo.mount: window was found. .toString() must be called in Node, use .start() or .mount() if running in the browser');
	  assert$2.equal(typeof location, 'string', 'choo.toString: location should be type string');
	  assert$2.equal(typeof this.state, 'object', 'choo.toString: state should be type object');

	  var self = this;
	  this._setCache(this.state);
	  this._stores.forEach(function (initStore) {
	    initStore(self.state);
	  });

	  this._matchRoute(location);
	  var html = this._prerender(this.state);
	  assert$2.ok(html, 'choo.toString: no valid value returned for the route ' + location);
	  assert$2(!Array.isArray(html), 'choo.toString: return value was an array for the route ' + location);
	  return typeof html.outerHTML === 'string' ? html.outerHTML : html.toString()
	};

	Choo.prototype._matchRoute = function (locationOverride) {
	  var location, queryString;
	  if (locationOverride) {
	    location = locationOverride.replace(/\?.+$/, '').replace(/\/$/, '');
	    if (!this._hashEnabled) location = location.replace(/#.+$/, '');
	    queryString = locationOverride;
	  } else {
	    location = window.location.pathname.replace(/\/$/, '');
	    if (this._hashEnabled) location += window.location.hash.replace(/^#/, '/');
	    queryString = window.location.search;
	  }
	  var matched = this.router.match(location);
	  this._handler = matched.cb;
	  this.state.href = location;
	  this.state.query = browser$1(queryString);
	  this.state.route = matched.route;
	  this.state.params = matched.params;
	  return this.state
	};

	Choo.prototype._prerender = function (state) {
	  var routeTiming = browser("choo.prerender('" + state.route + "')");
	  var res = this._handler(state, this.emit);
	  routeTiming();
	  return res
	};

	Choo.prototype._setCache = function (state) {
	  var cache$1 = new cache(state, this.emitter.emit.bind(this.emitter), this._cache);
	  state.cache = renderComponent;

	  function renderComponent (Component, id) {
	    assert$2.equal(typeof Component, 'function', 'choo.state.cache: Component should be type function');
	    var args = [];
	    for (var i = 0, len = arguments.length; i < len; i++) {
	      args.push(arguments[i]);
	    }
	    return cache$1.render.apply(cache$1, args)
	  }

	  // When the state gets stringified, make sure `state.cache` isn't
	  // stringified too.
	  renderComponent.toJSON = function () {
	    return null
	  };
	};

	var hyperscriptAttributeToProperty = attributeToProperty;

	var transform = {
	  'class': 'className',
	  'for': 'htmlFor',
	  'http-equiv': 'httpEquiv'
	};

	function attributeToProperty (h) {
	  return function (tagName, attrs, children) {
	    for (var attr in attrs) {
	      if (attr in transform) {
	        attrs[transform[attr]] = attrs[attr];
	        delete attrs[attr];
	      }
	    }
	    return h(tagName, attrs, children)
	  }
	}

	var VAR = 0, TEXT = 1, OPEN = 2, CLOSE = 3, ATTR = 4;
	var ATTR_KEY = 5, ATTR_KEY_W = 6;
	var ATTR_VALUE_W = 7, ATTR_VALUE = 8;
	var ATTR_VALUE_SQ = 9, ATTR_VALUE_DQ = 10;
	var ATTR_EQ = 11, ATTR_BREAK = 12;
	var COMMENT = 13;

	var hyperx = function (h, opts) {
	  if (!opts) opts = {};
	  var concat = opts.concat || function (a, b) {
	    return String(a) + String(b)
	  };
	  if (opts.attrToProp !== false) {
	    h = hyperscriptAttributeToProperty(h);
	  }

	  return function (strings) {
	    var state = TEXT, reg = '';
	    var arglen = arguments.length;
	    var parts = [];

	    for (var i = 0; i < strings.length; i++) {
	      if (i < arglen - 1) {
	        var arg = arguments[i+1];
	        var p = parse(strings[i]);
	        var xstate = state;
	        if (xstate === ATTR_VALUE_DQ) xstate = ATTR_VALUE;
	        if (xstate === ATTR_VALUE_SQ) xstate = ATTR_VALUE;
	        if (xstate === ATTR_VALUE_W) xstate = ATTR_VALUE;
	        if (xstate === ATTR) xstate = ATTR_KEY;
	        if (xstate === OPEN) {
	          if (reg === '/') {
	            p.push([ OPEN, '/', arg ]);
	            reg = '';
	          } else {
	            p.push([ OPEN, arg ]);
	          }
	        } else if (xstate === COMMENT && opts.comments) {
	          reg += String(arg);
	        } else if (xstate !== COMMENT) {
	          p.push([ VAR, xstate, arg ]);
	        }
	        parts.push.apply(parts, p);
	      } else parts.push.apply(parts, parse(strings[i]));
	    }

	    var tree = [null,{},[]];
	    var stack = [[tree,-1]];
	    for (var i = 0; i < parts.length; i++) {
	      var cur = stack[stack.length-1][0];
	      var p = parts[i], s = p[0];
	      if (s === OPEN && /^\//.test(p[1])) {
	        var ix = stack[stack.length-1][1];
	        if (stack.length > 1) {
	          stack.pop();
	          stack[stack.length-1][0][2][ix] = h(
	            cur[0], cur[1], cur[2].length ? cur[2] : undefined
	          );
	        }
	      } else if (s === OPEN) {
	        var c = [p[1],{},[]];
	        cur[2].push(c);
	        stack.push([c,cur[2].length-1]);
	      } else if (s === ATTR_KEY || (s === VAR && p[1] === ATTR_KEY)) {
	        var key = '';
	        var copyKey;
	        for (; i < parts.length; i++) {
	          if (parts[i][0] === ATTR_KEY) {
	            key = concat(key, parts[i][1]);
	          } else if (parts[i][0] === VAR && parts[i][1] === ATTR_KEY) {
	            if (typeof parts[i][2] === 'object' && !key) {
	              for (copyKey in parts[i][2]) {
	                if (parts[i][2].hasOwnProperty(copyKey) && !cur[1][copyKey]) {
	                  cur[1][copyKey] = parts[i][2][copyKey];
	                }
	              }
	            } else {
	              key = concat(key, parts[i][2]);
	            }
	          } else break
	        }
	        if (parts[i][0] === ATTR_EQ) i++;
	        var j = i;
	        for (; i < parts.length; i++) {
	          if (parts[i][0] === ATTR_VALUE || parts[i][0] === ATTR_KEY) {
	            if (!cur[1][key]) cur[1][key] = strfn(parts[i][1]);
	            else parts[i][1]==="" || (cur[1][key] = concat(cur[1][key], parts[i][1]));
	          } else if (parts[i][0] === VAR
	          && (parts[i][1] === ATTR_VALUE || parts[i][1] === ATTR_KEY)) {
	            if (!cur[1][key]) cur[1][key] = strfn(parts[i][2]);
	            else parts[i][2]==="" || (cur[1][key] = concat(cur[1][key], parts[i][2]));
	          } else {
	            if (key.length && !cur[1][key] && i === j
	            && (parts[i][0] === CLOSE || parts[i][0] === ATTR_BREAK)) {
	              // https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attributes
	              // empty string is falsy, not well behaved value in browser
	              cur[1][key] = key.toLowerCase();
	            }
	            if (parts[i][0] === CLOSE) {
	              i--;
	            }
	            break
	          }
	        }
	      } else if (s === ATTR_KEY) {
	        cur[1][p[1]] = true;
	      } else if (s === VAR && p[1] === ATTR_KEY) {
	        cur[1][p[2]] = true;
	      } else if (s === CLOSE) {
	        if (selfClosing(cur[0]) && stack.length) {
	          var ix = stack[stack.length-1][1];
	          stack.pop();
	          stack[stack.length-1][0][2][ix] = h(
	            cur[0], cur[1], cur[2].length ? cur[2] : undefined
	          );
	        }
	      } else if (s === VAR && p[1] === TEXT) {
	        if (p[2] === undefined || p[2] === null) p[2] = '';
	        else if (!p[2]) p[2] = concat('', p[2]);
	        if (Array.isArray(p[2][0])) {
	          cur[2].push.apply(cur[2], p[2]);
	        } else {
	          cur[2].push(p[2]);
	        }
	      } else if (s === TEXT) {
	        cur[2].push(p[1]);
	      } else if (s === ATTR_EQ || s === ATTR_BREAK) ; else {
	        throw new Error('unhandled: ' + s)
	      }
	    }

	    if (tree[2].length > 1 && /^\s*$/.test(tree[2][0])) {
	      tree[2].shift();
	    }

	    if (tree[2].length > 2
	    || (tree[2].length === 2 && /\S/.test(tree[2][1]))) {
	      if (opts.createFragment) return opts.createFragment(tree[2])
	      throw new Error(
	        'multiple root elements must be wrapped in an enclosing tag'
	      )
	    }
	    if (Array.isArray(tree[2][0]) && typeof tree[2][0][0] === 'string'
	    && Array.isArray(tree[2][0][2])) {
	      tree[2][0] = h(tree[2][0][0], tree[2][0][1], tree[2][0][2]);
	    }
	    return tree[2][0]

	    function parse (str) {
	      var res = [];
	      if (state === ATTR_VALUE_W) state = ATTR;
	      for (var i = 0; i < str.length; i++) {
	        var c = str.charAt(i);
	        if (state === TEXT && c === '<') {
	          if (reg.length) res.push([TEXT, reg]);
	          reg = '';
	          state = OPEN;
	        } else if (c === '>' && !quot(state) && state !== COMMENT) {
	          if (state === OPEN && reg.length) {
	            res.push([OPEN,reg]);
	          } else if (state === ATTR_KEY) {
	            res.push([ATTR_KEY,reg]);
	          } else if (state === ATTR_VALUE && reg.length) {
	            res.push([ATTR_VALUE,reg]);
	          }
	          res.push([CLOSE]);
	          reg = '';
	          state = TEXT;
	        } else if (state === COMMENT && /-$/.test(reg) && c === '-') {
	          if (opts.comments) {
	            res.push([ATTR_VALUE,reg.substr(0, reg.length - 1)]);
	          }
	          reg = '';
	          state = TEXT;
	        } else if (state === OPEN && /^!--$/.test(reg)) {
	          if (opts.comments) {
	            res.push([OPEN, reg],[ATTR_KEY,'comment'],[ATTR_EQ]);
	          }
	          reg = c;
	          state = COMMENT;
	        } else if (state === TEXT || state === COMMENT) {
	          reg += c;
	        } else if (state === OPEN && c === '/' && reg.length) ; else if (state === OPEN && /\s/.test(c)) {
	          if (reg.length) {
	            res.push([OPEN, reg]);
	          }
	          reg = '';
	          state = ATTR;
	        } else if (state === OPEN) {
	          reg += c;
	        } else if (state === ATTR && /[^\s"'=/]/.test(c)) {
	          state = ATTR_KEY;
	          reg = c;
	        } else if (state === ATTR && /\s/.test(c)) {
	          if (reg.length) res.push([ATTR_KEY,reg]);
	          res.push([ATTR_BREAK]);
	        } else if (state === ATTR_KEY && /\s/.test(c)) {
	          res.push([ATTR_KEY,reg]);
	          reg = '';
	          state = ATTR_KEY_W;
	        } else if (state === ATTR_KEY && c === '=') {
	          res.push([ATTR_KEY,reg],[ATTR_EQ]);
	          reg = '';
	          state = ATTR_VALUE_W;
	        } else if (state === ATTR_KEY) {
	          reg += c;
	        } else if ((state === ATTR_KEY_W || state === ATTR) && c === '=') {
	          res.push([ATTR_EQ]);
	          state = ATTR_VALUE_W;
	        } else if ((state === ATTR_KEY_W || state === ATTR) && !/\s/.test(c)) {
	          res.push([ATTR_BREAK]);
	          if (/[\w-]/.test(c)) {
	            reg += c;
	            state = ATTR_KEY;
	          } else state = ATTR;
	        } else if (state === ATTR_VALUE_W && c === '"') {
	          state = ATTR_VALUE_DQ;
	        } else if (state === ATTR_VALUE_W && c === "'") {
	          state = ATTR_VALUE_SQ;
	        } else if (state === ATTR_VALUE_DQ && c === '"') {
	          res.push([ATTR_VALUE,reg],[ATTR_BREAK]);
	          reg = '';
	          state = ATTR;
	        } else if (state === ATTR_VALUE_SQ && c === "'") {
	          res.push([ATTR_VALUE,reg],[ATTR_BREAK]);
	          reg = '';
	          state = ATTR;
	        } else if (state === ATTR_VALUE_W && !/\s/.test(c)) {
	          state = ATTR_VALUE;
	          i--;
	        } else if (state === ATTR_VALUE && /\s/.test(c)) {
	          res.push([ATTR_VALUE,reg],[ATTR_BREAK]);
	          reg = '';
	          state = ATTR;
	        } else if (state === ATTR_VALUE || state === ATTR_VALUE_SQ
	        || state === ATTR_VALUE_DQ) {
	          reg += c;
	        }
	      }
	      if (state === TEXT && reg.length) {
	        res.push([TEXT,reg]);
	        reg = '';
	      } else if (state === ATTR_VALUE && reg.length) {
	        res.push([ATTR_VALUE,reg]);
	        reg = '';
	      } else if (state === ATTR_VALUE_DQ && reg.length) {
	        res.push([ATTR_VALUE,reg]);
	        reg = '';
	      } else if (state === ATTR_VALUE_SQ && reg.length) {
	        res.push([ATTR_VALUE,reg]);
	        reg = '';
	      } else if (state === ATTR_KEY) {
	        res.push([ATTR_KEY,reg]);
	        reg = '';
	      }
	      return res
	    }
	  }

	  function strfn (x) {
	    if (typeof x === 'function') return x
	    else if (typeof x === 'string') return x
	    else if (x && typeof x === 'object') return x
	    else if (x === null || x === undefined) return x
	    else return concat('', x)
	  }
	};

	function quot (state) {
	  return state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ
	}

	var closeRE = RegExp('^(' + [
	  'area', 'base', 'basefont', 'bgsound', 'br', 'col', 'command', 'embed',
	  'frame', 'hr', 'img', 'input', 'isindex', 'keygen', 'link', 'meta', 'param',
	  'source', 'track', 'wbr', '!--',
	  // SVG TAGS
	  'animate', 'animateTransform', 'circle', 'cursor', 'desc', 'ellipse',
	  'feBlend', 'feColorMatrix', 'feComposite',
	  'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap',
	  'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR',
	  'feGaussianBlur', 'feImage', 'feMergeNode', 'feMorphology',
	  'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile',
	  'feTurbulence', 'font-face-format', 'font-face-name', 'font-face-uri',
	  'glyph', 'glyphRef', 'hkern', 'image', 'line', 'missing-glyph', 'mpath',
	  'path', 'polygon', 'polyline', 'rect', 'set', 'stop', 'tref', 'use', 'view',
	  'vkern'
	].join('|') + ')(?:[\.#][a-zA-Z0-9\u007F-\uFFFF_:-]+)*$');
	function selfClosing (tag) { return closeRE.test(tag) }

	var trailingNewlineRegex = /\n[\s]+$/;
	var leadingNewlineRegex = /^\n[\s]+/;
	var trailingSpaceRegex = /[\s]+$/;
	var leadingSpaceRegex = /^[\s]+/;
	var multiSpaceRegex = /[\n\s]+/g;

	var TEXT_TAGS = [
	  'a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'data', 'dfn', 'em', 'i',
	  'kbd', 'mark', 'q', 'rp', 'rt', 'rtc', 'ruby', 's', 'amp', 'small', 'span',
	  'strong', 'sub', 'sup', 'time', 'u', 'var', 'wbr'
	];

	var VERBATIM_TAGS = [
	  'code', 'pre', 'textarea'
	];

	var appendChild = function appendChild (el, childs) {
	  if (!Array.isArray(childs)) return

	  var nodeName = el.nodeName.toLowerCase();

	  var hadText = false;
	  var value, leader;

	  for (var i = 0, len = childs.length; i < len; i++) {
	    var node = childs[i];
	    if (Array.isArray(node)) {
	      appendChild(el, node);
	      continue
	    }

	    if (typeof node === 'number' ||
	      typeof node === 'boolean' ||
	      typeof node === 'function' ||
	      node instanceof Date ||
	      node instanceof RegExp) {
	      node = node.toString();
	    }

	    var lastChild = el.childNodes[el.childNodes.length - 1];

	    // Iterate over text nodes
	    if (typeof node === 'string') {
	      hadText = true;

	      // If we already had text, append to the existing text
	      if (lastChild && lastChild.nodeName === '#text') {
	        lastChild.nodeValue += node;

	      // We didn't have a text node yet, create one
	      } else {
	        node = document.createTextNode(node);
	        el.appendChild(node);
	        lastChild = node;
	      }

	      // If this is the last of the child nodes, make sure we close it out
	      // right
	      if (i === len - 1) {
	        hadText = false;
	        // Trim the child text nodes if the current node isn't a
	        // node where whitespace matters.
	        if (TEXT_TAGS.indexOf(nodeName) === -1 &&
	          VERBATIM_TAGS.indexOf(nodeName) === -1) {
	          value = lastChild.nodeValue
	            .replace(leadingNewlineRegex, '')
	            .replace(trailingSpaceRegex, '')
	            .replace(trailingNewlineRegex, '')
	            .replace(multiSpaceRegex, ' ');
	          if (value === '') {
	            el.removeChild(lastChild);
	          } else {
	            lastChild.nodeValue = value;
	          }
	        } else if (VERBATIM_TAGS.indexOf(nodeName) === -1) {
	          // The very first node in the list should not have leading
	          // whitespace. Sibling text nodes should have whitespace if there
	          // was any.
	          leader = i === 0 ? '' : ' ';
	          value = lastChild.nodeValue
	            .replace(leadingNewlineRegex, leader)
	            .replace(leadingSpaceRegex, ' ')
	            .replace(trailingSpaceRegex, '')
	            .replace(trailingNewlineRegex, '')
	            .replace(multiSpaceRegex, ' ');
	          lastChild.nodeValue = value;
	        }
	      }

	    // Iterate over DOM nodes
	    } else if (node && node.nodeType) {
	      // If the last node was a text node, make sure it is properly closed out
	      if (hadText) {
	        hadText = false;

	        // Trim the child text nodes if the current node isn't a
	        // text node or a code node
	        if (TEXT_TAGS.indexOf(nodeName) === -1 &&
	          VERBATIM_TAGS.indexOf(nodeName) === -1) {
	          value = lastChild.nodeValue
	            .replace(leadingNewlineRegex, '')
	            .replace(trailingNewlineRegex, '')
	            .replace(multiSpaceRegex, ' ');

	          // Remove empty text nodes, append otherwise
	          if (value === '') {
	            el.removeChild(lastChild);
	          } else {
	            lastChild.nodeValue = value;
	          }
	        // Trim the child nodes if the current node is not a node
	        // where all whitespace must be preserved
	        } else if (VERBATIM_TAGS.indexOf(nodeName) === -1) {
	          value = lastChild.nodeValue
	            .replace(leadingSpaceRegex, ' ')
	            .replace(leadingNewlineRegex, '')
	            .replace(trailingNewlineRegex, '')
	            .replace(multiSpaceRegex, ' ');
	          lastChild.nodeValue = value;
	        }
	      }

	      // Store the last nodename
	      var _nodeName = node.nodeName;
	      if (_nodeName) nodeName = _nodeName.toLowerCase();

	      // Append the node to the DOM
	      el.appendChild(node);
	    }
	  }
	};

	var svgTags = [
	  'svg', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor',
	  'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile',
	  'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix',
	  'feComponentTransfer', 'feComposite', 'feConvolveMatrix',
	  'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood',
	  'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage',
	  'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight',
	  'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter',
	  'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src',
	  'font-face-uri', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image',
	  'line', 'linearGradient', 'marker', 'mask', 'metadata', 'missing-glyph',
	  'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect',
	  'set', 'stop', 'switch', 'symbol', 'text', 'textPath', 'title', 'tref',
	  'tspan', 'use', 'view', 'vkern'
	];

	var boolProps = [
	  'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default',
	  'defaultchecked', 'defer', 'disabled', 'formnovalidate', 'hidden',
	  'ismap', 'loop', 'multiple', 'muted', 'novalidate', 'open', 'playsinline',
	  'readonly', 'required', 'reversed', 'selected'
	];

	var directProps = [
	  'indeterminate'
	];

	var browser$2 = createCommonjsModule(function (module) {
	// Props that need to be set directly rather than with el.setAttribute()


	var SVGNS = 'http://www.w3.org/2000/svg';
	var XLINKNS = 'http://www.w3.org/1999/xlink';

	var COMMENT_TAG = '!--';

	function nanoHtmlCreateElement (tag, props, children) {
	  var el;

	  // If an svg tag, it needs a namespace
	  if (svgTags.indexOf(tag) !== -1) {
	    props.namespace = SVGNS;
	  }

	  // If we are using a namespace
	  var ns = false;
	  if (props.namespace) {
	    ns = props.namespace;
	    delete props.namespace;
	  }

	  // If we are extending a builtin element
	  var isCustomElement = false;
	  if (props.is) {
	    isCustomElement = props.is;
	    delete props.is;
	  }

	  // Create the element
	  if (ns) {
	    if (isCustomElement) {
	      el = document.createElementNS(ns, tag, { is: isCustomElement });
	    } else {
	      el = document.createElementNS(ns, tag);
	    }
	  } else if (tag === COMMENT_TAG) {
	    return document.createComment(props.comment)
	  } else if (isCustomElement) {
	    el = document.createElement(tag, { is: isCustomElement });
	  } else {
	    el = document.createElement(tag);
	  }

	  // Create the properties
	  for (var p in props) {
	    if (props.hasOwnProperty(p)) {
	      var key = p.toLowerCase();
	      var val = props[p];
	      // Normalize className
	      if (key === 'classname') {
	        key = 'class';
	        p = 'class';
	      }
	      // The for attribute gets transformed to htmlFor, but we just set as for
	      if (p === 'htmlFor') {
	        p = 'for';
	      }
	      // If a property is boolean, set itself to the key
	      if (boolProps.indexOf(key) !== -1) {
	        if (val === 'true') val = key;
	        else if (val === 'false') continue
	      }
	      // If a property prefers being set directly vs setAttribute
	      if (key.slice(0, 2) === 'on' || directProps.indexOf(key) !== -1) {
	        el[p] = val;
	      } else {
	        if (ns) {
	          if (p === 'xlink:href') {
	            el.setAttributeNS(XLINKNS, p, val);
	          } else if (/^xmlns($|:)/i.test(p)) ; else {
	            el.setAttributeNS(null, p, val);
	          }
	        } else {
	          el.setAttribute(p, val);
	        }
	      }
	    }
	  }

	  appendChild(el, children);
	  return el
	}

	function createFragment (nodes) {
	  var fragment = document.createDocumentFragment();
	  for (var i = 0; i < nodes.length; i++) {
	    if (typeof nodes[i] === 'string') nodes[i] = document.createTextNode(nodes[i]);
	    fragment.appendChild(nodes[i]);
	  }
	  return fragment
	}

	module.exports = hyperx(nanoHtmlCreateElement, {
	  comments: true,
	  createFragment: createFragment
	});
	module.exports.default = module.exports;
	module.exports.createElement = nanoHtmlCreateElement;
	});
	var browser_1 = browser$2.createElement;

	var html = browser$2;

	// import builtins from 'rollup-plugin-node-builtins';
	// import 'assert'

	// var assert = require('assert')
	var app = choo();


	app.use(countStore);
	app.route('/', mainView);
	// app.mount('div id="test2"')
	 
	function mainView (state, emit) {
	  return html`
    <div id="test-t">
      <h1>count is ${state.count}</h1>
      <button onclick=${onclick}>Increment</button>
    </div>
  `

	  function onclick () {
	    emit('increment', 1);
	  }
	}

	function countStore (state, emitter) {
	    state.count = 0;
	    emitter.on('increment', function (count) {
	      state.count += count;
	      emitter.emit('render');
	    });
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

}());
//# sourceMappingURL=app.js.map
