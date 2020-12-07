(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{114:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n(0),i=n.n(s),c=n(11),o=n.n(c),r=(n(90),n(91),n(9)),l=n(13),d=n(147),u=n(24),j=n.n(u),h=n(74),g=n(150),m=n(148),b=n(152),p=n(146),f=n(144),x=n(145),O=n(143);function v(e){var t=function(){e.toggle(),e.setUsername(""),e.setPassword("")};return Object(a.jsx)("div",{className:"LoginDialog",children:Object(a.jsxs)(b.a,{open:e.open,onClose:t,children:[Object(a.jsx)(O.a,{id:"form-dialog-title",children:"Login"}),Object(a.jsxs)(f.a,{children:[Object(a.jsx)(x.a,{children:"Enter Username and Password to Login"}),Object(a.jsx)(m.a,{autoFocus:!0,margin:"dense",id:"username",label:"Username",type:"text",fullWidth:!0,value:e.username,onChange:function(t){return e.setUsername(t.target.value)}}),Object(a.jsx)(m.a,{margin:"dense",id:"password",label:"Password",type:"password",fullWidth:!0,value:e.password,onChange:function(t){return e.setPassword(t.target.value)}})]}),Object(a.jsxs)(p.a,{children:[Object(a.jsx)(g.a,{onClick:t,color:"primary",children:"Cancel"}),Object(a.jsx)(g.a,{onClick:function(){e.login(),window.location.reload(),e.getUser(),t()},color:"secondary",children:"Save"}),Object(a.jsx)(g.a,{onClick:function(){t(),e.signUp()},variant:"contained",children:"Sign Up"})]})]})})}function w(e){var t=function(){e.toggle(),e.setUsername(""),e.setPassword("")};return Object(a.jsx)("div",{children:Object(a.jsxs)(b.a,{open:e.open,onClose:t,children:[Object(a.jsx)(O.a,{id:"form-dialog-title",children:"Sign Up"}),Object(a.jsxs)(f.a,{children:[Object(a.jsx)(x.a,{children:"To Sign up for the site please enter your details!"}),Object(a.jsx)(m.a,{autoFocus:!0,margin:"dense",id:"username",label:"Username",type:"text",fullWidth:!0,value:e.username,onChange:function(t){return e.setUsername(t.target.value)}}),Object(a.jsx)(m.a,{margin:"dense",id:"password",label:"Password",type:"password",fullWidth:!0,value:e.password,onChange:function(t){return e.setPassword(t.target.value)}})]}),Object(a.jsxs)(p.a,{children:[Object(a.jsx)(g.a,{onClick:t,color:"primary",children:"Cancel"}),Object(a.jsx)(g.a,{onClick:function(){e.register(),t()},color:"primary",children:"Subscribe"})]})]})})}var C=Object(d.a)((function(e){return{header:{display:"flex",height:60},title:{marginLeft:450,marginTop:5,fontFamily:"Josefin Sans",cursor:"pointer"},login:{fontSize:20,marginLeft:"auto",marginTop:10,marginRight:30,cursor:"pointer",border:"1px solid grey",borderRadius:5,height:40,display:"flex",justifyContent:"center",alignItems:"center"},logout:{fontSize:20,marginLeft:280,marginRight:10,marginTop:20,cursor:"pointer"}}}));function N(e){console.log(e);var t=i.a.useState(!1),n=Object(l.a)(t,2),s=n[0],c=n[1],o=i.a.useState(!1),d=Object(l.a)(o,2),u=d[0],g=d[1],m=i.a.useState(""),b=Object(l.a)(m,2),p=b[0],f=b[1],x=i.a.useState(""),O=Object(l.a)(x,2),N=O[0],y=O[1],S=i.a.useState(""),U=Object(l.a)(S,2),L=U[0],k=U[1],D=i.a.useState(""),T=Object(l.a)(D,2),B=T[0],P=T[1],E=C(),R=Object(r.g)(),F=function(){c(!s)},W=function(){g(!u)};return Object(a.jsxs)("div",{className:E.header,children:[Object(a.jsx)(h.a,{variant:"h3",className:E.title,onClick:function(){R.push("/")},children:"Klenty Assignment"}),Object(a.jsx)("span",{id:"logout",className:E.logout,onClick:function(){e.logout(),"http://localhost:3000/"!==window.location.href&&R.push("/")},children:"Logout"}),Object(a.jsx)("span",{id:"profile",className:E.login,onClick:F,children:e.userdata}),s?Object(a.jsx)(v,{open:s,toggle:F,username:L,setUsername:function(e){k(e)},password:B,setPassword:function(e){P(e)},login:function(){j()({method:"POST",data:{username:L,password:B},withCredentials:!0,url:"http://localhost:5000/api/v1/login"}).then((function(e){return console.log(e)})).then(e.getUser()).catch((function(e){return console.log(e)}))},handleUserData:e.handleUser,signUp:W,getUser:e.getUser}):null,u?Object(a.jsx)(w,{open:u,username:p,setUsername:function(e){f(e)},password:N,setPassword:function(e){y(e)},toggle:W,register:function(){j()({method:"POST",data:{username:p,password:N},withCredentials:!0,url:"http://localhost:5000/api/v1/register"}).then((function(e){return console.log(e)}))}}):null]})}function y(e){var t=i.a.useState(""),n=Object(l.a)(t,2),s=n[0],c=n[1],o=i.a.useState(""),r=Object(l.a)(o,2),d=r[0],u=r[1],j=e.username,h=function(){e.openDialogue()};return Object(a.jsx)("div",{children:Object(a.jsxs)(b.a,{open:e.open,onClose:h,children:[Object(a.jsx)(O.a,{id:"form-dialog-title",children:"Create a Form"}),Object(a.jsxs)(f.a,{children:[Object(a.jsx)(x.a,{children:"Now that you're logged in you can add as many posts as you want!"}),Object(a.jsx)(m.a,{autoFocus:!0,margin:"dense",id:"title",label:"Title",type:"text",fullWidth:!0,value:s,onChange:function(e){return c(e.target.value)}}),Object(a.jsx)(m.a,{margin:"dense",id:"description",label:"Description",type:"text",multiline:!0,rows:4,variant:"filled",fullWidth:!0,value:d,onChange:function(e){return u(e.target.value)}})]}),Object(a.jsxs)(p.a,{children:[Object(a.jsx)(g.a,{onClick:h,color:"primary",children:"Cancel"}),Object(a.jsx)(g.a,{onClick:function(){return function(t,n,a){e.saveData(t,n,a),h()}(s,d,j)},color:"primary",children:"Subscribe"})]})]})})}var S=Object(d.a)((function(e){return{addButton:{marginLeft:"auto",marginRight:10,height:35}}}));function U(e){var t=S(),n=i.a.useState(!1),s=Object(l.a)(n,2),c=s[0],o=s[1],r=function(){o(!c)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"addButtonDiv",children:Object(a.jsx)(g.a,{size:"small",className:t.addButton,variant:"contained",onClick:function(){return r()},disabled:"Login"===e.user,children:"Add Post"})}),c?Object(a.jsx)(y,{username:e.user,openDialogue:r,open:c,saveData:e.saveData}):null]})}var L=n(140),k=n(149),D=Object(d.a)((function(e){return{margin:{margin:e.spacing(1.5),height:50},card:{height:150,width:"75%",margin:15,marginLeft:"auto",marginRight:"auto"},titleBox:{height:50},title:{display:"flex",marginRight:"auto",marginLeft:15,marginTop:10},header:{display:"flex",flexDirection:"row"},user:{marginLeft:"auto",marginRight:20,marginTop:10}}}));function T(e){var t=D(),n=Object(r.g)(),s=e.data,i=s.title,c=s.username,o=s.description,l=e.data._id,d=e.currentUser;console.log(e);return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(L.a,{elevation:3,m:5,className:t.card,children:Object(a.jsxs)(k.a,{onClick:function(){return function(e,t,a,s,i,o,r,l){n.push({pathname:"/post/".concat(s,"/"),search:"?title=".concat(t),state:{id:e,title:t,description:a,username:c},saveData:i,getUser:r,logout:l,currentUser:o})}(l,i,o,e.index,e.saveData,d,e.getUser,e.logout)},children:[Object(a.jsx)("div",{className:t.titleBox,children:Object(a.jsxs)(k.a,{className:t.header,children:[Object(a.jsx)(h.a,{variant:"h4",className:t.title,children:i}),Object(a.jsx)(h.a,{variant:"h4",className:t.user,children:c})]})}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"cardBody",children:[Object(a.jsx)(h.a,{variant:"h5",className:t.title,children:"".concat(o.substring(0,30),"...")}),Object(a.jsx)(g.a,{children:"Read More"})]})]})})})}var B="http://localhost:5000/api/v1/",P=Object(d.a)((function(e){return{home:{display:"flex",flexDirection:"column",justifyContent:"center",flexWrap:"wrap"}}}));function E(){Object(r.g)();var e=P(),t=i.a.useState([]),n=Object(l.a)(t,2),s=n[0],c=n[1],o=i.a.useState("Login"),d=Object(l.a)(o,2),u=d[0],h=d[1],g=function(e){h(e)},m=function(){fetch(B+"posts",{method:"get"}).then((function(e){return e.json()})).then((function(e){c(e)}))};i.a.useEffect((function(){m()}),[]);var b=function(e,t,n){j.a.post(B+"posts/",{title:e,description:t,username:n}).then((function(){m(),console.log("post sent")})).catch((function(e){return console.log(e)}))},p=function(){j()({method:"GET",withCredentials:!0,url:"http://localhost:5000/api/v1/user"}).then((function(e){if("No User Exists"===e.data||""===e.data)return g("Login"),void console.log(e.data);g(e.data),console.log("hi",e.data)}))};i.a.useEffect((function(){p()}),[]);var f=function(){h("Login"),j()({method:"GET",withCredentials:!0,url:"http://localhost:5000/api/v1/logout"}).then((function(e,t){console.log(t),h("Login")}))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(N,{handleUser:g,userdata:u,logout:f,getUser:p}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"appBody",children:[Object(a.jsx)(U,{saveData:b,user:u}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:e.home,children:0===s.length?Object(a.jsx)("div",{className:"center",children:"No Posts Added!"}):s.map((function(e,t){return Object(a.jsx)(T,{data:e,index:t,saveData:b,getUser:p,logout:f,currentUser:u},"".concat(e.title).concat(t))}))})]})]})}var R=Object(d.a)((function(){return{comment:{height:"auto",marginTop:20,backgroundColor:"white",paddingBlockEnd:20},logo:{height:50,width:50},header:{display:"flex"},img:{margin:10,backgroundColor:"wheat",borderRadius:2},userName:{fontSize:30,marginTop:20,marginLeft:20},body:{textAlign:"left",marginLeft:10,marginTop:10,height:"auto"},timeStamp:{fontSize:20,marginTop:30,marginLeft:150}}}));function F(e){var t=R(),n=e.data,s=n.username,i=n.description,c=n.timeStamp;return Object(a.jsxs)("div",{className:t.comment,children:[Object(a.jsxs)("div",{className:t.header,children:[Object(a.jsx)("span",{className:t.img,children:Object(a.jsx)("img",{src:"logo",alt:"logo",className:t.logo})}),Object(a.jsx)("span",{className:t.userName,children:s}),Object(a.jsx)("span",{className:t.timeStamp,children:"posted at ".concat(c)})]}),Object(a.jsx)("div",{className:t.body,children:i})]})}var W="http://localhost:5000/api/v1/",z=Object(d.a)((function(){return{singleItem:{marginLeft:50,marginRight:50},header:{display:"flex",justifyContent:"space-between"},body:{display:"flex",flexDirection:"row"},image:{height:300,width:300,border:"2px solid black"},description:{width:"60%",fontFamily:"monospace",marginLeft:20,fontSize:20},commentSection:{marginTop:20,paddingLeft:50,paddingRight:50,paddingBlockEnd:20},newComment:{height:200,marginTop:20,marginBlockEnd:20},subtitle:{display:"flex",paddingLeft:25},textBox:{padding:10}}}));function A(e){var t=z(),n=Object(r.g)(),s=e.location.state,c=s.title,o=s.description,d=s.id;s.username;console.log("----"),console.log(e);var u=e.location.currentUser,m=i.a.useState(e.userdata),b=Object(l.a)(m,2),p=(b[0],b[1]),f=i.a.useState([]),x=Object(l.a)(f,2),O=x[0],v=x[1],w=i.a.useState(""),C=Object(l.a)(w,2),y=C[0],S=C[1],U=function(){fetch(W+"getComments/"+d,{method:"get"}).then((function(e){return e.json()})).then((function(e){v(e)}))};i.a.useEffect((function(){U()}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(N,{handleUser:function(e){p(e)},userdata:e.location.currentUser,logout:e.location.logout,getUser:e.location.getUser}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:t.singleItem,children:[Object(a.jsxs)("div",{className:t.header,children:[Object(a.jsx)(h.a,{variant:"h4",children:c}),Object(a.jsx)(g.a,{variant:"contained",onClick:function(){n.push("/")},children:"Back"})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:t.body,children:[Object(a.jsx)("div",{className:t.image,children:Object(a.jsx)("img",{src:"#",alt:"IMAGES",className:t.image})}),Object(a.jsxs)("div",{className:t.description,children:[Object(a.jsx)("div",{className:t.subtitle,children:Object(a.jsx)(h.a,{variant:"h5",children:"Description"})}),o]})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:t.commentSection,children:[0===O.length?Object(a.jsx)("div",{children:Object(a.jsx)("h4",{children:"No Comments"})}):O.map((function(e){return Object(a.jsx)(F,{data:e},Object.values(e))})),Object(a.jsx)("div",{className:t.newComment,children:Object(a.jsx)("textarea",{name:"newComment",id:"",cols:"70",rows:"13",value:y,onChange:function(e){return S(e.target.value)},placeholder:"Enter a comment",className:t.textBox})}),Object(a.jsx)(g.a,{variant:"contained",onClick:function(){return function(e,t,n,a){console.log(a),j.a.post(W+"postComment/",{postId:t,name:e,commentData:n,userName:a}).then((function(){U(),S("")}))}(c,d,y,u)},disabled:"Login"===u,children:"Post Comment"})]})]})]})}var I=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(r.d,{children:[Object(a.jsx)(r.b,{path:"/post",component:A}),Object(a.jsx)(r.b,{path:"/",component:E}),Object(a.jsx)(r.a,{to:E})]})})},G=n(33);o.a.render(Object(a.jsx)(G.a,{children:Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(I,{})})}),document.getElementById("root"))},90:function(e,t,n){},91:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.2365b2db.chunk.js.map