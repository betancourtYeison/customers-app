(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},106:function(e,t,n){e.exports=n(218)},176:function(e,t,n){},218:function(e,t,n){"use strict";n.r(t);var r,a,c=n(0),o=n.n(c),i=n(99),u=n.n(i),l=n(15),s=n(6),m=n(101),d=n.n(m),p=n(40),h=n(41),f=n(220),b=Object(f.a)((r={},Object(p.a)(r,"FETCH_CUSTOMERS",function(e,t){return Object(h.a)(t.payload)}),Object(p.a)(r,"UPDATE_CUSTOMER",function(e,t){var n=t.payload;return e.reduce(function(e,t){return t.id===n.id?[].concat(Object(h.a)(e),[n]):[].concat(Object(h.a)(e),[t])},[])}),Object(p.a)(r,"INSERT_CUSTOMER",function(e,t){return[].concat(Object(h.a)(e),[t.payload])}),Object(p.a)(r,"DELETE_CUSTOMER",function(e,t){return e.filter(function(e){return e.id!==t.payload})}),r),[]),E=n(222),O=Object(s.c)({customers:b,form:E.a,user:function(e,t){return{permissions:["CUSTOMER_LIST","CUSTOMER_VIEW","CUSTOMER_EDIT"]}}}),v=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,j=Object(s.e)(O,{},v(Object(s.a)(d.a))),y=(n(176),n(8)),C=n(9),S=n(11),k=n(10),g=n(12),w=n(18),N=n(30),T=(n(89),n(102)),B=n.n(T),D=function(e){return o.a.createElement("div",{className:"app-header"},o.a.createElement("h1",null,e.title))},U=function(e){var t=e.header,n=e.body;e.footer;return o.a.createElement("div",{className:"app-frame"},o.a.createElement(D,{title:t}),o.a.createElement("div",null,n),o.a.createElement("div",null,o.a.createElement("p",null,"Aplicaci\xf3n Simple de Clientes")))},_=function(e){var t=e.children;return o.a.createElement("div",{className:"customers-actions"},o.a.createElement("div",null,t))},M=function(e){function t(){var e,n;Object(y.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(S.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(a)))).handleOnClick=function(){n.props.history.push("/customers")},n}return Object(g.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return o.a.createElement(U,{header:"Inicio",body:o.a.createElement("div",null,o.a.createElement("img",{src:B.a,className:"App-logo",alt:"logo"}),o.a.createElement(_,null,o.a.createElement("button",{onClick:this.handleOnClick},"Listado de clientes")))})}}]),t}(c.Component),R=Object(N.f)(M),A=function(e){var t=e.name,n=e.editAction,r=e.delAction,a=e.urlPath,c=e.dni;return o.a.createElement("div",{className:"customer-list-item"},o.a.createElement("div",{className:"field"},o.a.createElement(w.b,{to:"".concat(a).concat(c)},t)),o.a.createElement("div",{className:"field"},o.a.createElement(w.b,{to:"".concat(a).concat(c,"/edit")},n)),o.a.createElement("div",{className:"field"},o.a.createElement(w.b,{to:"".concat(a).concat(c,"/del")},r)))},P=function(e){return function(t){var n=function(n){function r(){return Object(y.a)(this,r),Object(S.a)(this,Object(k.a)(r).apply(this,arguments))}return Object(g.a)(r,n),Object(C.a)(r,[{key:"render",value:function(){var n=this.props.user.permissions;return e.every(function(e){return n.indexOf(e)>=0})?o.a.createElement(t,this.props):o.a.createElement("div",null,o.a.createElement("i",null,"No tiene permisos de acceso"))}}]),r}(c.Component);return Object(l.b)(function(e){return{user:e.user}})(n)}},I=P(["CUSTOMER_LIST"])(function(e){var t=e.customers,n=e.urlPath;return o.a.createElement("div",{className:"customers-list"},t.map(function(e){return o.a.createElement(A,{key:e.dni,name:e.name,editAction:"Editar",delAction:"Eliminar",urlPath:n,dni:e.dni})}))}),x=n(223),F="".concat("http://localhost:3001/","customers"),L=Object(x.a)("FETCH_CUSTOMERS",(a=F,function(){return fetch(a).then(function(e){return e.json()})})),V=n(104),H=function(e){return e.customers},J=Object(V.a)(function(e,t){return e.customers.find(function(e){return e.dni===t.dni})},function(e){return e}),W=function(e){function t(){var e,n;Object(y.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(S.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(a)))).handleOnBack=function(){n.props.history.goBack()},n.handleAddNew=function(){n.props.history.push("/customers/new")},n.renderBody=function(e){return o.a.createElement("div",null,o.a.createElement(I,{customers:e,urlPath:"/customers/"}),o.a.createElement(_,null,o.a.createElement("button",{onClick:n.handleAddNew},"Nuevo Cliente"),o.a.createElement("button",{onClick:n.handleOnBack},"Volver")))},n}return Object(g.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){0===this.props.customers.length&&this.props.fetchCustomers()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(U,{header:"Listado de clientes",body:this.renderBody(this.props.customers)}))}}]),t}(c.Component);W.defaultProps={customers:[]};var q,X={fetchCustomers:L},z=Object(N.f)(Object(l.b)(function(e){return{customers:H(e)}},X)(W)),$=n(221),G=n(219),K=function(e){function t(){var e,n;Object(y.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(S.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(a)))).renderField=function(e){var t=e.input,r=e.meta,a=e.type,c=e.label,i=e.withFocus,u=e.id;return o.a.createElement("div",null,o.a.createElement("label",{htmlFor:u},c),o.a.createElement("input",Object.assign({id:u,ref:i&&function(e){return n.txt=e}},t,{type:a||"text"})),r.touched&&r.error&&o.a.createElement("span",null,r.error))},n.isNumber=function(e){return isNaN(Number(e))&&"El campo debe ser un n\xfamero"},n.toUpperCase=function(e){return e&&e.toUpperCase()},n.toNumber=function(e){return e&&Number(e)},n}return Object(g.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){this.txt&&this.txt.focus()}},{key:"render",value:function(){var e=this.props,t=e.handleSubmit,n=e.submitting,r=e.onBack,a=e.pristine,c=e.submitSucceeded;return o.a.createElement("div",null,o.a.createElement("h2",null,"Datos del cliente"),o.a.createElement("form",{onSubmit:t},o.a.createElement($.a,{withFocus:!0,id:"name",name:"name",component:this.renderField,type:"text",label:"Nombre:",parse:this.toUpperCase}),o.a.createElement($.a,{id:"dni",name:"dni",component:this.renderField,type:"text",label:"DNI:"}),o.a.createElement($.a,{id:"age",name:"age",component:this.renderField,type:"number",validate:this.isNumber,label:"Edad:",parse:this.toNumber}),o.a.createElement(_,null,o.a.createElement("button",{type:"submit",disabled:a||n},"Aceptar"),o.a.createElement("button",{type:"button",disabled:n,onClick:r},"Cancelar")),o.a.createElement(N.a,{when:!a&&!c,message:"Se perder\xe1n los datos si continua"})))}}]),t}(c.Component),Q=Object(G.a)({form:"CustomerEdit",validate:function(e){var t={};return e.name||(t.name="Este campo es requerido"),e.dni||(t.dni="Este campo es requerido"),e.age||(t.age="Este campo es requerido"),t}})(K),Y=P(["CUSTOMER_EDIT"])((q=Q,function(e){function t(){return Object(y.a)(this,t),Object(S.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return o.a.createElement(q,Object.assign({},this.props,{initialValues:this.props,enableReinitialize:!0}))}}]),t}(c.Component))),Z=P(["CUSTOMER_VIEW"])(function(e){var t=e.id,n=e.name,r=e.dni,a=e.age,c=e.onBack,i=e.isDelele,u=e.onDelete;return o.a.createElement("div",null,o.a.createElement("div",{className:"customer-data"},o.a.createElement("h2",null,"Datos del cliente"),o.a.createElement("div",null,o.a.createElement("strong",null,"Nombre"),o.a.createElement("i",null,n)),o.a.createElement("div",null,o.a.createElement("strong",null,"DNI"),o.a.createElement("i",null,r)),o.a.createElement("div",null,o.a.createElement("strong",null,"Edad"),o.a.createElement("i",null,a))),o.a.createElement(_,null,o.a.createElement("button",{type:"button",onClick:c},"Volver"),i&&o.a.createElement("button",{type:"button",onClick:function(){u(t)}},"Eliminar")))}),ee=Object(x.a)("UPDATE_CUSTOMER",function(e,t){return function(e,t,n){return function(){return fetch("".concat(e,"/").concat(t),{method:"PUT",body:JSON.stringify(n),headers:new Headers({"Content-type":"application/json"})}).then(function(e){return e.json()}).then(function(e){return e.error?Promise.reject(e.validation):e})}}(F,e,t)()}),te=Object(x.a)("DELETE_CUSTOMER",function(e){return function(e,t){return function(){return fetch("".concat(e,"/").concat(t),{method:"DELETE",headers:new Headers({"Content-type":"application/json"})}).then(function(e){return e.json()}).then(function(e){return e.error?Promise.reject(e.validation):t})}}(F,e)()}),ne=n(105),re=function(e){function t(){var e,n;Object(y.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(S.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(a)))).handleOnDelete=function(e){return n.props.deleteCustomer(e).then(function(e){if(e.error)throw new ne.a(e.payload);n.props.history.goBack()})},n.handleOnBack=function(){n.props.history.goBack()},n.handleOnSubmitSuccess=function(){n.props.history.goBack()},n.handleOnSubmit=function(e){var t=e.id;return n.props.updateCustomer(t,e).then(function(e){if(e.error)throw new ne.a(e.payload)})},n.renderCustomerControl=function(e,t){var r=e?Y:Z;return o.a.createElement(r,Object.assign({},n.props.customer,{onSubmit:n.handleOnSubmit,onSubmitSuccess:n.handleOnSubmitSuccess,onBack:n.handleOnBack,isDelele:!!t,onDelete:n.handleOnDelete}))},n.renderBody=function(){return o.a.createElement(N.b,{path:"/customers/:dni/edit",children:function(e){var t=e.match;return o.a.createElement(N.b,{path:"/customers/:dni/del",children:function(e){var r=e.match;return n.renderCustomerControl(t,r)}})}})},n}return Object(g.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){this.props.customer||this.props.fetchCustomers()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(U,{header:"Cliente ".concat(this.props.dni),body:this.renderBody()}))}}]),t}(c.Component),ae={fetchCustomers:L,updateCustomer:ee,deleteCustomer:te},ce=Object(N.f)(Object(l.b)(function(e,t){return{customer:J(e,t)}},ae)(re)),oe=Object(x.a)("INSERT_CUSTOMER",function(e){return(t=F,n=e,function(){return fetch("".concat(t),{method:"POST",body:JSON.stringify(n),headers:new Headers({"Content-type":"application/json"})}).then(function(e){return e.json()}).then(function(e){return e.error?Promise.reject(e.validation):e})})();var t,n}),ie=function(e){function t(){var e,n;Object(y.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(S.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(a)))).handleOnBack=function(){n.props.history.goBack()},n.handleOnSubmitSuccess=function(){n.props.history.goBack()},n.handleOnSubmit=function(e){return n.props.insertCustomer(e).then(function(e){if(e.error)throw new ne.a(e.payload)})},n.renderBody=function(e){return o.a.createElement(Y,Object.assign({},n.props.customer,{onSubmit:n.handleOnSubmit,onSubmitSuccess:n.handleOnSubmitSuccess,onBack:n.handleOnBack}))},n}return Object(g.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(U,{header:"Creaci\xf3n de nuevo cliente",body:this.renderBody()}))}}]),t}(c.Component);ie.defaultProps={};var ue={insertCustomer:oe},le=Object(N.f)(Object(l.b)(function(e){return{}},ue)(ie)),se=function(e){function t(){return Object(y.a)(this,t),Object(S.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return o.a.createElement(w.a,{basename:"/customers-app"},o.a.createElement("div",{className:"App"},o.a.createElement(N.b,{exact:!0,path:"/",component:R}),o.a.createElement(N.b,{exact:!0,path:"/customers",component:z}),o.a.createElement(N.d,null,o.a.createElement(N.b,{path:"/customers/new",component:le}),o.a.createElement(N.b,{path:"/customers/:dni",render:function(e){return o.a.createElement(ce,{dni:e.match.params.dni})}}))))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=o.a.createElement(l.a,{store:j},o.a.createElement(se,null));u.a.render(me,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.cabd864c.chunk.js.map