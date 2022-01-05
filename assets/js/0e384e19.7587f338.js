"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},l="EtherData SDK \u4f7f\u7528\u8bf4\u660e",u={unversionedId:"intro",id:"intro",title:"EtherData SDK \u4f7f\u7528\u8bf4\u660e",description:"Build And Publish SDK",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/etherdata-blockchain/etherdata-sdk/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Introduction",permalink:"/docs/kotlin/intro"}},s=[{value:"\u6587\u4ef6\u7ed3\u6784",id:"\u6587\u4ef6\u7ed3\u6784",children:[],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"etherdata-sdk-\u4f7f\u7528\u8bf4\u660e"},"EtherData SDK \u4f7f\u7528\u8bf4\u660e"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/etherdata-blockchain/etherdata-sdk/actions/workflows/build-sdk.yml"},(0,a.kt)("img",{parentName:"a",src:"https://github.com/etherdata-blockchain/etherdata-sdk/actions/workflows/build-sdk.yml/badge.svg",alt:"Build And Publish SDK"}))),(0,a.kt)("p",null,"EtherData SDK\u7684JSON RPC\u90e8\u5206 \u662f\u4e00\u4e2a\u5b8c\u5168\u81ea\u52a8\u751f\u6210\u7684SDK\u3002\n\u6240\u6709\u7684JSON RPC \u5b9a\u4e49\u7684YAML\u6587\u4ef6\u90fd\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/etherdata-blockchain/etherdata-sdk/tree/main/sdk"},"\u8fd9\u91cc\u83b7\u53d6\u3002")),(0,a.kt)("p",null,"\u76ee\u524d\u652f\u6301\u81ea\u52a8\u751f\u6210\u7684SDK\u8bed\u8a00\u6709\u4ee5\u4e0b\u51e0\u4e2a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Typescript (Javascript \u540c\u6837\u652f\u6301)"),(0,a.kt)("li",{parentName:"ul"},"React Components"),(0,a.kt)("li",{parentName:"ul"},"Kotlin (Java\u540c\u6837\u652f\u6301)")),(0,a.kt)("p",null,"\u672a\u6765\u8fd8\u4f1a\u7ee7\u7eed\u6dfb\u52a0\u66f4\u591a\u7684\u8bed\u8a00\u652f\u6301\u7248\u672c\u3002\u82e5\u8981\u6709\u4efb\u4f55\u7684Feature request\u6216\u8005 Issues\uff0c \u8bf7\u5728Github\u4e0a\u8fdb\u884c\u63d0\u4ea4\u3002"),(0,a.kt)("h2",{id:"\u6587\u4ef6\u7ed3\u6784"},"\u6587\u4ef6\u7ed3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"package/\n\u251c\u2500 node_modules/\n\u251c\u2500 etd-sdk-generator/\n\u251c\u2500 schemas/\n\u251c\u2500 sdk/\n\u2502  \u251c\u2500 json_rpc.yml\n\u251c\u2500 sdk-dist/\n\u2502  \u251c\u2500 kotlin/\n\u2502  \u251c\u2500 react/\n\u2502  \u251c\u2500 typescript/\n\u251c\u2500 new_file\n\u251c\u2500 readme.md\n\n")),(0,a.kt)("p",null,"\u5177\u4f53\u7684\u5b9e\u73b0\u4ee3\u7801\u4f1a\u5728\u4e13\u95e8\u7684\u6587\u6863\u76ee\u5f55\u4e0b\u8fdb\u884c\u8be6\u7ec6\u4ecb\u7ecd\u3002"))}d.isMDXComponent=!0}}]);