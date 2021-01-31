(window.webpackJsonp=window.webpackJsonp||[]).push([[3,14],{111:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?r.a.createElement(b,s(s({ref:n},l),{},{components:t})):r.a.createElement(b,s({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),o=(t(0),t(111)),i={id:"usage",title:"General Usage"},s={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"General Usage",description:"Example Handel Snippet",source:"@site/docs/doc3.md",slug:"/usage",permalink:"/Handel-Documentation/docs/usage",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/doc3.md",version:"current",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/Handel-Documentation/docs/installation"},next:{title:"Making noise (play and rest)",permalink:"/Handel-Documentation/docs/start-finish"}},c=[{value:"Example Handel Snippet",id:"example-handel-snippet",children:[]},{value:"Example Using Handel In Browser",id:"example-using-handel-in-browser",children:[]}],l={toc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"example-handel-snippet"},"Example Handel Snippet"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"start\n    chunk example \n        play E3, C3, G3 for 2b\n    endchunk\n    run example with sound piano, loop for 5 \nfinish\n")),Object(o.b)("h2",{id:"example-using-handel-in-browser"},"Example Using Handel In Browser"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'function clicked(){\n    Handel.RunHandel(`\n        start\n            chunk example using somePlayable \n                play somePlayable \n                rest for 1b\n            endchunk\n            save myPlayable = Eb3 for 1b\n            run example using myPlayable with sound piano, loop for 5 \n        finish\n    `)\n}\ndocument.addEventListener("click", clicked);\n')),Object(o.b)("p",null,"Note that you pass the Handel code into the ",Object(o.b)("strong",{parentName:"p"},"RunHandel")," function ",Object(o.b)("inlineCode",{parentName:"p"},"Handel.RunHandel(someHandelCode)"),"."),Object(o.b)("p",null,"To compile to midi, pass a config object to the RunHandel function with ",Object(o.b)("strong",{parentName:"p"},"outputMidi")," set to true. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"const config = {outputMidi: true};\nHandel.RunHandel(`start play E4 for 1b finish`, config);\n")),Object(o.b)("p",null,"Additionally, you can use the ",Object(o.b)("strong",{parentName:"p"},"StopHandel")," function to stop a running Handel program. ",Object(o.b)("inlineCode",{parentName:"p"},"Handel.StopHandel()")))}p.isMDXComponent=!0},71:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),o=(t(0),t(111)),i=(t(55),{id:"eval-expressions",title:"Evaluating Mathematical Expressions (eval)"}),s={unversionedId:"eval-expressions",id:"eval-expressions",isDocsHomePage:!1,title:"Evaluating Mathematical Expressions (eval)",description:"Handel provides expressions for evaluating mathematical expressions.",source:"@site/docs/doc12.md",slug:"/eval-expressions",permalink:"/Handel-Documentation/docs/eval-expressions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/doc12.md",version:"current",sidebar:"someSidebar",previous:{title:"Generating Random Numbers (randint)",permalink:"/Handel-Documentation/docs/random-integers"},next:{title:"Custom Instruments (load)",permalink:"/Handel-Documentation/docs/custom-instruments"}},c=[],l={toc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Handel provides expressions for ",Object(o.b)("strong",{parentName:"p"},"evaluating mathematical expressions"),". "),Object(o.b)("p",null,"To evaluate an expression use the ",Object(o.b)("inlineCode",{parentName:"p"},"eval")," keyword followed by a mathematical expression (note: division is integer division)."),Object(o.b)("p",null,"Eval expressions can be used anywhere digit types are expected in Handel."),Object(o.b)("p",null,"Here is an example of the syntax:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"start\n    save mydigit = eval (2 + 1) * 10 % 4\n    \n    chunk somechunk using somenote\n        play somenote for 2b\n    endchunk\n\n    save note = E4\n    run somechunk using note with loop for mydigit, reverb eval 20 * 100\nfinish\n")))}p.isMDXComponent=!0}}]);