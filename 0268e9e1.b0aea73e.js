(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),c=(n(0),n(146)),o={id:"keywords",title:"Keywords",sidebar_label:"Keywords"},i={id:"internals/keywords",title:"Keywords",description:"## Vault",source:"@site/docs/internals/keywords.md",permalink:"/vsync/docs/internals/keywords",editUrl:"https://github.com/ExpediaGroup/vsync/edit/master/website/docs/internals/keywords.md",sidebar_label:"Keywords",sidebar:"someSidebar",previous:{title:"Options",permalink:"/vsync/docs/deploy/options"},next:{title:"Origin",permalink:"/vsync/docs/internals/origin"}},l=[{value:"Vault",id:"vault",children:[{value:"Path",id:"path",children:[]}]},{value:"KV store",id:"kv-store",children:[{value:"KV V1",id:"kv-v1",children:[]},{value:"KV V2",id:"kv-v2",children:[]}]},{value:"Origin",id:"origin",children:[]},{value:"Destination",id:"destination",children:[]},{value:"Data paths",id:"data-paths",children:[]},{value:"Sync Info",id:"sync-info",children:[{value:"Insight",id:"insight",children:[]},{value:"Bucket",id:"bucket",children:[]},{value:"Index",id:"index",children:[]}]},{value:"Sync Path",id:"sync-path",children:[]},{value:"Task",id:"task",children:[]},{value:"Transformer",id:"transformer",children:[]},{value:"Cycle",id:"cycle",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"vault"},"Vault"),Object(c.b)("p",null,"A hashicorp product to handle secrets. ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.vaultproject.io/"}),"vault homepage")),Object(c.b)("h3",{id:"path"},"Path"),Object(c.b)("p",null,"The location where the values are stored"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"For kv mounts")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"Path = mount/env/app1 [string]\n        Key [string] : Value [string / json]\n")),Object(c.b)("p",null,"This can be confusing as ",Object(c.b)("inlineCode",{parentName:"p"},"mount/env/app")," is also called as ",Object(c.b)("inlineCode",{parentName:"p"},"key"),". So to reduce confusion we call the location a ",Object(c.b)("inlineCode",{parentName:"p"},"path")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"For approle mounts")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"Path = auth/approle/role/role_name [string]\n        token_policy [string] : value [string array]\n        .\n        .\n")),Object(c.b)("h2",{id:"kv-store"},"KV store"),Object(c.b)("p",null,"Key value is a mount in vault which can be used to store"),Object(c.b)("h3",{id:"kv-v1"},"KV V1"),Object(c.b)("p",null,"Vault mount only stores one version of key and value pair. If user wants to update, he/she will change the existing version without backup"),Object(c.b)("h3",{id:"kv-v2"},"KV V2"),Object(c.b)("p",null,"Vault mount stores multiple versions ",Object(c.b)("em",{parentName:"p"},"(default: 10)"),". If user wants to update, hq/she will create a new version from current version, so there exists a backup inherently."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Data")),Object(c.b)("p",null,"This path contains actual data for kv. Example ",Object(c.b)("inlineCode",{parentName:"p"},"mount/data/env/app1")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Metadata")),Object(c.b)("p",null,"This path contains only meta data about each kv path. Example ",Object(c.b)("inlineCode",{parentName:"p"},"mount/metadata/env/app1")),Object(c.b)("p",null,"If we access metadata, we could easily get a clean audit log."),Object(c.b)("h2",{id:"origin"},"Origin"),Object(c.b)("p",null,"This is the source of truth, is user updates any kv pair here it should be propagated to other vaults that are in sync"),Object(c.b)("p",null,"There could be only ",Object(c.b)("inlineCode",{parentName:"p"},"1")," origin"),Object(c.b)("h2",{id:"destination"},"Destination"),Object(c.b)("p",null,"This is the destination where the sync must reflect the origin kv store"),Object(c.b)("p",null,"There could be 0 or more destinations"),Object(c.b)("h2",{id:"data-paths"},"Data paths"),Object(c.b)("p",null,"A list of vault mount paths which needs to be synced. It could be different between origin and destination. Vault token provided for vsync needs to have approriate permission on these paths."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'Origin:\n"dataPaths": [\n    "secret/"\n],\n\nDestination:\n"dataPaths": [\n    "new_mount/"\n    "secret/"\n],\n')),Object(c.b)("p",null,"In future: we could have exclude paths regex and can be used to NOT sync"),Object(c.b)("h2",{id:"sync-info"},"Sync Info"),Object(c.b)("p",null,"Vsync uses consul kv to store meta data about sync."),Object(c.b)("p",null,"The datastructure is designed to handle any number of entries ","[keys, policies]"," for syncing between vaults.\nOn the positive side it overcomes the size limit of consul kv storage as well as consul event size."),Object(c.b)("p",null,"Sync Info is a collection of number of buckets (default: 20 buckets) along with 1 index."),Object(c.b)("p",null,"This structure needs to be safe for concurrent usage because more workers will update their secrets at the same time."),Object(c.b)("h3",{id:"insight"},"Insight"),Object(c.b)("p",null,"Each secret insight has these meta information"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"struct")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"version          -> vault kv version\nupdateTime       -> vault kv update time\ntype             -> kvV1 / kvV2 / policy\n")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"eg")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'{"version":1,"updateTime":"2019-05-14T23:41:52.904927369Z","type":"kvV2"}\n')),Object(c.b)("h3",{id:"bucket"},"Bucket"),Object(c.b)("p",null,"Each bucket is a map with absolute path as key and insight datastructure as value"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"eg")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'"mount/data/platform/env/app1":{"version":1,"updateTime":"2019-05-14T23:41:52.904927369Z","type":"kvV2"}\n,\n"mount/data/platform/env/app2":{"version":1,"updateTime":"2019-05-14T23:41:52.736990492Z","type":"kvV2"}\n')),Object(c.b)("h3",{id:"index"},"Index"),Object(c.b)("p",null,"An array of hashes with length as number of buckets. Each hash is constructed from contents in a particular bucket"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'["6cdb282cb3c9f6d8d3bc1d5eab88d60b728e69249f86e317c3b0d5458993bc80", ... 19 more sha256\n\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Some types are not yet implemented like kvV1 and policy")),Object(c.b)("h2",{id:"sync-path"},"Sync Path"),Object(c.b)("p",null,"A consul path to store the meta data used by vsync ","[sync info]"),Object(c.b)("h2",{id:"task"},"Task"),Object(c.b)("p",null,"Task is a datastructure given to fetch and save worker in destination cycles"),Object(c.b)("p",null,"Each task has all the information needed for the worker"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"struct")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"path         -> absolute path\nop           -> operation add/update/delete\ninsight      -> insight\n")),Object(c.b)("h2",{id:"transformer"},"Transformer"),Object(c.b)("p",null,"Each secret path is passed through a set of transformers one by one and at last the origin secret path may be transformed to destination secret path."),Object(c.b)("p",null,"To perform these changes"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"secret/data/runner/stage/app1 => runnerv2/data/stage/app1/secrets\n")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"struct")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"name (string) -> useful in logs\nfrom (regex)  -> checked with secret path for matching\nto (string)   -> could use group names present in `from` regex\n")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"eg")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n    "name": "v1->v2",\n    "from": "(?P<mount>secret)/(?P<meta>((meta)?data))?/(?P<platform>runner)/(?P<env>(dev|test|stage|prod))?/?(?P<app>\\\\w+)?/?",\n    "to": "runner2/meta/env/app/secrets"\n}\n')),Object(c.b)("h2",{id:"cycle"},"Cycle"),Object(c.b)("p",null,"A set of actions performed after an interval. Origin Cycle and Destination Cycle are different."),Object(c.b)("p",null,"If there is a fatal failure, we abort the current cycle cleanly and cancel all future cycles then halt."),Object(c.b)("p",null,"If there is a non fatal failure, we surface the error with approriate context but do not kill the cycle and future cycles."))}b.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,h=p["".concat(o,".").concat(d)]||p[d]||u[d]||c;return n?r.a.createElement(h,i({ref:t},s,{components:n})):r.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);