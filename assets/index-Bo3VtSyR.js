const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-Bm3uly3J.js","assets/Home-B9_hWY_9.css","assets/Tasks-DTy1rYWU.js","assets/Tasks-B2NY7hoQ.css","assets/Folders-DVKepaCh.js","assets/Folders-Cd9RkuPm.css","assets/About-BvB3aXTn.js","assets/About-M1dedWpw.css","assets/Dashboard-B2g2QRSu.js","assets/Dashboard-C-fAevHE.css","assets/SignIn-CKhTI9rP.js","assets/SignIn-qe20DycS.css","assets/SignUp-CNExg1aY.js","assets/SignUp-CrEc0M8t.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Fm={exports:{}},Du={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $T;function T1(){if($T)return Du;$T=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:c,ref:a!==void 0?a:null,props:l}}return Du.Fragment=e,Du.jsx=t,Du.jsxs=t,Du}var QT;function S1(){return QT||(QT=1,Fm.exports=T1()),Fm.exports}var se=S1(),Hm={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WT;function A1(){if(WT)return Ce;WT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),T=Symbol.iterator;function S(D){return D===null||typeof D!="object"?null:(D=T&&D[T]||D["@@iterator"],typeof D=="function"?D:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,z={};function L(D,Q,oe){this.props=D,this.context=Q,this.refs=z,this.updater=oe||I}L.prototype.isReactComponent={},L.prototype.setState=function(D,Q){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Q,"setState")},L.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function Y(){}Y.prototype=L.prototype;function W(D,Q,oe){this.props=D,this.context=Q,this.refs=z,this.updater=oe||I}var te=W.prototype=new Y;te.constructor=W,C(te,L.prototype),te.isPureReactComponent=!0;var le=Array.isArray,ce={H:null,A:null,T:null,S:null,V:null},ge=Object.prototype.hasOwnProperty;function k(D,Q,oe,ie,pe,Oe){return oe=Oe.ref,{$$typeof:n,type:D,key:Q,ref:oe!==void 0?oe:null,props:Oe}}function R(D,Q){return k(D.type,Q,void 0,void 0,void 0,D.props)}function b(D){return typeof D=="object"&&D!==null&&D.$$typeof===n}function x(D){var Q={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(oe){return Q[oe]})}var P=/\/+/g;function U(D,Q){return typeof D=="object"&&D!==null&&D.key!=null?x(""+D.key):Q.toString(36)}function O(){}function kt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(O,O):(D.status="pending",D.then(function(Q){D.status==="pending"&&(D.status="fulfilled",D.value=Q)},function(Q){D.status==="pending"&&(D.status="rejected",D.reason=Q)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ft(D,Q,oe,ie,pe){var Oe=typeof D;(Oe==="undefined"||Oe==="boolean")&&(D=null);var we=!1;if(D===null)we=!0;else switch(Oe){case"bigint":case"string":case"number":we=!0;break;case"object":switch(D.$$typeof){case n:case e:we=!0;break;case y:return we=D._init,ft(we(D._payload),Q,oe,ie,pe)}}if(we)return pe=pe(D),we=ie===""?"."+U(D,0):ie,le(pe)?(oe="",we!=null&&(oe=we.replace(P,"$&/")+"/"),ft(pe,Q,oe,"",function(_i){return _i})):pe!=null&&(b(pe)&&(pe=R(pe,oe+(pe.key==null||D&&D.key===pe.key?"":(""+pe.key).replace(P,"$&/")+"/")+we)),Q.push(pe)),1;we=0;var Ft=ie===""?".":ie+":";if(le(D))for(var rt=0;rt<D.length;rt++)ie=D[rt],Oe=Ft+U(ie,rt),we+=ft(ie,Q,oe,Oe,pe);else if(rt=S(D),typeof rt=="function")for(D=rt.call(D),rt=0;!(ie=D.next()).done;)ie=ie.value,Oe=Ft+U(ie,rt++),we+=ft(ie,Q,oe,Oe,pe);else if(Oe==="object"){if(typeof D.then=="function")return ft(kt(D),Q,oe,ie,pe);throw Q=String(D),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return we}function $(D,Q,oe){if(D==null)return D;var ie=[],pe=0;return ft(D,ie,"","",function(Oe){return Q.call(oe,Oe,pe++)}),ie}function ae(D){if(D._status===-1){var Q=D._result;Q=Q(),Q.then(function(oe){(D._status===0||D._status===-1)&&(D._status=1,D._result=oe)},function(oe){(D._status===0||D._status===-1)&&(D._status=2,D._result=oe)}),D._status===-1&&(D._status=0,D._result=Q)}if(D._status===1)return D._result.default;throw D._result}var de=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Ve(){}return Ce.Children={map:$,forEach:function(D,Q,oe){$(D,function(){Q.apply(this,arguments)},oe)},count:function(D){var Q=0;return $(D,function(){Q++}),Q},toArray:function(D){return $(D,function(Q){return Q})||[]},only:function(D){if(!b(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ce.Component=L,Ce.Fragment=t,Ce.Profiler=a,Ce.PureComponent=W,Ce.StrictMode=s,Ce.Suspense=p,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ce,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(D){return ce.H.useMemoCache(D)}},Ce.cache=function(D){return function(){return D.apply(null,arguments)}},Ce.cloneElement=function(D,Q,oe){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var ie=C({},D.props),pe=D.key,Oe=void 0;if(Q!=null)for(we in Q.ref!==void 0&&(Oe=void 0),Q.key!==void 0&&(pe=""+Q.key),Q)!ge.call(Q,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&Q.ref===void 0||(ie[we]=Q[we]);var we=arguments.length-2;if(we===1)ie.children=oe;else if(1<we){for(var Ft=Array(we),rt=0;rt<we;rt++)Ft[rt]=arguments[rt+2];ie.children=Ft}return k(D.type,pe,void 0,void 0,Oe,ie)},Ce.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:l,_context:D},D},Ce.createElement=function(D,Q,oe){var ie,pe={},Oe=null;if(Q!=null)for(ie in Q.key!==void 0&&(Oe=""+Q.key),Q)ge.call(Q,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(pe[ie]=Q[ie]);var we=arguments.length-2;if(we===1)pe.children=oe;else if(1<we){for(var Ft=Array(we),rt=0;rt<we;rt++)Ft[rt]=arguments[rt+2];pe.children=Ft}if(D&&D.defaultProps)for(ie in we=D.defaultProps,we)pe[ie]===void 0&&(pe[ie]=we[ie]);return k(D,Oe,void 0,void 0,null,pe)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(D){return{$$typeof:d,render:D}},Ce.isValidElement=b,Ce.lazy=function(D){return{$$typeof:y,_payload:{_status:-1,_result:D},_init:ae}},Ce.memo=function(D,Q){return{$$typeof:g,type:D,compare:Q===void 0?null:Q}},Ce.startTransition=function(D){var Q=ce.T,oe={};ce.T=oe;try{var ie=D(),pe=ce.S;pe!==null&&pe(oe,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(Ve,de)}catch(Oe){de(Oe)}finally{ce.T=Q}},Ce.unstable_useCacheRefresh=function(){return ce.H.useCacheRefresh()},Ce.use=function(D){return ce.H.use(D)},Ce.useActionState=function(D,Q,oe){return ce.H.useActionState(D,Q,oe)},Ce.useCallback=function(D,Q){return ce.H.useCallback(D,Q)},Ce.useContext=function(D){return ce.H.useContext(D)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(D,Q){return ce.H.useDeferredValue(D,Q)},Ce.useEffect=function(D,Q,oe){var ie=ce.H;if(typeof oe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(D,Q)},Ce.useId=function(){return ce.H.useId()},Ce.useImperativeHandle=function(D,Q,oe){return ce.H.useImperativeHandle(D,Q,oe)},Ce.useInsertionEffect=function(D,Q){return ce.H.useInsertionEffect(D,Q)},Ce.useLayoutEffect=function(D,Q){return ce.H.useLayoutEffect(D,Q)},Ce.useMemo=function(D,Q){return ce.H.useMemo(D,Q)},Ce.useOptimistic=function(D,Q){return ce.H.useOptimistic(D,Q)},Ce.useReducer=function(D,Q,oe){return ce.H.useReducer(D,Q,oe)},Ce.useRef=function(D){return ce.H.useRef(D)},Ce.useState=function(D){return ce.H.useState(D)},Ce.useSyncExternalStore=function(D,Q,oe){return ce.H.useSyncExternalStore(D,Q,oe)},Ce.useTransition=function(){return ce.H.useTransition()},Ce.version="19.1.0",Ce}var XT;function a_(){return XT||(XT=1,Hm.exports=A1()),Hm.exports}var K=a_(),qm={exports:{}},ku={},jm={exports:{}},Gm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZT;function w1(){return ZT||(ZT=1,function(n){function e($,ae){var de=$.length;$.push(ae);e:for(;0<de;){var Ve=de-1>>>1,D=$[Ve];if(0<a(D,ae))$[Ve]=ae,$[de]=D,de=Ve;else break e}}function t($){return $.length===0?null:$[0]}function s($){if($.length===0)return null;var ae=$[0],de=$.pop();if(de!==ae){$[0]=de;e:for(var Ve=0,D=$.length,Q=D>>>1;Ve<Q;){var oe=2*(Ve+1)-1,ie=$[oe],pe=oe+1,Oe=$[pe];if(0>a(ie,de))pe<D&&0>a(Oe,ie)?($[Ve]=Oe,$[pe]=de,Ve=pe):($[Ve]=ie,$[oe]=de,Ve=oe);else if(pe<D&&0>a(Oe,de))$[Ve]=Oe,$[pe]=de,Ve=pe;else break e}}return ae}function a($,ae){var de=$.sortIndex-ae.sortIndex;return de!==0?de:$.id-ae.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],g=[],y=1,T=null,S=3,I=!1,C=!1,z=!1,L=!1,Y=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function le($){for(var ae=t(g);ae!==null;){if(ae.callback===null)s(g);else if(ae.startTime<=$)s(g),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=t(g)}}function ce($){if(z=!1,le($),!C)if(t(p)!==null)C=!0,ge||(ge=!0,U());else{var ae=t(g);ae!==null&&ft(ce,ae.startTime-$)}}var ge=!1,k=-1,R=5,b=-1;function x(){return L?!0:!(n.unstable_now()-b<R)}function P(){if(L=!1,ge){var $=n.unstable_now();b=$;var ae=!0;try{e:{C=!1,z&&(z=!1,W(k),k=-1),I=!0;var de=S;try{t:{for(le($),T=t(p);T!==null&&!(T.expirationTime>$&&x());){var Ve=T.callback;if(typeof Ve=="function"){T.callback=null,S=T.priorityLevel;var D=Ve(T.expirationTime<=$);if($=n.unstable_now(),typeof D=="function"){T.callback=D,le($),ae=!0;break t}T===t(p)&&s(p),le($)}else s(p);T=t(p)}if(T!==null)ae=!0;else{var Q=t(g);Q!==null&&ft(ce,Q.startTime-$),ae=!1}}break e}finally{T=null,S=de,I=!1}ae=void 0}}finally{ae?U():ge=!1}}}var U;if(typeof te=="function")U=function(){te(P)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,kt=O.port2;O.port1.onmessage=P,U=function(){kt.postMessage(null)}}else U=function(){Y(P,0)};function ft($,ae){k=Y(function(){$(n.unstable_now())},ae)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function($){$.callback=null},n.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<$?Math.floor(1e3/$):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_next=function($){switch(S){case 1:case 2:case 3:var ae=3;break;default:ae=S}var de=S;S=ae;try{return $()}finally{S=de}},n.unstable_requestPaint=function(){L=!0},n.unstable_runWithPriority=function($,ae){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var de=S;S=$;try{return ae()}finally{S=de}},n.unstable_scheduleCallback=function($,ae,de){var Ve=n.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?Ve+de:Ve):de=Ve,$){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=de+D,$={id:y++,callback:ae,priorityLevel:$,startTime:de,expirationTime:D,sortIndex:-1},de>Ve?($.sortIndex=de,e(g,$),t(p)===null&&$===t(g)&&(z?(W(k),k=-1):z=!0,ft(ce,de-Ve))):($.sortIndex=D,e(p,$),C||I||(C=!0,ge||(ge=!0,U()))),$},n.unstable_shouldYield=x,n.unstable_wrapCallback=function($){var ae=S;return function(){var de=S;S=ae;try{return $.apply(this,arguments)}finally{S=de}}}}(Gm)),Gm}var JT;function R1(){return JT||(JT=1,jm.exports=w1()),jm.exports}var Km={exports:{}},ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0;function b1(){if(e0)return ln;e0=1;var n=a_();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,y){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:y}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ln.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,y)},ln.flushSync=function(p){var g=c.T,y=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=g,s.p=y,s.d.f()}},ln.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},ln.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},ln.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,I=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:S,fetchPriority:I}):y==="script"&&s.d.X(p,{crossOrigin:T,integrity:S,fetchPriority:I,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},ln.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=d(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},ln.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin);s.d.L(p,y,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},ln.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=d(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},ln.requestFormReset=function(p){s.d.r(p)},ln.unstable_batchedUpdates=function(p,g){return p(g)},ln.useFormState=function(p,g,y){return c.H.useFormState(p,g,y)},ln.useFormStatus=function(){return c.H.useHostTransitionStatus()},ln.version="19.1.0",ln}var t0;function C1(){if(t0)return Km.exports;t0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Km.exports=b1(),Km.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function I1(){if(n0)return ku;n0=1;var n=R1(),e=a_(),t=C1();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function c(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(s(188))}function p(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,u=r;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),i;if(m===u)return d(f),r;m=m.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=m;else{for(var E=!1,A=f.child;A;){if(A===o){E=!0,o=f,u=m;break}if(A===u){E=!0,u=f,o=m;break}A=A.sibling}if(!E){for(A=m.child;A;){if(A===o){E=!0,o=m,u=f;break}if(A===u){E=!0,u=m,o=f;break}A=A.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function g(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=g(i),r!==null)return r;i=i.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),W=Symbol.for("react.consumer"),te=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),x=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function U(i){return i===null||typeof i!="object"?null:(i=P&&i[P]||i["@@iterator"],typeof i=="function"?i:null)}var O=Symbol.for("react.client.reference");function kt(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===O?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case C:return"Fragment";case L:return"Profiler";case z:return"StrictMode";case ce:return"Suspense";case ge:return"SuspenseList";case b:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case I:return"Portal";case te:return(i.displayName||"Context")+".Provider";case W:return(i._context.displayName||"Context")+".Consumer";case le:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case k:return r=i.displayName||null,r!==null?r:kt(i.type)||"Memo";case R:r=i._payload,i=i._init;try{return kt(i(r))}catch{}}return null}var ft=Array.isArray,$=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},Ve=[],D=-1;function Q(i){return{current:i}}function oe(i){0>D||(i.current=Ve[D],Ve[D]=null,D--)}function ie(i,r){D++,Ve[D]=i.current,i.current=r}var pe=Q(null),Oe=Q(null),we=Q(null),Ft=Q(null);function rt(i,r){switch(ie(we,r),ie(Oe,i),ie(pe,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?ST(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=ST(r),i=AT(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}oe(pe),ie(pe,i)}function _i(){oe(pe),oe(Oe),oe(we)}function Bs(i){i.memoizedState!==null&&ie(Ft,i);var r=pe.current,o=AT(r,i.type);r!==o&&(ie(Oe,i),ie(pe,o))}function Yi(i){Oe.current===i&&(oe(pe),oe(Oe)),Ft.current===i&&(oe(Ft),bu._currentValue=de)}var zr=Object.prototype.hasOwnProperty,Fr=n.unstable_scheduleCallback,Hr=n.unstable_cancelCallback,Al=n.unstable_shouldYield,Vc=n.unstable_requestPaint,Hn=n.unstable_now,Fd=n.unstable_getCurrentPriorityLevel,wl=n.unstable_ImmediatePriority,Ya=n.unstable_UserBlockingPriority,qr=n.unstable_NormalPriority,Hd=n.unstable_LowPriority,$a=n.unstable_IdlePriority,Rl=n.log,Uc=n.unstable_setDisableYieldValue,vt=null,We=null;function Nn(i){if(typeof Rl=="function"&&Uc(i),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(vt,i)}catch{}}var an=Math.clz32?Math.clz32:jr,Bc=Math.log,qd=Math.LN2;function jr(i){return i>>>=0,i===0?32:31-(Bc(i)/qd|0)|0}var Gr=256,Kr=4194304;function ri(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function Qa(i,r,o){var u=i.pendingLanes;if(u===0)return 0;var f=0,m=i.suspendedLanes,E=i.pingedLanes;i=i.warmLanes;var A=u&134217727;return A!==0?(u=A&~m,u!==0?f=ri(u):(E&=A,E!==0?f=ri(E):o||(o=A&~i,o!==0&&(f=ri(o))))):(A=u&~m,A!==0?f=ri(A):E!==0?f=ri(E):o||(o=u&~i,o!==0&&(f=ri(o)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:f}function Yr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function bl(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cl(){var i=Gr;return Gr<<=1,(Gr&4194048)===0&&(Gr=256),i}function Il(){var i=Kr;return Kr<<=1,(Kr&62914560)===0&&(Kr=4194304),i}function $i(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function Qi(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Nl(i,r,o,u,f,m){var E=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var A=i.entanglements,N=i.expirationTimes,H=i.hiddenUpdates;for(o=E&~o;0<o;){var X=31-an(o),J=1<<X;A[X]=0,N[X]=-1;var q=H[X];if(q!==null)for(H[X]=null,X=0;X<q.length;X++){var j=q[X];j!==null&&(j.lane&=-536870913)}o&=~J}u!==0&&yi(i,u,0),m!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=m&~(E&~r))}function yi(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-an(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&4194090}function Ol(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-an(o),f=1<<u;f&r|i[u]&r&&(i[u]|=r),o&=~f}}function zs(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Wa(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Fs(){var i=ae.p;return i!==0?i:(i=window.event,i===void 0?32:HT(i.type))}function zc(i,r){var o=ae.p;try{return ae.p=i,r()}finally{ae.p=o}}var dt=Math.random().toString(36).slice(2),xt="__reactFiber$"+dt,Ct="__reactProps$"+dt,qn="__reactContainer$"+dt,Dl="__reactEvents$"+dt,jd="__reactListeners$"+dt,Hs="__reactHandles$"+dt,Fc="__reactResources$"+dt,$r="__reactMarker$"+dt;function qs(i){delete i[xt],delete i[Ct],delete i[Dl],delete i[jd],delete i[Hs]}function Wi(i){var r=i[xt];if(r)return r;for(var o=i.parentNode;o;){if(r=o[qn]||o[xt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=CT(i);i!==null;){if(o=i[xt])return o;i=CT(i)}return r}i=o,o=i.parentNode}return null}function vi(i){if(i=i[xt]||i[qn]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function Ei(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function gn(i){var r=i[Fc];return r||(r=i[Fc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function At(i){i[$r]=!0}var kl=new Set,Xa={};function ai(i,r){Xi(i,r),Xi(i+"Capture",r)}function Xi(i,r){for(Xa[i]=r,i=0;i<r.length;i++)kl.add(r[i])}var Hc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qc={},Qr={};function jc(i){return zr.call(Qr,i)?!0:zr.call(qc,i)?!1:Hc.test(i)?Qr[i]=!0:(qc[i]=!0,!1)}function js(i,r,o){if(jc(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function Ti(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function Wt(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}var Wr,Gc;function Zi(i){if(Wr===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);Wr=r&&r[1]||"",Gc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wr+i+Gc}var Za=!1;function Ja(i,r){if(!i||Za)return"";Za=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(j){var q=j}Reflect.construct(i,[],J)}else{try{J.call()}catch(j){q=j}i.call(J.prototype)}}else{try{throw Error()}catch(j){q=j}(J=i())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(j){if(j&&q&&typeof j.stack=="string")return[j.stack,q.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],A=m[1];if(E&&A){var N=E.split(`
`),H=A.split(`
`);for(f=u=0;u<N.length&&!N[u].includes("DetermineComponentFrameRoot");)u++;for(;f<H.length&&!H[f].includes("DetermineComponentFrameRoot");)f++;if(u===N.length||f===H.length)for(u=N.length-1,f=H.length-1;1<=u&&0<=f&&N[u]!==H[f];)f--;for(;1<=u&&0<=f;u--,f--)if(N[u]!==H[f]){if(u!==1||f!==1)do if(u--,f--,0>f||N[u]!==H[f]){var X=`
`+N[u].replace(" at new "," at ");return i.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",i.displayName)),X}while(1<=u&&0<=f);break}}}finally{Za=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?Zi(o):""}function xl(i){switch(i.tag){case 26:case 27:case 5:return Zi(i.type);case 16:return Zi("Lazy");case 13:return Zi("Suspense");case 19:return Zi("SuspenseList");case 0:case 15:return Ja(i.type,!1);case 11:return Ja(i.type.render,!1);case 1:return Ja(i.type,!0);case 31:return Zi("Activity");default:return""}}function eo(i){try{var r="";do r+=xl(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function _n(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ml(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Gd(i){var r=Ml(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),u=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function to(i){i._valueTracker||(i._valueTracker=Gd(i))}function Pl(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=Ml(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function Xr(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var Kd=/[\n"\\]/g;function It(i){return i.replace(Kd,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function On(i,r,o,u,f,m,E,A){i.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?i.type=E:i.removeAttribute("type"),r!=null?E==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+_n(r)):i.value!==""+_n(r)&&(i.value=""+_n(r)):E!=="submit"&&E!=="reset"||i.removeAttribute("value"),r!=null?Gs(i,E,_n(r)):o!=null?Gs(i,E,_n(o)):u!=null&&i.removeAttribute("value"),f==null&&m!=null&&(i.defaultChecked=!!m),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?i.name=""+_n(A):i.removeAttribute("name")}function Zr(i,r,o,u,f,m,E,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+_n(o):"",r=r!=null?""+_n(r):o,A||r===i.value||(i.value=r),i.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=A?i.checked:!!u,i.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(i.name=E)}function Gs(i,r,o){r==="number"&&Xr(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function Ji(i,r,o,u){if(i=i.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=r.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&u&&(i[o].defaultSelected=!0)}else{for(o=""+_n(o),r=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,u&&(i[f].defaultSelected=!0);return}r!==null||i[f].disabled||(r=i[f])}r!==null&&(r.selected=!0)}}function Je(i,r,o){if(r!=null&&(r=""+_n(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+_n(o):""}function Jr(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(ft(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=_n(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u)}function jn(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var ea=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kc(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||ea.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function Ll(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Kc(i,f,u)}else for(var m in r)r.hasOwnProperty(m)&&Kc(i,m,r[m])}function Vl(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$d=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function no(i){return $d.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var es=null;function Gn(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ts=null,ns=null;function Ul(i){var r=vi(i);if(r&&(i=r.stateNode)){var o=i[Ct]||null;e:switch(i=r.stateNode,r.type){case"input":if(On(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+It(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var f=u[Ct]||null;if(!f)throw Error(s(90));On(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&Pl(u)}break e;case"textarea":Je(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&Ji(i,!!o.multiple,r,!1)}}}var Si=!1;function Yc(i,r,o){if(Si)return i(r,o);Si=!0;try{var u=i(r);return u}finally{if(Si=!1,(ts!==null||ns!==null)&&(zh(),ts&&(r=ts,i=ns,ns=ts=null,Ul(r),i)))for(r=0;r<i.length;r++)Ul(i[r])}}function ta(i,r){var o=i.stateNode;if(o===null)return null;var u=o[Ct]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kn=!1;if(oi)try{var na={};Object.defineProperty(na,"passive",{get:function(){Kn=!0}}),window.addEventListener("test",na,na),window.removeEventListener("test",na,na)}catch{Kn=!1}var Ai=null,Ks=null,is=null;function Bl(){if(is)return is;var i,r=Ks,o=r.length,u,f="value"in Ai?Ai.value:Ai.textContent,m=f.length;for(i=0;i<o&&r[i]===f[i];i++);var E=o-i;for(u=1;u<=E&&r[o-u]===f[m-u];u++);return is=f.slice(i,1<u?1-u:void 0)}function wi(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Ri(){return!0}function zl(){return!1}function Ht(i){function r(o,u,f,m,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(o=i[A],this[A]=o?o(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ri:zl,this.isPropagationStopped=zl,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ri)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ri)},persist:function(){},isPersistent:Ri}),r}var Ye={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},io=Ht(Ye),ia=y({},Ye,{view:0,detail:0}),$c=Ht(ia),so,ro,bi,sa=y({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oa,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==bi&&(bi&&i.type==="mousemove"?(so=i.screenX-bi.screenX,ro=i.screenY-bi.screenY):ro=so=0,bi=i),so)},movementY:function(i){return"movementY"in i?i.movementY:ro}}),Yn=Ht(sa),Qc=y({},sa,{dataTransfer:0}),Qd=Ht(Qc),ra=y({},ia,{relatedTarget:0}),ao=Ht(ra),Fl=y({},Ye,{animationName:0,elapsedTime:0,pseudoElement:0}),oo=Ht(Fl),Wc=y({},Ye,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),lo=Ht(Wc),Wd=y({},Ye,{data:0}),Hl=Ht(Wd),aa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ql(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=Zc[i])?!!r[i]:!1}function oa(){return ql}var Jc=y({},ia,{key:function(i){if(i.key){var r=aa[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=wi(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Xc[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oa,charCode:function(i){return i.type==="keypress"?wi(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?wi(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),uo=Ht(Jc),eh=y({},sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jl=Ht(eh),ss=y({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oa}),th=Ht(ss),nh=y({},Ye,{propertyName:0,elapsedTime:0,pseudoElement:0}),ih=Ht(nh),sh=y({},sa,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),co=Ht(sh),yn=y({},Ye,{newState:0,oldState:0}),rh=Ht(yn),ah=[9,13,27,32],Ci=oi&&"CompositionEvent"in window,h=null;oi&&"documentMode"in document&&(h=document.documentMode);var _=oi&&"TextEvent"in window&&!h,v=oi&&(!Ci||h&&8<h&&11>=h),w=" ",B=!1;function G(i,r){switch(i){case"keyup":return ah.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function re(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ue=!1;function Mt(i,r){switch(i){case"compositionend":return re(r);case"keypress":return r.which!==32?null:(B=!0,w);case"textInput":return i=r.data,i===w&&B?null:i;default:return null}}function Be(i,r){if(Ue)return i==="compositionend"||!Ci&&G(i,r)?(i=Bl(),is=Ks=Ai=null,Ue=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var qt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pt(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!qt[i.type]:r==="textarea"}function rs(i,r,o,u){ts?ns?ns.push(u):ns=[u]:ts=u,r=Kh(r,"onChange"),0<r.length&&(o=new io("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var Xt=null,Ii=null;function Gl(i){_T(i,0)}function oh(i){var r=Ei(i);if(Pl(r))return i}function Uy(i,r){if(i==="change")return r}var By=!1;if(oi){var Xd;if(oi){var Zd="oninput"in document;if(!Zd){var zy=document.createElement("div");zy.setAttribute("oninput","return;"),Zd=typeof zy.oninput=="function"}Xd=Zd}else Xd=!1;By=Xd&&(!document.documentMode||9<document.documentMode)}function Fy(){Xt&&(Xt.detachEvent("onpropertychange",Hy),Ii=Xt=null)}function Hy(i){if(i.propertyName==="value"&&oh(Ii)){var r=[];rs(r,Ii,i,Gn(i)),Yc(Gl,r)}}function XC(i,r,o){i==="focusin"?(Fy(),Xt=r,Ii=o,Xt.attachEvent("onpropertychange",Hy)):i==="focusout"&&Fy()}function ZC(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return oh(Ii)}function JC(i,r){if(i==="click")return oh(r)}function eI(i,r){if(i==="input"||i==="change")return oh(r)}function tI(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Dn=typeof Object.is=="function"?Object.is:tI;function Kl(i,r){if(Dn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!zr.call(r,f)||!Dn(i[f],r[f]))return!1}return!0}function qy(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function jy(i,r){var o=qy(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=qy(o)}}function Gy(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?Gy(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function Ky(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=Xr(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=Xr(i.document)}return r}function Jd(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var nI=oi&&"documentMode"in document&&11>=document.documentMode,ho=null,ep=null,Yl=null,tp=!1;function Yy(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;tp||ho==null||ho!==Xr(u)||(u=ho,"selectionStart"in u&&Jd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Yl&&Kl(Yl,u)||(Yl=u,u=Kh(ep,"onSelect"),0<u.length&&(r=new io("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=ho)))}function la(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var fo={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionrun:la("Transition","TransitionRun"),transitionstart:la("Transition","TransitionStart"),transitioncancel:la("Transition","TransitionCancel"),transitionend:la("Transition","TransitionEnd")},np={},$y={};oi&&($y=document.createElement("div").style,"AnimationEvent"in window||(delete fo.animationend.animation,delete fo.animationiteration.animation,delete fo.animationstart.animation),"TransitionEvent"in window||delete fo.transitionend.transition);function ua(i){if(np[i])return np[i];if(!fo[i])return i;var r=fo[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in $y)return np[i]=r[o];return i}var Qy=ua("animationend"),Wy=ua("animationiteration"),Xy=ua("animationstart"),iI=ua("transitionrun"),sI=ua("transitionstart"),rI=ua("transitioncancel"),Zy=ua("transitionend"),Jy=new Map,ip="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ip.push("scrollEnd");function li(i,r){Jy.set(i,r),ai(r,[i])}var ev=new WeakMap;function $n(i,r){if(typeof i=="object"&&i!==null){var o=ev.get(i);return o!==void 0?o:(r={value:i,source:r,stack:eo(r)},ev.set(i,r),r)}return{value:i,source:r,stack:eo(r)}}var Qn=[],po=0,sp=0;function lh(){for(var i=po,r=sp=po=0;r<i;){var o=Qn[r];Qn[r++]=null;var u=Qn[r];Qn[r++]=null;var f=Qn[r];Qn[r++]=null;var m=Qn[r];if(Qn[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}m!==0&&tv(o,f,m)}}function uh(i,r,o,u){Qn[po++]=i,Qn[po++]=r,Qn[po++]=o,Qn[po++]=u,sp|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function rp(i,r,o,u){return uh(i,r,o,u),ch(i)}function mo(i,r){return uh(i,null,null,r),ch(i)}function tv(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=i.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(f=!0)),i=m,m=m.return;return i.tag===3?(m=i.stateNode,f&&r!==null&&(f=31-an(o),i=m.hiddenUpdates,u=i[f],u===null?i[f]=[r]:u.push(r),r.lane=o|536870912),m):null}function ch(i){if(50<yu)throw yu=0,hm=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var go={};function aI(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(i,r,o,u){return new aI(i,r,o,u)}function ap(i){return i=i.prototype,!(!i||!i.isReactComponent)}function as(i,r){var o=i.alternate;return o===null?(o=kn(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function nv(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function hh(i,r,o,u,f,m){var E=0;if(u=i,typeof i=="function")ap(i)&&(E=1);else if(typeof i=="string")E=l1(i,o,pe.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case b:return i=kn(31,o,r,f),i.elementType=b,i.lanes=m,i;case C:return ca(o.children,f,m,r);case z:E=8,f|=24;break;case L:return i=kn(12,o,r,f|2),i.elementType=L,i.lanes=m,i;case ce:return i=kn(13,o,r,f),i.elementType=ce,i.lanes=m,i;case ge:return i=kn(19,o,r,f),i.elementType=ge,i.lanes=m,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Y:case te:E=10;break e;case W:E=9;break e;case le:E=11;break e;case k:E=14;break e;case R:E=16,u=null;break e}E=29,o=Error(s(130,i===null?"null":typeof i,"")),u=null}return r=kn(E,o,r,f),r.elementType=i,r.type=u,r.lanes=m,r}function ca(i,r,o,u){return i=kn(7,i,u,r),i.lanes=o,i}function op(i,r,o){return i=kn(6,i,null,r),i.lanes=o,i}function lp(i,r,o){return r=kn(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var _o=[],yo=0,fh=null,dh=0,Wn=[],Xn=0,ha=null,os=1,ls="";function fa(i,r){_o[yo++]=dh,_o[yo++]=fh,fh=i,dh=r}function iv(i,r,o){Wn[Xn++]=os,Wn[Xn++]=ls,Wn[Xn++]=ha,ha=i;var u=os;i=ls;var f=32-an(u)-1;u&=~(1<<f),o+=1;var m=32-an(r)+f;if(30<m){var E=f-f%5;m=(u&(1<<E)-1).toString(32),u>>=E,f-=E,os=1<<32-an(r)+f|o<<f|u,ls=m+i}else os=1<<m|o<<f|u,ls=i}function up(i){i.return!==null&&(fa(i,1),iv(i,1,0))}function cp(i){for(;i===fh;)fh=_o[--yo],_o[yo]=null,dh=_o[--yo],_o[yo]=null;for(;i===ha;)ha=Wn[--Xn],Wn[Xn]=null,ls=Wn[--Xn],Wn[Xn]=null,os=Wn[--Xn],Wn[Xn]=null}var vn=null,Et=null,Ke=!1,da=null,Ni=!1,hp=Error(s(519));function pa(i){var r=Error(s(418,""));throw Wl($n(r,i)),hp}function sv(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[xt]=i,r[Ct]=u,o){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(o=0;o<Eu.length;o++)xe(Eu[o],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":xe("invalid",r),Zr(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),to(r);break;case"select":xe("invalid",r);break;case"textarea":xe("invalid",r),Jr(r,u.value,u.defaultValue,u.children),to(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||TT(r.textContent,o)?(u.popover!=null&&(xe("beforetoggle",r),xe("toggle",r)),u.onScroll!=null&&xe("scroll",r),u.onScrollEnd!=null&&xe("scrollend",r),u.onClick!=null&&(r.onclick=Yh),r=!0):r=!1,r||pa(i)}function rv(i){for(vn=i.return;vn;)switch(vn.tag){case 5:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:vn=vn.return}}function $l(i){if(i!==vn)return!1;if(!Ke)return rv(i),Ke=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||Cm(i.type,i.memoizedProps)),o=!o),o&&Et&&pa(i),rv(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){Et=ci(i.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}Et=null}}else r===27?(r=Et,lr(i.type)?(i=Dm,Dm=null,Et=i):Et=r):Et=vn?ci(i.stateNode.nextSibling):null;return!0}function Ql(){Et=vn=null,Ke=!1}function av(){var i=da;return i!==null&&(Rn===null?Rn=i:Rn.push.apply(Rn,i),da=null),i}function Wl(i){da===null?da=[i]:da.push(i)}var fp=Q(null),ma=null,us=null;function Ys(i,r,o){ie(fp,r._currentValue),r._currentValue=o}function cs(i){i._currentValue=fp.current,oe(fp)}function dp(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function pp(i,r,o,u){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=f;for(var N=0;N<r.length;N++)if(A.context===r[N]){m.lanes|=o,A=m.alternate,A!==null&&(A.lanes|=o),dp(m.return,o,i),u||(E=null);break e}m=A.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),dp(E,o,i),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===i){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Xl(i,r,o,u){i=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var A=f.type;Dn(f.pendingProps.value,E.value)||(i!==null?i.push(A):i=[A])}}else if(f===Ft.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(bu):i=[bu])}f=f.return}i!==null&&pp(r,i,o,u),r.flags|=262144}function ph(i){for(i=i.firstContext;i!==null;){if(!Dn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function ga(i){ma=i,us=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function on(i){return ov(ma,i)}function mh(i,r){return ma===null&&ga(i),ov(i,r)}function ov(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},us===null){if(i===null)throw Error(s(308));us=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else us=us.next=r;return o}var oI=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},lI=n.unstable_scheduleCallback,uI=n.unstable_NormalPriority,Lt={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mp(){return{controller:new oI,data:new Map,refCount:0}}function Zl(i){i.refCount--,i.refCount===0&&lI(uI,function(){i.controller.abort()})}var Jl=null,gp=0,vo=0,Eo=null;function cI(i,r){if(Jl===null){var o=Jl=[];gp=0,vo=ym(),Eo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return gp++,r.then(lv,lv),r}function lv(){if(--gp===0&&Jl!==null){Eo!==null&&(Eo.status="fulfilled");var i=Jl;Jl=null,vo=0,Eo=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function hI(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var uv=$.S;$.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&cI(i,r),uv!==null&&uv(i,r)};var _a=Q(null);function _p(){var i=_a.current;return i!==null?i:at.pooledCache}function gh(i,r){r===null?ie(_a,_a.current):ie(_a,r.pool)}function cv(){var i=_p();return i===null?null:{parent:Lt._currentValue,pool:i}}var eu=Error(s(460)),hv=Error(s(474)),_h=Error(s(542)),yp={then:function(){}};function fv(i){return i=i.status,i==="fulfilled"||i==="rejected"}function yh(){}function dv(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(yh,yh),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,mv(i),i;default:if(typeof r.status=="string")r.then(yh,yh);else{if(i=at,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,mv(i),i}throw tu=r,eu}}var tu=null;function pv(){if(tu===null)throw Error(s(459));var i=tu;return tu=null,i}function mv(i){if(i===eu||i===_h)throw Error(s(483))}var $s=!1;function vp(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ep(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Qs(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Ws(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(Xe&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=ch(i),tv(i,null,o),r}return uh(i,u,r,o),ch(i)}function nu(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Ol(i,o)}}function Tp(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=r:m=m.next=r}else f=m=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var Sp=!1;function iu(){if(Sp){var i=Eo;if(i!==null)throw i}}function su(i,r,o,u){Sp=!1;var f=i.updateQueue;$s=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var N=A,H=N.next;N.next=null,E===null?m=H:E.next=H,E=N;var X=i.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==E&&(A===null?X.firstBaseUpdate=H:A.next=H,X.lastBaseUpdate=N))}if(m!==null){var J=f.baseState;E=0,X=H=N=null,A=m;do{var q=A.lane&-536870913,j=q!==A.lane;if(j?(ze&q)===q:(u&q)===q){q!==0&&q===vo&&(Sp=!0),X!==null&&(X=X.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Se=i,ye=A;q=r;var nt=o;switch(ye.tag){case 1:if(Se=ye.payload,typeof Se=="function"){J=Se.call(nt,J,q);break e}J=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=ye.payload,q=typeof Se=="function"?Se.call(nt,J,q):Se,q==null)break e;J=y({},J,q);break e;case 2:$s=!0}}q=A.callback,q!==null&&(i.flags|=64,j&&(i.flags|=8192),j=f.callbacks,j===null?f.callbacks=[q]:j.push(q))}else j={lane:q,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?(H=X=j,N=J):X=X.next=j,E|=q;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;j=A,A=j.next,j.next=null,f.lastBaseUpdate=j,f.shared.pending=null}}while(!0);X===null&&(N=J),f.baseState=N,f.firstBaseUpdate=H,f.lastBaseUpdate=X,m===null&&(f.shared.lanes=0),sr|=E,i.lanes=E,i.memoizedState=J}}function gv(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function _v(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)gv(o[i],r)}var To=Q(null),vh=Q(0);function yv(i,r){i=_s,ie(vh,i),ie(To,r),_s=i|r.baseLanes}function Ap(){ie(vh,_s),ie(To,To.current)}function wp(){_s=vh.current,oe(To),oe(vh)}var Xs=0,Ie=null,et=null,Nt=null,Eh=!1,So=!1,ya=!1,Th=0,ru=0,Ao=null,fI=0;function wt(){throw Error(s(321))}function Rp(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!Dn(i[o],r[o]))return!1;return!0}function bp(i,r,o,u,f,m){return Xs=m,Ie=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,$.H=i===null||i.memoizedState===null?tE:nE,ya=!1,m=o(u,f),ya=!1,So&&(m=Ev(r,o,u,f)),vv(i),m}function vv(i){$.H=Ch;var r=et!==null&&et.next!==null;if(Xs=0,Nt=et=Ie=null,Eh=!1,ru=0,Ao=null,r)throw Error(s(300));i===null||jt||(i=i.dependencies,i!==null&&ph(i)&&(jt=!0))}function Ev(i,r,o,u){Ie=i;var f=0;do{if(So&&(Ao=null),ru=0,So=!1,25<=f)throw Error(s(301));if(f+=1,Nt=et=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}$.H=vI,m=r(o,u)}while(So);return m}function dI(){var i=$.H,r=i.useState()[0];return r=typeof r.then=="function"?au(r):r,i=i.useState()[0],(et!==null?et.memoizedState:null)!==i&&(Ie.flags|=1024),r}function Cp(){var i=Th!==0;return Th=0,i}function Ip(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function Np(i){if(Eh){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Eh=!1}Xs=0,Nt=et=Ie=null,So=!1,ru=Th=0,Ao=null}function An(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?Ie.memoizedState=Nt=i:Nt=Nt.next=i,Nt}function Ot(){if(et===null){var i=Ie.alternate;i=i!==null?i.memoizedState:null}else i=et.next;var r=Nt===null?Ie.memoizedState:Nt.next;if(r!==null)Nt=r,et=i;else{if(i===null)throw Ie.alternate===null?Error(s(467)):Error(s(310));et=i,i={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},Nt===null?Ie.memoizedState=Nt=i:Nt=Nt.next=i}return Nt}function Op(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function au(i){var r=ru;return ru+=1,Ao===null&&(Ao=[]),i=dv(Ao,i,r),r=Ie,(Nt===null?r.memoizedState:Nt.next)===null&&(r=r.alternate,$.H=r===null||r.memoizedState===null?tE:nE),i}function Sh(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return au(i);if(i.$$typeof===te)return on(i)}throw Error(s(438,String(i)))}function Dp(i){var r=null,o=Ie.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Ie.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Op(),Ie.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=x;return r.index++,o}function hs(i,r){return typeof r=="function"?r(i):r}function Ah(i){var r=Ot();return kp(r,et,i)}function kp(i,r,o){var u=i.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=i.baseQueue,m=u.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}r.baseQueue=f=m,u.pending=null}if(m=i.baseState,f===null)i.memoizedState=m;else{r=f.next;var A=E=null,N=null,H=r,X=!1;do{var J=H.lane&-536870913;if(J!==H.lane?(ze&J)===J:(Xs&J)===J){var q=H.revertLane;if(q===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),J===vo&&(X=!0);else if((Xs&q)===q){H=H.next,q===vo&&(X=!0);continue}else J={lane:0,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},N===null?(A=N=J,E=m):N=N.next=J,Ie.lanes|=q,sr|=q;J=H.action,ya&&o(m,J),m=H.hasEagerState?H.eagerState:o(m,J)}else q={lane:J,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},N===null?(A=N=q,E=m):N=N.next=q,Ie.lanes|=J,sr|=J;H=H.next}while(H!==null&&H!==r);if(N===null?E=m:N.next=A,!Dn(m,i.memoizedState)&&(jt=!0,X&&(o=Eo,o!==null)))throw o;i.memoizedState=m,i.baseState=E,i.baseQueue=N,u.lastRenderedState=m}return f===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function xp(i){var r=Ot(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var u=o.dispatch,f=o.pending,m=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=i(m,E.action),E=E.next;while(E!==f);Dn(m,r.memoizedState)||(jt=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function Tv(i,r,o){var u=Ie,f=Ot(),m=Ke;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!Dn((et||f).memoizedState,o);E&&(f.memoizedState=o,jt=!0),f=f.queue;var A=wv.bind(null,u,f,i);if(ou(2048,8,A,[i]),f.getSnapshot!==r||E||Nt!==null&&Nt.memoizedState.tag&1){if(u.flags|=2048,wo(9,wh(),Av.bind(null,u,f,o,r),null),at===null)throw Error(s(349));m||(Xs&124)!==0||Sv(u,r,o)}return o}function Sv(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=Ie.updateQueue,r===null?(r=Op(),Ie.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function Av(i,r,o,u){r.value=o,r.getSnapshot=u,Rv(r)&&bv(i)}function wv(i,r,o){return o(function(){Rv(r)&&bv(i)})}function Rv(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!Dn(i,o)}catch{return!0}}function bv(i){var r=mo(i,2);r!==null&&Vn(r,i,2)}function Mp(i){var r=An();if(typeof i=="function"){var o=i;if(i=o(),ya){Nn(!0);try{o()}finally{Nn(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:i},r}function Cv(i,r,o,u){return i.baseState=o,kp(i,et,typeof u=="function"?u:hs)}function pI(i,r,o,u,f){if(bh(i))throw Error(s(485));if(i=r.action,i!==null){var m={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};$.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,Iv(r,m)):(m.next=o.next,r.pending=o.next=m)}}function Iv(i,r){var o=r.action,u=r.payload,f=i.state;if(r.isTransition){var m=$.T,E={};$.T=E;try{var A=o(f,u),N=$.S;N!==null&&N(E,A),Nv(i,r,A)}catch(H){Pp(i,r,H)}finally{$.T=m}}else try{m=o(f,u),Nv(i,r,m)}catch(H){Pp(i,r,H)}}function Nv(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Ov(i,r,u)},function(u){return Pp(i,r,u)}):Ov(i,r,o)}function Ov(i,r,o){r.status="fulfilled",r.value=o,Dv(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,Iv(i,o)))}function Pp(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Dv(r),r=r.next;while(r!==u)}i.action=null}function Dv(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function kv(i,r){return r}function xv(i,r){if(Ke){var o=at.formState;if(o!==null){e:{var u=Ie;if(Ke){if(Et){t:{for(var f=Et,m=Ni;f.nodeType!==8;){if(!m){f=null;break t}if(f=ci(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Et=ci(f.nextSibling),u=f.data==="F!";break e}}pa(u)}u=!1}u&&(r=o[0])}}return o=An(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kv,lastRenderedState:r},o.queue=u,o=Zv.bind(null,Ie,u),u.dispatch=o,u=Mp(!1),m=zp.bind(null,Ie,!1,u.queue),u=An(),f={state:r,dispatch:null,action:i,pending:null},u.queue=f,o=pI.bind(null,Ie,f,m,o),f.dispatch=o,u.memoizedState=i,[r,o,!1]}function Mv(i){var r=Ot();return Pv(r,et,i)}function Pv(i,r,o){if(r=kp(i,r,kv)[0],i=Ah(hs)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=au(r)}catch(E){throw E===eu?_h:E}else u=r;r=Ot();var f=r.queue,m=f.dispatch;return o!==r.memoizedState&&(Ie.flags|=2048,wo(9,wh(),mI.bind(null,f,o),null)),[u,m,i]}function mI(i,r){i.action=r}function Lv(i){var r=Ot(),o=et;if(o!==null)return Pv(r,o,i);Ot(),r=r.memoizedState,o=Ot();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function wo(i,r,o,u){return i={tag:i,create:o,deps:u,inst:r,next:null},r=Ie.updateQueue,r===null&&(r=Op(),Ie.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function wh(){return{destroy:void 0,resource:void 0}}function Vv(){return Ot().memoizedState}function Rh(i,r,o,u){var f=An();u=u===void 0?null:u,Ie.flags|=i,f.memoizedState=wo(1|r,wh(),o,u)}function ou(i,r,o,u){var f=Ot();u=u===void 0?null:u;var m=f.memoizedState.inst;et!==null&&u!==null&&Rp(u,et.memoizedState.deps)?f.memoizedState=wo(r,m,o,u):(Ie.flags|=i,f.memoizedState=wo(1|r,m,o,u))}function Uv(i,r){Rh(8390656,8,i,r)}function Bv(i,r){ou(2048,8,i,r)}function zv(i,r){return ou(4,2,i,r)}function Fv(i,r){return ou(4,4,i,r)}function Hv(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function qv(i,r,o){o=o!=null?o.concat([i]):null,ou(4,4,Hv.bind(null,r,i),o)}function Lp(){}function jv(i,r){var o=Ot();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Rp(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function Gv(i,r){var o=Ot();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Rp(r,u[1]))return u[0];if(u=i(),ya){Nn(!0);try{i()}finally{Nn(!1)}}return o.memoizedState=[u,r],u}function Vp(i,r,o){return o===void 0||(Xs&1073741824)!==0?i.memoizedState=r:(i.memoizedState=o,i=$E(),Ie.lanes|=i,sr|=i,o)}function Kv(i,r,o,u){return Dn(o,r)?o:To.current!==null?(i=Vp(i,o,u),Dn(i,r)||(jt=!0),i):(Xs&42)===0?(jt=!0,i.memoizedState=o):(i=$E(),Ie.lanes|=i,sr|=i,r)}function Yv(i,r,o,u,f){var m=ae.p;ae.p=m!==0&&8>m?m:8;var E=$.T,A={};$.T=A,zp(i,!1,r,o);try{var N=f(),H=$.S;if(H!==null&&H(A,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var X=hI(N,u);lu(i,r,X,Ln(i))}else lu(i,r,u,Ln(i))}catch(J){lu(i,r,{then:function(){},status:"rejected",reason:J},Ln())}finally{ae.p=m,$.T=E}}function gI(){}function Up(i,r,o,u){if(i.tag!==5)throw Error(s(476));var f=$v(i).queue;Yv(i,f,r,de,o===null?gI:function(){return Qv(i),o(u)})}function $v(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:de},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function Qv(i){var r=$v(i).next.queue;lu(i,r,{},Ln())}function Bp(){return on(bu)}function Wv(){return Ot().memoizedState}function Xv(){return Ot().memoizedState}function _I(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=Ln();i=Qs(o);var u=Ws(r,i,o);u!==null&&(Vn(u,r,o),nu(u,r,o)),r={cache:mp()},i.payload=r;return}r=r.return}}function yI(i,r,o){var u=Ln();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},bh(i)?Jv(r,o):(o=rp(i,r,o,u),o!==null&&(Vn(o,i,u),eE(o,r,u)))}function Zv(i,r,o){var u=Ln();lu(i,r,o,u)}function lu(i,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(bh(i))Jv(r,f);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,A=m(E,o);if(f.hasEagerState=!0,f.eagerState=A,Dn(A,E))return uh(i,r,f,0),at===null&&lh(),!1}catch{}finally{}if(o=rp(i,r,f,u),o!==null)return Vn(o,i,u),eE(o,r,u),!0}return!1}function zp(i,r,o,u){if(u={lane:2,revertLane:ym(),action:u,hasEagerState:!1,eagerState:null,next:null},bh(i)){if(r)throw Error(s(479))}else r=rp(i,o,u,2),r!==null&&Vn(r,i,2)}function bh(i){var r=i.alternate;return i===Ie||r!==null&&r===Ie}function Jv(i,r){So=Eh=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function eE(i,r,o){if((o&4194048)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Ol(i,o)}}var Ch={readContext:on,use:Sh,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useLayoutEffect:wt,useInsertionEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useSyncExternalStore:wt,useId:wt,useHostTransitionStatus:wt,useFormState:wt,useActionState:wt,useOptimistic:wt,useMemoCache:wt,useCacheRefresh:wt},tE={readContext:on,use:Sh,useCallback:function(i,r){return An().memoizedState=[i,r===void 0?null:r],i},useContext:on,useEffect:Uv,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,Rh(4194308,4,Hv.bind(null,r,i),o)},useLayoutEffect:function(i,r){return Rh(4194308,4,i,r)},useInsertionEffect:function(i,r){Rh(4,2,i,r)},useMemo:function(i,r){var o=An();r=r===void 0?null:r;var u=i();if(ya){Nn(!0);try{i()}finally{Nn(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=An();if(o!==void 0){var f=o(r);if(ya){Nn(!0);try{o(r)}finally{Nn(!1)}}}else f=r;return u.memoizedState=u.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},u.queue=i,i=i.dispatch=yI.bind(null,Ie,i),[u.memoizedState,i]},useRef:function(i){var r=An();return i={current:i},r.memoizedState=i},useState:function(i){i=Mp(i);var r=i.queue,o=Zv.bind(null,Ie,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:Lp,useDeferredValue:function(i,r){var o=An();return Vp(o,i,r)},useTransition:function(){var i=Mp(!1);return i=Yv.bind(null,Ie,i.queue,!0,!1),An().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=Ie,f=An();if(Ke){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),at===null)throw Error(s(349));(ze&124)!==0||Sv(u,r,o)}f.memoizedState=o;var m={value:o,getSnapshot:r};return f.queue=m,Uv(wv.bind(null,u,m,i),[i]),u.flags|=2048,wo(9,wh(),Av.bind(null,u,m,o,r),null),o},useId:function(){var i=An(),r=at.identifierPrefix;if(Ke){var o=ls,u=os;o=(u&~(1<<32-an(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=Th++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=fI++,r="«"+r+"r"+o.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:Bp,useFormState:xv,useActionState:xv,useOptimistic:function(i){var r=An();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=zp.bind(null,Ie,!0,o),o.dispatch=r,[i,r]},useMemoCache:Dp,useCacheRefresh:function(){return An().memoizedState=_I.bind(null,Ie)}},nE={readContext:on,use:Sh,useCallback:jv,useContext:on,useEffect:Bv,useImperativeHandle:qv,useInsertionEffect:zv,useLayoutEffect:Fv,useMemo:Gv,useReducer:Ah,useRef:Vv,useState:function(){return Ah(hs)},useDebugValue:Lp,useDeferredValue:function(i,r){var o=Ot();return Kv(o,et.memoizedState,i,r)},useTransition:function(){var i=Ah(hs)[0],r=Ot().memoizedState;return[typeof i=="boolean"?i:au(i),r]},useSyncExternalStore:Tv,useId:Wv,useHostTransitionStatus:Bp,useFormState:Mv,useActionState:Mv,useOptimistic:function(i,r){var o=Ot();return Cv(o,et,i,r)},useMemoCache:Dp,useCacheRefresh:Xv},vI={readContext:on,use:Sh,useCallback:jv,useContext:on,useEffect:Bv,useImperativeHandle:qv,useInsertionEffect:zv,useLayoutEffect:Fv,useMemo:Gv,useReducer:xp,useRef:Vv,useState:function(){return xp(hs)},useDebugValue:Lp,useDeferredValue:function(i,r){var o=Ot();return et===null?Vp(o,i,r):Kv(o,et.memoizedState,i,r)},useTransition:function(){var i=xp(hs)[0],r=Ot().memoizedState;return[typeof i=="boolean"?i:au(i),r]},useSyncExternalStore:Tv,useId:Wv,useHostTransitionStatus:Bp,useFormState:Lv,useActionState:Lv,useOptimistic:function(i,r){var o=Ot();return et!==null?Cv(o,et,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:Dp,useCacheRefresh:Xv},Ro=null,uu=0;function Ih(i){var r=uu;return uu+=1,Ro===null&&(Ro=[]),dv(Ro,i,r)}function cu(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function Nh(i,r){throw r.$$typeof===T?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function iE(i){var r=i._init;return r(i._payload)}function sE(i){function r(V,M){if(i){var F=V.deletions;F===null?(V.deletions=[M],V.flags|=16):F.push(M)}}function o(V,M){if(!i)return null;for(;M!==null;)r(V,M),M=M.sibling;return null}function u(V){for(var M=new Map;V!==null;)V.key!==null?M.set(V.key,V):M.set(V.index,V),V=V.sibling;return M}function f(V,M){return V=as(V,M),V.index=0,V.sibling=null,V}function m(V,M,F){return V.index=F,i?(F=V.alternate,F!==null?(F=F.index,F<M?(V.flags|=67108866,M):F):(V.flags|=67108866,M)):(V.flags|=1048576,M)}function E(V){return i&&V.alternate===null&&(V.flags|=67108866),V}function A(V,M,F,Z){return M===null||M.tag!==6?(M=op(F,V.mode,Z),M.return=V,M):(M=f(M,F),M.return=V,M)}function N(V,M,F,Z){var fe=F.type;return fe===C?X(V,M,F.props.children,Z,F.key):M!==null&&(M.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===R&&iE(fe)===M.type)?(M=f(M,F.props),cu(M,F),M.return=V,M):(M=hh(F.type,F.key,F.props,null,V.mode,Z),cu(M,F),M.return=V,M)}function H(V,M,F,Z){return M===null||M.tag!==4||M.stateNode.containerInfo!==F.containerInfo||M.stateNode.implementation!==F.implementation?(M=lp(F,V.mode,Z),M.return=V,M):(M=f(M,F.children||[]),M.return=V,M)}function X(V,M,F,Z,fe){return M===null||M.tag!==7?(M=ca(F,V.mode,Z,fe),M.return=V,M):(M=f(M,F),M.return=V,M)}function J(V,M,F){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=op(""+M,V.mode,F),M.return=V,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case S:return F=hh(M.type,M.key,M.props,null,V.mode,F),cu(F,M),F.return=V,F;case I:return M=lp(M,V.mode,F),M.return=V,M;case R:var Z=M._init;return M=Z(M._payload),J(V,M,F)}if(ft(M)||U(M))return M=ca(M,V.mode,F,null),M.return=V,M;if(typeof M.then=="function")return J(V,Ih(M),F);if(M.$$typeof===te)return J(V,mh(V,M),F);Nh(V,M)}return null}function q(V,M,F,Z){var fe=M!==null?M.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return fe!==null?null:A(V,M,""+F,Z);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case S:return F.key===fe?N(V,M,F,Z):null;case I:return F.key===fe?H(V,M,F,Z):null;case R:return fe=F._init,F=fe(F._payload),q(V,M,F,Z)}if(ft(F)||U(F))return fe!==null?null:X(V,M,F,Z,null);if(typeof F.then=="function")return q(V,M,Ih(F),Z);if(F.$$typeof===te)return q(V,M,mh(V,F),Z);Nh(V,F)}return null}function j(V,M,F,Z,fe){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return V=V.get(F)||null,A(M,V,""+Z,fe);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case S:return V=V.get(Z.key===null?F:Z.key)||null,N(M,V,Z,fe);case I:return V=V.get(Z.key===null?F:Z.key)||null,H(M,V,Z,fe);case R:var De=Z._init;return Z=De(Z._payload),j(V,M,F,Z,fe)}if(ft(Z)||U(Z))return V=V.get(F)||null,X(M,V,Z,fe,null);if(typeof Z.then=="function")return j(V,M,F,Ih(Z),fe);if(Z.$$typeof===te)return j(V,M,F,mh(M,Z),fe);Nh(M,Z)}return null}function Se(V,M,F,Z){for(var fe=null,De=null,me=M,Ee=M=0,Kt=null;me!==null&&Ee<F.length;Ee++){me.index>Ee?(Kt=me,me=null):Kt=me.sibling;var Ge=q(V,me,F[Ee],Z);if(Ge===null){me===null&&(me=Kt);break}i&&me&&Ge.alternate===null&&r(V,me),M=m(Ge,M,Ee),De===null?fe=Ge:De.sibling=Ge,De=Ge,me=Kt}if(Ee===F.length)return o(V,me),Ke&&fa(V,Ee),fe;if(me===null){for(;Ee<F.length;Ee++)me=J(V,F[Ee],Z),me!==null&&(M=m(me,M,Ee),De===null?fe=me:De.sibling=me,De=me);return Ke&&fa(V,Ee),fe}for(me=u(me);Ee<F.length;Ee++)Kt=j(me,V,Ee,F[Ee],Z),Kt!==null&&(i&&Kt.alternate!==null&&me.delete(Kt.key===null?Ee:Kt.key),M=m(Kt,M,Ee),De===null?fe=Kt:De.sibling=Kt,De=Kt);return i&&me.forEach(function(dr){return r(V,dr)}),Ke&&fa(V,Ee),fe}function ye(V,M,F,Z){if(F==null)throw Error(s(151));for(var fe=null,De=null,me=M,Ee=M=0,Kt=null,Ge=F.next();me!==null&&!Ge.done;Ee++,Ge=F.next()){me.index>Ee?(Kt=me,me=null):Kt=me.sibling;var dr=q(V,me,Ge.value,Z);if(dr===null){me===null&&(me=Kt);break}i&&me&&dr.alternate===null&&r(V,me),M=m(dr,M,Ee),De===null?fe=dr:De.sibling=dr,De=dr,me=Kt}if(Ge.done)return o(V,me),Ke&&fa(V,Ee),fe;if(me===null){for(;!Ge.done;Ee++,Ge=F.next())Ge=J(V,Ge.value,Z),Ge!==null&&(M=m(Ge,M,Ee),De===null?fe=Ge:De.sibling=Ge,De=Ge);return Ke&&fa(V,Ee),fe}for(me=u(me);!Ge.done;Ee++,Ge=F.next())Ge=j(me,V,Ee,Ge.value,Z),Ge!==null&&(i&&Ge.alternate!==null&&me.delete(Ge.key===null?Ee:Ge.key),M=m(Ge,M,Ee),De===null?fe=Ge:De.sibling=Ge,De=Ge);return i&&me.forEach(function(E1){return r(V,E1)}),Ke&&fa(V,Ee),fe}function nt(V,M,F,Z){if(typeof F=="object"&&F!==null&&F.type===C&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case S:e:{for(var fe=F.key;M!==null;){if(M.key===fe){if(fe=F.type,fe===C){if(M.tag===7){o(V,M.sibling),Z=f(M,F.props.children),Z.return=V,V=Z;break e}}else if(M.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===R&&iE(fe)===M.type){o(V,M.sibling),Z=f(M,F.props),cu(Z,F),Z.return=V,V=Z;break e}o(V,M);break}else r(V,M);M=M.sibling}F.type===C?(Z=ca(F.props.children,V.mode,Z,F.key),Z.return=V,V=Z):(Z=hh(F.type,F.key,F.props,null,V.mode,Z),cu(Z,F),Z.return=V,V=Z)}return E(V);case I:e:{for(fe=F.key;M!==null;){if(M.key===fe)if(M.tag===4&&M.stateNode.containerInfo===F.containerInfo&&M.stateNode.implementation===F.implementation){o(V,M.sibling),Z=f(M,F.children||[]),Z.return=V,V=Z;break e}else{o(V,M);break}else r(V,M);M=M.sibling}Z=lp(F,V.mode,Z),Z.return=V,V=Z}return E(V);case R:return fe=F._init,F=fe(F._payload),nt(V,M,F,Z)}if(ft(F))return Se(V,M,F,Z);if(U(F)){if(fe=U(F),typeof fe!="function")throw Error(s(150));return F=fe.call(F),ye(V,M,F,Z)}if(typeof F.then=="function")return nt(V,M,Ih(F),Z);if(F.$$typeof===te)return nt(V,M,mh(V,F),Z);Nh(V,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,M!==null&&M.tag===6?(o(V,M.sibling),Z=f(M,F),Z.return=V,V=Z):(o(V,M),Z=op(F,V.mode,Z),Z.return=V,V=Z),E(V)):o(V,M)}return function(V,M,F,Z){try{uu=0;var fe=nt(V,M,F,Z);return Ro=null,fe}catch(me){if(me===eu||me===_h)throw me;var De=kn(29,me,null,V.mode);return De.lanes=Z,De.return=V,De}finally{}}}var bo=sE(!0),rE=sE(!1),Zn=Q(null),Oi=null;function Zs(i){var r=i.alternate;ie(Vt,Vt.current&1),ie(Zn,i),Oi===null&&(r===null||To.current!==null||r.memoizedState!==null)&&(Oi=i)}function aE(i){if(i.tag===22){if(ie(Vt,Vt.current),ie(Zn,i),Oi===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(Oi=i)}}else Js()}function Js(){ie(Vt,Vt.current),ie(Zn,Zn.current)}function fs(i){oe(Zn),Oi===i&&(Oi=null),oe(Vt)}var Vt=Q(0);function Oh(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Om(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Fp(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:y({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var Hp={enqueueSetState:function(i,r,o){i=i._reactInternals;var u=Ln(),f=Qs(u);f.payload=r,o!=null&&(f.callback=o),r=Ws(i,f,u),r!==null&&(Vn(r,i,u),nu(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=Ln(),f=Qs(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=Ws(i,f,u),r!==null&&(Vn(r,i,u),nu(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=Ln(),u=Qs(o);u.tag=2,r!=null&&(u.callback=r),r=Ws(i,u,o),r!==null&&(Vn(r,i,o),nu(r,i,o))}};function oE(i,r,o,u,f,m,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!Kl(o,u)||!Kl(f,m):!0}function lE(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&Hp.enqueueReplaceState(r,r.state,null)}function va(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=y({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var Dh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function uE(i){Dh(i)}function cE(i){console.error(i)}function hE(i){Dh(i)}function kh(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function fE(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function qp(i,r,o){return o=Qs(o),o.tag=3,o.payload={element:null},o.callback=function(){kh(i,r)},o}function dE(i){return i=Qs(i),i.tag=3,i}function pE(i,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;i.payload=function(){return f(m)},i.callback=function(){fE(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(i.callback=function(){fE(r,o,u),typeof f!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var A=u.stack;this.componentDidCatch(u.value,{componentStack:A!==null?A:""})})}function EI(i,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&Xl(r,o,f,!0),o=Zn.current,o!==null){switch(o.tag){case 13:return Oi===null?dm():o.alternate===null&&Tt===0&&(Tt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===yp?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),mm(i,u,f)),!1;case 22:return o.flags|=65536,u===yp?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),mm(i,u,f)),!1}throw Error(s(435,o.tag))}return mm(i,u,f),dm(),!1}if(Ke)return r=Zn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==hp&&(i=Error(s(422),{cause:u}),Wl($n(i,o)))):(u!==hp&&(r=Error(s(423),{cause:u}),Wl($n(r,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,u=$n(u,o),f=qp(i.stateNode,u,f),Tp(i,f),Tt!==4&&(Tt=2)),!1;var m=Error(s(520),{cause:u});if(m=$n(m,o),_u===null?_u=[m]:_u.push(m),Tt!==4&&(Tt=2),r===null)return!0;u=$n(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=qp(o.stateNode,u,i),Tp(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(rr===null||!rr.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=dE(f),pE(f,i,o,u),Tp(o,f),!1}o=o.return}while(o!==null);return!1}var mE=Error(s(461)),jt=!1;function Zt(i,r,o,u){r.child=i===null?rE(r,null,o,u):bo(r,i.child,o,u)}function gE(i,r,o,u,f){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var A in u)A!=="ref"&&(E[A]=u[A])}else E=u;return ga(r),u=bp(i,r,o,E,m,f),A=Cp(),i!==null&&!jt?(Ip(i,r,f),ds(i,r,f)):(Ke&&A&&up(r),r.flags|=1,Zt(i,r,u,f),r.child)}function _E(i,r,o,u,f){if(i===null){var m=o.type;return typeof m=="function"&&!ap(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,yE(i,r,m,u,f)):(i=hh(o.type,null,u,r,r.mode,f),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!Xp(i,f)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:Kl,o(E,u)&&i.ref===r.ref)return ds(i,r,f)}return r.flags|=1,i=as(m,u),i.ref=r.ref,i.return=r,r.child=i}function yE(i,r,o,u,f){if(i!==null){var m=i.memoizedProps;if(Kl(m,u)&&i.ref===r.ref)if(jt=!1,r.pendingProps=u=m,Xp(i,f))(i.flags&131072)!==0&&(jt=!0);else return r.lanes=i.lanes,ds(i,r,f)}return jp(i,r,o,u,f)}function vE(i,r,o){var u=r.pendingProps,f=u.children,m=i!==null?i.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,i!==null){for(f=r.child=i.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return EE(i,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&gh(r,m!==null?m.cachePool:null),m!==null?yv(r,m):Ap(),aE(r);else return r.lanes=r.childLanes=536870912,EE(i,r,m!==null?m.baseLanes|o:o,o)}else m!==null?(gh(r,m.cachePool),yv(r,m),Js(),r.memoizedState=null):(i!==null&&gh(r,null),Ap(),Js());return Zt(i,r,f,o),r.child}function EE(i,r,o,u){var f=_p();return f=f===null?null:{parent:Lt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},i!==null&&gh(r,null),Ap(),aE(r),i!==null&&Xl(i,r,u,!0),null}function xh(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function jp(i,r,o,u,f){return ga(r),o=bp(i,r,o,u,void 0,f),u=Cp(),i!==null&&!jt?(Ip(i,r,f),ds(i,r,f)):(Ke&&u&&up(r),r.flags|=1,Zt(i,r,o,f),r.child)}function TE(i,r,o,u,f,m){return ga(r),r.updateQueue=null,o=Ev(r,u,o,f),vv(i),u=Cp(),i!==null&&!jt?(Ip(i,r,m),ds(i,r,m)):(Ke&&u&&up(r),r.flags|=1,Zt(i,r,o,m),r.child)}function SE(i,r,o,u,f){if(ga(r),r.stateNode===null){var m=go,E=o.contextType;typeof E=="object"&&E!==null&&(m=on(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Hp,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},vp(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?on(E):go,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Fp(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Hp.enqueueReplaceState(m,m.state,null),su(r,u,m,f),iu(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){m=r.stateNode;var A=r.memoizedProps,N=va(o,A);m.props=N;var H=m.context,X=o.contextType;E=go,typeof X=="object"&&X!==null&&(E=on(X));var J=o.getDerivedStateFromProps;X=typeof J=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=r.pendingProps!==A,X||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||H!==E)&&lE(r,m,u,E),$s=!1;var q=r.memoizedState;m.state=q,su(r,u,m,f),iu(),H=r.memoizedState,A||q!==H||$s?(typeof J=="function"&&(Fp(r,o,J,u),H=r.memoizedState),(N=$s||oE(r,o,N,u,q,H,E))?(X||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=H),m.props=u,m.state=H,m.context=E,u=N):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,Ep(i,r),E=r.memoizedProps,X=va(o,E),m.props=X,J=r.pendingProps,q=m.context,H=o.contextType,N=go,typeof H=="object"&&H!==null&&(N=on(H)),A=o.getDerivedStateFromProps,(H=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==J||q!==N)&&lE(r,m,u,N),$s=!1,q=r.memoizedState,m.state=q,su(r,u,m,f),iu();var j=r.memoizedState;E!==J||q!==j||$s||i!==null&&i.dependencies!==null&&ph(i.dependencies)?(typeof A=="function"&&(Fp(r,o,A,u),j=r.memoizedState),(X=$s||oE(r,o,X,u,q,j,N)||i!==null&&i.dependencies!==null&&ph(i.dependencies))?(H||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,j,N),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,j,N)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&q===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&q===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=j),m.props=u,m.state=j,m.context=N,u=X):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&q===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&q===i.memoizedState||(r.flags|=1024),u=!1)}return m=u,xh(i,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&u?(r.child=bo(r,i.child,null,f),r.child=bo(r,null,o,f)):Zt(i,r,o,f),r.memoizedState=m.state,i=r.child):i=ds(i,r,f),i}function AE(i,r,o,u){return Ql(),r.flags|=256,Zt(i,r,o,u),r.child}var Gp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kp(i){return{baseLanes:i,cachePool:cv()}}function Yp(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=Jn),i}function wE(i,r,o){var u=r.pendingProps,f=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=i!==null&&i.memoizedState===null?!1:(Vt.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,i===null){if(Ke){if(f?Zs(r):Js(),Ke){var A=Et,N;if(N=A){e:{for(N=A,A=Ni;N.nodeType!==8;){if(!A){A=null;break e}if(N=ci(N.nextSibling),N===null){A=null;break e}}A=N}A!==null?(r.memoizedState={dehydrated:A,treeContext:ha!==null?{id:os,overflow:ls}:null,retryLane:536870912,hydrationErrors:null},N=kn(18,null,null,0),N.stateNode=A,N.return=r,r.child=N,vn=r,Et=null,N=!0):N=!1}N||pa(r)}if(A=r.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Om(A)?r.lanes=32:r.lanes=536870912,null;fs(r)}return A=u.children,u=u.fallback,f?(Js(),f=r.mode,A=Mh({mode:"hidden",children:A},f),u=ca(u,f,o,null),A.return=r,u.return=r,A.sibling=u,r.child=A,f=r.child,f.memoizedState=Kp(o),f.childLanes=Yp(i,E,o),r.memoizedState=Gp,u):(Zs(r),$p(r,A))}if(N=i.memoizedState,N!==null&&(A=N.dehydrated,A!==null)){if(m)r.flags&256?(Zs(r),r.flags&=-257,r=Qp(i,r,o)):r.memoizedState!==null?(Js(),r.child=i.child,r.flags|=128,r=null):(Js(),f=u.fallback,A=r.mode,u=Mh({mode:"visible",children:u.children},A),f=ca(f,A,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,bo(r,i.child,null,o),u=r.child,u.memoizedState=Kp(o),u.childLanes=Yp(i,E,o),r.memoizedState=Gp,r=f);else if(Zs(r),Om(A)){if(E=A.nextSibling&&A.nextSibling.dataset,E)var H=E.dgst;E=H,u=Error(s(419)),u.stack="",u.digest=E,Wl({value:u,source:null,stack:null}),r=Qp(i,r,o)}else if(jt||Xl(i,r,o,!1),E=(o&i.childLanes)!==0,jt||E){if(E=at,E!==null&&(u=o&-o,u=(u&42)!==0?1:zs(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==N.retryLane))throw N.retryLane=u,mo(i,u),Vn(E,i,u),mE;A.data==="$?"||dm(),r=Qp(i,r,o)}else A.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=N.treeContext,Et=ci(A.nextSibling),vn=r,Ke=!0,da=null,Ni=!1,i!==null&&(Wn[Xn++]=os,Wn[Xn++]=ls,Wn[Xn++]=ha,os=i.id,ls=i.overflow,ha=r),r=$p(r,u.children),r.flags|=4096);return r}return f?(Js(),f=u.fallback,A=r.mode,N=i.child,H=N.sibling,u=as(N,{mode:"hidden",children:u.children}),u.subtreeFlags=N.subtreeFlags&65011712,H!==null?f=as(H,f):(f=ca(f,A,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,A=i.child.memoizedState,A===null?A=Kp(o):(N=A.cachePool,N!==null?(H=Lt._currentValue,N=N.parent!==H?{parent:H,pool:H}:N):N=cv(),A={baseLanes:A.baseLanes|o,cachePool:N}),f.memoizedState=A,f.childLanes=Yp(i,E,o),r.memoizedState=Gp,u):(Zs(r),o=i.child,i=o.sibling,o=as(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(E=r.deletions,E===null?(r.deletions=[i],r.flags|=16):E.push(i)),r.child=o,r.memoizedState=null,o)}function $p(i,r){return r=Mh({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Mh(i,r){return i=kn(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function Qp(i,r,o){return bo(r,i.child,null,o),i=$p(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function RE(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),dp(i.return,r,o)}function Wp(i,r,o,u,f){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function bE(i,r,o){var u=r.pendingProps,f=u.revealOrder,m=u.tail;if(Zt(i,r,u.children,o),u=Vt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&RE(i,o,r);else if(i.tag===19)RE(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}switch(ie(Vt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)i=o.alternate,i!==null&&Oh(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),Wp(r,!1,f,o,m);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(i=f.alternate,i!==null&&Oh(i)===null){r.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}Wp(r,!0,o,null,m);break;case"together":Wp(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ds(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),sr|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(Xl(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=as(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=as(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function Xp(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&ph(i)))}function TI(i,r,o){switch(r.tag){case 3:rt(r,r.stateNode.containerInfo),Ys(r,Lt,i.memoizedState.cache),Ql();break;case 27:case 5:Bs(r);break;case 4:rt(r,r.stateNode.containerInfo);break;case 10:Ys(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(Zs(r),r.flags|=128,null):(o&r.child.childLanes)!==0?wE(i,r,o):(Zs(r),i=ds(i,r,o),i!==null?i.sibling:null);Zs(r);break;case 19:var f=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(Xl(i,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return bE(i,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ie(Vt,Vt.current),u)break;return null;case 22:case 23:return r.lanes=0,vE(i,r,o);case 24:Ys(r,Lt,i.memoizedState.cache)}return ds(i,r,o)}function CE(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)jt=!0;else{if(!Xp(i,o)&&(r.flags&128)===0)return jt=!1,TI(i,r,o);jt=(i.flags&131072)!==0}else jt=!1,Ke&&(r.flags&1048576)!==0&&iv(r,dh,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")ap(u)?(i=va(u,i),r.tag=1,r=SE(null,r,u,i,o)):(r.tag=0,r=jp(null,r,u,i,o));else{if(u!=null){if(f=u.$$typeof,f===le){r.tag=11,r=gE(null,r,u,i,o);break e}else if(f===k){r.tag=14,r=_E(null,r,u,i,o);break e}}throw r=kt(u)||u,Error(s(306,r,""))}}return r;case 0:return jp(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=va(u,r.pendingProps),SE(i,r,u,f,o);case 3:e:{if(rt(r,r.stateNode.containerInfo),i===null)throw Error(s(387));u=r.pendingProps;var m=r.memoizedState;f=m.element,Ep(i,r),su(r,u,null,o);var E=r.memoizedState;if(u=E.cache,Ys(r,Lt,u),u!==m.cache&&pp(r,[Lt],o,!0),iu(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=AE(i,r,u,o);break e}else if(u!==f){f=$n(Error(s(424)),r),Wl(f),r=AE(i,r,u,o);break e}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(Et=ci(i.firstChild),vn=r,Ke=!0,da=null,Ni=!0,o=rE(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Ql(),u===f){r=ds(i,r,o);break e}Zt(i,r,u,o)}r=r.child}return r;case 26:return xh(i,r),i===null?(o=DT(r.type,null,r.pendingProps,null))?r.memoizedState=o:Ke||(o=r.type,i=r.pendingProps,u=$h(we.current).createElement(o),u[xt]=r,u[Ct]=i,en(u,o,i),At(u),r.stateNode=u):r.memoizedState=DT(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Bs(r),i===null&&Ke&&(u=r.stateNode=IT(r.type,r.pendingProps,we.current),vn=r,Ni=!0,f=Et,lr(r.type)?(Dm=f,Et=ci(u.firstChild)):Et=f),Zt(i,r,r.pendingProps.children,o),xh(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Ke&&((f=u=Et)&&(u=QI(u,r.type,r.pendingProps,Ni),u!==null?(r.stateNode=u,vn=r,Et=ci(u.firstChild),Ni=!1,f=!0):f=!1),f||pa(r)),Bs(r),f=r.type,m=r.pendingProps,E=i!==null?i.memoizedProps:null,u=m.children,Cm(f,m)?u=null:E!==null&&Cm(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=bp(i,r,dI,null,null,o),bu._currentValue=f),xh(i,r),Zt(i,r,u,o),r.child;case 6:return i===null&&Ke&&((i=o=Et)&&(o=WI(o,r.pendingProps,Ni),o!==null?(r.stateNode=o,vn=r,Et=null,i=!0):i=!1),i||pa(r)),null;case 13:return wE(i,r,o);case 4:return rt(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=bo(r,null,u,o):Zt(i,r,u,o),r.child;case 11:return gE(i,r,r.type,r.pendingProps,o);case 7:return Zt(i,r,r.pendingProps,o),r.child;case 8:return Zt(i,r,r.pendingProps.children,o),r.child;case 12:return Zt(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Ys(r,r.type,u.value),Zt(i,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,ga(r),f=on(f),u=u(f),r.flags|=1,Zt(i,r,u,o),r.child;case 14:return _E(i,r,r.type,r.pendingProps,o);case 15:return yE(i,r,r.type,r.pendingProps,o);case 19:return bE(i,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},i===null?(o=Mh(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=as(i.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return vE(i,r,o);case 24:return ga(r),u=on(Lt),i===null?(f=_p(),f===null&&(f=at,m=mp(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),r.memoizedState={parent:u,cache:f},vp(r),Ys(r,Lt,f)):((i.lanes&o)!==0&&(Ep(i,r),su(r,null,null,o),iu()),f=i.memoizedState,m=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Ys(r,Lt,u)):(u=m.cache,Ys(r,Lt,u),u!==f.cache&&pp(r,[Lt],o,!0))),Zt(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function ps(i){i.flags|=4}function IE(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!LT(r)){if(r=Zn.current,r!==null&&((ze&4194048)===ze?Oi!==null:(ze&62914560)!==ze&&(ze&536870912)===0||r!==Oi))throw tu=yp,hv;i.flags|=8192}}function Ph(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Il():536870912,i.lanes|=r,Oo|=r)}function hu(i,r){if(!Ke)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function mt(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function SI(i,r,o){var u=r.pendingProps;switch(cp(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(r),null;case 1:return mt(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),cs(Lt),_i(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&($l(r)?ps(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,av())),mt(r),null;case 26:return o=r.memoizedState,i===null?(ps(r),o!==null?(mt(r),IE(r,o)):(mt(r),r.flags&=-16777217)):o?o!==i.memoizedState?(ps(r),mt(r),IE(r,o)):(mt(r),r.flags&=-16777217):(i.memoizedProps!==u&&ps(r),mt(r),r.flags&=-16777217),null;case 27:Yi(r),o=we.current;var f=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==u&&ps(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return mt(r),null}i=pe.current,$l(r)?sv(r):(i=IT(f,u,o),r.stateNode=i,ps(r))}return mt(r),null;case 5:if(Yi(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&ps(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return mt(r),null}if(i=pe.current,$l(r))sv(r);else{switch(f=$h(we.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?i.multiple=!0:u.size&&(i.size=u.size);break;default:i=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}i[xt]=r,i[Ct]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=i;e:switch(en(i,o,u),o){case"button":case"input":case"select":case"textarea":i=!!u.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ps(r)}}return mt(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&ps(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(i=we.current,$l(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,f=vn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}i[xt]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||TT(i.nodeValue,o)),i||pa(r)}else i=$h(i).createTextNode(u),i[xt]=r,r.stateNode=i}return mt(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=$l(r),u!==null&&u.dehydrated!==null){if(i===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[xt]=r}else Ql(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;mt(r),f=!1}else f=av(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(fs(r),r):(fs(r),null)}if(fs(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,i=i!==null&&i.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),Ph(r,r.updateQueue),mt(r),null;case 4:return _i(),i===null&&Sm(r.stateNode.containerInfo),mt(r),null;case 10:return cs(r.type),mt(r),null;case 19:if(oe(Vt),f=r.memoizedState,f===null)return mt(r),null;if(u=(r.flags&128)!==0,m=f.rendering,m===null)if(u)hu(f,!1);else{if(Tt!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(m=Oh(i),m!==null){for(r.flags|=128,hu(f,!1),i=m.updateQueue,r.updateQueue=i,Ph(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)nv(o,i),o=o.sibling;return ie(Vt,Vt.current&1|2),r.child}i=i.sibling}f.tail!==null&&Hn()>Uh&&(r.flags|=128,u=!0,hu(f,!1),r.lanes=4194304)}else{if(!u)if(i=Oh(m),i!==null){if(r.flags|=128,u=!0,i=i.updateQueue,r.updateQueue=i,Ph(r,i),hu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Ke)return mt(r),null}else 2*Hn()-f.renderingStartTime>Uh&&o!==536870912&&(r.flags|=128,u=!0,hu(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(i=f.last,i!==null?i.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Hn(),r.sibling=null,i=Vt.current,ie(Vt,u?i&1|2:i&1),r):(mt(r),null);case 22:case 23:return fs(r),wp(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(mt(r),r.subtreeFlags&6&&(r.flags|=8192)):mt(r),o=r.updateQueue,o!==null&&Ph(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&oe(_a),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),cs(Lt),mt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function AI(i,r){switch(cp(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return cs(Lt),_i(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return Yi(r),null;case 13:if(fs(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Ql()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return oe(Vt),null;case 4:return _i(),null;case 10:return cs(r.type),null;case 22:case 23:return fs(r),wp(),i!==null&&oe(_a),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return cs(Lt),null;case 25:return null;default:return null}}function NE(i,r){switch(cp(r),r.tag){case 3:cs(Lt),_i();break;case 26:case 27:case 5:Yi(r);break;case 4:_i();break;case 13:fs(r);break;case 19:oe(Vt);break;case 10:cs(r.type);break;case 22:case 23:fs(r),wp(),i!==null&&oe(_a);break;case 24:cs(Lt)}}function fu(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&i)===i){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==f)}}catch(A){st(r,r.return,A)}}function er(i,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&i)===i){var E=u.inst,A=E.destroy;if(A!==void 0){E.destroy=void 0,f=r;var N=o,H=A;try{H()}catch(X){st(f,N,X)}}}u=u.next}while(u!==m)}}catch(X){st(r,r.return,X)}}function OE(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{_v(r,o)}catch(u){st(i,i.return,u)}}}function DE(i,r,o){o.props=va(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){st(i,r,u)}}function du(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(f){st(i,r,f)}}function Di(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){st(i,r,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){st(i,r,f)}else o.current=null}function kE(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){st(i,i.return,f)}}function Zp(i,r,o){try{var u=i.stateNode;jI(u,i.type,o,r),u[Ct]=r}catch(f){st(i,i.return,f)}}function xE(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&lr(i.type)||i.tag===4}function Jp(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||xE(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&lr(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function em(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Yh));else if(u!==4&&(u===27&&lr(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(em(i,r,o),i=i.sibling;i!==null;)em(i,r,o),i=i.sibling}function Lh(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&(u===27&&lr(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(Lh(i,r,o),i=i.sibling;i!==null;)Lh(i,r,o),i=i.sibling}function ME(i){var r=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);en(r,u,o),r[xt]=i,r[Ct]=o}catch(m){st(i,i.return,m)}}var ms=!1,Rt=!1,tm=!1,PE=typeof WeakSet=="function"?WeakSet:Set,Gt=null;function wI(i,r){if(i=i.containerInfo,Rm=ef,i=Ky(i),Jd(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,A=-1,N=-1,H=0,X=0,J=i,q=null;t:for(;;){for(var j;J!==o||f!==0&&J.nodeType!==3||(A=E+f),J!==m||u!==0&&J.nodeType!==3||(N=E+u),J.nodeType===3&&(E+=J.nodeValue.length),(j=J.firstChild)!==null;)q=J,J=j;for(;;){if(J===i)break t;if(q===o&&++H===f&&(A=E),q===m&&++X===u&&(N=E),(j=J.nextSibling)!==null)break;J=q,q=J.parentNode}J=j}o=A===-1||N===-1?null:{start:A,end:N}}else o=null}o=o||{start:0,end:0}}else o=null;for(bm={focusedElem:i,selectionRange:o},ef=!1,Gt=r;Gt!==null;)if(r=Gt,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,Gt=i;else for(;Gt!==null;){switch(r=Gt,m=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&m!==null){i=void 0,o=r,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var Se=va(o.type,f,o.elementType===o.type);i=u.getSnapshotBeforeUpdate(Se,m),u.__reactInternalSnapshotBeforeUpdate=i}catch(ye){st(o,o.return,ye)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)Nm(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Nm(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,Gt=i;break}Gt=r.return}}function LE(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:tr(i,o),u&4&&fu(5,o);break;case 1:if(tr(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(E){st(o,o.return,E)}else{var f=va(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(f,r,i.__reactInternalSnapshotBeforeUpdate)}catch(E){st(o,o.return,E)}}u&64&&OE(o),u&512&&du(o,o.return);break;case 3:if(tr(i,o),u&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{_v(i,r)}catch(E){st(o,o.return,E)}}break;case 27:r===null&&u&4&&ME(o);case 26:case 5:tr(i,o),r===null&&u&4&&kE(o),u&512&&du(o,o.return);break;case 12:tr(i,o);break;case 13:tr(i,o),u&4&&BE(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=xI.bind(null,o),XI(i,o))));break;case 22:if(u=o.memoizedState!==null||ms,!u){r=r!==null&&r.memoizedState!==null||Rt,f=ms;var m=Rt;ms=u,(Rt=r)&&!m?nr(i,o,(o.subtreeFlags&8772)!==0):tr(i,o),ms=f,Rt=m}break;case 30:break;default:tr(i,o)}}function VE(i){var r=i.alternate;r!==null&&(i.alternate=null,VE(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&qs(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var pt=null,wn=!1;function gs(i,r,o){for(o=o.child;o!==null;)UE(i,r,o),o=o.sibling}function UE(i,r,o){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(vt,o)}catch{}switch(o.tag){case 26:Rt||Di(o,r),gs(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Rt||Di(o,r);var u=pt,f=wn;lr(o.type)&&(pt=o.stateNode,wn=!1),gs(i,r,o),Su(o.stateNode),pt=u,wn=f;break;case 5:Rt||Di(o,r);case 6:if(u=pt,f=wn,pt=null,gs(i,r,o),pt=u,wn=f,pt!==null)if(wn)try{(pt.nodeType===9?pt.body:pt.nodeName==="HTML"?pt.ownerDocument.body:pt).removeChild(o.stateNode)}catch(m){st(o,r,m)}else try{pt.removeChild(o.stateNode)}catch(m){st(o,r,m)}break;case 18:pt!==null&&(wn?(i=pt,bT(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),Ou(i)):bT(pt,o.stateNode));break;case 4:u=pt,f=wn,pt=o.stateNode.containerInfo,wn=!0,gs(i,r,o),pt=u,wn=f;break;case 0:case 11:case 14:case 15:Rt||er(2,o,r),Rt||er(4,o,r),gs(i,r,o);break;case 1:Rt||(Di(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&DE(o,r,u)),gs(i,r,o);break;case 21:gs(i,r,o);break;case 22:Rt=(u=Rt)||o.memoizedState!==null,gs(i,r,o),Rt=u;break;default:gs(i,r,o)}}function BE(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Ou(i)}catch(o){st(r,r.return,o)}}function RI(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new PE),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new PE),r;default:throw Error(s(435,i.tag))}}function nm(i,r){var o=RI(i);r.forEach(function(u){var f=MI.bind(null,i,u);o.has(u)||(o.add(u),u.then(f,f))})}function xn(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=i,E=r,A=E;e:for(;A!==null;){switch(A.tag){case 27:if(lr(A.type)){pt=A.stateNode,wn=!1;break e}break;case 5:pt=A.stateNode,wn=!1;break e;case 3:case 4:pt=A.stateNode.containerInfo,wn=!0;break e}A=A.return}if(pt===null)throw Error(s(160));UE(m,E,f),pt=null,wn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)zE(r,i),r=r.sibling}var ui=null;function zE(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:xn(r,i),Mn(i),u&4&&(er(3,i,i.return),fu(3,i),er(5,i,i.return));break;case 1:xn(r,i),Mn(i),u&512&&(Rt||o===null||Di(o,o.return)),u&64&&ms&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=ui;if(xn(r,i),Mn(i),u&512&&(Rt||o===null||Di(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[$r]||m[xt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),en(m,u,o),m[xt]=i,At(m),u=m;break e;case"link":var E=MT("link","href",f).get(u+(o.href||""));if(E){for(var A=0;A<E.length;A++)if(m=E[A],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(A,1);break t}}m=f.createElement(u),en(m,u,o),f.head.appendChild(m);break;case"meta":if(E=MT("meta","content",f).get(u+(o.content||""))){for(A=0;A<E.length;A++)if(m=E[A],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(A,1);break t}}m=f.createElement(u),en(m,u,o),f.head.appendChild(m);break;default:throw Error(s(468,u))}m[xt]=i,At(m),u=m}i.stateNode=u}else PT(f,i.type,i.stateNode);else i.stateNode=xT(f,u,i.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?PT(f,i.type,i.stateNode):xT(f,u,i.memoizedProps)):u===null&&i.stateNode!==null&&Zp(i,i.memoizedProps,o.memoizedProps)}break;case 27:xn(r,i),Mn(i),u&512&&(Rt||o===null||Di(o,o.return)),o!==null&&u&4&&Zp(i,i.memoizedProps,o.memoizedProps);break;case 5:if(xn(r,i),Mn(i),u&512&&(Rt||o===null||Di(o,o.return)),i.flags&32){f=i.stateNode;try{jn(f,"")}catch(j){st(i,i.return,j)}}u&4&&i.stateNode!=null&&(f=i.memoizedProps,Zp(i,f,o!==null?o.memoizedProps:f)),u&1024&&(tm=!0);break;case 6:if(xn(r,i),Mn(i),u&4){if(i.stateNode===null)throw Error(s(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(j){st(i,i.return,j)}}break;case 3:if(Xh=null,f=ui,ui=Qh(r.containerInfo),xn(r,i),ui=f,Mn(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Ou(r.containerInfo)}catch(j){st(i,i.return,j)}tm&&(tm=!1,FE(i));break;case 4:u=ui,ui=Qh(i.stateNode.containerInfo),xn(r,i),Mn(i),ui=u;break;case 12:xn(r,i),Mn(i);break;case 13:xn(r,i),Mn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(lm=Hn()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,nm(i,u)));break;case 22:f=i.memoizedState!==null;var N=o!==null&&o.memoizedState!==null,H=ms,X=Rt;if(ms=H||f,Rt=X||N,xn(r,i),Rt=X,ms=H,Mn(i),u&8192)e:for(r=i.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||N||ms||Rt||Ea(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){N=o=r;try{if(m=N.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{A=N.stateNode;var J=N.memoizedProps.style,q=J!=null&&J.hasOwnProperty("display")?J.display:null;A.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(j){st(N,N.return,j)}}}else if(r.tag===6){if(o===null){N=r;try{N.stateNode.nodeValue=f?"":N.memoizedProps}catch(j){st(N,N.return,j)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,nm(i,o))));break;case 19:xn(r,i),Mn(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,nm(i,u)));break;case 30:break;case 21:break;default:xn(r,i),Mn(i)}}function Mn(i){var r=i.flags;if(r&2){try{for(var o,u=i.return;u!==null;){if(xE(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,m=Jp(i);Lh(i,m,f);break;case 5:var E=o.stateNode;o.flags&32&&(jn(E,""),o.flags&=-33);var A=Jp(i);Lh(i,A,E);break;case 3:case 4:var N=o.stateNode.containerInfo,H=Jp(i);em(i,H,N);break;default:throw Error(s(161))}}catch(X){st(i,i.return,X)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function FE(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;FE(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function tr(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)LE(i,r.alternate,r),r=r.sibling}function Ea(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:er(4,r,r.return),Ea(r);break;case 1:Di(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&DE(r,r.return,o),Ea(r);break;case 27:Su(r.stateNode);case 26:case 5:Di(r,r.return),Ea(r);break;case 22:r.memoizedState===null&&Ea(r);break;case 30:Ea(r);break;default:Ea(r)}i=i.sibling}}function nr(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=i,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:nr(f,m,o),fu(4,m);break;case 1:if(nr(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(H){st(u,u.return,H)}if(u=m,f=u.updateQueue,f!==null){var A=u.stateNode;try{var N=f.shared.hiddenCallbacks;if(N!==null)for(f.shared.hiddenCallbacks=null,f=0;f<N.length;f++)gv(N[f],A)}catch(H){st(u,u.return,H)}}o&&E&64&&OE(m),du(m,m.return);break;case 27:ME(m);case 26:case 5:nr(f,m,o),o&&u===null&&E&4&&kE(m),du(m,m.return);break;case 12:nr(f,m,o);break;case 13:nr(f,m,o),o&&E&4&&BE(f,m);break;case 22:m.memoizedState===null&&nr(f,m,o),du(m,m.return);break;case 30:break;default:nr(f,m,o)}r=r.sibling}}function im(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&Zl(o))}function sm(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Zl(i))}function ki(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)HE(i,r,o,u),r=r.sibling}function HE(i,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:ki(i,r,o,u),f&2048&&fu(9,r);break;case 1:ki(i,r,o,u);break;case 3:ki(i,r,o,u),f&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Zl(i)));break;case 12:if(f&2048){ki(i,r,o,u),i=r.stateNode;try{var m=r.memoizedProps,E=m.id,A=m.onPostCommit;typeof A=="function"&&A(E,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(N){st(r,r.return,N)}}else ki(i,r,o,u);break;case 13:ki(i,r,o,u);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?ki(i,r,o,u):pu(i,r):m._visibility&2?ki(i,r,o,u):(m._visibility|=2,Co(i,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&im(E,r);break;case 24:ki(i,r,o,u),f&2048&&sm(r.alternate,r);break;default:ki(i,r,o,u)}}function Co(i,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=i,E=r,A=o,N=u,H=E.flags;switch(E.tag){case 0:case 11:case 15:Co(m,E,A,N,f),fu(8,E);break;case 23:break;case 22:var X=E.stateNode;E.memoizedState!==null?X._visibility&2?Co(m,E,A,N,f):pu(m,E):(X._visibility|=2,Co(m,E,A,N,f)),f&&H&2048&&im(E.alternate,E);break;case 24:Co(m,E,A,N,f),f&&H&2048&&sm(E.alternate,E);break;default:Co(m,E,A,N,f)}r=r.sibling}}function pu(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,f=u.flags;switch(u.tag){case 22:pu(o,u),f&2048&&im(u.alternate,u);break;case 24:pu(o,u),f&2048&&sm(u.alternate,u);break;default:pu(o,u)}r=r.sibling}}var mu=8192;function Io(i){if(i.subtreeFlags&mu)for(i=i.child;i!==null;)qE(i),i=i.sibling}function qE(i){switch(i.tag){case 26:Io(i),i.flags&mu&&i.memoizedState!==null&&c1(ui,i.memoizedState,i.memoizedProps);break;case 5:Io(i);break;case 3:case 4:var r=ui;ui=Qh(i.stateNode.containerInfo),Io(i),ui=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=mu,mu=16777216,Io(i),mu=r):Io(i));break;default:Io(i)}}function jE(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function gu(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Gt=u,KE(u,i)}jE(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)GE(i),i=i.sibling}function GE(i){switch(i.tag){case 0:case 11:case 15:gu(i),i.flags&2048&&er(9,i,i.return);break;case 3:gu(i);break;case 12:gu(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Vh(i)):gu(i);break;default:gu(i)}}function Vh(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Gt=u,KE(u,i)}jE(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:er(8,r,r.return),Vh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,Vh(r));break;default:Vh(r)}i=i.sibling}}function KE(i,r){for(;Gt!==null;){var o=Gt;switch(o.tag){case 0:case 11:case 15:er(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Zl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Gt=u;else e:for(o=i;Gt!==null;){u=Gt;var f=u.sibling,m=u.return;if(VE(u),u===o){Gt=null;break e}if(f!==null){f.return=m,Gt=f;break e}Gt=m}}}var bI={getCacheForType:function(i){var r=on(Lt),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},CI=typeof WeakMap=="function"?WeakMap:Map,Xe=0,at=null,ke=null,ze=0,Ze=0,Pn=null,ir=!1,No=!1,rm=!1,_s=0,Tt=0,sr=0,Ta=0,am=0,Jn=0,Oo=0,_u=null,Rn=null,om=!1,lm=0,Uh=1/0,Bh=null,rr=null,Jt=0,ar=null,Do=null,ko=0,um=0,cm=null,YE=null,yu=0,hm=null;function Ln(){if((Xe&2)!==0&&ze!==0)return ze&-ze;if($.T!==null){var i=vo;return i!==0?i:ym()}return Fs()}function $E(){Jn===0&&(Jn=(ze&536870912)===0||Ke?Cl():536870912);var i=Zn.current;return i!==null&&(i.flags|=32),Jn}function Vn(i,r,o){(i===at&&(Ze===2||Ze===9)||i.cancelPendingCommit!==null)&&(xo(i,0),or(i,ze,Jn,!1)),Qi(i,o),((Xe&2)===0||i!==at)&&(i===at&&((Xe&2)===0&&(Ta|=o),Tt===4&&or(i,ze,Jn,!1)),xi(i))}function QE(i,r,o){if((Xe&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&i.expiredLanes)===0||Yr(i,r),f=u?OI(i,r):pm(i,r,!0),m=u;do{if(f===0){No&&!u&&or(i,r,0,!1);break}else{if(o=i.current.alternate,m&&!II(o)){f=pm(i,r,!1),m=!1;continue}if(f===2){if(m=r,i.errorRecoveryDisabledLanes&m)var E=0;else E=i.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var A=i;f=_u;var N=A.current.memoizedState.isDehydrated;if(N&&(xo(A,E).flags|=256),E=pm(A,E,!1),E!==2){if(rm&&!N){A.errorRecoveryDisabledLanes|=m,Ta|=m,f=4;break e}m=Rn,Rn=f,m!==null&&(Rn===null?Rn=m:Rn.push.apply(Rn,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){xo(i,0),or(i,r,0,!0);break}e:{switch(u=i,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:or(u,r,Jn,!ir);break e;case 2:Rn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=lm+300-Hn(),10<f)){if(or(u,r,Jn,!ir),Qa(u,0,!0)!==0)break e;u.timeoutHandle=wT(WE.bind(null,u,o,Rn,Bh,om,r,Jn,Ta,Oo,ir,m,2,-0,0),f);break e}WE(u,o,Rn,Bh,om,r,Jn,Ta,Oo,ir,m,0,-0,0)}}break}while(!0);xi(i)}function WE(i,r,o,u,f,m,E,A,N,H,X,J,q,j){if(i.timeoutHandle=-1,J=r.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(Ru={stylesheets:null,count:0,unsuspend:u1},qE(r),J=h1(),J!==null)){i.cancelPendingCommit=J(iT.bind(null,i,r,m,o,u,f,E,A,N,X,1,q,j)),or(i,m,E,!H);return}iT(i,r,m,o,u,f,E,A,N)}function II(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!Dn(m(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function or(i,r,o,u){r&=~am,r&=~Ta,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var f=r;0<f;){var m=31-an(f),E=1<<m;u[m]=-1,f&=~E}o!==0&&yi(i,o,r)}function zh(){return(Xe&6)===0?(vu(0),!1):!0}function fm(){if(ke!==null){if(Ze===0)var i=ke.return;else i=ke,us=ma=null,Np(i),Ro=null,uu=0,i=ke;for(;i!==null;)NE(i.alternate,i),i=i.return;ke=null}}function xo(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,KI(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),fm(),at=i,ke=o=as(i.current,null),ze=r,Ze=0,Pn=null,ir=!1,No=Yr(i,r),rm=!1,Oo=Jn=am=Ta=sr=Tt=0,Rn=_u=null,om=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var f=31-an(u),m=1<<f;r|=i[f],u&=~m}return _s=r,lh(),o}function XE(i,r){Ie=null,$.H=Ch,r===eu||r===_h?(r=pv(),Ze=3):r===hv?(r=pv(),Ze=4):Ze=r===mE?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Pn=r,ke===null&&(Tt=1,kh(i,$n(r,i.current)))}function ZE(){var i=$.H;return $.H=Ch,i===null?Ch:i}function JE(){var i=$.A;return $.A=bI,i}function dm(){Tt=4,ir||(ze&4194048)!==ze&&Zn.current!==null||(No=!0),(sr&134217727)===0&&(Ta&134217727)===0||at===null||or(at,ze,Jn,!1)}function pm(i,r,o){var u=Xe;Xe|=2;var f=ZE(),m=JE();(at!==i||ze!==r)&&(Bh=null,xo(i,r)),r=!1;var E=Tt;e:do try{if(Ze!==0&&ke!==null){var A=ke,N=Pn;switch(Ze){case 8:fm(),E=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(r=!0);var H=Ze;if(Ze=0,Pn=null,Mo(i,A,N,H),o&&No){E=0;break e}break;default:H=Ze,Ze=0,Pn=null,Mo(i,A,N,H)}}NI(),E=Tt;break}catch(X){XE(i,X)}while(!0);return r&&i.shellSuspendCounter++,us=ma=null,Xe=u,$.H=f,$.A=m,ke===null&&(at=null,ze=0,lh()),E}function NI(){for(;ke!==null;)eT(ke)}function OI(i,r){var o=Xe;Xe|=2;var u=ZE(),f=JE();at!==i||ze!==r?(Bh=null,Uh=Hn()+500,xo(i,r)):No=Yr(i,r);e:do try{if(Ze!==0&&ke!==null){r=ke;var m=Pn;t:switch(Ze){case 1:Ze=0,Pn=null,Mo(i,r,m,1);break;case 2:case 9:if(fv(m)){Ze=0,Pn=null,tT(r);break}r=function(){Ze!==2&&Ze!==9||at!==i||(Ze=7),xi(i)},m.then(r,r);break e;case 3:Ze=7;break e;case 4:Ze=5;break e;case 7:fv(m)?(Ze=0,Pn=null,tT(r)):(Ze=0,Pn=null,Mo(i,r,m,7));break;case 5:var E=null;switch(ke.tag){case 26:E=ke.memoizedState;case 5:case 27:var A=ke;if(!E||LT(E)){Ze=0,Pn=null;var N=A.sibling;if(N!==null)ke=N;else{var H=A.return;H!==null?(ke=H,Fh(H)):ke=null}break t}}Ze=0,Pn=null,Mo(i,r,m,5);break;case 6:Ze=0,Pn=null,Mo(i,r,m,6);break;case 8:fm(),Tt=6;break e;default:throw Error(s(462))}}DI();break}catch(X){XE(i,X)}while(!0);return us=ma=null,$.H=u,$.A=f,Xe=o,ke!==null?0:(at=null,ze=0,lh(),Tt)}function DI(){for(;ke!==null&&!Al();)eT(ke)}function eT(i){var r=CE(i.alternate,i,_s);i.memoizedProps=i.pendingProps,r===null?Fh(i):ke=r}function tT(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=TE(o,r,r.pendingProps,r.type,void 0,ze);break;case 11:r=TE(o,r,r.pendingProps,r.type.render,r.ref,ze);break;case 5:Np(r);default:NE(o,r),r=ke=nv(r,_s),r=CE(o,r,_s)}i.memoizedProps=i.pendingProps,r===null?Fh(i):ke=r}function Mo(i,r,o,u){us=ma=null,Np(r),Ro=null,uu=0;var f=r.return;try{if(EI(i,f,r,o,ze)){Tt=1,kh(i,$n(o,i.current)),ke=null;return}}catch(m){if(f!==null)throw ke=f,m;Tt=1,kh(i,$n(o,i.current)),ke=null;return}r.flags&32768?(Ke||u===1?i=!0:No||(ze&536870912)!==0?i=!1:(ir=i=!0,(u===2||u===9||u===3||u===6)&&(u=Zn.current,u!==null&&u.tag===13&&(u.flags|=16384))),nT(r,i)):Fh(r)}function Fh(i){var r=i;do{if((r.flags&32768)!==0){nT(r,ir);return}i=r.return;var o=SI(r.alternate,r,_s);if(o!==null){ke=o;return}if(r=r.sibling,r!==null){ke=r;return}ke=r=i}while(r!==null);Tt===0&&(Tt=5)}function nT(i,r){do{var o=AI(i.alternate,i);if(o!==null){o.flags&=32767,ke=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){ke=i;return}ke=i=o}while(i!==null);Tt=6,ke=null}function iT(i,r,o,u,f,m,E,A,N){i.cancelPendingCommit=null;do Hh();while(Jt!==0);if((Xe&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=sp,Nl(i,o,m,E,A,N),i===at&&(ke=at=null,ze=0),Do=r,ar=i,ko=o,um=m,cm=f,YE=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,PI(qr,function(){return lT(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=$.T,$.T=null,f=ae.p,ae.p=2,E=Xe,Xe|=4;try{wI(i,r,o)}finally{Xe=E,ae.p=f,$.T=u}}Jt=1,sT(),rT(),aT()}}function sT(){if(Jt===1){Jt=0;var i=ar,r=Do,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=$.T,$.T=null;var u=ae.p;ae.p=2;var f=Xe;Xe|=4;try{zE(r,i);var m=bm,E=Ky(i.containerInfo),A=m.focusedElem,N=m.selectionRange;if(E!==A&&A&&A.ownerDocument&&Gy(A.ownerDocument.documentElement,A)){if(N!==null&&Jd(A)){var H=N.start,X=N.end;if(X===void 0&&(X=H),"selectionStart"in A)A.selectionStart=H,A.selectionEnd=Math.min(X,A.value.length);else{var J=A.ownerDocument||document,q=J&&J.defaultView||window;if(q.getSelection){var j=q.getSelection(),Se=A.textContent.length,ye=Math.min(N.start,Se),nt=N.end===void 0?ye:Math.min(N.end,Se);!j.extend&&ye>nt&&(E=nt,nt=ye,ye=E);var V=jy(A,ye),M=jy(A,nt);if(V&&M&&(j.rangeCount!==1||j.anchorNode!==V.node||j.anchorOffset!==V.offset||j.focusNode!==M.node||j.focusOffset!==M.offset)){var F=J.createRange();F.setStart(V.node,V.offset),j.removeAllRanges(),ye>nt?(j.addRange(F),j.extend(M.node,M.offset)):(F.setEnd(M.node,M.offset),j.addRange(F))}}}}for(J=[],j=A;j=j.parentNode;)j.nodeType===1&&J.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<J.length;A++){var Z=J[A];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}ef=!!Rm,bm=Rm=null}finally{Xe=f,ae.p=u,$.T=o}}i.current=r,Jt=2}}function rT(){if(Jt===2){Jt=0;var i=ar,r=Do,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=$.T,$.T=null;var u=ae.p;ae.p=2;var f=Xe;Xe|=4;try{LE(i,r.alternate,r)}finally{Xe=f,ae.p=u,$.T=o}}Jt=3}}function aT(){if(Jt===4||Jt===3){Jt=0,Vc();var i=ar,r=Do,o=ko,u=YE;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Jt=5:(Jt=0,Do=ar=null,oT(i,i.pendingLanes));var f=i.pendingLanes;if(f===0&&(rr=null),Wa(o),r=r.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(vt,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=$.T,f=ae.p,ae.p=2,$.T=null;try{for(var m=i.onRecoverableError,E=0;E<u.length;E++){var A=u[E];m(A.value,{componentStack:A.stack})}}finally{$.T=r,ae.p=f}}(ko&3)!==0&&Hh(),xi(i),f=i.pendingLanes,(o&4194090)!==0&&(f&42)!==0?i===hm?yu++:(yu=0,hm=i):yu=0,vu(0)}}function oT(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,Zl(r)))}function Hh(i){return sT(),rT(),aT(),lT()}function lT(){if(Jt!==5)return!1;var i=ar,r=um;um=0;var o=Wa(ko),u=$.T,f=ae.p;try{ae.p=32>o?32:o,$.T=null,o=cm,cm=null;var m=ar,E=ko;if(Jt=0,Do=ar=null,ko=0,(Xe&6)!==0)throw Error(s(331));var A=Xe;if(Xe|=4,GE(m.current),HE(m,m.current,E,o),Xe=A,vu(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(vt,m)}catch{}return!0}finally{ae.p=f,$.T=u,oT(i,r)}}function uT(i,r,o){r=$n(o,r),r=qp(i.stateNode,r,2),i=Ws(i,r,2),i!==null&&(Qi(i,2),xi(i))}function st(i,r,o){if(i.tag===3)uT(i,i,o);else for(;r!==null;){if(r.tag===3){uT(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(rr===null||!rr.has(u))){i=$n(o,i),o=dE(2),u=Ws(r,o,2),u!==null&&(pE(o,u,r,i),Qi(u,2),xi(u));break}}r=r.return}}function mm(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new CI;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(rm=!0,f.add(o),i=kI.bind(null,i,r,o),r.then(i,i))}function kI(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,at===i&&(ze&o)===o&&(Tt===4||Tt===3&&(ze&62914560)===ze&&300>Hn()-lm?(Xe&2)===0&&xo(i,0):am|=o,Oo===ze&&(Oo=0)),xi(i)}function cT(i,r){r===0&&(r=Il()),i=mo(i,r),i!==null&&(Qi(i,r),xi(i))}function xI(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),cT(i,o)}function MI(i,r){var o=0;switch(i.tag){case 13:var u=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),cT(i,o)}function PI(i,r){return Fr(i,r)}var qh=null,Po=null,gm=!1,jh=!1,_m=!1,Sa=0;function xi(i){i!==Po&&i.next===null&&(Po===null?qh=Po=i:Po=Po.next=i),jh=!0,gm||(gm=!0,VI())}function vu(i,r){if(!_m&&jh){_m=!0;do for(var o=!1,u=qh;u!==null;){if(i!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var E=u.suspendedLanes,A=u.pingedLanes;m=(1<<31-an(42|i)+1)-1,m&=f&~(E&~A),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,pT(u,m))}else m=ze,m=Qa(u,u===at?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Yr(u,m)||(o=!0,pT(u,m));u=u.next}while(o);_m=!1}}function LI(){hT()}function hT(){jh=gm=!1;var i=0;Sa!==0&&(GI()&&(i=Sa),Sa=0);for(var r=Hn(),o=null,u=qh;u!==null;){var f=u.next,m=fT(u,r);m===0?(u.next=null,o===null?qh=f:o.next=f,f===null&&(Po=o)):(o=u,(i!==0||(m&3)!==0)&&(jh=!0)),u=f}vu(i)}function fT(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,f=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var E=31-an(m),A=1<<E,N=f[E];N===-1?((A&o)===0||(A&u)!==0)&&(f[E]=bl(A,r)):N<=r&&(i.expiredLanes|=A),m&=~A}if(r=at,o=ze,o=Qa(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===r&&(Ze===2||Ze===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&Hr(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Yr(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&Hr(u),Wa(o)){case 2:case 8:o=Ya;break;case 32:o=qr;break;case 268435456:o=$a;break;default:o=qr}return u=dT.bind(null,i),o=Fr(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&Hr(u),i.callbackPriority=2,i.callbackNode=null,2}function dT(i,r){if(Jt!==0&&Jt!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(Hh()&&i.callbackNode!==o)return null;var u=ze;return u=Qa(i,i===at?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(QE(i,u,r),fT(i,Hn()),i.callbackNode!=null&&i.callbackNode===o?dT.bind(null,i):null)}function pT(i,r){if(Hh())return null;QE(i,r,!0)}function VI(){YI(function(){(Xe&6)!==0?Fr(wl,LI):hT()})}function ym(){return Sa===0&&(Sa=Cl()),Sa}function mT(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:no(""+i)}function gT(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function UI(i,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var m=mT((f[Ct]||null).action),E=u.submitter;E&&(r=(r=E[Ct]||null)?mT(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var A=new io("action","action",null,u,f);i.push({event:A,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Sa!==0){var N=E?gT(f,E):new FormData(f);Up(o,{pending:!0,data:N,method:f.method,action:m},null,N)}}else typeof m=="function"&&(A.preventDefault(),N=E?gT(f,E):new FormData(f),Up(o,{pending:!0,data:N,method:f.method,action:m},m,N))},currentTarget:f}]})}}for(var vm=0;vm<ip.length;vm++){var Em=ip[vm],BI=Em.toLowerCase(),zI=Em[0].toUpperCase()+Em.slice(1);li(BI,"on"+zI)}li(Qy,"onAnimationEnd"),li(Wy,"onAnimationIteration"),li(Xy,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(iI,"onTransitionRun"),li(sI,"onTransitionStart"),li(rI,"onTransitionCancel"),li(Zy,"onTransitionEnd"),Xi("onMouseEnter",["mouseout","mouseover"]),Xi("onMouseLeave",["mouseout","mouseover"]),Xi("onPointerEnter",["pointerout","pointerover"]),Xi("onPointerLeave",["pointerout","pointerover"]),ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ai("onBeforeInput",["compositionend","keypress","textInput","paste"]),ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FI=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eu));function _T(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],f=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var A=u[E],N=A.instance,H=A.currentTarget;if(A=A.listener,N!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=H;try{m(f)}catch(X){Dh(X)}f.currentTarget=null,m=N}else for(E=0;E<u.length;E++){if(A=u[E],N=A.instance,H=A.currentTarget,A=A.listener,N!==m&&f.isPropagationStopped())break e;m=A,f.currentTarget=H;try{m(f)}catch(X){Dh(X)}f.currentTarget=null,m=N}}}}function xe(i,r){var o=r[Dl];o===void 0&&(o=r[Dl]=new Set);var u=i+"__bubble";o.has(u)||(yT(r,i,2,!1),o.add(u))}function Tm(i,r,o){var u=0;r&&(u|=4),yT(o,i,u,r)}var Gh="_reactListening"+Math.random().toString(36).slice(2);function Sm(i){if(!i[Gh]){i[Gh]=!0,kl.forEach(function(o){o!=="selectionchange"&&(FI.has(o)||Tm(o,!1,i),Tm(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[Gh]||(r[Gh]=!0,Tm("selectionchange",!1,r))}}function yT(i,r,o,u){switch(HT(r)){case 2:var f=p1;break;case 8:f=m1;break;default:f=Lm}o=f.bind(null,r,o,i),f=void 0,!Kn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?i.addEventListener(r,o,{capture:!0,passive:f}):i.addEventListener(r,o,!0):f!==void 0?i.addEventListener(r,o,{passive:f}):i.addEventListener(r,o,!1)}function Am(i,r,o,u,f){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var A=u.stateNode.containerInfo;if(A===f)break;if(E===4)for(E=u.return;E!==null;){var N=E.tag;if((N===3||N===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;A!==null;){if(E=Wi(A),E===null)return;if(N=E.tag,N===5||N===6||N===26||N===27){u=m=E;continue e}A=A.parentNode}}u=u.return}Yc(function(){var H=m,X=Gn(o),J=[];e:{var q=Jy.get(i);if(q!==void 0){var j=io,Se=i;switch(i){case"keypress":if(wi(o)===0)break e;case"keydown":case"keyup":j=uo;break;case"focusin":Se="focus",j=ao;break;case"focusout":Se="blur",j=ao;break;case"beforeblur":case"afterblur":j=ao;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Yn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Qd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=th;break;case Qy:case Wy:case Xy:j=oo;break;case Zy:j=ih;break;case"scroll":case"scrollend":j=$c;break;case"wheel":j=co;break;case"copy":case"cut":case"paste":j=lo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=jl;break;case"toggle":case"beforetoggle":j=rh}var ye=(r&4)!==0,nt=!ye&&(i==="scroll"||i==="scrollend"),V=ye?q!==null?q+"Capture":null:q;ye=[];for(var M=H,F;M!==null;){var Z=M;if(F=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||F===null||V===null||(Z=ta(M,V),Z!=null&&ye.push(Tu(M,Z,F))),nt)break;M=M.return}0<ye.length&&(q=new j(q,Se,null,o,X),J.push({event:q,listeners:ye}))}}if((r&7)===0){e:{if(q=i==="mouseover"||i==="pointerover",j=i==="mouseout"||i==="pointerout",q&&o!==es&&(Se=o.relatedTarget||o.fromElement)&&(Wi(Se)||Se[qn]))break e;if((j||q)&&(q=X.window===X?X:(q=X.ownerDocument)?q.defaultView||q.parentWindow:window,j?(Se=o.relatedTarget||o.toElement,j=H,Se=Se?Wi(Se):null,Se!==null&&(nt=l(Se),ye=Se.tag,Se!==nt||ye!==5&&ye!==27&&ye!==6)&&(Se=null)):(j=null,Se=H),j!==Se)){if(ye=Yn,Z="onMouseLeave",V="onMouseEnter",M="mouse",(i==="pointerout"||i==="pointerover")&&(ye=jl,Z="onPointerLeave",V="onPointerEnter",M="pointer"),nt=j==null?q:Ei(j),F=Se==null?q:Ei(Se),q=new ye(Z,M+"leave",j,o,X),q.target=nt,q.relatedTarget=F,Z=null,Wi(X)===H&&(ye=new ye(V,M+"enter",Se,o,X),ye.target=F,ye.relatedTarget=nt,Z=ye),nt=Z,j&&Se)t:{for(ye=j,V=Se,M=0,F=ye;F;F=Lo(F))M++;for(F=0,Z=V;Z;Z=Lo(Z))F++;for(;0<M-F;)ye=Lo(ye),M--;for(;0<F-M;)V=Lo(V),F--;for(;M--;){if(ye===V||V!==null&&ye===V.alternate)break t;ye=Lo(ye),V=Lo(V)}ye=null}else ye=null;j!==null&&vT(J,q,j,ye,!1),Se!==null&&nt!==null&&vT(J,nt,Se,ye,!0)}}e:{if(q=H?Ei(H):window,j=q.nodeName&&q.nodeName.toLowerCase(),j==="select"||j==="input"&&q.type==="file")var fe=Uy;else if(Pt(q))if(By)fe=eI;else{fe=ZC;var De=XC}else j=q.nodeName,!j||j.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?H&&Vl(H.elementType)&&(fe=Uy):fe=JC;if(fe&&(fe=fe(i,H))){rs(J,fe,o,X);break e}De&&De(i,q,H),i==="focusout"&&H&&q.type==="number"&&H.memoizedProps.value!=null&&Gs(q,"number",q.value)}switch(De=H?Ei(H):window,i){case"focusin":(Pt(De)||De.contentEditable==="true")&&(ho=De,ep=H,Yl=null);break;case"focusout":Yl=ep=ho=null;break;case"mousedown":tp=!0;break;case"contextmenu":case"mouseup":case"dragend":tp=!1,Yy(J,o,X);break;case"selectionchange":if(nI)break;case"keydown":case"keyup":Yy(J,o,X)}var me;if(Ci)e:{switch(i){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Ue?G(i,o)&&(Ee="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(Ee="onCompositionStart");Ee&&(v&&o.locale!=="ko"&&(Ue||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Ue&&(me=Bl()):(Ai=X,Ks="value"in Ai?Ai.value:Ai.textContent,Ue=!0)),De=Kh(H,Ee),0<De.length&&(Ee=new Hl(Ee,i,null,o,X),J.push({event:Ee,listeners:De}),me?Ee.data=me:(me=re(o),me!==null&&(Ee.data=me)))),(me=_?Mt(i,o):Be(i,o))&&(Ee=Kh(H,"onBeforeInput"),0<Ee.length&&(De=new Hl("onBeforeInput","beforeinput",null,o,X),J.push({event:De,listeners:Ee}),De.data=me)),UI(J,i,H,o,X)}_T(J,r)})}function Tu(i,r,o){return{instance:i,listener:r,currentTarget:o}}function Kh(i,r){for(var o=r+"Capture",u=[];i!==null;){var f=i,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=ta(i,o),f!=null&&u.unshift(Tu(i,f,m)),f=ta(i,r),f!=null&&u.push(Tu(i,f,m))),i.tag===3)return u;i=i.return}return[]}function Lo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function vT(i,r,o,u,f){for(var m=r._reactName,E=[];o!==null&&o!==u;){var A=o,N=A.alternate,H=A.stateNode;if(A=A.tag,N!==null&&N===u)break;A!==5&&A!==26&&A!==27||H===null||(N=H,f?(H=ta(o,m),H!=null&&E.unshift(Tu(o,H,N))):f||(H=ta(o,m),H!=null&&E.push(Tu(o,H,N)))),o=o.return}E.length!==0&&i.push({event:r,listeners:E})}var HI=/\r\n?/g,qI=/\u0000|\uFFFD/g;function ET(i){return(typeof i=="string"?i:""+i).replace(HI,`
`).replace(qI,"")}function TT(i,r){return r=ET(r),ET(i)===r}function Yh(){}function tt(i,r,o,u,f,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||jn(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&jn(i,""+u);break;case"className":Ti(i,"class",u);break;case"tabIndex":Ti(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Ti(i,o,u);break;case"style":Ll(i,u,m);break;case"data":if(r!=="object"){Ti(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=no(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&tt(i,r,"name",f.name,f,null),tt(i,r,"formEncType",f.formEncType,f,null),tt(i,r,"formMethod",f.formMethod,f,null),tt(i,r,"formTarget",f.formTarget,f,null)):(tt(i,r,"encType",f.encType,f,null),tt(i,r,"method",f.method,f,null),tt(i,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=no(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=Yh);break;case"onScroll":u!=null&&xe("scroll",i);break;case"onScrollEnd":u!=null&&xe("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=no(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":xe("beforetoggle",i),xe("toggle",i),js(i,"popover",u);break;case"xlinkActuate":Wt(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Wt(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Wt(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Wt(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Wt(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Wt(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Wt(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Wt(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Wt(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":js(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Yd.get(o)||o,js(i,o,u))}}function wm(i,r,o,u,f,m){switch(o){case"style":Ll(i,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof u=="string"?jn(i,u):(typeof u=="number"||typeof u=="bigint")&&jn(i,""+u);break;case"onScroll":u!=null&&xe("scroll",i);break;case"onScrollEnd":u!=null&&xe("scrollend",i);break;case"onClick":u!=null&&(i.onclick=Yh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xa.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),m=i[Ct]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,f);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):js(i,o,u)}}}function en(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",i),xe("load",i);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:tt(i,r,m,E,o,null)}}f&&tt(i,r,"srcSet",o.srcSet,o,null),u&&tt(i,r,"src",o.src,o,null);return;case"input":xe("invalid",i);var A=m=E=f=null,N=null,H=null;for(u in o)if(o.hasOwnProperty(u)){var X=o[u];if(X!=null)switch(u){case"name":f=X;break;case"type":E=X;break;case"checked":N=X;break;case"defaultChecked":H=X;break;case"value":m=X;break;case"defaultValue":A=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,r));break;default:tt(i,r,u,X,o,null)}}Zr(i,m,A,N,H,E,f,!1),to(i);return;case"select":xe("invalid",i),u=E=m=null;for(f in o)if(o.hasOwnProperty(f)&&(A=o[f],A!=null))switch(f){case"value":m=A;break;case"defaultValue":E=A;break;case"multiple":u=A;default:tt(i,r,f,A,o,null)}r=m,o=E,i.multiple=!!u,r!=null?Ji(i,!!u,r,!1):o!=null&&Ji(i,!!u,o,!0);return;case"textarea":xe("invalid",i),m=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(A=o[E],A!=null))switch(E){case"value":u=A;break;case"defaultValue":f=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:tt(i,r,E,A,o,null)}Jr(i,u,f,m),to(i);return;case"option":for(N in o)if(o.hasOwnProperty(N)&&(u=o[N],u!=null))switch(N){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:tt(i,r,N,u,o,null)}return;case"dialog":xe("beforetoggle",i),xe("toggle",i),xe("cancel",i),xe("close",i);break;case"iframe":case"object":xe("load",i);break;case"video":case"audio":for(u=0;u<Eu.length;u++)xe(Eu[u],i);break;case"image":xe("error",i),xe("load",i);break;case"details":xe("toggle",i);break;case"embed":case"source":case"link":xe("error",i),xe("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in o)if(o.hasOwnProperty(H)&&(u=o[H],u!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:tt(i,r,H,u,o,null)}return;default:if(Vl(r)){for(X in o)o.hasOwnProperty(X)&&(u=o[X],u!==void 0&&wm(i,r,X,u,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(u=o[A],u!=null&&tt(i,r,A,u,o,null))}function jI(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,A=null,N=null,H=null,X=null;for(j in o){var J=o[j];if(o.hasOwnProperty(j)&&J!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":N=J;default:u.hasOwnProperty(j)||tt(i,r,j,null,u,J)}}for(var q in u){var j=u[q];if(J=o[q],u.hasOwnProperty(q)&&(j!=null||J!=null))switch(q){case"type":m=j;break;case"name":f=j;break;case"checked":H=j;break;case"defaultChecked":X=j;break;case"value":E=j;break;case"defaultValue":A=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,r));break;default:j!==J&&tt(i,r,q,j,u,J)}}On(i,E,A,N,H,X,m,f);return;case"select":j=E=A=q=null;for(m in o)if(N=o[m],o.hasOwnProperty(m)&&N!=null)switch(m){case"value":break;case"multiple":j=N;default:u.hasOwnProperty(m)||tt(i,r,m,null,u,N)}for(f in u)if(m=u[f],N=o[f],u.hasOwnProperty(f)&&(m!=null||N!=null))switch(f){case"value":q=m;break;case"defaultValue":A=m;break;case"multiple":E=m;default:m!==N&&tt(i,r,f,m,u,N)}r=A,o=E,u=j,q!=null?Ji(i,!!o,q,!1):!!u!=!!o&&(r!=null?Ji(i,!!o,r,!0):Ji(i,!!o,o?[]:"",!1));return;case"textarea":j=q=null;for(A in o)if(f=o[A],o.hasOwnProperty(A)&&f!=null&&!u.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:tt(i,r,A,null,u,f)}for(E in u)if(f=u[E],m=o[E],u.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":q=f;break;case"defaultValue":j=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&tt(i,r,E,f,u,m)}Je(i,q,j);return;case"option":for(var Se in o)if(q=o[Se],o.hasOwnProperty(Se)&&q!=null&&!u.hasOwnProperty(Se))switch(Se){case"selected":i.selected=!1;break;default:tt(i,r,Se,null,u,q)}for(N in u)if(q=u[N],j=o[N],u.hasOwnProperty(N)&&q!==j&&(q!=null||j!=null))switch(N){case"selected":i.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:tt(i,r,N,q,u,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in o)q=o[ye],o.hasOwnProperty(ye)&&q!=null&&!u.hasOwnProperty(ye)&&tt(i,r,ye,null,u,q);for(H in u)if(q=u[H],j=o[H],u.hasOwnProperty(H)&&q!==j&&(q!=null||j!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:tt(i,r,H,q,u,j)}return;default:if(Vl(r)){for(var nt in o)q=o[nt],o.hasOwnProperty(nt)&&q!==void 0&&!u.hasOwnProperty(nt)&&wm(i,r,nt,void 0,u,q);for(X in u)q=u[X],j=o[X],!u.hasOwnProperty(X)||q===j||q===void 0&&j===void 0||wm(i,r,X,q,u,j);return}}for(var V in o)q=o[V],o.hasOwnProperty(V)&&q!=null&&!u.hasOwnProperty(V)&&tt(i,r,V,null,u,q);for(J in u)q=u[J],j=o[J],!u.hasOwnProperty(J)||q===j||q==null&&j==null||tt(i,r,J,q,u,j)}var Rm=null,bm=null;function $h(i){return i.nodeType===9?i:i.ownerDocument}function ST(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function AT(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Cm(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Im=null;function GI(){var i=window.event;return i&&i.type==="popstate"?i===Im?!1:(Im=i,!0):(Im=null,!1)}var wT=typeof setTimeout=="function"?setTimeout:void 0,KI=typeof clearTimeout=="function"?clearTimeout:void 0,RT=typeof Promise=="function"?Promise:void 0,YI=typeof queueMicrotask=="function"?queueMicrotask:typeof RT<"u"?function(i){return RT.resolve(null).then(i).catch($I)}:wT;function $I(i){setTimeout(function(){throw i})}function lr(i){return i==="head"}function bT(i,r){var o=r,u=0,f=0;do{var m=o.nextSibling;if(i.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=i.ownerDocument;if(o&1&&Su(E.documentElement),o&2&&Su(E.body),o&4)for(o=E.head,Su(o),E=o.firstChild;E;){var A=E.nextSibling,N=E.nodeName;E[$r]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=A}}if(f===0){i.removeChild(m),Ou(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);Ou(r)}function Nm(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Nm(o),qs(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function QI(i,r,o,u){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[$r])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==f.rel||i.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=ci(i.nextSibling),i===null)break}return null}function WI(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=ci(i.nextSibling),i===null))return null;return i}function Om(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function XI(i,r){var o=i.ownerDocument;if(i.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function ci(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var Dm=null;function CT(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function IT(i,r,o){switch(r=$h(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function Su(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);qs(i)}var ei=new Map,NT=new Set;function Qh(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var ys=ae.d;ae.d={f:ZI,r:JI,D:e1,C:t1,L:n1,m:i1,X:r1,S:s1,M:a1};function ZI(){var i=ys.f(),r=zh();return i||r}function JI(i){var r=vi(i);r!==null&&r.tag===5&&r.type==="form"?Qv(r):ys.r(i)}var Vo=typeof document>"u"?null:document;function OT(i,r,o){var u=Vo;if(u&&typeof r=="string"&&r){var f=It(r);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),NT.has(f)||(NT.add(f),i={rel:i,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),en(r,"link",i),At(r),u.head.appendChild(r)))}}function e1(i){ys.D(i),OT("dns-prefetch",i,null)}function t1(i,r){ys.C(i,r),OT("preconnect",i,r)}function n1(i,r,o){ys.L(i,r,o);var u=Vo;if(u&&i&&r){var f='link[rel="preload"][as="'+It(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+It(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+It(o.imageSizes)+'"]')):f+='[href="'+It(i)+'"]';var m=f;switch(r){case"style":m=Uo(i);break;case"script":m=Bo(i)}ei.has(m)||(i=y({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),ei.set(m,i),u.querySelector(f)!==null||r==="style"&&u.querySelector(Au(m))||r==="script"&&u.querySelector(wu(m))||(r=u.createElement("link"),en(r,"link",i),At(r),u.head.appendChild(r)))}}function i1(i,r){ys.m(i,r);var o=Vo;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+It(u)+'"][href="'+It(i)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Bo(i)}if(!ei.has(m)&&(i=y({rel:"modulepreload",href:i},r),ei.set(m,i),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(wu(m)))return}u=o.createElement("link"),en(u,"link",i),At(u),o.head.appendChild(u)}}}function s1(i,r,o){ys.S(i,r,o);var u=Vo;if(u&&i){var f=gn(u).hoistableStyles,m=Uo(i);r=r||"default";var E=f.get(m);if(!E){var A={loading:0,preload:null};if(E=u.querySelector(Au(m)))A.loading=5;else{i=y({rel:"stylesheet",href:i,"data-precedence":r},o),(o=ei.get(m))&&km(i,o);var N=E=u.createElement("link");At(N),en(N,"link",i),N._p=new Promise(function(H,X){N.onload=H,N.onerror=X}),N.addEventListener("load",function(){A.loading|=1}),N.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Wh(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:A},f.set(m,E)}}}function r1(i,r){ys.X(i,r);var o=Vo;if(o&&i){var u=gn(o).hoistableScripts,f=Bo(i),m=u.get(f);m||(m=o.querySelector(wu(f)),m||(i=y({src:i,async:!0},r),(r=ei.get(f))&&xm(i,r),m=o.createElement("script"),At(m),en(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function a1(i,r){ys.M(i,r);var o=Vo;if(o&&i){var u=gn(o).hoistableScripts,f=Bo(i),m=u.get(f);m||(m=o.querySelector(wu(f)),m||(i=y({src:i,async:!0,type:"module"},r),(r=ei.get(f))&&xm(i,r),m=o.createElement("script"),At(m),en(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function DT(i,r,o,u){var f=(f=we.current)?Qh(f):null;if(!f)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Uo(o.href),o=gn(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=Uo(o.href);var m=gn(f).hoistableStyles,E=m.get(i);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,E),(m=f.querySelector(Au(i)))&&!m._p&&(E.instance=m,E.state.loading=5),ei.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ei.set(i,o),m||o1(f,i,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Bo(o),o=gn(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function Uo(i){return'href="'+It(i)+'"'}function Au(i){return'link[rel="stylesheet"]['+i+"]"}function kT(i){return y({},i,{"data-precedence":i.precedence,precedence:null})}function o1(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),en(r,"link",o),At(r),i.head.appendChild(r))}function Bo(i){return'[src="'+It(i)+'"]'}function wu(i){return"script[async]"+i}function xT(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+It(o.href)+'"]');if(u)return r.instance=u,At(u),u;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),At(u),en(u,"style",f),Wh(u,o.precedence,i),r.instance=u;case"stylesheet":f=Uo(o.href);var m=i.querySelector(Au(f));if(m)return r.state.loading|=4,r.instance=m,At(m),m;u=kT(o),(f=ei.get(f))&&km(u,f),m=(i.ownerDocument||i).createElement("link"),At(m);var E=m;return E._p=new Promise(function(A,N){E.onload=A,E.onerror=N}),en(m,"link",u),r.state.loading|=4,Wh(m,o.precedence,i),r.instance=m;case"script":return m=Bo(o.src),(f=i.querySelector(wu(m)))?(r.instance=f,At(f),f):(u=o,(f=ei.get(m))&&(u=y({},o),xm(u,f)),i=i.ownerDocument||i,f=i.createElement("script"),At(f),en(f,"link",u),i.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,Wh(u,o.precedence,i));return r.instance}function Wh(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,E=0;E<u.length;E++){var A=u[E];if(A.dataset.precedence===r)m=A;else if(m!==f)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function km(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function xm(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var Xh=null;function MT(i,r,o){if(Xh===null){var u=new Map,f=Xh=new Map;f.set(o,u)}else f=Xh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var m=o[f];if(!(m[$r]||m[xt]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=i+E;var A=u.get(E);A?A.push(m):u.set(E,[m])}}return u}function PT(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function l1(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function LT(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Ru=null;function u1(){}function c1(i,r,o){if(Ru===null)throw Error(s(475));var u=Ru;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Uo(o.href),m=i.querySelector(Au(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(u.count++,u=Zh.bind(u),i.then(u,u)),r.state.loading|=4,r.instance=m,At(m);return}m=i.ownerDocument||i,o=kT(o),(f=ei.get(f))&&km(o,f),m=m.createElement("link"),At(m);var E=m;E._p=new Promise(function(A,N){E.onload=A,E.onerror=N}),en(m,"link",o),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=Zh.bind(u),i.addEventListener("load",r),i.addEventListener("error",r))}}function h1(){if(Ru===null)throw Error(s(475));var i=Ru;return i.stylesheets&&i.count===0&&Mm(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&Mm(i,i.stylesheets),i.unsuspend){var u=i.unsuspend;i.unsuspend=null,u()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function Zh(){if(this.count--,this.count===0){if(this.stylesheets)Mm(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var Jh=null;function Mm(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,Jh=new Map,r.forEach(f1,i),Jh=null,Zh.call(i))}function f1(i,r){if(!(r.state.loading&4)){var o=Jh.get(i);if(o)var u=o.get(null);else{o=new Map,Jh.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,f),o.set(E,f),this.count++,u=Zh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),r.state.loading|=4}}var bu={$$typeof:te,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function d1(i,r,o,u,f,m,E,A){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$i(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$i(0),this.hiddenUpdates=$i(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function VT(i,r,o,u,f,m,E,A,N,H,X,J){return i=new d1(i,r,o,E,A,N,H,J),r=1,m===!0&&(r|=24),m=kn(3,null,null,r),i.current=m,m.stateNode=i,r=mp(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},vp(m),i}function UT(i){return i?(i=go,i):go}function BT(i,r,o,u,f,m){f=UT(f),u.context===null?u.context=f:u.pendingContext=f,u=Qs(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=Ws(i,u,r),o!==null&&(Vn(o,i,r),nu(o,i,r))}function zT(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function Pm(i,r){zT(i,r),(i=i.alternate)&&zT(i,r)}function FT(i){if(i.tag===13){var r=mo(i,67108864);r!==null&&Vn(r,i,67108864),Pm(i,67108864)}}var ef=!0;function p1(i,r,o,u){var f=$.T;$.T=null;var m=ae.p;try{ae.p=2,Lm(i,r,o,u)}finally{ae.p=m,$.T=f}}function m1(i,r,o,u){var f=$.T;$.T=null;var m=ae.p;try{ae.p=8,Lm(i,r,o,u)}finally{ae.p=m,$.T=f}}function Lm(i,r,o,u){if(ef){var f=Vm(u);if(f===null)Am(i,r,u,tf,o),qT(i,u);else if(_1(f,i,r,o,u))u.stopPropagation();else if(qT(i,u),r&4&&-1<g1.indexOf(i)){for(;f!==null;){var m=vi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=ri(m.pendingLanes);if(E!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;E;){var N=1<<31-an(E);A.entanglements[1]|=N,E&=~N}xi(m),(Xe&6)===0&&(Uh=Hn()+500,vu(0))}}break;case 13:A=mo(m,2),A!==null&&Vn(A,m,2),zh(),Pm(m,2)}if(m=Vm(u),m===null&&Am(i,r,u,tf,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else Am(i,r,u,null,o)}}function Vm(i){return i=Gn(i),Um(i)}var tf=null;function Um(i){if(tf=null,i=Wi(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=c(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return tf=i,null}function HT(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fd()){case wl:return 2;case Ya:return 8;case qr:case Hd:return 32;case $a:return 268435456;default:return 32}default:return 32}}var Bm=!1,ur=null,cr=null,hr=null,Cu=new Map,Iu=new Map,fr=[],g1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qT(i,r){switch(i){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Cu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Iu.delete(r.pointerId)}}function Nu(i,r,o,u,f,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},r!==null&&(r=vi(r),r!==null&&FT(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),i)}function _1(i,r,o,u,f){switch(r){case"focusin":return ur=Nu(ur,i,r,o,u,f),!0;case"dragenter":return cr=Nu(cr,i,r,o,u,f),!0;case"mouseover":return hr=Nu(hr,i,r,o,u,f),!0;case"pointerover":var m=f.pointerId;return Cu.set(m,Nu(Cu.get(m)||null,i,r,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,Iu.set(m,Nu(Iu.get(m)||null,i,r,o,u,f)),!0}return!1}function jT(i){var r=Wi(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){i.blockedOn=r,zc(i.priority,function(){if(o.tag===13){var u=Ln();u=zs(u);var f=mo(o,u);f!==null&&Vn(f,o,u),Pm(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function nf(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=Vm(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);es=u,o.target.dispatchEvent(u),es=null}else return r=vi(o),r!==null&&FT(r),i.blockedOn=o,!1;r.shift()}return!0}function GT(i,r,o){nf(i)&&o.delete(r)}function y1(){Bm=!1,ur!==null&&nf(ur)&&(ur=null),cr!==null&&nf(cr)&&(cr=null),hr!==null&&nf(hr)&&(hr=null),Cu.forEach(GT),Iu.forEach(GT)}function sf(i,r){i.blockedOn===r&&(i.blockedOn=null,Bm||(Bm=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,y1)))}var rf=null;function KT(i){rf!==i&&(rf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){rf===i&&(rf=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],f=i[r+2];if(typeof u!="function"){if(Um(u||o)===null)continue;break}var m=vi(o);m!==null&&(i.splice(r,3),r-=3,Up(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function Ou(i){function r(N){return sf(N,i)}ur!==null&&sf(ur,i),cr!==null&&sf(cr,i),hr!==null&&sf(hr,i),Cu.forEach(r),Iu.forEach(r);for(var o=0;o<fr.length;o++){var u=fr[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<fr.length&&(o=fr[0],o.blockedOn===null);)jT(o),o.blockedOn===null&&fr.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],E=f[Ct]||null;if(typeof m=="function")E||KT(o);else if(E){var A=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[Ct]||null)A=E.formAction;else if(Um(f)!==null)continue}else A=E.action;typeof A=="function"?o[u+1]=A:(o.splice(u,3),u-=3),KT(o)}}}function zm(i){this._internalRoot=i}af.prototype.render=zm.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=Ln();BT(o,u,i,r,null,null)},af.prototype.unmount=zm.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;BT(i.current,2,null,i,null,null),zh(),r[qn]=null}};function af(i){this._internalRoot=i}af.prototype.unstable_scheduleHydration=function(i){if(i){var r=Fs();i={blockedOn:null,target:i,priority:r};for(var o=0;o<fr.length&&r!==0&&r<fr[o].priority;o++);fr.splice(o,0,i),o===0&&jT(i)}};var YT=e.version;if(YT!=="19.1.0")throw Error(s(527,YT,"19.1.0"));ae.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=p(r),i=i!==null?g(i):null,i=i===null?null:i.stateNode,i};var v1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var of=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!of.isDisabled&&of.supportsFiber)try{vt=of.inject(v1),We=of}catch{}}return ku.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,u="",f=uE,m=cE,E=hE,A=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(A=r.unstable_transitionCallbacks)),r=VT(i,1,!1,null,null,o,u,f,m,E,A,null),i[qn]=r.current,Sm(i),new zm(r)},ku.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var u=!1,f="",m=uE,E=cE,A=hE,N=null,H=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(N=o.unstable_transitionCallbacks),o.formState!==void 0&&(H=o.formState)),r=VT(i,1,!0,r,o??null,u,f,m,E,A,N,H),r.context=UT(null),o=r.current,u=Ln(),u=zs(u),f=Qs(u),f.callback=null,Ws(o,f,u),o=u,r.current.lanes=o,Qi(r,o),xi(r),i[qn]=r.current,Sm(i),new af(r)},ku.version="19.1.0",ku}var i0;function N1(){if(i0)return qm.exports;i0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),qm.exports=I1(),qm.exports}var O1=N1();const D1="modulepreload",k1=function(n){return"/Acad/"+n},s0={},Ba=function(e,t,s){let a=Promise.resolve();if(t&&t.length>0){let c=function(g){return Promise.all(g.map(y=>Promise.resolve(y).then(T=>({status:"fulfilled",value:T}),T=>({status:"rejected",reason:T}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));a=c(t.map(g=>{if(g=k1(g),g in s0)return;s0[g]=!0;const y=g.endsWith(".css"),T=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${T}`))return;const S=document.createElement("link");if(S.rel=y?"stylesheet":D1,y||(S.as="script"),S.crossOrigin="",S.href=g,p&&S.setAttribute("nonce",p),document.head.appendChild(S),y)return new Promise((I,C)=>{S.addEventListener("load",I),S.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${g}`)))})}))}function l(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return a.then(c=>{for(const d of c||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})},x1="_navBarWrapper_1akrc_36",M1="_left_1akrc_53",P1="_title_1akrc_57",L1="_mid_1akrc_66",V1="_Links_1akrc_72",U1="_content_1akrc_81",B1="_ind_1akrc_87",z1="_indicator_1akrc_92",F1="_right_1akrc_106",H1="_authButts_1akrc_106",q1="_HamburgerButt_1akrc_107",j1="_signOut_1akrc_139",G1="_sidebar_1akrc_152",K1="_hideSideBar_1akrc_157",Y1="_signUp_1akrc_228",$1="_indicated_1akrc_308",Q1="_indication_1akrc_321",je={navBarWrapper:x1,left:M1,title:P1,mid:L1,Links:V1,content:U1,ind:B1,indicator:z1,right:F1,authButts:H1,HamburgerButt:q1,signOut:j1,sidebar:G1,hideSideBar:K1,signUp:Y1,indicated:$1,indication:Q1};var xu={},r0;function W1(){if(r0)return xu;r0=1,Object.defineProperty(xu,"__esModule",{value:!0}),xu.parse=c,xu.serialize=g;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,l=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function c(S,I){const C=new l,z=S.length;if(z<2)return C;const L=(I==null?void 0:I.decode)||y;let Y=0;do{const W=S.indexOf("=",Y);if(W===-1)break;const te=S.indexOf(";",Y),le=te===-1?z:te;if(W>le){Y=S.lastIndexOf(";",W-1)+1;continue}const ce=d(S,Y,W),ge=p(S,W,ce),k=S.slice(ce,ge);if(C[k]===void 0){let R=d(S,W+1,le),b=p(S,le,R);const x=L(S.slice(R,b));C[k]=x}Y=le+1}while(Y<z);return C}function d(S,I,C){do{const z=S.charCodeAt(I);if(z!==32&&z!==9)return I}while(++I<C);return C}function p(S,I,C){for(;I>C;){const z=S.charCodeAt(--I);if(z!==32&&z!==9)return I+1}return C}function g(S,I,C){const z=(C==null?void 0:C.encode)||encodeURIComponent;if(!n.test(S))throw new TypeError(`argument name is invalid: ${S}`);const L=z(I);if(!e.test(L))throw new TypeError(`argument val is invalid: ${I}`);let Y=S+"="+L;if(!C)return Y;if(C.maxAge!==void 0){if(!Number.isInteger(C.maxAge))throw new TypeError(`option maxAge is invalid: ${C.maxAge}`);Y+="; Max-Age="+C.maxAge}if(C.domain){if(!t.test(C.domain))throw new TypeError(`option domain is invalid: ${C.domain}`);Y+="; Domain="+C.domain}if(C.path){if(!s.test(C.path))throw new TypeError(`option path is invalid: ${C.path}`);Y+="; Path="+C.path}if(C.expires){if(!T(C.expires)||!Number.isFinite(C.expires.valueOf()))throw new TypeError(`option expires is invalid: ${C.expires}`);Y+="; Expires="+C.expires.toUTCString()}if(C.httpOnly&&(Y+="; HttpOnly"),C.secure&&(Y+="; Secure"),C.partitioned&&(Y+="; Partitioned"),C.priority)switch(typeof C.priority=="string"?C.priority.toLowerCase():void 0){case"low":Y+="; Priority=Low";break;case"medium":Y+="; Priority=Medium";break;case"high":Y+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${C.priority}`)}if(C.sameSite)switch(typeof C.sameSite=="string"?C.sameSite.toLowerCase():C.sameSite){case!0:case"strict":Y+="; SameSite=Strict";break;case"lax":Y+="; SameSite=Lax";break;case"none":Y+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${C.sameSite}`)}return Y}function y(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function T(S){return a.call(S)==="[object Date]"}return xu}W1();var a0="popstate";function X1(n={}){function e(a,l){let{pathname:c="/",search:d="",hash:p=""}=za(a.location.hash.substring(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),_g("",{pathname:c,search:d,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(a,l){let c=a.document.querySelector("base"),d="";if(c&&c.getAttribute("href")){let p=a.location.href,g=p.indexOf("#");d=g===-1?p:p.slice(0,g)}return d+"#"+(typeof l=="string"?l:sc(l))}function s(a,l){gi(a.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return J1(e,t,s,n)}function gt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function gi(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Z1(){return Math.random().toString(36).substring(2,10)}function o0(n,e){return{usr:n.state,key:n.key,idx:e}}function _g(n,e,t=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?za(e):e,state:t,key:e&&e.key||s||Z1()}}function sc({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function za(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let s=n.indexOf("?");s>=0&&(e.search=n.substring(s),n=n.substring(0,s)),n&&(e.pathname=n)}return e}function J1(n,e,t,s={}){let{window:a=document.defaultView,v5Compat:l=!1}=s,c=a.history,d="POP",p=null,g=y();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function y(){return(c.state||{idx:null}).idx}function T(){d="POP";let L=y(),Y=L==null?null:L-g;g=L,p&&p({action:d,location:z.location,delta:Y})}function S(L,Y){d="PUSH";let W=_g(z.location,L,Y);t&&t(W,L),g=y()+1;let te=o0(W,g),le=z.createHref(W);try{c.pushState(te,"",le)}catch(ce){if(ce instanceof DOMException&&ce.name==="DataCloneError")throw ce;a.location.assign(le)}l&&p&&p({action:d,location:z.location,delta:1})}function I(L,Y){d="REPLACE";let W=_g(z.location,L,Y);t&&t(W,L),g=y();let te=o0(W,g),le=z.createHref(W);c.replaceState(te,"",le),l&&p&&p({action:d,location:z.location,delta:0})}function C(L){return eN(L)}let z={get action(){return d},get location(){return n(a,c)},listen(L){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(a0,T),p=L,()=>{a.removeEventListener(a0,T),p=null}},createHref(L){return e(a,L)},createURL:C,encodeLocation(L){let Y=C(L);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:S,replace:I,go(L){return c.go(L)}};return z}function eN(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),gt(t,"No window.location.(origin|href) available to create URL");let s=typeof n=="string"?n:sc(n);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function bA(n,e,t="/"){return tN(n,e,t,!1)}function tN(n,e,t,s){let a=typeof e=="string"?za(e):e,l=Ns(a.pathname||"/",t);if(l==null)return null;let c=CA(n);nN(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let g=dN(l);d=hN(c[p],g,s)}return d}function CA(n,e=[],t=[],s=""){let a=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(gt(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let g=bs([s,p.relativePath]),y=t.concat(p);l.children&&l.children.length>0&&(gt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),CA(l.children,e,y,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:uN(g,l.index),routesMeta:y})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let p of IA(l.path))a(l,c,p)}),e}function IA(n){let e=n.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return a?[l,""]:[l];let c=IA(s.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),a&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function nN(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:cN(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var iN=/^:[\w-]+$/,sN=3,rN=2,aN=1,oN=10,lN=-2,l0=n=>n==="*";function uN(n,e){let t=n.split("/"),s=t.length;return t.some(l0)&&(s+=lN),e&&(s+=rN),t.filter(a=>!l0(a)).reduce((a,l)=>a+(iN.test(l)?sN:l===""?aN:oN),s)}function cN(n,e){return n.length===e.length&&n.slice(0,-1).every((s,a)=>s===e[a])?n[n.length-1]-e[e.length-1]:0}function hN(n,e,t=!1){let{routesMeta:s}=n,a={},l="/",c=[];for(let d=0;d<s.length;++d){let p=s[d],g=d===s.length-1,y=l==="/"?e:e.slice(l.length)||"/",T=Df({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},y),S=p.route;if(!T&&g&&t&&!s[s.length-1].route.index&&(T=Df({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!T)return null;Object.assign(a,T.params),c.push({params:a,pathname:bs([l,T.pathname]),pathnameBase:_N(bs([l,T.pathnameBase])),route:S}),T.pathnameBase!=="/"&&(l=bs([l,T.pathnameBase]))}return c}function Df(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,s]=fN(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:s.reduce((g,{paramName:y,isOptional:T},S)=>{if(y==="*"){let C=d[S]||"";c=l.slice(0,l.length-C.length).replace(/(.)\/+$/,"$1")}const I=d[S];return T&&!I?g[y]=void 0:g[y]=(I||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:n}}function fN(n,e=!1,t=!0){gi(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(s.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function dN(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return gi(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Ns(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=n.charAt(t);return s&&s!=="/"?null:n.slice(t)||"/"}function pN(n,e="/"){let{pathname:t,search:s="",hash:a=""}=typeof n=="string"?za(n):n;return{pathname:t?t.startsWith("/")?t:mN(t,e):e,search:yN(s),hash:vN(a)}}function mN(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Ym(n,e,t,s){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gN(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function NA(n){let e=gN(n);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function OA(n,e,t,s=!1){let a;typeof n=="string"?a=za(n):(a={...n},gt(!a.pathname||!a.pathname.includes("?"),Ym("?","pathname","search",a)),gt(!a.pathname||!a.pathname.includes("#"),Ym("#","pathname","hash",a)),gt(!a.search||!a.search.includes("#"),Ym("#","search","hash",a)));let l=n===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=t;else{let T=e.length-1;if(!s&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),T-=1;a.pathname=S.join("/")}d=T>=0?e[T]:"/"}let p=pN(a,d),g=c&&c!=="/"&&c.endsWith("/"),y=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(g||y)&&(p.pathname+="/"),p}var bs=n=>n.join("/").replace(/\/\/+/g,"/"),_N=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),yN=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,vN=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function EN(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var DA=["POST","PUT","PATCH","DELETE"];new Set(DA);var TN=["GET",...DA];new Set(TN);var hl=K.createContext(null);hl.displayName="DataRouter";var ud=K.createContext(null);ud.displayName="DataRouterState";var kA=K.createContext({isTransitioning:!1});kA.displayName="ViewTransition";var SN=K.createContext(new Map);SN.displayName="Fetchers";var AN=K.createContext(null);AN.displayName="Await";var Gi=K.createContext(null);Gi.displayName="Navigation";var yc=K.createContext(null);yc.displayName="Location";var Ps=K.createContext({outlet:null,matches:[],isDataRoute:!1});Ps.displayName="Route";var o_=K.createContext(null);o_.displayName="RouteError";function wN(n,{relative:e}={}){gt(vc(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=K.useContext(Gi),{hash:a,pathname:l,search:c}=Ec(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:bs([t,l])),s.createHref({pathname:d,search:c,hash:a})}function vc(){return K.useContext(yc)!=null}function Fa(){return gt(vc(),"useLocation() may be used only in the context of a <Router> component."),K.useContext(yc).location}var xA="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function MA(n){K.useContext(Gi).static||K.useLayoutEffect(n)}function PA(){let{isDataRoute:n}=K.useContext(Ps);return n?VN():RN()}function RN(){gt(vc(),"useNavigate() may be used only in the context of a <Router> component.");let n=K.useContext(hl),{basename:e,navigator:t}=K.useContext(Gi),{matches:s}=K.useContext(Ps),{pathname:a}=Fa(),l=JSON.stringify(NA(s)),c=K.useRef(!1);return MA(()=>{c.current=!0}),K.useCallback((p,g={})=>{if(gi(c.current,xA),!c.current)return;if(typeof p=="number"){t.go(p);return}let y=OA(p,JSON.parse(l),a,g.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:bs([e,y.pathname])),(g.replace?t.replace:t.push)(y,g.state,g)},[e,t,l,a,n])}K.createContext(null);function Ec(n,{relative:e}={}){let{matches:t}=K.useContext(Ps),{pathname:s}=Fa(),a=JSON.stringify(NA(t));return K.useMemo(()=>OA(n,JSON.parse(a),s,e==="path"),[n,a,s,e])}function bN(n,e){return LA(n,e)}function LA(n,e,t,s){var Y;gt(vc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=K.useContext(Gi),{matches:l}=K.useContext(Ps),c=l[l.length-1],d=c?c.params:{},p=c?c.pathname:"/",g=c?c.pathnameBase:"/",y=c&&c.route;{let W=y&&y.path||"";VA(p,!y||W.endsWith("*")||W.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${W}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${W}"> to <Route path="${W==="/"?"*":`${W}/*`}">.`)}let T=Fa(),S;if(e){let W=typeof e=="string"?za(e):e;gt(g==="/"||((Y=W.pathname)==null?void 0:Y.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${W.pathname}" was given in the \`location\` prop.`),S=W}else S=T;let I=S.pathname||"/",C=I;if(g!=="/"){let W=g.replace(/^\//,"").split("/");C="/"+I.replace(/^\//,"").split("/").slice(W.length).join("/")}let z=bA(n,{pathname:C});gi(y||z!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),gi(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=DN(z&&z.map(W=>Object.assign({},W,{params:Object.assign({},d,W.params),pathname:bs([g,a.encodeLocation?a.encodeLocation(W.pathname).pathname:W.pathname]),pathnameBase:W.pathnameBase==="/"?g:bs([g,a.encodeLocation?a.encodeLocation(W.pathnameBase).pathname:W.pathnameBase])})),l,t,s);return e&&L?K.createElement(yc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},L):L}function CN(){let n=LN(),e=EN(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=K.createElement(K.Fragment,null,K.createElement("p",null,"💿 Hey developer 👋"),K.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",K.createElement("code",{style:l},"ErrorBoundary")," or"," ",K.createElement("code",{style:l},"errorElement")," prop on your route.")),K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},e),t?K.createElement("pre",{style:a},t):null,c)}var IN=K.createElement(CN,null),NN=class extends K.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?K.createElement(Ps.Provider,{value:this.props.routeContext},K.createElement(o_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ON({routeContext:n,match:e,children:t}){let s=K.useContext(hl);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),K.createElement(Ps.Provider,{value:n},t)}function DN(n,e=[],t=null,s=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,l=t==null?void 0:t.errors;if(l!=null){let p=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);gt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let c=!1,d=-1;if(t)for(let p=0;p<a.length;p++){let g=a[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=p),g.route.id){let{loaderData:y,errors:T}=t,S=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!T||T[g.route.id]===void 0);if(g.route.lazy||S){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,g,y)=>{let T,S=!1,I=null,C=null;t&&(T=l&&g.route.id?l[g.route.id]:void 0,I=g.route.errorElement||IN,c&&(d<0&&y===0?(VA("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,C=null):d===y&&(S=!0,C=g.route.hydrateFallbackElement||null)));let z=e.concat(a.slice(0,y+1)),L=()=>{let Y;return T?Y=I:S?Y=C:g.route.Component?Y=K.createElement(g.route.Component,null):g.route.element?Y=g.route.element:Y=p,K.createElement(ON,{match:g,routeContext:{outlet:p,matches:z,isDataRoute:t!=null},children:Y})};return t&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?K.createElement(NN,{location:t.location,revalidation:t.revalidation,component:I,error:T,children:L(),routeContext:{outlet:null,matches:z,isDataRoute:!0}}):L()},null)}function l_(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kN(n){let e=K.useContext(hl);return gt(e,l_(n)),e}function xN(n){let e=K.useContext(ud);return gt(e,l_(n)),e}function MN(n){let e=K.useContext(Ps);return gt(e,l_(n)),e}function u_(n){let e=MN(n),t=e.matches[e.matches.length-1];return gt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function PN(){return u_("useRouteId")}function LN(){var s;let n=K.useContext(o_),e=xN("useRouteError"),t=u_("useRouteError");return n!==void 0?n:(s=e.errors)==null?void 0:s[t]}function VN(){let{router:n}=kN("useNavigate"),e=u_("useNavigate"),t=K.useRef(!1);return MA(()=>{t.current=!0}),K.useCallback(async(a,l={})=>{gi(t.current,xA),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...l}))},[n,e])}var u0={};function VA(n,e,t){!e&&!u0[n]&&(u0[n]=!0,gi(!1,t))}K.memo(UN);function UN({routes:n,future:e,state:t}){return LA(n,void 0,t,e)}function UA(n){gt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function BN({basename:n="/",children:e=null,location:t,navigationType:s="POP",navigator:a,static:l=!1}){gt(!vc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=K.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof t=="string"&&(t=za(t));let{pathname:p="/",search:g="",hash:y="",state:T=null,key:S="default"}=t,I=K.useMemo(()=>{let C=Ns(p,c);return C==null?null:{location:{pathname:C,search:g,hash:y,state:T,key:S},navigationType:s}},[c,p,g,y,T,S,s]);return gi(I!=null,`<Router basename="${c}"> is not able to match the URL "${p}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:K.createElement(Gi.Provider,{value:d},K.createElement(yc.Provider,{children:e,value:I}))}function zN({children:n,location:e}){return bN(yg(n),e)}function yg(n,e=[]){let t=[];return K.Children.forEach(n,(s,a)=>{if(!K.isValidElement(s))return;let l=[...e,a];if(s.type===K.Fragment){t.push.apply(t,yg(s.props.children,l));return}gt(s.type===UA,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),gt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=yg(s.props.children,l)),t.push(c)}),t}var vf="get",Ef="application/x-www-form-urlencoded";function cd(n){return n!=null&&typeof n.tagName=="string"}function FN(n){return cd(n)&&n.tagName.toLowerCase()==="button"}function HN(n){return cd(n)&&n.tagName.toLowerCase()==="form"}function qN(n){return cd(n)&&n.tagName.toLowerCase()==="input"}function jN(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function GN(n,e){return n.button===0&&(!e||e==="_self")&&!jN(n)}var lf=null;function KN(){if(lf===null)try{new FormData(document.createElement("form"),0),lf=!1}catch{lf=!0}return lf}var YN=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $m(n){return n!=null&&!YN.has(n)?(gi(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ef}"`),null):n}function $N(n,e){let t,s,a,l,c;if(HN(n)){let d=n.getAttribute("action");s=d?Ns(d,e):null,t=n.getAttribute("method")||vf,a=$m(n.getAttribute("enctype"))||Ef,l=new FormData(n)}else if(FN(n)||qN(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(s=p?Ns(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||vf,a=$m(n.getAttribute("formenctype"))||$m(d.getAttribute("enctype"))||Ef,l=new FormData(d,n),!KN()){let{name:g,type:y,value:T}=n;if(y==="image"){let S=g?`${g}.`:"";l.append(`${S}x`,"0"),l.append(`${S}y`,"0")}else g&&l.append(g,T)}}else{if(cd(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=vf,s=null,a=Ef,c=n}return l&&a==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:a,formData:l,body:c}}function c_(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function QN(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function WN(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function XN(n,e,t){let s=await Promise.all(n.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await QN(l,t);return c.links?c.links():[]}return[]}));return tO(s.flat(1).filter(WN).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function c0(n,e,t,s,a,l){let c=(p,g)=>t[g]?p.route.id!==t[g].route.id:!0,d=(p,g)=>{var y;return t[g].pathname!==p.pathname||((y=t[g].route.path)==null?void 0:y.endsWith("*"))&&t[g].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,g)=>c(p,g)||d(p,g)):l==="data"?e.filter((p,g)=>{var T;let y=s.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(c(p,g)||d(p,g))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function ZN(n,e,{includeHydrateFallback:t}={}){return JN(n.map(s=>{let a=e.routes[s.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function JN(n){return[...new Set(n)]}function eO(n){let e={},t=Object.keys(n).sort();for(let s of t)e[s]=n[s];return e}function tO(n,e){let t=new Set;return new Set(e),n.reduce((s,a)=>{let l=JSON.stringify(eO(a));return t.has(l)||(t.add(l),s.push({key:l,link:a})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var nO=new Set([100,101,204,205]);function iO(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&Ns(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function BA(){let n=K.useContext(hl);return c_(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function sO(){let n=K.useContext(ud);return c_(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var h_=K.createContext(void 0);h_.displayName="FrameworkContext";function zA(){let n=K.useContext(h_);return c_(n,"You must render this element inside a <HydratedRouter> element"),n}function rO(n,e){let t=K.useContext(h_),[s,a]=K.useState(!1),[l,c]=K.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:g,onMouseLeave:y,onTouchStart:T}=e,S=K.useRef(null);K.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let z=Y=>{Y.forEach(W=>{c(W.isIntersecting)})},L=new IntersectionObserver(z,{threshold:.5});return S.current&&L.observe(S.current),()=>{L.disconnect()}}},[n]),K.useEffect(()=>{if(s){let z=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(z)}}},[s]);let I=()=>{a(!0)},C=()=>{a(!1),c(!1)};return t?n!=="intent"?[l,S,{}]:[l,S,{onFocus:Mu(d,I),onBlur:Mu(p,C),onMouseEnter:Mu(g,I),onMouseLeave:Mu(y,C),onTouchStart:Mu(T,I)}]:[!1,S,{}]}function Mu(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function aO({page:n,...e}){let{router:t}=BA(),s=K.useMemo(()=>bA(t.routes,n,t.basename),[t.routes,n,t.basename]);return s?K.createElement(lO,{page:n,matches:s,...e}):null}function oO(n){let{manifest:e,routeModules:t}=zA(),[s,a]=K.useState([]);return K.useEffect(()=>{let l=!1;return XN(n,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[n,e,t]),s}function lO({page:n,matches:e,...t}){let s=Fa(),{manifest:a,routeModules:l}=zA(),{basename:c}=BA(),{loaderData:d,matches:p}=sO(),g=K.useMemo(()=>c0(n,e,p,a,s,"data"),[n,e,p,a,s]),y=K.useMemo(()=>c0(n,e,p,a,s,"assets"),[n,e,p,a,s]),T=K.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let C=new Set,z=!1;if(e.forEach(Y=>{var te;let W=a.routes[Y.route.id];!W||!W.hasLoader||(!g.some(le=>le.route.id===Y.route.id)&&Y.route.id in d&&((te=l[Y.route.id])!=null&&te.shouldRevalidate)||W.hasClientLoader?z=!0:C.add(Y.route.id))}),C.size===0)return[];let L=iO(n,c);return z&&C.size>0&&L.searchParams.set("_routes",e.filter(Y=>C.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[L.pathname+L.search]},[c,d,s,a,g,e,n,l]),S=K.useMemo(()=>ZN(y,a),[y,a]),I=oO(y);return K.createElement(K.Fragment,null,T.map(C=>K.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...t})),S.map(C=>K.createElement("link",{key:C,rel:"modulepreload",href:C,...t})),I.map(({key:C,link:z})=>K.createElement("link",{key:C,...z})))}function uO(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var FA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{FA&&(window.__reactRouterVersion="7.6.2")}catch{}function cO({basename:n,children:e,window:t}){let s=K.useRef();s.current==null&&(s.current=X1({window:t,v5Compat:!0}));let a=s.current,[l,c]=K.useState({action:a.action,location:a.location}),d=K.useCallback(p=>{K.startTransition(()=>c(p))},[c]);return K.useLayoutEffect(()=>a.listen(d),[a,d]),K.createElement(BN,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:a})}var HA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vr=K.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:a,reloadDocument:l,replace:c,state:d,target:p,to:g,preventScrollReset:y,viewTransition:T,...S},I){let{basename:C}=K.useContext(Gi),z=typeof g=="string"&&HA.test(g),L,Y=!1;if(typeof g=="string"&&z&&(L=g,FA))try{let b=new URL(window.location.href),x=g.startsWith("//")?new URL(b.protocol+g):new URL(g),P=Ns(x.pathname,C);x.origin===b.origin&&P!=null?g=P+x.search+x.hash:Y=!0}catch{gi(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let W=wN(g,{relative:a}),[te,le,ce]=rO(s,S),ge=pO(g,{replace:c,state:d,target:p,preventScrollReset:y,relative:a,viewTransition:T});function k(b){e&&e(b),b.defaultPrevented||ge(b)}let R=K.createElement("a",{...S,...ce,href:L||W,onClick:Y||l?e:k,ref:uO(I,le),target:p,"data-discover":!z&&t==="render"?"true":void 0});return te&&!z?K.createElement(K.Fragment,null,R,K.createElement(aO,{page:W})):R});vr.displayName="Link";var hO=K.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:a=!1,style:l,to:c,viewTransition:d,children:p,...g},y){let T=Ec(c,{relative:g.relative}),S=Fa(),I=K.useContext(ud),{navigator:C,basename:z}=K.useContext(Gi),L=I!=null&&vO(T)&&d===!0,Y=C.encodeLocation?C.encodeLocation(T).pathname:T.pathname,W=S.pathname,te=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;t||(W=W.toLowerCase(),te=te?te.toLowerCase():null,Y=Y.toLowerCase()),te&&z&&(te=Ns(te,z)||te);const le=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let ce=W===Y||!a&&W.startsWith(Y)&&W.charAt(le)==="/",ge=te!=null&&(te===Y||!a&&te.startsWith(Y)&&te.charAt(Y.length)==="/"),k={isActive:ce,isPending:ge,isTransitioning:L},R=ce?e:void 0,b;typeof s=="function"?b=s(k):b=[s,ce?"active":null,ge?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let x=typeof l=="function"?l(k):l;return K.createElement(vr,{...g,"aria-current":R,className:b,ref:y,style:x,to:c,viewTransition:d},typeof p=="function"?p(k):p)});hO.displayName="NavLink";var fO=K.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:a,state:l,method:c=vf,action:d,onSubmit:p,relative:g,preventScrollReset:y,viewTransition:T,...S},I)=>{let C=_O(),z=yO(d,{relative:g}),L=c.toLowerCase()==="get"?"get":"post",Y=typeof d=="string"&&HA.test(d),W=te=>{if(p&&p(te),te.defaultPrevented)return;te.preventDefault();let le=te.nativeEvent.submitter,ce=(le==null?void 0:le.getAttribute("formmethod"))||c;C(le||te.currentTarget,{fetcherKey:e,method:ce,navigate:t,replace:a,state:l,relative:g,preventScrollReset:y,viewTransition:T})};return K.createElement("form",{ref:I,method:L,action:z,onSubmit:s?p:W,...S,"data-discover":!Y&&n==="render"?"true":void 0})});fO.displayName="Form";function dO(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qA(n){let e=K.useContext(hl);return gt(e,dO(n)),e}function pO(n,{target:e,replace:t,state:s,preventScrollReset:a,relative:l,viewTransition:c}={}){let d=PA(),p=Fa(),g=Ec(n,{relative:l});return K.useCallback(y=>{if(GN(y,e)){y.preventDefault();let T=t!==void 0?t:sc(p)===sc(g);d(n,{replace:T,state:s,preventScrollReset:a,relative:l,viewTransition:c})}},[p,d,g,t,s,e,n,a,l,c])}var mO=0,gO=()=>`__${String(++mO)}__`;function _O(){let{router:n}=qA("useSubmit"),{basename:e}=K.useContext(Gi),t=PN();return K.useCallback(async(s,a={})=>{let{action:l,method:c,encType:d,formData:p,body:g}=$N(s,e);if(a.navigate===!1){let y=a.fetcherKey||gO();await n.fetch(y,t,a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,flushSync:a.flushSync})}else await n.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||c,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function yO(n,{relative:e}={}){let{basename:t}=K.useContext(Gi),s=K.useContext(Ps);gt(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),l={...Ec(n||".",{relative:e})},c=Fa();if(n==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(y=>y==="")){d.delete("index"),p.filter(T=>T).forEach(T=>d.append("index",T));let y=d.toString();l.search=y?`?${y}`:""}}return(!n||n===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:bs([t,l.pathname])),sc(l)}function vO(n,e={}){let t=K.useContext(kA);gt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=qA("useViewTransitionState"),a=Ec(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Ns(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=Ns(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Df(a.pathname,c)!=null||Df(a.pathname,l)!=null}[...nO];const vg=({className:n,content:e,func:t,submit:s,icon:a,change:l,element:c})=>se.jsxs("button",{className:`${n}`,onSubmit:d=>{s(d)},onClick:()=>{t()},children:[a,e,c]}),EO=()=>{const n=PA(),{pages:e,setPages:t,user:s,setPrevPage:a,setHideSideBar:l,hideSideBar:c,setIsSigningOut:d,changes:p,setSaveChanges:g,prevPage:y}=K.useContext(Lc);function T(S,I){p&&e[1].ind?g(!0):(n(I),t(C=>C.map((z,L)=>L==S?{...z,ind:!0}:{...z,ind:!1})))}return se.jsxs(se.Fragment,{children:[se.jsxs("div",{className:je.navBarWrapper,children:[se.jsxs("div",{className:je.left,children:[se.jsx("img",{src:"./web-icon.png"}),se.jsx("h1",{className:je.title,children:"Acad"})]}),se.jsx("div",{className:je.mid,children:se.jsx("ul",{children:e==null?void 0:e.map((S,I)=>se.jsxs("li",{className:S.ind?`${je.ind} ${je.Links}`:`${je.notInd} ${je.Links}`,onClick:()=>{T(I,S.path),a(S.path)},children:[se.jsxs("span",{className:je.content,children:[S.icon,S.name]}),se.jsx("span",{className:je.indicator})]},S.name))})}),s!=null&&s.uid?se.jsxs("div",{className:je.right,children:[se.jsx(vr,{to:"/Dashboard",className:je.Links,children:se.jsx("button",{className:je.authButts,children:"Account"})}),se.jsx("button",{className:`${je.authButts} ${je.signOut}`,onClick:()=>{d(!0)},children:"Log Out"}),se.jsx("button",{className:je.HamburgerButt,onClick:()=>{l(!1)},children:se.jsx("i",{className:"fa fa-list-ul"})})]}):se.jsxs("div",{className:je.right,children:[se.jsx(vr,{to:"/SignIn",className:je.Links,children:se.jsx("button",{className:je.authButts,children:"Sign In"})}),se.jsx(vr,{to:"/SignUp",className:je.Links,children:se.jsx("button",{className:`${je.authButts} ${je.signUp}`,children:"Sign Up"})}),se.jsx("button",{className:je.HamburgerButt,onClick:()=>{l(!1)},children:se.jsx("i",{className:"fa fa-list-ul"})})]})]}),se.jsx("div",{className:c==!1?je.sidebar:je.hideSideBar,children:se.jsxs("ul",{className:c==!1?je.NavLinks:je.hideNavLinks,children:[se.jsx(vg,{className:je.HamburgerButt,func:()=>{l(!c)},content:se.jsx("i",{className:"fa fa-list-ul"})}),e.map((S,I)=>se.jsxs("li",{to:S.path,onClick:()=>{T(I,S.path),a(S.path)},className:S.ind?`${je.Links} ${je.indicated}`:`${je.Links} ${je.notIndicated}`,children:[S.icon,se.jsxs("span",{children:[S.name,se.jsx("span",{className:je.indication})]})]},S.path))]})})]})},TO="_loadingWrapper_wbajv_8",SO="_loadingBar_wbajv_25",h0={loadingWrapper:TO,loadingBar:SO},AO=()=>{const{loading:n}=K.useContext(Lc);if(n)return se.jsxs("div",{className:h0.loadingWrapper,children:[se.jsx("div",{className:h0.loadingBar}),"Loading..."]})},wO=()=>se.jsx("div",{children:"PageNotFound"}),RO=()=>{};var f0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=function(n,e){if(!n)throw fl(e)},fl=function(n){return new Error("Firebase Database ("+jA.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},bO=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},f_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,p=a+2<n.length,g=p?n[a+2]:0,y=l>>2,T=(l&3)<<4|d>>4;let S=(d&15)<<2|g>>6,I=g&63;p||(I=64,c||(S=64)),s.push(t[y],t[T],t[S],t[I])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(GA(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):bO(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const T=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new CO;const S=l<<2|d>>4;if(s.push(S),g!==64){const I=d<<4&240|g>>2;if(s.push(I),T!==64){const C=g<<6&192|T;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class CO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const KA=function(n){const e=GA(n);return f_.encodeByteArray(e,!0)},kf=function(n){return KA(n).replace(/\./g,"")},xf=function(n){try{return f_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(n){return YA(void 0,n)}function YA(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!NO(t)||(n[t]=YA(n[t],e[t]));return n}function NO(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO=()=>OO().__FIREBASE_DEFAULTS__,kO=()=>{if(typeof process>"u"||typeof f0>"u")return;const n=f0.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xO=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xf(n[1]);return e&&JSON.parse(e)},hd=()=>{try{return RO()||DO()||kO()||xO()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$A=n=>{var e,t;return(t=(e=hd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},QA=n=>{const e=$A(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},WA=()=>{var n;return(n=hd())===null||n===void 0?void 0:n.config},XA=n=>{var e;return(e=hd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(n){return n.endsWith(".cloudworkstations.dev")}async function p_(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[kf(JSON.stringify(t)),kf(JSON.stringify(c)),""].join(".")}const Yu={};function MO(){const n={prod:[],emulator:[]};for(const e of Object.keys(Yu))Yu[e]?n.emulator.push(e):n.prod.push(e);return n}function PO(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let d0=!1;function m_(n,e){if(typeof window>"u"||typeof document>"u"||!Mr(window.location.host)||Yu[n]===e||Yu[n]||d0)return;Yu[n]=e;function t(S){return`__firebase__banner__${S}`}const s="__firebase__banner",l=MO().prod.length>0;function c(){const S=document.getElementById(s);S&&S.remove()}function d(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,I){S.setAttribute("width","24"),S.setAttribute("id",I),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function g(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{d0=!0,c()},S}function y(S,I){S.setAttribute("id",I),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function T(){const S=PO(s),I=t("text"),C=document.getElementById(I)||document.createElement("span"),z=t("learnmore"),L=document.getElementById(z)||document.createElement("a"),Y=t("preprendIcon"),W=document.getElementById(Y)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const te=S.element;d(te),y(L,z);const le=g();p(W,Y),te.append(W,C,L,le),document.body.appendChild(te)}l?(C.innerText="Preview backend disconnected.",W.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(W.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function g_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mn())}function LO(){var n;const e=(n=hd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function VO(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function UO(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function JA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BO(){const n=mn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function zO(){return jA.NODE_ADMIN===!0}function FO(){return!LO()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function HO(){try{return typeof indexedDB=="object"}catch{return!1}}function qO(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO="FirebaseError";class Ki extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=jO,Object.setPrototypeOf(this,Ki.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tc.prototype.create)}}class Tc{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?GO(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Ki(a,d,s)}}function GO(n,e){return n.replace(KO,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const KO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(n){return JSON.parse(n)}function nn(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=rc(xf(l[0])||""),t=rc(xf(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},YO=function(n){const e=ew(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},$O=function(n){const e=ew(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function el(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Eg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Mf(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function Rr(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],c=e[a];if(p0(l)&&p0(c)){if(!Rr(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function p0(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Fu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Hu(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const S=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(S<<1|S>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,y;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),y=1518500249):(g=l^c^d,y=1859775393):T<60?(g=l&c|d&(l|c),y=2400959708):(g=l^c^d,y=3395469782);const S=(a<<5|a>>>27)+g+p+y+s[T]&4294967295;p=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=S}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function WO(n,e){const t=new XO(n,e);return t.subscribe.bind(t)}class XO{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");ZO(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Qm),a.error===void 0&&(a.error=Qm),a.complete===void 0&&(a.complete=Qm);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZO(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Qm(){}function JO(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,ue(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},fd=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(n){return n&&n._delegate?n._delegate:n}class Os{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new d_;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iD(e))try{this.getOrInitializeService({instanceIdentifier:Aa})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=Aa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Aa){return this.instances.has(e)}getOptions(e=Aa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:nD(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Aa){return this.component?this.component.multipleInstances?e:Aa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nD(n){return n===Aa?void 0:n}function iD(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new tD(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Me||(Me={}));const rD={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},aD=Me.INFO,oD={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},lD=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=oD[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dd{constructor(e){this.name=e,this._logLevel=aD,this._logHandler=lD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const uD=(n,e)=>e.some(t=>n instanceof t);let m0,g0;function cD(){return m0||(m0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hD(){return g0||(g0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tw=new WeakMap,Tg=new WeakMap,nw=new WeakMap,Wm=new WeakMap,__=new WeakMap;function fD(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Er(n.result)),a()},c=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&tw.set(t,n)}).catch(()=>{}),__.set(e,n),e}function dD(n){if(Tg.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Tg.set(n,e)}let Sg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Tg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||nw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Er(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function pD(n){Sg=n(Sg)}function mD(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Xm(this),e,...t);return nw.set(s,e.sort?e.sort():[e]),Er(s)}:hD().includes(n)?function(...e){return n.apply(Xm(this),e),Er(tw.get(this))}:function(...e){return Er(n.apply(Xm(this),e))}}function gD(n){return typeof n=="function"?mD(n):(n instanceof IDBTransaction&&dD(n),uD(n,cD())?new Proxy(n,Sg):n)}function Er(n){if(n instanceof IDBRequest)return fD(n);if(Wm.has(n))return Wm.get(n);const e=gD(n);return e!==n&&(Wm.set(n,e),__.set(e,n)),e}const Xm=n=>__.get(n);function _D(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=Er(c);return s&&c.addEventListener("upgradeneeded",p=>{s(Er(c.result),p.oldVersion,p.newVersion,Er(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const yD=["get","getKey","getAll","getAllKeys","count"],vD=["put","add","delete","clear"],Zm=new Map;function _0(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Zm.get(e))return Zm.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=vD.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||yD.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return Zm.set(e,l),l}pD(n=>({...n,get:(e,t,s)=>_0(e,t)||n.get(e,t,s),has:(e,t)=>!!_0(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(TD(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function TD(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ag="@firebase/app",y0="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new dd("@firebase/app"),SD="@firebase/app-compat",AD="@firebase/analytics-compat",wD="@firebase/analytics",RD="@firebase/app-check-compat",bD="@firebase/app-check",CD="@firebase/auth",ID="@firebase/auth-compat",ND="@firebase/database",OD="@firebase/data-connect",DD="@firebase/database-compat",kD="@firebase/functions",xD="@firebase/functions-compat",MD="@firebase/installations",PD="@firebase/installations-compat",LD="@firebase/messaging",VD="@firebase/messaging-compat",UD="@firebase/performance",BD="@firebase/performance-compat",zD="@firebase/remote-config",FD="@firebase/remote-config-compat",HD="@firebase/storage",qD="@firebase/storage-compat",jD="@firebase/firestore",GD="@firebase/ai",KD="@firebase/firestore-compat",YD="firebase",$D="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="[DEFAULT]",QD={[Ag]:"fire-core",[SD]:"fire-core-compat",[wD]:"fire-analytics",[AD]:"fire-analytics-compat",[bD]:"fire-app-check",[RD]:"fire-app-check-compat",[CD]:"fire-auth",[ID]:"fire-auth-compat",[ND]:"fire-rtdb",[OD]:"fire-data-connect",[DD]:"fire-rtdb-compat",[kD]:"fire-fn",[xD]:"fire-fn-compat",[MD]:"fire-iid",[PD]:"fire-iid-compat",[LD]:"fire-fcm",[VD]:"fire-fcm-compat",[UD]:"fire-perf",[BD]:"fire-perf-compat",[zD]:"fire-rc",[FD]:"fire-rc-compat",[HD]:"fire-gcs",[qD]:"fire-gcs-compat",[jD]:"fire-fst",[KD]:"fire-fst-compat",[GD]:"fire-vertex","fire-js":"fire-js",[YD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new Map,WD=new Map,Rg=new Map;function v0(n,e){try{n.container.addComponent(e)}catch(t){Ds.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function br(n){const e=n.name;if(Rg.has(e))return Ds.debug(`There were multiple attempts to register component ${e}.`),!1;Rg.set(e,n);for(const t of Pf.values())v0(t,n);for(const t of WD.values())v0(t,n);return!0}function pd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Tn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tr=new Tc("app","Firebase",XD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=$D;function y_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:wg,automaticDataCollectionEnabled:!0},e),a=s.name;if(typeof a!="string"||!a)throw Tr.create("bad-app-name",{appName:String(a)});if(t||(t=WA()),!t)throw Tr.create("no-options");const l=Pf.get(a);if(l){if(Rr(t,l.options)&&Rr(s,l.config))return l;throw Tr.create("duplicate-app",{appName:a})}const c=new sD(a);for(const p of Rg.values())c.addComponent(p);const d=new ZD(t,s,c);return Pf.set(a,d),d}function v_(n=wg){const e=Pf.get(n);if(!e&&n===wg&&WA())return y_();if(!e)throw Tr.create("no-app",{appName:n});return e}function ni(n,e,t){var s;let a=(s=QD[n])!==null&&s!==void 0?s:n;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ds.warn(d.join(" "));return}br(new Os(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD="firebase-heartbeat-database",e2=1,ac="firebase-heartbeat-store";let Jm=null;function iw(){return Jm||(Jm=_D(JD,e2,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ac)}catch(t){console.warn(t)}}}}).catch(n=>{throw Tr.create("idb-open",{originalErrorMessage:n.message})})),Jm}async function t2(n){try{const t=(await iw()).transaction(ac),s=await t.objectStore(ac).get(sw(n));return await t.done,s}catch(e){if(e instanceof Ki)Ds.warn(e.message);else{const t=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ds.warn(t.message)}}}async function E0(n,e){try{const s=(await iw()).transaction(ac,"readwrite");await s.objectStore(ac).put(e,sw(n)),await s.done}catch(t){if(t instanceof Ki)Ds.warn(t.message);else{const s=Tr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ds.warn(s.message)}}}function sw(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=1024,i2=30;class s2{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new a2(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=T0();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>i2){const c=o2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ds.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=T0(),{heartbeatsToSend:s,unsentEntries:a}=r2(this._heartbeatsCache.heartbeats),l=kf(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Ds.warn(t),""}}}function T0(){return new Date().toISOString().substring(0,10)}function r2(n,e=n2){const t=[];let s=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),S0(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),S0(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class a2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return HO()?qO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await t2(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return E0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return E0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function S0(n){return kf(JSON.stringify({version:2,heartbeats:n})).length}function o2(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l2(n){br(new Os("platform-logger",e=>new ED(e),"PRIVATE")),br(new Os("heartbeat",e=>new s2(e),"PRIVATE")),ni(Ag,y0,n),ni(Ag,y0,"esm2017"),ni("fire-js","")}l2("");function E_(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(n);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(n,s[a])&&(t[s[a]]=n[s[a]]);return t}function rw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u2=rw,aw=new Tc("auth","Firebase",rw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=new dd("@firebase/auth");function c2(n,...e){Lf.logLevel<=Me.WARN&&Lf.warn(`Auth (${Pr}): ${n}`,...e)}function Tf(n,...e){Lf.logLevel<=Me.ERROR&&Lf.error(`Auth (${Pr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(n,...e){throw S_(n,...e)}function pi(n,...e){return S_(n,...e)}function T_(n,e,t){const s=Object.assign(Object.assign({},u2()),{[e]:t});return new Tc("auth","Firebase",s).create(e,{appName:n.name})}function Cs(n){return T_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function h2(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&ii(n,"argument-error"),T_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function S_(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return aw.create(n,...e)}function Te(n,e,...t){if(!n)throw S_(e,...t)}function As(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Tf(e),new Error(e)}function ks(n,e){n||As(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ow(){return A0()==="http:"||A0()==="https:"}function A0(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ow()||UO()||"connection"in navigator)?navigator.onLine:!0}function d2(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,t){this.shortDelay=e,this.longDelay=t,ks(t>e,"Short delay should be less than long delay!"),this.isMobile=g_()||JA()}get(){return f2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(n,e){ks(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;As("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;As("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;As("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],g2=new Sc(3e4,6e4);function Vs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Us(n,e,t,s,a={}){return uw(n,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=dl(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:p},l);return VO()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&Mr(n.emulatorConfig.host)&&(g.credentials="include"),lw.fetch()(await cw(n,n.config.apiHost,t,d),g)})}async function uw(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},p2),e);try{const a=new y2(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw uf(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw uf(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw uf(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw uf(n,"user-disabled",c);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw T_(n,y,g);ii(n,y)}}catch(a){if(a instanceof Ki)throw a;ii(n,"network-request-failed",{message:String(a)})}}async function Ac(n,e,t,s,a={}){const l=await Us(n,e,t,s,a);return"mfaPendingCredential"in l&&ii(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function cw(n,e,t,s){const a=`${e}${t}?${s}`,l=n,c=l.config.emulator?A_(n.config,a):`${n.config.apiScheme}://${a}`;return m2.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function _2(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class y2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(pi(this.auth,"network-request-failed")),g2.get())})}}function uf(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=pi(n,e,s);return a.customData._tokenResponse=t,a}function w0(n){return n!==void 0&&n.enterprise!==void 0}class v2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return _2(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function E2(n,e){return Us(n,"GET","/v2/recaptchaConfig",Vs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T2(n,e){return Us(n,"POST","/v1/accounts:delete",e)}async function Uf(n,e){return Us(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function S2(n,e=!1){const t=ot(n),s=await t.getIdToken(e),a=w_(s);Te(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:s,authTime:$u(eg(a.auth_time)),issuedAtTime:$u(eg(a.iat)),expirationTime:$u(eg(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function eg(n){return Number(n)*1e3}function w_(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Tf("JWT malformed, contained fewer than 3 sections"),null;try{const a=xf(t);return a?JSON.parse(a):(Tf("Failed to decode base64 JWT payload"),null)}catch(a){return Tf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function R0(n){const e=w_(n);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oc(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ki&&A2(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function A2({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$u(this.lastLoginAt),this.creationTime=$u(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lc(n){var e;const t=n.auth,s=await n.getIdToken(),a=await oc(n,Uf(t,{idToken:s}));Te(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?hw(l.providerUserInfo):[],d=b2(n.providerData,c),p=n.isAnonymous,g=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),y=p?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new bg(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(n,T)}async function R2(n){const e=ot(n);await lc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function b2(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function hw(n){return n.map(e=>{var{providerId:t}=e,s=E_(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C2(n,e){const t=await uw(n,{},async()=>{const s=dl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=await cw(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:s};return n.emulatorConfig&&Mr(n.emulatorConfig.host)&&(p.credentials="include"),lw.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function I2(n,e){return Us(n,"POST","/v2/accounts:revokeToken",Vs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):R0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const t=R0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await C2(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new $o;return s&&(Te(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Te(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Te(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $o,this.toJSON())}_performRefresh(){return As("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(n,e){Te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class fi{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,l=E_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new w2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new bg(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await oc(this,this.stsTokenManager.getToken(this.auth,e));return Te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return S2(this,e)}reload(){return R2(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new fi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await lc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(Cs(this.auth));const e=await this.getIdToken();return await oc(this,T2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,l,c,d,p,g,y;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,S=(a=t.email)!==null&&a!==void 0?a:void 0,I=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,C=(c=t.photoURL)!==null&&c!==void 0?c:void 0,z=(d=t.tenantId)!==null&&d!==void 0?d:void 0,L=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,Y=(g=t.createdAt)!==null&&g!==void 0?g:void 0,W=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:te,emailVerified:le,isAnonymous:ce,providerData:ge,stsTokenManager:k}=t;Te(te&&k,e,"internal-error");const R=$o.fromJSON(this.name,k);Te(typeof te=="string",e,"internal-error"),pr(T,e.name),pr(S,e.name),Te(typeof le=="boolean",e,"internal-error"),Te(typeof ce=="boolean",e,"internal-error"),pr(I,e.name),pr(C,e.name),pr(z,e.name),pr(L,e.name),pr(Y,e.name),pr(W,e.name);const b=new fi({uid:te,auth:e,email:S,emailVerified:le,displayName:T,isAnonymous:ce,photoURL:C,phoneNumber:I,tenantId:z,stsTokenManager:R,createdAt:Y,lastLoginAt:W});return ge&&Array.isArray(ge)&&(b.providerData=ge.map(x=>Object.assign({},x))),L&&(b._redirectEventId=L),b}static async _fromIdTokenResponse(e,t,s=!1){const a=new $o;a.updateFromServerResponse(t);const l=new fi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await lc(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Te(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?hw(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new $o;d.updateFromIdToken(s);const p=new fi({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new bg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=new Map;function ws(n){ks(n instanceof Function,"Expected a class definition");let e=b0.get(n);return e?(ks(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,b0.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fw.type="NONE";const C0=fw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(n,e,t){return`firebase:${n}:${e}:${t}`}class Qo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=Sf(this.userKey,a.apiKey,l),this.fullPersistenceKey=Sf("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Uf(this.auth,{idToken:e}).catch(()=>{});return t?fi._fromGetAccountInfoResponse(this.auth,t,e):null}return fi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Qo(ws(C0),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||ws(C0);const c=Sf(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const y=await g._get(c);if(y){let T;if(typeof y=="string"){const S=await Uf(e,{idToken:y}).catch(()=>{});if(!S)break;T=await fi._fromGetAccountInfoResponse(e,S,y)}else T=fi._fromJSON(e,y);g!==l&&(d=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Qo(l,e,s):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Qo(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yw(e))return"Blackberry";if(vw(e))return"Webos";if(pw(e))return"Safari";if((e.includes("chrome/")||mw(e))&&!e.includes("edge/"))return"Chrome";if(_w(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function dw(n=mn()){return/firefox\//i.test(n)}function pw(n=mn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mw(n=mn()){return/crios\//i.test(n)}function gw(n=mn()){return/iemobile/i.test(n)}function _w(n=mn()){return/android/i.test(n)}function yw(n=mn()){return/blackberry/i.test(n)}function vw(n=mn()){return/webos/i.test(n)}function R_(n=mn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function N2(n=mn()){var e;return R_(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function O2(){return BO()&&document.documentMode===10}function Ew(n=mn()){return R_(n)||_w(n)||vw(n)||yw(n)||/windows phone/i.test(n)||gw(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(n,e=[]){let t;switch(n){case"Browser":t=I0(mn());break;case"Worker":t=`${I0(mn())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Pr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k2(n,e={}){return Us(n,"GET","/v2/passwordPolicy",Vs(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2=6;class M2{constructor(e){var t,s,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:x2,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new N0(this),this.idTokenSubscription=new N0(this),this.beforeStateQueue=new D2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ws(t)),this._initializationPromise=this.queue(async()=>{var s,a,l;if(!this._deleted&&(this.persistenceManager=await Qo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Uf(this,{idToken:e}),s=await fi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Tn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await lc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=d2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(Cs(this));const t=e?ot(e):null;return t&&Te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(Cs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(Cs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ws(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await k2(this),t=new M2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Tc("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await I2(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ws(e)||this._popupRedirectResolver;Te(t,this,"argument-error"),this.redirectPersistenceManager=await Qo.create(this,[ws(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(Tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&c2(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Lr(n){return ot(n)}class N0{constructor(e){this.auth=e,this.observer=null,this.addObserver=WO(t=>this.observer=t)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let md={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function L2(n){md=n}function Sw(n){return md.loadJS(n)}function V2(){return md.recaptchaEnterpriseScript}function U2(){return md.gapiScript}function B2(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class z2{constructor(){this.enterprise=new F2}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class F2{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const H2="recaptcha-enterprise",Aw="NO_RECAPTCHA";class q2{constructor(e){this.type=H2,this.auth=Lr(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{E2(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new v2(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{d(p)})})}function a(l,c,d){const p=window.grecaptcha;w0(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(Aw)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new z2().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(d=>{if(!t&&w0(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=V2();p.length!==0&&(p+=d),Sw(p).then(()=>{a(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function O0(n,e,t,s=!1,a=!1){const l=new q2(n);let c;if(a)c=Aw;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return s?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Cg(n,e,t,s,a){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await O0(n,e,t,t==="getOobCode");return s(n,c)}else return s(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await O0(n,e,t,t==="getOobCode");return s(n,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j2(n,e){const t=pd(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Rr(l,e??{}))return a;ii(a,"already-initialized")}return t.initialize({options:e})}function G2(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(ws);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function K2(n,e,t){const s=Lr(n);Te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=ww(e),{host:c,port:d}=Y2(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},y=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Te(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Te(Rr(g,s.config.emulator)&&Rr(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,Mr(c)?(p_(`${l}//${c}${p}`),m_("Auth",!0)):$2()}function ww(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Y2(n){const e=ww(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:D0(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:D0(c)}}}function D0(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function $2(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return As("not implemented")}_getIdTokenResponse(e){return As("not implemented")}_linkToIdToken(e,t){return As("not implemented")}_getReauthenticationResolver(e){return As("not implemented")}}async function Q2(n,e){return Us(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W2(n,e){return Ac(n,"POST","/v1/accounts:signInWithPassword",Vs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X2(n,e){return Ac(n,"POST","/v1/accounts:signInWithEmailLink",Vs(n,e))}async function Z2(n,e){return Ac(n,"POST","/v1/accounts:signInWithEmailLink",Vs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends b_{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new uc(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new uc(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cg(e,t,"signInWithPassword",W2);case"emailLink":return X2(e,{email:this._email,oobCode:this._password});default:ii(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cg(e,s,"signUpPassword",Q2);case"emailLink":return Z2(e,{idToken:t,email:this._email,oobCode:this._password});default:ii(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(n,e){return Ac(n,"POST","/v1/accounts:signInWithIdp",Vs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2="http://localhost";class Na extends b_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Na(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ii("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,l=E_(t,["providerId","signInMethod"]);if(!s||!a)return null;const c=new Na(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Wo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Wo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wo(e,t)}buildRequest(){const e={requestUri:J2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=dl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tk(n){const e=Fu(Hu(n)).link,t=e?Fu(Hu(e)).deep_link_id:null,s=Fu(Hu(n)).deep_link_id;return(s?Fu(Hu(s)).link:null)||s||t||e||n}class C_{constructor(e){var t,s,a,l,c,d;const p=Fu(Hu(e)),g=(t=p.apiKey)!==null&&t!==void 0?t:null,y=(s=p.oobCode)!==null&&s!==void 0?s:null,T=ek((a=p.mode)!==null&&a!==void 0?a:null);Te(g&&y&&T,"argument-error"),this.apiKey=g,this.operation=T,this.code=y,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=tk(e);try{return new C_(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this.providerId=pl.PROVIDER_ID}static credential(e,t){return uc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=C_.parseLink(t);return Te(s,"argument-error"),uc._fromEmailAndCode(e,s.code,s.tenantId)}}pl.PROVIDER_ID="password";pl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends I_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends wc{constructor(){super("facebook.com")}static credential(e){return Na._fromParams({providerId:vs.PROVIDER_ID,signInMethod:vs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vs.credentialFromTaggedObject(e)}static credentialFromError(e){return vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vs.credential(e.oauthAccessToken)}catch{return null}}}vs.FACEBOOK_SIGN_IN_METHOD="facebook.com";vs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends wc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Na._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return gr.credential(t,s)}catch{return null}}}gr.GOOGLE_SIGN_IN_METHOD="google.com";gr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends wc{constructor(){super("github.com")}static credential(e){return Na._fromParams({providerId:Es.PROVIDER_ID,signInMethod:Es.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Es.credentialFromTaggedObject(e)}static credentialFromError(e){return Es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Es.credential(e.oauthAccessToken)}catch{return null}}}Es.GITHUB_SIGN_IN_METHOD="github.com";Es.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends wc{constructor(){super("twitter.com")}static credential(e,t){return Na._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return _r.credential(t,s)}catch{return null}}}_r.TWITTER_SIGN_IN_METHOD="twitter.com";_r.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(n,e){return Ac(n,"POST","/v1/accounts:signUp",Vs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await fi._fromIdTokenResponse(e,s,a),c=k0(s);return new Oa({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=k0(s);return new Oa({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function k0(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf extends Ki{constructor(e,t,s,a){var l;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Bf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Bf(e,t,s,a)}}function Rw(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Bf._fromErrorAndOperation(n,l,e,s):l})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}async function bw(n,e,t=!1){const s=await oc(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Oa._forOperation(n,"link",s)}async function sk(n,e,t){await lc(e);const s=ik(e.providerData);Te(s.has(t)===n,e.auth,"provider-already-linked")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk(n,e,t=!1){const{auth:s}=n;if(Tn(s.app))return Promise.reject(Cs(s));const a="reauthenticate";try{const l=await oc(n,Rw(s,a,e,n),t);Te(l.idToken,s,"internal-error");const c=w_(l.idToken);Te(c,s,"internal-error");const{sub:d}=c;return Te(n.uid===d,s,"user-mismatch"),Oa._forOperation(n,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&ii(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(n,e,t=!1){if(Tn(n.app))return Promise.reject(Cs(n));const s="signIn",a=await Rw(n,s,e),l=await Oa._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}async function ak(n,e){return Cw(Lr(n),e)}async function _3(n,e){const t=ot(n);return await sk(!1,t,e.providerId),bw(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iw(n){const e=Lr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function y3(n,e,t){if(Tn(n.app))return Promise.reject(Cs(n));const s=Lr(n),c=await Cg(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nk).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Iw(n),p}),d=await Oa._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(d.user),d}function v3(n,e,t){return Tn(n.app)?Promise.reject(Cs(n)):ak(ot(n),pl.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Iw(n),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ok(n,e){return Us(n,"POST","/v1/accounts:createAuthUri",Vs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E3(n,e){const t=ow()?Vf():"http://localhost",s={identifier:e,continueUri:t},{signinMethods:a}=await ok(ot(n),s);return a||[]}function lk(n,e,t,s){return ot(n).onIdTokenChanged(e,t,s)}function uk(n,e,t){return ot(n).beforeAuthStateChanged(e,t)}function ck(n,e,t,s){return ot(n).onAuthStateChanged(e,t,s)}function hk(n){return ot(n).signOut()}const zf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zf,"1"),this.storage.removeItem(zf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=1e3,dk=10;class Ow extends Nw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ew(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);O2()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,dk):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},fk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ow.type="LOCAL";const pk=Ow;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw extends Nw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Dw.type="SESSION";const kw=Dw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new gd(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),p=await mk(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=N_("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const S=T;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(S.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(){return window}function _k(n){Ui().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(){return typeof Ui().WorkerGlobalScope<"u"&&typeof Ui().importScripts=="function"}async function yk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vk(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ek(){return xw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw="firebaseLocalStorageDb",Tk=1,Ff="firebaseLocalStorage",Pw="fbase_key";class Rc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function _d(n,e){return n.transaction([Ff],e?"readwrite":"readonly").objectStore(Ff)}function Sk(){const n=indexedDB.deleteDatabase(Mw);return new Rc(n).toPromise()}function Ig(){const n=indexedDB.open(Mw,Tk);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Ff,{keyPath:Pw})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Ff)?e(s):(s.close(),await Sk(),e(await Ig()))})})}async function x0(n,e,t){const s=_d(n,!0).put({[Pw]:e,value:t});return new Rc(s).toPromise()}async function Ak(n,e){const t=_d(n,!1).get(e),s=await new Rc(t).toPromise();return s===void 0?null:s.value}function M0(n,e){const t=_d(n,!0).delete(e);return new Rc(t).toPromise()}const wk=800,Rk=3;class Lw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ig(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Rk)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gd._getInstance(Ek()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yk(),!this.activeServiceWorker)return;this.sender=new gk(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ig();return await x0(e,zf,"1"),await M0(e,zf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>x0(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Ak(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>M0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=_d(a,!1).getAll();return new Rc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lw.type="LOCAL";const bk=Lw;new Sc(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(n,e){return e?ws(e):(Te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_ extends b_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ck(n){return Cw(n.auth,new O_(n),n.bypassAuthState)}function Ik(n){const{auth:e,user:t}=n;return Te(t,e,"internal-error"),rk(t,new O_(n),n.bypassAuthState)}async function Nk(n){const{auth:e,user:t}=n;return Te(t,e,"internal-error"),bw(t,new O_(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ck;case"linkViaPopup":case"linkViaRedirect":return Nk;case"reauthViaPopup":case"reauthViaRedirect":return Ik;default:ii(this.auth,"internal-error")}}resolve(e){ks(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ks(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=new Sc(2e3,1e4);async function T3(n,e,t){if(Tn(n.app))return Promise.reject(pi(n,"operation-not-supported-in-this-environment"));const s=Lr(n);h2(n,e,I_);const a=Vw(s,t);return new Ra(s,"signInViaPopup",e,a).executeNotNull()}class Ra extends Uw{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Ra.currentPopupAction&&Ra.currentPopupAction.cancel(),Ra.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){ks(this.filter.length===1,"Popup operations only handle one event");const e=N_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ra.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ok.get())};e()}}Ra.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk="pendingRedirect",Af=new Map;class kk extends Uw{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Af.get(this.auth._key());if(!e){try{const s=await xk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Af.set(this.auth._key(),e)}return this.bypassAuthState||Af.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xk(n,e){const t=Lk(e),s=Pk(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function Mk(n,e){Af.set(n._key(),e)}function Pk(n){return ws(n._redirectPersistence)}function Lk(n){return Sf(Dk,n.config.apiKey,n.name)}async function Vk(n,e,t=!1){if(Tn(n.app))return Promise.reject(Cs(n));const s=Lr(n),a=Vw(s,e),c=await new kk(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=10*60*1e3;class Bk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zk(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Bw(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(pi(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Uk&&this.cachedEventUids.clear(),this.cachedEventUids.has(P0(e))}saveEventToCache(e){this.cachedEventUids.add(P0(e)),this.lastProcessedEventTime=Date.now()}}function P0(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Bw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fk(n,e={}){return Us(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qk=/^https?/;async function jk(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Fk(n);for(const t of e)try{if(Gk(t))return}catch{}ii(n,"unauthorized-domain")}function Gk(n){const e=Vf(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!qk.test(t))return!1;if(Hk.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk=new Sc(3e4,6e4);function L0(){const n=Ui().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Yk(n){return new Promise((e,t)=>{var s,a,l;function c(){L0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{L0(),t(pi(n,"network-request-failed"))},timeout:Kk.get()})}if(!((a=(s=Ui().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=Ui().gapi)===null||l===void 0)&&l.load)c();else{const d=B2("iframefcb");return Ui()[d]=()=>{gapi.load?c():t(pi(n,"network-request-failed"))},Sw(`${U2()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw wf=null,e})}let wf=null;function $k(n){return wf=wf||Yk(n),wf}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=new Sc(5e3,15e3),Wk="__/auth/iframe",Xk="emulator/auth/iframe",Zk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ex(n){const e=n.config;Te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?A_(e,Xk):`https://${n.config.authDomain}/${Wk}`,s={apiKey:e.apiKey,appName:n.name,v:Pr},a=Jk.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${dl(s).slice(1)}`}async function tx(n){const e=await $k(n),t=Ui().gapi;return Te(t,n,"internal-error"),e.open({where:document.body,url:ex(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zk,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=pi(n,"network-request-failed"),d=Ui().setTimeout(()=>{l(c)},Qk.get());function p(){Ui().clearTimeout(d),a(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ix=500,sx=600,rx="_blank",ax="http://localhost";class V0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ox(n,e,t,s=ix,a=sx){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p=Object.assign(Object.assign({},nx),{width:s.toString(),height:a.toString(),top:l,left:c}),g=mn().toLowerCase();t&&(d=mw(g)?rx:t),dw(g)&&(e=e||ax,p.scrollbars="yes");const y=Object.entries(p).reduce((S,[I,C])=>`${S}${I}=${C},`,"");if(N2(g)&&d!=="_self")return lx(e||"",d),new V0(null);const T=window.open(e||"",d,y);Te(T,n,"popup-blocked");try{T.focus()}catch{}return new V0(T)}function lx(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux="__/auth/handler",cx="emulator/auth/handler",hx=encodeURIComponent("fac");async function U0(n,e,t,s,a,l){Te(n.config.authDomain,n,"auth-domain-config-required"),Te(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Pr,eventId:a};if(e instanceof I_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Eg(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries({}))c[y]=T}if(e instanceof wc){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await n._getAppCheckToken(),g=p?`#${hx}=${encodeURIComponent(p)}`:"";return`${fx(n)}?${dl(d).slice(1)}${g}`}function fx({config:n}){return n.emulator?A_(n,cx):`https://${n.authDomain}/${ux}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="webStorageSupport";class dx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kw,this._completeRedirectFn=Vk,this._overrideRedirectResult=Mk}async _openPopup(e,t,s,a){var l;ks((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await U0(e,t,s,Vf(),a);return ox(e,c,N_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await U0(e,t,s,Vf(),a);return _k(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(ks(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await tx(e),s=new Bk(e);return t.register("authEvent",a=>(Te(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(tg,{type:tg},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[tg];c!==void 0&&t(!!c),ii(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ew()||pw()||R_()}}const px=dx;var B0="@firebase/auth",z0="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _x(n){br(new Os("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Te(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tw(n)},g=new P2(s,a,l,p);return G2(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),br(new Os("auth-internal",e=>{const t=Lr(e.getProvider("auth").getImmediate());return(s=>new mx(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ni(B0,z0,gx(n)),ni(B0,z0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx=5*60,vx=XA("authIdTokenMaxAge")||yx;let F0=null;const Ex=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>vx)return;const a=t==null?void 0:t.token;F0!==a&&(F0=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function Tx(n=v_()){const e=pd(n,"auth");if(e.isInitialized())return e.getImmediate();const t=j2(n,{popupRedirectResolver:px,persistence:[bk,pk,kw]}),s=XA("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=Ex(l.toString());uk(t,c,()=>c(t.currentUser)),lk(t,d=>c(d))}}const a=$A("auth");return a&&K2(t,`http://${a}`),t}function Sx(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}L2({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=pi("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",Sx().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_x("Browser");var Ax="firebase",wx="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ni(Ax,wx,"app");var H0={};const q0="@firebase/database",j0="1.0.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zw="";function Rx(n){zw=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nn(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:rc(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ls(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new bx(e)}}catch{}return new Cx},ba=Fw("localStorage"),Ix=Fw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new dd("@firebase/database"),Nx=function(){let n=1;return function(){return n++}}(),Hw=function(n){const e=eD(n),t=new QO;t.update(e);const s=t.digest();return f_.encodeByteArray(s)},bc=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=bc.apply(null,s):typeof s=="object"?e+=nn(s):e+=s,e+=" "}return e};let Qu=null,G0=!0;const Ox=function(n,e){ue(!0,"Can't turn on custom loggers persistently."),Xo.logLevel=Me.VERBOSE,Qu=Xo.log.bind(Xo)},hn=function(...n){if(G0===!0&&(G0=!1,Qu===null&&Ix.get("logging_enabled")===!0&&Ox()),Qu){const e=bc.apply(null,n);Qu(e)}},Cc=function(n){return function(...e){hn(n,...e)}},Ng=function(...n){const e="FIREBASE INTERNAL ERROR: "+bc(...n);Xo.error(e)},Da=function(...n){const e=`FIREBASE FATAL ERROR: ${bc(...n)}`;throw Xo.error(e),new Error(e)},zn=function(...n){const e="FIREBASE WARNING: "+bc(...n);Xo.warn(e)},Dx=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&zn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qw=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},kx=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},tl="[MIN_NAME]",ka="[MAX_NAME]",ml=function(n,e){if(n===e)return 0;if(n===tl||e===ka)return-1;if(e===tl||n===ka)return 1;{const t=K0(n),s=K0(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},xx=function(n,e){return n===e?0:n<e?-1:1},Pu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+nn(e))},D_=function(n){if(typeof n!="object"||n===null)return nn(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=nn(e[s]),t+=":",t+=D_(n[e[s]]);return t+="}",t},jw=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function si(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Gw=function(n){ue(!qw(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,p;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=d+s,c=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const y=g.join("");let T="";for(p=0;p<64;p+=8){let S=parseInt(y.substr(p,8),2).toString(16);S.length===1&&(S="0"+S),T=T+S}return T.toLowerCase()},Mx=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Px=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Lx=new RegExp("^-?(0*)\\d{1,10}$"),Vx=-2147483648,Ux=2147483647,K0=function(n){if(Lx.test(n)){const e=Number(n);if(e>=Vx&&e<=Ux)return e}return null},Ic=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw zn("Exception was thrown by user callback.",t),e},Math.floor(0))}},Bx=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Tn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){zn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(hn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',zn(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="5",Kw="v",Yw="s",$w="r",Qw="f",Ww=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Xw="ls",Zw="p",Og="ac",Jw="websocket",eR="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e,t,s,a,l=!1,c="",d=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ba.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ba.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function qx(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function tR(n,e,t){ue(typeof e=="string","typeof type must == string"),ue(typeof t=="object","typeof params must == object");let s;if(e===Jw)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===eR)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);qx(n)&&(t.ns=n.namespace);const a=[];return si(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(){this.counters_={}}incrementCounter(e,t=1){Ls(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return IO(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng={},ig={};function x_(n){const e=n.toString();return ng[e]||(ng[e]=new jx),ng[e]}function Gx(n,e){const t=n.toString();return ig[t]||(ig[t]=e()),ig[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&Ic(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0="start",Yx="close",$x="pLPCommand",Qx="pRTLPCB",nR="id",iR="pw",sR="ser",Wx="cb",Xx="seg",Zx="ts",Jx="d",eM="dframe",rR=1870,aR=30,tM=rR-aR,nM=25e3,iM=3e4;class Ko{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Cc(e),this.stats_=x_(t),this.urlFn=p=>(this.appCheckToken&&(p[Og]=this.appCheckToken),tR(t,eR,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Kx(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(iM)),kx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new M_((...l)=>{const[c,d,p,g,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===Y0)this.id=d,this.password=p;else if(c===Yx)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[Y0]="t",s[sR]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Wx]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Kw]=k_,this.transportSessionId&&(s[Yw]=this.transportSessionId),this.lastSessionId&&(s[Xw]=this.lastSessionId),this.applicationId&&(s[Zw]=this.applicationId),this.appCheckToken&&(s[Og]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ww.test(location.hostname)&&(s[$w]=Qw);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ko.forceAllow_=!0}static forceDisallow(){Ko.forceDisallow_=!0}static isAvailable(){return Ko.forceAllow_?!0:!Ko.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Mx()&&!Px()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=nn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=KA(t),a=jw(s,tM);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[eM]="t",s[nR]=e,s[iR]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=nn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class M_{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Nx(),window[$x+this.uniqueCallbackIdentifier]=e,window[Qx+this.uniqueCallbackIdentifier]=t,this.myIFrame=M_.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){hn("frame writing exception"),d.stack&&hn(d.stack),hn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||hn("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[nR]=this.myID,e[iR]=this.myPW,e[sR]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+aR+s.length<=rR;){const c=this.pendingSegs.shift();s=s+"&"+Xx+a+"="+c.seg+"&"+Zx+a+"="+c.ts+"&"+Jx+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(nM)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{hn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sM=16384,rM=45e3;let Hf=null;typeof MozWebSocket<"u"?Hf=MozWebSocket:typeof WebSocket<"u"&&(Hf=WebSocket);class hi{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Cc(this.connId),this.stats_=x_(t),this.connURL=hi.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[Kw]=k_,typeof location<"u"&&location.hostname&&Ww.test(location.hostname)&&(c[$w]=Qw),t&&(c[Yw]=t),s&&(c[Xw]=s),a&&(c[Og]=a),l&&(c[Zw]=l),tR(e,Jw,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ba.set("previous_websocket_failure",!0);try{let s;zO(),this.mySock=new Hf(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){hi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Hf!==null&&!hi.forceDisallow_}static previouslyFailed(){return ba.isInMemoryStorage||ba.get("previous_websocket_failure")===!0}markConnectionHealthy(){ba.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=rc(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ue(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=nn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=jw(t,sM);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(rM))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hi.responsesRequiredToBeHealthy=2;hi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{static get ALL_TRANSPORTS(){return[Ko,hi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=hi&&hi.isAvailable();let s=t&&!hi.previouslyFailed();if(e.webSocketOnly&&(t||zn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[hi];else{const a=this.transports_=[];for(const l of cc.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);cc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}cc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aM=6e4,oM=5e3,lM=10*1024,uM=100*1024,sg="t",$0="d",cM="s",Q0="r",hM="e",W0="o",X0="a",Z0="n",J0="p",fM="h";class dM{constructor(e,t,s,a,l,c,d,p,g,y){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Cc("c:"+this.id+":"),this.transportManager_=new cc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Wu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>uM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>lM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(sg in e){const t=e[sg];t===X0?this.upgradeIfSecondaryHealthy_():t===Q0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===W0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Pu("t",e),s=Pu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:J0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:X0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Z0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Pu("t",e),s=Pu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Pu(sg,e);if($0 in e){const s=e[$0];if(t===fM){const a=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===Z0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===cM?this.onConnectionShutdown_(s):t===Q0?this.onReset_(s):t===hM?Ng("Server Error: "+s):t===W0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ng("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),k_!==s&&zn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Wu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(oM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:J0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ba.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e){this.allowedEvents_=e,this.listeners_={},ue(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){ue(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf extends lR{static getInstance(){return new qf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!g_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ue(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=32,tS=768;class ct{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function it(){return new ct("")}function He(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Cr(n){return n.pieces_.length-n.pieceNum_}function ut(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ct(n.pieces_,e)}function uR(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function pM(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function cR(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function hR(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ct(e,0)}function Qt(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof ct)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new ct(t,0)}function Le(n){return n.pieceNum_>=n.pieces_.length}function ti(n,e){const t=He(n),s=He(e);if(t===null)return e;if(t===s)return ti(ut(n),ut(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function fR(n,e){if(Cr(n)!==Cr(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function di(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Cr(n)>Cr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class mM{constructor(e,t){this.errorPrefix_=t,this.parts_=cR(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=fd(this.parts_[s]);dR(this)}}function gM(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=fd(e),dR(n)}function _M(n){const e=n.parts_.pop();n.byteLength_-=fd(e),n.parts_.length>0&&(n.byteLength_-=1)}function dR(n){if(n.byteLength_>tS)throw new Error(n.errorPrefix_+"has a key path longer than "+tS+" bytes ("+n.byteLength_+").");if(n.parts_.length>eS)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+eS+") or object contains a cycle "+wa(n))}function wa(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_ extends lR{static getInstance(){return new P_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return ue(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=1e3,yM=60*5*1e3,nS=30*1e3,vM=1.3,EM=3e4,TM="server_kill",iS=3;class Is extends oR{constructor(e,t,s,a,l,c,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=Is.nextPersistentConnectionId_++,this.log_=Cc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Lu,this.maxReconnectDelay_=yM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");P_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(nn(l)),ue(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new d_,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),ue(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ue(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const p=d.d,g=d.s;Is.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ls(e,"w")){const s=el(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();zn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||$O(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=nS)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=YO(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),ue(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nn(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ng("Unrecognized action received from server: "+nn(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ue(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Lu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Lu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>EM&&(this.reconnectDelay_=Lu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*vM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Is.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const p=function(){d?d.close():(c=!0,s())},g=function(T){ue(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:p,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,S]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?hn("getToken() completed but was canceled"):(hn("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=S&&S.token,d=new dM(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,I=>{zn(I+" ("+this.repoInfo_.toString()+")"),this.interrupt(TM)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&zn(T),p())}}}interrupt(e){hn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){hn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Eg(this.interruptReasons_)&&(this.reconnectDelay_=Lu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>D_(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new ct(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){hn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=iS&&(this.reconnectDelay_=nS,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){hn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=iS&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+zw.replace(/\./g,"-")]=1,g_()?e["framework.cordova"]=1:JA()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qf.getInstance().currentlyOnline();return Eg(this.interruptReasons_)&&e}}Is.nextPersistentConnectionId_=0;Is.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new qe(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new qe(tl,e),a=new qe(tl,t);return this.compare(s,a)!==0}minPost(){return qe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cf;class pR extends yd{static get __EMPTY_NODE(){return cf}static set __EMPTY_NODE(e){cf=e}compare(e,t){return ml(e.name,t.name)}isDefinedOn(e){throw fl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return qe.MIN}maxPost(){return new qe(ka,cf)}makePost(e,t){return ue(typeof e=="string","KeyIndex indexValue must always be a string."),new qe(e,cf)}toString(){return".key"}}const Zo=new pR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hf=class{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Un=class qu{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??qu.RED,this.left=a??Pi.EMPTY_NODE,this.right=l??Pi.EMPTY_NODE}copy(e,t,s,a,l){return new qu(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Pi.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Pi.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Un.RED=!0;Un.BLACK=!1;class SM{copy(e,t,s,a,l){return this}insert(e,t,s){return new Un(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Pi=class Rf{constructor(e,t=Rf.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Rf(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Un.BLACK,null,null))}remove(e){return new Rf(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Un.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new hf(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new hf(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new hf(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new hf(this.root_,null,this.comparator_,!0,e)}};Pi.EMPTY_NODE=new SM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AM(n,e){return ml(n.name,e.name)}function L_(n,e){return ml(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dg;function wM(n){Dg=n}const mR=function(n){return typeof n=="number"?"number:"+Gw(n):"string:"+n},gR=function(n){if(n.isLeafNode()){const e=n.val();ue(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ls(e,".sv"),"Priority must be a string or number.")}else ue(n===Dg||n.isEmpty(),"priority of unexpected type.");ue(n===Dg||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sS;class Yt{static set __childrenNodeConstructor(e){sS=e}static get __childrenNodeConstructor(){return sS}constructor(e,t=Yt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ue(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gR(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Yt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Yt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Le(e)?this:He(e)===".priority"?this.priorityNode_:Yt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Yt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=He(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(ue(s!==".priority"||Cr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Yt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ut(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+mR(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Gw(this.value_):e+=this.value_,this.lazyHash_=Hw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Yt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Yt.__childrenNodeConstructor?-1:(ue(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=Yt.VALUE_TYPE_ORDER.indexOf(t),l=Yt.VALUE_TYPE_ORDER.indexOf(s);return ue(a>=0,"Unknown leaf type: "+t),ue(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Yt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _R,yR;function RM(n){_R=n}function bM(n){yR=n}class CM extends yd{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?ml(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return qe.MIN}maxPost(){return new qe(ka,new Yt("[PRIORITY-POST]",yR))}makePost(e,t){const s=_R(e);return new qe(t,new Yt("[PRIORITY-POST]",s))}toString(){return".priority"}}const pn=new CM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM=Math.log(2);class NM{constructor(e){const t=l=>parseInt(Math.log(l)/IM,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const jf=function(n,e,t,s){n.sort(e);const a=function(p,g){const y=g-p;let T,S;if(y===0)return null;if(y===1)return T=n[p],S=t?t(T):T,new Un(S,T.node,Un.BLACK,null,null);{const I=parseInt(y/2,10)+p,C=a(p,I),z=a(I+1,g);return T=n[I],S=t?t(T):T,new Un(S,T.node,Un.BLACK,C,z)}},l=function(p){let g=null,y=null,T=n.length;const S=function(C,z){const L=T-C,Y=T;T-=C;const W=a(L+1,Y),te=n[L],le=t?t(te):te;I(new Un(le,te.node,z,null,W))},I=function(C){g?(g.left=C,g=C):(y=C,g=C)};for(let C=0;C<p.count;++C){const z=p.nextBitIsOne(),L=Math.pow(2,p.count-(C+1));z?S(L,Un.BLACK):(S(L,Un.BLACK),S(L,Un.RED))}return y},c=new NM(n.length),d=l(c);return new Pi(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rg;const zo={};class Rs{static get Default(){return ue(zo&&pn,"ChildrenNode.ts has not been loaded"),rg=rg||new Rs({".priority":zo},{".priority":pn}),rg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=el(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Pi?t:null}hasIndex(e){return Ls(this.indexSet_,e.toString())}addIndex(e,t){ue(e!==Zo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(qe.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=jf(s,e.getCompare()):d=zo;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const y=Object.assign({},this.indexes_);return y[p]=d,new Rs(y,g)}addToIndexes(e,t){const s=Mf(this.indexes_,(a,l)=>{const c=el(this.indexSet_,l);if(ue(c,"Missing index implementation for "+l),a===zo)if(c.isDefinedOn(e.node)){const d=[],p=t.getIterator(qe.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&d.push(g),g=p.getNext();return d.push(e),jf(d,c.getCompare())}else return zo;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new qe(e.name,d))),p.insert(e,e.node)}});return new Rs(s,this.indexSet_)}removeFromIndexes(e,t){const s=Mf(this.indexes_,a=>{if(a===zo)return a;{const l=t.get(e.name);return l?a.remove(new qe(e.name,l)):a}});return new Rs(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vu;class $e{static get EMPTY_NODE(){return Vu||(Vu=new $e(new Pi(L_),null,Rs.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&gR(this.priorityNode_),this.children_.isEmpty()&&ue(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Vu}updatePriority(e){return this.children_.isEmpty()?this:new $e(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Vu:t}}getChild(e){const t=He(e);return t===null?this:this.getImmediateChild(t).getChild(ut(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ue(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new qe(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Vu:this.priorityNode_;return new $e(a,c,l)}}updateChild(e,t){const s=He(e);if(s===null)return t;{ue(He(e)!==".priority"||Cr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(ut(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(pn,(c,d)=>{t[c]=d.val(e),s++,l&&$e.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+mR(this.getPriority().val())+":"),this.forEachChild(pn,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":Hw(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new qe(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new qe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new qe(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,qe.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,qe.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Nc?-1:0}withIndex(e){if(e===Zo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new $e(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Zo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(pn),a=t.getIterator(pn);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Zo?null:this.indexMap_.get(e.toString())}}$e.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class OM extends $e{constructor(){super(new Pi(L_),$e.EMPTY_NODE,Rs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $e.EMPTY_NODE}isEmpty(){return!1}}const Nc=new OM;Object.defineProperties(qe,{MIN:{value:new qe(tl,$e.EMPTY_NODE)},MAX:{value:new qe(ka,Nc)}});pR.__EMPTY_NODE=$e.EMPTY_NODE;Yt.__childrenNodeConstructor=$e;wM(Nc);bM(Nc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DM=!0;function fn(n,e=null){if(n===null)return $e.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ue(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Yt(t,fn(e))}if(!(n instanceof Array)&&DM){const t=[];let s=!1;if(si(n,(c,d)=>{if(c.substring(0,1)!=="."){const p=fn(d);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new qe(c,p)))}}),t.length===0)return $e.EMPTY_NODE;const l=jf(t,AM,c=>c.name,L_);if(s){const c=jf(t,pn.getCompare());return new $e(l,fn(e),new Rs({".priority":c},{".priority":pn}))}else return new $e(l,fn(e),Rs.Default)}else{let t=$e.EMPTY_NODE;return si(n,(s,a)=>{if(Ls(n,s)&&s.substring(0,1)!=="."){const l=fn(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(fn(e))}}RM(fn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM extends yd{constructor(e){super(),this.indexPath_=e,ue(!Le(e)&&He(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?ml(e.name,t.name):l}makePost(e,t){const s=fn(e),a=$e.EMPTY_NODE.updateChild(this.indexPath_,s);return new qe(t,a)}maxPost(){const e=$e.EMPTY_NODE.updateChild(this.indexPath_,Nc);return new qe(ka,e)}toString(){return cR(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM extends yd{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ml(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return qe.MIN}maxPost(){return qe.MAX}makePost(e,t){const s=fn(e);return new qe(t,s)}toString(){return".value"}}const MM=new xM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PM(n){return{type:"value",snapshotNode:n}}function LM(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function VM(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function rS(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function UM(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ue(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ue(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:tl}hasEnd(){return this.endSet_}getIndexEndValue(){return ue(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ue(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ka}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ue(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pn}copy(){const e=new V_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function aS(n){const e={};if(n.isDefault())return e;let t;if(n.index_===pn?t="$priority":n.index_===MM?t="$value":n.index_===Zo?t="$key":(ue(n.index_ instanceof kM,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=nn(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=nn(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+nn(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=nn(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+nn(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function oS(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==pn&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf extends oR{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ue(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Cc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=Gf.getListenId_(e,s),d={};this.listens_[c]=d;const p=aS(e._queryParams);this.restRequest_(l+".json",p,(g,y)=>{let T=y;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),el(this.listens_,c)===d){let S;g?g===401?S="permission_denied":S="rest_error:"+g:S="ok",a(S,null)}})}unlisten(e,t){const s=Gf.getListenId_(e,t);delete this.listens_[s]}get(e){const t=aS(e._queryParams),s=e._path.toString(),a=new d_;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+dl(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=rc(d.responseText)}catch{zn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,p)}else d.status!==401&&d.status!==404&&zn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(){this.rootNode_=$e.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(){return{value:null,children:new Map}}function vR(n,e,t){if(Le(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=He(e);n.children.has(s)||n.children.set(s,Kf());const a=n.children.get(s);e=ut(e),vR(a,e,t)}}function kg(n,e,t){n.value!==null?t(e,n.value):zM(n,(s,a)=>{const l=new ct(e.toString()+"/"+s);kg(a,l,t)})}function zM(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&si(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=10*1e3,HM=30*1e3,qM=5*60*1e3;class jM{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new FM(e);const s=lS+(HM-lS)*Math.random();Wu(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;si(e,(a,l)=>{l>0&&Ls(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),Wu(this.reportStats_.bind(this),Math.floor(Math.random()*2*qM))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Li;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Li||(Li={}));function ER(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function TR(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function SR(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Li.ACK_USER_WRITE,this.source=ER()}operationForChild(e){if(Le(this.path)){if(this.affectedTree.value!=null)return ue(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ct(e));return new Yf(it(),t,this.revert)}}else return ue(He(this.path)===e,"operationForChild called for unrelated child."),new Yf(ut(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Li.OVERWRITE}operationForChild(e){return Le(this.path)?new xa(this.source,it(),this.snap.getImmediateChild(e)):new xa(this.source,ut(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Li.MERGE}operationForChild(e){if(Le(this.path)){const t=this.children.subtree(new ct(e));return t.isEmpty()?null:t.value?new xa(this.source,it(),t.value):new hc(this.source,it(),t)}else return ue(He(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new hc(this.source,ut(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Le(e))return this.isFullyInitialized()&&!this.filtered_;const t=He(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function GM(n,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(UM(c.childName,c.snapshotNode))}),Uu(n,a,"child_removed",e,s,t),Uu(n,a,"child_added",e,s,t),Uu(n,a,"child_moved",l,s,t),Uu(n,a,"child_changed",e,s,t),Uu(n,a,"value",e,s,t),a}function Uu(n,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,p)=>YM(n,d,p)),c.forEach(d=>{const p=KM(n,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(p,n.query_))})})}function KM(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function YM(n,e,t){if(e.childName==null||t.childName==null)throw fl("Should only compare child_ events.");const s=new qe(e.childName,e.snapshotNode),a=new qe(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(n,e){return{eventCache:n,serverCache:e}}function Xu(n,e,t,s){return AR(new U_(e,t,s),n.serverCache)}function wR(n,e,t,s){return AR(n.eventCache,new U_(e,t,s))}function xg(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ma(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ag;const $M=()=>(ag||(ag=new Pi(xx)),ag);class lt{static fromObject(e){let t=new lt(null);return si(e,(s,a)=>{t=t.set(new ct(s),a)}),t}constructor(e,t=$M()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:it(),value:this.value};if(Le(e))return null;{const s=He(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(ut(e),t);return l!=null?{path:Qt(new ct(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Le(e))return this;{const t=He(e),s=this.children.get(t);return s!==null?s.subtree(ut(e)):new lt(null)}}set(e,t){if(Le(e))return new lt(t,this.children);{const s=He(e),l=(this.children.get(s)||new lt(null)).set(ut(e),t),c=this.children.insert(s,l);return new lt(this.value,c)}}remove(e){if(Le(e))return this.children.isEmpty()?new lt(null):new lt(null,this.children);{const t=He(e),s=this.children.get(t);if(s){const a=s.remove(ut(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new lt(null):new lt(this.value,l)}else return this}}get(e){if(Le(e))return this.value;{const t=He(e),s=this.children.get(t);return s?s.get(ut(e)):null}}setTree(e,t){if(Le(e))return t;{const s=He(e),l=(this.children.get(s)||new lt(null)).setTree(ut(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new lt(this.value,c)}}fold(e){return this.fold_(it(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Qt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,it(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Le(e))return null;{const l=He(e),c=this.children.get(l);return c?c.findOnPath_(ut(e),Qt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,it(),t)}foreachOnPath_(e,t,s){if(Le(e))return this;{this.value&&s(t,this.value);const a=He(e),l=this.children.get(a);return l?l.foreachOnPath_(ut(e),Qt(t,a),s):new lt(null)}}foreach(e){this.foreach_(it(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Qt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.writeTree_=e}static empty(){return new mi(new lt(null))}}function Zu(n,e,t){if(Le(e))return new mi(new lt(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=ti(a,e);return l=l.updateChild(c,t),new mi(n.writeTree_.set(a,l))}else{const a=new lt(t),l=n.writeTree_.setTree(e,a);return new mi(l)}}}function uS(n,e,t){let s=n;return si(t,(a,l)=>{s=Zu(s,Qt(e,a),l)}),s}function cS(n,e){if(Le(e))return mi.empty();{const t=n.writeTree_.setTree(e,new lt(null));return new mi(t)}}function Mg(n,e){return Ha(n,e)!=null}function Ha(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ti(t.path,e)):null}function hS(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(pn,(s,a)=>{e.push(new qe(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new qe(s,a.value))}),e}function Sr(n,e){if(Le(e))return n;{const t=Ha(n,e);return t!=null?new mi(new lt(t)):new mi(n.writeTree_.subtree(e))}}function Pg(n){return n.writeTree_.isEmpty()}function nl(n,e){return RR(it(),n.writeTree_,e)}function RR(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(ue(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=RR(Qt(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Qt(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(n,e){return DR(e,n)}function QM(n,e,t,s,a){ue(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=Zu(n.visibleWrites,e,t)),n.lastWriteId=s}function WM(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function XM(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);ue(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const d=n.allWrites[c];d.visible&&(c>=t&&ZM(d,s.path)?a=!1:di(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return JM(n),!0;if(s.snap)n.visibleWrites=cS(n.visibleWrites,s.path);else{const d=s.children;si(d,p=>{n.visibleWrites=cS(n.visibleWrites,Qt(s.path,p))})}return!0}else return!1}function ZM(n,e){if(n.snap)return di(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&di(Qt(n.path,t),e))return!0;return!1}function JM(n){n.visibleWrites=CR(n.allWrites,eP,it()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function eP(n){return n.visible}function CR(n,e,t){let s=mi.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let d;if(l.snap)di(t,c)?(d=ti(t,c),s=Zu(s,d,l.snap)):di(c,t)&&(d=ti(c,t),s=Zu(s,it(),l.snap.getChild(d)));else if(l.children){if(di(t,c))d=ti(t,c),s=uS(s,d,l.children);else if(di(c,t))if(d=ti(c,t),Le(d))s=uS(s,it(),l.children);else{const p=el(l.children,He(d));if(p){const g=p.getChild(ut(d));s=Zu(s,it(),g)}}}else throw fl("WriteRecord should have .snap or .children")}}return s}function IR(n,e,t,s,a){if(!s&&!a){const l=Ha(n.visibleWrites,e);if(l!=null)return l;{const c=Sr(n.visibleWrites,e);if(Pg(c))return t;if(t==null&&!Mg(c,it()))return null;{const d=t||$e.EMPTY_NODE;return nl(c,d)}}}else{const l=Sr(n.visibleWrites,e);if(!a&&Pg(l))return t;if(!a&&t==null&&!Mg(l,it()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(di(g.path,e)||di(e,g.path))},d=CR(n.allWrites,c,e),p=t||$e.EMPTY_NODE;return nl(d,p)}}}function tP(n,e,t){let s=$e.EMPTY_NODE;const a=Ha(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(pn,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=Sr(n.visibleWrites,e);return t.forEachChild(pn,(c,d)=>{const p=nl(Sr(l,new ct(c)),d);s=s.updateImmediateChild(c,p)}),hS(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=Sr(n.visibleWrites,e);return hS(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function nP(n,e,t,s,a){ue(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Qt(e,t);if(Mg(n.visibleWrites,l))return null;{const c=Sr(n.visibleWrites,l);return Pg(c)?a.getChild(t):nl(c,a.getChild(t))}}function iP(n,e,t,s){const a=Qt(e,t),l=Ha(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=Sr(n.visibleWrites,a);return nl(c,s.getNode().getImmediateChild(t))}else return null}function sP(n,e){return Ha(n.visibleWrites,e)}function rP(n,e,t,s,a,l,c){let d;const p=Sr(n.visibleWrites,e),g=Ha(p,it());if(g!=null)d=g;else if(t!=null)d=nl(p,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const y=[],T=c.getCompare(),S=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let I=S.getNext();for(;I&&y.length<a;)T(I,s)!==0&&y.push(I),I=S.getNext();return y}else return[]}function aP(){return{visibleWrites:mi.empty(),allWrites:[],lastWriteId:-1}}function Lg(n,e,t,s){return IR(n.writeTree,n.treePath,e,t,s)}function NR(n,e){return tP(n.writeTree,n.treePath,e)}function fS(n,e,t,s){return nP(n.writeTree,n.treePath,e,t,s)}function $f(n,e){return sP(n.writeTree,Qt(n.treePath,e))}function oP(n,e,t,s,a,l){return rP(n.writeTree,n.treePath,e,t,s,a,l)}function B_(n,e,t){return iP(n.writeTree,n.treePath,e,t)}function OR(n,e){return DR(Qt(n.treePath,e),n.writeTree)}function DR(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;ue(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ue(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,rS(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,VM(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,LM(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,rS(s,e.snapshotNode,a.oldSnap));else throw fl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const kR=new uP;class z_{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new U_(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return B_(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ma(this.viewCache_),l=oP(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}function cP(n,e){ue(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ue(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function hP(n,e,t,s,a){const l=new lP;let c,d;if(t.type===Li.OVERWRITE){const g=t;g.source.fromUser?c=Vg(n,e,g.path,g.snap,s,a,l):(ue(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!Le(g.path),c=Qf(n,e,g.path,g.snap,s,a,d,l))}else if(t.type===Li.MERGE){const g=t;g.source.fromUser?c=dP(n,e,g.path,g.children,s,a,l):(ue(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=Ug(n,e,g.path,g.children,s,a,d,l))}else if(t.type===Li.ACK_USER_WRITE){const g=t;g.revert?c=gP(n,e,g.path,s,a,l):c=pP(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===Li.LISTEN_COMPLETE)c=mP(n,e,t.path,s,l);else throw fl("Unknown operation type: "+t.type);const p=l.getChanges();return fP(e,c,p),{viewCache:c,changes:p}}function fP(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=xg(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(PM(xg(e)))}}function xR(n,e,t,s,a,l){const c=e.eventCache;if($f(s,t)!=null)return e;{let d,p;if(Le(t))if(ue(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Ma(e),y=g instanceof $e?g:$e.EMPTY_NODE,T=NR(s,y);d=n.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=Lg(s,Ma(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=He(t);if(g===".priority"){ue(Cr(t)===1,"Can't have a priority with additional path components");const y=c.getNode();p=e.serverCache.getNode();const T=fS(s,t,y,p);T!=null?d=n.filter.updatePriority(y,T):d=c.getNode()}else{const y=ut(t);let T;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const S=fS(s,t,c.getNode(),p);S!=null?T=c.getNode().getImmediateChild(g).updateChild(y,S):T=c.getNode().getImmediateChild(g)}else T=B_(s,g,e.serverCache);T!=null?d=n.filter.updateChild(c.getNode(),g,T,y,a,l):d=c.getNode()}}return Xu(e,d,c.isFullyInitialized()||Le(t),n.filter.filtersNodes())}}function Qf(n,e,t,s,a,l,c,d){const p=e.serverCache;let g;const y=c?n.filter:n.filter.getIndexedFilter();if(Le(t))g=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const I=p.getNode().updateChild(t,s);g=y.updateFullNode(p.getNode(),I,null)}else{const I=He(t);if(!p.isCompleteForPath(t)&&Cr(t)>1)return e;const C=ut(t),L=p.getNode().getImmediateChild(I).updateChild(C,s);I===".priority"?g=y.updatePriority(p.getNode(),L):g=y.updateChild(p.getNode(),I,L,C,kR,null)}const T=wR(e,g,p.isFullyInitialized()||Le(t),y.filtersNodes()),S=new z_(a,T,l);return xR(n,T,t,a,S,d)}function Vg(n,e,t,s,a,l,c){const d=e.eventCache;let p,g;const y=new z_(a,e,l);if(Le(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,c),p=Xu(e,g,!0,n.filter.filtersNodes());else{const T=He(t);if(T===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),p=Xu(e,g,d.isFullyInitialized(),d.isFiltered());else{const S=ut(t),I=d.getNode().getImmediateChild(T);let C;if(Le(S))C=s;else{const z=y.getCompleteChild(T);z!=null?uR(S)===".priority"&&z.getChild(hR(S)).isEmpty()?C=z:C=z.updateChild(S,s):C=$e.EMPTY_NODE}if(I.equals(C))p=e;else{const z=n.filter.updateChild(d.getNode(),T,C,S,y,c);p=Xu(e,z,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function dS(n,e){return n.eventCache.isCompleteForChild(e)}function dP(n,e,t,s,a,l,c){let d=e;return s.foreach((p,g)=>{const y=Qt(t,p);dS(e,He(y))&&(d=Vg(n,d,y,g,a,l,c))}),s.foreach((p,g)=>{const y=Qt(t,p);dS(e,He(y))||(d=Vg(n,d,y,g,a,l,c))}),d}function pS(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function Ug(n,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;Le(t)?g=s:g=new lt(null).setTree(t,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((T,S)=>{if(y.hasChild(T)){const I=e.serverCache.getNode().getImmediateChild(T),C=pS(n,I,S);p=Qf(n,p,new ct(T),C,a,l,c,d)}}),g.children.inorderTraversal((T,S)=>{const I=!e.serverCache.isCompleteForChild(T)&&S.value===null;if(!y.hasChild(T)&&!I){const C=e.serverCache.getNode().getImmediateChild(T),z=pS(n,C,S);p=Qf(n,p,new ct(T),z,a,l,c,d)}}),p}function pP(n,e,t,s,a,l,c){if($f(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Le(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return Qf(n,e,t,p.getNode().getChild(t),a,l,d,c);if(Le(t)){let g=new lt(null);return p.getNode().forEachChild(Zo,(y,T)=>{g=g.set(new ct(y),T)}),Ug(n,e,t,g,a,l,d,c)}else return e}else{let g=new lt(null);return s.foreach((y,T)=>{const S=Qt(t,y);p.isCompleteForPath(S)&&(g=g.set(y,p.getNode().getChild(S)))}),Ug(n,e,t,g,a,l,d,c)}}function mP(n,e,t,s,a){const l=e.serverCache,c=wR(e,l.getNode(),l.isFullyInitialized()||Le(t),l.isFiltered());return xR(n,c,t,s,kR,a)}function gP(n,e,t,s,a,l){let c;if($f(s,t)!=null)return e;{const d=new z_(s,e,a),p=e.eventCache.getNode();let g;if(Le(t)||He(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Lg(s,Ma(e));else{const T=e.serverCache.getNode();ue(T instanceof $e,"serverChildren would be complete if leaf node"),y=NR(s,T)}y=y,g=n.filter.updateFullNode(p,y,l)}else{const y=He(t);let T=B_(s,y,e.serverCache);T==null&&e.serverCache.isCompleteForChild(y)&&(T=p.getImmediateChild(y)),T!=null?g=n.filter.updateChild(p,y,T,ut(t),d,l):e.eventCache.getNode().hasChild(y)?g=n.filter.updateChild(p,y,$e.EMPTY_NODE,ut(t),d,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=Lg(s,Ma(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||$f(s,it())!=null,Xu(e,g,c,n.filter.filtersNodes())}}function _P(n,e){const t=Ma(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Le(e)&&!t.getImmediateChild(He(e)).isEmpty())?t.getChild(e):null}function mS(n,e,t,s){e.type===Li.MERGE&&e.source.queryId!==null&&(ue(Ma(n.viewCache_),"We should always have a full cache before handling merges"),ue(xg(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=hP(n.processor_,a,e,t,s);return cP(n.processor_,l.viewCache),ue(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,yP(n,l.changes,l.viewCache.eventCache.getNode())}function yP(n,e,t,s){const a=n.eventRegistrations_;return GM(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gS;function vP(n){ue(!gS,"__referenceConstructor has already been defined"),gS=n}function F_(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return ue(l!=null,"SyncTree gave us an op for an invalid query."),mS(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(mS(c,e,t,s));return l}}function H_(n,e){let t=null;for(const s of n.views.values())t=t||_P(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _S;function EP(n){ue(!_S,"__referenceConstructor has already been defined"),_S=n}class yS{constructor(e){this.listenProvider_=e,this.syncPointTree_=new lt(null),this.pendingWriteTree_=aP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function TP(n,e,t,s,a){return QM(n.pendingWriteTree_,e,t,s,a),a?Ed(n,new xa(ER(),e,t)):[]}function Yo(n,e,t=!1){const s=WM(n.pendingWriteTree_,e);if(XM(n.pendingWriteTree_,e)){let l=new lt(null);return s.snap!=null?l=l.set(it(),!0):si(s.children,c=>{l=l.set(new ct(c),!0)}),Ed(n,new Yf(s.path,l,t))}else return[]}function vd(n,e,t){return Ed(n,new xa(TR(),e,t))}function SP(n,e,t){const s=lt.fromObject(t);return Ed(n,new hc(TR(),e,s))}function AP(n,e,t,s){const a=VR(n,s);if(a!=null){const l=UR(a),c=l.path,d=l.queryId,p=ti(c,e),g=new xa(SR(d),p,t);return BR(n,c,g)}else return[]}function wP(n,e,t,s){const a=VR(n,s);if(a){const l=UR(a),c=l.path,d=l.queryId,p=ti(c,e),g=lt.fromObject(t),y=new hc(SR(d),p,g);return BR(n,c,y)}else return[]}function MR(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,d)=>{const p=ti(c,e),g=H_(d,p);if(g)return g});return IR(a,e,l,t,!0)}function Ed(n,e){return PR(e,n.syncPointTree_,null,bR(n.pendingWriteTree_,it()))}function PR(n,e,t,s){if(Le(n.path))return LR(n,e,t,s);{const a=e.get(it());t==null&&a!=null&&(t=H_(a,it()));let l=[];const c=He(n.path),d=n.operationForChild(c),p=e.children.get(c);if(p&&d){const g=t?t.getImmediateChild(c):null,y=OR(s,c);l=l.concat(PR(d,p,g,y))}return a&&(l=l.concat(F_(a,n,s,t))),l}}function LR(n,e,t,s){const a=e.get(it());t==null&&a!=null&&(t=H_(a,it()));let l=[];return e.children.inorderTraversal((c,d)=>{const p=t?t.getImmediateChild(c):null,g=OR(s,c),y=n.operationForChild(c);y&&(l=l.concat(LR(y,d,p,g)))}),a&&(l=l.concat(F_(a,n,s,t))),l}function VR(n,e){return n.tagToQueryMap.get(e)}function UR(n){const e=n.indexOf("$");return ue(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ct(n.substr(0,e))}}function BR(n,e,t){const s=n.syncPointTree_.get(e);ue(s,"Missing sync point for query tag that we're tracking");const a=bR(n.pendingWriteTree_,e);return F_(s,t,a,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new q_(t)}node(){return this.node_}}class j_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Qt(this.path_,e);return new j_(this.syncTree_,t)}node(){return MR(this.syncTree_,this.path_)}}const RP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},vS=function(n,e,t){if(!n||typeof n!="object")return n;if(ue(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return bP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return CP(n[".sv"],e);ue(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},bP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ue(!1,"Unexpected server value: "+n)}},CP=function(n,e,t){n.hasOwnProperty("increment")||ue(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&ue(!1,"Unexpected increment value: "+s);const a=e.node();if(ue(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},IP=function(n,e,t,s){return G_(e,new j_(t,n),s)},NP=function(n,e,t){return G_(n,new q_(e),t)};function G_(n,e,t){const s=n.getPriority().val(),a=vS(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,d=vS(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new Yt(d,fn(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new Yt(a))),c.forEachChild(pn,(d,p)=>{const g=G_(p,e.getImmediateChild(d),t);g!==p&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Y_(n,e){let t=e instanceof ct?e:new ct(e),s=n,a=He(t);for(;a!==null;){const l=el(s.node.children,a)||{children:{},childCount:0};s=new K_(a,s,l),t=ut(t),a=He(t)}return s}function gl(n){return n.node.value}function zR(n,e){n.node.value=e,Bg(n)}function FR(n){return n.node.childCount>0}function OP(n){return gl(n)===void 0&&!FR(n)}function Td(n,e){si(n.node.children,(t,s)=>{e(new K_(t,n,s))})}function HR(n,e,t,s){t&&e(n),Td(n,a=>{HR(a,e,!0)})}function DP(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Oc(n){return new ct(n.parent===null?n.name:Oc(n.parent)+"/"+n.name)}function Bg(n){n.parent!==null&&kP(n.parent,n.name,n)}function kP(n,e,t){const s=OP(t),a=Ls(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,Bg(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,Bg(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=/[\[\].#$\/\u0000-\u001F\u007F]/,MP=/[\[\].#$\u0000-\u001F\u007F]/,og=10*1024*1024,qR=function(n){return typeof n=="string"&&n.length!==0&&!xP.test(n)},PP=function(n){return typeof n=="string"&&n.length!==0&&!MP.test(n)},LP=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),PP(n)},jR=function(n,e,t){const s=t instanceof ct?new mM(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+wa(s));if(typeof e=="function")throw new Error(n+"contains a function "+wa(s)+" with contents = "+e.toString());if(qw(e))throw new Error(n+"contains "+e.toString()+" "+wa(s));if(typeof e=="string"&&e.length>og/3&&fd(e)>og)throw new Error(n+"contains a string greater than "+og+" utf8 bytes "+wa(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(si(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!qR(c)))throw new Error(n+" contains an invalid key ("+c+") "+wa(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);gM(s,c),jR(n,d,s),_M(s)}),a&&l)throw new Error(n+' contains ".value" child '+wa(s)+" in addition to actual children.")}},VP=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!qR(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!LP(t))throw new Error(JO(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function BP(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!fR(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function qa(n,e,t){BP(n,t),zP(n,s=>di(s,e)||di(e,s))}function zP(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(FP(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function FP(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Qu&&hn("event: "+t.toString()),Ic(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP="repo_interrupt",qP=25;class jP{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new UP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Kf(),this.transactionQueueTree_=new K_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function GP(n,e,t){if(n.stats_=x_(n.repoInfo_),n.forceRestClient_||Bx())n.server_=new Gf(n.repoInfo_,(s,a,l,c)=>{ES(n,s,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>TS(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nn(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Is(n.repoInfo_,e,(s,a,l,c)=>{ES(n,s,a,l,c)},s=>{TS(n,s)},s=>{YP(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Gx(n.repoInfo_,()=>new jM(n.stats_,n.server_)),n.infoData_=new BM,n.infoSyncTree_=new yS({startListening:(s,a,l,c)=>{let d=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(d=vd(n.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),$_(n,"connected",!1),n.serverSyncTree_=new yS({startListening:(s,a,l,c)=>(n.server_.listen(s,l,a,(d,p)=>{const g=c(d,p);qa(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function KP(n){const t=n.infoData_.getNode(new ct(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function GR(n){return RP({timestamp:KP(n)})}function ES(n,e,t,s,a){n.dataUpdateCount++;const l=new ct(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const p=Mf(t,g=>fn(g));c=wP(n.serverSyncTree_,l,p,a)}else{const p=fn(t);c=AP(n.serverSyncTree_,l,p,a)}else if(s){const p=Mf(t,g=>fn(g));c=SP(n.serverSyncTree_,l,p)}else{const p=fn(t);c=vd(n.serverSyncTree_,l,p)}let d=l;c.length>0&&(d=W_(n,l)),qa(n.eventQueue_,d,c)}function TS(n,e){$_(n,"connected",e),e===!1&&QP(n)}function YP(n,e){si(e,(t,s)=>{$_(n,t,s)})}function $_(n,e,t){const s=new ct("/.info/"+e),a=fn(t);n.infoData_.updateSnapshot(s,a);const l=vd(n.infoSyncTree_,s,a);qa(n.eventQueue_,s,l)}function $P(n){return n.nextWriteId_++}function QP(n){KR(n,"onDisconnectEvents");const e=GR(n),t=Kf();kg(n.onDisconnect_,it(),(a,l)=>{const c=IP(a,l,n.serverSyncTree_,e);vR(t,a,c)});let s=[];kg(t,it(),(a,l)=>{s=s.concat(vd(n.serverSyncTree_,a,l));const c=JP(n,a);W_(n,c)}),n.onDisconnect_=Kf(),qa(n.eventQueue_,it(),s)}function WP(n){n.persistentConnection_&&n.persistentConnection_.interrupt(HP)}function KR(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),hn(t,...e)}function YR(n,e,t){return MR(n.serverSyncTree_,e,t)||$e.EMPTY_NODE}function Q_(n,e=n.transactionQueueTree_){if(e||Sd(n,e),gl(e)){const t=QR(n,e);ue(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&XP(n,Oc(e),t)}else FR(e)&&Td(e,t=>{Q_(n,t)})}function XP(n,e,t){const s=t.map(g=>g.currentWriteId),a=YR(n,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const y=t[g];ue(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const T=ti(e,y.path);l=l.updateChild(T,y.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;n.server_.put(p.toString(),d,g=>{KR(n,"transaction put response",{path:p.toString(),status:g});let y=[];if(g==="ok"){const T=[];for(let S=0;S<t.length;S++)t[S].status=2,y=y.concat(Yo(n.serverSyncTree_,t[S].currentWriteId)),t[S].onComplete&&T.push(()=>t[S].onComplete(null,!0,t[S].currentOutputSnapshotResolved)),t[S].unwatcher();Sd(n,Y_(n.transactionQueueTree_,e)),Q_(n,n.transactionQueueTree_),qa(n.eventQueue_,e,y);for(let S=0;S<T.length;S++)Ic(T[S])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{zn("transaction at "+p.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}W_(n,e)}},c)}function W_(n,e){const t=$R(n,e),s=Oc(t),a=QR(n,t);return ZP(n,a,s),s}function ZP(n,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],g=ti(t,p.path);let y=!1,T;if(ue(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,T=p.abortReason,a=a.concat(Yo(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=qP)y=!0,T="maxretry",a=a.concat(Yo(n.serverSyncTree_,p.currentWriteId,!0));else{const S=YR(n,p.path,c);p.currentInputSnapshot=S;const I=e[d].update(S.val());if(I!==void 0){jR("transaction failed: Data returned ",I,p.path);let C=fn(I);typeof I=="object"&&I!=null&&Ls(I,".priority")||(C=C.updatePriority(S.getPriority()));const L=p.currentWriteId,Y=GR(n),W=NP(C,S,Y);p.currentOutputSnapshotRaw=C,p.currentOutputSnapshotResolved=W,p.currentWriteId=$P(n),c.splice(c.indexOf(L),1),a=a.concat(TP(n.serverSyncTree_,p.path,W,p.currentWriteId,p.applyLocally)),a=a.concat(Yo(n.serverSyncTree_,L,!0))}else y=!0,T="nodata",a=a.concat(Yo(n.serverSyncTree_,p.currentWriteId,!0))}qa(n.eventQueue_,t,a),a=[],y&&(e[d].status=2,function(S){setTimeout(S,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}Sd(n,n.transactionQueueTree_);for(let d=0;d<s.length;d++)Ic(s[d]);Q_(n,n.transactionQueueTree_)}function $R(n,e){let t,s=n.transactionQueueTree_;for(t=He(e);t!==null&&gl(s)===void 0;)s=Y_(s,t),e=ut(e),t=He(e);return s}function QR(n,e){const t=[];return WR(n,e,t),t.sort((s,a)=>s.order-a.order),t}function WR(n,e,t){const s=gl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Td(e,a=>{WR(n,a,t)})}function Sd(n,e){const t=gl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,zR(e,t.length>0?t:void 0)}Td(e,s=>{Sd(n,s)})}function JP(n,e){const t=Oc($R(n,e)),s=Y_(n.transactionQueueTree_,e);return DP(s,a=>{lg(n,a)}),lg(n,s),HR(s,a=>{lg(n,a)}),t}function lg(n,e){const t=gl(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(ue(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(ue(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Yo(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?zR(e,void 0):t.length=l+1,qa(n.eventQueue_,Oc(e),a);for(let c=0;c<s.length;c++)Ic(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eL(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function tL(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):zn(`Invalid query segment '${t}' in query '${n}'`)}return e}const SS=function(n,e){const t=nL(n),s=t.namespace;t.domain==="firebase.com"&&Da(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Da("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Dx();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Hx(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new ct(t.pathString)}},nL=function(n){let e="",t="",s="",a="",l="",c=!0,d="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let y=n.indexOf("/");y===-1&&(y=n.length);let T=n.indexOf("?");T===-1&&(T=n.length),e=n.substring(0,Math.min(y,T)),y<T&&(a=eL(n.substring(y,T)));const S=tL(n.substring(Math.min(n.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const I=e.slice(0,g);if(I.toLowerCase()==="localhost")t="localhost";else if(I.split(".").length<=2)t=I;else{const C=e.indexOf(".");s=e.substring(0,C).toLowerCase(),t=e.substring(C+1),l=s}"ns"in S&&(l=S.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Le(this._path)?null:uR(this._path)}get ref(){return new _l(this._repo,this._path)}get _queryIdentifier(){const e=oS(this._queryParams),t=D_(e);return t==="{}"?"default":t}get _queryObject(){return oS(this._queryParams)}isEqual(e){if(e=ot(e),!(e instanceof X_))return!1;const t=this._repo===e._repo,s=fR(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+pM(this._path)}}class _l extends X_{constructor(e,t){super(e,t,new V_,!1)}get parent(){const e=hR(this._path);return e===null?null:new _l(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}vP(_l);EP(_l);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iL="FIREBASE_DATABASE_EMULATOR_HOST",zg={};let sL=!1;function rL(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||Da("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),hn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=SS(l,a),d=c.repoInfo,p;typeof process<"u"&&H0&&(p=H0[iL]),p?(l=`http://${p}?ns=${d.namespace}`,c=SS(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new Fx(n.name,n.options,e);VP("Invalid Firebase Database URL",c),Le(c.path)||Da("Database URL must point to the root of a Firebase Database (not including a child path).");const y=oL(d,n,g,new zx(n,t));return new lL(y,n)}function aL(n,e){const t=zg[e];(!t||t[n.key]!==n)&&Da(`Database ${e}(${n.repoInfo_}) has already been deleted.`),WP(n),delete t[n.key]}function oL(n,e,t,s){let a=zg[e.name];a||(a={},zg[e.name]=a);let l=a[n.toURLString()];return l&&Da("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new jP(n,sL,t,s),a[n.toURLString()]=l,l}class lL{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(GP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _l(this._repo,it())),this._rootInternal}_delete(){return this._rootInternal!==null&&(aL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Da("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uL(n){Rx(Pr),br(new Os("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return rL(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),ni(q0,j0,n),ni(q0,j0,"esm2017")}Is.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Is.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};uL();var AS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ar,XR;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,R){function b(){}b.prototype=R.prototype,k.D=R.prototype,k.prototype=new b,k.prototype.constructor=k,k.C=function(x,P,U){for(var O=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)O[kt-2]=arguments[kt];return R.prototype[P].apply(x,O)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(k,R,b){b||(b=0);var x=Array(16);if(typeof R=="string")for(var P=0;16>P;++P)x[P]=R.charCodeAt(b++)|R.charCodeAt(b++)<<8|R.charCodeAt(b++)<<16|R.charCodeAt(b++)<<24;else for(P=0;16>P;++P)x[P]=R[b++]|R[b++]<<8|R[b++]<<16|R[b++]<<24;R=k.g[0],b=k.g[1],P=k.g[2];var U=k.g[3],O=R+(U^b&(P^U))+x[0]+3614090360&4294967295;R=b+(O<<7&4294967295|O>>>25),O=U+(P^R&(b^P))+x[1]+3905402710&4294967295,U=R+(O<<12&4294967295|O>>>20),O=P+(b^U&(R^b))+x[2]+606105819&4294967295,P=U+(O<<17&4294967295|O>>>15),O=b+(R^P&(U^R))+x[3]+3250441966&4294967295,b=P+(O<<22&4294967295|O>>>10),O=R+(U^b&(P^U))+x[4]+4118548399&4294967295,R=b+(O<<7&4294967295|O>>>25),O=U+(P^R&(b^P))+x[5]+1200080426&4294967295,U=R+(O<<12&4294967295|O>>>20),O=P+(b^U&(R^b))+x[6]+2821735955&4294967295,P=U+(O<<17&4294967295|O>>>15),O=b+(R^P&(U^R))+x[7]+4249261313&4294967295,b=P+(O<<22&4294967295|O>>>10),O=R+(U^b&(P^U))+x[8]+1770035416&4294967295,R=b+(O<<7&4294967295|O>>>25),O=U+(P^R&(b^P))+x[9]+2336552879&4294967295,U=R+(O<<12&4294967295|O>>>20),O=P+(b^U&(R^b))+x[10]+4294925233&4294967295,P=U+(O<<17&4294967295|O>>>15),O=b+(R^P&(U^R))+x[11]+2304563134&4294967295,b=P+(O<<22&4294967295|O>>>10),O=R+(U^b&(P^U))+x[12]+1804603682&4294967295,R=b+(O<<7&4294967295|O>>>25),O=U+(P^R&(b^P))+x[13]+4254626195&4294967295,U=R+(O<<12&4294967295|O>>>20),O=P+(b^U&(R^b))+x[14]+2792965006&4294967295,P=U+(O<<17&4294967295|O>>>15),O=b+(R^P&(U^R))+x[15]+1236535329&4294967295,b=P+(O<<22&4294967295|O>>>10),O=R+(P^U&(b^P))+x[1]+4129170786&4294967295,R=b+(O<<5&4294967295|O>>>27),O=U+(b^P&(R^b))+x[6]+3225465664&4294967295,U=R+(O<<9&4294967295|O>>>23),O=P+(R^b&(U^R))+x[11]+643717713&4294967295,P=U+(O<<14&4294967295|O>>>18),O=b+(U^R&(P^U))+x[0]+3921069994&4294967295,b=P+(O<<20&4294967295|O>>>12),O=R+(P^U&(b^P))+x[5]+3593408605&4294967295,R=b+(O<<5&4294967295|O>>>27),O=U+(b^P&(R^b))+x[10]+38016083&4294967295,U=R+(O<<9&4294967295|O>>>23),O=P+(R^b&(U^R))+x[15]+3634488961&4294967295,P=U+(O<<14&4294967295|O>>>18),O=b+(U^R&(P^U))+x[4]+3889429448&4294967295,b=P+(O<<20&4294967295|O>>>12),O=R+(P^U&(b^P))+x[9]+568446438&4294967295,R=b+(O<<5&4294967295|O>>>27),O=U+(b^P&(R^b))+x[14]+3275163606&4294967295,U=R+(O<<9&4294967295|O>>>23),O=P+(R^b&(U^R))+x[3]+4107603335&4294967295,P=U+(O<<14&4294967295|O>>>18),O=b+(U^R&(P^U))+x[8]+1163531501&4294967295,b=P+(O<<20&4294967295|O>>>12),O=R+(P^U&(b^P))+x[13]+2850285829&4294967295,R=b+(O<<5&4294967295|O>>>27),O=U+(b^P&(R^b))+x[2]+4243563512&4294967295,U=R+(O<<9&4294967295|O>>>23),O=P+(R^b&(U^R))+x[7]+1735328473&4294967295,P=U+(O<<14&4294967295|O>>>18),O=b+(U^R&(P^U))+x[12]+2368359562&4294967295,b=P+(O<<20&4294967295|O>>>12),O=R+(b^P^U)+x[5]+4294588738&4294967295,R=b+(O<<4&4294967295|O>>>28),O=U+(R^b^P)+x[8]+2272392833&4294967295,U=R+(O<<11&4294967295|O>>>21),O=P+(U^R^b)+x[11]+1839030562&4294967295,P=U+(O<<16&4294967295|O>>>16),O=b+(P^U^R)+x[14]+4259657740&4294967295,b=P+(O<<23&4294967295|O>>>9),O=R+(b^P^U)+x[1]+2763975236&4294967295,R=b+(O<<4&4294967295|O>>>28),O=U+(R^b^P)+x[4]+1272893353&4294967295,U=R+(O<<11&4294967295|O>>>21),O=P+(U^R^b)+x[7]+4139469664&4294967295,P=U+(O<<16&4294967295|O>>>16),O=b+(P^U^R)+x[10]+3200236656&4294967295,b=P+(O<<23&4294967295|O>>>9),O=R+(b^P^U)+x[13]+681279174&4294967295,R=b+(O<<4&4294967295|O>>>28),O=U+(R^b^P)+x[0]+3936430074&4294967295,U=R+(O<<11&4294967295|O>>>21),O=P+(U^R^b)+x[3]+3572445317&4294967295,P=U+(O<<16&4294967295|O>>>16),O=b+(P^U^R)+x[6]+76029189&4294967295,b=P+(O<<23&4294967295|O>>>9),O=R+(b^P^U)+x[9]+3654602809&4294967295,R=b+(O<<4&4294967295|O>>>28),O=U+(R^b^P)+x[12]+3873151461&4294967295,U=R+(O<<11&4294967295|O>>>21),O=P+(U^R^b)+x[15]+530742520&4294967295,P=U+(O<<16&4294967295|O>>>16),O=b+(P^U^R)+x[2]+3299628645&4294967295,b=P+(O<<23&4294967295|O>>>9),O=R+(P^(b|~U))+x[0]+4096336452&4294967295,R=b+(O<<6&4294967295|O>>>26),O=U+(b^(R|~P))+x[7]+1126891415&4294967295,U=R+(O<<10&4294967295|O>>>22),O=P+(R^(U|~b))+x[14]+2878612391&4294967295,P=U+(O<<15&4294967295|O>>>17),O=b+(U^(P|~R))+x[5]+4237533241&4294967295,b=P+(O<<21&4294967295|O>>>11),O=R+(P^(b|~U))+x[12]+1700485571&4294967295,R=b+(O<<6&4294967295|O>>>26),O=U+(b^(R|~P))+x[3]+2399980690&4294967295,U=R+(O<<10&4294967295|O>>>22),O=P+(R^(U|~b))+x[10]+4293915773&4294967295,P=U+(O<<15&4294967295|O>>>17),O=b+(U^(P|~R))+x[1]+2240044497&4294967295,b=P+(O<<21&4294967295|O>>>11),O=R+(P^(b|~U))+x[8]+1873313359&4294967295,R=b+(O<<6&4294967295|O>>>26),O=U+(b^(R|~P))+x[15]+4264355552&4294967295,U=R+(O<<10&4294967295|O>>>22),O=P+(R^(U|~b))+x[6]+2734768916&4294967295,P=U+(O<<15&4294967295|O>>>17),O=b+(U^(P|~R))+x[13]+1309151649&4294967295,b=P+(O<<21&4294967295|O>>>11),O=R+(P^(b|~U))+x[4]+4149444226&4294967295,R=b+(O<<6&4294967295|O>>>26),O=U+(b^(R|~P))+x[11]+3174756917&4294967295,U=R+(O<<10&4294967295|O>>>22),O=P+(R^(U|~b))+x[2]+718787259&4294967295,P=U+(O<<15&4294967295|O>>>17),O=b+(U^(P|~R))+x[9]+3951481745&4294967295,k.g[0]=k.g[0]+R&4294967295,k.g[1]=k.g[1]+(P+(O<<21&4294967295|O>>>11))&4294967295,k.g[2]=k.g[2]+P&4294967295,k.g[3]=k.g[3]+U&4294967295}s.prototype.u=function(k,R){R===void 0&&(R=k.length);for(var b=R-this.blockSize,x=this.B,P=this.h,U=0;U<R;){if(P==0)for(;U<=b;)a(this,k,U),U+=this.blockSize;if(typeof k=="string"){for(;U<R;)if(x[P++]=k.charCodeAt(U++),P==this.blockSize){a(this,x),P=0;break}}else for(;U<R;)if(x[P++]=k[U++],P==this.blockSize){a(this,x),P=0;break}}this.h=P,this.o+=R},s.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var R=1;R<k.length-8;++R)k[R]=0;var b=8*this.o;for(R=k.length-8;R<k.length;++R)k[R]=b&255,b/=256;for(this.u(k),k=Array(16),R=b=0;4>R;++R)for(var x=0;32>x;x+=8)k[b++]=this.g[R]>>>x&255;return k};function l(k,R){var b=d;return Object.prototype.hasOwnProperty.call(b,k)?b[k]:b[k]=R(k)}function c(k,R){this.h=R;for(var b=[],x=!0,P=k.length-1;0<=P;P--){var U=k[P]|0;x&&U==R||(b[P]=U,x=!1)}this.g=b}var d={};function p(k){return-128<=k&&128>k?l(k,function(R){return new c([R|0],0>R?-1:0)}):new c([k|0],0>k?-1:0)}function g(k){if(isNaN(k)||!isFinite(k))return T;if(0>k)return L(g(-k));for(var R=[],b=1,x=0;k>=b;x++)R[x]=k/b|0,b*=4294967296;return new c(R,0)}function y(k,R){if(k.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(k.charAt(0)=="-")return L(y(k.substring(1),R));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=g(Math.pow(R,8)),x=T,P=0;P<k.length;P+=8){var U=Math.min(8,k.length-P),O=parseInt(k.substring(P,P+U),R);8>U?(U=g(Math.pow(R,U)),x=x.j(U).add(g(O))):(x=x.j(b),x=x.add(g(O)))}return x}var T=p(0),S=p(1),I=p(16777216);n=c.prototype,n.m=function(){if(z(this))return-L(this).m();for(var k=0,R=1,b=0;b<this.g.length;b++){var x=this.i(b);k+=(0<=x?x:4294967296+x)*R,R*=4294967296}return k},n.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(C(this))return"0";if(z(this))return"-"+L(this).toString(k);for(var R=g(Math.pow(k,6)),b=this,x="";;){var P=le(b,R).g;b=Y(b,P.j(R));var U=((0<b.g.length?b.g[0]:b.h)>>>0).toString(k);if(b=P,C(b))return U+x;for(;6>U.length;)U="0"+U;x=U+x}},n.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function C(k){if(k.h!=0)return!1;for(var R=0;R<k.g.length;R++)if(k.g[R]!=0)return!1;return!0}function z(k){return k.h==-1}n.l=function(k){return k=Y(this,k),z(k)?-1:C(k)?0:1};function L(k){for(var R=k.g.length,b=[],x=0;x<R;x++)b[x]=~k.g[x];return new c(b,~k.h).add(S)}n.abs=function(){return z(this)?L(this):this},n.add=function(k){for(var R=Math.max(this.g.length,k.g.length),b=[],x=0,P=0;P<=R;P++){var U=x+(this.i(P)&65535)+(k.i(P)&65535),O=(U>>>16)+(this.i(P)>>>16)+(k.i(P)>>>16);x=O>>>16,U&=65535,O&=65535,b[P]=O<<16|U}return new c(b,b[b.length-1]&-2147483648?-1:0)};function Y(k,R){return k.add(L(R))}n.j=function(k){if(C(this)||C(k))return T;if(z(this))return z(k)?L(this).j(L(k)):L(L(this).j(k));if(z(k))return L(this.j(L(k)));if(0>this.l(I)&&0>k.l(I))return g(this.m()*k.m());for(var R=this.g.length+k.g.length,b=[],x=0;x<2*R;x++)b[x]=0;for(x=0;x<this.g.length;x++)for(var P=0;P<k.g.length;P++){var U=this.i(x)>>>16,O=this.i(x)&65535,kt=k.i(P)>>>16,ft=k.i(P)&65535;b[2*x+2*P]+=O*ft,W(b,2*x+2*P),b[2*x+2*P+1]+=U*ft,W(b,2*x+2*P+1),b[2*x+2*P+1]+=O*kt,W(b,2*x+2*P+1),b[2*x+2*P+2]+=U*kt,W(b,2*x+2*P+2)}for(x=0;x<R;x++)b[x]=b[2*x+1]<<16|b[2*x];for(x=R;x<2*R;x++)b[x]=0;return new c(b,0)};function W(k,R){for(;(k[R]&65535)!=k[R];)k[R+1]+=k[R]>>>16,k[R]&=65535,R++}function te(k,R){this.g=k,this.h=R}function le(k,R){if(C(R))throw Error("division by zero");if(C(k))return new te(T,T);if(z(k))return R=le(L(k),R),new te(L(R.g),L(R.h));if(z(R))return R=le(k,L(R)),new te(L(R.g),R.h);if(30<k.g.length){if(z(k)||z(R))throw Error("slowDivide_ only works with positive integers.");for(var b=S,x=R;0>=x.l(k);)b=ce(b),x=ce(x);var P=ge(b,1),U=ge(x,1);for(x=ge(x,2),b=ge(b,2);!C(x);){var O=U.add(x);0>=O.l(k)&&(P=P.add(b),U=O),x=ge(x,1),b=ge(b,1)}return R=Y(k,P.j(R)),new te(P,R)}for(P=T;0<=k.l(R);){for(b=Math.max(1,Math.floor(k.m()/R.m())),x=Math.ceil(Math.log(b)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),U=g(b),O=U.j(R);z(O)||0<O.l(k);)b-=x,U=g(b),O=U.j(R);C(U)&&(U=S),P=P.add(U),k=Y(k,O)}return new te(P,k)}n.A=function(k){return le(this,k).h},n.and=function(k){for(var R=Math.max(this.g.length,k.g.length),b=[],x=0;x<R;x++)b[x]=this.i(x)&k.i(x);return new c(b,this.h&k.h)},n.or=function(k){for(var R=Math.max(this.g.length,k.g.length),b=[],x=0;x<R;x++)b[x]=this.i(x)|k.i(x);return new c(b,this.h|k.h)},n.xor=function(k){for(var R=Math.max(this.g.length,k.g.length),b=[],x=0;x<R;x++)b[x]=this.i(x)^k.i(x);return new c(b,this.h^k.h)};function ce(k){for(var R=k.g.length+1,b=[],x=0;x<R;x++)b[x]=k.i(x)<<1|k.i(x-1)>>>31;return new c(b,k.h)}function ge(k,R){var b=R>>5;R%=32;for(var x=k.g.length-b,P=[],U=0;U<x;U++)P[U]=0<R?k.i(U+b)>>>R|k.i(U+b+1)<<32-R:k.i(U+b);return new c(P,k.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,XR=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,Ar=c}).apply(typeof AS<"u"?AS:typeof self<"u"?self:typeof window<"u"?window:{});var ff=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ZR,ju,JR,bf,Fg,eb,tb,nb;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof ff=="object"&&ff];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var v=s;h=h.split(".");for(var w=0;w<h.length-1;w++){var B=h[w];if(!(B in v))break e;v=v[B]}h=h[h.length-1],w=v[h],_=_(w),_!=w&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,w=!1,B={next:function(){if(!w&&v<h.length){var G=v++;return{value:_(G,h[G]),done:!1}}return w=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function T(h,_,v){if(!h)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,w),h.apply(_,B)}}return function(){return h.apply(_,arguments)}}function S(h,_,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,S.apply(null,arguments)}function I(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var w=v.slice();return w.push.apply(w,arguments),h.apply(this,w)}}function C(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(w,B,G){for(var re=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)re[Ue-2]=arguments[Ue];return _.prototype[B].apply(w,re)}}function z(h){const _=h.length;if(0<_){const v=Array(_);for(let w=0;w<_;w++)v[w]=h[w];return v}return[]}function L(h,_){for(let v=1;v<arguments.length;v++){const w=arguments[v];if(p(w)){const B=h.length||0,G=w.length||0;h.length=B+G;for(let re=0;re<G;re++)h[B+re]=w[re]}else h.push(w)}}class Y{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function W(h){return/^[\s\xa0]*$/.test(h)}function te(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function le(h){return le[" "](h),h}le[" "]=function(){};var ce=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function ge(h,_,v){for(const w in h)_.call(v,h[w],w,h)}function k(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function R(h){const _={};for(const v in h)_[v]=h[v];return _}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(h,_){let v,w;for(let B=1;B<arguments.length;B++){w=arguments[B];for(v in w)h[v]=w[v];for(let G=0;G<b.length;G++)v=b[G],Object.prototype.hasOwnProperty.call(w,v)&&(h[v]=w[v])}}function P(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function U(h){d.setTimeout(()=>{throw h},0)}function O(){var h=Ve;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class kt{constructor(){this.h=this.g=null}add(_,v){const w=ft.get();w.set(_,v),this.h?this.h.next=w:this.g=w,this.h=w}}var ft=new Y(()=>new $,h=>h.reset());class ${constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,de=!1,Ve=new kt,D=()=>{const h=d.Promise.resolve(void 0);ae=()=>{h.then(Q)}};var Q=()=>{for(var h;h=O();){try{h.h.call(h.g)}catch(v){U(v)}var _=ft;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}de=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var pe=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};d.addEventListener("test",v,_),d.removeEventListener("test",v,_)}catch{}return h}();function Oe(h,_){if(ie.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,w=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(ce){e:{try{le(_.nodeName);var B=!0;break e}catch{}B=!1}B||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:we[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Oe.aa.h.call(this)}}C(Oe,ie);var we={2:"touch",3:"pen",4:"mouse"};Oe.prototype.h=function(){Oe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Ft="closure_listenable_"+(1e6*Math.random()|0),rt=0;function _i(h,_,v,w,B){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!w,this.ha=B,this.key=++rt,this.da=this.fa=!1}function Bs(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Yi(h){this.src=h,this.g={},this.h=0}Yi.prototype.add=function(h,_,v,w,B){var G=h.toString();h=this.g[G],h||(h=this.g[G]=[],this.h++);var re=Fr(h,_,w,B);return-1<re?(_=h[re],v||(_.fa=!1)):(_=new _i(_,this.src,G,!!w,B),_.fa=v,h.push(_)),_};function zr(h,_){var v=_.type;if(v in h.g){var w=h.g[v],B=Array.prototype.indexOf.call(w,_,void 0),G;(G=0<=B)&&Array.prototype.splice.call(w,B,1),G&&(Bs(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function Fr(h,_,v,w){for(var B=0;B<h.length;++B){var G=h[B];if(!G.da&&G.listener==_&&G.capture==!!v&&G.ha==w)return B}return-1}var Hr="closure_lm_"+(1e6*Math.random()|0),Al={};function Vc(h,_,v,w,B){if(Array.isArray(_)){for(var G=0;G<_.length;G++)Vc(h,_[G],v,w,B);return null}return v=Uc(v),h&&h[Ft]?h.K(_,v,g(w)?!!w.capture:!1,B):Hn(h,_,v,!1,w,B)}function Hn(h,_,v,w,B,G){if(!_)throw Error("Invalid event type");var re=g(B)?!!B.capture:!!B,Ue=$a(h);if(Ue||(h[Hr]=Ue=new Yi(h)),v=Ue.add(_,v,w,re,G),v.proxy)return v;if(w=Fd(),v.proxy=w,w.src=h,w.listener=v,h.addEventListener)pe||(B=re),B===void 0&&(B=!1),h.addEventListener(_.toString(),w,B);else if(h.attachEvent)h.attachEvent(qr(_.toString()),w);else if(h.addListener&&h.removeListener)h.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Fd(){function h(v){return _.call(h.src,h.listener,v)}const _=Hd;return h}function wl(h,_,v,w,B){if(Array.isArray(_))for(var G=0;G<_.length;G++)wl(h,_[G],v,w,B);else w=g(w)?!!w.capture:!!w,v=Uc(v),h&&h[Ft]?(h=h.i,_=String(_).toString(),_ in h.g&&(G=h.g[_],v=Fr(G,v,w,B),-1<v&&(Bs(G[v]),Array.prototype.splice.call(G,v,1),G.length==0&&(delete h.g[_],h.h--)))):h&&(h=$a(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Fr(_,v,w,B)),(v=-1<h?_[h]:null)&&Ya(v))}function Ya(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Ft])zr(_.i,h);else{var v=h.type,w=h.proxy;_.removeEventListener?_.removeEventListener(v,w,h.capture):_.detachEvent?_.detachEvent(qr(v),w):_.addListener&&_.removeListener&&_.removeListener(w),(v=$a(_))?(zr(v,h),v.h==0&&(v.src=null,_[Hr]=null)):Bs(h)}}}function qr(h){return h in Al?Al[h]:Al[h]="on"+h}function Hd(h,_){if(h.da)h=!0;else{_=new Oe(_,this);var v=h.listener,w=h.ha||h.src;h.fa&&Ya(h),h=v.call(w,_)}return h}function $a(h){return h=h[Hr],h instanceof Yi?h:null}var Rl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uc(h){return typeof h=="function"?h:(h[Rl]||(h[Rl]=function(_){return h.handleEvent(_)}),h[Rl])}function vt(){oe.call(this),this.i=new Yi(this),this.M=this,this.F=null}C(vt,oe),vt.prototype[Ft]=!0,vt.prototype.removeEventListener=function(h,_,v,w){wl(this,h,_,v,w)};function We(h,_){var v,w=h.F;if(w)for(v=[];w;w=w.F)v.push(w);if(h=h.M,w=_.type||_,typeof _=="string")_=new ie(_,h);else if(_ instanceof ie)_.target=_.target||h;else{var B=_;_=new ie(w,h),x(_,B)}if(B=!0,v)for(var G=v.length-1;0<=G;G--){var re=_.g=v[G];B=Nn(re,w,!0,_)&&B}if(re=_.g=h,B=Nn(re,w,!0,_)&&B,B=Nn(re,w,!1,_)&&B,v)for(G=0;G<v.length;G++)re=_.g=v[G],B=Nn(re,w,!1,_)&&B}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],w=0;w<v.length;w++)Bs(v[w]);delete h.g[_],h.h--}}this.F=null},vt.prototype.K=function(h,_,v,w){return this.i.add(String(h),_,!1,v,w)},vt.prototype.L=function(h,_,v,w){return this.i.add(String(h),_,!0,v,w)};function Nn(h,_,v,w){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var B=!0,G=0;G<_.length;++G){var re=_[G];if(re&&!re.da&&re.capture==v){var Ue=re.listener,Mt=re.ha||re.src;re.fa&&zr(h.i,re),B=Ue.call(Mt,w)!==!1&&B}}return B&&!w.defaultPrevented}function an(h,_,v){if(typeof h=="function")v&&(h=S(h,v));else if(h&&typeof h.handleEvent=="function")h=S(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function Bc(h){h.g=an(()=>{h.g=null,h.i&&(h.i=!1,Bc(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class qd extends oe{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Bc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jr(h){oe.call(this),this.h=h,this.g={}}C(jr,oe);var Gr=[];function Kr(h){ge(h.g,function(_,v){this.g.hasOwnProperty(v)&&Ya(_)},h),h.g={}}jr.prototype.N=function(){jr.aa.N.call(this),Kr(this)},jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ri=d.JSON.stringify,Qa=d.JSON.parse,Yr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function bl(){}bl.prototype.h=null;function Cl(h){return h.h||(h.h=h.i())}function Il(){}var $i={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qi(){ie.call(this,"d")}C(Qi,ie);function Nl(){ie.call(this,"c")}C(Nl,ie);var yi={},Ol=null;function zs(){return Ol=Ol||new vt}yi.La="serverreachability";function Wa(h){ie.call(this,yi.La,h)}C(Wa,ie);function Fs(h){const _=zs();We(_,new Wa(_))}yi.STAT_EVENT="statevent";function zc(h,_){ie.call(this,yi.STAT_EVENT,h),this.stat=_}C(zc,ie);function dt(h){const _=zs();We(_,new zc(_,h))}yi.Ma="timingevent";function xt(h,_){ie.call(this,yi.Ma,h),this.size=_}C(xt,ie);function Ct(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function qn(){this.g=!0}qn.prototype.xa=function(){this.g=!1};function Dl(h,_,v,w,B,G){h.info(function(){if(h.g)if(G)for(var re="",Ue=G.split("&"),Mt=0;Mt<Ue.length;Mt++){var Be=Ue[Mt].split("=");if(1<Be.length){var qt=Be[0];Be=Be[1];var Pt=qt.split("_");re=2<=Pt.length&&Pt[1]=="type"?re+(qt+"="+Be+"&"):re+(qt+"=redacted&")}}else re=null;else re=G;return"XMLHTTP REQ ("+w+") [attempt "+B+"]: "+_+`
`+v+`
`+re})}function jd(h,_,v,w,B,G,re){h.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+B+"]: "+_+`
`+v+`
`+G+" "+re})}function Hs(h,_,v,w){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+$r(h,v)+(w?" "+w:"")})}function Fc(h,_){h.info(function(){return"TIMEOUT: "+_})}qn.prototype.info=function(){};function $r(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var w=v[h];if(!(2>w.length)){var B=w[1];if(Array.isArray(B)&&!(1>B.length)){var G=B[0];if(G!="noop"&&G!="stop"&&G!="close")for(var re=1;re<B.length;re++)B[re]=""}}}}return ri(v)}catch{return _}}var qs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},vi;function Ei(){}C(Ei,bl),Ei.prototype.g=function(){return new XMLHttpRequest},Ei.prototype.i=function(){return{}},vi=new Ei;function gn(h,_,v,w){this.j=h,this.i=_,this.l=v,this.R=w||1,this.U=new jr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new At}function At(){this.i=null,this.g="",this.h=!1}var kl={},Xa={};function ai(h,_,v){h.L=1,h.v=Jr(On(_)),h.m=v,h.P=!0,Xi(h,null)}function Xi(h,_){h.F=Date.now(),Qr(h),h.A=On(h.v);var v=h.A,w=h.R;Array.isArray(w)||(w=[String(w)]),Ul(v.i,"t",w),h.C=0,v=h.j.J,h.h=new At,h.g=ih(h.j,v?_:null,!h.m),0<h.O&&(h.M=new qd(S(h.Y,h,h.g),h.O)),_=h.U,v=h.g,w=h.ca;var B="readystatechange";Array.isArray(B)||(B&&(Gr[0]=B.toString()),B=Gr);for(var G=0;G<B.length;G++){var re=Vc(v,B[G],w||_.handleEvent,!1,_.h||_);if(!re)break;_.g[re.key]=re}_=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Fs(),Dl(h.i,h.u,h.A,h.l,h.R,h.m)}gn.prototype.ca=function(h){h=h.target;const _=this.M;_&&Yn(h)==3?_.j():this.Y(h)},gn.prototype.Y=function(h){try{if(h==this.g)e:{const Pt=Yn(this.g);var _=this.g.Ba();const rs=this.g.Z();if(!(3>Pt)&&(Pt!=3||this.g&&(this.h.h||this.g.oa()||Qc(this.g)))){this.J||Pt!=4||_==7||(_==8||0>=rs?Fs(3):Fs(2)),js(this);var v=this.g.Z();this.X=v;t:if(Hc(this)){var w=Qc(this.g);h="";var B=w.length,G=Yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wt(this),Ti(this);var re="";break t}this.h.i=new d.TextDecoder}for(_=0;_<B;_++)this.h.h=!0,h+=this.h.i.decode(w[_],{stream:!(G&&_==B-1)});w.length=0,this.h.g+=h,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=v==200,jd(this.i,this.u,this.A,this.l,this.R,Pt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,Mt=this.g;if((Ue=Mt.g?Mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(Ue)){var Be=Ue;break t}}Be=null}if(v=Be)Hs(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wr(this,v);else{this.o=!1,this.s=3,dt(12),Wt(this),Ti(this);break e}}if(this.P){v=!0;let Xt;for(;!this.J&&this.C<re.length;)if(Xt=qc(this,re),Xt==Xa){Pt==4&&(this.s=4,dt(14),v=!1),Hs(this.i,this.l,null,"[Incomplete Response]");break}else if(Xt==kl){this.s=4,dt(15),Hs(this.i,this.l,re,"[Invalid Chunk]"),v=!1;break}else Hs(this.i,this.l,Xt,null),Wr(this,Xt);if(Hc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pt!=4||re.length!=0||this.h.h||(this.s=1,dt(16),v=!1),this.o=this.o&&v,!v)Hs(this.i,this.l,re,"[Invalid Chunked Response]"),Wt(this),Ti(this);else if(0<re.length&&!this.W){this.W=!0;var qt=this.j;qt.g==this&&qt.ba&&!qt.M&&(qt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),oa(qt),qt.M=!0,dt(11))}}else Hs(this.i,this.l,re,null),Wr(this,re);Pt==4&&Wt(this),this.o&&!this.J&&(Pt==4?eh(this.j,this):(this.o=!1,Qr(this)))}else Qd(this.g),v==400&&0<re.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),Wt(this),Ti(this)}}}catch{}finally{}};function Hc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function qc(h,_){var v=h.C,w=_.indexOf(`
`,v);return w==-1?Xa:(v=Number(_.substring(v,w)),isNaN(v)?kl:(w+=1,w+v>_.length?Xa:(_=_.slice(w,w+v),h.C=w+v,_)))}gn.prototype.cancel=function(){this.J=!0,Wt(this)};function Qr(h){h.S=Date.now()+h.I,jc(h,h.I)}function jc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Ct(S(h.ba,h),_)}function js(h){h.B&&(d.clearTimeout(h.B),h.B=null)}gn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Fc(this.i,this.A),this.L!=2&&(Fs(),dt(17)),Wt(this),this.s=2,Ti(this)):jc(this,this.S-h)};function Ti(h){h.j.G==0||h.J||eh(h.j,h)}function Wt(h){js(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Kr(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Wr(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||xl(v.h,h))){if(!h.K&&xl(v.h,h)&&v.G==3){try{var w=v.Da.g.parse(_)}catch{w=null}if(Array.isArray(w)&&w.length==3){var B=w;if(B[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)uo(v),oo(v);else break e;ql(v),dt(18)}}else v.za=B[1],0<v.za-v.T&&37500>B[2]&&v.F&&v.v==0&&!v.C&&(v.C=Ct(S(v.Za,v),6e3));if(1>=Ja(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else ss(v,11)}else if((h.K||v.g==h)&&uo(v),!W(_))for(B=v.Da.g.parse(_),_=0;_<B.length;_++){let Be=B[_];if(v.T=Be[0],Be=Be[1],v.G==2)if(Be[0]=="c"){v.K=Be[1],v.ia=Be[2];const qt=Be[3];qt!=null&&(v.la=qt,v.j.info("VER="+v.la));const Pt=Be[4];Pt!=null&&(v.Aa=Pt,v.j.info("SVER="+v.Aa));const rs=Be[5];rs!=null&&typeof rs=="number"&&0<rs&&(w=1.5*rs,v.L=w,v.j.info("backChannelRequestTimeoutMs_="+w)),w=v;const Xt=h.g;if(Xt){const Ii=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ii){var G=w.h;G.g||Ii.indexOf("spdy")==-1&&Ii.indexOf("quic")==-1&&Ii.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(eo(G,G.h),G.h=null))}if(w.D){const Gl=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;Gl&&(w.ya=Gl,Je(w.I,w.D,Gl))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),w=v;var re=h;if(w.qa=nh(w,w.J?w.ia:null,w.W),re.K){_n(w.h,re);var Ue=re,Mt=w.L;Mt&&(Ue.I=Mt),Ue.B&&(js(Ue),Qr(Ue)),w.g=re}else Zc(w);0<v.i.length&&lo(v)}else Be[0]!="stop"&&Be[0]!="close"||ss(v,7);else v.G==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?ss(v,7):Fl(v):Be[0]!="noop"&&v.l&&v.l.ta(Be),v.v=0)}}Fs(4)}catch{}}var Gc=class{constructor(h,_){this.g=h,this.map=_}};function Zi(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Za(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Ja(h){return h.h?1:h.g?h.g.size:0}function xl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function eo(h,_){h.g?h.g.add(_):h.h=_}function _n(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Zi.prototype.cancel=function(){if(this.i=Ml(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Ml(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return z(h.i)}function Gd(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],v=h.length,w=0;w<v;w++)_.push(h[w]);return _}_=[],v=0;for(w in h)_[v++]=h[w];return _}function to(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const w in h)_[v++]=w;return _}}}function Pl(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=to(h),w=Gd(h),B=w.length,G=0;G<B;G++)_.call(void 0,w[G],v&&v[G],h)}var Xr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kd(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var w=h[v].indexOf("="),B=null;if(0<=w){var G=h[v].substring(0,w);B=h[v].substring(w+1)}else G=h[v];_(G,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function It(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof It){this.h=h.h,Zr(this,h.j),this.o=h.o,this.g=h.g,Gs(this,h.s),this.l=h.l;var _=h.i,v=new es;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),Ji(this,v),this.m=h.m}else h&&(_=String(h).match(Xr))?(this.h=!1,Zr(this,_[1]||"",!0),this.o=jn(_[2]||""),this.g=jn(_[3]||"",!0),Gs(this,_[4]),this.l=jn(_[5]||"",!0),Ji(this,_[6]||"",!0),this.m=jn(_[7]||"")):(this.h=!1,this.i=new es(null,this.h))}It.prototype.toString=function(){var h=[],_=this.j;_&&h.push(ea(_,Ll,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(ea(_,Ll,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(ea(v,v.charAt(0)=="/"?Yd:Vl,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",ea(v,no)),h.join("")};function On(h){return new It(h)}function Zr(h,_,v){h.j=v?jn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Gs(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Ji(h,_,v){_ instanceof es?(h.i=_,Yc(h.i,h.h)):(v||(_=ea(_,$d)),h.i=new es(_,h.h))}function Je(h,_,v){h.i.set(_,v)}function Jr(h){return Je(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function jn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function ea(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,Kc),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Kc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Ll=/[#\/\?@]/g,Vl=/[#\?:]/g,Yd=/[#\?]/g,$d=/[#\?@]/g,no=/#/g;function es(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Gn(h){h.g||(h.g=new Map,h.h=0,h.i&&Kd(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}n=es.prototype,n.add=function(h,_){Gn(this),this.i=null,h=Si(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function ts(h,_){Gn(h),_=Si(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function ns(h,_){return Gn(h),_=Si(h,_),h.g.has(_)}n.forEach=function(h,_){Gn(this),this.g.forEach(function(v,w){v.forEach(function(B){h.call(_,B,w,this)},this)},this)},n.na=function(){Gn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let w=0;w<_.length;w++){const B=h[w];for(let G=0;G<B.length;G++)v.push(_[w])}return v},n.V=function(h){Gn(this);let _=[];if(typeof h=="string")ns(this,h)&&(_=_.concat(this.g.get(Si(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},n.set=function(h,_){return Gn(this),this.i=null,h=Si(this,h),ns(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Ul(h,_,v){ts(h,_),0<v.length&&(h.i=null,h.g.set(Si(h,_),z(v)),h.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var w=_[v];const G=encodeURIComponent(String(w)),re=this.V(w);for(w=0;w<re.length;w++){var B=G;re[w]!==""&&(B+="="+encodeURIComponent(String(re[w]))),h.push(B)}}return this.i=h.join("&")};function Si(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Yc(h,_){_&&!h.j&&(Gn(h),h.i=null,h.g.forEach(function(v,w){var B=w.toLowerCase();w!=B&&(ts(this,w),Ul(this,B,v))},h)),h.j=_}function ta(h,_){const v=new qn;if(d.Image){const w=new Image;w.onload=I(Kn,v,"TestLoadImage: loaded",!0,_,w),w.onerror=I(Kn,v,"TestLoadImage: error",!1,_,w),w.onabort=I(Kn,v,"TestLoadImage: abort",!1,_,w),w.ontimeout=I(Kn,v,"TestLoadImage: timeout",!1,_,w),d.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=h}else _(!1)}function oi(h,_){const v=new qn,w=new AbortController,B=setTimeout(()=>{w.abort(),Kn(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:w.signal}).then(G=>{clearTimeout(B),G.ok?Kn(v,"TestPingServer: ok",!0,_):Kn(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(B),Kn(v,"TestPingServer: error",!1,_)})}function Kn(h,_,v,w,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),w(v)}catch{}}function na(){this.g=new Yr}function Ai(h,_,v){const w=v||"";try{Pl(h,function(B,G){let re=B;g(B)&&(re=ri(B)),_.push(w+G+"="+encodeURIComponent(re))})}catch(B){throw _.push(w+"type="+encodeURIComponent("_badmap")),B}}function Ks(h){this.l=h.Ub||null,this.j=h.eb||!1}C(Ks,bl),Ks.prototype.g=function(){return new is(this.l,this.j)},Ks.prototype.i=function(h){return function(){return h}}({});function is(h,_){vt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(is,vt),n=is.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Ri(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wi(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Ri(this)),this.g&&(this.readyState=3,Ri(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?wi(this):Ri(this),this.readyState==3&&Bl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,wi(this))},n.Qa=function(h){this.g&&(this.response=h,wi(this))},n.ga=function(){this.g&&wi(this)};function wi(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Ri(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Ri(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(is.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function zl(h){let _="";return ge(h,function(v,w){_+=w,_+=":",_+=v,_+=`\r
`}),_}function Ht(h,_,v){e:{for(w in v){var w=!1;break e}w=!0}w||(v=zl(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):Je(h,_,v))}function Ye(h){vt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ye,vt);var io=/^https?$/i,ia=["POST","PUT"];n=Ye.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,v,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():vi.g(),this.v=this.o?Cl(this.o):Cl(vi),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(G){$c(this,G);return}if(h=v||"",v=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var B in w)v.set(B,w[B]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const G of w.keys())v.set(G,w.get(G));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(v.keys()).find(G=>G.toLowerCase()=="content-type"),B=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ia,_,void 0))||w||B||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,re]of v)this.g.setRequestHeader(G,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{sa(this),this.u=!0,this.g.send(h),this.u=!1}catch(G){$c(this,G)}};function $c(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,so(h),bi(h)}function so(h){h.A||(h.A=!0,We(h,"complete"),We(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,We(this,"complete"),We(this,"abort"),bi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bi(this,!0)),Ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ro(this):this.bb())},n.bb=function(){ro(this)};function ro(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Yn(h)!=4||h.Z()!=2)){if(h.u&&Yn(h)==4)an(h.Ea,0,h);else if(We(h,"readystatechange"),Yn(h)==4){h.h=!1;try{const re=h.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var w;if(w=re===0){var B=String(h.D).match(Xr)[1]||null;!B&&d.self&&d.self.location&&(B=d.self.location.protocol.slice(0,-1)),w=!io.test(B?B.toLowerCase():"")}v=w}if(v)We(h,"complete"),We(h,"success");else{h.m=6;try{var G=2<Yn(h)?h.g.statusText:""}catch{G=""}h.l=G+" ["+h.Z()+"]",so(h)}}finally{bi(h)}}}}function bi(h,_){if(h.g){sa(h);const v=h.g,w=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||We(h,"ready");try{v.onreadystatechange=w}catch{}}}function sa(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function Yn(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<Yn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Qa(_)}};function Qc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Qd(h){const _={};h=(h.g&&2<=Yn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<h.length;w++){if(W(h[w]))continue;var v=P(h[w]);const B=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const G=_[B]||[];_[B]=G,G.push(v)}k(_,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ra(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function ao(h){this.Aa=0,this.i=[],this.j=new qn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ra("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ra("baseRetryDelayMs",5e3,h),this.cb=ra("retryDelaySeedMs",1e4,h),this.Wa=ra("forwardChannelMaxRetries",2,h),this.wa=ra("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Zi(h&&h.concurrentRequestLimit),this.Da=new na,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ao.prototype,n.la=8,n.G=1,n.connect=function(h,_,v,w){dt(0),this.W=h,this.H=_||{},v&&w!==void 0&&(this.H.OSID=v,this.H.OAID=w),this.F=this.X,this.I=nh(this,null,this.W),lo(this)};function Fl(h){if(Wc(h),h.G==3){var _=h.U++,v=On(h.I);if(Je(v,"SID",h.K),Je(v,"RID",_),Je(v,"TYPE","terminate"),aa(h,v),_=new gn(h,h.j,_),_.L=2,_.v=Jr(On(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=_.v,v=!0),v||(_.g=ih(_.j,null),_.g.ea(_.v)),_.F=Date.now(),Qr(_)}th(h)}function oo(h){h.g&&(oa(h),h.g.cancel(),h.g=null)}function Wc(h){oo(h),h.u&&(d.clearTimeout(h.u),h.u=null),uo(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function lo(h){if(!Za(h.h)&&!h.s){h.s=!0;var _=h.Ga;ae||D(),de||(ae(),de=!0),Ve.add(_,h),h.B=0}}function Wd(h,_){return Ja(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Ct(S(h.Ga,h,_),jl(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const B=new gn(this,this.j,h);let G=this.o;if(this.S&&(G?(G=R(G),x(G,this.S)):G=this.S),this.m!==null||this.O||(B.H=G,G=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var w=this.i[v];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(_+=w,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=Xc(this,B,_),v=On(this.I),Je(v,"RID",h),Je(v,"CVER",22),this.D&&Je(v,"X-HTTP-Session-Id",this.D),aa(this,v),G&&(this.O?_="headers="+encodeURIComponent(String(zl(G)))+"&"+_:this.m&&Ht(v,this.m,G)),eo(this.h,B),this.Ua&&Je(v,"TYPE","init"),this.P?(Je(v,"$req",_),Je(v,"SID","null"),B.T=!0,ai(B,v,null)):ai(B,v,_),this.G=2}}else this.G==3&&(h?Hl(this,h):this.i.length==0||Za(this.h)||Hl(this))};function Hl(h,_){var v;_?v=_.l:v=h.U++;const w=On(h.I);Je(w,"SID",h.K),Je(w,"RID",v),Je(w,"AID",h.T),aa(h,w),h.m&&h.o&&Ht(w,h.m,h.o),v=new gn(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Xc(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),eo(h.h,v),ai(v,w,_)}function aa(h,_){h.H&&ge(h.H,function(v,w){Je(_,w,v)}),h.l&&Pl({},function(v,w){Je(_,w,v)})}function Xc(h,_,v){v=Math.min(h.i.length,v);var w=h.l?S(h.l.Na,h.l,h):null;e:{var B=h.i;let G=-1;for(;;){const re=["count="+v];G==-1?0<v?(G=B[0].g,re.push("ofs="+G)):G=0:re.push("ofs="+G);let Ue=!0;for(let Mt=0;Mt<v;Mt++){let Be=B[Mt].g;const qt=B[Mt].map;if(Be-=G,0>Be)G=Math.max(0,B[Mt].g-100),Ue=!1;else try{Ai(qt,re,"req"+Be+"_")}catch{w&&w(qt)}}if(Ue){w=re.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,w}function Zc(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ae||D(),de||(ae(),de=!0),Ve.add(_,h),h.v=0}}function ql(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Ct(S(h.Fa,h),jl(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,Jc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Ct(S(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),oo(this),Jc(this))};function oa(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Jc(h){h.g=new gn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=On(h.qa);Je(_,"RID","rpc"),Je(_,"SID",h.K),Je(_,"AID",h.T),Je(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&Je(_,"TO",h.ja),Je(_,"TYPE","xmlhttp"),aa(h,_),h.m&&h.o&&Ht(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=Jr(On(_)),v.m=null,v.P=!0,Xi(v,h)}n.Za=function(){this.C!=null&&(this.C=null,oo(this),ql(this),dt(19))};function uo(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function eh(h,_){var v=null;if(h.g==_){uo(h),oa(h),h.g=null;var w=2}else if(xl(h.h,_))v=_.D,_n(h.h,_),w=1;else return;if(h.G!=0){if(_.o)if(w==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var B=h.B;w=zs(),We(w,new xt(w,v)),lo(h)}else Zc(h);else if(B=_.s,B==3||B==0&&0<_.X||!(w==1&&Wd(h,_)||w==2&&ql(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),B){case 1:ss(h,5);break;case 4:ss(h,10);break;case 3:ss(h,6);break;default:ss(h,2)}}}function jl(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function ss(h,_){if(h.j.info("Error code "+_),_==2){var v=S(h.fb,h),w=h.Xa;const B=!w;w=new It(w||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Zr(w,"https"),Jr(w),B?ta(w.toString(),v):oi(w.toString(),v)}else dt(2);h.G=0,h.l&&h.l.sa(_),th(h),Wc(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function th(h){if(h.G=0,h.ka=[],h.l){const _=Ml(h.h);(_.length!=0||h.i.length!=0)&&(L(h.ka,_),L(h.ka,h.i),h.h.i.length=0,z(h.i),h.i.length=0),h.l.ra()}}function nh(h,_,v){var w=v instanceof It?On(v):new It(v);if(w.g!="")_&&(w.g=_+"."+w.g),Gs(w,w.s);else{var B=d.location;w=B.protocol,_=_?_+"."+B.hostname:B.hostname,B=+B.port;var G=new It(null);w&&Zr(G,w),_&&(G.g=_),B&&Gs(G,B),v&&(G.l=v),w=G}return v=h.D,_=h.ya,v&&_&&Je(w,v,_),Je(w,"VER",h.la),aa(h,w),w}function ih(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Ye(new Ks({eb:v})):new Ye(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function sh(){}n=sh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function co(){}co.prototype.g=function(h,_){return new yn(h,_)};function yn(h,_){vt.call(this),this.g=new ao(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!W(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!W(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Ci(this)}C(yn,vt),yn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yn.prototype.close=function(){Fl(this.g)},yn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=ri(h),h=v);_.i.push(new Gc(_.Ya++,h)),_.G==3&&lo(_)},yn.prototype.N=function(){this.g.l=null,delete this.j,Fl(this.g),delete this.g,yn.aa.N.call(this)};function rh(h){Qi.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}C(rh,Qi);function ah(){Nl.call(this),this.status=1}C(ah,Nl);function Ci(h){this.g=h}C(Ci,sh),Ci.prototype.ua=function(){We(this.g,"a")},Ci.prototype.ta=function(h){We(this.g,new rh(h))},Ci.prototype.sa=function(h){We(this.g,new ah)},Ci.prototype.ra=function(){We(this.g,"b")},co.prototype.createWebChannel=co.prototype.g,yn.prototype.send=yn.prototype.o,yn.prototype.open=yn.prototype.m,yn.prototype.close=yn.prototype.close,nb=function(){return new co},tb=function(){return zs()},eb=yi,Fg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qs.NO_ERROR=0,qs.TIMEOUT=8,qs.HTTP_ERROR=6,bf=qs,Wi.COMPLETE="complete",JR=Wi,Il.EventType=$i,$i.OPEN="a",$i.CLOSE="b",$i.ERROR="c",$i.MESSAGE="d",vt.prototype.listen=vt.prototype.K,ju=Il,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,ZR=Ye}).apply(typeof ff<"u"?ff:typeof self<"u"?self:typeof window<"u"?window:{});const wS="@firebase/firestore",RS="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}cn.UNAUTHENTICATED=new cn(null),cn.GOOGLE_CREDENTIALS=new cn("google-credentials-uid"),cn.FIRST_PARTY=new cn("first-party-uid"),cn.MOCK_USER=new cn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=new dd("@firebase/firestore");function Ho(){return Pa.logLevel}function he(n,...e){if(Pa.logLevel<=Me.DEBUG){const t=e.map(Z_);Pa.debug(`Firestore (${yl}): ${n}`,...t)}}function xs(n,...e){if(Pa.logLevel<=Me.ERROR){const t=e.map(Z_);Pa.error(`Firestore (${yl}): ${n}`,...t)}}function il(n,...e){if(Pa.logLevel<=Me.WARN){const t=e.map(Z_);Pa.warn(`Firestore (${yl}): ${n}`,...t)}}function Z_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,ib(n,s,t)}function ib(n,e,t){let s=`FIRESTORE (${yl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw xs(s),new Error(s)}function Qe(n,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,n||ib(e,a,s)}function be(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _e extends Ki{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(cn.UNAUTHENTICATED))}shutdown(){}}class hL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class fL{constructor(e){this.t=e,this.currentUser=cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Qe(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new wr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new wr,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new wr)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Qe(typeof s.accessToken=="string",31837,{l:s}),new sb(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string",2055,{h:e}),new cn(e)}}class dL{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=cn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pL{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new dL(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mL{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Tn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Qe(this.o===void 0,3512);const s=l=>{l.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,he("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const a=l=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new bS(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Qe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new bS(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gL(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=gL(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Ne(n,e){return n<e?-1:n>e?1:0}function Hg(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=n.codePointAt(t),a=e.codePointAt(t);if(s!==a){if(s<128&&a<128)return Ne(s,a);{const l=rb(),c=_L(l.encode(CS(n,t)),l.encode(CS(e,t)));return c!==0?c:Ne(s,a)}}t+=s>65535?2:1}return Ne(n.length,e.length)}function CS(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function _L(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ne(n[t],e[t]);return Ne(n.length,e.length)}function sl(n,e,t){return n.length===e.length&&n.every((s,a)=>t(s,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=-62135596800,NS=1e6;class Bt{static now(){return Bt.fromMillis(Date.now())}static fromDate(e){return Bt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*NS);return new Bt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new _e(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new _e(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<IS)throw new _e(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _e(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/NS}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-IS;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new Bt(0,0))}static max(){return new Re(new Bt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="__name__";class Mi{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ae(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ae(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Mi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Mi?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Mi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Ne(e.length,t.length)}static compareSegments(e,t){const s=Mi.isNumericId(e),a=Mi.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Mi.extractNumericId(e).compare(Mi.extractNumericId(t)):Hg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ar.fromString(e.substring(4,e.length-2))}}class St extends Mi{construct(e,t,s){return new St(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new _e(ne.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(a=>a.length>0))}return new St(t)}static emptyPath(){return new St([])}}const yL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class sn extends Mi{construct(e,t,s){return new sn(e,t,s)}static isValidIdentifier(e){return yL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),sn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===OS}static keyField(){return new sn([OS])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new _e(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new _e(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new _e(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new _e(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new sn(t)}static emptyPath(){return new sn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(St.fromString(e))}static fromName(e){return new ve(St.fromString(e).popFirst(5))}static empty(){return new ve(St.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&St.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return St.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new St(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=-1;function vL(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=Re.fromTimestamp(s===1e9?new Bt(t+1,0):new Bt(t,s));return new Ir(a,ve.empty(),e)}function EL(n){return new Ir(n.readTime,n.key,fc)}class Ir{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ir(Re.min(),ve.empty(),fc)}static max(){return new Ir(Re.max(),ve.empty(),fc)}}function TL(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ve.comparator(n.documentKey,e.documentKey),t!==0?t:Ne(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vl(n){if(n.code!==ne.FAILED_PRECONDITION||n.message!==SL)throw n;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ee((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof ee?t:ee.resolve(t)}catch(t){return ee.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ee.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ee.reject(t)}static resolve(e){return new ee((t,s)=>{t(e)})}static reject(e){return new ee((t,s)=>{s(e)})}static waitFor(e){return new ee((t,s)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&t()},p=>s(p))}),c=!0,l===a&&t()})}static or(e){let t=ee.resolve(!1);for(const s of e)t=t.next(a=>a?ee.resolve(a):s());return t}static forEach(e,t){const s=[];return e.forEach((a,l)=>{s.push(t.call(this,a,l))}),this.waitFor(s)}static mapArray(e,t){return new ee((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next(y=>{c[g]=y,++d,d===l&&s(c)},y=>a(y))}})}static doWhile(e,t){return new ee((s,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):s()};l()})}}function wL(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function El(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>t.writeSequenceNumber(s))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Ad.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=-1;function wd(n){return n==null}function Wf(n){return n===0&&1/n==-1/0}function RL(n){return typeof n=="number"&&Number.isInteger(n)&&!Wf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="";function bL(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=DS(e)),e=CL(n.get(t),e);return DS(e)}function CL(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case ob:t+="";break;default:t+=l}}return t}function DS(n){return n+ob+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Vr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function lb(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){this.comparator=e,this.root=t||tn.EMPTY}insert(e,t){return new _t(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,tn.BLACK,null,null))}remove(e){return new _t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new df(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new df(this.root,e,this.comparator,!1)}getReverseIterator(){return new df(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new df(this.root,e,this.comparator,!0)}}class df{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tn{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??tn.RED,this.left=a??tn.EMPTY,this.right=l??tn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new tn(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return tn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return tn.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ae(27949);return e+(this.isRed()?0:1)}}tn.EMPTY=null,tn.RED=!0,tn.BLACK=!1;tn.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new tn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.comparator=e,this.data=new _t(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xS(this.data.getIterator())}getIteratorFrom(e){return new xS(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof zt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new zt(this.comparator);return t.data=e,t}}class xS{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.fields=e,e.sort(sn.comparator)}static empty(){return new Bn([])}unionWith(e){let t=new zt(sn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Bn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return sl(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new ub("Invalid base64 string: "+l):l}}(e);return new rn(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new rn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rn.EMPTY_BYTE_STRING=new rn("");const IL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nr(n){if(Qe(!!n,39018),typeof n=="string"){let e=0;const t=IL.exec(n);if(Qe(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:bt(n.seconds),nanos:bt(n.nanos)}}function bt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Or(n){return typeof n=="string"?rn.fromBase64String(n):rn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb="server_timestamp",hb="__type__",fb="__previous_value__",db="__local_write_time__";function ey(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[hb])===null||t===void 0?void 0:t.stringValue)===cb}function Rd(n){const e=n.mapValue.fields[fb];return ey(e)?Rd(e):e}function dc(n){const e=Nr(n.mapValue.fields[db].timestampValue);return new Bt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{constructor(e,t,s,a,l,c,d,p,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=y}}const Xf="(default)";class pc{constructor(e,t){this.projectId=e,this.database=t||Xf}static empty(){return new pc("","")}get isDefaultDatabase(){return this.database===Xf}isEqual(e){return e instanceof pc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb="__type__",OL="__max__",pf={mapValue:{}},mb="__vector__",Zf="value";function Dr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ey(n)?4:kL(n)?9007199254740991:DL(n)?10:11:Ae(28295,{value:n})}function qi(n,e){if(n===e)return!0;const t=Dr(n);if(t!==Dr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return dc(n).isEqual(dc(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Nr(a.timestampValue),d=Nr(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,l){return Or(a.bytesValue).isEqual(Or(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,l){return bt(a.geoPointValue.latitude)===bt(l.geoPointValue.latitude)&&bt(a.geoPointValue.longitude)===bt(l.geoPointValue.longitude)}(n,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return bt(a.integerValue)===bt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=bt(a.doubleValue),d=bt(l.doubleValue);return c===d?Wf(c)===Wf(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return sl(n.arrayValue.values||[],e.arrayValue.values||[],qi);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(kS(c)!==kS(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!qi(c[p],d[p])))return!1;return!0}(n,e);default:return Ae(52216,{left:n})}}function mc(n,e){return(n.values||[]).find(t=>qi(t,e))!==void 0}function rl(n,e){if(n===e)return 0;const t=Dr(n),s=Dr(e);if(t!==s)return Ne(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(n.booleanValue,e.booleanValue);case 2:return function(l,c){const d=bt(l.integerValue||l.doubleValue),p=bt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return MS(n.timestampValue,e.timestampValue);case 4:return MS(dc(n),dc(e));case 5:return Hg(n.stringValue,e.stringValue);case 6:return function(l,c){const d=Or(l),p=Or(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const y=Ne(d[g],p[g]);if(y!==0)return y}return Ne(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Ne(bt(l.latitude),bt(c.latitude));return d!==0?d:Ne(bt(l.longitude),bt(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return PS(n.arrayValue,e.arrayValue);case 10:return function(l,c){var d,p,g,y;const T=l.fields||{},S=c.fields||{},I=(d=T[Zf])===null||d===void 0?void 0:d.arrayValue,C=(p=S[Zf])===null||p===void 0?void 0:p.arrayValue,z=Ne(((g=I==null?void 0:I.values)===null||g===void 0?void 0:g.length)||0,((y=C==null?void 0:C.values)===null||y===void 0?void 0:y.length)||0);return z!==0?z:PS(I,C)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===pf.mapValue&&c===pf.mapValue)return 0;if(l===pf.mapValue)return 1;if(c===pf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let T=0;T<p.length&&T<y.length;++T){const S=Hg(p[T],y[T]);if(S!==0)return S;const I=rl(d[p[T]],g[y[T]]);if(I!==0)return I}return Ne(p.length,y.length)}(n.mapValue,e.mapValue);default:throw Ae(23264,{Pe:t})}}function MS(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ne(n,e);const t=Nr(n),s=Nr(e),a=Ne(t.seconds,s.seconds);return a!==0?a:Ne(t.nanos,s.nanos)}function PS(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=rl(t[a],s[a]);if(l)return l}return Ne(t.length,s.length)}function al(n){return qg(n)}function qg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Nr(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Or(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ve.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=qg(l);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${qg(t.fields[c])}`;return a+"}"}(n.mapValue):Ae(61005,{value:n})}function Cf(n){switch(Dr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Rd(n);return e?16+Cf(e):16;case 5:return 2*n.stringValue.length;case 6:return Or(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,l)=>a+Cf(l),0)}(n.arrayValue);case 10:case 11:return function(s){let a=0;return Vr(s.fields,(l,c)=>{a+=l.length+Cf(c)}),a}(n.mapValue);default:throw Ae(13486,{value:n})}}function jg(n){return!!n&&"integerValue"in n}function ty(n){return!!n&&"arrayValue"in n}function LS(n){return!!n&&"nullValue"in n}function VS(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function If(n){return!!n&&"mapValue"in n}function DL(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[pb])===null||t===void 0?void 0:t.stringValue)===mb}function Ju(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Vr(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ju(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ju(n.arrayValue.values[t]);return e}return Object.assign({},n)}function kL(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===OL}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.value=e}static empty(){return new In({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!If(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ju(t)}setAll(e){let t=sn.emptyPath(),s={},a=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=Ju(c):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());If(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];If(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Vr(t,(a,l)=>e[a]=l);for(const a of s)delete e[a]}clone(){return new In(Ju(this.value))}}function gb(n){const e=[];return Vr(n.fields,(t,s)=>{const a=new sn([t]);if(If(s)){const l=gb(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new Bn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new dn(e,0,Re.min(),Re.min(),Re.min(),In.empty(),0)}static newFoundDocument(e,t,s,a){return new dn(e,1,t,Re.min(),s,a,0)}static newNoDocument(e,t){return new dn(e,2,t,Re.min(),Re.min(),In.empty(),0)}static newUnknownDocument(e,t){return new dn(e,3,t,Re.min(),Re.min(),In.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=In.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=In.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t){this.position=e,this.inclusive=t}}function US(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?s=ve.comparator(ve.fromName(c.referenceValue),t.key):s=rl(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function BS(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!qi(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t="asc"){this.field=e,this.dir=t}}function xL(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{}class Ut extends _b{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new PL(e,t,s):t==="array-contains"?new UL(e,s):t==="in"?new BL(e,s):t==="not-in"?new zL(e,s):t==="array-contains-any"?new FL(e,s):new Ut(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new LL(e,s):new VL(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(rl(t,this.value)):t!==null&&Dr(this.value)===Dr(t)&&this.matchesComparison(rl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ji extends _b{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new ji(e,t)}matches(e){return yb(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function yb(n){return n.op==="and"}function vb(n){return ML(n)&&yb(n)}function ML(n){for(const e of n.filters)if(e instanceof ji)return!1;return!0}function Gg(n){if(n instanceof Ut)return n.field.canonicalString()+n.op.toString()+al(n.value);if(vb(n))return n.filters.map(e=>Gg(e)).join(",");{const e=n.filters.map(t=>Gg(t)).join(",");return`${n.op}(${e})`}}function Eb(n,e){return n instanceof Ut?function(s,a){return a instanceof Ut&&s.op===a.op&&s.field.isEqual(a.field)&&qi(s.value,a.value)}(n,e):n instanceof ji?function(s,a){return a instanceof ji&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((l,c,d)=>l&&Eb(c,a.filters[d]),!0):!1}(n,e):void Ae(19439)}function Tb(n){return n instanceof Ut?function(t){return`${t.field.canonicalString()} ${t.op} ${al(t.value)}`}(n):n instanceof ji?function(t){return t.op.toString()+" {"+t.getFilters().map(Tb).join(" ,")+"}"}(n):"Filter"}class PL extends Ut{constructor(e,t,s){super(e,t,s),this.key=ve.fromName(s.referenceValue)}matches(e){const t=ve.comparator(e.key,this.key);return this.matchesComparison(t)}}class LL extends Ut{constructor(e,t){super(e,"in",t),this.keys=Sb("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class VL extends Ut{constructor(e,t){super(e,"not-in",t),this.keys=Sb("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Sb(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ve.fromName(s.referenceValue))}class UL extends Ut{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ty(t)&&mc(t.arrayValue,this.value)}}class BL extends Ut{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&mc(this.value.arrayValue,t)}}class zL extends Ut{constructor(e,t){super(e,"not-in",t)}matches(e){if(mc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!mc(this.value.arrayValue,t)}}class FL extends Ut{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ty(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>mc(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Ie=null}}function zS(n,e=null,t=[],s=[],a=null,l=null,c=null){return new HL(n,e,t,s,a,l,c)}function ny(n){const e=be(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Gg(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),wd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>al(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>al(s)).join(",")),e.Ie=t}return e.Ie}function iy(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!xL(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Eb(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!BS(n.startAt,e.startAt)&&BS(n.endAt,e.endAt)}function Kg(n){return ve.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function qL(n,e,t,s,a,l,c,d){return new bd(n,e,t,s,a,l,c,d)}function sy(n){return new bd(n)}function FS(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function jL(n){return n.collectionGroup!==null}function ec(n){const e=be(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new zt(sn.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new ed(l,s))}),t.has(sn.keyField().canonicalString())||e.Ee.push(new ed(sn.keyField(),s))}return e.Ee}function Bi(n){const e=be(n);return e.de||(e.de=GL(e,ec(n))),e.de}function GL(n,e){if(n.limitType==="F")return zS(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new ed(a.field,l)});const t=n.endAt?new Jf(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Jf(n.startAt.position,n.startAt.inclusive):null;return zS(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Yg(n,e,t){return new bd(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Cd(n,e){return iy(Bi(n),Bi(e))&&n.limitType===e.limitType}function Ab(n){return`${ny(Bi(n))}|lt:${n.limitType}`}function qo(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(a=>Tb(a)).join(", ")}]`),wd(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(a=>al(a)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(a=>al(a)).join(",")),`Target(${s})`}(Bi(n))}; limitType=${n.limitType})`}function Id(n,e){return e.isFoundDocument()&&function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ve.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(n,e)&&function(s,a){for(const l of ec(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(n,e)&&function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0}(n,e)&&function(s,a){return!(s.startAt&&!function(c,d,p){const g=US(c,d,p);return c.inclusive?g<=0:g<0}(s.startAt,ec(s),a)||s.endAt&&!function(c,d,p){const g=US(c,d,p);return c.inclusive?g>=0:g>0}(s.endAt,ec(s),a))}(n,e)}function KL(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function wb(n){return(e,t)=>{let s=!1;for(const a of ec(n)){const l=YL(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function YL(n,e,t){const s=n.field.isKeyField()?ve.comparator(e.key,t.key):function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?rl(p,g):Ae(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Ae(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Vr(this.inner,(t,s)=>{for(const[a,l]of s)e(a,l)})}isEmpty(){return lb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $L=new _t(ve.comparator);function Ms(){return $L}const Rb=new _t(ve.comparator);function Gu(...n){let e=Rb;for(const t of n)e=e.insert(t.key,t);return e}function bb(n){let e=Rb;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Ca(){return tc()}function Cb(){return tc()}function tc(){return new ja(n=>n.toString(),(n,e)=>n.isEqual(e))}const QL=new _t(ve.comparator),WL=new zt(ve.comparator);function Pe(...n){let e=WL;for(const t of n)e=e.add(t);return e}const XL=new zt(Ne);function ZL(){return XL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wf(e)?"-0":e}}function Ib(n){return{integerValue:""+n}}function JL(n,e){return RL(e)?Ib(e):ry(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this._=void 0}}function eV(n,e,t){return n instanceof td?function(a,l){const c={fields:{[hb]:{stringValue:cb},[db]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&ey(l)&&(l=Rd(l)),l&&(c.fields[fb]=l),{mapValue:c}}(t,e):n instanceof ol?Ob(n,e):n instanceof gc?Db(n,e):function(a,l){const c=Nb(a,l),d=HS(c)+HS(a.Re);return jg(c)&&jg(a.Re)?Ib(d):ry(a.serializer,d)}(n,e)}function tV(n,e,t){return n instanceof ol?Ob(n,e):n instanceof gc?Db(n,e):t}function Nb(n,e){return n instanceof nd?function(s){return jg(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class td extends Nd{}class ol extends Nd{constructor(e){super(),this.elements=e}}function Ob(n,e){const t=kb(e);for(const s of n.elements)t.some(a=>qi(a,s))||t.push(s);return{arrayValue:{values:t}}}class gc extends Nd{constructor(e){super(),this.elements=e}}function Db(n,e){let t=kb(e);for(const s of n.elements)t=t.filter(a=>!qi(a,s));return{arrayValue:{values:t}}}class nd extends Nd{constructor(e,t){super(),this.serializer=e,this.Re=t}}function HS(n){return bt(n.integerValue||n.doubleValue)}function kb(n){return ty(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(e,t){this.field=e,this.transform=t}}function iV(n,e){return n.field.isEqual(e.field)&&function(s,a){return s instanceof ol&&a instanceof ol||s instanceof gc&&a instanceof gc?sl(s.elements,a.elements,qi):s instanceof nd&&a instanceof nd?qi(s.Re,a.Re):s instanceof td&&a instanceof td}(n.transform,e.transform)}class sV{constructor(e,t){this.version=e,this.transformResults=t}}class zi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new zi}static exists(e){return new zi(void 0,e)}static updateTime(e){return new zi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Od{}function xb(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Pb(n.key,zi.none()):new Dc(n.key,n.data,zi.none());{const t=n.data,s=In.empty();let a=new zt(sn.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Ur(n.key,s,new Bn(a.toArray()),zi.none())}}function rV(n,e,t){n instanceof Dc?function(a,l,c){const d=a.value.clone(),p=jS(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Ur?function(a,l,c){if(!Nf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=jS(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(Mb(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function nc(n,e,t,s){return n instanceof Dc?function(l,c,d,p){if(!Nf(l.precondition,c))return d;const g=l.value.clone(),y=GS(l.fieldTransforms,p,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(n,e,t,s):n instanceof Ur?function(l,c,d,p){if(!Nf(l.precondition,c))return d;const g=GS(l.fieldTransforms,p,c),y=c.data;return y.setAll(Mb(l)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,s):function(l,c,d){return Nf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function aV(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=Nb(s.transform,a||null);l!=null&&(t===null&&(t=In.empty()),t.set(s.field,l))}return t||null}function qS(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&sl(s,a,(l,c)=>iV(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Dc extends Od{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Ur extends Od{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Mb(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function jS(n,e,t){const s=new Map;Qe(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,tV(c,d,t[a]))}return s}function GS(n,e,t){const s=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);s.set(a.field,eV(l,c,e))}return s}class Pb extends Od{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oV extends Od{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&rV(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=nc(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=nc(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Cb();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=xb(c,d);p!==null&&s.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(Re.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&sl(this.mutations,e.mutations,(t,s)=>qS(t,s))&&sl(this.baseMutations,e.baseMutations,(t,s)=>qS(t,s))}}class ay{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){Qe(e.mutations.length===s.length,58842,{fe:e.mutations.length,ge:s.length});let a=function(){return QL}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new ay(e,t,s,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt,Fe;function hV(n){switch(n){case ne.OK:return Ae(64938);case ne.CANCELLED:case ne.UNKNOWN:case ne.DEADLINE_EXCEEDED:case ne.RESOURCE_EXHAUSTED:case ne.INTERNAL:case ne.UNAVAILABLE:case ne.UNAUTHENTICATED:return!1;case ne.INVALID_ARGUMENT:case ne.NOT_FOUND:case ne.ALREADY_EXISTS:case ne.PERMISSION_DENIED:case ne.FAILED_PRECONDITION:case ne.ABORTED:case ne.OUT_OF_RANGE:case ne.UNIMPLEMENTED:case ne.DATA_LOSS:return!0;default:return Ae(15467,{code:n})}}function Lb(n){if(n===void 0)return xs("GRPC error has no .code"),ne.UNKNOWN;switch(n){case Dt.OK:return ne.OK;case Dt.CANCELLED:return ne.CANCELLED;case Dt.UNKNOWN:return ne.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return ne.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return ne.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return ne.INTERNAL;case Dt.UNAVAILABLE:return ne.UNAVAILABLE;case Dt.UNAUTHENTICATED:return ne.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return ne.INVALID_ARGUMENT;case Dt.NOT_FOUND:return ne.NOT_FOUND;case Dt.ALREADY_EXISTS:return ne.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return ne.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return ne.FAILED_PRECONDITION;case Dt.ABORTED:return ne.ABORTED;case Dt.OUT_OF_RANGE:return ne.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return ne.UNIMPLEMENTED;case Dt.DATA_LOSS:return ne.DATA_LOSS;default:return Ae(39323,{code:n})}}(Fe=Dt||(Dt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fV=new Ar([4294967295,4294967295],0);function KS(n){const e=rb().encode(n),t=new XR;return t.update(e),new Uint8Array(t.digest())}function YS(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ar([t,s],0),new Ar([a,l],0)]}class oy{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ku(`Invalid padding: ${t}`);if(s<0)throw new Ku(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ku(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ku(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=Ar.fromNumber(this.pe)}we(e,t,s){let a=e.add(t.multiply(Ar.fromNumber(s)));return a.compare(fV)===1&&(a=new Ar([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=KS(e),[s,a]=YS(t);for(let l=0;l<this.hashCount;l++){const c=this.we(s,a,l);if(!this.be(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new oy(l,a,t);return s.forEach(d=>c.insert(d)),c}insert(e){if(this.pe===0)return;const t=KS(e),[s,a]=YS(t);for(let l=0;l<this.hashCount;l++){const c=this.we(s,a,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ku extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,kc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Dd(Re.min(),a,new _t(Ne),Ms(),Pe())}}class kc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new kc(s,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,t,s,a){this.De=e,this.removedTargetIds=t,this.key=s,this.ve=a}}class Vb{constructor(e,t){this.targetId=e,this.Ce=t}}class Ub{constructor(e,t,s=rn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class $S{constructor(){this.Fe=0,this.Me=QS(),this.xe=rn.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Pe(),t=Pe(),s=Pe();return this.Me.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Ae(38017,{changeType:l})}}),new kc(this.xe,this.Oe,e,t,s)}Qe(){this.Ne=!1,this.Me=QS()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Qe(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class dV{constructor(e){this.ze=e,this.je=new Map,this.He=Ms(),this.Je=mf(),this.Ye=mf(),this.Ze=new _t(Ne)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const s=this.rt(t);switch(e.state){case 0:this.it(t)&&s.ke(e.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(e.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(t);break;case 3:this.it(t)&&(s.Ge(),s.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),s.ke(e.resumeToken));break;default:Ae(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((s,a)=>{this.it(a)&&t(a)})}ot(e){const t=e.targetId,s=e.Ce.count,a=this._t(t);if(a){const l=a.target;if(Kg(l))if(s===0){const c=new ve(l.path);this.tt(t,c,dn.newNoDocument(c,Re.min()))}else Qe(s===1,20013,{expectedCount:s});else{const c=this.ut(t);if(c!==s){const d=this.ct(e),p=d?this.lt(d,e,c):1;if(p!==0){this.st(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,g)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=Or(s).toUint8Array()}catch(p){if(p instanceof ub)return il("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new oy(c,a,l)}catch(p){return il(p instanceof Ku?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.pe===0?null:d}lt(e,t,s){return t.Ce.count===s-this.Tt(e,t.targetId)?0:2}Tt(e,t){const s=this.ze.getRemoteKeysForTarget(t);let a=0;return s.forEach(l=>{const c=this.ze.Pt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.tt(t,l,null),a++)}),a}It(e){const t=new Map;this.je.forEach((l,c)=>{const d=this._t(c);if(d){if(l.current&&Kg(d.target)){const p=new ve(d.target.path);this.Et(p).has(c)||this.dt(c,p)||this.tt(c,p,dn.newNoDocument(p,e))}l.Le&&(t.set(c,l.qe()),l.Qe())}});let s=Pe();this.Ye.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const g=this._t(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(s=s.add(l))}),this.He.forEach((l,c)=>c.setReadTime(e));const a=new Dd(e,t,this.Ze,this.He,s);return this.He=Ms(),this.Je=mf(),this.Ye=mf(),this.Ze=new _t(Ne),a}et(e,t){if(!this.it(e))return;const s=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,s),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,s){if(!this.it(e))return;const a=this.rt(e);this.dt(e,t)?a.$e(t,1):a.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),s&&(this.He=this.He.insert(t,s))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new $S,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new zt(Ne),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new zt(Ne),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||he("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new $S),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function mf(){return new _t(ve.comparator)}function QS(){return new _t(ve.comparator)}const pV={asc:"ASCENDING",desc:"DESCENDING"},mV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gV={and:"AND",or:"OR"};class _V{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function $g(n,e){return n.useProto3Json||wd(e)?e:{value:e}}function id(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bb(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function yV(n,e){return id(n,e.toTimestamp())}function Fi(n){return Qe(!!n,49232),Re.fromTimestamp(function(t){const s=Nr(t);return new Bt(s.seconds,s.nanos)}(n))}function ly(n,e){return Qg(n,e).canonicalString()}function Qg(n,e){const t=function(a){return new St(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function zb(n){const e=St.fromString(n);return Qe(Gb(e),10190,{key:e.toString()}),e}function Wg(n,e){return ly(n.databaseId,e.path)}function ug(n,e){const t=zb(e);if(t.get(1)!==n.databaseId.projectId)throw new _e(ne.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new _e(ne.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ve(Hb(t))}function Fb(n,e){return ly(n.databaseId,e)}function vV(n){const e=zb(n);return e.length===4?St.emptyPath():Hb(e)}function Xg(n){return new St(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Hb(n){return Qe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function WS(n,e,t){return{name:Wg(n,e),fields:t.value.mapValue.fields}}function EV(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Ae(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,y){return g.useProto3Json?(Qe(y===void 0||typeof y=="string",58123),rn.fromBase64String(y||"")):(Qe(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),rn.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const y=g.code===void 0?ne.UNKNOWN:Lb(g.code);return new _e(y,g.message||"")}(c);t=new Ub(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=ug(n,s.document.name),l=Fi(s.document.updateTime),c=s.document.createTime?Fi(s.document.createTime):Re.min(),d=new In({mapValue:{fields:s.document.fields}}),p=dn.newFoundDocument(a,l,c,d),g=s.targetIds||[],y=s.removedTargetIds||[];t=new Of(g,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=ug(n,s.document),l=s.readTime?Fi(s.readTime):Re.min(),c=dn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new Of([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=ug(n,s.document),l=s.removedTargetIds||[];t=new Of([],l,a,null)}else{if(!("filter"in e))return Ae(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new cV(a,l),d=s.targetId;t=new Vb(d,c)}}return t}function TV(n,e){let t;if(e instanceof Dc)t={update:WS(n,e.key,e.value)};else if(e instanceof Pb)t={delete:Wg(n,e.key)};else if(e instanceof Ur)t={update:WS(n,e.key,e.data),updateMask:OV(e.fieldMask)};else{if(!(e instanceof oV))return Ae(16599,{ft:e.type});t={verify:Wg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,c){const d=c.transform;if(d instanceof td)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof ol)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof gc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof nd)return{fieldPath:c.field.canonicalString(),increment:d.Re};throw Ae(20930,{transform:c.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:yV(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ae(27497)}(n,e.precondition)),t}function SV(n,e){return n&&n.length>0?(Qe(e!==void 0,14353),n.map(t=>function(a,l){let c=a.updateTime?Fi(a.updateTime):Fi(l);return c.isEqual(Re.min())&&(c=Fi(l)),new sV(c,a.transformResults||[])}(t,e))):[]}function AV(n,e){return{documents:[Fb(n,e.path)]}}function wV(n,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Fb(n,a);const l=function(g){if(g.length!==0)return jb(ji.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(y=>function(S){return{field:jo(S.field),direction:CV(S.dir)}}(y))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=$g(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{gt:t,parent:a}}function RV(n){let e=vV(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){Qe(s===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=function(T){const S=qb(T);return S instanceof ji&&vb(S)?S.getFilters():[S]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(S=>function(C){return new ed(Go(C.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(S))}(t.orderBy));let d=null;t.limit&&(d=function(T){let S;return S=typeof T=="object"?T.value:T,wd(S)?null:S}(t.limit));let p=null;t.startAt&&(p=function(T){const S=!!T.before,I=T.values||[];return new Jf(I,S)}(t.startAt));let g=null;return t.endAt&&(g=function(T){const S=!T.before,I=T.values||[];return new Jf(I,S)}(t.endAt)),qL(e,a,c,l,d,"F",p,g)}function bV(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function qb(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Go(t.unaryFilter.field);return Ut.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Go(t.unaryFilter.field);return Ut.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Go(t.unaryFilter.field);return Ut.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Go(t.unaryFilter.field);return Ut.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ae(61313);default:return Ae(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ut.create(Go(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ae(58110);default:return Ae(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ji.create(t.compositeFilter.filters.map(s=>qb(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Ae(1026)}}(t.compositeFilter.op))}(n):Ae(30097,{filter:n})}function CV(n){return pV[n]}function IV(n){return mV[n]}function NV(n){return gV[n]}function jo(n){return{fieldPath:n.canonicalString()}}function Go(n){return sn.fromServerFormat(n.fieldPath)}function jb(n){return n instanceof Ut?function(t){if(t.op==="=="){if(VS(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NAN"}};if(LS(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(VS(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NOT_NAN"}};if(LS(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jo(t.field),op:IV(t.op),value:t.value}}}(n):n instanceof ji?function(t){const s=t.getFilters().map(a=>jb(a));return s.length===1?s[0]:{compositeFilter:{op:NV(t.op),filters:s}}}(n):Ae(54877,{filter:n})}function OV(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Gb(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,t,s,a,l=Re.min(),c=Re.min(),d=rn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DV{constructor(e){this.wt=e}}function kV(n){const e=RV({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Yg(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xV{constructor(){this.Cn=new MV}addToCollectionParentIndex(e,t){return this.Cn.add(t),ee.resolve()}getCollectionParents(e,t){return ee.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return ee.resolve()}deleteFieldIndex(e,t){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,t){return ee.resolve()}getDocumentsMatchingTarget(e,t){return ee.resolve(null)}getIndexType(e,t){return ee.resolve(0)}getFieldIndexes(e,t){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,t){return ee.resolve(Ir.min())}getMinOffsetFromCollectionGroup(e,t){return ee.resolve(Ir.min())}updateCollectionGroup(e,t,s){return ee.resolve()}updateIndexEntries(e,t){return ee.resolve()}}class MV{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new zt(St.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new zt(St.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Kb=41943040;class bn{static withCacheSize(e){return new bn(e,bn.DEFAULT_COLLECTION_PERCENTILE,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn.DEFAULT_COLLECTION_PERCENTILE=10,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bn.DEFAULT=new bn(Kb,bn.DEFAULT_COLLECTION_PERCENTILE,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bn.DISABLED=new bn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new ll(0)}static lr(){return new ll(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS="LruGarbageCollector",PV=1048576;function JS([n,e],[t,s]){const a=Ne(n,t);return a===0?Ne(e,s):a}class LV{constructor(e){this.Er=e,this.buffer=new zt(JS),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();JS(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class VV{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){he(ZS,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){El(t)?he(ZS,"Ignoring IndexedDB error during garbage collection: ",t):await vl(t)}await this.mr(3e5)})}}class UV{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return ee.resolve(Ad.le);const s=new LV(t);return this.gr.forEachTarget(e,a=>s.Rr(a.sequenceNumber)).next(()=>this.gr.yr(e,a=>s.Rr(a))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.gr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(XS)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),XS):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let s,a,l,c,d,p,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a))).next(T=>(s=T,d=Date.now(),this.removeTargets(e,s,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(g=Date.now(),Ho()<=Me.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-y}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T})))}}function BV(n,e){return new UV(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zV{constructor(){this.changes=new ja(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,dn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?ee.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FV{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HV{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(s!==null&&nc(s.mutation,a,Bn.empty(),Bt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Pe()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Pe()){const a=Ca();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,s).next(l=>{let c=Gu();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const s=Ca();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Pe()))}populateOverlays(e,t,s){const a=[];return s.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,s,a){let l=Ms();const c=tc(),d=function(){return tc()}();return t.forEach((p,g)=>{const y=s.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof Ur)?l=l.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),nc(y.mutation,g,y.mutation.getFieldMask(),Bt.now())):c.set(g.key,Bn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,y)=>c.set(g,y)),t.forEach((g,y)=>{var T;return d.set(g,new FV(y,(T=c.get(g))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const s=tc();let a=new _t((c,d)=>c-d),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const g=t.get(p);if(g===null)return;let y=s.get(p)||Bn.empty();y=d.applyToLocalView(g,y),s.set(p,y);const T=(a.get(d.batchId)||Pe()).add(p);a=a.insert(d.batchId,T)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,y=p.value,T=Cb();y.forEach(S=>{if(!l.has(S)){const I=xb(t.get(S),s.get(S));I!==null&&T.set(S,I),l=l.add(S)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return ee.waitFor(c)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,a){return function(c){return ve.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):jL(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):ee.resolve(Ca());let d=fc,p=l;return c.next(g=>ee.forEach(g,(y,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(y)?ee.resolve():this.remoteDocumentCache.getEntry(e,y).next(S=>{p=p.insert(y,S)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,Pe())).next(y=>({batchId:d,changes:bb(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ve(t)).next(s=>{let a=Gu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=Gu();return this.indexManager.getCollectionParents(e,l).next(d=>ee.forEach(d,p=>{const g=function(T,S){return new bd(S,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next(y=>{y.forEach((T,S)=>{c=c.insert(T,S)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a))).next(c=>{l.forEach((p,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,dn.newInvalidDocument(y)))});let d=Gu();return c.forEach((p,g)=>{const y=l.get(p);y!==void 0&&nc(y.mutation,g,Bn.empty(),Bt.now()),Id(t,g)&&(d=d.insert(p,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qV{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return ee.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Fi(a.createTime)}}(t)),ee.resolve()}getNamedQuery(e,t){return ee.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(a){return{name:a.name,query:kV(a.bundledQuery),readTime:Fi(a.readTime)}}(t)),ee.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jV{constructor(){this.overlays=new _t(ve.comparator),this.Qr=new Map}getOverlay(e,t){return ee.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ca();return ee.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&s.set(a,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((a,l)=>{this.St(e,t,l)}),ee.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.Qr.get(s);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Qr.delete(s)),ee.resolve()}getOverlaysForCollection(e,t,s){const a=Ca(),l=t.length+1,c=new ve(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return ee.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new _t((g,y)=>g-y);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let y=l.get(g.largestBatchId);y===null&&(y=Ca(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=Ca(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,y)=>d.set(g,y)),!(d.size()>=a)););return ee.resolve(d)}St(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.Qr.get(a.largestBatchId).delete(s.key);this.Qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new uV(t,s));let l=this.Qr.get(t);l===void 0&&(l=Pe(),this.Qr.set(t,l)),this.Qr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GV{constructor(){this.sessionToken=rn.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ee.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(){this.$r=new zt($t.Ur),this.Kr=new zt($t.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const s=new $t(e,t);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.zr(new $t(e,t))}jr(e,t){e.forEach(s=>this.removeReference(s,t))}Hr(e){const t=new ve(new St([])),s=new $t(t,e),a=new $t(t,e+1),l=[];return this.Kr.forEachInRange([s,a],c=>{this.zr(c),l.push(c.key)}),l}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new ve(new St([])),s=new $t(t,e),a=new $t(t,e+1);let l=Pe();return this.Kr.forEachInRange([s,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new $t(e,0),s=this.$r.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class $t{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return ve.comparator(e.key,t.key)||Ne(e.Zr,t.Zr)}static Wr(e,t){return Ne(e.Zr,t.Zr)||ve.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KV{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new zt($t.Ur)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new lV(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Xr=this.Xr.add(new $t(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return ee.resolve(c)}lookupMutationBatch(e,t){return ee.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.ti(s),l=a<0?0:a;return ee.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?J_:this.nr-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new $t(t,0),a=new $t(t,Number.POSITIVE_INFINITY),l=[];return this.Xr.forEachInRange([s,a],c=>{const d=this.ei(c.Zr);l.push(d)}),ee.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new zt(Ne);return t.forEach(a=>{const l=new $t(a,0),c=new $t(a,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([l,c],d=>{s=s.add(d.Zr)})}),ee.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;ve.isDocumentKey(l)||(l=l.child(""));const c=new $t(new ve(l),0);let d=new zt(Ne);return this.Xr.forEachWhile(p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Zr)),!0)},c),ee.resolve(this.ni(d))}ni(e){const t=[];return e.forEach(s=>{const a=this.ei(s);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){Qe(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return ee.forEach(t.mutations,a=>{const l=new $t(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Xr=s})}sr(e){}containsKey(e,t){const s=new $t(t,0),a=this.Xr.firstAfterOrEqual(s);return ee.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YV{constructor(e){this.ii=e,this.docs=function(){return new _t(ve.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ii(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return ee.resolve(s?s.document.mutableCopy():dn.newInvalidDocument(t))}getEntries(e,t){let s=Ms();return t.forEach(a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():dn.newInvalidDocument(a))}),ee.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Ms();const c=t.path,d=new ve(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:y}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||TL(EL(y),s)<=0||(a.has(y.key)||Id(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return ee.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Ae(9500)}si(e,t){return ee.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new $V(this)}getSize(e){return ee.resolve(this.size)}}class $V extends zV{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?t.push(this.Br.addEntry(e,a)):this.Br.removeEntry(s)}),ee.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QV{constructor(e){this.persistence=e,this.oi=new ja(t=>ny(t),iy),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this._i=0,this.ai=new uy,this.targetCount=0,this.ui=ll.cr()}forEachTarget(e,t){return this.oi.forEach((s,a)=>t(a)),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this._i&&(this._i=t),ee.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new ll(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,ee.resolve()}updateTargetData(e,t){return this.Tr(t),ee.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.oi.forEach((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.oi.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),ee.waitFor(l).next(()=>a)}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,t){const s=this.oi.get(t)||null;return ee.resolve(s)}addMatchingKeys(e,t,s){return this.ai.Gr(t,s),ee.resolve()}removeMatchingKeys(e,t,s){this.ai.jr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),ee.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),ee.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ai.Yr(t);return ee.resolve(s)}containsKey(e,t){return ee.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,t){this.ci={},this.overlays={},this.li=new Ad(0),this.hi=!1,this.hi=!0,this.Pi=new GV,this.referenceDelegate=e(this),this.Ti=new QV(this),this.indexManager=new xV,this.remoteDocumentCache=function(a){return new YV(a)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new DV(t),this.Ei=new qV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new jV,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ci[e.toKey()];return s||(s=new KV(t,this.referenceDelegate),this.ci[e.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,s){he("MemoryPersistence","Starting transaction:",e);const a=new WV(this.li.next());return this.referenceDelegate.di(),s(a).next(l=>this.referenceDelegate.Ai(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ri(e,t){return ee.or(Object.values(this.ci).map(s=>()=>s.containsKey(e,t)))}}class WV extends AL{constructor(e){super(),this.currentSequenceNumber=e}}class cy{constructor(e){this.persistence=e,this.Vi=new uy,this.mi=null}static fi(e){return new cy(e)}get gi(){if(this.mi)return this.mi;throw Ae(60996)}addReference(e,t,s){return this.Vi.addReference(s,t),this.gi.delete(s.toString()),ee.resolve()}removeReference(e,t,s){return this.Vi.removeReference(s,t),this.gi.add(s.toString()),ee.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),ee.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(a=>this.gi.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.gi.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.gi,s=>{const a=ve.fromPath(s);return this.pi(e,a).next(l=>{l||t.removeEntry(a,Re.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(s=>{s?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return ee.or([()=>ee.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class sd{constructor(e,t){this.persistence=e,this.yi=new ja(s=>bL(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=BV(this,t)}static fi(e,t){return new sd(e,t)}di(){}Ai(e){return ee.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(a=>s+a))}br(e){let t=0;return this.yr(e,s=>{t++}).next(()=>t)}yr(e,t){return ee.forEach(this.yi,(s,a)=>this.Dr(e,s,a).next(l=>l?ee.resolve():t(a)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.si(e,c=>this.Dr(e,c,t).next(d=>{d||(s++,l.removeEntry(c,Re.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),ee.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),ee.resolve()}removeReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),ee.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Cf(e.data.value)),t}Dr(e,t,s){return ee.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.yi.get(t);return ee.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.ds=s,this.As=a}static Rs(e,t){let s=Pe(),a=Pe();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new hy(e,t.fromCache,s,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZV{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return FO()?8:wL(mn())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ws(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.bs(e,t,a,s).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new XV;return this.Ss(e,t,c).next(d=>{if(l.result=d,this.fs)return this.Ds(e,t,c,d.size)})}).next(()=>l.result)}Ds(e,t,s,a){return s.documentReadCount<this.gs?(Ho()<=Me.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",qo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),ee.resolve()):(Ho()<=Me.DEBUG&&he("QueryEngine","Query:",qo(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.ps*a?(Ho()<=Me.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",qo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Bi(t))):ee.resolve())}ws(e,t){if(FS(t))return ee.resolve(null);let s=Bi(t);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=Yg(t,null,"F"),s=Bi(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const c=Pe(...l);return this.ys.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,s).next(p=>{const g=this.vs(t,d);return this.Cs(t,g,c,p.readTime)?this.ws(e,Yg(t,null,"F")):this.Fs(e,g,t,p)}))})))}bs(e,t,s,a){return FS(t)||a.isEqual(Re.min())?ee.resolve(null):this.ys.getDocuments(e,s).next(l=>{const c=this.vs(t,l);return this.Cs(t,c,s,a)?ee.resolve(null):(Ho()<=Me.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),qo(t)),this.Fs(e,c,t,vL(a,fc)).next(d=>d))})}vs(e,t){let s=new zt(wb(e));return t.forEach((a,l)=>{Id(e,l)&&(s=s.add(l))}),s}Cs(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,s){return Ho()<=Me.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",qo(t)),this.ys.getDocumentsMatchingQuery(e,t,Ir.min(),s)}Fs(e,t,s,a){return this.ys.getDocumentsMatchingQuery(e,s,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy="LocalStore",JV=3e8;class eU{constructor(e,t,s,a){this.persistence=e,this.Ms=t,this.serializer=a,this.xs=new _t(Ne),this.Os=new ja(l=>ny(l),iy),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(s)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HV(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function tU(n,e,t,s){return new eU(n,e,t,s)}async function $b(n,e){const t=be(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next(l=>(a=l,t.Ls(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const c=[],d=[];let p=Pe();for(const g of a){c.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}for(const g of l){d.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(s,p).next(g=>({ks:g,removedBatchIds:c,addedBatchIds:d}))})})}function nU(n,e){const t=be(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const a=e.batch.keys(),l=t.Bs.newChangeBuffer({trackRemovals:!0});return function(d,p,g,y){const T=g.batch,S=T.keys();let I=ee.resolve();return S.forEach(C=>{I=I.next(()=>y.getEntry(p,C)).next(z=>{const L=g.docVersions.get(C);Qe(L!==null,48541),z.version.compareTo(L)<0&&(T.applyToRemoteDocument(z,g),z.isValidDocument()&&(z.setReadTime(g.commitVersion),y.addEntry(z)))})}),I.next(()=>d.mutationQueue.removeMutationBatch(p,T))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(d){let p=Pe();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(e))).next(()=>t.localDocuments.getDocuments(s,a))})}function Qb(n){const e=be(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function iU(n,e){const t=be(n),s=e.snapshotVersion;let a=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.Bs.newChangeBuffer({trackRemovals:!0});a=t.xs;const d=[];e.targetChanges.forEach((y,T)=>{const S=a.get(T);if(!S)return;d.push(t.Ti.removeMatchingKeys(l,y.removedDocuments,T).next(()=>t.Ti.addMatchingKeys(l,y.addedDocuments,T)));let I=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?I=I.withResumeToken(rn.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):y.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(y.resumeToken,s)),a=a.insert(T,I),function(z,L,Y){return z.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=JV?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(S,I,y)&&d.push(t.Ti.updateTargetData(l,I))});let p=Ms(),g=Pe();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))}),d.push(sU(l,c,e.documentUpdates).next(y=>{p=y.qs,g=y.Qs})),!s.isEqual(Re.min())){const y=t.Ti.getLastRemoteSnapshotVersion(l).next(T=>t.Ti.setTargetsMetadata(l,l.currentSequenceNumber,s));d.push(y)}return ee.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(t.xs=a,l))}function sU(n,e,t){let s=Pe(),a=Pe();return t.forEach(l=>s=s.add(l)),e.getEntries(n,s).next(l=>{let c=Ms();return t.forEach((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Re.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):he(fy,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{qs:c,Qs:a}})}function rU(n,e){const t=be(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=J_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function aU(n,e){const t=be(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let a;return t.Ti.getTargetData(s,e).next(l=>l?(a=l,ee.resolve(a)):t.Ti.allocateTargetId(s).next(c=>(a=new yr(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.Ti.addTargetData(s,a).next(()=>a))))}).then(s=>{const a=t.xs.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.xs=t.xs.insert(s.targetId,s),t.Os.set(e,s.targetId)),s})}async function Zg(n,e,t){const s=be(n),a=s.xs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,c=>s.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!El(c))throw c;he(fy,`Failed to update sequence numbers for target ${e}: ${c}`)}s.xs=s.xs.remove(e),s.Os.delete(a.target)}function eA(n,e,t){const s=be(n);let a=Re.min(),l=Pe();return s.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,y){const T=be(p),S=T.Os.get(y);return S!==void 0?ee.resolve(T.xs.get(S)):T.Ti.getTargetData(g,y)}(s,c,Bi(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>s.Ms.getDocumentsMatchingQuery(c,e,t?a:Re.min(),t?l:Pe())).next(d=>(oU(s,KL(e),d),{documents:d,$s:l})))}function oU(n,e,t){let s=n.Ns.get(e)||Re.min();t.forEach((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),n.Ns.set(e,s)}class tA{constructor(){this.activeTargetIds=ZL()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lU{constructor(){this.xo=new tA,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,s){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new tA,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uU{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA="ConnectivityMonitor";class iA{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){he(nA,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){he(nA,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gf=null;function Jg(){return gf===null?gf=function(){return 268435456+Math.round(2147483648*Math.random())}():gf++,"0x"+gf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="RestConnection",cU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class hU{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${s}/databases/${a}`,this.Go=this.databaseId.database===Xf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}zo(e,t,s,a,l){const c=Jg(),d=this.jo(e,t.toUriEncodedString());he(cg,`Sending RPC '${e}' ${c}:`,d,s);const p={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(p,a,l);const{host:g}=new URL(d),y=Mr(g);return this.Jo(e,d,p,s,y).then(T=>(he(cg,`Received RPC '${e}' ${c}: `,T),T),T=>{throw il(cg,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",s),T})}Yo(e,t,s,a,l,c){return this.zo(e,t,s,a,l)}Ho(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+yl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),s&&s.headers.forEach((a,l)=>e[l]=a)}jo(e,t){const s=cU[e];return`${this.Ko}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fU{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="WebChannelConnection";class dU extends hU{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,a,l){const c=Jg();return new Promise((d,p)=>{const g=new ZR;g.setWithCredentials(!0),g.listenOnce(JR.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case bf.NO_ERROR:const T=g.getResponseJson();he(un,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case bf.TIMEOUT:he(un,`RPC '${e}' ${c} timed out`),p(new _e(ne.DEADLINE_EXCEEDED,"Request time out"));break;case bf.HTTP_ERROR:const S=g.getStatus();if(he(un,`RPC '${e}' ${c} failed with status:`,S,"response text:",g.getResponseText()),S>0){let I=g.getResponseJson();Array.isArray(I)&&(I=I[0]);const C=I==null?void 0:I.error;if(C&&C.status&&C.message){const z=function(Y){const W=Y.toLowerCase().replace(/_/g,"-");return Object.values(ne).indexOf(W)>=0?W:ne.UNKNOWN}(C.status);p(new _e(z,C.message))}else p(new _e(ne.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new _e(ne.UNAVAILABLE,"Connection failed."));break;default:Ae(9055,{h_:e,streamId:c,P_:g.getLastErrorCode(),T_:g.getLastError()})}}finally{he(un,`RPC '${e}' ${c} completed.`)}});const y=JSON.stringify(a);he(un,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",y,s,15)})}I_(e,t,s){const a=Jg(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=nb(),d=tb(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Ho(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const y=l.join("");he(un,`Creating RPC '${e}' stream ${a}: ${y}`,p);const T=c.createWebChannel(y,p);this.E_(T);let S=!1,I=!1;const C=new fU({Zo:L=>{I?he(un,`Not sending because RPC '${e}' stream ${a} is closed:`,L):(S||(he(un,`Opening RPC '${e}' stream ${a} transport.`),T.open(),S=!0),he(un,`RPC '${e}' stream ${a} sending:`,L),T.send(L))},Xo:()=>T.close()}),z=(L,Y,W)=>{L.listen(Y,te=>{try{W(te)}catch(le){setTimeout(()=>{throw le},0)}})};return z(T,ju.EventType.OPEN,()=>{I||(he(un,`RPC '${e}' stream ${a} transport opened.`),C.__())}),z(T,ju.EventType.CLOSE,()=>{I||(I=!0,he(un,`RPC '${e}' stream ${a} transport closed`),C.u_(),this.d_(T))}),z(T,ju.EventType.ERROR,L=>{I||(I=!0,il(un,`RPC '${e}' stream ${a} transport errored. Name:`,L.name,"Message:",L.message),C.u_(new _e(ne.UNAVAILABLE,"The operation could not be completed")))}),z(T,ju.EventType.MESSAGE,L=>{var Y;if(!I){const W=L.data[0];Qe(!!W,16349);const te=W,le=(te==null?void 0:te.error)||((Y=te[0])===null||Y===void 0?void 0:Y.error);if(le){he(un,`RPC '${e}' stream ${a} received error:`,le);const ce=le.status;let ge=function(b){const x=Dt[b];if(x!==void 0)return Lb(x)}(ce),k=le.message;ge===void 0&&(ge=ne.INTERNAL,k="Unknown error status: "+ce+" with message "+le.message),I=!0,C.u_(new _e(ge,k)),T.close()}else he(un,`RPC '${e}' stream ${a} received:`,W),C.c_(W)}}),z(d,eb.STAT_EVENT,L=>{L.stat===Fg.PROXY?he(un,`RPC '${e}' stream ${a} detected buffering proxy`):L.stat===Fg.NOPROXY&&he(un,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{C.a_()},0),C}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function hg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(n){return new _V(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,t,s=1e3,a=1.5,l=6e4){this.xi=e,this.timerId=t,this.A_=s,this.R_=a,this.V_=l,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),s=Math.max(0,Date.now()-this.g_),a=Math.max(0,t-s);a>0&&he("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,a,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA="PersistentStream";class Xb{constructor(e,t,s,a,l,c,d,p){this.xi=e,this.S_=s,this.D_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new Wb(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===ne.RESOURCE_EXHAUSTED?(xs(t.toString()),xs("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===ne.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.v_===t&&this.z_(s,a)},s=>{e(()=>{const a=new _e(ne.UNKNOWN,"Fetching auth token failed: "+s.message);return this.j_(a)})})}z_(e,t){const s=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(a=>{s(()=>this.j_(a))}),this.stream.onMessage(a=>{s(()=>++this.M_==1?this.J_(a):this.onNext(a))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return he(sA,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(he(sA,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pU extends Xb{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=EV(this.serializer,e),s=function(l){if(!("targetChange"in l))return Re.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Re.min():c.readTime?Fi(c.readTime):Re.min()}(e);return this.listener.Y_(t,s)}Z_(e){const t={};t.database=Xg(this.serializer),t.addTarget=function(l,c){let d;const p=c.target;if(d=Kg(p)?{documents:AV(l,p)}:{query:wV(l,p).gt},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=Bb(l,c.resumeToken);const g=$g(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Re.min())>0){d.readTime=id(l,c.snapshotVersion.toTimestamp());const g=$g(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const s=bV(this.serializer,e);s&&(t.labels=s),this.Q_(t)}X_(e){const t={};t.database=Xg(this.serializer),t.removeTarget=e,this.Q_(t)}}class mU extends Xb{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return Qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){Qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=SV(e.writeResults,e.commitTime),s=Fi(e.commitTime);return this.listener.ra(s,t)}ia(){const e={};e.database=Xg(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>TV(this.serializer,s))};this.Q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gU{}class _U extends gU{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.sa=!1}oa(){if(this.sa)throw new _e(ne.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,s,a){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.zo(e,Qg(t,s),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new _e(ne.UNKNOWN,l.toString())})}Yo(e,t,s,a,l){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Yo(e,Qg(t,s),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new _e(ne.UNKNOWN,c.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class yU{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(xs(t),this.ua=!1):he("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="RemoteStore";class vU{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=l,this.Ra.No(c=>{s.enqueueAndForget(async()=>{Ga(this)&&(he(La,"Restarting streams for network reachability change."),await async function(p){const g=be(p);g.da.add(4),await xc(g),g.Va.set("Unknown"),g.da.delete(4),await xd(g)}(this))})}),this.Va=new yU(s,a)}}async function xd(n){if(Ga(n))for(const e of n.Aa)await e(!0)}async function xc(n){for(const e of n.Aa)await e(!1)}function Zb(n,e){const t=be(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),gy(t)?my(t):Tl(t).N_()&&py(t,e))}function dy(n,e){const t=be(n),s=Tl(t);t.Ea.delete(e),s.N_()&&Jb(t,e),t.Ea.size===0&&(s.N_()?s.k_():Ga(t)&&t.Va.set("Unknown"))}function py(n,e){if(n.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Tl(n).Z_(e)}function Jb(n,e){n.ma.Ke(e),Tl(n).X_(e)}function my(n){n.ma=new dV({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Ea.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),Tl(n).start(),n.Va.ca()}function gy(n){return Ga(n)&&!Tl(n).O_()&&n.Ea.size>0}function Ga(n){return be(n).da.size===0}function eC(n){n.ma=void 0}async function EU(n){n.Va.set("Online")}async function TU(n){n.Ea.forEach((e,t)=>{py(n,e)})}async function SU(n,e){eC(n),gy(n)?(n.Va.Pa(e),my(n)):n.Va.set("Unknown")}async function AU(n,e,t){if(n.Va.set("Online"),e instanceof Ub&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ea.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ea.delete(d),a.ma.removeTarget(d))}(n,e)}catch(s){he(La,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await rd(n,s)}else if(e instanceof Of?n.ma.Xe(e):e instanceof Vb?n.ma.ot(e):n.ma.nt(e),!t.isEqual(Re.min()))try{const s=await Qb(n.localStore);t.compareTo(s)>=0&&await function(l,c){const d=l.ma.It(c);return d.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const y=l.Ea.get(g);y&&l.Ea.set(g,y.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,g)=>{const y=l.Ea.get(p);if(!y)return;l.Ea.set(p,y.withResumeToken(rn.EMPTY_BYTE_STRING,y.snapshotVersion)),Jb(l,p);const T=new yr(y.target,p,g,y.sequenceNumber);py(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(s){he(La,"Failed to raise snapshot:",s),await rd(n,s)}}async function rd(n,e,t){if(!El(e))throw e;n.da.add(1),await xc(n),n.Va.set("Offline"),t||(t=()=>Qb(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{he(La,"Retrying IndexedDB access"),await t(),n.da.delete(1),await xd(n)})}function tC(n,e){return e().catch(t=>rd(n,t,e))}async function Md(n){const e=be(n),t=kr(e);let s=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:J_;for(;wU(e);)try{const a=await rU(e.localStore,s);if(a===null){e.Ia.length===0&&t.k_();break}s=a.batchId,RU(e,a)}catch(a){await rd(e,a)}nC(e)&&iC(e)}function wU(n){return Ga(n)&&n.Ia.length<10}function RU(n,e){n.Ia.push(e);const t=kr(n);t.N_()&&t.ea&&t.ta(e.mutations)}function nC(n){return Ga(n)&&!kr(n).O_()&&n.Ia.length>0}function iC(n){kr(n).start()}async function bU(n){kr(n).ia()}async function CU(n){const e=kr(n);for(const t of n.Ia)e.ta(t.mutations)}async function IU(n,e,t){const s=n.Ia.shift(),a=ay.from(s,e,t);await tC(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await Md(n)}async function NU(n,e){e&&kr(n).ea&&await async function(s,a){if(function(c){return hV(c)&&c!==ne.ABORTED}(a.code)){const l=s.Ia.shift();kr(s).L_(),await tC(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a)),await Md(s)}}(n,e),nC(n)&&iC(n)}async function rA(n,e){const t=be(n);t.asyncQueue.verifyOperationInProgress(),he(La,"RemoteStore received new credentials");const s=Ga(t);t.da.add(3),await xc(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await xd(t)}async function OU(n,e){const t=be(n);e?(t.da.delete(2),await xd(t)):e||(t.da.add(2),await xc(t),t.Va.set("Unknown"))}function Tl(n){return n.fa||(n.fa=function(t,s,a){const l=be(t);return l.oa(),new pU(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{e_:EU.bind(null,n),n_:TU.bind(null,n),i_:SU.bind(null,n),Y_:AU.bind(null,n)}),n.Aa.push(async e=>{e?(n.fa.L_(),gy(n)?my(n):n.Va.set("Unknown")):(await n.fa.stop(),eC(n))})),n.fa}function kr(n){return n.ga||(n.ga=function(t,s,a){const l=be(t);return l.oa(),new mU(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:bU.bind(null,n),i_:NU.bind(null,n),na:CU.bind(null,n),ra:IU.bind(null,n)}),n.Aa.push(async e=>{e?(n.ga.L_(),await Md(n)):(await n.ga.stop(),n.Ia.length>0&&(he(La,`Stopping write stream with ${n.Ia.length} pending writes`),n.Ia=[]))})),n.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new _y(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _e(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yy(n,e){if(xs("AsyncQueue",`${e}: ${n}`),El(n))return new _e(ne.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{static emptySet(e){return new Jo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ve.comparator(t.key,s.key):(t,s)=>ve.comparator(t.key,s.key),this.keyedMap=Gu(),this.sortedSet=new _t(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Jo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Jo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(){this.pa=new _t(ve.comparator)}track(e){const t=e.doc.key,s=this.pa.get(t);s?e.type!==0&&s.type===3?this.pa=this.pa.insert(t,e):e.type===3&&s.type!==1?this.pa=this.pa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.pa=this.pa.remove(t):e.type===1&&s.type===2?this.pa=this.pa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):Ae(63341,{Vt:e,ya:s}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,s)=>{e.push(s)}),e}}class ul{constructor(e,t,s,a,l,c,d,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new ul(e,t,Jo.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DU{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class kU{constructor(){this.queries=oA(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=be(t),l=a.queries;a.queries=oA(),l.forEach((c,d)=>{for(const p of d.Sa)p.onError(s)})})(this,new _e(ne.ABORTED,"Firestore shutting down"))}}function oA(){return new ja(n=>Ab(n),Cd)}async function xU(n,e){const t=be(n);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.Da()&&e.va()&&(s=2):(l=new DU,s=e.va()?0:1);try{switch(s){case 0:l.ba=await t.onListen(a,!0);break;case 1:l.ba=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=yy(c,`Initialization of query '${qo(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.Sa.push(e),e.Fa(t.onlineState),l.ba&&e.Ma(l.ba)&&vy(t)}async function MU(n,e){const t=be(n),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.va()?0:1:!l.Da()&&e.va()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function PU(n,e){const t=be(n);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.Sa)d.Ma(a)&&(s=!0);c.ba=a}}s&&vy(t)}function LU(n,e,t){const s=be(n),a=s.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);s.queries.delete(e)}function vy(n){n.Ca.forEach(e=>{e.next()})}var e_,lA;(lA=e_||(e_={})).xa="default",lA.Cache="cache";class VU{constructor(e,t,s){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=s||{}}Ma(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new ul(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const s=t!=="Offline";return(!this.options.Qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=ul.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==e_.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.key=e}}class rC{constructor(e){this.key=e}}class UU{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Pe(),this.mutatedKeys=Pe(),this.Za=wb(e),this.Xa=new Jo(this.Za)}get eu(){return this.Ha}tu(e,t){const s=t?t.nu:new aA,a=t?t.Xa:this.Xa;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,T)=>{const S=a.get(y),I=Id(this.query,T)?T:null,C=!!S&&this.mutatedKeys.has(S.key),z=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let L=!1;S&&I?S.data.isEqual(I.data)?C!==z&&(s.track({type:3,doc:I}),L=!0):this.ru(S,I)||(s.track({type:2,doc:I}),L=!0,(p&&this.Za(I,p)>0||g&&this.Za(I,g)<0)&&(d=!0)):!S&&I?(s.track({type:0,doc:I}),L=!0):S&&!I&&(s.track({type:1,doc:S}),L=!0,(p||g)&&(d=!0)),L&&(I?(c=c.add(I),l=z?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),s.track({type:1,doc:y})}return{Xa:c,nu:s,Cs:d,mutatedKeys:l}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const c=e.nu.wa();c.sort((y,T)=>function(I,C){const z=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae(20277,{Vt:L})}};return z(I)-z(C)}(y.type,T.type)||this.Za(y.doc,T.doc)),this.iu(s),a=a!=null&&a;const d=t&&!a?this.su():[],p=this.Ya.size===0&&this.current&&!a?1:0,g=p!==this.Ja;return this.Ja=p,c.length!==0||g?{snapshot:new ul(this.query,e.Xa,l,c,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),ou:d}:{ou:d}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new aA,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=Pe(),this.Xa.forEach(s=>{this._u(s.key)&&(this.Ya=this.Ya.add(s.key))});const t=[];return e.forEach(s=>{this.Ya.has(s)||t.push(new rC(s))}),this.Ya.forEach(s=>{e.has(s)||t.push(new sC(s))}),t}au(e){this.Ha=e.$s,this.Ya=Pe();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return ul.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Ey="SyncEngine";class BU{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class zU{constructor(e){this.key=e,this.cu=!1}}class FU{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.lu={},this.hu=new ja(d=>Ab(d),Cd),this.Pu=new Map,this.Tu=new Set,this.Iu=new _t(ve.comparator),this.Eu=new Map,this.du=new uy,this.Au={},this.Ru=new Map,this.Vu=ll.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function HU(n,e,t=!0){const s=hC(n);let a;const l=s.hu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.uu()):a=await aC(s,e,t,!0),a}async function qU(n,e){const t=hC(n);await aC(t,e,!0,!1)}async function aC(n,e,t,s){const a=await aU(n.localStore,Bi(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await jU(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&Zb(n.remoteStore,a),d}async function jU(n,e,t,s,a){n.fu=(T,S,I)=>async function(z,L,Y,W){let te=L.view.tu(Y);te.Cs&&(te=await eA(z.localStore,L.query,!1).then(({documents:k})=>L.view.tu(k,te)));const le=W&&W.targetChanges.get(L.targetId),ce=W&&W.targetMismatches.get(L.targetId)!=null,ge=L.view.applyChanges(te,z.isPrimaryClient,le,ce);return cA(z,L.targetId,ge.ou),ge.snapshot}(n,T,S,I);const l=await eA(n.localStore,e,!0),c=new UU(e,l.$s),d=c.tu(l.documents),p=kc.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",a),g=c.applyChanges(d,n.isPrimaryClient,p);cA(n,t,g.ou);const y=new BU(e,t,c);return n.hu.set(e,y),n.Pu.has(t)?n.Pu.get(t).push(e):n.Pu.set(t,[e]),g.snapshot}async function GU(n,e,t){const s=be(n),a=s.hu.get(e),l=s.Pu.get(a.targetId);if(l.length>1)return s.Pu.set(a.targetId,l.filter(c=>!Cd(c,e))),void s.hu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Zg(s.localStore,a.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(a.targetId),t&&dy(s.remoteStore,a.targetId),t_(s,a.targetId)}).catch(vl)):(t_(s,a.targetId),await Zg(s.localStore,a.targetId,!0))}async function KU(n,e){const t=be(n),s=t.hu.get(e),a=t.Pu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),dy(t.remoteStore,s.targetId))}async function YU(n,e,t){const s=e4(n);try{const a=await function(c,d){const p=be(c),g=Bt.now(),y=d.reduce((I,C)=>I.add(C.key),Pe());let T,S;return p.persistence.runTransaction("Locally write mutations","readwrite",I=>{let C=Ms(),z=Pe();return p.Bs.getEntries(I,y).next(L=>{C=L,C.forEach((Y,W)=>{W.isValidDocument()||(z=z.add(Y))})}).next(()=>p.localDocuments.getOverlayedDocuments(I,C)).next(L=>{T=L;const Y=[];for(const W of d){const te=aV(W,T.get(W.key).overlayedDocument);te!=null&&Y.push(new Ur(W.key,te,gb(te.value.mapValue),zi.exists(!0)))}return p.mutationQueue.addMutationBatch(I,g,Y,d)}).next(L=>{S=L;const Y=L.applyToLocalDocumentSet(T,z);return p.documentOverlayCache.saveOverlays(I,L.batchId,Y)})}).then(()=>({batchId:S.batchId,changes:bb(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),function(c,d,p){let g=c.Au[c.currentUser.toKey()];g||(g=new _t(Ne)),g=g.insert(d,p),c.Au[c.currentUser.toKey()]=g}(s,a.batchId,t),await Mc(s,a.changes),await Md(s.remoteStore)}catch(a){const l=yy(a,"Failed to persist write");t.reject(l)}}async function oC(n,e){const t=be(n);try{const s=await iU(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Eu.get(l);c&&(Qe(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.cu=!0:a.modifiedDocuments.size>0?Qe(c.cu,14607):a.removedDocuments.size>0&&(Qe(c.cu,42227),c.cu=!1))}),await Mc(t,s,e)}catch(s){await vl(s)}}function uA(n,e,t){const s=be(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.hu.forEach((l,c)=>{const d=c.view.Fa(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const p=be(c);p.onlineState=d;let g=!1;p.queries.forEach((y,T)=>{for(const S of T.Sa)S.Fa(d)&&(g=!0)}),g&&vy(p)}(s.eventManager,e),a.length&&s.lu.Y_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function $U(n,e,t){const s=be(n);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Eu.get(e),l=a&&a.key;if(l){let c=new _t(ve.comparator);c=c.insert(l,dn.newNoDocument(l,Re.min()));const d=Pe().add(l),p=new Dd(Re.min(),new Map,new _t(Ne),c,d);await oC(s,p),s.Iu=s.Iu.remove(l),s.Eu.delete(e),Ty(s)}else await Zg(s.localStore,e,!1).then(()=>t_(s,e,t)).catch(vl)}async function QU(n,e){const t=be(n),s=e.batch.batchId;try{const a=await nU(t.localStore,e);uC(t,s,null),lC(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Mc(t,a)}catch(a){await vl(a)}}async function WU(n,e,t){const s=be(n);try{const a=await function(c,d){const p=be(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let y;return p.mutationQueue.lookupMutationBatch(g,d).next(T=>(Qe(T!==null,37113),y=T.keys(),p.mutationQueue.removeMutationBatch(g,T))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,y,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y)).next(()=>p.localDocuments.getDocuments(g,y))})}(s.localStore,e);uC(s,e,t),lC(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Mc(s,a)}catch(a){await vl(a)}}function lC(n,e){(n.Ru.get(e)||[]).forEach(t=>{t.resolve()}),n.Ru.delete(e)}function uC(n,e,t){const s=be(n);let a=s.Au[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Au[s.currentUser.toKey()]=a}}function t_(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Pu.get(e))n.hu.delete(s),t&&n.lu.gu(s,t);n.Pu.delete(e),n.isPrimaryClient&&n.du.Hr(e).forEach(s=>{n.du.containsKey(s)||cC(n,s)})}function cC(n,e){n.Tu.delete(e.path.canonicalString());const t=n.Iu.get(e);t!==null&&(dy(n.remoteStore,t),n.Iu=n.Iu.remove(e),n.Eu.delete(t),Ty(n))}function cA(n,e,t){for(const s of t)s instanceof sC?(n.du.addReference(s.key,e),XU(n,s)):s instanceof rC?(he(Ey,"Document no longer in limbo: "+s.key),n.du.removeReference(s.key,e),n.du.containsKey(s.key)||cC(n,s.key)):Ae(19791,{pu:s})}function XU(n,e){const t=e.key,s=t.path.canonicalString();n.Iu.get(t)||n.Tu.has(s)||(he(Ey,"New document in limbo: "+t),n.Tu.add(s),Ty(n))}function Ty(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const e=n.Tu.values().next().value;n.Tu.delete(e);const t=new ve(St.fromString(e)),s=n.Vu.next();n.Eu.set(s,new zU(t)),n.Iu=n.Iu.insert(t,s),Zb(n.remoteStore,new yr(Bi(sy(t.path)),s,"TargetPurposeLimboResolution",Ad.le))}}async function Mc(n,e,t){const s=be(n),a=[],l=[],c=[];s.hu.isEmpty()||(s.hu.forEach((d,p)=>{c.push(s.fu(p,e,t).then(g=>{var y;if((g||t)&&s.isPrimaryClient){const T=g?!g.fromCache:(y=t==null?void 0:t.targetChanges.get(p.targetId))===null||y===void 0?void 0:y.current;s.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(g){a.push(g);const T=hy.Rs(p.targetId,g);l.push(T)}}))}),await Promise.all(c),s.lu.Y_(a),await async function(p,g){const y=be(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>ee.forEach(g,S=>ee.forEach(S.ds,I=>y.persistence.referenceDelegate.addReference(T,S.targetId,I)).next(()=>ee.forEach(S.As,I=>y.persistence.referenceDelegate.removeReference(T,S.targetId,I)))))}catch(T){if(!El(T))throw T;he(fy,"Failed to update sequence numbers: "+T)}for(const T of g){const S=T.targetId;if(!T.fromCache){const I=y.xs.get(S),C=I.snapshotVersion,z=I.withLastLimboFreeSnapshotVersion(C);y.xs=y.xs.insert(S,z)}}}(s.localStore,l))}async function ZU(n,e){const t=be(n);if(!t.currentUser.isEqual(e)){he(Ey,"User change. New user:",e.toKey());const s=await $b(t.localStore,e);t.currentUser=e,function(l,c){l.Ru.forEach(d=>{d.forEach(p=>{p.reject(new _e(ne.CANCELLED,c))})}),l.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Mc(t,s.ks)}}function JU(n,e){const t=be(n),s=t.Eu.get(e);if(s&&s.cu)return Pe().add(s.key);{let a=Pe();const l=t.Pu.get(e);if(!l)return a;for(const c of l){const d=t.hu.get(c);a=a.unionWith(d.view.eu)}return a}}function hC(n){const e=be(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=oC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$U.bind(null,e),e.lu.Y_=PU.bind(null,e.eventManager),e.lu.gu=LU.bind(null,e.eventManager),e}function e4(n){const e=be(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WU.bind(null,e),e}class ad{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=kd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return tU(this.persistence,new ZV,e.initialUser,this.serializer)}Su(e){return new Yb(cy.fi,this.serializer)}bu(e){return new lU}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ad.provider={build:()=>new ad};class t4 extends ad{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){Qe(this.persistence.referenceDelegate instanceof sd,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new VV(s,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?bn.withCacheSize(this.cacheSizeBytes):bn.DEFAULT;return new Yb(s=>sd.fi(s,t),this.serializer)}}class n_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>uA(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZU.bind(null,this.syncEngine),await OU(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kU}()}createDatastore(e){const t=kd(e.databaseInfo.databaseId),s=function(l){return new dU(l)}(e.databaseInfo);return function(l,c,d,p){return new _U(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,a,l,c,d){return new vU(s,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>uA(this.syncEngine,t,0),function(){return iA.C()?new iA:new uU}())}createSyncEngine(e,t){return function(a,l,c,d,p,g,y){const T=new FU(a,l,c,d,p,g);return y&&(T.mu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=be(a);he(La,"RemoteStore shutting down."),l.da.add(5),await xc(l),l.Ra.shutdown(),l.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}n_.provider={build:()=>new n_};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):xs("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="FirestoreClient";class i4{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=cn.UNAUTHENTICATED,this.clientId=ab.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async c=>{he(xr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(s,c=>(he(xr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=yy(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function fg(n,e){n.asyncQueue.verifyOperationInProgress(),he(xr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async a=>{s.isEqual(a)||(await $b(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function hA(n,e){n.asyncQueue.verifyOperationInProgress();const t=await s4(n);he(xr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>rA(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,a)=>rA(e.remoteStore,a)),n._onlineComponents=e}async function s4(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){he(xr,"Using user provided OfflineComponentProvider");try{await fg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===ne.FAILED_PRECONDITION||a.code===ne.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;il("Error using user provided cache. Falling back to memory cache: "+t),await fg(n,new ad)}}else he(xr,"Using default OfflineComponentProvider"),await fg(n,new t4(void 0));return n._offlineComponents}async function fC(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(he(xr,"Using user provided OnlineComponentProvider"),await hA(n,n._uninitializedComponentsProvider._online)):(he(xr,"Using default OnlineComponentProvider"),await hA(n,new n_))),n._onlineComponents}function r4(n){return fC(n).then(e=>e.syncEngine)}async function a4(n){const e=await fC(n),t=e.eventManager;return t.onListen=HU.bind(null,e.syncEngine),t.onUnlisten=GU.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=qU.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=KU.bind(null,e.syncEngine),t}function o4(n,e,t={}){const s=new wr;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const y=new n4({next:S=>{y.xu(),c.enqueueAndForget(()=>MU(l,T));const I=S.docs.has(d);!I&&S.fromCache?g.reject(new _e(ne.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&S.fromCache&&p&&p.source==="server"?g.reject(new _e(ne.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),T=new VU(sy(d.path),y,{includeMetadataChanges:!0,Qa:!0});return xU(l,T)}(await a4(n),n.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l4(n,e,t){if(!t)throw new _e(ne.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function u4(n,e,t,s){if(e===!0&&s===!0)throw new _e(ne.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function dA(n){if(!ve.isDocumentKey(n))throw new _e(ne.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Sy(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ae(12329,{type:typeof n})}function Va(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new _e(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Sy(n);throw new _e(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC="firestore.googleapis.com",pA=!0;class mA{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new _e(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pC,this.ssl=pA}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:pA;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Kb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<PV)throw new _e(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}u4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dC((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new _e(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new _e(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new _e(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ay{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mA({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new _e(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new _e(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mA(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new cL;switch(s.type){case"firstParty":return new pL(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new _e(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=fA.get(t);s&&(he("ComponentProvider","Removing Datastore"),fA.delete(t),s.terminate())}(this),Promise.resolve()}}function c4(n,e,t,s={}){var a;n=Va(n,Ay);const l=Mr(e),c=n._getSettings(),d=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;l&&(p_(`https://${p}`),m_("Firestore",!0)),c.host!==pC&&c.host!==p&&il("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:p,ssl:l,emulatorOptions:s});if(!Rr(g,d)&&(n._setSettings(g),s.mockUserToken)){let y,T;if(typeof s.mockUserToken=="string")y=s.mockUserToken,T=cn.MOCK_USER;else{y=ZA(s.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new _e(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new cn(S)}n._authCredentials=new hL(new sb(y,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new wy(this.firestore,e,this._query)}}class Fn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _c(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fn(this.firestore,e,this._key)}}class _c extends wy{constructor(e,t,s){super(e,t,sy(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fn(this.firestore,null,new ve(e))}withConverter(e){return new _c(this.firestore,e,this._path)}}function h4(n,e,...t){if(n=ot(n),arguments.length===1&&(e=ab.newId()),l4("doc","path",e),n instanceof Ay){const s=St.fromString(e,...t);return dA(s),new Fn(n,null,new ve(s))}{if(!(n instanceof Fn||n instanceof _c))throw new _e(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(St.fromString(e,...t));return dA(s),new Fn(n.firestore,n instanceof _c?n.converter:null,new ve(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA="AsyncQueue";class _A{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Wb(this,"async_queue_retry"),this.rc=()=>{const s=hg();s&&he(gA,"Visibility state changed to "+s.visibilityState),this.x_.b_()},this.sc=e;const t=hg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=hg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new wr;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!El(e))throw e;he(gA,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(s=>{throw this.Xu=s,this.ec=!1,xs("INTERNAL UNHANDLED ERROR: ",yA(s)),s}).then(s=>(this.ec=!1,s))));return this.sc=t,t}enqueueAfterDelay(e,t,s){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const a=_y.createAndSchedule(this,e,t,s,l=>this.uc(l));return this.Zu.push(a),a}oc(){this.Xu&&Ae(47125,{cc:yA(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function yA(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Pd extends Ay{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new _A,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _A(e),this._firestoreClient=void 0,await e}}}function f4(n,e){const t=typeof n=="object"?n:v_(),s=typeof n=="string"?n:Xf,a=pd(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=QA("firestore");l&&c4(a,...l)}return a}function mC(n){if(n._terminated)throw new _e(ne.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||d4(n),n._firestoreClient}function d4(n){var e,t,s;const a=n._freezeSettings(),l=function(d,p,g,y){return new NL(d,p,g,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,dC(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new i4(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cl(rn.fromBase64String(e))}catch(t){throw new _e(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new cl(rn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new _e(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new sn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new _e(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new _e(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p4=/^__.*__$/;class m4{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ur(e,this.data,this.fieldMask,t,this.fieldTransforms):new Dc(e,this.data,t,this.fieldTransforms)}}class gC{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ur(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function _C(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae(40011,{Ic:n})}}class Ud{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Ec(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new Ud(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.dc({path:s,Rc:!1});return a.Vc(e),a}mc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.dc({path:s,Rc:!1});return a.Ec(),a}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return od(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(_C(this.Ic)&&p4.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class g4{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||kd(e)}bc(e,t,s,a=!1){return new Ud({Ic:e,methodName:t,wc:s,path:sn.emptyPath(),Rc:!1,yc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yC(n){const e=n._freezeSettings(),t=kd(n._databaseId);return new g4(n._databaseId,!!e.ignoreUndefinedProperties,t)}function _4(n,e,t,s,a,l={}){const c=n.bc(l.merge||l.mergeFields?2:0,e,t,a);Iy("Data must be an object, but it was:",c,s);const d=vC(s,c);let p,g;if(l.merge)p=new Bn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const T of l.mergeFields){const S=i_(e,T,t);if(!c.contains(S))throw new _e(ne.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);TC(y,S)||y.push(S)}p=new Bn(y),g=c.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,g=c.fieldTransforms;return new m4(new In(d),p,g)}class Bd extends Vd{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bd}}function y4(n,e,t){return new Ud({Ic:3,wc:e.settings.wc,methodName:n._methodName,Rc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Cy extends Vd{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){const t=y4(this,e,!0),s=this.Sc.map(l=>Pc(l,t)),a=new ol(s);return new nV(e.path,a)}isEqual(e){return e instanceof Cy&&Rr(this.Sc,e.Sc)}}function v4(n,e,t,s){const a=n.bc(1,e,t);Iy("Data must be an object, but it was:",a,s);const l=[],c=In.empty();Vr(s,(p,g)=>{const y=Ny(e,p,t);g=ot(g);const T=a.mc(y);if(g instanceof Bd)l.push(y);else{const S=Pc(g,T);S!=null&&(l.push(y),c.set(y,S))}});const d=new Bn(l);return new gC(c,d,a.fieldTransforms)}function E4(n,e,t,s,a,l){const c=n.bc(1,e,t),d=[i_(e,s,t)],p=[a];if(l.length%2!=0)throw new _e(ne.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)d.push(i_(e,l[S])),p.push(l[S+1]);const g=[],y=In.empty();for(let S=d.length-1;S>=0;--S)if(!TC(g,d[S])){const I=d[S];let C=p[S];C=ot(C);const z=c.mc(I);if(C instanceof Bd)g.push(I);else{const L=Pc(C,z);L!=null&&(g.push(I),y.set(I,L))}}const T=new Bn(g);return new gC(y,T,c.fieldTransforms)}function Pc(n,e){if(EC(n=ot(n)))return Iy("Unsupported field value:",e,n),vC(n,e);if(n instanceof Vd)return function(s,a){if(!_C(a.Ic))throw a.gc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.gc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(s,a){const l=[];let c=0;for(const d of s){let p=Pc(d,a.fc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(n,e)}return function(s,a){if((s=ot(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return JL(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Bt.fromDate(s);return{timestampValue:id(a.serializer,l)}}if(s instanceof Bt){const l=new Bt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:id(a.serializer,l)}}if(s instanceof Ry)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof cl)return{bytesValue:Bb(a.serializer,s._byteString)};if(s instanceof Fn){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.gc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:ly(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof by)return function(c,d){return{mapValue:{fields:{[pb]:{stringValue:mb},[Zf]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.gc("VectorValues must only contain numeric values.");return ry(d.serializer,g)})}}}}}}(s,a);throw a.gc(`Unsupported field value: ${Sy(s)}`)}(n,e)}function vC(n,e){const t={};return lb(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vr(n,(s,a)=>{const l=Pc(a,e.Ac(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function EC(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Bt||n instanceof Ry||n instanceof cl||n instanceof Fn||n instanceof Vd||n instanceof by)}function Iy(n,e,t){if(!EC(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const s=Sy(t);throw s==="an object"?e.gc(n+" a custom object"):e.gc(n+" "+s)}}function i_(n,e,t){if((e=ot(e))instanceof Ld)return e._internalPath;if(typeof e=="string")return Ny(n,e);throw od("Field path arguments must be of type string or ",n,!1,void 0,t)}const T4=new RegExp("[~\\*/\\[\\]]");function Ny(n,e,t){if(e.search(T4)>=0)throw od(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ld(...e.split("."))._internalPath}catch{throw od(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function od(n,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${s}`),c&&(p+=` in document ${a}`),p+=")"),new _e(ne.INVALID_ARGUMENT,d+n+p)}function TC(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Fn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new S4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(AC("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class S4 extends SC{data(){return super.data()}}function AC(n,e){return typeof e=="string"?Ny(n,e):e instanceof Ld?e._internalPath:e._delegate._internalPath}class A4{convertValue(e,t="none"){switch(Dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return bt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Vr(e,(a,l)=>{s[a]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,a;const l=(a=(s=(t=e.fields)===null||t===void 0?void 0:t[Zf].arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map(c=>bt(c.doubleValue));return new by(l)}convertGeoPoint(e){return new Ry(bt(e.latitude),bt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Rd(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(dc(e));default:return null}}convertTimestamp(e){const t=Nr(e);return new Bt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=St.fromString(e);Qe(Gb(s),9688,{name:e});const a=new pc(s.get(1),s.get(3)),l=new ve(s.popFirst(5));return a.isEqual(t)||xs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w4(n,e,t){let s;return s=n?n.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wC extends SC{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new b4(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(AC("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class b4 extends wC{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C4(n){n=Va(n,Fn);const e=Va(n.firestore,Pd);return o4(mC(e),n._key).then(t=>N4(e,n,t))}class I4 extends A4{constructor(e){super(),this.firestore=e}convertBytes(e){return new cl(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Fn(this.firestore,null,t)}}function w3(n,e,t){n=Va(n,Fn);const s=Va(n.firestore,Pd),a=w4(n.converter,e);return RC(s,[_4(yC(s),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,zi.none())])}function R3(n,e,t,...s){n=Va(n,Fn);const a=Va(n.firestore,Pd),l=yC(a);let c;return c=typeof(e=ot(e))=="string"||e instanceof Ld?E4(l,"updateDoc",n._key,e,t,s):v4(l,"updateDoc",n._key,e),RC(a,[c.toMutation(n._key,zi.exists(!0))])}function RC(n,e){return function(s,a){const l=new wr;return s.asyncQueue.enqueueAndForget(async()=>YU(await r4(s),a,l)),l.promise}(mC(n),e)}function N4(n,e,t){const s=t.docs.get(e._key),a=new I4(n);return new wC(n,a,e._key,s,new R4(t.hasPendingWrites,t.fromCache),e.converter)}function b3(...n){return new Cy("arrayUnion",n)}(function(e,t=!0){(function(a){yl=a})(Pr),br(new Os("firestore",(s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new Pd(new fL(s.getProvider("auth-internal")),new mL(c,s.getProvider("app-check-internal")),function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new _e(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pc(g.options.projectId,y)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),ni(wS,RS,e),ni(wS,RS,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC="firebasestorage.googleapis.com",CC="storageBucket",O4=2*60*1e3,D4=10*60*1e3,k4=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Ki{constructor(e,t,s=0){super(dg(e),`Firebase Storage: ${t} (${dg(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,yt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return dg(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ht;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ht||(ht={}));function dg(n){return"storage/"+n}function Oy(){const n="An unknown error occurred, please check the error payload for server response.";return new yt(ht.UNKNOWN,n)}function x4(n){return new yt(ht.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function M4(n){return new yt(ht.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function P4(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new yt(ht.UNAUTHENTICATED,n)}function L4(){return new yt(ht.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function V4(n){return new yt(ht.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function IC(){return new yt(ht.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function NC(){return new yt(ht.CANCELED,"User canceled the upload/download.")}function U4(n){return new yt(ht.INVALID_URL,"Invalid URL '"+n+"'.")}function B4(n){return new yt(ht.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function z4(){return new yt(ht.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+CC+"' property when initializing the app?")}function OC(){return new yt(ht.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function F4(){return new yt(ht.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function H4(){return new yt(ht.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function q4(n){return new yt(ht.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function s_(n){return new yt(ht.INVALID_ARGUMENT,n)}function DC(){return new yt(ht.APP_DELETED,"The Firebase app was deleted.")}function j4(n){return new yt(ht.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ic(n,e){return new yt(ht.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Bu(n){throw new yt(ht.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=Sn.makeFromUrl(e,t)}catch{return new Sn(e,"")}if(s.path==="")return s;throw B4(e)}static makeFromUrl(e,t){let s=null;const a="([A-Za-z0-9.\\-_]+)";function l(le){le.path.charAt(le.path.length-1)==="/"&&(le.path_=le.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+a+c,"i"),p={bucket:1,path:3};function g(le){le.path_=decodeURIComponent(le.path)}const y="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",I=new RegExp(`^https?://${T}/${y}/b/${a}/o${S}`,"i"),C={bucket:1,path:3},z=t===bC?"(?:storage.googleapis.com|storage.cloud.google.com)":t,L="([^?#]*)",Y=new RegExp(`^https?://${z}/${a}/${L}`,"i"),te=[{regex:d,indices:p,postModify:l},{regex:I,indices:C,postModify:g},{regex:Y,indices:{bucket:1,path:2},postModify:g}];for(let le=0;le<te.length;le++){const ce=te[le],ge=ce.regex.exec(e);if(ge){const k=ge[ce.indices.bucket];let R=ge[ce.indices.path];R||(R=""),s=new Sn(k,R),ce.postModify(s);break}}if(s==null)throw U4(e);return s}}class G4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K4(n,e,t){let s=1,a=null,l=null,c=!1,d=0;function p(){return d===2}let g=!1;function y(...L){g||(g=!0,e.apply(null,L))}function T(L){a=setTimeout(()=>{a=null,n(I,p())},L)}function S(){l&&clearTimeout(l)}function I(L,...Y){if(g){S();return}if(L){S(),y.call(null,L,...Y);return}if(p()||c){S(),y.call(null,L,...Y);return}s<64&&(s*=2);let te;d===1?(d=2,te=0):te=(s+Math.random())*1e3,T(te)}let C=!1;function z(L){C||(C=!0,S(),!g&&(a!==null?(L||(d=2),clearTimeout(a),T(0)):L||(d=1)))}return T(0),l=setTimeout(()=>{c=!0,z(!0)},t),z}function Y4(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $4(n){return n!==void 0}function Q4(n){return typeof n=="function"}function W4(n){return typeof n=="object"&&!Array.isArray(n)}function zd(n){return typeof n=="string"||n instanceof String}function vA(n){return Dy()&&n instanceof Blob}function Dy(){return typeof Blob<"u"}function r_(n,e,t,s){if(s<e)throw s_(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw s_(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function kC(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const a=e(s)+"="+e(n[s]);t=t+a+"&"}return t=t.slice(0,-1),t}var Ia;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ia||(Ia={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(n,e){const t=n>=500&&n<600,a=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||a||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X4{constructor(e,t,s,a,l,c,d,p,g,y,T,S=!0,I=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=a,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=p,this.timeout_=g,this.progressCallback_=y,this.connectionFactory_=T,this.retry=S,this.isUsingEmulator=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,z)=>{this.resolve_=C,this.reject_=z,this.start_()})}start_(){const e=(s,a)=>{if(a){s(!1,new _f(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const p=d.loaded,g=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,g)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===Ia.NO_ERROR,p=l.getStatus();if(!d||xC(p,this.additionalRetryCodes_)&&this.retry){const y=l.getErrorCode()===Ia.ABORT;s(!1,new _f(!1,null,y));return}const g=this.successCodes_.indexOf(p)!==-1;s(!0,new _f(g,l))})},t=(s,a)=>{const l=this.resolve_,c=this.reject_,d=a.connection;if(a.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());$4(p)?l(p):l()}catch(p){c(p)}else if(d!==null){const p=Oy();p.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,p)):c(p)}else if(a.canceled){const p=this.appDelete_?DC():NC();c(p)}else{const p=IC();c(p)}};this.canceled_?t(!1,new _f(!1,null,!0)):this.backoffId_=K4(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Y4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _f{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function Z4(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function J4(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function e6(n,e){e&&(n["X-Firebase-GMPID"]=e)}function t6(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function n6(n,e,t,s,a,l,c=!0,d=!1){const p=kC(n.urlParams),g=n.url+p,y=Object.assign({},n.headers);return e6(y,e),Z4(y,t),J4(y,l),t6(y,s),new X4(g,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,a,c,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i6(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function s6(...n){const e=i6();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(Dy())return new Blob(n);throw new yt(ht.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function r6(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a6(n){if(typeof atob>"u")throw q4("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class pg{constructor(e,t){this.data=e,this.contentType=t||null}}function o6(n,e){switch(n){case Vi.RAW:return new pg(MC(e));case Vi.BASE64:case Vi.BASE64URL:return new pg(PC(n,e));case Vi.DATA_URL:return new pg(u6(e),c6(e))}throw Oy()}function MC(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=s,c=n.charCodeAt(++t);s=65536|(l&1023)<<10|c&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function l6(n){let e;try{e=decodeURIComponent(n)}catch{throw ic(Vi.DATA_URL,"Malformed data URL.")}return MC(e)}function PC(n,e){switch(n){case Vi.BASE64:{const a=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(a||l)throw ic(n,"Invalid character '"+(a?"-":"_")+"' found: is it base64url encoded?");break}case Vi.BASE64URL:{const a=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(a||l)throw ic(n,"Invalid character '"+(a?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=a6(e)}catch(a){throw a.message.includes("polyfill")?a:ic(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}class LC{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ic(Vi.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=h6(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function u6(n){const e=new LC(n);return e.base64?PC(Vi.BASE64,e.rest):l6(e.rest)}function c6(n){return new LC(n).contentType}function h6(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t){let s=0,a="";vA(e)?(this.data_=e,s=e.size,a=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=a}size(){return this.size_}type(){return this.type_}slice(e,t){if(vA(this.data_)){const s=this.data_,a=r6(s,e,t);return a===null?null:new Ts(a)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new Ts(s,!0)}}static getBlob(...e){if(Dy()){const t=e.map(s=>s instanceof Ts?s.data_:s);return new Ts(s6.apply(null,t))}else{const t=e.map(c=>zd(c)?o6(Vi.RAW,c).data:c.data_);let s=0;t.forEach(c=>{s+=c.byteLength});const a=new Uint8Array(s);let l=0;return t.forEach(c=>{for(let d=0;d<c.length;d++)a[l++]=c[d]}),new Ts(a,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(n){let e;try{e=JSON.parse(n)}catch{return null}return W4(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f6(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function d6(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function VC(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p6(n,e){return e}class En{constructor(e,t,s,a){this.server=e,this.local=t||e,this.writable=!!s,this.xform=a||p6}}let yf=null;function m6(n){return!zd(n)||n.length<2?n:VC(n)}function xy(){if(yf)return yf;const n=[];n.push(new En("bucket")),n.push(new En("generation")),n.push(new En("metageneration")),n.push(new En("name","fullPath",!0));function e(l,c){return m6(c)}const t=new En("name");t.xform=e,n.push(t);function s(l,c){return c!==void 0?Number(c):c}const a=new En("size");return a.xform=s,n.push(a),n.push(new En("timeCreated")),n.push(new En("updated")),n.push(new En("md5Hash",null,!0)),n.push(new En("cacheControl",null,!0)),n.push(new En("contentDisposition",null,!0)),n.push(new En("contentEncoding",null,!0)),n.push(new En("contentLanguage",null,!0)),n.push(new En("contentType",null,!0)),n.push(new En("metadata","customMetadata",!0)),yf=n,yf}function g6(n,e){function t(){const s=n.bucket,a=n.fullPath,l=new Sn(s,a);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function _6(n,e,t){const s={};s.type="file";const a=t.length;for(let l=0;l<a;l++){const c=t[l];s[c.local]=c.xform(s,e[c.server])}return g6(s,n),s}function UC(n,e,t){const s=ky(e);return s===null?null:_6(n,s,t)}function y6(n,e,t,s){const a=ky(e);if(a===null||!zd(a.downloadTokens))return null;const l=a.downloadTokens;if(l.length===0)return null;const c=encodeURIComponent;return l.split(",").map(g=>{const y=n.bucket,T=n.fullPath,S="/b/"+c(y)+"/o/"+c(T),I=Ka(S,t,s),C=kC({alt:"media",token:g});return I+C})[0]}function BC(n,e){const t={},s=e.length;for(let a=0;a<s;a++){const l=e[a];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA="prefixes",TA="items";function v6(n,e,t){const s={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[EA])for(const a of t[EA]){const l=a.replace(/\/$/,""),c=n._makeStorageReference(new Sn(e,l));s.prefixes.push(c)}if(t[TA])for(const a of t[TA]){const l=n._makeStorageReference(new Sn(e,a.name));s.items.push(l)}return s}function E6(n,e,t){const s=ky(t);return s===null?null:v6(n,e,s)}class Br{constructor(e,t,s,a){this.url=e,this.method=t,this.handler=s,this.timeout=a,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(n){if(!n)throw Oy()}function My(n,e){function t(s,a){const l=UC(n,a,e);return Hi(l!==null),l}return t}function T6(n,e){function t(s,a){const l=E6(n,e,a);return Hi(l!==null),l}return t}function S6(n,e){function t(s,a){const l=UC(n,a,e);return Hi(l!==null),y6(l,a,n.host,n._protocol)}return t}function Sl(n){function e(t,s){let a;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?a=L4():a=P4():t.getStatus()===402?a=M4(n.bucket):t.getStatus()===403?a=V4(n.path):a=s,a.status=t.getStatus(),a.serverResponse=s.serverResponse,a}return e}function Py(n){const e=Sl(n);function t(s,a){let l=e(s,a);return s.getStatus()===404&&(l=x4(n.path)),l.serverResponse=a.serverResponse,l}return t}function A6(n,e,t){const s=e.fullServerUrl(),a=Ka(s,n.host,n._protocol),l="GET",c=n.maxOperationRetryTime,d=new Br(a,l,My(n,t),c);return d.errorHandler=Py(e),d}function w6(n,e,t,s,a){const l={};e.isRoot?l.prefix="":l.prefix=e.path+"/",t.length>0&&(l.delimiter=t),s&&(l.pageToken=s),a&&(l.maxResults=a);const c=e.bucketOnlyServerUrl(),d=Ka(c,n.host,n._protocol),p="GET",g=n.maxOperationRetryTime,y=new Br(d,p,T6(n,e.bucket),g);return y.urlParams=l,y.errorHandler=Sl(e),y}function R6(n,e,t){const s=e.fullServerUrl(),a=Ka(s,n.host,n._protocol),l="GET",c=n.maxOperationRetryTime,d=new Br(a,l,S6(n,t),c);return d.errorHandler=Py(e),d}function b6(n,e){const t=e.fullServerUrl(),s=Ka(t,n.host,n._protocol),a="DELETE",l=n.maxOperationRetryTime;function c(p,g){}const d=new Br(s,a,c,l);return d.successCodes=[200,204],d.errorHandler=Py(e),d}function C6(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function zC(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=C6(null,e)),s}function FC(n,e,t,s,a){const l=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function d(){let te="";for(let le=0;le<2;le++)te=te+Math.random().toString().slice(2);return te}const p=d();c["Content-Type"]="multipart/related; boundary="+p;const g=zC(e,s,a),y=BC(g,t),T="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+y+`\r
--`+p+`\r
Content-Type: `+g.contentType+`\r
\r
`,S=`\r
--`+p+"--",I=Ts.getBlob(T,s,S);if(I===null)throw OC();const C={name:g.fullPath},z=Ka(l,n.host,n._protocol),L="POST",Y=n.maxUploadRetryTime,W=new Br(z,L,My(n,t),Y);return W.urlParams=C,W.headers=c,W.body=I.uploadData(),W.errorHandler=Sl(e),W}class ld{constructor(e,t,s,a){this.current=e,this.total=t,this.finalized=!!s,this.metadata=a||null}}function Ly(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{Hi(!1)}return Hi(!!t&&(e||["active"]).indexOf(t)!==-1),t}function I6(n,e,t,s,a){const l=e.bucketOnlyServerUrl(),c=zC(e,s,a),d={name:c.fullPath},p=Ka(l,n.host,n._protocol),g="POST",y={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":c.contentType,"Content-Type":"application/json; charset=utf-8"},T=BC(c,t),S=n.maxUploadRetryTime;function I(z){Ly(z);let L;try{L=z.getResponseHeader("X-Goog-Upload-URL")}catch{Hi(!1)}return Hi(zd(L)),L}const C=new Br(p,g,I,S);return C.urlParams=d,C.headers=y,C.body=T,C.errorHandler=Sl(e),C}function N6(n,e,t,s){const a={"X-Goog-Upload-Command":"query"};function l(g){const y=Ly(g,["active","final"]);let T=null;try{T=g.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Hi(!1)}T||Hi(!1);const S=Number(T);return Hi(!isNaN(S)),new ld(S,s.size(),y==="final")}const c="POST",d=n.maxUploadRetryTime,p=new Br(t,c,l,d);return p.headers=a,p.errorHandler=Sl(e),p}const SA=256*1024;function O6(n,e,t,s,a,l,c,d){const p=new ld(0,0);if(c?(p.current=c.current,p.total=c.total):(p.current=0,p.total=s.size()),s.size()!==p.total)throw F4();const g=p.total-p.current;let y=g;a>0&&(y=Math.min(y,a));const T=p.current,S=T+y;let I="";y===0?I="finalize":g===y?I="upload, finalize":I="upload";const C={"X-Goog-Upload-Command":I,"X-Goog-Upload-Offset":`${p.current}`},z=s.slice(T,S);if(z===null)throw OC();function L(le,ce){const ge=Ly(le,["active","final"]),k=p.current+y,R=s.size();let b;return ge==="final"?b=My(e,l)(le,ce):b=null,new ld(k,R,ge==="final",b)}const Y="POST",W=e.maxUploadRetryTime,te=new Br(t,Y,L,W);return te.headers=C,te.body=z.uploadData(),te.progressCallback=d||null,te.errorHandler=Sl(n),te}const Cn={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function mg(n){switch(n){case"running":case"pausing":case"canceling":return Cn.RUNNING;case"paused":return Cn.PAUSED;case"success":return Cn.SUCCESS;case"canceled":return Cn.CANCELED;case"error":return Cn.ERROR;default:return Cn.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D6{constructor(e,t,s){if(Q4(e)||t!=null||s!=null)this.next=e,this.error=t??void 0,this.complete=s??void 0;else{const l=e;this.next=l.next,this.error=l.error,this.complete=l.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class k6{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ia.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ia.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ia.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,a,l){if(this.sent_)throw Bu("cannot .send() more than once");if(Mr(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),l!==void 0)for(const c in l)l.hasOwnProperty(c)&&this.xhr_.setRequestHeader(c,l[c].toString());return a!==void 0?this.xhr_.send(a):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Bu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Bu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Bu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Bu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class x6 extends k6{initXhr(){this.xhr_.responseType="text"}}function Ss(){return new x6}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M6{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=s,this._mappings=xy(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=a=>{if(this._request=void 0,this._chunkMultiplier=1,a._codeEquals(ht.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const l=this.isExponentialBackoffExpired();if(xC(a.status,[]))if(l)a=IC();else{this.sleepTime=Math.max(this.sleepTime*2,k4),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=a,this._transition("error")}},this._metadataErrorHandler=a=>{this._request=void 0,a._codeEquals(ht.CANCELED)?this.completeTransitions_():(this._error=a,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((a,l)=>{this._resolve=a,this._reject=l,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,s])=>{switch(this._state){case"running":e(t,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const s=I6(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),a=this._ref.storage._makeRequest(s,Ss,e,t);this._request=a,a.getPromise().then(l=>{this._request=void 0,this._uploadUrl=l,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,s)=>{const a=N6(this._ref.storage,this._ref._location,e,this._blob),l=this._ref.storage._makeRequest(a,Ss,t,s);this._request=l,l.getPromise().then(c=>{c=c,this._request=void 0,this._updateProgress(c.current),this._needToFetchStatus=!1,c.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=SA*this._chunkMultiplier,t=new ld(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((a,l)=>{let c;try{c=O6(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(p){this._error=p,this._transition("error");return}const d=this._ref.storage._makeRequest(c,Ss,a,l,!1);this._request=d,d.getPromise().then(p=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(p.current),p.finalized?(this._metadata=p.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){SA*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const s=A6(this._ref.storage,this._ref._location,this._mappings),a=this._ref.storage._makeRequest(s,Ss,e,t);this._request=a,a.getPromise().then(l=>{this._request=void 0,this._metadata=l,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const s=FC(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),a=this._ref.storage._makeRequest(s,Ss,e,t);this._request=a,a.getPromise().then(l=>{this._request=void 0,this._metadata=l,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=NC(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=mg(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,s,a){const l=new D6(t||void 0,s||void 0,a||void 0);return this._addObserver(l),()=>{this._removeObserver(l)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(mg(this._state)){case Cn.SUCCESS:Fo(this._resolve.bind(null,this.snapshot))();break;case Cn.CANCELED:case Cn.ERROR:const t=this._reject;Fo(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(mg(this._state)){case Cn.RUNNING:case Cn.PAUSED:e.next&&Fo(e.next.bind(e,this.snapshot))();break;case Cn.SUCCESS:e.complete&&Fo(e.complete.bind(e))();break;case Cn.CANCELED:case Cn.ERROR:e.error&&Fo(e.error.bind(e,this._error))();break;default:e.error&&Fo(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t){this._service=e,t instanceof Sn?this._location=t:this._location=Sn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ua(e,t)}get root(){const e=new Sn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return VC(this._location.path)}get storage(){return this._service}get parent(){const e=f6(this._location.path);if(e===null)return null;const t=new Sn(this._location.bucket,e);return new Ua(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw j4(e)}}function P6(n,e,t){n._throwIfRoot("uploadBytes");const s=FC(n.storage,n._location,xy(),new Ts(e,!0),t);return n.storage.makeRequestWithTokens(s,Ss).then(a=>({metadata:a,ref:n}))}function L6(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new M6(n,new Ts(e),t)}function V6(n){const e={prefixes:[],items:[]};return HC(n,e).then(()=>e)}async function HC(n,e,t){const a=await U6(n,{pageToken:t});e.prefixes.push(...a.prefixes),e.items.push(...a.items),a.nextPageToken!=null&&await HC(n,e,a.nextPageToken)}function U6(n,e){e!=null&&typeof e.maxResults=="number"&&r_("options.maxResults",1,1e3,e.maxResults);const t=e||{},s=w6(n.storage,n._location,"/",t.pageToken,t.maxResults);return n.storage.makeRequestWithTokens(s,Ss)}function B6(n){n._throwIfRoot("getDownloadURL");const e=R6(n.storage,n._location,xy());return n.storage.makeRequestWithTokens(e,Ss).then(t=>{if(t===null)throw H4();return t})}function z6(n){n._throwIfRoot("deleteObject");const e=b6(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Ss)}function F6(n,e){const t=d6(n._location.path,e),s=new Sn(n._location.bucket,t);return new Ua(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H6(n){return/^[A-Za-z]+:\/\//.test(n)}function q6(n,e){return new Ua(n,e)}function qC(n,e){if(n instanceof Vy){const t=n;if(t._bucket==null)throw z4();const s=new Ua(t,t._bucket);return e!=null?qC(s,e):s}else return e!==void 0?F6(n,e):n}function j6(n,e){if(e&&H6(e)){if(n instanceof Vy)return q6(n,e);throw s_("To use ref(service, url), the first argument must be a Storage instance.")}else return qC(n,e)}function AA(n,e){const t=e==null?void 0:e[CC];return t==null?null:Sn.makeFromBucketSpec(t,n)}function G6(n,e,t,s={}){n.host=`${e}:${t}`;const a=Mr(e);a&&(p_(`https://${n.host}/b`),m_("Storage",!0)),n._isUsingEmulator=!0,n._protocol=a?"https":"http";const{mockUserToken:l}=s;l&&(n._overrideAuthToken=typeof l=="string"?l:ZA(l,n.app.options.projectId))}class Vy{constructor(e,t,s,a,l,c=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=a,this._firebaseVersion=l,this._isUsingEmulator=c,this._bucket=null,this._host=bC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=O4,this._maxUploadRetryTime=D4,this._requests=new Set,a!=null?this._bucket=Sn.makeFromBucketSpec(a,this._host):this._bucket=AA(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Sn.makeFromBucketSpec(this._url,e):this._bucket=AA(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){r_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){r_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ua(this,e)}_makeRequest(e,t,s,a,l=!0){if(this._deleted)return new G4(DC());{const c=n6(e,this._appId,s,a,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[s,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,a).getPromise()}}const wA="@firebase/storage",RA="0.13.13";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC="storage";function C3(n,e,t){return n=ot(n),P6(n,e,t)}function I3(n,e,t){return n=ot(n),L6(n,e,t)}function N3(n){return n=ot(n),V6(n)}function O3(n){return n=ot(n),B6(n)}function D3(n){return n=ot(n),z6(n)}function k3(n,e){return n=ot(n),j6(n,e)}function K6(n=v_(),e){n=ot(n);const s=pd(n,jC).getImmediate({identifier:e}),a=QA("storage");return a&&Y6(s,...a),s}function Y6(n,e,t,s={}){G6(n,e,t,s)}function $6(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),a=n.getProvider("app-check-internal");return new Vy(t,s,a,e,Pr)}function Q6(){br(new Os(jC,$6,"PUBLIC").setMultipleInstances(!0)),ni(wA,RA,""),ni(wA,RA,"esm2017")}Q6();const W6={apiKey:"AIzaSyDWN5GCnrhUqKZlOt8Rxb0n748lhPf9B58",authDomain:"to-do-list-9cf11.firebaseapp.com",databaseURL:"https://to-do-list-9cf11-default-rtdb.firebaseio.com",projectId:"to-do-list-9cf11",storageBucket:"to-do-list-9cf11.firebasestorage.app",messagingSenderId:"44862500438",appId:"1:44862500438:web:ccb0f012d9c8e7cfe215f7",measurementId:"G-HB8NT8L1FD"},X6={apiKey:"AIzaSyC_SdildU9oD7BID8i4GdReOYM0_qlguN0",authDomain:"databased-react.firebaseapp.com",databaseURL:"https://databased-react-default-rtdb.firebaseio.com",projectId:"databased-react",storageBucket:"databased-react.appspot.com",messagingSenderId:"82890993147",appId:"1:82890993147:web:77b68d26108894eeeaef5e",measurementId:"G-Y0JTK4KL1P"},GC=y_(W6,"FIRST_APP"),Z6=f4(GC),KC=Tx(GC),x3=new vs,M3=new Es,J6=y_(X6,"SECOND_APP"),P3=K6(J6),e3="_Signing_Out_Wrapper_1ge6g_3",t3="_Hide_Signing_Out_Wrapper_1ge6g_3",n3="_Signing_Out_Box_1ge6g_24",i3="_Top_1ge6g_38",s3="_Options_1ge6g_83",zu={Signing_Out_Wrapper:e3,Hide_Signing_Out_Wrapper:t3,Signing_Out_Box:n3,Top:i3,Options:s3},r3=()=>{const{isSigningOut:n,setIsSigningOut:e,setLoading:t,setUser:s,userData:a,setTasksCache:l,setFoldersCache:c}=K.useContext(Lc),d=async()=>{t(!0);try{await hk(KC),s(null),t(!1),e(!1),l([]),c([])}catch(p){t(!1),e(!1),console.log(p)}};if(n)return se.jsx("div",{className:n?zu.Signing_Out_Wrapper:zu.Hide_Signing_Out_Wrapper,children:se.jsxs("div",{className:zu.Signing_Out_Box,children:[se.jsxs("div",{className:zu.Top,children:[a!=null&&a.profPic?se.jsx("div",{style:{backgroundImage:`url(${a.profPic})`}}):se.jsx("i",{className:"fa fa-user"}),se.jsx("h3",{children:"Would You Like To Sign Out?"})]}),se.jsxs("div",{className:zu.Options,children:[se.jsx(vg,{content:"No",func:()=>{e(!1)}}),se.jsx(vg,{content:"Yes",func:()=>{d()}})]})]})})},a3="_makeUserSignInWrapper_k8p8e_1",o3="_hideMakeUserSignInWrapper_k8p8e_2",l3="_makeUserSignInBox_k8p8e_23",u3="_Images_k8p8e_48",c3="_Buttons_k8p8e_82",h3="_hidePromptButton_k8p8e_105",mr={makeUserSignInWrapper:a3,hideMakeUserSignInWrapper:o3,makeUserSignInBox:l3,Images:u3,Buttons:c3,hidePromptButton:h3},f3=()=>{const{showMakeUserSignIn:n,setShowMakeUserSignIn:e,user:t,pagination:s}=K.useContext(Lc);return se.jsx(se.Fragment,{children:se.jsx("div",{className:n&&!t?mr.makeUserSignInWrapper:mr.hideMakeUserSignInWrapper,children:se.jsxs("div",{className:mr.makeUserSignInBox,children:[se.jsx(vr,{className:mr.hidePromptButton,to:"/",onClick:()=>{s(0),e(!1)},children:se.jsx("i",{className:"fa fa-close"})}),se.jsxs("div",{className:mr.Images,children:[se.jsx("img",{src:"./cat.png"}),se.jsx("img",{src:"./!.png"})]}),se.jsx("h1",{children:"You're not Signed In !"}),se.jsx("p",{children:"Create an account, log in and get free access to the advanced To-Do List Web Application"}),se.jsxs("div",{className:mr.Buttons,children:[se.jsx(vr,{className:mr.Links,to:"/SignUp",onClick:()=>{e(!1)},children:"Sign Up"}),se.jsx(vr,{className:mr.Links,to:"/SignIn",onClick:()=>{e(!1)},children:"Sign In"})]})]})})})},YC=K.lazy(()=>Ba(()=>import("./Home-Bm3uly3J.js"),__vite__mapDeps([0,1]))),$C=K.lazy(()=>Ba(()=>import("./Tasks-DTy1rYWU.js"),__vite__mapDeps([2,3]))),QC=K.lazy(()=>Ba(()=>import("./Folders-DVKepaCh.js"),__vite__mapDeps([4,5]))),WC=K.lazy(()=>Ba(()=>import("./About-BvB3aXTn.js"),__vite__mapDeps([6,7]))),d3=K.lazy(()=>Ba(()=>import("./Dashboard-B2g2QRSu.js"),__vite__mapDeps([8,9]))),p3=K.lazy(()=>Ba(()=>import("./SignIn-CKhTI9rP.js"),__vite__mapDeps([10,11]))),m3=K.lazy(()=>Ba(()=>import("./SignUp-CNExg1aY.js"),__vite__mapDeps([12,13]))),gg=[{path:"/",element:se.jsx(YC,{})},{path:"/Tasks",element:se.jsx($C,{})},{path:"/Folders",element:se.jsx(QC,{})},{path:"/About",element:se.jsx(WC,{})},{path:"/Dashboard",element:se.jsx(d3,{})},{path:"/SignIn",element:se.jsx(p3,{})},{path:"/SignUp",element:se.jsx(m3,{})},{path:"*",element:se.jsx(wO,{})}],Lc=K.createContext();function g3(){const[n,e]=K.useState(!1),[t,s]=K.useState(!1),[a,l]=K.useState(!1),[c,d]=K.useState(!0),[p,g]=K.useState(!1),[y,T]=K.useState(!1),[S,I]=K.useState(!1),[C,z]=K.useState(!1),[L,Y]=K.useState(!1),[W,te]=K.useState("/"),[le,ce]=K.useState(null),[ge,k]=K.useState(),[R,b]=K.useState({}),[x,P]=K.useState([]),[U,O]=K.useState([]),[kt,ft]=K.useState(JSON.parse(localStorage.getItem("Changes"))),[$,ae]=K.useState([{name:"Home",ind:!1,icon:se.jsx("span",{className:"material-icons",children:"home"}),page:se.jsx(YC,{}),path:"/"},{name:"Tasks",ind:!1,icon:se.jsx("span",{className:"fa fa-book"}),page:se.jsx($C,{}),path:"/Tasks"},{name:"Folders",ind:!1,icon:se.jsx("span",{className:"material-icons",children:"folder"}),page:se.jsx(QC,{}),path:"/Folders"},{name:"About",ind:!1,icon:se.jsx("span",{className:"fa fa-question-circle"}),page:se.jsx(WC,{}),path:"/About"}]);function de(Q){ae(oe=>oe.map((ie,pe)=>Q==pe?{...ie,ind:!0}:{...ie,ind:!1}))}ge!=null&&ge.uid||ck(KC,Q=>{(Q==null?void 0:Q.uid)!=null&&(k(Q),Ve(Q.uid))});async function Ve(Q){const oe=h4(Z6,"Users",Q);try{const pe=(await C4(oe)).data();b(pe)}catch(ie){console.log(ie.code)}}const D={showSignUp:n,setShowSignUp:e,showLogin:t,setShowLogin:s,showMakeUserSignIn:a,setShowMakeUserSignIn:l,hideSideBar:c,setHideSideBar:d,hideSaveChanges:p,setHideSaveChanges:g,loading:y,setLoading:T,isSigningOut:S,setIsSigningOut:I,continueAs:C,setContinueAs:z,saveChanges:L,setSaveChanges:Y,prevPage:W,setPrevPage:te,imageContent:le,setImageContent:ce,user:ge,setUser:k,userData:R,setUserData:b,tasksCache:x,setTasksCache:P,pages:$,setPages:ae,changes:kt,setChanges:ft,foldersCache:U,setFoldersCache:O,pagination:Q=>{de(Q)},getDataFromFireStore:Q=>{Ve(Q==null?void 0:Q.uid)}};return se.jsx(se.Fragment,{children:se.jsx(Lc.Provider,{value:D,children:se.jsxs(cO,{children:[se.jsx(EO,{}),se.jsx(zN,{children:gg==null?void 0:gg.map(Q=>se.jsx(UA,{path:Q.path,element:Q.element},Q.path))}),se.jsx(r3,{}),se.jsx(f3,{}),se.jsx(AO,{})]})})})}O1.createRoot(document.getElementById("root")).render(se.jsx(K.StrictMode,{children:se.jsx(g3,{})}));export{vg as B,vs as F,gr as G,vr as L,Z6 as a,PA as b,Lc as c,h4 as d,b3 as e,k3 as f,C4 as g,KC as h,P3 as i,se as j,I3 as k,O3 as l,D3 as m,N3 as n,C3 as o,v3 as p,T3 as q,K as r,w3 as s,Es as t,R3 as u,E3 as v,_3 as w,x3 as x,M3 as y,y3 as z};
