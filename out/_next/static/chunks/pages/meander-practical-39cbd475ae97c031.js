(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[140],{2619:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/meander-practical",function(){return n(8741)}])},8741:function(e,t,n){"use strict";n.r(t);var s=n(5893),i=n(1438);t.default=function(){return(0,s.jsxs)(i.By,{children:[(0,s.jsx)(i.Dx,{text:"Meander for Practical Data Transformation"}),(0,s.jsx)("p",{children:"As Clojure programmers we love data. We believe that, at its core, programming is just data manipulation. To that end, Clojure provides fantastic data literals for its immutable data structures. Moreover core provides tons of functions for the manipulation of data. But as our data grows more complex, things become difficult. Our beautiful declarative data transformation pipeline becomes a nested mess. We wind up, yet again, playing computer in our heads."}),(0,s.jsxs)("p",{children:["In this tutorial, we are going to build up slowly to understand how ",(0,s.jsx)("a",{href:"https://github.com/noprompt/meander/",children:"Meander"})," ","can be used to solve practical data transformation problems. We will start with simple examples and move to more complicated ones, hopefully choosing problems that reflect the sorts of menial data transformation tasks we all encounter in our day jobs. Let's start with some vanilla Clojure code."]}),(0,s.jsx)(i.CN,{children:'\n  (def person\n    {:name "jimmy"\n     :preferred-address\n     {:address1 "123 street ave"\n      :address2 "apt 2"\n      :city "Townville"\n      :state "IN"\n      :zip "46203"}})\n  \n  (defn reformat-preferred-address [person]\n    (let [address (:preferred-address person)]\n      {:address {:line1 (:address1 address)\n                 :line2 (:address2 address)}\n       :city-info {:city (:city address)\n                   :state (:state address)\n                   :zipcode (:zip address)}}))\n  '}),(0,s.jsx)("p",{children:"Here we have a pretty decent Clojure function that converts between two different address formats. This sort of code is fairly common when we need to convert from the data requirements of one system to another. Honestly, with this simple example, the code is fairly straightforward. Our data requirements are simple and so our code isn't difficult. Let's look at how to accomplish this same task in Meander."}),(0,s.jsx)(i.CN,{children:"\n  (require '[meander.epsilon :as m])\n\n  (defn reformat-preferred-address [person]\n    (m/match person\n      {:preferred-address\n       {:address1 ?address1\n        :address2 ?address2\n        :city ?city\n        :state ?state\n        :zip ?zip}}\n      \n      {:address {:line1 ?address1\n                 :line2 ?address2}\n       :city-info {:city ?city\n                   :state ?state\n                   :zipcode ?zip}}))\n  "}),(0,s.jsx)("p",{children:"Here is code that does the same thing written with Meander. One obvious thing to note is that the Meander version is much longer. Judging code based on the number of lines is not something we are going to do."}),(0,s.jsxs)("p",{children:["Let's explain what is going on. First, we are using the Meander's"," ",(0,s.jsx)(i.Rh,{children:"match"})," feature. ",(0,s.jsx)(i.Rh,{children:"match"})," takes the thing that we are matching on (",(0,s.jsx)(i.Rh,{children:"person"}),"), a pattern to try to match, and the output. Our pattern here is in the exact shape of the person map we passed in. In order to extract out pieces of this map, we use logic variables (",(0,s.jsx)(i.Rh,{children:"?address1"}),", ",(0,s.jsx)(i.Rh,{children:"?address2"}),", etc). Logic variables are just symbols that start with ",(0,s.jsx)(i.Rh,{children:"?"}),". We can assign values in our data to any logic variables we'd like and then use those logic variables in our output. One thing I love about this simple Meander example is that you can see the exact shape of the input immediately."]}),(0,s.jsx)(i.X6,{size:"2",text:"Making Our Example Harder"}),(0,s.jsx)("p",{children:"This example while somewhat realistic is very limited. While I like the fact that Meander's match shows us the shape of our data, for simple examples like this, Clojure does pretty well. Let's make things harder."}),(0,s.jsx)(i.CN,{children:'\n  (def person\n    {:name "jimmy"\n     :preferred-address\n     {:address1 "123 street ave"\n      :address2 "apt 2"\n      :city "Townville"\n      :state "IN"\n      :zip "46203"}\n     :other-addresses \n     [{:address1 "432 street ave"\n       :address2 "apt 7"\n       :city "Cityvillage"\n       :state "New York"\n       :zip "12345"}\n      {:address1 "534 street ave"\n       :address2 "apt 5"\n       :city "Township"\n       :state "IN"\n       :zip "46203"}]})\n  '}),(0,s.jsx)("p",{children:"In the example above we left out some things. A person has a preferred address, but they also have other addresses. We have a few different things we want to do with this data. First, we want to find all the distinct zip codes that a person has."}),(0,s.jsx)(i.CN,{children:"\n  (defn distinct-zip-codes [person]\n    (let [preferred-address-zip (get-in person [:preferred-address :zip])\n          other-zips (map :zip (:other-addresses person))]\n      (distinct (cons preferred-address-zip other-zips))))\n  "}),(0,s.jsx)("p",{children:"Here is some pretty straightforward Clojure code for doing exactly that. I'm sure some people could have minor quibbles about how this is written, but I doubt other solutions would be much different. One thing to note here is that we have lost a little bit of the structure of our input data. We could maybe change that up a bit. Maybe using destructuring is the right approach? Regardless, this is a simple and reasonable Clojure function. Now, let's look at the Meander version."}),(0,s.jsx)(i.CN,{children:"\n  (defn distinct-zip-codes [person]\n    (m/match person\n      {:preferred-address {:zip !zips}\n       :other-addresses [{:zip !zips} ...]}\n      (distinct !zips)))\n  "}),(0,s.jsxs)("p",{children:["Here is the exact same function, but we've introduced two new concepts. The first one is memory variables, in this case ",(0,s.jsx)(i.Rh,{children:"!zip"}),". Memory variables start with ",(0,s.jsx)(i.Rh,{children:"!"})," and remember all the values they match with. The next concept is the zero or more operator (",(0,s.jsx)(i.Rh,{children:"\u2026"}),"). The zero or more operator says to repeat the pattern to its left zero or more times. In this case ",(0,s.jsx)(i.Rh,{children:"{:zip !zips}"}),". Using these two, we can declaratively gather up all the zip codes in this data structure."]}),(0,s.jsx)(i.X6,{size:"3",text:"Minor Modifications"}),(0,s.jsx)("p",{children:"What happens if one of our zip codes is nil? Well for both of our functions, nil gets returned in the output. That is probably not what we want. Let's fix that in both versions."}),(0,s.jsx)(i.CN,{children:"\n  (defn distinct-zip-codes [person]\n    (let [preferred-address-zip (get-in person [:preferred-address :zip])\n          other-zips (map :zip (:other-addresses person))]\n      (filter some? (distinct (cons preferred-address-zip other-zips)))))\n  "}),(0,s.jsx)(i.CN,{children:"\n  (defn distinct-zip-codes [person]\n    (m/match person\n      {:preferred-address {:zip (m/or nil !zips)}\n       :other-addresses [{:zip (m/or nil !zips)} ...]}\n      (distinct !zips)))\n  "}),(0,s.jsxs)("p",{children:["These two functions aren't that different. In Meander we could have used"," ",(0,s.jsx)(i.Rh,{children:"filter"})," in the exact same way if we wanted. But it's nice that we can set these conditions on the input, which is really more closely stating our intent. Here we used ",(0,s.jsx)(i.Rh,{children:"or"})," a short-circuiting operator which says that we should match one of these patterns. Our first pattern is just the literal nil. If it is nil, the pattern will match, but it won't be saved anywhere. If the value isn't nil, it will be saved in our memory variable ",(0,s.jsx)(i.Rh,{children:"!zips"}),". Before we move on to more complex examples, let's consider one more modification. This time we want a distinct list of non-nil zips and cities output in a map like this ",(0,s.jsx)(i.Rh,{children:"{:zips [] :cities []}"}),"."]}),(0,s.jsx)(i.CN,{children:"\n  (defn distinct-zips-and-cities [person]\n    (let [preferred-address-zip (get-in person [:preferred-address :zip])\n          preferred-address-city (get-in person [:preferred-address :city])\n          other-zips (map :zip (:other-addresses person))\n          other-cities (map :city (:other-addresses person))]\n      {:zips (filter some? (distinct (cons preferred-address-zip other-zips)))\n       :cities (filter some? (distinct (cons preferred-address-city other-cities)))}))\n  "}),(0,s.jsx)(i.CN,{children:"\n  (defn distinct-zips-and-cities [person]\n    (m/match person\n      {:preferred-address {:zip (m/or nil !zips)\n                           :city (m/or nil !cities)}\n       :other-addresses [{:zip (m/or nil !zips)\n                          :city (m/or nil !cities)} ...]}\n      {:zips (distinct !zips)\n       :cities (distinct !cities)}))\n  "}),(0,s.jsx)("p",{children:"With both of these examples, I extended them in the most obvious way I could think of. I think the Meander held up pretty well, but I wouldn't have written the plain Clojure function that way. Here's what I probably would have done instead."}),(0,s.jsx)(i.CN,{children:"\n  (defn distinct-zips-and-cities [person]\n    (let [addresses (cons (:preferred-address person) \n                          (:other-addresses person))]\n      {:zips (filter some? (distinct (map :zip addresses)))\n       :cities (filter some? (distinct (map :city addresses)))}))\n  "}),(0,s.jsx)("p",{children:"I think this is a pretty good function. But what I find interesting is that I needed to refactor to get here. It took me a little bit to think this way. Ideally, small changes to output should not require us to restructure our code. In this case, the change is minor. But if we have to change our structure in such small cases, won't we have to change it even more in larger cases?"}),(0,s.jsx)(i.X6,{size:"2",text:"Searching with Meander"}),(0,s.jsx)("p",{children:"All our examples up until this point have had one answer. Yes, that answer might have been a collection, but there was only one way for our pattern to match. This isn't always the case. To see an example of that, let's write some functions using this data structure."}),(0,s.jsx)(i.CN,{children:'\n  (def people\n    [{:name "jimmy"\n      :addresses [{:address1 "123 street ave"\n                   :address2 "apt 2"\n                   :city "Townville"\n                   :state "IN"\n                   :zip "46203"\n                   :preferred true}\n                  {:address1 "534 street ave",\n                   :address2 "apt 5",\n                   :city "Township",\n                   :state "IN",\n                   :zip "46203"\n                   :preferred false}\n                  {:address1 "543 Other St",\n                   :address2 "apt 50",\n                   :city "Town",\n                   :state "CA",\n                   :zip "86753"\n                   :preferred false}]}\n     {:name "joel"\n      :addresses [{:address1 "2026 park ave"\n                   :address2 "apt 200"\n                   :city "Town"\n                   :state "CA"\n                   :zip "86753"\n                   :preferred true}]}])\n  '}),(0,s.jsxs)("p",{children:["I apologize for the amount of room this takes up on the screen, but real-world examples are much larger. I want to try and make something that approaches realistic and to do that our input needs to be a bit bigger. Okay, so what we want to do now is given a zip code, find all people that have an address with that zip code, and for each of the addresses that match that zip code, return a map of",(0,s.jsx)(i.Rh,{children:"{:name <name> :address <address>}"}),". So in this case, if we asked for zip ",(0,s.jsx)(i.Rh,{children:"86753"})," we should get the following response:"]}),(0,s.jsx)(i.CN,{children:'\n  ({:name "jimmy",\n    :address\n    {:address1 "543 Other St",\n     :address2 "apt 50",\n     :city "Town",\n     :state "CA",\n     :zip "86753",\n     :preferred false}}\n   {:name "joel",\n    :address\n    {:address1 "2026 park ave",\n     :address2 "apt 200",\n     :city "Town",\n     :state "CA",\n     :zip "86753",\n     :preferred true}})\n  '}),(0,s.jsx)("p",{children:"Okay let's start with the vanilla Clojure example."}),(0,s.jsx)(i.CN,{children:"\n  (defn find-people-with-zip [people zip]\n    (for [person people\n          address (:addresses person)\n          :when (= (:zip address) zip)]\n      {:name (:name person)\n       :address address}))\n  "}),(0,s.jsxs)("p",{children:["This code might not be very idiomatic. I almost never use ",(0,s.jsx)(i.Rh,{children:"for"})," ","in actual code. But honestly, this was the most succinct way I could think to write it. We could also have written something like this:"]}),(0,s.jsx)(i.CN,{children:"\n  (defn person-with-address-comb [person]\n    (map (fn [address]\n           {:name (:name person)\n            :address address})\n         (:addresses person)))\n  \n  (defn find-people-with-zip [people zip]\n    (->> people\n         (mapcat person-with-address-comb)\n         (filter (comp #{zip} :zip :address))))\n  "}),(0,s.jsx)("p",{children:"It seems like there is a better way I'm overlooking. But regardless I think any of these solutions will be a tiny bit complicated. We've lost the shape of the input data. We have some imperative stuff going on here. Let's contrast this with the Meander implementation."}),(0,s.jsx)(i.CN,{children:"\n  (defn find-people-with-zip [people zip]\n    (m/search people\n      (m/scan {:name ?name\n               :addresses (scan {:zip ~zip :as ?address})})\n      {:name ?name\n       :address ?address}))\n  "}),(0,s.jsxs)("p",{children:["This is actually incredibly straight forward even if unfamiliar. We are now using ",(0,s.jsx)(i.Rh,{children:"search"})," to find multiple answers. Also note"," ",(0,s.jsx)(i.Rh,{children:"~zip"}),". The ",(0,s.jsx)(i.Rh,{children:"~"})," here let's us splice in variables that are in scope. And finally, we can name our whole map using the"," ",(0,s.jsx)(i.Rh,{children:":as"})," pattern. This code reads like what we conceptually want to do, scan people's addresses looking for zips that match the one passed in. We do not have to think at all about how this code runs."]}),(0,s.jsx)(i.X6,{size:"2",text:"One Final Example"}),(0,s.jsx)("p",{children:"For our final example of how Meander can be used to perform data manipulation, will show one feature of logic variables that we have left off so far. To do so we need some more complex data."}),(0,s.jsx)(i.CN,{children:'\n  (def data\n    {:people \n     [{:name "jimmy" :id 1}\n      {:name "joel" :id 2}\n      {:name "tim" :id 3}]\n     :addresses\n     {1 [{:address1 "123 street ave"\n          :address2 "apt 2"\n          :city "Townville"\n          :state "IN"\n          :zip "46203"\n          :preferred true}\n         {:address1 "534 street ave",\n          :address2 "apt 5",\n          :city "Township",\n          :state "IN",\n          :zip "46203"\n          :preferred false}]\n      2 [{:address1 "2026 park ave"\n          :address2 "apt 200"\n          :city "Town"\n          :state "CA"\n          :zip "86753"\n          :preferred true}]\n      3 [{:address1 "1448 street st"\n          :address2 "apt 1"\n          :city "City"\n          :state "WA"\n          :zip "92456"\n          :preferred true}]}\n     :visits {1 [{:date "12-31-1900"\n                  :geo-location {:zip "46203"}}]\n              2 [{:date "1-1-1970"\n                  :geo-location {:zip "12345"}}\n                 {:date "1-1-1970"\n                  :geo-location {:zip "86753"}}]\n              3 [{:date "4-4-4444"\n                  :geo-location {:zip "54221"}}\n                 {:date "4-4-4444"\n                  :geo-location {:zip "92456"}}]}})\n  '}),(0,s.jsxs)("p",{children:["Here we have some much more realistic data than anything we've seen before. We have a map with three top-level keys. These represent data we have gathered from various sources. The first key ",(0,s.jsx)(i.Rh,{children:":people"})," is our collection of people with names and ids. The next is the"," ",(0,s.jsx)(i.Rh,{children:":addresses"})," of these people, indexed by id for efficient lookup. And finally we have ",(0,s.jsx)(i.Rh,{children:":visits"}),", this represents the dates that the users visited our site, again indexed by user-id."]}),(0,s.jsx)("p",{children:"Here's the mock scenario, we've seen suspicious activity on our site and we aren't quite sure how to narrow it down. We are going to start our investigation by finding any users who had visits that were not in the same zip as their preferred address. Because of the nature of our application, we happen to know that it is typically used at the preferred location. Once we know the users affected, we need to return their name, id, the date of access, and the zip code that didn't match. But I want to show that despite this somewhat complicated scenario, we can easily express this using Meander. Before we get there, the Clojure implementation."}),(0,s.jsx)(i.CN,{children:"\n  \n  (defn find-non-matching-visits [address visits]\n    (filter (comp (complement #{(:zip address)}) :zip :geo-location) visits))\n  \n  (defn find-bad-visits-for-person [addresses visits person]\n    (let [preferred-address (first (filter :preferred addresses))\n          non-matching (find-non-matching-visits preferred-address visits)]\n      (map (fn [visit] {:name (:name person)\n                        :id (:id person)\n                        :zip (get-in visit [:geo-location :zip])\n                        :date (:date visit)})\n          non-matching)))\n  \n  (defn find-potential-bad-visits [{:keys [addresses visits people]}]\n    (mapcat (fn [{:keys [id] :as person}] \n              (find-bad-visits-for-person \n               (addresses id)\n               (visits id) \n               person))\n            people))\n  "}),(0,s.jsxs)("p",{children:["I really wanted to come up with a better implementation. ",(0,s.jsx)(i.Rh,{children:"for"})," ","might have been useful here. If any reader has a better implementation, I'm happy to replace this one. But honestly, I think no matter what version we went with, it is going to have the features that make this one less than desirable. Just look at how much of this code is about telling the computer what to do. Let's look at the Meander version now."]}),(0,s.jsx)(i.CN,{children:"\n  (defn find-potential-bad-visits [data]\n    (m/search data\n      {:people (m/scan {:id ?id :name ?name})\n       :addresses {?id (m/scan {:preferred true :zip ?zip})}\n       :visits {?id (m/scan {:geo-location {:zip (m/and (m/not ?zip) ?bad-zip)}\n                             :date ?date})}}\n      {:name ?name\n       :id ?id\n       :zip ?bad-zip\n       :date ?date}))\n  "}),(0,s.jsxs)("p",{children:["This is where Meander shines. ",(0,s.jsx)(i.Rh,{children:"?id"})," is being used to join across data structures. We can now find an id in people and use that to index into other collections. This allows us to find out everything we need to know about a person easily. We can also search into any collection and match on data at any level. We don't need to rely on pulling things out into a higher scope by using let bindings, making helper functions to work on sub-collections, or creating a series of transformations to get at the data we care about. Instead, we declare our data needs and the relationships that need to hold between them."]}),(0,s.jsx)(i.X6,{size:"2",text:"Conclusion"}),(0,s.jsx)("p",{children:"I hope that this has been a good introduction to how Meander can be used for practical data transformation problems. In many of these examples, the vanilla Clojure made for pretty good code. But as the data requirements become more complex, we need tools to handle these. While we may be able to accomplish any of these tasks, the understanding of the structure of our code becomes lost. Looking at the example above, we know so much about what the data coming in looks like. Our code mirrors precisely the shape of data we get in."}),(0,s.jsx)("p",{children:"Now I do admit, my examples here are a bit contrived. But they are meant to be simple so we don't focus on the examples and instead focus on the code. In coming posts, I will explore more directly various ways we can apply Meander for data transformation. Some ideas I have in mind are using Meander with honeysql to turn our data into sql, transforming a collection of data into hiccup for display as html, and using Meander to scrap the web. I'd also love to do more computer science examples. Using Meander to make a little lisp interpreter, a CEK machine, or basic arithmetic. And yet, Meander goes way beyond all of these things. Meander is about more than practical data manipulation. It is about a new way of programming, a new way of thinking about problems. Hopefully, this introduction will help you to dive in and try it yourself."})]})}},1438:function(e,t,n){"use strict";n.d(t,{By:function(){return E},CN:function(){return T},Dx:function(){return A},Ee:function(){return x},Fz:function(){return C},Mc:function(){return O},Q_:function(){return I},R4:function(){return L},Rh:function(){return B},X6:function(){return W},rU:function(){return g}});var s=n(5893),i=n(5988),r=n.n(i),a=n(9008),o=n(1664),d=n.n(o),l=n(7294),h=n(4394),c=n(2041),p=n(8903),u=n(6410),m=n(8603);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),s.forEach((function(t){f(e,t,n[t])}))}return e}var g=d(),x=function(e){var t=(0,l.useState)(!1),n=t[0],i=t[1],r=n?{position:"fixed",zIndex:100,top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80vw"}:{};return(0,s.jsxs)(s.Fragment,{children:[n&&(0,s.jsx)("div",{onClick:function(e){return i(!1)},style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgb(0,0,0,0.8)"}}),(0,s.jsx)("div",{style:w({},r),children:n&&(0,s.jsx)("img",w({onClick:function(){return i((function(e){return!e}))},style:{width:"100%"}},e))}),(0,s.jsx)("img",w({onClick:function(){return i((function(e){return!e}))},style:{width:"100%"}},e))]})},y=function(e){(0,u.Z)(e),e.languages.clojure=w({},e.languages.clojure,{number:/\b-?(0x)?\d*\.?\d+\b/g,logicVariable:/(\?|!)[a-zA-Z][a-zA-Z0-9-]+/})};y.displayName="clojure",y.aliases=[],h.Z.registerLanguage("javascript",c.Z),h.Z.registerLanguage("haskell",p.Z),h.Z.registerLanguage("clojure",y);var v=function(e){var t=e.children,n=e.right,i=e.top,r=e.left;e.buttom;return(0,s.jsx)("div",{style:f({position:"absolute",right:n,left:r,top:i},"left",r),children:t})},j=function(e){var t=e.children,n=e.top,i=e.left,r=e.right,a=e.bottom;return(0,s.jsx)("div",{style:{paddingTop:n,paddingLeft:i,paddingRight:r,paddingBottom:a},children:t})},b=function(e){return function(e){var t,n=((t=e.split("\n")).length>1&&t.shift(),t),s=function(e){return/^ */.exec(e)[0].length}(n[0]);return n.map((function(e){return e.substring(s,e.length)})).join("\n")}(e)},z=w({},m.mQ,{operator:{color:"#cb4b16"},logicVariable:{color:"#2aa198"},'pre[class*="language-"]':w({},m.mQ['pre[class*="language-"]'],{backgroundColor:"#fff"})}),k=function(e){var t=e.source,n=e.language;return(0,s.jsx)(h.Z,{language:n,style:z,children:b(t)})},I=function(e){var t=e.children;return(0,s.jsx)(k,{language:"javascript",source:t})},C=function(e){var t=e.children;return(0,s.jsx)(k,{language:"haskell",source:t})},T=function(e){var t=e.children;return(0,s.jsx)(k,{language:"clojure",source:t})},N=function(){return(0,s.jsx)(r(),{id:"4dc580444c2ee173",children:"body{font-family:helvetica,sans-serif;color:#333;line-height:1.5}a{color:#333}"})},M=function(e){var t=e.children;return(0,s.jsx)("div",{style:{margin:"0 auto",maxWidth:700},children:t})},R=function(e){var t=e.children;return(0,s.jsx)("p",{style:{fontSize:"1.5em"},children:t})},O=function(e){var t=e.items,n=e.Elem,i=void 0===n?R:n,r=e.title;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(W,{text:r}),(0,s.jsx)("ul",{children:t.map((function(e){return function(e){var t=e.href,n=e.text,i=e.Elem;return(0,s.jsx)("li",{children:(0,s.jsx)(i,{children:(0,s.jsx)(g,{href:t,children:(0,s.jsx)("a",{children:n})})})},t)}(w({},e,{Elem:i}))}))})]})},W=function(e){var t=e.color,n=e.text,i=e.size,r={1:"h1",2:"h2",3:"h3",4:"h4"}[void 0===i?1:i];return(0,s.jsx)(r,{style:{color:t},children:n})},B=function(e){var t=e.children;return(0,s.jsx)("code",{style:{backgroundColor:"rgba(27,31,35,0.05)",padding:"0.2em 0.4em",borderRadius:3,fontFamily:"Monaco, monospace",fontSize:13,whiteSpace:"nowrap"},children:t})},L=function(e){var t=e.children;return(0,s.jsx)("blockquote",{style:{paddingLeft:20,margin:0,marginLeft:20,borderLeft:"0.25em solid #dfe2e5"},children:t})},A=function(e){var t=e.text;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.default,{children:(0,s.jsx)("title",{children:t})}),(0,s.jsx)(W,{text:t,size:1})]})},E=function(e){var t=e.children;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.default,{children:[(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("link",{rel:"icon",href:"data:;base64,iVBORw0KGgo="}),(0,s.jsx)("meta",{name:"author",content:"Jimmy Miller"}),(0,s.jsx)("link",{rel:"alternate",type:"application/rss+xml",title:"jimmyhmiller.github.io",href:"feed.xml"})]}),(0,s.jsx)(N,{}),(0,s.jsxs)(M,{children:[(0,s.jsx)("div",{style:{position:"relative"},children:(0,s.jsx)(v,{right:0,top:0,children:(0,s.jsx)(g,{href:"/",children:(0,s.jsx)("a",{style:{textDecoration:"none"},children:(0,s.jsx)(W,{color:"#999",text:"Jimmy Miller"})})})})}),(0,s.jsx)(j,{top:70,children:t})]})]})}}},function(e){e.O(0,[774,346,854,888,179],(function(){return t=2619,e(e.s=t);var t}));var t=e.O();_N_E=t}]);