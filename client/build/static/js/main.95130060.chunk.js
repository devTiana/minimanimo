(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{49:function(e,n,t){},50:function(e,n,t){},87:function(e,n,t){"use strict";t.r(n);var a,i=t(1),c=t.n(i),o=t(23),r=t.n(o),s=(t(49),t(4)),l=(t(50),t(6)),d=t(8),b=t(14),j=t(2),p=t(3),h=t.p+"static/media/Symbol.75c16968.svg",m=t(0),g=p.a.header(a||(a=Object(j.a)(["\n  height: 10vh;\n  padding: 0 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  > .profile {\n    height: 4vh;\n    line-height: 4vh;\n    margin-right: 18vw;\n  }\n  img {\n    height: 8vh;\n  }\n  .test {\n    margin-left: 18vw;\n  }\n  .userinfo {\n    font-size: 1.2rem;\n    font-weight: bold;\n    position: relative;\n  }\n  .profile_img {\n    margin-right: 1rem;\n    height: 5vh;\n    border: 1px solid #eee;\n    border-radius: 50%;\n  }\n\n  ul {\n    width: 100%;\n    padding-top: 6vh;\n    font-size: 1rem;\n    font-weight: normal;\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n\n  li {\n    text-align: center;\n    line-height: 2;\n    background: rgba(255, 255, 255, 0.8);\n    border: 1px solid #eee;\n    cursor: pointer;\n  }\n  li:first-child {\n    border-bottom: none;\n  }\n  li:hover {\n    background: #eee;\n  }\n"])));function u(e){var n=e.isLogedIn,t=e.isLogedInhandler,a=Object(d.f)(),c=Object(i.useState)(!1),o=Object(s.a)(c,2),r=o[0],b=o[1];return Object(m.jsxs)(g,{className:"header",children:[Object(m.jsx)("div",{children:Object(m.jsx)(l.b,{to:"/",className:"logo test",children:Object(m.jsx)("img",{src:h,alt:"Symbol"})})}),Object(m.jsx)("div",{className:"profile",onMouseLeave:function(){b(!1)},show:r?1:0,onMouseEnter:function(){b(!r)},children:Object(m.jsxs)("div",{className:"userinfo",children:[n?Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{className:"profile_img",src:JSON.parse(localStorage.getItem("userInfo")).image,alt:"\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0"}),JSON.parse(localStorage.getItem("userInfo")).nickname]}):Object(m.jsx)(l.b,{to:"/signin",children:"Sign in"}),n&&r?Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(l.b,{to:"/mypage",children:"MyPage"})}),Object(m.jsx)("li",{children:Object(m.jsx)(l.b,{to:"/",onClick:function(){localStorage.removeItem("userInfo"),t(),a.replace("/"),alert("\ub85c\uadf8\uc544\uc6c3\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")},children:"LogOut"})})]}):null]})})]})}var f,O,x,v,_,w,k=t(7),I=t.n(k),y=p.a.div(f||(f=Object(j.a)(["\n  height: 20vh;\n  margin: 2rem 2rem 0;\n  padding: 1.5rem;\n  text-align: left;\n  align-items: center;\n  background: #fff;\n  border-radius: 0.4rem;\n  box-shadow: 0 0 0.4rem 0.2rem #eee;\n  display: flex;\n  flex-direction : row;\n  width: 60vw;\n  \n  img {\n    width: 6.2rem;\n    height: 6.2rem;\n    border: 1px solid #eee;\n    border-radius: 50%;\n  }\n\n  textarea {\n    margin-top: 1rem;;\n    height: 12vh;\n    resize: none;\n    line-height: 1.2;\n    border: 1px solid #e6e6e6;\n    width: 45vw;\n    /* flex: 7 0 0; */\n  }\n  \n  textarea:focus {\n    outline: 1px solid #EDC51E;\n  }\n  textarea::placeholder {\n    color :  #cccccc;\n    font-style: italic;\n  }\n"]))),C=p.a.div(O||(O=Object(j.a)(["\n  margin : 0 1rem 0 1rem;\n  flex: 1.5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),S=p.a.div(x||(x=Object(j.a)(["\n  height: 100%;\n  margin: 0rem;\n  font-weight: bold;\n  /* flex: 1 0 0; */\n  text-align: center;\n  margin-top: 0.5rem;\n"]))),z=p.a.button(v||(v=Object(j.a)(["\n  height: 3vh;\n  width: 4vw;\n  /* margin-left: 1rem; */\n  padding: 0.2rem;\n  font-weight: bold;\n  color: #fff;\n  background: #387099;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  /* flex: 2 0 0; */\n\n  &:hover {\n    background: #EDC51E;\n  }\n  &:disabled {\n    background: #aaa;\n  }\n"]))),E=p.a.div(_||(_=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  /* align-items: row; */\n  /* align-items: flex-end; */\n  flex : 8.5;\n  "]))),L=p.a.div(w||(w=Object(j.a)(["\n  display:flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin-left: 1.5rem;\n  margin-right: 3rem;\n  margin-top: 0.5rem;\n"])));function A(e){var n=e.isLogedIn,t=e.setBoardListData,a=Object(i.useState)(""),c=Object(s.a)(a,2),o=c[0],r=c[1],d=JSON.parse(localStorage.getItem("userInfo")),j={headers:{Authorization:n?"Bearer ".concat(d.token):void 0,"Content-Type":"application/json"}},p={headers:{"Content-Type":"application/json"}},h=function(){""!==o&&I.a.post("http://ec2-3-37-98-188.ap-northeast-2.compute.amazonaws.com/api/posts/new",{content:o},j).then((function(e){console.log("\uc798\ub418\uc5c8\uc5b4\uc694"),r(""),I.a.get("http://ec2-3-37-98-188.ap-northeast-2.compute.amazonaws.com/api/posts",p).then((function(e){t(Object(b.a)(e.data))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))};return Object(m.jsxs)(y,{children:[Object(m.jsxs)(C,{children:[Object(m.jsx)("img",{src:n?JSON.parse(localStorage.getItem("userInfo")).image:"/images/users/".concat(Math.floor(8*Math.random())+1,".jpeg"),alt:"\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0"}),Object(m.jsx)(S,{children:n?JSON.parse(localStorage.getItem("userInfo")).nickname:Object(m.jsx)(l.b,{to:"/signin",children:"\ub85c\uadf8\uc778\uc744 \ud574\uc8fc\uc138\uc694"})})]}),Object(m.jsx)(E,{children:n?Object(m.jsxs)(L,{children:[Object(m.jsx)("textarea",{type:"text",value:o,onChange:function(e){r(e.target.value)},maxLength:255}),Object(m.jsx)(z,{disabled:!n,onClick:h,children:"Submit"})]}):Object(m.jsxs)(L,{children:[Object(m.jsx)("textarea",{type:"text",value:"",disabled:!0,placeholder:"\ub85c\uadf8\uc778 \ud6c4 \uc791\uc131 \uac00\ub2a5\ud569\ub2c8\ub2e4."}),Object(m.jsx)(z,{disabled:!n,onClick:h,children:"Submit"})]})})]})}var D,N,F,T,J,U,B,Z,$=t(5),M=t(12),R=p.a.div(D||(D=Object(j.a)(["\n  height: 16vh;\n  margin: 2rem 2rem 0;\n  padding: 1.5rem;\n  text-align: left;\n  align-items: center;\n  background: #fff;\n  border-radius: 0.4rem;\n  box-shadow: 0 0 0.4rem 0.2rem #eee;\n  display: flex;\n  flex-direction : row;\n  position: relative;\n  width: 60vw;\n\n  &.delete {\n    display: none;\n  }\n  \n  img {\n    width: 5rem;\n    height: 5rem;\n    border: 1px solid #eee;\n    border-radius: 50%;\n  }\n\n  textarea {\n    height: 10vh;\n    resize: none;\n    margin-left: 1rem;\n    padding: 0;\n    border: 1px solid #EDC51E;\n  }\n  \n  textarea:focus {\n    outline: 1px solid #EDC51E;\n  }\n\n  button {\n    font-size: 1.2rem;\n    color: #387099;\n    margin-left: 0.5rem;\n    background: none;\n  }\n  button:hover {\n    color: #EDC51E;\n  }\n"]))),P=p.a.div(N||(N=Object(j.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),V=p.a.div(F||(F=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 7;\n  overflow: auto;\n  word-wrap: break-word;\n  "]))),H=p.a.div(T||(T=Object(j.a)(["\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n"]))),q=p.a.div(J||(J=Object(j.a)(["\n  height: 100%;\n  margin: 0 1rem;\n  font-weight: bold;\n  flex: 1 0 0;\n"]))),K=p.a.div(U||(U=Object(j.a)(["\n  height: 10vh;\n  margin-left: 1rem;\n  width: 46vw;\n"]))),W=p.a.div(B||(B=Object(j.a)(["\n  font-size: 0.8rem;\n  letter-spacing: 0.05rem;\n  color: #CBCBCB;\n  position: absolute;\n  bottom: 1rem;\n  right: 1rem;\n"])));function Y(e){var n=e.isLogedIn,t=e.board,a=Object(i.useState)(t.updatedAt),c=Object(s.a)(a,2),o=c[0],r=c[1],l=Object(i.useState)(!1),d=Object(s.a)(l,2),b=d[0],j=d[1],p=Object(i.useState)(t.content),h=Object(s.a)(p,2),g=h[0],u=h[1],f=Object(i.useState)(!0),O=Object(s.a)(f,2),x=O[0],v=O[1],_=o.split("-"),w=Object(s.a)(_,3),k=w[0],y=w[1],C=w[2],S=C.split("T")[1].split(":")[0],z=C.split("T")[1].split(":")[1],E=t.createdAt.split("-"),L=Object(s.a)(E,3),A=L[0],D=L[1],N=L[2],F=N.split("T")[1].split(":")[0],T=N.split("T")[1].split(":")[1],J=JSON.parse(localStorage.getItem("userInfo")),U={headers:{Authorization:n?"Bearer ".concat(J.token):void 0,"Content-Type":"application/json"}};return Object(m.jsxs)(R,{className:x?"":"delete",children:[Object(m.jsxs)(P,{children:[Object(m.jsx)("img",{src:t.user.image,alt:"\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0"}),Object(m.jsx)(q,{children:t.user.nickname})]}),Object(m.jsx)(V,{children:b?Object(m.jsx)("textarea",{type:"text",value:g,onChange:function(e){u(e.target.value)},maxLength:255}):Object(m.jsx)(K,{children:g})}),n&&t.user._id===JSON.parse(localStorage.getItem("userInfo"))._id?Object(m.jsxs)(H,{children:[b?Object(m.jsx)("button",{onClick:function(){I.a.put("http://ec2-3-37-98-188.ap-northeast-2.compute.amazonaws.com/api/posts/edit",{_id:t._id,content:g,updatedAt:function(e){var n=e.getMonth()+1,t=e.getDate(),a=e.getHours(),i=e.getMinutes(),c=e.getSeconds();return n=n>=10?n:"0"+n,t=t>=10?t:"0"+t,a=a>=10?a:"0"+a,i=i>=10?i:"0"+i,c=c>=10?c:"0"+c,e.getFullYear()+"-"+n+"-"+t+"T"+a+":"+i+":"+c+".777Z"}(new Date)},U).then((function(e){j(!b),r(e.data.updatedAt)})).catch((function(e){console.log(e)}))},children:Object(m.jsx)(M.b,{})}):Object(m.jsx)("button",{onClick:function(){j(!b)},children:Object(m.jsx)(M.c,{size:"22"})}),Object(m.jsx)("button",{onClick:function(){I.a.delete("http://ec2-3-37-98-188.ap-northeast-2.compute.amazonaws.com/api/posts/delete",Object($.a)(Object($.a)({},U),{},{data:{_id:t._id}})).then((function(e){v(!1)})).catch((function(e){console.log(e)}))},children:Object(m.jsx)(M.e,{})})]}):null,b?null:Object(m.jsx)(W,{children:t.createdAt===o?"\uc791\uc131\uc77c: ".concat(A,"/").concat(D,"/").concat(N.split("T")[0]," ").concat(F,":").concat(T):"\uc218\uc815\uc77c: ".concat(k,"/").concat(y,"/").concat(C.split("T")[0]," ").concat(S,":").concat(z)})]})}var G,Q=p.a.div(Z||(Z=Object(j.a)(["\n  margin-top: 2rem;\n  background: #fff;\n  border-top: 1px solid #eee;\n  display: flex;\n  flex-direction: column-reverse;\n  /* border-bottom: 1px solid #eee; */\n\n  .list_none {\n    line-height: 80vh;\n    display: block;\n  }\n"])));function X(e){var n=e.isLogedIn,t=e.boardListData;return Object(m.jsx)(Q,{children:t.length?t.map((function(e){return Object(m.jsx)(Y,{isLogedIn:n,board:e},e._id)})):Object(m.jsx)(l.b,{to:"/",className:"list_none",children:Object(m.jsx)("div",{children:"\uac8c\uc2dc\uae00\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."})})})}var ee,ne,te,ae,ie,ce,oe,re,se,le,de,be,je=p.a.div(G||(G=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),pe=function(e){var n=e.isLogedIn,t=e.isLogedInhandler,a=Object(i.useState)([]),c=Object(s.a)(a,2),o=c[0],r=c[1];return Object(i.useEffect)((function(){I.a.get("http://ec2-3-37-98-188.ap-northeast-2.compute.amazonaws.com/api/posts",{headers:{"Content-Type":"application/json"}}).then((function(e){r(Object(b.a)(e.data))})).catch((function(e){console.log(e)}))}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u,{isLogedIn:n,isLogedInhandler:t}),Object(m.jsxs)(je,{children:[Object(m.jsx)(A,{isLogedIn:n,setBoardListData:r}),Object(m.jsx)(X,{isLogedIn:n,boardListData:o})]})]})},he=t(27),me=t.n(he),ge=p.a.div(ee||(ee=Object(j.a)(["\n  >img {\n    width: 30vh;\n    height: 30vh;\n    border-radius: 50%;\n    border: 1px solid #eee;\n  }\n  >div {\n    margin-top: 0.2rem;\n    font-size: 1.4rem;\n    font-weight: bold;\n  }\n  >button {\n    margin: 0.5rem;\n    padding: 0.4rem 1rem;\n    color: #fff;\n    font-weight: bold;\n    background: #387099;\n    box-sizing: border-box;\n  }\n  >button:hover {\n    background: #EDC51E;\n  }\n"]))),ue=p.a.div(ne||(ne=Object(j.a)(["\n  height: 100%;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),fe=p.a.div(te||(te=Object(j.a)(["\n  flex: 1 0 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  input {\n    padding: 0.2rem 0.5rem;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n  }\n  input:focus {\n    border: 1px solid #EDC51E;\n    outline: 1px solid #EDC51E;\n  }\n  >img {\n    width: 10vh;\n    height: 10vh;\n    margin-bottom: 1rem;\n    border-radius: 50%;\n    border: 3px solid #387099;\n  }\n\n  span {\n    margin-bottom: 0.4rem;\n    font-size: 0.9rem;\n    color: tomato;\n    /* margin-top: 0.4rem; */\n  }\n"]))),Oe=p.a.div(ae||(ae=Object(j.a)(["\n  overflow: auto;\n  margin-bottom: 1.5rem;\n\n  img:hover {\n    border: 2px solid #EDC51E;\n  }\n\n"]))),xe=p.a.img(ie||(ie=Object(j.a)(["\n  width: 5rem;\n  height: 5rem;\n  margin: 0.5rem;\n  border-radius: 50%;\n  border:  2px solid #eee;\n"]))),ve=p.a.div(ce||(ce=Object(j.a)(["\n  font-size: 1.5rem;\n  position: absolute;\n  top: 0.3rem;\n  right: 1rem;\n  cursor: pointer;\n  \n  &:hover {\n    color: #EDC51E;\n  }\n"]))),_e=p.a.div(oe||(oe=Object(j.a)(["\n  display: flex;\n"]))),we=p.a.button(re||(re=Object(j.a)(["\n  flex: 1 0 0;\n  margin-left: 1rem;\n  padding: 0.4rem 0;\n  color: #ffffff;\n  font-weight: bold;\n  letter-spacing: 0.2rem;\n  background: #387099;\n  border: 0.2rem solid #387099;\n\n  &:hover {\n    color: #EDC51E;\n    background: #fff;\n    border: 0.2rem solid #EDC51E;\n  }\n  &:active {\n    color: red;\n    background: #fff;\n    border: 0.2rem solid red;\n  }\n"]))),ke=p.a.button(se||(se=Object(j.a)(["\n  flex: 1 0 0;\n  padding: 0.2rem 0;\n  color: #ffffff;\n  font-weight: bold;\n  letter-spacing: 0.2rem;\n  background: #888;\n  border: 0.2rem solid #888;\n\n  &:hover {\n    color: #888;\n    background: #fff;\n    border: 0.2rem solid #888;\n  }\n"]))),Ie=p.a.div(le||(le=Object(j.a)(["\n  visibility: ",";\n  "])),(function(e){return e.visibility?"hidden":"visible"})),ye=p.a.div(de||(de=Object(j.a)(["\n  visibility: ",";\n"])),(function(e){return e.visibility?"visible":"hidden"}));function Ce(e){var n=e.isLogedInhandler,t=JSON.parse(localStorage.getItem("userInfo")),a=Object(i.useState)(!1),c=Object(s.a)(a,2),o=c[0],r=c[1],l=Object(i.useState)(!1),d=Object(s.a)(l,2),b=d[0],j=d[1],p=Object(i.useState)(""),h=Object(s.a)(p,2),g=h[0],u=h[1],f=Object(i.useState)(!1),O=Object(s.a)(f,2),x=O[0],v=O[1],_=Object(i.useState)(!1),w=Object(s.a)(_,2),k=w[0],y=w[1],C=Object(i.useState)(t.image.split("/")[3].split(".")[0]),S=Object(s.a)(C,2),z=S[0],E=S[1],L=function(){r(!o)},A=function(){j(!b)},D=function(e){E(e.target.dataset.name)};return Object(m.jsxs)(ge,{children:[Object(m.jsx)("img",{src:JSON.parse(localStorage.getItem("userInfo")).image,alt:"\uc720\uc800\uc774\ubbf8\uc9c0"}),Object(m.jsx)("div",{children:JSON.parse(localStorage.getItem("userInfo")).nickname}),b?Object(m.jsxs)(me.a,{isOpen:b,onRequestClose:A,ariaHideApp:!1,contentLabel:"Selected Option",style:{overlay:{position:"fixed",top:0,left:0,backgroundColor:"rgba(255, 255, 255, 0.5)",display:"flex",justifyContent:"center",alignItems:"center"},content:{width:"50vw",height:"50vh",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"0",position:"relative",inset:"0"}},children:[Object(m.jsx)(ve,{onClick:A,children:Object(m.jsx)(M.d,{})}),Object(m.jsxs)(ue,{children:[Object(m.jsxs)(fe,{children:[Object(m.jsx)(Oe,{children:Array(8).fill().map((function(e,n){return n+1})).map((function(e){return Object(m.jsx)(xe,{src:"/images/users/".concat(e,".jpeg"),alt:"\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0","data-name":e,onClick:D},e)}))}),Object(m.jsx)("img",{src:"/images/users/".concat(z,".jpeg"),alt:"\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0"}),Object(m.jsx)("input",{type:"nickname",placeholder:"Edit New Nickname",value:g,onChange:function(e){u(e.target.value);/^([a-zA-Z0-9\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]).{1,10}$/.test(e.target.value)?I.a.post("http://ec2-3-37-98-188.ap-northeast-2.compute.amazonaws.com/api/validate/nickname",{nickname:e.target.value},{headers:{"Content-Type":"application/json"}}).then((function(e){y(!1),v(!0)})).catch((function(e){y(!0)})):v(!1)}}),Object(m.jsx)(Ie,{visibility:""===g||x?1:0,children:Object(m.jsx)("span",{children:"\ub2c9\ub124\uc784\uc740 \uacf5\ubc31\uc81c\uc678 2\uae00\uc790 \uc774\uc0c1 10\uae00\uc790 \uc774\ud558\uc5ec\uc57c \ud569\ub2c8\ub2e4."})}),Object(m.jsx)(ye,{visibility:k?1:0,children:Object(m.jsx)("span",{children:"\uc911\ubcf5\ub41c \ub2c9\ub124\uc784\uc785\ub2c8\ub2e4."})})]}),Object(m.jsxs)(_e,{children:[Object(m.jsx)(ke,{onClick:A,children:"Cancle"}),Object(m.jsx)(we,{onClick:function(){""!==g||k||z===t.image.split("/")[3].split(".")[0]?""!==g&&!k&&x&&I.a.put("http://ec2-3-37-98-188.ap-northeast-2.compute.amazonaws.com/api/users/profile",{image:"/images/users/".concat(z,".jpeg"),nickname:g},{headers:{Authorization:"Bearer ".concat(t.token),"Content-Type":"application/json"}}).then((function(e){j(!1),localStorage.setItem("userInfo",JSON.stringify(Object($.a)(Object($.a)({},t),{},{image:e.data.image,nickname:e.data.nickname}))),window.location.reload()})):I.a.put("http://ec2-3-37-98-188.ap-northeast-2.compute.amazonaws.com/api/users/profile",{image:"/images/users/".concat(z,".jpeg"),nickname:t.nickname},{headers:{Authorization:"Bearer ".concat(t.token),"Content-Type":"application/json"}}).then((function(e){j(!1),localStorage.setItem("userInfo",JSON.stringify(Object($.a)(Object($.a)({},t),{},{image:e.data.image}))),window.location.reload()})).catch((function(e){}))},children:"OK"})]})]})]}):Object(m.jsx)("button",{onClick:A,children:"\uc815\ubcf4\uc218\uc815"}),o?Object(m.jsxs)(me.a,{isOpen:o,onRequestClose:L,ariaHideApp:!1,contentLabel:"Selected Option",style:{overlay:{position:"fixed",top:0,left:0,backgroundColor:"rgba(255, 255, 255, 0.5)",display:"flex",justifyContent:"center",alignItems:"center"},content:{width:"40vw",height:"30vh",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"0",position:"relative",inset:"0"}},children:[Object(m.jsx)(ve,{onClick:L,children:Object(m.jsx)(M.d,{})}),Object(m.jsxs)(ue,{children:[Object(m.jsx)(fe,{children:Object(m.jsxs)("span",{children:["\ud0c8\ud1f4 \uc2dc \uac8c\uc2dc\uae00\ub3c4 \ubaa8\ub450 \uc0ad\uc81c\ub429\ub2c8\ub2e4.",Object(m.jsx)("br",{}),"\ud0c8\ud1f4\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"]})}),Object(m.jsxs)(_e,{children:[Object(m.jsx)(ke,{onClick:L,children:"Cancel"}),Object(m.jsx)(we,{onClick:function(){I.a.delete("http://ec2-3-37-98-188.ap-northeast-2.compute.amazonaws.com/api/users/profile",{headers:{Authorization:"Bearer ".concat(t.token),"Content-Type":"application/json"}}).then((function(e){L(),n(),localStorage.removeItem("userInfo")})).catch((function(e){}))},children:"ReSign"})]})]})]}):Object(m.jsx)("button",{onClick:L,children:"\ud68c\uc6d0\ud0c8\ud1f4"})]})}var Se,ze,Ee,Le,Ae,De,Ne,Fe,Te,Je,Ue,Be,Ze,$e,Me,Re,Pe,Ve=p.a.div(be||(be=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),He=function(e){var n=e.isLogedIn,t=e.isLogedInhandler,a=Object(i.useState)([]),c=Object(s.a)(a,2),o=c[0],r=c[1];return Object(i.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userInfo")),t={headers:{authorization:n?"Bearer ".concat(e.token):void 0,"Content-Type":"application/json"}};n&&t.headers.authorization&&I.a.get("http://ec2-3-37-98-188.ap-northeast-2.compute.amazonaws.com/api/posts/mine",t).then((function(e){r(Object(b.a)(e.data))})).catch((function(e){console.log("\uc5d0\ub7ec\ub0ac\ub2e4",e)}))}),[n]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u,{isLogedIn:n,isLogedInhandler:t}),n?Object(m.jsxs)("div",{children:[Object(m.jsx)(Ce,{isLogedInhandler:t}),Object(m.jsx)(Ve,{children:Object(m.jsx)(X,{isLogedIn:n,boardListData:o})})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(l.b,{to:"/signin",children:Object(m.jsx)("img",{src:"/images/users/loginplz.png",alt:"\ub85c\uadf8\uc778 \ud55c \uc774\ud6c4\uc5d0 mypage\ub85c \uc640\uc8fc\uc138\uc694"})}),Object(m.jsx)("div",{children:"\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\uac00\ub2a5\ud569\ub2c8\ub2e4."})]})]})},qe=p.a.div(Se||(Se=Object(j.a)(["\n  display: flex;\n  flex-direction : column;\n  text-align: left;\n  color : #808080;\n\n  input {\n    margin: 0.2rem 0 0.5rem;\n    padding: 0.4rem 0.5rem;\n    border: 1px solid #e6e6e6;\n  }\n  input:focus {\n    outline: 1px solid #EDC51E;\n  }\n  input::placeholder {\n    color :  #cccccc;\n    font-style: italic;\n  }\n  \n  b {\n    border-bottom: 1px solid #EDC51E;\n  }\n"]))),Ke=function(e){var n=e.signInInputInfo,t=e.setSignInInputInfo,a=function(e){"email"===e.target.type?t({email:e.target.value,password:n.password}):t({email:n.email,password:e.target.value})};return Object(m.jsxs)(qe,{children:[Object(m.jsx)("label",{htmlFor:"clickid",children:"Email"}),Object(m.jsx)("input",{id:"clickid",type:"email",placeholder:"email",value:n.email,onChange:a}),Object(m.jsx)("label",{htmlFor:"clickpwd",children:"Password"}),Object(m.jsx)("input",{id:"clickpwd",type:"password",placeholder:"password",value:n.password,onChange:a})]})},We=t.p+"static/media/Logo.3acbe251.svg",Ye=p.a.div(ze||(ze=Object(j.a)(["\n  margin-top: 1.5rem;\n  display: flex;\n"]))),Ge=p.a.button(Ee||(Ee=Object(j.a)(["\n  flex: 1 0 0;\n  margin-left: 0.5rem;\n  padding: 0.5rem 0;\n  font-weight: bold;\n  color: #fff;\n  background-color: #387099;\n  \n  &:hover {\n    background-color: #EDC51E;\n  }\n"]))),Qe=p.a.button(Le||(Le=Object(j.a)(["\n  flex: 1 0 0;\n  margin-right: 0.5rem;\n  padding: 0 0 0 0;\n  font-weight: bold;\n\n  &:hover {\n    background-color: #4D2C21;\n    color: #fff;\n  }\n  > a:hover {\n    color: #fff;\n  }\n  > a {\n    height: 40px;\n    padding-top: 8px;\n\n  }\n"]))),Xe=p.a.div(Ae||(Ae=Object(j.a)(["\n  margin: 0 0 0.2rem 0.2rem;\n  font-size: 0.8rem;\n  color: #387099;\n  display: none;\n\n  &.valid {\n    display: block;\n  }\n"]))),en=function(e){var n=e.signInInputInfo,t=e.setSignInInputInfo,a=(e.isLogedIn,e.isLogedInhandler),c=Object(i.useState)(!1),o=Object(s.a)(c,2),r=o[0],b=o[1],j=Object(d.f)();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(Xe,{className:r?"valid":"",children:["*\uc544\uc774\ub514 \ub610\ub294 \ube44\ubc00\ubc88\ud638\uac00 \uc798\ubabb \uc785\ub825 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.",Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:"\uc544\uc774\ub514"}),"\uc640 ",Object(m.jsx)("b",{children:"\ube44\ubc00\ubc88\ud638"}),"\ub97c \uc815\ud655\ud788 \uc785\ub825\ud574 \uc8fc\uc138\uc694."]}),Object(m.jsxs)(Ye,{children:[Object(m.jsx)(Qe,{children:Object(m.jsx)(l.b,{to:"/signup",children:"Sign Up"})}),Object(m.jsx)(Ge,{onClick:function(){/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/.test(n.email)&&/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/.test(n.password)?I.a.post("http://ec2-3-37-98-188.ap-northeast-2.compute.amazonaws.com/api/users/login",{email:n.email,password:n.password}).then((function(e){var n=e.data;localStorage.setItem("userInfo",JSON.stringify(n)),a(),t({email:"",password:""}),j.replace("/")})).catch((function(e){console.log(e),b(!0)})):b(!0)},children:"Sign In"})]})]})},nn=p.a.div(De||(De=Object(j.a)(["\n  height: 100vh;\n  background: #EFF1F1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url('/images/lego.jpg');\n"]))),tn=p.a.img(Ne||(Ne=Object(j.a)(["\n  width: 12vh;\n  margin-bottom: 1.5rem;\n"]))),an=p.a.div(Fe||(Fe=Object(j.a)(["\n  width: 50vh;\n  padding: 2rem;\n  border-radius: 0.8rem;\n  background: #ffffff;\n  position: relative;\n"]))),cn=p.a.div(Te||(Te=Object(j.a)(["\n  font-size: 1.2rem;\n  position: absolute;\n  top: 1.2rem;\n  left: 2rem;\n"]))),on=function(e){var n=e.isLogedIn,t=e.isLogedInhandler,a=Object(i.useState)({email:"",password:""}),c=Object(s.a)(a,2),o=c[0],r=c[1];return Object(m.jsx)(nn,{children:Object(m.jsxs)(an,{children:[Object(m.jsx)(cn,{children:Object(m.jsx)(l.b,{to:"/",children:Object(m.jsx)(M.a,{})})}),Object(m.jsx)(tn,{src:We,alt:"Logo"}),Object(m.jsx)(Ke,{signInInputInfo:o,setSignInInputInfo:r}),Object(m.jsx)(en,{signInInputInfo:o,isLogedIn:n,isLogedInhandler:t,setSignInInputInfo:r})]})})},rn=p.a.div(Je||(Je=Object(j.a)(["\n  display: flex;\n  flex-direction : column;\n  text-align: left;\n  color : #808080;\n  \n  input {\n    margin: 0.2rem 0 0.5rem;\n    padding: 0.4rem 0.5rem;\n    border: 1px solid #e6e6e6;\n  }\n  input:focus {\n    outline: 1px solid #EDC51E;\n  }\n  input::placeholder {\n    color :  #cccccc;\n    font-style: italic;\n  }\n  \n  b {\n    border-bottom: 1px solid #EDC51E;\n  }\n  span {\n    margin-bottom: 0.4rem;\n    font-size: 0.9rem;\n    color: tomato;\n  }\n  "]))),sn=function(e){var n=e.signUpInputInfo,t=e.setSignUpInputInfo,a=e.signUpValid,c=e.setSignUpValid,o=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/,r=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,l=/^([a-zA-Z0-9\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]).{1,10}$/,d=Object(i.useState)(!0),b=Object(s.a)(d,2),j=b[0],p=b[1],h=Object(i.useState)(!0),g=Object(s.a)(h,2),u=g[0],f=g[1];Object(i.useEffect)((function(){var e={headers:{"Content-Type":"application/json"}};/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n.email)&&I.a.post("http://ec2-3-37-98-188.ap-northeast-2.compute.amazonaws.com/api/validate/email",{email:n.email},e).then((function(e){p(!0),console.log("2")})).catch((function(e){p(!1),console.log("1")})),/^([a-zA-Z0-9\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]).{1,10}$/.test(n.nickname)&&I.a.post("http://ec2-3-37-98-188.ap-northeast-2.compute.amazonaws.com/api/validate/nickname",{nickname:n.nickname},e).then((function(e){f(!0),console.log(e)})).catch((function(e){f(!1)}))}),[n]);return Object(m.jsxs)(rn,{children:[Object(m.jsx)("label",{htmlFor:"clickemail",children:"Email"}),Object(m.jsx)("input",{id:"clickemail",type:"email",placeholder:"email",value:n.email,onChange:function(e){t(Object($.a)(Object($.a)({},n),{},{email:e.target.value})),r.test(n.email)?c(Object($.a)(Object($.a)({},a),{},{email:!0})):c(Object($.a)(Object($.a)({},a),{},{email:!1}))}}),""===n.email||a.email?null:Object(m.jsx)("span",{children:"\uc62c\ubc14\ub978 \uc774\uba54\uc77c \ud615\uc2dd\uc774 \uc544\ub2d9\ub2c8\ub2e4."}),j?null:Object(m.jsx)("span",{children:"\uc774\ubbf8 \uc0ac\uc6a9\uc911\uc778 \uc774\uba54\uc77c \uc8fc\uc18c \uc785\ub2c8\ub2e4."}),Object(m.jsx)("label",{htmlFor:"clickpwd2",children:"Password"}),Object(m.jsx)("input",{id:"clickpwd2",type:"password",placeholder:"password",value:n.password,onChange:function(e){t(Object($.a)(Object($.a)({},n),{},{password:e.target.value})),o.test(e.target.value)?c(Object($.a)(Object($.a)({},a),{},{password:!0})):c(Object($.a)(Object($.a)({},a),{},{password:!1}))}}),""===n.password||a.password?null:Object(m.jsx)("span",{children:"\uc54c\ud30c\ubcb3, \uc22b\uc790, \ud2b9\uc218\ubb38\uc790\ub97c \ud3ec\ud568\ud558\uc5ec 8~20\uae00\uc790\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."}),Object(m.jsx)("label",{htmlFor:"clickpwdcheck",children:"Password Check"}),Object(m.jsx)("input",{id:"clickpwdcheck",type:"password",placeholder:"password Check",value:n.passwordCheck,onChange:function(e){t(Object($.a)(Object($.a)({},n),{},{passwordCheck:e.target.value})),e.target.value===n.password?c(Object($.a)(Object($.a)({},a),{},{passwordCheck:!0})):c(Object($.a)(Object($.a)({},a),{},{passwordCheck:!1}))}}),""===n.passwordCheck||a.passwordCheck?null:Object(m.jsx)("span",{children:"\ube44\ubc00\ubc88\ud638\uc640 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),Object(m.jsx)("label",{htmlFor:"clicknickname",children:"Nickname"}),Object(m.jsx)("input",{id:"clicknickname",type:"nickname",placeholder:"nickname",value:n.nickname,onChange:function(e){t(Object($.a)(Object($.a)({},n),{},{nickname:e.target.value})),l.test(e.target.value)?c(Object($.a)(Object($.a)({},a),{},{nickname:!0})):c(Object($.a)(Object($.a)({},a),{},{nickname:!1}))}}),""===n.nickname||a.nickname?null:Object(m.jsx)("span",{children:"\ub2c9\ub124\uc784\uc740 \uacf5\ubc31\uc81c\uc678 2\uae00\uc790 \uc774\uc0c1 10\uae00\uc790 \uc774\ud558\uc5ec\uc57c \ud569\ub2c8\ub2e4."}),u?null:Object(m.jsx)("span",{children:"\uc774\ubbf8 \uc0ac\uc6a9\uc911\uc778 \ub2c9\ub124\uc784 \uc785\ub2c8\ub2e4."})]})},ln=p.a.div(Ue||(Ue=Object(j.a)(["\n  margin-top: 1.5rem;\n  display: flex;\n"]))),dn=p.a.button(Be||(Be=Object(j.a)(["\n  flex: 1 0 0;\n  padding: 0.5rem 0;\n  font-weight: bold;\n  color: #fff;\n  background-color: #387099;\n  \n  &:hover {\n    background-color: #EDC51E;\n  }\n"]))),bn=function(e){var n=e.signUpInputInfo,t=e.signUpAllCheck,a={headers:{"Content-Type":"application/json"}},i=Object(d.f)();return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(ln,{children:Object(m.jsx)(dn,{onClick:function(){var e=n.password,c=n.nickname,o={email:n.email,password:e,nickname:c};t&&I.a.post("http://ec2-3-37-98-188.ap-northeast-2.compute.amazonaws.com/api/users",Object($.a)({},o),a).then((function(e){i.replace("/signin")})).catch((function(e){console.log(e)}))},children:"Sign Up"})})})},jn=p.a.div(Ze||(Ze=Object(j.a)(["\n  height: 100vh;\n  background: #EFF1F1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url('/images/lego.jpg');\n"]))),pn=p.a.div($e||($e=Object(j.a)(["\n  width: 50vh;\n  padding: 2rem;\n  border-radius: 0.8rem;\n  background: #ffffff;\n  position: relative;\n"]))),hn=p.a.img(Me||(Me=Object(j.a)(["\n  width: 12vh;\n  margin-bottom: 1.5rem;\n"]))),mn=p.a.div(Re||(Re=Object(j.a)(["\n  font-size: 1.2rem;\n  position: absolute;\n  top: 1.2rem;\n  left: 2rem;\n  "]))),gn=function(){var e=Object(i.useState)({email:"",password:"",passwordCheck:"",nickname:""}),n=Object(s.a)(e,2),t=n[0],a=n[1],c=Object(i.useState)({email:!1,password:!1,passwordCheck:!1,nickname:!1}),o=Object(s.a)(c,2),r=o[0],d=o[1],b=Object(i.useState)(!1),j=Object(s.a)(b,2),p=j[0],h=j[1];return Object(i.useEffect)((function(){Object.entries(r).flat().every((function(e){return e}))?h(!0):h(!1)}),[r]),Object(m.jsx)(jn,{children:Object(m.jsxs)(pn,{children:[Object(m.jsx)(mn,{children:Object(m.jsx)(l.b,{to:"/signin",children:Object(m.jsx)(M.a,{})})}),Object(m.jsx)(hn,{src:We,alt:"Logo"}),Object(m.jsx)(sn,{signUpInputInfo:t,setSignUpInputInfo:a,signUpValid:r,setSignUpValid:d}),Object(m.jsx)(bn,{signUpInputInfo:t,signUpAllCheck:p})]})})},un=p.a.footer(Pe||(Pe=Object(j.a)(["\n  padding: 1rem 0;\n"])));function fn(){return Object(m.jsx)(un,{children:"Copyright \xa9 2021\ub144\uc0b0 \ubbf8\ub2c8\ub9c8\ub2c8\ubaa8 with Melting Brain KOREA, Inc. All rights reserved."})}var On=function(){var e=Object(i.useState)(!1),n=Object(s.a)(e,2),t=n[0],a=n[1];Object(i.useEffect)((function(){localStorage.getItem("userInfo")?a(!0):a(!1)}),[]);var c=function(){a(!t)};return Object(m.jsxs)(l.a,{children:[Object(m.jsxs)(d.c,{children:[Object(m.jsx)(d.a,{exact:!0,path:"/",children:Object(m.jsx)(pe,{isLogedIn:t,isLogedInhandler:c})}),Object(m.jsx)(d.a,{path:"/signin",children:Object(m.jsx)(on,{isLogedIn:t,isLogedInhandler:c})}),Object(m.jsx)(d.a,{path:"/signup",children:Object(m.jsx)(gn,{})}),Object(m.jsx)(d.a,{path:"/mypage",children:Object(m.jsx)(He,{isLogedIn:t,isLogedInhandler:c})})]}),Object(m.jsx)(fn,{})]})};r.a.render(Object(m.jsxs)(c.a.StrictMode,{children:[Object(m.jsx)(On,{}),console.log('                                                                        ,,\n                                                                       /  ,\n                                                                      /   /\n                                                                     /   /\n                                                                    /   /\n    __________________________                                     /   /\n    \u23a2                         \u23a5                                   /   /\n    \u23a2  \ud639\uc2dc \ub0b4\uac00 \ubcf4\uc5ec? \ub09c \uace0\uc591\uc774\uc57c  \u23a5                                  /   /\n    \u23a2____    _________________\u23a5                                 /   /\n          \\/    ,      ,,                                      /   /\n               /%c@%c\\____/%c@%c \\                                ____/   /\n              /           \\                         _____/        /__\n        /" \\ / \u2022    \u2022      \\                     __/             /  %c@@%c"\\\n        \\    %c@@%c  \u3145  %c@@%c     /___             ___/                /    _/\n      /" \\   \\                 \\__________/                    |__/ "\\\n      \\   \\                                                   /      /\n       \\    \\  __                                                  _/\n        \\                                                       __/\n          \\_                                             ______/\n             \\ ___                                     _/\n                    \\__                             __/\n                        \\_____                _____/\n                              \\______________/\n          \n',"color:#ff6905","color:white","color:#ff6905","color:white","color:#ff6905","color:white","color:#ff6905","color:white","color:#ff6905","color:white")]}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.95130060.chunk.js.map