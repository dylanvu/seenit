(this.webpackJsonpseenit=this.webpackJsonpseenit||[]).push([[0],{47:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){"use strict";s.r(t);var c=s(2),i=s(3),n=s(40),a=s.n(n),o=(s(47),s(7)),r=s(12),l=s.n(r),j=s(17),d=s(20),b=s(30);b.a.initializeApp({apiKey:"AIzaSyCCvSz6NSkMPzmMbt0d90d9SXeJdazGVww",authDomain:"seenit-bfe8f.firebaseapp.com",databaseURL:"https://seenit-bfe8f-default-rtdb.firebaseio.com",projectId:"seenit-bfe8f",storageBucket:"seenit-bfe8f.appspot.com",messagingSenderId:"636830494102",appId:"1:636830494102:web:b51599d4d380e001c701b7",measurementId:"G-1FVVW1Q9WY"});var u=b.a.database(),v=s.p+"static/media/poster_not_found.be05f963.png";var O=function(e){var t="Image of cover for "+e.title,s=Object(i.useState)(!1),n=Object(o.a)(s,2),a=n[0],r=n[1],l=Object(i.useState)(),j=Object(o.a)(l,2),b=j[0],O=j[1];Object(i.useEffect)((function(){g(e.API_id);var t="https://image.tmdb.org/t/p/w1280"+e.url;null==e.url?O(v):O(t)}),[]);var g=function(t){null!=e.googleObj&&u.ref().child("users/".concat(e.googleObj.googleId,"/movies")).orderByChild("API_id").equalTo(t).limitToFirst(1).once("child_added",(function(e){t===e.val().API_id?r(!0):r(!1)}))};return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"movie",children:[Object(c.jsx)("img",{src:b,alt:t,className:"moviePoster"}),Object(c.jsx)(d.b,{to:"/Movie",onClick:function(){e.setAPI_id(e.API_id)},children:Object(c.jsx)("div",{className:"overlay",children:Object(c.jsx)("div",{className:"movieText",children:e.title})})})]}),Object(c.jsx)("div",{children:a?Object(c.jsx)("button",{className:"databaseButton",onClick:function(){return t=e.db_key,void u.ref("/users/".concat(e.googleObj.googleId,"/movies/").concat(t)).remove();var t},children:"Delete from Favorite Movies"}):Object(c.jsx)("button",{className:"databaseButton",onClick:function(){null==e.googleObj||a?console.log("object null"):(u.ref("/users/".concat(e.googleObj.googleId,"/movies")).push({API_id:e.API_id,title:e.title,img:e.url}),r(!0))},children:" Add to Favorite Movies"})}),Object(c.jsx)("br",{})]})},g=function(e){return Object(c.jsxs)("div",{className:"movieList-container",children:[Object(c.jsx)("div",{className:"movieListTitle-container",children:Object(c.jsx)("div",{className:"movieListTitle",children:e.listName})}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{className:"movie-container",children:e.movieList.map((function(t){return Object(c.jsx)(O,{db_key:t.db_key,API_id:t.id,url:t.poster_path,title:t.title,googleObj:e.googleObj,setAPI_id:e.setAPI_id})}))})]})},h=s(19),m=s.n(h),f="78fcb8fa5df23ceee859f6258985efc4",x="https://api.themoviedb.org/3/trending/movie/day?api_key="+f,p="https://api.themoviedb.org/3/trending/all/week?api_key="+f,N=function(e){var t=Object(i.useState)([]),s=Object(o.a)(t,2),n=s[0],a=s[1],r=Object(i.useState)([]),d=Object(o.a)(r,2),b=d[0],u=d[1];function v(){return(v=Object(j.a)(l.a.mark((function e(){var t,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(x);case 2:for(t=e.sent,s=[],c=0;c<14;c++)t.data.results[c]&&s.push(t.data.results[c]);a(s);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(j.a)(l.a.mark((function e(){var t,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(p);case 2:for(t=e.sent,s=[],c=0;c<14;c++)t.data.results[c]&&s.push(t.data.results[c]);u(s);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(i.useEffect)((function(){!function(){v.apply(this,arguments)}(),function(){O.apply(this,arguments)}()}),[]);return Object(c.jsxs)("div",{children:[Object(c.jsx)(g,{movieList:n,listName:"Daily Trending Movies",googleObj:e.googleObj,setAPI_id:e.setAPI_id}),Object(c.jsx)("br",{}),Object(c.jsx)(g,{movieList:b,listName:"Weekly Trending Movies",googleObj:e.googleObj,setAPI_id:e.setAPI_id}),Object(c.jsx)("br",{})]})},I=s.p+"static/media/logo.004d2315.png",_=s(24);var w=function(e){return Object(c.jsx)("div",{children:Object(c.jsx)(_.GoogleLogin,{clientId:"134504818403-t4rj4robf4vckhm3tso4v6gmkcmfbtqv.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(t){console.log("Login Success: currentUser:",t.profileObj),function(e){var t=1e3*(e.tokenObj.expires_in||3300),s=function(){var c=Object(j.a)(l.a.mark((function c(){var i;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.reloadAuthResponse();case 2:i=c.sent,t=1e3*(i.expires_in||3300),console.log("newAuthRes:",i),localStorage.setItem("authToken",i.id_token),setTimeout(s,t);case 7:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();setTimeout(s,t)}(t),e.setLoggedIn(!0),e.setGoogleObj(t.profileObj)},onFailure:function(e){console.log("Login failed: res:",e),alert("Failed to login \ud83d\ude22. Please try again")},cookiePolicy:"single_host_origin",isSignedIn:!0})})};var P=function(e){return Object(c.jsx)("div",{children:Object(c.jsx)(_.GoogleLogout,{clientId:"134504818403-t4rj4robf4vckhm3tso4v6gmkcmfbtqv.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:function(){console.log("Logout made successfully"),e.setLoggedIn(!1)}})})};var k=function(){return Object(c.jsxs)("div",{className:"AboutMe",children:[Object(c.jsx)("h3",{children:"About Me"}),Object(c.jsx)("p",{children:"User Bio Here"})]})},y=function(e){return console.log(e.db_key),Object(c.jsx)("div",{id:"ReviewContainerShadow",children:Object(c.jsx)("div",{className:"ReviewContainer",children:Object(c.jsxs)("div",{className:"Review",children:[Object(c.jsx)("h2",{children:e.db_key?e.movieTitle:e.user}),Object(c.jsx)("q",{className:"ReviewContent",children:e.reviewContent}),Object(c.jsxs)("p",{className:"stars",children:["Stars: ",e.stars]}),e.db_key?Object(c.jsx)("button",{className:"databaseButton",onClick:function(){return t=e.db_key,u.ref("/users/".concat(e.googleObj.googleId,"/movieReviews/").concat(t)).remove(),void u.ref("/movieReviews/".concat(e.API_id,"/").concat(t)).remove();var t},children:" Delete review "}):null]})})})},A=function(e){var t=Object(i.useState)([]),s=Object(o.a)(t,2),n=s[0],a=s[1];return Object(i.useEffect)((function(){return u.ref("users/".concat(e.googleObj.googleId,"/movieReviews")).on("value",(function(e){var t=[];null!=e&&e.forEach((function(e){var s={db_key:e.key,API_id:e.val().API_id,title:e.val().title,reviewContent:e.val().review,stars:5};console.log(s.db_key),t.push(s)})),a(t)}))}),[]),console.log(n),Object(c.jsxs)("div",{className:"ReviewList",children:[Object(c.jsx)("div",{className:"movieListTitle",children:"My Recent Reviews"}),n.map((function(t){return Object(c.jsx)(y,{googleObj:e.googleObj,db_key:t.db_key,API_id:t.API_id,movieTitle:t.title,reviewContent:t.reviewContent,stars:t.stars})}))]})},S=function(e){var t=Object(i.useState)([]),s=Object(o.a)(t,2),n=s[0],a=s[1];return Object(i.useEffect)((function(){return u.ref("users/".concat(e.googleObj.googleId,"/movies")).on("value",(function(e){var t=[];null!=e&&e.forEach((function(e){var s={db_key:e.key,title:e.val().title,poster_path:e.val().img,id:e.val().API_id};t.push(s)})),a(t)}))}),[]),Object(c.jsxs)("div",{className:"UserPageFlex",children:[Object(c.jsxs)("div",{className:"user",children:[Object(c.jsx)("img",{className:"GooglePic",src:e.googleObj.imageUrl,alt:"Your Profile Icon"}),Object(c.jsx)("h3",{style:{fontSize:"40px"},children:e.googleObj.name}),Object(c.jsx)(k,{})]}),Object(c.jsxs)("div",{className:"UserContent",children:[Object(c.jsx)("div",{className:"MyMovies",children:Object(c.jsx)(g,{listName:"My Favorite Movies",googleObj:e.googleObj,movieList:n,setAPI_id:e.setAPI_id})}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{className:"MyReviews",children:Object(c.jsx)(A,{googleObj:e.googleObj})})]})]})},C="https://image.tmdb.org/t/p/w1280",R=function(e){var t=Object(i.useState)(""),s=Object(o.a)(t,2),n=s[0],a=s[1],r=Object(i.useState)([]),d=Object(o.a)(r,2),b=d[0],O=d[1],g=Object(i.useState)([]),h=Object(o.a)(g,2),f=h[0],x=h[1],p=Object(i.useState)(),N=Object(o.a)(p,2),I=N[0],_=N[1],w="https://api.themoviedb.org/3/movie/"+e.API_id+"?api_key=78fcb8fa5df23ceee859f6258985efc4";return Object(i.useEffect)((function(){return u.ref("movieReviews/".concat(e.API_id)).on("value",(function(e){var t=[];null!=e&&e.forEach((function(e){var s={key:e.key,API_id:e.val().API_id,user:e.val().user.givenName+" "+e.val().user.familyName,reviewContent:e.val().review,stars:5};t.push(s)})),O(b.concat(t))}))}),[]),Object(i.useEffect)((function(){function t(){return(t=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(w);case 2:t=e.sent,x(t.data),null==t.data.poster_path?_(v):_(C+t.data.poster_path);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}(e.API_id)}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"MoviePageFlex",children:[Object(c.jsx)("div",{className:"MovieImage",children:Object(c.jsx)("img",{src:I,alt:"Movie Poster of "+f.title,className:"MoviePagePoster"})}),Object(c.jsxs)("div",{className:"MovieContent",children:[Object(c.jsx)("h1",{className:"MovieTitle",children:f.title}),Object(c.jsx)("p",{className:"overview",children:f.overview}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:0===b.length?Object(c.jsx)("h1",{children:"Write the First Review"}):Object(c.jsx)("h1",{children:"Write a Review"})}),Object(c.jsx)("div",{className:"WriteReviewContainer",children:Object(c.jsxs)("div",{className:"WriteReview",children:[Object(c.jsx)("textarea",{className:"textarea",name:"text",wrap:"soft",onChange:function(e){a(e.target.value)},value:n}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:"AddReviewButton",onClick:function(){null!=e.googleObj?(u.ref("/users/".concat(e.googleObj.googleId,"/movieReviews")).push({API_id:e.API_id,title:f.title,review:n}),u.ref("/movieReviews/".concat(e.API_id)).push({API_id:e.API_id,user:e.googleObj,review:n}),a("")):console.log("object null")},children:" Save Review "})]})}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{children:0===b.length?Object(c.jsx)("h1",{children:"No Reviews Found"}):Object(c.jsx)("h1",{children:"All Reviews"})}),b.map((function(e){return Object(c.jsx)(y,{API_id:f.id,user:e.user,reviewContent:e.reviewContent,stars:e.stars})}))]})]})]})]})},L=function(e){var t=e.alert;return Object(c.jsx)("div",{className:"alert",children:Object(c.jsx)("h3",{children:t})})},M=function(e){var t=Object(i.useState)(""),s=Object(o.a)(t,2),n=s[0],a=s[1],r=Object(i.useState)([]),d=Object(o.a)(r,2),b=d[0],u=d[1],v=Object(i.useState)(""),O=Object(o.a)(v,2),h=O[0],f=O[1],x=Object(i.useState)(!1),p=Object(o.a)(x,2),N=p[0],I=p[1],_="https://api.themoviedb.org/3/search/movie?api_key=78fcb8fa5df23ceee859f6258985efc4&query="+n,w=function(){var e=Object(j.a)(l.a.mark((function e(){var t,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===n){e.next=18;break}return console.log("The query submitted is: "+n),e.next=4,m.a.get(_);case 4:if(t=e.sent,console.log(t.data.results),t.data.results!==[]){e.next=10;break}return f("No movie with such name"),console.log("No movie found"),e.abrupt("return",null);case 10:for(s=[],c=0;c<10;c++)t.data.results[c]&&s.push(t.data.results[c]);u(s),I(!0),a(""),f(""),e.next=19;break;case 18:f("Please fill out the form");case 19:return e.abrupt("return",null);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"SearchPage",children:[Object(c.jsx)("h1",{children:"Search for Movies"}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n&&(w(),a(""))},className:"search-form",children:[""!==h&&Object(c.jsx)(L,{alert:h}),Object(c.jsx)("input",{type:"text",name:"query",onChange:function(e){a(e.target.value)},value:n,autoComplete:"off",placeholder:"Search Movies",className:"textInput"}),"\xa0\xa0\xa0",Object(c.jsx)("input",{type:"submit",value:"Search",className:"searchButton"})]}),Object(c.jsx)("div",{className:"search-results-container",children:N?Object(c.jsx)(g,{googleObj:e.googleObj,listName:"Search Results",movieList:b,setAPI_id:e.setAPI_id}):Object(c.jsx)("p",{children:"Please search for a movie above!"})})]})},T=s(9);s(73);var F=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),s=t[0],n=t[1],a=Object(i.useState)(),r=Object(o.a)(a,2),l=r[0],j=r[1],b=Object(i.useState)(),u=Object(o.a)(b,2),v=u[0],O=u[1];return Object(c.jsxs)(d.a,{children:[Object(c.jsxs)("div",{className:"navbar",children:[Object(c.jsx)("div",{className:"headingColimg",children:Object(c.jsx)(d.b,{to:"/",className:"link",children:Object(c.jsx)("img",{className:"Logo",src:I,height:"100",alt:"SeenIt logo"})})}),Object(c.jsxs)("div",{className:"headingCol",children:[Object(c.jsx)("h1",{className:"title",children:"SeenIt"}),Object(c.jsx)("p",{className:"subheading",children:"The Social Movie Network in React"})]}),Object(c.jsx)("div",{className:"headingCol",children:Object(c.jsx)("p",{className:"headingText",children:Object(c.jsx)(d.b,{to:"/Search",className:"link",children:"Search for a movie"})})}),Object(c.jsx)("div",{className:"headingCol",children:s?Object(c.jsx)("p",{className:"headingText",children:Object(c.jsx)(d.b,{to:"/User",className:"link",children:"View Profile"})}):Object(c.jsx)("p",{className:"headingText",children:"Log in to view profile"})}),Object(c.jsx)("div",{className:"headingCol",children:Object(c.jsxs)("div",{div:!0,className:"login-buttons",children:[Object(c.jsx)("div",{children:s?Object(c.jsx)(P,{loggedIn:s,setLoggedIn:function(e){return n(e)},setGoogleObj:function(e){return j(e)}}):Object(c.jsx)(w,{loggedIn:s,setLoggedIn:function(e){return n(e)},setGoogleObj:function(e){return j(e)}})}),Object(c.jsx)("div",{children:Object(c.jsxs)("p",{className:"headingText",children:["\xa0 ",l?"Welcome back, ".concat(l.name,"!"):"Not logged in. Please log in.","\xa0"]})})]})})]}),Object(c.jsxs)(T.c,{children:[Object(c.jsx)(T.a,{exact:!0,path:"/",children:Object(c.jsx)(N,{googleObj:l,setAPI_id:function(e){return O(e)}})}),Object(c.jsx)(T.a,{exact:!0,path:"/Movie",children:Object(c.jsx)(R,{googleObj:l,API_id:v})}),Object(c.jsx)(T.a,{exact:!0,path:"/User",children:l?Object(c.jsx)(S,{googleObj:l,setAPI_id:function(e){return O(e)}}):Object(c.jsx)("p",{})}),Object(c.jsx)(T.a,{exact:!0,path:"/Search",children:Object(c.jsx)(M,{googleObj:l,setAPI_id:function(e){return O(e)}})})]})]})};a.a.render(Object(c.jsx)(F,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.f99f8165.chunk.js.map