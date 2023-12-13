"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[6234,7227,6708,5451],{8517:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var s=a(7294),l=a(2814),n=a(1436);class o extends s.Component{render(){let e="please stop using it.";return this.props.package&&(e=s.createElement("span",null,"please use ",s.createElement("a",{href:"/modules?q="+this.props.package},this.props.package)," instead")),s.createElement("div",{className:"abandoned"},s.createElement(l.G,{icon:n.eHv})," This package is ",s.createElement("strong",null,"abandoned"),", ",e)}}},9834:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var s=a(7462),l=a(4942),n=a(7294),o=a(9669),r=a.n(o),c=a(1693),i=a(3347);class p extends n.Component{constructor(e){var t;super(e),t=this,(0,l.Z)(this,"getModules",(function(e,a){void 0===e&&(e=null),void 0===a&&(a=!1);const s=null!==e?e:"https://packagist.org/search.json?per_page=16&type=thelia-module&q="+t.state.search;r().get(s,{}).then((e=>{var s;const l=e.data.results.map((function(e){const t=e.name.split("/");return{vendor:t[0],package:t[1],...e}}));let n=a?l:t.state.modules.concat(l);t.setState({modules:n,nextPageLink:null!=(s=e.data.next)?s:null})})).catch((e=>{console.log(e)}))})),(0,l.Z)(this,"doSearch",(e=>{null!==e?(window.history.pushState("Search","Search Thelia modules "+e,"?q="+e),this.setState({search:e},(()=>{this.getModules(null,!0)}))):this.getModules()})),(0,l.Z)(this,"switchListStyle",(()=>{this.setState(((e,t)=>({galleryStyle:!e.galleryStyle})))})),this.state={modules:[],search:"",galleryStyle:!0}}componentDidMount(){const e=new URLSearchParams(window.location.search);let t=null!=e.get("q")?e.get("q"):null;this.doSearch(t)}render(){const{modules:e,nextPageLink:t,galleryStyle:a}=this.state;return n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement(c.default,{doSearch:this.doSearch,defaulValue:this.state.search})),n.createElement("div",{className:"row"},e.map(((e,t)=>n.createElement(i.default,(0,s.Z)({key:e.name},e))))),n.createElement("div",{className:"row"},null!==t?n.createElement("button",{className:"button button--block button--secondary",onClick:()=>{this.getModules(t)}},"See more"):null))}}},3347:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=a(7294),l=a(9669),n=a.n(l),o=a(1249),r=a.n(o),c=a(2814),i=a(1436),p=a(1417),d=a(8517);class h extends s.Component{constructor(e){super(e),this.state={init:!1,lastVersion:null,copied:!1}}getAdditionalData(){n().get("https://repo.packagist.org/p/"+this.props.name+".json").then((e=>{const t=e.data.packages[this.props.name],a=Object.keys(t).map((e=>r().valid(e)?e:e+".0")).filter((e=>r().valid(e))).sort(r().rcompare)[0];this.setState({init:!0,lastVersion:t[a]})}))}copyText(e){navigator.clipboard.writeText(e),this.setState({copied:!0},(()=>{setTimeout((()=>{this.setState({copied:!1})}),800)}))}componentDidMount(){this.getAdditionalData()}render(){const{lastVersion:e}=this.state;let t="composer require "+this.props.name;e&&(t=t+" ~"+e.version);const a=this.state.copied?i.LEp:i.kZ_,l=this.props.package?this.props.package.charAt(0).toUpperCase()+this.props.package.slice(1).replace("-module","").replaceAll("-"," "):"";return s.createElement("div",{className:"col col--6",style:{marginBottom:40}},s.createElement("div",{className:"card item theliaModule"},s.createElement("div",{className:"card__header"},s.createElement("h2",null,l),s.createElement("p",null,"By ","thelia"===this.props.vendor?"Thelia core team":this.props.vendor)),s.createElement("div",{className:"card__body"},s.createElement("p",null,this.props.description),s.createElement("div",{className:"container"},s.createElement("div",{className:"row"},s.createElement("div",{className:"col col--10 composerCommand"},t),s.createElement("div",{className:"col col--2"},s.createElement("a",{className:"buttonCopy",onClick:()=>this.copyText(t)},s.createElement(c.G,{icon:a}))))),this.props.hasOwnProperty("abandoned")?s.createElement(d.default,{package:this.props.abandoned}):null),s.createElement("div",{className:"card__footer"},s.createElement("div",{className:"button-group button-group--block"},s.createElement("a",{className:"button button--secondary",href:this.props.repository,target:"_blank"},s.createElement(c.G,{icon:p.zhw})," Github"),s.createElement("a",{className:"button button--secondary",href:this.props.url,target:"_blank"},s.createElement(c.G,{icon:i.hGM})," Packagist")))))}}},1693:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var s=a(7294);class l extends s.Component{componentDidMount(){this.searchInput.focus()}render(){const e=this.props.doSearch;return s.createElement("input",{className:"col col--6 col--offset-3 searchInput",ref:e=>{this.searchInput=e},placeholder:"Search modules...",value:this.props.defaulValue,type:"text",onChange:t=>e(t.target.value)})}}}}]);