(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(14),a=t.n(c),o=t(3),r=t(2),u=t(4),s=t.n(u),i="/api/persons",l={getAll:function(){return s.a.get(i)},create:function(e){return s.a.post(i,e)},remove:function(e){return s.a.delete("".concat(i,"/").concat(e))},update:function(e,n){return s.a.put("".concat(i,"/").concat(e),n)}},d=t(0),j=function(e){var n=e.message;return null===n?null:Object(d.jsx)("div",{className:"success",children:n})},b=function(e){var n=e.message;return null===n?null:Object(d.jsx)("div",{className:"error",children:n})},f=function(e){var n=e.filters,t=e.handleFiltersChange;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:["filter shown with ",Object(d.jsx)("input",{value:n,onChange:t})]})})},m=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{onSubmit:e.addPerson,children:[Object(d.jsxs)("div",{children:["name: ",Object(d.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(d.jsxs)("div",{children:["number: ",Object(d.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"submit",children:"add"})})]})})},h=function(e){var n=e.filterShow,t=e.removePerson;return Object(d.jsx)(d.Fragment,{children:n.map((function(e){return Object(d.jsxs)("div",{children:[e.name," ",e.number," ",Object(d.jsx)("button",{onClick:function(){return t(e.name,e.id)},children:"delete"})]},e.name)}))})},O=function(){var e=Object(r.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(""),u=Object(o.a)(a,2),s=u[0],i=u[1],O=Object(r.useState)(""),v=Object(o.a)(O,2),g=v[0],p=v[1],x=Object(r.useState)(""),w=Object(o.a)(x,2),C=w[0],N=w[1],S=Object(r.useState)(!1),k=Object(o.a)(S,2),T=k[0],y=k[1],F=Object(r.useState)(null),P=Object(o.a)(F,2),A=P[0],L=P[1],D=Object(r.useState)(null),I=Object(o.a)(D,2),E=I[0],J=I[1];Object(r.useEffect)((function(){l.getAll().then((function(e){c(e.data)}))}),[]);var B=T?t.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())})):t;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Phonebook"}),Object(d.jsx)(j,{message:A}),Object(d.jsx)(b,{message:E}),Object(d.jsx)(f,{filters:C,handleFiltersChange:function(e){t.some((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())}))?y(!0):y(!1),console.log(e.target.value),N(e.target.value)}}),Object(d.jsx)("h3",{children:"Add a new"}),Object(d.jsx)(m,{addPerson:function(e){e.preventDefault();var n=t.filter((function(e){return e.name===s})),a={name:s,number:g};t.some((function(e){return e.name===s}))?window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one"))&&l.update(n[0].id,a).then((function(e){c(t.map((function(t){return t.id!==n[0].id?t:e.data}))),i(""),p(""),setTimeout((function(){alert("Update ".concat(n[0].name," success!"))}),300)})).catch((function(e){J("Information of ".concat(s," has already been removed from server")),setTimeout((function(){J(null)}),5e3),c(t.filter((function(e){return e.id!==n[0].id}))),console.log(e.response.data)})):l.create(a).then((function(e){c(t.concat(e.data)),i(""),p(""),L("Added ".concat(s)),setTimeout((function(){L(null)}),5e3)})).catch((function(e){J(e.response.data.error),setTimeout((function(){J(null)}),5e3),console.log(e.response.data)}))},newName:s,handleNameChange:function(e){console.log(e.target.value),i(e.target.value)},newNumber:g,handleNumberChange:function(e){console.log(e.target.value),p(e.target.value)}}),Object(d.jsx)("h3",{children:"Numbers"}),Object(d.jsx)(h,{filterShow:B,removePerson:function(e,n){window.confirm("Delete ".concat(e," ?"))&&l.remove(n).then((function(a){c(t.filter((function(e){return e.id!==n}))),setTimeout((function(){alert("Delete ".concat(e," success!"))}),300)})).catch((function(n){J("Information of ".concat(e," has already been removed from server")),setTimeout((function(){J(null)}),5e3)}))}})]})};t(38);a.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.828e7c6e.chunk.js.map