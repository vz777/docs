"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[4268],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var l=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=l.createContext({}),p=function(e){var t=l.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,f=m["".concat(s,".").concat(c)]||m[c]||d[c]||a;return r?l.createElement(f,o(o({ref:t},u),{},{components:r})):l.createElement(f,o({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=r(7462),n=(r(7294),r(3905));const a={title:"Template",sidebar_position:5},o=void 0,i={unversionedId:"template",id:"template",title:"Template",description:"Le moteur de template utilis\xe9 dans Thelia est Smarty.",source:"@site/docs/template.md",sourceDirName:".",slug:"/template",permalink:"/docs/docs/template",draft:!1,editUrl:"https://github.com/vz777/docs/edit/main/docs/template.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Template",sidebar_position:5},sidebar:"myAutogeneratedSidebar",previous:{title:"Propel",permalink:"/docs/docs/propel"},next:{title:"Smarty plugins",permalink:"/docs/docs/smarty_plugins/"}},s={},p=[{value:"Structure des mod\xe8les",id:"structure-des-mod\xe8les",level:3},{value:"Fonctionnalit\xe9s",id:"fonctionnalit\xe9s",level:3},{value:"Boucles",id:"boucles",level:4},{value:"Smarty plugins",id:"smarty-plugins",level:4}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Le moteur de template utilis\xe9 dans Thelia est ",(0,n.kt)("a",{parentName:"p",href:"https://smarty-php.github.io/smarty/"},"Smarty"),".\nIl existe 4 types de mod\xe8les :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"frontOffice : pour les mod\xe8les g\xe9n\xe9r\xe9s \xe0 partir d'un contr\xf4leur qui \xe9tend ",(0,n.kt)("inlineCode",{parentName:"li"},"BaseFrontController")),(0,n.kt)("li",{parentName:"ul"},"backOffice : pour les mod\xe8les g\xe9n\xe9r\xe9s \xe0 partir d'un contr\xf4leur qui \xe9tend ",(0,n.kt)("inlineCode",{parentName:"li"},"BaseAdminController")),(0,n.kt)("li",{parentName:"ul"},"pdf : pour les documents PDF tels que les factures"),(0,n.kt)("li",{parentName:"ul"},"mail : pour les courriers envoy\xe9s par Thelia")),(0,n.kt)("p",null,"Pour chacun de ces types, vous pouvez choisir un mod\xe8le actif, soit par la page de configuration dans le back-office, soit par ces variables d'environnement :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ACTIVE_FRONT_TEMPLATE\nACTIVE_ADMIN_TEMPLATE\nACTIVE_MAIL_TEMPLATE\nACTIVE_PDF_TEMPLATE\n")),(0,n.kt)("p",null,":::attention\nIl est fortement recommand\xe9 de ne jamais modifier les mod\xe8les par d\xe9faut, mais de les copier et de les renommer avec le nom de votre projet.\nAinsi, vous pouvez toujours mettre \xe0 jour Thelia et les mod\xe8les par d\xe9faut sans perdre vos modifications.\n:::"),(0,n.kt)("h3",{id:"structure-des-mod\xe8les"},"Structure des mod\xe8les"),(0,n.kt)("p",null,'Les mod\xe8les Smarty de Thelia se trouvent dans le sous-r\xe9pertoire "templates".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\\templates\n  \\frontOffice\n    \\default\n    \\myTemplate\n  \\backOffice\n    \\default\n    ...\n  \\pdf\n    \\default\n    ...\n  \\mail\n    \\default\n    ...\n")),(0,n.kt)("p",null,"C'est la structure de tous les mod\xe8les Thelia, elle peut \xeatre situ\xe9e soit \xe0 la racine de votre projet, soit dans le dossier de chaque module.\nSi un m\xeame fichier se trouve dans plusieurs emplacements de mod\xe8les, Thelia applique cette priorit\xe9 pour d\xe9terminer lequel doit \xeatre rendu (le premier fichier trouv\xe9 est le fichier rendu) :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'Dans le mod\xe8le "actif" du r\xe9pertoire de mod\xe8les principal'),(0,n.kt)("li",{parentName:"ol"},'Dans le mod\xe8le "actif" de chaque sous-r\xe9pertoire de module situ\xe9 dans le r\xe9pertoire principal des templates'),(0,n.kt)("li",{parentName:"ol"},'Dans le mod\xe8le "actif" de chaque r\xe9pertoire de templates de module'),(0,n.kt)("li",{parentName:"ol"},'Dans le mod\xe8le "par d\xe9faut" du r\xe9pertoire principal des templates'),(0,n.kt)("li",{parentName:"ol"},'Dans le mod\xe8le "par d\xe9faut" de chaque sous-r\xe9pertoire de module situ\xe9 dans le r\xe9pertoire principal des templates'),(0,n.kt)("li",{parentName:"ol"},'Dans le mod\xe8le "par d\xe9faut" de chaque r\xe9pertoire de templates de module')),(0,n.kt)("p",null,"Par exemple, si vous avez cette structure :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\\local\n    \\modules\n        \\MyProject\n            \\templates\n                \\frontOffice\n                    \\default\n                        template.html\n\\templates\n  \\frontOffice\n    \\default\n        template.html\n    \\myTemplate\n        template.html\n        \\modules\n            \\myproject\n                template.html\n")),(0,n.kt)("p",null,"Il v\xe9rifiera tous ces r\xe9pertoires dans cet ordre :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"\\templates\\frontOffice\\myTemplate\\")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"\\templates\\frontOffice\\myTemplate\\modules\\myproject")," * this for each activated modules"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"\\local\\modules\\MyProject\\templates\\frontOffice\\myTemplate")," * this for each activated modules"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"\\templates\\frontOffice\\default\\")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"\\templates\\frontOffice\\default\\modules\\myproject")," * this for each activated modules"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"\\local\\modules\\MyProject\\templates\\frontOffice\\default")," * this for each activated modules")),(0,n.kt)("h3",{id:"fonctionnalit\xe9s"},"Fonctionnalit\xe9s"),(0,n.kt)("h4",{id:"boucles"},"Boucles"),(0,n.kt)("p",null,"Les boucles permettent d'obtenir des donn\xe9es \xe0 partir de votre backend de boutique et de les afficher dans votre vue frontale. Vous trouverez plus de documentation ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/loops/"},"ici"),"."),(0,n.kt)("h4",{id:"smarty-plugins"},"Smarty plugins"),(0,n.kt)("p",null,"Les plugins Smarty sont utilis\xe9s pour ex\xe9cuter des fonctions depuis les template. Vous trouverez plus de documentation ",(0,n.kt)("a",{parentName:"p",href:"/docs/docs/smarty_plugins/"},"ici"),"."))}d.isMDXComponent=!0}}]);