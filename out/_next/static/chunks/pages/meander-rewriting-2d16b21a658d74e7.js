(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[250],{3916:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/meander-rewriting",function(){return n(5117)}])},5117:function(e,t,n){"use strict";n.r(t);var i=n(5893),r=n(1438),a=n(1664),s=n.n(a);t.default=function(){return(0,i.jsxs)(r.By,{children:[(0,i.jsx)(r.Dx,{text:"Introduction to Term Rewriting with Meander"}),(0,i.jsxs)("p",{children:["Meander is heavily inspired by the capabilities of term rewriting languages. But sadly, there aren't many introductions to term rewriting aimed at everyday software engineers. Typically introductions to term rewriting immediately dive into discussing mathematical properties or proving theorems. These can be interesting and useful in their own right. But personally, I like to get an intuitive feel for something before diving into a formalism. That is the aim of this post, to help you have a more intuitive understanding of how Term Rewriting works and what it is capable of. This post will not focus on practical uses of meander, if you are interested in that check out"," ",(0,i.jsx)(s(),{href:"/meander-practical",children:(0,i.jsx)("a",{children:"Meander for Practical Data Transformation"})}),"."]}),(0,i.jsx)(r.X6,{size:"2",text:"The Basics"}),(0,i.jsxs)("p",{children:["The goal of Term Rewriting is to take some bit of data and rewrite it into some other bit of data. We accomplish this by writing rules that tell us for a given piece of data what we should turn it into."," "]}),(0,i.jsx)(r.CN,{children:"\n    (require '[meander.strategy.epsilon :as r]\n             '[meander.epsilon :as m])\n\n    (def x-to-y\n      (r/rewrite\n       :x :y))\n\n    (x-to-y :x)\n    ;; => :y\n  "}),(0,i.jsxs)("p",{children:["Here is the most simple rewrite rule imaginable. If we are given"," ",(0,i.jsx)(r.Rh,{children:":x"})," we turn it into ",(0,i.jsx)(r.Rh,{children:":y"}),". In term rewriting, the pattern we are using to match is often called the"," ",(0,i.jsx)(r.Rh,{children:"left-hand-side"})," and the data we return is called the"," ",(0,i.jsx)(r.Rh,{children:"right-hand-side"}),". So ",(0,i.jsx)(r.Rh,{children:":x"})," is our left-hand-side and"," ",(0,i.jsx)(r.Rh,{children:":y"})," is our right-hand-side. The data we pass in to transform is called the reducible-expression (or ",(0,i.jsx)(r.Rh,{children:"redex"})," for short)."]}),(0,i.jsxs)("p",{children:["Admittedly, this seems almost useless, and it really is with this overly simplistic example. But let's take it slow and build it up."," "]}),(0,i.jsx)(r.CN,{children:"\n    (def rewrite-some-keywords\n      (r/rewrite\n       :x :y\n       :l :q\n       :r :t\n       :a :c))\n\n    (rewrite-some-keywords :a)\n    ;; => :c\n  "}),(0,i.jsxs)("p",{children:["Here we've extended our rewrite to have multiple rules. Now we can handle more than just ",(0,i.jsx)(r.Rh,{children:":x"}),". Of course, this is still really limiting. We definitely can't list every single possible input for all of our rules. We need a way to match any input. That is where ",(0,i.jsx)(r.Rh,{children:"variables"})," come in."]}),(0,i.jsx)(r.CN,{children:'\n    (def match-any-thing\n      (r/rewrite\n        ?x [:matched ?x]))\n\n    (match-any-thing :a) ;; [:matched :a]\n    (match-any-thing "hello") ;; [:matched "hello"]\n    (match-any-thing 1) ;; [:matched 1]\n  '}),(0,i.jsxs)("p",{children:["Here we added the variable ",(0,i.jsx)(r.Rh,{children:"?x"})," to our left-hand-side. Variables start with a ",(0,i.jsx)(r.Rh,{children:"?"})," and match any value. Whatever they match is now accessible on the right-hand-side. So we can match anything with"," ",(0,i.jsx)(r.Rh,{children:"?x"})," and then use it in our output. Let's see a more interesting example."]}),(0,i.jsx)(r.CN,{children:"\n    (def find-x\n      (r/rewrite\n       [?x] ?x\n       [?x ?y] ?x\n       [?x ?y ?z] ?x))\n\n    (find-x [1]) ;; 1\n    (find-x [1 2]) ;; 1\n    (find-x [1 2 3]) ;; 1\n  "}),(0,i.jsxs)("p",{children:["Here we can see some really simple rules that work on vectors of various sizes. We can use this to extract the first element from each. In this case, since we only care about ",(0,i.jsx)(r.Rh,{children:"?x"}),", we can actually simplify this code."]}),(0,i.jsx)(r.CN,{children:"\n    (def find-x\n      (r/rewrite\n       [?x] ?x\n       [?x _] ?x\n       [?x _ _] ?x))\n  "}),(0,i.jsxs)("p",{children:["The ",(0,i.jsx)(r.Rh,{children:"_"})," is a wildcard match that matches anything but doesn't bind at all. What happens if we try to extend this to work for not just vectors, but just a single number?"]}),(0,i.jsx)(r.CN,{children:"\n    (def find-x\n      (r/rewrite\n       ?x ?x\n       [?x] ?x\n       [?x _] ?x\n       [?x _ _] ?x))\n\n    (find-x 1) ;; 1\n    (find-x [1]) ;; [1]\n  "}),(0,i.jsxs)("p",{children:["The order of our rules matters, ",(0,i.jsx)(r.Rh,{children:"?x"})," matches anything, so we will always get the first match. We could change the order, or we can constrain the match."]}),(0,i.jsx)(r.CN,{children:"\n    (def find-x  \n      (r/rewrite\n       (m/pred number? ?x) ?x \n       [?x] ?x\n       [?x _] ?x\n       [?x _ _] ?x))\n\n    (find-x 1) ;; 1\n    (find-x [1]) ;; 1\n  "}),(0,i.jsx)("p",{children:"Okay, now it works. But many of you are probably thinking \"Isn't this just pattern matching?\". And in many ways it is. Term Rewriting is a kind of pattern matching. But it doesn't stop with simple pattern matching. Term Rewriting is a way to do all computation through pattern matching. To see that, let's move beyond the basics."}),(0,i.jsx)(r.X6,{size:"2",text:"Applying strategies"}),(0,i.jsx)("p",{children:"We've seen that with Meander we can do simple rewrites where we match on the left-hand-side and output a right-hand-side. But just being able to do a single rewrite in this way is really limiting. To see this problem let's consider a classic example in term rewriting."}),(0,i.jsx)(r.CN,{children:"\n    (def simplify-addition\n      (r/rewrite\n       (+ ?x 0) ?x\n       (+ 0 ?x) ?x))\n\n    (simplify-addition '(+ 0 3)) ;; 3\n    (simplify-addition '(+ 3 0)) ;; 3\n  "}),(0,i.jsx)("p",{children:"Zero added to anything is just that thing. We can easily express this with term rewriting. But what if we have multiple 0's nested?"}),(0,i.jsx)(r.CN,{children:"\n    (simplify-addition '(+ 0 (+ 0 3))) ;; (+ 0 3)\n\n    (simplify-addition\n     (simplify-addition '(+ 0 (+ 0 3)))) ;; 3\n  "}),(0,i.jsxs)("p",{children:["As you can see, the first time we apply our rules we do simplify, but not all the way. If we call our rules again, we fully simplify the expression. But how could we express this with term rewriting? We can use what are called ",(0,i.jsx)(r.Rh,{children:"strategies"}),". Strategies let us control how our terms are rewritten. Let's start with an easy strategy the ",(0,i.jsx)(r.Rh,{children:"n-times"})," ","strategy."]}),(0,i.jsx)(r.CN,{children:"\n    (def simplify-twice\n      (r/n-times 2 simplify-addition))\n\n    (simplify-twice '(+ 0 (+ 0 3))) ;; 3\n  "}),(0,i.jsx)("p",{children:"Strategies wrap our rewriting rules and make them do additional things. In this case, the rewriting will be applied twice. But there are a few problems with the strategy as we've written it. Let's slowly discover those problems together and fix them."}),(0,i.jsx)(r.CN,{children:"\n    (simplify-twice '(+ 0 3)) ;; #meander.epsilon/fail[]\n  "}),(0,i.jsxs)("p",{children:["Our apply-twice strategy works for things that need to be simplified twice, but not for simple cases. We can fix that by using the ",(0,i.jsx)(r.Rh,{children:"attempt"})," ","strategy. It will try to rewrite and if it fails, just return our value."]}),(0,i.jsx)(r.CN,{children:"\n    (def simplify-addition\n      (r/n-times 2\n        (r/attempt\n         (r/rewrite\n          (+ ?x 0) ?x\n          (+ 0 ?x) ?x))))\n\n    (simplify-addition '(+ 0 3)) ;; 3\n    (simplify-addition '(+ 0 (+ 0 3))) ;; 3\n    (simplify-addition '(+ (+ 0 (+ 0 3)) 0)) ;; (+ 0 3)\n  "}),(0,i.jsxs)("p",{children:["Now it works for both. But having it only rewrite twice is a little arbitrary. What we really want to say is to continue applying our rewrite rules until nothing changes. We can do that by using the"," ",(0,i.jsx)(r.Rh,{children:"(until =)"})," strategy."]}),(0,i.jsx)(r.CN,{children:"\n    (def simplify-addition\n      (r/until =\n        (r/attempt\n         (r/rewrite\n          (+ ?x 0) ?x\n          (+ 0 ?x) ?x))))\n\n    (simplify-addition '(+ (+ 0 (+ 0 3)) 0)) ;; 3\n    (simplify-addition '(+ (+ 0 (+ 0 (+ 3 (+ 2 0)))) 0)) ;; (+ 3 (+ 2 0))\n  "}),(0,i.jsxs)("p",{children:["We can now simplify things no matter how deep they are, but as we can see we didn't fully eliminate 0s from all our expressions. Why is that? Well, our pattern only matches things that are in the outermost expression. We don't look at all at the sub-expressions. We can fix that by applying another strategy. In this case, we will use the ",(0,i.jsx)(r.Rh,{children:"bottom-up"})," strategy."]}),(0,i.jsx)(r.CN,{children:"\n    (def simplify-addition\n      (r/until =\n        (r/bottom-up\n         (r/attempt\n          (r/rewrite\n           (+ ?x 0) ?x\n           (+ 0 ?x) ?x)))))\n\n    (simplify-addition '(+ (+ 0 (+ 0 (+ 3 (+ 2 0)))) 0)) ;; (+ 3 2)\n  "}),(0,i.jsxs)("p",{children:["We have now eliminated all the zeros in our additions no matter where they are in the tree. For the sake of space in our examples, we kept our rules and our strategies together, but these are actually separable. What if we wanted to try the ",(0,i.jsx)(r.Rh,{children:"top-down"})," strategy with our rules?"]}),(0,i.jsx)(r.CN,{children:"\n    (def simplify-addition\n      (r/rewrite\n       (+ ?x 0) ?x\n       (+ 0 ?x) ?x))\n\n    (def simplify-addition-bu\n      (r/until =\n        (r/bottom-up\n         (r/attempt simplify-addition))))\n\n    (def simplify-addition-td\n      (r/until =\n        (r/top-down\n         (r/attempt simplify-addition))))\n  "}),(0,i.jsxs)("p",{children:["Our rules are completely separate from how we want to apply them. When writing our transformations, we don't have to think at all about the context they live in. We just express our simple rules and later we can apply strategies to them. But what if we want to understand what these strategies are doing? After playing around with things, it seems that the top-down strategy and the bottom-up strategy always give us the same result. But what are they doing that is different? We can inspect our strategies at any point by using the ",(0,i.jsx)(r.Rh,{children:"trace"})," strategy."]}),(0,i.jsx)(r.CN,{children:"\n    (def simplify-addition-bu\n      (r/until =\n        (r/trace\n         (r/bottom-up\n          (r/attempt simplify-addition)))))\n\n    (def simplify-addition-td\n      (r/until =\n        (r/trace\n         (r/top-down\n          (r/attempt simplify-addition)))))\n  "}),(0,i.jsx)("p",{children:"So now we have modified our rewrites to trace every time the top-down or bottom-up rules are called. Let's try a fairly complicated expression and see what happens."}),(0,i.jsx)(r.CN,{children:"\n    (simplify-addition-td '(+ (+ (+ 0 3) (+ 0 (+ 0 (+ 2 0)))) 0)\n\n    ;; printed\n    {:id t_20100, :in (+ (+ (+ 0 3) (+ 0 (+ 0 (+ 2 0)))) 0)}\n    {:id t_20100, :out (+ 3 (+ 0 2))}\n    {:id t_20100, :in (+ 3 (+ 0 2))}\n    {:id t_20100, :out (+ 3 2)}\n    {:id t_20100, :in (+ 3 2)}\n    {:id t_20100, :out (+ 3 2)}\n\n\n    (simplify-addition-bu '(+ (+ (+ 0 3) (+ 0 (+ 0 (+ 2 0)))) 0)\n\n    ;;printed\n    {:id t_20099, :in (+ (+ (+ 0 3) (+ 0 (+ 0 (+ 2 0)))) 0)}\n    {:id t_20099, :out (+ 3 2)}\n    {:id t_20099, :in (+ 3 2)}\n    {:id t_20099, :out (+ 3 2)}\n  "}),(0,i.jsx)("p",{children:"If we look at the top-down approach, we can see that the top-down strategy actually gets called three times. Once it rewrites quite a bit but leaves in a 0 that needs to be rewritten. Then it gets called again, eliminating all zeros. Finally, it is called and nothing changes. Our bottom-up strategy however is only called twice. But we can actually get more fine-grained than this. We can put trace at any point in our strategies."}),(0,i.jsx)(r.CN,{children:"\n    (def simplify-addition-bu\n      (r/until =\n        (r/bottom-up\n         (r/trace\n          (r/attempt simplify-addition)))))\n\n    (simplify-addition-bu '(+ (+ 0 3) 0))\n\n    ;; printed\n    {:id t_27317, :in +}\n    {:id t_27317, :out +}\n    {:id t_27317, :in +}\n    {:id t_27317, :out +}\n    {:id t_27317, :in 0}\n    {:id t_27317, :out 0}\n    {:id t_27317, :in 3}\n    {:id t_27317, :out 3}\n    {:id t_27317, :in (+ 0 3)}\n    {:id t_27317, :out 3}\n    {:id t_27317, :in 0}\n    {:id t_27317, :out 0}\n    {:id t_27317, :in (+ 3 0)}\n    {:id t_27317, :out 3}\n    {:id t_27317, :in 3}\n    {:id t_27317, :out 3}\n  "}),(0,i.jsxs)("p",{children:["Here we moved our trace down outside our ",(0,i.jsx)(r.Rh,{children:"attempt"})," strategy. Now we can see the exact order of our bottom-up strategy. Having this sort of visibility into how the process is working is really fantastic."]}),(0,i.jsx)(r.X6,{size:"2",text:"Rewriting as General Computation"}),(0,i.jsx)("p",{children:"What have been doing so far is interesting, but it falls short of the true power of term rewriting. Term rewriting is a general programming technique. Using it we can compute absolutely anything that is computable. Let's start with a classic example, fibonacci, but to further show general computability, we will make our own numbers instead of relying on Clojure's."}),(0,i.jsx)(r.CN,{children:"\n    (def fib-rules\n      (r/rewrite\n\n       (+ Z ?n) ?n\n       (+ ?n Z) ?n\n\n       (+ ?n (succ ?m)) (+ (succ ?n) ?m)\n\n       (fib Z) Z\n       (fib (succ Z)) (succ Z)\n       (fib (succ (succ ?n))) (+ (fib (succ ?n)) (fib ?n))))\n\n\n    (def run-fib\n      (r/until =\n        (r/bottom-up\n         (r/attempt fib-rules))))\n\n    [(run-fib '(fib Z))\n     (run-fib '(fib (succ Z)))\n     (run-fib '(fib (succ (succ Z))))\n     (run-fib '(fib (succ (succ (succ Z)))))\n     (run-fib '(fib (succ (succ (succ (succ Z))))))\n     (run-fib '(fib (succ (succ (succ (succ (succ Z)))))))\n     (run-fib '(fib (succ (succ (succ (succ (succ (succ Z))))))))]\n\n    ;; [Z\n    ;;  (succ Z)\n    ;;  (succ Z)\n    ;;  (succ (succ Z))\n    ;;  (succ (succ (succ Z)))\n    ;;  (succ (succ (succ (succ (succ Z)))))\n    ;;  (succ (succ (succ (succ (succ (succ (succ (succ Z))))))))]\n  "}),(0,i.jsxs)("p",{children:["If you aren't familiar with defining natural numbers via Peano numbers this may be a little bit confusing. But for our purposes all you need to know is that ",(0,i.jsx)(r.Rh,{children:"Z"})," means 0 and ",(0,i.jsx)(r.Rh,{children:"succ"})," means successor."," ",(0,i.jsx)(r.Rh,{children:"(succ Z)"})," means 1 ",(0,i.jsx)(r.Rh,{children:"(succ (succ Z))"})," means 2 and so on and so forth. Our fibonacci rules start by defining addition for our Peano numbers. Anything added to 0 is zero. Otherwise, we can add two numbers by moving all the ",(0,i.jsx)(r.Rh,{children:"succ"}),"s to one side until the right hand side equals 0. With those definitions in place, we can define fibonacci, which is basically just the definition of fibonacci. With term rewriting our strategies can enable us to have recursion without directly implementing it. Our rules read like they are recursive. But our rules don't call a function. They don't cause anything to occur. They just return more data. It is the process of interpretation that makes them recursive."]}),(0,i.jsxs)("p",{children:["In fact, with Meander, we are limited to what the clojure reader can interpret, but in general, with term rewriting, the syntax doesn't matter. I wrote things as ",(0,i.jsx)(r.Rh,{children:"(fib n)"})," merely as convention. I could have writen ",(0,i.jsx)(r.Rh,{children:"(n fib)"}),". There is nothing special about the syntax other than what rules we apply to it."," "]}),(0,i.jsx)(r.X6,{size:"2",text:"Why Should We Care?"}),(0,i.jsxs)("p",{children:["Admittedly the example of fibonacci above isn't very useful. And of course, if we had a real language, we would never want a number system like that. So why should we care about term rewriting? Term Rewriting offers a powerful yet simple way of viewing programming. It gives us the potential to take the lisp mantra that code is data and data is code much more seriously. How so? First, in lisps functions might be values, but they are opaque. Evaluating a function definition returns you something that you can't inspect directly. Something you can't directly transform (",(0,i.jsx)(r.Rh,{children:"#function[]"})," in clojure). With term rewriting, things can just remain data, because we have separated execution from description."]}),(0,i.jsx)("p",{children:'Not only can our "code" be data more than it can in lisp, but we can actually have our execution as data. Executing a Term Rewriting rule is just taking in data, matching on it, and producing more data. That means all our intermediate values are data. The entire execution of our program now becomes data. Have you ever run your program and had no idea where a certain value came from? Well, imagine if you could just ask your language to pattern match on every intermediate value that contains that value. Or maybe, give me the last 5 steps that led to this value. With Term Rewriting this is entirely possible.'}),(0,i.jsx)("p",{children:"Term Rewriting also gives us an easy basis for talking about partial programs. Our current programming languages have a problem where if they encounter something they don't understand, they just blow up, not telling us anything. Let's consider the following program:"}),(0,i.jsx)(r.CN,{children:"\n    (+ 3 4 (unimplemented!))\n  "}),(0,i.jsxs)("p",{children:["What does the program return? Well as its name is clear, unimplemented is in fact, unimplemented. So most languages will just throw an error. That can be what we want at times. But as people, we can look at that code and tell something else. We know that it will return ",(0,i.jsx)(r.Rh,{children:"(+ 7 something)"}),". Why can't our languages tell us that? Why can't we start writing partial programs and run them continually refining things as we go? Term Rewriting gives us this ability."]}),(0,i.jsx)(r.X6,{size:"2",text:"Term Rewriting as Programming Paradigm"}),(0,i.jsx)("p",{children:"Term Rewriting represents a distinct way of programming. It offers us a uniform way of dealing with data. It gives us the ability to think about things as syntactic structures. It offers us a way to truly have code as data, to go beyond the arbitrary distinctions imposed by our languages about what can and cannot be manipulated. It is a fundamental shift in how we view programs. It gives us new perspectives, new ways of thinking about how code executes and what our programs mean."}),(0,i.jsx)("p",{children:"Meander isn't at that point. But it is the beginning of an exploration into how to get there. In many ways, Meander is a testament to the flexibility of lisps and Clojure in particular. Using Clojure's rich data literals and macros we can embed our own language inside it. Yet at the same time, Meander pushes us beyond the way we've traditionally conceived of programming. Maybe functions aren't the best abstraction for working with data. Could programming be better if we truly had a way to work with data directly? That is Meander's conviction and its chief aim."})]})}},1438:function(e,t,n){"use strict";n.d(t,{By:function(){return M},CN:function(){return T},Dx:function(){return S},Ee:function(){return x},Fz:function(){return W},Mc:function(){return I},Q_:function(){return _},R4:function(){return z},Rh:function(){return O},X6:function(){return B},rU:function(){return w}});var i=n(5893),r=n(5988),a=n.n(r),s=n(9008),o=n(1664),l=n.n(o),c=n(7294),d=n(4394),h=n(2041),u=n(8903),m=n(6410),f=n(8603);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){p(e,t,n[t])}))}return e}var w=l(),x=function(e){var t=(0,c.useState)(!1),n=t[0],r=t[1],a=n?{position:"fixed",zIndex:100,top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80vw"}:{};return(0,i.jsxs)(i.Fragment,{children:[n&&(0,i.jsx)("div",{onClick:function(e){return r(!1)},style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgb(0,0,0,0.8)"}}),(0,i.jsx)("div",{style:g({},a),children:n&&(0,i.jsx)("img",g({onClick:function(){return r((function(e){return!e}))},style:{width:"100%"}},e))}),(0,i.jsx)("img",g({onClick:function(){return r((function(e){return!e}))},style:{width:"100%"}},e))]})},y=function(e){(0,m.Z)(e),e.languages.clojure=g({},e.languages.clojure,{number:/\b-?(0x)?\d*\.?\d+\b/g,logicVariable:/(\?|!)[a-zA-Z][a-zA-Z0-9-]+/})};y.displayName="clojure",y.aliases=[],d.Z.registerLanguage("javascript",h.Z),d.Z.registerLanguage("haskell",u.Z),d.Z.registerLanguage("clojure",y);var b=function(e){var t=e.children,n=e.right,r=e.top,a=e.left;e.buttom;return(0,i.jsx)("div",{style:p({position:"absolute",right:n,left:a,top:r},"left",a),children:t})},j=function(e){var t=e.children,n=e.top,r=e.left,a=e.right,s=e.bottom;return(0,i.jsx)("div",{style:{paddingTop:n,paddingLeft:r,paddingRight:a,paddingBottom:s},children:t})},v=function(e){return function(e){var t,n=((t=e.split("\n")).length>1&&t.shift(),t),i=function(e){return/^ */.exec(e)[0].length}(n[0]);return n.map((function(e){return e.substring(i,e.length)})).join("\n")}(e)},k=g({},f.mQ,{operator:{color:"#cb4b16"},logicVariable:{color:"#2aa198"},'pre[class*="language-"]':g({},f.mQ['pre[class*="language-"]'],{backgroundColor:"#fff"})}),R=function(e){var t=e.source,n=e.language;return(0,i.jsx)(d.Z,{language:n,style:k,children:v(t)})},_=function(e){var t=e.children;return(0,i.jsx)(R,{language:"javascript",source:t})},W=function(e){var t=e.children;return(0,i.jsx)(R,{language:"haskell",source:t})},T=function(e){var t=e.children;return(0,i.jsx)(R,{language:"clojure",source:t})},C=function(){return(0,i.jsx)(a(),{id:"4dc580444c2ee173",children:"body{font-family:helvetica,sans-serif;color:#333;line-height:1.5}a{color:#333}"})},Z=function(e){var t=e.children;return(0,i.jsx)("div",{style:{margin:"0 auto",maxWidth:700},children:t})},N=function(e){var t=e.children;return(0,i.jsx)("p",{style:{fontSize:"1.5em"},children:t})},I=function(e){var t=e.items,n=e.Elem,r=void 0===n?N:n,a=e.title;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(B,{text:a}),(0,i.jsx)("ul",{children:t.map((function(e){return function(e){var t=e.href,n=e.text,r=e.Elem;return(0,i.jsx)("li",{children:(0,i.jsx)(r,{children:(0,i.jsx)(w,{href:t,children:(0,i.jsx)("a",{children:n})})})},t)}(g({},e,{Elem:r}))}))})]})},B=function(e){var t=e.color,n=e.text,r=e.size,a={1:"h1",2:"h2",3:"h3",4:"h4"}[void 0===r?1:r];return(0,i.jsx)(a,{style:{color:t},children:n})},O=function(e){var t=e.children;return(0,i.jsx)("code",{style:{backgroundColor:"rgba(27,31,35,0.05)",padding:"0.2em 0.4em",borderRadius:3,fontFamily:"Monaco, monospace",fontSize:13,whiteSpace:"nowrap"},children:t})},z=function(e){var t=e.children;return(0,i.jsx)("blockquote",{style:{paddingLeft:20,margin:0,marginLeft:20,borderLeft:"0.25em solid #dfe2e5"},children:t})},S=function(e){var t=e.text;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.default,{children:(0,i.jsx)("title",{children:t})}),(0,i.jsx)(B,{text:t,size:1})]})},M=function(e){var t=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.default,{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"data:;base64,iVBORw0KGgo="}),(0,i.jsx)("meta",{name:"author",content:"Jimmy Miller"}),(0,i.jsx)("link",{rel:"alternate",type:"application/rss+xml",title:"jimmyhmiller.github.io",href:"feed.xml"})]}),(0,i.jsx)(C,{}),(0,i.jsxs)(Z,{children:[(0,i.jsx)("div",{style:{position:"relative"},children:(0,i.jsx)(b,{right:0,top:0,children:(0,i.jsx)(w,{href:"/",children:(0,i.jsx)("a",{style:{textDecoration:"none"},children:(0,i.jsx)(B,{color:"#999",text:"Jimmy Miller"})})})})}),(0,i.jsx)(j,{top:70,children:t})]})]})}}},function(e){e.O(0,[774,346,854,888,179],(function(){return t=3916,e(e.s=t);var t}));var t=e.O();_N_E=t}]);