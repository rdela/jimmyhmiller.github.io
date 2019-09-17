(window.webpackJsonp=window.webpackJsonp||[]).push([["5381"],{EXoV:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/meander-practical",function(){var e=n("ZBqI");return{page:e.default||e}}])},ZBqI:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),s=n.n(a),r=n("GyP+");t.default=function(){return s.a.createElement(r.c,null,s.a.createElement(r.i,{text:"Meander for Practical Data Transformation"}),s.a.createElement("p",null,"As Clojure programmers we love data. We believe that, at its core, programming is just data manipulation. To that end, Clojure provides fantastic data literals for its immutable data structures. Moreover core provides tons of functions for manipulation of data. But as our data grows more complex, things become difficult. Our beautiful declarative data transformation pipeline becomes a nested mess. We wind up, yet again, playing computer in our heads."),s.a.createElement("p",null,"In this tutorial, we are going to build up slowly to understand how ",s.a.createElement("a",{href:"https://github.com/noprompt/meander/"},"Meander")," ","can be used to solve practical data transformation problems. We will start with simple examples and move to more complicated ones, hopefully choosing problems that reflect the sorts of menial data transformation tasks we all encounter in our day jobs. Let's start with some vanilla Clojure code."),s.a.createElement(r.b,null,'\n    (def person\n      {:name "jimmy"\n       :preferred-address\n       {:address1 "123 street ave"\n        :address2 "apt 2"\n        :city "Townville"\n        :state "IN"\n        :zip "46203"}})\n    \n    (defn reformat-preferred-address [person]\n      (let [address (:preferred-address person)]\n        {:address {:line1 (:address1 address)\n                   :line2 (:address2 address)}\n         :city-info {:city (:city address)\n                     :state (:state address)\n                     :zipcode (:zip address)}}))\n    '),s.a.createElement("p",null,"Here we have a pretty decent Clojure function that converts between two different address formats. This sort of code is fairly common when we need to convert from the data requirements of one system to another. Honestly, with this simple example, the code is fairly straight forward. Our data requirements are simple and so our code isn't difficult. Let's look at how to accomplish this same task in Meander."),s.a.createElement(r.b,null,"\n    (require '[meander.match.delta :as m])\n\n    (defn reformat-preferred-address [person]\n      (m/match person\n        {:preferred-address \n         {:address1 ?address1\n          :address2 ?address2\n          :city ?city\n          :state ?state\n          :zip ?zip}}\n        \n        {:address {:line1 ?address1\n                   :line2 ?address2}\n         :city-info {:city ?city\n                     :state ?state\n                     :zipcode ?zip}}))\n    "),s.a.createElement("p",null,"Here is code that does the same thing written with Meander. One obvious thing to note is that the Meander version is much longer. Judging code based on number of lines is not something we are going to do."),s.a.createElement("p",null,"Let's explain what is going on. First we are using the Meander's"," ",s.a.createElement(r.h,null,"match")," feature. ",s.a.createElement(r.h,null,"match")," takes the thing that we are matching on (",s.a.createElement(r.h,null,"person"),"), a pattern to try to match, and the output. Our pattern here is in the exact shape of the person map we passed in. In order to extract out pieces of this map, we use logic variables (",s.a.createElement(r.h,null,"?address1"),", ",s.a.createElement(r.h,null,"?address2"),", etc). Logic variables are just symbols that start with ",s.a.createElement(r.h,null,"?"),". We can assign values in our data to any logic variables we'd like and then use those logic variables in our output. One thing I love about this simple Meander example, is that you can see the exact shape of the input immediately."),s.a.createElement(r.e,{size:"2",text:"Making Our Example Harder"}),s.a.createElement("p",null,"This example while somewhat realistic is very limited. While I like the fact that Meander's match shows us the shape of our data, for simple examples like this, Clojure does pretty well. Let's make things harder."),s.a.createElement(r.b,null,'\n    (def person\n      {:name "jimmy"\n       :preferred-address\n       {:address1 "123 street ave"\n        :address2 "apt 2"\n        :city "Townville"\n        :state "IN"\n        :zip "46203"}\n       :other-addresses \n       [{:address1 "432 street ave"\n         :address2 "apt 7"\n         :city "Cityvillage"\n         :state "New York"\n         :zip "12345"}\n        {:address1 "534 street ave"\n         :address2 "apt 5"\n         :city "Township"\n         :state "IN"\n         :zip "46203"}]})\n    '),s.a.createElement("p",null,"In the example above we left out some things. A person has a preferred address, but they also have other addresses. We have a few different things we want to do with this data. First we want to find all the distinct zip codes that a person has."),s.a.createElement(r.b,null,"\n    (defn distinct-zip-codes [person]\n      (let [preferred-address-zip (get-in person [:preferred-address :zip])\n            other-zips (map :zip (:other-addresses person))]\n        (distinct (cons preferred-address-zip other-zips))))\n    "),s.a.createElement("p",null,"Here is some pretty straight forward Clojure code for doing exactly that. I'm sure some people could have minor quibbles about how this is written, but I doubt other solutions would be much different. One thing to note here is that we have lost a little bit the structure of our input data. We could maybe change that up a bit. Maybe using distructuring is the right approach? Regardless, this is a simple and reasonable Clojure function. Now, let's look at the Meander version."),s.a.createElement(r.b,null,"\n    (defn distinct-zip-codes [person]\n      (m/match person\n        {:preferred-address {:zip !zips}\n         :other-addresses [{:zip !zips} ...]}\n        (distinct !zips)))\n    "),s.a.createElement("p",null,"Here is the exact same function, but we've introduced two new concepts. The first one is memory variables, in this case ",s.a.createElement(r.h,null,"!zip"),". Memory variables start with ",s.a.createElement(r.h,null,"!")," and remember all the values they match with. The next concept is the zero or more operator (",s.a.createElement(r.h,null,"…"),"). The zero or more operator says to repeat the pattern to its left zero or more times. In this case ",s.a.createElement(r.h,null,"{:zip !zips}"),". Using these two, we can declaratively gather up all the zip codes in this data structure."),s.a.createElement(r.e,{size:"3",text:"Minor Modifications"}),s.a.createElement("p",null,"What happens if one of our zip codes is nil? Well for both of our functions, nil gets returned in the output. That is probably not what we want. Let's fix that in both versions."),s.a.createElement(r.b,null,"\n    (defn distinct-zip-codes [person]\n      (let [preferred-address-zip (get-in person [:preferred-address :zip])\n            other-zips (map :zip (:other-addresses person))]\n        (filter some? (distinct (cons preferred-address-zip other-zips)))))\n    "),s.a.createElement(r.b,null,"\n    (defn distinct-zip-codes [person]\n      (m/match person\n        {:preferred-address {:zip (or nil !zips)}\n         :other-addresses [{:zip (or nil !zips)} ...]}\n        (distinct !zips)))\n    "),s.a.createElement("p",null,"These two functions aren't that different. In Meander we could have used"," ",s.a.createElement(r.h,null,"filter")," in the exact same way if we wanted. But it's nice that we can set these conditions on the input, which is really more closely stating our intent. Here we used ",s.a.createElement(r.h,null,"or")," a short-circuiting operator which says that we should match one of these patterns. Our first pattern is just the literal nil. If it is nil, the pattern will match, but it won't be saved anywhere. If the value isn't nil, it will be saved in our memory variable ",s.a.createElement(r.h,null,"!zips"),". Before we move on to more complex examples, let's consider one more modification. This time we want a distinct list of non-nil zips and cities output in a map like this ",s.a.createElement(r.h,null,"{:zips [] :cities []}"),"."),s.a.createElement(r.b,null,"\n    (defn distinct-zips-and-cities [person]\n      (let [preferred-address-zip (get-in person [:preferred-address :zip])\n            preferred-address-city (get-in person [:preferred-address :city])\n            other-zips (map :zip (:other-addresses person))\n            other-cities (map :city (:other-addresses person))]\n        {:zips (filter some? (distinct (cons preferred-address-zip other-zips)))\n         :cities (filter some? (distinct (cons preferred-address-city other-cities)))}))\n    "),s.a.createElement(r.b,null,"\n    (defn distinct-zips-and-cities [person]\n      (m/match person\n        {:preferred-address {:zip (or nil !zips)\n                             :city (or nil !cities)}\n         :other-addresses [{:zip (or nil !zips)\n                            :city (or nil !cities)} ...]}\n        {:zips (distinct !zips)\n         :cities (distinct !cities)}))\n    "),s.a.createElement("p",null,"With both of these examples, I extended them in the most obvious way I could think of. I think the Meander held up pretty well, but I wouldn't have written the plain Clojure function that way. Here's what I probably would have done instead."),s.a.createElement(r.b,null,"\n    (defn distinct-zips-and-cities [person]\n      (let [addresses (cons (:preferred-address person) \n                            (:other-addresses person))]\n        {:zips (filter some? (distinct (map :zip addresses)))\n         :cities (filter some? (distinct (map :city addresses)))}))\n    "),s.a.createElement("p",null,"I think this is a pretty good function. But what I find interesting is that I needed to refactor to get here. It took me a little bit to think this way. Ideally, small changes to output should not require us to restructure our code. In this case the change is minor. But if we have to change our structure in such small cases, won't we have to change it even more in larger cases?"),s.a.createElement(r.e,{size:"2",text:"Searching with Meander"}),s.a.createElement("p",null,"All our examples up until this point have had one answer. Yes, that answer might have been a collection, but there was only one way for our pattern to match. This isn't always the case. To see an example of that, let's write some functions using this data structure."),s.a.createElement(r.b,null,'\n    (def people\n      [{:name "jimmy"\n        :addresses [{:address1 "123 street ave"\n                     :address2 "apt 2"\n                     :city "Townville"\n                     :state "IN"\n                     :zip "46203"\n                     :preferred true}\n                    {:address1 "534 street ave",\n                     :address2 "apt 5",\n                     :city "Township",\n                     :state "IN",\n                     :zip "46203"\n                     :preferred false}\n                    {:address1 "543 Other St",\n                     :address2 "apt 50",\n                     :city "Town",\n                     :state "CA",\n                     :zip "86753"\n                     :preferred false}]}\n       {:name "joel"\n        :addresses [{:address1 "2026 park ave"\n                     :address2 "apt 200"\n                     :city "Town"\n                     :state "CA"\n                     :zip "86753"\n                     :preferred true}]}])\n    '),s.a.createElement("p",null,"I apologize for the amount of room this takes up on the screen, but real world examples are much larger. I want to try and make something that approaches realistic and in order to do that our input needs to be a bit bigger. Okay, so what we want do now is given a zip code, find all people that have an address with that zip code, and for each of the addresses that match that zip code, return a map of",s.a.createElement(r.h,null,"{:name <name> :address <address>}"),". So in this case if we asked for zip ",s.a.createElement(r.h,null,"86753")," we should get the following response:"),s.a.createElement(r.b,null,'\n    ({:name "jimmy",\n      :address\n      {:address1 "543 Other St",\n       :address2 "apt 50",\n       :city "Town",\n       :state "CA",\n       :zip "86753",\n       :preferred false}}\n     {:name "joel",\n      :address\n      {:address1 "2026 park ave",\n       :address2 "apt 200",\n       :city "Town",\n       :state "CA",\n       :zip "86753",\n       :preferred true}})\n    '),s.a.createElement("p",null,"Okay let's start with the vanilla Clojure example."),s.a.createElement(r.b,null,"\n    (defn find-people-with-zip [people zip]\n      (for [person people\n            address (:addresses person)\n            :when (= (:zip address) zip)]\n        {:name (:name person)\n         :address address}))\n    "),s.a.createElement("p",null,"This code might not be very idiomatic. I almost never use ",s.a.createElement(r.h,null,"for")," ","in actual code. But honestly this was the most succinct way I could think to write it. We could also have written something like this:"),s.a.createElement(r.b,null,"\n    (defn person-with-address-comb [person]\n      (map (fn [address]\n             {:name (:name person)\n              :address address})\n           (:addresses person)))\n    \n    (defn find-people-with-zip [people zip]\n      (->> people\n           (mapcat person-with-address-comb)\n           (filter (comp #{zip} :zip :address))))\n    "),s.a.createElement("p",null,"It seems like there is a better way I'm overlooking. But regardless I think any of these solutions will be a tiny bit complicated. We've definitely lost the shape of the input data. We have some imperative stuff going on here. Let's contrast this with the Meander implementation."),s.a.createElement(r.b,null,"\n    (defn find-people-with-zip [people zip]\n      (m/search people\n        (scan {:name ?name\n               :addresses (scan {:zip ~zip :as ?address})})\n        {:name ?name\n         :address ?address}))\n    "),s.a.createElement("p",null,"This is actually incredibly straight forward even if unfamiliar. We are now using ",s.a.createElement(r.h,null,"search")," to find multiple answers. Also note"," ",s.a.createElement(r.h,null,"~zip"),". The ",s.a.createElement(r.h,null,"~")," here let's us splice in variables that are in scope. And finally, we can name our whole map using the"," ",s.a.createElement(r.h,null,":as")," pattern. This code reads like what we conceptually want to do, scan people's addresses looking for zips that match the one passed in. We do not have to think at all about how this code runs."),s.a.createElement(r.e,{size:"2",text:"One Final Example"}),s.a.createElement("p",null,"For our final example of how Meander can be used to perform data manipulation, will show one feature of logic variables that we have left off so far. To do so we need some more complex data."),s.a.createElement(r.b,null,'\n    (def data\n      {:people \n       [{:name "jimmy" :id 1}\n        {:name "joel" :id 2}\n        {:name "tim" :id 3}]\n       :addresses\n       {1 [{:address1 "123 street ave"\n            :address2 "apt 2"\n            :city "Townville"\n            :state "IN"\n            :zip "46203"\n            :preferred true}\n           {:address1 "534 street ave",\n            :address2 "apt 5",\n            :city "Township",\n            :state "IN",\n            :zip "46203"\n            :preferred false}]\n        2 [{:address1 "2026 park ave"\n            :address2 "apt 200"\n            :city "Town"\n            :state "CA"\n            :zip "86753"\n            :preferred true}]\n        3 [{:address1 "1448 street st"\n            :address2 "apt 1"\n            :city "City"\n            :state "WA"\n            :zip "92456"\n            :preferred true}]}\n       :visits {1 [{:date "12-31-1900"\n                    :geo-location {:zip "46203"}}]\n                2 [{:date "1-1-1970"\n                    :geo-location {:zip "12345"}}\n                   {:date "1-1-1970"\n                    :geo-location {:zip "86753"}}]\n                3 [{:date "4-4-4444"\n                    :geo-location {:zip "54221"}}\n                   {:date "4-4-4444"\n                    :geo-location {:zip "92456"}}]}})\n    '),s.a.createElement("p",null,"Here we have some much more realistic data than anything we've seen before. We have a map with three top level keys. These represent data we have gathered from various sources. The first key ",s.a.createElement(r.h,null,":people")," is our collection of people with names and ids. The next are the"," ",s.a.createElement(r.h,null,":addresses")," of these people, indexed by id for efficient lookup. And finally we have ",s.a.createElement(r.h,null,":visits"),", this represents the dates that the users visited our site, again indexed by user-id."),s.a.createElement("p",null,"Here's the mock scenario, we've seen suspicious activity on our site and we aren't quite sure how to narrow it down. We are going to start our investigation by finding any users who had visits that were not in the same zip as their preferred address. Because of the nature of our application, we happen to know that it is typically used at the preferred location. Once we know the users affected, we need to return their name, id, the date of access, and the zip code that didn't match. But I want to show that despite this somewhat complicated scenario, we can easily express this using Meander. Before we get there, the Clojure implementation."),s.a.createElement(r.b,null,"\n    \n    (defn find-non-matching-visits [address visits]\n      (filter (comp (complement #{(:zip address)}) :zip :geo-location) visits))\n    \n    (defn find-bad-visits-for-person [addresses visits person]\n      (let [preferred-address (first (filter :preferred addresses))\n            non-matching (find-non-matching-visits preferred-address visits)]\n        (map (fn [visit] {:name (:name person)\n                          :id (:id person)\n                          :zip (get-in visit [:geo-location :zip])\n                          :date (:date visit)})\n            non-matching)))\n    \n    (defn find-potential-bad-visits [{:keys [addresses visits people]}]\n      (mapcat (fn [{:keys [id] :as person}] \n                (find-bad-visits-for-person \n                 (addresses id)\n                 (visits id) \n                 person))\n              people))\n    "),s.a.createElement("p",null,"I really wanted to come up with a better implementation. ",s.a.createElement(r.h,null,"for")," ","might have been useful here. If any reader has a better implementation, I'm happy to replace this one. But honestly, I think no matter version we went with, it is going to have the features that make this one less than desirable. Just look at how much of this code is about telling the computer what to do. Let's look at the Meander version now."),s.a.createElement(r.b,null,"\n    (defn find-potential-bad-visits [data]\n      (m/search data\n        {:people (scan {:id ?id :name ?name})\n         :addresses {?id (scan {:preferred true :zip ?zip})}\n         :visits {?id (scan {:geo-location {:zip (and (not ?zip) ?bad-zip)}\n                             :date ?date})}}\n        {:name ?name\n         :id ?id\n         :zip ?bad-zip\n         :date ?date}))\n    "),s.a.createElement("p",null,"This is where Meander shines. ",s.a.createElement(r.h,null,"?id")," is being used to join across data structures. We can now find an id in people and use that to index into other collections. This allows us to find out everything we need to know about a person easily. We can also search into any collection and match on data at any level. We don't need to rely on pulling things out into a higher scope by using let bindings, making helper functions to work on sub collections, or creating a series of transformations to get at the data we care about. Instead we declare our data needs and the relationships that need to hold between them."),s.a.createElement(r.e,{size:"2",text:"Conclusion"}),s.a.createElement("p",null,"I hope that this has been a good introduction to how Meander can be used for practical data transformation problems. In many of these examples, the vanilla Clojure made for pretty good code. But as the data requirements become more complex, we need tools to handle these. While we may be able to accomplish any of these tasks, the understanding of the structure of our code becomes lost. Looking at the example above, we know so much about what the data coming in looks like. Our code mirrors precisely the shape of data we get in."),s.a.createElement("p",null,"Now I do admit, my examples here are a bit contrived. But they are meant to be simple so we don't focus on the examples and instead focus on the code. In coming posts I will explore more directly various ways we can apply Meander for data transformation. Some ideas I have in mind are using Meander with honeysql to turn our data into sql, transforming a collection of data into hiccup for display as html, and using Meander to scrap the web. I'd also love to do more computer science examples. Using Meander to make little lisp interpreter, a CEK machine or basic arithmetic. And yet, Meander goes way beyond all of these things. Meander is about more than practical data manipulation. It is about a new away of programming, a new way of thinking about problems. Hopefully this introduction will help you to dive in and try it yourself."))}}},[["EXoV","5d41","9da1"]]]);