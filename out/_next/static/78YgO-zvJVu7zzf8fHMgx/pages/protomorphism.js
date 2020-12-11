(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{CQVp:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/protomorphism",function(){var e=o("sYw0");return{page:e.default||e}}])},sYw0:function(e,t,o){"use strict";o.r(t);var n=o("q1tI"),l=o.n(n),s=o("GyP+"),r=l.a.createElement;t.default=function(){return r(s.c,null,r(s.j,{size:"1",text:"Protomorphism"}),r("p",null,"The last two posts ventured off into the hypothetical world. In that world we had a language very much like javascript but with variants and protocols. Unfortunately, that language isn't real, but that doesn't mean we can't sneak some of those ideas into our javascript. Today we are going to explore protocols further using a library called ",r("a",{href:"https://github.com/airportyh/protomorphism"},"Protomorphism")," that adds protocols into javascript."," "),r(s.f,null,"\n        import protocol from 'protomorphism'\n\n        const Mapper = protocol({\n          map: (x, f) => {\n           // maps f over x\n          }\n        });\n\n        Mapper.implementation(Array, {\n          map: (arr, f) => arr.map(f)\n        })\n\n        const map = (f, x) => Mapper.map(x, f);\n\n        map(x => x + 2, [1,2,3]) // [3,4,5]\n      "),r("p",null,"Here we can see protomorphism in action with our Mapper protocol from last post. This actually isn't too different from the code we would write in our imaginary language. What we see here is basically all of protomorphism, it is a simple library that does one thing. In fact, it is only 31 lines of code. But fewer lines doesn't mean less powerful. As promised in our last post, we are going to create our own lodash like library, but our library, using the power of protocols, will work whether we use normal Javascript Arrays, ImmutableJs Lists, or any type that implements our protocol."),r(s.e,{size:"2",text:"Sequence Protocol"}),r(s.f,null,"\n        const Sequence = protocol({\n          cons: (coll, elem) => {\n            // prepends elem to coll\n          },\n          first: (coll) => {\n            // gets first element of coll\n          },\n          rest: (coll) => {\n            // returns all but first element\n          },\n          isEmpty: (coll) => {\n            // returns true if empty\n          },\n          empty: (coll) => {\n            // given a coll, it will return\n            // an empty collection of the same type\n          }\n        })\n      "),r("p",null,"Here is our Sequence protocol from which we will build all our lodash like functions. It is a simple protocol, with only five methods, each of which are fairly straight forward. Using these we can start building up more and more useful functions. Let's start off with some very simple ones."),r(s.e,{size:"2",text:"Examples"}),r(s.f,null,"\n        const cons = Sequence.cons\n        const first = Sequence.first\n        const rest = Sequence.rest\n        const isEmpty = Sequence.isEmpty\n        const empty = Sequence.empty\n\n        const second = (coll) => first(rest(coll))\n        const ffirst = (coll) => first(first(coll))\n\n        const last = (coll) => {\n          if (isEmpty(coll)) {\n            return undefined\n          } else (isEmpty(rest(coll))) {\n            return first(coll)\n          } else {\n            return last(rest(coll))\n          }\n        }\n      "),r("p",null,"We start off with simple aliases to our Sequence functions we need to use. This is purely for convenience sake and not necessary. Next we implement two very simple functions, ",r(s.i,null,"second")," and",r(s.i,null," ffirst"),". Second does what it says, it gives of the second element of a collection; ffirst gives us the first of the first element of the collection. Below should illustrate the difference clearly."),r(s.f,null,"\n        const coll = [[1], [2], [3]]\n        second(coll) // [2]\n        ffirst(coll) // 1\n      "),r("p",null,"The ",r(s.i,null,"last")," function is a little more involved, but if you are familiar with recursion it is very simple. If we are passed an empty collection, there is no last, so we return undefined. If we are passed a collection with only one thing in it, we return that thing. Otherwise, we take one item off the collection and find the last of that collection."),r("p",null,"One thing to note is that these functions are perfectly comprehensible and sensible and yet we have not mentioned at all what datastructure these functions are for. As far as our code is concerned, it doesn't matter if this is an array, an immutable list, or any other type. All that matters for the functions above is that the data structure implements the Sequence protocol."),r(s.e,{size:"2",text:"Implementations"}),r(s.f,null,"\n        Sequence.implementation(Immutable.List, {\n            cons: (coll, elem) => coll.unshift(elem),\n            empty: (coll) => Immutable.List.of(),\n            first: (coll) => coll.first(),\n            rest: (coll) => coll.rest(),\n            isEmpty: (coll) => coll.isEmpty(),\n        });\n      "),r("p",null,"Above is our implementation of the sequence protocol for ImmutableJs Lists. Our Sequence protocol assumes that each of our functions has no side effects, so ImmutableJs is a perfect fit here. In fact, there are methods that correspond exactly to the methods on our the Sequence protocol. Now we can use the functions we wrote on ImmutableJs Lists."),r(s.f,null,"\n        const coll = Immutable.fromJS([[1], [2], [3]])\n        second(coll) // List [2]\n        ffirst(coll) // 1\n      "),r("p",null,"This works exactly the same as the example above. In our first example, we just assumed we had an implementation of Sequence for Javascript Arrays, let's go ahead and write one now."),r(s.f,null,"\n        Seq.implementation(Array, {\n            cons: (coll, elem) => {\n                coll = coll.slice() // copy\n                coll.unshift(elem)\n                return coll\n            },\n            empty: (coll) => [],\n            first: (coll) => coll[0],\n            rest: (coll) => {\n                coll = coll.slice() // copy\n                coll.shift(0)\n                return coll\n            },\n            isEmpty: (coll) => coll.length == 0\n        });\n      "),r("p",null,"The definition for Arrays is a tad bit uglier. This is due mainly to that fact that our protocol's methods are assumed to be side-effect free, where as Arrays methods mutate. So in order to do cons and rest, we must copy the array. Now, that we have defined the Sequence protocol for Arrays, all functions that just use protocol methods will work with Arrays."),r(s.e,{size:"1",text:"More Functions"}),r(s.f,null,"\n        const map = (f, coll) => {\n            if (isEmpty(coll)) {\n                return coll;\n            } else {\n                return cons(f(first(coll)), map(f, rest(coll)));\n            }\n        }\n\n        const filter = (pred, coll) => {\n            if (isEmpty(coll)) {\n                return coll;\n            } else if (pred(first(coll))) {\n                return cons(first(coll), filter(pred, rest(coll)));\n            } else {\n                return filter(pred, rest(coll));\n            }\n        }\n\n        const reduce = (f, init, coll) => {\n            if (isEmpty(coll)) {\n                return init;\n            } else {\n                return f(reduce(f, init, rest(coll)), first(coll))\n            }\n        }\n      "),r("p",null,"Here we have the three power house lodash functions. By showing that we can implement these, it becomes easy to see how we can begin to implement all the functionality that lodash supports, but without depending on a concrete implementation."),r(s.e,{size:"2",text:"Conclusion"}),r("p",null,"Protocols give us the ability to reason at a higher level of abstractions. They provide us a way to extend functionality to new code that we never planned for. This level of programming allows our code be clear, yet powerful. In our next pos,t we are going to explore a similar, yet slightly different way to provide flexibility and extensibility, multi-methods."))}}},[["CQVp",1,0]]]);