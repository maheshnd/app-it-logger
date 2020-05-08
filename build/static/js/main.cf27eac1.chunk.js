(this["webpackJsonpit-logger"]=this["webpackJsonpit-logger"]||[]).push([[0],{21:function(e,t,a){e.exports=a(36)},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),l=a.n(r),s=(a(26),a(4)),o=a.n(s),i=a(1),u=a(2),m=a.n(u),d=a(6),p=function(){return{type:"SET_LOADING"}},E=Object(i.b)(null,{searchLogs:function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){var n,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,p(),t.next=4,fetch("/api/logs/".concat(e));case 4:return n=t.sent,t.next=7,n.json();case 7:c=t.sent,a({type:"SEARCH_LOGS",payload:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:"GET_LOGS",payload:"error.response.statusText"});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.searchLogs;return c.a.createElement("nav",{style:{marginBottom:"30px"},className:"blue"},c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement("form",null,c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{id:"search",type:"search",placeholder:"Search Logs",onChange:function(e){return t(e.target.value)}}),c.a.createElement("label",{className:"label-icon",htmlFor:"search"},c.a.createElement("i",{className:"material-icons"},"search")),c.a.createElement("i",{className:"material-icons"},"close")))))})),f=function(){return c.a.createElement("div",{className:"fixed-action-btn"},c.a.createElement("a",{href:"#add-log-modal",className:"btn-floating btn-large blue darken-2 modal-trigger"},c.a.createElement("i",{className:"large material-icons"},"add")),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"#tech-list-modal",className:"btn-floating green modal-trigger"},c.a.createElement("i",{className:"material-icons"},"person"))),c.a.createElement("li",null,c.a.createElement("a",{href:"#add-tech-modal",className:"btn-floating red modal-trigger"},c.a.createElement("i",{className:"material-icons"},"person_add")))))},h=a(5),g=function(){return function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(),e.next=4,fetch("/api/techs");case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,console.log(n),t({type:"GET_TECHS",payload:n}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t({type:"TECHS_ERROR",payload:e.t0.response});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},v=function(){return{type:"SET_LOADING"}},b=Object(i.b)((function(e){return{tech:e.tech}}),{getTechs:g})((function(e){var t=e.getTechs,a=e.tech,r=a.techs,l=a.loading;return Object(n.useEffect)((function(){t()}),[]),!l&&null!==r&&r.map((function(e){return c.a.createElement("option",{value:"".concat(e.firstName," ").concat(e.lastName),kay:e.id},e.firstName," ",e.lastName)}))})),y={width:"75%",hight:"75%"},N=Object(i.b)(null,{addLogs:function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){var n,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,p(),t.next=4,fetch("/api/logs",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:c=t.sent,a({type:"ADD_LOG",payload:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:"GET_LOGS",payload:"error.response.statusText"});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addLogs,a=Object(n.useState)(""),r=Object(h.a)(a,2),l=r[0],s=r[1],i=Object(n.useState)(!1),u=Object(h.a)(i,2),m=u[0],d=u[1],p=Object(n.useState)(""),E=Object(h.a)(p,2),f=E[0],g=E[1];return c.a.createElement("div",{id:"add-log-modal",className:"modal",style:{modalStyle:y}},c.a.createElement("div",{className:"modal-content"},c.a.createElement("h4",null,"Enter system log"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"text",name:"message",value:l,onChange:function(e){return s(e.target.value)}}),c.a.createElement("label",{htmlFor:"message",className:"active"},"Log Message"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field"},c.a.createElement("select",{name:"tech",value:f,className:"browser-default",onChange:function(e){return g(e.target.value)}},c.a.createElement("option",{value:"",disabled:!0},"Select Technician"),c.a.createElement(b,null)))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field"},c.a.createElement("p",null,c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",id:"indeterminate-checkbox",checked:m,value:m,onChange:function(e){return d(!m)}}),c.a.createElement("span",null,"Needs Attention")))))),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("a",{href:"#!",onClick:function(){if(""===l||""===f)o.a.toast({html:"Please enter a message and tech"});else{var e={message:l,attention:m,tech:f,date:new Date};t(e),d(""),s(""),g(""),o.a.toast({html:"Log added by ".concat(f)})}},className:"waves-effect blue waves-light btn"},"Enter")," ",c.a.createElement("a",{href:"#!",className:"modal-close waves-effect waves-blue waves-light btn"},"Cancel")))})),O={width:"75%",hight:"75%"},j=Object(i.b)((function(e){return{log:e.log}}),{clearCurrent:function(){return{type:"CLEAR_CURRENT"}},updateLog:function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){var n,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,p(),t.next=4,fetch("/api/logs/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:c=t.sent,a({type:"UPDATE_LOG",payload:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:"GET_LOGS",payload:"error.response.statusText"});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.log.current,a=e.clearCurrent,r=e.updateLog,l=Object(n.useState)(""),s=Object(h.a)(l,2),i=s[0],u=s[1],m=Object(n.useState)(!1),d=Object(h.a)(m,2),p=d[0],E=d[1],f=Object(n.useState)(""),g=Object(h.a)(f,2),v=g[0],y=g[1];console.log("Testing current",t),Object(n.useEffect)((function(){t&&(E(t.attention),u(t.message),y(t.tech)),console.log("Testing current use",t)}),[t]);return c.a.createElement("div",{id:"edit-log-modal",className:"modal",style:{modalStyle:O}},c.a.createElement("div",{className:"modal-content"},c.a.createElement("h4",null,"Enter system log"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"text",name:"message",value:i,onChange:function(e){return u(e.target.value)}}),c.a.createElement("label",{htmlFor:"message",className:"active"},"Log Message"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field"},c.a.createElement("select",{name:"tech",value:v,className:"browser-default",onChange:function(e){return y(e.target.value)}},c.a.createElement("option",{value:"",disabled:!0},"Select Technician"),c.a.createElement(b,null)))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field"},c.a.createElement("p",null,c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",id:"indeterminate-checkbox",checked:p,value:p,onChange:function(e){return E(!p)}}),c.a.createElement("span",null,"Needs Attention")))))),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("a",{href:"#!",onClick:function(){if(""===i||""===v)o.a.toast({html:"Please enter a message and tech"});else{var e={message:i,attention:p,tech:v,date:new Date,id:t.id};r(e),a(),E(""),u(""),y(""),o.a.toast({html:"Log successfully updated by ".concat(v)})}},className:"waves-effect blue waves-light btn"},"Update")," ",c.a.createElement("a",{href:"#!",className:"modal-close waves-effect waves-blue waves-light btn"},"Cancel")))})),T=Object(i.b)(null,{addTech:function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){var n,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v(),t.next=4,fetch("/api/techs",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:c=t.sent,console.log("Data.....",c),a({type:"ADD_TECH",payload:c}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),a({type:"TECHS_ERROR",payload:t.t0.response});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addTech,a=Object(n.useState)(""),r=Object(h.a)(a,2),l=r[0],s=r[1],i=Object(n.useState)(""),u=Object(h.a)(i,2),m=u[0],d=u[1];return c.a.createElement("div",{id:"add-tech-modal",className:"modal"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("h4",null,"Add New Technician"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"text",name:"firstName",value:l,onChange:function(e){return s(e.target.value)}}),c.a.createElement("label",{htmlFor:"firstName",className:"active"},"First Name"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"text",name:"lastName",value:m,onChange:function(e){return d(e.target.value)}}),c.a.createElement("label",{htmlFor:"lastName",className:"active"},"Last Name")))),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("a",{href:"#!",onClick:function(){if(""===l||""===m)o.a.toast({html:"Please enter the fist and last name"});else{var e={firstName:l,lastName:m};t(e),console.log("TTTTT",e),o.a.toast({html:"".concat(l," added as tech")}),s(""),d("")}},className:"waves-effect blue waves-light btn"},"Enter")," ",c.a.createElement("a",{href:"#!",className:"modal-close waves-effect waves-blue waves-light btn"},"Cancel")))})),w=a(18),x=a.n(w),L=Object(i.b)(null,{deleteLog:function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,p(),t.next=4,fetch("/api/logs/".concat(e),{method:"DELETE"});case 4:a({type:"DELETE_LOG",payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"GET_LOGS",payload:"error.response.statusText"});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},setCurrent:function(e){return{type:"SET_CURRENT",payload:e}}})((function(e){var t=e.log,a=e.deleteLog,n=e.setCurrent;return c.a.createElement("li",{className:"collection-item"},c.a.createElement("div",null,c.a.createElement("a",{href:"#edit-log-modal",className:"modal-trigger ".concat(t.attention?"red-text":"blue-text"),onClick:function(){return n(t)}},t.message),c.a.createElement("br",null),c.a.createElement("span",{className:"grey-text"},c.a.createElement("span",{className:"black-text"},"ID #",t.id)," last updated by"," ",c.a.createElement("span",{className:"black-text"},t.tech)," on"," ",c.a.createElement(x.a,{format:"MMMM Do YYYY, h:mm:ss: a"},t.date)),c.a.createElement("a",{href:"#!",onClick:function(){a(t._id),o.a.toast({html:"Log:- ".concat(t.name," deleted successfully !!")})},className:"secondary-content"},c.a.createElement("i",{className:"material-icons grey-text"},"delete"))))})),S=function(){return c.a.createElement("div",{className:"progress "},c.a.createElement("div",{className:"indeterminate"}))},C=Object(i.b)((function(e){return{log:e.log}}),{getLogs:function(){return function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(),e.next=4,fetch("/api/logs");case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,t({type:"GET_LOGS",payload:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:"GET_LOGS",payload:"error.response.statusText"});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.log,a=t.logs,r=t.loading,l=e.getLogs;return Object(n.useEffect)((function(){l()}),[]),r||null===a?c.a.createElement(S,null):c.a.createElement("ul",{className:"collection with-header"},c.a.createElement("li",{className:"collection-header"},c.a.createElement("h4",{className:"center"},"System Logs")),r||0!==a.length?a.map((function(e){return c.a.createElement(L,{key:e.id,log:e})})):c.a.createElement("p",{className:"center"},"No logs to show..."))})),_=Object(i.b)(null,{deleteTech:function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v(),t.next=4,fetch("/api/techs/".concat(e),{method:"DELETE"});case 4:a({type:"DELETE_TECH",payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"TECHS_ERROR",payload:t.t0.response.statusTex});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.tech,a=e.deleteTech;return c.a.createElement("li",{className:"collection-item"},c.a.createElement("div",null,t.firstName," ",t.lastName,c.a.createElement("a",{href:"#!",className:"secondary-content"},c.a.createElement("i",{className:"material-icons grey-text",onClick:function(){return a(t._id)}},"delete"))))})),k=function(){var e=Object(i.d)((function(e){return e.tech})),t=Object(i.c)(),a=e.techs,r=e.loading;return Object(n.useEffect)((function(){t(g())}),[]),console.log("Testing ...",a),c.a.createElement("div",{id:"tech-list-modal",className:"modal"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("h4",null,"Technician List "),c.a.createElement("ul",{className:"collection"},!r&&null!==a&&a.map((function(e){return c.a.createElement(_,{tech:e,key:e._id})})))),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("a",{href:"#!",className:"modal-close waves-effect waves-blue waves-light btn"},"Close")))},G=a(7),R=a(19),D=a(20),A=a(11),H=a(3),M={logs:null,current:null,loading:!1,error:null},P={techs:null,loading:!1,error:null},U=Object(G.combineReducers)({log:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LOGS":return Object(H.a)({},e,{logs:t.payload,loading:!1});case"ADD_LOG":return Object(H.a)({},e,{logs:[].concat(Object(A.a)(e.logs),[t.payload])});case"DELETE_LOG":return Object(H.a)({},e,{logs:e.logs.filter((function(e){return e._id!==t.payload})),loading:!1});case"SET_CURRENT":return Object(H.a)({},e,{current:t.payload});case"CLEAR_CURRENT":return Object(H.a)({},e,{current:null});case"UPDATE_LOG":return Object(H.a)({},e,{logs:e.logs.map((function(e){return e.id===t.payload.id?t.payload:e}))});case"SEARCH_LOGS":return Object(H.a)({},e,{logs:t.payload});case"SET_LOADING":return Object(H.a)({},e,{loading:!0});case"LOGS_ERROR":return console.log(t.payload),Object(H.a)({},e,{error:t.payload,loading:!1});default:return e}},tech:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TECHS":return Object(H.a)({},e,{techs:t.payload});case"ADD_TECH":return Object(H.a)({},e,{techs:[].concat(Object(A.a)(e.techs),[t.payload]),loading:!1});case"DELETE_TECH":return Object(H.a)({},e,{techs:e.techs.filter((function(e){return e._id!==t.payload})),loading:!1});case"SET_LOADING":return Object(H.a)({},e,{loading:!0});case"TECHS_ERROR":return console.log("Error",t.payload),Object(H.a)({},e,{error:t.payload,loading:!1});default:return e}}}),F=[D.a],I=Object(G.createStore)(U,{},Object(R.composeWithDevTools)(G.applyMiddleware.apply(void 0,F))),J=(a(35),function(){return Object(n.useEffect)((function(){o.a.AutoInit()})),c.a.createElement(i.a,{store:I},c.a.createElement(n.Fragment,null,c.a.createElement(E,null),c.a.createElement("div",{className:"container"},c.a.createElement(f,null),c.a.createElement(N,null),c.a.createElement(j,null),c.a.createElement(T,null),c.a.createElement(k,null),c.a.createElement(C,null))))});l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(J,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.cf27eac1.chunk.js.map