"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3744],{3744:(q,O,m)=>{m.r(O),m.d(O,{startInputShims:()=>X});var y=m(7791),M=m(2892),h=m(6576),K=m(7188);m(1844);const A=new WeakMap,I=(e,t,s,o=0,n=!1)=>{A.has(e)!==s&&(s?F(e,t,o,n):H(e,t))},F=(e,t,s,o=!1)=>{const n=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o&&(r.disabled=!0),n.appendChild(r),A.set(e,r);const d="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${d}px,${s}px,0) scale(0)`},H=(e,t)=>{const s=A.get(e);s&&(A.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},w="input, textarea, [no-blur], [contenteditable]",N="$ionPaddingTimer",C=(e,t,s)=>{const o=e[N];o&&clearTimeout(o),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[N]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},U=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&C(t,0,s)},{once:!0})};let g=0;const P="data-ionic-skip-scroll-assist",V=(e,t,s,o,n,r,a,d=!1)=>{const i=r&&(void 0===a||a.mode===K.K.None),S=function(){var u=(0,y.Z)(function*(){t.hasAttribute(P)?t.removeAttribute(P):J(e,t,s,o,n,i,d)});return function(){return u.apply(this,arguments)}}();return e.addEventListener("focusin",S,!0),()=>{e.removeEventListener("focusin",S,!0)}},T=e=>{document.activeElement!==e&&(e.setAttribute(P,"true"),e.focus())},J=function(){var e=(0,y.Z)(function*(t,s,o,n,r,a,d=!1){if(!o&&!n)return;const i=((e,t,s)=>{var o;return((e,t,s,o)=>{const n=e.top,r=e.bottom,a=t.top,i=a+15,u=Math.min(t.bottom,o-s)-50-r,v=i-n,l=Math.round(u<0?-u:v>0?-v:0),_=Math.min(l,n-a),p=Math.abs(_)/.3;return{scrollAmount:_,scrollDuration:Math.min(400,Math.max(150,p)),scrollPadding:s,inputSafeY:4-(n-i)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),t.getBoundingClientRect(),s,e.ownerDocument.defaultView.innerHeight)})(t,o||n,r);if(o&&Math.abs(i.scrollAmount)<4)return T(s),void(a&&null!==o&&(C(o,g),U(s,o,()=>g=0)));if(I(t,s,!0,i.inputSafeY,d),T(s),(0,h.r)(()=>t.click()),a&&o&&(g=i.scrollPadding,C(o,g)),typeof window<"u"){let S;const u=function(){var l=(0,y.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",v),window.removeEventListener("ionKeyboardDidShow",u),o&&(yield(0,M.c)(o,0,i.scrollAmount,i.scrollDuration)),I(t,s,!1,i.inputSafeY),T(s),a&&U(s,o,()=>g=0)});return function(){return l.apply(this,arguments)}}(),v=()=>{window.removeEventListener("ionKeyboardDidShow",v),window.addEventListener("ionKeyboardDidShow",u)};if(o){const l=yield(0,M.g)(o);if(i.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===s.type?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",v)):window.addEventListener("ionKeyboardDidShow",u),void(S=setTimeout(u,1e3))}u()}});return function(s,o,n,r,a,d){return e.apply(this,arguments)}}(),X=function(){var e=(0,y.Z)(function*(t,s){const o=document,n="ios"===s,r="android"===s,a=t.getNumber("keyboardHeight",290),d=t.getBoolean("scrollAssist",!0),i=t.getBoolean("hideCaretOnScroll",n),S=t.getBoolean("inputBlurring",n),u=t.getBoolean("scrollPadding",!0),v=Array.from(o.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,_=new WeakMap,k=yield K.a.getResizeMode(),p=function(){var f=(0,y.Z)(function*(c){yield new Promise(b=>(0,h.c)(c,b));const x=c.shadowRoot||c,D=x.querySelector("input")||x.querySelector("textarea"),L=(0,M.f)(c),W=L?null:c.closest("ion-footer");if(D){if(L&&i&&!l.has(c)){const b=((e,t,s)=>{if(!s||!t)return()=>{};const o=d=>{(e=>e===e.getRootNode().activeElement)(t)&&I(e,t,d)},n=()=>I(e,t,!1),r=()=>o(!0),a=()=>o(!1);return(0,h.a)(s,"ionScrollStart",r),(0,h.a)(s,"ionScrollEnd",a),t.addEventListener("blur",n),()=>{(0,h.b)(s,"ionScrollStart",r),(0,h.b)(s,"ionScrollEnd",a),t.removeEventListener("blur",n)}})(c,D,L);l.set(c,b)}if("date"!==D.type&&"datetime-local"!==D.type&&(L||W)&&d&&!_.has(c)){const b=V(c,D,L,W,a,u,k,r);_.set(c,b)}}});return function(x){return f.apply(this,arguments)}}();S&&(()=>{let e=!0,t=!1;const s=document;(0,h.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",a=>{if(t)return void(t=!1);const d=s.activeElement;if(!d||d.matches(w))return;const i=a.target;i!==d&&(i.matches(w)||i.closest(w)||(e=!1,setTimeout(()=>{e||d.blur()},50)))},!1)})();for(const f of v)p(f);o.addEventListener("ionInputDidLoad",f=>{p(f.detail)}),o.addEventListener("ionInputDidUnload",f=>{(f=>{if(i){const c=l.get(f);c&&c(),l.delete(f)}if(d){const c=_.get(f);c&&c(),_.delete(f)}})(f.detail)})});return function(s,o){return e.apply(this,arguments)}}()}}]);