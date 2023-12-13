"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[6081],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),s=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},d=function(t){var e=s(t.components);return r.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=s(a),k=n,N=u["".concat(i,".").concat(k)]||u[k]||m[k]||l;return a?r.createElement(N,p(p({ref:e},d),{},{components:a})):r.createElement(N,p({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=u;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:n,p[1]=o;for(var s=2;s<l;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1459:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={title:"Country"},p=void 0,o={unversionedId:"loops/Country",id:"loops/Country",title:"Country",description:"La boucle Country liste les pays.",source:"@site/docs/loops/Country.md",sourceDirName:"loops",slug:"/loops/Country",permalink:"/docs/docs/loops/Country",draft:!1,editUrl:"https://github.com/vz777/docs/edit/main/docs/loops/Country.md",tags:[],version:"current",frontMatter:{title:"Country"},sidebar:"myAutogeneratedSidebar",previous:{title:"Content",permalink:"/docs/docs/loops/Content"},next:{title:"Coupon",permalink:"/docs/docs/loops/Coupon"}},i={},s=[{value:"Arguments",id:"country-arguments",level:2},{value:"Sorties",id:"sorties",level:2},{value:"Valeurs possibles de tri",id:"country-order-possible-values",level:2}],d={toc:s};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"La boucle Country liste les pays.\n",(0,n.kt)("inlineCode",{parentName:"p"},'{loop type="country" name="the-loop-name" [argument="value"], [...]}')),(0,n.kt)("h2",{id:"country-arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Defaut"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Exemple"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"area"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Un ou plusieurs IDs de zone."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'area="10,9", area: "500"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exclude"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Un ou plusieurs IDs de pays \xe0 exclure."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'exclude="2", exclude="1,4,7"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exclude_area"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Un ou plusieurs IDs de zone. Les pays appartenant \xe0 ces zones sont exclus des r\xe9sultats."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'exclude_area="7", exclude_area="3,102,14"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"has_states"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bool\xe9en pour retourner les pays qui ont des \xc9tats ou non (valeurs possibles : yes, no or *)."),(0,n.kt)("td",{parentName:"tr",align:"center"},"*"),(0,n.kt)("td",{parentName:"tr",align:"left"},'has_states="no"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Un ou plusieurs IDs de pays"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'id="2", id="1,4,7"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lang"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Un id de langue"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'lang="1"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Une liste de valeurs voir ",(0,n.kt)("a",{parentName:"td",href:"#country-order-possible-values"},"sorting possible values")),(0,n.kt)("td",{parentName:"tr",align:"center"},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},'order="alpha_reverse"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"visible"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bool\xe9en pour retourner les pays visibles ou non visibles (valeurs possibles : yes, no or *)."),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},'visible="no"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"with_area"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bool\xe9en pour retourner soit les pays dont la zone est d\xe9finie, soit tous les autres."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'with_area="true"')))),(0,n.kt)("p",null,"Ainsi que les ",(0,n.kt)("a",{parentName:"p",href:"./global_arguments"},"arguments communs")),(0,n.kt)("h2",{id:"sorties"},"Sorties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$AREA"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la zone \xe0 laquelle le pays appartient")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$CHAPO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"le chapo du pays")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$DESCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la description du pays")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$HAS_STATES"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1 if the country has states, 0 otherwise")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"l'id du pays")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ISOALPHA2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"le code pays ISO 2 caract\xe8res")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ISOALPHA3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"le code pays ISO 3 caract\xe8res")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ISOCODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"le code pays num\xe9rique ISO")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$IS_DEFAULT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1 si le pays est celui par d\xe9faut, 0 sinon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$IS_SHOP_COUNTRY"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1 si le pays est le pays de la boutique, 0 sinon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$IS_TRANSLATED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"v\xe9rifie si le pays est traduit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$LOCALE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la locale utilis\xe9e pour cette recherche")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$NEED_ZIP_CODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1 si le pays a besoin d'un code postal pour l'adresse, 0 sinon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$POSTSCRIPTUM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"le postscriptum du pays")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TITLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"le titre du pays")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$VISIBLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"true si le pays est visible. False sinon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ZIP_CODE_FORMAT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Le format du code postal pour ce pays o\xf9 N est un chiffre, L une lettre et C le code ISO de l'\xc9tat.")))),(0,n.kt)("p",null,"Plus les ",(0,n.kt)("a",{parentName:"p",href:"./global_outputs"},"param\xe8tres de sorties communs")),(0,n.kt)("h2",{id:"country-order-possible-values"},"Valeurs possibles de tri"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#country-arguments"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Valeur croissante"),(0,n.kt)("th",{parentName:"tr",align:null},"Valeur d\xe9croissante"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Champs tri\xe9s"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"alpha"),(0,n.kt)("td",{parentName:"tr",align:null},"alpha-reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"title")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"id_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"random"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:"left"},"countries in pseudo-random order")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"visible"),(0,n.kt)("td",{parentName:"tr",align:null},"visible_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"visibility")))))}m.isMDXComponent=!0}}]);