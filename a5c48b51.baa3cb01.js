(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(94)),i={id:"random-integers",title:"Generating Random Numbers (randint)"},c={unversionedId:"random-integers",id:"random-integers",isDocsHomePage:!1,title:"Generating Random Numbers (randint)",description:"Handel provides expressions for generating random numbers.",source:"@site/docs/doc11.md",slug:"/random-integers",permalink:"/Handel-Documentation/docs/random-integers",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/doc11.md",version:"current",sidebar:"someSidebar",previous:{title:"Procedures (chunks)",permalink:"/Handel-Documentation/docs/procedures"},next:{title:"Evaluating Mathematical Expressions (eval)",permalink:"/Handel-Documentation/docs/eval-expressions"}},s=[],d={toc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Handel provides expressions for ",Object(a.b)("strong",{parentName:"p"},"generating random numbers"),". "),Object(a.b)("p",null,"To generate a random number, use the ",Object(a.b)("inlineCode",{parentName:"p"},"randint")," keyword, followed by a range ",Object(a.b)("inlineCode",{parentName:"p"},"start to end"),"."),Object(a.b)("p",null,"Randint expressions can be used anywhere digit types are expected in Handel."),Object(a.b)("p",null,"Here is an example of the syntax:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"start\n    save somerandomdigit = randint -2 to 2\n    save somerandomnote = C5\n    update somerandomnote rshift somerandomdigit\n\n    play somerandomnote for 3b\n\n    if somerandomdigit lessthan randint 4 to 8 then\n        play somerandomnote for 3b\n    endif\n\nfinish\n")))}p.isMDXComponent=!0},94:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),p=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,b=u["".concat(i,".").concat(m)]||u[m]||l[m]||a;return t?o.a.createElement(b,c(c({ref:n},d),{},{components:t})):o.a.createElement(b,c({ref:n},d))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=t[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);