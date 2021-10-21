"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8366],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),m=o,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2354:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"configuration",title:"Configuration"},l=void 0,u={unversionedId:"tutorial/dao/configuration",id:"tutorial/dao/configuration",isDocsHomePage:!1,title:"Configuration",description:"\u26a1\ufe0f TributeDAO Framework provides you a set of modular and extensible smart contracts to launch your DAO with minimal costs.",source:"@site/docs/tutorial/dao/Configuration.md",sourceDirName:"tutorial/dao",slug:"/tutorial/dao/configuration",permalink:"/docs/tutorial/dao/configuration",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/tutorial/dao/Configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"Configuration"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/tutorial/dao/installation"},next:{title:"Deployment",permalink:"/docs/tutorial/dao/deployment"}},c=[{value:"Requirements",id:"requirements",children:[]},{value:"Configuring the project",id:"configuring-the-project",children:[{value:"Environment Variables",id:"environment-variables",children:[]}]},{value:"Problems?",id:"problems",children:[]}],p={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u26a1\ufe0f ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/openlawteam/tribute-contracts"},"TributeDAO Framework"))," provides you a set of modular and extensible smart contracts to launch your DAO with minimal costs."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://infura.io/product/ethereum"},"Infura Ethereum API KEY")),": sign up for free, verify your email, create an ethereum project to get your API Key (also known as ",(0,a.kt)("inlineCode",{parentName:"li"},"Project Id"),"). We will use that to deploy the contracts to the Rinkeby network. Checkout this ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://blog.infura.io/getting-started-with-infura-28e41844cc89/"},"Infura Blog Post"))," for more info on that.")),(0,a.kt)("h2",{id:"configuring-the-project"},"Configuring the project"),(0,a.kt)("p",null,"\u2699\ufe0f Now that you have the ",(0,a.kt)("inlineCode",{parentName:"p"},"tribute-contracts")," project prepared in your local environment, it is time to set up the DAO configs. These configs are a set of environment variables that will provide to the deployment script all the essential information to create the smart contracts in the correct Ethereum network. In this section we will be covering the deploying of the DAO using ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://rinkeby.etherscan.io/"},"Rinkeby"))," test network."),(0,a.kt)("h3",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("p",null,"The first step is to create a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file in the root of the ",(0,a.kt)("em",{parentName:"p"},"tribute-contracts")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"touch .env\n")),(0,a.kt)("p",null,"Then set the following content to the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file, and fill out each environment variable with the proper values as indicated in the comments below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'###### Tribute Contracts env vars ######\n\n# Set the name of your DAO.\nDAO_NAME=My First DAO\n\n# The public ethereum address that belongs to the Owner of the DAO,\n# in this case, it is your public ethereum address on Rinkeby network.\n# Make sure you have some ETH, otherwise the deployment will fail.\nDAO_OWNER_ADDR=0x...\n\n# You can set that to use the same address you have in the DAO_OWNER_ADDR\nCOUPON_CREATOR_ADDR=0x...\n\n# The name of the ERC20 token of your DAO.\nERC20_TOKEN_NAME=My First DAO Token\n\n# The symbol of your ERC20 Token that will be used to control the\n# DAO units that each member holds.\nERC20_TOKEN_SYMBOL=TDAO\n\n# Number of decimals to display the token units in MM. We usually\n# set 0 because the DAO units are managed in WEI, and to be able\n# to see that in the MM wallet you need to remove the precision.\nERC20_TOKEN_DECIMALS=0\n\n# The Ethereum Node URL to connect the Ethereum network. You can follow\n# these steps to get your ProjectId/API Key from Infura:\n# https://blog.infura.io/getting-started-with-infura-28e41844cc89/\n# Or can use the default one from OpenLaw team, or set your own Infura/Alchemy API keys\n#ETH_NODE_URL=wss://eth-rinkeby.ws.alchemyapi.io/v2/your-api-key\n# Replace the "your-api-key" with your infura key\nETH_NODE_URL=wss://rinkeby.infura.io/ws/v3/your-api-key\n\n# The 12 word "secret recovery phrase" for the ethereum address\n# referenced in DAO_OWNER_ADDR above. This can be found in your wallet.\n# It will be used to create the HD wallet and sign transactions on your behalf.\nTRUFFLE_MNEMONIC=...\n\n###### Subgraph env vars ######\n\n# Set it to true if you want to deploy the subgraph to the TheGraph.com API.\n# Usually we leave it disabled because we deploy to a local Graph Node\n# created in docker/docker-compose.yml file.\nREMOTE_GRAPH_NODE=false\n')),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The ",(0,a.kt)("strong",{parentName:"p"},"DAO_OWNER_ADDR")," env var needs to match the ethereum address derived from your ",(0,a.kt)("strong",{parentName:"p"},"TRUFFLE_MNEMONIC"),"."))),(0,a.kt)("p",null,"\u26a1\ufe0f Alright! You have configured the project to deploy the contracts to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://rinkeby.etherscan.io/"},"Rinkeby"))," test network. Let's move the next section to finally publish your DAO to the world \ud83c\udf0e!"),(0,a.kt)("h2",{id:"problems"},"Problems?"),(0,a.kt)("p",null,"Ask for help on ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://discord.gg/xXMA2DYqNf"},"Discord"))," or on ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/openlawteam/tribute-contracts/discussions/new"},"GitHub Discussions")),"."))}h.isMDXComponent=!0}}]);