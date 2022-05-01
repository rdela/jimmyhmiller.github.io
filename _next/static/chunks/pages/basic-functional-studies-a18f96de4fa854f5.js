(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[930],{597:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/basic-functional-studies",function(){return n(9632)}])},9632:function(e,t,n){"use strict";n.r(t);var i=n(5893),a=n(1438);t.default=function(){return(0,i.jsxs)(a.By,{children:[(0,i.jsx)(a.Dx,{text:"Basic Functional Studies"}),(0,i.jsx)("p",{children:"In the previous post, we observed some rules on how to get the most out of our functions. In this post, we will do exactly that, get the most out of them. But rather than diving straight into these techniques, we are going to come up with them ourselves. There is no better way to learn a concept than to arrive at it through simple steps. To see how we ourselves could have come up with these techniques."}),(0,i.jsx)(a.X6,{size:"2",text:"Map, Getting Rid of 50% of For Loops"}),(0,i.jsxs)("p",{children:["Let's imagine we need to add ",(0,i.jsx)(a.Rh,{children:"2"})," to every single item in a list. How would we write this code? Perhaps something like this."]}),(0,i.jsx)(a.Q_,{children:"\n    function add2ToList (list) {\n        let temp = [];\n        for (let i = 0; i < list.length; i++) {\n            temp.push(list[i] + 2);\n        }\n        return temp;\n    }\n\n    add2ToList([1,2,3])\n  "}),(0,i.jsx)("p",{children:"This function most certainly works. It does precisely what we asked. But it isn't very flexible. What if I want to add 3 to each item in the list? Well, I could go write a function called add3ToList, but that seems cumbersome, so instead let's make this function more generic."}),(0,i.jsx)(a.Q_,{children:"\n    function addNToList (n, list) {\n        let temp = [];\n        for (let i = 0; i < list.length; i++) {\n            temp.push(list[i] + n);\n        }\n        return temp;\n    }\n\n    addNToList(n, [1,2,3])\n  "}),(0,i.jsx)("p",{children:"Alright, problem solved. I can now add 3 or any number for that matter. Let's try a different problem. I want I have a list of strings and I want to concatenate something onto the front of them. Here's what that function might look like."}),(0,i.jsx)(a.Q_,{children:'\n    function concatFrontList (s, list) {\n        let temp = [];\n        for (let i = 0; i < list.length; i++) {\n            temp.push(s + list[i]);\n        }\n        return temp;\n    }\n    concatFrontList("hello, ", ["jimmy"])\n  '}),(0,i.jsx)("p",{children:"Again, this certainly works, but doesn't it look remarkably similar to our addNToList? The name and one line are the only things that changed. If we decide instead of concatenating we want to replace, or substring, or any other operation we will have to write another function that is remarkably similar to this. Couldn't we write a function that abstracts over this?"}),(0,i.jsx)(a.Q_,{children:'\n    const map = function (f, list) {\n        let temp = [];\n        for (let i = 0; i < list.length; i++) {\n            temp.push(f(list[i));\n        }\n        return temp;\n    }\n\n    const add2 = function (n) {\n        return n + 2;\n    }\n\n    const add3 = function (n) {\n        return n + 3;\n    }\n\n    const greet = function (s) {\n        return "hello " + s;\n    }\n\n    map(add2, [1,2,3]);\n    // [3,4,5]\n    map(add3, [1,2,3]);\n    // [4,5,6]\n\n    map(greet, ["jimmy"]);\n    // "hello jimmy"\n  '}),(0,i.jsx)("p",{children:'Map is that function. Map is a fairly interesting function because one of its arguments is itself a function. This function is then applied to every element of the list. What we\'ve done is extract out the essence of what we were doing in those other functions and made it reusable. This use of functions as arguments to other functions is called "higher-order functions".'}),(0,i.jsx)(a.X6,{size:"2",text:"Partial application"}),(0,i.jsx)("p",{children:"Higher-order functions allow us to abstract over behavior, not just data. We can extract out the essence of a certain transformation and allow the particulars to be passed in a function. But we still don't have the full reusability we would like to. You'll notice that we had to define two functions, add3 and add2 which basically do the same thing, let's see if generalizing this to addN does anything for us."}),(0,i.jsx)(a.Q_,{children:"\n    const addN = function (n, x) {\n        return n + x;\n    }\n\n    const add2 = function(x) {\n        return addN(2, x);\n    }\n\n    const add3 = function(x) {\n        return addN(3, x);\n    }\n\n    map(add2, [1,2,3]);\n    map(add3, [1,2,3]);\n  "}),(0,i.jsx)("p",{children:"That's not really any better, is it? The problem is map expects a function that takes one argument, but addN takes two. So we have to create functions that hard code some value of n and call addN underneath the hood. This doesn't help our situation. But isn't there something we can do? What if instead of writing those functions, addN just returned a function?"}),(0,i.jsx)(a.Q_,{children:"\n    const addN = function (n) {\n        return function (x) {\n            return n + x;\n        }\n    }\n\n    map(addN(2), [1,2,3]);\n    map(addN(3), [1,2,3]);\n  "}),(0,i.jsx)("p",{children:"There we go, no more extra function definitions. AddN is a function that returns a function. That way we can use it directly in our map call. But there is something that isn't very nice about this. First of all, it would be much messier if we had a function that took three arguments. Do we make it so they pass in two arguments and then finally the third? Do we make them pass one at a time? But really what isn't great here is the fact that what our addN is supposed to do is obscured by the fact that we have to make it return a function. What if we could have our first addN definition but somehow make it return a function? We can by using a method called partial application."}),(0,i.jsx)(a.Q_,{children:"\n    const add = function (a, b) {\n        return a + b;\n    }\n\n    map(add.bind(null, 2), [1,2,3])\n    map(add.bind(null, 3), [1,2,3])\n  "}),(0,i.jsxs)("p",{children:['Okay, now this probably seems a bit weird, what is this bind thing, and why are you passing null as the first argument? Unfortunately, javascript doesn\'t support a beautiful way to do partial application, so we can use bind. Bind\'s first argument is the "this" value of the function. Since we aren\'t using "this", we can set it to null. The rest of the arguments allow us to "bind" a value to one of the arguments of our function. In other words, when we say ',(0,i.jsx)(a.Rh,{children:"add.bind(null, 2)"})," ",'we are setting the "a" variable in add to 2 and then we are getting back a function that takes the rest of the arguments. In other words, bind takes any function and turns it into a function that returns functions!']}),(0,i.jsx)(a.X6,{size:"2",text:"Currying"}),(0,i.jsx)("p",{children:"Partial application is incredibly useful. It can eliminate tons of code repetition. In future posts, I guarantee we will see more uses of it will pop up, but there is a more powerful version of partial application. To see our problem let's change our add function to accept three variables."}),(0,i.jsx)(a.Q_,{children:"\n    const add = function (a, b, c) {\n        return a + b + c;\n    }\n  "}),(0,i.jsx)("p",{children:'Now with partial application I can do all sorts of things, I can bind to "a", bind to "a" and "b", I could even bind to all three. But to do that, I have to explicitly call bind each time. So let\'s say I want to first bind "a" and then later "b", what will that look like.'}),(0,i.jsx)(a.Q_,{children:"\n    const add2 = add.bind(null, 2);\n    const add2Then3 = add2.bind(null, 3)\n  "}),(0,i.jsx)("p",{children:'Not very pretty if you ask me. This also creates some weird cases, what will I get back if I call "add2(1)"? Since I only passed in one argument instead of the two remaining arguments "c" is undefined and thus the whole thing is. What I\'d love is to be able to pass in as many or as few arguments as I\'d like and get back a function that takes the rest of them. This idea is called currying.'}),(0,i.jsx)(a.Q_,{children:"\n    add(2)(3)(4)\n    // 9\n    add(2,3)(4)\n    // 9\n    add(2)(3, 4)\n    // 9\n    add(2,3,4)\n    // 9\n  "}),(0,i.jsx)("p",{children:"If we had a curried version of add, this is what we could do. Unfortunately currying isn't built into javascript by default, but it is available in the wonderful library lodash. Here's how we can use it."}),(0,i.jsx)(a.Q_,{children:"\n    let add = function (a,b,c) {\n        return a + b + c;\n    }\n    add = _.curry(add);\n  "}),(0,i.jsxs)("p",{children:["Now our function is curried! How is this useful? Let me leave you with one more example."," "]}),(0,i.jsx)(a.Q_,{children:"\n    let map = function (fn, list) {\n        let temp = [];\n        for (let i = 0; i < list.length; i++) {\n            temp.push(f(list[i));\n        }\n        return temp;\n    }\n    map = _.curry(map);\n\n    mapAdd2 = map(add(2))\n\n    mapAdd2([1,2,3])\n    // [3,4,5]\n    mapAdd2([3,4,5])\n    // [5,6,7]\n  "}),(0,i.jsx)("p",{children:"Here we took our map function and curried it. Now with our curried add we can combine the two, giving us a new function, something that maps and adds two. With currying, our functions can serve as readily combinable building blocks, allowing us to easily define high-level features."}),(0,i.jsx)(a.X6,{size:"2",text:"Conclusion"}),(0,i.jsx)("p",{children:"Higher-Order Functions allow us to extract the essence of a function out. We can get great reuse of our functions and work a higher abstraction. Currying allows us to take general functions and slowly add specificity. At every step, we are in control of what our functions do, what arguments they are applied to, and just how reusable they are. The basic functional techniques make our code cleaner and simpler. While these techniques come with a learning curve, they ultimately reduce the surface area of, decomplect, and simplify our code."})]})}},1438:function(e,t,n){"use strict";n.d(t,{By:function(){return S},CN:function(){return T},Dx:function(){return W},Ee:function(){return x},Fz:function(){return _},Mc:function(){return B},Q_:function(){return N},R4:function(){return F},Rh:function(){return O},X6:function(){return C},rU:function(){return w}});var i=n(5893),a=n(5988),r=n.n(a),o=n(9008),s=n(1664),l=n.n(s),c=n(7294),u=n(4394),d=n(2041),h=n(8903),f=n(6410),m=n(8603);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){p(e,t,n[t])}))}return e}var w=l(),x=function(e){var t=(0,c.useState)(!1),n=t[0],a=t[1],r=n?{position:"fixed",zIndex:100,top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80vw"}:{};return(0,i.jsxs)(i.Fragment,{children:[n&&(0,i.jsx)("div",{onClick:function(e){return a(!1)},style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgb(0,0,0,0.8)"}}),(0,i.jsx)("div",{style:g({},r),children:n&&(0,i.jsx)("img",g({onClick:function(){return a((function(e){return!e}))},style:{width:"100%"}},e))}),(0,i.jsx)("img",g({onClick:function(){return a((function(e){return!e}))},style:{width:"100%"}},e))]})},b=function(e){(0,f.Z)(e),e.languages.clojure=g({},e.languages.clojure,{number:/\b-?(0x)?\d*\.?\d+\b/g,logicVariable:/(\?|!)[a-zA-Z][a-zA-Z0-9-]+/})};b.displayName="clojure",b.aliases=[],u.Z.registerLanguage("javascript",d.Z),u.Z.registerLanguage("haskell",h.Z),u.Z.registerLanguage("clojure",b);var j=function(e){var t=e.children,n=e.right,a=e.top,r=e.left;e.buttom;return(0,i.jsx)("div",{style:p({position:"absolute",right:n,left:r,top:a},"left",r),children:t})},y=function(e){var t=e.children,n=e.top,a=e.left,r=e.right,o=e.bottom;return(0,i.jsx)("div",{style:{paddingTop:n,paddingLeft:a,paddingRight:r,paddingBottom:o},children:t})},v=function(e){return function(e){var t,n=((t=e.split("\n")).length>1&&t.shift(),t),i=function(e){return/^ */.exec(e)[0].length}(n[0]);return n.map((function(e){return e.substring(i,e.length)})).join("\n")}(e)},k=g({},m.mQ,{operator:{color:"#cb4b16"},logicVariable:{color:"#2aa198"},'pre[class*="language-"]':g({},m.mQ['pre[class*="language-"]'],{backgroundColor:"#fff"})}),I=function(e){var t=e.source,n=e.language;return(0,i.jsx)(u.Z,{language:n,style:k,children:v(t)})},N=function(e){var t=e.children;return(0,i.jsx)(I,{language:"javascript",source:t})},_=function(e){var t=e.children;return(0,i.jsx)(I,{language:"haskell",source:t})},T=function(e){var t=e.children;return(0,i.jsx)(I,{language:"clojure",source:t})},L=function(){return(0,i.jsx)(r(),{id:"4dc580444c2ee173",children:"body{font-family:helvetica,sans-serif;color:#333;line-height:1.5}a{color:#333}"})},Q=function(e){var t=e.children;return(0,i.jsx)("div",{style:{margin:"0 auto",maxWidth:700},children:t})},z=function(e){var t=e.children;return(0,i.jsx)("p",{style:{fontSize:"1.5em"},children:t})},B=function(e){var t=e.items,n=e.Elem,a=void 0===n?z:n,r=e.title;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(C,{text:r}),(0,i.jsx)("ul",{children:t.map((function(e){return function(e){var t=e.href,n=e.text,a=e.Elem;return(0,i.jsx)("li",{children:(0,i.jsx)(a,{children:(0,i.jsx)(w,{href:t,children:(0,i.jsx)("a",{children:n})})})},t)}(g({},e,{Elem:a}))}))})]})},C=function(e){var t=e.color,n=e.text,a=e.size,r={1:"h1",2:"h2",3:"h3",4:"h4"}[void 0===a?1:a];return(0,i.jsx)(r,{style:{color:t},children:n})},O=function(e){var t=e.children;return(0,i.jsx)("code",{style:{backgroundColor:"rgba(27,31,35,0.05)",padding:"0.2em 0.4em",borderRadius:3,fontFamily:"Monaco, monospace",fontSize:13,whiteSpace:"nowrap"},children:t})},F=function(e){var t=e.children;return(0,i.jsx)("blockquote",{style:{paddingLeft:20,margin:0,marginLeft:20,borderLeft:"0.25em solid #dfe2e5"},children:t})},W=function(e){var t=e.text;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.default,{children:(0,i.jsx)("title",{children:t})}),(0,i.jsx)(C,{text:t,size:1})]})},S=function(e){var t=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.default,{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"data:;base64,iVBORw0KGgo="}),(0,i.jsx)("meta",{name:"author",content:"Jimmy Miller"}),(0,i.jsx)("link",{rel:"alternate",type:"application/rss+xml",title:"jimmyhmiller.github.io",href:"feed.xml"})]}),(0,i.jsx)(L,{}),(0,i.jsxs)(Q,{children:[(0,i.jsx)("div",{style:{position:"relative"},children:(0,i.jsx)(j,{right:0,top:0,children:(0,i.jsx)(w,{href:"/",children:(0,i.jsx)("a",{style:{textDecoration:"none"},children:(0,i.jsx)(C,{color:"#999",text:"Jimmy Miller"})})})})}),(0,i.jsx)(y,{top:70,children:t})]})]})}}},function(e){e.O(0,[774,346,854,888,179],(function(){return t=597,e(e.s=t);var t}));var t=e.O();_N_E=t}]);