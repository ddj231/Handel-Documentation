(window.webpackJsonp=window.webpackJsonp||[]).push([[18,14],{111:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),b=o,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||r;return t?a.a.createElement(m,l(l({ref:n},s),{},{components:t})):a.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},55:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var o=t(3),a=t(7),r=(t(0),t(111)),i={id:"usage",title:"General Usage"},l={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"General Usage",description:"Example Handel Snippet",source:"@site/docs/doc3.md",slug:"/usage",permalink:"/Handel-Documentation/docs/usage",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/doc3.md",version:"current",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/Handel-Documentation/docs/installation"},next:{title:"Making noise (play and rest)",permalink:"/Handel-Documentation/docs/start-finish"}},c=[{value:"Example Handel Snippet",id:"example-handel-snippet",children:[]},{value:"Example Using Handel In Browser",id:"example-using-handel-in-browser",children:[]}],s={toc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"example-handel-snippet"},"Example Handel Snippet"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"start\n    chunk example \n        play E3, C3, G3 for 2b\n    endchunk\n    run example with sound piano, loop for 5 \nfinish\n")),Object(r.b)("h2",{id:"example-using-handel-in-browser"},"Example Using Handel In Browser"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'function clicked(){\n    Handel.RunHandel(`\n        start\n            chunk example using somePlayable \n                play somePlayable \n                rest for 1b\n            endchunk\n            save myPlayable = Eb3 for 1b\n            run example using myPlayable with sound piano, loop for 5 \n        finish\n    `)\n}\ndocument.addEventListener("click", clicked);\n')),Object(r.b)("p",null,"Note that you pass the Handel code into the ",Object(r.b)("strong",{parentName:"p"},"RunHandel")," function ",Object(r.b)("inlineCode",{parentName:"p"},"Handel.RunHandel(someHandelCode)"),"."),Object(r.b)("p",null,"To compile to midi, pass a config object to the RunHandel function with ",Object(r.b)("strong",{parentName:"p"},"outputMidi")," set to true. "),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"const config = {outputMidi: true};\nHandel.RunHandel(`start play E4 for 1b finish`, config);\n")),Object(r.b)("p",null,"Additionally, you can use the ",Object(r.b)("strong",{parentName:"p"},"StopHandel")," function to stop a running Handel program. ",Object(r.b)("inlineCode",{parentName:"p"},"Handel.StopHandel()")))}p.isMDXComponent=!0},89:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var o=t(3),a=t(7),r=(t(0),t(111)),i=(t(55),{id:"conditionals",title:"Conditionals (if - else)"}),l={unversionedId:"conditionals",id:"conditionals",isDocsHomePage:!1,title:"Conditionals (if - else)",description:"Though booleans are not built in types in Handel, Handel now supports conditonals.",source:"@site/docs/doc8.md",slug:"/conditionals",permalink:"/Handel-Documentation/docs/conditionals",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/doc8.md",version:"current",sidebar:"someSidebar",previous:{title:"Variable Reassignment (update)",permalink:"/Handel-Documentation/docs/variable-reassignment"},next:{title:"Block Loops",permalink:"/Handel-Documentation/docs/block-loops"}},c=[],s={toc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Though booleans are not built in types in Handel, Handel now supports conditonals."),Object(r.b)("p",null,"The syntax for an if - else block is as follows."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"start\n    if E4 greaterthan Cb3 then\n        play E4 for 1b \n    else\n        play Cb3 for 1b\n    endif\n    save mydigit = -5\n    if mydigit equalto -5 then\n        play C2 for 5b\n    endif\nfinish\n")),Object(r.b)("p",null,"The above (though it contains trivial conditionals) plays E4 for 1 beat. Note that else blocks are optional"))}p.isMDXComponent=!0}}]);