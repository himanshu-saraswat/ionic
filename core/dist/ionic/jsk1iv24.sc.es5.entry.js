var __awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(o,s){function r(t){try{u(n.next(t))}catch(t){s(t)}}function a(t){try{u(n.throw(t))}catch(t){s(t)}}function u(t){t.done?o(t.value):new i(function(e){e(t.value)}).then(r,a)}u((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){var i,n,o,s,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(i)throw new TypeError("Generator is already executing.");for(;r;)try{if(i=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,n=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){r=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){r.label=s[1];break}if(6===s[0]&&r.label<o[1]){r.label=o[1],o=s;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(s);break}o[2]&&r.ops.pop(),r.trys.pop();continue}s=e.call(t,r)}catch(t){s=[6,t],n=0}finally{i=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Ionic.loadBundle("jsk1iv24",["require","exports","./chunk-a99bd936.js","./chunk-2c5e69a8.js"],function(t,e,i,n){var o,s=window.Ionic.h,r=function(){function t(){this.disabled=!1,this.expandable=!1}return t.prototype.onClick=function(t){t.target.closest("ion-item-option")&&t.preventDefault()},t.prototype.hostData=function(){var t=this.disabled,e=this.expandable;return{class:Object.assign({},i.createColorClasses(this.color),{"item-option-disabled":t,"item-option-expandable":e,"ion-activatable":!0})}},t.prototype.render=function(){return s(void 0===this.href?"button":"a",{type:"button",class:"button-native",disabled:this.disabled,href:this.href},s("span",{class:"button-inner"},s("slot",{name:"top"}),s("div",{class:"horizontal-wrapper"},s("slot",{name:"start"}),s("slot",{name:"icon-only"}),s("slot",null),s("slot",{name:"end"})),s("slot",{name:"bottom"})),"md"===this.mode&&s("ion-ripple-effect",null))},Object.defineProperty(t,"is",{get:function(){return"ion-item-option"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},expandable:{type:Boolean,attr:"expandable"},href:{type:String,attr:"href"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"click",method:"onClick"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-item-option-md-h{--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit)}.in-list.item-options-end.sc-ion-item-option-md-h:last-child{padding-right:calc(.7em + var(--ion-safe-area-right))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.in-list.item-options-end.sc-ion-item-option-md-h:last-child{padding-right:unset;-webkit-padding-end:calc(.7em + var(--ion-safe-area-right));padding-inline-end:calc(.7em + var(--ion-safe-area-right))}}.in-list.item-options-start.sc-ion-item-option-md-h:first-child{padding-left:calc(.7em + var(--ion-safe-area-left))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.in-list.item-options-start.sc-ion-item-option-md-h:first-child{padding-left:unset;-webkit-padding-start:calc(.7em + var(--ion-safe-area-left));padding-inline-start:calc(.7em + var(--ion-safe-area-left))}}.ion-color.sc-ion-item-option-md-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native.sc-ion-item-option-md{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:.7em;padding-right:.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native.sc-ion-item-option-md{padding-left:unset;padding-right:unset;-webkit-padding-start:.7em;padding-inline-start:.7em;-webkit-padding-end:.7em;padding-inline-end:.7em}}.button-inner.sc-ion-item-option-md{-ms-flex-flow:column nowrap;flex-flow:column nowrap;height:100%}.button-inner.sc-ion-item-option-md, .horizontal-wrapper.sc-ion-item-option-md{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}.horizontal-wrapper.sc-ion-item-option-md{-ms-flex-flow:row nowrap;flex-flow:row nowrap}.sc-ion-item-option-md-s > *{-ms-flex-negative:0;flex-shrink:0}.sc-ion-item-option-md-s > [slot=start]{margin-left:0;margin-right:5px;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-option-md-s > [slot=start]{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px}}.sc-ion-item-option-md-s > [slot=end]{margin-left:5px;margin-right:0;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-option-md-s > [slot=end]{margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0}}.sc-ion-item-option-md-s > [slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0;min-width:.9em;font-size:1.8em}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-option-md-s > [slot=icon-only]{margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}.item-option-expandable.sc-ion-item-option-md-h{-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(.65,.05,.36,1);transition-timing-function:cubic-bezier(.65,.05,.36,1)}.item-option-disabled.sc-ion-item-option-md-h{pointer-events:none}.item-option-disabled.sc-ion-item-option-md-h   .button-native.sc-ion-item-option-md{cursor:default;opacity:.5;pointer-events:none}.sc-ion-item-option-md-h{font-size:14px;font-weight:500;text-transform:uppercase}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),a=function(){function t(){this.side="end"}return t.prototype.fireSwipeEvent=function(){this.ionSwipe.emit({side:this.side})},t.prototype.hostData=function(){var t=n.isEndSide(this.win,this.side);return{class:{"item-options-start":!t,"item-options-end":t}}},Object.defineProperty(t,"is",{get:function(){return"ion-item-options"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},fireSwipeEvent:{method:!0},side:{type:String,attr:"side"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionSwipe",method:"ionSwipe",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}.item-options-start ion-item-option:first-child{padding-right:var(--ion-safe-area-left)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-options-start ion-item-option:first-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-left);padding-inline-end:var(--ion-safe-area-left)}}.item-options-end ion-item-option:last-child{padding-right:var(--ion-safe-area-right)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-options-end ion-item-option:last-child{padding-right:unset;-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex}.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start),.item-sliding-active-slide.item-sliding-active-options-start .item-options-start{width:100%;visibility:visible}.item-options-md{border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))))}.item-options-md,.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),u=function(){function e(){this.item=null,this.openAmount=0,this.initialOpenAmount=0,this.optsWidthRightSide=0,this.optsWidthLeftSide=0,this.sides=0,this.optsDirty=!0,this.state=2,this.disabled=!1}return e.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var e,i=this;return __generator(this,function(n){switch(n.label){case 0:return this.item=this.el.querySelector("ion-item"),[4,this.updateOptions()];case 1:return n.sent(),e=this,[4,new Promise(function(e,i){t(["./chunk-54ca8d01.js"],e,i)})];case 2:return e.gesture=n.sent().createGesture({el:this.el,queue:this.queue,gestureName:"item-swipe",gesturePriority:100,threshold:5,canStart:function(){return i.canStart()},onStart:function(){return i.onStart()},onMove:function(t){return i.onMove(t)},onEnd:function(t){return i.onEnd(t)}}),this.disabledChanged(),[2]}})})},e.prototype.componentDidUnload=function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.item=null,this.leftOptions=this.rightOptions=void 0,o===this.el&&(o=void 0)},e.prototype.getOpenAmount=function(){return Promise.resolve(this.openAmount)},e.prototype.getSlidingRatio=function(){return Promise.resolve(this.getSlidingRatioSync())},e.prototype.close=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return this.setOpenAmount(0,!0),[2]})})},e.prototype.closeOpened=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return void 0!==o?(o.close(),o=void 0,[2,!0]):[2,!1]})})},e.prototype.updateOptions=function(){return __awaiter(this,void 0,void 0,function(){var t,e,i,n;return __generator(this,function(o){switch(o.label){case 0:t=this.el.querySelectorAll("ion-item-options"),e=0,this.leftOptions=this.rightOptions=void 0,i=0,o.label=1;case 1:return i<t.length?[4,t.item(i).componentOnReady()]:[3,4];case 2:"start"===(n=o.sent()).side?(this.leftOptions=n,e|=1):(this.rightOptions=n,e|=2),o.label=3;case 3:return i++,[3,1];case 4:return this.optsDirty=!0,this.sides=e,[2]}})})},e.prototype.canStart=function(){return o&&o!==this.el?(this.closeOpened(),!1):!(!this.rightOptions&&!this.leftOptions)},e.prototype.onStart=function(){o=this.el,void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),0===this.openAmount&&(this.optsDirty=!0,this.state=4),this.initialOpenAmount=this.openAmount,this.item&&(this.item.style.transition="none")},e.prototype.onMove=function(t){this.optsDirty&&this.calculateOptsWidth();var e,i=this.initialOpenAmount-t.deltaX;switch(this.sides){case 2:i=Math.max(0,i);break;case 1:i=Math.min(0,i);break;case 3:break;case 0:return;default:console.warn("invalid ItemSideFlags value",this.sides)}i>this.optsWidthRightSide?i=(e=this.optsWidthRightSide)+.55*(i-e):i<-this.optsWidthLeftSide&&(i=(e=-this.optsWidthLeftSide)+.55*(i-e)),this.setOpenAmount(i,!1)},e.prototype.onEnd=function(t){var e=t.velocityX,i=this.openAmount>0?this.optsWidthRightSide:-this.optsWidthLeftSide;(function(t,e,i){return!e&&i||t&&e})(this.openAmount>0==!(e<0),Math.abs(e)>.3,Math.abs(this.openAmount)<Math.abs(i/2))&&(i=0);var n=this.state;this.setOpenAmount(i,!0),0!=(32&n)&&this.rightOptions?this.rightOptions.fireSwipeEvent():0!=(64&n)&&this.leftOptions&&this.leftOptions.fireSwipeEvent()},e.prototype.calculateOptsWidth=function(){this.optsWidthRightSide=0,this.rightOptions&&(this.optsWidthRightSide=this.rightOptions.offsetWidth),this.optsWidthLeftSide=0,this.leftOptions&&(this.optsWidthLeftSide=this.leftOptions.offsetWidth),this.optsDirty=!1},e.prototype.setOpenAmount=function(t,e){var i=this;if(void 0!==this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),this.item){var n=this.item.style;if(this.openAmount=t,e&&(n.transition=""),t>0)this.state=t>=this.optsWidthRightSide+30?40:8;else{if(!(t<0))return this.tmr=setTimeout(function(){i.state=2,i.tmr=void 0},600),o=void 0,void(n.transform="");this.state=t<=-this.optsWidthLeftSide-30?80:16}n.transform="translate3d("+-t+"px,0,0)",this.ionDrag.emit({amount:t,ratio:this.getSlidingRatioSync()})}},e.prototype.getSlidingRatioSync=function(){return this.openAmount>0?this.openAmount/this.optsWidthRightSide:this.openAmount<0?this.openAmount/this.optsWidthLeftSide:0},e.prototype.hostData=function(){return{class:{"item-sliding-active-slide":2!==this.state,"item-sliding-active-options-end":0!=(8&this.state),"item-sliding-active-options-start":0!=(16&this.state),"item-sliding-active-swipe-end":0!=(32&this.state),"item-sliding-active-swipe-start":0!=(64&this.state)}}},Object.defineProperty(e,"is",{get:function(){return"ion-item-sliding"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{close:{method:!0},closeOpened:{method:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},getOpenAmount:{method:!0},getSlidingRatio:{method:!0},queue:{context:"queue"},state:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionDrag",method:"ionDrag",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden}ion-item-sliding,ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1),-webkit-transform .5s cubic-bezier(.36,.66,.04,1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:90%;-ms-flex-order:1;order:1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-left;transition-property:padding-left}:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:90%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-right;transition-property:padding-right}:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}"},enumerable:!0,configurable:!0}),e}();e.IonItemOption=r,e.IonItemOptions=a,e.IonItemSliding=u,Object.defineProperty(e,"__esModule",{value:!0})});