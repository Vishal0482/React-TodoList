(this.webpackJsonpTodoList=this.webpackJsonpTodoList||[]).push([[0],{11:function(t,e,c){},15:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var o=c(1),s=c.n(o),n=c(3),a=c(8),i=c(0),l=function(t){var e=t.setInputText,c=t.todos,o=t.setTodos,s=t.inputText,n=t.setStatus;return Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{className:"form-container",children:[Object(i.jsx)("input",{value:s,type:"text",onChange:function(t){e(t.target.value)},className:"input-text"}),Object(i.jsx)("button",{onClick:function(t){t.preventDefault(),o([].concat(Object(a.a)(c),[{text:s,completed:!1,id:1e3*Math.random()}])),e("")},type:"submit",className:"btn-add btn",children:Object(i.jsx)("i",{className:"fas fa-plus-square"})})]}),Object(i.jsx)("div",{children:Object(i.jsxs)("select",{className:"selection-menu",onChange:function(t){n(t.target.value)},name:"todos",children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"completed",children:"Completed"}),Object(i.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},d=c(6),r=function(t){var e=t.text,c=t.todo,o=t.todos,s=t.setTodos;return Object(i.jsxs)("div",{className:"todo-list",children:[Object(i.jsx)("li",{className:"todo-item",children:e}),Object(i.jsx)("button",{className:"todo-check-btn btn ".concat(c.completed?"completed":""),onClick:function(){s(o.map((function(t){return t.id===c.id?Object(d.a)(Object(d.a)({},t),{},{completed:!t.completed}):t})))},children:Object(i.jsx)("i",{class:"fas fa-check fa-x"})}),Object(i.jsx)("button",{className:"todo-trash-btn btn",onClick:function(){s(o.filter((function(t){return t.id!==c.id})))},children:Object(i.jsx)("i",{class:"fas fa-trash fa-x"})})]})},u=function(t){var e=t.todos,c=t.setTodos,o=t.filteredTodos;return Object(i.jsx)("div",{className:"todo-box",children:Object(i.jsx)("ul",{children:o.map((function(t){return Object(i.jsx)(r,{setTodos:c,todos:e,todo:t,text:t.text},t.id)}))})})};c(11);var j=function(){var t=Object(o.useState)(""),e=Object(n.a)(t,2),c=e[0],s=e[1],a=Object(o.useState)([]),d=Object(n.a)(a,2),r=d[0],j=d[1],b=Object(o.useState)("all"),f=Object(n.a)(b,2),O=f[0],m=f[1],x=Object(o.useState)([]),p=Object(n.a)(x,2),h=p[0],v=p[1];Object(o.useEffect)((function(){N()}),[]),Object(o.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(r)),function(){switch(O){case"completed":v(r.filter((function(t){return!0===t.completed})));break;case"uncompleted":v(r.filter((function(t){return!1===t.completed})));break;default:v(r)}}()}),[r,O]);var N=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));j(t)}};return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"heading",children:"My Todo List"}),Object(i.jsx)(l,{inputText:c,todos:r,setTodos:j,setInputText:s,setStatus:m}),Object(i.jsx)(u,{setTodos:j,todos:r,filteredTodos:h})]})})},b=c(7),f=c.n(b);c(15);f.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.be43027e.chunk.js.map