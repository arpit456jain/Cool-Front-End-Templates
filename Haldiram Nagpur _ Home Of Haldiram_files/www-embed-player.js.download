(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function n(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ha(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ha(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||ia});
var ja="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ja(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function r(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.aa=b.prototype}
function ra(){this.C=!1;this.l=null;this.i=void 0;this.h=1;this.o=this.m=0;this.A=this.j=null}
function sa(a){if(a.C)throw new TypeError("Generator is already running");a.C=!0}
ra.prototype.u=function(a){this.i=a};
function ta(a,b){a.j={tb:b,yb:!0};a.h=a.m||a.o}
ra.prototype.return=function(a){this.j={return:a};this.h=this.o};
function t(a,b,c){a.h=c;return{value:b}}
ra.prototype.s=function(a){this.h=a};
function wa(a,b,c){a.m=b;void 0!=c&&(a.o=c)}
function xa(a,b){a.h=b;a.m=0}
function ya(a){a.m=0;var b=a.j.tb;a.j=null;return b}
function za(a){a.A=[a.j];a.m=0;a.o=0}
function Aa(a){var b=a.A.splice(0)[0];(b=a.j=a.j||b)?b.yb?a.h=a.m||a.o:void 0!=b.s&&a.o<b.s?(a.h=b.s,a.j=null):a.h=a.o:a.h=0}
function Ba(a){this.h=new ra;this.i=a}
function Ea(a,b){sa(a.h);var c=a.h.l;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.C=!1,e;var f=e.value}catch(g){return a.h.l=null,ta(a.h,g),Ga(a)}a.h.l=null;d.call(a.h,f);return Ga(a)}
function Ga(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.C=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ta(a.h,c)}a.h.C=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.yb)throw b.tb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){sa(a.h);a.h.l?b=Fa(a,a.h.l.next,b,a.h.u):(a.h.u(b),b=Ga(a));return b};
this.throw=function(b){sa(a.h);a.h.l?b=Fa(a,a.h.l["throw"],b,a.h.u):(ta(a.h,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function w(a){return Ia(new Ha(new Ba(a)))}
function Ja(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return la});
n("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.C=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.o()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.o=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.l(m)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(m){return function(q){k||(k=!0,m.call(h,q))}}
var h=this,k=!1;return{resolve:g(this.T),reject:g(this.o)}};
b.prototype.T=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.fa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.M(g):this.m(g)}};
b.prototype.M=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.na(h,g):this.m(g)};
b.prototype.o=function(g){this.u(2,g)};
b.prototype.m=function(g){this.u(1,g)};
b.prototype.u=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.A()};
b.prototype.Y=function(){var g=this;e(function(){if(g.L()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.L=function(){if(this.C)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.A=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.fa=function(g){var h=this.l();g.Ia(h.resolve,h.reject)};
b.prototype.na=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(C,v){return"function"==typeof C?function(E){try{m(C(E))}catch(F){q(F)}}:v}
var m,q,u=new b(function(C,v){m=C;q=v});
this.Ia(k(g,m),k(h,q));return u};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ia=function(g,h){function k(){switch(m.h){case 1:g(m.j);break;case 2:h(m.j);break;default:throw Error("Unexpected state: "+m.h);}}
var m=this;null==this.i?f.i(k):this.i.push(k);this.C=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=p(g),q=m.next();!q.done;q=m.next())d(q.value).Ia(h,k)})};
b.all=function(g){var h=p(g),k=h.next();return k.done?d([]):new b(function(m,q){function u(E){return function(F){C[E]=F;v--;0==v&&m(C)}}
var C=[],v=0;do C.push(void 0),v++,d(k.value).Ia(u(C.length-1),q),k=h.next();while(!k.done)})};
return b});
n("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=p(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ha(k,g)){var m=new c;ba(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(q){if(q instanceof c)return q;Object.isExtensible(q)&&e(q);return m(q)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),q=new a([[k,2],[m,3]]);if(2!=q.get(k)||3!=q.get(m))return!1;q.delete(k);q.set(m,4);return!q.has(k)&&4==q.get(m)}catch(u){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ha(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=m;return this};
b.prototype.get=function(k){return d(k)&&ha(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ha(k,g)&&ha(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ha(k,g)&&ha(k[g],this.h)?delete k[g][this.h]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.h;return ea(function(){if(m){for(;m.head!=h.h;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var q=h.data_[m];if(q&&ha(h.data_,m))for(h=0;h<q.length;h++){var u=q[h];if(k!==k&&u.key!==u.key||k===u.key)return{id:m,list:q,index:h,entry:u}}return{id:m,list:q,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=p(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(p([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),q=m.next();if(q.done||q.value[0]!=h||"s"!=q.value[1])return!1;q=m.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!m.next().done?!1:!0}catch(u){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},m.list.push(m.entry),this.h.previous.next=m.entry,this.h.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),q;!(q=m.next()).done;)q=q.value,h.call(k,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ka(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
n("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
n("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function La(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return La(this,function(b,c){return[b,c]})}});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
n("Object.setPrototypeOf",function(a){return a||qa});
n("Set",function(a){function b(c){this.h=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ha(b,d)&&c.push([d,b[d]]);return c}});
n("Array.prototype.keys",function(a){return a?a:function(){return La(this,function(b){return b})}});
n("Array.prototype.values",function(a){return a?a:function(){return La(this,function(b,c){return c})}});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ka(this,b,"includes").indexOf(b,c||0)}});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ha(b,d)&&c.push(b[d]);return c}});
var x=this||self;function y(a,b,c){a=a.split(".");c=c||x;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function z(a,b){a=a.split(".");b=b||x;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ma(a){a.bb=void 0;a.getInstance=function(){return a.bb?a.bb:a.bb=new a}}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Wa=Ua:Wa=Va;return Wa.apply(null,arguments)}
function Xa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ya(a,b){function c(){}
c.prototype=b.prototype;a.aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Uo=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Za(a){return a}
;function $a(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,$a);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.Ob=b)}
Ya($a,Error);$a.prototype.name="CustomError";function ab(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function bb(){}
function cb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var db=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},eb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},fb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},gb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},hb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
eb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ib(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function jb(a,b){b=db(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mb(a){var b=nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ob(a){for(var b in a)return!1;return!0}
function pb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function sb(){var a=A("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function tb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ub(a){var b={},c;for(c in a)b[c]=a[c];return b}
function vb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=vb(a[c]);return b}
var wb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<wb.length;f++)c=wb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var yb;function zb(){if(void 0===yb){var a=null,b=x.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Za,createScript:Za,createScriptURL:Za})}catch(c){x.console&&x.console.error(c.message)}yb=a}else yb=a}return yb}
;function Ab(a,b){this.j=a===Bb&&b||""}
Ab.prototype.i=!0;Ab.prototype.h=function(){return this.j};
function Cb(a){return new Ab(Bb,a)}
var Bb={};Cb("");var Db={};function Eb(a){this.j=Db===Db?a:"";this.i=!0}
Eb.prototype.h=function(){return this.j.toString()};
Eb.prototype.toString=function(){return this.j.toString()};function Fb(a,b){this.j=b===Gb?a:""}
Fb.prototype.i=!0;Fb.prototype.h=function(){return this.j.toString()};
Fb.prototype.toString=function(){return this.j+""};
function Hb(a){if(a instanceof Fb&&a.constructor===Fb)return a.j;Na(a);return"type_error:TrustedResourceUrl"}
var Gb={};function Ib(a){var b=zb();a=b?b.createScriptURL(a):a;return new Fb(a,Gb)}
;var Lb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Mb(a,b){this.j=b===Nb?a:""}
Mb.prototype.i=!0;Mb.prototype.h=function(){return this.j.toString()};
Mb.prototype.toString=function(){return this.j.toString()};
function Ob(a){if(a instanceof Mb&&a.constructor===Mb)return a.j;Na(a);return"type_error:SafeUrl"}
var Pb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Nb={};function Qb(){var a=x.navigator;return a&&(a=a.userAgent)?a:""}
function B(a){return-1!=Qb().indexOf(a)}
;function Rb(){return(B("Chrome")||B("CriOS"))&&!B("Edge")||B("Silk")}
;var Sb={};function Tb(a){this.j=Sb===Sb?a:"";this.i=!0}
Tb.prototype.h=function(){return this.j.toString()};
Tb.prototype.toString=function(){return this.j.toString()};function Ub(a,b){b instanceof Mb||b instanceof Mb||(b="object"==typeof b&&b.i?b.h():String(b),Pb.test(b)||(b="about:invalid#zClosurez"),b=new Mb(b,Nb));a.href=Ob(b)}
function Vb(a,b){a.rel="stylesheet";a.href=Hb(b).toString();(b=Wb('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function Xb(){return Wb("script[nonce]")}
var Yb=/^[\w+/_-]+[=]{0,2}$/;function Wb(a,b){b=(b||x).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&Yb.test(a)?a:"":""}
;function Zb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var $b=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ac(a){return a?decodeURI(a):a}
function bc(a,b){return b.match($b)[a]||null}
function cc(a){return ac(bc(3,a))}
function dc(a){var b=a.match($b);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function ec(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ec(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function fc(a){var b=[],c;for(c in a)ec(c,a[c],b);return b.join("&")}
function gc(a,b){b=fc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function hc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var ic=/#|$/,mc=/[?&]($|#)/;function nc(a){for(var b=a.search(ic),c=0,d,e=[];0<=(d=hc(a,c,"key",b));)e.push(a.substring(c,d)),c=Math.min(a.indexOf("&",d)+1||b,b);e.push(a.slice(c));return e.join("").replace(mc,"$1")}
;function oc(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
;function pc(a){pc[" "](a);return a}
pc[" "]=function(){};var qc=B("Opera"),rc=B("Trident")||B("MSIE"),sc=B("Edge"),tc=B("Gecko")&&!(-1!=Qb().toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),uc=-1!=Qb().toLowerCase().indexOf("webkit")&&!B("Edge"),vc=B("Android");function wc(){var a=x.document;return a?a.documentMode:void 0}
var xc;a:{var yc="",zc=function(){var a=Qb();if(tc)return/rv:([^\);]+)(\)|;)/.exec(a);if(sc)return/Edge\/([\d\.]+)/.exec(a);if(rc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(uc)return/WebKit\/(\S+)/.exec(a);if(qc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
zc&&(yc=zc?zc[1]:"");if(rc){var Ac=wc();if(null!=Ac&&Ac>parseFloat(yc)){xc=String(Ac);break a}}xc=yc}var Bc=xc,Cc;if(x.document&&rc){var Dc=wc();Cc=Dc?Dc:parseInt(Bc,10)||void 0}else Cc=void 0;var Ec=Cc;var Fc=oc()||B("iPod"),Gc=B("iPad");!B("Android")||Rb();Rb();var Hc=B("Safari")&&!(Rb()||B("Coast")||B("Opera")||B("Edge")||B("Edg/")||B("OPR")||B("Firefox")||B("FxiOS")||B("Silk")||B("Android"))&&!(oc()||B("iPad")||B("iPod"));var Ic={},Jc=null;
function Kc(a,b){Pa(a);void 0===b&&(b=0);if(!Jc){Jc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Ic[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Jc[h]&&(Jc[h]=g)}}}b=Ic[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],m=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+m+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Lc="undefined"!==typeof Uint8Array;var Mc={};var Nc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Oc(a,b){Object.isFrozen(a)||(Nc?a[Nc]|=b:void 0!==a.Ma?a.Ma|=b:Object.defineProperties(a,{Ma:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Pc(a){var b;Nc?b=a[Nc]:b=a.Ma;return null==b?0:b}
function Qc(a){Oc(a,1);return a}
function Rc(a){return Array.isArray(a)?!!(Pc(a)&2):!1}
function Sc(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");Oc(a,2)}
;function Tc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Uc,Yc=Object.freeze(Qc([]));function Zc(a){if(Rc(a.G))throw Error("Cannot mutate an immutable Message");}
var $c="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function ad(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function bd(a){x.setTimeout(function(){throw a;},0)}
;function cd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&Lc&&null!=a&&a instanceof Uint8Array)return Kc(a)}return a}
;function dd(a,b){b=void 0===b?ed:b;return fd(a,b)}
function gd(a,b){if(null!=a){if(Array.isArray(a))a=fd(a,b);else if(Tc(a)){var c={},d;for(d in a)c[d]=gd(a[d],b);a=c}else a=b(a);return a}}
function fd(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=gd(c[d],b);Array.isArray(a)&&Pc(a)&1&&Qc(c);return c}
function hd(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=cd(a);return Array.isArray(a)?dd(a,hd):a}
function ed(a){return Lc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function id(a,b,c){return-1===b?null:b>=a.l?a.i?a.i[b]:void 0:(void 0===c?0:c)&&a.i&&(c=a.i[b],null!=c)?c:a.G[b+a.j]}
function D(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Zc(a);b<a.l&&!d?a.G[b+a.j]=c:(a.i||(a.i=a.G[a.l+a.j]={}))[b]=c;return a}
function jd(a,b,c,d){c=void 0===c?!0:c;d=void 0===d?!1:d;var e=id(a,b,d);null==e&&(e=Yc);if(Rc(a.G))c&&(Sc(e),Object.freeze(e));else if(e===Yc||Rc(e))e=Qc(e.slice()),D(a,b,e,d);return e}
function kd(a,b,c,d){Zc(a);(c=ld(a,c))&&c!==b&&null!=d&&(a.h&&c in a.h&&(a.h[c]=void 0),D(a,c));return D(a,b,d)}
function ld(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=id(a,e)&&(0!==c&&D(a,c,void 0,!1,!0),c=e)}return c}
function md(a,b,c,d,e){if(-1===c)return null;a.h||(a.h={});var f=a.h[c];if(f)return f;e=id(a,c,void 0===e?!1:e);if(null==e&&!d)return f;b=new b(e);Rc(a.G)&&Sc(b.G);return a.h[c]=b}
function nd(a,b,c,d){d=void 0===d?!1:d;a.h||(a.h={});var e=Rc(a.G),f=a.h[c];if(!f){d=jd(a,c,!0,d);f=[];e=e||Rc(d);for(var g=0;g<d.length;g++)f[g]=new b(d[g]),e&&Sc(f[g].G);e&&(Sc(f),Object.freeze(f));a.h[c]=f}return f}
function I(a,b,c){var d=void 0===d?!1:d;Zc(a);a.h||(a.h={});var e=null!=c?c.G:c;a.h[b]=c;return D(a,b,e,d)}
function od(a,b,c,d){Zc(a);a.h||(a.h={});var e=null!=d?d.G:d;a.h[b]=d;kd(a,b,c,e)}
function pd(a,b,c,d){var e=void 0===e?!1:e;Zc(a);e=nd(a,c,b,e);c=null!=d?d:new c;a=jd(a,b);e.push(c);a.push(c.G)}
function qd(a,b){a=id(a,b);return null==a?"":a}
;function rd(a,b,c){a||(a=sd);sd=null;var d=this.constructor.i;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.h||0);this.h=void 0;this.G=a;a:{d=this.G.length;a=d-1;if(d&&(d=this.G[a],Tc(d))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.j,(d=this.G[a])?Array.isArray(d)&&Qc(d):this.G[a]=Yc;else{d=this.i||(this.i=this.G[this.l+this.j]={});var e=d[a];e?Array.isArray(e)&&
Qc(e):d[a]=Yc}}
rd.prototype.toJSON=function(){var a=this.G;return Uc?a:dd(a,hd)};
rd.prototype.clone=function(){var a=dd(this.G);sd=a;a=new this.constructor(a);sd=null;td(a,this);return a};
rd.prototype.isMutable=function(a){if(a!==Mc)throw Error("requires a valid immutable API token");return!Rc(this.G)};
rd.prototype.toString=function(){return this.G.toString()};
function ud(a,b){return cd(b)}
function td(a,b){b.o&&(a.o=b.o.slice());var c=b.h;if(c){b=b.i;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=nd(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)td(f[g],e[g])}else(f=md(a,e.constructor,g,void 0,f))&&td(f,e)}}}}
var sd;function vd(){rd.apply(this,arguments)}
r(vd,rd);if($c){var wd={};Object.defineProperties(vd,(wd[Symbol.hasInstance]=ad(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),wd))};function J(){vd.apply(this,arguments)}
r(J,vd);if($c){var xd={};Object.defineProperties(J,(xd[Symbol.hasInstance]=ad(Object[Symbol.hasInstance]),xd))};function yd(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function zd(a){this.i=!1;var b=a.program;a=a.globalName;var c=new yd;this.j=c.promise;this.l=p((0,x[a].a)(b,function(d,e){Promise.resolve().then(function(){c.resolve({Nb:d,wc:e})})},!0)).next().value;
this.vc=c.promise.then(function(){})}
zd.prototype.snapshot=function(a){if(this.i)throw Error("Already disposed");return this.j.then(function(b){var c=b.Nb;return new Promise(function(d){c(function(e){d(e)},[a.ob,
a.xc])})})};
zd.prototype.dispose=function(){this.i=!0;this.j.then(function(a){(a=a.wc)&&a()})};
zd.prototype.h=function(){return this.i};var Ad=window;Cb("csi.gstatic.com");Cb("googleads.g.doubleclick.net");Cb("partner.googleadservices.com");Cb("pubads.g.doubleclick.net");Cb("securepubads.g.doubleclick.net");Cb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Bd={};function Cd(){}
function Dd(a){this.h=a}
r(Dd,Cd);Dd.prototype.toString=function(){return this.h};
var Ed=new Dd("about:invalid#zTSz",Bd);function Fd(a){if(a instanceof Cd)if(a instanceof Dd)a=a.h;else throw Error("");else a=Ob(a);return a}
;function Gd(a,b){a.src=Hb(b);var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Hd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=Hd.prototype;l.clone=function(){return new Hd(this.x,this.y)};
l.equals=function(a){return a instanceof Hd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Id(a,b){this.width=a;this.height=b}
l=Id.prototype;l.clone=function(){return new Id(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Jd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Kd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Ld(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Md(a){var b=Nd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Od(){var a=[];Md(function(b){a.push(b)});
return a}
var Nd={Oc:"allow-forms",Pc:"allow-modals",Qc:"allow-orientation-lock",Rc:"allow-pointer-lock",Sc:"allow-popups",Tc:"allow-popups-to-escape-sandbox",Uc:"allow-presentation",Vc:"allow-same-origin",Wc:"allow-scripts",Xc:"allow-top-navigation",Yc:"allow-top-navigation-by-user-activation"},Pd=cb(function(){return Od()});
function Qd(){var a=Rd(),b={};eb(Pd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Rd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Sd(a){this.isValid=a}
function Wd(a){return new Sd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Xd=[Wd("data"),Wd("http"),Wd("https"),Wd("mailto"),Wd("ftp"),new Sd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Yd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Zd=(new Date).getTime();function $d(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var ae="client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag jsfeat jsmode mods".split(" ");fa(ae);function be(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(u){for(var C=g,v=0;64>v;v+=4)C[v/4]=u[v]<<24|u[v+1]<<16|u[v+2]<<8|u[v+3];for(v=16;80>v;v++)u=C[v-3]^C[v-8]^C[v-14]^C[v-16],C[v]=(u<<1|u>>>31)&4294967295;u=e[0];var E=e[1],F=e[2],H=e[3],R=e[4];for(v=0;80>v;v++){if(40>v)if(20>v){var O=H^E&(F^H);var S=1518500249}else O=E^F^H,S=1859775393;else 60>v?(O=E&F|H&(E|F),S=2400959708):(O=E^F^H,S=3395469782);O=((u<<5|u>>>27)&4294967295)+O+R+S+C[v]&4294967295;R=H;H=F;F=(E<<30|E>>>2)&4294967295;E=u;u=O}e[0]=e[0]+u&4294967295;e[1]=e[1]+E&4294967295;e[2]=
e[2]+F&4294967295;e[3]=e[3]+H&4294967295;e[4]=e[4]+R&4294967295}
function c(u,C){if("string"===typeof u){u=unescape(encodeURIComponent(u));for(var v=[],E=0,F=u.length;E<F;++E)v.push(u.charCodeAt(E));u=v}C||(C=u.length);v=0;if(0==m)for(;v+64<C;)b(u.slice(v,v+64)),v+=64,q+=64;for(;v<C;)if(f[m++]=u[v++],q++,64==m)for(m=0,b(f);v+64<C;)b(u.slice(v,v+64)),v+=64,q+=64}
function d(){var u=[],C=8*q;56>m?c(h,56-m):c(h,64-(m-56));for(var v=63;56<=v;v--)f[v]=C&255,C>>>=8;b(f);for(v=C=0;5>v;v++)for(var E=24;0<=E;E-=8)u[C++]=e[v]>>E&255;return u}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,q;a();return{reset:a,update:c,digest:d,Rb:function(){for(var u=d(),C="",v=0;v<u.length;v++)C+="0123456789ABCDEF".charAt(Math.floor(u[v]/16))+"0123456789ABCDEF".charAt(u[v]%16);return C}}}
;function ce(a,b,c){var d=String(x.location.href);return d&&a&&b?[b,de($d(d),a,c||null)].join(" "):null}
function de(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],eb(d,function(h){e.push(h)}),ee(e.join(" "));
var f=[],g=[];eb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];eb(d,function(h){e.push(h)});
a=ee(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ee(a){var b=be();b.update(a);return b.Rb().toLowerCase()}
;var fe={};function ge(a){this.h=a||{cookie:""}}
l=ge.prototype;l.isEnabled=function(){if(!x.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Oa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.gp;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Oa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Lb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Oa:0,path:b,domain:c});return d};
l.Ya=function(){return he(this).keys};
l.isEmpty=function(){return!this.h.cookie};
l.clear=function(){for(var a=he(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function he(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Lb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var ie=new ge("undefined"==typeof document?null:document);function je(a){return!!fe.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function ke(a){a=void 0===a?!1:a;var b=x.__SAPISID||x.__APISID||x.__3PSAPISID||x.__OVERRIDE_SID;je(a)&&(b=b||x.__1PSAPISID);if(b)return!0;var c=new ge(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");je(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function le(a,b,c,d){(a=x[a])||(a=(new ge(document)).get(b));return a?ce(a,c,d):null}
function me(a){var b=void 0===b?!1:b;var c=$d(String(x.location.href)),d=[];if(ke(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?x.__SAPISID:x.__APISID;e||(e=new ge(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?ce(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&je(b)&&((b=le("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=le("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function ne(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function oe(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?oe.apply(null,d):ne(d)}}
;function K(){this.C=this.C;this.o=this.o}
K.prototype.C=!1;K.prototype.h=function(){return this.C};
K.prototype.dispose=function(){this.C||(this.C=!0,this.I())};
function pe(a,b){a.C?b():(a.o||(a.o=[]),a.o.push(b))}
K.prototype.I=function(){if(this.o)for(;this.o.length;)this.o.shift()()};function qe(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
qe.prototype.stopPropagation=function(){this.j=!0};
qe.prototype.preventDefault=function(){this.defaultPrevented=!0};function re(a){var b=z("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(g){e="Not available",c=!0}b=se(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,te[c])c=te[c];else{c=String(c);if(!te[c]){var f=/function\s+([^\(]+)/m.exec(c);te[c]=f?f[1]:"[Anonymous]"}c=te[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function se(a,b){b||(b={});b[ue(a)]=!0;var c=a.stack||"";(a=a.Ob)&&!b[ue(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=se(a,b));return c}
function ue(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var te={};var ve=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{x.addEventListener("test",function(){},b),x.removeEventListener("test",function(){},b)}catch(c){}return a}();function we(a,b){qe.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Ya(we,qe);var xe={2:"touch",3:"pen",4:"mouse"};
we.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(tc){a:{try{pc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:xe[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&we.aa.preventDefault.call(this)};
we.prototype.stopPropagation=function(){we.aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
we.prototype.preventDefault=function(){we.aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ye="closure_listenable_"+(1E6*Math.random()|0);var ze=0;function Ae(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.La=e;this.key=++ze;this.ya=this.Ha=!1}
function Be(a){a.ya=!0;a.listener=null;a.proxy=null;a.src=null;a.La=null}
;function Ce(a){this.src=a;this.listeners={};this.h=0}
Ce.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=De(a,b,d,e);-1<g?(b=a[g],c||(b.Ha=!1)):(b=new Ae(b,this.src,f,!!d,e),b.Ha=c,a.push(b));return b};
Ce.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=De(e,b,c,d);return-1<b?(Be(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Ee(a,b){var c=b.type;c in a.listeners&&jb(a.listeners[c],b)&&(Be(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function De(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ya&&f.listener==b&&f.capture==!!c&&f.La==d)return e}return-1}
;var Fe="closure_lm_"+(1E6*Math.random()|0),Ge={},He=0;function Ie(a,b,c,d,e){if(d&&d.once)Je(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ie(a,b[f],c,d,e);else c=Ke(c),a&&a[ye]?a.W(b,c,Qa(d)?!!d.capture:!!d,e):Le(a,b,c,!1,d,e)}
function Le(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Me(a);h||(a[Fe]=h=new Ce(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ne();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ve||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Oe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");He++}}
function Ne(){function a(c){return b.call(a.src,a.listener,c)}
var b=Pe;return a}
function Je(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Je(a,b[f],c,d,e);else c=Ke(c),a&&a[ye]?a.l.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Le(a,b,c,!0,d,e)}
function Qe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Qe(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Ke(c),a&&a[ye])?a.l.remove(String(b),c,d,e):a&&(a=Me(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=De(b,c,d,e)),(c=-1<a?b[a]:null)&&Re(c))}
function Re(a){if("number"!==typeof a&&a&&!a.ya){var b=a.src;if(b&&b[ye])Ee(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Oe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);He--;(c=Me(b))?(Ee(c,a),0==c.h&&(c.src=null,b[Fe]=null)):Be(a)}}}
function Oe(a){return a in Ge?Ge[a]:Ge[a]="on"+a}
function Pe(a,b){if(a.ya)a=!0;else{b=new we(b,this);var c=a.listener,d=a.La||a.src;a.Ha&&Re(a);a=c.call(d,b)}return a}
function Me(a){a=a[Fe];return a instanceof Ce?a:null}
var Se="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ke(a){if("function"===typeof a)return a;a[Se]||(a[Se]=function(b){return a.handleEvent(b)});
return a[Se]}
;function Te(){K.call(this);this.l=new Ce(this);this.Y=this;this.L=null}
Ya(Te,K);Te.prototype[ye]=!0;Te.prototype.addEventListener=function(a,b,c,d){Ie(this,a,b,c,d)};
Te.prototype.removeEventListener=function(a,b,c,d){Qe(this,a,b,c,d)};
function Ue(a,b){var c=a.L;if(c){var d=[];for(var e=1;c;c=c.L)d.push(c),++e}a=a.Y;c=b.type||b;"string"===typeof b?b=new qe(b,a):b instanceof qe?b.target=b.target||a:(e=b,b=new qe(c,a),xb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Ve(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Ve(g,c,!0,b)&&e,b.j||(e=Ve(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Ve(g,c,!1,b)&&e}
Te.prototype.I=function(){Te.aa.I.call(this);if(this.l){var a=this.l,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Be(d[e]);delete a.listeners[c];a.h--}}this.L=null};
Te.prototype.W=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
function Ve(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ya&&g.capture==c){var h=g.listener,k=g.La||g.src;g.Ha&&Ee(a.l,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function We(a){Te.call(this);var b=this;this.A=this.j=0;this.V=null!=a?a:{N:function(e,f){return setTimeout(e,f)},
U:clearTimeout};var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return w(function(e){return t(e,Xe(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.A||Ye(this)}
r(We,Te);function Ze(){var a=$e;We.h||(We.h=new We(a));return We.h}
We.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.V.U(this.A);delete We.h};
We.prototype.H=function(){return this.i};
function Ye(a){a.A=a.V.N(function(){var b;return w(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.s(3):t(c,Xe(a),3):t(c,Xe(a),3);Ye(a);c.h=0})},3E4)}
function Xe(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return w(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.j=a.V.N(function(){d.abort()},b||2E4)),t(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:za(h);a.u=void 0;a.j&&(a.V.U(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?Ue(a,"networkstatus-online"):Ue(a,"networkstatus-offline"));c(g);Aa(h);break;case 2:ya(h),g=!1,h.s(3)}})})}
;var af={Eo:"WEB_DISPLAY_MODE_UNKNOWN",Ao:"WEB_DISPLAY_MODE_BROWSER",Co:"WEB_DISPLAY_MODE_MINIMAL_UI",Do:"WEB_DISPLAY_MODE_STANDALONE",Bo:"WEB_DISPLAY_MODE_FULLSCREEN"};function bf(){this.data_=[];this.h=-1}
bf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
bf.prototype.get=function(a){return!!this.data_[a]};
function cf(a){-1===a.h&&(a.h=hb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function df(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
df.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function ef(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var ff;function gf(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var e=Kd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Wa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.mb;c.mb=null;e()}};
return function(e){d.next={mb:e};d=d.next;b.port2.postMessage(0)}}return function(e){x.setTimeout(e,0)}}
;function hf(){this.i=this.h=null}
hf.prototype.add=function(a,b){var c=jf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
hf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var jf=new df(function(){return new kf},function(a){return a.reset()});
function kf(){this.next=this.scope=this.h=null}
kf.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
kf.prototype.reset=function(){this.next=this.scope=this.h=null};function lf(a,b){mf||nf();of||(mf(),of=!0);pf.add(a,b)}
var mf;function nf(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);mf=function(){a.then(qf)}}else mf=function(){var b=qf;
"function"!==typeof x.setImmediate||x.Window&&x.Window.prototype&&!B("Edge")&&x.Window.prototype.setImmediate==x.setImmediate?(ff||(ff=gf()),ff(b)):x.setImmediate(b)}}
var of=!1,pf=new hf;function qf(){for(var a;a=pf.remove();){try{a.h.call(a.scope)}catch(b){bd(b)}ef(jf,a)}of=!1}
;function rf(a,b){this.h=a[x.Symbol.iterator]();this.i=b}
rf.prototype[Symbol.iterator]=function(){return this};
rf.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function sf(a,b){return new rf(a,b)}
;function tf(){this.blockSize=-1}
;function uf(){this.blockSize=-1;this.blockSize=64;this.h=[];this.o=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Ya(uf,tf);uf.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function vf(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
uf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.i;d<b;){if(0==f)for(;d<=c;)vf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){vf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){vf(this,e);f=0;break}}this.i=f;this.l+=b}};
uf.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;vf(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function wf(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function xf(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function yf(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:wf(a).match(/\S+/g)||[],b=0<=db(a,b));return b}
function zf(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):yf(a,"inverted-hdpi")&&xf(a,Array.prototype.filter.call(a.classList?a.classList:wf(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Af(){}
Af.prototype.next=function(){return Bf};
var Bf={done:!0,value:void 0};function Cf(a){return{value:a,done:!1}}
Af.prototype.Z=function(){return this};function Df(a){if(a instanceof Ef||a instanceof Ff||a instanceof Gf)return a;if("function"==typeof a.next)return new Ef(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Ef(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Z)return new Ef(function(){return a.Z()});
throw Error("Not an iterator or iterable.");}
function Ef(a){this.i=a}
Ef.prototype.Z=function(){return new Ff(this.i())};
Ef.prototype[Symbol.iterator]=function(){return new Gf(this.i())};
Ef.prototype.h=function(){return new Gf(this.i())};
function Ff(a){this.i=a}
r(Ff,Af);Ff.prototype.next=function(){return this.i.next()};
Ff.prototype[Symbol.iterator]=function(){return new Gf(this.i)};
Ff.prototype.h=function(){return new Gf(this.i)};
function Gf(a){Ef.call(this,function(){return a});
this.j=a}
r(Gf,Ef);Gf.prototype.next=function(){return this.j.next()};function Hf(a,b){this.i={};this.h=[];this.ia=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Hf)for(c=a.Ya(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=Hf.prototype;l.Ya=function(){If(this);return this.h.concat()};
l.has=function(a){return Jf(this.i,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Kf;If(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Kf(a,b){return a===b}
l.isEmpty=function(){return 0==this.size};
l.clear=function(){this.i={};this.ia=this.size=this.h.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return Jf(this.i,a)?(delete this.i[a],--this.size,this.ia++,this.h.length>2*this.size&&If(this),!0):!1};
function If(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Jf(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Jf(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
l.get=function(a,b){return Jf(this.i,a)?this.i[a]:b};
l.set=function(a,b){Jf(this.i,a)||(this.size+=1,this.h.push(a),this.ia++);this.i[a]=b};
l.forEach=function(a,b){for(var c=this.Ya(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new Hf(this)};
l.keys=function(){return Df(this.Z(!0)).h()};
l.values=function(){return Df(this.Z(!1)).h()};
l.entries=function(){var a=this;return sf(this.keys(),function(b){return[b,a.get(b)]})};
l.Z=function(a){If(this);var b=0,c=this.ia,d=this,e=new Af;e.next=function(){if(c!=d.ia)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Bf;var f=d.h[b++];return Cf(a?f:d.i[f])};
return e};
function Jf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Lf(a){var b=[];Of(new Pf,a,b);return b.join("")}
function Pf(){}
function Of(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Of(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Qf(d,c),c.push(":"),Of(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Qf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Rf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Sf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Qf(a,b){b.push('"',a.replace(Sf,function(c){var d=Rf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Rf[c]=d);return d}),'"')}
;function Tf(a){this.h=0;this.C=void 0;this.l=this.i=this.j=null;this.o=this.m=!1;if(a!=bb)try{var b=this;a.call(void 0,function(c){Uf(b,2,c)},function(c){Uf(b,3,c)})}catch(c){Uf(this,3,c)}}
function Vf(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Vf.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Wf=new df(function(){return new Vf},function(a){a.reset()});
function Xf(a,b,c){var d=Wf.get();d.i=a;d.onRejected=b;d.context=c;return d}
function Yf(a){return new Tf(function(b,c){c(a)})}
Tf.prototype.then=function(a,b,c){return Zf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Tf.prototype.$goog_Thenable=!0;function $f(a,b){return Zf(a,null,b)}
Tf.prototype.cancel=function(a){if(0==this.h){var b=new ag(a);lf(function(){bg(this,b)},this)}};
function bg(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?bg(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):cg(c),dg(c,e,3,b)))}a.j=null}else Uf(a,3,b)}
function eg(a,b){a.i||2!=a.h&&3!=a.h||fg(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Zf(a,b,c,d){var e=Xf(null,null,null);e.h=new Tf(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ag?g(h):f(k)}catch(m){g(m)}}:g});
e.h.j=a;eg(a,e);return e.h}
Tf.prototype.A=function(a){this.h=0;Uf(this,2,a)};
Tf.prototype.L=function(a){this.h=0;Uf(this,3,a)};
function Uf(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.A,f=a.L;if(d instanceof Tf){eg(d,Xf(e||bb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if("function"===typeof k){gg(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.C=c,a.h=b,a.j=null,fg(a),3!=b||c instanceof ag||hg(a,c))}}
function gg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function fg(a){a.m||(a.m=!0,lf(a.u,a))}
function cg(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Tf.prototype.u=function(){for(var a;a=cg(this);)dg(this,a,this.h,this.C);this.m=!1};
function dg(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.o;a=a.j)a.o=!1;if(b.h)b.h.j=null,ig(b,c,d);else try{b.j?b.i.call(b.context):ig(b,c,d)}catch(e){jg.call(null,e)}ef(Wf,b)}
function ig(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function hg(a,b){a.o=!0;lf(function(){a.o&&jg.call(null,b)})}
var jg=bd;function ag(a){$a.call(this,a)}
Ya(ag,$a);ag.prototype.name="cancel";function L(a){K.call(this);this.u=1;this.l=[];this.m=0;this.i=[];this.j={};this.A=!!a}
Ya(L,K);l=L.prototype;l.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.u;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.u=e+3;d.push(e);return e};
function kg(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.ta(b)}}
l.ta=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=function(){}):(c&&jb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
l.ja=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];lg(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.ta(c)}}return 0!=e}return!1};
function lg(a,b,c){lf(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.ta,this),delete this.j[a])}else this.i.length=0,this.j={}};
l.I=function(){L.aa.I.call(this);this.clear();this.l.length=0};function mg(a){this.h=a}
mg.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Lf(b))};
mg.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
mg.prototype.remove=function(a){this.h.remove(a)};function ng(a){this.h=a}
Ya(ng,mg);function og(a){this.data=a}
function pg(a){return void 0===a||a instanceof og?a:new og(a)}
ng.prototype.set=function(a,b){ng.aa.set.call(this,a,pg(b))};
ng.prototype.i=function(a){a=ng.aa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ng.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function qg(a){this.h=a}
Ya(qg,ng);qg.prototype.set=function(a,b,c){if(b=pg(b)){if(c){if(c<Date.now()){qg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}qg.aa.set.call(this,a,b)};
qg.prototype.i=function(a){var b=qg.aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())qg.prototype.remove.call(this,a);else return b}};function rg(){}
;function sg(){}
Ya(sg,rg);sg.prototype[Symbol.iterator]=function(){return Df(this.Z(!0)).h()};
sg.prototype.clear=function(){var a=Array.from(this);a=p(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function tg(a){this.h=a}
Ya(tg,sg);l=tg.prototype;l.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeItem(a)};
l.Z=function(a){var b=0,c=this.h,d=new Af;d.next=function(){if(b>=c.length)return Bf;var e=c.key(b++);if(a)return Cf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Cf(e)};
return d};
l.clear=function(){this.h.clear()};
l.key=function(a){return this.h.key(a)};function ug(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Ya(ug,tg);function vg(a,b){this.i=a;this.h=null;var c;if(c=rc)c=!(9<=Number(Ec));if(c){wg||(wg=new Hf);this.h=wg.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),wg.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Ya(vg,sg);var xg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},wg=null;function yg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return xg[b]})}
l=vg.prototype;l.isAvailable=function(){return!!this.h};
l.set=function(a,b){this.h.setAttribute(yg(a),b);zg(this)};
l.get=function(a){a=this.h.getAttribute(yg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeAttribute(yg(a));zg(this)};
l.Z=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Af;d.next=function(){if(b>=c.length)return Bf;var e=c[b++];if(a)return Cf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Cf(e)};
return d};
l.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);zg(this)};
function zg(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ag(a,b){this.i=a;this.h=b+"::"}
Ya(Ag,sg);Ag.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Ag.prototype.get=function(a){return this.i.get(this.h+a)};
Ag.prototype.remove=function(a){this.i.remove(this.h+a)};
Ag.prototype.Z=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Af;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Cf(a?e.slice(c.h.length):c.i.get(e))};
return d};function Bg(a){J.call(this,a)}
r(Bg,J);Bg.prototype.getKey=function(){return id(this,1)};
Bg.prototype.getValue=function(){return id(this,2===ld(this,Cg)?2:-1)};
Bg.prototype.setValue=function(a){return kd(this,2,Cg,a)};
var Cg=[2,3,4,5,6];function Dg(a){J.call(this,a)}
r(Dg,J);function Eg(a){J.call(this,a)}
r(Eg,J);function Fg(a){J.call(this,a,-1,Gg)}
r(Fg,J);Fg.prototype.getPlayerType=function(){return id(this,36)};
Fg.prototype.setHomeGroupInfo=function(a){return I(this,81,a)};
var Gg=[9,66,24,32,86,100,101];function Hg(a){J.call(this,a,-1,Ig)}
r(Hg,J);var Ig=[15,26,28];function Jg(a){J.call(this,a)}
r(Jg,J);Jg.prototype.setToken=function(a){return D(this,2,a)};function Kg(a){J.call(this,a,-1,Lg)}
r(Kg,J);Kg.prototype.setSafetyMode=function(a){return D(this,5,a)};
var Lg=[12];function Mg(a){J.call(this,a,-1,Ng)}
r(Mg,J);var Ng=[12];function Og(a){J.call(this,a,-1,Pg)}
r(Og,J);function Qg(a){J.call(this,a)}
r(Qg,J);Qg.prototype.getKey=function(){return qd(this,1)};
Qg.prototype.getValue=function(){return qd(this,2)};
Qg.prototype.setValue=function(a){return D(this,2,a)};
var Pg=[4,5];function Rg(a){J.call(this,a)}
r(Rg,J);function Sg(a){J.call(this,a)}
r(Sg,J);var Tg=[2,3,4];function Ug(a){J.call(this,a)}
r(Ug,J);Ug.prototype.getMessage=function(){return qd(this,1)};function Vg(a){J.call(this,a)}
r(Vg,J);function Wg(a){J.call(this,a)}
r(Wg,J);function Xg(a){J.call(this,a,-1,Yg)}
r(Xg,J);var Yg=[10,17];function Zg(a){J.call(this,a)}
r(Zg,J);function $g(a){J.call(this,a)}
r($g,J);$g.prototype.S=function(a){D(this,1,a)};function ah(a){J.call(this,a)}
r(ah,J);function bh(a){J.call(this,a)}
r(bh,J);function ch(a){J.call(this,a)}
r(ch,J);function dh(a,b){I(a,1,b)}
ch.prototype.S=function(a){D(this,2,a)};
function eh(a){J.call(this,a)}
r(eh,J);function fh(a,b){I(a,1,b)}
;function gh(a){J.call(this,a,-1,hh)}
r(gh,J);gh.prototype.S=function(a){D(this,1,a)};
function ih(a,b){I(a,2,b)}
var hh=[3];function jh(a){J.call(this,a)}
r(jh,J);jh.prototype.S=function(a){D(this,1,a)};function kh(a){J.call(this,a)}
r(kh,J);kh.prototype.S=function(a){D(this,1,a)};function lh(a){J.call(this,a)}
r(lh,J);lh.prototype.S=function(a){D(this,1,a)};function mh(a){J.call(this,a)}
r(mh,J);function nh(a){J.call(this,a)}
r(nh,J);function oh(a){J.call(this,a,-1,ph)}
r(oh,J);function qh(a,b){return D(a,1,b)}
oh.prototype.getPlayerType=function(){var a=id(this,7);return null==a?0:a};
oh.prototype.setVideoId=function(a){return D(this,19,a)};
function rh(a,b){return D(a,25,b)}
function sh(a,b){pd(a,68,th,b)}
function th(a){J.call(this,a)}
r(th,J);th.prototype.getId=function(){return qd(this,2)};
var ph=[83,68];function uh(a){J.call(this,a)}
r(uh,J);function vh(a){J.call(this,a)}
r(vh,J);function wh(a){J.call(this,a)}
r(wh,J);function xh(a){J.call(this,a,431)}
r(xh,J);
var yh=[23,24,11,6,7,5,2,3,20,21,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,203,204,205,206,258,259,260,261,209,226,227,232,233,234,240,247,248,251,254,255,270,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,
378,380,381,388,389,403,412,429,413,414,415,416,417,418,430,423,424,425,426,427,117];var zh={Gh:0,rh:1,xh:2,yh:4,Dh:8,zh:16,Ah:32,Fh:64,Eh:128,th:256,vh:512,Ch:1024,uh:2048,wh:4096,sh:8192,Bh:16384};function Ah(a){J.call(this,a)}
r(Ah,J);function Bh(a){J.call(this,a)}
r(Bh,J);Bh.prototype.setVideoId=function(a){return kd(this,1,Ch,a)};
Bh.prototype.getPlaylistId=function(){return id(this,2===ld(this,Ch)?2:-1)};
var Ch=[1,2];function Dh(a){J.call(this,a,-1,Eh)}
r(Dh,J);var Eh=[3];function Fh(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Gh=x.window,Hh,Ih,Jh=(null==Gh?void 0:null==(Hh=Gh.yt)?void 0:Hh.config_)||(null==Gh?void 0:null==(Ih=Gh.ytcfg)?void 0:Ih.data_)||{};y("yt.config_",Jh);function Kh(){Fh(Jh,arguments)}
function A(a,b){return a in Jh?Jh[a]:b}
function Lh(){var a=Jh.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function M(a){a=Mh(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Nh(a,b){a=Mh(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Oh(){return A("EXPERIMENTS_TOKEN","")}
function Mh(a){var b=A("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:A("EXPERIMENT_FLAGS",{})[a]}
function Ph(){var a=[],b=A("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=A("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Qh=[];function Rh(a){Qh.forEach(function(b){return b(a)})}
function Sh(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Th(b)}}:a}
function Th(a,b,c,d){var e=z("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=A("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Kh("ERRORS",e));Rh(a)}
function Uh(a,b,c,d){var e=z("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=A("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Kh("ERRORS",e))}
;function Vh(){var a=Wh;z("yt.ads.biscotti.getId_")||y("yt.ads.biscotti.getId_",a)}
function Xh(a){y("yt.ads.biscotti.lastId_",a)}
;var Yh=/^[\w.]*$/,Zh={q:!0,search_query:!0};function $h(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=ai(f[0]||""),h=ai(f[1]||"");g in c?Array.isArray(c[g])?kb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(u){var k=u,m=f[0],q=String($h);k.args=[{key:m,value:f[1],query:a,method:bi==q?"unchanged":q}];Zh.hasOwnProperty(m)||Uh(k)}}return c}
var bi=String($h);function ci(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];eb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function di(a){"?"==a.charAt(0)&&(a=a.substr(1));return $h(a,"&")}
function ei(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),di(1<a.length?a[1]:a[0])):{}}
function fi(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=di(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return gc(a,e)+d}
function gi(a){if(!b)var b=window.location.href;var c=bc(1,a),d=cc(a);c&&d?(a=a.match($b),b=b.match($b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?cc(b)==d&&(Number(bc(4,b))||null)==(Number(bc(4,a))||null):!0;return a}
function ai(a){return a&&a.match(Yh)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function hi(a){var b=ii;a=void 0===a?z("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Zd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ua){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Ad:g;try{var h=g.history.length}catch(ua){h=0}e.u_his=h;var k;e.u_h=null==(k=Ad.screen)?void 0:k.height;var m;e.u_w=null==(m=Ad.screen)?void 0:m.width;var q;e.u_ah=null==(q=Ad.screen)?void 0:q.availHeight;var u;e.u_aw=
null==(u=Ad.screen)?void 0:u.availWidth;var C;e.u_cd=null==(C=Ad.screen)?void 0:C.colorDepth}catch(ua){}h=b.h;try{var v=h.screenX;var E=h.screenY}catch(ua){}try{var F=h.outerWidth;var H=h.outerHeight}catch(ua){}try{var R=h.innerWidth;var O=h.innerHeight}catch(ua){}try{var S=h.screenLeft;var ka=h.screenTop}catch(ua){}try{R=h.innerWidth,O=h.innerHeight}catch(ua){}try{var N=h.screen.availWidth;var Ca=h.screen.availTop}catch(ua){}v=[S,ka,v,E,N,Ca,F,H,R,O];try{var Oa=(b.h.top||window).document,va="CSS1Compat"==
Oa.compatMode?Oa.documentElement:Oa.body;var G=(new Id(va.clientWidth,va.clientHeight)).round()}catch(ua){G=new Id(-12245933,-12245933)}Oa=G;G={};var Da=void 0===Da?x:Da;va=new bf;Da.SVGElement&&Da.document.createElementNS&&va.set(0);E=Qd();E["allow-top-navigation-by-user-activation"]&&va.set(1);E["allow-popups-to-escape-sandbox"]&&va.set(2);Da.crypto&&Da.crypto.subtle&&va.set(3);Da.TextDecoder&&Da.TextEncoder&&va.set(4);Da=cf(va);G.bc=Da;G.bih=Oa.height;G.biw=Oa.width;G.brdim=v.join();b=b.i;b=(G.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,G.wgl=!!Ad.WebGLRenderingContext,G);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ii=new function(){var a=window.document;this.h=window;this.i=a};
y("yt.ads_.signals_.getAdSignalsString",function(a){return ci(hi(a))});Date.now();var ji="XMLHttpRequest"in x?function(){return new XMLHttpRequest}:null;
function ki(){if(!ji)return null;var a=ji();return"open"in a?a:null}
function li(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function mi(a,b){"function"===typeof a&&(a=Sh(a));return window.setTimeout(a,b)}
function ni(a){window.clearTimeout(a)}
;var oi={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},pi="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(fa(ae)),qi=!1;
function ri(a,b){b=void 0===b?{}:b;var c=gi(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in oi){var f=A(oi[e]);!f||!c&&cc(a)||d&&void 0!==b[e]||!M("enable_web_eom_visitor_data")&&"X-Goog-EOM-Visitor-Id"===e||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!cc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!cc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=
g)}if(c||!cc(a))b["X-YouTube-Ad-Signals"]=ci(hi());return b}
function si(a){var b=window.location.search,c=cc(a);M("debug_handle_relative_url_for_query_forward_killswitch")||c||!gi(a)||(c=document.location.hostname);var d=ac(bc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=di(b),f={};eb(pi,function(g){e[g]&&(f[g]=e[g])});
return fi(a,f||{},!1)}
function ti(a,b){var c=b.format||"JSON";a=Pi(a,b);var d=Qi(a,b),e=!1,f=Ri(a,function(k){if(!e){e=!0;h&&ni(h);var m=li(k),q=null,u=400<=k.status&&500>k.status,C=500<=k.status&&600>k.status;if(m||u||C)q=Si(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};u=b.context||x;m?b.onSuccess&&b.onSuccess.call(u,k,q):b.onError&&b.onError.call(u,k,q);b.onFinish&&b.onFinish.call(u,k,q)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=mi(function(){e||(e=!0,f.abort(),ni(h),g.call(b.context||x,f))},d)}return f}
function Pi(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=A("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=fi(a,b||{},!0);return a}
function Qi(a,b){var c=A("XSRF_FIELD_NAME"),d=A("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=A("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||cc(a)&&!b.withCredentials&&cc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=di(e),xb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):fc(e));f=e||f&&!ob(f);!qi&&f&&"POST"!=b.method&&(qi=
!0,Th(Error("AJAX request with postData should use POST")));return e}
function Si(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Uh(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ti(a):null)e={},eb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Ui(g)})}d&&Vi(e);
return e}
function Vi(a){if(Qa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;Cb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b],e=zb();d=e?e.createHTML(d):d;a[c]=new Tb(d)}else Vi(a[b])}}
function Ti(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ui(a){var b="";eb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ri(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Sh(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ki();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=si(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ri(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Wi(a){var b=this;this.h=void 0;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.h=c})}
function Xi(){if(!x.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return x.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":x.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":x.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":x.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Yi(a,b,c,d,e){ie.set(""+a,b,{Oa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Zi(a){return ie.get(""+a,void 0)}
function $i(){if(!ie.isEnabled())return!1;if(!ie.isEmpty())return!0;ie.set("TESTCOOKIESENABLED","1",{Oa:60});if("1"!==ie.get("TESTCOOKIESENABLED"))return!1;ie.remove("TESTCOOKIESENABLED");return!0}
;var aj=z("ytglobal.prefsUserPrefsPrefs_")||{};y("ytglobal.prefsUserPrefsPrefs_",aj);function bj(){this.h=A("ALT_PREF_COOKIE_NAME","PREF");this.i=A("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Zi(this.h);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(aj[d]=c.toString())}}}
bj.prototype.get=function(a,b){cj(a);dj(a);a=void 0!==aj[a]?aj[a].toString():null;return null!=a?a:b?b:""};
bj.prototype.set=function(a,b){cj(a);dj(a);if(null==b)throw Error("ExpectedNotNull");aj[a]=b.toString()};
function ej(a){return!!((fj("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
bj.prototype.remove=function(a){cj(a);dj(a);delete aj[a]};
bj.prototype.clear=function(){for(var a in aj)delete aj[a]};
function dj(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function cj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function fj(a){a=void 0!==aj[a]?aj[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ma(bj);var gj={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},hj={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},ij={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},jj={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function kj(){var a=x.navigator;return a?a.connection:void 0}
function lj(){var a=kj();if(a){var b=gj[a.type||"unknown"]||"CONN_UNKNOWN";a=gj[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function mj(){var a=kj();if(null!=a&&a.effectiveType)return jj.hasOwnProperty(a.effectiveType)?jj[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function nj(){return"INNERTUBE_API_KEY"in Jh&&"INNERTUBE_API_VERSION"in Jh}
function oj(){return{innertubeApiKey:A("INNERTUBE_API_KEY"),innertubeApiVersion:A("INNERTUBE_API_VERSION"),ab:A("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),vb:A("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Vb:A("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:A("INNERTUBE_CONTEXT_CLIENT_VERSION"),xb:A("INNERTUBE_CONTEXT_HL"),wb:A("INNERTUBE_CONTEXT_GL"),Wb:A("INNERTUBE_HOST_OVERRIDE")||"",Yb:!!A("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Xb:!!A("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:A("SERIALIZED_CLIENT_CONFIG_DATA")}}
function pj(a){var b={client:{hl:a.xb,gl:a.wb,clientName:a.vb,clientVersion:a.innertubeContextClientVersion,configInfo:a.ab}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=x.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Oh();""!==c&&(b.client.experimentsToken=c);c=Ph();0<c.length&&(b.request={internalExperimentFlags:c});qj(a,void 0,b);rj(void 0,b);sj(a,void 0,b);tj(void 0,b);A("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:A("DELEGATED_SESSION_ID")});
a=Object;c=a.assign;for(var d=b.client,e={},f=p(Object.entries(di(A("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=p(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function uj(a){var b=new Mg,c=new Fg;D(c,1,a.xb);D(c,2,a.wb);D(c,16,a.Vb);D(c,17,a.innertubeContextClientVersion);if(a.ab){var d=a.ab,e=new Dg;d.coldConfigData&&D(e,1,d.coldConfigData);d.appInstallData&&D(e,6,d.appInstallData);d.coldHashData&&D(e,3,d.coldHashData);d.hotHashData&&D(e,5,d.hotHashData);I(c,62,e)}(d=x.devicePixelRatio)&&1!=d&&D(c,65,d);d=Oh();""!==d&&D(c,54,d);d=Ph();if(0<d.length){e=new Hg;for(var f=0;f<d.length;f++){var g=new Bg;D(g,1,d[f].key);g.setValue(d[f].value);pd(e,15,Bg,g)}I(b,
5,e)}qj(a,c);rj(c);sj(a,c);tj(c);A("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a=new Kg,D(a,3,A("DELEGATED_SESSION_ID")));a=p(Object.entries(di(A("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=p(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?D(c,12,e):"cmodel"===d?D(c,13,e):"cbr"===d?D(c,87,e):"cbrver"===d?D(c,88,e):"cos"===d?D(c,18,e):"cosver"===d?D(c,19,e):"cplatform"===d&&D(c,42,e);I(b,1,c);return b}
function qj(a,b,c){a=a.vb;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=md(b,Eg,96)||new Eg;var d=Xi();d=Object.keys(af).indexOf(d);d=-1===d?null:d;null!==d&&D(c,3,d);I(b,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Xi())}
function rj(a,b){var c;if(M("web_log_memory_total_kbytes")&&(null==(c=x.navigator)?0:c.deviceMemory)){var d;c=null==(d=x.navigator)?void 0:d.deviceMemory;a?D(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function sj(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=md(b,Dg,62))?d:new Dg;D(c,6,a.appInstallData);I(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function tj(a,b){var c=lj();c&&(a?D(a,61,hj[c]):b&&(b.client.connectionType=c));M("web_log_effective_connection_type")&&(c=mj())&&(a?D(a,94,ij[c]):b&&(b.client.effectiveConnectionType=c))}
function vj(a,b,c){c=void 0===c?{}:c;var d={};M("enable_web_eom_visitor_data")&&A("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":A("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||A("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.To||A("AUTHORIZATION"))||(a?b="Bearer "+z("gapi.auth.getToken")().So:b=me([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=A("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=A("DELEGATED_SESSION_ID")));return d}
;function wj(a){a=Object.assign({},a);delete a.Authorization;var b=me();if(b){var c=new uf;c.update(A("INNERTUBE_API_KEY"));c.update(b);a.hash=Kc(c.digest(),3)}return a}
;function xj(a){var b=new ug;(b=b.isAvailable()?a?new Ag(b,a):b:null)||(a=new vg(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new qg(a):null;this.i=document.domain||window.location.hostname}
xj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Lf(b))}catch(f){return}else e=escape(b);Yi(a,e,c,this.i)};
xj.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Zi(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
xj.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;ie.remove(""+a,"/",void 0===b?"youtube.com":b)};var yj=window,P=yj.ytcsi&&yj.ytcsi.now?yj.ytcsi.now:yj.performance&&yj.performance.timing&&yj.performance.now&&yj.performance.timing.navigationStart?function(){return yj.performance.timing.navigationStart+yj.performance.now()}:function(){return(new Date).getTime()};var zj;function Aj(){zj||(zj=new xj("yt.innertube"));return zj}
function Bj(a,b,c,d){if(d)return null;d=Aj().get("nextId",!0)||1;var e=Aj().get("requests",!0)||{};e[d]={method:a,request:b,authState:wj(c),requestTime:Math.round(P())};Aj().set("nextId",d+1,86400,!0);Aj().set("requests",e,86400,!0);return d}
function Cj(a){var b=Aj().get("requests",!0)||{};delete b[a];Aj().set("requests",b,86400,!0)}
function Dj(a){var b=Aj().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=wj(vj(!1));tb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),Ej(a,d.method,e,{}));delete b[c]}}Aj().set("requests",b,86400,!0)}}
;function Fj(){}
function Gj(a,b){return Hj(a,0,b)}
Fj.prototype.N=function(a,b){return Hj(a,1,b)};
function Ij(a,b){Hj(a,2,b)}
function Jj(a){var b=z("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function Kj(){Fj.apply(this,arguments)}
r(Kj,Fj);function Lj(){Kj.h||(Kj.h=new Kj);return Kj.h}
function Hj(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=z("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):mi(a,c||0)}
Kj.prototype.U=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=z("yt.scheduler.instance.cancelJob");b?b(a):ni(a)}};
Kj.prototype.start=function(){var a=z("yt.scheduler.instance.start");a&&a()};
Kj.prototype.pause=function(){var a=z("yt.scheduler.instance.pause");a&&a()};var $e=Lj();var Mj=Fc||Gc;function Nj(a){var b=Qb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var Oj=function(){var a;return function(){a||(a=new xj("ytidb"));return a}}();
function Pj(){var a;return null==(a=Oj())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Qj=[],Rj,Sj=!1;function Tj(){var a={};for(Rj=new Uj(void 0===a.handleError?Vj:a.handleError,void 0===a.logEvent?Wj:a.logEvent);0<Qj.length;)switch(a=Qj.shift(),a.type){case "ERROR":Rj.handleError(a.payload);break;case "EVENT":Rj.logEvent(a.eventType,a.payload)}}
function Xj(a){Sj||(Rj?Rj.handleError(a):(Qj.push({type:"ERROR",payload:a}),10<Qj.length&&Qj.shift()))}
function Yj(a,b){Sj||(Rj?Rj.logEvent(a,b):(Qj.push({type:"EVENT",eventType:a,payload:b}),10<Qj.length&&Qj.shift()))}
;function Q(a){var b=Ja.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(fa(b))}
r(Q,Error);function Zj(){try{return ak(),!0}catch(a){return!1}}
function ak(a){if(void 0!==A("DATASYNC_ID"))return A("DATASYNC_ID");throw new Q("Datasync ID not set",void 0===a?"unknown":a);}
;function bk(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function ck(a){return a.substr(0,a.indexOf(":"))||a}
;var dk={},ek=(dk.AUTH_INVALID="No user identifier specified.",dk.EXPLICIT_ABORT="Transaction was explicitly aborted.",dk.IDB_NOT_SUPPORTED="IndexedDB is not supported.",dk.MISSING_INDEX="Index not created.",dk.MISSING_OBJECT_STORES="Object stores not created.",dk.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",dk.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",dk.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
dk.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",dk.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",dk.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",dk.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",dk),fk={},gk=(fk.AUTH_INVALID="ERROR",fk.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",fk.EXPLICIT_ABORT="IGNORED",fk.IDB_NOT_SUPPORTED="ERROR",fk.MISSING_INDEX=
"WARNING",fk.MISSING_OBJECT_STORES="ERROR",fk.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",fk.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",fk.QUOTA_EXCEEDED="WARNING",fk.QUOTA_MAYBE_EXCEEDED="WARNING",fk.UNKNOWN_ABORT="WARNING",fk.INCOMPATIBLE_DB_VERSION="WARNING",fk),hk={},ik=(hk.AUTH_INVALID=!1,hk.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,hk.EXPLICIT_ABORT=!1,hk.IDB_NOT_SUPPORTED=!1,hk.MISSING_INDEX=!1,hk.MISSING_OBJECT_STORES=!1,hk.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,hk.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,hk.QUOTA_EXCEEDED=!1,hk.QUOTA_MAYBE_EXCEEDED=!0,hk.UNKNOWN_ABORT=!0,hk.INCOMPATIBLE_DB_VERSION=!1,hk);function jk(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?ek[a]:c;d=void 0===d?gk[a]:d;e=void 0===e?ik[a]:e;Q.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,jk.prototype)}
r(jk,Q);function kk(a,b){jk.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},ek.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,kk.prototype)}
r(kk,jk);function lk(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,lk.prototype)}
r(lk,Error);var mk=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function nk(a,b,c,d){b=ck(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof jk)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new jk("QUOTA_EXCEEDED",a);if(Hc&&"UnknownError"===e.name)return new jk("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof lk)return new jk("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&mk.some(function(f){return e.message.includes(f)}))return new jk("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new jk("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Bb:e.name})];e.level="WARNING";return e}
function ok(a,b,c){var d=Pj();return new jk("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function pk(a){if(!a)throw Error();throw a;}
function qk(a){return a}
function rk(a){this.h=a}
function sk(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=p(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=p(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
sk.all=function(a){return new sk(new rk(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={ma:0};f.ma<a.length;f={ma:f.ma},++f.ma)tk(sk.resolve(a[f.ma]).then(function(g){return function(h){d[g.ma]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
sk.resolve=function(a){return new sk(new rk(function(b,c){a instanceof sk?a.then(b,c):b(a)}))};
sk.reject=function(a){return new sk(new rk(function(b,c){c(a)}))};
sk.prototype.then=function(a,b){var c=this,d=null!=a?a:qk,e=null!=b?b:pk;return new sk(new rk(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){uk(c,c,d,f,g)}),c.onRejected.push(function(){vk(c,c,e,f,g)})):"FULFILLED"===c.state.status?uk(c,c,d,f,g):"REJECTED"===c.state.status&&vk(c,c,e,f,g)}))};
function tk(a,b){a.then(void 0,b)}
function uk(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof sk?wk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function vk(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof sk?wk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function wk(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof sk?wk(a,b,f,d,e):d(f)},function(f){e(f)})}
;function xk(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function yk(a){return new Promise(function(b,c){xk(a,b,c)})}
function zk(a){return new sk(new rk(function(b,c){xk(a,b,c)}))}
;function Ak(a,b){return new sk(new rk(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Bk(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(P());this.i=!1}
l=Bk.prototype;l.add=function(a,b,c){return Ck(this,[a],{mode:"readwrite",O:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return Ck(this,[a],{mode:"readwrite",O:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return Ck(this,[a],{mode:"readonly",O:!0},function(c){return c.objectStore(a).count(b)})};
function Dk(a,b,c){a=a.h.createObjectStore(b,c);return new Ek(a)}
l.delete=function(a,b){return Ck(this,[a],{mode:"readwrite",O:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return Ck(this,[a],{mode:"readonly",O:!0},function(c){return c.objectStore(a).get(b)})};
function Fk(a,b){return Ck(a,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(c){c=c.objectStore("LogsRequestsStore");return zk(c.h.put(b,void 0))})}
l.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Ck(a,b,c,d){var e,f,g,h,k,m,q,u,C,v,E,F;return w(function(H){switch(H.h){case 1:var R={mode:"readonly",O:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?R.mode=c:Object.assign(R,c);e=R;a.transactionCount++;f=e.O?3:1;g=0;case 2:if(h){H.s(3);break}g++;k=Math.round(P());wa(H,4);m=a.h.transaction(b,e.mode);R=new Gk(m);R=Hk(R,d);return t(H,R,6);case 6:return q=H.i,u=Math.round(P()),Ik(a,k,u,g,void 0,b.join(),e),H.return(q);case 4:C=ya(H);v=Math.round(P());E=nk(C,a.h.name,b.join(),a.h.version);
if((F=E instanceof jk&&!E.h)||g>=f)Ik(a,k,v,g,E,b.join(),e),h=E;H.s(2);break;case 3:return H.return(Promise.reject(h))}})}
function Ik(a,b,c,d,e,f,g){b=c-b;e?(e instanceof jk&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Yj("QUOTA_EXCEEDED",{dbName:ck(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof jk&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Yj("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Jk(a,!1,d,f,b,g.tag),Xj(e)):Jk(a,!0,d,f,b,g.tag)}
function Jk(a,b,c,d,e,f){Yj("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.h.name};
function Ek(a){this.h=a}
l=Ek.prototype;l.add=function(a,b){return zk(this.h.add(a,b))};
l.autoIncrement=function(){return this.h.autoIncrement};
l.clear=function(){return zk(this.h.clear()).then(function(){})};
l.count=function(a){return zk(this.h.count(a))};
function Kk(a,b){return Lk(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?Kk(this,a):zk(this.h.delete(a))};
l.get=function(a){return zk(this.h.get(a))};
l.index=function(a){try{return new Mk(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new lk(a,this.h.name);throw b;}};
l.getName=function(){return this.h.name};
l.keyPath=function(){return this.h.keyPath};
function Lk(a,b,c){a=a.h.openCursor(b.query,b.direction);return Nk(a).then(function(d){return Ak(d,c)})}
function Gk(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=jk;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Hk(a,b){var c=new Promise(function(d,e){try{tk(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return p(d).next().value})}
Gk.prototype.abort=function(){this.h.abort();this.i=!0;throw new jk("EXPLICIT_ABORT");};
Gk.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new Ek(a),this.j.set(a,b));return b};
function Mk(a){this.h=a}
l=Mk.prototype;l.count=function(a){return zk(this.h.count(a))};
l.delete=function(a){return Ok(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return zk(this.h.get(a))};
l.getKey=function(a){return zk(this.h.getKey(a))};
l.keyPath=function(){return this.h.keyPath};
l.unique=function(){return this.h.unique};
function Ok(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Nk(a).then(function(d){return Ak(d,c)})}
function Pk(a,b){this.request=a;this.cursor=b}
function Nk(a){return zk(a).then(function(b){return b?new Pk(a,b):null})}
l=Pk.prototype;l.advance=function(a){this.cursor.advance(a);return Nk(this.request)};
l.continue=function(a){this.cursor.continue(a);return Nk(this.request)};
l.delete=function(){return zk(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return zk(this.cursor.update(a))};function Qk(a,b,c){return new Promise(function(d,e){function f(){C||(C=new Bk(g.result,{closed:u}));return C}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,m=c.zc,q=c.upgrade,u=c.closed,C;g.addEventListener("upgradeneeded",function(v){try{if(null===v.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");v.dataLoss&&"none"!==v.dataLoss&&Yj("IDB_DATA_CORRUPTED",{reason:v.dataLossMessage||"unknown reason",dbName:ck(a)});var E=f(),F=new Gk(g.transaction);
q&&q(E,function(H){return v.oldVersion<H&&v.newVersion>=H},F);
F.done.catch(function(H){e(H)})}catch(H){e(H)}});
g.addEventListener("success",function(){var v=g.result;k&&v.addEventListener("versionchange",function(){k(f())});
v.addEventListener("close",function(){Yj("IDB_UNEXPECTEDLY_CLOSED",{dbName:ck(a),dbVersion:v.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Rk(a,b,c){c=void 0===c?{}:c;return Qk(a,b,c)}
function Sk(a,b){b=void 0===b?{}:b;var c,d,e,f;return w(function(g){if(1==g.h)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),t(g,yk(c),4);
if(2!=g.h)return xa(g,0);f=ya(g);throw nk(f,a,"",-1);})}
;function Tk(a){return new Promise(function(b){Ij(function(){b()},a)})}
function Uk(a,b){this.name=a;this.options=b;this.l=!0;this.m=this.o=0;this.i=500}
Uk.prototype.j=function(a,b,c){c=void 0===c?{}:c;return Rk(a,b,c)};
Uk.prototype.delete=function(a){a=void 0===a?{}:a;return Sk(this.name,a)};
function Vk(a,b){return new jk("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Wk(a,b){if(!b)throw ok("openWithToken",ck(a.name));return a.open()}
Uk.prototype.open=function(){function a(){var f,g,h,k,m,q,u,C,v,E;return w(function(F){switch(F.h){case 1:return g=null!=(f=Error().stack)?f:"",wa(F,2),t(F,c.j(c.name,c.options.version,e),4);case 4:h=F.i;for(var H=c.options,R=[],O=p(Object.keys(H.xa)),S=O.next();!S.done;S=O.next()){S=S.value;var ka=H.xa[S],N=void 0===ka.ic?Number.MAX_VALUE:ka.ic;!(h.h.version>=ka.Va)||h.h.version>=N||h.h.objectStoreNames.contains(S)||R.push(S)}k=R;if(0===k.length){F.s(5);break}m=Object.keys(c.options.xa);q=h.objectStoreNames();
if(c.m<Nh("ytidb_reopen_db_retries",0))return c.m++,h.close(),Xj(new jk("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:m,foundObjectStores:q})),F.return(a());if(!(c.o<Nh("ytidb_remake_db_retries",1))){F.s(6);break}c.o++;if(!M("ytidb_remake_db_enable_backoff_delay")){F.s(7);break}return t(F,Tk(c.i),8);case 8:c.i*=2;case 7:return t(F,c.delete(),9);case 9:return Xj(new jk("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:m,foundObjectStores:q})),F.return(a());
case 6:throw new kk(q,m);case 5:return F.return(h);case 2:u=ya(F);if(u instanceof DOMException?"VersionError"!==u.name:"DOMError"in self&&u instanceof DOMError?"VersionError"!==u.name:!(u instanceof Object&&"message"in u)||"An attempt was made to open a database using a lower version than the existing version."!==u.message){F.s(10);break}return t(F,c.j(c.name,void 0,Object.assign({},e,{upgrade:void 0})),11);case 11:C=F.i;v=C.h.version;if(void 0!==c.options.version&&v>c.options.version+1)throw C.close(),
c.l=!1,Vk(c,v);return F.return(C);case 10:throw b(),u instanceof Error&&!M("ytidb_async_stack_killswitch")&&(u.stack=u.stack+"\n"+g.substring(g.indexOf("\n")+1)),nk(u,c.name,"",null!=(E=c.options.version)?E:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw Vk(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,zc:b,upgrade:this.options.upgrade};return this.h=d=a()};var Xk=new Uk("YtIdbMeta",{xa:{databases:{Va:1}},upgrade:function(a,b){b(1)&&Dk(a,"databases",{keyPath:"actualName"})}});
function Yk(a,b){var c;return w(function(d){if(1==d.h)return t(d,Wk(Xk,b),2);c=d.i;return d.return(Ck(c,["databases"],{O:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return zk(f.h.put(a,void 0)).then(function(){})})}))})}
function Zk(a,b){var c;return w(function(d){if(1==d.h)return a?t(d,Wk(Xk,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function $k(a,b){var c,d;return w(function(e){return 1==e.h?(c=[],t(e,Wk(Xk,b),2)):3!=e.h?(d=e.i,t(e,Ck(d,["databases"],{O:!0,mode:"readonly"},function(f){c.length=0;return Lk(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function al(a){return $k(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function bl(a,b,c){return $k(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function cl(a){var b,c;return w(function(d){if(1==d.h)return b=ak("YtIdbMeta hasAnyMeta other"),t(d,$k(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var dl,el=new function(){}(new function(){});
function fl(){var a,b,c,d;return w(function(e){switch(e.h){case 1:a=Pj();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Mj)f=/WebKit\/([0-9]+)/.exec(Qb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Qb()),f=!(f&&602<=parseInt(f[1],10)));if(f||sc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return t(e,Yk(d,el),4);case 4:return t(e,Zk("yt-idb-test-do-not-use",el),5);case 5:return e.return(!0);case 2:return ya(e),e.return(!1)}})}
function gl(){if(void 0!==dl)return dl;Sj=!0;return dl=fl().then(function(a){Sj=!1;var b;if(null!=(b=Oj())&&b.h){var c;b={hasSucceededOnce:(null==(c=Pj())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Oj())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function hl(){return z("ytglobal.idbToken_")||void 0}
function il(){var a=hl();return a?Promise.resolve(a):gl().then(function(b){(b=b?el:void 0)&&y("ytglobal.idbToken_",b);return b})}
;var jl=0;function kl(a,b){jl||(jl=$e.N(function(){var c,d,e,f,g;return w(function(h){switch(h.h){case 1:return t(h,il(),2);case 2:c=h.i;if(!c)return h.return();d=!0;wa(h,3);return t(h,bl(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.s(6);break}f=e[0];return t(h,Sk(f.actualName),7);case 7:return t(h,Zk(f.actualName,c),6);case 6:xa(h,4);break;case 3:g=ya(h),Xj(g),d=!1;case 4:$e.U(jl),jl=0,d&&kl(a,b),h.h=0}})}))}
function ll(){var a;return w(function(b){return 1==b.h?t(b,il(),2):(a=b.i)?b.return(cl(a)):b.return(!1)})}
new yd;function ml(a){if(!Zj())throw a=new jk("AUTH_INVALID",{dbName:a}),Xj(a),a;var b=ak();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function nl(a,b,c,d){var e,f,g,h,k,m;return w(function(q){switch(q.h){case 1:return f=null!=(e=Error().stack)?e:"",t(q,il(),2);case 2:g=q.i;if(!g)throw h=ok("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Xj(h),h;bk(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:ml(a);wa(q,3);return t(q,Yk(k,g),5);case 5:return t(q,Rk(k.actualName,b,d),6);case 6:return q.return(q.i);case 3:return m=ya(q),wa(q,7),t(q,Zk(k.actualName,g),9);case 9:xa(q,
8);break;case 7:ya(q);case 8:throw m;}})}
function ol(a,b,c){c=void 0===c?{}:c;return nl(a,b,!1,c)}
function pl(a,b,c){c=void 0===c?{}:c;return nl(a,b,!0,c)}
function ql(a,b){b=void 0===b?{}:b;var c,d;return w(function(e){if(1==e.h)return t(e,il(),2);if(3!=e.h){c=e.i;if(!c)return e.return();bk(a);d=ml(a);return t(e,Sk(d.actualName,b),3)}return t(e,Zk(d.actualName,c),0)})}
function rl(a,b,c){a=a.map(function(d){return w(function(e){return 1==e.h?t(e,Sk(d.actualName,b),2):t(e,Zk(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function sl(){var a=void 0===a?{}:a;var b,c;return w(function(d){if(1==d.h)return t(d,il(),2);if(3!=d.h){b=d.i;if(!b)return d.return();bk("LogsDatabaseV2");return t(d,al(b),3)}c=d.i;return t(d,rl(c,a,b),0)})}
function tl(a,b){b=void 0===b?{}:b;var c;return w(function(d){if(1==d.h)return t(d,il(),2);if(3!=d.h){c=d.i;if(!c)return d.return();bk(a);return t(d,Sk(a,b),3)}return t(d,Zk(a,c),0)})}
;function ul(a){this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.qa=function(){};
this.now=Date.now;this.wa=!1;var b;this.Ib=null!=(b=a.Ib)?b:100;var c;this.Gb=null!=(c=a.Gb)?c:1;var d;this.Eb=null!=(d=a.Eb)?d:2592E6;var e;this.Cb=null!=(e=a.Cb)?e:12E4;var f;this.Fb=null!=(f=a.Fb)?f:5E3;var g;this.v=null!=(g=a.v)?g:void 0;this.Ka=!!a.Ka;var h;this.Ja=null!=(h=a.Ja)?h:.1;var k;this.Qa=null!=(k=a.Qa)?k:10;a.handleError&&(this.handleError=a.handleError);a.qa&&(this.qa=a.qa);a.wa&&(this.wa=a.wa);this.D=a.D;this.V=a.V;this.K=a.K;this.J=a.J;this.da=a.da;this.gb=a.gb;this.fb=a.fb;this.v&&
(!this.D||this.D("networkless_logging"))&&vl(this)}
function vl(a){a.v&&!a.wa&&(a.h=!0,a.Ka&&Math.random()<=a.Ja&&a.K.Pb(a.v),wl(a),a.J.H()&&a.Aa(),a.J.W(a.gb,a.Aa.bind(a)),a.J.W(a.fb,a.lb.bind(a)))}
l=ul.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.v&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.K.set(d,this.v).then(function(e){d.id=e;c.J.H()&&xl(c,d)}).catch(function(e){xl(c,d);
yl(c,e)})}else this.da(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.v&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.D&&this.D("nwl_skip_retry")&&(e.skipRetry=c);if(this.J.H()||this.D&&this.D("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return w(function(k){if(1==k.h)return t(k,d.K.set(e,d.v).catch(function(m){yl(d,m)}),2);
f(g,h);k.h=0})}}this.da(a,b,e.skipRetry)}else this.K.set(e,this.v).catch(function(g){d.da(a,b,e.skipRetry);
yl(d,g)})}else this.da(a,b,this.D&&this.D("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.v&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.K.oa(d.id,c.v):e=!0;c.J.ca&&c.D&&c.D("vss_network_hint")&&c.J.ca(!0);f(g,h)};
this.da(d.url,d.options);this.K.set(d,this.v).then(function(g){d.id=g;e&&c.K.oa(d.id,c.v)}).catch(function(g){yl(c,g)})}else this.da(a,b)};
l.Aa=function(){var a=this;if(!this.v)throw ok("throttleSend");this.i||(this.i=this.V.N(function(){var b;return w(function(c){if(1==c.h)return t(c,a.K.ub("NEW",a.v),2);if(3!=c.h)return b=c.i,b?t(c,xl(a,b),3):(a.lb(),c.return());a.i&&(a.i=0,a.Aa());c.h=0})},this.Ib))};
l.lb=function(){this.V.U(this.i);this.i=0};
function xl(a,b){var c,d;return w(function(e){switch(e.h){case 1:if(!a.v)throw c=ok("immediateSend"),c;if(void 0===b.id){e.s(2);break}return t(e,a.K.Zb(b.id,a.v),3);case 3:(d=e.i)?b=d:a.qa(Error("The request cannot be found in the database."));case 2:if(zl(a,b,a.Eb)){e.s(4);break}a.qa(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.s(5);break}return t(e,a.K.oa(b.id,a.v),5);case 5:return e.return();case 4:b.skipRetry||(b=Al(a,b));if(!b){e.s(0);break}if(!b.skipRetry||
void 0===b.id){e.s(8);break}return t(e,a.K.oa(b.id,a.v),8);case 8:a.da(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Al(a,b){if(!a.v)throw ok("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.h){case 1:g=Bl(f);if(!(a.D&&a.D("nwl_consider_error_code")&&g||a.D&&!a.D("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Qa)){m.s(2);break}if(!a.J.ea){m.s(3);break}return t(m,a.J.ea(),3);case 3:if(a.J.H()){m.s(2);break}c(e,f);if(!a.D||!a.D("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){m.s(6);break}return t(m,a.K.hb(b.id,a.v,!1),6);case 6:return m.return();case 2:if(a.D&&a.D("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Qa)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.s(8);break}return b.sendCount<a.Gb?t(m,a.K.hb(b.id,a.v),12):t(m,a.K.oa(b.id,a.v),8);case 12:a.V.N(function(){a.J.H()&&a.Aa()},a.Fb);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.s(2):t(h,a.K.oa(b.id,a.v),2);a.J.ca&&a.D&&a.D("vss_network_hint")&&a.J.ca(!0);d(e,f);h.h=0})};
return b}
function zl(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function wl(a){if(!a.v)throw ok("retryQueuedRequests");a.K.ub("QUEUED",a.v).then(function(b){b&&!zl(a,b,a.Cb)?a.V.N(function(){return w(function(c){if(1==c.h)return void 0===b.id?c.s(2):t(c,a.K.hb(b.id,a.v),2);wl(a);c.h=0})}):a.J.H()&&a.Aa()})}
function yl(a,b){a.Kb&&!a.J.H()?a.Kb(b):a.handleError(b)}
function Bl(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function Cl(a,b){this.version=a;this.args=b}
;function Dl(a,b){this.topic=a;this.h=b}
Dl.prototype.toString=function(){return this.topic};var El=z("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.ta;L.prototype.publish=L.prototype.ja;L.prototype.clear=L.prototype.clear;y("ytPubsub2Pubsub2Instance",El);var Fl=z("ytPubsub2Pubsub2SubscribedKeys")||{};y("ytPubsub2Pubsub2SubscribedKeys",Fl);var Gl=z("ytPubsub2Pubsub2TopicToKeys")||{};y("ytPubsub2Pubsub2TopicToKeys",Gl);var Hl=z("ytPubsub2Pubsub2IsAsync")||{};y("ytPubsub2Pubsub2IsAsync",Hl);
y("ytPubsub2Pubsub2SkipSubKey",null);function Il(a,b){var c=Jl();c&&c.publish.call(c,a.toString(),a,b)}
function Kl(a){var b=Ll,c=Jl();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=z("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Fl[d])try{if(f&&b instanceof Dl&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ia){var m=new h;h.ia=m.version}var q=h.ia}catch(H){}if(!q||k.version!=q)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{q=Reflect;var u=q.construct;
var C=k.args,v=C.length;if(0<v){var E=Array(v);for(k=0;k<v;k++)E[k]=C[k];var F=E}else F=[];f=u.call(q,h,F)}catch(H){throw H.message="yt.pubsub2.Data.deserialize(): "+H.message,H;}}catch(H){throw H.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+H.message,H;}a.call(window,f)}catch(H){Th(H)}},Hl[b.toString()]?z("yt.scheduler.instance")?$e.N(g):mi(g,0):g())});
Fl[d]=!0;Gl[b.toString()]||(Gl[b.toString()]=[]);Gl[b.toString()].push(d);return d}
function Ml(){var a=Nl,b=Kl(function(c){a.apply(void 0,arguments);Ol(b)});
return b}
function Ol(a){var b=Jl();b&&("number"===typeof a&&(a=[a]),eb(a,function(c){b.unsubscribeByKey(c);delete Fl[c]}))}
function Jl(){return z("ytPubsub2Pubsub2Instance")}
;function Pl(a,b){Uk.call(this,a,b);this.options=b;bk(a)}
r(Pl,Uk);function Ql(a,b){var c;return function(){c||(c=new Pl(a,b));return c}}
Pl.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.ib?pl:ol)(a,b,Object.assign({},c))};
Pl.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.ib?tl:ql)(this.name,a)};
function Rl(a,b){return Ql(a,b)}
;var Sl;
function Tl(){if(Sl)return Sl();var a={};Sl=Rl("LogsDatabaseV2",{xa:(a.LogsRequestsStore={Va:2},a),ib:!1,upgrade:function(b,c,d){c(2)&&Dk(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Sl()}
;function Ul(a){return Wk(Tl(),a)}
function Vl(a,b){var c,d,e,f;return w(function(g){if(1==g.h)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},t(g,Ul(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:A("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),t(g,Fk(d,e),3);f=g.i;c.Ac=P();Wl(c);return g.return(f)})}
function Xl(a,b){var c,d,e,f,g,h,k;return w(function(m){if(1==m.h)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},t(m,Ul(b),2);if(3!=m.h)return d=m.i,e=A("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,P()],h=IDBKeyRange.bound(f,g),k=void 0,t(m,Ck(d,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(q){return Ok(q.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(u){u.getValue()&&(k=u.getValue(),"NEW"===a&&(k.status="QUEUED",
u.update(k)))})}),3);
c.Ac=P();Wl(c);return m.return(k)})}
function Yl(a,b){var c;return w(function(d){if(1==d.h)return t(d,Ul(b),2);c=d.i;return d.return(Ck(c,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",zk(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Zl(a,b,c){c=void 0===c?!0:c;var d;return w(function(e){if(1==e.h)return t(e,Ul(b),2);d=e.i;return e.return(Ck(d,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),zk(g.h.put(h,void 0)).then(function(){return h})):sk.resolve(void 0)})}))})}
function $l(a,b){var c;return w(function(d){if(1==d.h)return t(d,Ul(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function am(a){var b,c;return w(function(d){if(1==d.h)return t(d,Ul(a),2);b=d.i;c=P()-2592E6;return t(d,Ck(b,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(e){return Lk(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function bm(){return w(function(a){return t(a,sl(),0)})}
function Wl(a){M("nwl_csi_killswitch")||.01>=Math.random()&&Il("nwl_transaction_latency_payload",a)}
;var cm={},dm=Rl("ServiceWorkerLogsDatabase",{xa:(cm.SWHealthLog={Va:1},cm),ib:!0,upgrade:function(a,b){b(1)&&Dk(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function em(a){return Wk(dm(),a)}
function fm(a){var b,c;return w(function(d){if(1==d.h)return t(d,em(a),2);b=d.i;c=P()-2592E6;return t(d,Ck(b,["SWHealthLog"],{mode:"readwrite",O:!0},function(e){return Lk(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function gm(a){var b;return w(function(c){if(1==c.h)return t(c,em(a),2);b=c.i;return t(c,b.clear("SWHealthLog"),0)})}
;var hm={},im=0;
function jm(a){var b=void 0===b?"":b;if(a)if(b)Ri(a,void 0,"POST",b);else if(A("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Ri(a,void 0,"GET","");else{b:{try{var c=new ab({url:a});if(c.j&&c.i||c.l){var d=ac(bc(5,a)),e;if(!(e=!d||!d.endsWith("/aclk"))){var f=a.search(ic),g=hc(a,0,"ri",f);if(0>g)var h=null;else{var k=a.indexOf("&",g);if(0>k||k>f)k=f;h=decodeURIComponent(a.slice(g+3,-1!==k?k:0).replace(/\+/g," "))}e="1"!==h}var m=!e;break b}}catch(u){}m=!1}if(m){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,
"")){var q=!0;break b}}catch(u){}q=!1}b=q?!0:!1}else b=!1;b||km(a)}}
function km(a){var b=new Image,c=""+im++;hm[c]=b;b.onload=b.onerror=function(){delete hm[c]};
b.src=a}
;function lm(){this.h=new Map;this.i=!1}
function mm(){if(!lm.h){var a=z("yt.networkRequestMonitor.instance")||new lm;y("yt.networkRequestMonitor.instance",a);lm.h=a}return lm.h}
lm.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
lm.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
lm.prototype.removeParams=function(a){return a.split("?")[0]};
lm.prototype.removeParams=lm.prototype.removeParams;lm.prototype.isEndpointCFR=lm.prototype.isEndpointCFR;lm.prototype.requestComplete=lm.prototype.requestComplete;lm.getInstance=mm;var nm;function om(){nm||(nm=new xj("yt.offline"));return nm}
function pm(a){if(M("offline_error_handling")){var b=om().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);om().set("errors",b,2592E3,!0)}}
function qm(){if(M("offline_error_handling")){var a=om().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new Q(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;Th(c)}om().set("errors",{},2592E3,!0)}}}
;var rm=Nh("network_polling_interval",3E4);function sm(){Te.call(this);var a=this;this.T=0;this.A=this.m=!1;this.j=this.Za();M("use_shared_nsm")?(this.i=Ze(),M("use_shared_nsm_and_keep_yt_online_updated")&&(this.i.W("networkstatus-online",function(){a.j=!0;a.A&&qm()}),this.i.W("networkstatus-offline",function(){a.j=!1}))):(tm(this),um(this))}
r(sm,Te);function vm(){if(!sm.h){var a=z("yt.networkStatusManager.instance")||new sm;y("yt.networkStatusManager.instance",a);sm.h=a}return sm.h}
l=sm.prototype;l.H=function(){if(M("use_shared_nsm")&&this.i){var a;return null==(a=this.i)?void 0:a.H()}return this.j};
l.ca=function(a){if(M("use_shared_nsm")&&this.i){var b;null!=(b=this.i)&&(b.i=a)}else a!==this.j&&(this.j=a)};
l.ac=function(a){!M("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.T||wm(this))};
l.Za=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.Sb=function(){this.A=!0};
l.W=function(a,b){return M("use_shared_nsm")&&this.i?this.i.W(a,b):Te.prototype.W.call(this,a,b)};
function um(a){window.addEventListener("online",function(){return w(function(b){if(1==b.h)return t(b,a.ea(),2);a.A&&qm();b.h=0})})}
function tm(a){window.addEventListener("offline",function(){return w(function(b){return t(b,a.ea(),0)})})}
function wm(a){a.T=Gj(function(){return w(function(b){if(1==b.h)return a.j?a.Za()||!a.m?b.s(3):t(b,a.ea(),3):t(b,a.ea(),3);wm(a);b.h=0})},rm)}
l.ea=function(a){var b=this;if(M("use_shared_nsm")&&this.i){var c=Xe(this.i,a);c.then(function(d){M("use_cfr_monitor")&&mm().requestComplete("generate_204",d)});
return c}return this.u?this.u:this.u=new Promise(function(d){var e,f,g,h;return w(function(k){switch(k.h){case 1:return e=window.AbortController?new window.AbortController:void 0,g=null==(f=e)?void 0:f.signal,h=!1,wa(k,2,3),e&&(b.M=$e.N(function(){e.abort()},a||2E4)),t(k,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:za(k);M("use_cfr_monitor")&&mm().requestComplete("generate_204",h);b.u=void 0;b.M&&$e.U(b.M);h!==b.j&&(b.j=h,b.j&&b.m?Ue(b,"ytnetworkstatus-online"):b.m&&Ue(b,"ytnetworkstatus-offline"));d(h);Aa(k);break;case 2:ya(k),h=!1,k.s(3)}})})};
sm.prototype.sendNetworkCheckRequest=sm.prototype.ea;sm.prototype.listen=sm.prototype.W;sm.prototype.enableErrorFlushing=sm.prototype.Sb;sm.prototype.getWindowStatus=sm.prototype.Za;sm.prototype.monitorNetworkStatusChange=sm.prototype.ac;sm.prototype.networkStatusHint=sm.prototype.ca;sm.prototype.isNetworkAvailable=sm.prototype.H;sm.getInstance=vm;function xm(a){a=void 0===a?{}:a;Te.call(this);var b=this;this.j=this.M=0;this.m="ytnetworkstatus-offline";this.u="ytnetworkstatus-online";M("use_shared_nsm")&&(this.m="networkstatus-offline",this.u="networkstatus-online");this.i=vm();var c=z("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.i);c&&c(a.rb);a.zb&&(c=z("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.i))&&c();if(c=z("yt.networkStatusManager.instance.listen").bind(this.i))a.Sa?(this.Sa=a.Sa,c(this.u,
function(){ym(b,"publicytnetworkstatus-online")}),c(this.m,function(){ym(b,"publicytnetworkstatus-offline")})):(c(this.u,function(){Ue(b,"publicytnetworkstatus-online")}),c(this.m,function(){Ue(b,"publicytnetworkstatus-offline")}))}
r(xm,Te);xm.prototype.H=function(){var a=z("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
xm.prototype.ca=function(a){var b=z("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
xm.prototype.ea=function(a){var b=this,c;return w(function(d){c=z("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return M("skip_network_check_if_cfr")&&mm().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ca((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.H())})):c?d.return(c(a)):d.return(!0)})};
function ym(a,b){a.Sa?a.j?($e.U(a.M),a.M=$e.N(function(){a.A!==b&&(Ue(a,b),a.A=b,a.j=P())},a.Sa-(P()-a.j))):(Ue(a,b),a.A=b,a.j=P()):Ue(a,b)}
;var zm;function Am(){ul.call(this,{K:{Pb:am,oa:$l,ub:Xl,Zb:Yl,hb:Zl,set:Vl},J:Bm(),handleError:Th,qa:Uh,da:Cm,now:P,Kb:pm,V:Lj(),gb:"publicytnetworkstatus-online",fb:"publicytnetworkstatus-offline",Ka:!0,Ja:.1,Qa:Nh("potential_esf_error_limit",10),D:M,wa:!(Zj()&&Dm())});this.j=new yd;M("networkless_immediately_drop_all_requests")&&bm();tl("LogsDatabaseV2")}
r(Am,ul);function Em(){var a=z("yt.networklessRequestController.instance");a||(a=new Am,y("yt.networklessRequestController.instance",a),M("networkless_logging")&&il().then(function(b){a.v=b;vl(a);a.j.resolve();a.Ka&&Math.random()<=a.Ja&&a.v&&fm(a.v);M("networkless_immediately_drop_sw_health_store")&&Fm(a)}));
return a}
Am.prototype.writeThenSend=function(a,b){b||(b={});Zj()||(this.h=!1);ul.prototype.writeThenSend.call(this,a,b)};
Am.prototype.sendThenWrite=function(a,b,c){b||(b={});Zj()||(this.h=!1);ul.prototype.sendThenWrite.call(this,a,b,c)};
Am.prototype.sendAndWrite=function(a,b){b||(b={});Zj()||(this.h=!1);ul.prototype.sendAndWrite.call(this,a,b)};
Am.prototype.awaitInitialization=function(){return this.j.promise};
function Fm(a){var b;w(function(c){if(!a.v)throw b=ok("clearSWHealthLogsDb"),b;return c.return(gm(a.v).catch(function(d){a.handleError(d)}))})}
function Cm(a,b,c){M("use_cfr_monitor")&&Gm(a,b);var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(P());c&&0===Object.keys(b).length?jm(a):ti(a,b)}
function Bm(){zm||(zm=new xm({zb:!0,rb:!0}));return zm}
function Gm(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){mm().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){mm().requestComplete(a,!0);d(e,f)}}
function Dm(){return M("embeds_web_nwl_disable_nocookie")?"www.youtube-nocookie.com"!==cc(document.location.toString()):!0}
;var Hm=!1,Im=0,Jm=0,Km,Lm=x.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Hm,potentialEsfErrorCounter:Jm};y("ytNetworklessLoggingInitializationOptions",Lm);
function Mm(){var a;w(function(b){switch(b.h){case 1:return t(b,il(),2);case 2:a=b.i;if(!a||!Zj()&&!M("nwl_init_require_datasync_id_killswitch")||!Dm()){b.s(0);break}Hm=!0;Lm.isNwlInitialized=Hm;if(!M("use_new_nwl_initialization")){b.s(4);break}return t(b,Em().awaitInitialization(),5);case 5:return b.return();case 4:return t(b,tl("LogsDatabaseV2"),6);case 6:if(!(.1>=Math.random())){b.s(7);break}return t(b,am(a),8);case 8:return t(b,fm(a),7);case 7:Nm();Om().H()&&Pm();Om().W("publicytnetworkstatus-online",
Pm);Om().W("publicytnetworkstatus-offline",Qm);if(!M("networkless_immediately_drop_sw_health_store")){b.s(10);break}return t(b,Rm(),10);case 10:if(M("networkless_immediately_drop_all_requests"))return t(b,bm(),0);b.s(0)}})}
function Sm(a,b){function c(d){var e=Om().H();if(!Tm()||!d||e&&M("vss_networkless_bypass_write"))Um(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};Vl(f,d).then(function(g){f.id=g;Om().H()&&Vm(f)}).catch(function(g){Vm(f);
Om().H()?Th(g):pm(g)})}}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?il().then(function(d){c(d)}):c(hl())}
function Wm(a,b){function c(d){if(Tm()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,m){M("use_cfr_monitor")&&mm().requestComplete(e.url,!0);void 0!==e.id?$l(e.id,d):f=!0;M("vss_network_hint")&&Om().ca(!0);g(k,m)};
if(M("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,m){mm().requestComplete(e.url,!1);h(k,m)}}Um(e.url,e.options);
Vl(e,d).then(function(k){e.id=k;f&&$l(e.id,d)}).catch(function(k){Om().H()?Th(k):pm(k)})}else Um(a,b)}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?il().then(function(d){c(d)}):c(hl())}
function Pm(){var a=hl();if(!a)throw ok("throttleSend");Im||(Im=$e.N(function(){var b;return w(function(c){if(1==c.h)return t(c,Xl("NEW",a),2);if(3!=c.h)return b=c.i,b?t(c,Vm(b),3):(Qm(),c.return());Im&&(Im=0,Pm());c.h=0})},100))}
function Qm(){$e.U(Im);Im=0}
function Vm(a){var b,c,d;return w(function(e){switch(e.h){case 1:b=hl();if(!b)throw c=ok("immediateSend"),c;if(void 0===a.id){e.s(2);break}return t(e,Yl(a.id,b),3);case 3:(d=e.i)?a=d:Uh(Error("The request cannot be found in the database."));case 2:if(Xm(a,2592E6)){e.s(4);break}Uh(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.s(5);break}return t(e,$l(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=Ym(a));var f=a,g,h;if(null==f?0:null==(g=f.options)?
0:null==(h=g.postParams)?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(P());a=f;if(!a){e.s(0);break}if(!a.skipRetry||void 0===a.id){e.s(8);break}return t(e,$l(a.id,b),8);case 8:Um(a.url,a.options,!!a.skipRetry),e.h=0}})}
function Ym(a){var b=hl();if(!b)throw ok("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.h){case 1:M("use_cfr_monitor")&&mm().requestComplete(a.url,!1);g=Bl(f);if(!(M("nwl_consider_error_code")&&g||!M("nwl_consider_error_code")&&Zm()<=Nh("potential_esf_error_limit",10))){m.s(2);break}if(M("skip_checking_network_on_cfr_failure")&&(!M("skip_checking_network_on_cfr_failure")||mm().isEndpointCFR(a.url))){m.s(3);break}return t(m,Om().ea(),3);case 3:if(Om().H()){m.s(2);break}c(e,f);if(!M("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){m.s(6);break}return t(m,Zl(a.id,b,!1),6);case 6:return m.return();case 2:if(M("nwl_consider_error_code")&&!g&&Zm()>Nh("potential_esf_error_limit",10))return m.return();z("ytNetworklessLoggingInitializationOptions")&&Lm.potentialEsfErrorCounter++;Jm++;if(void 0===(null==(k=a)?void 0:k.id)){m.s(8);break}return 1>a.sendCount?t(m,Zl(a.id,b),12):t(m,$l(a.id,b),8);case 12:$e.N(function(){Om().H()&&Pm()},5E3);
case 8:c(e,f),m.h=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.h)return M("use_cfr_monitor")&&mm().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.s(2):t(h,$l(a.id,b),2);M("vss_network_hint")&&Om().ca(!0);d(e,f);h.h=0})};
return a}
function Xm(a,b){a=a.timestamp;return P()-a>=b?!1:!0}
function Nm(){var a=hl();if(!a)throw ok("retryQueuedRequests");Xl("QUEUED",a).then(function(b){b&&!Xm(b,12E4)?$e.N(function(){return w(function(c){if(1==c.h)return void 0===b.id?c.s(2):t(c,Zl(b.id,a),2);Nm();c.h=0})}):Om().H()&&Pm()})}
function Rm(){var a,b;return w(function(c){a=hl();if(!a)throw b=ok("clearSWHealthLogsDb"),b;return c.return(gm(a).catch(function(d){Th(d)}))})}
function Om(){if(M("use_new_nwl"))return Bm();Km||(Km=new xm({zb:!0,rb:!0}));return Km}
function Um(a,b,c){c&&0===Object.keys(b).length?jm(a):ti(a,b)}
function Tm(){return z("ytNetworklessLoggingInitializationOptions")?Lm.isNwlInitialized:Hm}
function Zm(){return z("ytNetworklessLoggingInitializationOptions")?Lm.potentialEsfErrorCounter:Jm}
;function $m(a){var b=this;this.config_=null;a?this.config_=a:nj()&&(this.config_=oj());Gj(function(){Dj(b)},5E3)}
$m.prototype.isReady=function(){!this.config_&&nj()&&(this.config_=oj());return!!this.config_};
function Ej(a,b,c,d){function e(E){E=void 0===E?!1:E;var F;if(d.retry&&"www.youtube-nocookie.com"!=h&&(E||M("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(F=Bj(b,c,m,k)),F)){var H=g.onSuccess,R=g.onFetchSuccess;g.onSuccess=function(O,S){Cj(F);H(O,S)};
c.onFetchSuccess=function(O,S){Cj(F);R(O,S)}}try{E&&d.retry&&!d.Ab.bypassNetworkless?(g.method="POST",d.Ab.writeThenSend?M("use_new_nwl_wts")?Em().writeThenSend(v,g):Sm(v,g):M("use_new_nwl_saw")?Em().sendAndWrite(v,g):Wm(v,g)):(g.method="POST",g.postParams||(g.postParams={}),ti(v,g))}catch(O){if("InvalidAccessError"==O.name)F&&(Cj(F),F=0),Uh(Error("An extension is blocking network request."));
else throw O;}F&&Gj(function(){Dj(a)},5E3)}
!A("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Uh(new Q("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Q("innertube xhrclient not ready",b,c,d);Th(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(E,F){if(d.onSuccess)d.onSuccess(F)},
onFetchSuccess:function(E){if(d.onSuccess)d.onSuccess(E)},
onError:function(E,F){if(d.onError)d.onError(F)},
onFetchError:function(E){if(d.onError)d.onError(E)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Wb)&&(h=f);var k=a.config_.Yb||!1,m=vj(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var q="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,u={alt:"json"},C=a.config_.Xb&&f;C=C&&f.startsWith("Bearer");C||(u.key=a.config_.innertubeApiKey);var v=fi(""+h+q,u||{},!0);M("use_new_nwl")&&Em().h||!M("use_new_nwl")&&
Tm()?gl().then(function(E){e(E)}):e(!1)}
;var an={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},bn={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};var cn=0,dn=uc?"webkit":tc?"moz":rc?"ms":qc?"o":"";y("ytDomDomGetNextId",z("ytDomDomGetNextId")||function(){return++cn});var en={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function fn(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in en||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function gn(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
fn.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
fn.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
fn.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var nb=x.ytEventsEventsListeners||{};y("ytEventsEventsListeners",nb);var hn=x.ytEventsEventsCounter||{count:0};y("ytEventsEventsCounter",hn);
function jn(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&tb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var kn=cb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function ln(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=jn(a,b,c,d);if(e)return e;e=++hn.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new fn(h);if(!Ld(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new fn(h);
h.currentTarget=a;return c.call(a,h)};
g=Sh(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),kn()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);nb[e]=[a,b,c,g,d];return e}
function mn(a){a&&("string"==typeof a&&(a=[a]),eb(a,function(b){if(b in nb){var c=nb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?kn()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete nb[b]}}))}
;var nn=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function on(a){this.L=a;this.i=null;this.m=0;this.A=null;this.u=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.T=ln(window,"mousemove",Wa(this.Y,this));a=Wa(this.M,this);"function"===typeof a&&(a=Sh(a));this.fa=window.setInterval(a,25)}
Ya(on,K);on.prototype.Y=function(a){void 0===a.h&&gn(a);var b=a.h;void 0===a.i&&gn(a);this.i=new Hd(b,a.i)};
on.prototype.M=function(){if(this.i){var a=nn();if(0!=this.m){var b=this.A,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.u)/this.u)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.L();this.u=d}this.m=a;this.A=this.i;this.l=(this.l+1)%4}};
on.prototype.I=function(){window.clearInterval(this.fa);mn(this.T)};var pn={};
function qn(a){var b=void 0===a?{}:a;a=void 0===b.ec?!1:b.ec;b=void 0===b.Tb?!0:b.Tb;if(null==z("_lact",window)){var c=parseInt(A("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;y("_lact",c,window);y("_fact",c,window);-1==c&&rn();ln(document,"keydown",rn);ln(document,"keyup",rn);ln(document,"mousedown",rn);ln(document,"mouseup",rn);a?ln(window,"touchmove",function(){sn("touchmove",200)},{passive:!0}):(ln(window,"resize",function(){sn("resize",200)}),b&&ln(window,"scroll",function(){sn("scroll",200)}));
new on(function(){sn("mouse",100)});
ln(document,"touchstart",rn,{passive:!0});ln(document,"touchend",rn,{passive:!0})}}
function sn(a,b){pn[a]||(pn[a]=!0,$e.N(function(){rn();pn[a]=!1},b))}
function rn(){null==z("_lact",window)&&qn();var a=Date.now();y("_lact",a,window);-1==z("_fact",window)&&y("_fact",a,window);(a=z("ytglobal.ytUtilActivityCallback_"))&&a()}
function tn(){var a=z("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var un=x.ytPubsubPubsubInstance||new L,vn=x.ytPubsubPubsubSubscribedKeys||{},wn=x.ytPubsubPubsubTopicToKeys||{},xn=x.ytPubsubPubsubIsSynchronous||{};function yn(a,b){var c=zn();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){vn[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{xn[a]?f():mi(f,0)}catch(g){Th(g)}},void 0);
vn[d]=!0;wn[a]||(wn[a]=[]);wn[a].push(d);return d}return 0}
function An(a){var b=zn();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),eb(a,function(c){b.unsubscribeByKey(c);delete vn[c]}))}
function Bn(a,b){var c=zn();c&&c.publish.apply(c,arguments)}
function Cn(a){var b=zn();if(b)if(b.clear(a),a)Dn(a);else for(var c in wn)Dn(c)}
function zn(){return x.ytPubsubPubsubInstance}
function Dn(a){wn[a]&&(a=wn[a],eb(a,function(b){vn[b]&&delete vn[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.ta;L.prototype.publish=L.prototype.ja;L.prototype.clear=L.prototype.clear;y("ytPubsubPubsubInstance",un);y("ytPubsubPubsubTopicToKeys",wn);y("ytPubsubPubsubIsSynchronous",xn);y("ytPubsubPubsubSubscribedKeys",vn);var Un=Nh("initial_gel_batch_timeout",2E3),to=Math.pow(2,16)-1,uo=void 0;function vo(){this.j=this.h=this.i=0}
var wo=new vo,xo=new vo,yo=!0,zo=x.ytLoggingTransportGELQueue_||new Map;y("ytLoggingTransportGELQueue_",zo);var Ao=x.ytLoggingTransportGELProtoQueue_||new Map;y("ytLoggingTransportGELProtoQueue_",Ao);var Bo=x.ytLoggingTransportTokensToCttTargetIds_||{};y("ytLoggingTransportTokensToCttTargetIds_",Bo);var Co=x.ytLoggingTransportTokensToJspbCttTargetIds_||{};y("ytLoggingTransportTokensToJspbCttTargetIds_",Co);
function Do(a,b){if("log_event"===a.endpoint){var c=Eo(a),d=zo.get(c)||[];zo.set(c,d);d.push(a.payload);Fo(b,d,c)}}
function Go(a,b){if("log_event"===a.endpoint){var c=Eo(a,!0),d=Ao.get(c)||[];Ao.set(c,d);a=a.payload.toJSON();d.push(a);Fo(b,d,c,!0)}}
function Fo(a,b,c,d){d=void 0===d?!1:d;a&&(uo=new a);a=Nh("tvhtml5_logging_max_batch")||Nh("web_logging_max_batch")||100;var e=P(),f=d?xo.j:wo.j;b.length>=a?Ho({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d):10<=e-f&&(Io(d),d?xo.j=e:wo.j=e)}
function Jo(a,b){if("log_event"===a.endpoint){var c=Eo(a),d=new Map;d.set(c,[a.payload]);b&&(uo=new b);return new Tf(function(e){uo&&uo.isReady()?Ko(d,e,{bypassNetworkless:!0},!0):e()})}}
function Lo(a,b){if("log_event"===a.endpoint){var c=Eo(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(uo=new b);return new Tf(function(e){uo&&uo.isReady()?Mo(d,e,{bypassNetworkless:!0},!0):e()})}}
function Eo(a,b){var c="";if(a.va)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Bh;c.videoId?d.setVideoId(c.videoId):c.playlistId&&kd(d,2,Ch,c.playlistId);Co[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Bo[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Ho(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new Tf(function(d){c?(ni(xo.i),ni(xo.h),xo.h=0):(ni(wo.i),ni(wo.h),wo.h=0);if(uo&&uo.isReady())if(void 0!==b)if(c){var e=new Map,f=Ao.get(b)||[];e.set(b,f);Mo(e,d,a);Ao.delete(b)}else e=new Map,f=zo.get(b)||[],e.set(b,f),Ko(e,d,a),zo.delete(b);else c?(Mo(Ao,d,a),Ao.clear()):(Ko(zo,d,a),zo.clear());else Io(c),d()})}
function Io(a){a=void 0===a?!1:a;if(M("web_gel_timeout_cap")&&(!a&&!wo.h||a&&!xo.h)){var b=mi(function(){Ho({writeThenSend:!0},void 0,a)},6E4);
a?xo.h=b:wo.h=b}ni(a?xo.i:wo.i);b=A("LOGGING_BATCH_TIMEOUT",Nh("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&yo&&(b=Un);b=mi(function(){Ho({writeThenSend:!0},void 0,a)},b);
a?xo.i=b:wo.i=b}
function Ko(a,b,c,d){var e=uo;c=void 0===c?{}:c;var f=Math.round(P()),g=a.size;a=p(a);for(var h=a.next();!h.done;h=a.next()){var k=p(h.value);h=k.next().value;var m=k=k.next().value;k=vb({context:pj(e.config_||oj())});k.events=m;(m=Bo[h])&&No(k,h,m);delete Bo[h];h="visitorOnlyApprovedKey"===h;Oo(k,f,h);Po(c);Ej(e,"log_event",k,Qo(c,h,function(){g--;g||b()},function(){g--;
g||b()},d));
yo=!1}}
function Mo(a,b,c,d){var e=uo;c=void 0===c?{}:c;var f=Math.round(P()),g=a.size;a=p(a);for(var h=a.next();!h.done;h=a.next()){var k=p(h.value);h=k.next().value;var m=k=k.next().value;k=new Dh;var q=uj(e.config_||oj());I(k,1,q);m=Ro(m);for(q=0;q<m.length;q++)pd(k,3,xh,m[q]);(m=Co[h])&&So(k,h,m);delete Co[h];h="visitorOnlyApprovedKey"===h;To(k,f,h);Po(c);a:{Uc=!0;try{var u=JSON.stringify(k.toJSON(),ud);break a}finally{Uc=!1}u=void 0}k=u;h=Qo(c,h,function(){g--;g||b()},function(){g--;
g||b()},d);
h.headers={"Content-Type":"application/json+protobuf"};h.postBodyFormat="JSPB";h.postBody=k;Ej(e,"log_event","",h);yo=!1}}
function Po(a){M("always_send_and_write")&&(a.writeThenSend=!1)}
function Qo(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,Ab:a,va:b,Vo:!!e,headers:{},postBodyFormat:"",postBody:""}}
function Oo(a,b,c){a.requestTimeMs=String(b);M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=A("EVENT_ID"))&&(c=Uo(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function To(a,b,c){D(a,2,b);if(!c&&(b=A("EVENT_ID"))){c=Uo();var d=new Ah;D(d,1,b);D(d,2,c);I(a,5,d)}}
function Uo(){var a=A("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*to/2));a++;a>to&&(a=1);Kh("BATCH_CLIENT_COUNTER",a);return a}
function No(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function So(a,b,c){if(id(c,1===ld(c,Ch)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;I(a,4,c);a=md(a,Mg,1)||new Mg;c=md(a,Kg,3)||new Kg;var e=new Jg;e.setToken(b);D(e,1,d);pd(c,12,Jg,e);I(a,3,c)}
function Ro(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new xh(a[c]))}catch(d){Th(new Q("Transport failed to deserialize "+String(a[c])))}return b}
;var Vo=x.ytLoggingGelSequenceIdObj_||{};y("ytLoggingGelSequenceIdObj_",Vo);
function Wo(a,b,c,d){d=void 0===d?{}:d;if(M("lr_drop_other_and_business_payloads")){if(bn[a]||an[a])return}else if(M("lr_drop_other_payloads")&&bn[a])return;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=tn();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.X&&(a=e.context,b=d.X,b={index:Xo(b),groupKey:b},a.sequence=b,d.sb&&delete Vo[d.X]);(d.nc?Jo:Do)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
va:d.va},c)}
function Xo(a){Vo[a]=a in Vo?Vo[a]+1:0;return Vo[a]}
;function Wj(a,b,c){c=void 0===c?{}:c;var d=$m;A("ytLoggingEventsDefaultDisabled",!1)&&$m==$m&&(d=null);Wo(a,b,d,c)}
;var Yo=[{eb:function(a){return"Cannot read property '"+a.key+"'"},
Pa:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{eb:function(a){return"Cannot call '"+a.key+"'"},
Pa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{eb:function(a){return a.key+" is not defined"},
Pa:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var $o={ha:[],ga:[{ka:Zo,weight:500}]};function Zo(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function ap(){this.ga=[];this.ha=[]}
var bp;function cp(){if(!bp){var a=bp=new ap;a.ha.length=0;a.ga.length=0;$o.ha&&a.ha.push.apply(a.ha,$o.ha);$o.ga&&a.ga.push.apply(a.ga,$o.ga)}return bp}
;var dp=new L;function ep(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=fp(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=fp(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=fp(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function fp(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function gp(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=hp(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=ep(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?hp(e+".ve",f,g,h):0;d+=g;d+=hp(e,a[e],b,c);if(500<d)break}}else c[b]=ip(a),d+=c[b].length;else c[b]=ip(a),d+=c[b].length;return d}
function hp(a,b,c,d){c+="."+a;a=ip(b);d[c]=a;return c.length+a.length}
function ip(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var jp=x.ytLoggingGelSequenceIdObj_||{};y("ytLoggingGelSequenceIdObj_",jp);function kp(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||P());D(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=tn();d=new wh;D(d,1,c.timestamp||!isFinite(e)?-1:e);if(M("log_sequence_info_on_gel_web")&&c.X){e=c.X;var f=Xo(e),g=new vh;D(g,2,f);D(g,1,e);I(d,3,g);c.sb&&delete jp[c.X]}I(a,33,d);(c.nc?Lo:Go)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,va:c.va},b)}
;function lp(a,b){b=void 0===b?{}:b;var c=!1;A("ytLoggingEventsDefaultDisabled",!1)&&$m===$m&&(c=!0);kp(a,c?null:$m,b)}
;function mp(a,b,c){var d=new xh;od(d,73,yh,a);c?kp(d,c,b):lp(d,b)}
function np(a,b,c){var d=new xh;od(d,78,yh,a);c?kp(d,c,b):lp(d,b)}
function op(a,b,c){var d=new xh;od(d,208,yh,a);c?kp(d,c,b):lp(d,b)}
function pp(a,b,c){var d=new xh;od(d,156,yh,a);c?kp(d,c,b):lp(d,b)}
function qp(a,b,c){var d=new xh;od(d,215,yh,a);c?kp(d,c,b):lp(d,b)}
function rp(a,b,c){var d=new xh;od(d,111,yh,a);c?kp(d,c,b):lp(d,b)}
;var sp=new Set,tp=0,up=0,vp=0,wp=[],xp=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Vj(a){yp(a)}
function zp(a){yp(a,"WARNING")}
function yp(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||A("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||A("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(M("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=tp)){var m=wp,q=re(a),u=q.message||"Unknown Error",C=q.name||"UnknownError",v=q.stack||a.i||"Not available";if(v.startsWith(C+": "+u)){var E=v.split("\n");E.shift();v=E.join("\n")}var F=q.lineNumber||"Not available",H=q.fileName||"Not available",R=v,O=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var S=0;S<a.args.length&&!(O=gp(a.args[S],"params."+S,g,O),500<=O);S++);else if(a.hasOwnProperty("params")&&
a.params){var ka=a.params;if("object"===typeof a.params)for(var N in ka){if(ka[N]){var Ca="params."+N,Oa=ip(ka[N]);g[Ca]=Oa;O+=Ca.length+Oa.length;if(500<O)break}}else g.params=ip(ka)}if(m.length)for(var va=0;va<m.length&&!(O=gp(m[va],"params.context."+va,g,O),500<=O);va++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var G={message:u,name:C,lineNumber:F,fileName:H,stack:R,params:g,sampleWeight:1},Da=Number(a.columnNumber);isNaN(Da)||(G.lineNumber=G.lineNumber+
":"+Da);if("IGNORED"===a.level)var ua=0;else a:{for(var En=cp(),Fn=p(En.ha),ui=Fn.next();!ui.done;ui=Fn.next()){var Gn=ui.value;if(G.message&&G.message.match(Gn.Zo)){ua=Gn.weight;break a}}for(var Hn=p(En.ga),vi=Hn.next();!vi.done;vi=Hn.next()){var In=vi.value;if(In.ka(G)){ua=In.weight;break a}}ua=1}G.sampleWeight=ua;for(var Jn=p(Yo),wi=Jn.next();!wi.done;wi=Jn.next()){var xi=wi.value;if(xi.Pa[G.name])for(var Kn=p(xi.Pa[G.name]),yi=Kn.next();!yi.done;yi=Kn.next()){var Ln=yi.value,Mf=G.message.match(Ln.regexp);
if(Mf){G.params["params.error.original"]=Mf[0];for(var zi=Ln.groups,Mn={},Vc=0;Vc<zi.length;Vc++)Mn[zi[Vc]]=Mf[Vc+1],G.params["params.error."+zi[Vc]]=Mf[Vc+1];G.message=xi.eb(Mn);break}}}G.params||(G.params={});var Nn=cp();G.params["params.errorServiceSignature"]="msg="+Nn.ha.length+"&cb="+Nn.ga.length;G.params["params.serviceWorker"]="false";x.document&&x.document.querySelectorAll&&(G.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Cb("sample").constructor!==
Ab&&(G.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(G);if(0!==G.sampleWeight&&!sp.has(G.message)){if("ERROR"===h){dp.ja("handleError",G);if(M("record_app_crashed_web")&&0===vp&&1===G.sampleWeight)if(vp++,M("errors_via_jspb")){var Ai=new Zg;D(Ai,1,1);if(!M("report_client_error_with_app_crash_ks")){var On=new Ug;D(On,1,G.message);var Pn=new Vg;I(Pn,3,On);var Qn=new Wg;I(Qn,5,Pn);var Rn=new Xg;I(Rn,9,Qn);I(Ai,4,Rn)}var Sn=new xh;od(Sn,20,yh,Ai);lp(Sn)}else{var Tn=
{appCrashType:"APP_CRASH_TYPE_BREAKPAD"};M("report_client_error_with_app_crash_ks")||(Tn.systemHealth={crashData:{clientError:{logMessage:{message:G.message}}}});Wj("appCrashed",Tn)}up++}else"WARNING"===h&&dp.ja("handleWarning",G);if(M("kevlar_gel_error_routing"))a:{var Td=h;if(M("errors_via_jspb")){if(Ap())var Vn=void 0;else{var Wc=new Rg;D(Wc,1,G.stack);G.fileName&&D(Wc,4,G.fileName);var qb=G.lineNumber&&G.lineNumber.split?G.lineNumber.split(":"):[];0!==qb.length&&(1!==qb.length||isNaN(Number(qb[0]))?
2!==qb.length||isNaN(Number(qb[0]))||isNaN(Number(qb[1]))||(D(Wc,2,Number(qb[0])),D(Wc,3,Number(qb[1]))):D(Wc,2,Number(qb[0])));var jc=new Ug;D(jc,1,G.message);D(jc,3,G.name);D(jc,6,G.sampleWeight);"ERROR"===Td?D(jc,2,2):"WARNING"===Td?D(jc,2,1):D(jc,2,0);var Bi=new Sg;D(Bi,1,!0);od(Bi,3,Tg,Wc);var Jb=new Og;D(Jb,3,window.location.href);for(var Wn=A("FEXP_EXPERIMENTS",[]),Ci=0;Ci<Wn.length;Ci++){var lt=Wn[Ci];Zc(Jb);jd(Jb,5).push(lt)}var Di=A("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Lh()&&Di)for(var Xn=
p(Object.keys(Di)),kc=Xn.next();!kc.done;kc=Xn.next()){var Yn=kc.value,Ei=new Qg;D(Ei,1,Yn);Ei.setValue(String(Di[Yn]));pd(Jb,4,Qg,Ei)}var Fi=G.params;if(Fi){var Zn=p(Object.keys(Fi));for(kc=Zn.next();!kc.done;kc=Zn.next()){var $n=kc.value,Gi=new Qg;D(Gi,1,"client."+$n);Gi.setValue(String(Fi[$n]));pd(Jb,4,Qg,Gi)}}var ao=A("SERVER_NAME"),bo=A("SERVER_VERSION");if(ao&&bo){var Hi=new Qg;D(Hi,1,"server.name");Hi.setValue(ao);pd(Jb,4,Qg,Hi);var Ii=new Qg;D(Ii,1,"server.version");Ii.setValue(bo);pd(Jb,
4,Qg,Ii)}var Nf=new Vg;I(Nf,1,Jb);I(Nf,2,Bi);I(Nf,3,jc);Vn=Nf}var co=Vn;if(!co)break a;var eo=new xh;od(eo,163,yh,co);lp(eo)}else{if(Ap())var fo=void 0;else{var Ud={stackTrace:G.stack};G.fileName&&(Ud.filename=G.fileName);var rb=G.lineNumber&&G.lineNumber.split?G.lineNumber.split(":"):[];0!==rb.length&&(1!==rb.length||isNaN(Number(rb[0]))?2!==rb.length||isNaN(Number(rb[0]))||isNaN(Number(rb[1]))||(Ud.lineNumber=Number(rb[0]),Ud.columnNumber=Number(rb[1])):Ud.lineNumber=Number(rb[0]));var Ji={level:"ERROR_LEVEL_UNKNOWN",
message:G.message,errorClassName:G.name,sampleWeight:G.sampleWeight};"ERROR"===Td?Ji.level="ERROR_LEVEL_ERROR":"WARNING"===Td&&(Ji.level="ERROR_LEVEL_WARNNING");var mt={isObfuscated:!0,browserStackInfo:Ud},Xc={pageUrl:window.location.href,kvPairs:[]};A("FEXP_EXPERIMENTS")&&(Xc.experimentIds=A("FEXP_EXPERIMENTS"));var Ki=A("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Lh()&&Ki)for(var go=p(Object.keys(Ki)),lc=go.next();!lc.done;lc=go.next()){var ho=lc.value;Xc.kvPairs.push({key:ho,value:String(Ki[ho])})}var Li=
G.params;if(Li){var io=p(Object.keys(Li));for(lc=io.next();!lc.done;lc=io.next()){var jo=lc.value;Xc.kvPairs.push({key:"client."+jo,value:String(Li[jo])})}}var ko=A("SERVER_NAME"),lo=A("SERVER_VERSION");ko&&lo&&(Xc.kvPairs.push({key:"server.name",value:ko}),Xc.kvPairs.push({key:"server.version",value:lo}));fo={errorMetadata:Xc,stackTrace:mt,logMessage:Ji}}var mo=fo;if(!mo)break a;Wj("clientError",mo)}("ERROR"===Td||M("errors_flush_gel_always_killswitch"))&&Ho(void 0,void 0,!1)}if(!M("suppress_error_204_logging")){var Vd=
G.params||{},Kb={urlParams:{a:"logerror",t:"jserror",type:G.name,msg:G.message.substr(0,250),line:G.lineNumber,level:h,"client.name":Vd.name},postParams:{url:A("PAGE_NAME",window.location.href),file:G.fileName},method:"POST"};Vd.version&&(Kb["client.version"]=Vd.version);if(Kb.postParams){G.stack&&(Kb.postParams.stack=G.stack);for(var no=p(Object.keys(Vd)),Mi=no.next();!Mi.done;Mi=no.next()){var oo=Mi.value;Kb.postParams["client."+oo]=Vd[oo]}var Ni=A("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(Ni)for(var po=
p(Object.keys(Ni)),Oi=po.next();!Oi.done;Oi=po.next()){var qo=Oi.value;Kb.postParams[qo]=Ni[qo]}var ro=A("SERVER_NAME"),so=A("SERVER_VERSION");ro&&so&&(Kb.postParams["server.name"]=ro,Kb.postParams["server.version"]=so)}ti(A("ECATCHER_REPORT_HOST","")+"/error_204",Kb)}try{sp.add(G.message)}catch(Mu){}tp++}}}}
function Ap(){for(var a=p(xp),b=a.next();!b.done;b=a.next())if(Nj(b.value.toLowerCase()))return!0;return!1}
function Bp(a){var b=Ja.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,fa(b))}
;function Cp(){this.register=new Map}
function Dp(a){a=p(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.cp("ABORTED")}
Cp.prototype.clear=function(){Dp(this);this.register.clear()};
var Ep=new Cp;var Fp=Date.now().toString();
function Gp(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Fp)for(a=1,b=0;b<Fp.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Fp.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Hp=x.ytLoggingDocDocumentNonce_;Hp||(Hp=Gp(),y("ytLoggingDocDocumentNonce_",Hp));var Ip=Hp;var Jp={Bg:0,qd:1,Ad:2,hk:3,Dg:4,so:5,Xk:6,Cm:7,am:8,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS"};function Kp(a){this.h=a}
function Lp(a){return new Kp({trackingParams:a})}
Kp.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
Kp.prototype.getAsJspb=function(){var a=new ah;void 0!==this.h.trackingParams?D(a,1,this.h.trackingParams):(void 0!==this.h.veType&&D(a,2,this.h.veType),void 0!==this.h.veCounter&&D(a,6,this.h.veCounter),void 0!==this.h.elementIndex&&D(a,3,this.h.elementIndex));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();I(a,7,b)}void 0!==this.h.youtubeData&&I(a,8,this.h.jspbYoutubeData);return a};
Kp.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Kp.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Mp(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function Np(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Op(a){return A(Np(void 0===a?0:a))}
y("yt_logging_screen.getRootVeType",Op);function Pp(a){return(a=Op(void 0===a?0:a))?new Kp({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function Qp(){var a=A("csn-to-ctt-auth-info");a||(a={},Kh("csn-to-ctt-auth-info",a));return a}
function Rp(a){a=A(Mp(void 0===a?0:a));if(!a&&!A("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
y("yt_logging_screen.getCurrentCsn",Rp);function Sp(a,b,c){var d=Qp();(c=Rp(c))&&delete d[c];b&&(d[a]=b)}
function Tp(a){return Qp()[a]}
y("yt_logging_screen.getCttAuthInfo",Tp);
function Up(a,b,c,d){c=void 0===c?0:c;if(a!==A(Mp(c))||b!==A(Np(c)))Sp(a,d,c),Kh(Mp(c),a),Kh(Np(c),b),b=function(){setTimeout(function(){if(a)if(M("web_time_via_jspb")){var e=new bh;D(e,1,Ip);D(e,2,a);M("use_default_heartbeat_client")?rp(e):rp(e,void 0,$m)}else e={clientDocumentNonce:Ip,clientScreenNonce:a},M("use_default_heartbeat_client")?Wj("foregroundHeartbeatScreenAssociated",e):Wo("foregroundHeartbeatScreenAssociated",e,$m)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):
b()}
y("yt_logging_screen.setCurrentScreen",Up);var Vp=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};y("yt.msgs_",Vp);function Wp(a){Fh(Vp,arguments)}
;var Xp={pd:3611,Dc:27686,Ec:85013,Fc:23462,Hc:42016,Ic:62407,Jc:26926,Gc:43781,Kc:51236,Lc:79148,Mc:50160,Nc:77504,Zc:87907,bd:18630,cd:54445,dd:80935,ed:105675,fd:37521,gd:147285,hd:47786,jd:98349,kd:123695,ld:6827,md:29434,nd:7282,od:124448,sd:32276,rd:76278,td:147868,ud:147869,vd:93911,wd:106531,xd:27259,yd:27262,zd:27263,Bd:21759,Cd:27107,Dd:62936,Ed:49568,Fd:38408,Gd:80637,Hd:68727,Id:68728,Jd:80353,Kd:80356,Ld:74610,Md:45707,Nd:83962,Od:83970,Pd:46713,Qd:89711,Rd:74612,Sd:93265,Td:74611,Ud:131380,
Wd:128979,Xd:139311,Yd:128978,Vd:131391,Zd:105350,be:139312,ce:134800,ae:131392,ee:113533,ge:93252,he:99357,je:94521,ke:114252,le:113532,me:94522,ie:94583,ne:88E3,oe:139580,pe:93253,qe:93254,re:94387,se:94388,te:93255,ue:97424,de:72502,we:110111,xe:76019,ze:117092,Ae:117093,ye:89431,Be:110466,Ce:77240,De:60508,Ee:148123,Fe:148124,Ge:137401,He:137402,Ie:137046,Je:73393,Ke:113534,Le:92098,Me:131381,Ne:84517,Oe:83759,Pe:80357,Qe:86113,Re:72598,Se:72733,Te:107349,Ue:124275,Ve:118203,We:133275,Xe:133274,
Ye:133272,Ze:133273,af:133276,bf:144507,cf:143247,df:143248,ef:143249,ff:143250,gf:143251,hf:144401,kf:117431,jf:133797,lf:128572,mf:133405,nf:117429,pf:117430,qf:117432,rf:120080,sf:117259,tf:121692,uf:145656,vf:145655,wf:145653,xf:145654,yf:145657,zf:132972,Af:133051,Bf:133658,Cf:132971,Df:97615,Ff:143359,Ef:143356,Hf:143361,Gf:143358,Jf:143360,If:143357,Kf:142303,Lf:143353,Mf:143354,Nf:144479,Of:143355,Pf:31402,Rf:133624,Sf:146477,Tf:133623,Uf:133622,Qf:133621,Vf:84774,Wf:95117,Xf:98930,Yf:98931,
Zf:98932,ag:43347,cg:129889,dg:149123,eg:45474,fg:100352,gg:84758,hg:98443,ig:117985,jg:74613,kg:74614,lg:64502,mg:136032,ng:74615,og:74616,pg:122224,qg:74617,rg:77820,sg:74618,tg:93278,ug:93274,vg:93275,wg:93276,xg:22110,yg:29433,zg:133798,Ag:132295,Cg:120541,Eg:82047,Fg:113550,Gg:75836,Hg:75837,Ig:42352,Jg:84512,Kg:76065,Lg:75989,Mg:16623,Ng:32594,Og:27240,Pg:32633,Qg:74858,Sg:3945,Rg:16989,Tg:45520,Ug:25488,Vg:25492,Wg:25494,Xg:55760,Yg:14057,Zg:18451,ah:57204,bh:57203,dh:17897,eh:57205,fh:18198,
gh:17898,hh:17909,ih:43980,jh:46220,kh:11721,lh:147994,mh:49954,nh:96369,oh:3854,ph:56251,qh:25624,Hh:16906,Ih:99999,Jh:68172,Kh:27068,Lh:47973,Mh:72773,Nh:26970,Oh:26971,Ph:96805,Qh:17752,Rh:73233,Sh:109512,Th:22256,Uh:14115,Vh:22696,Wh:89278,Xh:89277,Yh:109513,Zh:43278,ai:43459,bi:43464,ci:89279,di:43717,fi:55764,gi:22255,hi:147912,ii:89281,ji:40963,ki:43277,li:43442,mi:91824,ni:120137,oi:96367,ri:36850,si:72694,ti:37414,vi:36851,xi:124863,wi:121343,yi:73491,zi:54473,Ai:43375,Bi:46674,Ci:143815,
Di:139095,Ei:144402,Fi:149968,Gi:149969,Hi:32473,Ii:72901,Ji:72906,Ki:50947,Li:50612,Mi:50613,Ni:50942,Oi:84938,Pi:84943,Qi:84939,Ri:84941,Si:84944,Ti:84940,Ui:84942,Vi:35585,Wi:51926,Xi:79983,Yi:63238,Zi:18921,aj:63241,bj:57893,cj:41182,dj:135732,ej:33424,fj:22207,gj:42993,hj:36229,ij:22206,jj:22205,kj:18993,lj:19001,mj:18990,nj:18991,oj:18997,pj:18725,qj:19003,rj:36874,sj:44763,tj:33427,uj:67793,vj:22182,wj:37091,xj:34650,yj:50617,zj:47261,Aj:22287,Bj:25144,Cj:97917,Dj:62397,Ej:125598,Fj:137935,
Gj:36961,Hj:108035,Ij:27426,Jj:27857,Kj:27846,Lj:27854,Mj:69692,Nj:61411,Oj:39299,Pj:38696,Qj:62520,Rj:36382,Sj:108701,Tj:50663,Uj:36387,Vj:14908,Wj:37533,Xj:105443,Yj:61635,Zj:62274,ak:133818,bk:65702,ck:65703,dk:65701,ek:76256,fk:37671,gk:49953,ik:36216,jk:28237,kk:39553,lk:29222,mk:26107,nk:38050,pk:26108,rk:120745,qk:26109,sk:26110,tk:66881,uk:28236,vk:14586,wk:57929,xk:74723,yk:44098,zk:44099,Ck:23528,Dk:61699,Ak:134104,Bk:134103,Ek:59149,Fk:101951,Gk:97346,Hk:118051,Ik:95102,Jk:64882,Kk:119505,
Lk:63595,Mk:63349,Nk:95101,Ok:75240,Pk:27039,Qk:68823,Rk:21537,Sk:83464,Tk:75707,Uk:83113,Vk:101952,Wk:101953,Yk:79610,Zk:125755,al:24402,bl:24400,dl:32925,fl:57173,il:122502,jl:145268,kl:138480,ll:64423,ml:64424,nl:33986,ol:100828,pl:129089,ql:21409,vl:135155,wl:135156,xl:135157,yl:135158,zl:135159,Al:135160,Bl:135161,Cl:135162,Dl:135163,El:135164,Fl:135165,Gl:135166,rl:11070,sl:11074,ul:17880,Hl:14001,Jl:30709,Kl:30707,Ll:30711,Ml:30710,Nl:30708,Il:26984,Ol:146143,Pl:63648,Ql:63649,Rl:51879,Sl:111059,
Tl:5754,Ul:20445,Wl:130975,Vl:130976,Xl:110386,Yl:113746,Zl:66557,bm:17310,cm:28631,dm:21589,em:68012,fm:60480,gm:138664,hm:141121,im:31571,jm:141978,km:150105,lm:150106,mm:150107,nm:150108,om:76980,pm:41577,qm:45469,rm:38669,sm:13768,tm:13777,um:141842,vm:62985,wm:4724,xm:59369,ym:43927,zm:43928,Am:12924,Bm:100355,Em:56219,Fm:27669,Gm:10337,Dm:47896,Hm:122629,Jm:139723,Im:139722,Km:121258,Lm:107598,Mm:127991,Nm:96639,Om:107536,Pm:130169,Qm:96661,Rm:145188,Sm:96658,Tm:116646,Um:121122,Vm:96660,Wm:127738,
Xm:127083,Ym:147842,Zm:104443,an:96659,bn:147595,cn:106442,dn:134840,en:63667,fn:63668,gn:63669,hn:130686,jn:147036,kn:78314,ln:147799,mn:148649,nn:55761,pn:127098,qn:134841,rn:96368,sn:67374,tn:48992,un:146176,vn:49956,wn:31961,xn:26388,yn:23811,zn:5E4,An:126250,Bn:96370,Cn:47355,Dn:47356,En:37935,Fn:45521,Gn:21760,Hn:83769,In:49977,Jn:49974,Kn:93497,Ln:93498,Mn:34325,Nn:140759,On:115803,Pn:123707,Qn:100081,Rn:35309,Sn:68314,Tn:25602,Un:100339,Vn:143516,Wn:59018,Xn:18248,Yn:50625,Zn:9729,ao:37168,
bo:37169,co:21667,eo:16749,fo:18635,ho:39305,jo:18046,ko:53969,lo:8213,mo:93926,no:102852,oo:110099,po:22678,qo:69076,ro:137575,to:139224,uo:100856,vo:17736,wo:3832,xo:147111,yo:55759,zo:64031,Fo:93044,Go:93045,Ho:34388,Io:17657,Jo:17655,Ko:39579,Lo:39578,Mo:77448,No:8196,Oo:11357,Po:69877,Qo:8197,Ro:82039};function Yp(){var a=ub(Zp),b;return $f(new Tf(function(c,d){a.onSuccess=function(e){li(e)?c(new $p(e)):d(new aq("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new aq("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new aq("Request timed out","net.timeout",e))};
b=ti("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof ag&&b.abort();
return Yf(c)})}
function aq(a,b,c){$a.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
r(aq,$a);function $p(a){this.xhr=a}
;function bq(){this.i=0;this.h=null}
bq.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h))&&"function"===typeof a.then?a:cq(a):2===this.i&&b?(a=b.call(c,this.h))&&"function"===typeof a.then?a:dq(a):this};
bq.prototype.getValue=function(){return this.h};
bq.prototype.$goog_Thenable=!0;function dq(a){var b=new bq;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function cq(a){var b=new bq;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function eq(){if(ke()||Mj&&Nj("applewebkit")&&!Nj("version")&&(!Nj("safari")||Nj("gsa/"))||vc&&Nj("version/"))return!0;if(M("enable_web_eom_visitor_data"))return A("EOM_VISITOR_DATA")?!1:!0;var a=A("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a?!0:(a=Zi("CONSENT"))?a.startsWith("YES+"):!0}
;function fq(a){$a.call(this,a.message||a.description||a.name);this.isMissing=a instanceof gq;this.isTimeout=a instanceof aq&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ag}
r(fq,$a);fq.prototype.name="BiscottiError";function gq(){$a.call(this,"Biscotti ID is missing from server")}
r(gq,$a);gq.prototype.name="BiscottiMissingError";var Zp={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},hq=null;function Wh(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return Yf(Error("Biscotti id fetching has been disabled entirely."));if(!eq())return Yf(Error("User has not consented - not fetching biscotti id."));if("1"==sb())return Yf(Error("Biscotti ID is not available in private embed mode"));hq||(hq=$f(Yp().then(iq),function(a){return jq(2,a)}));
return hq}
function iq(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new gq;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new gq;a=a.id;Xh(a);hq=cq(a);kq(18E5,2);return a}
function jq(a,b){b=new fq(b);Xh("");hq=dq(b);0<a&&kq(12E4,a-1);throw b;}
function kq(a,b){mi(function(){$f(Yp().then(iq,function(c){return jq(b,c)}),bb)},a)}
function lq(){try{var a=z("yt.ads.biscotti.getId_");return a?a():Wh()}catch(b){return Yf(b)}}
;function mq(a){if("1"!=sb()){a&&Vh();try{lq().then(function(){},function(){}),mi(mq,18E5)}catch(b){Th(b)}}}
;function nq(){this.yc=!0}
function oq(a){var b={},c=me([]);c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(A("SESSION_INDEX",0)),c=isNaN(c)?0:c),M("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c),"INNERTUBE_HOST_OVERRIDE"in Jh||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in Jh&&(b["X-Goog-PageId"]=A("DELEGATED_SESSION_ID")));return b}
;var pq=Symbol("injectionDeps");function qq(a){this.name=a}
qq.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function rq(){this.key=sq}
function tq(){this.providers=new Map;this.h=new Map}
tq.prototype.resolve=function(a){return a instanceof rq?uq(this,a.key,[],!0):uq(this,a,[])};
function uq(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.providers.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.providers.get(b);c.push(b);if(d.Cc)var e=d.Cc;else if(d.Bc)e=d[pq]?vq(a,d[pq],c):[],e=d.Bc.apply(d,fa(e));else if(d.Jb){e=d.Jb;var f=e[pq]?vq(a,e[pq],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(fa(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.hp||a.h.set(b,e);
return e}
function vq(a,b,c){return b?b.map(function(d){return d instanceof rq?uq(a,d.key,c,!0):uq(a,d,c)}):[]}
;var wq;var xq={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var yq=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function zq(){var a=void 0===a?window.location.href:a;if(M("kevlar_disable_theme_param"))return null;ac(bc(5,a));try{var b=ei(a).theme;return yq.get(b)||null}catch(c){}return null}
;function Aq(){this.h={};if(this.i=$i()){var a=Zi("CONSISTENCY");a&&Bq(this,{encryptedTokenJarContents:a})}}
Aq.prototype.handleResponse=function(a,b){var c,d;b=(null==(c=b.ba.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=p(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Bq(this,a)}};
function Bq(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Yi("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Cq=window.location.hostname.split(".").slice(-2).join(".");function Dq(){var a=A("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===A("INNERTUBE_CLIENT_NAME")&&(this.h=Eq(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Fq;Dq.getInstance=function(){Fq=z("yt.clientLocationService.instance");Fq||(Fq=new Dq,y("yt.clientLocationService.instance",Fq));return Fq};
Dq.prototype.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=1E7*this.i.coords.latitude,a.client.locationInfo.longitudeE7=1E7*this.i.coords.longitude,a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
Dq.prototype.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===A("INNERTUBE_CLIENT_NAME")?(this.h=Eq(this))&&this.h.set("yt-location-playability-token",a,15552E3):Yi("YT_CL",JSON.stringify({loctok:a}),15552E3,Cq,!0))};
function Eq(a){return void 0===a.h?new xj("yt-client-location"):a.h}
Dq.prototype.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition)||!M("web_enable_browser_geolocation_api")&&!M("enable_handoff_location_2fa_on_mweb"))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;M("enable_handoff_location_2fa_on_mweb")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
Dq.prototype.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function Gq(a,b){var c;if((null==(c=a.signalServiceEndpoint)?0:c.signal)&&b.za&&(c=b.za[a.signalServiceEndpoint.signal]))return c();var d;if((null==(d=a.continuationCommand)?0:d.request)&&b.Qb&&(d=b.Qb[a.continuationCommand.request]))return d();for(var e in a)if(b.nb[e]&&(a=b.nb[e]))return a()}
;function Hq(a){return function(){return new a}}
;var Iq={},Jq=(Iq.WEB_UNPLUGGED="^unplugged/",Iq.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Iq.WEB_UNPLUGGED_OPS="^unplugged/",Iq.WEB_UNPLUGGED_PUBLIC="^unplugged/",Iq.WEB_CREATOR="^creator/",Iq.WEB_KIDS="^kids/",Iq.WEB_EXPERIMENTS="^experiments/",Iq.WEB_MUSIC="^music/",Iq.WEB_REMIX="^music/",Iq.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Iq.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Iq);
function Kq(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Jq[b];if(c){var d=new RegExp(c),e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Jq).forEach(function(g){var h=p(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Lq(a,b){return{method:void 0===b?"POST":b,mode:gi(a)?"same-origin":"cors",credentials:gi(a)?"same-origin":"include"}}
;function Mq(){}
Mq.prototype.o=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?xq:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=A("INNERTUBE_CONTEXT");if(g){g=vb(g);M("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=A("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;bj.getInstance();var m="USER_INTERFACE_THEME_LIGHT";ej(165)?m="USER_INTERFACE_THEME_DARK":ej(174)?m="USER_INTERFACE_THEME_LIGHT":!M("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:zq()||m;h.userInterfaceTheme=k;if(!f){if(k=
lj())h.connectionType=k;M("web_log_effective_connection_type")&&(k=mj())&&(g.client.effectiveConnectionType=k)}var q;if(M("web_log_memory_total_kbytes")&&(null==(q=x.navigator)?0:q.deviceMemory)){var u;q=null==(u=x.navigator)?void 0:u.deviceMemory;g.client.memoryTotalKbytes=""+1E6*q}u=ei(x.location.href);!M("web_populate_internal_geo_killswitch")&&u.internalcountrycode&&(h.internalGeo=u.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:x.location.href},M("kevlar_woffle")&&
Wi.h&&(h.mainAppWebInfo.pwaInstallabilityStatus=Wi.h.h?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Xi(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!M("web_lr_app_quality_killswitch")&&(u=A("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:u})),u=A("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:u}));
if(!M("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var C=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(Oa){}C=void 0}C&&(h.timeZone=C)}(C=Oh())?h.experimentsToken=C:delete h.experimentsToken;C=Ph();Aq.h||(Aq.h=new Aq);h=Aq.h.h;u=[];q=0;for(var v in h)u[q++]=h[v];g.request=Object.assign({},g.request,{internalExperimentFlags:C,consistencyTokenJars:u});!M("web_prequest_context_killswitch")&&(v=A("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=
v);C=bj.getInstance();v=ej(58);C=C.get("gsml","");g.user=Object.assign({},g.user);v&&(g.user.enableSafetyMode=v);C&&(g.user.lockedSafetyMode=!0);M("warm_op_csn_cleanup")?e&&(f=Rp())&&(g.clientScreenNonce=f):!f&&(f=Rp())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=z("yt.mdx.remote.remoteClient_"))g.remoteClient=d;M("web_enable_client_location_service")&&Dq.getInstance().setLocationOnInnerTubeContext(g);try{var E=hi(),F=E.bid;delete E.bid;g.adSignalsInfo={params:[],bid:F};
var H=p(Object.entries(E));for(var R=H.next();!R.done;R=H.next()){var O=p(R.value),S=O.next().value,ka=O.next().value;E=S;F=ka;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:E,value:""+F})}}catch(Oa){yp(Oa)}H=g}else yp(Error("Error: No InnerTubeContext shell provided in ytconfig.")),H={};H={context:H};if(R=this.h(a)){this.i(H,R,b);var N;b="/youtubei/v1/"+Kq(this.j());var Ca;(a=null==(N=a.commandMetadata)?void 0:null==(Ca=N.webCommandMetadata)?void 0:Ca.apiUrl)&&(b=a);N=b;(Ca=A("INNERTUBE_HOST_OVERRIDE"))&&
(N=String(Ca)+String(dc(N)));Ca={};Ca.key=A("INNERTUBE_API_KEY");M("json_condensed_response")&&(Ca.prettyPrint="false");N=fi(N,Ca||{},!1);N={input:N,ra:Lq(N),ba:H,config:Object.assign({},void 0)};N.config.Ga?N.config.Ga.identity=c:N.config.Ga={identity:c};return N}yp(new Q("Error: Failed to create Request from Command.",a))};
da.Object.defineProperties(Mq.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Nq(){}
r(Nq,Mq);Nq.prototype.o=function(){return{input:"/getDatasyncIdsEndpoint",ra:Lq("/getDatasyncIdsEndpoint","GET"),ba:{}}};
Nq.prototype.j=function(){return[]};
Nq.prototype.h=function(){};
Nq.prototype.i=function(){};var Oq={},Pq=(Oq.GET_DATASYNC_IDS=Hq(Nq),Oq);function Qq(a){var b=Ja.apply(1,arguments);if(!Rq(a)||b.some(function(d){return!Rq(d)}))throw Error("Only objects may be merged.");
b=p(b);for(var c=b.next();!c.done;c=b.next())Sq(a,c.value);return a}
function Sq(a,b){for(var c in b)if(Rq(b[c])){if(c in a&&!Rq(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Sq(a[c],b[c])}else if(Tq(b[c])){if(c in a&&!Tq(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Uq(a[c],b[c])}else a[c]=b[c];return a}
function Uq(a,b){b=p(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Rq(c)?a.push(Sq({},c)):Tq(c)?a.push(Uq([],c)):a.push(c);return a}
function Rq(a){return"object"===typeof a&&!Array.isArray(a)}
function Tq(a){return"object"===typeof a&&Array.isArray(a)}
;function Vq(a,b){Cl.call(this,1,arguments);this.timer=b}
r(Vq,Cl);var Wq=new Dl("aft-recorded",Vq);var Xq=window;function Yq(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var T=Xq.performance||Xq.mozPerformance||Xq.msPerformance||Xq.webkitPerformance||new Yq;var Zq=!1,$q={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Wa(T.clearResourceTimings||T.webkitClearResourceTimings||T.mozClearResourceTimings||T.msClearResourceTimings||T.oClearResourceTimings||bb,T);function ar(a){var b=br(a);if(b.aft)return b.aft;a=A((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function cr(){var a;if(M("csi_use_performance_navigation_timing")){var b,c,d,e=null==T?void 0:null==(a=T.getEntriesByType)?void 0:null==(b=a.call(T,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=dr(e.requestStart),e.responseEnd=dr(e.responseEnd),e.redirectStart=dr(e.redirectStart),e.redirectEnd=dr(e.redirectEnd),e.domainLookupEnd=dr(e.domainLookupEnd),e.connectStart=dr(e.connectStart),e.connectEnd=dr(e.connectEnd),e.responseStart=dr(e.responseStart),
e.secureConnectionStart=dr(e.secureConnectionStart),e.domainLookupStart=dr(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=T.timing}else a=T.timing;return a}
function er(){return M("csi_use_time_origin")&&T.timeOrigin?Math.floor(T.timeOrigin):T.timing.navigationStart}
function dr(a){return Math.round(er()+a)}
function fr(a){var b;(b=z("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},y("ytcsi."+(a||"")+"data_",b));return b}
function gr(a){a=fr(a);a.info||(a.info={});return a.info}
function br(a){a=fr(a);a.tick||(a.tick={});return a.tick}
function hr(a){a=fr(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function ir(a){a=hr(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function jr(a){var b=fr(a).nonce;b||(b=Gp(),fr(a).nonce=b);return b}
function kr(a){var b=br(a||""),c=ar(a);c&&!Zq&&(Il(Wq,new Vq(Math.round(c-b._start),a)),Zq=!0)}
function lr(a,b){for(var c=p(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!lr(a[d],b[d]))return!1;return!0}
;function mr(){if(T.getEntriesByType){var a=T.getEntriesByType("paint");if(a=ib(a,function(b){return"first-paint"===b.name}))return dr(a.startTime)}a=T.timing;
return a.cc?Math.max(0,a.cc):0}
;function nr(){var a=z("ytcsi.debug");a||(a=[],y("ytcsi.debug",a),y("ytcsi.reference",{}));return a}
function or(a){a=a||"";var b=z("ytcsi.reference");b||(nr(),b=z("ytcsi.reference"));if(b[a])return b[a];var c=nr(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var U={},pr=(U.auto_search="LATENCY_ACTION_AUTO_SEARCH",U.ad_to_ad="LATENCY_ACTION_AD_TO_AD",U.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",U["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",U.app_startup="LATENCY_ACTION_APP_STARTUP",U["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",U["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",U["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",U.browse="LATENCY_ACTION_BROWSE",U.cast_splash="LATENCY_ACTION_CAST_SPLASH",
U.channels="LATENCY_ACTION_CHANNELS",U.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",U["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",U["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",U["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",U["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",U["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",U["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",U["channel.music"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",U["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",U["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",U["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",U["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",U.chips="LATENCY_ACTION_CHIPS",U["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",U["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",U.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",
U.embed="LATENCY_ACTION_EMBED",U.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",U.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",U.explore="LATENCY_ACTION_EXPLORE",U.home="LATENCY_ACTION_HOME",U.library="LATENCY_ACTION_LIBRARY",U.live="LATENCY_ACTION_LIVE",U.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",U.onboarding="LATENCY_ACTION_ONBOARDING",U.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",U.parent_tools_collection=
"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",U.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",U.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",U["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",U["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",U.prebuffer="LATENCY_ACTION_PREBUFFER",U.prefetch="LATENCY_ACTION_PREFETCH",U.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",U.profile_switcher="LATENCY_ACTION_LOGIN",U.reel_watch="LATENCY_ACTION_REEL_WATCH",U.results="LATENCY_ACTION_RESULTS",
U.search_ui="LATENCY_ACTION_SEARCH_UI",U.search_suggest="LATENCY_ACTION_SUGGEST",U.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",U.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",U.seek="LATENCY_ACTION_PLAYER_SEEK",U.settings="LATENCY_ACTION_SETTINGS",U.tenx="LATENCY_ACTION_TENX",U.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",U.watch="LATENCY_ACTION_WATCH",U.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",U["watch,watch7"]="LATENCY_ACTION_WATCH",U["watch,watch7_html5"]="LATENCY_ACTION_WATCH",
U["watch,watch7ad"]="LATENCY_ACTION_WATCH",U["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",U.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",U.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",U["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",U["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",U["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",U["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",U["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",U["video.live_settings"]=
"LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",U["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",U["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",U["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",U.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",U.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",U.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",U),V={},qr=(V.ad_allowed="adTypesAllowed",V.yt_abt="adBreakType",
V.ad_cpn="adClientPlaybackNonce",V.ad_docid="adVideoId",V.yt_ad_an="adNetworks",V.ad_at="adType",V.aida="appInstallDataAgeMs",V.browse_id="browseId",V.p="httpProtocol",V.t="transportProtocol",V.cs="commandSource",V.cpn="clientPlaybackNonce",V.ccs="creatorInfo.creatorCanaryState",V.ctop="creatorInfo.topEntityType",V.csn="clientScreenNonce",V.docid="videoId",V.GetHome_rid="requestIds",V.GetSearch_rid="requestIds",V.GetPlayer_rid="requestIds",V.GetWatchNext_rid="requestIds",V.GetBrowse_rid="requestIds",
V.GetLibrary_rid="requestIds",V.is_continuation="isContinuation",V.is_nav="isNavigation",V.b_p="kabukiInfo.browseParams",V.is_prefetch="kabukiInfo.isPrefetch",V.is_secondary_nav="kabukiInfo.isSecondaryNav",V.nav_type="kabukiInfo.navigationType",V.prev_browse_id="kabukiInfo.prevBrowseId",V.query_source="kabukiInfo.querySource",V.voz_type="kabukiInfo.vozType",V.yt_lt="loadType",V.mver="creatorInfo.measurementVersion",V.yt_ad="isMonetized",V.nr="webInfo.navigationReason",V.nrsu="navigationRequestedSameUrl",
V.pnt="performanceNavigationTiming",V.prt="playbackRequiresTap",V.plt="playerInfo.playbackType",V.pis="playerInfo.playerInitializedState",V.paused="playerInfo.isPausedOnLoad",V.yt_pt="playerType",V.fmt="playerInfo.itag",V.yt_pl="watchInfo.isPlaylist",V.yt_pre="playerInfo.preloadType",V.yt_ad_pr="prerollAllowed",V.pa="previousAction",V.yt_red="isRedSubscriber",V.rce="mwebInfo.responseContentEncoding",V.rc="resourceInfo.resourceCache",V.scrh="screenHeight",V.scrw="screenWidth",V.st="serverTimeMs",V.ssdm=
"shellStartupDurationMs",V.br_trs="tvInfo.bedrockTriggerState",V.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",V.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",V.label="tvInfo.label",V.is_mdx="tvInfo.isMdx",V.preloaded="tvInfo.isPreloaded",V.aac_type="tvInfo.authAccessCredentialType",V.upg_player_vis="playerInfo.visibilityState",V.query="unpluggedInfo.query",V.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",V.yt_vst="videoStreamType",V.vph="viewportHeight",V.vpw="viewportWidth",
V.yt_vis="isVisible",V.rcl="mwebInfo.responseContentLength",V.GetSettings_rid="requestIds",V.GetTrending_rid="requestIds",V.GetMusicSearchSuggestions_rid="requestIds",V.REQUEST_ID="requestIds",V),rr="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
sr={},tr=(sr.ccs="CANARY_STATE_",sr.mver="MEASUREMENT_VERSION_",sr.pis="PLAYER_INITIALIZED_STATE_",sr.yt_pt="LATENCY_PLAYER_",sr.pa="LATENCY_ACTION_",sr.ctop="TOP_ENTITY_TYPE_",sr.yt_vst="VIDEO_STREAM_TYPE_",sr),ur="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function vr(a){return pr[a]||"LATENCY_ACTION_UNKNOWN"}
function wr(a,b,c){c=hr(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in qr){c=qr[a];0<=db(rr,c)&&(b=!!b);a in tr&&"string"===typeof b&&(b=tr[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Qq({},d)}0<=db(ur,a)||zp(new Q("Unknown label logged with GEL CSI",a))}
;var W={LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,
LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,
LATENCY_ACTION_ENTITY_TRANSFORM:131,LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,
LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,
LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,
LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,
LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,
LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,
LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,
LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,
LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_HOME:1,LATENCY_ACTION_STARTUP:106,
LATENCY_ACTION_UNKNOWN:0};W[W.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";W[W.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";W[W.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";
W[W.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";W[W.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";W[W.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";W[W.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";W[W.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";W[W.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";
W[W.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";W[W.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";W[W.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";W[W.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";W[W.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";W[W.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";W[W.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";
W[W.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";W[W.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";W[W.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";W[W.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";W[W.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";
W[W.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";W[W.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";W[W.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";W[W.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";W[W.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";W[W.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";W[W.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";
W[W.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";W[W.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";W[W.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";W[W.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";W[W.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";W[W.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";
W[W.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";W[W.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";W[W.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";W[W.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";W[W.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";W[W.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";
W[W.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";W[W.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";W[W.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";W[W.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";W[W.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";W[W.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";W[W.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";
W[W.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";W[W.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";W[W.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";W[W.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";W[W.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";W[W.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";W[W.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";W[W.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";
W[W.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";W[W.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";W[W.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";W[W.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";W[W.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";W[W.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";
W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";W[W.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";W[W.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";W[W.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";W[W.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";W[W.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";W[W.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";
W[W.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";W[W.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";W[W.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";W[W.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";
W[W.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";W[W.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";W[W.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";W[W.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";W[W.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";W[W.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";W[W.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";
W[W.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";W[W.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";W[W.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";W[W.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";W[W.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";
W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";W[W.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";
W[W.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";W[W.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";W[W.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";W[W.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";
W[W.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";W[W.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";W[W.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";
W[W.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";W[W.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";W[W.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";W[W.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";W[W.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";
W[W.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";W[W.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";W[W.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";W[W.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";W[W.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";W[W.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";W[W.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";W[W.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";
W[W.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";W[W.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";W[W.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";W[W.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";W[W.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";
W[W.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";W[W.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";W[W.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";W[W.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";W[W.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";W[W.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";W[W.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";
W[W.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";W[W.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";W[W.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";W[W.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";W[W.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";W[W.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";W[W.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";W[W.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";W[W.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";
W[W.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";W[W.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var xr={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};xr[xr.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";xr[xr.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";xr[xr.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";
X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var yr={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};yr[yr.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
yr[yr.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";yr[yr.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";yr[yr.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";yr[yr.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";yr[yr.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";yr[yr.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";yr[yr.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var zr={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};zr[zr.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";zr[zr.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";zr[zr.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";zr[zr.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var Ar={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
Ar[Ar.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";Ar[Ar.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var Br={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};Br[Br.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";Br[Br.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";Br[Br.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
Br[Br.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";Br[Br.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";Br[Br.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var Cr={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};Cr[Cr.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";Cr[Cr.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";Cr[Cr.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";Cr[Cr.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var Dr={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};Dr[Dr.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";Dr[Dr.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";Dr[Dr.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var Er={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};Er[Er.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
Er[Er.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";Er[Er.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var Fr="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo prefetchInfo accelerationSession webInfo tvInfo kabukiInfo mwebInfo musicInfo".split(" ");var Gr=x.ytLoggingLatencyUsageStats_||{};y("ytLoggingLatencyUsageStats_",Gr);function Hr(){this.h=0}
function Ir(){Hr.h||(Hr.h=new Hr);return Hr.h}
Hr.prototype.tick=function(a,b,c,d){Jr(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},M("web_csi_via_jspb")?(d=new uh,D(d,1,a),D(d,2,b),a=new xh,od(a,5,yh,d),lp(a,c)):Wj("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
Hr.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Jr(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Wj("latencyActionInfo",a,{cttAuthInfo:c}))};
Hr.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));Jr(this,"info_"+d+"_"+b)||(D(a,2,b),b={cttAuthInfo:c},c=new xh,od(c,7,yh,a),lp(c,b))};
Hr.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Jr(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Wj("latencyActionSpan",a,{cttAuthInfo:c}))};
function Jr(a,b){Gr[b]=Gr[b]||{count:0};var c=Gr[b];c.count++;c.time=P();a.h||(a.h=Gj(function(){var d=P(),e;for(e in Gr)Gr[e]&&6E4<d-Gr[e].time&&delete Gr[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Q("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||zp(c)),!0):!1}
;function Kr(){var a=["ol"];or("").info.actionType="embed";a&&Kh("TIMING_AFT_KEYS",a);Kh("TIMING_ACTION","embed");Lr();a=gr();var b=ir();if("cold"===a.yt_lt||"cold"===b.loadType){var c=br(),d=hr();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var e in c)e in d||Z(e,c[e]);e={};c=!1;d=p(Object.keys(a));for(var f=d.next();!f.done;f=d.next())f=f.value,(f=wr(f,a[f]))&&!lr(ir(),f)&&(Qq(b,f),Qq(e,f),c=!0);c&&Mr(e)}y("ytglobal.timingready_",!0);a=A("TIMING_ACTION");z("ytglobal.timingready_")&&a&&"_start"in br()&&
ar()&&kr()}
function Nr(a,b,c,d){null!==b&&(gr(c)[a]=b,(a=wr(a,b,c))&&Mr(a,c,d))}
function Mr(a,b,c){if(!M("web_csi_via_jspb")||(void 0===c?0:c))c=or(b||""),Qq(c.info,a),Qq(ir(b),a),c=jr(b),b=fr(b).cttAuthInfo,Ir().info(a,c,b);else{c=new oh;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":qh(c,W[a[e]]);break;case "clientActionNonce":D(c,2,a[e]);break;case "clientScreenNonce":D(c,4,a[e]);break;case "loadType":D(c,3,a[e]);break;case "isPrewarmedLaunch":D(c,92,a[e]);break;case "isFirstInstall":D(c,55,a[e]);break;case "networkType":D(c,
5,xr[a[e]]);break;case "connectionType":D(c,26,X[a[e]]);break;case "detailedConnectionType":D(c,27,Y[a[e]]);break;case "isVisible":D(c,6,a[e]);break;case "playerType":D(c,7,yr[a[e]]);break;case "clientPlaybackNonce":D(c,8,a[e]);break;case "adClientPlaybackNonce":D(c,28,a[e]);break;case "previousCpn":D(c,77,a[e]);break;case "targetCpn":D(c,76,a[e]);break;case "isMonetized":D(c,9,a[e]);break;case "isPrerollAllowed":D(c,16,a[e]);break;case "isPrerollShown":D(c,17,a[e]);break;case "adType":D(c,12,a[e]);
break;case "adTypesAllowed":D(c,36,a[e]);break;case "adNetworks":D(c,37,a[e]);break;case "previousAction":D(c,13,W[a[e]]);break;case "isRedSubscriber":D(c,14,a[e]);break;case "serverTimeMs":D(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":D(c,20,a[e]);break;case "targetVideoId":D(c,78,a[e]);break;case "adBreakType":D(c,21,zr[a[e]]);break;case "isNavigation":rh(c,a[e]);break;case "viewportHeight":D(c,29,a[e]);break;case "viewportWidth":D(c,30,a[e]);break;case "screenHeight":D(c,
84,a[e]);break;case "screenWidth":D(c,85,a[e]);break;case "browseId":D(c,31,a[e]);break;case "isCacheHit":D(c,32,a[e]);break;case "httpProtocol":D(c,33,a[e]);break;case "transportProtocol":D(c,34,a[e]);break;case "searchQuery":D(c,41,a[e]);break;case "isContinuation":D(c,42,a[e]);break;case "availableProcessors":D(c,43,a[e]);break;case "sdk":D(c,44,a[e]);break;case "isLocalStream":D(c,45,a[e]);break;case "navigationRequestedSameUrl":D(c,64,a[e]);break;case "shellStartupDurationMs":D(c,70,a[e]);break;
case "appInstallDataAgeMs":D(c,73,a[e]);break;case "latencyActionError":D(c,71,Ar[a[e]]);break;case "actionStep":D(c,79,a[e]);break;case "jsHeapSizeLimit":D(c,80,a[e]);break;case "totalJsHeapSize":D(c,81,a[e]);break;case "usedJsHeapSize":D(c,82,a[e]);break;case "sourceVideoDurationMs":D(c,90,a[e]);break;case "adPrebufferedTimeSecs":D(c,39,a[e]);break;case "isLivestream":D(c,47,a[e]);break;case "liveStreamMode":D(c,91,Br[a[e]]);break;case "adCpn2":D(c,48,a[e]);break;case "adDaiDriftMillis":D(c,49,
a[e]);break;case "videoStreamType":D(c,53,Cr[a[e]]);break;case "playbackRequiresTap":D(c,56,a[e]);break;case "performanceNavigationTiming":D(c,67,a[e]);break;case "transactionType":D(c,74,Dr[a[e]]);break;case "playerRotationType":D(c,101,Er[a[e]]);break;case "allowedPreroll":D(c,10,a[e]);break;case "shownPreroll":D(c,11,a[e]);break;case "getHomeRequestId":D(c,57,a[e]);break;case "getSearchRequestId":D(c,60,a[e]);break;case "getPlayerRequestId":D(c,61,a[e]);break;case "getWatchNextRequestId":D(c,62,
a[e]);break;case "getBrowseRequestId":D(c,63,a[e]);break;case "getLibraryRequestId":D(c,66,a[e]);break;default:Fr.includes(f)&&Th(new Q("Codegen laipb translator asked to translate message field",""+f))}}catch(g){Th(Error("Codegen laipb translator failed to set "+f))}}Or(c,b)}}
function Or(a,b){var c=hr(b);c.jspbInfos||(c.jspbInfos=[]);c.jspbInfos.push(a);or(b||"").jspbInfo.push(a);c=jr(b);b=fr(b).cttAuthInfo;Ir().jspbInfo(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;T.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),T.mark(d))}or(c||"").tick[a]=b||P();d=hr(c);d.gelTicks&&(d.gelTicks[a]=!0);d=br(c);var e=b||P();d[a]=e;e=jr(c);var f=fr(c).cttAuthInfo;if("_start"===a){var g=Ir();Jr(g,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},M("web_csi_via_jspb")?(f=new mh,D(f,1,e),e=new xh,od(e,6,yh,f),lp(e,b)):Wj("latencyActionBaselined",{clientActionNonce:e},b))}else Ir().tick(a,e,b,f);kr(c);return d[a]}
function Pr(){var a=jr();requestAnimationFrame(function(){setTimeout(function(){a===jr()&&Z("ol",void 0,void 0)},0)})}
function Qr(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=dn+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Lr(){function a(f){var g=cr(),h=er();h&&(Z("srt",g.responseStart),1!==f.prerender&&Z("_start",h,void 0));f=mr();0<f&&Z("fpt",f);f=cr();f.isPerformanceNavigationTiming&&Mr({performanceNavigationTiming:!0});Z("nreqs",f.requestStart,void 0);Z("nress",f.responseStart,void 0);Z("nrese",f.responseEnd,void 0);0<f.redirectEnd-f.redirectStart&&(Z("nrs",f.redirectStart,void 0),Z("nre",f.redirectEnd,void 0));0<f.domainLookupEnd-f.domainLookupStart&&(Z("ndnss",f.domainLookupStart,void 0),Z("ndnse",f.domainLookupEnd,
void 0));0<f.connectEnd-f.connectStart&&(Z("ntcps",f.connectStart,void 0),Z("ntcpe",f.connectEnd,void 0));f.secureConnectionStart>=er()&&0<f.connectEnd-f.secureConnectionStart&&(Z("nstcps",f.secureConnectionStart,void 0),Z("ntcpe",f.connectEnd,void 0));T&&"getEntriesByType"in T&&Rr()}
var b=A("TIMING_INFO",{});if(M("web_csi_via_jspb")){b=Sr(b);Or(b);b=qh(rh(new oh,!0),W[vr(A("TIMING_ACTION"))]);var c=A("PREVIOUS_ACTION");c&&D(b,13,W[vr(c)]);(c=A("CLIENT_PROTOCOL"))&&D(b,33,c);(c=A("CLIENT_TRANSPORT"))&&D(b,34,c);(c=Rp())&&"UNDEFINED_CSN"!==c&&D(b,4,c);c=Qr();1!==c&&-1!==c||D(b,6,!0);c=gr();D(b,3,"cold");a(c);c=Tr();if(0<c.length){c=p(c);for(var d=c.next();!d.done;d=c.next()){d=d.value;var e=new nh;D(e,1,d);pd(b,83,nh,e)}}Or(b)}else{for(c in b)b.hasOwnProperty(c)&&Nr(c,b[c]);b=
{isNavigation:!0,actionType:vr(A("TIMING_ACTION"))};if(c=A("PREVIOUS_ACTION"))b.previousAction=vr(c);if(c=A("CLIENT_PROTOCOL"))b.httpProtocol=c;if(c=A("CLIENT_TRANSPORT"))b.transportProtocol=c;(c=Rp())&&"UNDEFINED_CSN"!==c&&(b.clientScreenNonce=c);c=Qr();if(1===c||-1===c)b.isVisible=!0;c=gr();b.loadType="cold";a(c);c=Tr();if(0<c.length)for(b.resourceInfo=[],c=p(c),d=c.next();!d.done;d=c.next())b.resourceInfo.push({resourceCache:d.value});Mr(b)}}
function Sr(a){var b=new oh;a=p(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=p(c.value);c=d.next().value;d=d.next().value;switch(c){case "GetBrowse_rid":var e=new th;D(e,1,c);D(e,2,String(d));sh(b,e);break;case "GetGuide_rid":e=new th;D(e,1,c);D(e,2,String(d));sh(b,e);break;case "GetHome_rid":e=new th;D(e,1,c);D(e,2,String(d));sh(b,e);break;case "GetPlayer_rid":e=new th;D(e,1,c);D(e,2,String(d));sh(b,e);break;case "GetSearch_rid":e=new th;D(e,1,c);D(e,2,String(d));sh(b,e);break;
case "GetSettings_rid":e=new th;D(e,1,c);D(e,2,String(d));sh(b,e);break;case "GetTrending_rid":e=new th;D(e,1,c);D(e,2,String(d));sh(b,e);break;case "GetWatchNext_rid":e=new th;D(e,1,c);D(e,2,String(d));sh(b,e);break;case "yt_red":D(b,14,!!d);break;case "yt_ad":D(b,9,!!d)}}return b}
function Ur(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Xb()&&a.setAttribute("nonce",Xb());return c?(a=T.getEntriesByName(c))&&a[0]&&(a=a[0],c=er(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Tr(){var a=[];if(document.querySelector&&T&&T.getEntriesByName)for(var b in $q)if($q.hasOwnProperty(b)){var c=$q[b];Ur(b,c)&&a.push(c)}return a}
function Rr(){var a=window.location.protocol,b=T.getEntriesByType("resource");b=fb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=hb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",dr(b.startTime)),Z("wffe",dr(b.responseEnd)))}
var Vr=window;Vr.ytcsi&&(Vr.ytcsi.info=Nr,Vr.ytcsi.tick=Z);var Wr="tokens consistency mss client_location entities store".split(" ");function Xr(a,b,c,d){this.o=a;this.J=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.za||(a.za={});a.za=Object.assign({},Pq,a.za)}
function Yr(a,b,c,d){if(void 0!==Xr.h){if(d=Xr.h,a=[a!==d.o,b!==d.J,c!==d.l,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new Q("InnerTubeTransportService is already initialized",a);
}else Xr.h=new Xr(a,b,c,d)}
function Zr(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?xq:c;var d=Gq(b,a.o);if(!d)return Yf(new Q("Error: No request builder found for command.",b));var e=d.o(b,void 0,c);return e?new Tf(function(f){var g,h,k;return w(function(m){if(1==m.h){h="cors"===(null==(g=e.ra)?void 0:g.mode)?"cors":void 0;if(a.l.yc){var q=e.config,u;q=null==q?void 0:null==(u=q.Ga)?void 0:u.sessionIndex;u=oq({sessionIndex:q});k=Object.assign({},$r(h),u);return m.s(2)}return t(m,as(e.config,
h),3)}2!=m.h&&(k=m.i);f(bs(a,e,k));m.h=0})}):Yf(new Q("Error: Failed to build request for command.",b))}
function bs(a,b,c){var d,e,f,g,h,k,m,q,u,C,v,E,F,H,R,O,S,ka;return w(function(N){switch(N.h){case 1:N.s(2);break;case 3:if((d=N.i)&&!d.isExpired())return N.return(Promise.resolve(d.h()));case 2:if((f=null==(e=b.config)?void 0:e.ep)&&a.h.has(f)&&M("web_memoize_inflight_requests"))return N.return(a.h.get(f));if(null==(g=b)?0:null==(h=g.ba)?0:h.context)for(k=p([]),m=k.next();!m.done;m=k.next())q=m.value,q.bp(b.ba.context);if(null==(u=a.i)?0:u.l(b.input,b.ba))return N.return(a.i.j(b.input,b.ba));C=JSON.stringify(b.ba);
b.ra=Object.assign({},b.ra,{headers:c});v=Object.assign({},b.ra);"POST"===b.ra.method&&(v=Object.assign({},v,{body:C}));(null==(E=b.config)?0:E.jc)&&Z(b.config.jc);F=a.J.fetch(b.input,v,b.config);f&&a.h.set(f,F);return t(N,F,4);case 4:H=N.i;f&&a.h.has(f)&&a.h.delete(f);(null==(R=b.config)?0:R.kc)&&Z(b.config.kc);if(H||null==(O=a.i)||!O.h(b.input,b.ba)){N.s(5);break}return t(N,a.i.i(b.input,b.ba),6);case 6:H=N.i;case 5:if(H&&a.j)for(S=p(Wr),m=S.next();!m.done;m=S.next())ka=m.value,a.j[ka]&&a.j[ka].handleResponse(H,
b);return N.return(H)}})}
function as(a,b){var c,d,e,f;return w(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Ga)?void 0:d.sessionIndex;var h=oq({sessionIndex:e});if(!(h instanceof Tf)){var k=new Tf(bb);Uf(k,2,h);h=k}return t(g,h,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},$r(b),f)))})}
function $r(a){var b={"Content-Type":"application/json"};M("enable_web_eom_visitor_data")&&A("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=A("EOM_VISITOR_DATA"):A("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=A("VISITOR_DATA"));M("track_webfe_innertube_auth_mismatch")&&(b["X-Youtube-Bootstrap-Logged-In"]=A("LOGGED_IN",!1));"cors"!==a&&((a=A("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=A("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=A("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),M("forward_domain_admin_state_on_embeds")&&(a=A("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var cs=["share/get_web_player_share_panel"],ds=["feedback"],es=["notification/modify_channel_preference"],fs=["browse/edit_playlist"],gs=["subscription/subscribe"],hs=["subscription/unsubscribe"];function is(){}
r(is,Mq);is.prototype.j=function(){return gs};
is.prototype.h=function(a){return a.subscribeEndpoint};
is.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(is.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function js(){}
r(js,Mq);js.prototype.j=function(){return hs};
js.prototype.h=function(a){return a.unsubscribeEndpoint};
js.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(js.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ks(){}
r(ks,Mq);ks.prototype.j=function(){return ds};
ks.prototype.h=function(a){return a.feedbackEndpoint};
ks.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(ks.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ls(){}
r(ls,Mq);ls.prototype.j=function(){return es};
ls.prototype.h=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
ls.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function ms(){}
r(ms,Mq);ms.prototype.j=function(){return fs};
ms.prototype.h=function(a){return a.playlistEditEndpoint};
ms.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function ns(){}
r(ns,Mq);ns.prototype.j=function(){return cs};
ns.prototype.h=function(a){return a.webPlayerShareEntityServiceEndpoint};
ns.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var sq=new qq("NETWORK_SLI_TOKEN");function os(a){this.h=a}
os.prototype.fetch=function(a,b){var c=this,d,e;return w(function(f){c.h&&(d=ac(bc(5,nc(a)))||"/UNKNOWN_PATH",c.h.start(d));e=new window.Request(a,b);return M("web_fetch_promise_cleanup_killswitch")?f.return(Promise.resolve(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){zp(g)}))):f.return(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){zp(g)}))})};
os.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.failure(),b=b.then(function(c){zp(new Q("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
os[pq]=[new rq];var ps=new qq("NETWORK_MANAGER_TOKEN");var qs;function rs(a){Cl.call(this,1,arguments);this.csn=a}
r(rs,Cl);var Ll=new Dl("screen-created",rs),ss=[],us=ts,vs=0;function ws(a,b,c,d,e,f,g){function h(){zp(new Q("newScreen() parent element does not have a VE - rootVe",b))}
var k=us();f=new Kp({veType:b,youtubeData:f,jspbYoutubeData:void 0});e={cttAuthInfo:e,X:k};if(M("il_via_jspb")){var m=new ch;m.S(k);dh(m,f.getAsJspb());c&&c.visualElement?(f=new eh,c.clientScreenNonce&&D(f,2,c.clientScreenNonce),fh(f,c.visualElement.getAsJspb()),g&&D(f,4,zh[g]),I(m,5,f)):c&&h();d&&D(m,3,d);pp(m,e,a)}else f={csn:k,pageVe:f.getAsJson()},c&&c.visualElement?(f.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(f.implicitGesture.gestureType=g)):
c&&h(),d&&(f.cloneCsn=d),a?Wo("screenCreated",f,a,e):Wj("screenCreated",f,e);Il(Ll,new rs(k));return k}
function xs(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:Tp(b),
X:b};d=p(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(ob(g)||!g.trackingParams&&!g.veType)&&zp(Error("Child VE logged with no data"));if(M("il_via_jspb")){var h=new gh;h.S(b);ih(h,c.getAsJspb());gb(e,function(k){k=k.getAsJspb();pd(h,3,ah,k)});
"UNDEFINED_CSN"==b?ys("visualElementAttached",h,f):qp(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:gb(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"==b?ys("visualElementAttached",c,f):a?Wo("visualElementAttached",c,a,f):Wj("visualElementAttached",c,f)}
function ts(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Kc(b,3)}
function ys(a,b,c){ss.push({payloadName:a,payload:b,options:c});vs||(vs=Ml())}
function Nl(a){if(ss){for(var b=p(ss),c=b.next();!c.done;c=b.next()){var d=c.value;if(d.payload)if(M("il_via_jspb"))switch(d.payload.S(a.csn),d.payloadName){case "screenCreated":pp(d.payload,d.options);break;case "visualElementAttached":qp(d.payload,d.options);break;case "visualElementShown":c=d.payload;d=d.options;var e=new xh;od(e,72,yh,c);lp(e,d);break;case "visualElementHidden":mp(d.payload,d.options);break;case "visualElementGestured":np(d.payload,d.options);break;case "visualElementStateChanged":op(d.payload,
d.options);break;default:zp(new Q("flushQueue unable to map payloadName to JSPB setter"))}else d.payload.csn=a.csn,Wo(d.payloadName,d.payload,null,d.options)}ss.length=0}vs=0}
;function zs(){this.i=new Set;this.h=new Set;this.j=new Map}
zs.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Ma(zs);function As(){this.o=[];this.C=[];this.h=[];this.l=[];this.m=[];this.i=new Set;this.u=new Map}
function Bs(a,b,c){c=void 0===c?0:c;b.then(function(d){a.i.has(c)&&a.j&&a.j();var e=Rp(c),f=Pp(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&xs(a.client,e,f,[Lp(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&xs(a.client,e,f,[Lp(d.playerResponse.trackingParams)])}})}
function Cs(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.o.push([b,c]);else{var e=Rp(d);c=c||Pp(d);e&&c&&xs(a.client,e,c,[b])}}
As.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Rp(void 0===c?0:c)){a=this.client;var e=Lp(d);var f="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";d={cttAuthInfo:Tp(c),X:c};if(M("il_via_jspb")){var g=new jh;g.S(c);e=e.getAsJspb();I(g,2,e);D(g,4,zh[f]);b&&I(g,3);"UNDEFINED_CSN"==c?ys("visualElementGestured",g,d):np(g,d,a)}else f={csn:c,ve:e.getAsJson(),gestureType:f},b&&(f.clientData=b),"UNDEFINED_CSN"==c?ys("visualElementGestured",f,d):a?Wo("visualElementGestured",
f,a,d):Wj("visualElementGestured",f,d);b=!0}else b=!1;else b=!1;return b};
function Ds(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Es(a,b,c);var f=Pp(c.layer);if(f){for(var g=p(a.o),h=g.next();!h.done;h=g.next())h=h.value,Cs(a,h[0],h[1]||f,c.layer);f=p(a.C);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=Rp(g);var m=k[0]||Pp(g);if(h&&m){g=a.client;var q=k[1];k={cttAuthInfo:Tp(h),X:h};M("il_via_jspb")?(q=new lh,q.S(h),m=m.getAsJspb(),I(q,2,m),"UNDEFINED_CSN"==h?ys("visualElementStateChanged",q,k):op(q,k,g)):(m={csn:h,ve:m.getAsJson(),
clientData:q},"UNDEFINED_CSN"==h?ys("visualElementStateChanged",m,k):g?Wo("visualElementStateChanged",m,g,k):Wj("visualElementStateChanged",m,k))}}}};
Rp(c.layer)||a.j();if(c.qb)for(var d=p(c.qb),e=d.next();!e.done;e=d.next())Bs(a,e.value,c.layer);else yp(Error("Delayed screen needs a data promise."))}
function Es(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.dc?c.dc:c.layer;var e=Rp(d);d=Pp(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=A("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=ws(a.client,b,f,c.pb,c.cttAuthInfo,g,c.Yo)}catch(m){Bp(m,{fp:b,rootVe:d,parentVisualElement:void 0,Wo:e,ap:f,pb:c.pb});yp(m);return}Up(k,b,
c.layer,c.cttAuthInfo);if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{b=p(Object.values(Jp));for(f=b.next();!f.done;f=b.next())if(Rp(f.value)===e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:Tp(e),X:e,sb:g},M("il_via_jspb")?(h=new kh,h.S(e),d=d.getAsJspb(),I(h,2,d),D(h,4,g?16:8),"UNDEFINED_CSN"==e?ys("visualElementHidden",h,f):mp(h,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"==e?ys("visualElementHidden",d,f):b?Wo("visualElementHidden",d,b,f):Wj("visualElementHidden",
d,f)));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");Mr({clientScreenNonce:k});zs.getInstance().clear();d=Pp(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||M("music_web_mark_root_visible"))&&(e={cttAuthInfo:Tp(k),X:k},M("il_via_jspb")?(b=new kh,b.S(k),f=d.getAsJspb(),I(b,2,f),D(b,4,1),"UNDEFINED_CSN"==k?ys("visualElementShown",b,e):(k=new xh,od(k,72,yh,b),lp(k,e))):(b={csn:k,ve:d.getAsJson(),eventType:1},"UNDEFINED_CSN"==k?ys("visualElementShown",b,e):
Wj("visualElementShown",b,e)));a.i.delete(c.layer||0);a.j=void 0;e=p(a.u);for(k=e.next();!k.done;k=e.next())b=p(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Cs(a,k,d,c.layer);for(c=0;c<a.l.length;c++){e=a.l[c];try{e()}catch(m){yp(m)}}for(c=a.l.length=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(m){yp(m)}}}
;function Fs(){var a,b;return w(function(c){if(1==c.h)return a=Xr.h,a?t(c,Zr(a),2):(zp(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),c.return(void 0));if(b=c.i)return b.errorMetadata?(yp(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),c.return(void 0)):c.return(b.Xo);zp(Error("Network request to get Datasync IDs failed."));return c.return(void 0)})}
;var Gs=x.caches,Hs;function Is(a){var b=a.indexOf(":");return-1===b?{Bb:a}:{Bb:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Js(){return w(function(a){if(void 0!==Hs)return a.return(Hs);Hs=new Promise(function(b){var c;return w(function(d){switch(d.h){case 1:return wa(d,2),t(d,Gs.open("test-only"),4);case 4:return t(d,Gs.delete("test-only"),5);case 5:xa(d,3);break;case 2:if(c=ya(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Hs)})}
function Ks(a){var b,c,d,e,f,g,h;w(function(k){if(1==k.h)return t(k,Js(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return t(k,Gs.keys(),3)}c=k.i;d=p(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Is(f),h=g.datasyncId,!h||a.includes(h)||b.push(Gs.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(q){return q})}))})}
function Ls(){var a,b,c,d,e,f,g;return w(function(h){if(1==h.h)return t(h,Js(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=ak("cache contains other");return t(h,Gs.keys(),3)}b=h.i;c=p(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Is(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Ms(){try{return!!self.localStorage}catch(a){return!1}}
;function Ns(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Os(a){if(Ms()){var b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Ns(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Ps(){if(!Ms())return!1;var a=ak(),b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next())if(c=Ns(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Qs(){Fs().then(function(a){a&&(kl(a),Ks(a),Os(a))})}
function Rs(){var a=new xm;$e.N(function(){var b,c,d,e;return w(function(f){switch(f.h){case 1:if(M("ytidb_clear_optimizations_killswitch")){f.s(2);break}b=ak("clear");if(b.startsWith("V")){var g=[b];kl(g);Ks(g);Os(g);return f.return()}c=Ps();return t(f,Ls(),3);case 3:return d=f.i,t(f,ll(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.H()?Qs():a.l.add("publicytnetworkstatus-online",Qs,!0,void 0,void 0),f.h=0}})})}
;function Ss(a){a&&(a.dataset?a.dataset[Ts("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Us(a,b){return a?a.dataset?a.dataset[Ts(b)]:a.getAttribute("data-"+b):null}
var Vs={};function Ts(a){return Vs[a]||(Vs[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Ws=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Xs=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Ys(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Ws,""),c=c.replace(Xs,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Zs(a,b,c)}
function Zs(a,b,c){c=void 0===c?null:c;var d=$s(a),e=document.getElementById(d),f=e&&Us(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=yn(d,b),b=""+Ra(b),at[b]=f),g||(e=bt(a,d,function(){Us(e,"loaded")||(Ss(e),Bn(d),mi(Xa(Cn,d),0))},c)))}
function bt(a,b,c,d){d=void 0===d?null:d;var e=Kd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Gd(e,Ib(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function ct(a){a=$s(a);var b=document.getElementById(a);b&&(Cn(a),b.parentNode.removeChild(b))}
function dt(a,b){a&&b&&(a=""+Ra(b),(a=at[a])&&An(a))}
function $s(a){var b=document.createElement("a");Ub(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Zb(a)}
var at={};var et=[],ft=!1;function gt(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&eq()&&"1"!=sb()){var a=function(){ft=!0;"google_ad_status"in window?Kh("DCLKSTAT",1):Kh("DCLKSTAT",2)};
try{Ys("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}et.push($e.N(function(){if(!(ft||"google_ad_status"in window)){try{dt("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}ft=!0;Kh("DCLKSTAT",3)}},5E3))}}
function ht(){var a=Number(A("DCLKSTAT",0));return isNaN(a)?0:a}
;function jt(){this.state=1;this.h=null}
l=jt.prototype;
l.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterScript)?d:null,f;d=null!=(f=a.interpreterUrl)?f:null;a.interpreterSafeScript&&(e=a.interpreterSafeScript,Cb("From proto message. b/166824318"),e=e.privateDoNotAccessOrElseSafeScriptWrappedValue||"",e=(f=zb())?f.createScript(e):e,e=(new Eb(e)).toString());a.interpreterSafeUrl&&(d=a.interpreterSafeUrl,Cb("From proto message. b/166824318"),d=Ib(d.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());kt(this,e,
d,a.program,b,c)}else zp(Error("Cannot initialize botguard without program"))};
function kt(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Ys(c,function(){window[g]?nt(a,d,g,e):(a.state=3,ct(c),zp(new Q("Unable to load Botguard","from "+c)))},f)):b?(f=Kd("SCRIPT"),f.textContent=b,f.nonce=Xb(),document.head.appendChild(f),document.head.removeChild(f),window[g]?nt(a,d,g,e):(a.state=4,zp(new Q("Unable to load Botguard from JS")))):zp(new Q("Unable to load VM; no url or JS provided"))}
l.isInitialized=function(){return!!this.h};
l.getState=function(){return this.state};
function nt(a,b,c,d){a.state=5;try{var e=new zd({program:b,globalName:c});e.vc.then(function(){a.state=6;d&&d(b)});
ot(a,e)}catch(f){a.state=7,f instanceof Error&&zp(f)}}
l.invoke=function(a){a=void 0===a?{}:a;if(this.h){var b=this.h;a={ob:a};if(b.i)throw Error("Already disposed");b=b.l([a.ob,a.xc])}else b=null;return b};
l.dispose=function(){ot(this,null);this.state=8};
function ot(a,b){ne(a.h);a.h=b}
;var pt=new jt;function qt(){return pt.isInitialized()}
function rt(a){a=void 0===a?{}:a;return pt.invoke(a)}
;function st(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Lj():d;this.l=c;this.j=d;this.i=new yd;this.h=a;a={};c=p(this.h.entries());for(d=c.next();!d.done;a={sa:a.sa,Ba:a.Ba},d=c.next()){var e=p(d.value);d=e.next().value;e=e.next().value;a.Ba=d;a.sa=e;d=function(f){return function(){f.sa.cb();b.h[f.Ba].Ra=!0;b.h.every(function(g){return!0===g.Ra})&&b.i.resolve()}}(a);
e=Hj(d,tt(this,a.sa));this.h[a.Ba]=Object.assign({},a.sa,{cb:d,Na:e})}}
function ut(a){var b=Array.from(a.h.keys()).sort(function(d,e){return tt(a,a.h[e])-tt(a,a.h[d])});
b=p(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.Na||c.Ra||(a.j.U(c.Na),Hj(c.cb,10))}
st.prototype.cancel=function(){for(var a=p(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.Na||b.Ra||this.j.U(b.Na),b.Ra=!0;this.i.resolve()};
function tt(a,b){var c;return null!=(c=b.priority)?c:a.l}
;function vt(a){this.state=a;this.plugins=[];this.m=void 0}
vt.prototype.install=function(){this.plugins.push.apply(this.plugins,fa(Ja.apply(0,arguments)))};
vt.prototype.transition=function(a,b){var c=this,d=this.C.find(function(f){return f.from===c.state&&f.B===a});
if(d){this.j&&(ut(this.j),this.j=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(wt(this,e,this.m),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function wt(a,b,c){return function(){var d=Ja.apply(0,arguments),e=b.filter(function(k){var m;return 10===(null!=(m=null!=c?c:k.priority)?m:0)}),f=b.filter(function(k){var m;
return 10!==(null!=(m=null!=c?c:k.priority)?m:0)});
Lj();var g={};e=p(e);for(var h=e.next();!h.done;g={Ca:g.Ca},h=e.next())g.Ca=h.value,Jj(function(k){return function(){k.Ca.ka.apply(k.Ca,fa(d))}}(g));
f=f.map(function(k){var m;return{cb:function(){k.ka.apply(k,fa(d))},
priority:null!=(m=null!=c?c:k.priority)?m:0}});
f.length&&(a.j=new st(f))}}
da.Object.defineProperties(vt.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function xt(a){vt.call(this,void 0===a?"document_active":a);var b=this;this.m=10;this.h=new Map;this.C=[{from:"document_active",B:"document_disposed_preventable",action:this.u},{from:"document_active",B:"document_disposed",action:this.l},{from:"document_disposed_preventable",B:"document_disposed",action:this.l},{from:"document_disposed_preventable",B:"flush_logs",action:this.o},{from:"document_disposed_preventable",B:"document_active",action:this.i},{from:"document_disposed",B:"flush_logs",action:this.o},
{from:"document_disposed",B:"document_active",action:this.i},{from:"document_disposed",B:"document_disposed",action:function(){}},
{from:"flush_logs",B:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
r(xt,vt);xt.prototype.u=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
xt.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
xt.prototype.o=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
xt.prototype.i=function(){this.h=new Map};function zt(a){vt.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.C=[{from:"document_visibility_unknown",B:"document_visible",action:this.i},{from:"document_visibility_unknown",B:"document_hidden",action:this.h},{from:"document_visibility_unknown",B:"document_foregrounded",action:this.o},{from:"document_visibility_unknown",B:"document_backgrounded",action:this.l},{from:"document_visible",B:"document_hidden",action:this.h},{from:"document_visible",B:"document_foregrounded",action:this.o},
{from:"document_visible",B:"document_visible",action:this.i},{from:"document_foregrounded",B:"document_visible",action:this.i},{from:"document_foregrounded",B:"document_hidden",action:this.h},{from:"document_foregrounded",B:"document_foregrounded",action:this.o},{from:"document_hidden",B:"document_visible",action:this.i},{from:"document_hidden",B:"document_backgrounded",action:this.l},{from:"document_hidden",B:"document_hidden",action:this.h},{from:"document_backgrounded",B:"document_hidden",action:this.h},
{from:"document_backgrounded",B:"document_backgrounded",action:this.l},{from:"document_backgrounded",B:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
M("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
r(zt,vt);zt.prototype.i=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
zt.prototype.h=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
zt.prototype.l=function(a,b){a(null==b?void 0:b.event)};
zt.prototype.o=function(a,b){a(null==b?void 0:b.event)};function At(){this.h=new xt;this.i=new zt}
At.prototype.install=function(){var a=Ja.apply(0,arguments);this.h.install.apply(this.h,fa(a));this.i.install.apply(this.i,fa(a))};function Bt(){At.call(this);var a={};this.install((a.document_disposed={ka:this.j},a));a={};this.install((a.flush_logs={ka:this.l},a))}
var Ct;r(Bt,At);Bt.prototype.l=function(){if(M("web_fp_via_jspb")){var a=new $g,b=Rp();b&&a.S(b);b=new xh;od(b,380,yh,a);lp(b);M("web_fp_via_jspb_and_json")&&Wj("finalPayload",{csn:Rp()})}else Wj("finalPayload",{csn:Rp()})};
Bt.prototype.j=function(){Dp(Ep)};function Dt(){}
Dt.getInstance=function(){var a=z("ytglobal.storage_");a||(a=new Dt,y("ytglobal.storage_",a));return a};
Dt.prototype.estimate=function(){var a,b,c;return w(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Et()):d.return()})};
function Et(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
y("ytglobal.storageClass_",Dt);function Uj(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=Nh("ytidb_transaction_ended_event_rate_limit",.02)}
Uj.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Ft(this,b);break;case "TRANSACTION_ENDED":this.j&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,
{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Ft(a,b){Dt.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Gt(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Gt(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Gt(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;var Ht=window;
function It(){var a=Ht.uaChPolyfill.state;if(0===a.type)Wj("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&a.syntheticUa===b,d={clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c};a.didAccessUaBeforePolyfillAvailable&&(d.uaAccessBeforePolyfillCount=a.uaAccessBeforePolyfillCount,a.firstAccessUaError&&(d.firstUaAccessStack=String(a.firstAccessUaError.stack).replace(/\n/g,""),yp(a.firstAccessUaError)),
d.polyfillAvailabilityDelayMs=a.polyfillAvailabilityDelay);Wj("clientHintsPolyfillEvent",d);c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(e){return'"'+e.brand+'"; v="'+e.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),Wj("clientHintsPolyfillDiagnostics",
b))}}
var Jt=!1;function Kt(){var a;1===(null==(a=Ht.uaChPolyfill)?void 0:a.state.type)?Jt||(Ht.uaChPolyfill.onReady=Kt,Jt=!0):Ht.uaChPolyfill&&It()}
;function Lt(a,b,c){K.call(this);var d=this;c=c||A("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.L="*";this.l=c;this.sessionId=null;this.channel="widget";this.M=!!a;this.A=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.M&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.L=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.u||0<=db(d.u,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.u=this.i=this.m=null;window.addEventListener("message",this.A)}
r(Lt,K);Lt.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.L)}catch(d){Uh(d)}}};
Lt.prototype.I=function(){window.removeEventListener("message",this.A);K.prototype.I.call(this)};function Mt(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Lt(!!A("WIDGET_ID_ENFORCE")),b=this.hc.bind(this);a.m=b;a.u=null;this.h.channel="widget";if(a=A("WIDGET_ID"))this.h.sessionId=a}
l=Mt.prototype;l.hc=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,Nt(this,a)),this.j[a]=!0)):this.jb(a,b,c)};
l.jb=function(){};
function Nt(a,b){return function(c){return a.sendMessage(b,c)}}
l.addEventListener=function(){};
l.Ub=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Xa());this.sendMessage("onReady");eb(this.i,this.Hb,this);this.i=[]};
l.Xa=function(){return null};
function Ot(a,b){a.sendMessage("infoDelivery",b)}
l.Hb=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.Hb({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.h=null};function Pt(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Qt(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Rt(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function St(a){Mt.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.sc.bind(this));this.addEventListener("onVolumeChange",this.tc.bind(this));this.addEventListener("onApiChange",this.lc.bind(this));this.addEventListener("onPlaybackQualityChange",this.oc.bind(this));this.addEventListener("onPlaybackRateChange",this.pc.bind(this));this.addEventListener("onStateChange",this.qc.bind(this));this.addEventListener("onWebglSettingsChanged",
this.uc.bind(this))}
r(St,Mt);l=St.prototype;
l.jb=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Pt(a)){var d=b;if(Qa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Qt(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Qt(e);break;case "loadPlaylist":case "cuePlaylist":e=Rt(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Pt(a)&&Ot(this,this.Xa())}};
l.onReady=function(){var a=this.Ub.bind(this);this.h.i=a};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.Xa=function(){if(!this.api)return null;var a=this.api.getApiInterface();jb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.qc=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Ot(this,a)};
l.oc=function(a){Ot(this,{playbackQuality:a})};
l.pc=function(a){Ot(this,{playbackRate:a})};
l.lc=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.tc=function(){Ot(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.sc=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Ot(this,a)};
l.uc=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Ot(this,a)};
l.dispose=function(){Mt.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Tt(a){K.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Db,this)}
r(Tt,K);l=Tt.prototype;l.start=function(){this.started||this.h()||(this.started=!0,this.connection.la("RECEIVING"))};
l.la=function(a,b){this.started&&!this.h()&&this.connection.la(a,b)};
l.Db=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Ut(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Vt(a,c))&&this.la(a,c))}}};
l.addListener=function(a){if(!(a in this.i)){var b=this.mc.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
l.mc=function(a,b){this.started&&!this.h()&&this.connection.la(a,this.Wa(a,b))};
l.Wa=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
l.I=function(){var a=this.connection;a.h()||kg(a.i,"command",this.Db,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);K.prototype.I.call(this)};function Wt(a,b){Tt.call(this,b);this.api=a;this.start()}
r(Wt,Tt);Wt.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Wt.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Ut(a,b){switch(a){case "loadVideoById":return a=Qt(b),[a];case "cueVideoById":return a=Qt(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Rt(b),[a];case "cuePlaylist":return a=Rt(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Vt(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Wt.prototype.Wa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Tt.prototype.Wa.call(this,a,b)};
Wt.prototype.I=function(){Tt.prototype.I.call(this);delete this.api};function Xt(a){a=void 0===a?!1:a;K.call(this);this.i=new L(a);pe(this,Xa(ne,this.i))}
Ya(Xt,K);Xt.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
Xt.prototype.l=function(a,b){this.h()||this.i.ja.apply(this.i,arguments)};function Yt(a,b,c){Xt.call(this);this.j=a;this.destination=b;this.id=c}
r(Yt,Xt);Yt.prototype.la=function(a,b){this.h()||this.j.la(this.destination,this.id,a,b)};
Yt.prototype.I=function(){this.destination=this.j=null;Xt.prototype.I.call(this)};function Zt(a,b,c){K.call(this);this.destination=a;this.origin=c;this.i=ln(window,"message",this.j.bind(this));this.connection=new Yt(this,a,b);pe(this,Xa(ne,this.connection))}
r(Zt,K);Zt.prototype.la=function(a,b,c,d){this.h()||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(Lf(a),this.origin))};
Zt.prototype.j=function(a){var b;if(b=!this.h())if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h()||c.l("command",b.command,b.data,a.origin))}};
Zt.prototype.I=function(){mn(this.i);this.destination=null;K.prototype.I.call(this)};function $t(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||ub(b);this.assets=a.assets||{};this.attrs=a.attrs||ub(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
$t.prototype.clone=function(){var a=new $t,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Na(c)?a[b]=ub(c):a[b]=c}return a};var au=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function bu(a){a=a||"";if(window.spf){var b=a.match(au);spf.style.load(a,b?b[1]:"",void 0)}else cu(a)}
function cu(a){var b=du(a),c=document.getElementById(b),d=c&&Us(c,"loaded");d||c&&!d||(c=eu(a,b,function(){Us(c,"loaded")||(Ss(c),Bn(b),mi(Xa(Cn,b),0))}))}
function eu(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ib(a);Vb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function du(a){var b=Kd("A");Cb("This URL is never added to the DOM");Ub(b,new Mb(a,Nb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Zb(a)}
;function fu(){K.call(this);this.i=[]}
r(fu,K);fu.prototype.I=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.ka,void 0)}K.prototype.I.call(this)};function gu(){fu.apply(this,arguments)}
r(gu,fu);function hu(a,b,c,d){K.call(this);var e=this;this.M=b;this.webPlayerContextConfig=d;this.Ta=!1;this.api={};this.Da=this.u=null;this.T=new L;this.i={};this.fa=this.Ea=this.elementId=this.Ua=this.config=null;this.Y=!1;this.l=this.A=null;this.Fa={};this.Lb=["onReady"];this.lastError=null;this.kb=NaN;this.L={};this.Mb=new gu(this);this.na=0;this.j=this.m=a;pe(this,Xa(ne,this.T));iu(this);ju(this);pe(this,Xa(ne,this.Mb));c?this.na=mi(function(){e.loadNewVideoConfig(c)},0):d&&(ku(this),lu(this))}
r(hu,K);l=hu.prototype;l.getId=function(){return this.M};
l.loadNewVideoConfig=function(a){if(!this.h()){this.na&&(ni(this.na),this.na=0);var b=a||{};b instanceof $t||(b=new $t(b));this.config=b;this.setConfig(a);lu(this);this.isReady()&&mu(this)}};
function ku(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.M,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.M:a.config.attrs.id=a.M);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.Ua=a;this.config=nu(a);ku(this);if(!this.Ea){var b;this.Ea=ou(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=Yd(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=Yd(Number(a)||a))};
function mu(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function pu(a){var b=!0,c=qu(a);c&&a.config&&(a=ru(a),b=Us(c,"version")===a);return b&&!!z("yt.player.Application.create")}
function lu(a){if(!a.h()&&!a.Y){var b=pu(a);if(b&&"html5"===(qu(a)?"html5":null))a.fa="html5",a.isReady()||su(a);else if(tu(a),a.fa="html5",b&&a.l&&a.m)a.m.appendChild(a.l),su(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.A=function(){c=!0;var d=uu(a,"player_bootstrap_method")?z("yt.player.Application.createAlternate")||z("yt.player.Application.create"):z("yt.player.Application.create");var e=a.config?nu(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig);su(a)};
a.Y=!0;b?a.A():(Ys(ru(a),a.A),(b=vu(a))&&bu(b),wu(a)&&!c&&y("yt.player.Application.create",null))}}}
function qu(a){var b=Jd(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function su(a){if(!a.h()){var b=qu(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!uu(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}xu(a)}else a.kb=mi(function(){su(a)},50)}}
function xu(a){iu(a);a.Ta=!0;var b=qu(a);if(b){a.u=yu(a,b,"addEventListener");a.Da=yu(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=yu(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.u&&a.u(g,a.i[g]);mu(a);a.Ea&&a.Ea(a.api);a.T.ja("onReady",a.api)}
function yu(a,b,c){var d=b[c];return function(){var e=Ja.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,zp(f))}}}
function iu(a){a.Ta=!1;if(a.Da)for(var b in a.i)a.i.hasOwnProperty(b)&&a.Da(b,a.i[b]);for(var c in a.L)a.L.hasOwnProperty(c)&&ni(Number(c));a.L={};a.u=null;a.Da=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ua};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.Ta};
function ju(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Bn("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Bn("WATCH_LATER_VIDEO_REMOVED",b)})}
l.addEventListener=function(a,b){var c=this,d=ou(this,b);d&&(0<=db(this.Lb,a)||this.i[a]||(b=zu(this,a),this.u&&this.u(a,b)),this.T.subscribe(a,d),"onReady"===a&&this.isReady()&&mi(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.h()||(b=ou(this,b))&&kg(this.T,a,b)};
function ou(a,b){var c=b;if("string"===typeof b){if(a.Fa[b])return a.Fa[b];c=function(){var d=Ja.apply(0,arguments),e=z(b);if(e)try{e.apply(x,d)}catch(f){yp(f)}};
a.Fa[b]=c}return c?c:null}
function zu(a,b){var c="ytPlayer"+b+a.M;a.i[b]=c;x[c]=function(d){var e=mi(function(){if(!a.h()){a.T.ja(b,null!=d?d:void 0);var f=a.L,g=String(e);g in f&&delete f[g]}},0);
pb(a.L,String(e))};
return c}
l.getPlayerType=function(){return this.fa||(qu(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function tu(a){a.cancel();iu(a);a.fa=null;a.config&&(a.config.loaded=!1);var b=qu(a);b&&(pu(a)||!wu(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.A&&dt(ru(this),this.A);ni(this.kb);this.Y=!1};
l.I=function(){tu(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){yp(b)}this.Fa=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(x[this.i[a]]=null);this.Ua=this.config=this.api=null;delete this.m;delete this.j;K.prototype.I.call(this)};
function wu(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function ru(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function vu(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function uu(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===$h(c||"","&")[b]}
function nu(a){for(var b={},c=p(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?ub(e):e}return b}
;var Au={},Bu="player_uid_"+(1E9*Math.random()>>>0);function Cu(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Jd(d):d;var e=Bu+"_"+Ra(d),f=Au[e];if(f&&c)return Du(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new hu(d,e,a,b);Au[e]=f;Bn("player-added",f.api);pe(f,function(){delete Au[f.getId()]});
return f.api}
function Du(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Eu=null,Fu=null,Gu=null;function Hu(){var a=Eu.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function Iu(a,b,c){a="ST-"+Zb(a).toString(36);b=b?fc(b):"";c=c||5;eq()&&Yi(a,b,c)}
;function Ju(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=A("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=A("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=cc(window.location.href);g&&f.push(g);g=cc(d);if(0<=db(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),Ub(f,d),d=f.href),d&&(d=dc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Rp()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
Iu(d,b,h)}else Iu(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var q=void 0===q?window:q;c=q.location;a=gc(a,k)+m;var u=void 0===u?Xd:u;a:{u=void 0===u?Xd:u;for(k=0;k<u.length;++k)if(m=u[k],m instanceof Sd&&m.isValid(a)){u=new Dd(a,Bd);break a}u=void 0}c.href=Fd(u||Ed)}return!0}
;y("yt.setConfig",Kh);y("yt.config.set",Kh);y("yt.setMsg",Wp);y("yt.msgs.set",Wp);y("yt.logging.errors.log",yp);
y("writeEmbed",function(){var a=A("PLAYER_CONFIG");if(!a){var b=A("PLAYER_VARS");b&&(a={args:b})}mq(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=A("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);M("embeds_js_api_set_1p_cookie")&&(c=ei(window.location.href),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));Kr();if((c=A("WEB_PLAYER_CONTEXT_CONFIGS"))&&
"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){c=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=ei(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Eu=Cu(a,c,!1)}else Eu=Cu(a);Eu.addEventListener("onVideoDataChange",Hu);a=A("POST_MESSAGE_ID","player");A("ENABLE_JS_API")?Gu=new St(Eu):A("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Fu=new Zt(window.parent,a,b),Gu=new Wt(Eu,Fu.connection));
gt();M("ytidb_create_logger_embed_killswitch")||Tj();a={};Ct||(Ct=new Bt);Ct.install((a.flush_logs={ka:function(){Ho()}},a));
M("networkless_logging_web_embedded")&&(M("embeds_web_enable_new_nwl")?Em():Mm());M("embeds_enable_ua_ch_polyfill")&&Kt();M("ytidb_clear_embedded_player")&&$e.N(function(){var e;if(!qs){wq||(wq=new tq);var f=wq;var g={fc:ps,Jb:os};f.providers.set(g.fc,g);g={nb:{feedbackEndpoint:Hq(ks),modifyChannelNotificationPreferenceEndpoint:Hq(ls),playlistEditEndpoint:Hq(ms),subscribeEndpoint:Hq(is),unsubscribeEndpoint:Hq(js),webPlayerShareEntityServiceEndpoint:Hq(ns)}};var h=M("web_enable_client_location_service")?
Dq.getInstance():void 0,k={};h&&(k.client_location=h);if(void 0===m){nq.h||(nq.h=new nq);var m=nq.h}void 0===e&&(e=f.resolve(ps));Yr(g,e,m,k);qs=Xr.h}Rs()})});
var Ku=Sh(function(){Pr();var a=bj.getInstance(),b=ej(119),c=1<window.devicePixelRatio;if(document.body&&yf(document.body,"exp-invert-logo"))if(c&&!yf(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!yf(d,"inverted-hdpi")){var e=wf(d);xf(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&yf(document.body,"inverted-hdpi")&&zf();if(b!=c){b="f"+(Math.floor(119/31)+1);d=fj(b)||0;d=c?d|67108864:d&-67108865;0==d?delete aj[b]:(c=d.toString(16),
aj[b]=c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in aj)d.push(f+"="+encodeURIComponent(String(aj[f])));Yi(b,d.join("&"),63072E3,a.i,c)}As.h||(As.h=new As);a=As.h;f=16623;var g=void 0===g?{}:g;Object.values(Xp).includes(f)||(zp(new Q("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.o=[];a.C=[];g.qb?Ds(a,f,g):Es(a,f,g)}),Lu=Sh(function(){Eu&&Eu.sendAbandonmentPing&&Eu.sendAbandonmentPing();
A("PL_ATT")&&pt.dispose();for(var a=$e,b=0,c=et.length;b<c;b++)a.U(et[b]);et.length=0;ct("//static.doubleclick.net/instream/ad_status.js");ft=!1;Kh("DCLKSTAT",0);oe(Gu,Fu);Eu&&(Eu.removeEventListener("onVideoDataChange",Hu),Eu.destroy())});
window.addEventListener?(window.addEventListener("load",Ku),window.addEventListener("pagehide",Lu)):window.attachEvent&&(window.attachEvent("onload",Ku),window.attachEvent("onunload",Lu));y("yt.abuse.player.botguardInitialized",z("yt.abuse.player.botguardInitialized")||qt);y("yt.abuse.player.invokeBotguard",z("yt.abuse.player.invokeBotguard")||rt);y("yt.abuse.dclkstatus.checkDclkStatus",z("yt.abuse.dclkstatus.checkDclkStatus")||ht);y("yt.player.exports.navigate",z("yt.player.exports.navigate")||Ju);
y("yt.util.activity.init",z("yt.util.activity.init")||qn);y("yt.util.activity.getTimeSinceActive",z("yt.util.activity.getTimeSinceActive")||tn);y("yt.util.activity.setTimestamp",z("yt.util.activity.setTimestamp")||rn);}).call(this);
