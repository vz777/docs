"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[5962],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||c;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,l=new Array(c);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<c;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const c={title:"cache:clear"},l=void 0,o={unversionedId:"commands/cache_clear",id:"commands/cache_clear",title:"cache:clear",description:"Description",source:"@site/docs/commands/cache_clear.md",sourceDirName:"commands",slug:"/commands/cache_clear",permalink:"/docs/docs/commands/cache_clear",draft:!1,editUrl:"https://github.com/vz777/docs/edit/main/docs/commands/cache_clear.md",tags:[],version:"current",frontMatter:{title:"cache:clear"},sidebar:"myAutogeneratedSidebar",previous:{title:"admin:create",permalink:"/docs/docs/commands/admin_create"},next:{title:"debug:event-dispatcher",permalink:"/docs/docs/commands/debug_event_dispatcher"}},i={},p=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Options",id:"options",level:2},{value:"Exemple",id:"exemple",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Vider le cache"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cache:clear [options]\n")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"module"),"                    module \xe0 activer")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--no-warmup"),"            Ne pas pr\xe9chauffer le cache"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--no-optional-warmers"),"   Ignorer les pr\xe9chauffeurs de cache facultatifs (plus rapide)")),(0,a.kt)("h2",{id:"exemple"},"Exemple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"php Thelia cache:clear\n")))}u.isMDXComponent=!0}}]);