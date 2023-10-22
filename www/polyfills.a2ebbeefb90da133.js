"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6429],{4492:(ie,Ee,ce)=>{ce(6001),ce(7923)},6001:()=>{window.__Zone_disable_customElements=!0},7923:()=>{!function(t){const n=t.performance;function i(M){n&&n.mark&&n.mark(M)}function o(M,T){n&&n.measure&&n.measure(M,T)}i("Zone");const c=t.__Zone_symbol_prefix||"__zone_symbol__";function a(M){return c+M}const y=!0===t[a("forceDuplicateZoneCheck")];if(t.Zone){if(y||"function"!=typeof t.Zone.__symbol__)throw new Error("Zone already loaded.");return t.Zone}let d=(()=>{class M{static assertZonePatched(){if(t.Promise!==oe.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let e=M.current;for(;e.parent;)e=e.parent;return e}static get current(){return U.zone}static get currentTask(){return re}static __load_patch(e,r,k=!1){if(oe.hasOwnProperty(e)){if(!k&&y)throw Error("Already loaded patch: "+e)}else if(!t["__Zone_disable_"+e]){const C="Zone:"+e;i(C),oe[e]=r(t,M,q),o(C,C)}}get parent(){return this._parent}get name(){return this._name}constructor(e,r){this._parent=e,this._name=r?r.name||"unnamed":"<root>",this._properties=r&&r.properties||{},this._zoneDelegate=new v(this,this._parent&&this._parent._zoneDelegate,r)}get(e){const r=this.getZoneWith(e);if(r)return r._properties[e]}getZoneWith(e){let r=this;for(;r;){if(r._properties.hasOwnProperty(e))return r;r=r._parent}return null}fork(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)}wrap(e,r){if("function"!=typeof e)throw new Error("Expecting function got: "+e);const k=this._zoneDelegate.intercept(this,e,r),C=this;return function(){return C.runGuarded(k,this,arguments,r)}}run(e,r,k,C){U={parent:U,zone:this};try{return this._zoneDelegate.invoke(this,e,r,k,C)}finally{U=U.parent}}runGuarded(e,r=null,k,C){U={parent:U,zone:this};try{try{return this._zoneDelegate.invoke(this,e,r,k,C)}catch($){if(this._zoneDelegate.handleError(this,$))throw $}}finally{U=U.parent}}runTask(e,r,k){if(e.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(e.zone||K).name+"; Execution: "+this.name+")");if(e.state===x&&(e.type===Q||e.type===P))return;const C=e.state!=E;C&&e._transitionTo(E,A),e.runCount++;const $=re;re=e,U={parent:U,zone:this};try{e.type==P&&e.data&&!e.data.isPeriodic&&(e.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,e,r,k)}catch(l){if(this._zoneDelegate.handleError(this,l))throw l}}finally{e.state!==x&&e.state!==h&&(e.type==Q||e.data&&e.data.isPeriodic?C&&e._transitionTo(A,E):(e.runCount=0,this._updateTaskCount(e,-1),C&&e._transitionTo(x,E,x))),U=U.parent,re=$}}scheduleTask(e){if(e.zone&&e.zone!==this){let k=this;for(;k;){if(k===e.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`);k=k.parent}}e._transitionTo(X,x);const r=[];e._zoneDelegates=r,e._zone=this;try{e=this._zoneDelegate.scheduleTask(this,e)}catch(k){throw e._transitionTo(h,X,x),this._zoneDelegate.handleError(this,k),k}return e._zoneDelegates===r&&this._updateTaskCount(e,1),e.state==X&&e._transitionTo(A,X),e}scheduleMicroTask(e,r,k,C){return this.scheduleTask(new p(I,e,r,k,C,void 0))}scheduleMacroTask(e,r,k,C,$){return this.scheduleTask(new p(P,e,r,k,C,$))}scheduleEventTask(e,r,k,C,$){return this.scheduleTask(new p(Q,e,r,k,C,$))}cancelTask(e){if(e.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(e.zone||K).name+"; Execution: "+this.name+")");if(e.state===A||e.state===E){e._transitionTo(G,A,E);try{this._zoneDelegate.cancelTask(this,e)}catch(r){throw e._transitionTo(h,G),this._zoneDelegate.handleError(this,r),r}return this._updateTaskCount(e,-1),e._transitionTo(x,G),e.runCount=0,e}}_updateTaskCount(e,r){const k=e._zoneDelegates;-1==r&&(e._zoneDelegates=null);for(let C=0;C<k.length;C++)k[C]._updateTaskCount(e.type,r)}}return M.__symbol__=a,M})();const b={name:"",onHasTask:(M,T,e,r)=>M.hasTask(e,r),onScheduleTask:(M,T,e,r)=>M.scheduleTask(e,r),onInvokeTask:(M,T,e,r,k,C)=>M.invokeTask(e,r,k,C),onCancelTask:(M,T,e,r)=>M.cancelTask(e,r)};class v{constructor(T,e,r){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=T,this._parentDelegate=e,this._forkZS=r&&(r&&r.onFork?r:e._forkZS),this._forkDlgt=r&&(r.onFork?e:e._forkDlgt),this._forkCurrZone=r&&(r.onFork?this.zone:e._forkCurrZone),this._interceptZS=r&&(r.onIntercept?r:e._interceptZS),this._interceptDlgt=r&&(r.onIntercept?e:e._interceptDlgt),this._interceptCurrZone=r&&(r.onIntercept?this.zone:e._interceptCurrZone),this._invokeZS=r&&(r.onInvoke?r:e._invokeZS),this._invokeDlgt=r&&(r.onInvoke?e:e._invokeDlgt),this._invokeCurrZone=r&&(r.onInvoke?this.zone:e._invokeCurrZone),this._handleErrorZS=r&&(r.onHandleError?r:e._handleErrorZS),this._handleErrorDlgt=r&&(r.onHandleError?e:e._handleErrorDlgt),this._handleErrorCurrZone=r&&(r.onHandleError?this.zone:e._handleErrorCurrZone),this._scheduleTaskZS=r&&(r.onScheduleTask?r:e._scheduleTaskZS),this._scheduleTaskDlgt=r&&(r.onScheduleTask?e:e._scheduleTaskDlgt),this._scheduleTaskCurrZone=r&&(r.onScheduleTask?this.zone:e._scheduleTaskCurrZone),this._invokeTaskZS=r&&(r.onInvokeTask?r:e._invokeTaskZS),this._invokeTaskDlgt=r&&(r.onInvokeTask?e:e._invokeTaskDlgt),this._invokeTaskCurrZone=r&&(r.onInvokeTask?this.zone:e._invokeTaskCurrZone),this._cancelTaskZS=r&&(r.onCancelTask?r:e._cancelTaskZS),this._cancelTaskDlgt=r&&(r.onCancelTask?e:e._cancelTaskDlgt),this._cancelTaskCurrZone=r&&(r.onCancelTask?this.zone:e._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const k=r&&r.onHasTask;(k||e&&e._hasTaskZS)&&(this._hasTaskZS=k?r:b,this._hasTaskDlgt=e,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=T,r.onScheduleTask||(this._scheduleTaskZS=b,this._scheduleTaskDlgt=e,this._scheduleTaskCurrZone=this.zone),r.onInvokeTask||(this._invokeTaskZS=b,this._invokeTaskDlgt=e,this._invokeTaskCurrZone=this.zone),r.onCancelTask||(this._cancelTaskZS=b,this._cancelTaskDlgt=e,this._cancelTaskCurrZone=this.zone))}fork(T,e){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,T,e):new d(T,e)}intercept(T,e,r){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,T,e,r):e}invoke(T,e,r,k,C){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,T,e,r,k,C):e.apply(r,k)}handleError(T,e){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,T,e)}scheduleTask(T,e){let r=e;if(this._scheduleTaskZS)this._hasTaskZS&&r._zoneDelegates.push(this._hasTaskDlgtOwner),r=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,T,e),r||(r=e);else if(e.scheduleFn)e.scheduleFn(e);else{if(e.type!=I)throw new Error("Task is missing scheduleFn.");R(e)}return r}invokeTask(T,e,r,k){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,T,e,r,k):e.callback.apply(r,k)}cancelTask(T,e){let r;if(this._cancelTaskZS)r=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,T,e);else{if(!e.cancelFn)throw Error("Task is not cancelable");r=e.cancelFn(e)}return r}hasTask(T,e){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,T,e)}catch(r){this.handleError(T,r)}}_updateTaskCount(T,e){const r=this._taskCounts,k=r[T],C=r[T]=k+e;if(C<0)throw new Error("More tasks executed then were scheduled.");0!=k&&0!=C||this.hasTask(this.zone,{microTask:r.microTask>0,macroTask:r.macroTask>0,eventTask:r.eventTask>0,change:T})}}class p{constructor(T,e,r,k,C,$){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=T,this.source=e,this.data=k,this.scheduleFn=C,this.cancelFn=$,!r)throw new Error("callback is not defined");this.callback=r;const l=this;this.invoke=T===Q&&k&&k.useG?p.invokeTask:function(){return p.invokeTask.call(t,l,this,arguments)}}static invokeTask(T,e,r){T||(T=this),ee++;try{return T.runCount++,T.zone.runTask(T,e,r)}finally{1==ee&&_(),ee--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(x,X)}_transitionTo(T,e,r){if(this._state!==e&&this._state!==r)throw new Error(`${this.type} '${this.source}': can not transition to '${T}', expecting state '${e}'${r?" or '"+r+"'":""}, was '${this._state}'.`);this._state=T,T==x&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const L=a("setTimeout"),Z=a("Promise"),N=a("then");let J,F=[],H=!1;function z(M){if(J||t[Z]&&(J=t[Z].resolve(0)),J){let T=J[N];T||(T=J.then),T.call(J,M)}else t[L](M,0)}function R(M){0===ee&&0===F.length&&z(_),M&&F.push(M)}function _(){if(!H){for(H=!0;F.length;){const M=F;F=[];for(let T=0;T<M.length;T++){const e=M[T];try{e.zone.runTask(e,null,null)}catch(r){q.onUnhandledError(r)}}}q.microtaskDrainDone(),H=!1}}const K={name:"NO ZONE"},x="notScheduled",X="scheduling",A="scheduled",E="running",G="canceling",h="unknown",I="microTask",P="macroTask",Q="eventTask",oe={},q={symbol:a,currentZoneFrame:()=>U,onUnhandledError:W,microtaskDrainDone:W,scheduleMicroTask:R,showUncaughtError:()=>!d[a("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:W,patchMethod:()=>W,bindArguments:()=>[],patchThen:()=>W,patchMacroTask:()=>W,patchEventPrototype:()=>W,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>W,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>W,wrapWithCurrentZone:()=>W,filterProperties:()=>[],attachOriginToPatched:()=>W,_redefineProperty:()=>W,patchCallbacks:()=>W,nativeScheduleMicroTask:z};let U={parent:null,zone:new d(null,null)},re=null,ee=0;function W(){}o("Zone","Zone"),t.Zone=d}(typeof window<"u"&&window||typeof self<"u"&&self||global);const ie=Object.getOwnPropertyDescriptor,Ee=Object.defineProperty,ce=Object.getPrototypeOf,ge=Object.create,Ve=Array.prototype.slice,ke="addEventListener",we="removeEventListener",Ze=Zone.__symbol__(ke),Ne=Zone.__symbol__(we),ae="true",le="false",ve=Zone.__symbol__("");function Ie(t,n){return Zone.current.wrap(t,n)}function Me(t,n,i,o,c){return Zone.current.scheduleMacroTask(t,n,i,o,c)}const j=Zone.__symbol__,Re=typeof window<"u",Te=Re?window:void 0,Y=Re&&Te||"object"==typeof self&&self||global,ct="removeAttribute";function Le(t,n){for(let i=t.length-1;i>=0;i--)"function"==typeof t[i]&&(t[i]=Ie(t[i],n+"_"+i));return t}function Be(t){return!t||!1!==t.writable&&!("function"==typeof t.get&&typeof t.set>"u")}const Fe=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Ce=!("nw"in Y)&&typeof Y.process<"u"&&"[object process]"==={}.toString.call(Y.process),Ae=!Ce&&!Fe&&!(!Re||!Te.HTMLElement),Ue=typeof Y.process<"u"&&"[object process]"==={}.toString.call(Y.process)&&!Fe&&!(!Re||!Te.HTMLElement),De={},We=function(t){if(!(t=t||Y.event))return;let n=De[t.type];n||(n=De[t.type]=j("ON_PROPERTY"+t.type));const i=this||t.target||Y,o=i[n];let c;return Ae&&i===Te&&"error"===t.type?(c=o&&o.call(this,t.message,t.filename,t.lineno,t.colno,t.error),!0===c&&t.preventDefault()):(c=o&&o.apply(this,arguments),null!=c&&!c&&t.preventDefault()),c};function ze(t,n,i){let o=ie(t,n);if(!o&&i&&ie(i,n)&&(o={enumerable:!0,configurable:!0}),!o||!o.configurable)return;const c=j("on"+n+"patched");if(t.hasOwnProperty(c)&&t[c])return;delete o.writable,delete o.value;const a=o.get,y=o.set,d=n.slice(2);let b=De[d];b||(b=De[d]=j("ON_PROPERTY"+d)),o.set=function(v){let p=this;!p&&t===Y&&(p=Y),p&&("function"==typeof p[b]&&p.removeEventListener(d,We),y&&y.call(p,null),p[b]=v,"function"==typeof v&&p.addEventListener(d,We,!1))},o.get=function(){let v=this;if(!v&&t===Y&&(v=Y),!v)return null;const p=v[b];if(p)return p;if(a){let L=a.call(this);if(L)return o.set.call(this,L),"function"==typeof v[ct]&&v.removeAttribute(n),L}return null},Ee(t,n,o),t[c]=!0}function Xe(t,n,i){if(n)for(let o=0;o<n.length;o++)ze(t,"on"+n[o],i);else{const o=[];for(const c in t)"on"==c.slice(0,2)&&o.push(c);for(let c=0;c<o.length;c++)ze(t,o[c],i)}}const ne=j("originalInstance");function be(t){const n=Y[t];if(!n)return;Y[j(t)]=n,Y[t]=function(){const c=Le(arguments,t);switch(c.length){case 0:this[ne]=new n;break;case 1:this[ne]=new n(c[0]);break;case 2:this[ne]=new n(c[0],c[1]);break;case 3:this[ne]=new n(c[0],c[1],c[2]);break;case 4:this[ne]=new n(c[0],c[1],c[2],c[3]);break;default:throw new Error("Arg list too long.")}},fe(Y[t],n);const i=new n(function(){});let o;for(o in i)"XMLHttpRequest"===t&&"responseBlob"===o||function(c){"function"==typeof i[c]?Y[t].prototype[c]=function(){return this[ne][c].apply(this[ne],arguments)}:Ee(Y[t].prototype,c,{set:function(a){"function"==typeof a?(this[ne][c]=Ie(a,t+"."+c),fe(this[ne][c],a)):this[ne][c]=a},get:function(){return this[ne][c]}})}(o);for(o in n)"prototype"!==o&&n.hasOwnProperty(o)&&(Y[t][o]=n[o])}function ue(t,n,i){let o=t;for(;o&&!o.hasOwnProperty(n);)o=ce(o);!o&&t[n]&&(o=t);const c=j(n);let a=null;if(o&&(!(a=o[c])||!o.hasOwnProperty(c))&&(a=o[c]=o[n],Be(o&&ie(o,n)))){const d=i(a,c,n);o[n]=function(){return d(this,arguments)},fe(o[n],a)}return a}function lt(t,n,i){let o=null;function c(a){const y=a.data;return y.args[y.cbIdx]=function(){a.invoke.apply(this,arguments)},o.apply(y.target,y.args),a}o=ue(t,n,a=>function(y,d){const b=i(y,d);return b.cbIdx>=0&&"function"==typeof d[b.cbIdx]?Me(b.name,d[b.cbIdx],b,c):a.apply(y,d)})}function fe(t,n){t[j("OriginalDelegate")]=n}let qe=!1,je=!1;function ft(){if(qe)return je;qe=!0;try{const t=Te.navigator.userAgent;(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/")||-1!==t.indexOf("Edge/"))&&(je=!0)}catch{}return je}Zone.__load_patch("ZoneAwarePromise",(t,n,i)=>{const o=Object.getOwnPropertyDescriptor,c=Object.defineProperty,y=i.symbol,d=[],b=!0===t[y("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],v=y("Promise"),p=y("then"),L="__creationTrace__";i.onUnhandledError=l=>{if(i.showUncaughtError()){const u=l&&l.rejection;u?console.error("Unhandled Promise rejection:",u instanceof Error?u.message:u,"; Zone:",l.zone.name,"; Task:",l.task&&l.task.source,"; Value:",u,u instanceof Error?u.stack:void 0):console.error(l)}},i.microtaskDrainDone=()=>{for(;d.length;){const l=d.shift();try{l.zone.runGuarded(()=>{throw l.throwOriginal?l.rejection:l})}catch(u){N(u)}}};const Z=y("unhandledPromiseRejectionHandler");function N(l){i.onUnhandledError(l);try{const u=n[Z];"function"==typeof u&&u.call(this,l)}catch{}}function F(l){return l&&l.then}function H(l){return l}function J(l){return e.reject(l)}const z=y("state"),R=y("value"),_=y("finally"),K=y("parentPromiseValue"),x=y("parentPromiseState"),X="Promise.then",A=null,E=!0,G=!1,h=0;function I(l,u){return s=>{try{q(l,u,s)}catch(f){q(l,!1,f)}}}const P=function(){let l=!1;return function(s){return function(){l||(l=!0,s.apply(null,arguments))}}},Q="Promise resolved with itself",oe=y("currentTaskTrace");function q(l,u,s){const f=P();if(l===s)throw new TypeError(Q);if(l[z]===A){let g=null;try{("object"==typeof s||"function"==typeof s)&&(g=s&&s.then)}catch(w){return f(()=>{q(l,!1,w)})(),l}if(u!==G&&s instanceof e&&s.hasOwnProperty(z)&&s.hasOwnProperty(R)&&s[z]!==A)re(s),q(l,s[z],s[R]);else if(u!==G&&"function"==typeof g)try{g.call(s,f(I(l,u)),f(I(l,!1)))}catch(w){f(()=>{q(l,!1,w)})()}else{l[z]=u;const w=l[R];if(l[R]=s,l[_]===_&&u===E&&(l[z]=l[x],l[R]=l[K]),u===G&&s instanceof Error){const m=n.currentTask&&n.currentTask.data&&n.currentTask.data[L];m&&c(s,oe,{configurable:!0,enumerable:!1,writable:!0,value:m})}for(let m=0;m<w.length;)ee(l,w[m++],w[m++],w[m++],w[m++]);if(0==w.length&&u==G){l[z]=h;let m=s;try{throw new Error("Uncaught (in promise): "+function a(l){return l&&l.toString===Object.prototype.toString?(l.constructor&&l.constructor.name||"")+": "+JSON.stringify(l):l?l.toString():Object.prototype.toString.call(l)}(s)+(s&&s.stack?"\n"+s.stack:""))}catch(D){m=D}b&&(m.throwOriginal=!0),m.rejection=s,m.promise=l,m.zone=n.current,m.task=n.currentTask,d.push(m),i.scheduleMicroTask()}}}return l}const U=y("rejectionHandledHandler");function re(l){if(l[z]===h){try{const u=n[U];u&&"function"==typeof u&&u.call(this,{rejection:l[R],promise:l})}catch{}l[z]=G;for(let u=0;u<d.length;u++)l===d[u].promise&&d.splice(u,1)}}function ee(l,u,s,f,g){re(l);const w=l[z],m=w?"function"==typeof f?f:H:"function"==typeof g?g:J;u.scheduleMicroTask(X,()=>{try{const D=l[R],O=!!s&&_===s[_];O&&(s[K]=D,s[x]=w);const S=u.run(m,void 0,O&&m!==J&&m!==H?[]:[D]);q(s,!0,S)}catch(D){q(s,!1,D)}},s)}const M=function(){},T=t.AggregateError;class e{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(u){return q(new this(null),E,u)}static reject(u){return q(new this(null),G,u)}static any(u){if(!u||"function"!=typeof u[Symbol.iterator])return Promise.reject(new T([],"All promises were rejected"));const s=[];let f=0;try{for(let m of u)f++,s.push(e.resolve(m))}catch{return Promise.reject(new T([],"All promises were rejected"))}if(0===f)return Promise.reject(new T([],"All promises were rejected"));let g=!1;const w=[];return new e((m,D)=>{for(let O=0;O<s.length;O++)s[O].then(S=>{g||(g=!0,m(S))},S=>{w.push(S),f--,0===f&&(g=!0,D(new T(w,"All promises were rejected")))})})}static race(u){let s,f,g=new this((D,O)=>{s=D,f=O});function w(D){s(D)}function m(D){f(D)}for(let D of u)F(D)||(D=this.resolve(D)),D.then(w,m);return g}static all(u){return e.allWithCallback(u)}static allSettled(u){return(this&&this.prototype instanceof e?this:e).allWithCallback(u,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(u,s){let f,g,w=new this((S,V)=>{f=S,g=V}),m=2,D=0;const O=[];for(let S of u){F(S)||(S=this.resolve(S));const V=D;try{S.then(B=>{O[V]=s?s.thenCallback(B):B,m--,0===m&&f(O)},B=>{s?(O[V]=s.errorCallback(B),m--,0===m&&f(O)):g(B)})}catch(B){g(B)}m++,D++}return m-=2,0===m&&f(O),w}constructor(u){const s=this;if(!(s instanceof e))throw new Error("Must be an instanceof Promise.");s[z]=A,s[R]=[];try{const f=P();u&&u(f(I(s,E)),f(I(s,G)))}catch(f){q(s,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return e}then(u,s){let f=this.constructor?.[Symbol.species];(!f||"function"!=typeof f)&&(f=this.constructor||e);const g=new f(M),w=n.current;return this[z]==A?this[R].push(w,g,u,s):ee(this,w,g,u,s),g}catch(u){return this.then(null,u)}finally(u){let s=this.constructor?.[Symbol.species];(!s||"function"!=typeof s)&&(s=e);const f=new s(M);f[_]=_;const g=n.current;return this[z]==A?this[R].push(g,f,u,u):ee(this,g,f,u,u),f}}e.resolve=e.resolve,e.reject=e.reject,e.race=e.race,e.all=e.all;const r=t[v]=t.Promise;t.Promise=e;const k=y("thenPatched");function C(l){const u=l.prototype,s=o(u,"then");if(s&&(!1===s.writable||!s.configurable))return;const f=u.then;u[p]=f,l.prototype.then=function(g,w){return new e((D,O)=>{f.call(this,D,O)}).then(g,w)},l[k]=!0}return i.patchThen=C,r&&(C(r),ue(t,"fetch",l=>function $(l){return function(u,s){let f=l.apply(u,s);if(f instanceof e)return f;let g=f.constructor;return g[k]||C(g),f}}(l))),Promise[n.__symbol__("uncaughtPromiseErrors")]=d,e}),Zone.__load_patch("toString",t=>{const n=Function.prototype.toString,i=j("OriginalDelegate"),o=j("Promise"),c=j("Error"),a=function(){if("function"==typeof this){const v=this[i];if(v)return"function"==typeof v?n.call(v):Object.prototype.toString.call(v);if(this===Promise){const p=t[o];if(p)return n.call(p)}if(this===Error){const p=t[c];if(p)return n.call(p)}}return n.call(this)};a[i]=n,Function.prototype.toString=a;const y=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":y.call(this)}});let ye=!1;if(typeof window<"u")try{const t=Object.defineProperty({},"passive",{get:function(){ye=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch{ye=!1}const ht={useG:!0},te={},Ye={},$e=new RegExp("^"+ve+"(\\w+)(true|false)$"),Ke=j("propagationStopped");function Je(t,n){const i=(n?n(t):t)+le,o=(n?n(t):t)+ae,c=ve+i,a=ve+o;te[t]={},te[t][le]=c,te[t][ae]=a}function dt(t,n,i,o){const c=o&&o.add||ke,a=o&&o.rm||we,y=o&&o.listeners||"eventListeners",d=o&&o.rmAll||"removeAllListeners",b=j(c),v="."+c+":",p="prependListener",L="."+p+":",Z=function(R,_,K){if(R.isRemoved)return;const x=R.callback;let X;"object"==typeof x&&x.handleEvent&&(R.callback=E=>x.handleEvent(E),R.originalDelegate=x);try{R.invoke(R,_,[K])}catch(E){X=E}const A=R.options;return A&&"object"==typeof A&&A.once&&_[a].call(_,K.type,R.originalDelegate?R.originalDelegate:R.callback,A),X};function N(R,_,K){if(!(_=_||t.event))return;const x=R||_.target||t,X=x[te[_.type][K?ae:le]];if(X){const A=[];if(1===X.length){const E=Z(X[0],x,_);E&&A.push(E)}else{const E=X.slice();for(let G=0;G<E.length&&(!_||!0!==_[Ke]);G++){const h=Z(E[G],x,_);h&&A.push(h)}}if(1===A.length)throw A[0];for(let E=0;E<A.length;E++){const G=A[E];n.nativeScheduleMicroTask(()=>{throw G})}}}const F=function(R){return N(this,R,!1)},H=function(R){return N(this,R,!0)};function J(R,_){if(!R)return!1;let K=!0;_&&void 0!==_.useG&&(K=_.useG);const x=_&&_.vh;let X=!0;_&&void 0!==_.chkDup&&(X=_.chkDup);let A=!1;_&&void 0!==_.rt&&(A=_.rt);let E=R;for(;E&&!E.hasOwnProperty(c);)E=ce(E);if(!E&&R[c]&&(E=R),!E||E[b])return!1;const G=_&&_.eventNameToString,h={},I=E[b]=E[c],P=E[j(a)]=E[a],Q=E[j(y)]=E[y],oe=E[j(d)]=E[d];let q;_&&_.prepend&&(q=E[j(_.prepend)]=E[_.prepend]);const e=K?function(s){if(!h.isExisting)return I.call(h.target,h.eventName,h.capture?H:F,h.options)}:function(s){return I.call(h.target,h.eventName,s.invoke,h.options)},r=K?function(s){if(!s.isRemoved){const f=te[s.eventName];let g;f&&(g=f[s.capture?ae:le]);const w=g&&s.target[g];if(w)for(let m=0;m<w.length;m++)if(w[m]===s){w.splice(m,1),s.isRemoved=!0,0===w.length&&(s.allRemoved=!0,s.target[g]=null);break}}if(s.allRemoved)return P.call(s.target,s.eventName,s.capture?H:F,s.options)}:function(s){return P.call(s.target,s.eventName,s.invoke,s.options)},C=_&&_.diff?_.diff:function(s,f){const g=typeof f;return"function"===g&&s.callback===f||"object"===g&&s.originalDelegate===f},$=Zone[j("UNPATCHED_EVENTS")],l=t[j("PASSIVE_EVENTS")],u=function(s,f,g,w,m=!1,D=!1){return function(){const O=this||t;let S=arguments[0];_&&_.transferEventName&&(S=_.transferEventName(S));let V=arguments[1];if(!V)return s.apply(this,arguments);if(Ce&&"uncaughtException"===S)return s.apply(this,arguments);let B=!1;if("function"!=typeof V){if(!V.handleEvent)return s.apply(this,arguments);B=!0}if(x&&!x(s,V,O,arguments))return;const he=ye&&!!l&&-1!==l.indexOf(S),se=function U(s,f){return!ye&&"object"==typeof s&&s?!!s.capture:ye&&f?"boolean"==typeof s?{capture:s,passive:!0}:s?"object"==typeof s&&!1!==s.passive?{...s,passive:!0}:s:{passive:!0}:s}(arguments[2],he);if($)for(let _e=0;_e<$.length;_e++)if(S===$[_e])return he?s.call(O,S,V,se):s.apply(this,arguments);const xe=!!se&&("boolean"==typeof se||se.capture),nt=!(!se||"object"!=typeof se)&&se.once,gt=Zone.current;let Ge=te[S];Ge||(Je(S,G),Ge=te[S]);const rt=Ge[xe?ae:le];let Se,me=O[rt],ot=!1;if(me){if(ot=!0,X)for(let _e=0;_e<me.length;_e++)if(C(me[_e],V))return}else me=O[rt]=[];const st=O.constructor.name,it=Ye[st];it&&(Se=it[S]),Se||(Se=st+f+(G?G(S):S)),h.options=se,nt&&(h.options.once=!1),h.target=O,h.capture=xe,h.eventName=S,h.isExisting=ot;const Pe=K?ht:void 0;Pe&&(Pe.taskData=h);const de=gt.scheduleEventTask(Se,V,Pe,g,w);return h.target=null,Pe&&(Pe.taskData=null),nt&&(se.once=!0),!ye&&"boolean"==typeof de.options||(de.options=se),de.target=O,de.capture=xe,de.eventName=S,B&&(de.originalDelegate=V),D?me.unshift(de):me.push(de),m?O:void 0}};return E[c]=u(I,v,e,r,A),q&&(E[p]=u(q,L,function(s){return q.call(h.target,h.eventName,s.invoke,h.options)},r,A,!0)),E[a]=function(){const s=this||t;let f=arguments[0];_&&_.transferEventName&&(f=_.transferEventName(f));const g=arguments[2],w=!!g&&("boolean"==typeof g||g.capture),m=arguments[1];if(!m)return P.apply(this,arguments);if(x&&!x(P,m,s,arguments))return;const D=te[f];let O;D&&(O=D[w?ae:le]);const S=O&&s[O];if(S)for(let V=0;V<S.length;V++){const B=S[V];if(C(B,m))return S.splice(V,1),B.isRemoved=!0,0===S.length&&(B.allRemoved=!0,s[O]=null,"string"==typeof f)&&(s[ve+"ON_PROPERTY"+f]=null),B.zone.cancelTask(B),A?s:void 0}return P.apply(this,arguments)},E[y]=function(){const s=this||t;let f=arguments[0];_&&_.transferEventName&&(f=_.transferEventName(f));const g=[],w=Qe(s,G?G(f):f);for(let m=0;m<w.length;m++){const D=w[m];g.push(D.originalDelegate?D.originalDelegate:D.callback)}return g},E[d]=function(){const s=this||t;let f=arguments[0];if(f){_&&_.transferEventName&&(f=_.transferEventName(f));const g=te[f];if(g){const D=s[g[le]],O=s[g[ae]];if(D){const S=D.slice();for(let V=0;V<S.length;V++){const B=S[V];this[a].call(this,f,B.originalDelegate?B.originalDelegate:B.callback,B.options)}}if(O){const S=O.slice();for(let V=0;V<S.length;V++){const B=S[V];this[a].call(this,f,B.originalDelegate?B.originalDelegate:B.callback,B.options)}}}}else{const g=Object.keys(s);for(let w=0;w<g.length;w++){const D=$e.exec(g[w]);let O=D&&D[1];O&&"removeListener"!==O&&this[d].call(this,O)}this[d].call(this,"removeListener")}if(A)return this},fe(E[c],I),fe(E[a],P),oe&&fe(E[d],oe),Q&&fe(E[y],Q),!0}let z=[];for(let R=0;R<i.length;R++)z[R]=J(i[R],o);return z}function Qe(t,n){if(!n){const a=[];for(let y in t){const d=$e.exec(y);let b=d&&d[1];if(b&&(!n||b===n)){const v=t[y];if(v)for(let p=0;p<v.length;p++)a.push(v[p])}}return a}let i=te[n];i||(Je(n),i=te[n]);const o=t[i[le]],c=t[i[ae]];return o?c?o.concat(c):o.slice():c?c.slice():[]}function _t(t,n){const i=t.Event;i&&i.prototype&&n.patchMethod(i.prototype,"stopImmediatePropagation",o=>function(c,a){c[Ke]=!0,o&&o.apply(c,a)})}function Et(t,n,i,o,c){const a=Zone.__symbol__(o);if(n[a])return;const y=n[a]=n[o];n[o]=function(d,b,v){return b&&b.prototype&&c.forEach(function(p){const L=`${i}.${o}::`+p,Z=b.prototype;try{if(Z.hasOwnProperty(p)){const N=t.ObjectGetOwnPropertyDescriptor(Z,p);N&&N.value?(N.value=t.wrapWithCurrentZone(N.value,L),t._redefineProperty(b.prototype,p,N)):Z[p]&&(Z[p]=t.wrapWithCurrentZone(Z[p],L))}else Z[p]&&(Z[p]=t.wrapWithCurrentZone(Z[p],L))}catch{}}),y.call(n,d,b,v)},t.attachOriginToPatched(n[o],y)}function et(t,n,i){if(!i||0===i.length)return n;const o=i.filter(a=>a.target===t);if(!o||0===o.length)return n;const c=o[0].ignoreProperties;return n.filter(a=>-1===c.indexOf(a))}function tt(t,n,i,o){t&&Xe(t,et(t,n,i),o)}function He(t){return Object.getOwnPropertyNames(t).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}Zone.__load_patch("util",(t,n,i)=>{const o=He(t);i.patchOnProperties=Xe,i.patchMethod=ue,i.bindArguments=Le,i.patchMacroTask=lt;const c=n.__symbol__("BLACK_LISTED_EVENTS"),a=n.__symbol__("UNPATCHED_EVENTS");t[a]&&(t[c]=t[a]),t[c]&&(n[c]=n[a]=t[c]),i.patchEventPrototype=_t,i.patchEventTarget=dt,i.isIEOrEdge=ft,i.ObjectDefineProperty=Ee,i.ObjectGetOwnPropertyDescriptor=ie,i.ObjectCreate=ge,i.ArraySlice=Ve,i.patchClass=be,i.wrapWithCurrentZone=Ie,i.filterProperties=et,i.attachOriginToPatched=fe,i._redefineProperty=Object.defineProperty,i.patchCallbacks=Et,i.getGlobalObjects=()=>({globalSources:Ye,zoneSymbolEventNames:te,eventNames:o,isBrowser:Ae,isMix:Ue,isNode:Ce,TRUE_STR:ae,FALSE_STR:le,ZONE_SYMBOL_PREFIX:ve,ADD_EVENT_LISTENER_STR:ke,REMOVE_EVENT_LISTENER_STR:we})});const Oe=j("zoneTask");function pe(t,n,i,o){let c=null,a=null;i+=o;const y={};function d(v){const p=v.data;return p.args[0]=function(){return v.invoke.apply(this,arguments)},p.handleId=c.apply(t,p.args),v}function b(v){return a.call(t,v.data.handleId)}c=ue(t,n+=o,v=>function(p,L){if("function"==typeof L[0]){const Z={isPeriodic:"Interval"===o,delay:"Timeout"===o||"Interval"===o?L[1]||0:void 0,args:L},N=L[0];L[0]=function(){try{return N.apply(this,arguments)}finally{Z.isPeriodic||("number"==typeof Z.handleId?delete y[Z.handleId]:Z.handleId&&(Z.handleId[Oe]=null))}};const F=Me(n,L[0],Z,d,b);if(!F)return F;const H=F.data.handleId;return"number"==typeof H?y[H]=F:H&&(H[Oe]=F),H&&H.ref&&H.unref&&"function"==typeof H.ref&&"function"==typeof H.unref&&(F.ref=H.ref.bind(H),F.unref=H.unref.bind(H)),"number"==typeof H||H?H:F}return v.apply(t,L)}),a=ue(t,i,v=>function(p,L){const Z=L[0];let N;"number"==typeof Z?N=y[Z]:(N=Z&&Z[Oe],N||(N=Z)),N&&"string"==typeof N.type?"notScheduled"!==N.state&&(N.cancelFn&&N.data.isPeriodic||0===N.runCount)&&("number"==typeof Z?delete y[Z]:Z&&(Z[Oe]=null),N.zone.cancelTask(N)):v.apply(t,L)})}Zone.__load_patch("legacy",t=>{const n=t[Zone.__symbol__("legacyPatch")];n&&n()}),Zone.__load_patch("queueMicrotask",(t,n,i)=>{i.patchMethod(t,"queueMicrotask",o=>function(c,a){n.current.scheduleMicroTask("queueMicrotask",a[0])})}),Zone.__load_patch("timers",t=>{const n="set",i="clear";pe(t,n,i,"Timeout"),pe(t,n,i,"Interval"),pe(t,n,i,"Immediate")}),Zone.__load_patch("requestAnimationFrame",t=>{pe(t,"request","cancel","AnimationFrame"),pe(t,"mozRequest","mozCancel","AnimationFrame"),pe(t,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(t,n)=>{const i=["alert","prompt","confirm"];for(let o=0;o<i.length;o++)ue(t,i[o],(a,y,d)=>function(b,v){return n.current.run(a,t,v,d)})}),Zone.__load_patch("EventTarget",(t,n,i)=>{(function mt(t,n){n.patchEventPrototype(t,n)})(t,i),function pt(t,n){if(Zone[n.symbol("patchEventTarget")])return;const{eventNames:i,zoneSymbolEventNames:o,TRUE_STR:c,FALSE_STR:a,ZONE_SYMBOL_PREFIX:y}=n.getGlobalObjects();for(let b=0;b<i.length;b++){const v=i[b],Z=y+(v+a),N=y+(v+c);o[v]={},o[v][a]=Z,o[v][c]=N}const d=t.EventTarget;d&&d.prototype&&n.patchEventTarget(t,n,[d&&d.prototype])}(t,i);const o=t.XMLHttpRequestEventTarget;o&&o.prototype&&i.patchEventTarget(t,i,[o.prototype])}),Zone.__load_patch("MutationObserver",(t,n,i)=>{be("MutationObserver"),be("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(t,n,i)=>{be("IntersectionObserver")}),Zone.__load_patch("FileReader",(t,n,i)=>{be("FileReader")}),Zone.__load_patch("on_property",(t,n,i)=>{!function Tt(t,n){if(Ce&&!Ue||Zone[t.symbol("patchEvents")])return;const i=n.__Zone_ignore_on_properties;let o=[];if(Ae){const c=window;o=o.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const a=function ut(){try{const t=Te.navigator.userAgent;if(-1!==t.indexOf("MSIE ")||-1!==t.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:c,ignoreProperties:["error"]}]:[];tt(c,He(c),i&&i.concat(a),ce(c))}o=o.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let c=0;c<o.length;c++){const a=n[o[c]];a&&a.prototype&&tt(a.prototype,He(a.prototype),i)}}(i,t)}),Zone.__load_patch("customElements",(t,n,i)=>{!function yt(t,n){const{isBrowser:i,isMix:o}=n.getGlobalObjects();(i||o)&&t.customElements&&"customElements"in t&&n.patchCallbacks(n,t.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(t,i)}),Zone.__load_patch("XHR",(t,n)=>{!function b(v){const p=v.XMLHttpRequest;if(!p)return;const L=p.prototype;let N=L[Ze],F=L[Ne];if(!N){const h=v.XMLHttpRequestEventTarget;if(h){const I=h.prototype;N=I[Ze],F=I[Ne]}}const H="readystatechange",J="scheduled";function z(h){const I=h.data,P=I.target;P[a]=!1,P[d]=!1;const Q=P[c];N||(N=P[Ze],F=P[Ne]),Q&&F.call(P,H,Q);const oe=P[c]=()=>{if(P.readyState===P.DONE)if(!I.aborted&&P[a]&&h.state===J){const U=P[n.__symbol__("loadfalse")];if(0!==P.status&&U&&U.length>0){const re=h.invoke;h.invoke=function(){const ee=P[n.__symbol__("loadfalse")];for(let W=0;W<ee.length;W++)ee[W]===h&&ee.splice(W,1);!I.aborted&&h.state===J&&re.call(h)},U.push(h)}else h.invoke()}else!I.aborted&&!1===P[a]&&(P[d]=!0)};return N.call(P,H,oe),P[i]||(P[i]=h),E.apply(P,I.args),P[a]=!0,h}function R(){}function _(h){const I=h.data;return I.aborted=!0,G.apply(I.target,I.args)}const K=ue(L,"open",()=>function(h,I){return h[o]=0==I[2],h[y]=I[1],K.apply(h,I)}),X=j("fetchTaskAborting"),A=j("fetchTaskScheduling"),E=ue(L,"send",()=>function(h,I){if(!0===n.current[A]||h[o])return E.apply(h,I);{const P={target:h,url:h[y],isPeriodic:!1,args:I,aborted:!1},Q=Me("XMLHttpRequest.send",R,P,z,_);h&&!0===h[d]&&!P.aborted&&Q.state===J&&Q.invoke()}}),G=ue(L,"abort",()=>function(h,I){const P=function Z(h){return h[i]}(h);if(P&&"string"==typeof P.type){if(null==P.cancelFn||P.data&&P.data.aborted)return;P.zone.cancelTask(P)}else if(!0===n.current[X])return G.apply(h,I)})}(t);const i=j("xhrTask"),o=j("xhrSync"),c=j("xhrListener"),a=j("xhrScheduled"),y=j("xhrURL"),d=j("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",t=>{t.navigator&&t.navigator.geolocation&&function at(t,n){const i=t.constructor.name;for(let o=0;o<n.length;o++){const c=n[o],a=t[c];if(a){if(!Be(ie(t,c)))continue;t[c]=(d=>{const b=function(){return d.apply(this,Le(arguments,i+"."+c))};return fe(b,d),b})(a)}}}(t.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(t,n)=>{function i(o){return function(c){Qe(t,o).forEach(y=>{const d=t.PromiseRejectionEvent;if(d){const b=new d(o,{promise:c.promise,reason:c.rejection});y.invoke(b)}})}}t.PromiseRejectionEvent&&(n[j("unhandledPromiseRejectionHandler")]=i("unhandledrejection"),n[j("rejectionHandledHandler")]=i("rejectionhandled"))})}},ie=>{ie(ie.s=4492)}]);