"use strict";(self.webpackChunkthelia=self.webpackChunkthelia||[]).push([[6708,7227],{8517:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var s=a(7294),r=a(2814),n=a(1436);class o extends s.Component{render(){let e="please stop using it.";return this.props.package&&(e=s.createElement("span",null,"please use ",s.createElement("a",{href:"/modules?q="+this.props.package},this.props.package)," instead")),s.createElement("div",{className:"abandoned"},s.createElement(r.G,{icon:n.eHv})," This package is ",s.createElement("strong",null,"abandoned"),", ",e)}}},3347:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var s=a(7294),r=a(9669),n=a.n(r),o=a(1249),l=a.n(o),c=a(2814),i=a(1436),p=a(1417),m=a(8517);class d extends s.Component{constructor(e){super(e),this.state={init:!1,lastVersion:null,copied:!1}}getAdditionalData(){n().get("https://repo.packagist.org/p/"+this.props.name+".json").then((e=>{const t=e.data.packages[this.props.name],a=Object.keys(t).map((e=>l().valid(e)?e:e+".0")).filter((e=>l().valid(e))).sort(l().rcompare)[0];this.setState({init:!0,lastVersion:t[a]})}))}copyText(e){navigator.clipboard.writeText(e),this.setState({copied:!0},(()=>{setTimeout((()=>{this.setState({copied:!1})}),800)}))}componentDidMount(){this.getAdditionalData()}render(){const{lastVersion:e}=this.state;let t="composer require "+this.props.name;e&&(t=t+" ~"+e.version);const a=this.state.copied?i.LEp:i.kZ_,r=this.props.package?this.props.package.charAt(0).toUpperCase()+this.props.package.slice(1).replace("-module","").replaceAll("-"," "):"";return s.createElement("div",{className:"col col--6",style:{marginBottom:40}},s.createElement("div",{className:"card item theliaModule"},s.createElement("div",{className:"card__header"},s.createElement("h2",null,r),s.createElement("p",null,"By ","thelia"===this.props.vendor?"Thelia core team":this.props.vendor)),s.createElement("div",{className:"card__body"},s.createElement("p",null,this.props.description),s.createElement("div",{className:"container"},s.createElement("div",{className:"row"},s.createElement("div",{className:"col col--10 composerCommand"},t),s.createElement("div",{className:"col col--2"},s.createElement("a",{className:"buttonCopy",onClick:()=>this.copyText(t)},s.createElement(c.G,{icon:a}))))),this.props.hasOwnProperty("abandoned")?s.createElement(m.default,{package:this.props.abandoned}):null),s.createElement("div",{className:"card__footer"},s.createElement("div",{className:"button-group button-group--block"},s.createElement("a",{className:"button button--secondary",href:this.props.repository,target:"_blank"},s.createElement(c.G,{icon:p.zhw})," Github"),s.createElement("a",{className:"button button--secondary",href:this.props.url,target:"_blank"},s.createElement(c.G,{icon:i.hGM})," Packagist")))))}}}}]);