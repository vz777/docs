"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[9507],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),d=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=d(a),c=n,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return a?r.createElement(k,i(i({ref:e},s),{},{components:a})):r.createElement(k,i({ref:e},s))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4826:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={title:"Attribute"},i=void 0,o={unversionedId:"loops/Attribute",id:"loops/Attribute",title:"Attribute",description:"Attribute loop lists attributes.",source:"@site/docs/loops/Attribute.md",sourceDirName:"loops",slug:"/loops/Attribute",permalink:"/docs/docs/loops/Attribute",draft:!1,editUrl:"https://github.com/vz777/docs/edit/main/docs/loops/Attribute.md",tags:[],version:"current",frontMatter:{title:"Attribute"},sidebar:"myAutogeneratedSidebar",previous:{title:"Associated content",permalink:"/docs/docs/loops/Associated_content"},next:{title:"Attribute availability",permalink:"/docs/docs/loops/Attribute_availability"}},p={},d=[{value:"Arguments",id:"attribute-arguments",level:2},{value:"Sorties",id:"sorties",level:2},{value:"Valeurs possibles de tri",id:"attribute-order-possible-values",level:2}],s={toc:d};function u(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Attribute loop lists attributes.\n",(0,n.kt)("inlineCode",{parentName:"p"},'{loop type="attribute" name="the-loop-name" [argument="value"], [...]}')),(0,n.kt)("h2",{id:"attribute-arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Exemple"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exclude"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single or a list of attribute ids to exclude."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'exclude="456,123"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exclude_template"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single or a list of template ids. Only features NOT attached to these templates will be returned."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'id="2", id="1,4,7"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single or a list of attribute ids."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'id="2", id="1,4,7"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lang"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Un id de langue"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'lang="1"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Une liste de valeurs ",(0,n.kt)("br",null)," ",(0,n.kt)("a",{parentName:"td",href:"#attribute-order-possible-values"},"Valeurs attendues")),(0,n.kt)("td",{parentName:"tr",align:"center"},"manual"),(0,n.kt)("td",{parentName:"tr",align:"left"},'order="alpha_reverse"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"product"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single or a list of product ids."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'id="2", id="1,4,7"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"template"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single or a list of template ids. Only features attached to these templates will be returned."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'id="2", id="1,4,7"')))),(0,n.kt)("p",null,"Ainsi que les ",(0,n.kt)("a",{parentName:"p",href:"./global_arguments"},"arguments communs")),(0,n.kt)("h2",{id:"sorties"},"Sorties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$CHAPO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the attribute chapo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$DESCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the attribute description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the attribute id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$IS_TRANSLATED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"check if the product is translated or not")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$POSITION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If none of the product, template or exclude_template parameter is present, $POSITION contains the attribute position. Otherwise, it contains the attribute position in the product template context.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$POSTSCRIPTUM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the attribute postscriptum")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TITLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"the attribute title")))),(0,n.kt)("p",null,"Plus les ",(0,n.kt)("a",{parentName:"p",href:"./global_outputs"},"param\xe8tres de sorties communs")),(0,n.kt)("h2",{id:"attribute-order-possible-values"},"Valeurs possibles de tri"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#attribute-arguments"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Valeur croissante"),(0,n.kt)("th",{parentName:"tr",align:null},"Valeur d\xe9croissante"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Champs tri\xe9s"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"alpha"),(0,n.kt)("td",{parentName:"tr",align:null},"alpha_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"title")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"manual"),(0,n.kt)("td",{parentName:"tr",align:null},"manual_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"})))))}u.isMDXComponent=!0}}]);