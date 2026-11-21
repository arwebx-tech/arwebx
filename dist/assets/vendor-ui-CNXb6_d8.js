import{n as e,t}from"./rolldown-runtime-CbXtAM7H.js";import{r as n}from"./vendor-react-CPYPbbnH.js";var r=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).bootstrap=r()})(e,function(){let e=new Map,t={set(t,n,r){e.has(t)||e.set(t,new Map);let i=e.get(t);i.has(n)||i.size===0?i.set(n,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get:(t,n)=>e.has(t)&&e.get(t).get(n)||null,remove(t,n){if(!e.has(t))return;let r=e.get(t);r.delete(n),r.size===0&&e.delete(t)}},n=`transitionend`,r=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),e),i=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),a=e=>{e.dispatchEvent(new Event(n))},o=e=>!(!e||typeof e!=`object`)&&(e.jquery!==void 0&&(e=e[0]),e.nodeType!==void 0),s=e=>o(e)?e.jquery?e[0]:e:typeof e==`string`&&e.length>0?document.querySelector(r(e)):null,c=e=>{if(!o(e)||e.getClientRects().length===0)return!1;let t=getComputedStyle(e).getPropertyValue(`visibility`)===`visible`,n=e.closest(`details:not([open])`);if(!n)return t;if(n!==e){let t=e.closest(`summary`);if(t&&t.parentNode!==n||t===null)return!1}return t},l=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains(`disabled`)||(e.disabled===void 0?e.hasAttribute(`disabled`)&&e.getAttribute(`disabled`)!==`false`:e.disabled),u=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode==`function`){let t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?u(e.parentNode):null},d=()=>{},f=e=>{e.offsetHeight},p=()=>window.jQuery&&!document.body.hasAttribute(`data-bs-no-jquery`)?window.jQuery:null,m=[],h=()=>document.documentElement.dir===`rtl`,g=e=>{var t=()=>{let t=p();if(t){let n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}};document.readyState===`loading`?(m.length||document.addEventListener(`DOMContentLoaded`,()=>{for(let e of m)e()}),m.push(t)):t()},_=(e,t=[],n=e)=>typeof e==`function`?e.call(...t):n,v=(e,t,r=!0)=>{if(!r)return void _(e);let i=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);return Number.parseFloat(t)||Number.parseFloat(n)?(t=t.split(`,`)[0],n=n.split(`,`)[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0})(t)+5,o=!1,s=({target:r})=>{r===t&&(o=!0,t.removeEventListener(n,s),_(e))};t.addEventListener(n,s),setTimeout(()=>{o||a(t)},i)},y=(e,t,n,r)=>{let i=e.length,a=e.indexOf(t);return a===-1?!n&&r?e[i-1]:e[0]:(a+=n?1:-1,r&&(a=(a+i)%i),e[Math.max(0,Math.min(a,i-1))])},b=/[^.]*(?=\..*)\.|.*/,x=/\..*/,S=/::\d+$/,C={},w=1,T={mouseenter:`mouseover`,mouseleave:`mouseout`},E=new Set(`click.dblclick.mouseup.mousedown.contextmenu.mousewheel.DOMMouseScroll.mouseover.mouseout.mousemove.selectstart.selectend.keydown.keypress.keyup.orientationchange.touchstart.touchmove.touchend.touchcancel.pointerdown.pointermove.pointerup.pointerleave.pointercancel.gesturestart.gesturechange.gestureend.focus.blur.change.reset.select.submit.focusin.focusout.load.unload.beforeunload.resize.move.DOMContentLoaded.readystatechange.error.abort.scroll`.split(`.`));function D(e,t){return t&&`${t}::${w++}`||e.uidEvent||w++}function O(e){let t=D(e);return e.uidEvent=t,C[t]=C[t]||{},C[t]}function ee(e,t,n=null){return Object.values(e).find(e=>e.callable===t&&e.delegationSelector===n)}function k(e,t,n){let r=typeof t==`string`,i=r?n:t||n,a=M(e);return E.has(a)||(a=e),[r,i,a]}function A(e,t,n,r,i){if(typeof t!=`string`||!e)return;let[a,o,s]=k(t,n,r);t in T&&(o=(e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)})(o));let c=O(e),l=c[s]||(c[s]={}),u=ee(l,o,a?n:null);if(u)return void(u.oneOff=u.oneOff&&i);let d=D(o,t.replace(b,``)),f=a?function(e,t,n){return function r(i){let a=e.querySelectorAll(t);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(let s of a)if(s===o)return P(i,{delegateTarget:o}),r.oneOff&&N.off(e,i.type,t,n),n.apply(o,[i])}}(e,n,o):function(e,t){return function n(r){return P(r,{delegateTarget:e}),n.oneOff&&N.off(e,r.type,t),t.apply(e,[r])}}(e,o);f.delegationSelector=a?n:null,f.callable=o,f.oneOff=i,f.uidEvent=d,l[d]=f,e.addEventListener(s,f,a)}function j(e,t,n,r,i){let a=ee(t[n],r,i);a&&(e.removeEventListener(n,a,!!i),delete t[n][a.uidEvent])}function te(e,t,n,r){let i=t[n]||{};for(let[a,o]of Object.entries(i))a.includes(r)&&j(e,t,n,o.callable,o.delegationSelector)}function M(e){return e=e.replace(x,``),T[e]||e}let N={on(e,t,n,r){A(e,t,n,r,!1)},one(e,t,n,r){A(e,t,n,r,!0)},off(e,t,n,r){if(typeof t!=`string`||!e)return;let[i,a,o]=k(t,n,r),s=o!==t,c=O(e),l=c[o]||{},u=t.startsWith(`.`);if(a===void 0){if(u)for(let n of Object.keys(c))te(e,c,n,t.slice(1));for(let[n,r]of Object.entries(l)){let i=n.replace(S,``);s&&!t.includes(i)||j(e,c,o,r.callable,r.delegationSelector)}}else{if(!Object.keys(l).length)return;j(e,c,o,a,i?n:null)}},trigger(e,t,n){if(typeof t!=`string`||!e)return null;let r=p(),i=null,a=!0,o=!0,s=!1;t!==M(t)&&r&&(i=r.Event(t,n),r(e).trigger(i),a=!i.isPropagationStopped(),o=!i.isImmediatePropagationStopped(),s=i.isDefaultPrevented());let c=P(new Event(t,{bubbles:a,cancelable:!0}),n);return s&&c.preventDefault(),o&&e.dispatchEvent(c),c.defaultPrevented&&i&&i.preventDefault(),c}};function P(e,t={}){for(let[n,r]of Object.entries(t))try{e[n]=r}catch{Object.defineProperty(e,n,{configurable:!0,get:()=>r})}return e}function ne(e){if(e===`true`)return!0;if(e===`false`)return!1;if(e===Number(e).toString())return Number(e);if(e===``||e===`null`)return null;if(typeof e!=`string`)return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function re(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}let F={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${re(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${re(t)}`)},getDataAttributes(e){if(!e)return{};let t={},n=Object.keys(e.dataset).filter(e=>e.startsWith(`bs`)&&!e.startsWith(`bsConfig`));for(let r of n){let n=r.replace(/^bs/,``);n=n.charAt(0).toLowerCase()+n.slice(1),t[n]=ne(e.dataset[r])}return t},getDataAttribute:(e,t)=>ne(e.getAttribute(`data-bs-${re(t)}`))};class I{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw Error(`You have to implement the static method "NAME", for each component!`)}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){let n=o(t)?F.getDataAttribute(t,`config`):{};return{...this.constructor.Default,...typeof n==`object`?n:{},...o(t)?F.getDataAttributes(t):{},...typeof e==`object`?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(let[n,r]of Object.entries(t)){let t=e[n],a=o(t)?`element`:i(t);if(!new RegExp(r).test(a))throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${r}".`)}}}class L extends I{constructor(e,n){super(),(e=s(e))&&(this._element=e,this._config=this._getConfig(n),t.set(this._element,this.constructor.DATA_KEY,this))}dispose(){t.remove(this._element,this.constructor.DATA_KEY),N.off(this._element,this.constructor.EVENT_KEY);for(let e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){v(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return t.get(s(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,typeof t==`object`?t:null)}static get VERSION(){return`5.3.8`}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}let R=e=>{let t=e.getAttribute(`data-bs-target`);if(!t||t===`#`){let n=e.getAttribute(`href`);if(!n||!n.includes(`#`)&&!n.startsWith(`.`))return null;n.includes(`#`)&&!n.startsWith(`#`)&&(n=`#${n.split(`#`)[1]}`),t=n&&n!==`#`?n.trim():null}return t?t.split(`,`).map(e=>r(e)).join(`,`):null},z={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter(e=>e.matches(t)),parents(e,t){let n=[],r=e.parentNode.closest(t);for(;r;)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){let t=[`a`,`button`,`input`,`textarea`,`select`,`details`,`[tabindex]`,`[contenteditable="true"]`].map(e=>`${e}:not([tabindex^="-"])`).join(`,`);return this.find(t,e).filter(e=>!l(e)&&c(e))},getSelectorFromElement(e){let t=R(e);return t&&z.findOne(t)?t:null},getElementFromSelector(e){let t=R(e);return t?z.findOne(t):null},getMultipleElementsFromSelector(e){let t=R(e);return t?z.find(t):[]}},ie=(e,t=`hide`)=>{let n=`click.dismiss${e.EVENT_KEY}`,r=e.NAME;N.on(document,n,`[data-bs-dismiss="${r}"]`,function(n){if([`A`,`AREA`].includes(this.tagName)&&n.preventDefault(),l(this))return;let i=z.getElementFromSelector(this)||this.closest(`.${r}`);e.getOrCreateInstance(i)[t]()})},ae=`.bs.alert`,oe=`close${ae}`,se=`closed${ae}`;class B extends L{static get NAME(){return`alert`}close(){if(N.trigger(this._element,oe).defaultPrevented)return;this._element.classList.remove(`show`);let e=this._element.classList.contains(`fade`);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),N.trigger(this._element,se),this.dispose()}static jQueryInterface(e){return this.each(function(){let t=B.getOrCreateInstance(this);if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e](this)}})}}ie(B,`close`),g(B);let ce=`[data-bs-toggle="button"]`;class le extends L{static get NAME(){return`button`}toggle(){this._element.setAttribute(`aria-pressed`,this._element.classList.toggle(`active`))}static jQueryInterface(e){return this.each(function(){let t=le.getOrCreateInstance(this);e===`toggle`&&t[e]()})}}N.on(document,`click.bs.button.data-api`,ce,e=>{e.preventDefault();let t=e.target.closest(ce);le.getOrCreateInstance(t).toggle()}),g(le);let ue=`.bs.swipe`,de=`touchstart${ue}`,V=`touchmove${ue}`,fe=`touchend${ue}`,pe=`pointerdown${ue}`,me=`pointerup${ue}`,he={endCallback:null,leftCallback:null,rightCallback:null},ge={endCallback:`(function|null)`,leftCallback:`(function|null)`,rightCallback:`(function|null)`};class _e extends I{constructor(e,t){super(),this._element=e,e&&_e.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return he}static get DefaultType(){return ge}static get NAME(){return`swipe`}dispose(){N.off(this._element,ue)}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),_(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){let e=Math.abs(this._deltaX);if(e<=40)return;let t=e/this._deltaX;this._deltaX=0,t&&_(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(N.on(this._element,pe,e=>this._start(e)),N.on(this._element,me,e=>this._end(e)),this._element.classList.add(`pointer-event`)):(N.on(this._element,de,e=>this._start(e)),N.on(this._element,V,e=>this._move(e)),N.on(this._element,fe,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===`pen`||e.pointerType===`touch`)}static isSupported(){return`ontouchstart`in document.documentElement||navigator.maxTouchPoints>0}}let H=`.bs.carousel`,ve=`.data-api`,ye=`next`,be=`prev`,xe=`left`,Se=`right`,Ce=`slide${H}`,we=`slid${H}`,Te=`keydown${H}`,Ee=`mouseenter${H}`,De=`mouseleave${H}`,Oe=`dragstart${H}`,ke=`load${H}${ve}`,Ae=`click${H}${ve}`,je=`carousel`,Me=`active`,Ne={ArrowLeft:Se,ArrowRight:xe},Pe={interval:5e3,keyboard:!0,pause:`hover`,ride:!1,touch:!0,wrap:!0},Fe={interval:`(number|boolean)`,keyboard:`boolean`,pause:`(string|boolean)`,ride:`(boolean|string)`,touch:`boolean`,wrap:`boolean`};class Ie extends L{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=z.findOne(`.carousel-indicators`,this._element),this._addEventListeners(),this._config.ride===je&&this.cycle()}static get Default(){return Pe}static get DefaultType(){return Fe}static get NAME(){return`carousel`}next(){this._slide(ye)}nextWhenVisible(){!document.hidden&&c(this._element)&&this.next()}prev(){this._slide(be)}pause(){this._isSliding&&a(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?N.one(this._element,we,()=>this.cycle()):this.cycle())}to(e){let t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void N.one(this._element,we,()=>this.to(e));let n=this._getItemIndex(this._getActive());if(n===e)return;let r=e>n?ye:be;this._slide(r,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&N.on(this._element,Te,e=>this._keydown(e)),this._config.pause===`hover`&&(N.on(this._element,Ee,()=>this.pause()),N.on(this._element,De,()=>this._maybeEnableCycle())),this._config.touch&&_e.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(let e of z.find(`.carousel-item img`,this._element))N.on(e,Oe,e=>e.preventDefault());let e={leftCallback:()=>this._slide(this._directionToOrder(xe)),rightCallback:()=>this._slide(this._directionToOrder(Se)),endCallback:()=>{this._config.pause===`hover`&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new _e(this._element,e)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;let t=Ne[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;let t=z.findOne(`.active`,this._indicatorsElement);t.classList.remove(Me),t.removeAttribute(`aria-current`);let n=z.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(Me),n.setAttribute(`aria-current`,`true`))}_updateInterval(){let e=this._activeElement||this._getActive();if(!e)return;let t=Number.parseInt(e.getAttribute(`data-bs-interval`),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;let n=this._getActive(),r=e===ye,i=t||y(this._getItems(),n,r,this._config.wrap);if(i===n)return;let a=this._getItemIndex(i),o=t=>N.trigger(this._element,t,{relatedTarget:i,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:a});if(o(Ce).defaultPrevented||!n||!i)return;let s=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(a),this._activeElement=i;let c=r?`carousel-item-start`:`carousel-item-end`,l=r?`carousel-item-next`:`carousel-item-prev`;i.classList.add(l),f(i),n.classList.add(c),i.classList.add(c),this._queueCallback(()=>{i.classList.remove(c,l),i.classList.add(Me),n.classList.remove(Me,l,c),this._isSliding=!1,o(we)},n,this._isAnimated()),s&&this.cycle()}_isAnimated(){return this._element.classList.contains(`slide`)}_getActive(){return z.findOne(`.active.carousel-item`,this._element)}_getItems(){return z.find(`.carousel-item`,this._element)}_clearInterval(){this._interval&&=(clearInterval(this._interval),null)}_directionToOrder(e){return h()?e===xe?be:ye:e===xe?ye:be}_orderToDirection(e){return h()?e===be?xe:Se:e===be?Se:xe}static jQueryInterface(e){return this.each(function(){let t=Ie.getOrCreateInstance(this,e);if(typeof e!=`number`){if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)})}}N.on(document,Ae,`[data-bs-slide], [data-bs-slide-to]`,function(e){let t=z.getElementFromSelector(this);if(!t||!t.classList.contains(je))return;e.preventDefault();let n=Ie.getOrCreateInstance(t),r=this.getAttribute(`data-bs-slide-to`);r?(n.to(r),n._maybeEnableCycle()):F.getDataAttribute(this,`slide`)===`next`?(n.next(),n._maybeEnableCycle()):(n.prev(),n._maybeEnableCycle())}),N.on(window,ke,()=>{let e=z.find(`[data-bs-ride="carousel"]`);for(let t of e)Ie.getOrCreateInstance(t)}),g(Ie);let Le=`.bs.collapse`,Re=`show${Le}`,ze=`shown${Le}`,Be=`hide${Le}`,Ve=`hidden${Le}`,He=`click${Le}.data-api`,Ue=`show`,We=`collapse`,Ge=`collapsing`,Ke=`:scope .${We} .${We}`,qe=`[data-bs-toggle="collapse"]`,Je={parent:null,toggle:!0},Ye={parent:`(null|element)`,toggle:`boolean`};class Xe extends L{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];let n=z.find(qe);for(let e of n){let t=z.getSelectorFromElement(e),n=z.find(t).filter(e=>e===this._element);t!==null&&n.length&&this._triggerArray.push(e)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Je}static get DefaultType(){return Ye}static get NAME(){return`collapse`}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(`.collapse.show, .collapse.collapsing`).filter(e=>e!==this._element).map(e=>Xe.getOrCreateInstance(e,{toggle:!1}))),e.length&&e[0]._isTransitioning||N.trigger(this._element,Re).defaultPrevented)return;for(let t of e)t.hide();let t=this._getDimension();this._element.classList.remove(We),this._element.classList.add(Ge),this._element.style[t]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;let n=`scroll${t[0].toUpperCase()+t.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Ge),this._element.classList.add(We,Ue),this._element.style[t]=``,N.trigger(this._element,ze)},this._element,!0),this._element.style[t]=`${this._element[n]}px`}hide(){if(this._isTransitioning||!this._isShown()||N.trigger(this._element,Be).defaultPrevented)return;let e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,f(this._element),this._element.classList.add(Ge),this._element.classList.remove(We,Ue);for(let e of this._triggerArray){let t=z.getElementFromSelector(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0,this._element.style[e]=``,this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Ge),this._element.classList.add(We),N.trigger(this._element,Ve)},this._element,!0)}_isShown(e=this._element){return e.classList.contains(Ue)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=s(e.parent),e}_getDimension(){return this._element.classList.contains(`collapse-horizontal`)?`width`:`height`}_initializeChildren(){if(!this._config.parent)return;let e=this._getFirstLevelChildren(qe);for(let t of e){let e=z.getElementFromSelector(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){let t=z.find(Ke,this._config.parent);return z.find(e,this._config.parent).filter(e=>!t.includes(e))}_addAriaAndCollapsedClass(e,t){if(e.length)for(let n of e)n.classList.toggle(`collapsed`,!t),n.setAttribute(`aria-expanded`,t)}static jQueryInterface(e){let t={};return typeof e==`string`&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){let n=Xe.getOrCreateInstance(this,t);if(typeof e==`string`){if(n[e]===void 0)throw TypeError(`No method named "${e}"`);n[e]()}})}}N.on(document,He,qe,function(e){(e.target.tagName===`A`||e.delegateTarget&&e.delegateTarget.tagName===`A`)&&e.preventDefault();for(let e of z.getMultipleElementsFromSelector(this))Xe.getOrCreateInstance(e,{toggle:!1}).toggle()}),g(Xe);var U=`top`,W=`bottom`,G=`right`,K=`left`,Ze=`auto`,Qe=[U,W,G,K],$e=`start`,et=`end`,tt=`clippingParents`,nt=`viewport`,rt=`popper`,it=`reference`,at=Qe.reduce(function(e,t){return e.concat([t+`-`+$e,t+`-`+et])},[]),ot=[].concat(Qe,[Ze]).reduce(function(e,t){return e.concat([t,t+`-`+$e,t+`-`+et])},[]),st=`beforeRead`,ct=`read`,lt=`afterRead`,ut=`beforeMain`,dt=`main`,ft=`afterMain`,pt=`beforeWrite`,mt=`write`,ht=`afterWrite`,gt=[st,ct,lt,ut,dt,ft,pt,mt,ht];function q(e){return e?(e.nodeName||``).toLowerCase():null}function J(e){if(e==null)return window;if(e.toString()!==`[object Window]`){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function _t(e){return e instanceof J(e).Element||e instanceof Element}function Y(e){return e instanceof J(e).HTMLElement||e instanceof HTMLElement}function vt(e){return typeof ShadowRoot<`u`&&(e instanceof J(e).ShadowRoot||e instanceof ShadowRoot)}let yt={name:`applyStyles`,enabled:!0,phase:`write`,fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];Y(i)&&q(i)&&(Object.assign(i.style,n),Object.keys(r).forEach(function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?``:t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:`0`,top:`0`,margin:`0`},arrow:{position:`absolute`},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]=``,e},{});Y(r)&&q(r)&&(Object.assign(r.style,a),Object.keys(i).forEach(function(e){r.removeAttribute(e)}))})}},requires:[`computeStyles`]};function X(e){return e.split(`-`)[0]}var bt=Math.max,xt=Math.min,St=Math.round;function Ct(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+`/`+e.version}).join(` `):navigator.userAgent}function wt(){return!/^((?!chrome|android).)*safari/i.test(Ct())}function Tt(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),i=1,a=1;t&&Y(e)&&(i=e.offsetWidth>0&&St(r.width)/e.offsetWidth||1,a=e.offsetHeight>0&&St(r.height)/e.offsetHeight||1);var o=(_t(e)?J(e):window).visualViewport,s=!wt()&&n,c=(r.left+(s&&o?o.offsetLeft:0))/i,l=(r.top+(s&&o?o.offsetTop:0))/a,u=r.width/i,d=r.height/a;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c,x:c,y:l}}function Et(e){var t=Tt(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Dt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&vt(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Z(e){return J(e).getComputedStyle(e)}function Ot(e){return[`table`,`td`,`th`].indexOf(q(e))>=0}function kt(e){return((_t(e)?e.ownerDocument:e.document)||window.document).documentElement}function At(e){return q(e)===`html`?e:e.assignedSlot||e.parentNode||(vt(e)?e.host:null)||kt(e)}function jt(e){return Y(e)&&Z(e).position!==`fixed`?e.offsetParent:null}function Mt(e){for(var t=J(e),n=jt(e);n&&Ot(n)&&Z(n).position===`static`;)n=jt(n);return n&&(q(n)===`html`||q(n)===`body`&&Z(n).position===`static`)?t:n||function(e){var t=/firefox/i.test(Ct());if(/Trident/i.test(Ct())&&Y(e)&&Z(e).position===`fixed`)return null;var n=At(e);for(vt(n)&&(n=n.host);Y(n)&&[`html`,`body`].indexOf(q(n))<0;){var r=Z(n);if(r.transform!==`none`||r.perspective!==`none`||r.contain===`paint`||[`transform`,`perspective`].indexOf(r.willChange)!==-1||t&&r.willChange===`filter`||t&&r.filter&&r.filter!==`none`)return n;n=n.parentNode}return null}(e)||t}function Nt(e){return[`top`,`bottom`].indexOf(e)>=0?`x`:`y`}function Pt(e,t,n){return bt(e,xt(t,n))}function Ft(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function It(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}let Lt={name:`arrow`,enabled:!0,phase:`main`,fn:function(e){var t,n=e.state,r=e.name,i=e.options,a=n.elements.arrow,o=n.modifiersData.popperOffsets,s=X(n.placement),c=Nt(s),l=[K,G].indexOf(s)>=0?`height`:`width`;if(a&&o){var u=function(e,t){return Ft(typeof(e=typeof e==`function`?e(Object.assign({},t.rects,{placement:t.placement})):e)==`number`?It(e,Qe):e)}(i.padding,n),d=Et(a),f=c===`y`?U:K,p=c===`y`?W:G,m=n.rects.reference[l]+n.rects.reference[c]-o[c]-n.rects.popper[l],h=o[c]-n.rects.reference[c],g=Mt(a),_=g?c===`y`?g.clientHeight||0:g.clientWidth||0:0,v=m/2-h/2,y=u[f],b=_-d[l]-u[p],x=_/2-d[l]/2+v,S=Pt(y,x,b),C=c;n.modifiersData[r]=((t={})[C]=S,t.centerOffset=S-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=n===void 0?`[data-popper-arrow]`:n;r!=null&&(typeof r!=`string`||(r=t.elements.popper.querySelector(r)))&&Dt(t.elements.popper,r)&&(t.elements.arrow=r)},requires:[`popperOffsets`],requiresIfExists:[`preventOverflow`]};function Rt(e){return e.split(`-`)[1]}var zt={top:`auto`,right:`auto`,bottom:`auto`,left:`auto`};function Bt(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,o=e.offsets,s=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,d=e.isFixed,f=o.x,p=f===void 0?0:f,m=o.y,h=m===void 0?0:m,g=typeof u==`function`?u({x:p,y:h}):{x:p,y:h};p=g.x,h=g.y;var _=o.hasOwnProperty(`x`),v=o.hasOwnProperty(`y`),y=K,b=U,x=window;if(l){var S=Mt(n),C=`clientHeight`,w=`clientWidth`;S===J(n)&&Z(S=kt(n)).position!==`static`&&s===`absolute`&&(C=`scrollHeight`,w=`scrollWidth`),(i===U||(i===K||i===G)&&a===et)&&(b=W,h-=(d&&S===x&&x.visualViewport?x.visualViewport.height:S[C])-r.height,h*=c?1:-1),i!==K&&(i!==U&&i!==W||a!==et)||(y=G,p-=(d&&S===x&&x.visualViewport?x.visualViewport.width:S[w])-r.width,p*=c?1:-1)}var T,E=Object.assign({position:s},l&&zt),D=!0===u?function(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:St(n*i)/i||0,y:St(r*i)/i||0}}({x:p,y:h},J(n)):{x:p,y:h};return p=D.x,h=D.y,c?Object.assign({},E,((T={})[b]=v?`0`:``,T[y]=_?`0`:``,T.transform=(x.devicePixelRatio||1)<=1?`translate(`+p+`px, `+h+`px)`:`translate3d(`+p+`px, `+h+`px, 0)`,T)):Object.assign({},E,((t={})[b]=v?h+`px`:``,t[y]=_?p+`px`:``,t.transform=``,t))}let Vt={name:`computeStyles`,enabled:!0,phase:`beforeWrite`,fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=r===void 0||r,a=n.adaptive,o=a===void 0||a,s=n.roundOffsets,c=s===void 0||s,l={placement:X(t.placement),variation:Rt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy===`fixed`};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Bt(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Bt(Object.assign({},l,{offsets:t.modifiersData.arrow,position:`absolute`,adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var Ht={passive:!0};let Ut={name:`eventListeners`,enabled:!0,phase:`write`,fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=i===void 0||i,o=r.resize,s=o===void 0||o,c=J(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(e){e.addEventListener(`scroll`,n.update,Ht)}),s&&c.addEventListener(`resize`,n.update,Ht),function(){a&&l.forEach(function(e){e.removeEventListener(`scroll`,n.update,Ht)}),s&&c.removeEventListener(`resize`,n.update,Ht)}},data:{}};var Wt={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Gt(e){return e.replace(/left|right|bottom|top/g,function(e){return Wt[e]})}var Kt={start:`end`,end:`start`};function qt(e){return e.replace(/start|end/g,function(e){return Kt[e]})}function Jt(e){var t=J(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Yt(e){return Tt(kt(e)).left+Jt(e).scrollLeft}function Xt(e){var t=Z(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function Zt(e){return[`html`,`body`,`#document`].indexOf(q(e))>=0?e.ownerDocument.body:Y(e)&&Xt(e)?e:Zt(At(e))}function Qt(e,t){t===void 0&&(t=[]);var n=Zt(e),r=n===e.ownerDocument?.body,i=J(n),a=r?[i].concat(i.visualViewport||[],Xt(n)?n:[]):n,o=t.concat(a);return r?o:o.concat(Qt(At(a)))}function $t(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function en(e,t,n){return t===nt?$t(function(e,t){var n=J(e),r=kt(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;var l=wt();(l||!l&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}return{width:a,height:o,x:s+Yt(e),y:c}}(e,n)):_t(t)?function(e,t){var n=Tt(e,!1,t===`fixed`);return n.top+=e.clientTop,n.left+=e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):$t(function(e){var t=kt(e),n=Jt(e),r=e.ownerDocument?.body,i=bt(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=bt(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),o=-n.scrollLeft+Yt(e),s=-n.scrollTop;return Z(r||t).direction===`rtl`&&(o+=bt(t.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:o,y:s}}(kt(e)))}function tn(e){var t,n=e.reference,r=e.element,i=e.placement,a=i?X(i):null,o=i?Rt(i):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(a){case U:t={x:s,y:n.y-r.height};break;case W:t={x:s,y:n.y+n.height};break;case G:t={x:n.x+n.width,y:c};break;case K:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var l=a?Nt(a):null;if(l!=null){var u=l===`y`?`height`:`width`;switch(o){case $e:t[l]=t[l]-(n[u]/2-r[u]/2);break;case et:t[l]=t[l]+(n[u]/2-r[u]/2)}}return t}function nn(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=r===void 0?e.placement:r,a=n.strategy,o=a===void 0?e.strategy:a,s=n.boundary,c=s===void 0?tt:s,l=n.rootBoundary,u=l===void 0?nt:l,d=n.elementContext,f=d===void 0?rt:d,p=n.altBoundary,m=p!==void 0&&p,h=n.padding,g=h===void 0?0:h,_=Ft(typeof g==`number`?It(g,Qe):g),v=f===rt?it:rt,y=e.rects.popper,b=e.elements[m?v:f],x=function(e,t,n,r){var i=t===`clippingParents`?function(e){var t=Qt(At(e)),n=[`absolute`,`fixed`].indexOf(Z(e).position)>=0&&Y(e)?Mt(e):e;return _t(n)?t.filter(function(e){return _t(e)&&Dt(e,n)&&q(e)!==`body`}):[]}(e):[].concat(t),a=[].concat(i,[n]),o=a[0],s=a.reduce(function(t,n){var i=en(e,n,r);return t.top=bt(i.top,t.top),t.right=xt(i.right,t.right),t.bottom=xt(i.bottom,t.bottom),t.left=bt(i.left,t.left),t},en(e,o,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(_t(b)?b:b.contextElement||kt(e.elements.popper),c,u,o),S=Tt(e.elements.reference),C=tn({reference:S,element:y,placement:i}),w=$t(Object.assign({},y,C)),T=f===rt?w:S,E={top:x.top-T.top+_.top,bottom:T.bottom-x.bottom+_.bottom,left:x.left-T.left+_.left,right:T.right-x.right+_.right},D=e.modifiersData.offset;if(f===rt&&D){var O=D[i];Object.keys(E).forEach(function(e){var t=[G,W].indexOf(e)>=0?1:-1,n=[U,W].indexOf(e)>=0?`y`:`x`;E[e]+=O[n]*t})}return E}function rn(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=n.boundary,a=n.rootBoundary,o=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?ot:c,u=Rt(r),d=u?s?at:at.filter(function(e){return Rt(e)===u}):Qe,f=d.filter(function(e){return l.indexOf(e)>=0});f.length===0&&(f=d);var p=f.reduce(function(t,n){return t[n]=nn(e,{placement:n,boundary:i,rootBoundary:a,padding:o})[X(n)],t},{});return Object.keys(p).sort(function(e,t){return p[e]-p[t]})}let an={name:`flip`,enabled:!0,phase:`main`,fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,a=i===void 0||i,o=n.altAxis,s=o===void 0||o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,d=n.rootBoundary,f=n.altBoundary,p=n.flipVariations,m=p===void 0||p,h=n.allowedAutoPlacements,g=t.options.placement,_=X(g),v=c||(_!==g&&m?function(e){if(X(e)===Ze)return[];var t=Gt(e);return[qt(e),t,qt(t)]}(g):[Gt(g)]),y=[g].concat(v).reduce(function(e,n){return e.concat(X(n)===Ze?rn(t,{placement:n,boundary:u,rootBoundary:d,padding:l,flipVariations:m,allowedAutoPlacements:h}):n)},[]),b=t.rects.reference,x=t.rects.popper,S=new Map,C=!0,w=y[0],T=0;T<y.length;T++){var E=y[T],D=X(E),O=Rt(E)===$e,ee=[U,W].indexOf(D)>=0,k=ee?`width`:`height`,A=nn(t,{placement:E,boundary:u,rootBoundary:d,altBoundary:f,padding:l}),j=ee?O?G:K:O?W:U;b[k]>x[k]&&(j=Gt(j));var te=Gt(j),M=[];if(a&&M.push(A[D]<=0),s&&M.push(A[j]<=0,A[te]<=0),M.every(function(e){return e})){w=E,C=!1;break}S.set(E,M)}if(C)for(var N=function(e){var t=y.find(function(t){var n=S.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return w=t,`break`},P=m?3:1;P>0&&N(P)!==`break`;P--);t.placement!==w&&(t.modifiersData[r]._skip=!0,t.placement=w,t.reset=!0)}},requiresIfExists:[`offset`],data:{_skip:!1}};function on(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function sn(e){return[U,G,W,K].some(function(t){return e[t]>=0})}let cn={name:`hide`,enabled:!0,phase:`main`,requiresIfExists:[`preventOverflow`],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,a=t.modifiersData.preventOverflow,o=nn(t,{elementContext:`reference`}),s=nn(t,{altBoundary:!0}),c=on(o,r),l=on(s,i,a),u=sn(c),d=sn(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}},ln={name:`offset`,enabled:!0,phase:`main`,requires:[`popperOffsets`],fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.offset,a=i===void 0?[0,0]:i,o=ot.reduce(function(e,n){return e[n]=function(e,t,n){var r=X(e),i=[K,U].indexOf(r)>=0?-1:1,a=typeof n==`function`?n(Object.assign({},t,{placement:e})):n,o=a[0],s=a[1];return o||=0,s=(s||0)*i,[K,G].indexOf(r)>=0?{x:s,y:o}:{x:o,y:s}}(n,t.rects,a),e},{}),s=o[t.placement],c=s.x,l=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=o}},un={name:`popperOffsets`,enabled:!0,phase:`read`,fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=tn({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})},data:{}},dn={name:`preventOverflow`,enabled:!0,phase:`main`,fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,a=i===void 0||i,o=n.altAxis,s=o!==void 0&&o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.padding,f=n.tether,p=f===void 0||f,m=n.tetherOffset,h=m===void 0?0:m,g=nn(t,{boundary:c,rootBoundary:l,padding:d,altBoundary:u}),_=X(t.placement),v=Rt(t.placement),y=!v,b=Nt(_),x=b===`x`?`y`:`x`,S=t.modifiersData.popperOffsets,C=t.rects.reference,w=t.rects.popper,T=typeof h==`function`?h(Object.assign({},t.rects,{placement:t.placement})):h,E=typeof T==`number`?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,O={x:0,y:0};if(S){if(a){var ee=b===`y`?U:K,k=b===`y`?W:G,A=b===`y`?`height`:`width`,j=S[b],te=j+g[ee],M=j-g[k],N=p?-w[A]/2:0,P=v===$e?C[A]:w[A],ne=v===$e?-w[A]:-C[A],re=t.elements.arrow,F=p&&re?Et(re):{width:0,height:0},I=t.modifiersData[`arrow#persistent`]?t.modifiersData[`arrow#persistent`].padding:{top:0,right:0,bottom:0,left:0},L=I[ee],R=I[k],z=Pt(0,C[A],F[A]),ie=y?C[A]/2-N-z-L-E.mainAxis:P-z-L-E.mainAxis,ae=y?-C[A]/2+N+z+R+E.mainAxis:ne+z+R+E.mainAxis,oe=t.elements.arrow&&Mt(t.elements.arrow),se=oe?b===`y`?oe.clientTop||0:oe.clientLeft||0:0,B=D?.[b]??0,ce=j+ae-B,le=Pt(p?xt(te,j+ie-B-se):te,j,p?bt(M,ce):M);S[b]=le,O[b]=le-j}if(s){var ue=b===`x`?U:K,de=b===`x`?W:G,V=S[x],fe=x===`y`?`height`:`width`,pe=V+g[ue],me=V-g[de],he=[U,K].indexOf(_)!==-1,ge=D?.[x]??0,_e=he?pe:V-C[fe]-w[fe]-ge+E.altAxis,H=he?V+C[fe]+w[fe]-ge-E.altAxis:me,ve=p&&he?function(e,t,n){var r=Pt(e,t,n);return r>n?n:r}(_e,V,H):Pt(p?_e:pe,V,p?H:me);S[x]=ve,O[x]=ve-V}t.modifiersData[r]=O}},requiresIfExists:[`offset`]};function fn(e,t,n){n===void 0&&(n=!1);var r,i,a=Y(t),o=Y(t)&&function(e){var t=e.getBoundingClientRect(),n=St(t.width)/e.offsetWidth||1,r=St(t.height)/e.offsetHeight||1;return n!==1||r!==1}(t),s=kt(t),c=Tt(e,o,n),l={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(a||!a&&!n)&&((q(t)!==`body`||Xt(s))&&(l=(r=t)!==J(r)&&Y(r)?{scrollLeft:(i=r).scrollLeft,scrollTop:i.scrollTop}:Jt(r)),Y(t)?((u=Tt(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):s&&(u.x=Yt(s))),{x:c.left+l.scrollLeft-u.x,y:c.top+l.scrollTop-u.y,width:c.width,height:c.height}}function pn(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}}),r.push(e)}return e.forEach(function(e){t.set(e.name,e)}),e.forEach(function(e){n.has(e.name)||i(e)}),r}var mn={placement:`bottom`,modifiers:[],strategy:`absolute`};function hn(){return![...arguments].some(function(e){return!(e&&typeof e.getBoundingClientRect==`function`)})}function gn(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,i=t.defaultOptions,a=i===void 0?mn:i;return function(e,t,n){n===void 0&&(n=a);var i,o,s={placement:`bottom`,orderedModifiers:[],options:Object.assign({},mn,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,u={state:s,setOptions:function(n){var i=typeof n==`function`?n(s.options):n;d(),s.options=Object.assign({},a,s.options,i),s.scrollParents={reference:_t(e)?Qt(e):e.contextElement?Qt(e.contextElement):[],popper:Qt(t)};var o,l,f=function(e){var t=pn(e);return gt.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n}))},[])}((o=[].concat(r,s.options.modifiers),l=o.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{}),Object.keys(l).map(function(e){return l[e]})));return s.orderedModifiers=f.filter(function(e){return e.enabled}),s.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=n===void 0?{}:n,i=e.effect;if(typeof i==`function`){var a=i({state:s,name:t,instance:u,options:r});c.push(a||function(){})}}),u.update()},forceUpdate:function(){if(!l){var e=s.elements,t=e.reference,n=e.popper;if(hn(t,n)){s.rects={reference:fn(t,Mt(n),s.options.strategy===`fixed`),popper:Et(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach(function(e){return s.modifiersData[e.name]=Object.assign({},e.data)});for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var i=s.orderedModifiers[r],a=i.fn,o=i.options,c=o===void 0?{}:o,d=i.name;typeof a==`function`&&(s=a({state:s,options:c,name:d,instance:u})||s)}else s.reset=!1,r=-1}}},update:(i=function(){return new Promise(function(e){u.forceUpdate(),e(s)})},function(){return o||=new Promise(function(e){Promise.resolve().then(function(){o=void 0,e(i())})}),o}),destroy:function(){d(),l=!0}};if(!hn(e,t))return u;function d(){c.forEach(function(e){return e()}),c=[]}return u.setOptions(n).then(function(e){!l&&n.onFirstUpdate&&n.onFirstUpdate(e)}),u}}var _n=gn(),vn=gn({defaultModifiers:[Ut,un,Vt,yt]}),yn=gn({defaultModifiers:[Ut,un,Vt,yt,ln,an,dn,Lt,cn]});let bn=Object.freeze(Object.defineProperty({__proto__:null,afterMain:ft,afterRead:lt,afterWrite:ht,applyStyles:yt,arrow:Lt,auto:Ze,basePlacements:Qe,beforeMain:ut,beforeRead:st,beforeWrite:pt,bottom:W,clippingParents:tt,computeStyles:Vt,createPopper:yn,createPopperBase:_n,createPopperLite:vn,detectOverflow:nn,end:et,eventListeners:Ut,flip:an,hide:cn,left:K,main:dt,modifierPhases:gt,offset:ln,placements:ot,popper:rt,popperGenerator:gn,popperOffsets:un,preventOverflow:dn,read:ct,reference:it,right:G,start:$e,top:U,variationPlacements:at,viewport:nt,write:mt},Symbol.toStringTag,{value:`Module`})),xn=`.bs.dropdown`,Sn=`.data-api`,Cn=`ArrowDown`,wn=`hide${xn}`,Tn=`hidden${xn}`,En=`show${xn}`,Dn=`shown${xn}`,On=`click${xn}${Sn}`,kn=`keydown${xn}${Sn}`,An=`keyup${xn}${Sn}`,jn=`show`,Mn=`[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)`,Nn=`${Mn}.${jn}`,Pn=`.dropdown-menu`,Fn=h()?`top-end`:`top-start`,In=h()?`top-start`:`top-end`,Ln=h()?`bottom-end`:`bottom-start`,Rn=h()?`bottom-start`:`bottom-end`,zn=h()?`left-start`:`right-start`,Bn=h()?`right-start`:`left-start`,Vn={autoClose:!0,boundary:`clippingParents`,display:`dynamic`,offset:[0,2],popperConfig:null,reference:`toggle`},Hn={autoClose:`(boolean|string)`,boundary:`(string|element)`,display:`string`,offset:`(array|string|function)`,popperConfig:`(null|object|function)`,reference:`(string|element|object)`};class Q extends L{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=z.next(this._element,Pn)[0]||z.prev(this._element,Pn)[0]||z.findOne(Pn,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Vn}static get DefaultType(){return Hn}static get NAME(){return`dropdown`}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;let e={relatedTarget:this._element};if(!N.trigger(this._element,En,e).defaultPrevented){if(this._createPopper(),`ontouchstart`in document.documentElement&&!this._parent.closest(`.navbar-nav`))for(let e of[].concat(...document.body.children))N.on(e,`mouseover`,d);this._element.focus(),this._element.setAttribute(`aria-expanded`,!0),this._menu.classList.add(jn),this._element.classList.add(jn),N.trigger(this._element,Dn,e)}}hide(){if(l(this._element)||!this._isShown())return;let e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!N.trigger(this._element,wn,e).defaultPrevented){if(`ontouchstart`in document.documentElement)for(let e of[].concat(...document.body.children))N.off(e,`mouseover`,d);this._popper&&this._popper.destroy(),this._menu.classList.remove(jn),this._element.classList.remove(jn),this._element.setAttribute(`aria-expanded`,`false`),F.removeDataAttribute(this._menu,`popper`),N.trigger(this._element,Tn,e)}}_getConfig(e){if(typeof(e=super._getConfig(e)).reference==`object`&&!o(e.reference)&&typeof e.reference.getBoundingClientRect!=`function`)throw TypeError(`DROPDOWN: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(bn===void 0)throw TypeError(`Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)`);let e=this._element;this._config.reference===`parent`?e=this._parent:o(this._config.reference)?e=s(this._config.reference):typeof this._config.reference==`object`&&(e=this._config.reference);let t=this._getPopperConfig();this._popper=yn(e,this._menu,t)}_isShown(){return this._menu.classList.contains(jn)}_getPlacement(){let e=this._parent;if(e.classList.contains(`dropend`))return zn;if(e.classList.contains(`dropstart`))return Bn;if(e.classList.contains(`dropup-center`))return`top`;if(e.classList.contains(`dropdown-center`))return`bottom`;let t=getComputedStyle(this._menu).getPropertyValue(`--bs-position`).trim()===`end`;return e.classList.contains(`dropup`)?t?In:Fn:t?Rn:Ln}_detectNavbar(){return this._element.closest(`.navbar`)!==null}_getOffset(){let{offset:e}=this._config;return typeof e==`string`?e.split(`,`).map(e=>Number.parseInt(e,10)):typeof e==`function`?t=>e(t,this._element):e}_getPopperConfig(){let e={placement:this._getPlacement(),modifiers:[{name:`preventOverflow`,options:{boundary:this._config.boundary}},{name:`offset`,options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display===`static`)&&(F.setDataAttribute(this._menu,`popper`,`static`),e.modifiers=[{name:`applyStyles`,enabled:!1}]),{...e,..._(this._config.popperConfig,[void 0,e])}}_selectMenuItem({key:e,target:t}){let n=z.find(`.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)`,this._menu).filter(e=>c(e));n.length&&y(n,t,e===Cn,!n.includes(t)).focus()}static jQueryInterface(e){return this.each(function(){let t=Q.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0)throw TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(e.button===2||e.type===`keyup`&&e.key!==`Tab`)return;let t=z.find(Nn);for(let n of t){let t=Q.getInstance(n);if(!t||!1===t._config.autoClose)continue;let r=e.composedPath(),i=r.includes(t._menu);if(r.includes(t._element)||t._config.autoClose===`inside`&&!i||t._config.autoClose===`outside`&&i||t._menu.contains(e.target)&&(e.type===`keyup`&&e.key===`Tab`||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;let a={relatedTarget:t._element};e.type===`click`&&(a.clickEvent=e),t._completeHide(a)}}static dataApiKeydownHandler(e){let t=/input|textarea/i.test(e.target.tagName),n=e.key===`Escape`,r=[`ArrowUp`,Cn].includes(e.key);if(!r&&!n||t&&!n)return;e.preventDefault();let i=this.matches(Mn)?this:z.prev(this,Mn)[0]||z.next(this,Mn)[0]||z.findOne(Mn,e.delegateTarget.parentNode),a=Q.getOrCreateInstance(i);if(r)return e.stopPropagation(),a.show(),void a._selectMenuItem(e);a._isShown()&&(e.stopPropagation(),a.hide(),i.focus())}}N.on(document,kn,Mn,Q.dataApiKeydownHandler),N.on(document,kn,Pn,Q.dataApiKeydownHandler),N.on(document,On,Q.clearMenus),N.on(document,An,Q.clearMenus),N.on(document,On,Mn,function(e){e.preventDefault(),Q.getOrCreateInstance(this).toggle()}),g(Q);let Un=`backdrop`,Wn=`show`,Gn=`mousedown.bs.${Un}`,Kn={className:`modal-backdrop`,clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:`body`},qn={className:`string`,clickCallback:`(function|null)`,isAnimated:`boolean`,isVisible:`boolean`,rootElement:`(element|string)`};class Jn extends I{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return Kn}static get DefaultType(){return qn}static get NAME(){return Un}show(e){if(!this._config.isVisible)return void _(e);this._append();let t=this._getElement();this._config.isAnimated&&f(t),t.classList.add(Wn),this._emulateAnimation(()=>{_(e)})}hide(e){this._config.isVisible?(this._getElement().classList.remove(Wn),this._emulateAnimation(()=>{this.dispose(),_(e)})):_(e)}dispose(){this._isAppended&&=(N.off(this._element,Gn),this._element.remove(),!1)}_getElement(){if(!this._element){let e=document.createElement(`div`);e.className=this._config.className,this._config.isAnimated&&e.classList.add(`fade`),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=s(e.rootElement),e}_append(){if(this._isAppended)return;let e=this._getElement();this._config.rootElement.append(e),N.on(e,Gn,()=>{_(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){v(e,this._getElement(),this._config.isAnimated)}}let Yn=`.bs.focustrap`,Xn=`focusin${Yn}`,Zn=`keydown.tab${Yn}`,Qn=`backward`,$n={autofocus:!0,trapElement:null},er={autofocus:`boolean`,trapElement:`element`};class tr extends I{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return $n}static get DefaultType(){return er}static get NAME(){return`focustrap`}activate(){this._isActive||=(this._config.autofocus&&this._config.trapElement.focus(),N.off(document,Yn),N.on(document,Xn,e=>this._handleFocusin(e)),N.on(document,Zn,e=>this._handleKeydown(e)),!0)}deactivate(){this._isActive&&(this._isActive=!1,N.off(document,Yn))}_handleFocusin(e){let{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;let n=z.focusableChildren(t);n.length===0?t.focus():this._lastTabNavDirection===Qn?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){e.key===`Tab`&&(this._lastTabNavDirection=e.shiftKey?Qn:`forward`)}}let nr=`.fixed-top, .fixed-bottom, .is-fixed, .sticky-top`,rr=`.sticky-top`,ir=`padding-right`,ar=`margin-right`;class or{constructor(){this._element=document.body}getWidth(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){let e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,ir,t=>t+e),this._setElementAttributes(nr,ir,t=>t+e),this._setElementAttributes(rr,ar,t=>t-e)}reset(){this._resetElementAttributes(this._element,`overflow`),this._resetElementAttributes(this._element,ir),this._resetElementAttributes(nr,ir),this._resetElementAttributes(rr,ar)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,`overflow`),this._element.style.overflow=`hidden`}_setElementAttributes(e,t,n){let r=this.getWidth();this._applyManipulationCallback(e,e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+r)return;this._saveInitialAttribute(e,t);let i=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${n(Number.parseFloat(i))}px`)})}_saveInitialAttribute(e,t){let n=e.style.getPropertyValue(t);n&&F.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){this._applyManipulationCallback(e,e=>{let n=F.getDataAttribute(e,t);n===null?e.style.removeProperty(t):(F.removeDataAttribute(e,t),e.style.setProperty(t,n))})}_applyManipulationCallback(e,t){if(o(e))t(e);else for(let n of z.find(e,this._element))t(n)}}let $=`.bs.modal`,sr=`hide${$}`,cr=`hidePrevented${$}`,lr=`hidden${$}`,ur=`show${$}`,dr=`shown${$}`,fr=`resize${$}`,pr=`click.dismiss${$}`,mr=`mousedown.dismiss${$}`,hr=`keydown.dismiss${$}`,gr=`click${$}.data-api`,_r=`modal-open`,vr=`show`,yr=`modal-static`,br={backdrop:!0,focus:!0,keyboard:!0},xr={backdrop:`(boolean|string)`,focus:`boolean`,keyboard:`boolean`};class Sr extends L{constructor(e,t){super(e,t),this._dialog=z.findOne(`.modal-dialog`,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new or,this._addEventListeners()}static get Default(){return br}static get DefaultType(){return xr}static get NAME(){return`modal`}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||N.trigger(this._element,ur,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(_r),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){this._isShown&&!this._isTransitioning&&(N.trigger(this._element,sr).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(vr),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){N.off(window,$),N.off(this._dialog,$),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Jn({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new tr({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display=`block`,this._element.removeAttribute(`aria-hidden`),this._element.setAttribute(`aria-modal`,!0),this._element.setAttribute(`role`,`dialog`),this._element.scrollTop=0;let t=z.findOne(`.modal-body`,this._dialog);t&&(t.scrollTop=0),f(this._element),this._element.classList.add(vr),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,N.trigger(this._element,dr,{relatedTarget:e})},this._dialog,this._isAnimated())}_addEventListeners(){N.on(this._element,hr,e=>{e.key===`Escape`&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),N.on(window,fr,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),N.on(this._element,mr,e=>{N.one(this._element,pr,t=>{this._element===e.target&&this._element===t.target&&(this._config.backdrop===`static`?this._triggerBackdropTransition():this._config.backdrop&&this.hide())})})}_hideModal(){this._element.style.display=`none`,this._element.setAttribute(`aria-hidden`,!0),this._element.removeAttribute(`aria-modal`),this._element.removeAttribute(`role`),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(_r),this._resetAdjustments(),this._scrollBar.reset(),N.trigger(this._element,lr)})}_isAnimated(){return this._element.classList.contains(`fade`)}_triggerBackdropTransition(){if(N.trigger(this._element,cr).defaultPrevented)return;let e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._element.style.overflowY;t===`hidden`||this._element.classList.contains(yr)||(e||(this._element.style.overflowY=`hidden`),this._element.classList.add(yr),this._queueCallback(()=>{this._element.classList.remove(yr),this._queueCallback(()=>{this._element.style.overflowY=t},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){let e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){let e=h()?`paddingLeft`:`paddingRight`;this._element.style[e]=`${t}px`}if(!n&&e){let e=h()?`paddingRight`:`paddingLeft`;this._element.style[e]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft=``,this._element.style.paddingRight=``}static jQueryInterface(e,t){return this.each(function(){let n=Sr.getOrCreateInstance(this,e);if(typeof e==`string`){if(n[e]===void 0)throw TypeError(`No method named "${e}"`);n[e](t)}})}}N.on(document,gr,`[data-bs-toggle="modal"]`,function(e){let t=z.getElementFromSelector(this);[`A`,`AREA`].includes(this.tagName)&&e.preventDefault(),N.one(t,ur,e=>{e.defaultPrevented||N.one(t,lr,()=>{c(this)&&this.focus()})});let n=z.findOne(`.modal.show`);n&&Sr.getInstance(n).hide(),Sr.getOrCreateInstance(t).toggle(this)}),ie(Sr),g(Sr);let Cr=`.bs.offcanvas`,wr=`.data-api`,Tr=`load${Cr}${wr}`,Er=`show`,Dr=`showing`,Or=`hiding`,kr=`.offcanvas.show`,Ar=`show${Cr}`,jr=`shown${Cr}`,Mr=`hide${Cr}`,Nr=`hidePrevented${Cr}`,Pr=`hidden${Cr}`,Fr=`resize${Cr}`,Ir=`click${Cr}${wr}`,Lr=`keydown.dismiss${Cr}`,Rr={backdrop:!0,keyboard:!0,scroll:!1},zr={backdrop:`(boolean|string)`,keyboard:`boolean`,scroll:`boolean`};class Br extends L{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Rr}static get DefaultType(){return zr}static get NAME(){return`offcanvas`}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||N.trigger(this._element,Ar,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new or().hide(),this._element.setAttribute(`aria-modal`,!0),this._element.setAttribute(`role`,`dialog`),this._element.classList.add(Dr),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Er),this._element.classList.remove(Dr),N.trigger(this._element,jr,{relatedTarget:e})},this._element,!0))}hide(){this._isShown&&(N.trigger(this._element,Mr).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Or),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Er,Or),this._element.removeAttribute(`aria-modal`),this._element.removeAttribute(`role`),this._config.scroll||new or().reset(),N.trigger(this._element,Pr)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){let e=!!this._config.backdrop;return new Jn({className:`offcanvas-backdrop`,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?()=>{this._config.backdrop===`static`?N.trigger(this._element,Nr):this.hide()}:null})}_initializeFocusTrap(){return new tr({trapElement:this._element})}_addEventListeners(){N.on(this._element,Lr,e=>{e.key===`Escape`&&(this._config.keyboard?this.hide():N.trigger(this._element,Nr))})}static jQueryInterface(e){return this.each(function(){let t=Br.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e](this)}})}}N.on(document,Ir,`[data-bs-toggle="offcanvas"]`,function(e){let t=z.getElementFromSelector(this);if([`A`,`AREA`].includes(this.tagName)&&e.preventDefault(),l(this))return;N.one(t,Pr,()=>{c(this)&&this.focus()});let n=z.findOne(kr);n&&n!==t&&Br.getInstance(n).hide(),Br.getOrCreateInstance(t).toggle(this)}),N.on(window,Tr,()=>{for(let e of z.find(kr))Br.getOrCreateInstance(e).show()}),N.on(window,Fr,()=>{for(let e of z.find(`[aria-modal][class*=show][class*=offcanvas-]`))getComputedStyle(e).position!==`fixed`&&Br.getOrCreateInstance(e).hide()}),ie(Br),g(Br);let Vr={"*":[`class`,`dir`,`id`,`lang`,`role`,/^aria-[\w-]*$/i],a:[`target`,`href`,`title`,`rel`],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:[`src`,`srcset`,`alt`,`title`,`width`,`height`],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Hr=new Set([`background`,`cite`,`href`,`itemtype`,`longdesc`,`poster`,`src`,`xlink:href`]),Ur=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Wr=(e,t)=>{let n=e.nodeName.toLowerCase();return t.includes(n)?!Hr.has(n)||!!Ur.test(e.nodeValue):t.filter(e=>e instanceof RegExp).some(e=>e.test(n))},Gr={allowList:Vr,content:{},extraClass:``,html:!1,sanitize:!0,sanitizeFn:null,template:`<div></div>`},Kr={allowList:`object`,content:`object`,extraClass:`(string|function)`,html:`boolean`,sanitize:`boolean`,sanitizeFn:`(null|function)`,template:`string`},qr={entry:`(string|element|function|null)`,selector:`(string|element)`};class Jr extends I{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return Gr}static get DefaultType(){return Kr}static get NAME(){return`TemplateFactory`}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){let e=document.createElement(`div`);e.innerHTML=this._maybeSanitize(this._config.template);for(let[t,n]of Object.entries(this._config.content))this._setContent(e,n,t);let t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(` `)),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(let[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},qr)}_setContent(e,t,n){let r=z.findOne(n,e);r&&((t=this._resolvePossibleFunction(t))?o(t)?this._putElementInTemplate(s(t),r):this._config.html?r.innerHTML=this._maybeSanitize(t):r.textContent=t:r.remove())}_maybeSanitize(e){return this._config.sanitize?function(e,t,n){if(!e.length)return e;if(n&&typeof n==`function`)return n(e);let r=new window.DOMParser().parseFromString(e,`text/html`),i=[].concat(...r.body.querySelectorAll(`*`));for(let e of i){let n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}let r=[].concat(...e.attributes),i=[].concat(t[`*`]||[],t[n]||[]);for(let t of r)Wr(t,i)||e.removeAttribute(t.nodeName)}return r.body.innerHTML}(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return _(e,[void 0,this])}_putElementInTemplate(e,t){if(this._config.html)return t.innerHTML=``,void t.append(e);t.textContent=e.textContent}}let Yr=new Set([`sanitize`,`allowList`,`sanitizeFn`]),Xr=`fade`,Zr=`show`,Qr=`.modal`,$r=`hide.bs.modal`,ei=`hover`,ti=`focus`,ni=`click`,ri={AUTO:`auto`,TOP:`top`,RIGHT:h()?`left`:`right`,BOTTOM:`bottom`,LEFT:h()?`right`:`left`},ii={allowList:Vr,animation:!0,boundary:`clippingParents`,container:!1,customClass:``,delay:0,fallbackPlacements:[`top`,`right`,`bottom`,`left`],html:!1,offset:[0,6],placement:`top`,popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:`<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>`,title:``,trigger:`hover focus`},ai={allowList:`object`,animation:`boolean`,boundary:`(string|element)`,container:`(string|element|boolean)`,customClass:`(string|function)`,delay:`(number|object)`,fallbackPlacements:`array`,html:`boolean`,offset:`(array|string|function)`,placement:`(string|function)`,popperConfig:`(null|object|function)`,sanitize:`boolean`,sanitizeFn:`(null|function)`,selector:`(string|boolean)`,template:`string`,title:`(string|element|function)`,trigger:`string`};class oi extends L{constructor(e,t){if(bn===void 0)throw TypeError(`Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)`);super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return ii}static get DefaultType(){return ai}static get NAME(){return`tooltip`}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),N.off(this._element.closest(Qr),$r,this._hideModalHandler),this._element.getAttribute(`data-bs-original-title`)&&this._element.setAttribute(`title`,this._element.getAttribute(`data-bs-original-title`)),this._disposePopper(),super.dispose()}show(){if(this._element.style.display===`none`)throw Error(`Please use show on visible elements`);if(!this._isWithContent()||!this._isEnabled)return;let e=N.trigger(this._element,this.constructor.eventName(`show`)),t=(u(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!t)return;this._disposePopper();let n=this._getTipElement();this._element.setAttribute(`aria-describedby`,n.getAttribute(`id`));let{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(n),N.trigger(this._element,this.constructor.eventName(`inserted`))),this._popper=this._createPopper(n),n.classList.add(Zr),`ontouchstart`in document.documentElement)for(let e of[].concat(...document.body.children))N.on(e,`mouseover`,d);this._queueCallback(()=>{N.trigger(this._element,this.constructor.eventName(`shown`)),!1===this._isHovered&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!N.trigger(this._element,this.constructor.eventName(`hide`)).defaultPrevented){if(this._getTipElement().classList.remove(Zr),`ontouchstart`in document.documentElement)for(let e of[].concat(...document.body.children))N.off(e,`mouseover`,d);this._activeTrigger[ni]=!1,this._activeTrigger[ti]=!1,this._activeTrigger[ei]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute(`aria-describedby`),N.trigger(this._element,this.constructor.eventName(`hidden`)))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||=this._createTipElement(this._newContent||this._getContentForTemplate()),this.tip}_createTipElement(e){let t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(Xr,Zr),t.classList.add(`bs-${this.constructor.NAME}-auto`);let n=(e=>{do e+=Math.floor(1e6*Math.random());while(document.getElementById(e));return e})(this.constructor.NAME).toString();return t.setAttribute(`id`,n),this._isAnimated()&&t.classList.add(Xr),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new Jr({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute(`data-bs-original-title`)}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Xr)}_isShown(){return this.tip&&this.tip.classList.contains(Zr)}_createPopper(e){let t=_(this._config.placement,[this,e,this._element]),n=ri[t.toUpperCase()];return yn(this._element,e,this._getPopperConfig(n))}_getOffset(){let{offset:e}=this._config;return typeof e==`string`?e.split(`,`).map(e=>Number.parseInt(e,10)):typeof e==`function`?t=>e(t,this._element):e}_resolvePossibleFunction(e){return _(e,[this._element,this._element])}_getPopperConfig(e){let t={placement:e,modifiers:[{name:`flip`,options:{fallbackPlacements:this._config.fallbackPlacements}},{name:`offset`,options:{offset:this._getOffset()}},{name:`preventOverflow`,options:{boundary:this._config.boundary}},{name:`arrow`,options:{element:`.${this.constructor.NAME}-arrow`}},{name:`preSetPlacement`,enabled:!0,phase:`beforeMain`,fn:e=>{this._getTipElement().setAttribute(`data-popper-placement`,e.state.placement)}}]};return{...t,..._(this._config.popperConfig,[void 0,t])}}_setListeners(){let e=this._config.trigger.split(` `);for(let t of e)if(t===`click`)N.on(this._element,this.constructor.eventName(`click`),this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger[ni]=!(t._isShown()&&t._activeTrigger[ni]),t.toggle()});else if(t!==`manual`){let e=t===ei?this.constructor.eventName(`mouseenter`):this.constructor.eventName(`focusin`),n=t===ei?this.constructor.eventName(`mouseleave`):this.constructor.eventName(`focusout`);N.on(this._element,e,this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger[e.type===`focusin`?ti:ei]=!0,t._enter()}),N.on(this._element,n,this._config.selector,e=>{let t=this._initializeOnDelegatedTarget(e);t._activeTrigger[e.type===`focusout`?ti:ei]=t._element.contains(e.relatedTarget),t._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},N.on(this._element.closest(Qr),$r,this._hideModalHandler)}_fixTitle(){let e=this._element.getAttribute(`title`);e&&(this._element.getAttribute(`aria-label`)||this._element.textContent.trim()||this._element.setAttribute(`aria-label`,e),this._element.setAttribute(`data-bs-original-title`,e),this._element.removeAttribute(`title`))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){let t=F.getDataAttributes(this._element);for(let e of Object.keys(t))Yr.has(e)&&delete t[e];return e={...t,...typeof e==`object`&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=!1===e.container?document.body:s(e.container),typeof e.delay==`number`&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title==`number`&&(e.title=e.title.toString()),typeof e.content==`number`&&(e.content=e.content.toString()),e}_getDelegateConfig(){let e={};for(let[t,n]of Object.entries(this._config))this.constructor.Default[t]!==n&&(e[t]=n);return e.selector=!1,e.trigger=`manual`,e}_disposePopper(){this._popper&&=(this._popper.destroy(),null),this.tip&&=(this.tip.remove(),null)}static jQueryInterface(e){return this.each(function(){let t=oi.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0)throw TypeError(`No method named "${e}"`);t[e]()}})}}g(oi);let si={...oi.Default,content:``,offset:[0,8],placement:`right`,template:`<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>`,trigger:`click`},ci={...oi.DefaultType,content:`(null|string|element|function)`};class li extends oi{static get Default(){return si}static get DefaultType(){return ci}static get NAME(){return`popover`}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){let t=li.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0)throw TypeError(`No method named "${e}"`);t[e]()}})}}g(li);let ui=`.bs.scrollspy`,di=`activate${ui}`,fi=`click${ui}`,pi=`load${ui}.data-api`,mi=`active`,hi=`[href]`,gi=`.nav-link`,_i=`${gi}, .nav-item > ${gi}, .list-group-item`,vi={offset:null,rootMargin:`0px 0px -25%`,smoothScroll:!1,target:null,threshold:[.1,.5,1]},yi={offset:`(number|null)`,rootMargin:`string`,smoothScroll:`boolean`,target:`element`,threshold:`array`};class bi extends L{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY===`visible`?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return vi}static get DefaultType(){return yi}static get NAME(){return`scrollspy`}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(let e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=s(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold==`string`&&(e.threshold=e.threshold.split(`,`).map(e=>Number.parseFloat(e))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(N.off(this._config.target,fi),N.on(this._config.target,fi,hi,e=>{let t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();let n=this._rootElement||window,r=t.offsetTop-this._element.offsetTop;if(n.scrollTo)return void n.scrollTo({top:r,behavior:`smooth`});n.scrollTop=r}}))}_getNewObserver(){let e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),e)}_observerCallback(e){let t=e=>this._targetLinks.get(`#${e.target.id}`),n=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},r=(this._rootElement||document.documentElement).scrollTop,i=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(let a of e){if(!a.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(a));continue}let e=a.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&e){if(n(a),!r)return}else i||e||n(a)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;let e=z.find(hi,this._config.target);for(let t of e){if(!t.hash||l(t))continue;let e=z.findOne(decodeURI(t.hash),this._element);c(e)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,e))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(mi),this._activateParents(e),N.trigger(this._element,di,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(`dropdown-item`))z.findOne(`.dropdown-toggle`,e.closest(`.dropdown`)).classList.add(mi);else for(let t of z.parents(e,`.nav, .list-group`))for(let e of z.prev(t,_i))e.classList.add(mi)}_clearActiveClass(e){e.classList.remove(mi);let t=z.find(`${hi}.${mi}`,e);for(let e of t)e.classList.remove(mi)}static jQueryInterface(e){return this.each(function(){let t=bi.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e]()}})}}N.on(window,pi,()=>{for(let e of z.find(`[data-bs-spy="scroll"]`))bi.getOrCreateInstance(e)}),g(bi);let xi=`.bs.tab`,Si=`hide${xi}`,Ci=`hidden${xi}`,wi=`show${xi}`,Ti=`shown${xi}`,Ei=`click${xi}`,Di=`keydown${xi}`,Oi=`load${xi}`,ki=`ArrowRight`,Ai=`ArrowDown`,ji=`Home`,Mi=`active`,Ni=`fade`,Pi=`show`,Fi=`.dropdown-toggle`,Ii=`:not(${Fi})`,Li=`[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]`,Ri=`.nav-link${Ii}, .list-group-item${Ii}, [role="tab"]${Ii}, ${Li}`,zi=`.${Mi}[data-bs-toggle="tab"], .${Mi}[data-bs-toggle="pill"], .${Mi}[data-bs-toggle="list"]`;class Bi extends L{constructor(e){super(e),this._parent=this._element.closest(`.list-group, .nav, [role="tablist"]`),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),N.on(this._element,Di,e=>this._keydown(e)))}static get NAME(){return`tab`}show(){let e=this._element;if(this._elemIsActive(e))return;let t=this._getActiveElem(),n=t?N.trigger(t,Si,{relatedTarget:e}):null;N.trigger(e,wi,{relatedTarget:t}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){e&&(e.classList.add(Mi),this._activate(z.getElementFromSelector(e)),this._queueCallback(()=>{e.getAttribute(`role`)===`tab`?(e.removeAttribute(`tabindex`),e.setAttribute(`aria-selected`,!0),this._toggleDropDown(e,!0),N.trigger(e,Ti,{relatedTarget:t})):e.classList.add(Pi)},e,e.classList.contains(Ni)))}_deactivate(e,t){e&&(e.classList.remove(Mi),e.blur(),this._deactivate(z.getElementFromSelector(e)),this._queueCallback(()=>{e.getAttribute(`role`)===`tab`?(e.setAttribute(`aria-selected`,!1),e.setAttribute(`tabindex`,`-1`),this._toggleDropDown(e,!1),N.trigger(e,Ci,{relatedTarget:t})):e.classList.remove(Pi)},e,e.classList.contains(Ni)))}_keydown(e){if(![`ArrowLeft`,ki,`ArrowUp`,Ai,ji,`End`].includes(e.key))return;e.stopPropagation(),e.preventDefault();let t=this._getChildren().filter(e=>!l(e)),n;if([ji,`End`].includes(e.key))n=t[e.key===ji?0:t.length-1];else{let r=[ki,Ai].includes(e.key);n=y(t,e.target,r,!0)}n&&(n.focus({preventScroll:!0}),Bi.getOrCreateInstance(n).show())}_getChildren(){return z.find(Ri,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,`role`,`tablist`);for(let e of t)this._setInitialAttributesOnChild(e)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);let t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute(`aria-selected`,t),n!==e&&this._setAttributeIfNotExists(n,`role`,`presentation`),t||e.setAttribute(`tabindex`,`-1`),this._setAttributeIfNotExists(e,`role`,`tab`),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){let t=z.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,`role`,`tabpanel`),e.id&&this._setAttributeIfNotExists(t,`aria-labelledby`,`${e.id}`))}_toggleDropDown(e,t){let n=this._getOuterElement(e);if(!n.classList.contains(`dropdown`))return;let r=(e,r)=>{let i=z.findOne(e,n);i&&i.classList.toggle(r,t)};r(Fi,Mi),r(`.dropdown-menu`,Pi),n.setAttribute(`aria-expanded`,t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(Mi)}_getInnerElement(e){return e.matches(Ri)?e:z.findOne(Ri,e)}_getOuterElement(e){return e.closest(`.nav-item, .list-group-item`)||e}static jQueryInterface(e){return this.each(function(){let t=Bi.getOrCreateInstance(this);if(typeof e==`string`){if(t[e]===void 0||e.startsWith(`_`)||e===`constructor`)throw TypeError(`No method named "${e}"`);t[e]()}})}}N.on(document,Ei,Li,function(e){[`A`,`AREA`].includes(this.tagName)&&e.preventDefault(),l(this)||Bi.getOrCreateInstance(this).show()}),N.on(window,Oi,()=>{for(let e of z.find(zi))Bi.getOrCreateInstance(e)}),g(Bi);let Vi=`.bs.toast`,Hi=`mouseover${Vi}`,Ui=`mouseout${Vi}`,Wi=`focusin${Vi}`,Gi=`focusout${Vi}`,Ki=`hide${Vi}`,qi=`hidden${Vi}`,Ji=`show${Vi}`,Yi=`shown${Vi}`,Xi=`hide`,Zi=`show`,Qi=`showing`,$i={animation:`boolean`,autohide:`boolean`,delay:`number`},ea={animation:!0,autohide:!0,delay:5e3};class ta extends L{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ea}static get DefaultType(){return $i}static get NAME(){return`toast`}show(){N.trigger(this._element,Ji).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add(`fade`),this._element.classList.remove(Xi),f(this._element),this._element.classList.add(Zi,Qi),this._queueCallback(()=>{this._element.classList.remove(Qi),N.trigger(this._element,Yi),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(N.trigger(this._element,Ki).defaultPrevented||(this._element.classList.add(Qi),this._queueCallback(()=>{this._element.classList.add(Xi),this._element.classList.remove(Qi,Zi),N.trigger(this._element,qi)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Zi),super.dispose()}isShown(){return this._element.classList.contains(Zi)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case`mouseover`:case`mouseout`:this._hasMouseInteraction=t;break;case`focusin`:case`focusout`:this._hasKeyboardInteraction=t}if(t)return void this._clearTimeout();let n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){N.on(this._element,Hi,e=>this._onInteraction(e,!0)),N.on(this._element,Ui,e=>this._onInteraction(e,!1)),N.on(this._element,Wi,e=>this._onInteraction(e,!0)),N.on(this._element,Gi,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){let t=ta.getOrCreateInstance(this,e);if(typeof e==`string`){if(t[e]===void 0)throw TypeError(`No method named "${e}"`);t[e](this)}})}}return ie(ta),g(ta),{Alert:B,Button:le,Carousel:Ie,Collapse:Xe,Dropdown:Q,Modal:Sr,Offcanvas:Br,Popover:li,ScrollSpy:bi,Tab:Bi,Toast:ta,Tooltip:oi}})})),i=e(n(),1);function a(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function o(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=a(e))&&(r&&(r+=` `),r+=t);return r}var s=e=>typeof e==`number`&&!isNaN(e),c=e=>typeof e==`string`,l=e=>typeof e==`function`,u=e=>c(e)||s(e),d=e=>c(e)||l(e)?e:null,f=(e,t)=>e===!1||s(e)&&e>0?e:t,p=e=>(0,i.isValidElement)(e)||c(e)||l(e)||s(e);function m(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight=`initial`,i.height=r+`px`,i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height=`0`,i.padding=`0`,i.margin=`0`,setTimeout(t,n)})})}function h({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:a=300}){return function({children:o,position:s,preventExitTransition:c,done:l,nodeRef:u,isIn:d,playToast:f}){let p=n?`${e}--${s}`:e,h=n?`${t}--${s}`:t,g=(0,i.useRef)(0);return(0,i.useLayoutEffect)(()=>{let e=u.current,t=p.split(` `),n=r=>{r.target===u.current&&(f(),e.removeEventListener(`animationend`,n),e.removeEventListener(`animationcancel`,n),g.current===0&&r.type!==`animationcancel`&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener(`animationend`,n),e.addEventListener(`animationcancel`,n)},[]),(0,i.useEffect)(()=>{let e=u.current,t=()=>{e.removeEventListener(`animationend`,t),r?m(e,l,a):l()};d||(c?t():(g.current=1,e.className+=` ${h}`,e.addEventListener(`animationend`,t)))},[d]),i.createElement(i.Fragment,null,o)}}function g(e,t){return{content:_(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function _(e,t,n=!1){return(0,i.isValidElement)(e)&&!c(e.type)?(0,i.cloneElement)(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):l(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function v({closeToast:e,theme:t,ariaLabel:n=`close`}){return i.createElement(`button`,{className:`Toastify__close-button Toastify__close-button--${t}`,type:`button`,onClick:t=>{t.stopPropagation(),e(!0)},"aria-label":n},i.createElement(`svg`,{"aria-hidden":`true`,viewBox:`0 0 14 16`},i.createElement(`path`,{fillRule:`evenodd`,d:`M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z`})))}function y({delay:e,isRunning:t,closeToast:n,type:r=`default`,hide:a,className:s,controlledProgress:c,progress:u,rtl:d,isIn:f,theme:p}){let m=a||c&&u===0,h={animationDuration:`${e}ms`,animationPlayState:t?`running`:`paused`};c&&(h.transform=`scaleX(${u})`);let g=o(`Toastify__progress-bar`,c?`Toastify__progress-bar--controlled`:`Toastify__progress-bar--animated`,`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":d}),_=l(s)?s({rtl:d,type:r,defaultClassName:g}):o(g,s),v={[c&&u>=1?`onTransitionEnd`:`onAnimationEnd`]:c&&u<1?null:()=>{f&&n()}};return i.createElement(`div`,{className:`Toastify__progress-bar--wrp`,"data-hidden":m},i.createElement(`div`,{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${p} Toastify__progress-bar--${r}`}),i.createElement(`div`,{role:`progressbar`,"aria-hidden":m?`true`:`false`,"aria-label":`notification timer`,"aria-valuenow":c?Math.round(u*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:_,style:h,...v}))}var b=1,x=()=>`${b++}`;function S(e,t,n){let r=1,i=0,a=[],o=[],c=t,l=new Map,u=new Set,m=e=>(u.add(e),()=>u.delete(e)),h=()=>{o=Array.from(l.values()),u.forEach(e=>e())},_=({containerId:t,toastId:n,updateId:r})=>{let i=t?t!==e:e!==1,a=l.has(n)&&r==null;return i||a},v=(e,t)=>{l.forEach(n=>{var r;(t==null||t===n.props.toastId)&&((r=n.toggle)==null||r.call(n,e))})},y=e=>{var t,r;e.isActive&&((r=(t=e.props)?.onClose)==null||r.call(t,e.removalReason),e.isActive=!1,n(g(e,`removed`)))},b=e=>{if(e==null)l.forEach(y);else{let t=l.get(e);t&&y(t)}h()},x=()=>{i-=a.length,a=[]},S=e=>{var t,r;let{toastId:i,updateId:a}=e.props,o=a==null;e.staleId&&l.delete(e.staleId),e.isActive=!0,l.set(i,e),h(),n(g(e,o?`added`:`updated`)),o&&((r=(t=e.props).onOpen)==null||r.call(t))};return{id:e,props:c,observe:m,toggle:v,removeToast:b,toasts:l,clearQueue:x,buildToast:(e,t)=>{if(_(t))return;let{toastId:n,updateId:o,data:u,staleId:m,delay:g}=t,v=o==null;v&&i++;let y={...c,style:c.toastStyle,key:r++,...Object.fromEntries(Object.entries(t).filter(([e,t])=>t!=null)),toastId:n,updateId:o,data:u,isIn:!1,className:d(t.className||c.toastClassName),progressClassName:d(t.progressClassName||c.progressClassName),autoClose:!t.isLoading&&f(t.autoClose,c.autoClose),closeToast(e){let t=l.get(n);t&&(t.removalReason=e,b(n))},deleteToast(){if(l.get(n)!=null){if(l.delete(n),i--,i<0&&(i=0),a.length>0){S(a.shift());return}h()}}};y.closeButton=c.closeButton,t.closeButton===!1||p(t.closeButton)?y.closeButton=t.closeButton:t.closeButton===!0&&(y.closeButton=!p(c.closeButton)||c.closeButton);let x={content:e,props:y,staleId:m};c.limit&&c.limit>0&&i>c.limit&&v?a.push(x):s(g)?setTimeout(()=>{S(x)},g):S(x)},setProps(e){c=e},setToggle:(e,t)=>{let n=l.get(e);n&&(n.toggle=t)},isToastActive:e=>l.get(e)?.isActive,getSnapshot:()=>o}}var C=new Map,w=[],T=new Set,E=e=>T.forEach(t=>t(e)),D=()=>C.size>0;function O(){w.forEach(e=>te(e.content,e.options)),w=[]}var ee=(e,{containerId:t})=>C.get(t||1)?.toasts.get(e);function k(e,t){var n;if(t)return!!((n=C.get(t))!=null&&n.isToastActive(e));let r=!1;return C.forEach(t=>{t.isToastActive(e)&&(r=!0)}),r}function A(e){if(!D()){w=w.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||u(e))C.forEach(t=>{t.removeToast(e)});else if(e&&(`containerId`in e||`id`in e)){let t=C.get(e.containerId);t?t.removeToast(e.id):C.forEach(t=>{t.removeToast(e.id)})}}var j=(e={})=>{C.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function te(e,t){p(e)&&(D()||w.push({content:e,options:t}),C.forEach(n=>{n.buildToast(e,t)}))}function M(e){var t;(t=C.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function N(e,t){C.forEach(n=>{(t==null||!(t!=null&&t.containerId)||t?.containerId===n.id)&&n.toggle(e,t?.id)})}function P(e){let t=e.containerId||1;return{subscribe(n){let r=S(t,e,E);C.set(t,r);let i=r.observe(n);return O(),()=>{i(),C.delete(t)}},setProps(e){var n;(n=C.get(t))==null||n.setProps(e)},getSnapshot(){return C.get(t)?.getSnapshot()}}}function ne(e){return T.add(e),()=>{T.delete(e)}}function re(e){return e&&(c(e.toastId)||s(e.toastId))?e.toastId:x()}function F(e,t){return te(e,t),t.toastId}function I(e,t){return{...t,type:t&&t.type||e,toastId:re(t)}}function L(e){return(t,n)=>F(t,I(e,n))}function R(e,t){return F(e,I(`default`,t))}R.loading=(e,t)=>F(e,I(`default`,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function z(e,{pending:t,error:n,success:r},i){let a;t&&(a=c(t)?R.loading(t,i):R.loading(t.render,{...i,...t}));let o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(e,t,n)=>{if(t==null){R.dismiss(a);return}let r={type:e,...o,...i,data:n},s=c(t)?{render:t}:t;return a?R.update(a,{...r,...s}):R(s.render,{...r,...s}),n},u=l(e)?e():e;return u.then(e=>s(`success`,r,e)).catch(e=>s(`error`,n,e)),u}R.promise=z,R.success=L(`success`),R.info=L(`info`),R.error=L(`error`),R.warning=L(`warning`),R.warn=R.warning,R.dark=(e,t)=>F(e,I(`default`,{theme:`dark`,...t}));function ie(e){A(e)}R.dismiss=ie,R.clearWaitingQueue=j,R.isActive=k,R.update=(e,t={})=>{let n=ee(e,t);if(n){let{props:r,content:i}=n,a={delay:100,...r,...t,toastId:t.toastId||e,updateId:x()};a.toastId!==e&&(a.staleId=e);let o=a.render||i;delete a.render,F(o,a)}},R.done=e=>{R.update(e,{progress:1})},R.onChange=ne,R.play=e=>N(!0,e),R.pause=e=>N(!1,e);function ae(e){let{subscribe:t,getSnapshot:n,setProps:r}=(0,i.useRef)(P(e)).current;r(e);let a=(0,i.useSyncExternalStore)(t,n,n)?.slice();function o(t){if(!a)return[];let n=new Map;return e.newestOnTop&&a.reverse(),a.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))}return{getToastToRender:o,isToastActive:k,count:a?.length}}function oe(e){let[t,n]=(0,i.useState)(!1),[r,a]=(0,i.useState)(!1),o=(0,i.useRef)(null),s=(0,i.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:c,pauseOnHover:l,closeToast:u,onClick:d,closeOnClick:f}=e;M({id:e.toastId,containerId:e.containerId,fn:n}),(0,i.useEffect)(()=>{if(e.pauseOnFocusLoss)return p(),()=>{m()}},[e.pauseOnFocusLoss]);function p(){document.hasFocus()||v(),window.addEventListener(`focus`,_),window.addEventListener(`blur`,v)}function m(){window.removeEventListener(`focus`,_),window.removeEventListener(`blur`,v)}function h(t){if(e.draggable===!0||e.draggable===t.pointerType){y();let n=o.current;s.canCloseOnClick=!0,s.canDrag=!0,n.style.transition=`none`,e.draggableDirection===`x`?(s.start=t.clientX,s.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(s.start=t.clientY,s.removalDistance=n.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function g(t){let{top:n,bottom:r,left:i,right:a}=o.current.getBoundingClientRect();t.pointerType===`mouse`&&e.pauseOnHover&&t.clientX>=i&&t.clientX<=a&&t.clientY>=n&&t.clientY<=r?v():_()}function _(){n(!0)}function v(){n(!1)}function y(){s.didMove=!1,document.addEventListener(`pointermove`,x),document.addEventListener(`pointerup`,S)}function b(){document.removeEventListener(`pointermove`,x),document.removeEventListener(`pointerup`,S)}function x(n){let r=o.current;if(s.canDrag&&r){s.didMove=!0,t&&v(),e.draggableDirection===`x`?s.delta=n.clientX-s.start:s.delta=n.clientY-s.start,s.start!==n.clientX&&(s.canCloseOnClick=!1);let i=e.draggableDirection===`x`?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`;r.style.transform=`translate3d(${i},0)`,r.style.opacity=`${1-Math.abs(s.delta/s.removalDistance)}`}}function S(){b();let t=o.current;if(s.canDrag&&s.didMove&&t){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance){a(!0),e.closeToast(!0),e.collapseAll();return}t.style.transition=`transform 0.2s, opacity 0.2s`,t.style.removeProperty(`transform`),t.style.removeProperty(`opacity`)}}let C={onPointerDown:h,onPointerUp:g};return c&&l&&(C.onMouseEnter=v,e.stacked||(C.onMouseLeave=_)),f&&(C.onClick=e=>{d&&d(e),s.canCloseOnClick&&u(!0)}),{playToast:_,pauseToast:v,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:C}}var se=typeof window<`u`?i.useLayoutEffect:i.useEffect,B=({theme:e,type:t,isLoading:n,...r})=>i.createElement(`svg`,{viewBox:`0 0 24 24`,width:`100%`,height:`100%`,fill:e===`colored`?`currentColor`:`var(--toastify-icon-color-${t})`,...r});function ce(e){return i.createElement(B,{...e},i.createElement(`path`,{d:`M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z`}))}function le(e){return i.createElement(B,{...e},i.createElement(`path`,{d:`M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z`}))}function ue(e){return i.createElement(B,{...e},i.createElement(`path`,{d:`M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z`}))}function de(e){return i.createElement(B,{...e},i.createElement(`path`,{d:`M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z`}))}function V(){return i.createElement(`div`,{className:`Toastify__spinner`})}var fe={info:le,warning:ce,success:ue,error:de,spinner:V},pe=e=>e in fe;function me({theme:e,type:t,isLoading:n,icon:r}){let a=null,o={theme:e,type:t};return r===!1||(l(r)?a=r({...o,isLoading:n}):(0,i.isValidElement)(r)?a=(0,i.cloneElement)(r,o):n?a=fe.spinner():pe(t)&&(a=fe[t](o))),a}var he=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:a,playToast:s}=oe(e),{closeButton:c,children:u,autoClose:d,onClick:f,type:p,hideProgressBar:m,closeToast:h,transition:g,position:b,className:x,style:S,progressClassName:C,updateId:w,role:T,progress:E,rtl:D,toastId:O,deleteToast:ee,isIn:k,isLoading:A,closeOnClick:j,theme:te,ariaLabel:M}=e,N=o(`Toastify__toast`,`Toastify__toast-theme--${te}`,`Toastify__toast--${p}`,{"Toastify__toast--rtl":D},{"Toastify__toast--close-on-click":j}),P=l(x)?x({rtl:D,position:b,type:p,defaultClassName:N}):o(N,x),ne=me(e),re=!!E||!d,F={closeToast:h,type:p,theme:te},I=null;return c===!1||(I=l(c)?c(F):(0,i.isValidElement)(c)?(0,i.cloneElement)(c,F):v(F)),i.createElement(g,{isIn:k,done:ee,position:b,preventExitTransition:n,nodeRef:r,playToast:s},i.createElement(`div`,{id:O,tabIndex:0,onClick:f,"data-in":k,className:P,...a,style:S,ref:r,...k&&{role:T,"aria-label":M}},ne!=null&&i.createElement(`div`,{className:o(`Toastify__toast-icon`,{"Toastify--animate-icon Toastify__zoom-enter":!A})},ne),_(u,e,!t),I,!e.customProgressBar&&i.createElement(y,{...w&&!re?{key:`p-${w}`}:{},rtl:D,theme:te,delay:d,isRunning:t,isIn:k,closeToast:h,hide:m,type:p,className:C,controlledProgress:re,progress:E||0})))},ge=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),_e=h(ge(`bounce`,!0));h(ge(`slide`,!0)),h(ge(`zoom`)),h(ge(`flip`));var H={position:`top-right`,transition:_e,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:`touch`,draggablePercent:80,draggableDirection:`x`,role:`alert`,theme:`light`,"aria-label":`Notifications Alt+T`,hotKeys:e=>e.altKey&&e.code===`KeyT`};function ve(e){let t={...H,...e},n=e.stacked,[r,a]=(0,i.useState)(!0),s=(0,i.useRef)(null),{getToastToRender:c,isToastActive:u,count:f}=ae(t),{className:p,style:m,rtl:h,containerId:g,hotKeys:_}=t;function v(e){let t=o(`Toastify__toast-container`,`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":h});return l(p)?p({position:e,rtl:h,defaultClassName:t}):o(t,d(p))}function y(){n&&(a(!0),R.play())}return se(()=>{if(n){let e=s.current.querySelectorAll(`[data-in="true"]`),n=t.position?.includes(`top`),i=0,a=0;Array.from(e).reverse().forEach((e,t)=>{let o=e;o.classList.add(`Toastify__toast--stacked`),t>0&&(o.dataset.collapsed=`${r}`),o.dataset.pos||(o.dataset.pos=n?`top`:`bot`);let s=i*(r?.2:1)+(r?0:12*t),c=Math.max(.5,1-(r?a:0));o.style.setProperty(`--y`,`${n?s:s*-1}px`),o.style.setProperty(`--g`,`12`),o.style.setProperty(`--s`,`${c}`),i+=o.offsetHeight,a+=.025})}},[r,f,n]),(0,i.useEffect)(()=>{function e(e){var t;let n=s.current;_(e)&&((t=n?.querySelector(`[tabIndex="0"]`))==null||t.focus(),a(!1),R.pause()),e.key===`Escape`&&(document.activeElement===n||n!=null&&n.contains(document.activeElement))&&(a(!0),R.play())}return document.addEventListener(`keydown`,e),()=>{document.removeEventListener(`keydown`,e)}},[_]),i.createElement(`section`,{ref:s,className:`Toastify`,id:g,onMouseEnter:()=>{n&&(a(!1),R.pause())},onMouseLeave:y,"aria-live":`polite`,"aria-atomic":`false`,"aria-relevant":`additions text`,"aria-label":t[`aria-label`]},c((e,t)=>{let r=t.length?{...m}:{...m,pointerEvents:`none`};return i.createElement(`div`,{tabIndex:-1,className:v(e),"data-stacked":n,style:r,key:`c-${e}`},t.map(({content:e,props:t})=>i.createElement(he,{...t,stacked:n,collapseAll:y,isIn:u(t.toastId,t.containerId),key:`t-${t.key}`},e)))}))}var ye=`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,be=new Map,xe=(e,t)=>{se(()=>{if(!e||typeof document>`u`)return;let n=document,r=be.get(n);if(r){t&&r.setAttribute(`nonce`,t);return}let i=n.createElement(`style`);i.textContent=e,t&&i.setAttribute(`nonce`,t),n.head.appendChild(i),be.set(n,i)},[t])};function Se(e){return xe(ye,e.nonce),i.createElement(ve,{...e})}export{R as n,r,Se as t};