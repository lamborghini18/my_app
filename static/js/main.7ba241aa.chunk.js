(this.webpackJsonpmy_app=this.webpackJsonpmy_app||[]).push([[1],{107:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(42),a=n(5),i="ADD-MESSAGE",c={dialogs:[{id:1,name:"Sveta",avatarURL:"http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg"},{id:2,name:"Vlad",avatarURL:"https://www.ejin.ru/wp-content/uploads/2018/10/1202399791_preview_15034743_1798112143788452_7709561090543190016_n.jpg"},{id:3,name:"Ilya",avatarURL:"http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg"},{id:4,name:"Lika",avatarURL:"http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg"},{id:5,name:"Nikita",avatarURL:"http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg"},{id:6,name:"Evgenia",avatarURL:"http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg"},{id:7,name:"Ryslan",avatarURL:"http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg"},{id:8,name:"Masha",avatarURL:"http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your first progect?"},{id:3,message:"It is OK"},{id:4,message:"Fine!"}]},s=function(t){return{type:i,newMessageBody:t}};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i:var n=e.newMessageBody;return Object(a.a)(Object(a.a)({},t),{},{messages:[].concat(Object(r.a)(t.messages),[{id:5,message:n}])});default:return t}}},187:function(t,e,n){},20:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return s}));var r=n(121),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"871a2d76-a5bd-4ada-b1fe-550ef6545529"}}),i={getUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(t,"&count=").concat(e)).then((function(t){return t.data}))},unFollow:function(t){return a.delete("follow/".concat(t)).then((function(t){return t.data}))},follow:function(t){return a.post("follow/".concat(t),{}).then((function(t){return t.data}))}},c={getProfileUsers:function(t){return a.get("profile/"+t)},getStatus:function(t){return a.get("profile/status/"+t)},updateStatus:function(t){return a.put("profile/status/",{status:t})}},s={me:function(){return a.get("auth/me")},login:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:t,password:e,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},272:function(t,e,n){"use strict";n.r(e);var r,a,i,c,s,u,o,l,d=function(t){t&&t instanceof Function&&n.e(7).then(n.bind(null,389)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),r(t),a(t),i(t),c(t)}))},f=n(0),j=n.n(f),b=n(26),p=n.n(b),g=(n(187),n(15)),h=(n.p,n(30)),O=n(16),v=n(273),x=n(295),m=n(37),w=n(296),y=n(297),P=n(298),k=n(2),S=function(t){return Object(k.jsxs)(v.a,{children:[Object(k.jsxs)(x.a,{button:!0,children:[Object(k.jsx)(w.a,{}),Object(k.jsx)(I,{to:"/profile",children:"Profile"})]}),Object(k.jsxs)(x.a,{button:!0,children:[Object(k.jsx)(y.a,{}),Object(k.jsx)(I,{to:"/dialogs",children:"Messages"})]}),Object(k.jsxs)(x.a,{button:!0,children:[Object(k.jsx)(P.a,{}),Object(k.jsx)(I,{to:"/users",children:"Users"})]}),Object(k.jsx)(x.a,{button:!0,children:Object(k.jsx)(I,{to:"/news",children:"News"})}),Object(k.jsx)(x.a,{button:!0,children:Object(k.jsx)(I,{to:"/music",children:"Music"})}),Object(k.jsx)(x.a,{button:!0,children:Object(k.jsx)(I,{to:"settings",children:"Settings"})})]})},I=Object(O.a)(h.b).attrs((function(){return{}}))(r||(r=Object(g.a)(["\n  padding-left: 10px;\n  color: ",";\n  text-decoration: none;\n  font-weight: 700;\n  &:focus {\n    color: ",";\n  }\n"])),m.g,m.f),C=n(10),U=function(t){return Object(k.jsx)("div",{children:"News"})},E=function(t){return Object(k.jsx)("div",{children:"Music"})},F=function(t){return Object(k.jsx)("div",{children:"Settings"})},_=n(9),L=n.n(_),A=n(23),T=n(42),z=n(5),R=n(20),M=function(t,e,n,r){return t.map((function(t){return t[n]===e?Object(z.a)(Object(z.a)({},t),r):t}))},G="FOLLOW",N="UNFOLLOW",D="SET_USERS",H="SET_CARRENT_PAGE",B="SET_TOTAL_USERS_COUNT",W="TOGGLE_IS_FETCHING",q="TOGGLE_IS_FOLLOWING_PROGRESS",J={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},K=function(t){return{type:G,userId:t}},V=function(t){return{type:N,userId:t}},Y=function(t){return{type:H,currentPage:t}},Z=function(t){return{type:W,isFetching:t}},Q=function(t,e){return{type:q,isFetching:t,userId:e}},X=function(){var t=Object(A.a)(L.a.mark((function t(e,n,r,a){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Q(!0,n)),t.next=3,r(n);case 3:0===t.sent.resultCode&&e(a(n)),e(Q(!1,n));case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),$=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case G:return Object(z.a)(Object(z.a)({},t),{},{users:M(t.users,e.userId,"id",{followed:!0})});case N:return Object(z.a)(Object(z.a)({},t),{},{users:M(t.users,e.userId,"id",{followed:!1})});case D:return Object(z.a)(Object(z.a)({},t),{},{users:Object(T.a)(e.users)});case H:return Object(z.a)(Object(z.a)({},t),{},{currentPage:e.currentPage});case B:return Object(z.a)(Object(z.a)({},t),{},{totalUsersCount:e.count});case W:return Object(z.a)(Object(z.a)({},t),{},{isFetching:e.isFetching});case q:return Object(z.a)(Object(z.a)({},t),{},{followingInProgress:e.isFetching?[].concat(Object(T.a)(t.followingInProgress),[e.userId]):t.followingInProgress.filter((function(t){return t!=e.userId}))});default:return t}},tt=n(34),et=n(304),nt=n(88),rt=n(299),at=function(t){var e=t.users,n=t.followingInProgress,r=t.unfollow,a=t.follow,i=e.map((function(t){var e;return Object(k.jsxs)(it,{children:[Object(k.jsx)(h.b,{to:"/profile/".concat(t.id),children:Object(k.jsx)(ct,{src:(null===t||void 0===t||null===(e=t.photos)||void 0===e?void 0:e.small)||nt.a})}),Object(k.jsx)("div",{children:t.followed?Object(k.jsx)(rt.a,{size:"small",variant:"contained",color:"primary",disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"unFollow"}):Object(k.jsx)(rt.a,{size:"small",variant:"contained",color:"primary",disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})}),Object(k.jsx)("div",{children:t.name}),Object(k.jsx)("div",{children:t.status})]},t.id)}));return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{children:i})})},it=O.a.div(a||(a=Object(g.a)(["\n  padding: 10px 10px 10px 20px;\n"]))),ct=O.a.img(i||(i=Object(g.a)(["\n  width: 100px;\n"]))),st=function(t){var e=t.totalUsersCount,n=t.pageSize,r=t.onPageChanged,a=t.currentPage,i=t.users,c=t.followingInProgress,s=t.unfollow,u=t.follow,o=Math.ceil(e/n);return Object(k.jsxs)("div",{children:[Object(k.jsx)(ut,{children:Object(k.jsx)(et.a,{count:o,variant:"outlined",color:"primary",defaultCurrent:1,showSizeChanger:!1,onChange:function(t,e){r(e)},page:a})}),Object(k.jsx)(at,{users:i,followingInProgress:c,unfollow:s,follow:u})]})},ut=O.a.div(c||(c=Object(g.a)(["\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n"]))),ot=n(45),lt=n(27),dt=n(123),ft=Object(dt.a)((function(t){return t.usersPage.users}),(function(t){return t.filter((function(t){return!0}))})),jt=function(t){return t.usersPage.pageSize},bt=function(t){return t.usersPage.totalUsersCount},pt=function(t){return t.usersPage.currentPage},gt=function(t){return t.usersPage.isFetching},ht=function(t){return t.usersPage.followingInProgress},Ot=function(t){return t.auth.isAuth},vt=Object(lt.d)(Object(tt.b)((function(t){return{users:ft(t),pageSize:jt(t),totalUsersCount:bt(t),currentPage:pt(t),isFetching:gt(t),followingInProgress:ht(t),isAuth:Ot(t)}}),{follow:function(t){return function(){var e=Object(A.a)(L.a.mark((function e(n){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:X(n,t,R.c.follow.bind(R.c),K);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},unfollow:function(t){return function(){var e=Object(A.a)(L.a.mark((function e(n){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:X(n,t,R.c.unFollow.bind(R.c),V);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},setCurrentPage:Y,toggleFollowingInProgress:Q,requestUsers:function(t,e){return function(){var n=Object(A.a)(L.a.mark((function n(r){var a;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Z(!0)),n.next=3,R.c.getUsers(t,e);case 3:a=n.sent,r(Z(!1)),r((c=a.items,{type:D,users:c})),r((i=a.totalCount,{type:B,count:i})),r(Y(t));case 8:case"end":return n.stop()}var i,c}),n)})));return function(t){return n.apply(this,arguments)}}()}}))((function(t){var e=t.requestUsers,n=t.currentPage,r=t.pageSize,a=t.isFetching,i=t.totalUsersCount,c=t.users,s=t.unfollow,u=t.follow,o=t.followingInProgress;Object(f.useEffect)((function(){e(n,r)}),[]);return Object(k.jsxs)(k.Fragment,{children:[a&&Object(k.jsx)(ot.a,{}),Object(k.jsx)(st,{totalUsersCount:i,pageSize:r,currentPage:n,onPageChanged:function(t){e(t,r)},users:c,unfollow:s,follow:u,followingInProgress:o})]})})),xt=n(300),mt=n(301),wt=n(302),yt=n(303),Pt=n(124),kt=n.n(Pt),St=function(t){var e=t.isAuth,n=t.login,r=t.logout;return Object(k.jsx)(It,{children:Object(k.jsx)(xt.a,{position:"static",children:Object(k.jsxs)(mt.a,{children:[Object(k.jsx)(wt.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(k.jsx)(kt.a,{})}),Object(k.jsx)(Ct,{children:Object(k.jsx)(yt.a,{variant:"h6",children:"Profile"})}),Object(k.jsx)(Ut,{children:e?Object(k.jsx)("div",{children:Object(k.jsx)(rt.a,{color:"inherit",onClick:r,children:n})}):Object(k.jsx)(rt.a,{color:"inherit",children:Object(k.jsx)(Et,{to:"/login",children:" Login"})})})]})})})},It=O.a.div(s||(s=Object(g.a)(["\n  grid-area: header;\n"]))),Ct=O.a.div(u||(u=Object(g.a)(["\n  margin-left: 20px;\n"]))),Ut=O.a.div(o||(o=Object(g.a)(["\n  margin-right: 20px;\n  text-decoration: none;\n  position: absolute;\n  right: 0;\n"]))),Et=Object(O.a)(h.b)(l||(l=Object(g.a)(["\n  color: ",";\n  text-decoration: none;\n"])),m.d),Ft=n(44),_t=Object(tt.b)((function(t){return{isAuth:t.auth.isAuth,login:t.auth.login}}),{logout:Ft.d})((function(t){var e=t.isAuth,n=t.login,r=t.logout;return Object(k.jsx)(St,{isAuth:e,login:n,logout:r})})),Lt="INITIALIZED_SUCCESS",At={initialized:!1},Tt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Lt:return Object(z.a)(Object(z.a)({},t),{},{initialized:!0});default:return t}},zt=n(90),Rt=n(107),Mt={friends:[{id:1,name:"Sveta",ava:Object(k.jsx)("img",{src:"http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg",alt:""})},{id:2,name:"Vlad",ava:Object(k.jsx)("img",{src:"http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg",alt:""})},{id:3,name:"Ilya",ava:Object(k.jsx)("img",{src:"http://avatarki-besplatno.ru/avatar/avatark/avatar286-1.jpg",alt:""})}]},Gt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt;return t},Nt=n(125),Dt=n(113),Ht=Object(lt.c)({profilePage:zt.b,dialogsPage:Rt.b,navbar:Gt,usersPage:$,auth:Ft.a,form:Dt.a,app:Tt}),Bt=Object(lt.e)(Ht,Object(lt.a)(Nt.a));window.store=Bt;var Wt,qt,Jt=Bt,Kt=function(t){return function(e){return Object(k.jsx)(f.Suspense,{fallback:Object(k.jsx)(ot.a,{}),children:Object(k.jsx)(t,Object(z.a)({},e))})}},Vt=j.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,392))})),Yt=j.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,391))})),Zt=j.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,393))})),Qt=Object(lt.d)(C.f,Object(tt.b)((function(t){return{initialized:t.app.initialized}}),{initializeApp:function(){return function(t){var e=t(Object(Ft.b)());Promise.all([e]).then((function(){t({type:Lt})}))}}}))((function(t){var e=t.initialized,n=t.initializeApp;return Object(f.useEffect)((function(){n()}),[]),e?Object(k.jsxs)($t,{children:[Object(k.jsx)(_t,{}),Object(k.jsx)(S,{}),Object(k.jsxs)(te,{children:[Object(k.jsx)(C.b,{path:"/profile/:userId?",render:Kt(Yt)}),Object(k.jsx)(C.b,{path:"/dialogs",render:Kt(Vt)}),Object(k.jsx)(C.b,{path:"/news",render:function(){return Object(k.jsx)(U,{})}}),Object(k.jsx)(C.b,{path:"/music",render:function(){return Object(k.jsx)(E,{})}}),Object(k.jsx)(C.b,{path:"/users",render:function(){return Object(k.jsx)(vt,{})}}),Object(k.jsx)(C.b,{path:"/settings",render:function(){return Object(k.jsx)(F,{})}}),Object(k.jsx)(C.b,{path:"/login",render:Kt(Zt)})]})]}):Object(k.jsx)(ot.a,{})})),Xt=function(t){return Object(k.jsx)(j.a.StrictMode,{children:Object(k.jsx)(h.a,{children:Object(k.jsx)(tt.a,{store:Jt,children:Object(k.jsx)(Qt,{})})})})},$t=O.a.div(Wt||(Wt=Object(g.a)(['\n  margin: 0 auto;\n  display: grid;\n  width: 1200px;\n  grid-template-areas:\n    "header header"\n    "nav cont";\n  grid-template-rows: 60px 1fr;\n  grid-template-columns: 2fr 10fr;\n  grid-gap: 10px;\n']))),te=O.a.div(qt||(qt=Object(g.a)(["\n  grid-area: cont;\n  background-color: ",";\n"])),m.a);p.a.render(Object(k.jsx)(Xt,{}),document.getElementById("root")),d()},37:function(t,e,n){"use strict";n.d(e,"g",(function(){return r})),n.d(e,"h",(function(){return a})),n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return u})),n.d(e,"f",(function(){return o})),n.d(e,"e",(function(){return l}));var r="rgba(6, 9, 141, 0.856)",a="rgba(194,237,249,1)",i="rgba(255,255,255,1)",c="rgba(19, 125, 167, 0.171)",s="rgba(252,5,5,1)",u="rgba(237, 237, 237, 0.5);",o="rgba(107, 120, 155, 1);",l="rgba(47, 51, 66, 1);"},44:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return j})),n.d(e,"d",(function(){return b}));var r=n(9),a=n.n(r),i=n(23),c=n(5),s=n(69),u=n(20),o="myApp/auth/SET_USER_DATA",l={userId:null,email:null,login:null,isFetching:!1,isAuth:!1},d=function(t,e,n,r){return{type:o,payload:{userId:t,email:e,login:n,isAuth:r}}},f=function(){return function(){var t=Object(i.a)(a.a.mark((function t(e){var n,r,i,c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.me();case 2:0===(n=t.sent).data.resultCode&&(r=n.data.data,i=r.id,c=r.email,s=r.login,e(d(i,c,s,!0)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(t,e,n){return function(){var r=Object(i.a)(a.a.mark((function r(i){var c,o;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.a.login(t,e,n);case 2:0===(c=r.sent).data.resultCode?i(f()):(o=c.data.messages.length>0?c.data.messages[0]:"Some error",i(Object(s.a)("login",{_error:o})));case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},b=function(){return function(){var t=Object(i.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.logout();case 2:0===t.sent.data.resultCode&&e(d(null,null,null,!1));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:return Object(c.a)(Object(c.a)({},t),e.payload);default:return t}}},45:function(t,e,n){"use strict";var r,a=n(15),i=(n(0),n.p+"static/media/loader.0b702058.gif"),c=n(16),s=n(2),u=(e.a=function(t){return Object(s.jsx)("div",{children:Object(s.jsx)(u,{src:i})})},c.a.img(r||(r=Object(a.a)(["\n  width: 200px;\n"]))))},88:function(t,e,n){"use strict";e.a=n.p+"static/media/user.2fda6558.png"},90:function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"d",(function(){return g})),n.d(e,"c",(function(){return h})),n.d(e,"e",(function(){return O}));var r=n(9),a=n.n(r),i=n(23),c=n(42),s=n(5),u=n(20),o="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",f="DELETE_POST",j={posts:[{id:1,message:"Hi, how are you?",likesCount:10},{id:2,message:"It's my first post!",likesCount:15},{id:3,message:"Hello",likesCount:16}],profile:null,status:""},b=function(t){return{type:o,newPost:t}},p=function(t){return{type:d,status:t}},g=function(t){return function(){var e=Object(i.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.getProfileUsers(t);case 2:r=e.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(t){return function(){var e=Object(i.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.getStatus(t);case 2:r=e.sent,n(p(r.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(t){return function(){var e=Object(i.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.updateStatus(t);case 2:0===e.sent.data.resultCode&&n(p(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:var n={id:5,message:e.newPost,likesCount:0};return Object(s.a)(Object(s.a)({},t),{},{posts:[].concat(Object(c.a)(t.posts),[n])});case l:return Object(s.a)(Object(s.a)({},t),{},{profile:e.profile});case d:return Object(s.a)(Object(s.a)({},t),{},{status:e.status});case f:return Object(s.a)(Object(s.a)({},t),{},{posts:t.posts.filter((function(t){return t.id!=e.postId}))});default:return t}}}},[[272,2,3]]]);
//# sourceMappingURL=main.7ba241aa.chunk.js.map