(window.webpackJsonp=window.webpackJsonp||[]).push([[22,14],{111:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),d=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=d(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return t?a.a.createElement(b,c(c({ref:n},l),{},{components:t})):a.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(7),o=(t(0),t(111)),i={id:"usage",title:"General Usage"},c={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"General Usage",description:"Example Handel Snippet",source:"@site/docs/doc3.md",slug:"/usage",permalink:"/Handel-Documentation/docs/usage",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/doc3.md",version:"current",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/Handel-Documentation/docs/installation"},next:{title:"Making noise (play and rest)",permalink:"/Handel-Documentation/docs/start-finish"}},s=[{value:"Example Handel Snippet",id:"example-handel-snippet",children:[]},{value:"Example Using Handel In Browser",id:"example-using-handel-in-browser",children:[]}],l={toc:s};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"example-handel-snippet"},"Example Handel Snippet"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"start\n    chunk example \n        play E3, C3, G3 for 2b\n    endchunk\n    run example with sound piano, loop for 5 \nfinish\n")),Object(o.b)("h2",{id:"example-using-handel-in-browser"},"Example Using Handel In Browser"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'function clicked(){\n    Handel.RunHandel(`\n        start\n            chunk example using somePlayable \n                play somePlayable \n                rest for 1b\n            endchunk\n            save myPlayable = Eb3 for 1b\n            run example using myPlayable with sound piano, loop for 5 \n        finish\n    `)\n}\ndocument.addEventListener("click", clicked);\n')),Object(o.b)("p",null,"Note that you pass the Handel code into the ",Object(o.b)("strong",{parentName:"p"},"RunHandel")," function ",Object(o.b)("inlineCode",{parentName:"p"},"Handel.RunHandel(someHandelCode)"),"."),Object(o.b)("p",null,"To compile to midi, pass a config object to the RunHandel function with ",Object(o.b)("strong",{parentName:"p"},"outputMidi")," set to true. "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"const config = {outputMidi: true};\nHandel.RunHandel(`start play E4 for 1b finish`, config);\n")),Object(o.b)("p",null,"Additionally, you can use the ",Object(o.b)("strong",{parentName:"p"},"StopHandel")," function to stop a running Handel program. ",Object(o.b)("inlineCode",{parentName:"p"},"Handel.StopHandel()")))}d.isMDXComponent=!0},93:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(7),o=(t(0),t(111)),i=(t(55),{id:"random-integers",title:"Generating Random Numbers (randint)"}),c={unversionedId:"random-integers",id:"random-integers",isDocsHomePage:!1,title:"Generating Random Numbers (randint)",description:"Handel provides expressions for generating random numbers.",source:"@site/docs/doc11.md",slug:"/random-integers",permalink:"/Handel-Documentation/docs/random-integers",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/doc11.md",version:"current",sidebar:"someSidebar",previous:{title:"Procedures (chunks)",permalink:"/Handel-Documentation/docs/procedures"},next:{title:"Evaluating Mathematical Expressions (eval)",permalink:"/Handel-Documentation/docs/eval-expressions"}},s=[],l={toc:s};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Handel provides expressions for ",Object(o.b)("strong",{parentName:"p"},"generating random numbers"),". "),Object(o.b)("p",null,"To generate a random number, use the ",Object(o.b)("inlineCode",{parentName:"p"},"randint")," keyword, followed by a range ",Object(o.b)("inlineCode",{parentName:"p"},"start to end"),"."),Object(o.b)("p",null,"Randint expressions can be used anywhere digit types are expected in Handel."),Object(o.b)("p",null,"Here is an example of the syntax:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"start\n    save somerandomdigit = randint -2 to 2\n    save somerandomnote = C5\n    update somerandomnote rshift somerandomdigit\n\n    play somerandomnote for 3b\n\n    if somerandomdigit lessthan randint 4 to 8 then\n        play somerandomnote for 3b\n    endif\n\nfinish\n")))}d.isMDXComponent=!0}}]);