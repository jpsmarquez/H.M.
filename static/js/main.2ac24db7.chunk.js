(this.webpackJsonpego=this.webpackJsonpego||[]).push([[0],{107:function(e,t,n){e.exports=n(272)},112:function(e,t,n){},272:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(105),l=n.n(c),r=(n(112),n(29)),u=n(26),i=n(2),s=n(41),m=n(28);n(128);m.initializeApp({apiKey:"AIzaSyCsrJwOTh9EsWqCiyvXtuUoelsBsohcAIU",authDomain:"egdeomx.firebaseapp.com",databaseURL:"https://egdeomx.firebaseio.com",projectId:"egdeomx",storageBucket:"egdeomx.appspot.com",messagingSenderId:"1012924663671",appId:"1:1012924663671:web:3592cc97e4dd67cdec0372",measurementId:"G-QL4JJ74DJY"}),m.analytics();function g(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),i=Object(r.a)(l,2),s=i[0],g=i[1];return o.a.createElement("div",null,"LOG IN",o.a.createElement("input",{onChange:function(e){return c(e.target.value)},value:n}),o.a.createElement("input",{onChange:function(e){return g(e.target.value)},value:s,type:"password"}),o.a.createElement("button",{onClick:function(){console.log(n),console.log(s),m.auth().signInWithEmailAndPassword(n,s).catch((function(e){var t=e.message;console.log(t)}))}}," SUBMIT"),o.a.createElement(u.b,{to:"/Home"}))}n(133);function d(e){return o.a.createElement("div",null,"Home",o.a.createElement("button",{onClick:e.logout},"log out"))}function p(e){return o.a.createElement("div",null,"Home  ",o.a.createElement("button",{onClick:e.logout},"log out")," ")}function h(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),n=t[0],c=t[1],l=function(){s.auth().signOut(),c(null)};return Object(a.useEffect)((function(){s.auth().onAuthStateChanged((function(e){console.log(e),e?s.database().ref("/usuario/"+e.uid).once("value",(function(e){console.log(e.val().tipo),c(e.val().tipo)})):c(null)}))})),o.a.createElement(u.a,null,o.a.createElement(i.d,null,o.a.createElement(i.b,{exact:!0,path:"/",render:function(e){return n?o.a.createElement(i.a,{to:"/Home"}):o.a.createElement(g,e)}}),o.a.createElement(i.b,{exact:!0,path:"/Home",render:function(e){return n?"admin"===n?o.a.createElement(d,Object.assign({},e,{logout:l})):o.a.createElement(p,Object.assign({},e,{logout:l})):o.a.createElement(g,e)}})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[107,1,2]]]);
//# sourceMappingURL=main.2ac24db7.chunk.js.map