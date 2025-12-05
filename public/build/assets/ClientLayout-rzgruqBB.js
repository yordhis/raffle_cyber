import{s as xn,d as q,by as An,an as _n,o as J,e as tt,a as y,F as On,k as Sn,b as z,j as Bt,i as Wt,h as gt,bN as Pn,w as rt,z as En,n as Rt,r as ge,g as Cn}from"./app-zsUr2JtW.js";import{A as In,_ as Nn,a as Tn,b as Mn}from"./ResponsiveNavLink-8qioENO8.js";import{_ as Ln}from"./Banner-Hm4hd9ue.js";function be(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?be(Object(n),!0).forEach(function(a){O(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Et(t){"@babel/helpers - typeof";return Et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Et(t)}function zn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function he(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function jn(t,e,n){return e&&he(t.prototype,e),n&&he(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ae(t,e){return Fn(t)||$n(t,e)||We(t,e)||Un()}function dt(t){return Rn(t)||Dn(t)||We(t)||Yn()}function Rn(t){if(Array.isArray(t))return Ht(t)}function Fn(t){if(Array.isArray(t))return t}function Dn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function $n(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function We(t,e){if(t){if(typeof t=="string")return Ht(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ht(t,e)}}function Ht(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Yn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Un(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ye=function(){},re={},He={},Ge=null,Xe={mark:ye,measure:ye};try{typeof window<"u"&&(re=window),typeof document<"u"&&(He=document),typeof MutationObserver<"u"&&(Ge=MutationObserver),typeof performance<"u"&&(Xe=performance)}catch{}var Bn=re.navigator||{},we=Bn.userAgent,ke=we===void 0?"":we,B=re,k=He,xe=Ge,bt=Xe;B.document;var $=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",Ve=~ke.indexOf("MSIE")||~ke.indexOf("Trident/"),ht,yt,wt,kt,xt,R="___FONT_AWESOME___",Gt=16,Ke="fa",qe="svg-inline--fa",V="data-fa-i2svg",Xt="data-fa-pseudo-element",Wn="data-fa-pseudo-element-pending",ie="data-prefix",oe="data-icon",Ae="fontawesome-i2svg",Hn="async",Gn=["HTML","HEAD","STYLE","SCRIPT"],Ze=function(){try{return!0}catch{return!1}}(),w="classic",x="sharp",se=[w,x];function vt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[w]}})}var ft=vt((ht={},O(ht,w,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),O(ht,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),ht)),lt=vt((yt={},O(yt,w,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(yt,x,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),yt)),ct=vt((wt={},O(wt,w,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(wt,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),wt)),Xn=vt((kt={},O(kt,w,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(kt,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),kt)),Vn=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Qe="fa-layers-text",Kn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,qn=vt((xt={},O(xt,w,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(xt,x,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),xt)),Je=[1,2,3,4,5,6,7,8,9,10],Zn=Je.concat([11,12,13,14,15,16,17,18,19,20]),Qn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],G={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ut=new Set;Object.keys(lt[w]).map(ut.add.bind(ut));Object.keys(lt[x]).map(ut.add.bind(ut));var Jn=[].concat(se,dt(ut),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",G.GROUP,G.SWAP_OPACITY,G.PRIMARY,G.SECONDARY]).concat(Je.map(function(t){return"".concat(t,"x")})).concat(Zn.map(function(t){return"w-".concat(t)})),ot=B.FontAwesomeConfig||{};function ta(t){var e=k.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ea(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(k&&typeof k.querySelector=="function"){var na=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];na.forEach(function(t){var e=ae(t,2),n=e[0],a=e[1],r=ea(ta(n));r!=null&&(ot[a]=r)})}var tn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ke,replacementClass:qe,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ot.familyPrefix&&(ot.cssPrefix=ot.familyPrefix);var nt=u(u({},tn),ot);nt.autoReplaceSvg||(nt.observeMutations=!1);var m={};Object.keys(tn).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(n){nt[t]=n,st.forEach(function(a){return a(m)})},get:function(){return nt[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(e){nt.cssPrefix=e,st.forEach(function(n){return n(m)})},get:function(){return nt.cssPrefix}});B.FontAwesomeConfig=m;var st=[];function aa(t){return st.push(t),function(){st.splice(st.indexOf(t),1)}}var U=Gt,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ra(t){if(!(!t||!$)){var e=k.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=k.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return k.head.insertBefore(e,a),t}}var ia="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function mt(){for(var t=12,e="";t-- >0;)e+=ia[Math.random()*62|0];return e}function at(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function fe(t){return t.classList?at(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function en(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function oa(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(en(t[n]),'" ')},"").trim()}function Tt(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function le(t){return t.size!==L.size||t.x!==L.x||t.y!==L.y||t.rotate!==L.rotate||t.flipX||t.flipY}function sa(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function fa(t){var e=t.transform,n=t.width,a=n===void 0?Gt:n,r=t.height,i=r===void 0?Gt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Ve?f+="translate(".concat(e.x/U-a/2,"em, ").concat(e.y/U-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(e.x/U,"em), calc(-50% + ").concat(e.y/U,"em)) "):f+="translate(".concat(e.x/U,"em, ").concat(e.y/U,"em) "),f+="scale(".concat(e.size/U*(e.flipX?-1:1),", ").concat(e.size/U*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var la=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function nn(){var t=Ke,e=qe,n=m.cssPrefix,a=m.replacementClass,r=la;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var _e=!1;function Ft(){m.autoAddCss&&!_e&&(ra(nn()),_e=!0)}var ca={mixout:function(){return{dom:{css:nn,insertCss:Ft}}},hooks:function(){return{beforeDOMElementCreation:function(){Ft()},beforeI2svg:function(){Ft()}}}},F=B||{};F[R]||(F[R]={});F[R].styles||(F[R].styles={});F[R].hooks||(F[R].hooks={});F[R].shims||(F[R].shims=[]);var T=F[R],an=[],ua=function t(){k.removeEventListener("DOMContentLoaded",t),Ct=1,an.map(function(e){return e()})},Ct=!1;$&&(Ct=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),Ct||k.addEventListener("DOMContentLoaded",ua));function ma(t){$&&(Ct?setTimeout(t,0):an.push(t))}function pt(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?en(t):"<".concat(e," ").concat(oa(a),">").concat(i.map(pt).join(""),"</").concat(e,">")}function Oe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var da=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},Dt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?da(n,r):n,f,c,l;for(a===void 0?(f=1,l=e[i[0]]):(f=0,l=a);f<o;f++)c=i[f],l=s(l,e[c],c,e);return l};function va(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Vt(t){var e=va(t);return e.length===1?e[0].toString(16):null}function pa(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Se(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Kt(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Se(e);typeof T.hooks.addPack=="function"&&!r?T.hooks.addPack(t,Se(e)):T.styles[t]=u(u({},T.styles[t]||{}),i),t==="fas"&&Kt("fa",e)}var At,_t,Ot,Z=T.styles,ga=T.shims,ba=(At={},O(At,w,Object.values(ct[w])),O(At,x,Object.values(ct[x])),At),ce=null,rn={},on={},sn={},fn={},ln={},ha=(_t={},O(_t,w,Object.keys(ft[w])),O(_t,x,Object.keys(ft[x])),_t);function ya(t){return~Jn.indexOf(t)}function wa(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ya(r)?r:null}var cn=function(){var e=function(i){return Dt(Z,function(o,s,f){return o[f]=Dt(s,i,{}),o},{})};rn=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),on=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),ln=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var n="far"in Z||m.autoFetchSvg,a=Dt(ga,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});sn=a.names,fn=a.unicodes,ce=Mt(m.styleDefault,{family:m.familyDefault})};aa(function(t){ce=Mt(t.styleDefault,{family:m.familyDefault})});cn();function ue(t,e){return(rn[t]||{})[e]}function ka(t,e){return(on[t]||{})[e]}function X(t,e){return(ln[t]||{})[e]}function un(t){return sn[t]||{prefix:null,iconName:null}}function xa(t){var e=fn[t],n=ue("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function W(){return ce}var me=function(){return{prefix:null,iconName:null,rest:[]}};function Mt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?w:n,r=ft[a][t],i=lt[a][t]||lt[a][r],o=t in T.styles?t:null;return i||o||null}var Pe=(Ot={},O(Ot,w,Object.keys(ct[w])),O(Ot,x,Object.keys(ct[x])),Ot);function Lt(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},O(e,w,"".concat(m.cssPrefix,"-").concat(w)),O(e,x,"".concat(m.cssPrefix,"-").concat(x)),e),o=null,s=w;(t.includes(i[w])||t.some(function(c){return Pe[w].includes(c)}))&&(s=w),(t.includes(i[x])||t.some(function(c){return Pe[x].includes(c)}))&&(s=x);var f=t.reduce(function(c,l){var d=wa(m.cssPrefix,l);if(Z[l]?(l=ba[s].includes(l)?Xn[s][l]:l,o=l,c.prefix=l):ha[s].indexOf(l)>-1?(o=l,c.prefix=Mt(l,{family:s})):d?c.iconName=d:l!==m.replacementClass&&l!==i[w]&&l!==i[x]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var g=o==="fa"?un(c.iconName):{},b=X(c.prefix,c.iconName);g.prefix&&(o=null),c.iconName=g.iconName||b||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!Z.far&&Z.fas&&!m.autoFetchSvg&&(c.prefix="fas")}return c},me());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===x&&(Z.fass||m.autoFetchSvg)&&(f.prefix="fass",f.iconName=X(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=W()||"fas"),f}var Aa=function(){function t(){zn(this,t),this.definitions={}}return jn(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),o[s]),Kt(s,o[s]);var f=ct[w][s];f&&Kt(f,o[s]),cn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon,l=c[2];n[s]||(n[s]={}),l.length>0&&l.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][f]=c}),n}}]),t}(),Ee=[],Q={},et={},_a=Object.keys(et);function Oa(t,e){var n=e.mixoutsTo;return Ee=t,Q={},Object.keys(et).forEach(function(a){_a.indexOf(a)===-1&&delete et[a]}),Ee.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Et(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Q[o]||(Q[o]=[]),Q[o].push(i[o])})}a.provides&&a.provides(et)}),n}function qt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=Q[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function K(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=Q[t]||[];r.forEach(function(i){i.apply(null,n)})}function D(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return et[t]?et[t].apply(null,e):void 0}function Zt(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||W();if(e)return e=X(n,e)||e,Oe(mn.definitions,n,e)||Oe(T.styles,n,e)}var mn=new Aa,Sa=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,K("noAuto")},Pa={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $?(K("beforeI2svg",e),D("pseudoElements2svg",e),D("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,ma(function(){Ca({autoReplaceSvgRoot:n}),K("watch",e)})}},Ea={icon:function(e){if(e===null)return null;if(Et(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:X(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Mt(e[0]);return{prefix:a,iconName:X(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(m.cssPrefix,"-"))>-1||e.match(Vn))){var r=Lt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||W(),iconName:X(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=W();return{prefix:i,iconName:X(i,e)||e}}}},I={noAuto:Sa,config:m,dom:Pa,parse:Ea,library:mn,findIconDefinition:Zt,toHtml:pt},Ca=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?k:n;(Object.keys(T.styles).length>0||m.autoFetchSvg)&&$&&m.autoReplaceSvg&&I.dom.i2svg({node:a})};function zt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return pt(a)})}}),Object.defineProperty(t,"node",{get:function(){if($){var a=k.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Ia(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(le(o)&&n.found&&!a.found){var s=n.width,f=n.height,c={x:s/f/2,y:.5};r.style=Tt(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Na(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function de(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,c=t.maskId,l=t.titleId,d=t.extra,g=t.watchable,b=g===void 0?!1:g,S=a.found?a:n,P=S.width,E=S.height,v=r==="fak",p=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(Y){return d.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(d.classes).join(" "),h={children:[],attributes:u(u({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(E)})},A=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(P/E*16*.0625,"em")}:{};b&&(h.attributes[V]=""),f&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(l||mt())},children:[f]}),delete h.attributes.title);var _=u(u({},h),{},{prefix:r,iconName:i,main:n,mask:a,maskId:c,transform:o,symbol:s,styles:u(u({},A),d.styles)}),M=a.found&&n.found?D("generateAbstractMask",_)||{children:[],attributes:{}}:D("generateAbstractIcon",_)||{children:[],attributes:{}},N=M.children,jt=M.attributes;return _.children=N,_.attributes=jt,s?Na(_):Ia(_)}function Ce(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,c=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[V]="");var l=u({},o.styles);le(r)&&(l.transform=fa({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);var d=Tt(l);d.length>0&&(c.style=d);var g=[];return g.push({tag:"span",attributes:c,children:[e]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Ta(t){var e=t.content,n=t.title,a=t.extra,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Tt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var $t=T.styles;function Qt(t){var e=t[0],n=t[1],a=t.slice(4),r=ae(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(G.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(G.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(G.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Ma={found:!1,width:512,height:512};function La(t,e){!Ze&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Jt(t,e){var n=e;return e==="fa"&&m.styleDefault!==null&&(e=W()),new Promise(function(a,r){if(D("missingIconAbstract"),n==="fa"){var i=un(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&$t[e]&&$t[e][t]){var o=$t[e][t];return a(Qt(o))}La(t,e),a(u(u({},Ma),{},{icon:m.showMissingIcons&&t?D("missingIconAbstract")||{}:{}}))})}var Ie=function(){},te=m.measurePerformance&&bt&&bt.mark&&bt.measure?bt:{mark:Ie,measure:Ie},it='FA "6.5.1"',za=function(e){return te.mark("".concat(it," ").concat(e," begins")),function(){return dn(e)}},dn=function(e){te.mark("".concat(it," ").concat(e," ends")),te.measure("".concat(it," ").concat(e),"".concat(it," ").concat(e," begins"),"".concat(it," ").concat(e," ends"))},ve={begin:za,end:dn},St=function(){};function Ne(t){var e=t.getAttribute?t.getAttribute(V):null;return typeof e=="string"}function ja(t){var e=t.getAttribute?t.getAttribute(ie):null,n=t.getAttribute?t.getAttribute(oe):null;return e&&n}function Ra(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function Fa(){if(m.autoReplaceSvg===!0)return Pt.replace;var t=Pt[m.autoReplaceSvg];return t||Pt.replace}function Da(t){return k.createElementNS("http://www.w3.org/2000/svg",t)}function $a(t){return k.createElement(t)}function vn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?Da:$a:n;if(typeof t=="string")return k.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(vn(o,{ceFn:a}))}),r}function Ya(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Pt={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(vn(r),n)}),n.getAttribute(V)===null&&m.keepOriginalSource){var a=k.createComment(Ya(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~fe(n).indexOf(m.replacementClass))return Pt.replace(e);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===m.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return pt(s)}).join(`
`);n.setAttribute(V,""),n.innerHTML=o}};function Te(t){t()}function pn(t,e){var n=typeof e=="function"?e:St;if(t.length===0)n();else{var a=Te;m.mutateApproach===Hn&&(a=B.requestAnimationFrame||Te),a(function(){var r=Fa(),i=ve.begin("mutate");t.map(r),i(),n()})}}var pe=!1;function gn(){pe=!0}function ee(){pe=!1}var It=null;function Me(t){if(xe&&m.observeMutations){var e=t.treeCallback,n=e===void 0?St:e,a=t.nodeCallback,r=a===void 0?St:a,i=t.pseudoElementsCallback,o=i===void 0?St:i,s=t.observeMutationsRoot,f=s===void 0?k:s;It=new xe(function(c){if(!pe){var l=W();at(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Ne(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Ne(d.target)&&~Qn.indexOf(d.attributeName))if(d.attributeName==="class"&&ja(d.target)){var g=Lt(fe(d.target)),b=g.prefix,S=g.iconName;d.target.setAttribute(ie,b||l),S&&d.target.setAttribute(oe,S)}else Ra(d.target)&&r(d.target)})}}),$&&It.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ua(){It&&It.disconnect()}function Ba(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Wa(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Lt(fe(t));return r.prefix||(r.prefix=W()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ka(r.prefix,t.innerText)||ue(r.prefix,Vt(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ha(t){var e=at(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return m.autoA11y&&(n?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||mt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ga(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Le(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Wa(t),a=n.iconName,r=n.prefix,i=n.rest,o=Ha(t),s=qt("parseNodeAttributes",{},t),f=e.styleParser?Ba(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Xa=T.styles;function bn(t){var e=m.autoReplaceSvg==="nest"?Le(t,{styleParser:!1}):Le(t);return~e.extra.classes.indexOf(Qe)?D("generateLayersText",t,e):D("generateSvgReplacementMutation",t,e)}var H=new Set;se.map(function(t){H.add("fa-".concat(t))});Object.keys(ft[w]).map(H.add.bind(H));Object.keys(ft[x]).map(H.add.bind(H));H=dt(H);function ze(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$)return Promise.resolve();var n=k.documentElement.classList,a=function(d){return n.add("".concat(Ae,"-").concat(d))},r=function(d){return n.remove("".concat(Ae,"-").concat(d))},i=m.autoFetchSvg?H:se.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Xa));i.includes("fa")||i.push("fa");var o=[".".concat(Qe,":not([").concat(V,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(V,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=at(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=ve.begin("onTree"),c=s.reduce(function(l,d){try{var g=bn(d);g&&l.push(g)}catch(b){Ze||b.name==="MissingIcon"&&console.error(b)}return l},[]);return new Promise(function(l,d){Promise.all(c).then(function(g){pn(g,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),l()})}).catch(function(g){f(),d(g)})})}function Va(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;bn(t).then(function(n){n&&pn([n],e)})}function Ka(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Zt(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Zt(r||{})),t(a,u(u({},n),{},{mask:r}))}}var qa=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?L:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,c=n.maskId,l=c===void 0?null:c,d=n.title,g=d===void 0?null:d,b=n.titleId,S=b===void 0?null:b,P=n.classes,E=P===void 0?[]:P,v=n.attributes,p=v===void 0?{}:v,h=n.styles,A=h===void 0?{}:h;if(e){var _=e.prefix,M=e.iconName,N=e.icon;return zt(u({type:"icon"},e),function(){return K("beforeDOMElementCreation",{iconDefinition:e,params:n}),m.autoA11y&&(g?p["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(S||mt()):(p["aria-hidden"]="true",p.focusable="false")),de({icons:{main:Qt(N),mask:f?Qt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:M,transform:u(u({},L),r),symbol:o,title:g,maskId:l,titleId:S,extra:{attributes:p,styles:A,classes:E}})})}},Za={mixout:function(){return{icon:Ka(qa)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ze,n.nodeCallback=Va,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?k:a,i=n.callback,o=i===void 0?function(){}:i;return ze(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,c=a.symbol,l=a.mask,d=a.maskId,g=a.extra;return new Promise(function(b,S){Promise.all([Jt(r,s),l.iconName?Jt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var E=ae(P,2),v=E[0],p=E[1];b([n,de({icons:{main:v,mask:p},prefix:s,iconName:r,transform:f,symbol:c,maskId:d,title:i,titleId:o,extra:g,watchable:!0})])}).catch(S)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,f=Tt(s);f.length>0&&(r.style=f);var c;return le(o)&&(c=D("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},Qa={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return zt({type:"layer"},function(){K("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(dt(i)).join(" ")},children:o}]})}}}},Ja={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,c=f===void 0?{}:f,l=a.styles,d=l===void 0?{}:l;return zt({type:"counter",content:n},function(){return K("beforeDOMElementCreation",{content:n,params:a}),Ta({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(dt(s))}})})}}}},tr={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?L:r,o=a.title,s=o===void 0?null:o,f=a.classes,c=f===void 0?[]:f,l=a.attributes,d=l===void 0?{}:l,g=a.styles,b=g===void 0?{}:g;return zt({type:"text",content:n},function(){return K("beforeDOMElementCreation",{content:n,params:a}),Ce({content:n,transform:u(u({},L),i),title:s,extra:{attributes:d,styles:b,classes:["".concat(m.cssPrefix,"-layers-text")].concat(dt(c))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(Ve){var c=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();s=l.width/c,f=l.height/c}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ce({content:n.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},er=new RegExp('"',"ug"),je=[1105920,1112319];function nr(t){var e=t.replace(er,""),n=pa(e,0),a=n>=je[0]&&n<=je[1],r=e.length===2?e[0]===e[1]:!1;return{value:Vt(r?e[0]:e),isSecondary:a||r}}function Re(t,e){var n="".concat(Wn).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=at(t.children),o=i.filter(function(N){return N.getAttribute(Xt)===e})[0],s=B.getComputedStyle(t,e),f=s.getPropertyValue("font-family").match(Kn),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&l!=="none"&&l!==""){var d=s.getPropertyValue("content"),g=~["Sharp"].indexOf(f[2])?x:w,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?lt[g][f[2].toLowerCase()]:qn[g][c],S=nr(d),P=S.value,E=S.isSecondary,v=f[0].startsWith("FontAwesome"),p=ue(b,P),h=p;if(v){var A=xa(P);A.iconName&&A.prefix&&(p=A.iconName,b=A.prefix)}if(p&&!E&&(!o||o.getAttribute(ie)!==b||o.getAttribute(oe)!==h)){t.setAttribute(n,h),o&&t.removeChild(o);var _=Ga(),M=_.extra;M.attributes[Xt]=e,Jt(p,b).then(function(N){var jt=de(u(u({},_),{},{icons:{main:N,mask:me()},prefix:b,iconName:h,extra:M,watchable:!0})),Y=k.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(Y,t.firstChild):t.appendChild(Y),Y.outerHTML=jt.map(function(kn){return pt(kn)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function ar(t){return Promise.all([Re(t,"::before"),Re(t,"::after")])}function rr(t){return t.parentNode!==document.head&&!~Gn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Xt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Fe(t){if($)return new Promise(function(e,n){var a=at(t.querySelectorAll("*")).filter(rr).map(ar),r=ve.begin("searchPseudoElements");gn(),Promise.all(a).then(function(){r(),ee(),e()}).catch(function(){r(),ee(),n()})})}var ir={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Fe,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?k:a;m.searchPseudoElements&&Fe(r)}}},De=!1,or={mixout:function(){return{dom:{unwatch:function(){gn(),De=!0}}}},hooks:function(){return{bootstrap:function(){Me(qt("mutationObserverCallbacks",{}))},noAuto:function(){Ua()},watch:function(n){var a=n.observeMutationsRoot;De?ee():Me(qt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},$e=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},sr={mixout:function(){return{parse:{transform:function(n){return $e(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=$e(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(f," ").concat(c," ").concat(l)},g={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:d,path:g};return{tag:"g",attributes:u({},b.outer),children:[{tag:"g",attributes:u({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),b.path)}]}]}}}},Yt={x:0,y:0,width:"100%",height:"100%"};function Ye(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function fr(t){return t.tag==="g"?t.children:[t]}var lr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Lt(r.split(" ").map(function(o){return o.trim()})):me();return i.prefix||(i.prefix=W()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,c=i.width,l=i.icon,d=o.width,g=o.icon,b=sa({transform:f,containerWidth:d,iconWidth:c}),S={tag:"rect",attributes:u(u({},Yt),{},{fill:"white"})},P=l.children?{children:l.children.map(Ye)}:{},E={tag:"g",attributes:u({},b.inner),children:[Ye(u({tag:l.tag,attributes:u(u({},l.attributes),b.path)},P))]},v={tag:"g",attributes:u({},b.outer),children:[E]},p="mask-".concat(s||mt()),h="clip-".concat(s||mt()),A={tag:"mask",attributes:u(u({},Yt),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,v]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:fr(g)},A]};return a.push(_,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")")},Yt)}),{children:a,attributes:r}}}},cr={provides:function(e){var n=!1;B.matchMedia&&(n=B.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},ur={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},mr=[ca,Za,Qa,Ja,tr,ir,or,sr,lr,cr,ur];Oa(mr,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var ne=I.parse;I.findIconDefinition;I.toHtml;var dr=I.icon;I.layer;I.text;I.counter;function Ue(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ue(Object(n),!0).forEach(function(a){C(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ue(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Nt(t){"@babel/helpers - typeof";return Nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nt(t)}function C(t,e,n){return e=br(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function pr(t,e){if(t==null)return{};var n=vr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function gr(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function br(t){var e=gr(t,"string");return typeof e=="symbol"?e:String(e)}var hr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},hn={exports:{}};(function(t){(function(e){var n=function(v,p,h){if(!c(p)||d(p)||g(p)||b(p)||f(p))return p;var A,_=0,M=0;if(l(p))for(A=[],M=p.length;_<M;_++)A.push(n(v,p[_],h));else{A={};for(var N in p)Object.prototype.hasOwnProperty.call(p,N)&&(A[v(N,h)]=n(v,p[N],h))}return A},a=function(v,p){p=p||{};var h=p.separator||"_",A=p.split||/(?=[A-Z])/;return v.split(A).join(h)},r=function(v){return S(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(p,h){return h?h.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var p=r(v);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(v,p){return a(v,p).toLowerCase()},s=Object.prototype.toString,f=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},l=function(v){return s.call(v)=="[object Array]"},d=function(v){return s.call(v)=="[object Date]"},g=function(v){return s.call(v)=="[object RegExp]"},b=function(v){return s.call(v)=="[object Boolean]"},S=function(v){return v=v-0,v===v},P=function(v,p){var h=p&&"process"in p?p.process:p;return typeof h!="function"?v:function(A,_){return h(A,v,_)}},E={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,p){return n(P(r,p),v)},decamelizeKeys:function(v,p){return n(P(o,p),v,p)},pascalizeKeys:function(v,p){return n(P(i,p),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=E:e.humps=E})(hr)})(hn);var yr=hn.exports,wr=["class","style"];function kr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=yr.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return e[r]=i,e},{})}function xr(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function yn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(f){return yn(f)}),r=Object.keys(t.attributes||{}).reduce(function(f,c){var l=t.attributes[c];switch(c){case"class":f.class=xr(l);break;case"style":f.style=kr(l);break;default:f.attrs[c]=l}return f},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=pr(n,wr);return _n(t.tag,j(j(j({},e),{},{class:r.class,style:j(j({},r.style),o)},r.attrs),s),a)}var wn=!1;try{wn=!0}catch{}function Ar(){if(!wn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ut(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?C({},t,e):{}}function _r(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},C(e,"fa-".concat(t.size),t.size!==null),C(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),C(e,"fa-pull-".concat(t.pull),t.pull!==null),C(e,"fa-swap-opacity",t.swapOpacity),C(e,"fa-bounce",t.bounce),C(e,"fa-shake",t.shake),C(e,"fa-beat",t.beat),C(e,"fa-fade",t.fade),C(e,"fa-beat-fade",t.beatFade),C(e,"fa-flash",t.flash),C(e,"fa-spin-pulse",t.spinPulse),C(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function Be(t){if(t&&Nt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ne.icon)return ne.icon(t);if(t===null)return null;if(Nt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Or=xn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=q(function(){return Be(e.icon)}),i=q(function(){return Ut("classes",_r(e))}),o=q(function(){return Ut("transform",typeof e.transform=="string"?ne.transform(e.transform):e.transform)}),s=q(function(){return Ut("mask",Be(e.mask))}),f=q(function(){return dr(r.value,j(j(j(j({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});An(f,function(l){if(!l)return Ar("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=q(function(){return f.value?yn(f.value.abstract[0],{},a):null});return function(){return c.value}}}),Sr={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Pr={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]};const Er={class:"bg-verde-500 bg-opacity-95"},Cr={class:"container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col"},Ir=y("a",{class:"flex title-font font-medium items-center md:justify-start justify-center text-white"},[y("span",{class:"ml-3 text-xl font-serif font-bold"},"Cyber Raffles")],-1),Nr={class:"inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"},Tr=["href"],Mr=y("p",{class:"text-xs text-gray-300 sm:ml-6 sm:mt-0 mt-4"},[Wt(" © 2024 Cyber Staff — "),y("a",{href:"https://cyberstaffstore.com/",class:"text-gray-300 ml-1",target:"_blank",rel:"noopener noreferrer"}," Desarrollado por cyberstaffstore.com")],-1),Lr={__name:"Footer",props:{title:String,subTitle:String,redes:{type:Array,default:[{link:"https://www.instagram.com/cyberstaffweb/",icono:Sr,name:"Instagram"},{link:"https://wa.me/584143534569",icono:Pr,name:"WhatsApp"}]}},setup(t){return(e,n)=>(J(),tt("div",Er,[y("div",Cr,[Ir,y("span",Nr,[(J(!0),tt(On,null,Sn(t.redes,a=>(J(),tt("a",{href:a.link,target:"_blank",class:"ml-3 text-gray-300"},[z(Bt(Or),{icon:a.icono,class:"text-2xl"},null,8,["icon"])],8,Tr))),256))]),Mr])]))}},zr={class:"min-h-screen bg-stone-950"},jr={class:"w-full bg-verde-600 shadow-lg border-b border-gray-100"},Rr={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},Fr={class:"flex justify-between h-16"},Dr={class:"flex"},$r={class:"shrink-0 flex items-center"},Yr={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},Ur={class:"hidden sm:flex sm:items-center sm:ms-6"},Br={class:"ms-3 relative"},Wr=y("span",{class:"inline-flex rounded-md sm:hidden"},[y("button",{type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},[y("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[y("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])])],-1),Hr={class:"-me-2 flex items-center sm:hidden"},Gr={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Xr={class:"pt-2 pb-3 space-y-1"},Vr={key:0,class:"shadow"},Kr={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},Jr={__name:"ClientLayout",props:{title:String},setup(t){const e=gt(!1);return gt(!1),gt(!1),gt(!1),(n,a)=>(J(),tt("div",null,[z(Bt(Pn),{title:t.title},null,8,["title"]),z(Ln),y("div",zr,[y("nav",jr,[y("div",Rr,[y("div",Fr,[y("div",Dr,[y("div",$r,[z(Bt(En),{href:n.route("page.index")},{default:rt(()=>[z(In,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),y("div",Yr,[z(Nn,{href:n.route("page.index","#aliados")},{default:rt(()=>[Wt(" Aliados ")]),_:1},8,["href"])])]),y("div",Ur,[y("div",Br,[z(Tn,{align:"right",width:"48"},{trigger:rt(()=>[Wr]),content:rt(()=>[]),_:1})])]),y("div",Hr,[y("button",{onClick:a[0]||(a[0]=r=>e.value=!e.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(J(),tt("svg",Gr,[y("path",{class:Rt({hidden:e.value,"inline-flex":!e.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),y("path",{class:Rt({hidden:!e.value,"inline-flex":e.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),y("div",{class:Rt([{block:e.value,hidden:!e.value},"sm:hidden"])},[y("div",Xr,[z(Mn,{href:n.route("page.index","#aliados")},{default:rt(()=>[Wt(" Aliados ")]),_:1},8,["href"])])],2)]),n.$slots.header?(J(),tt("header",Vr,[y("div",Kr,[ge(n.$slots,"header")])])):Cn("",!0),y("main",null,[ge(n.$slots,"default")]),z(Lr,{title:"Contáctenos","sub-title":"Por medio de nuestras redes sociales"})])]))}};export{Jr as _};
