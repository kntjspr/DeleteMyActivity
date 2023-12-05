import{g as T,m as $,r as I,a as w,C as L,b as W,j as d,R as V,S as q,A as G,T as H,k as Q,K as U,Q as D,B as K,d as k,c as Z,e as J}from"./index-b4da981c.js";import{b as f,i as X,f as O,j as Y,h as ee}from"./genHash-2d017b35.js";import{m as te}from"./get-5e5c9915.js";const re=r=>{const{componentCls:e,sizePaddingEdgeHorizontal:t,colorSplit:s,lineWidth:n,textPaddingInline:l,orientationMargin:o,verticalMarginInline:a}=r;return{[e]:Object.assign(Object.assign({},I(r)),{borderBlockStart:`${n}px solid ${s}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:a,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${n}px solid ${s}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${r.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${e}-with-text`]:{display:"flex",alignItems:"center",margin:`${r.dividerHorizontalWithTextGutterMargin}px 0`,color:r.colorTextHeading,fontWeight:500,fontSize:r.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${s}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${n}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${e}-with-text-left`]:{"&::before":{width:`${o*100}%`},"&::after":{width:`${100-o*100}%`}},[`&-horizontal${e}-with-text-right`]:{"&::before":{width:`${100-o*100}%`},"&::after":{width:`${o*100}%`}},[`${e}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:l},"&-dashed":{background:"none",borderColor:s,borderStyle:"dashed",borderWidth:`${n}px 0 0`},[`&-horizontal${e}-with-text${e}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${e}-dashed`]:{borderInlineStartWidth:n,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${e}-with-text`]:{color:r.colorText,fontWeight:"normal",fontSize:r.fontSize},[`&-horizontal${e}-with-text-left${e}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${e}-inner-text`]:{paddingInlineStart:t}},[`&-horizontal${e}-with-text-right${e}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${e}-inner-text`]:{paddingInlineEnd:t}}})}},ie=T("Divider",r=>{const e=$(r,{dividerHorizontalWithTextGutterMargin:r.margin,dividerHorizontalGutterMargin:r.marginLG,sizePaddingEdgeHorizontal:0});return[re(e)]},r=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:r.marginXS}));var se=globalThis&&globalThis.__rest||function(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(r);n<s.length;n++)e.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(r,s[n])&&(t[s[n]]=r[s[n]]);return t};const ne=r=>{const{getPrefixCls:e,direction:t,divider:s}=w.useContext(L),{prefixCls:n,type:l="horizontal",orientation:o="center",orientationMargin:a,className:p,rootClassName:g,children:y,dashed:v,plain:M,style:P}=r,_=se(r,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),m=e("divider",n),[C,j]=ie(m),E=o.length>0?`-${o}`:o,S=!!y,x=o==="left"&&a!=null,F=o==="right"&&a!=null,z=W(m,s==null?void 0:s.className,j,`${m}-${l}`,{[`${m}-with-text`]:S,[`${m}-with-text${E}`]:S,[`${m}-dashed`]:!!v,[`${m}-plain`]:!!M,[`${m}-rtl`]:t==="rtl",[`${m}-no-default-orientation-margin-left`]:x,[`${m}-no-default-orientation-margin-right`]:F},p,g),B=w.useMemo(()=>typeof a=="number"?a:/^\d+$/.test(a)?Number(a):a,[a]),R=Object.assign(Object.assign({},x&&{marginLeft:B}),F&&{marginRight:B});return C(w.createElement("div",Object.assign({className:z,style:Object.assign(Object.assign({},s==null?void 0:s.style),P)},_,{role:"separator"}),y&&l!=="vertical"&&w.createElement("span",{className:`${m}-inner-text`,style:R},y)))},oe=ne,ae={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},N={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},u={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},h={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},b={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};class i{static getFirstMatch(e,t){const s=t.match(e);return s&&s.length>0&&s[1]||""}static getSecondMatch(e,t){const s=t.match(e);return s&&s.length>1&&s[2]||""}static matchAndReturnConst(e,t,s){if(e.test(t))return s}static getWindowsVersionName(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(e){const t=e.split(".").splice(0,2).map(s=>parseInt(s,10)||0);if(t.push(0),t[0]===10)switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(e){const t=e.split(".").splice(0,2).map(s=>parseInt(s,10)||0);if(t.push(0),!(t[0]===1&&t[1]<5)){if(t[0]===1&&t[1]<6)return"Cupcake";if(t[0]===1&&t[1]>=6)return"Donut";if(t[0]===2&&t[1]<2)return"Eclair";if(t[0]===2&&t[1]===2)return"Froyo";if(t[0]===2&&t[1]>2)return"Gingerbread";if(t[0]===3)return"Honeycomb";if(t[0]===4&&t[1]<1)return"Ice Cream Sandwich";if(t[0]===4&&t[1]<4)return"Jelly Bean";if(t[0]===4&&t[1]>=4)return"KitKat";if(t[0]===5)return"Lollipop";if(t[0]===6)return"Marshmallow";if(t[0]===7)return"Nougat";if(t[0]===8)return"Oreo";if(t[0]===9)return"Pie"}}static getVersionPrecision(e){return e.split(".").length}static compareVersions(e,t,s=!1){const n=i.getVersionPrecision(e),l=i.getVersionPrecision(t);let o=Math.max(n,l),a=0;const p=i.map([e,t],g=>{const y=o-i.getVersionPrecision(g),v=g+new Array(y+1).join(".0");return i.map(v.split("."),M=>new Array(20-M.length).join("0")+M).reverse()});for(s&&(a=o-Math.min(n,l)),o-=1;o>=a;){if(p[0][o]>p[1][o])return 1;if(p[0][o]===p[1][o]){if(o===a)return 0;o-=1}else if(p[0][o]<p[1][o])return-1}}static map(e,t){const s=[];let n;if(Array.prototype.map)return Array.prototype.map.call(e,t);for(n=0;n<e.length;n+=1)s.push(t(e[n]));return s}static find(e,t){let s,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(s=0,n=e.length;s<n;s+=1){const l=e[s];if(t(l,s))return l}}static assign(e,...t){const s=e;let n,l;if(Object.assign)return Object.assign(e,...t);for(n=0,l=t.length;n<l;n+=1){const o=t[n];typeof o=="object"&&o!==null&&Object.keys(o).forEach(a=>{s[a]=o[a]})}return e}static getBrowserAlias(e){return ae[e]}static getBrowserTypeByAlias(e){return N[e]||""}}const c=/version\/(\d+(\.?_?\d+)+)/i,ce=[{test:[/googlebot/i],describe(r){const e={name:"Googlebot"},t=i.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,r)||i.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/opera/i],describe(r){const e={name:"Opera"},t=i.getFirstMatch(c,r)||i.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/opr\/|opios/i],describe(r){const e={name:"Opera"},t=i.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,r)||i.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/SamsungBrowser/i],describe(r){const e={name:"Samsung Internet for Android"},t=i.getFirstMatch(c,r)||i.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/Whale/i],describe(r){const e={name:"NAVER Whale Browser"},t=i.getFirstMatch(c,r)||i.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/MZBrowser/i],describe(r){const e={name:"MZ Browser"},t=i.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,r)||i.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/focus/i],describe(r){const e={name:"Focus"},t=i.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,r)||i.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/swing/i],describe(r){const e={name:"Swing"},t=i.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,r)||i.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/coast/i],describe(r){const e={name:"Opera Coast"},t=i.getFirstMatch(c,r)||i.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(r){const e={name:"Opera Touch"},t=i.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,r)||i.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/yabrowser/i],describe(r){const e={name:"Yandex Browser"},t=i.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,r)||i.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/ucbrowser/i],describe(r){const e={name:"UC Browser"},t=i.getFirstMatch(c,r)||i.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/Maxthon|mxios/i],describe(r){const e={name:"Maxthon"},t=i.getFirstMatch(c,r)||i.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/epiphany/i],describe(r){const e={name:"Epiphany"},t=i.getFirstMatch(c,r)||i.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/puffin/i],describe(r){const e={name:"Puffin"},t=i.getFirstMatch(c,r)||i.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/sleipnir/i],describe(r){const e={name:"Sleipnir"},t=i.getFirstMatch(c,r)||i.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/k-meleon/i],describe(r){const e={name:"K-Meleon"},t=i.getFirstMatch(c,r)||i.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/micromessenger/i],describe(r){const e={name:"WeChat"},t=i.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,r)||i.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/qqbrowser/i],describe(r){const e={name:/qqbrowserlite/i.test(r)?"QQ Browser Lite":"QQ Browser"},t=i.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,r)||i.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/msie|trident/i],describe(r){const e={name:"Internet Explorer"},t=i.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/\sedg\//i],describe(r){const e={name:"Microsoft Edge"},t=i.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/edg([ea]|ios)/i],describe(r){const e={name:"Microsoft Edge"},t=i.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/vivaldi/i],describe(r){const e={name:"Vivaldi"},t=i.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/seamonkey/i],describe(r){const e={name:"SeaMonkey"},t=i.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/sailfish/i],describe(r){const e={name:"Sailfish"},t=i.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,r);return t&&(e.version=t),e}},{test:[/silk/i],describe(r){const e={name:"Amazon Silk"},t=i.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/phantom/i],describe(r){const e={name:"PhantomJS"},t=i.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/slimerjs/i],describe(r){const e={name:"SlimerJS"},t=i.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(r){const e={name:"BlackBerry"},t=i.getFirstMatch(c,r)||i.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/(web|hpw)[o0]s/i],describe(r){const e={name:"WebOS Browser"},t=i.getFirstMatch(c,r)||i.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/bada/i],describe(r){const e={name:"Bada"},t=i.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/tizen/i],describe(r){const e={name:"Tizen"},t=i.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,r)||i.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/qupzilla/i],describe(r){const e={name:"QupZilla"},t=i.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,r)||i.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/firefox|iceweasel|fxios/i],describe(r){const e={name:"Firefox"},t=i.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/electron/i],describe(r){const e={name:"Electron"},t=i.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/MiuiBrowser/i],describe(r){const e={name:"Miui"},t=i.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/chromium/i],describe(r){const e={name:"Chromium"},t=i.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,r)||i.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/chrome|crios|crmo/i],describe(r){const e={name:"Chrome"},t=i.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/GSA/i],describe(r){const e={name:"Google Search"},t=i.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test(r){const e=!r.test(/like android/i),t=r.test(/android/i);return e&&t},describe(r){const e={name:"Android Browser"},t=i.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/playstation 4/i],describe(r){const e={name:"PlayStation 4"},t=i.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/safari|applewebkit/i],describe(r){const e={name:"Safari"},t=i.getFirstMatch(c,r);return t&&(e.version=t),e}},{test:[/.*/i],describe(r){const e=/^(.*)\/(.*) /,t=/^(.*)\/(.*)[ \t]\((.*)/,s=r.search("\\(")!==-1?t:e;return{name:i.getFirstMatch(s,r),version:i.getSecondMatch(s,r)}}}],de=[{test:[/Roku\/DVP/],describe(r){const e=i.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,r);return{name:h.Roku,version:e}}},{test:[/windows phone/i],describe(r){const e=i.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,r);return{name:h.WindowsPhone,version:e}}},{test:[/windows /i],describe(r){const e=i.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,r),t=i.getWindowsVersionName(e);return{name:h.Windows,version:e,versionName:t}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(r){const e={name:h.iOS},t=i.getSecondMatch(/(Version\/)(\d[\d.]+)/,r);return t&&(e.version=t),e}},{test:[/macintosh/i],describe(r){const e=i.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,r).replace(/[_\s]/g,"."),t=i.getMacOSVersionName(e),s={name:h.MacOS,version:e};return t&&(s.versionName=t),s}},{test:[/(ipod|iphone|ipad)/i],describe(r){const e=i.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,r).replace(/[_\s]/g,".");return{name:h.iOS,version:e}}},{test(r){const e=!r.test(/like android/i),t=r.test(/android/i);return e&&t},describe(r){const e=i.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,r),t=i.getAndroidVersionName(e),s={name:h.Android,version:e};return t&&(s.versionName=t),s}},{test:[/(web|hpw)[o0]s/i],describe(r){const e=i.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,r),t={name:h.WebOS};return e&&e.length&&(t.version=e),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(r){const e=i.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,r)||i.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,r)||i.getFirstMatch(/\bbb(\d+)/i,r);return{name:h.BlackBerry,version:e}}},{test:[/bada/i],describe(r){const e=i.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,r);return{name:h.Bada,version:e}}},{test:[/tizen/i],describe(r){const e=i.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,r);return{name:h.Tizen,version:e}}},{test:[/linux/i],describe(){return{name:h.Linux}}},{test:[/CrOS/],describe(){return{name:h.ChromeOS}}},{test:[/PlayStation 4/],describe(r){const e=i.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,r);return{name:h.PlayStation4,version:e}}}],le=[{test:[/googlebot/i],describe(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe(r){const e=i.getFirstMatch(/(can-l01)/i,r)&&"Nova",t={type:u.mobile,vendor:"Huawei"};return e&&(t.model=e),t}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe(){return{type:u.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe(){return{type:u.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(){return{type:u.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe(){return{type:u.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe(){return{type:u.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe(){return{type:u.tablet}}},{test(r){const e=r.test(/ipod|iphone/i),t=r.test(/like (ipod|iphone)/i);return e&&!t},describe(r){const e=i.getFirstMatch(/(ipod|iphone)/i,r);return{type:u.mobile,vendor:"Apple",model:e}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe(){return{type:u.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe(){return{type:u.mobile}}},{test(r){return r.getBrowserName(!0)==="blackberry"},describe(){return{type:u.mobile,vendor:"BlackBerry"}}},{test(r){return r.getBrowserName(!0)==="bada"},describe(){return{type:u.mobile}}},{test(r){return r.getBrowserName()==="windows phone"},describe(){return{type:u.mobile,vendor:"Microsoft"}}},{test(r){const e=Number(String(r.getOSVersion()).split(".")[0]);return r.getOSName(!0)==="android"&&e>=3},describe(){return{type:u.tablet}}},{test(r){return r.getOSName(!0)==="android"},describe(){return{type:u.mobile}}},{test(r){return r.getOSName(!0)==="macos"},describe(){return{type:u.desktop,vendor:"Apple"}}},{test(r){return r.getOSName(!0)==="windows"},describe(){return{type:u.desktop}}},{test(r){return r.getOSName(!0)==="linux"},describe(){return{type:u.desktop}}},{test(r){return r.getOSName(!0)==="playstation 4"},describe(){return{type:u.tv}}},{test(r){return r.getOSName(!0)==="roku"},describe(){return{type:u.tv}}}],ue=[{test(r){return r.getBrowserName(!0)==="microsoft edge"},describe(r){if(/\sedg\//i.test(r))return{name:b.Blink};const e=i.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,r);return{name:b.EdgeHTML,version:e}}},{test:[/trident/i],describe(r){const e={name:b.Trident},t=i.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test(r){return r.test(/presto/i)},describe(r){const e={name:b.Presto},t=i.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test(r){const e=r.test(/gecko/i),t=r.test(/like gecko/i);return e&&!t},describe(r){const e={name:b.Gecko},t=i.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}},{test:[/(apple)?webkit\/537\.36/i],describe(){return{name:b.Blink}}},{test:[/(apple)?webkit/i],describe(r){const e={name:b.WebKit},t=i.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,r);return t&&(e.version=t),e}}];class A{constructor(e,t=!1){if(e==null||e==="")throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},t!==!0&&this.parse()}getUA(){return this._ua}test(e){return e.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const e=i.find(ce,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(s=>this.test(s));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.browser=e.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const e=i.find(de,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(s=>this.test(s));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.os=e.describe(this.getUA())),this.parsedResult.os}getOSName(e){const{name:t}=this.getOS();return e?String(t).toLowerCase()||"":t||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(e=!1){const{type:t}=this.getPlatform();return e?String(t).toLowerCase()||"":t||""}parsePlatform(){this.parsedResult.platform={};const e=i.find(le,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(s=>this.test(s));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.platform=e.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const e=i.find(ue,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(s=>this.test(s));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.engine=e.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return i.assign({},this.parsedResult)}satisfies(e){const t={};let s=0;const n={};let l=0;if(Object.keys(e).forEach(o=>{const a=e[o];typeof a=="string"?(n[o]=a,l+=1):typeof a=="object"&&(t[o]=a,s+=1)}),s>0){const o=Object.keys(t),a=i.find(o,g=>this.isOS(g));if(a){const g=this.satisfies(t[a]);if(g!==void 0)return g}const p=i.find(o,g=>this.isPlatform(g));if(p){const g=this.satisfies(t[p]);if(g!==void 0)return g}}if(l>0){const o=Object.keys(n),a=i.find(o,p=>this.isBrowser(p,!0));if(a!==void 0)return this.compareVersion(n[a])}}isBrowser(e,t=!1){const s=this.getBrowserName().toLowerCase();let n=e.toLowerCase();const l=i.getBrowserTypeByAlias(n);return t&&l&&(n=l.toLowerCase()),n===s}compareVersion(e){let t=[0],s=e,n=!1;const l=this.getBrowserVersion();if(typeof l=="string")return e[0]===">"||e[0]==="<"?(s=e.substr(1),e[1]==="="?(n=!0,s=e.substr(2)):t=[],e[0]===">"?t.push(1):t.push(-1)):e[0]==="="?s=e.substr(1):e[0]==="~"&&(n=!0,s=e.substr(1)),t.indexOf(i.compareVersions(l,s,n))>-1}isOS(e){return this.getOSName(!0)===String(e).toLowerCase()}isPlatform(e){return this.getPlatformType(!0)===String(e).toLowerCase()}isEngine(e){return this.getEngineName(!0)===String(e).toLowerCase()}is(e,t=!1){return this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)}some(e=[]){return e.some(t=>this.is(t))}}/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */class he{static getParser(e,t=!1){if(typeof e!="string")throw new Error("UserAgent should be a string");return new A(e,t)}static parse(e){return new A(e).getResult()}static get BROWSER_MAP(){return N}static get ENGINE_MAP(){return b}static get OS_MAP(){return h}static get PLATFORMS_MAP(){return u}}function ge(r){const e=`https://esuit.dev/feedback?feature=${r.feature}&browserInfo=${pe()}`;return d.jsxs("div",{style:{fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI"',fontSize:14,borderTop:"1px solid #d3d3d3",paddingTop:16,marginTop:16},children:[d.jsxs("div",{style:{paddingBottom:16,textAlign:"center"},children:["If you like👍🏼 this extension, ",d.jsx("br",{}),d.jsx("a",{href:r.cwsLink,target:"_blank",children:"rate it with 5 ⭐ in Chrome store"})]}),d.jsxs("div",{style:{textAlign:"center"},children:["If you want to donate 🤩, buy me a coffee pls.",d.jsx("a",{href:"https://www.buymeacoffee.com/fbesuit",target:"_blank",style:{marginTop:8,display:"block",height:40,width:144,margin:"8px auto 0 auto"},children:d.jsx("img",{src:"https://cdn.buymeacoffee.com/buttons/v2/default-blue.png",alt:"Buy Me A Coffee",style:{height:"100%",width:"100%"}})})]}),d.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",paddingTop:12},children:[d.jsx("a",{href:e,target:"_blank",style:{margin:"0 12px"},children:"🐛Report a Bug"}),d.jsx("a",{href:"https://esuit.dev/",target:"_blank",style:{margin:"0 12px"},children:"👏Find More Extensions"})]})]})}function pe(){return btoa(JSON.stringify(he.parse(window.navigator.userAgent)))}function me(){const[r,e]=w.useState("");return w.useEffect(()=>{e(f.runtime.getURL("src/assets/logo/favicon-128.png"))},[]),d.jsx("div",{className:"header",children:d.jsx(V,{justify:"space-between",children:d.jsxs(q,{size:8,children:[d.jsx(G,{size:"large",src:r,shape:"square"}),d.jsx(H.Text,{children:X})]})})})}function be(){async function r(){const e=await f.tabs.query({url:ee.filter(n=>!~n.indexOf("esuit"))});if(e.length===0){k.error("Please Login and open the Facebook page first.");return}const t=await f.scripting.executeScript({target:{tabId:e[0].id},world:"MAIN",func:()=>window.require("CurrentUser").getID()}),s=te(t,"[0].result");if(!s){k.error("Please Login and open the Facebook page first.");return}f.tabs.create({url:`https://www.facebook.com/${s}/allactivity`})}return d.jsxs("div",{className:"App",children:[d.jsx(me,{}),d.jsx(oe,{style:{margin:"8px 0"}}),d.jsx(Q.Provider,{value:{projectId:O,extId:f.runtime.id,callbackExtId:f.runtime.id,showNoNeedLoginDemoVideoId:"mXZYKaIgPs8"},children:d.jsx(U,{children:d.jsx(D,{})})}),d.jsx(K,{block:!0,type:"primary",size:"large",style:{margin:"24px 0"},onClick:r,children:"Open the activity page"}),d.jsx(ge,{feature:O,cwsLink:Y})]})}Z.createRoot(document.getElementById("app")).render(d.jsx(J,{children:d.jsx(be,{})}));