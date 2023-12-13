"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[1141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,v=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(v,s(s({ref:t},c),{},{components:n})):r.createElement(v,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Events",sidebar_position:9},s=void 0,l={unversionedId:"events",id:"events",title:"Events",description:"Thelia d\xe9clenche un grand nombre d'\xe9v\xe9nements au cours de diff\xe9rents process : cr\xe9ation de compte, traitement des commandes, ...",source:"@site/docs/events.md",sourceDirName:".",slug:"/events",permalink:"/docs/docs/events",draft:!1,editUrl:"https://github.com/vz777/docs/edit/main/docs/events.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Events",sidebar_position:9},sidebar:"myAutogeneratedSidebar",previous:{title:"Hooks",permalink:"/docs/docs/hooks"},next:{title:"Forms",permalink:"/docs/docs/forms"}},i={},p=[{value:"\xc9v\xe9nements natifs",id:"\xe9v\xe9nements-natifs",level:3},{value:"\xc9v\xe9nements Propel",id:"\xe9v\xe9nements-propel",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Thelia d\xe9clenche un grand nombre d'\xe9v\xe9nements au cours de diff\xe9rents process : cr\xe9ation de compte, traitement des commandes, ...\nVous pouvez \xe9couter n'importe lequel de ces \xe9v\xe9nements pour ajouter ou remplacer de la logique. Ou ajouter vos propres \xe9v\xe9nements qui peuvent \xeatre \xe9cout\xe9s par d'autres modules.\nPlus d'informations sur le composant Event dispatcher peuvent \xeatre trouv\xe9es sur ",(0,a.kt)("a",{parentName:"p",href:"https://symfony.com/doc/current/components/event_dispatcher.html"},"la documentation Symfony")),(0,a.kt)("p",null,"Pour faire cela, vous devez cr\xe9er un observateur d'\xe9v\xe9nement, c'est juste une classe simple qui impl\xe9mente l'interface ",(0,a.kt)("inlineCode",{parentName:"p"},"EventSubscriberInterface")," avec une fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"getSubscribedEvents")," pour choisir l'\xe9v\xe9nement \xe0 \xe9couter :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace MyModule\\EventListener;\n\nuse Symfony\\Component\\EventDispatcher\\EventSubscriberInterface;\nuse Symfony\\Component\\HttpFoundation\\RequestStack;\nuse Thelia\\Core\\Event\\TheliaEvents;\n\nclass LogoutListener implements EventSubscriberInterface\n{\n    protected $requestStack;\n\n    public function __construct(RequestStack $requestStack)\n    {\n        $this->requestStack = $requestStack;\n    }\n\n\n    public static function getSubscribedEvents($event)\n    {\n        // return the subscribed events, their methods and priorities\n        return [\n            TheliaEvents::CUSTOMER_LOGOUT => ['onCustomerLogout', 30]\n        ];\n    }\n\n    public function onCustomerLogout()\n    {\n       // Do what you want at customer logout\n    }\n}\n")),(0,a.kt)("h3",{id:"\xe9v\xe9nements-natifs"},"\xc9v\xe9nements natifs"),(0,a.kt)("p",null,"Les \xe9v\xe9nements natifs de Thelia sont tous list\xe9s dans la classe ",(0,a.kt)("inlineCode",{parentName:"p"},"TheliaEvents"),"."),(0,a.kt)("h3",{id:"\xe9v\xe9nements-propel"},"\xc9v\xe9nements Propel"),(0,a.kt)("p",null,"Propel d\xe9clenche plusieurs \xe9v\xe9nements pendant le cycle de vie du mod\xe8le :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom de la constante"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"PRE_SAVE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Avant la persistance de l'objet")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"POST_SAVE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Apr\xe8s la persistance de l'objet")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"PRE_INSERT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Avant l'insertion dans la base de donn\xe9es")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"POST_INSERT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Apr\xe8s l'insertion dans la base de donn\xe9es")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"PRE_UPDATE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Avant la mise \xe0 jour de l'objet dans la base de donn\xe9es")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"POST_UPDATE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Apr\xe8s la mise \xe0 jour de l'objet dans la base de donn\xe9es")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"PRE_DELETE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Avant la suppression de l'objet dans la base de donn\xe9es")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"POST_DELETE - Apr\xe8s la suppression de l'objet dans la base de donn\xe9es."),(0,a.kt)("td",{parentName:"tr",align:"left"})))),(0,a.kt)("p",null,"Ces constantes sont accessibles pour la classe dont le nom de mod\xe8le est suffix\xe9 par Event.\nPar exemple, pour \xe9couter la mise \xe0 jour d'un produit, utilisez l'\xe9v\xe9nement ",(0,a.kt)("inlineCode",{parentName:"p"},"ProductEvent::POST_UPDATE")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace MyModule\\EventListener;\n\nuse Symfony\\Component\\EventDispatcher\\EventSubscriberInterface;\nuse Symfony\\Component\\HttpFoundation\\RequestStack;\nuse Thelia\\Model\\Event\\ProductEvent;\n\nclass ProductListener implements EventSubscriberInterface\n{\n    public static function getSubscribedEvents($event)\n    {\n        // return the subscribed events, their methods and priorities\n        return [\n            ProductEvent::POST_UPDATE => ['postProductUpdate', 30]\n        ];\n    }\n\n    public function postProductUpdate(ProductEvent $event)\n    {\n        $productModel = $event->getModel();\n       // Do what you want with the product\n    }\n}\n")))}u.isMDXComponent=!0}}]);