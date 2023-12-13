"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[7538],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=i(r),u=n,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return r?a.createElement(f,d(d({ref:t},p),{},{components:r})):a.createElement(f,d({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,d=new Array(l);d[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,d[1]=o;for(var i=2;i<l;i++)d[i]=r[i];return a.createElement.apply(null,d)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5093:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var a=r(7462),n=(r(7294),r(3905));const l={title:"Order address"},d=void 0,o={unversionedId:"loops/OrderAddress",id:"loops/OrderAddress",title:"Order address",description:"La boucle Order address affiche sur les addresses de commandes.",source:"@site/docs/loops/OrderAddress.md",sourceDirName:"loops",slug:"/loops/OrderAddress",permalink:"/docs/docs/loops/OrderAddress",draft:!1,editUrl:"https://github.com/vz777/docs/edit/main/docs/loops/OrderAddress.md",tags:[],version:"current",frontMatter:{title:"Order address"},sidebar:"myAutogeneratedSidebar",previous:{title:"Order",permalink:"/docs/docs/loops/Order"},next:{title:"Order coupon",permalink:"/docs/docs/loops/OrderCoupon"}},s={},i=[{value:"Arguments",id:"order-arguments",level:2},{value:"Sorties",id:"sorties",level:2}],p={toc:i};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"La boucle Order address affiche sur les addresses de commandes.\n",(0,n.kt)("inlineCode",{parentName:"p"},'{loop type="order_address" name="the-loop-name" [argument="value"], [...]}')),(0,n.kt)("h2",{id:"order-arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Exemple"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id *"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single order address id"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'id="2"')))),(0,n.kt)("p",null,"Ainsi que les ",(0,n.kt)("a",{parentName:"p",href:"./global_arguments"},"arguments communs")),(0,n.kt)("h2",{id:"sorties"},"Sorties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ADDRESS1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la premi\xe8re ligne de l'adresse de commande")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ADDRESS2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la deuxi\xe8me ligne de l'adresse de commande")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ADDRESS3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la troisi\xe8me ligne de l'adresse de commande")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$CELLPHONE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"le num\xe9ro de t\xe9l\xe9phone portable associ\xe9 \xe0 l'adresse de commande")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$CITY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la ville de l'adresse de commande")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$COMPANY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"le nom de la soci\xe9t\xe9 associ\xe9e \xe0 l'adresse de commande")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$COUNTRY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"le pays de l'adresse de commande, qui peut \xeatre utilis\xe9 dans une ",(0,n.kt)("a",{parentName:"td",href:"./Country"},"country loop"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$FIRSTNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"le pr\xe9nom associ\xe9 \xe0 l'adresse de commande")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"l'id de l'adresse de commande")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$LASTNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"le nom associ\xe9 \xe0 l'adresse de commande")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PHONE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"le num\xe9ro de t\xe9l\xe9phone associ\xe9 \xe0 l'adresse de commande")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TITLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"le titre associ\xe9 \xe0 l'adresse de commande, qui peut \xeatre utilis\xe9 dans une ",(0,n.kt)("a",{parentName:"td",href:"./Title"},"title loop"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ZIPCODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"le code postal de l'adresse de commande")))),(0,n.kt)("p",null,"Plus les ",(0,n.kt)("a",{parentName:"p",href:"./global_outputs"},"param\xe8tres de sorties communs")))}m.isMDXComponent=!0}}]);