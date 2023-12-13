"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[7279],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),p=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(a),g=n,k=u["".concat(d,".").concat(g)]||u[g]||s[g]||l;return a?r.createElement(k,i(i({ref:e},m),{},{components:a})):r.createElement(k,i({ref:e},m))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4974:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={title:"Category"},i=void 0,o={unversionedId:"loops/Category",id:"loops/Category",title:"Category",description:"La boucle Cat\xe9gorie liste les cat\xe9gories de votre boutique.",source:"@site/docs/loops/Category.md",sourceDirName:"loops",slug:"/loops/Category",permalink:"/docs/docs/loops/Category",draft:!1,editUrl:"https://github.com/vz777/docs/edit/main/docs/loops/Category.md",tags:[],version:"current",frontMatter:{title:"Category"},sidebar:"myAutogeneratedSidebar",previous:{title:"Cart",permalink:"/docs/docs/loops/Cart"},next:{title:"Category path",permalink:"/docs/docs/loops/Category_path"}},d={},p=[{value:"Arguments",id:"category-arguments",level:2},{value:"Sorties",id:"sorties",level:2},{value:"Valeurs possibles de tri",id:"category-order-possible-values",level:2}],m={toc:p};function s(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"La boucle Cat\xe9gorie liste les cat\xe9gories de votre boutique.\n",(0,n.kt)("inlineCode",{parentName:"p"},'{loop type="category" name="the-loop-name" [argument="value"], [...]}')),(0,n.kt)("h2",{id:"category-arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Exemple"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"content"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Un ou plusieurs ID de contenu. Lorsque ce param\xe8tre est d\xe9fini, la boucle renvoie les cat\xe9gories li\xe9es aux ID de contenus sp\xe9cifi\xe9s."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'content="3"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"current"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bool\xe9en permet soit d'exclure la cat\xe9gorie actuelle des r\xe9sultats, soit de ne correspondre qu'\xe0 cette cat\xe9gorie."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'current="yes"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exclude"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Un ou plusieurs ID de cat\xe9gorie."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'exclude="2", exclude="1,4,7"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exclude_parent"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Un ou plusieurs IDs de cat\xe9gories parentes \xe0 exclure."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'exclude_parent="12,22"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exclude_product"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Un ou plusieurs IDs de produits \xe0 exclure."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'exclude_product="3"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Un ou plusieurs IDs de cat\xe9gories."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'id="2", id="1,4,7"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"lang"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Un id de langue"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'lang="1"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"need_count_child"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bool\xe9en. Si d\xe9fini sur true, compte le nombre de sous-cat\xe9gories contenues dans la cat\xe9gorie actuelle."),(0,n.kt)("td",{parentName:"tr",align:"center"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},'need_count_child="yes"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"need_product_count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bool\xe9en. Si d\xe9finie sur true, compte le nombre de produits contenus dans la cat\xe9gorie actuelle."),(0,n.kt)("td",{parentName:"tr",align:"center"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},'need_product_count="yes"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"not_empty"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(",(0,n.kt)("strong",{parentName:"td"},"not implemented yet"),") Bool\xe9en. Si d\xe9fini sur true, seules les cat\xe9gories qui contiennent au moins un produit visible (directement ou via une sous-cat\xe9gorie) sont renvoy\xe9es."),(0,n.kt)("td",{parentName:"tr",align:"center"},"no"),(0,n.kt)("td",{parentName:"tr",align:"left"},'not_empty="yes"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Une liste de valeurs ",(0,n.kt)("br",null)," ",(0,n.kt)("a",{parentName:"td",href:"#category-order-possible-values"},"Valeurs attendues")),(0,n.kt)("td",{parentName:"tr",align:"center"},"manual"),(0,n.kt)("td",{parentName:"tr",align:"left"},'order="random"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"parent"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Un ou plusieurs IDs de cat\xe9gories parentes."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'parent="3", parent="2,5,8"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"product"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Un ou plusieurs IDs de produits."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"left"},'product="3"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"return_url"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bool\xe9en qui permet la g\xe9n\xe9ration des URL."),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},'return_url="no"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"visible"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bool\xe9en"),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},'visible="no"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"with_prev_next_info"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bool\xe9en. Si d\xe9finie sur true, les arguments de sortie $PREVIOUS et $NEXT sont disponibles."),(0,n.kt)("td",{parentName:"tr",align:"center"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},'with_prev_next_info="yes"')))),(0,n.kt)("p",null,"Ainsi que les ",(0,n.kt)("a",{parentName:"p",href:"./global_arguments"},"arguments communs")," et ",(0,n.kt)("a",{parentName:"p",href:"./search_arguments"},"arguments de recherche")),(0,n.kt)("h2",{id:"sorties"},"Sorties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"l'id de la cat\xe9gorie")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TITLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"le titre de la cat\xe9gorie")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$CHAPO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"le chapo de la cat\xe9gorie")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$CREATE_DATE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la date de cr\xe9ation de la cat\xe9gorie")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$DESCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la description de la cat\xe9gorie")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$IS_TRANSLATED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"v\xe9rifie si la cat\xe9gorie est traduite ou not")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$LOCALE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la locale utilis\xe9e pour cette boucle")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$META_DESCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la meta description de la cat\xe9gorie")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$META_KEYWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la meta keyword de la cat\xe9gorie")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$META_TITLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la meta title de la cat\xe9gorie")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PARENT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la cat\xe9gorie parente")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$POSITION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la position de la cat\xe9gorie")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$POSTSCRIPTUM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"le post-scriptum de la cat\xe9gorie")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$TEMPLATE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"l'id du template associ\xe9 \xe0 cette cat\xe9gorie")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$UPDATE_DATE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la date de mise \xe0 jour de la cat\xe9gorie")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$URL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"l'URL de la cat\xe9gorie")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$VERSION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la version de la cat\xe9gorie")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$VERSION_AUTHOR"),(0,n.kt)("td",{parentName:"tr",align:"left"},"l'auteur de la version de la cat\xe9gorie")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$VERSION_DATE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"la date de la version de la cat\xe9gorie")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$VISIBLE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Renvoi si la cat\xe9gorie est visible ou non")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PRODUCT_COUNT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Le nombre de produits visibles contenus par la cat\xe9gorie actuelle.  ",(0,n.kt)("br",null)," ",(0,n.kt)("strong",{parentName:"td"},' Uniquement disponible si "need_product_child" est d\xe9fini sur true '))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$CHILD_COUNT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Le nombre de sous-cat\xe9gories contenues par la cat\xe9gorie actuelle.",(0,n.kt)("br",null)," ",(0,n.kt)("strong",{parentName:"td"},' Uniquement disponible si "need_count_child" est d\xe9fini sur true '))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$HAS_NEXT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"true si une cat\xe9gorie existe apr\xe8s celle-ci dans la cat\xe9gorie parente actuelle, suivant les positions des cat\xe9gories. ",(0,n.kt)("br",null)," ",(0,n.kt)("strong",{parentName:"td"},' Uniquement disponible si "with_prev_next_info" est d\xe9fini sur true '))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$NEXT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"L'identifiant de la cat\xe9gorie apr\xe8s celle-ci dans la cat\xe9gorie parente actuelle, suivant les positions des cat\xe9gories, ou null s'il n'en existe aucune.",(0,n.kt)("br",null)," ",(0,n.kt)("strong",{parentName:"td"},' Uniquement disponible si "with_prev_next_info" est d\xe9fini sur true '))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$HAS_PREVIOUS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"true si une cat\xe9gorie existe avant celle-ci dans la cat\xe9gorie parente actuelle, suivant les positions des cat\xe9gories. ",(0,n.kt)("br",null)," ",(0,n.kt)("strong",{parentName:"td"},' Uniquement disponible si "with_prev_next_info" est d\xe9fini sur true '))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"$PREVIOUS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"L'identifiant de la cat\xe9gorie avant celle-ci dans la cat\xe9gorie parente actuelle, suivant les positions des cat\xe9gories, ou null s'il n'en existe aucune. ",(0,n.kt)("br",null)," ",(0,n.kt)("strong",{parentName:"td"},' Uniquement disponible si "with_prev_next_info" est d\xe9fini sur true '))))),(0,n.kt)("p",null,"Plus les ",(0,n.kt)("a",{parentName:"p",href:"./global_outputs"},"param\xe8tres de sorties communs")),(0,n.kt)("h2",{id:"category-order-possible-values"},"Valeurs possibles de tri"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"#category-arguments"},"Arguments")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Valeur croissante"),(0,n.kt)("th",{parentName:"tr",align:null},"Valeur d\xe9croissante"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Champs tri\xe9s"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"alpha"),(0,n.kt)("td",{parentName:"tr",align:null},"alpha_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"title")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"created"),(0,n.kt)("td",{parentName:"tr",align:null},"created_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"date of content creation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"id_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Order ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"manual"),(0,n.kt)("td",{parentName:"tr",align:null},"manual_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"position")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"random"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"updated"),(0,n.kt)("td",{parentName:"tr",align:null},"updated_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"date of content update")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"visible"),(0,n.kt)("td",{parentName:"tr",align:null},"visible_reverse"),(0,n.kt)("td",{parentName:"tr",align:"left"},"online items")))))}s.isMDXComponent=!0}}]);