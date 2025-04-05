var xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ae(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var K={exports:{}},Y={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pe;function Ne(){return pe||(pe=1,function(r){function u(o,c){var e=o.length;o.push(c);e:for(;0<e;){var t=e-1>>>1,n=o[t];if(0<l(n,c))o[t]=c,o[e]=n,e=t;else break e}}function f(o){return o.length===0?null:o[0]}function s(o){if(o.length===0)return null;var c=o[0],e=o.pop();if(e!==c){o[0]=e;e:for(var t=0,n=o.length,b=n>>>1;t<b;){var _=2*(t+1)-1,w=o[_],d=_+1,v=o[d];if(0>l(w,e))d<n&&0>l(v,w)?(o[t]=v,o[d]=e,t=d):(o[t]=w,o[_]=e,t=_);else if(d<n&&0>l(v,e))o[t]=v,o[d]=e,t=d;else break e}}return c}function l(o,c){var e=o.sortIndex-c.sortIndex;return e!==0?e:o.id-c.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var O=performance;r.unstable_now=function(){return O.now()}}else{var I=Date,T=I.now();r.unstable_now=function(){return I.now()-T}}var y=[],S=[],k=1,m=null,a=3,h=!1,i=!1,g=!1,E=!1,p=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;function A(o){for(var c=f(S);c!==null;){if(c.callback===null)s(S);else if(c.startTime<=o)s(S),c.sortIndex=c.expirationTime,u(y,c);else break;c=f(S)}}function x(o){if(g=!1,A(o),!i)if(f(y)!==null)i=!0,R||(R=!0,U());else{var c=f(S);c!==null&&H(x,c.startTime-o)}}var R=!1,z=-1,C=5,N=-1;function D(){return E?!0:!(r.unstable_now()-N<C)}function F(){if(E=!1,R){var o=r.unstable_now();N=o;var c=!0;try{e:{i=!1,g&&(g=!1,q(z),z=-1),h=!0;var e=a;try{r:{for(A(o),m=f(y);m!==null&&!(m.expirationTime>o&&D());){var t=m.callback;if(typeof t=="function"){m.callback=null,a=m.priorityLevel;var n=t(m.expirationTime<=o);if(o=r.unstable_now(),typeof n=="function"){m.callback=n,A(o),c=!0;break r}m===f(y)&&s(y),A(o)}else s(y);m=f(y)}if(m!==null)c=!0;else{var b=f(S);b!==null&&H(x,b.startTime-o),c=!1}}break e}finally{m=null,a=e,h=!1}c=void 0}}finally{c?U():R=!1}}}var U;if(typeof j=="function")U=function(){j(F)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,M=B.port2;B.port1.onmessage=F,U=function(){M.postMessage(null)}}else U=function(){p(F,0)};function H(o,c){z=p(function(){o(r.unstable_now())},c)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(o){o.callback=null},r.unstable_forceFrameRate=function(o){0>o||125<o?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<o?Math.floor(1e3/o):5},r.unstable_getCurrentPriorityLevel=function(){return a},r.unstable_next=function(o){switch(a){case 1:case 2:case 3:var c=3;break;default:c=a}var e=a;a=c;try{return o()}finally{a=e}},r.unstable_requestPaint=function(){E=!0},r.unstable_runWithPriority=function(o,c){switch(o){case 1:case 2:case 3:case 4:case 5:break;default:o=3}var e=a;a=o;try{return c()}finally{a=e}},r.unstable_scheduleCallback=function(o,c,e){var t=r.unstable_now();switch(typeof e=="object"&&e!==null?(e=e.delay,e=typeof e=="number"&&0<e?t+e:t):e=t,o){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=e+n,o={id:k++,callback:c,priorityLevel:o,startTime:e,expirationTime:n,sortIndex:-1},e>t?(o.sortIndex=e,u(S,o),f(y)===null&&o===f(S)&&(g?(q(z),z=-1):g=!0,H(x,e-t))):(o.sortIndex=n,u(y,o),i||h||(i=!0,R||(R=!0,U()))),o},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(o){var c=a;return function(){var e=a;a=c;try{return o.apply(this,arguments)}finally{a=e}}}}(Y)),Y}var de;function ir(){return de||(de=1,K.exports=Ne()),K.exports}var W={},ye;function Fe(){if(ye)return W;ye=1,Object.defineProperty(W,"__esModule",{value:!0}),W.parse=I,W.serialize=S;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,u=/^[\u0021-\u003A\u003C-\u007E]*$/,f=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,O=(()=>{const a=function(){};return a.prototype=Object.create(null),a})();function I(a,h){const i=new O,g=a.length;if(g<2)return i;const E=(h==null?void 0:h.decode)||k;let p=0;do{const q=a.indexOf("=",p);if(q===-1)break;const j=a.indexOf(";",p),A=j===-1?g:j;if(q>A){p=a.lastIndexOf(";",q-1)+1;continue}const x=T(a,p,q),R=y(a,q,x),z=a.slice(x,R);if(i[z]===void 0){let C=T(a,q+1,A),N=y(a,A,C);const D=E(a.slice(C,N));i[z]=D}p=A+1}while(p<g);return i}function T(a,h,i){do{const g=a.charCodeAt(h);if(g!==32&&g!==9)return h}while(++h<i);return i}function y(a,h,i){for(;h>i;){const g=a.charCodeAt(--h);if(g!==32&&g!==9)return h+1}return i}function S(a,h,i){const g=(i==null?void 0:i.encode)||encodeURIComponent;if(!r.test(a))throw new TypeError(`argument name is invalid: ${a}`);const E=g(h);if(!u.test(E))throw new TypeError(`argument val is invalid: ${h}`);let p=a+"="+E;if(!i)return p;if(i.maxAge!==void 0){if(!Number.isInteger(i.maxAge))throw new TypeError(`option maxAge is invalid: ${i.maxAge}`);p+="; Max-Age="+i.maxAge}if(i.domain){if(!f.test(i.domain))throw new TypeError(`option domain is invalid: ${i.domain}`);p+="; Domain="+i.domain}if(i.path){if(!s.test(i.path))throw new TypeError(`option path is invalid: ${i.path}`);p+="; Path="+i.path}if(i.expires){if(!m(i.expires)||!Number.isFinite(i.expires.valueOf()))throw new TypeError(`option expires is invalid: ${i.expires}`);p+="; Expires="+i.expires.toUTCString()}if(i.httpOnly&&(p+="; HttpOnly"),i.secure&&(p+="; Secure"),i.partitioned&&(p+="; Partitioned"),i.priority)switch(typeof i.priority=="string"?i.priority.toLowerCase():void 0){case"low":p+="; Priority=Low";break;case"medium":p+="; Priority=Medium";break;case"high":p+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${i.priority}`)}if(i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:case"strict":p+="; SameSite=Strict";break;case"lax":p+="; SameSite=Lax";break;case"none":p+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${i.sameSite}`)}return p}function k(a){if(a.indexOf("%")===-1)return a;try{return decodeURIComponent(a)}catch{return a}}function m(a){return l.call(a)==="[object Date]"}return W}Fe();var Q={exports:{}},Z,he;function Ue(){if(he)return Z;he=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Z=r,Z}var X,me;function $e(){if(me)return X;me=1;var r=Ue();function u(){}function f(){}return f.resetWarningCache=u,X=function(){function s(I,T,y,S,k,m){if(m!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}s.isRequired=s;function l(){return s}var O={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:l,element:s,elementType:s,instanceOf:l,node:s,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:f,resetWarningCache:u};return O.PropTypes=O,O},X}var ge;function Be(){return ge||(ge=1,Q.exports=$e()()),Q.exports}var Me=Be();const or=Ae(Me);function ze(r){var u,f,s="";if(typeof r=="string"||typeof r=="number")s+=r;else if(typeof r=="object")if(Array.isArray(r)){var l=r.length;for(u=0;u<l;u++)r[u]&&(f=ze(r[u]))&&(s&&(s+=" "),s+=f)}else for(f in r)r[f]&&(s&&(s+=" "),s+=f);return s}function ur(){for(var r,u,f=0,s="",l=arguments.length;f<l;f++)(r=arguments[f])&&(u=ze(r))&&(s&&(s+=" "),s+=u);return s}var L={exports:{}},ee={exports:{}},re={},te,be;function He(){return be||(be=1,te=function(u){return u&&typeof u=="object"&&typeof u.copy=="function"&&typeof u.fill=="function"&&typeof u.readUInt8=="function"}),te}var V={exports:{}},ve;function We(){return ve||(ve=1,typeof Object.create=="function"?V.exports=function(u,f){u.super_=f,u.prototype=Object.create(f.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}})}:V.exports=function(u,f){u.super_=f;var s=function(){};s.prototype=f.prototype,u.prototype=new s,u.prototype.constructor=u}),V.exports}var we;function Je(){return we||(we=1,function(r){var u={},f=/%[sdj%]/g;r.format=function(e){if(!A(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(O(arguments[n]));return t.join(" ")}for(var n=1,b=arguments,_=b.length,w=String(e).replace(f,function(v){if(v==="%%")return"%";if(n>=_)return v;switch(v){case"%s":return String(b[n++]);case"%d":return Number(b[n++]);case"%j":try{return JSON.stringify(b[n++])}catch{return"[Circular]"}default:return v}}),d=b[n];n<_;d=b[++n])p(d)||!C(d)?w+=" "+d:w+=" "+O(d);return w},r.deprecate=function(e,t){if(R(xe.process))return function(){return r.deprecate(e,t).apply(this,arguments)};if(process.noDeprecation===!0)return e;var n=!1;function b(){if(!n){if(process.throwDeprecation)throw new Error(t);process.traceDeprecation?console.trace(t):console.error(t),n=!0}return e.apply(this,arguments)}return b};var s={},l;r.debuglog=function(e){if(R(l)&&(l=u.NODE_DEBUG||""),e=e.toUpperCase(),!s[e])if(new RegExp("\\b"+e+"\\b","i").test(l)){var t=process.pid;s[e]=function(){var n=r.format.apply(r,arguments);console.error("%s %d: %s",e,t,n)}}else s[e]=function(){};return s[e]};function O(e,t){var n={seen:[],stylize:T};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),E(t)?n.showHidden=t:t&&r._extend(n,t),R(n.showHidden)&&(n.showHidden=!1),R(n.depth)&&(n.depth=2),R(n.colors)&&(n.colors=!1),R(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=I),S(n,e,n.depth)}r.inspect=O,O.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},O.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};function I(e,t){var n=O.styles[t];return n?"\x1B["+O.colors[n][0]+"m"+e+"\x1B["+O.colors[n][1]+"m":e}function T(e,t){return e}function y(e){var t={};return e.forEach(function(n,b){t[n]=!0}),t}function S(e,t,n){if(e.customInspect&&t&&F(t.inspect)&&t.inspect!==r.inspect&&!(t.constructor&&t.constructor.prototype===t)){var b=t.inspect(n,e);return A(b)||(b=S(e,b,n)),b}var _=k(e,t);if(_)return _;var w=Object.keys(t),d=y(w);if(e.showHidden&&(w=Object.getOwnPropertyNames(t)),D(t)&&(w.indexOf("message")>=0||w.indexOf("description")>=0))return m(t);if(w.length===0){if(F(t)){var v=t.name?": "+t.name:"";return e.stylize("[Function"+v+"]","special")}if(z(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(N(t))return e.stylize(Date.prototype.toString.call(t),"date");if(D(t))return m(t)}var P="",$=!1,J=["{","}"];if(g(t)&&($=!0,J=["[","]"]),F(t)){var Ce=t.name?": "+t.name:"";P=" [Function"+Ce+"]"}if(z(t)&&(P=" "+RegExp.prototype.toString.call(t)),N(t)&&(P=" "+Date.prototype.toUTCString.call(t)),D(t)&&(P=" "+m(t)),w.length===0&&(!$||t.length==0))return J[0]+P+J[1];if(n<0)return z(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special");e.seen.push(t);var G;return $?G=a(e,t,n,d,w):G=w.map(function(De){return h(e,t,n,d,De,$)}),e.seen.pop(),i(G,P,J)}function k(e,t){if(R(t))return e.stylize("undefined","undefined");if(A(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(j(t))return e.stylize(""+t,"number");if(E(t))return e.stylize(""+t,"boolean");if(p(t))return e.stylize("null","null")}function m(e){return"["+Error.prototype.toString.call(e)+"]"}function a(e,t,n,b,_){for(var w=[],d=0,v=t.length;d<v;++d)c(t,String(d))?w.push(h(e,t,n,b,String(d),!0)):w.push("");return _.forEach(function(P){P.match(/^\d+$/)||w.push(h(e,t,n,b,P,!0))}),w}function h(e,t,n,b,_,w){var d,v,P;if(P=Object.getOwnPropertyDescriptor(t,_)||{value:t[_]},P.get?P.set?v=e.stylize("[Getter/Setter]","special"):v=e.stylize("[Getter]","special"):P.set&&(v=e.stylize("[Setter]","special")),c(b,_)||(d="["+_+"]"),v||(e.seen.indexOf(P.value)<0?(p(n)?v=S(e,P.value,null):v=S(e,P.value,n-1),v.indexOf(`
`)>-1&&(w?v=v.split(`
`).map(function($){return"  "+$}).join(`
`).substr(2):v=`
`+v.split(`
`).map(function($){return"   "+$}).join(`
`))):v=e.stylize("[Circular]","special")),R(d)){if(w&&_.match(/^\d+$/))return v;d=JSON.stringify(""+_),d.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(d=d.substr(1,d.length-2),d=e.stylize(d,"name")):(d=d.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),d=e.stylize(d,"string"))}return d+": "+v}function i(e,t,n){var b=e.reduce(function(_,w){return w.indexOf(`
`)>=0,_+w.replace(/\u001b\[\d\d?m/g,"").length+1},0);return b>60?n[0]+(t===""?"":t+`
 `)+" "+e.join(`,
  `)+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function g(e){return Array.isArray(e)}r.isArray=g;function E(e){return typeof e=="boolean"}r.isBoolean=E;function p(e){return e===null}r.isNull=p;function q(e){return e==null}r.isNullOrUndefined=q;function j(e){return typeof e=="number"}r.isNumber=j;function A(e){return typeof e=="string"}r.isString=A;function x(e){return typeof e=="symbol"}r.isSymbol=x;function R(e){return e===void 0}r.isUndefined=R;function z(e){return C(e)&&B(e)==="[object RegExp]"}r.isRegExp=z;function C(e){return typeof e=="object"&&e!==null}r.isObject=C;function N(e){return C(e)&&B(e)==="[object Date]"}r.isDate=N;function D(e){return C(e)&&(B(e)==="[object Error]"||e instanceof Error)}r.isError=D;function F(e){return typeof e=="function"}r.isFunction=F;function U(e){return e===null||typeof e=="boolean"||typeof e=="number"||typeof e=="string"||typeof e=="symbol"||typeof e>"u"}r.isPrimitive=U,r.isBuffer=He();function B(e){return Object.prototype.toString.call(e)}function M(e){return e<10?"0"+e.toString(10):e.toString(10)}var H=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function o(){var e=new Date,t=[M(e.getHours()),M(e.getMinutes()),M(e.getSeconds())].join(":");return[e.getDate(),H[e.getMonth()],t].join(" ")}r.log=function(){console.log("%s - %s",o(),r.format.apply(r,arguments))},r.inherits=We(),r._extend=function(e,t){if(!t||!C(t))return e;for(var n=Object.keys(t),b=n.length;b--;)e[n[b]]=t[n[b]];return e};function c(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(re)),re}var Se;function Le(){return Se||(Se=1,function(){var r=Je();function u(f){this.name="InvalidInputError",f?this.message=r.format('"%s" is not a valid input string for node-roll.',f):this.message="No input string was supplied to node-roll.",this.input=f}u.prototype=new Error,u.prototype.constructor=u,ee.exports=u}()),ee.exports}var ne={exports:{}},Oe;function Ve(){return Oe||(Oe=1,function(){ne.exports=function(r,u){return r+u}}()),ne.exports}var ie={exports:{}},_e;function Ge(){return _e||(_e=1,function(){ie.exports=function(r,u){var f=[],s=r.sort(function(O,I){return I-O}),l;for(l=0;l<s.length&&l<u/1;l=l+1)f.push(s[l]);return f}}()),ie.exports}var oe={exports:{}},Ee;function Ke(){return Ee||(Ee=1,function(){oe.exports=function(r,u){return r/u}}()),oe.exports}var ue={exports:{}},Re;function Ye(){return Re||(Re=1,function(){ue.exports=function(r,u){return r*u}}()),ue.exports}var ae={exports:{}},Pe;function Qe(){return Pe||(Pe=1,function(){ae.exports=function(r,u){return r-u}}()),ae.exports}var se={exports:{}},Te;function Ze(){return Te||(Te=1,function(){se.exports=function(r){return r.reduce(function(u,f){return u+f},0)}}()),se.exports}var fe={exports:{}},qe;function Xe(){return qe||(qe=1,function(){fe.exports=function(r,u){var f=[],s=r.sort(function(O,I){return O-I}),l;for(l=0;l<s.length&&l<u/1;l=l+1)f.push(s[l]);return f}}()),fe.exports}var le,Ie;function er(){return Ie||(Ie=1,le={add:Ve(),"best-of":Ge(),divide:Ke(),multiply:Ye(),subtract:Qe(),sum:Ze(),"worst-of":Xe()}),le}var ce={exports:{}},ke;function rr(){return ke||(ke=1,function(){ce.exports={"+":function(r){return["sum",["add",r]]},"-":function(r){return["sum",["subtract",r]]},"*":function(r){return["sum",["multiply",r]]},"/":function(r){return["sum",["divide",r]]},b:function(r){return[["best-of",r],"sum"]},w:function(r){return[["worst-of",r],"sum"]}}}()),ce.exports}var je;function tr(){return je||(je=1,function(){var r=Le(),u=er(),f=rr(),s=/^(\d*)d(\d+|\%)(([\+\-\/\*bw])(\d+))?(([\+\-\/\*])(\d+|(\d*)d(\d+|\%)(([\+\-\/\*bw])(\d+))?))*$/,l,O,I=!1,T=[];l=function(y){this.random=y||Math.random.bind(Math)},l.prototype.validate=function(y){return s.test(y)},l.prototype.parse=function(y){if(!this.validate(y))throw new r(y);var S=s.exec(y),k=S[1],m=S[2],a=!!S[3],h,i,g=[],E=0,p=y.split(/[\+\-]/),q,j;for((p[0].indexOf("b")>-1||p[0].indexOf("w")>-1)&&g.push(f[S[4]](parseInt(S[5],10))),j=1;j<p.length;j+=1)E+=p[j-1].length,h=y[E],E+=1,i=p[j],i.indexOf("d")>-1?(q=this.roll(i,!0),g.push(f[h](q.result))):g.push(f[h](parseInt(i,10)));return{quantity:k?parseInt(k,10):1,sides:m==="%"?100:parseInt(m,10),transformations:a||g.length>0?g.length>0?g:f[S[4]](parseInt(S[5],10)):["sum"],toString:function(){return y}}},l.prototype.roll=function(y,S){if(y)typeof y=="string"&&(y=this.parse(y));else throw new r;for(var k=[],m=[],a=[];k.length<y.quantity;)k.push(Math.floor(this.random()*y.sides+1));return T.push(k),m=y.transformations.reduce(function(h,i){var g,E,p=!1;return typeof i=="function"?g=i:typeof i=="string"?g=u[i]:i instanceof Array&&(i[0]instanceof Array?(I=!0,O=i[1],i=i[0]):i[1]instanceof Array&&(p=!0,O=i[0],i=i[1]),g=u[i[0]],E=i[1]),p===!0&&h[0]instanceof Array&&(h[0]=u[O](h[0])),h.unshift(g(h[0],E)),h},[k]),I===!0&&m[0]instanceof Array&&(m[1]=m[0],m[0]=u[O](m[0])),S||(T.length>1&&T.unshift(T.pop()),a=T.length===1?T[0]:T,T=[]),{input:y,calculations:m,rolled:a,result:m[0]}},L.exports=l,L.exports.InvalidInputError=r}()),L.exports}var nr=tr();const ar=Ae(nr);export{or as P,ar as R,ur as c,Ae as g,ir as r};
//# sourceMappingURL=vendor.B5jnI0H-.js.map
