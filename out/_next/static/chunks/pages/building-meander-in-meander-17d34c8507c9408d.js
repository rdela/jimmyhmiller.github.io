(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[827],{8894:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/building-meander-in-meander",function(){return n(3365)}])},3365:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(1438);t.default=function(){return(0,r.jsxs)(a.By,{children:[(0,r.jsx)(a.Dx,{text:"Building Meander in Meander"}),(0,r.jsxs)("p",{children:[(0,r.jsx)("a",{href:"https://github.com/noprompt/meander/",children:"Meander"})," has been (in my personal opinion) a wonderful success. With meander.epsilon, we can express most of the data transformations we are interested in. There are of course a few rough edges, a few things we'd change. But as more people have begun to use meander and more people present problems they are tackling with meander, it becomes clear that this approach is working. And yet, there is something that isn't working quite the way we'd like; the implementation of the meander compiler itself."]}),(0,r.jsxs)("p",{children:["This isn't meant as a diss on the code. Ultimately the organization of the code is actually really nice. There are clear, defined boundaries, there is a clear separation of functionality, the code itself isn't a mess by any standard. Nor is this a diss on the quality of code generated by the meander compiler. There are certainly areas that we could improve, but in general, meander produces code that is fast and small. In all the meander matches we've written, we have never once encountered the \"method code too large\" error that has plagued complex pattern matches when using libraries like core.match."," "]}),(0,r.jsx)("p",{children:"But there is still something not right with the meander.epsilon compiler. As you dive into the code base and try to make modifications, it becomes hard to trace the way data is being transformed. The code is littered with if statements needed to inspect the structure of the data we are getting. Then, we have to pull out all the bits and parts we care about. What data is and isn't available at a given point is far from clear. But perhaps even more importantly, the shape of our data is lost. The meander.epsilon compiler is just converting between data structures, we read matches in as data, parse them as an ast, build a matrix-based IR, build a more direct IR, do optimizations, and deduplication, and then generate clojure code (also data). But looking at our compiler all of this is completely opaque, despite our best efforts."}),(0,r.jsx)(a.X6,{size:"2",text:"meander.zeta"}),(0,r.jsx)("p",{children:"In meander.zeta we are taking a different approach. All the details haven't been worked out yet, but in this article, I want to share the general approach so that others can understand what we are looking to accomplish. To do that, we are going to build our own mini-meander compiler using meander.epsilon. Our compiler will not be efficient or support many matches. But it will give you a taste of what meander can do, as well as give a taste of how we are using meander to implement itself."}),(0,r.jsx)("p",{children:"Before we get started though, let's talk about our plan. First to keep our code clear and this article from stretching out forever, we are going to limit our feature set to matching on logic-variables and vectors. For our purposes that should be all we need. Further, we are only going to be implementing the \"match\" side of meander. Substitution is left as an exercise to the reader. To accomplish all of this clearly, we will start by first implementing a parser. Then taking our AST (abstract syntax tree) produced from our parser, we will implement a simple meander interpreter. Finally, we will show how meander's symbolic nature allows us to easily transform this interpreter into a compiler, with minimal changes. Let's begin."}),(0,r.jsx)(a.X6,{size:"2",text:"Parser"}),(0,r.jsx)("p",{children:"Our parser is going to mirror the format used by the meander parser. I will deviate a bit, but the general approach will be the same, so you will begin to see a bit of what the internals of meander looks like. But rather than build the parser first, let's describe the output we would like from our parser."}),(0,r.jsx)(a.CN,{children:"\n      (parse '?x)\n      ;; =>\n      {:tag :logic-variable :symbol '?x}\n\n      (parse '[?x ?y])\n      ;; =>\n      {:tag :vector\n       :sequence [{:tag :logic-variable :symbol '?x}\n                  {:tag :logic-variable :symbol '?y}]}\n  "}),(0,r.jsxs)("p",{children:["Here we have two very simple examples of the input and output we expect from our parser. Our goal is to take our pattern and turn it into these nice, unambiguous maps. These maps will always have a ",(0,r.jsx)(a.Rh,{children:":tag"})," ","value and then any other keys they need to record the information our interpreter or compiler might want. So, let's start by writing a parser that can only handle logic-variables, then will figure out how to deal with vectors."]}),(0,r.jsx)(a.CN,{children:"\n    (defn parse [expr]\n      (m/rewrite expr\n        (m/symbol _ (m/re #\"^?.+\") :as ?symbol)\n        {:tag :logic-variable\n         :symbol ?symbol}))\n\n    (parse '?x)\n    ;; =>\n    {:tag :logic-variable :symbol '?x}\n\n    (parse '?y)\n    ;; =>\n    {:tag :logic-variable :symbol '?y}\n\n    (parse 'y)\n    ;; =>\n    nil\n  "}),(0,r.jsxs)("p",{children:["This parser is very straightforward. We are taking advantage of meander's"," ",(0,r.jsx)(a.Rh,{children:"symbol"})," and ",(0,r.jsx)(a.Rh,{children:"re"})," operators to make sure that we get a symbol whose name starts with a ",(0,r.jsx)(a.Rh,{children:"?"}),". Other than that, we do not match on anything else and so everything else will just return nil. Let's start by trying to extend this to vectors."]}),(0,r.jsx)(a.CN,{children:'\n    (defn parse [expr]\n      (m/rewrite expr\n        [!xs ...]\n        {:tag :vector\n         :sequence [(m/cata !xs) ...]}\n\n        (m/symbol _ (m/re #"^?.*") :as ?symbol)\n        {:tag :logic-variable\n         :symbol ?symbol}))\n\n    (parse \'[?x ?y])\n    ;; =>\n    {:tag :vector\n     :sequence\n     [{:tag :logic-variable, :symbol ?x}\n      {:tag :logic-variable, :symbol ?y}]}\n  '}),(0,r.jsxs)("p",{children:["Here we pull out all the contents of our vector and use"," ",(0,r.jsx)(a.Rh,{children:"m/cata"})," to recursively parse our input. If you have never used cata you can think of it just like recur but for patterns. With that we have written our parser as far as we need to for our purposes."]}),(0,r.jsx)(a.X6,{size:"2",text:"Interpreter"}),(0,r.jsxs)("p",{children:["Now that we have an ast, we can write a simple interpreter. What our interpreter will do is given an input and a pattern and an environment, we will return an environment with all our logic variables set to some value, or we will return ",(0,r.jsx)(a.Rh,{children:":fail"}),". Rather than try to assemble our interpreter piece by piece, I will begin by showing you the entire thing."]}),(0,r.jsx)(a.CN,{children:"\n    (defn interpret [expr target env]\n      (m/match [expr target env]\n\n        [{:tag :logic-variable :symbol ?symbol} ?target ?env]\n        (if (contains? ?env ?symbol)\n          (if (= ?target (get ?env ?symbol))\n            ?env\n            :fail)\n          (assoc ?env ?symbol ?target))\n\n        [{:tag :vector :sequence ()} ?target ?env]\n        ?env\n\n        [{:tag :vector :sequence (?x)} ?target ?env]\n        (interpret ?x (nth ?target 0) ?env)\n\n        [{:tag :vector :sequence (?x & ?rest)} ?target ?env]\n        (interpret {:tag :vector :sequence ?rest}\n                   (subvec ?target 1)\n                   (interpret ?x (nth ?target 0) ?env))))\n\n    (interpret (parse '[?x ?y]) [1 2] {})\n\n    ;; =>\n    {'?x 1 '?y 2}\n  "}),(0,r.jsx)("p",{children:"If you've written an interpreter before this shouldn't be too surprising. First we handle logic variables by looking them up in the environment. We handle the cases of the logic variable existing in the environment and matching, it existing and not matching, and it not existing. Next we handle some vectors cases. Here we handle the empty case, the single element case, and the case with more than one element. This interpreter does work for the input we've given it. But think about what would happen if we did the same pattern but just passed a single number? We'd throw an error because we never actually check that our input is a vector. We could just go and add a vector check to all of our vector cases, but that means we will be checking that something is a vector for every single element of our vector. So let's try a different approach."}),(0,r.jsx)(a.CN,{children:"\n    (defn interpret [expr target env]\n      (m/match [expr target env]\n\n        [{:tag :logic-variable :symbol ?symbol} ?target ?env]\n        (if (contains? ?env ?symbol)\n          (if (= ?target (get ?env ?symbol))\n            ?env\n            :fail)\n          (assoc ?env ?symbol ?target))\n\n        ;; Ensure target is a vector\n        [{:tag :vector :checked nil :sequence ?sequence} ?target ?env]\n        (if (vector? ?target)\n          (interpret {:tag :vector :checked true :sequence ?sequence} ?target ?env)\n          :fail)\n\n        [{:tag :vector :sequence ()} ?target ?env]\n        ?env\n\n        [{:tag :vector :sequence (?x)} ?target ?env]\n        (interpret ?x (nth ?target 0) ?env)\n\n        [{:tag :vector :checked ?checked :sequence (?x & ?rest)} ?target ?env]\n        (interpret {:tag :vector :checked ?checked :sequence ?rest}\n                   (subvec ?target 1)\n                   (interpret ?x (nth ?target 0) ?env))))\n  "}),(0,r.jsxs)("p",{children:["Taking advantage of the fact that meander matches are ordered, we added an earlier match that will perform the check for us, and then when we recurse we simply set checked to true. That means, this pattern will no longer match and we can continue with the interpreter as before. There is still a problem with this interpreter that we aren't going to fix in this post, it does not check the size of the vector. For our purposes, doing this would be fairly easy, we check the size of ",(0,r.jsx)(a.Rh,{children:"?sequence"})," and ensure target has the same size. But what would we do if we added repeats (e.g. ",(0,r.jsx)(a.Rh,{children:"..."}),", ",(0,r.jsx)(a.Rh,{children:"..1"})," etc)? For now, we will leave this off, but this might be a good exercise for thinking about on your own."]}),(0,r.jsx)("p",{children:"Now that we have a working interpreter, let's look at how we can make this a compiler. Doing so with meander will actually be suprisingly easy."}),(0,r.jsx)(a.X6,{size:"2",text:"Compiler"}),(0,r.jsxs)("p",{children:["Our transition from interpreter to compiler will be simpler than any I have seen before. The translation is basically mechanical. Here is our first version of our compiler."," "]}),(0,r.jsx)(a.CN,{children:"\n    (defn compile [expr target env]\n      (m/rewrite [expr target env]\n\n        [{:tag :logic-variable :symbol ?symbol} ?target ?env]\n        (if (contains? ?env ('quote ?symbol))\n          (if (= ?target (get ?env ('quote ?symbol)))\n            ?env\n            :fail)\n          (assoc ?env ('quote ?symbol) ?target))\n\n        ;; Ensure target is a vector\n        [{:tag :vector :checked nil :sequence ?sequence} ?target ?env]\n        (if (vector? ?target)\n          (m/cata [{:tag :vector :checked true :sequence ?sequence} ?target ?env])\n          :fail)\n\n        [{:tag :vector :sequence ()} ?target ?env]\n        ?env\n\n        [{:tag :vector :sequence (?x)} ?target ?env]\n        (m/cata [?x (nth ?target 0) ?env])\n\n        [{:tag :vector :checked ?checked :sequence (?x & ?rest)} ?target ?env]\n        (m/cata [{:tag :vector :checked ?checked :sequence ?rest}\n                 (subvec ?target 1)\n                 (m/cata [?x (nth ?target 0) ?env])])))\n  "}),(0,r.jsxs)("p",{children:["At first glance, it might be quite hard to spot the difference. There are only a few differences here. First and most crucially is that we have changed from ",(0,r.jsx)(a.Rh,{children:" m/match"})," to"," ",(0,r.jsx)(a.Rh,{children:"m/rewrite"}),". So now instead of our right-hand side being code that will be immediately run, it is actually data that we are outputting, in this case, that data is code. Secondly, we have quoted some of our symbols. Because we will ultimately be outputting this code in a macro and looking up symbols in an environment, they need to be quoted. Finally we have changed from clojure recursive function calls to using meanders recursion operator ",(0,r.jsx)(a.Rh,{children:"m/cata"}),". These are our only real changes and given that, we can now make a macro for matching that will compile our pattern."]}),(0,r.jsx)(a.CN,{children:'\n  (defmacro match [target expr]\n      (let [target_sym (gensym "target_")\n            env_sym (gensym "env_")]\n        `(let [~target_sym ~target\n               ~env_sym {}]\n           ~(compile (parse expr) target_sym env_sym))))\n\n  (match [1 2 1] [?x ?y ?x])\n  ;; => {?x 1 ?y 2}\n  (match [1 2 2] [?x ?y ?x])\n  ;; => :fail\n'}),(0,r.jsx)("p",{children:"No longer is there a runtime cost to parsing our pattern and then interpretive overhead for crawling through the ast deciding what code to run. All of this happens in our macroexpansion. But there is one small problem. If we look at the code generated by this compiler, we will see that it is rather repetitive and long for what it does. This occurs because of the following clause above:"}),(0,r.jsx)(a.CN,{children:"\n  [{:tag :vector :checked ?checked :sequence (?x & ?rest)} ?target ?env]\n  (m/cata [{:tag :vector :checked ?checked :sequence ?rest}\n           (subvec ?target 1)\n           (m/cata [?x (nth ?target 0) ?env])])\n"}),(0,r.jsxs)("p",{children:["Line 4 here is the culprit for our explosion of code. Ultimately our compilation returns us an expression that returns an environment. We build up this environment as we go through our vector. Line 4 allows us to do exactly that, expand into some code that will update our environment. But it does this over and over again. As we continue our compilation our"," ",(0,r.jsx)(a.Rh,{children:"?env"})," becomes more and more branching code. Luckily there is a pretty simple fix for this."]}),(0,r.jsx)(a.CN,{children:'\n   (m/and [{:tag :vector :checked ?checked :sequence (?x & ?rest)} ?target ?env]\n          (m/let [?env-sym (gensym "_env_")]))\n        (let [?env-sym (m/cata [?x (nth ?target 0) ?env])]\n          (m/cata [{:tag :vector :checked ?checked :sequence ?rest}\n                   (subvec ?target 1)\n                   ?env-sym]))\n'}),(0,r.jsxs)("p",{children:["Here is our updated code that no longer creates a huge compilation output. Rather than directly updating our ",(0,r.jsx)(a.Rh,{children:"?env"})," by embedding more and more code. We make a new symbol that will store our environment and pass that down through our recursion. Now that we have solved that problem we end up with some fairly reasonable generated code."]}),(0,r.jsx)(a.CN,{children:"\n  (let\n    [target_19362 [1 2 1] env_19363 {}]\n    (if (vector? target_19362)\n      (let*\n        [_env_19364\n         (if (contains? env_19363 '?x)\n           (if (= (nth target_19362 0) (get env_19363 '?x))\n             env_19363\n             :fail)\n           (assoc env_19363 '?x (nth target_19362 0)))]\n        (let\n          [_env_19365\n           (if (contains? _env_19364 '?y)\n             (if (= (nth (subvec target_19362 1) 0) (get _env_19364 '?y))\n               _env_19364\n               :fail)\n             (assoc _env_19364 '?y (nth (subvec target_19362 1) 0)))]\n          (if (contains? _env_19365 '?x)\n            (if (=\n                  (nth (subvec (subvec target_19362 1) 1) 0)\n                  (get _env_19365 '?x))\n              _env_19365\n              :fail)\n            (assoc\n              _env_19365\n              '?x\n              (nth (subvec (subvec target_19362 1) 1) 0)))))\n      :fail))\n"}),(0,r.jsxs)("p",{children:["Admittedly this is still quite a bit of code for what we are doing. If you look at it for even a moment you can see some issues. We definitely run nth and subvec entirely too many times. But once we look back at code it becomes pretty obvious that the gensym trick we used before could easy solve that problem. But there is also something still a bit unsatisfying about this generated code. Shouldn't it just be simpler? We know that"," ",(0,r.jsx)(a.Rh,{children:"?y"})," is only assigned once so why check if it is in the environment or not yet? We also know that the first thing we match on"," ",(0,r.jsx)(a.Rh,{children:"?x"})," will always succeed. Why are we checking there as well? For the case we are looking at now, we know that our input is a vector and in fact, we know exactly what our output should be at compile because we were passed a literal!"]}),(0,r.jsxs)("p",{children:["These sorts of optimizations are completely possible with this framework. We don't have the space to fully explore them, but I will just give a general flavor. What if during compile time we also kept a compile-time env of all the things we know? So we know that our input is a vector, so why check that at run time? We know exactly which logic-variables have been bound or not, so ",(0,r.jsx)(a.Rh,{children:"?x"})," can just be directly assigned to"," ",(0,r.jsx)(a.Rh,{children:"(nth ?target 0)"})," right away. Hopefully, you can see that there is nothing about this approach that stops us from making these sorts of optimizations in the future."]}),(0,r.jsx)(a.X6,{size:"2",text:"Conclusion"}),(0,r.jsx)("p",{children:"I hope that from this post you learned how meander can be incredibly useful when building out a compiler in clojure. Its direct, symbolic, pattern matching approach simplifies a great deal of what goes into writing a compiler for your own customer dsl. It gives you clear and concise code that lets you reason about your cases. As we've built out zeta we've found meander's structured approach to help us understand our code and give us a clear sense of what to do next. Give this technique a try the next time you have a dsl in mind. Why settle for an interpreter when meander makes it this easy to write a compiler?"})]})}},1438:function(e,t,n){"use strict";n.d(t,{By:function(){return S},CN:function(){return T},Dx:function(){return O},Ee:function(){return w},Fz:function(){return R},Mc:function(){return B},Q_:function(){return q},R4:function(){return F},Rh:function(){return I},X6:function(){return W},rU:function(){return f}});var r=n(5893),a=n(5988),i=n.n(a),o=n(9008),s=n(1664),l=n.n(s),c=n(7294),h=n(4394),u=n(2041),d=n(8903),m=n(6410),g=n(8603);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}var f=l(),w=function(e){var t=(0,c.useState)(!1),n=t[0],a=t[1],i=n?{position:"fixed",zIndex:100,top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80vw"}:{};return(0,r.jsxs)(r.Fragment,{children:[n&&(0,r.jsx)("div",{onClick:function(e){return a(!1)},style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgb(0,0,0,0.8)"}}),(0,r.jsx)("div",{style:v({},i),children:n&&(0,r.jsx)("img",v({onClick:function(){return a((function(e){return!e}))},style:{width:"100%"}},e))}),(0,r.jsx)("img",v({onClick:function(){return a((function(e){return!e}))},style:{width:"100%"}},e))]})},y=function(e){(0,m.Z)(e),e.languages.clojure=v({},e.languages.clojure,{number:/\b-?(0x)?\d*\.?\d+\b/g,logicVariable:/(\?|!)[a-zA-Z][a-zA-Z0-9-]+/})};y.displayName="clojure",y.aliases=[],h.Z.registerLanguage("javascript",u.Z),h.Z.registerLanguage("haskell",d.Z),h.Z.registerLanguage("clojure",y);var b=function(e){var t=e.children,n=e.right,a=e.top,i=e.left;e.buttom;return(0,r.jsx)("div",{style:p({position:"absolute",right:n,left:i,top:a},"left",i),children:t})},x=function(e){var t=e.children,n=e.top,a=e.left,i=e.right,o=e.bottom;return(0,r.jsx)("div",{style:{paddingTop:n,paddingLeft:a,paddingRight:i,paddingBottom:o},children:t})},j=function(e){return function(e){var t,n=((t=e.split("\n")).length>1&&t.shift(),t),r=function(e){return/^ */.exec(e)[0].length}(n[0]);return n.map((function(e){return e.substring(r,e.length)})).join("\n")}(e)},k=v({},g.mQ,{operator:{color:"#cb4b16"},logicVariable:{color:"#2aa198"},'pre[class*="language-"]':v({},g.mQ['pre[class*="language-"]'],{backgroundColor:"#fff"})}),_=function(e){var t=e.source,n=e.language;return(0,r.jsx)(h.Z,{language:n,style:k,children:j(t)})},q=function(e){var t=e.children;return(0,r.jsx)(_,{language:"javascript",source:t})},R=function(e){var t=e.children;return(0,r.jsx)(_,{language:"haskell",source:t})},T=function(e){var t=e.children;return(0,r.jsx)(_,{language:"clojure",source:t})},z=function(){return(0,r.jsx)(i(),{id:"4dc580444c2ee173",children:"body{font-family:helvetica,sans-serif;color:#333;line-height:1.5}a{color:#333}"})},N=function(e){var t=e.children;return(0,r.jsx)("div",{style:{margin:"0 auto",maxWidth:700},children:t})},C=function(e){var t=e.children;return(0,r.jsx)("p",{style:{fontSize:"1.5em"},children:t})},B=function(e){var t=e.items,n=e.Elem,a=void 0===n?C:n,i=e.title;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(W,{text:i}),(0,r.jsx)("ul",{children:t.map((function(e){return function(e){var t=e.href,n=e.text,a=e.Elem;return(0,r.jsx)("li",{children:(0,r.jsx)(a,{children:(0,r.jsx)(f,{href:t,children:(0,r.jsx)("a",{children:n})})})},t)}(v({},e,{Elem:a}))}))})]})},W=function(e){var t=e.color,n=e.text,a=e.size,i={1:"h1",2:"h2",3:"h3",4:"h4"}[void 0===a?1:a];return(0,r.jsx)(i,{style:{color:t},children:n})},I=function(e){var t=e.children;return(0,r.jsx)("code",{style:{backgroundColor:"rgba(27,31,35,0.05)",padding:"0.2em 0.4em",borderRadius:3,fontFamily:"Monaco, monospace",fontSize:13,whiteSpace:"nowrap"},children:t})},F=function(e){var t=e.children;return(0,r.jsx)("blockquote",{style:{paddingLeft:20,margin:0,marginLeft:20,borderLeft:"0.25em solid #dfe2e5"},children:t})},O=function(e){var t=e.text;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.default,{children:(0,r.jsx)("title",{children:t})}),(0,r.jsx)(W,{text:t,size:1})]})},S=function(e){var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"data:;base64,iVBORw0KGgo="}),(0,r.jsx)("meta",{name:"author",content:"Jimmy Miller"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",title:"jimmyhmiller.github.io",href:"feed.xml"})]}),(0,r.jsx)(z,{}),(0,r.jsxs)(N,{children:[(0,r.jsx)("div",{style:{position:"relative"},children:(0,r.jsx)(b,{right:0,top:0,children:(0,r.jsx)(f,{href:"/",children:(0,r.jsx)("a",{style:{textDecoration:"none"},children:(0,r.jsx)(W,{color:"#999",text:"Jimmy Miller"})})})})}),(0,r.jsx)(x,{top:70,children:t})]})]})}}},function(e){e.O(0,[774,346,854,888,179],(function(){return t=8894,e(e.s=t);var t}));var t=e.O();_N_E=t}]);