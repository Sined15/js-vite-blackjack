(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))e(u);new MutationObserver(u=>{for(const i of u)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&e(f)}).observe(document,{childList:!0,subtree:!0});function t(u){const i={};return u.integrity&&(i.integrity=u.integrity),u.referrerPolicy&&(i.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?i.credentials="include":u.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(u){if(u.ep)return;u.ep=!0;const i=t(u);fetch(u.href,i)}})();const $n=n=>{if(!n)throw new Error("La carta es un argumento obligatorio");const r=document.createElement("img");return r.src=`assets/cartas/${n}.png`,r.classList.add("carta"),r};var Cn="1.13.6",Pn=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||Function("return this")()||{},Y=Array.prototype,ln=Object.prototype,Tn=typeof Symbol<"u"?Symbol.prototype:null,$r=Y.push,C=Y.slice,V=ln.toString,Cr=ln.hasOwnProperty,zn=typeof ArrayBuffer<"u",zr=typeof DataView<"u",Hr=Array.isArray,In=Object.keys,Sn=Object.create,Bn=zn&&ArrayBuffer.isView,Jr=isNaN,Ur=isFinite,Hn=!{toString:null}.propertyIsEnumerable("toString"),Ln=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],Wr=Math.pow(2,53)-1;function d(n,r){return r=r==null?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),u=0;u<t;u++)e[u]=arguments[u+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var i=Array(r+1);for(u=0;u<r;u++)i[u]=arguments[u];return i[r]=e,n.apply(this,i)}}function M(n){var r=typeof n;return r==="function"||r==="object"&&!!n}function Gr(n){return n===null}function Jn(n){return n===void 0}function Un(n){return n===!0||n===!1||V.call(n)==="[object Boolean]"}function Xr(n){return!!(n&&n.nodeType===1)}function h(n){var r="[object "+n+"]";return function(t){return V.call(t)===r}}const an=h("String"),Wn=h("Number"),Qr=h("Date"),Yr=h("RegExp"),Zr=h("Error"),Gn=h("Symbol"),Xn=h("ArrayBuffer");var Qn=h("Function"),Kr=Pn.document&&Pn.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof Kr!="function"&&(Qn=function(n){return typeof n=="function"||!1});const g=Qn,Yn=h("Object");var Zn=zr&&Yn(new DataView(new ArrayBuffer(8))),cn=typeof Map<"u"&&Yn(new Map),xr=h("DataView");function kr(n){return n!=null&&g(n.getInt8)&&Xn(n.buffer)}const W=Zn?kr:xr,P=Hr||h("Array");function O(n,r){return n!=null&&Cr.call(n,r)}var b=h("Arguments");(function(){b(arguments)||(b=function(n){return O(n,"callee")})})();const sn=b;function br(n){return!Gn(n)&&Ur(n)&&!isNaN(parseFloat(n))}function Kn(n){return Wn(n)&&Jr(n)}function xn(n){return function(){return n}}function kn(n){return function(r){var t=n(r);return typeof t=="number"&&t>=0&&t<=Wr}}function bn(n){return function(r){return r==null?void 0:r[n]}}const G=bn("byteLength"),jr=kn(G);var nt=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;function rt(n){return Bn?Bn(n)&&!W(n):jr(n)&&nt.test(V.call(n))}const jn=zn?rt:xn(!1),m=bn("length");function tt(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(u){return r[u]===!0},push:function(u){return r[u]=!0,n.push(u)}}}function nr(n,r){r=tt(r);var t=Ln.length,e=n.constructor,u=g(e)&&e.prototype||ln,i="constructor";for(O(n,i)&&!r.contains(i)&&r.push(i);t--;)i=Ln[t],i in n&&n[i]!==u[i]&&!r.contains(i)&&r.push(i)}function v(n){if(!M(n))return[];if(In)return In(n);var r=[];for(var t in n)O(n,t)&&r.push(t);return Hn&&nr(n,r),r}function et(n){if(n==null)return!0;var r=m(n);return typeof r=="number"&&(P(n)||an(n)||sn(n))?r===0:m(v(n))===0}function rr(n,r){var t=v(r),e=t.length;if(n==null)return!e;for(var u=Object(n),i=0;i<e;i++){var f=t[i];if(r[f]!==u[f]||!(f in u))return!1}return!0}function c(n){if(n instanceof c)return n;if(!(this instanceof c))return new c(n);this._wrapped=n}c.VERSION=Cn;c.prototype.value=function(){return this._wrapped};c.prototype.valueOf=c.prototype.toJSON=c.prototype.value;c.prototype.toString=function(){return String(this._wrapped)};function Dn(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,G(n))}var Rn="[object DataView]";function j(n,r,t,e){if(n===r)return n!==0||1/n===1/r;if(n==null||r==null)return!1;if(n!==n)return r!==r;var u=typeof n;return u!=="function"&&u!=="object"&&typeof r!="object"?!1:tr(n,r,t,e)}function tr(n,r,t,e){n instanceof c&&(n=n._wrapped),r instanceof c&&(r=r._wrapped);var u=V.call(n);if(u!==V.call(r))return!1;if(Zn&&u=="[object Object]"&&W(n)){if(!W(r))return!1;u=Rn}switch(u){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:+n==0?1/+n===1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return Tn.valueOf.call(n)===Tn.valueOf.call(r);case"[object ArrayBuffer]":case Rn:return tr(Dn(n),Dn(r),t,e)}var i=u==="[object Array]";if(!i&&jn(n)){var f=G(n);if(f!==G(r))return!1;if(n.buffer===r.buffer&&n.byteOffset===r.byteOffset)return!0;i=!0}if(!i){if(typeof n!="object"||typeof r!="object")return!1;var o=n.constructor,a=r.constructor;if(o!==a&&!(g(o)&&o instanceof o&&g(a)&&a instanceof a)&&"constructor"in n&&"constructor"in r)return!1}t=t||[],e=e||[];for(var l=t.length;l--;)if(t[l]===n)return e[l]===r;if(t.push(n),e.push(r),i){if(l=n.length,l!==r.length)return!1;for(;l--;)if(!j(n[l],r[l],t,e))return!1}else{var s=v(n),p;if(l=s.length,v(r).length!==l)return!1;for(;l--;)if(p=s[l],!(O(r,p)&&j(n[p],r[p],t,e)))return!1}return t.pop(),e.pop(),!0}function ut(n,r){return j(n,r)}function z(n){if(!M(n))return[];var r=[];for(var t in n)r.push(t);return Hn&&nr(n,r),r}function vn(n){var r=m(n);return function(t){if(t==null)return!1;var e=z(t);if(m(e))return!1;for(var u=0;u<r;u++)if(!g(t[n[u]]))return!1;return n!==ir||!g(t[hn])}}var hn="forEach",er="has",pn=["clear","delete"],ur=["get",er,"set"],it=pn.concat(hn,ur),ir=pn.concat(ur),ft=["add"].concat(pn,hn,er);const ot=cn?vn(it):h("Map"),lt=cn?vn(ir):h("WeakMap"),at=cn?vn(ft):h("Set"),ct=h("WeakSet");function L(n){for(var r=v(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function st(n){for(var r=v(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e}function fr(n){for(var r={},t=v(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function nn(n){var r=[];for(var t in n)g(n[t])&&r.push(t);return r.sort()}function gn(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||t==null)return t;for(var u=1;u<e;u++)for(var i=arguments[u],f=n(i),o=f.length,a=0;a<o;a++){var l=f[a];(!r||t[l]===void 0)&&(t[l]=i[l])}return t}}const or=gn(z),X=gn(v),lr=gn(z,!0);function vt(){return function(){}}function ar(n){if(!M(n))return{};if(Sn)return Sn(n);var r=vt();r.prototype=n;var t=new r;return r.prototype=null,t}function ht(n,r){var t=ar(n);return r&&X(t,r),t}function pt(n){return M(n)?P(n)?n.slice():or({},n):n}function gt(n,r){return r(n),n}function cr(n){return P(n)?n:[n]}c.toPath=cr;function H(n){return c.toPath(n)}function dn(n,r){for(var t=r.length,e=0;e<t;e++){if(n==null)return;n=n[r[e]]}return t?n:void 0}function sr(n,r,t){var e=dn(n,H(r));return Jn(e)?t:e}function dt(n,r){r=H(r);for(var t=r.length,e=0;e<t;e++){var u=r[e];if(!O(n,u))return!1;n=n[u]}return!!t}function mn(n){return n}function q(n){return n=X({},n),function(r){return rr(r,n)}}function yn(n){return n=H(n),function(r){return dn(r,n)}}function J(n,r,t){if(r===void 0)return n;switch(t??3){case 1:return function(e){return n.call(r,e)};case 3:return function(e,u,i){return n.call(r,e,u,i)};case 4:return function(e,u,i,f){return n.call(r,e,u,i,f)}}return function(){return n.apply(r,arguments)}}function vr(n,r,t){return n==null?mn:g(n)?J(n,r,t):M(n)&&!P(n)?q(n):yn(n)}function wn(n,r){return vr(n,r,1/0)}c.iteratee=wn;function y(n,r,t){return c.iteratee!==wn?c.iteratee(n,r):vr(n,r,t)}function mt(n,r,t){r=y(r,t);for(var e=v(n),u=e.length,i={},f=0;f<u;f++){var o=e[f];i[o]=r(n[o],o,n)}return i}function hr(){}function yt(n){return n==null?hr:function(r){return sr(n,r)}}function wt(n,r,t){var e=Array(Math.max(0,n));r=J(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e}function rn(n,r){return r==null&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}const F=Date.now||function(){return new Date().getTime()};function pr(n){var r=function(i){return n[i]},t="(?:"+v(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(i){return i=i==null?"":""+i,e.test(i)?i.replace(u,r):i}}const gr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},_t=pr(gr),At=fr(gr),Et=pr(At),Ot=c.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,Nt={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Mt=/\\|'|\r|\n|\u2028|\u2029/g;function Pt(n){return"\\"+Nt[n]}var Tt=/^\s*(\w|\$)+\s*$/;function It(n,r,t){!r&&t&&(r=t),r=lr({},r,c.templateSettings);var e=RegExp([(r.escape||K).source,(r.interpolate||K).source,(r.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(l,s,p,Nn,Mn){return i+=n.slice(u,Mn).replace(Mt,Pt),u=Mn+l.length,s?i+=`'+
((__t=(`+s+`))==null?'':_.escape(__t))+
'`:p?i+=`'+
((__t=(`+p+`))==null?'':__t)+
'`:Nn&&(i+=`';
`+Nn+`
__p+='`),l}),i+=`';
`;var f=r.variable;if(f){if(!Tt.test(f))throw new Error("variable is not a bare identifier: "+f)}else i=`with(obj||{}){
`+i+`}
`,f="obj";i=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`+i+`return __p;
`;var o;try{o=new Function(f,"_",i)}catch(l){throw l.source=i,l}var a=function(l){return o.call(this,l,c)};return a.source="function("+f+`){
`+i+"}",a}function St(n,r,t){r=H(r);var e=r.length;if(!e)return g(t)?t.call(n):t;for(var u=0;u<e;u++){var i=n==null?void 0:n[r[u]];i===void 0&&(i=t,u=e),n=g(i)?i.call(n):i}return n}var Bt=0;function Lt(n){var r=++Bt+"";return n?n+r:r}function Dt(n){var r=c(n);return r._chain=!0,r}function dr(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=ar(n.prototype),f=n.apply(i,u);return M(f)?f:i}var D=d(function(n,r){var t=D.placeholder,e=function(){for(var u=0,i=r.length,f=Array(i),o=0;o<i;o++)f[o]=r[o]===t?arguments[u++]:r[o];for(;u<arguments.length;)f.push(arguments[u++]);return dr(n,e,this,this,f)};return e});D.placeholder=c;const mr=d(function(n,r,t){if(!g(n))throw new TypeError("Bind must be called on a function");var e=d(function(u){return dr(n,e,r,this,t.concat(u))});return e}),w=kn(m);function T(n,r,t,e){if(e=e||[],!r&&r!==0)r=1/0;else if(r<=0)return e.concat(n);for(var u=e.length,i=0,f=m(n);i<f;i++){var o=n[i];if(w(o)&&(P(o)||sn(o)))if(r>1)T(o,r-1,t,e),u=e.length;else for(var a=0,l=o.length;a<l;)e[u++]=o[a++];else t||(e[u++]=o)}return e}const Rt=d(function(n,r){r=T(r,!1,!1);var t=r.length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=mr(n[e],n)}return n});function Vt(n,r){var t=function(e){var u=t.cache,i=""+(r?r.apply(this,arguments):e);return O(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return t.cache={},t}const yr=d(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),qt=D(yr,c,1);function Ft(n,r,t){var e,u,i,f,o=0;t||(t={});var a=function(){o=t.leading===!1?0:F(),e=null,f=n.apply(u,i),e||(u=i=null)},l=function(){var s=F();!o&&t.leading===!1&&(o=s);var p=r-(s-o);return u=this,i=arguments,p<=0||p>r?(e&&(clearTimeout(e),e=null),o=s,f=n.apply(u,i),e||(u=i=null)):!e&&t.trailing!==!1&&(e=setTimeout(a,p)),f};return l.cancel=function(){clearTimeout(e),o=0,e=u=i=null},l}function $t(n,r,t){var e,u,i,f,o,a=function(){var s=F()-u;r>s?e=setTimeout(a,r-s):(e=null,t||(f=n.apply(o,i)),e||(i=o=null))},l=d(function(s){return o=this,i=s,u=F(),e||(e=setTimeout(a,r),t&&(f=n.apply(o,i))),f});return l.cancel=function(){clearTimeout(e),e=i=o=null},l}function Ct(n,r){return D(r,n)}function _n(n){return function(){return!n.apply(this,arguments)}}function zt(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}}function Ht(n,r){return function(){if(--n<1)return r.apply(this,arguments)}}function wr(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}const Jt=D(wr,2);function _r(n,r,t){r=y(r,t);for(var e=v(n),u,i=0,f=e.length;i<f;i++)if(u=e[i],r(n[u],u,n))return u}function Ar(n){return function(r,t,e){t=y(t,e);for(var u=m(r),i=n>0?0:u-1;i>=0&&i<u;i+=n)if(t(r[i],i,r))return i;return-1}}const An=Ar(1),Er=Ar(-1);function Or(n,r,t,e){t=y(t,e,1);for(var u=t(r),i=0,f=m(n);i<f;){var o=Math.floor((i+f)/2);t(n[o])<u?i=o+1:f=o}return i}function Nr(n,r,t){return function(e,u,i){var f=0,o=m(e);if(typeof i=="number")n>0?f=i>=0?i:Math.max(i+o,f):o=i>=0?Math.min(i+1,o):i+o+1;else if(t&&i&&o)return i=t(e,u),e[i]===u?i:-1;if(u!==u)return i=r(C.call(e,f,o),Kn),i>=0?i+f:-1;for(i=n>0?f:o-1;i>=0&&i<o;i+=n)if(e[i]===u)return i;return-1}}const Mr=Nr(1,An,Or),Ut=Nr(-1,Er);function tn(n,r,t){var e=w(n)?An:_r,u=e(n,r,t);if(u!==void 0&&u!==-1)return n[u]}function Wt(n,r){return tn(n,q(r))}function E(n,r,t){r=J(r,t);var e,u;if(w(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var i=v(n);for(e=0,u=i.length;e<u;e++)r(n[i[e]],i[e],n)}return n}function N(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),u=(e||n).length,i=Array(u),f=0;f<u;f++){var o=e?e[f]:f;i[f]=r(n[o],o,n)}return i}function Pr(n){var r=function(t,e,u,i){var f=!w(t)&&v(t),o=(f||t).length,a=n>0?0:o-1;for(i||(u=t[f?f[a]:a],a+=n);a>=0&&a<o;a+=n){var l=f?f[a]:a;u=e(u,t[l],l,t)}return u};return function(t,e,u,i){var f=arguments.length>=3;return r(t,J(e,i,4),u,f)}}const x=Pr(1),Vn=Pr(-1);function B(n,r,t){var e=[];return r=y(r,t),E(n,function(u,i,f){r(u,i,f)&&e.push(u)}),e}function Gt(n,r,t){return B(n,_n(y(r)),t)}function qn(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),u=(e||n).length,i=0;i<u;i++){var f=e?e[i]:i;if(!r(n[f],f,n))return!1}return!0}function Fn(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),u=(e||n).length,i=0;i<u;i++){var f=e?e[i]:i;if(r(n[f],f,n))return!0}return!1}function A(n,r,t,e){return w(n)||(n=L(n)),(typeof t!="number"||e)&&(t=0),Mr(n,r,t)>=0}const Xt=d(function(n,r,t){var e,u;return g(r)?u=r:(r=H(r),e=r.slice(0,-1),r=r[r.length-1]),N(n,function(i){var f=u;if(!f){if(e&&e.length&&(i=dn(i,e)),i==null)return;f=i[r]}return f==null?f:f.apply(i,t)})});function En(n,r){return N(n,yn(r))}function Qt(n,r){return B(n,q(r))}function Tr(n,r,t){var e=-1/0,u=-1/0,i,f;if(r==null||typeof r=="number"&&typeof n[0]!="object"&&n!=null){n=w(n)?n:L(n);for(var o=0,a=n.length;o<a;o++)i=n[o],i!=null&&i>e&&(e=i)}else r=y(r,t),E(n,function(l,s,p){f=r(l,s,p),(f>u||f===-1/0&&e===-1/0)&&(e=l,u=f)});return e}function Yt(n,r,t){var e=1/0,u=1/0,i,f;if(r==null||typeof r=="number"&&typeof n[0]!="object"&&n!=null){n=w(n)?n:L(n);for(var o=0,a=n.length;o<a;o++)i=n[o],i!=null&&i<e&&(e=i)}else r=y(r,t),E(n,function(l,s,p){f=r(l,s,p),(f<u||f===1/0&&e===1/0)&&(e=l,u=f)});return e}var Zt=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Ir(n){return n?P(n)?C.call(n):an(n)?n.match(Zt):w(n)?N(n,mn):L(n):[]}function Sr(n,r,t){if(r==null||t)return w(n)||(n=L(n)),n[rn(n.length-1)];var e=Ir(n),u=m(e);r=Math.max(Math.min(r,u),0);for(var i=u-1,f=0;f<r;f++){var o=rn(f,i),a=e[f];e[f]=e[o],e[o]=a}return e.slice(0,r)}function Kt(n){return Sr(n,1/0)}function xt(n,r,t){var e=0;return r=y(r,t),En(N(n,function(u,i,f){return{value:u,index:e++,criteria:r(u,i,f)}}).sort(function(u,i){var f=u.criteria,o=i.criteria;if(f!==o){if(f>o||f===void 0)return 1;if(f<o||o===void 0)return-1}return u.index-i.index}),"value")}function Z(n,r){return function(t,e,u){var i=r?[[],[]]:{};return e=y(e,u),E(t,function(f,o){var a=e(f,o,t);n(i,f,a)}),i}}const kt=Z(function(n,r,t){O(n,t)?n[t].push(r):n[t]=[r]}),bt=Z(function(n,r,t){n[t]=r}),jt=Z(function(n,r,t){O(n,t)?n[t]++:n[t]=1}),ne=Z(function(n,r,t){n[t?0:1].push(r)},!0);function re(n){return n==null?0:w(n)?n.length:v(n).length}function te(n,r,t){return r in t}const Br=d(function(n,r){var t={},e=r[0];if(n==null)return t;g(e)?(r.length>1&&(e=J(e,r[1])),r=z(n)):(e=te,r=T(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var f=r[u],o=n[f];e(o,f,n)&&(t[f]=o)}return t}),ee=d(function(n,r){var t=r[0],e;return g(t)?(t=_n(t),r.length>1&&(e=r[1])):(r=N(T(r,!1,!1),String),t=function(u,i){return!A(r,i)}),Br(n,t,e)});function Lr(n,r,t){return C.call(n,0,Math.max(0,n.length-(r==null||t?1:r)))}function k(n,r,t){return n==null||n.length<1?r==null||t?void 0:[]:r==null||t?n[0]:Lr(n,n.length-r)}function U(n,r,t){return C.call(n,r==null||t?1:r)}function ue(n,r,t){return n==null||n.length<1?r==null||t?void 0:[]:r==null||t?n[n.length-1]:U(n,Math.max(0,n.length-r))}function ie(n){return B(n,Boolean)}function fe(n,r){return T(n,r,!1)}const Dr=d(function(n,r){return r=T(r,!0,!0),B(n,function(t){return!A(r,t)})}),oe=d(function(n,r){return Dr(n,r)});function en(n,r,t,e){Un(r)||(e=t,t=r,r=!1),t!=null&&(t=y(t,e));for(var u=[],i=[],f=0,o=m(n);f<o;f++){var a=n[f],l=t?t(a,f,n):a;r&&!t?((!f||i!==l)&&u.push(a),i=l):t?A(i,l)||(i.push(l),u.push(a)):A(u,a)||u.push(a)}return u}const le=d(function(n){return en(T(n,!0,!0))});function ae(n){for(var r=[],t=arguments.length,e=0,u=m(n);e<u;e++){var i=n[e];if(!A(r,i)){var f;for(f=1;f<t&&A(arguments[f],i);f++);f===t&&r.push(i)}}return r}function un(n){for(var r=n&&Tr(n,m).length||0,t=Array(r),e=0;e<r;e++)t[e]=En(n,e);return t}const ce=d(un);function se(n,r){for(var t={},e=0,u=m(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t}function ve(n,r,t){r==null&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u}function he(n,r){if(r==null||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(C.call(n,e,e+=r));return t}function On(n,r){return n._chain?c(r).chain():r}function Rr(n){return E(nn(n),function(r){var t=c[r]=n[r];c.prototype[r]=function(){var e=[this._wrapped];return $r.apply(e,arguments),On(this,t.apply(c,e))}}),c}E(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var r=Y[n];c.prototype[n]=function(){var t=this._wrapped;return t!=null&&(r.apply(t,arguments),(n==="shift"||n==="splice")&&t.length===0&&delete t[0]),On(this,t)}});E(["concat","join","slice"],function(n){var r=Y[n];c.prototype[n]=function(){var t=this._wrapped;return t!=null&&(t=r.apply(t,arguments)),On(this,t)}});const pe=Object.freeze(Object.defineProperty({__proto__:null,VERSION:Cn,after:Ht,all:qn,allKeys:z,any:Fn,assign:X,before:wr,bind:mr,bindAll:Rt,chain:Dt,chunk:he,clone:pt,collect:N,compact:ie,compose:zt,constant:xn,contains:A,countBy:jt,create:ht,debounce:$t,default:c,defaults:lr,defer:qt,delay:yr,detect:tn,difference:Dr,drop:U,each:E,escape:_t,every:qn,extend:or,extendOwn:X,filter:B,find:tn,findIndex:An,findKey:_r,findLastIndex:Er,findWhere:Wt,first:k,flatten:fe,foldl:x,foldr:Vn,forEach:E,functions:nn,get:sr,groupBy:kt,has:dt,head:k,identity:mn,include:A,includes:A,indexBy:bt,indexOf:Mr,initial:Lr,inject:x,intersection:ae,invert:fr,invoke:Xt,isArguments:sn,isArray:P,isArrayBuffer:Xn,isBoolean:Un,isDataView:W,isDate:Qr,isElement:Xr,isEmpty:et,isEqual:ut,isError:Zr,isFinite:br,isFunction:g,isMap:ot,isMatch:rr,isNaN:Kn,isNull:Gr,isNumber:Wn,isObject:M,isRegExp:Yr,isSet:at,isString:an,isSymbol:Gn,isTypedArray:jn,isUndefined:Jn,isWeakMap:lt,isWeakSet:ct,iteratee:wn,keys:v,last:ue,lastIndexOf:Ut,map:N,mapObject:mt,matcher:q,matches:q,max:Tr,memoize:Vt,methods:nn,min:Yt,mixin:Rr,negate:_n,noop:hr,now:F,object:se,omit:ee,once:Jt,pairs:st,partial:D,partition:ne,pick:Br,pluck:En,property:yn,propertyOf:yt,random:rn,range:ve,reduce:x,reduceRight:Vn,reject:Gt,rest:U,restArguments:d,result:St,sample:Sr,select:B,shuffle:Kt,size:re,some:Fn,sortBy:xt,sortedIndex:Or,tail:U,take:k,tap:gt,template:It,templateSettings:Ot,throttle:Ft,times:wt,toArray:Ir,toPath:cr,transpose:un,unescape:Et,union:le,uniq:en,unique:en,uniqueId:Lt,unzip:un,values:L,where:Qt,without:oe,wrap:Ct,zip:ce},Symbol.toStringTag,{value:"Module"}));var fn=Rr(pe);fn._=fn;const ge=(n,r)=>{if(!n||n.length==0)throw new Error("TiposDeCarta es obligatorio como un arreglo de string");if(!r||r.length==0)throw new Error("tiposEspeciales es obligatorio como un arreglo de string");let t=[];for(let e=2;e<=10;e++)for(let u of n)t.push(e+u);for(let e of n)for(let u of r)t.push(u+e);return t=fn.shuffle(t),console.log(t),t},Vr=n=>{if(n.length===0)throw"No hay cartas en el deck";return n.pop()},qr=n=>{const r=n.substring(0,n.length-1);return isNaN(r)?r==="A"?11:10:r*1},on=(n,r,t,e=[])=>{if(!n)throw new Error("Puntos minimos son necesarios");if(!r)throw new Error("Argumento puntoHTML es necesario");let u=0;do{const i=Vr(e);u=u+qr(i),r.innerText=u,t.append($n(i))}while(u<n&&n<=21);setTimeout(()=>{u===n?alert("Nadie gana :("):n>21?alert("Computadora gana"):u>21?alert("Jugador Gana"):alert("Computadora Gana")},100)};let I=[];const de=["C","D","H","S"],me=["A","J","Q","K"];let _=0;const R=document.querySelector("#btnPedir"),$=document.querySelector("#btnDetener"),ye=document.querySelector("#btnNuevo"),Fr=document.querySelector("#jugador-cartas"),Q=document.querySelector("#computadora-cartas"),S=document.querySelectorAll("small");R.addEventListener("click",()=>{const n=Vr(I);_=_+qr(n),S[0].innerText=_,Fr.append($n(n)),_>21?(console.warn("Lo siento mucho, perdiste"),R.disabled=!0,$.disabled=!0,on(_,S[1],Q,I)):_===21&&(console.warn("21, genial!"),R.disabled=!0,$.disabled=!0,on(_,S[1],Q,I))});$.addEventListener("click",()=>{R.disabled=!0,$.disabled=!0,on(_,S[1],Q,I)});ye.addEventListener("click",()=>{console.clear(),I=[],I=ge(de,me),_=0,S[0].innerText=0,S[1].innerText=0,Q.innerHTML="",Fr.innerHTML="",R.disabled=!1,$.disabled=!1});