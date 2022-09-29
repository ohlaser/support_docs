"use strict";(self.webpackChunkdocuments=self.webpackChunkdocuments||[]).push([[5450],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),o=r(86010),i=r(72389),l=r(67392),s=r(7094),u=r(12466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r;const{lazy:i,block:d,defaultValue:m,values:f,groupId:b,className:h}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),g=(0,l.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(r=v.find((e=>e.props.default)))?void 0:r.props.value)?t:v[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:E}=(0,s.U)(),[O,T]=(0,a.useState)(k),j=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=b){const e=w[b];null!=e&&e!==O&&y.some((t=>t.value===e))&&T(e)}const I=e=>{const t=e.currentTarget,r=j.indexOf(t),n=y[r].value;n!==O&&(x(t),T(n),null!=b&&E(b,String(n)))},P=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=j.indexOf(e.currentTarget)+1;r=null!=(n=j[t])?n:j[0];break}case"ArrowLeft":{var a;const t=j.indexOf(e.currentTarget)-1;r=null!=(a=j[t])?a:j[j.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},h)},y.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>j.push(e),onKeyDown:P,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=r?r:t)}))),i?(0,a.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,i.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},41762:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(65488),i=r(85162);const l={description:"\u51b7\u5374\u6c34\u306e\u7d4c\u8def\u306b\u4e0d\u5177\u5408\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u306a\u3044",sidebar_position:7},s="\u6c34\u6d41\uff1a\u4f4e\u4e0b\u3001\u505c\u6b62\u3092\u7e70\u308a\u8fd4\u3059",u={unversionedId:"error/ermessji/shui-liu-ting-zhi",id:"error/ermessji/shui-liu-ting-zhi",title:"\u6c34\u6d41\uff1a\u4f4e\u4e0b\u3001\u505c\u6b62\u3092\u7e70\u308a\u8fd4\u3059",description:"\u51b7\u5374\u6c34\u306e\u7d4c\u8def\u306b\u4e0d\u5177\u5408\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u306a\u3044",source:"@site/docs/error/ermessji/shui-liu-ting-zhi.md",sourceDirName:"error/ermessji",slug:"/error/ermessji/shui-liu-ting-zhi",permalink:"/docs/error/ermessji/shui-liu-ting-zhi",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"\u51b7\u5374\u6c34\u306e\u7d4c\u8def\u306b\u4e0d\u5177\u5408\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u306a\u3044",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u6c34\u6d41\uff1a\u5faa\u74b0\u3001\u7570\u5e38\u3092\u7e70\u308a\u8fd4\u3059",permalink:"/docs/error/ermessji/worisu"},next:{title:"\u52a0\u5de5\u306e\u30a2\u30c9\u30d0\u30a4\u30b9",permalink:"/docs/category/\u52a0\u5de5\u306e\u30a2\u30c9\u30d0\u30a4\u30b9"}},c={},p=[{value:"\u75c7\u72b6",id:"\u75c7\u72b6",level:2},{value:"\u89e3\u6c7a\u65b9\u6cd5",id:"\u89e3\u6c7a\u65b9\u6cd5",level:2}],d={toc:p};function m(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6c34\u6d41\u4f4e\u4e0b\u505c\u6b62\u3092\u7e70\u308a\u8fd4\u3059"},"\u6c34\u6d41\uff1a\u4f4e\u4e0b\u3001\u505c\u6b62\u3092\u7e70\u308a\u8fd4\u3059"),(0,a.kt)("h2",{id:"\u75c7\u72b6"},"\u75c7\u72b6"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/soft/harukaganishinai/sekyuritsofutono"},"USB\u306e\u901a\u4fe1\u4e0d\u826f"),"\u3067\u306f\u306a\u3044\u5834\u5408\u3001\u6c34\u5faa\u74b0\u30db\u30fc\u30b9\u3084\u30d5\u30ed\u30fc\u30bb\u30f3\u30b5\u30fc\u3001\u30a6\u30a9\u30fc\u30bf\u30fc\u30dd\u30f3\u30d7\u304c\u6545\u969c\u3057\u3001\u8aa4\u52d5\u4f5c\u3092\u8d77\u3053\u3057\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u3001HARUKA \u306e\u52a0\u5de5\u958b\u59cb\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u300c\u306f\u3044\u300d\u30dc\u30bf\u30f3\u304c\u62bc\u305b\u307e\u305b\u3093\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(40185).Z,width:"924",height:"649"})),(0,a.kt)("h2",{id:"\u89e3\u6c7a\u65b9\u6cd5"},"\u89e3\u6c7a\u65b9\u6cd5"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"HAJIME",label:"HAJIME",mdxType:"TabItem"},(0,a.kt)("a",{href:"/docs/soft/harukaganishinai/sekyuritsofutono"},"USB\u901a\u4fe1\u306e\u78ba\u8a8d"),"\u3001",(0,a.kt)("a",{href:"/docs/process/notoraburu-1/garanai/gattekara15guraidechiru#wttankuno"},"\u30a6\u30a9\u30fc\u30bf\u30fc\u30bf\u30f3\u30af\u306e\u6e05\u6383"),"\u3092\u884c\u3063\u3066\u3082\u56de\u5fa9\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u6c34\u5faa\u74b0\u30db\u30fc\u30b9\u3001\u30d5\u30ed\u30fc\u30bb\u30f3\u30b5\u30fc\u3001\u30a6\u30a9\u30fc\u30bf\u30fc\u30dd\u30f3\u30d7\u3044\u305a\u308c\u304b\u306e\u4ea4\u63db\u4fee\u7406\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,a.kt)(i.Z,{value:"HAJIME CL1",label:"HAJIME CL1",mdxType:"TabItem"},(0,a.kt)("a",{href:"/docs/soft/harukaganishinai/sekyuritsofutono"},"USB\u901a\u4fe1\u306e\u78ba\u8a8d"),"\u3001",(0,a.kt)("a",{href:"/docs/process/notoraburu-1/garanai/gattekara15guraidechiru#wttankuno"},"\u30a6\u30a9\u30fc\u30bf\u30fc\u30bf\u30f3\u30af\u306e\u6e05\u6383"),"\u3092\u884c\u3063\u3066\u3082\u56de\u5fa9\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u6c34\u5faa\u74b0\u30db\u30fc\u30b9\u3001\u30d5\u30ed\u30fc\u30bb\u30f3\u30b5\u30fc\u3001\u30a6\u30a9\u30fc\u30bf\u30fc\u30dd\u30f3\u30d7\u3044\u305a\u308c\u304b\u306e\u4ea4\u63db\u4fee\u7406\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,a.kt)(i.Z,{value:"HAJIME CL1 PLUS",label:"HAJIME CL1 PLUS",mdxType:"TabItem"},(0,a.kt)("a",{href:"/docs/soft/harukaganishinai/sekyuritsofutono"},"USB\u901a\u4fe1\u306e\u78ba\u8a8d"),"\u3092\u884c\u3063\u3066\u3082\u56de\u5fa9\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u51b7\u5374\u30b7\u30b9\u30c6\u30e0\u306e\u6545\u969c\u3001\u6c34\u5faa\u74b0\u30db\u30fc\u30b9\u3001\u30d5\u30ed\u30fc\u30bb\u30f3\u30b5\u30fc\u3001\u30a6\u30a9\u30fc\u30bf\u30fc\u30dd\u30f3\u30d7\u3044\u305a\u308c\u304b\u306e\u4ea4\u63db\u4fee\u7406\u304c\u5fc5\u8981\u3067\u3059\u3002"))))}m.isMDXComponent=!0},40185:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/img20191021_02-2699f92461eddb441810e1683b1dbd31.png"}}]);