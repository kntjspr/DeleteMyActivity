function U(e,g){for(var i=0;i<g.length;i++){const A=g[i];if(typeof A!="string"&&!Array.isArray(A)){for(const c in A)if(c!=="default"&&!(c in e)){const o=Object.getOwnPropertyDescriptor(A,c);o&&Object.defineProperty(e,c,o.get?o:{enumerable:!0,get:()=>A[c]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var Z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function G(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var F={exports:{}};(function(e,g){(function(i,A){A(e)})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:Z,function(i){var A,c;if(!((c=(A=globalThis.chrome)==null?void 0:A.runtime)!=null&&c.id))throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){const o="The message port closed before a response was received.",b=l=>{const u={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(u).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class x extends WeakMap{constructor(s,t=void 0){super(t),this.createItem=s}get(s){return this.has(s)||this.set(s,this.createItem(s)),super.get(s)}}const h=r=>r&&typeof r=="object"&&typeof r.then=="function",m=(r,s)=>(...t)=>{l.runtime.lastError?r.reject(new Error(l.runtime.lastError.message)):s.singleCallbackArg||t.length<=1&&s.singleCallbackArg!==!1?r.resolve(t[0]):r.resolve(t)},f=r=>r==1?"argument":"arguments",S=(r,s)=>function(a,...w){if(w.length<s.minArgs)throw new Error(`Expected at least ${s.minArgs} ${f(s.minArgs)} for ${r}(), got ${w.length}`);if(w.length>s.maxArgs)throw new Error(`Expected at most ${s.maxArgs} ${f(s.maxArgs)} for ${r}(), got ${w.length}`);return new Promise((p,y)=>{if(s.fallbackToNoCallback)try{a[r](...w,m({resolve:p,reject:y},s))}catch(n){console.warn(`${r} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,n),a[r](...w),s.fallbackToNoCallback=!1,s.noCallback=!0,p()}else s.noCallback?(a[r](...w),p()):a[r](...w,m({resolve:p,reject:y},s))})},j=(r,s,t)=>new Proxy(s,{apply(a,w,p){return t.call(w,r,...p)}});let N=Function.call.bind(Object.prototype.hasOwnProperty);const K=(r,s={},t={})=>{let a=Object.create(null),w={has(y,n){return n in r||n in a},get(y,n,E){if(n in a)return a[n];if(!(n in r))return;let d=r[n];if(typeof d=="function")if(typeof s[n]=="function")d=j(r,r[n],s[n]);else if(N(t,n)){let M=S(n,t[n]);d=j(r,r[n],M)}else d=d.bind(r);else if(typeof d=="object"&&d!==null&&(N(s,n)||N(t,n)))d=K(d,s[n],t[n]);else if(N(t,"*"))d=K(d,s[n],t["*"]);else return Object.defineProperty(a,n,{configurable:!0,enumerable:!0,get(){return r[n]},set(M){r[n]=M}}),d;return a[n]=d,d},set(y,n,E,d){return n in a?a[n]=E:r[n]=E,!0},defineProperty(y,n,E){return Reflect.defineProperty(a,n,E)},deleteProperty(y,n){return Reflect.deleteProperty(a,n)}},p=Object.create(r);return new Proxy(p,w)},L=r=>({addListener(s,t,...a){s.addListener(r.get(t),...a)},hasListener(s,t){return s.hasListener(r.get(t))},removeListener(s,t){s.removeListener(r.get(t))}}),$=new x(r=>typeof r!="function"?r:function(t){const a=K(t,{},{getContent:{minArgs:0,maxArgs:0}});r(a)}),B=new x(r=>typeof r!="function"?r:function(t,a,w){let p=!1,y,n=new Promise(P=>{y=function(I){p=!0,P(I)}}),E;try{E=r(t,a,y)}catch(P){E=Promise.reject(P)}const d=E!==!0&&h(E);if(E!==!0&&!d&&!p)return!1;const M=P=>{P.then(I=>{w(I)},I=>{let O;I&&(I instanceof Error||typeof I.message=="string")?O=I.message:O="An unexpected error occurred",w({__mozWebExtensionPolyfillReject__:!0,message:O})}).catch(I=>{console.error("Failed to send onMessage rejected reply",I)})};return M(d?E:n),!0}),z=({reject:r,resolve:s},t)=>{l.runtime.lastError?l.runtime.lastError.message===o?s():r(new Error(l.runtime.lastError.message)):t&&t.__mozWebExtensionPolyfillReject__?r(new Error(t.message)):s(t)},D=(r,s,t,...a)=>{if(a.length<s.minArgs)throw new Error(`Expected at least ${s.minArgs} ${f(s.minArgs)} for ${r}(), got ${a.length}`);if(a.length>s.maxArgs)throw new Error(`Expected at most ${s.maxArgs} ${f(s.maxArgs)} for ${r}(), got ${a.length}`);return new Promise((w,p)=>{const y=z.bind(null,{resolve:w,reject:p});a.push(y),t.sendMessage(...a)})},q={devtools:{network:{onRequestFinished:L($)}},runtime:{onMessage:L(B),onMessageExternal:L(B),sendMessage:D.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:D.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},J={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return u.privacy={network:{"*":J},services:{"*":J},websites:{"*":J}},K(l,q,u)};i.exports=b(chrome)}else i.exports=globalThis.browser})})(F);var T=F.exports;const H=G(T),ne=U({__proto__:null,default:H},[T]),v={};let _=!1;function V(){_=!0,T.runtime.onMessage.addListener((e,g,i)=>{if(e.isSendMessageToBackgroundMessage&&v[e.type]){const A=v[e.type].map(c=>c(...e.args)).pop();return A.then?(A.then(c=>{i(c)}),!0):i(A)}})}const C={};let W=!1;function Y(){W=!0,T.runtime.onMessageExternal.addListener((e,g,i)=>{var A,c,o;if(((A=g==null?void 0:g.url)!=null&&A.startsWith("https://auth.esuit.dev")||(c=g==null?void 0:g.url)!=null&&c.startsWith("https://checkout.esuit.dev"))&&C[e.type]){const b=C[e.type].map(l=>l(e.args,g)).pop();if(e.callbackFnName&&(o=g.tab)!=null&&o.id){const l=g.tab.id;b&&b.then?b.then(u=>{T.scripting.executeScript({target:{tabId:l},world:"MAIN",args:[u??!1,e.callbackFnName],func:(x,h)=>{try{window[h](x)}catch(m){console.error(m)}}})}):T.scripting.executeScript({target:{tabId:l},world:"MAIN",args:[b??!1,e.callbackFnName],func:(u,x)=>{try{window[x](u)}catch(h){console.error(h)}}})}return!0}})}async function te(e,...g){if(X()){if(v[e])return v[e].map(i=>i(...g)).pop();throw new Error(`no handler for ${e}`)}return await T.runtime.sendMessage({isSendMessageToBackgroundMessage:!0,type:e,args:g})}function ae(e,g){return!_&&V(),v[e]=v[e]||[],v[e].push(g),()=>{const i=v.indexOf(g);v.splice(i,1)}}function ge(e,g){return!W&&Y(),C[e]=C[e]||[],C[e].push(g),()=>{const i=C.indexOf(g);C.splice(i,1)}}function X(){return!!~location.pathname.indexOf("service-worker-loader.js")}var Q=(e=>(e.SUBSCRIPTION="subscription",e.PAYMENT="payment",e))(Q||{}),ee=(e=>(e.FREE="free",e.BASIC="basic",e.PREMIUM="premium",e))(ee||{}),re=(e=>(e.TRIALING="trialing",e.ACTIVE="active",e))(re||{}),se=(e=>(e.SUCCEEDED="succeeded",e))(se||{});const ie=["https://www.facebook.com/*","https://web.facebook.com/*","https://*.esuit.dev/*"],oe="ESUIT | Delete My Activity for Facebook™",me="delete-my-activity-for-facebook",Ae="pehigcimajndnpmoeocbhlhljodmlbgb",le="https://chrome.google.com/webstore/detail/esuit-delete-my-activity/pehigcimajndnpmoeocbhlhljodmlbgb";function R(){const e="Dg9tDhjPBMCJwdsKweIaEzNjVBqJwdsKweIaEBwfWJwdsKweIaEmunbEvfVtaJwdsKweIaEu0Hblti1nGJwdsKweIaEzgLNzxn0JwdsKweIaEC3vIDgXLJwdsKweIaECgfKu3rHCNqJwdsKweIaEntKYmdqXnM9brMjdzGJwdsKweIaEreDRsvKJwdsKweIaEmZiZote4vKTzqufoJwdsKweIaEzvDTELCJwdsKweIaEAM9PBGJwdsKweIaEmteXntu4ogz5DfLuqqJwdsKweIaEmJiWotGWB2nLt0jQJwdsKweIaEDuLjs3KJwdsKweIaEzMXVB3iJwdsKweIaEC3rYAw5NAwz5JwdsKweIaEzw5JB2rLJwdsKweIaEz2v0vgLTzqJwdsKweIaEndjpsxjQsMyJwdsKweIaEnJy4otbADeP5DvmJwdsKweIaEmtm5ntaZou5itLPRDaJwdsKweIaEmZGWmZmYofjSqNzorW".split("JwdsKweIaE");return(R=function(){return e})()}function k(e,g){const i=R();return k=function(A,c){let o=i[A-=233];k.fibnLZ===void 0&&(k.bUtAoH=function(u){let x="",h="";for(let m,f,S=0,j=0;f=u.charAt(j++);~f&&(m=S%4?64*m+f:f,S++%4)?x+=String.fromCharCode(255&m>>(-2*S&6)):0)f="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(f);for(let m=0,f=x.length;m<f;m++)h+="%"+("00"+x.charCodeAt(m).toString(16)).slice(-2);return decodeURIComponent(h)},e=arguments,k.fibnLZ=!0);const b=A+i[0],l=e[b];return l?o=l:(o=k.bUtAoH(o),e[b]=o),o},k(e,g)}async function ce(e,g,i){const o=k,b=k,l=k,u={eWmzW:function(m,f){return m+f},DGkIY:function(m,f){return m/f},uIIKy:o(253)},x=new TextEncoder()[b(243)](JSON[o(242)]({projectId:e,extensionId:g,createAt:u[o(236)](Math[o(241)](u[l(234)](new Date()[o(244)](),1e5)),i?1:0)})),h=await crypto[b(255)][o(254)](u[b(240)],x);return Array[b(250)](new Uint8Array(h))[b(251)](m=>m[o(249)](16)[l(256)](2,"0"))[l(237)]("")}(function(e,g){const u=k,x=k,h=k,m=R();for(;;)try{if(parseInt(u(252))/1*(-parseInt(x(246))/2)+parseInt(h(247))/3+-parseInt(x(238))/4+-parseInt(u(239))/5+parseInt(x(245))/6*(parseInt(x(235))/7)+parseInt(u(248))/8+-parseInt(u(233))/9==249985)break;m.push(m.shift())}catch{m.push(m.shift())}})();export{ee as I,ge as L,H as a,T as b,te as c,re as d,Q as e,me as f,Ae as g,ie as h,oe as i,le as j,G as k,Z as l,ae as m,ne as p,ce as y};