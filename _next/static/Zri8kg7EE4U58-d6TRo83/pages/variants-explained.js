(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"/x8n":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/variants-explained",function(){var e=t("A6Rs");return{page:e.default||e}}])},A6Rs:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),o=t.n(a),s=t("GyP+"),i=o.a.createElement;n.default=function(){return i(s.c,null,i(s.i,{text:"Variants Explained"}),i("p",null,"Imagine you have the following request for a product you are building:"),i(s.a,null,"Users should be able to login using the following methods:",i("ul",null,i("li",null,"Username and Password"),i("li",null,"Phone Number"),i("li",null,"Facebook Login"))),i("p",null,"As you are building this application you have to think about how to represent these user credentials. It might look something like this:"),i(s.f,null,'\n      // Username and Password auth\n      userCredentials: {\n        username: "test",\n        password: "password"\n      }\n\n      // phoneNumber auth\n      userCredentials: {\n        phoneNumber: "555-867-5309"\n      }\n\n      // Facebook Login\n      userCredentials: {\n        token: "VGhpcyBpcyBzdXBlciBzZWNyZXQ=" \n      }\n    '),i("p",null,"There is a problem with the above way of representing this scenario. Imagine we needed to write a function that uses these user credentials. We have to make sure to handle every single case."),i(s.f,null,"\n      function handleAuth(userCredentials) {\n        if (userCredentials.username && userCredentials.password) {\n        // do stuff with username login\n        } else if (userCredentials.phoneNumber) {\n            // do stuff with phone number login\n        } else if (userCredentials.token) {\n            // do stuff with facebook login\n        } else {\n            // handle unknown scenario\n        }\n      }\n    "),i("p",null,"This code made seem good as far as it goes, in fact, it even handles malformed data gracefully. Now imagine that our requirements change, we now need to handle third party username and password requests as well. We decide to model this in the obvious way."),i(s.f,null,'\n        userCredentials: {\n          username: "test",\n          password: "password",\n          thirdParty: "SomeOtherBusiness"\n        }\n    '),i("p",null,"Unfortuantely now our code breaks, but not by throwing a nice error, it breaks subtly. We will try to use third party usernames and passwords for our own login system and since they have a username and password we will mistake them for first party logins."),i("p",null,"In javascript, there aren't too many great solutions to this. One obvious one is to create a class for each of different userCredential type. Then for any function we want to implement on our different types we implement a method in that class. That is how a Java developer may have solved this problem. That approach has its upsides and downsides, but rather than dive into those, let's look at a different approach, one that isn't supported by javascript. Since it isn't supported by javascript we will have to choose some other language. But rather than choose an existing language, let's just make up our own and imagine what it might be like to solve this problem in it."),i(s.e,{size:2,text:"Variants: An Example"}),i("p",null,"The essence of our requirements is that we need to support different methods of login. Users may login this way ",i("em",null,"or")," that way ",i("em",null,"or")," someother way. We need a way to represent ",i("strong",null,"or")," in our data model. Variants allow us to do exactly that. Let's first look at a simple example of a variant."),i(s.d,null,"\n      data Color = Green | Red | Blue\n    "),i("p",null,"Here we have a variant with three choices of colors. In our world, a color can only be green, red, or blue. No other colors are available to us. What we need to do now is write a function which returns true if it is passed the ",i("em",null,"best")," color."),i(s.f,null,"\n      fn bestColor {\n        Green => true\n        Red => false\n        Blue => false\n      }\n      bestColor(Red)\n      // false\n\n      bestColor(Green)\n      // true\n    "),i("p",null,"This function is rather straight-forward. We pattern match on the argument of the function to determine what was passed in. This allows us to express in a very concise way each case and what its output should be. Variants combined with pattern matching allow for very expressive, explicit code."),i("p",null,"Simple variants like color are just like enums in other languages, but variants are much more useful when they can take arguments as well."),i(s.d,null,"\n      data UserCredentials = FirstParty(username, password)\n                           | Phone(phoneNumber)\n                           | Facebook(token)\n                           | ThirdParty(username, password, thirdParty)\n    "),i("p",null,"Here we have our login problem fully specified. Each case is represented as a data type and because of that we can write a much less error prone functions for dealing with each case."),i(s.f,null,"\n      fn handleAuth {\n        FirstParty(username, password) => // do stuff with username login\n        Phone(phoneNumber ) => // do stuff with phone number login\n        Facebook(token) => // do stuff with facebook login\n        ThirdParty(username, password, thirdparty) => // do stuff with thirdParty login\n        otherwise => // handle unknown scenario\n      }\n    "),i("p",null,"Not only is our function less error prone, it is also much easier to understand. Variants allow our code to be self documenting. Each case is named and handle explicitly leading us to think precisely about each scenario. Since our imaginary language is dynamically typed, we do need to handle the ",i(s.h,null,"otherwise")," case (imagine someone passed in a number instead), but if it were statically typed we could be guarantee that nothing other than those variants would be passed."),i(s.e,{size:2,text:"Using Variants to Solve Problems"}),i("p",null,"Variants are not just limited to concrete scenarios like the login above. They can be quote a bit more generic and that can give us more power. Let's look at a few generic variants that can be used to tackle common and difficult problems in programming."),i(s.e,{size:2,text:"Nulls"}),i("p",null,"Null (undefined as well) is one of the most frustating things to work with. Expressing nulls checks leads to verbose code. Code isn't actually about the problem we are trying to solve. Variants offer an alternative to nulls, called the Maybe type."),i(s.d,null,"\n      data Maybe = Nothing | Something(thing)\n    "),i("p",null,"The definition above may seem a bit strange if this is your first time encountering it. What it says is that there are two cases we need to consider, when we have nothing (the null case) and when we have something (the non-null case). We can use this by pattern matching."),i(s.f,null,"\n      fn tryToGetUserId {\n        Something(user) => Something(getId(user))\n        Nothing => Nothing\n      }\n    "),i("p",null,"The tryToGetUserId handles the case when we don't have a user id by pattern matching on ",i(s.h,null,"Nothing")," and returning"," ",i(s.h,null,"Nothing"),". If however we get something (a user) then we get the id of that user and return ",i(s.h,null,"Something")," which contains a user."),i("p",null,"The tryToGetUserId handles the case when we don't have a user id by pattern matching on ",i(s.h,null,"Nothing")," and returning ",i(s.h,null,"Nothing"),". If however we get something (a user) then we get the id of that user and return ",i(s.h,null,"Something"),"which contains a user."),i("p",null,"As it stands, this isn't that much better than null, but when combined with simple functions, this variant becomes infinitely more useful."),i(s.f,null,"\n      fn map {\n        (f, Something(x)) => Something(f(x))\n        (f, Nothing) => Nothing\n      }\n    "),i("p",null,"Here we have map. You may be familiar with map with it comes to lists and if so, map for ",i(s.h,null,"Maybe")," is very similar. As you can see from the function definition, map applies f only if we have ",i(s.h,null,"Something"),", if not it returns",i(s.h,null,"Nothing"),". Using map we can rewrite our tryToGetUserId function."),i(s.f,null,"\n      fn tryToGetUserId(maybeUser) {\n        map(getId, maybeUser)\n      }\n    "),i("p",null,"Using map extracts out all the pattern matching and does it for us. This same pattern can work for other variants. ",i(s.h,null,"map")," is much more general than just lists."),i(s.d,null,"\n      data Either = Error e | Success s\n      data List = Nil | Cons x tail\n      data Tree = Leaf | Node left x right\n    "),i("p",null,"For each of these structures, there is a sensible map definition. ",i(s.h,null,"Either"),"allows us to handle errors and only apply the function if we are not in an error state, mapping over a ",i(s.h,null,"List")," applies the function to each element, and mapping over a tree applies the function to each node, recursing through the tree."),i(s.e,{size:2,text:"Conclusion"}),i("p",null,"Variants are an extremely expressive way to state the assumptions behind our code. They force us to be explicit and handle cases individual. Yet, they also give a means of abstraction, a point at which we can define common interfaces and ignored the particularities underneath. In future posts we will take up this notion in more depth, showing how ",i(s.h,null,"protocols"),"when combined with ",i(s.h,null,"variants")," can bring our language even more power."))}}},[["/x8n",1,0]]]);