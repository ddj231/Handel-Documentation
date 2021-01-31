(window.webpackJsonp=window.webpackJsonp||[]).push([[22,14],{111:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),d=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=d(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return t?o.a.createElement(b,c(c({ref:n},s),{},{components:t})):o.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return d})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return p})),t.d(n,"RunBtn",(function(){return m})),t.d(n,"default",(function(){return f}));var r=t(3),o=t(7),a=t(0),i=t.n(a),c=t(111),l=t(10);var s=function({children:e,fallback:n}){return l.a.canUseDOM&&null!=e?i.a.createElement(i.a.Fragment,null,e()):n||null},d={id:"usage",title:"General Usage"},u={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"General Usage",description:"Example Handel Snippet",source:"@site/docs/doc3.md",slug:"/usage",permalink:"/Handel-Documentation/docs/usage",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/doc3.md",version:"current",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/Handel-Documentation/docs/installation"},next:{title:"Making noise (play and rest)",permalink:"/Handel-Documentation/docs/start-finish"}},p=[{value:"Example Handel Snippet",id:"example-handel-snippet",children:[]},{value:"Example Using Handel In Browser",id:"example-using-handel-in-browser",children:[]}],m=function(e){var n=e.code;return Object(c.b)(s,{mdxType:"BrowserOnly"},Object(c.b)("button",{onClick:function(){Handel.RunHandel(n)},style:{height:50,width:50,backgroundColor:"crimson",display:"flex",flexDirection:"row",justifyContent:"center",borderRadius:5,textAlign:"center",color:"white"}},Object(c.b)("p",{style:{margin:"auto"}},"Run")))},b={toc:p,RunBtn:m};function f(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"example-handel-snippet"},"Example Handel Snippet"),Object(c.b)(s,{mdxType:"BrowserOnly"},"import * as Handel from 'handel-pl';"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"start\n    chunk example \n        play E3, C3, G3 for 2b\n    endchunk\n    run example with sound piano, loop for 5 \nfinish\n")),Object(c.b)(s,{mdxType:"BrowserOnly"},Object(c.b)(m,{code:"\nstart\n    chunk example \n        play E3, C3, G3 for 2b\n    endchunk\n    run example with sound piano, loop for 5 \nfinish\n",mdxType:"RunBtn"})),Object(c.b)("h2",{id:"example-using-handel-in-browser"},"Example Using Handel In Browser"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'function clicked(){\n    Handel.RunHandel(`\n        start\n            chunk example using somePlayable \n                play somePlayable \n                rest for 1b\n            endchunk\n            save myPlayable = Eb3 for 1b\n            run example using myPlayable with sound piano, loop for 5 \n        finish\n    `)\n}\ndocument.addEventListener("click", clicked);\n')),Object(c.b)("p",null,"Note that you pass the Handel code into the ",Object(c.b)("strong",{parentName:"p"},"RunHandel")," function ",Object(c.b)("inlineCode",{parentName:"p"},"Handel.RunHandel(someHandelCode)"),"."),Object(c.b)("p",null,"To compile to midi, pass a config object to the RunHandel function with ",Object(c.b)("strong",{parentName:"p"},"outputMidi")," set to true. "),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"const config = {outputMidi: true};\nHandel.RunHandel(`start play E4 for 1b finish`, config);\n")),Object(c.b)("p",null,"Additionally, you can use the ",Object(c.b)("strong",{parentName:"p"},"StopHandel")," function to stop a running Handel program. ",Object(c.b)("inlineCode",{parentName:"p"},"Handel.StopHandel()")))}f.isMDXComponent=!0},93:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(111)),i=t(55),c={id:"random-integers",title:"Generating Random Numbers (randint)"},l={unversionedId:"random-integers",id:"random-integers",isDocsHomePage:!1,title:"Generating Random Numbers (randint)",description:"Handel provides expressions for generating random numbers.",source:"@site/docs/doc11.md",slug:"/random-integers",permalink:"/Handel-Documentation/docs/random-integers",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/doc11.md",version:"current",sidebar:"someSidebar",previous:{title:"Procedures (chunks)",permalink:"/Handel-Documentation/docs/procedures"},next:{title:"Evaluating Mathematical Expressions (eval)",permalink:"/Handel-Documentation/docs/eval-expressions"}},s=[],d={toc:s};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Handel provides expressions for ",Object(a.b)("strong",{parentName:"p"},"generating random numbers"),". "),Object(a.b)("p",null,"To generate a random number, use the ",Object(a.b)("inlineCode",{parentName:"p"},"randint")," keyword, followed by a range ",Object(a.b)("inlineCode",{parentName:"p"},"start to end"),"."),Object(a.b)("p",null,"Randint expressions can be used anywhere digit types are expected in Handel."),Object(a.b)("p",null,"Here is an example of the syntax:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"start\n    save somerandomdigit = randint -2 to 2\n    save somerandomnote = C5\n    update somerandomnote rshift somerandomdigit\n\n    play somerandomnote for 3b\n\n    if somerandomdigit lessthan randint 4 to 8 then\n        play somerandomnote for 3b\n    endif\n\nfinish\n")),Object(a.b)(i.RunBtn,{code:"\nstart\n    save somerandomdigit = randint -2 to 2\n    save somerandomnote = C5\n    update somerandomnote rshift somerandomdigit\n    play somerandomnote for 3b\n    if somerandomdigit lessthan randint 4 to 8 then\n        play somerandomnote for 3b\n    endif\nfinish\n",mdxType:"RunBtn"}),Object(a.b)("br",null))}u.isMDXComponent=!0}}]);