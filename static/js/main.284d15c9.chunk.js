(this.webpackJsonpfindnearbyplaces=this.webpackJsonpfindnearbyplaces||[]).push([[0],{60:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(22),r=c.n(s),o=(c(60),c(2),c(3),c(6)),i=c(70),l=c(76),j=c(71),d=c(34),u=c(72),b=c(73),h=c(52),O="https://yifeicua-findnearbyplaces.herokuapp.com",p={getFlowers:function(){return fetch("".concat(O,"/flowers")).then((function(e){var t=e.json();return console.log(t),t}))},getQuiz:function(e){return fetch("".concat(O,"/quiz/").concat(e)).then((function(e){return e.json()})).then((function(e){return e.map((function(e){return{picture:e.picture,choices:e.choices.split(","),answer:e.answer}}))}))},setUser:function(e,t,c){return fetch("".concat(O,"/register"),{method:"POST",withCredentials:!0,headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:c})}).then((function(e){return e.json()}))},getUser:function(e,t){return fetch("".concat(O,"/login"),{method:"POST",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Credentials":!0},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()}))},verifyTwitter:function(e){return fetch("".concat(O,"/twitter/verify/").concat(e),{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Credentials":!0}}).then((function(e){return e.json()}))},logout:function(){return fetch("".concat(O,"/logout"),{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Credentials":!0}}).then((function(e){return e.json()}))}},x=c(1),m=function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),a=c[0],s=c[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("h1",{children:["Find near by places: ",Object(x.jsx)(i.a,{bg:"secondary",children:"yelp"})]}),Object(x.jsxs)(l.a,{onSubmit:function(e){e.preventDefault()},children:[Object(x.jsxs)(l.a.Group,{className:"mb-3",children:[Object(x.jsx)(l.a.Control,{size:"lg",type:"text",placeholder:"Search..."}),Object(x.jsx)(l.a.Text,{className:"text-muted",children:"Please enter your search term Ex: McDonald's / Restaurant"})]}),Object(x.jsx)(l.a.Group,{className:"mb-3",children:Object(x.jsx)(l.a.Check,{type:"checkbox",label:"save account number"})}),Object(x.jsx)("div",{className:"d-grid gap-2",children:Object(x.jsx)(j.a,{size:"lg",variant:"primary",type:"submit",children:"Search"})}),Object(x.jsx)("div",{className:"d-grid gap-2",children:Object(x.jsx)(j.a,{onClick:function(){return s(!a)},"aria-controls":"example-fade-text","aria-expanded":a,variant:"outline-danger",children:"help"})}),Object(x.jsx)(d.a,{in:a,children:Object(x.jsxs)("div",{id:"example-fade-text",children:[Object(x.jsx)(u.a,{children:"Please enter the query items according to your needs"},"success"),"You need a string containing the search term. A search term is a place name or a category name or part of a place name or part of a category name. And below, you have to give us your current location which should be whare you are now, you should enter a name of place radius: is Optional search radius in meters. a number category: is Optional category to filter search results, e.g., Restaurants, Shopping Centers, etc. sortBy: Optional sort mode: Best matched (0 - default), Minimum"]})}),Object(x.jsx)(b.a,{children:Object(x.jsx)(u.a,{children:"Please fill in the items below to assist in the search according to your needs"},"info")}),Object(x.jsxs)(l.a.Group,{className:"mb-3",children:[Object(x.jsx)(l.a.Label,{children:"Where are you?"}),Object(x.jsx)(l.a.Control,{type:"text"})]}),Object(x.jsxs)(b.a,{className:"mb-3",children:[Object(x.jsxs)(l.a.Group,{as:h.a,children:[Object(x.jsx)(l.a.Label,{children:"Category(optional)"}),Object(x.jsx)(l.a.Control,{type:"text"})]}),Object(x.jsxs)(l.a.Group,{as:h.a,children:[Object(x.jsx)(l.a.Label,{children:"radius(optional)"}),Object(x.jsx)(l.a.Control,{placeholder:"1000"})]}),Object(x.jsxs)(l.a.Group,{as:h.a,children:[Object(x.jsx)(l.a.Label,{children:"sortBy(optional)"}),Object(x.jsxs)(l.a.Select,{defaultValue:"Choose...",children:[Object(x.jsx)("option",{children:"Best matched"}),Object(x.jsx)("option",{children:"Minimum"})]})]})]})]})]})},f=(c(45),function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(),r=Object(o.a)(s,2),i=r[0],d=r[1],h=Object(n.useState)(),O=Object(o.a)(h,2),m=O[0],f=O[1],g=Object(n.useState)(),y=Object(o.a)(g,2),C=y[0],v=y[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(l.a,{onSubmit:function(e){e.preventDefault(),console.log(i),console.log(m),console.log(C),c=p.setUser(m,i,C).then((function(e){console.log(e),a("       Sign up successfully\uff01\uff01\uff01")}))},children:[Object(x.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(x.jsx)(l.a.Label,{children:"Email address"}),Object(x.jsx)(l.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){return d(e.target.value)},required:!0}),Object(x.jsx)(l.a.Text,{className:"text-muted",children:"please enter your email address"})]}),Object(x.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicText",children:[Object(x.jsx)(l.a.Label,{children:"User name"}),Object(x.jsx)(l.a.Control,{type:"text",placeholder:"username",onChange:function(e){return f(e.target.value)},required:!0}),Object(x.jsx)(l.a.Text,{className:"text-muted",children:"please enter your username"})]}),Object(x.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(x.jsx)(l.a.Label,{children:"Password"}),Object(x.jsx)(l.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return v(e.target.value)},required:!0})]}),Object(x.jsx)(l.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(x.jsx)(l.a.Check,{type:"checkbox",label:"save account number"})}),Object(x.jsx)(j.a,{variant:"primary",type:"submit",children:"Sign up"})]}),Object(x.jsx)(b.a,{children:Object(x.jsxs)(u.a,{children:["Sign up with username(show in console): ",m,c]},"info")})]})}),g=c(9),y=function(e){var t=Object(n.useState)(),c=Object(o.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(),i=Object(o.a)(r,2),d=i[0],h=i[1],O=Object(n.useState)(),m=Object(o.a)(O,2),f=m[0],y=m[1],C=Object(g.g)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(l.a,{onSubmit:function(t){t.preventDefault(),console.log(d),console.log(f),p.getUser(d,f).then((function(t){console.log(t),1==t.done?(localStorage.setItem("customer",d),s("       Login successfully\uff01\uff01\uff01(check console)"),e.onAuthenticated(),C.push({pathname:"/"})):s("       Login faild(check console)")}))},children:[Object(x.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(x.jsx)(l.a.Label,{children:"Email address"}),Object(x.jsx)(l.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){return h(e.target.value)},required:!0}),Object(x.jsx)(l.a.Text,{className:"text-muted",children:"please enter your email address"})]}),Object(x.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(x.jsx)(l.a.Label,{children:"Password"}),Object(x.jsx)(l.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return y(e.target.value)},required:!0})]}),Object(x.jsx)(l.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(x.jsx)(l.a.Check,{type:"checkbox",label:"save account number"})}),Object(x.jsx)(j.a,{variant:"primary",type:"submit",children:"Login"})]}),Object(x.jsx)(b.a,{children:Object(x.jsxs)(u.a,{children:["Login with Email(show in console): ",d,a]},"info")})]})},C=c(75),v=c(74),w=c(77),S=function(){return Object(x.jsx)(C.a,{variant:"pills",defaultActiveKey:"/",bg:"dark",children:Object(x.jsxs)(v.a,{children:[Object(x.jsx)(w.a.Item,{children:Object(x.jsx)(w.a.Link,{href:"#/",children:"Home"})}),Object(x.jsx)(C.a.Toggle,{}),Object(x.jsxs)(C.a.Collapse,{className:"justify-content-end",children:[Object(x.jsx)(w.a.Item,{children:Object(x.jsx)(w.a.Link,{href:"#login",children:"Login"})}),Object(x.jsx)(w.a.Item,{children:Object(x.jsx)(w.a.Link,{href:"#sign",children:"Signup"})})]})]})})},N=c(47);var L=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(void 0),r=Object(o.a)(s,2),i=(r[0],r[1]),l=Object(n.useState)(0),j=Object(o.a)(l,2);return j[0],j[1],localStorage.setItem("customer",void 0),Object(x.jsx)(N.a,{children:Object(x.jsxs)(v.a,{children:[Object(x.jsx)(b.a,{children:Object(x.jsx)(h.a,{children:Object(x.jsx)(S,{customerAuthenticated:c})})}),Object(x.jsxs)(g.d,{children:[Object(x.jsx)(g.b,{path:"/sign",children:Object(x.jsx)(f,{})}),Object(x.jsx)(g.b,{path:"/login",children:Object(x.jsx)(y,{onAuthenticated:function(){a(!0)}})}),Object(x.jsx)(g.b,{path:"/",children:Object(x.jsx)(m,{getIndex:function(e){i(e)}})})]})]})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,78)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(L,{})}),document.getElementById("root")),k()}},[[68,1,2]]]);
//# sourceMappingURL=main.284d15c9.chunk.js.map