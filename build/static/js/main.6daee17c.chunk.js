(this.webpackJsonpmytodo=this.webpackJsonpmytodo||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(18),r=n.n(c),s=n(3),o=n.n(s),i=n(19),u=n(5),d=n(7),l=n(6),j=n.n(l),p=n(0),b=function(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"todo_style",children:[Object(p.jsx)("i",{className:"fa fa-times","aria-hidden":"true",onClick:function(){e.onSelect(e.id)}}),Object(p.jsx)("i",{className:"fas fa-edit","aria-hidden":"true",onClick:function(){e.editTask(e.id,e.text)}}),Object(p.jsx)("li",{children:e.text})]})})},h=function(){Object(a.useEffect)((function(){C()}),[]);var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),s=Object(d.a)(r,2),l=s[0],h=s[1],f=Object(a.useState)(!1),x=Object(d.a)(f,2),k=x[0],O=x[1],v=Object(a.useState)(null),m=Object(d.a)(v,2),g=m[0],y=m[1],w=function(e){return c(e.target.value),e.target.value},C=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("https://magisk-todo-backend.herokuapp.com/details");case 3:t=e.sent,n=t.data,a=n.map((function(e){return e})),h(Object(i.a)(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={task:n},e.next=4,j.a.post("https://magisk-todo-backend.herokuapp.com/add",t);case 4:e.sent,c(""),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:C();case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.delete("https://magisk-todo-backend.herokuapp.com/del",{data:{_id:t}});case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:C();case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={_id:g,task:n},e.prev=1,e.next=4,j.a.patch("https://magisk-todo-backend.herokuapp.com/edit",t);case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:console.log(t),O(!1),c(""),C();case 14:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"main_div",children:Object(p.jsxs)("div",{className:"center_div",children:[Object(p.jsx)("br",{}),Object(p.jsx)("h1",{children:"Magisk ToDo"}),Object(p.jsx)("br",{}),!k&&Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"text",value:n,placeholder:"Enter your task...",onChange:w}),Object(p.jsx)("button",{onClick:N,children:" + "}),Object(p.jsx)("ol",{children:l.map((function(e,t){return Object(p.jsx)(b,{id:e._id,onSelect:_,editTask:function(e,t){!function(e,t){O(!0),c(t),y(e)}(e,t)},text:e.task},t)}))})]}),k&&Object(p.jsxs)("div",{className:"todo_style",children:[Object(p.jsx)("input",{type:"text",value:n,placeholder:"Enter your task...",onChange:w}),Object(p.jsx)("button",{onClick:S,children:" + "}),Object(p.jsx)("i",{className:"fas fa-undo","aria-hidden":"true",onClick:function(){O(!1),y(null),c("")}})]})]})})})};n(44);r.a.render(Object(p.jsx)(h,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.6daee17c.chunk.js.map