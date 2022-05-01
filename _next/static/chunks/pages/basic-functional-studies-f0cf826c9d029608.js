(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[930],{4031:function(e,t,n){"use strict";n.r(t);var i=n(9292),a=n(5893);t.default=function(){return(0,a.jsxs)(i.By,{children:[(0,a.jsx)(i.Dx,{text:"Basic Functional Studies"}),(0,a.jsx)("p",{children:"In the previous post, we observed some rules on how to get the most out of our functions. In this post, we will do exactly that, get the most out of them. But rather than diving straight into these techniques, we are going to come up with them ourselves. There is no better way to learn a concept than to arrive at it through simple steps. To see how we ourselves could have come up with these techniques."}),(0,a.jsx)(i.X6,{size:"2",text:"Map, Getting Rid of 50% of For Loops"}),(0,a.jsxs)("p",{children:["Let's imagine we need to add ",(0,a.jsx)(i.Rh,{children:"2"})," to every single item in a list. How would we write this code? Perhaps something like this."]}),(0,a.jsx)(i.Q_,{children:"\n    function add2ToList (list) {\n        let temp = [];\n        for (let i = 0; i < list.length; i++) {\n            temp.push(list[i] + 2);\n        }\n        return temp;\n    }\n\n    add2ToList([1,2,3])\n  "}),(0,a.jsx)("p",{children:"This function most certainly works. It does precisely what we asked. But it isn't very flexible. What if I want to add 3 to each item in the list? Well, I could go write a function called add3ToList, but that seems cumbersome, so instead let's make this function more generic."}),(0,a.jsx)(i.Q_,{children:"\n    function addNToList (n, list) {\n        let temp = [];\n        for (let i = 0; i < list.length; i++) {\n            temp.push(list[i] + n);\n        }\n        return temp;\n    }\n\n    addNToList(n, [1,2,3])\n  "}),(0,a.jsx)("p",{children:"Alright, problem solved. I can now add 3 or any number for that matter. Let's try a different problem. I want I have a list of strings and I want to concatenate something onto the front of them. Here's what that function might look like."}),(0,a.jsx)(i.Q_,{children:'\n    function concatFrontList (s, list) {\n        let temp = [];\n        for (let i = 0; i < list.length; i++) {\n            temp.push(s + list[i]);\n        }\n        return temp;\n    }\n    concatFrontList("hello, ", ["jimmy"])\n  '}),(0,a.jsx)("p",{children:"Again, this certainly works, but doesn't it look remarkably similar to our addNToList? The name and one line are the only things that changed. If we decide instead of concatenating we want to replace, or substring, or any other operation we will have to write another function that is remarkably similar to this. Couldn't we write a function that abstracts over this?"}),(0,a.jsx)(i.Q_,{children:'\n    const map = function (f, list) {\n        let temp = [];\n        for (let i = 0; i < list.length; i++) {\n            temp.push(f(list[i));\n        }\n        return temp;\n    }\n\n    const add2 = function (n) {\n        return n + 2;\n    }\n\n    const add3 = function (n) {\n        return n + 3;\n    }\n\n    const greet = function (s) {\n        return "hello " + s;\n    }\n\n    map(add2, [1,2,3]);\n    // [3,4,5]\n    map(add3, [1,2,3]);\n    // [4,5,6]\n\n    map(greet, ["jimmy"]);\n    // "hello jimmy"\n  '}),(0,a.jsx)("p",{children:'Map is that function. Map is a fairly interesting function because one of its arguments is itself a function. This function is then applied to every element of the list. What we\'ve done is extract out the essence of what we were doing in those other functions and made it reusable. This use of functions as arguments to other functions is called "higher-order functions".'}),(0,a.jsx)(i.X6,{size:"2",text:"Partial application"}),(0,a.jsx)("p",{children:"Higher-order functions allow us to abstract over behavior, not just data. We can extract out the essence of a certain transformation and allow the particulars to be passed in a function. But we still don't have the full reusability we would like to. You'll notice that we had to define two functions, add3 and add2 which basically do the same thing, let's see if generalizing this to addN does anything for us."}),(0,a.jsx)(i.Q_,{children:"\n    const addN = function (n, x) {\n        return n + x;\n    }\n\n    const add2 = function(x) {\n        return addN(2, x);\n    }\n\n    const add3 = function(x) {\n        return addN(3, x);\n    }\n\n    map(add2, [1,2,3]);\n    map(add3, [1,2,3]);\n  "}),(0,a.jsx)("p",{children:"That's not really any better, is it? The problem is map expects a function that takes one argument, but addN takes two. So we have to create functions that hard code some value of n and call addN underneath the hood. This doesn't help our situation. But isn't there something we can do? What if instead of writing those functions, addN just returned a function?"}),(0,a.jsx)(i.Q_,{children:"\n    const addN = function (n) {\n        return function (x) {\n            return n + x;\n        }\n    }\n\n    map(addN(2), [1,2,3]);\n    map(addN(3), [1,2,3]);\n  "}),(0,a.jsx)("p",{children:"There we go, no more extra function definitions. AddN is a function that returns a function. That way we can use it directly in our map call. But there is something that isn't very nice about this. First of all, it would be much messier if we had a function that took three arguments. Do we make it so they pass in two arguments and then finally the third? Do we make them pass one at a time? But really what isn't great here is the fact that what our addN is supposed to do is obscured by the fact that we have to make it return a function. What if we could have our first addN definition but somehow make it return a function? We can by using a method called partial application."}),(0,a.jsx)(i.Q_,{children:"\n    const add = function (a, b) {\n        return a + b;\n    }\n\n    map(add.bind(null, 2), [1,2,3])\n    map(add.bind(null, 3), [1,2,3])\n  "}),(0,a.jsxs)("p",{children:['Okay, now this probably seems a bit weird, what is this bind thing, and why are you passing null as the first argument? Unfortunately, javascript doesn\'t support a beautiful way to do partial application, so we can use bind. Bind\'s first argument is the "this" value of the function. Since we aren\'t using "this", we can set it to null. The rest of the arguments allow us to "bind" a value to one of the arguments of our function. In other words, when we say ',(0,a.jsx)(i.Rh,{children:"add.bind(null, 2)"})," ",'we are setting the "a" variable in add to 2 and then we are getting back a function that takes the rest of the arguments. In other words, bind takes any function and turns it into a function that returns functions!']}),(0,a.jsx)(i.X6,{size:"2",text:"Currying"}),(0,a.jsx)("p",{children:"Partial application is incredibly useful. It can eliminate tons of code repetition. In future posts, I guarantee we will see more uses of it will pop up, but there is a more powerful version of partial application. To see our problem let's change our add function to accept three variables."}),(0,a.jsx)(i.Q_,{children:"\n    const add = function (a, b, c) {\n        return a + b + c;\n    }\n  "}),(0,a.jsx)("p",{children:'Now with partial application I can do all sorts of things, I can bind to "a", bind to "a" and "b", I could even bind to all three. But to do that, I have to explicitly call bind each time. So let\'s say I want to first bind "a" and then later "b", what will that look like.'}),(0,a.jsx)(i.Q_,{children:"\n    const add2 = add.bind(null, 2);\n    const add2Then3 = add2.bind(null, 3)\n  "}),(0,a.jsx)("p",{children:'Not very pretty if you ask me. This also creates some weird cases, what will I get back if I call "add2(1)"? Since I only passed in one argument instead of the two remaining arguments "c" is undefined and thus the whole thing is. What I\'d love is to be able to pass in as many or as few arguments as I\'d like and get back a function that takes the rest of them. This idea is called currying.'}),(0,a.jsx)(i.Q_,{children:"\n    add(2)(3)(4)\n    // 9\n    add(2,3)(4)\n    // 9\n    add(2)(3, 4)\n    // 9\n    add(2,3,4)\n    // 9\n  "}),(0,a.jsx)("p",{children:"If we had a curried version of add, this is what we could do. Unfortunately currying isn't built into javascript by default, but it is available in the wonderful library lodash. Here's how we can use it."}),(0,a.jsx)(i.Q_,{children:"\n    let add = function (a,b,c) {\n        return a + b + c;\n    }\n    add = _.curry(add);\n  "}),(0,a.jsxs)("p",{children:["Now our function is curried! How is this useful? Let me leave you with one more example."," "]}),(0,a.jsx)(i.Q_,{children:"\n    let map = function (fn, list) {\n        let temp = [];\n        for (let i = 0; i < list.length; i++) {\n            temp.push(f(list[i));\n        }\n        return temp;\n    }\n    map = _.curry(map);\n\n    mapAdd2 = map(add(2))\n\n    mapAdd2([1,2,3])\n    // [3,4,5]\n    mapAdd2([3,4,5])\n    // [5,6,7]\n  "}),(0,a.jsx)("p",{children:"Here we took our map function and curried it. Now with our curried add we can combine the two, giving us a new function, something that maps and adds two. With currying, our functions can serve as readily combinable building blocks, allowing us to easily define high-level features."}),(0,a.jsx)(i.X6,{size:"2",text:"Conclusion"}),(0,a.jsx)("p",{children:"Higher-Order Functions allow us to extract the essence of a function out. We can get great reuse of our functions and work a higher abstraction. Currying allows us to take general functions and slowly add specificity. At every step, we are in control of what our functions do, what arguments they are applied to, and just how reusable they are. The basic functional techniques make our code cleaner and simpler. While these techniques come with a learning curve, they ultimately reduce the surface area of, decomplect, and simplify our code."})]})}},9292:function(e,t,n){"use strict";n.d(t,{By:function(){return F},CN:function(){return T},Dx:function(){return E},Ee:function(){return b},Fz:function(){return I},Mc:function(){return B},Q_:function(){return _},R4:function(){return W},Rh:function(){return z},X6:function(){return P},rU:function(){return w}});var i=n(9499),a=n(5988),r=n.n(a),o=n(9008),s=n(1664),l=n.n(s),c=n(4394),u=n(2041),d=n(8903),h=n(6410),f=n(8603),p=n(5893);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=l(),b=function(){return null},x=function(e){(0,h.Z)(e),e.languages.clojure=g(g({},e.languages.clojure),{},{number:/\b-?(0x)?\d*\.?\d+\b/g,logicVariable:/(\?|!)[a-zA-Z][a-zA-Z0-9-]+/})};x.displayName="clojure",x.aliases=[],c.Z.registerLanguage("javascript",u.Z),c.Z.registerLanguage("haskell",d.Z),c.Z.registerLanguage("clojure",x);var j=function(e){var t=e.children,n=e.right,a=e.top,r=e.left;e.buttom;return(0,p.jsx)("div",{style:(0,i.Z)({position:"absolute",right:n,left:r,top:a},"left",r),children:t})},y=function(e){var t=e.children,n=e.top,i=e.left,a=e.right,r=e.bottom;return(0,p.jsx)("div",{style:{paddingTop:n,paddingLeft:i,paddingRight:a,paddingBottom:r},children:t})},v=function(e){return function(e){var t,n,i;return(i=e.split("\n")).length>1&&i.shift(),n=function(e){return/^ */.exec(e)[0].length}((t=i)[0]),t.map((function(e){return e.substring(n,e.length)})).join("\n")}(e)},k=g(g({},f.mQ),{},{operator:{color:"#cb4b16"},logicVariable:{color:"#2aa198"},'pre[class*="language-"]':g(g({},f.mQ['pre[class*="language-"]']),{},{backgroundColor:"#fff"})}),N=function(e){var t=e.source,n=e.language;return(0,p.jsx)(c.Z,{language:n,style:k,children:v(t)})},_=function(e){var t=e.children;return(0,p.jsx)(N,{language:"javascript",source:t})},I=function(e){var t=e.children;return(0,p.jsx)(N,{language:"haskell",source:t})},T=function(e){var t=e.children;return(0,p.jsx)(N,{language:"clojure",source:t})},O=function(){return(0,p.jsx)(r(),{id:"1541984143",children:["body{font-family:helvetica,sans-serif;color:#333;line-height:1.5;}","a{color:#333;}"]})},L=function(e){var t=e.children;return(0,p.jsx)("div",{style:{margin:"0 auto",maxWidth:700},children:t})},Q=function(e){var t=e.children;return(0,p.jsx)("p",{style:{fontSize:"1.5em"},children:t})},B=function(e){var t=e.items,n=e.Elem,i=void 0===n?Q:n,a=e.title;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(P,{text:a}),(0,p.jsx)("ul",{children:t.map((function(e){return function(e){var t=e.href,n=e.text,i=e.Elem;return(0,p.jsx)("li",{children:(0,p.jsx)(i,{children:(0,p.jsx)(w,{href:t,children:(0,p.jsx)("a",{children:n})})})},t)}(g(g({},e),{},{Elem:i}))}))})]})},P=function(e){var t,n=e.color,i=e.text,a=e.size;return t={1:"h1",2:"h2",3:"h3",4:"h4"}[void 0===a?1:a],(0,p.jsx)(t,{style:{color:n},children:i})},z=function(e){var t=e.children;return(0,p.jsx)("code",{style:{backgroundColor:"rgba(27,31,35,0.05)",padding:"0.2em 0.4em",borderRadius:3,fontFamily:"Monaco, monospace",fontSize:13,whiteSpace:"nowrap"},children:t})},W=function(e){var t=e.children;return(0,p.jsx)("blockquote",{style:{paddingLeft:20,margin:0,marginLeft:20,borderLeft:"0.25em solid #dfe2e5"},children:t})},E=function(e){var t=e.text;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.default,{children:(0,p.jsx)("title",{children:t})}),(0,p.jsx)(P,{text:t,size:1})]})},F=function(e){var t=e.children;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(o.default,{children:[(0,p.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,p.jsx)("link",{rel:"icon",href:"data:;base64,iVBORw0KGgo="}),(0,p.jsx)("meta",{name:"author",content:"Jimmy Miller"}),(0,p.jsx)("link",{rel:"alternate",type:"application/rss+xml",title:"jimmyhmiller.github.io",href:"feed.xml"})]}),(0,p.jsx)(O,{}),(0,p.jsxs)(L,{children:[(0,p.jsx)("div",{style:{position:"relative"},children:(0,p.jsx)(j,{right:0,top:0,children:(0,p.jsx)(w,{href:"/",children:(0,p.jsx)("a",{style:{textDecoration:"none"},children:(0,p.jsx)(P,{color:"#999",text:"Jimmy Miller"})})})})}),(0,p.jsx)(y,{top:70,children:t})]})]})}},597:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/basic-functional-studies",function(){return n(4031)}])}},function(e){e.O(0,[774,621,854,888,179],(function(){return t=597,e(e.s=t);var t}));var t=e.O();_N_E=t}]);