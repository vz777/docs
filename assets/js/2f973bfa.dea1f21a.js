"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[2245],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=d(a),k=n,N=u["".concat(p,".").concat(k)]||u[k]||s[k]||l;return a?r.createElement(N,i(i({ref:e},m),{},{components:a})):r.createElement(N,i({ref:e},m))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8630:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={title:"Sale"},i=void 0,o={unversionedId:"loops/Sale",id:"loops/Sale",title:"Sale",description:"La boucle Sale offre un acc\xe8s aux op\xe9rations de promotion d\xe9finies dans votre boutique.",source:"@site/docs/loops/Sale.md",sourceDirName:"loops",slug:"/loops/Sale",permalink:"/docs/docs/loops/Sale",draft:!1,editUrl:"https://github.com/vz777/docs/edit/main/docs/loops/Sale.md",tags:[],version:"current",frontMatter:{title:"Sale"},sidebar:"myAutogeneratedSidebar",previous:{title:"Product sale elements",permalink:"/docs/docs/loops/Product_sale_elements"},next:{title:"State",permalink:"/docs/docs/loops/State"}},p={},d=[{value:"Arguments",id:"sale-arguments",level:2},{value:"Sorties",id:"sorties",level:2},{value:"Valeurs possibles de tri",id:"sale-order-possible-values",level:2}],m={toc:d};function s(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"La boucle Sale offre un acc\xe8s aux op\xe9rations de promotion d\xe9finies dans votre boutique.\n",(0,n.kt)("inlineCode",{parentName:"p"},'{loop type="sale" name="the-loop-name" [argument="value"], [...]}')),(0,n.kt)("h2",{id:"sale-arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Defaut"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Exemple"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"active"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bool\xe9en, pour obtenir uniquement les promotions actives (1) ou inactives (0) ou les deux (*)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},'active="1"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currency"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Un identifiant de devise, pour obtenir la remise d\xe9finie pour cette devise"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Devise actuelle de la boutique"),(0,n.kt)("td",{parentName:"tr",align:"left"},'currency="1"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exclude"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Un ou plusieurs ids de promo \xe0 exclure des r\xe9sultats."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'id="2", id="1,4,7"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Un ou plusieurs ids de promo"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'id="2", id="1,4,7"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Une liste de valeurs see ",(0,n.kt)("a",{parentName:"td",href:"#sale-order-possible-values"},"sorting possible values")),(0,n.kt)("td",{parentName:"tr",align:"center"},"manual"),(0,n.kt)("td",{parentName:"tr",align:"left"},'order=" random"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"product"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Un ou plusieurs ids de produits. Si sp\xe9cifi\xe9, la boucle renverra les promotions dans lesquelles ces produits sont s\xe9lectionn\xe9s"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'id="2", id="1,4,7"')))),(0,n.kt)("p",null,"Ainsi que les ",(0,n.kt)("a",{parentName:"p",href:"./global_arguments"},"arguments communs")," and ",(0,n.kt)("a",{parentName:"p",href:"./search_arguments"},"arguments de recherche")),(0,n.kt)("h2",{id:"sorties"},"Sorties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ACTIVE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"vrai si la promotion est active, faux sinon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$CHAPO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"le chapo de la promo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$DESCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la description de la promo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$DISPLAY_INITIAL_PRICE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"vrai si le prix initial des produits doit \xeatre affich\xe9, faux sinon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$END_DATE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la date de fin de la promo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$HAS_END_DATE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"vrai si la promotion a une date de fin, faux sinon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$HAS_START_DATE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"vrai si la promotion a une date de d\xe9but, faux sinon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"l'id de la promo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$IS_TRANSLATED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"v\xe9rifie si la promotion est traduite")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$LOCALE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la locale (par exemple fr_FR) des donn\xe9es retourn\xe9es")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$POSTSCTIPTUM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"le postscriptum de la promo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PRICE_OFFSET_SYMBOL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"le symbole d'unit\xe9 de la r\xe9duction de prix, % pour un pourcentage, le symbole de la devise pour un montant")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PRICE_OFFSET_TYPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"le type de r\xe9duction de prix, P pour un pourcentage, A pour un montant")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PRICE_OFFSET_VALUE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la valeur de la r\xe9duction, comme un pourcentage (0-100) ou un montant.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$SALE_LABEL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"l'\xe9tiquette publicitaire de la promotion")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$START_DATE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la date de d\xe9but de la promo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TITLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"le titre de la promo")))),(0,n.kt)("p",null,"Plus les ",(0,n.kt)("a",{parentName:"p",href:"./global_outputs"},"param\xe8tres de sorties communs")),(0,n.kt)("h2",{id:"sale-order-possible-values"},"Valeurs possibles de tri"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#sale-arguments"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Valeur croissante"),(0,n.kt)("th",{parentName:"tr",align:null},"Valeur d\xe9croissante"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Champs tri\xe9s"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"active"),(0,n.kt)("td",{parentName:"tr",align:null},"active-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"active")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"alpha"),(0,n.kt)("td",{parentName:"tr",align:null},"alpha-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"title")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"created"),(0,n.kt)("td",{parentName:"tr",align:null},"created-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"date of sale creation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"end-date"),(0,n.kt)("td",{parentName:"tr",align:null},"end-date-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"end date")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"id-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"label"),(0,n.kt)("td",{parentName:"tr",align:null},"label-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"label")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start-date"),(0,n.kt)("td",{parentName:"tr",align:null},"start-date"),(0,n.kt)("td",{parentName:"tr",align:"left"},"start date")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"updated"),(0,n.kt)("td",{parentName:"tr",align:null},"updated-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"date of sale update")))))}s.isMDXComponent=!0}}]);