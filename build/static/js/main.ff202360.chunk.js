(this.webpackJsonpphonebook1=this.webpackJsonpphonebook1||[]).push([[0],{16:function(e,n,t){e.exports=t(40)},39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(15),u=t.n(c),o=t(4),l=t.n(o),i=t(5),s=t(2),m=function(e){var n=e.handleNumberChange,t=e.handleNameChange,a=e.handleClick,c=e.newName,u=e.newNumber;return r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:t,value:c}),"number: ",r.a.createElement("input",{onChange:n,value:u})),r.a.createElement("div",null,r.a.createElement("button",{onClick:a,type:"submit"},"add")))},d=function(e){var n=e.handleSearchChange,t=e.newSearch;return r.a.createElement("input",{onChange:n,value:t})},p=function(e){var n=e.persons,t=e.handleDelete;return n.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("li",null,e.name,": ",e.number," ",r.a.createElement("button",{onClick:t,"data-id":e.id},"delete")))}))},f=function(e){var n=e.message,t=e.isError;return n?r.a.createElement("div",{className:t?"error":"notification"},n):null},h=t(3),b=t.n(h),v=function(e){return b.a.post("api/persons",e)},E=function(e){return b.a.delete("/api/persons/".concat(e))},k=function(e){return b.a.put("/api/persons/".concat(e.id),e)},g=function(){var e=Object(a.useState)([]),n=Object(s.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),o=Object(s.a)(u,2),h=o[0],g=o[1],w=Object(a.useState)(""),j=Object(s.a)(w,2),O=j[0],C=j[1],x=Object(a.useState)(""),S=Object(s.a)(x,2),N=S[0],y=S[1],T=Object(a.useState)(null),D=Object(s.a)(T,2),A=D[0],J=D[1],B=Object(a.useState)(!1),I=Object(s.a)(B,2),M=I[0],P=I[1];Object(a.useEffect)((function(){Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/api/persons");case 2:n=e.sent,c(t.concat(n.data));case 4:case"end":return e.stop()}}),e)})))()}),[]);var U=function(){var e=Object(i.a)(l.a.mark((function e(n){var a,r,u,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!(a=t.find((function(e){return e.name===h})))){e.next=23;break}if(!window.confirm("".concat(h," is already added to the phonebook. Would you like to replace the number?"))){e.next=21;break}return e.prev=4,e.next=7,k(a);case 7:r=e.sent,c(t.map((function(e){return e.id!==r.id?e:r.data}))),P(!1),J("Updated ".concat(r.data.name,"'s number")),setTimeout((function(){J(null)}),5e3),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(4),P(!0),J("".concat(e.t0.response.data.error,"}")),setTimeout((function(){J(null)}),5e3);case 19:g(""),C("");case 21:e.next=41;break;case 23:return u={name:h,number:O},e.prev=24,e.next=27,v(u);case 27:o=e.sent,P(!1),c(t.concat(o.data.person)),J("Added ".concat(o.data.person.name," to phonebook")),setTimeout((function(){J(null)}),5e3),e.next=39;break;case 34:e.prev=34,e.t1=e.catch(24),P(!0),J("".concat(e.t1.response.data.error)),setTimeout((function(){J(null)}),5e3);case 39:g(""),C("");case 41:case"end":return e.stop()}}),e,null,[[4,14],[24,34]])})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(f,{message:A,isError:M}),r.a.createElement(d,{handleSearchChange:function(e){y(e.target.value)},newSearch:N}),r.a.createElement(m,{handleClick:U,handleNameChange:function(e){g(e.target.value)},handleNumberChange:function(e){C(e.target.value)},newName:h,newNumber:O}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(p,{persons:""===N?t:t.filter((function(e){return e.name.match(N)})),handleDelete:function(e){if(window.confirm("Are you sure you want to delete?")){var n=e.target.dataset.id;E(n),c(t.filter((function(e){return e.id!==n})))}}}))};t(39);u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ff202360.chunk.js.map