var hr=Object.defineProperty;var Ke=Object.getOwnPropertySymbols;var yr=Object.prototype.hasOwnProperty,xr=Object.prototype.propertyIsEnumerable;var qe=(_,A,O)=>A in _?hr(_,A,{enumerable:!0,configurable:!0,writable:!0,value:O}):_[A]=O,Ze=(_,A)=>{for(var O in A||(A={}))yr.call(A,O)&&qe(_,O,A[O]);if(Ke)for(var O of Ke(A))xr.call(A,O)&&qe(_,O,A[O]);return _};(function(_,A){typeof exports=="object"&&typeof module!="undefined"?A(exports):typeof define=="function"&&define.amd?define(["exports"],A):(_=typeof globalThis!="undefined"?globalThis:_||self,A(_.FilePreview={}))})(this,function(_){"use strict";const A={"file-archive":{extensions:["7z","bz","bz2","gz","zip"]},"file-audio":{extensions:["aac","mid","midi","mp3","oga","opus","wav","weba"],validate:t=>!!t&&t.match(/^audio/)},"file-code":{extensions:["htm","html","jar","js","json","php","py","rb","vue","xml"]},"file-excel":{extensions:["xls","xlsx"]},"file-image":{extensions:["bmp","gif","jpeg","jpg","png","svg","tif","tiff","webp"],validate:t=>t&&t.match(/^image/)},"file-pdf":{extensions:["pdf"]},"file-powerpoint":{extensions:["ppt","pptx"]},"file-video":{extensions:["3gp","avi","mpeg","ogv","ts","webm"],validate:t=>!!t&&t.match(/^video/)},"file-word":["doc","docx"]};/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?O(Object(n),!0).forEach(function(a){tn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function et(t){return et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},et(t)}function Qe(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Je(t,e,n){return e&&$t(t.prototype,e),n&&$t(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function tn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pt(t,e){return nn(t)||rn(t,e)||Wt(t,e)||sn()}function nt(t){return en(t)||an(t)||Wt(t)||on()}function en(t){if(Array.isArray(t))return gt(t)}function nn(t){if(Array.isArray(t))return t}function an(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function rn(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,o=!1,i,s;try{for(n=n.call(t);!(r=(i=n.next()).done)&&(a.push(i.value),!(e&&a.length===e));r=!0);}catch(f){o=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(o)throw s}}return a}}function Wt(t,e){if(!!t){if(typeof t=="string")return gt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gt(t,e)}}function gt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function on(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Gt=function(){},bt={},Xt={},Kt=null,qt={mark:Gt,measure:Gt};try{typeof window!="undefined"&&(bt=window),typeof document!="undefined"&&(Xt=document),typeof MutationObserver!="undefined"&&(Kt=MutationObserver),typeof performance!="undefined"&&(qt=performance)}catch{}var fn=bt.navigator||{},Zt=fn.userAgent,Qt=Zt===void 0?"":Zt,R=bt,x=Xt,Jt=Kt,at=qt;R.document;var N=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",te=~Qt.indexOf("MSIE")||~Qt.indexOf("Trident/"),L="___FONT_AWESOME___",ht=16,ee="fa",ne="svg-inline--fa",V="data-fa-i2svg",yt="data-fa-pseudo-element",ln="data-fa-pseudo-element-pending",xt="data-prefix",wt="data-icon",ae="fontawesome-i2svg",cn="async",un=["HTML","HEAD","STYLE","SCRIPT"],re=function(){try{return!0}catch{return!1}}(),kt={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},rt={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},ie={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},mn={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},dn=/fa[srltdbk\-\ ]/,oe="fa-layers-text",vn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,pn={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},se=[1,2,3,4,5,6,7,8,9,10],gn=se.concat([11,12,13,14,15,16,17,18,19,20]),bn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],j={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},hn=[].concat(nt(Object.keys(rt)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",j.GROUP,j.SWAP_OPACITY,j.PRIMARY,j.SECONDARY]).concat(se.map(function(t){return"".concat(t,"x")})).concat(gn.map(function(t){return"w-".concat(t)})),fe=R.FontAwesomeConfig||{};function yn(t){var e=x.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function xn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(x&&typeof x.querySelector=="function"){var wn=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];wn.forEach(function(t){var e=pt(t,2),n=e[0],a=e[1],r=xn(yn(n));r!=null&&(fe[a]=r)})}var kn={familyPrefix:ee,styleDefault:"solid",replacementClass:ne,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},X=l(l({},kn),fe);X.autoReplaceSvg||(X.observeMutations=!1);var v={};Object.keys(X).forEach(function(t){Object.defineProperty(v,t,{enumerable:!0,set:function(n){X[t]=n,it.forEach(function(a){return a(v)})},get:function(){return X[t]}})}),R.FontAwesomeConfig=v;var it=[];function Cn(t){return it.push(t),function(){it.splice(it.indexOf(t),1)}}var H=ht,z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function An(t){if(!(!t||!N)){var e=x.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=x.head.childNodes,a=null,r=n.length-1;r>-1;r--){var o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return x.head.insertBefore(e,a),t}}var _n="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function K(){for(var t=12,e="";t-- >0;)e+=_n[Math.random()*62|0];return e}function B(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ct(t){return t.classList?B(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function le(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Sn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(le(t[n]),'" ')},"").trim()}function ot(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function At(t){return t.size!==z.size||t.x!==z.x||t.y!==z.y||t.rotate!==z.rotate||t.flipX||t.flipY}function On(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},m={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:m}}function En(t){var e=t.transform,n=t.width,a=n===void 0?ht:n,r=t.height,o=r===void 0?ht:r,i=t.startCentered,s=i===void 0?!1:i,f="";return s&&te?f+="translate(".concat(e.x/H-a/2,"em, ").concat(e.y/H-o/2,"em) "):s?f+="translate(calc(-50% + ".concat(e.x/H,"em), calc(-50% + ").concat(e.y/H,"em)) "):f+="translate(".concat(e.x/H,"em, ").concat(e.y/H,"em) "),f+="scale(".concat(e.size/H*(e.flipX?-1:1),", ").concat(e.size/H*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var Pn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
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
    transition-delay: 0s;
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
}`;function ce(){var t=ee,e=ne,n=v.familyPrefix,a=v.replacementClass,r=Pn;if(n!==t||a!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var ue=!1;function _t(){v.autoAddCss&&!ue&&(An(ce()),ue=!0)}var Mn={mixout:function(){return{dom:{css:ce,insertCss:_t}}},hooks:function(){return{beforeDOMElementCreation:function(){_t()},beforeI2svg:function(){_t()}}}},I=R||{};I[L]||(I[L]={}),I[L].styles||(I[L].styles={}),I[L].hooks||(I[L].hooks={}),I[L].shims||(I[L].shims=[]);var P=I[L],me=[],zn=function t(){x.removeEventListener("DOMContentLoaded",t),st=1,me.map(function(e){return e()})},st=!1;N&&(st=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),st||x.addEventListener("DOMContentLoaded",zn));function Nn(t){!N||(st?setTimeout(t,0):me.push(t))}function q(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?le(t):"<".concat(e," ").concat(Sn(a),">").concat(o.map(q).join(""),"</").concat(e,">")}function de(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ln=function(e,n){return function(a,r,o,i){return e.call(n,a,r,o,i)}},St=function(e,n,a,r){var o=Object.keys(e),i=o.length,s=r!==void 0?Ln(n,r):n,f,m,u;for(a===void 0?(f=1,u=e[o[0]]):(f=0,u=a);f<i;f++)m=o[f],u=s(u,e[m],m,e);return u};function In(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Ot(t){var e=In(t);return e.length===1?e[0].toString(16):null}function Tn(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function ve(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Et(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,o=ve(e);typeof P.hooks.addPack=="function"&&!r?P.hooks.addPack(t,ve(e)):P.styles[t]=l(l({},P.styles[t]||{}),o),t==="fas"&&Et("fa",e)}var Z=P.styles,Fn=P.shims,Rn=Object.values(ie),Pt=null,pe={},ge={},be={},he={},ye={},Hn=Object.keys(kt);function Dn(t){return~hn.indexOf(t)}function Vn(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Dn(r)?r:null}var xe=function(){var e=function(o){return St(Z,function(i,s,f){return i[f]=St(s,o,{}),i},{})};pe=e(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=i})}return r}),ge=e(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=i})}return r}),ye=e(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(f){r[f]=i}),r});var n="far"in Z||v.autoFetchSvg,a=St(Fn,function(r,o){var i=o[0],s=o[1],f=o[2];return s==="far"&&!n&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});be=a.names,he=a.unicodes,Pt=ft(v.styleDefault)};Cn(function(t){Pt=ft(t.styleDefault)}),xe();function Mt(t,e){return(pe[t]||{})[e]}function jn(t,e){return(ge[t]||{})[e]}function U(t,e){return(ye[t]||{})[e]}function we(t){return be[t]||{prefix:null,iconName:null}}function Yn(t){var e=he[t],n=Mt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function D(){return Pt}var zt=function(){return{prefix:null,iconName:null,rest:[]}};function ft(t){var e=kt[t],n=rt[t]||rt[e],a=t in P.styles?t:null;return n||a||null}function lt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,a=n===void 0?!1:n,r=null,o=t.reduce(function(i,s){var f=Vn(v.familyPrefix,s);if(Z[s]?(s=Rn.includes(s)?mn[s]:s,r=s,i.prefix=s):Hn.indexOf(s)>-1?(r=s,i.prefix=ft(s)):f?i.iconName=f:s!==v.replacementClass&&i.rest.push(s),!a&&i.prefix&&i.iconName){var m=r==="fa"?we(i.iconName):{},u=U(i.prefix,i.iconName);m.prefix&&(r=null),i.iconName=m.iconName||u||i.iconName,i.prefix=m.prefix||i.prefix,i.prefix==="far"&&!Z.far&&Z.fas&&!v.autoFetchSvg&&(i.prefix="fas")}return i},zt());return(o.prefix==="fa"||r==="fa")&&(o.prefix=D()||"fas"),o}var Bn=function(){function t(){Qe(this,t),this.definitions={}}return Je(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){n.definitions[s]=l(l({},n.definitions[s]||{}),i[s]),Et(s,i[s]);var f=ie[s];f&&Et(f,i[s]),xe()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,f=i.iconName,m=i.icon,u=m[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(c){typeof c=="string"&&(n[s][c]=m)}),n[s][f]=m}),n}}]),t}(),ke=[],$={},W={},Un=Object.keys(W);function $n(t,e){var n=e.mixoutsTo;return ke=t,$={},Object.keys(W).forEach(function(a){Un.indexOf(a)===-1&&delete W[a]}),ke.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(n[i]=r[i]),et(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){$[i]||($[i]=[]),$[i].push(o[i])})}a.provides&&a.provides(W)}),n}function Nt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var o=$[t]||[];return o.forEach(function(i){e=i.apply(null,[e].concat(a))}),e}function Y(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=$[t]||[];r.forEach(function(o){o.apply(null,n)})}function T(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return W[t]?W[t].apply(null,e):void 0}function Lt(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||D();if(!!e)return e=U(n,e)||e,de(Ce.definitions,n,e)||de(P.styles,n,e)}var Ce=new Bn,Wn=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,Y("noAuto")},Gn={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return N?(Y("beforeI2svg",e),T("pseudoElements2svg",e),T("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,Nn(function(){Kn({autoReplaceSvgRoot:n}),Y("watch",e)})}},Xn={icon:function(e){if(e===null)return null;if(et(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:U(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=ft(e[0]);return{prefix:a,iconName:U(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(v.familyPrefix,"-"))>-1||e.match(dn))){var r=lt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||D(),iconName:U(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var o=D();return{prefix:o,iconName:U(o,e)||e}}}},E={noAuto:Wn,config:v,dom:Gn,parse:Xn,library:Ce,findIconDefinition:Lt,toHtml:q},Kn=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?x:n;(Object.keys(P.styles).length>0||v.autoFetchSvg)&&N&&v.autoReplaceSvg&&E.dom.i2svg({node:a})};function ct(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return q(a)})}}),Object.defineProperty(t,"node",{get:function(){if(!!N){var a=x.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function qn(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,o=t.styles,i=t.transform;if(At(i)&&n.found&&!a.found){var s=n.width,f=n.height,m={x:s/f/2,y:.5};r.style=ot(l(l({},o),{},{"transform-origin":"".concat(m.x+i.x/16,"em ").concat(m.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Zn(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,o=t.symbol,i=o===!0?"".concat(e,"-").concat(v.familyPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:i}),children:a}]}]}function It(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,o=t.iconName,i=t.transform,s=t.symbol,f=t.title,m=t.maskId,u=t.titleId,c=t.extra,p=t.watchable,b=p===void 0?!1:p,y=a.found?a:n,w=y.width,S=y.height,d=r==="fak",g=[v.replacementClass,o?"".concat(v.familyPrefix,"-").concat(o):""].filter(function(G){return c.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(c.classes).join(" "),h={children:[],attributes:l(l({},c.attributes),{},{"data-prefix":r,"data-icon":o,class:g,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(S)})},C=d&&!~c.classes.indexOf("fa-fw")?{width:"".concat(w/S*16*.0625,"em")}:{};b&&(h.attributes[V]=""),f&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(u||K())},children:[f]}),delete h.attributes.title);var k=l(l({},h),{},{prefix:r,iconName:o,main:n,mask:a,maskId:m,transform:i,symbol:s,styles:l(l({},C),c.styles)}),M=a.found&&n.found?T("generateAbstractMask",k)||{children:[],attributes:{}}:T("generateAbstractIcon",k)||{children:[],attributes:{}},F=M.children,tt=M.attributes;return k.children=F,k.attributes=tt,s?Zn(k):qn(k)}function Ae(t){var e=t.content,n=t.width,a=t.height,r=t.transform,o=t.title,i=t.extra,s=t.watchable,f=s===void 0?!1:s,m=l(l(l({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});f&&(m[V]="");var u=l({},i.styles);At(r)&&(u.transform=En({transform:r,startCentered:!0,width:n,height:a}),u["-webkit-transform"]=u.transform);var c=ot(u);c.length>0&&(m.style=c);var p=[];return p.push({tag:"span",attributes:m,children:[e]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function Qn(t){var e=t.content,n=t.title,a=t.extra,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=ot(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}var Tt=P.styles;function Ft(t){var e=t[0],n=t[1],a=t.slice(4),r=pt(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(v.familyPrefix,"-").concat(j.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.familyPrefix,"-").concat(j.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(v.familyPrefix,"-").concat(j.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:i}}var Jn={found:!1,width:512,height:512};function ta(t,e){!re&&!v.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Rt(t,e){var n=e;return e==="fa"&&v.styleDefault!==null&&(e=D()),new Promise(function(a,r){if(T("missingIconAbstract"),n==="fa"){var o=we(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Tt[e]&&Tt[e][t]){var i=Tt[e][t];return a(Ft(i))}ta(t,e),a(l(l({},Jn),{},{icon:v.showMissingIcons&&t?T("missingIconAbstract")||{}:{}}))})}var _e=function(){},Ht=v.measurePerformance&&at&&at.mark&&at.measure?at:{mark:_e,measure:_e},Q='FA "6.1.1"',ea=function(e){return Ht.mark("".concat(Q," ").concat(e," begins")),function(){return Se(e)}},Se=function(e){Ht.mark("".concat(Q," ").concat(e," ends")),Ht.measure("".concat(Q," ").concat(e),"".concat(Q," ").concat(e," begins"),"".concat(Q," ").concat(e," ends"))},Dt={begin:ea,end:Se},ut=function(){};function Oe(t){var e=t.getAttribute?t.getAttribute(V):null;return typeof e=="string"}function na(t){var e=t.getAttribute?t.getAttribute(xt):null,n=t.getAttribute?t.getAttribute(wt):null;return e&&n}function aa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(v.replacementClass)}function ra(){if(v.autoReplaceSvg===!0)return mt.replace;var t=mt[v.autoReplaceSvg];return t||mt.replace}function ia(t){return x.createElementNS("http://www.w3.org/2000/svg",t)}function oa(t){return x.createElement(t)}function Ee(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?ia:oa:n;if(typeof t=="string")return x.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])});var o=t.children||[];return o.forEach(function(i){r.appendChild(Ee(i,{ceFn:a}))}),r}function sa(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var mt={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Ee(r),n)}),n.getAttribute(V)===null&&v.keepOriginalSource){var a=x.createComment(sa(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~Ct(n).indexOf(v.replacementClass))return mt.replace(e);var r=new RegExp("".concat(v.familyPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,f){return f===v.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return q(s)}).join(`
`);n.setAttribute(V,""),n.innerHTML=i}};function Pe(t){t()}function Me(t,e){var n=typeof e=="function"?e:ut;if(t.length===0)n();else{var a=Pe;v.mutateApproach===cn&&(a=R.requestAnimationFrame||Pe),a(function(){var r=ra(),o=Dt.begin("mutate");t.map(r),o(),n()})}}var Vt=!1;function ze(){Vt=!0}function jt(){Vt=!1}var dt=null;function Ne(t){if(!!Jt&&!!v.observeMutations){var e=t.treeCallback,n=e===void 0?ut:e,a=t.nodeCallback,r=a===void 0?ut:a,o=t.pseudoElementsCallback,i=o===void 0?ut:o,s=t.observeMutationsRoot,f=s===void 0?x:s;dt=new Jt(function(m){if(!Vt){var u=D();B(m).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!Oe(c.addedNodes[0])&&(v.searchPseudoElements&&i(c.target),n(c.target)),c.type==="attributes"&&c.target.parentNode&&v.searchPseudoElements&&i(c.target.parentNode),c.type==="attributes"&&Oe(c.target)&&~bn.indexOf(c.attributeName))if(c.attributeName==="class"&&na(c.target)){var p=lt(Ct(c.target)),b=p.prefix,y=p.iconName;c.target.setAttribute(xt,b||u),y&&c.target.setAttribute(wt,y)}else aa(c.target)&&r(c.target)})}}),N&&dt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function fa(){!dt||dt.disconnect()}function la(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),n}function ca(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=lt(Ct(t));return r.prefix||(r.prefix=D()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||r.prefix&&a.length>0&&(r.iconName=jn(r.prefix,t.innerText)||Mt(r.prefix,Ot(t.innerText))),r}function ua(t){var e=B(t.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return v.autoA11y&&(n?e["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||K()):(e["aria-hidden"]="true",e.focusable="false")),e}function ma(){return{iconName:null,title:null,titleId:null,prefix:null,transform:z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Le(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ca(t),a=n.iconName,r=n.prefix,o=n.rest,i=ua(t),s=Nt("parseNodeAttributes",{},t),f=e.styleParser?la(t):[];return l({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:i}},s)}var da=P.styles;function Ie(t){var e=v.autoReplaceSvg==="nest"?Le(t,{styleParser:!1}):Le(t);return~e.extra.classes.indexOf(oe)?T("generateLayersText",t,e):T("generateSvgReplacementMutation",t,e)}function Te(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!N)return Promise.resolve();var n=x.documentElement.classList,a=function(c){return n.add("".concat(ae,"-").concat(c))},r=function(c){return n.remove("".concat(ae,"-").concat(c))},o=v.autoFetchSvg?Object.keys(kt):Object.keys(da),i=[".".concat(oe,":not([").concat(V,"])")].concat(o.map(function(u){return".".concat(u,":not([").concat(V,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=B(t.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=Dt.begin("onTree"),m=s.reduce(function(u,c){try{var p=Ie(c);p&&u.push(p)}catch(b){re||b.name==="MissingIcon"&&console.error(b)}return u},[]);return new Promise(function(u,c){Promise.all(m).then(function(p){Me(p,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),u()})}).catch(function(p){f(),c(p)})})}function va(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ie(t).then(function(n){n&&Me([n],e)})}function pa(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Lt(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Lt(r||{})),t(a,l(l({},n),{},{mask:r}))}}var ga=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?z:a,o=n.symbol,i=o===void 0?!1:o,s=n.mask,f=s===void 0?null:s,m=n.maskId,u=m===void 0?null:m,c=n.title,p=c===void 0?null:c,b=n.titleId,y=b===void 0?null:b,w=n.classes,S=w===void 0?[]:w,d=n.attributes,g=d===void 0?{}:d,h=n.styles,C=h===void 0?{}:h;if(!!e){var k=e.prefix,M=e.iconName,F=e.icon;return ct(l({type:"icon"},e),function(){return Y("beforeDOMElementCreation",{iconDefinition:e,params:n}),v.autoA11y&&(p?g["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(y||K()):(g["aria-hidden"]="true",g.focusable="false")),It({icons:{main:Ft(F),mask:f?Ft(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:M,transform:l(l({},z),r),symbol:i,title:p,maskId:u,titleId:y,extra:{attributes:g,styles:C,classes:S}})})}},ba={mixout:function(){return{icon:pa(ga)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Te,n.nodeCallback=va,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?x:a,o=n.callback,i=o===void 0?function(){}:o;return Te(r,i)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,f=a.transform,m=a.symbol,u=a.mask,c=a.maskId,p=a.extra;return new Promise(function(b,y){Promise.all([Rt(r,s),u.iconName?Rt(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var S=pt(w,2),d=S[0],g=S[1];b([n,It({icons:{main:d,mask:g},prefix:s,iconName:r,transform:f,symbol:m,maskId:c,title:o,titleId:i,extra:p,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.transform,s=n.styles,f=ot(s);f.length>0&&(r.style=f);var m;return At(i)&&(m=T("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(m||o.icon),{children:a,attributes:r}}}},ha={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return ct({type:"layer"},function(){Y("beforeDOMElementCreation",{assembler:n,params:a});var i=[];return n(function(s){Array.isArray(s)?s.map(function(f){i=i.concat(f.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.familyPrefix,"-layers")].concat(nt(o)).join(" ")},children:i}]})}}}},ya={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,f=a.attributes,m=f===void 0?{}:f,u=a.styles,c=u===void 0?{}:u;return ct({type:"counter",content:n},function(){return Y("beforeDOMElementCreation",{content:n,params:a}),Qn({content:n.toString(),title:o,extra:{attributes:m,styles:c,classes:["".concat(v.familyPrefix,"-layers-counter")].concat(nt(s))}})})}}}},xa={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?z:r,i=a.title,s=i===void 0?null:i,f=a.classes,m=f===void 0?[]:f,u=a.attributes,c=u===void 0?{}:u,p=a.styles,b=p===void 0?{}:p;return ct({type:"text",content:n},function(){return Y("beforeDOMElementCreation",{content:n,params:a}),Ae({content:n,transform:l(l({},z),o),title:s,extra:{attributes:c,styles:b,classes:["".concat(v.familyPrefix,"-layers-text")].concat(nt(m))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,o=a.transform,i=a.extra,s=null,f=null;if(te){var m=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/m,f=u.height/m}return v.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,Ae({content:n.innerHTML,width:s,height:f,transform:o,title:r,extra:i,watchable:!0})])}}},wa=new RegExp('"',"ug"),Fe=[1105920,1112319];function ka(t){var e=t.replace(wa,""),n=Tn(e,0),a=n>=Fe[0]&&n<=Fe[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ot(r?e[0]:e),isSecondary:a||r}}function Re(t,e){var n="".concat(ln).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var o=B(t.children),i=o.filter(function(M){return M.getAttribute(yt)===e})[0],s=R.getComputedStyle(t,e),f=s.getPropertyValue("font-family").match(vn),m=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(i&&!f)return t.removeChild(i),a();if(f&&u!=="none"&&u!==""){var c=s.getPropertyValue("content"),p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?rt[f[2].toLowerCase()]:pn[m],b=ka(c),y=b.value,w=b.isSecondary,S=f[0].startsWith("FontAwesome"),d=Mt(p,y),g=d;if(S){var h=Yn(y);h.iconName&&h.prefix&&(d=h.iconName,p=h.prefix)}if(d&&!w&&(!i||i.getAttribute(xt)!==p||i.getAttribute(wt)!==g)){t.setAttribute(n,g),i&&t.removeChild(i);var C=ma(),k=C.extra;k.attributes[yt]=e,Rt(d,p).then(function(M){var F=It(l(l({},C),{},{icons:{main:M,mask:zt()},prefix:p,iconName:g,extra:k,watchable:!0})),tt=x.createElement("svg");e==="::before"?t.insertBefore(tt,t.firstChild):t.appendChild(tt),tt.outerHTML=F.map(function(G){return q(G)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ca(t){return Promise.all([Re(t,"::before"),Re(t,"::after")])}function Aa(t){return t.parentNode!==document.head&&!~un.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(yt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function He(t){if(!!N)return new Promise(function(e,n){var a=B(t.querySelectorAll("*")).filter(Aa).map(Ca),r=Dt.begin("searchPseudoElements");ze(),Promise.all(a).then(function(){r(),jt(),e()}).catch(function(){r(),jt(),n()})})}var _a={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=He,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?x:a;v.searchPseudoElements&&He(r)}}},De=!1,Sa={mixout:function(){return{dom:{unwatch:function(){ze(),De=!0}}}},hooks:function(){return{bootstrap:function(){Ne(Nt("mutationObserverCallbacks",{}))},noAuto:function(){fa()},watch:function(n){var a=n.observeMutationsRoot;De?jt():Ne(Nt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Ve=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Oa={mixout:function(){return{parse:{transform:function(n){return Ve(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Ve(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,o=n.containerWidth,i=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),m="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(f," ").concat(m," ").concat(u)},p={transform:"translate(".concat(i/2*-1," -256)")},b={outer:s,inner:c,path:p};return{tag:"g",attributes:l({},b.outer),children:[{tag:"g",attributes:l({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:l(l({},a.icon.attributes),b.path)}]}]}}}},Yt={x:0,y:0,width:"100%",height:"100%"};function je(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ea(t){return t.tag==="g"?t.children:[t]}var Pa={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),o=r?lt(r.split(" ").map(function(i){return i.trim()})):zt();return o.prefix||(o.prefix=D()),n.mask=o,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.mask,s=n.maskId,f=n.transform,m=o.width,u=o.icon,c=i.width,p=i.icon,b=On({transform:f,containerWidth:c,iconWidth:m}),y={tag:"rect",attributes:l(l({},Yt),{},{fill:"white"})},w=u.children?{children:u.children.map(je)}:{},S={tag:"g",attributes:l({},b.inner),children:[je(l({tag:u.tag,attributes:l(l({},u.attributes),b.path)},w))]},d={tag:"g",attributes:l({},b.outer),children:[S]},g="mask-".concat(s||K()),h="clip-".concat(s||K()),C={tag:"mask",attributes:l(l({},Yt),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,d]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:Ea(p)},C]};return a.push(k,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(g,")")},Yt)}),{children:a,attributes:r}}}},Ma={provides:function(e){var n=!1;R.matchMedia&&(n=R.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:l(l({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=l(l({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:l(l({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:l(l({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:l(l({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},za={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return n.symbol=o,n}}}},Na=[Mn,ba,ha,ya,xa,_a,Sa,Oa,Pa,Ma,za];$n(Na,{mixoutsTo:E}),E.noAuto,E.config;var La=E.library;E.dom;var Bt=E.parse;E.findIconDefinition,E.toHtml;var Ia=E.icon;E.layer,E.text,E.counter;var Ta=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Fa(t,e){return e={exports:{}},t(e,e.exports),e.exports}var Ra=Fa(function(t){(function(e){var n=function(d,g,h){if(!m(g)||c(g)||p(g)||b(g)||f(g))return g;var C,k=0,M=0;if(u(g))for(C=[],M=g.length;k<M;k++)C.push(n(d,g[k],h));else{C={};for(var F in g)Object.prototype.hasOwnProperty.call(g,F)&&(C[d(F,h)]=n(d,g[F],h))}return C},a=function(d,g){g=g||{};var h=g.separator||"_",C=g.split||/(?=[A-Z])/;return d.split(C).join(h)},r=function(d){return y(d)?d:(d=d.replace(/[\-_\s]+(.)?/g,function(g,h){return h?h.toUpperCase():""}),d.substr(0,1).toLowerCase()+d.substr(1))},o=function(d){var g=r(d);return g.substr(0,1).toUpperCase()+g.substr(1)},i=function(d,g){return a(d,g).toLowerCase()},s=Object.prototype.toString,f=function(d){return typeof d=="function"},m=function(d){return d===Object(d)},u=function(d){return s.call(d)=="[object Array]"},c=function(d){return s.call(d)=="[object Date]"},p=function(d){return s.call(d)=="[object RegExp]"},b=function(d){return s.call(d)=="[object Boolean]"},y=function(d){return d=d-0,d===d},w=function(d,g){var h=g&&"process"in g?g.process:g;return typeof h!="function"?d:function(C,k){return h(C,d,k)}},S={camelize:r,decamelize:i,pascalize:o,depascalize:i,camelizeKeys:function(d,g){return n(w(r,g),d)},decamelizeKeys:function(d,g){return n(w(i,g),d,g)},pascalizeKeys:function(d,g){return n(w(o,g),d)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=S:e.humps=S})(Ta)}),Ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},vt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Ha=function(t,e){var n={};for(var a in t)e.indexOf(a)>=0||!Object.prototype.hasOwnProperty.call(t,a)||(n[a]=t[a]);return n};function Da(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Ra.camelize(n.slice(0,a)),o=n.slice(a+1).trim();return e[r]=o,e},{})}function Va(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ja(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce(function(a,r){return Array.isArray(r)?a=a.concat(r):a.push(r),a},[])}function Be(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},r=(e.children||[]).map(Be.bind(null,t)),o=Object.keys(e.attributes||{}).reduce(function(b,y){var w=e.attributes[y];switch(y){case"class":b.class=Va(w);break;case"style":b.style=Da(w);break;default:b.attrs[y]=w}return b},{class:{},style:{},attrs:{}}),i=a.class,s=i===void 0?{}:i,f=a.style,m=f===void 0?{}:f,u=a.attrs,c=u===void 0?{}:u,p=Ha(a,["class","style","attrs"]);return typeof e=="string"?e:t(e.tag,vt({class:ja(o.class,s),style:vt({},o.style,m),attrs:vt({},o.attrs,c)},p,{props:n}),r)}var Ue=!1;try{Ue=!0}catch{}function Ya(){if(!Ue&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ut(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?J({},t,e):{}}function Ba(t){var e,n=(e={"fa-spin":t.spin,"fa-spin-pulse":t.spinPulse,"fa-spin-reverse":t.spinReverse,"fa-pulse":t.pulse,"fa-beat":t.beat,"fa-fade":t.fade,"fa-flash":t.flash,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},J(e,"fa-"+t.size,t.size!==null),J(e,"fa-rotate-"+t.rotation,t.rotation!==null),J(e,"fa-pull-"+t.pull,t.pull!==null),J(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function $e(t){if(t&&(typeof t=="undefined"?"undefined":Ye(t))==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Bt.icon)return Bt.icon(t);if(t===null)return null;if((typeof t=="undefined"?"undefined":Ye(t))==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Ua={name:"FontAwesomeIcon",functional:!0,props:{beat:{type:Boolean,default:!1},border:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(e){return["horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},render:function(e,n){var a=n.props,r=a.icon,o=a.mask,i=a.symbol,s=a.title,f=$e(r),m=Ut("classes",Ba(a)),u=Ut("transform",typeof a.transform=="string"?Bt.transform(a.transform):a.transform),c=Ut("mask",$e(o)),p=Ia(f,vt({},m,u,c,{symbol:i,title:s}));if(!p)return Ya("Could not find one or more icon(s)",f,c);var b=p.abstract,y=Be.bind(null,e);return y(b[0],{},n.data)}},$a={props:{variant:String,variantPrefix:{type:String,default(){return this.$options.name&&this.$options.name.toLowerCase()}}},computed:{variantClassPrefix(){return this.variantPrefix},variantClass(){return!this.variant||!this.variantClassPrefix?"":`${this.variantClassPrefix}-${this.variant}`}}},Wa=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress",style:{height:t.height}},[n("div",{staticClass:"progress-bar",class:t.classes,style:t.styles,attrs:{role:"progressbar","aria-valuenow":t.offsetValue,"aria-valuemin":t.min,"aria-valuemax":t.max}},[t.label?n("span",[t.label!==!0?[t._v(" "+t._s(t.label)+" ")]:t._e(),t._v(" "+t._s(t.offsetValue)+"% ")],2):n("span",[t._t("default")],2)])])},Ga=[],wr="";function We(t,e,n,a,r,o,i,s){var f=typeof t=="function"?t.options:t;e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),a&&(f.functional=!0),o&&(f._scopeId="data-v-"+o);var m;if(i?(m=function(p){p=p||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!p&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(p=__VUE_SSR_CONTEXT__),r&&r.call(this,p),p&&p._registeredComponents&&p._registeredComponents.add(i)},f._ssrRegister=m):r&&(m=s?function(){r.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:r),m)if(f.functional){f._injectStyles=m;var u=f.render;f.render=function(b,y){return m.call(y),u(b,y)}}else{var c=f.beforeCreate;f.beforeCreate=c?[].concat(c,m):[m]}return{exports:t,options:f}}const Xa={name:"ProgressBar",mixins:[$a],props:{color:String,value:{type:Number,required:!0},height:String,label:[String,Boolean],striped:Boolean,animated:Boolean,min:{type:Number,default:0},max:{type:Number,default:100},variant:{type:String,default:"primary"}},computed:{classes(){return Ze({[this.variantClass]:!!this.variant},this.progressClasses)},variantClassPrefix(){return"bg"},offsetValue(){return this.value/this.max*100},progressClasses(){return{"progress-bar-striped":this.striped,"progress-bar-animated":this.animated}},styles(){return{width:`${this.offsetValue}%`,background:`${this.color} !important`}}}},Ge={};var Ka=We(Xa,Wa,Ga,!1,qa,null,null,null);function qa(t){for(let e in Ge)this[e]=Ge[e]}var Za=function(){return Ka.exports}();/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Qa={prefix:"far",iconName:"file-audio",icon:[384,512,[],"f1c7","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0L64-.0001c-35.35 0-64 28.65-64 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM171.5 259.5L136 296H92C85.38 296 80 301.4 80 308v56C80 370.7 85.38 376 92 376H136l35.5 36.5C179.1 420 192 414.8 192 404v-136C192 257.3 179.1 251.9 171.5 259.5zM235.1 260.7c-6.25 6.25-6.25 16.38 0 22.62C235.3 283.5 256 305.1 256 336c0 30.94-20.77 52.53-20.91 52.69c-6.25 6.25-6.25 16.38 0 22.62C238.2 414.4 242.3 416 246.4 416s8.188-1.562 11.31-4.688C258.1 410.1 288 380.5 288 336s-29.05-74.06-30.28-75.31C251.5 254.4 241.3 254.4 235.1 260.7z"]},Ja={prefix:"far",iconName:"file-code",icon:[384,512,[],"f1c9","M162.1 257.8c-7.812-7.812-20.47-7.812-28.28 0l-48 48c-7.812 7.812-7.812 20.5 0 28.31l48 48C137.8 386.1 142.9 388 148 388s10.23-1.938 14.14-5.844c7.812-7.812 7.812-20.5 0-28.31L128.3 320l33.86-33.84C169.1 278.3 169.1 265.7 162.1 257.8zM365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM221.9 257.8c-7.812 7.812-7.812 20.5 0 28.31L255.7 320l-33.86 33.84c-7.812 7.812-7.812 20.5 0 28.31C225.8 386.1 230.9 388 236 388s10.23-1.938 14.14-5.844l48-48c7.812-7.812 7.812-20.5 0-28.31l-48-48C242.3 250 229.7 250 221.9 257.8z"]},tr={prefix:"far",iconName:"file-excel",icon:[384,512,[],"f1c3","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM229.1 233.3L192 280.9L154.9 233.3C146.8 222.8 131.8 220.9 121.3 229.1C110.8 237.2 108.9 252.3 117.1 262.8L161.6 320l-44.53 57.25c-8.156 10.47-6.25 25.56 4.188 33.69C125.7 414.3 130.8 416 135.1 416c7.156 0 14.25-3.188 18.97-9.25L192 359.1l37.06 47.65C233.8 412.8 240.9 416 248 416c5.125 0 10.31-1.656 14.72-5.062c10.44-8.125 12.34-23.22 4.188-33.69L222.4 320l44.53-57.25c8.156-10.47 6.25-25.56-4.188-33.69C252.2 220.9 237.2 222.8 229.1 233.3z"]},er={prefix:"far",iconName:"file-image",icon:[384,512,[128443],"f1c5","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM215.3 292c-4.68 0-9.051 2.34-11.65 6.234L164 357.8l-11.68-17.53C149.7 336.3 145.3 334 140.7 334c-4.682 0-9.053 2.34-11.65 6.234l-46.67 70c-2.865 4.297-3.131 9.82-.6953 14.37C84.09 429.2 88.84 432 93.1 432h196c5.163 0 9.907-2.844 12.34-7.395c2.436-4.551 2.17-10.07-.6953-14.37l-74.67-112C224.4 294.3 220 292 215.3 292zM128 288c17.67 0 32-14.33 32-32S145.7 224 128 224S96 238.3 96 256S110.3 288 128 288z"]},nr={prefix:"far",iconName:"file-lines",icon:[384,512,[128462,61686,128441,"file-alt","file-text"],"f15c","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0L64-.0001c-35.35 0-64 28.65-64 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM96 280C96 293.3 106.8 304 120 304h144C277.3 304 288 293.3 288 280S277.3 256 264 256h-144C106.8 256 96 266.8 96 280zM264 352h-144C106.8 352 96 362.8 96 376s10.75 24 24 24h144c13.25 0 24-10.75 24-24S277.3 352 264 352z"]},ar=nr,rr={prefix:"far",iconName:"file-pdf",icon:[384,512,[],"f1c1","M320 464C328.8 464 336 456.8 336 448V416H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V416H48V448C48 456.8 55.16 464 64 464H320zM256 160C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V192H0V64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V192H336V160H256zM88 224C118.9 224 144 249.1 144 280C144 310.9 118.9 336 88 336H80V368C80 376.8 72.84 384 64 384C55.16 384 48 376.8 48 368V240C48 231.2 55.16 224 64 224H88zM112 280C112 266.7 101.3 256 88 256H80V304H88C101.3 304 112 293.3 112 280zM160 240C160 231.2 167.2 224 176 224H200C226.5 224 248 245.5 248 272V336C248 362.5 226.5 384 200 384H176C167.2 384 160 376.8 160 368V240zM192 352H200C208.8 352 216 344.8 216 336V272C216 263.2 208.8 256 200 256H192V352zM336 224C344.8 224 352 231.2 352 240C352 248.8 344.8 256 336 256H304V288H336C344.8 288 352 295.2 352 304C352 312.8 344.8 320 336 320H304V368C304 376.8 296.8 384 288 384C279.2 384 272 376.8 272 368V240C272 231.2 279.2 224 288 224H336z"]},ir={prefix:"far",iconName:"file-powerpoint",icon:[384,512,[],"f1c4","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM200 224H128C119.2 224 112 231.2 112 240v168c0 13.25 10.75 24 24 24S160 421.3 160 408v-32h44c44.21 0 79.73-37.95 75.69-82.98C276.1 253.2 240 224 200 224zM204 328H160V272h44c15.44 0 28 12.56 28 28S219.4 328 204 328z"]},or={prefix:"far",iconName:"file-video",icon:[384,512,[],"f1c8","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM240 288c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-16.52l43.84 30.2C292.3 403.5 304 397.6 304 387.4V284.6c0-10.16-11.64-16.16-20.16-10.32L240 304.5V288z"]},sr={prefix:"far",iconName:"file-word",icon:[384,512,[],"f1c2","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0H64C28.65 0 0 28.65 0 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM214.6 248C211.3 238.4 202.2 232 192 232s-19.25 6.406-22.62 16L144.7 318.1l-25.89-77.66C114.6 227.8 101 221.2 88.41 225.2C75.83 229.4 69.05 243 73.23 255.6l48 144C124.5 409.3 133.5 415.9 143.8 416c10.17 0 19.45-6.406 22.83-16L192 328.1L217.4 400C220.8 409.6 229.8 416 240 416c10.27-.0938 19.53-6.688 22.77-16.41l48-144c4.188-12.59-2.594-26.16-15.17-30.38c-12.61-4.125-26.2 2.594-30.36 15.19l-25.89 77.66L214.6 248z"]},fr={prefix:"far",iconName:"file-zipper",icon:[384,512,["file-archive"],"f1c6","M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0L64-.0001c-35.35 0-64 28.65-64 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h48V64h64V48.13h48.01L224 128c0 17.67 14.33 32 32 32h79.1V448zM176 96h-64v32h64V96zM176 160h-64v32h64V160zM176 224h-64l-30.56 116.5C73.51 379.5 103.7 416 144.3 416c40.26 0 70.45-36.3 62.68-75.15L176 224zM160 368H128c-8.836 0-16-7.164-16-16s7.164-16 16-16h32c8.836 0 16 7.164 16 16S168.8 368 160 368z"]},lr=fr,cr={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"]},ur=cr,mr=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"file-preview",class:{"has-image":!!t.data}},[n("div",{staticClass:"file-preview-inner"},[t.closeable?n("a",{staticClass:"file-preview-close",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.$emit("close",a,t.file)}}},[n("font-awesome-icon",{attrs:{icon:"times-circle"}})],1):t._e(),t._t("icon",function(){return[t.url||t.data&&t.isImage?n("div",{staticClass:"file-preview-image"},[n("img",{staticClass:"file-preview-thumbnail",attrs:{src:t.url||t.data}})]):n("div",{staticClass:"file-preview-icon"},[n("font-awesome-icon",{attrs:{icon:["far",t.computedIcon]}})],1)]},null,this),t._t("progress",function(){return[typeof t.percentLoaded=="number"?n("div",{staticClass:"file-preview-progress"},[n("progress-bar",{attrs:{variant:"primary",height:"10px",value:t.percentLoaded}})],1):t._e()]},null,this),t._t("default"),n("div",{staticClass:"file-preview-filename",domProps:{innerHTML:t._s(t.computedName)}}),n("div",{staticClass:"file-preview-filesize"},[t._v(" ("+t._s(t.computedSize)+") ")])],2)])},dr=[],kr="";La.add(ar,lr,Qa,Ja,tr,er,rr,ir,or,sr,ur);const vr={name:"FilePreview",components:{ProgressBar:Za,FontAwesomeIcon:Ua},directives:{ready:{inserted(t,e,n){typeof e.value=="function"&&n.context.$nextTick(e.value)}}},props:{closeable:{type:Boolean,default:!0},extension:String,file:Blob,mime:String,filename:String,preview:{type:Boolean,default:!0},size:Number,url:String},data(){return{data:null,loading:!1,percentLoaded:null}},computed:{computedExtension(){return this.file instanceof Blob?this.file.name.split(".").pop().toLowerCase():this.extension},computedIcon(){const t=this.icon();return t||"file-alt"},computedMime(){return this.file instanceof Blob?this.file.type:this.mime},computedName(){return this.file instanceof Blob?this.file.name:this.filename},computedSize(){return this.bytesToSize(this.file?this.file.size:this.size||0)},computedSrc(){if(!(this.file instanceof Blob))return this.url},isImage(){return this.file&&this.file.type.match(/^image/)}},mounted(){this.file&&this.readFile(this.file)},methods:{readFile(t){return new Promise((e,n)=>{this.data=null,this.loading=!0,this.percentLoaded=0;const a=new Date,r=new FileReader;r.onprogress=o=>this.onProgress(o),r.onload=o=>{setTimeout(()=>{e(o.target.result)},666-(new Date().getTime()-a.getTime())/1e3)},r.onerror=o=>n(o),r.readAsDataURL(t)}).then(e=>(this.$emit("read",e),this.percentLoaded=null,this.data=e),e=>{this.$emit("error",e)})},bytesToSize(t){var e=["Bytes","KB","MB","GB","TB"];if(t===0)return"0 Byte";var n=parseInt(Math.floor(Math.log(t)/Math.log(1024)));return Math.round(t/Math.pow(1024,n),2)+" "+e[n]},icon(){for(let[t,{extensions:e,validate:n}]of Object.entries(A))if(n&&n(this.computedMime)||e&&e.indexOf(this.computedExtension)>-1)return t},onProgress(t){const e=parseInt(t.loaded/t.total*100,10);this.$emit("progress",e),this.percentLoaded=e}}},Xe={};var pr=We(vr,mr,dr,!1,gr,null,null,null);function gr(t){for(let e in Xe)this[e]=Xe[e]}var br=function(){return pr.exports}();_.FilePreview=br,_.icons=A,Object.defineProperties(_,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
