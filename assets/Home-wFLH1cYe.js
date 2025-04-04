import{u as xe,a as Oe,r as _,j as i,b as Re,c as Ee}from"./index-CYQYJNFy.js";import{c as qe,g as De}from"./_commonjsHelpers-Cpj98o6Y.js";var M={exports:{}},L={exports:{}},T={},W,oe;function Ie(){return oe||(oe=1,W=function(o){return o&&typeof o=="object"&&typeof o.copy=="function"&&typeof o.fill=="function"&&typeof o.readUInt8=="function"}),W}var F={exports:{}},ie;function Pe(){return ie||(ie=1,typeof Object.create=="function"?F.exports=function(o,f){o.super_=f,o.prototype=Object.create(f.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}})}:F.exports=function(o,f){o.super_=f;var h=function(){};h.prototype=f.prototype,o.prototype=new h,o.prototype.constructor=o}),F.exports}var le;function ze(){return le||(le=1,function(t){var o={},f=/%[sdj%]/g;t.format=function(e){if(!I(e)){for(var r=[],n=0;n<arguments.length;n++)r.push(g(arguments[n]));return r.join(" ")}for(var n=1,m=arguments,S=m.length,b=String(e).replace(f,function(x){if(x==="%%")return"%";if(n>=S)return x;switch(x){case"%s":return String(m[n++]);case"%d":return Number(m[n++]);case"%j":try{return JSON.stringify(m[n++])}catch{return"[Circular]"}default:return x}}),p=m[n];n<S;p=m[++n])c(p)||!A(p)?b+=" "+p:b+=" "+g(p);return b},t.deprecate=function(e,r){if(P(qe.process))return function(){return t.deprecate(e,r).apply(this,arguments)};if(process.noDeprecation===!0)return e;var n=!1;function m(){if(!n){if(process.throwDeprecation)throw new Error(r);process.traceDeprecation?console.trace(r):console.error(r),n=!0}return e.apply(this,arguments)}return m};var h={},d;t.debuglog=function(e){if(P(d)&&(d=o.NODE_DEBUG||""),e=e.toUpperCase(),!h[e])if(new RegExp("\\b"+e+"\\b","i").test(d)){var r=process.pid;h[e]=function(){var n=t.format.apply(t,arguments);console.error("%s %d: %s",e,r,n)}}else h[e]=function(){};return h[e]};function g(e,r){var n={seen:[],stylize:O};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),a(r)?n.showHidden=r:r&&t._extend(n,r),P(n.showHidden)&&(n.showHidden=!1),P(n.depth)&&(n.depth=2),P(n.colors)&&(n.colors=!1),P(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=E),v(n,e,n.depth)}t.inspect=g,g.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},g.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};function E(e,r){var n=g.styles[r];return n?"\x1B["+g.colors[n][0]+"m"+e+"\x1B["+g.colors[n][1]+"m":e}function O(e,r){return e}function u(e){var r={};return e.forEach(function(n,m){r[n]=!0}),r}function v(e,r,n){if(e.customInspect&&r&&U(r.inspect)&&r.inspect!==t.inspect&&!(r.constructor&&r.constructor.prototype===r)){var m=r.inspect(n,e);return I(m)||(m=v(e,m,n)),m}var S=j(e,r);if(S)return S;var b=Object.keys(r),p=u(b);if(e.showHidden&&(b=Object.getOwnPropertyNames(r)),B(r)&&(b.indexOf("message")>=0||b.indexOf("description")>=0))return y(r);if(b.length===0){if(U(r)){var x=r.name?": "+r.name:"";return e.stylize("[Function"+x+"]","special")}if(C(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(k(r))return e.stylize(Date.prototype.toString.call(r),"date");if(B(r))return y(r)}var N="",z=!1,$=["{","}"];if(s(r)&&(z=!0,$=["[","]"]),U(r)){var Ne=r.name?": "+r.name:"";N=" [Function"+Ne+"]"}if(C(r)&&(N=" "+RegExp.prototype.toString.call(r)),k(r)&&(N=" "+Date.prototype.toUTCString.call(r)),B(r)&&(N=" "+y(r)),b.length===0&&(!z||r.length==0))return $[0]+N+$[1];if(n<0)return C(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special");e.seen.push(r);var K;return z?K=q(e,r,n,p,b):K=b.map(function(Se){return w(e,r,n,p,Se,z)}),e.seen.pop(),l(K,N,$)}function j(e,r){if(P(r))return e.stylize("undefined","undefined");if(I(r)){var n="'"+JSON.stringify(r).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(R(r))return e.stylize(""+r,"number");if(a(r))return e.stylize(""+r,"boolean");if(c(r))return e.stylize("null","null")}function y(e){return"["+Error.prototype.toString.call(e)+"]"}function q(e,r,n,m,S){for(var b=[],p=0,x=r.length;p<x;++p)se(r,String(p))?b.push(w(e,r,n,m,String(p),!0)):b.push("");return S.forEach(function(N){N.match(/^\d+$/)||b.push(w(e,r,n,m,N,!0))}),b}function w(e,r,n,m,S,b){var p,x,N;if(N=Object.getOwnPropertyDescriptor(r,S)||{value:r[S]},N.get?N.set?x=e.stylize("[Getter/Setter]","special"):x=e.stylize("[Getter]","special"):N.set&&(x=e.stylize("[Setter]","special")),se(m,S)||(p="["+S+"]"),x||(e.seen.indexOf(N.value)<0?(c(n)?x=v(e,N.value,null):x=v(e,N.value,n-1),x.indexOf(`
`)>-1&&(b?x=x.split(`
`).map(function(z){return"  "+z}).join(`
`).substr(2):x=`
`+x.split(`
`).map(function(z){return"   "+z}).join(`
`))):x=e.stylize("[Circular]","special")),P(p)){if(b&&S.match(/^\d+$/))return x;p=JSON.stringify(""+S),p.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(p=p.substr(1,p.length-2),p=e.stylize(p,"name")):(p=p.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),p=e.stylize(p,"string"))}return p+": "+x}function l(e,r,n){var m=e.reduce(function(S,b){return b.indexOf(`
`)>=0,S+b.replace(/\u001b\[\d\d?m/g,"").length+1},0);return m>60?n[0]+(r===""?"":r+`
 `)+" "+e.join(`,
  `)+" "+n[1]:n[0]+r+" "+e.join(", ")+" "+n[1]}function s(e){return Array.isArray(e)}t.isArray=s;function a(e){return typeof e=="boolean"}t.isBoolean=a;function c(e){return e===null}t.isNull=c;function D(e){return e==null}t.isNullOrUndefined=D;function R(e){return typeof e=="number"}t.isNumber=R;function I(e){return typeof e=="string"}t.isString=I;function G(e){return typeof e=="symbol"}t.isSymbol=G;function P(e){return e===void 0}t.isUndefined=P;function C(e){return A(e)&&H(e)==="[object RegExp]"}t.isRegExp=C;function A(e){return typeof e=="object"&&e!==null}t.isObject=A;function k(e){return A(e)&&H(e)==="[object Date]"}t.isDate=k;function B(e){return A(e)&&(H(e)==="[object Error]"||e instanceof Error)}t.isError=B;function U(e){return typeof e=="function"}t.isFunction=U;function ve(e){return e===null||typeof e=="boolean"||typeof e=="number"||typeof e=="string"||typeof e=="symbol"||typeof e>"u"}t.isPrimitive=ve,t.isBuffer=Ie();function H(e){return Object.prototype.toString.call(e)}function J(e){return e<10?"0"+e.toString(10):e.toString(10)}var we=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function je(){var e=new Date,r=[J(e.getHours()),J(e.getMinutes()),J(e.getSeconds())].join(":");return[e.getDate(),we[e.getMonth()],r].join(" ")}t.log=function(){console.log("%s - %s",je(),t.format.apply(t,arguments))},t.inherits=Pe(),t._extend=function(e,r){if(!r||!A(r))return e;for(var n=Object.keys(r),m=n.length;m--;)e[n[m]]=r[n[m]];return e};function se(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(T)),T}var ae;function Ce(){return ae||(ae=1,function(){var t=ze();function o(f){this.name="InvalidInputError",f?this.message=t.format('"%s" is not a valid input string for node-roll.',f):this.message="No input string was supplied to node-roll.",this.input=f}o.prototype=new Error,o.prototype.constructor=o,L.exports=o}()),L.exports}var Z={exports:{}},ue;function _e(){return ue||(ue=1,function(){Z.exports=function(t,o){return t+o}}()),Z.exports}var V={exports:{}},ce;function Ae(){return ce||(ce=1,function(){V.exports=function(t,o){var f=[],h=t.sort(function(g,E){return E-g}),d;for(d=0;d<h.length&&d<o/1;d=d+1)f.push(h[d]);return f}}()),V.exports}var Q={exports:{}},fe;function Be(){return fe||(fe=1,function(){Q.exports=function(t,o){return t/o}}()),Q.exports}var X={exports:{}},de;function Ue(){return de||(de=1,function(){X.exports=function(t,o){return t*o}}()),X.exports}var Y={exports:{}},pe;function $e(){return pe||(pe=1,function(){Y.exports=function(t,o){return t-o}}()),Y.exports}var ee={exports:{}},ge;function Me(){return ge||(ge=1,function(){ee.exports=function(t){return t.reduce(function(o,f){return o+f},0)}}()),ee.exports}var re={exports:{}},me;function Fe(){return me||(me=1,function(){re.exports=function(t,o){var f=[],h=t.sort(function(g,E){return g-E}),d;for(d=0;d<h.length&&d<o/1;d=d+1)f.push(h[d]);return f}}()),re.exports}var te,he;function Ge(){return he||(he=1,te={add:_e(),"best-of":Ae(),divide:Be(),multiply:Ue(),subtract:$e(),sum:Me(),"worst-of":Fe()}),te}var ne={exports:{}},ye;function ke(){return ye||(ye=1,function(){ne.exports={"+":function(t){return["sum",["add",t]]},"-":function(t){return["sum",["subtract",t]]},"*":function(t){return["sum",["multiply",t]]},"/":function(t){return["sum",["divide",t]]},b:function(t){return[["best-of",t],"sum"]},w:function(t){return[["worst-of",t],"sum"]}}}()),ne.exports}var be;function He(){return be||(be=1,function(){var t=Ce(),o=Ge(),f=ke(),h=/^(\d*)d(\d+|\%)(([\+\-\/\*bw])(\d+))?(([\+\-\/\*])(\d+|(\d*)d(\d+|\%)(([\+\-\/\*bw])(\d+))?))*$/,d,g,E=!1,O=[];d=function(u){this.random=u||Math.random.bind(Math)},d.prototype.validate=function(u){return h.test(u)},d.prototype.parse=function(u){if(!this.validate(u))throw new t(u);var v=h.exec(u),j=v[1],y=v[2],q=!!v[3],w,l,s=[],a=0,c=u.split(/[\+\-]/),D,R;for((c[0].indexOf("b")>-1||c[0].indexOf("w")>-1)&&s.push(f[v[4]](parseInt(v[5],10))),R=1;R<c.length;R+=1)a+=c[R-1].length,w=u[a],a+=1,l=c[R],l.indexOf("d")>-1?(D=this.roll(l,!0),s.push(f[w](D.result))):s.push(f[w](parseInt(l,10)));return{quantity:j?parseInt(j,10):1,sides:y==="%"?100:parseInt(y,10),transformations:q||s.length>0?s.length>0?s:f[v[4]](parseInt(v[5],10)):["sum"],toString:function(){return u}}},d.prototype.roll=function(u,v){if(u)typeof u=="string"&&(u=this.parse(u));else throw new t;for(var j=[],y=[],q=[];j.length<u.quantity;)j.push(Math.floor(this.random()*u.sides+1));return O.push(j),y=u.transformations.reduce(function(w,l){var s,a,c=!1;return typeof l=="function"?s=l:typeof l=="string"?s=o[l]:l instanceof Array&&(l[0]instanceof Array?(E=!0,g=l[1],l=l[0]):l[1]instanceof Array&&(c=!0,g=l[0],l=l[1]),s=o[l[0]],a=l[1]),c===!0&&w[0]instanceof Array&&(w[0]=o[g](w[0])),w.unshift(s(w[0],a)),w},[j]),E===!0&&y[0]instanceof Array&&(y[1]=y[0],y[0]=o[g](y[0])),v||(O.length>1&&O.unshift(O.pop()),q=O.length===1?O[0]:O,O=[]),{input:u,calculations:y,rolled:q,result:y[0]}},M.exports=d,M.exports.InvalidInputError=t}()),M.exports}var Je=He();const Ke=De(Je),Le=new Ke,Te=()=>{const{player:t,addGold:o}=xe(),{dice:f}=Oe(),[h,d]=_.useState(!1),g=_.useRef([]);_.useEffect(()=>{g.current=g.current.slice(0,t.dices.length)},[t.dices]);const E=async()=>{if(h)return;d(!0);const u=[...t.dices],v=t.upgrades.rollSpeed||0,j=u.map(w=>{const l=f[w]||{sides:6,multiplier:1},s=Le.roll(`1d${l.sides}`).result;return{diceType:w,result:s,finalResult:s*l.multiplier,sides:l.sides}}),y=j.reduce((w,{finalResult:l})=>w+l,0),q=u.map((w,l)=>new Promise(s=>{var C;const a=(C=g.current[l])==null?void 0:C.querySelector(".dice-text");if(!a){s();return}let c=!1;const D=j[l].sides;a.classList.add("rolling");const R=setInterval(()=>{c||(a.textContent=Math.floor(Math.random()*D)+1)},50),I=Math.random()*3+2,G=Math.min(.5*v*1e3,I*1e3-500),P=Math.max(500,I*1e3-G);setTimeout(()=>{c=!0,clearInterval(R),a.classList.remove("rolling"),a.textContent=j[l].result,s()},P)}));await Promise.all(q),o(y),d(!1)},O={common:"border-gray-400 text-gray-600",uncommon:"border-green-500 text-green-500",rare:"border-blue-500 text-blue-500",epic:"border-purple-500 text-purple-500",legendary:"border-yellow-500 text-yellow-500"};return i.jsxs("div",{className:"flex content-center items-center h-screen w-[66vw] flex-col relative",children:[i.jsx("div",{className:"grid grid-cols-5 gap-x-[5vh] gap-y-[5vw] w-[85%] min-h-[66vh] justify-items-center mt-[5vh] mb-[15vh] overflow-y-auto p-2.5",children:t.dices.map((u,v)=>{const j=f[u]||{multiplier:1};return i.jsxs("div",{ref:y=>g.current[v]=y,className:`dice w-[120px] h-[120px] bg-white border-2 ${O[j.id||"common"]} flex justify-center items-center text-[50px] font-bold rounded-[15px] shadow-[0_4px_8px_rgba(0,0,0,0.2)] transition-transform duration-200 ease-in-out transform hover:scale-105 cursor-pointer relative`,children:[i.jsx("p",{className:"dice-text",children:"1"}),i.jsxs("div",{className:"absolute bottom-2 right-2 text-[16px] font-semibold text-gray-600",children:["x",j.multiplier]})]},`dice-${u}-${v}`)})}),i.jsx("button",{onClick:E,disabled:h,className:`absolute bottom-5 left-1/2 transform -translate-x-1/2 px-8 py-4 text-lg cursor-pointer border-none rounded-full transition-all duration-300 ease-in-out ${h?"bg-gray-400 cursor-not-allowed":"bg-green-500 hover:bg-green-600 text-white"}`,children:h?"Rolling...":"Roll Dice"})]})},We=()=>{const{player:t,removeGold:o,addDice:f,getUpgrades:h,addUpgrade:d}=xe(),{upgrades:g}=Re(),{Packs:E}=Ee(),[O,u]=_.useState("upgrades"),[v,j]=_.useState(null),[y,q]=_.useState({}),w=(s,a=1)=>{const c=g.find(I=>I.id===s);if(!c){console.error(`Upgrade ${s} not found.`);return}const D=y[s]||0,R=c.cost*(D+1);t.gold>=R?(o(R),d(s,a),q(I=>({...I,[s]:D+1})),q(h())):console.log(`Need ${R} gold (have ${t.gold})`)},l=(s,a)=>{if(t.gold>=a.cost){o(a.cost);const c=a.chooseItem();f(c),j(s),setTimeout(()=>j(null),250)}else console.log("Not Enough Gold")};return _.useEffect(()=>{q(h())},[t.upgrades]),i.jsxs("aside",{className:"w-[33vw] h-screen border border-black p-5 box-border bg-[#f8f8f8] flex flex-col text-center",children:[i.jsxs("div",{className:"w-full flex justify-between items-center mb-5",children:[i.jsxs("p",{className:"text-lg font-semibold",children:["Gold: ",t.gold]}),i.jsxs("div",{className:"flex gap-2",children:[i.jsx("button",{onClick:()=>u("upgrades"),className:"px-3 py-1 bg-gray-300 rounded hover:bg-gray-400",children:"Upgrades"}),i.jsx("button",{onClick:()=>u("packs"),className:"px-3 py-1 bg-gray-300 rounded hover:bg-gray-400",children:"Packs"})]})]}),O==="upgrades"&&i.jsxs("div",{className:"flex flex-col overflow-x-hidden md:overflow-x-scroll",children:[i.jsx("div",{className:"relative mb-5",children:i.jsx("div",{className:"overflow-x-scroll whitespace-nowrap pb-3",children:i.jsx("div",{className:"flex gap-4 max-h-max mb-1",children:Object.entries(y).filter(([s,a])=>a>0).map(([s,a])=>{const c=g.find(D=>D.id===s);return c?i.jsx("div",{className:"flex-shrink-0 w-[calc(33.33%-1rem)] sm:w-[calc(25%-1rem)] md:w-[calc(20%-1rem)]",children:i.jsxs("div",{className:"flex flex-col items-center p-4 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300",children:[i.jsx("img",{src:c.image,alt:c.title,className:"w-20 h-20 mb-2 object-cover rounded-md"}),i.jsx("span",{className:"font-semibold text-lg",children:c.title}),i.jsxs("span",{className:"text-sm text-gray-600",children:["Owned: ",a]})]})},s):null})})})}),i.jsx("div",{className:"overflow-y-scroll",children:i.jsx("div",{className:"space-y-5 mr-5",children:g.map(s=>{const a=y[s.id]||0,c=s.cost*(a+1);return i.jsxs("div",{className:"grid grid-cols-2 grid-rows-2 gap-3 p-5 border rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300",children:[i.jsxs("h2",{className:"col-start-1 row-start-1 self-start justify-self-start text-xl font-semibold text-gray-800",children:[s.title," ",a>0&&`(Lv. ${a})`]}),i.jsxs("h4",{className:"col-start-2 row-start-1 self-start justify-self-end text-md text-gray-700",children:["Cost: ",c]}),i.jsx("p",{className:"col-start-1 row-start-2 self-end justify-self-start text-sm text-gray-500",children:s.description}),i.jsx("button",{onClick:()=>w(s.id),className:`col-start-2 row-start-2 self-end justify-self-end bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200 ${t.gold<c?"opacity-50 cursor-not-allowed":"cursor-pointer"}`,disabled:t.gold<c,children:a>0?"Upgrade":"Buy"})]},s.id)})})})]}),O==="packs"&&i.jsx("div",{className:"h-full overflow-y-auto flex flex-col gap-4 p-2 border rounded",children:Object.entries(E).map(([s,a])=>i.jsxs("div",{className:"grid grid-cols-1 gap-2 p-4 border rounded bg-white shadow",children:[i.jsx("h2",{className:"text-xl font-bold",children:s}),i.jsxs("p",{className:"text-gray-700",children:["Cost: ",a.cost," coins"]}),i.jsx("button",{className:"bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded",onClick:()=>l(s,a),disabled:v===s,children:v===s?"Opened":`Open ${s}`})]},s))})]})},Qe=()=>i.jsxs("main",{className:"bg-[#e0f7fa] m-0 flex content-center items-center min-h-screen h-full",children:[i.jsx(We,{}),i.jsx(Te,{})]});export{Qe as default};
//# sourceMappingURL=Home-wFLH1cYe.js.map
