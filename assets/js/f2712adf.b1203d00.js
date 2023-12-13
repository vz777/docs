"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[8850],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,o(o({ref:e},d),{},{components:n})):r.createElement(f,o({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6537:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o=void 0,s={unversionedId:"smarty_plugins/substitutions/{cart}",id:"smarty_plugins/substitutions/{cart}",title:"{cart}",description:"Les substitutions de panier fournissent des donn\xe9es pour le panier actuel en session.",source:"@site/docs/smarty_plugins/substitutions/{cart}.md",sourceDirName:"smarty_plugins/substitutions",slug:"/smarty_plugins/substitutions/{cart}",permalink:"/docs/docs/smarty_plugins/substitutions/{cart}",draft:!1,editUrl:"https://github.com/vz777/docs/edit/main/docs/smarty_plugins/substitutions/{cart}.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"{admin}",permalink:"/docs/docs/smarty_plugins/substitutions/{admin}"},next:{title:"{category}",permalink:"/docs/docs/smarty_plugins/substitutions/{category}"}},l={},p=[{value:"Attributs",id:"attributs",level:2}],d={toc:p};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Les substitutions de panier fournissent des donn\xe9es pour le panier actuel en session.\n",(0,a.kt)("inlineCode",{parentName:"p"},'{cart attr="une_des_suivantes"}')),(0,a.kt)("h2",{id:"attributs"},"Attributs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom de l'attribut"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Donn\xe9es renvoy\xe9es"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"contains_virtual_product")," OR ",(0,a.kt)("inlineCode",{parentName:"td"},"is_virtual")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"true")," si le panier contient au moins un produit virtuel, ",(0,a.kt)("inlineCode",{parentName:"td"},"false")," sinon")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"item_count")," OR ",(0,a.kt)("inlineCode",{parentName:"td"},"count_item")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Le nombre d'articles dans le panier. Un panier avec 2 x produit X et 3 x produit Y a 5 articles")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"total_price_with_discount")," OR ",(0,a.kt)("inlineCode",{parentName:"td"},"total_price")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Montant total du panier dans la devise actuelle, sans taxes, y compris la remise")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"total_price_without_discount")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Montant total du panier dans la devise actuelle, sans taxes, sans remise")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"total_taxed_price_with_discount")," OR ",(0,a.kt)("inlineCode",{parentName:"td"},"total_taxed_price")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Montant total du panier dans la devise actuelle avec taxes, y compris la remise")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"total_taxed_price_without_discount")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total avec remise sans taxes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"weight")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Le poids total du panier, en kg")))))}u.isMDXComponent=!0}}]);