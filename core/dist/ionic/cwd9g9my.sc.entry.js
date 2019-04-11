const e=window.Ionic.h;import{h as t}from"./chunk-6d7d2f8c.js";import{a as s}from"./chunk-99929188.js";import{e as i,a as n,d as o}from"./chunk-90d954cd.js";import{b as r,c as a,d as h}from"./chunk-e89a7020.js";const c=1,u=2,d=3;class l{constructor(e,t){this.component=e,this.params=t,this.state=c}async init(e){if(this.state=u,!this.element){const t=this.component;this.element=await s(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)}}_destroy(){const e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=d}}function m(e,t,s){if(!e)return!1;if(e.component!==t)return!1;const i=e.params;if(i===s)return!0;if(!i&&!s)return!0;if(!i||!s)return!1;const n=Object.keys(i),o=Object.keys(s);if(n.length!==o.length)return!1;for(const e of n)if(i[e]!==s[e])return!1;return!0}function p(e,t){return e?e instanceof l?e:new l(e,t):null}class v{constructor(){this.transInstr=[],this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}swipeGestureChanged(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)}rootChanged(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}componentWillLoad(){this.useRouter=!!this.win.document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture&&(this.swipeGesture=this.config.getBoolean("swipeBackEnabled","ios"===this.mode)),this.ionNavWillLoad.emit()}async componentDidLoad(){this.rootChanged(),this.gesture=(await import("./chunk-ca529fbc.js")).createSwipeBackGesture(this.el,this.queue,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged()}componentDidUnload(){for(const e of this.views)r(e.element,i),e._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0}push(e,t,s,i){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:s},i)}insert(e,t,s,i,n){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:s}],opts:i},n)}insertPages(e,t,s,i){return this.queueTrns({insertStart:e,insertViews:t,opts:s},i)}pop(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)}popTo(e,t,s){const i={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(i.removeView=e,i.removeStart=1):"number"==typeof e&&(i.removeStart=e+1),this.queueTrns(i,s)}popToRoot(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)}removeIndex(e,t=1,s,i){return this.queueTrns({removeStart:e,removeCount:t,opts:s},i)}setRoot(e,t,s,i){return this.setPages([{page:e,params:t}],s,i)}setPages(e,t,s){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},s)}setRouteId(e,t,s){const i=this.getActiveSync();if(m(i,e,t))return Promise.resolve({changed:!1,element:i.element});let n;const o=new Promise(e=>n=e);let r;const a={updateURL:!1,viewIsReady:e=>{let t;const s=new Promise(e=>t=e);return n({changed:!0,element:e,markVisible:async()=>{t(),await r}}),s}};if("root"===s)r=this.setRoot(e,t,a);else{const i=this.views.find(s=>m(s,e,t));i?r=this.popTo(i,Object.assign({},a,{direction:"back"})):"forward"===s?r=this.push(e,t,a):"back"===s&&(r=this.setRoot(e,t,Object.assign({},a,{direction:"back",animated:!0})))}return o}async getRouteId(){const e=this.getActiveSync();return e?{id:e.element.tagName,params:e.params,element:e.element}:void 0}getActive(){return Promise.resolve(this.getActiveSync())}getByIndex(e){return Promise.resolve(this.views[e])}canGoBack(e){return Promise.resolve(this.canGoBackSync(e))}getPrevious(e){return Promise.resolve(this.getPreviousSync(e))}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(e=this.getActiveSync()){return!(!e||!this.getPreviousSync(e))}getPreviousSync(e=this.getActiveSync()){if(!e)return;const t=this.views,s=t.indexOf(e);return s>0?t[s-1]:void 0}queueTrns(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);const s=new Promise((t,s)=>{e.resolve=t,e.reject=s});return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),s}success(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){const t=this.win.document.querySelector("ion-router");t&&t.navChanged("back"===e.direction?"back":"forward")}}failed(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}fireError(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}async runTransition(e){try{this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e);const t=this.getActiveSync(),s=this.getEnteringView(e,t);if(!t&&!s)throw new Error("no views in the stack to be removed");s&&s.state===c&&await s.init(this.el),this.postViewInit(s,t,e);const i=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&s!==t?await this.transition(s,t,e):{hasCompleted:!0,requiresTransition:!1};this.success(i,e),this.ionNavDidChange.emit()}catch(t){this.failed(t,e)}this.isTransitioning=!1,this.nextTrns()}prepareTI(e){const t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){const t=this.views.indexOf(e.removeView);if(t<0)throw new Error("removeView was not found");e.removeStart+=t}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);const s=e.insertViews;if(!s)return;const i=s.map(e=>e instanceof l?e:"page"in e?p(e.page,e.params):p(e,void 0)).filter(e=>null!==e);if(0===i.length)throw new Error("invalid views to insert");for(const t of i){t.delegate=e.opts.delegate;const s=t.nav;if(s&&s!==this)throw new Error("inserted view was already inserted");if(t.state===d)throw new Error("inserted view was already destroyed")}e.insertViews=i}getEnteringView(e,t){const s=e.insertViews;if(void 0!==s)return s[s.length-1];const i=e.removeStart;if(void 0!==i){const s=this.views,n=i+e.removeCount;for(let e=s.length-1;e>=0;e--){const o=s[e];if((e<i||e>=n)&&o!==t)return o}}}postViewInit(e,t,s){const a=s.opts,h=s.insertViews,c=s.removeStart,u=s.removeCount;let d;if(void 0!==c&&void 0!==u){d=[];for(let s=0;s<u;s++){const i=this.views[s+c];i&&i!==e&&i!==t&&d.push(i)}a.direction=a.direction||"back"}if(0===this.views.length+(void 0!==h?h.length:0)-(void 0!==u?u:0))throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(h){let e=s.insertStart;for(const t of h)this.insertViewAt(t,e),e++;s.enteringRequiresTransition&&(a.direction=a.direction||"forward")}if(d&&d.length>0){for(const e of d)r(e.element,n),r(e.element,o),r(e.element,i);for(const e of d)this.destroyView(e)}}async transition(e,t,s){const i=s.opts,n=i.progressAnimation?e=>this.sbAni=e:void 0,o=e.element,r=t&&t.element,h=Object.assign({mode:this.mode,showGoBack:this.canGoBackSync(e),queue:this.queue,window:this.win,baseEl:this.el,animationBuilder:this.animation||i.animationBuilder||this.config.get("navAnimation"),progressCallback:n,animated:this.animated&&this.config.getBoolean("animated",!0),enteringEl:o,leavingEl:r},i),{hasCompleted:c}=await a(h);return this.transitionFinish(c,e,t,i)}transitionFinish(e,t,s,i){const n=e?t:s;return n&&this.cleanup(n),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:s,direction:i.direction}}insertViewAt(e,t){const s=this.views,i=s.indexOf(e);i>-1?s.splice(t,0,s.splice(i,1)[0]):(e.nav=this,s.splice(t,0,e))}removeView(e){const t=this.views,s=t.indexOf(e);s>=0&&t.splice(s,1)}destroyView(e){e._destroy(),this.removeView(e)}cleanup(e){if(this.destroyed)return;const t=this.views,s=t.indexOf(e);for(let e=t.length-1;e>=0;e--){const n=t[e],o=n.element;e>s?(r(o,i),this.destroyView(n)):e<s&&h(o,!0)}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.canGoBackSync()}onStart(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}onMove(e){this.sbAni&&this.sbAni.progressStep(e)}onEnd(e,t,s){this.sbAni&&this.sbAni.progressEnd(e,t,s)}render(){return e("slot",null)}static get is(){return"ion-nav"}static get encapsulation(){return"shadow"}static get properties(){return{animated:{type:Boolean,attr:"animated"},animation:{type:"Any",attr:"animation"},canGoBack:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getActive:{method:!0},getByIndex:{method:!0},getPrevious:{method:!0},getRouteId:{method:!0},insert:{method:!0},insertPages:{method:!0},pop:{method:!0},popTo:{method:!0},popToRoot:{method:!0},push:{method:!0},queue:{context:"queue"},removeIndex:{method:!0},root:{type:String,attr:"root",watchCallbacks:["rootChanged"]},rootParams:{type:"Any",attr:"root-params"},setPages:{method:!0},setRoot:{method:!0},setRouteId:{method:!0},swipeGesture:{type:Boolean,attr:"swipe-gesture",mutable:!0,watchCallbacks:["swipeGestureChanged"]},win:{context:"window"}}}static get events(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!1,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!1,cancelable:!0,composed:!0}]}static get style(){return".sc-ion-nav-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"}}class g{pop(){const e=this.el.closest("ion-nav");e&&e.pop({skipIfBusy:!0})}static get is(){return"ion-nav-pop"}static get properties(){return{el:{elementRef:!0}}}static get listeners(){return[{name:"child:click",method:"pop"}]}}class w{push(){const e=this.el.closest("ion-nav"),t=this.component;e&&void 0!==t&&e.push(t,this.componentProps,{skipIfBusy:!0})}static get is(){return"ion-nav-push"}static get properties(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},el:{elementRef:!0}}}static get listeners(){return[{name:"child:click",method:"push"}]}}class f{push(){const e=this.el.closest("ion-nav"),t=this.component;e&&void 0!==t&&e.setRoot(t,this.componentProps,{skipIfBusy:!0})}static get is(){return"ion-nav-set-root"}static get properties(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},el:{elementRef:!0}}}static get listeners(){return[{name:"child:click",method:"push"}]}}export{v as IonNav,g as IonNavPop,w as IonNavPush,f as IonNavSetRoot};