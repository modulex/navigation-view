modulex.add("navigation-view",["util","component/container","component/control","component/extension/content-box","feature"],function(e,n,i){var t,a=e("util"),o=e("component/container"),r=e("component/control"),l=e("component/extension/content-box"),v=e("feature");t=function(e){function n(e,n,i){return e+"navigation-view-"+("anim-"+n+"-"+(i?"enter":"leave"))+" "+e+"navigation-view-anim-ing"}function i(e,n,i){var t=e.get("animation");if("string"==typeof t)return t;var a;return a=i?n?t[1]:t[0]:n?t[0]:t[1]}function t(e,t,a){s(e);var o=i(e,t,a);return"none"===o?(t?e.show():e.hide(),void 0):(e.show(),e.$el.addClass(e._viewAnimCss=n(e.get("prefixCls"),o,t)),void 0)}function c(e,t,a,o){s(e);var r=i(t,a,o);return"none"===r?(a?e.show():e.hide(),void 0):(e.show(),e.$el.addClass(e._viewAnimCss=n(t.get("prefixCls"),r,a)),void 0)}function s(e){e._viewAnimCss&&(e.$el.removeClass(e._viewAnimCss),e._viewAnimCss=null)}function w(e,n){for(var i=e.get("children"),t=n.viewId,a=0;a<i.length;a++)if(i[a].constructor.xclass===n.xclass){if(!t)return i[a];if(i[a].get("viewId")===t)return i[a]}return null}function u(e,n,i){var a=e.loadingView,o=n.view,r=n.fromCache,l=e.get("activeView");e.fire("beforeInnerViewChange",{oldView:l,newView:o,backward:i}),l&&l.leave&&l.leave(),e.set("activeView",o),o.enter&&o.enter({fromCache:r});var v=o.promise;v?(l?(t(l,!1,i),a.transition(!0,i)):a.show(),v.then(function(){e.get("activeView")===o&&(a.hide(),o.show(),e.fire("afterInnerViewChange",{newView:o,oldView:l,backward:i}))})):(a.get("visible")?(a.transition(!1,i),t(o,!0,i)):l?(t(l,!1,i),t(o,!0,i)):o.show(),e.fire("afterInnerViewChange",{newView:o,oldView:l,backward:i})),d(e)}function d(e){var n=e.get("children").concat(),i=e.get("viewCacheSize");if(!(n.length<=i)){var t=Math.floor(i/3);n.sort(function(e,n){return e.timeStamp-n.timeStamp});for(var a=0;t>a;a++)e.removeChild(n[a])}}function f(){var e=this;s(e),e.get("navigationView").get("activeView")===e?e.show():e.hide()}function h(e,n){var i=w(e,n),t=!!i;return i?i.set(n):(i=e.addChild(n),i.$el.on(C,f,i)),i.timeStamp=g.now(),{view:i,fromCache:t}}var g=a,m=v.getCssVendorInfo("animation"),V=m&&m.propertyNamePrefix,C=V?V.toLowerCase()+"AnimationEnd":"animationend webkitAnimationEnd",p=o,x=r,S=l,b=x.extend({bindUI:function(){var e=this;e.$el.on(C,function(){s(e),e.active||e.hide()})},transition:function(e,n){var i=this;i.active=e,c(i,i.navigationView.get("activeView"),e,n)}},{xclass:"navigation-view-loading",ATTRS:{handleGestureEvents:{value:!1},focusable:{value:!1},allowTextSelection:{value:!0},visible:{value:!1}}});return e=p.extend([S],{initializer:function(){this.viewStack=[]},createDom:function(){var e=this,n=e.get("loadingHtml");n!==!1&&(e.loadingView=new b({content:n,render:e.contentEl}).render(),e.loadingView.navigationView=e)},_onSetLoadingHtml:function(e){this.loadingView&&this.loadingView.set("content",e)},push:function(e){var n=this,i=n.viewStack;e.animation=e.animation||n.get("animation"),e.navigationView=n,i.push(e),u(n,h(n,e))},replace:function(e){var n=this,i=n.viewStack;i.length&&(g.mix(i[i.length-1],e),n.get("activeView").set(e))},pop:function(e){var n=this,i=n.viewStack;i.length>1&&(i.pop(),e=i[i.length-1],u(n,h(n,e),!0))}},{xclass:"navigation-view",ATTRS:{animation:{valueFn:function(){return["slide-right","slide-left"]}},loadingHtml:{sync:0},handleGestureEvents:{value:!1},viewCacheSize:{value:10},focusable:{value:!1},allowTextSelection:{value:!0},defaultChildCfg:{valueFn:function(){return{handleGestureEvents:!1,visible:!1,allowTextSelection:!0}}}}})}(),i.exports=t});