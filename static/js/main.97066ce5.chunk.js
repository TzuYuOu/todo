(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var o=c(1),n=c.n(o),s=c(7),i=c.n(s),d=(c(13),c(2)),a=(c(14),c(8)),l=c(0),r=function(t){var e=t.todos,c=t.setTodos,n=t.setStatus,s=Object(o.useState)(""),i=Object(d.a)(s,2),r=i[0],u=i[1];return Object(l.jsxs)("form",{action:"",children:[Object(l.jsx)("input",{type:"text",onChange:function(t){return u(t.target.value)},value:r}),Object(l.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),r&&c([].concat(Object(a.a)(e),[{text:r,completed:!1,id:1e3*Math.random()}])),u("")},children:"+"}),Object(l.jsx)("div",{className:"select",children:Object(l.jsxs)("select",{onChange:function(t){n(t.target.value)},className:"filter-todo",name:"todos",id:"",children:[Object(l.jsx)("option",{value:"all",children:"All"}),Object(l.jsx)("option",{value:"completed",children:"Completed"}),Object(l.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},u=c(6),j=function(t){var e=t.text,c=t.todo,o=t.todos,n=t.setTodos;return Object(l.jsxs)("div",{className:"todo",children:[Object(l.jsx)("li",{className:"todo-item ".concat(c.completed?"completed":""),children:e}),Object(l.jsx)("button",{onClick:function(){n(o.map((function(t){return t.id===c.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:"v"}),Object(l.jsx)("button",{onClick:function(){n(o.filter((function(t){return t.id!==c.id})))},className:"trash-btn",children:"x"})]})},b=function(t){var e=t.todos,c=t.setTodos,o=t.filteredTodos;return Object(l.jsx)("div",{className:"todo-container",children:Object(l.jsx)("ul",{className:"todo-list",children:o.map((function(t){return Object(l.jsx)(j,{setTodos:c,todos:e,todo:t,text:t.text},t.id)}))})})};var O=function(){var t=Object(o.useState)([]),e=Object(d.a)(t,2),c=e[0],n=e[1],s=Object(o.useState)("all"),i=Object(d.a)(s,2),a=i[0],u=i[1],j=Object(o.useState)([]),O=Object(d.a)(j,2),f=O[0],m=O[1];return Object(o.useEffect)((function(){!function(){switch(a){case"completed":m(c.filter((function(t){return!0===t.completed})));break;case"uncompleted":m(c.filter((function(t){return!1===t.completed})));break;default:m(c)}}()}),[a,c]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"Ou's Todo List"})}),Object(l.jsx)(r,{todos:c,setTodos:n,setStatus:u}),Object(l.jsx)(b,{setTodos:n,todos:c,filteredTodos:f})]})},f=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(e){var c=e.getCLS,o=e.getFID,n=e.getFCP,s=e.getLCP,i=e.getTTFB;c(t),o(t),n(t),s(t),i(t)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.97066ce5.chunk.js.map