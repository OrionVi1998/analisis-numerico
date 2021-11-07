(this["webpackJsonpanalisis-numerico"]=this["webpackJsonpanalisis-numerico"]||[]).push([[0],{282:function(module,__webpack_exports__,__webpack_require__){"use strict";var I_Programing_analisis_numerico_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(198),semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(570),semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(175),semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(123),mathjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(176),d3__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(20),immutability_helper__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(77),immutability_helper__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_8__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(4),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__),range=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t-e+1;return Array.from({length:c},(function(t,c){return e+c}))};function MetodoRomberg(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)([[],[],[],[]]),c=Object(I_Programing_analisis_numerico_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(t,2),n=c[0],a=c[1],r=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("x^2+2x+5"),l=Object(I_Programing_analisis_numerico_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(r,2),o=l[0],i=l[1],j=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(4),s=Object(I_Programing_analisis_numerico_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(j,2),u=s[0],_=s[1],b=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),O=Object(I_Programing_analisis_numerico_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(b,2),d=O[0],x=O[1],h=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(2),f=Object(I_Programing_analisis_numerico_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(h,2),p=f[0],m=f[1];return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){a(Romberg(u,d,p,o))}),[]),Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){try{console.log(Romberg(u,d,p,o)),a(Romberg(u,d,p,o))}catch(e){console.error(e)}}),[o,u,p,d]),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a,{divided:!0,columns:"2",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a.Row,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.a.Column,{width:"16",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.a,{fluid:!0,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.a,{label:"Equation: f(x):",placeholder:"f(x)",value:o,onChange:function(e,t){var c=t.value;return i(c)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.a,{disabled:!0,min:"1",max:"8",label:"Profundidad: ".concat(u),placeholder:"max prfundidad",value:u,onChange:function(e,t){var c=t.value;return _(Number(2*c))}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.a,{label:"Minimo",placeholder:"X Minimo",value:d,onChange:function(e,t){var c=t.value;return x(c)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.a,{label:"Maximo",placeholder:"X Maximo",value:p,onChange:function(e,t){var c=t.value;return m(c)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.a,{celled:!0,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.a.Header,{children:range(0,u-1).map((function(e){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.a.HeaderCell,{children:["n(",Math.pow(2,e),")"]})}))}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.a.Body,{children:range(0,u-1).map((function(e){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.a.Row,{children:n[e].map((function(e){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.a.Cell,{children:e})}))})}))})]})]})})})})})}function Trapecio(e,t,c,n){var a=(t-e)/c,r=[],l=e;for(r.push({x:e,y:Object(mathjs__WEBPACK_IMPORTED_MODULE_6__.b)(n.replaceAll("x","(".concat(e,")")))});r.length!==c+1;)r.push({x:l+a,y:Object(mathjs__WEBPACK_IMPORTED_MODULE_6__.b)(n.replaceAll("x","(".concat(l+a,")")))}),l+=a;function o(){return{x:d3__WEBPACK_IMPORTED_MODULE_7__.f(r,(function(e){return e.x})),y:d3__WEBPACK_IMPORTED_MODULE_7__.f(r,(function(e){return e.y}))}}function i(){return{x:d3__WEBPACK_IMPORTED_MODULE_7__.e(r,(function(e){return e.x})),y:d3__WEBPACK_IMPORTED_MODULE_7__.e(r,(function(e){return e.y}))}}return 2===r.length?Object(mathjs__WEBPACK_IMPORTED_MODULE_6__.b)("(".concat(a,"/2)*(").concat(o().y," +  ").concat(i().y,")")):Object(mathjs__WEBPACK_IMPORTED_MODULE_6__.b)("(".concat(a,"/2)*(").concat(o().y," + 2*(").concat(r.map((function(e){return e.y})).slice(1,r.length-1).join(" + "),") + ").concat(i().y,")"))}function Romberg(profundidad,minPoint,maxPoint,eq){var resArray=range(0,profundidad-1).map((function(e){return[]}));range(0,profundidad-1).map((function(e){resArray[e]=range(0,e)})),resArray[resArray.length-1]=range(0,profundidad-1).map((function(e){return Trapecio(Number(minPoint),Number(maxPoint),Math.pow(2,e),eq)}));for(var _loop=function _loop(i){resArray[i]=resArray[i].map((function(n){var k=profundidad-i;return eval("(((4 ^ (".concat(k," - 1)) * (").concat(resArray[i+1][n+1],")) - (").concat(resArray[i+1][n],")) / ((4 ^ (").concat(k," - 1)) - 1)"))}))},i=resArray.length-2;-1!==i;i--)_loop(i);return resArray.reverse()}__webpack_exports__.a=MetodoRomberg},407:function(e,t,c){},424:function(e,t){},568:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),r=c(90),l=c.n(r),o=(c(407),c(408),c(163)),i=c(30),j=c(570),s=c(586),u=c(4);var _=function(){return Object(u.jsx)(j.a,{placeholder:!0,style:{textAlign:"center"},children:Object(u.jsx)(s.a,{children:"Estos son los tps y implementaciones desarollados"})})},b=c(584);var O=function(e){return Object(u.jsx)(b.a,{inverted:!0,style:{height:"5%"},children:[{name:"Home",link:"/"},{name:"Ejercicios: 13, 14, 15",link:"/ejercicios_a"},{name:"Biseccion",link:"/biseccion"},{name:"Punto Fijo",link:"/punto_fijo"},{name:"Newton Raphson",link:"/newton_raphson"},{name:"Polinomio de Lagrange",link:"/polinomio_lagrange"},{name:"Metodos de Los Trapecios",link:"/metodo_trapecios"},{name:"Metodo de Romberg",link:"/metodo_romberg"},{name:"Metodo de Gauss",link:"/metodo_gauss"}].map((function(e){return Object(u.jsx)(b.a.Item,{as:o.b,to:e.link,name:e.name,children:e.name})}))})},d=c(15),x=c(198),h=c(123);var f=function(e){var t=e.ej,c=Object(n.useState)([]),a=Object(d.a)(c,2),r=a[0],l=a[1];Object(n.useEffect)((function(){13===t&&l(o(30)),14===t&&l(i(30)),15===t&&l(j(25))}),[t]);var o=function(e){for(var t,c,n=[];0!==e;)t=Math.pow(2,-e),c=(Math.exp(t)-Math.exp(0))/t,n.push({i:e,h:t,vv:Math.exp(0),va:c,Ea:Math.abs(c-Math.exp(0)),Er:Math.abs(c-Math.exp(0))/Math.exp(0)}),e-=1;return n.reverse()},i=function(e){for(var t,c,n=[];0!==e;)t=Math.pow(2,-e),c=(Math.exp(t)-Math.exp(-t))/(2*t),n.push({i:e,h:t,vv:Math.exp(0),va:c,Ea:Math.abs(c-Math.exp(0)),Er:Math.abs(c-Math.exp(0))/Math.exp(0)}),e-=1;return n.reverse()},j=function(e){for(var t=[],c=function e(t){return 0===t?Math.log(1.1):1/t-10*e(t-1)};0!==e;)t.push({i:e,h:"N/A",vv:c(e),va:"N/A",Ea:"N/A",Er:"N/A"}),e-=1;return t.push({i:0,h:"N/A",vv:Math.log(1.1),va:"N/A",Ea:"N/A",Er:"N/A"}),t.reverse()};return Object(u.jsxs)(h.a,{celled:!0,style:{width:"100%"},children:[Object(u.jsx)(h.a.Header,{children:Object(u.jsxs)(h.a.Row,{children:[Object(u.jsx)(h.a.HeaderCell,{children:"i"}),Object(u.jsx)(h.a.HeaderCell,{children:"h"}),Object(u.jsx)(h.a.HeaderCell,{children:"Valor Verdadero"}),Object(u.jsx)(h.a.HeaderCell,{children:"Valor approx."}),Object(u.jsx)(h.a.HeaderCell,{children:"Error Absoluto"}),Object(u.jsx)(h.a.HeaderCell,{children:"Error Relativo"})]})}),Object(u.jsx)(h.a.Body,{children:r.map((function(e){return Object(u.jsxs)(h.a.Row,{children:[Object(u.jsx)(h.a.Cell,{children:e.i}),Object(u.jsx)(h.a.Cell,{children:e.h}),Object(u.jsx)(h.a.Cell,{children:e.vv}),Object(u.jsx)(h.a.Cell,{children:e.va}),Object(u.jsx)(h.a.Cell,{children:e.Ea}),Object(u.jsx)(h.a.Cell,{children:e.Er})]})}))})]})};var p=function(e){var t=Object(n.useState)(13),c=Object(d.a)(t,2),a=c[0],r=c[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(b.a,{pointing:!0,secondary:!0,style:{height:"6%"},children:[{name:"Ejercicio 13",value:13},{name:"Ejercicio 14",value:14},{name:"Ejercicio 15",value:15}].map((function(e){return Object(u.jsx)(b.a.Item,{onClick:function(){return r(e.value)},active:e.value===a,children:e.name})}))}),Object(u.jsx)(x.a,{style:{height:"89%",width:"100%"},columns:1,textalign:"center",divided:!0,children:Object(u.jsx)(x.a.Row,{children:Object(u.jsx)(x.a.Column,{children:Object(u.jsx)(f,{ej:a})})})})]})},m=c(585),E=c(582),g=c(135),C=c(175),v=c(569),M=c(2),P=c(176),y=function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(M.Od/2),l=Object(d.a)(r,2),o=l[0],i=l[1],s=Object(n.useState)(.05),_=Object(d.a)(s,2),b=_[0],O=_[1],f=Object(n.useState)(0),p=Object(d.a)(f,2),y=p[0],A=p[1],D=Object(n.useState)([]),R=Object(d.a)(D,2),w=R[0],I=R[1],B=Object(n.useState)([]),S=Object(d.a)(B,2),T=S[0],L=S[1],W=Object(n.useState)(""),k=Object(d.a)(W,2),K=k[0],U=k[1],H=Object(n.useState)("cos(x)-x"),N=Object(d.a)(H,2),F=N[0],q=N[1];Object(n.useEffect)((function(){try{var e;e=-Math.log2(b/(o-c)),Math.ceil(e)!==-1/0&&A(Math.ceil(e))}catch(t){console.log(t)}}),[c,o,b]),Object(n.useEffect)((function(){I([]);try{var e;L([]);var t,n,a,r,l,i=0,j=c,s=o;for(e=[];i!==y&&y<=50;)i+=1,a=(j+s)/2,t=F.replaceAll("x","(".concat(String(j),")")),t=Object(P.b)(t),n=F.replaceAll("x","(".concat(String(s),")")),n=Object(P.b)(n),r=F.replaceAll("x","(".concat(String(a),")")),r=Object(P.b)(r),l={i:i,aa:j,fa:t,falz:String(t*r<0),bb:s,fb:n,fblz:String(n*r<0),rango:"[".concat(j,", ").concat(s,"]"),m:a,fm:r},Math.sign(l.fa)===Math.sign(l.fm)?(j=a,s=l.bb):(j=l.aa,s=a),e.push(l);L(e)}catch(u){console.log(u)}}),[F,c,o,y]);return Object(u.jsxs)(x.a,{rows:"2",columns:"2",divided:!0,children:[Object(u.jsxs)(x.a.Row,{children:[Object(u.jsx)(x.a.Column,{style:{width:"100vw"},children:Object(u.jsxs)(j.a,{children:[Object(u.jsxs)(m.a,{children:[Object(u.jsx)("label",{children:"Funcion"}),Object(u.jsx)(m.a.Input,{placeholder:"Funcion",name:"funcion",value:F,onChange:function(e,t){return q(t.value)}}),Object(u.jsx)("label",{children:"Rango"}),Object(u.jsxs)(m.a.Group,{children:[Object(u.jsx)(m.a.Input,{placeholder:"a",name:"a",value:c,onChange:function(e,t){return a(t.value)}}),Object(u.jsx)(m.a.Input,{placeholder:"b",name:"b",value:o,onChange:function(e,t){return i(t.value)}})]}),Object(u.jsx)(E.a,{}),Object(u.jsxs)("label",{children:["Error:",Object(u.jsx)("br",{}),"(b - a) * 2^(-k) <= error",Object(u.jsx)("br",{}),"k >= -log2(e / (b - a))"]}),Object(u.jsxs)(m.a.Group,{children:[Object(u.jsx)(m.a.Input,{placeholder:"Error",name:"e",value:b,onChange:function(e,t){return O(t.value)}}),Object(u.jsxs)(g.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:["Iteraciones a Realizar",Object(u.jsx)(g.a.Detail,{children:y})]})]})]}),Object(u.jsx)(E.a,{}),Object(u.jsxs)(h.a,{celled:!0,textAlign:"center",children:[Object(u.jsx)(h.a.Header,{children:Object(u.jsxs)(h.a.Row,{children:[Object(u.jsx)(h.a.HeaderCell,{children:" X "}),Object(u.jsx)(h.a.HeaderCell,{children:" f(x) "})]})}),Object(u.jsxs)(h.a.Body,{children:[w.map((function(e){return Object(u.jsxs)(h.a.Row,{children:[Object(u.jsx)(h.a.Cell,{children:e.x}),Object(u.jsx)(h.a.Cell,{children:e.fx})]})})),Object(u.jsxs)(h.a.Row,{children:[Object(u.jsx)(h.a.Cell,{children:Object(u.jsx)(C.a,{placeholder:"Valor de X",value:K,onChange:function(e,t){return U(t.value)}})}),Object(u.jsx)(h.a.Cell,{children:Object(u.jsx)(v.a,{icon:"plus",color:"green",onClick:function(){!function(e){try{var t;t=F.replaceAll("x","(".concat(e,")")),t=Object(P.b)(t);var c=w;void 0===c.find((function(t){return t.x===e}))&&""!==F&&(c.push({x:e,fx:t}),I(c),U(""))}catch(n){console.log(n)}}(K)}})})]})]})]})]})}),Object(u.jsx)(x.a.Column,{})]}),Object(u.jsx)(x.a.Row,{children:Object(u.jsx)(j.a,{style:{width:"100vw"},children:Object(u.jsxs)(h.a,{celled:!0,textAlign:"center",children:[Object(u.jsx)(h.a.Header,{children:Object(u.jsxs)(h.a.Row,{children:[Object(u.jsx)(h.a.HeaderCell,{children:" i "}),Object(u.jsx)(h.a.HeaderCell,{children:" a "}),Object(u.jsx)(h.a.HeaderCell,{children:" f(a) "}),Object(u.jsx)(h.a.HeaderCell,{children:" f(a)<0 "}),Object(u.jsx)(h.a.HeaderCell,{children:" b "}),Object(u.jsx)(h.a.HeaderCell,{children:" f(b) "}),Object(u.jsx)(h.a.HeaderCell,{children:" f(b)<0 "}),Object(u.jsx)(h.a.HeaderCell,{children:" m "}),Object(u.jsx)(h.a.HeaderCell,{children:" f(m) "})]})}),Object(u.jsxs)(h.a.Body,{children:[T.map((function(e){return Object(u.jsxs)(h.a.Row,{children:[Object(u.jsx)(h.a.Cell,{children:e.i}),Object(u.jsx)(h.a.Cell,{active:!0,children:e.aa}),Object(u.jsx)(h.a.Cell,{children:e.fa}),Object(u.jsx)(h.a.Cell,{children:e.falz}),Object(u.jsx)(h.a.Cell,{active:!0,children:e.bb}),Object(u.jsx)(h.a.Cell,{children:e.fb}),Object(u.jsx)(h.a.Cell,{children:e.fblz}),Object(u.jsx)(h.a.Cell,{active:!0,children:e.m}),Object(u.jsx)(h.a.Cell,{children:e.fm})]})})),Object(u.jsx)(h.a.Row,{children:Object(u.jsx)(h.a.Cell,{colSpan:"10",children:Object(u.jsx)(v.a,{icon:"plus",color:"green",onClick:function(){return A(y+1)}})})})]})]})})})]})},A=c(583),D=c(20),R=function(e){var t=e.data,c=e.reload,a=Object(n.useRef)(),r=Object(n.useRef)();return Object(n.useEffect)((function(){var e=50,c=30,n=30,l=30,o=(r.current?r.current.offsetWidth:500)-65,i=D.i(a.current).attr("width",o+l+n).attr("height",500+e+c).style("background-color","lightgrey").append("g").attr("transform","translate(".concat(l,",").concat(n,")")),j=D.h().domain(D.c(t,(function(e){return e.x}))).range([0,o]),s=Object(D.h)().domain(D.c(t,(function(e){return e.x}))).range([500,0]);i.append("g").attr("transform","translate(0, ".concat(500,")")).call(D.a(j)),i.append("g").call(D.b(s));var u=D.d().x((function(e){return j(e.x)})).y((function(e){return s(e.y)}));return i.append("path").datum(t.filter((function(e){return"xy"===e.funcion}))).attr("fill","none").attr("stroke","green").attr("stroke-width",1).attr("d",u),i.append("path").datum(t.filter((function(e){return"fx"===e.funcion}))).attr("fill","none").attr("stroke","red").attr("stroke-width",1).attr("d",u),i.append("path").datum(t.filter((function(e){return"gx"===e.funcion}))).attr("fill","none").attr("stroke","blue").attr("stroke-width",1).attr("d",u),i.append("path").datum(t.filter((function(e){return"answerXY"===e.funcion}))).attr("fill","none").attr("stroke","blue").attr("stroke-width",1).attr("d",u),function(){try{a.current.removeChild(a.current.children[0])}catch(e){console.log(e)}}}),[t,c]),Object(u.jsx)("div",{ref:r,id:"d3LineChartPF",children:Object(u.jsx)("svg",{ref:a})})},w=c(77),I=c.n(w);var B=function(){var e=Object(n.useState)([0,0]),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(n.useLayoutEffect)((function(){function e(){a([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),c},S=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)("(x^2)-(3*x)-(1)"),l=Object(d.a)(r,2),o=l[0],i=l[1],s=Object(n.useState)("((x^2)-1)/3"),_=Object(d.a)(s,2),b=_[0],O=_[1],f=Object(n.useState)(-1),p=Object(d.a)(f,2),E=p[0],C=p[1],M=Object(n.useState)(0),y=Object(d.a)(M,2),w=y[0],S=y[1],T=Object(n.useState)(0),L=Object(d.a)(T,2),W=L[0],k=L[1],K=Object(n.useState)(w),U=Object(d.a)(K,2),H=U[0],N=U[1],F=Object(n.useState)([]),q=Object(d.a)(F,2),G=q[0],X=q[1],z=B(),J=Object(d.a)(z,2),V=J[0],$=J[1];return Object(n.useEffect)((function(){try{var e=[];0===W&&X([{i:0,x:H,gx:Object(P.b)(b.replaceAll("x","(".concat(H,")")))}]);var t=D.g(E,w,.05),c=t.map((function(e){return{funcion:"fx",x:Number(e),y:Object(P.b)(o.replaceAll("x","(".concat(e,")")))}})),n=t.map((function(e){return{funcion:"gx",x:Number(e),y:Object(P.b)(b.replaceAll("x","(".concat(e,")")))}})),r=t.map((function(e){return{funcion:"xy",x:Number(e),y:Number(e)}})),l=t.map((function(e){return{funcion:"answerXY",x:Number(W),y:Number(e)}}));e=e.concat(c).concat(n).concat(r).concat(l),a(e)}catch(i){console.log(i)}}),[o,b,E,w,W,H]),Object(u.jsxs)(x.a,{rows:"2",columns:"2",divided:!0,children:[Object(u.jsxs)(x.a.Row,{children:[Object(u.jsx)(x.a.Column,{children:Object(u.jsx)(j.a,{children:Object(u.jsxs)(m.a,{children:[Object(u.jsx)(g.a,{color:"red",children:"F(x)"}),Object(u.jsx)(m.a.Input,{placeholder:"F(x) (Rojo)",value:o,onChange:function(e,t){return i(t.value)}}),Object(u.jsx)(g.a,{color:"blue",children:"G(x)"}),Object(u.jsx)(m.a.Input,{placeholder:"G(x) (Azul)",value:b,onChange:function(e,t){return O(t.value)}}),Object(u.jsxs)(m.a.Group,{children:[Object(u.jsx)(g.a,{children:"Rango A - B :"}),Object(u.jsx)(m.a.Input,{placeholder:"a",value:E,onChange:function(e,t){return C(t.value)}}),Object(u.jsx)(m.a.Input,{placeholder:"b",value:w,onChange:function(e,t){return S(t.value)}})]}),Object(u.jsx)(g.a,{children:"X0"}),Object(u.jsx)("br",{}),Object(u.jsx)(A.a,{placeholder:"x0",selection:!0,options:[{key:"a",value:E,text:"a = ".concat(E)},{key:"b",value:w,text:"b = ".concat(w)}],value:H,onChange:function(e,t){X([{i:0,x:H,gx:Object(P.b)(b.replaceAll("x","(".concat(H,")")))}]),N(t.value)}})]})})}),Object(u.jsx)(x.a.Column,{children:Object(u.jsx)(j.a,{children:Object(u.jsx)(R,{reload:{width:V,height:$},data:c,rango:{xa:E,xb:w}})})})]}),Object(u.jsx)(x.a.Row,{children:Object(u.jsx)(x.a.Column,{width:"16",children:Object(u.jsx)(j.a,{children:Object(u.jsxs)(h.a,{celled:!0,textAlign:"center",children:[Object(u.jsx)(h.a.Header,{children:Object(u.jsxs)(h.a.Row,{children:[Object(u.jsx)(h.a.HeaderCell,{children:"i"}),Object(u.jsx)(h.a.HeaderCell,{children:"x"}),Object(u.jsx)(h.a.HeaderCell,{children:"g(x)"})]})}),Object(u.jsxs)(h.a.Body,{children:[G.map((function(e){return Object(u.jsxs)(h.a.Row,{children:[Object(u.jsx)(h.a.Cell,{children:e.i}),Object(u.jsx)(h.a.Cell,{children:e.x}),Object(u.jsx)(h.a.Cell,{children:e.gx})]})})),Object(u.jsx)(h.a.Row,{children:Object(u.jsx)(h.a.Cell,{colSpan:"3",children:Object(u.jsx)(v.a,{icon:"plus",color:"green",onClick:function(){try{var e=I()(G,{$push:[{i:G[G.length-1].i+1,x:G[G.length-1].gx,gx:Object(P.b)(b.replaceAll("x","(".concat(G[G.length-1].gx,")")))}]});k(Object(P.b)(b.replaceAll("x","(".concat(e[e.length-1].gx,")")))),X(e)}catch(t){console.log(t)}}})})})]})]})})})})]})},T=function(e){var t=e.data,c=e.reload,a=Object(n.useRef)(),r=Object(n.useRef)();return Object(n.useEffect)((function(){var e=50,c=30,n=30,l=30,o=(r.current?r.current.offsetWidth:500)-75,i=D.i(a.current).attr("width",o+l+n).attr("height",500+e+c).style("background-color","lightgrey").append("g").attr("transform","translate(".concat(l,",").concat(n,")")),j=D.h().domain(D.c(t,(function(e){return e.x}))).range([0,o]),s=Object(D.h)().domain(D.c(t,(function(e){return e.y}))).range([500,0]);i.append("g").attr("transform","translate(0, ".concat(500,")")).call(D.a(j)),i.append("g").call(D.b(s));var u=D.d().x((function(e){return j(e.x)})).y((function(e){return s(e.y)}));return i.append("path").datum(t.filter((function(e){return"fx"===e.funcion}))).attr("fill","none").attr("stroke","green").attr("stroke-width",1).attr("d",u),i.append("path").datum(t.filter((function(e){return"fdx"===e.funcion}))).attr("fill","none").attr("stroke","red").attr("stroke-width",1).attr("d",u),i.append("path").datum(t.filter((function(e){return"fddx"===e.funcion}))).attr("fill","none").attr("stroke","blue").attr("stroke-width",1).attr("d",u),i.append("path").datum(t.filter((function(e){return"fdddx"===e.funcion}))).attr("fill","none").attr("stroke","orange").attr("stroke-width",1).attr("d",u),function(){try{a.current.removeChild(a.current.children[0])}catch(e){console.log(e)}}}),[t,c]),Object(u.jsx)("div",{ref:r,id:"d3LineChartNR",children:Object(u.jsx)("svg",{ref:a})})},L=function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(M.Od/2),l=Object(d.a)(r,2),o=l[0],i=l[1],s=Object(n.useState)("cos(x)-x"),_=Object(d.a)(s,2),b=_[0],O=_[1],f=Object(n.useState)("-(sin(x) + 1)"),p=Object(d.a)(f,2),E=p[0],C=p[1],y=Object(n.useState)("-cos(x)"),R=Object(d.a)(y,2),w=R[0],S=R[1],L=Object(n.useState)("sin(x)"),W=Object(d.a)(L,2),k=W[0],K=W[1],U=Object(n.useState)([]),H=Object(d.a)(U,2),N=H[0],F=H[1],q=Object(n.useState)(o),G=Object(d.a)(q,2),X=G[0],z=G[1],J=Object(n.useState)([]),V=Object(d.a)(J,2),$=V[0],Y=V[1],Q=B(),Z=Object(d.a)(Q,2),ee=Z[0],te=Z[1];return Object(n.useEffect)((function(){try{var e=Object(P.a)(b,"x").toString(),t=Object(P.a)(e,"x").toString(),n=Object(P.a)(t,"x").toString();C(e),S(t),K(n),Y([{i:1,x:X,formula:Object(P.b)("x-((a)/(b))".replaceAll("a",b).replaceAll("b",e).replaceAll("x","(".concat(X,")"))),modulofx:Math.abs(Object(P.b)(b.replaceAll("x","(".concat(X,")"))))}]);var a=[],r=D.g(c,o,.05),l=r.map((function(e){return{funcion:"fx",x:Number(e),y:Object(P.b)(b.replaceAll("x","(".concat(e,")")))}})),i=r.map((function(e){return{funcion:"fdx",x:Number(e),y:Object(P.b)(E.replaceAll("x","(".concat(e,")")))}})),j=r.map((function(e){return{funcion:"fddx",x:Number(e),y:Object(P.b)(w.replaceAll("x","(".concat(e,")")))}})),s=r.map((function(e){return{funcion:"fdddx",x:Number(e),y:Object(P.b)(k.replaceAll("x","(".concat(e,")")))}}));a=a.concat(l).concat(i).concat(j).concat(s),F(a)}catch(u){console.log(u)}}),[b,c,o,X]),Object(u.jsxs)(x.a,{rows:"2",columns:"2",divided:!0,children:[Object(u.jsxs)(x.a.Row,{children:[Object(u.jsx)(x.a.Column,{children:Object(u.jsx)(j.a,{children:Object(u.jsxs)(m.a,{children:[Object(u.jsx)(g.a,{color:"green",children:"F(x)"}),Object(u.jsx)(m.a.Input,{placeholder:"f(x)",value:b,onChange:function(e,t){return O(t.value)}}),Object(u.jsxs)(g.a,{color:"red",pointing:"bottom",children:["F'(x) = ",E]}),Object(u.jsxs)(g.a,{color:"blue",children:["F''(x) = ",w]}),Object(u.jsxs)(g.a,{color:"orange",children:["F''(x) = ",k]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)(m.a.Group,{children:[Object(u.jsx)(g.a,{children:"Rango A - B: "}),Object(u.jsx)(m.a.Input,{placeholder:"punto a",value:c,onChange:function(e,t){return a(t.value)}}),Object(u.jsx)(m.a.Input,{placeholder:"punto b",value:o,onChange:function(e,t){return i(t.value)}})]}),Object(u.jsx)(g.a,{children:"X0: "}),Object(u.jsx)(A.a,{placeholder:"x0",selection:!0,options:[{key:"a",value:c,text:"a = ".concat(c)},{key:"b",value:o,text:"b = ".concat(o)}],value:X,onChange:function(e,t){z(t.value)}})]})})}),Object(u.jsx)(x.a.Column,{children:Object(u.jsx)(j.a,{children:Object(u.jsx)(T,{reload:{width:ee,height:te},data:N})})})]}),Object(u.jsx)(x.a.Row,{children:Object(u.jsx)(x.a.Column,{width:"16",children:Object(u.jsx)(j.a,{children:Object(u.jsxs)(h.a,{celled:!0,textAlign:"center",children:[Object(u.jsx)(h.a.Header,{children:Object(u.jsxs)(h.a.Row,{children:[Object(u.jsx)(h.a.HeaderCell,{children:"i"}),Object(u.jsx)(h.a.HeaderCell,{children:"x"}),Object(u.jsx)(h.a.HeaderCell,{children:"x = x-f/f'"}),Object(u.jsx)(h.a.HeaderCell,{children:"| f(x) |"})]})}),Object(u.jsxs)(h.a.Body,{children:[$.map((function(e){return Object(u.jsxs)(h.a.Row,{children:[Object(u.jsx)(h.a.Cell,{children:e.i}),Object(u.jsx)(h.a.Cell,{children:e.x}),Object(u.jsx)(h.a.Cell,{children:e.formula}),Object(u.jsx)(h.a.Cell,{children:e.modulofx})]})})),Object(u.jsx)(h.a.Row,{children:Object(u.jsx)(h.a.Cell,{colSpan:"4",children:Object(u.jsx)(v.a,{icon:"plus",color:"green",onClick:function(){try{var e=$[$.length-1],t=I()($,{$push:[{i:e.i+1,x:e.formula,formula:Object(P.b)("x-((a)/(b))".replaceAll("a",b).replaceAll("b",E).replaceAll("x","(".concat(e.formula,")"))),modulofx:Math.abs(Object(P.b)(b.replaceAll("x","(".concat(e.x,")"))))}]});Y(t)}catch(c){console.log(c)}}})})})]})]})})})})]})},W=c(83),k=function(e){var t=e.data,c=e.a,a=e.b,r=e.reload,l=Object(n.useRef)(),o=Object(n.useRef)();return Object(n.useEffect)((function(){var e=50,n=30,r=30,i=30,j=(o.current?o.current.offsetWidth:500)-65,s=D.i(l.current).attr("width",j+i+r).attr("height",500+e+n).style("background-color","lightgrey").append("g").attr("transform","translate(".concat(i,",").concat(r,")")),u=D.h().domain([c,a]).range([0,j]),_=Object(D.h)().domain([c,a]).range([500,0]);s.append("g").attr("transform","translate(0, ".concat(500,")")).call(D.a(u)),s.append("g").call(D.b(_));var b=D.d().x((function(e){return u(e.x)})).y((function(e){return _(e.y)})).defined((function(e){return e.y!==1/0}));return s.append("path").datum(t.filter((function(e){return"fx"===e.funcion}))).attr("fill","none").attr("stroke","green").attr("stroke-width",1).attr("d",b),s.append("path").datum(t.filter((function(e){return"px"===e.funcion}))).attr("fill","none").attr("stroke","red").attr("stroke-width",1).attr("d",b),function(){try{l.current.removeChild(l.current.children[0])}catch(e){console.log(e)}}}),[c,a,t,r]),Object(u.jsx)("div",{ref:o,id:"d3LineChartPF",children:Object(u.jsx)("svg",{ref:l})})},K=function(){var e=Object(n.useState)("1/x"),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([{x:"1",fx:"1"},{x:"-1",fx:"-1"},{x:"2",fx:"0.5"}]),l=Object(d.a)(r,2),o=l[0],i=l[1],s=Object(n.useState)(""),_=Object(d.a)(s,2),b=_[0],O=_[1],f=Object(n.useState)(""),p=Object(d.a)(f,2),E=p[0],C=p[1],v=Object(n.useState)([]),M=Object(d.a)(v,2),y=M[0],A=M[1],R=Object(n.useState)([]),w=Object(d.a)(R,2),S=w[0],T=w[1],L=Object(n.useState)([]),K=Object(d.a)(L,2),U=K[0],H=K[1],N=Object(n.useState)([]),F=Object(d.a)(N,2),q=F[0],G=F[1],X=Object(n.useState)(""),z=Object(d.a)(X,2),J=z[0],V=z[1],$=Object(n.useState)(""),Y=Object(d.a)($,2),Q=Y[0],Z=Y[1],ee=B(),te=Object(d.a)(ee,2),ce=te[0],ne=te[1];return Object(n.useEffect)((function(){try{var e=[];H([]);for(var t=0;t<o.length;t++){for(var n=o[t],a="",r="",l=0;l<o.length;l++)if(l!==t){var i=o[l];a+="((x)-(".concat(i.x,"))"),r+="((".concat(n.x,")-(").concat(i.x,"))")}e.push({id:"L".concat(t),formula:"((".concat(Object(P.c)(a).toString(),")/(").concat(Object(P.b)(r),"))"),coeficiente:"(".concat(n.fx,")")})}A(e),C(e.map((function(e){return"(".concat(e.formula,"*").concat(e.coeficiente,")")})).join("+"));var j,s=[];V(Number(D.f(o,(function(e){return Number(e.x)})))-1),Z(Number(D.e(o,(function(e){return Number(e.x)})))+1);var u=(j=o.length>1?D.g(J,Q,.1):D.g(-2,2,.1)).map((function(e){return{funcion:"fx",x:Number(e),y:Object(P.b)(c.replaceAll("x","(".concat(e,")")))}})),_=j.map((function(e){return{funcion:"px",x:Number(e),y:Object(P.b)(E.replaceAll("x","(".concat(e,")")))}}));s=s.concat(u).concat(_),G(s)}catch(b){console.log(b)}}),[o,c,E]),Object(u.jsx)(x.a,{rows:"2",columns:"2",divided:!0,children:Object(u.jsxs)(x.a.Row,{children:[Object(u.jsx)(x.a.Column,{children:Object(u.jsxs)(j.a,{children:[Object(u.jsxs)(m.a,{children:[Object(u.jsx)(g.a,{color:"green",children:"F(x)"}),Object(u.jsx)(m.a.Input,{placeholder:"F(x)",value:c,onChange:function(e,t){i([]),a(t.value)}})]}),Object(u.jsx)("br",{}),Object(u.jsxs)(h.a,{textAlign:"center",celled:!0,children:[Object(u.jsxs)(h.a.Header,{children:[Object(u.jsx)(h.a.HeaderCell,{children:"x"}),Object(u.jsx)(h.a.HeaderCell,{children:"f(x)"})]}),Object(u.jsxs)(h.a.Body,{children:[o.map((function(e){return Object(u.jsxs)(h.a.Row,{children:[Object(u.jsx)(h.a.Cell,{children:e.x}),Object(u.jsx)(h.a.Cell,{children:e.fx})]})})),Object(u.jsx)(h.a.Row,{children:Object(u.jsx)(h.a.Cell,{colSpan:"2",children:Object(u.jsx)(m.a,{onSubmit:function(){try{o.map((function(e){return e.x})).includes(b)||i(I()(o,{$push:[{x:b,fx:Object(P.b)(c.replaceAll("x","(".concat(b,")")))}]})),O("")}catch(e){console.log(e)}},children:Object(u.jsxs)(m.a.Group,{children:[Object(u.jsx)(m.a.Input,{name:"x",placeholder:"x",value:b,onChange:function(e,t){return O(t.value)}}),Object(u.jsx)(m.a.Button,{icon:"plus",color:"green",type:"submit"})]})})})})]})]})]})}),Object(u.jsxs)(x.a.Column,{children:[Object(u.jsx)(j.a,{children:Object(u.jsx)(W.a,{tex:"P(x) = "+E})}),Object(u.jsx)(j.a,{children:Object(u.jsx)(k,{reload:{width:ce,height:ne},data:q,a:J,b:Q})}),Object(u.jsxs)(h.a,{textAlign:"center",celled:!0,children:[Object(u.jsxs)(h.a.Header,{children:[Object(u.jsx)(h.a.HeaderCell,{children:"Ln"}),Object(u.jsx)(h.a.HeaderCell,{children:"Formula"}),Object(u.jsx)(h.a.HeaderCell,{children:"Coeficiente"})]}),Object(u.jsx)(h.a.Body,{children:y.map((function(e){return Object(u.jsxs)(h.a.Row,{children:[Object(u.jsx)(h.a.Cell,{children:e.id}),Object(u.jsx)(h.a.Cell,{children:Object(u.jsx)(W.a,{tex:e.formula})}),Object(u.jsx)(h.a.Cell,{children:e.coeficiente})]})}))})]}),Object(u.jsxs)(h.a,{celled:!0,textAlign:"center",children:[Object(u.jsxs)(h.a.Header,{children:[Object(u.jsx)(h.a.HeaderCell,{children:"x"}),Object(u.jsx)(h.a.HeaderCell,{children:"P(x)"})]}),Object(u.jsxs)(h.a.Body,{children:[U.map((function(e){return Object(u.jsxs)(h.a.Row,{children:[Object(u.jsx)(h.a.Cell,{children:e.x}),Object(u.jsx)(h.a.Cell,{children:e.px})]})})),Object(u.jsx)(h.a.Row,{children:Object(u.jsx)(h.a.Cell,{colSpan:"2",children:Object(u.jsx)(m.a,{onSubmit:function(){try{U.map((function(e){return e.x})).includes(S)||H(I()(U,{$push:[{x:S,px:Object(P.b)(E.replaceAll("x","(".concat(S,")")))}]})),T("")}catch(e){console.log(e)}},children:Object(u.jsxs)(m.a.Group,{children:[Object(u.jsx)(m.a.Input,{name:"px",placeholder:"x",value:S,onChange:function(e,t){return T(t.value)}}),Object(u.jsx)(m.a.Button,{icon:"plus",color:"green",type:"submit"})]})})})})]})]})]})]})})};var U=function(e){var t=Object(n.useState)([{x:1,y:8},{x:1.25,y:9.1},{x:1.5,y:10.25},{x:1.75,y:11.56},{x:2,y:13}]),c=Object(d.a)(t,2),a=c[0],r=c[1],l=Object(n.useState)("x^2+2x+5"),o=Object(d.a)(l,2),i=o[0],_=o[1],b=Object(n.useState)(4),O=Object(d.a)(b,2),f=O[0],p=O[1],m=Object(n.useState)(.25),E=Object(d.a)(m,2),v=E[0],M=E[1],y=Object(n.useState)(1),A=Object(d.a)(y,2),R=A[0],w=A[1],I=Object(n.useState)(2),B=Object(d.a)(I,2),S=B[0],T=B[1],L=Object(n.useState)({simple:"Na",compuesto:"Na"}),k=Object(d.a)(L,2),K=k[0],U=k[1];function H(){return{x:D.f(a,(function(e){return e.x})),y:D.f(a,(function(e){return e.y}))}}function N(){return{x:D.e(a,(function(e){return e.x})),y:D.e(a,(function(e){return e.y}))}}return Object(n.useEffect)((function(){U({simple:Object(P.b)("((".concat(N().x," - ").concat(H().x,")*(").concat(H().y,"+").concat(N().y,"))/2")),compuesto:Object(P.b)("(".concat(v,"/2)*(").concat(H().y," + 2*(").concat(a.map((function(e){return e.y})).slice(1,a.length-1).join(" + "),") + ").concat(N().y,")"))})}),[]),Object(n.useEffect)((function(){M((S-R)/f)}),[S,R,f]),Object(n.useEffect)((function(){try{var e=[],t=R;for(e.push({x:R,y:Object(P.b)(i.replaceAll("x","(".concat(R,")")))});e.length!==f+1;)e.push({x:t+v,y:Object(P.b)(i.replaceAll("x","(".concat(t+v,")")))}),t+=v;r(e)}catch(c){console.log(c)}}),[i,v]),Object(n.useEffect)((function(){U({simple:Object(P.b)("((".concat(N().x," - ").concat(H().x,")*(").concat(H().y,"+").concat(N().y,"))/2")),compuesto:Object(P.b)("(".concat(v,"/2)*(").concat(H().y," + 2*(").concat(a.map((function(e){return e.y})).slice(1,a.length-1).join(" + "),") + ").concat(N().y,")"))})}),[a]),Object(u.jsx)("div",{children:Object(u.jsxs)(x.a,{divided:!0,columns:"2",children:[Object(u.jsx)(x.a.Row,{children:Object(u.jsx)(x.a.Column,{width:"16",children:Object(u.jsxs)(j.a,{fluid:!0,children:[Object(u.jsx)(C.a,{label:"Equation: f(x):",placeholder:"f(x)",value:i,onChange:function(e,t){var c=t.value;return _(c)}}),Object(u.jsx)(C.a,{type:"range",min:"1",max:"15",label:"n: ".concat(f),placeholder:"n subdivisones",value:f,onChange:function(e,t){var c=t.value;return p(Number(c))}}),Object(u.jsx)(C.a,{label:"Minimo",placeholder:"X Minimo",value:R,onChange:function(e,t){var c=t.value;return w(c)}}),Object(u.jsx)(C.a,{label:"Maximo",placeholder:"X Maximo",value:S,onChange:function(e,t){var c=t.value;return T(c)}}),Object(u.jsxs)(g.a,{children:["h: (b-a)/n : ",N().x-H().x,"/",f," : ",(N().x-H().x)/f]}),Object(u.jsxs)(h.a,{celled:!0,children:[Object(u.jsxs)(h.a.Header,{children:[Object(u.jsx)(h.a.HeaderCell,{children:"x"}),Object(u.jsx)(h.a.HeaderCell,{children:"y"})]}),Object(u.jsx)(h.a.Body,{children:a.map((function(e){return Object(u.jsxs)(h.a.Row,{children:[Object(u.jsx)(h.a.Cell,{children:e.x}),Object(u.jsx)(h.a.Cell,{children:e.y})]})}))})]})]})})}),Object(u.jsxs)(x.a.Row,{children:[Object(u.jsxs)(x.a.Column,{children:[Object(u.jsxs)(j.a,{children:[Object(u.jsx)(s.a,{children:"Metodo de Trapecios Simple:"}),Object(u.jsx)(W.a,{tex:"\\frac{((b-a)*(f(a)+f(b)))}{2}"}),Object(u.jsx)(W.a,{tex:"\\frac{((".concat(N().x," - ").concat(H().x,")*(").concat(H().y,"+").concat(N().y,"))}{2} =")}),Object(u.jsx)(s.a,{textAlign:"center",as:"h4",children:K.simple})]}),"}"]}),Object(u.jsx)(x.a.Column,{children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(s.a,{children:"Metodo de trapecios Compuestos"}),Object(u.jsx)(W.a,{tex:"\\Sigma_{i=1}^".concat(f," (\\frac{h}{2}*(y_{i-1} + y_i))=")}),Object(u.jsx)(W.a,{tex:"\\frac{".concat(v,"}{2} * (").concat(H().y," + 2*(").concat(a.map((function(e){return e.y})).slice(1,a.length-1).join(" + "),") + ").concat(N().y,")")}),Object(u.jsx)(s.a,{textAlign:"center",as:"h4",children:K.compuesto})]})})]})]})})},H=c(282);var N=function(){var e=Object(n.useState)([[-2,0,-2,-10],[2,2,4,16],[0,1,0,0]]),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(3),l=Object(d.a)(r,2),o=l[0],i=l[1],s=Object(n.useState)([]),_=Object(d.a)(s,2),b=_[0],O=_[1],x=Object(n.useState)([]),f=Object(d.a)(x,2),p=f[0],m=f[1];return Object(n.useEffect)((function(){try{for(var e=[],t=0;o>t;t++){for(var c=[],n=0;o>n;n++)c.push("");c.push(""),e.push(c)}a(e)}catch(r){console.log(r)}}),[o]),Object(u.jsxs)(j.a,{children:[Object(u.jsx)(C.a,{label:"Tama\xf1o: ".concat(o,"*").concat(o),value:o,min:"2",max:"5",type:"range",onChange:function(e,t){var c=t.value;return i(Number(c))}}),Object(u.jsxs)(h.a,{celled:!0,children:[Object(u.jsx)(h.a.Header,{children:c.map((function(e,t){return Object(u.jsxs)(h.a.HeaderCell,{children:["Columna: ",t]})}))}),Object(u.jsx)(h.a.Body,{children:c.map((function(e,t){return Object(u.jsx)(h.a.Row,{children:e.map((function(e,n){return Object(u.jsx)(h.a.Cell,{children:Object(u.jsx)(C.a,{value:c[t][n],placeholder:n!==o?"(".concat(t,",").concat(n,")"):"b".concat(t),onChange:function(e,r){var l=r.value,o=JSON.parse(JSON.stringify(c));o[t][n]=l,a(o),O([]),m([])}})})}))})}))})]}),Object(u.jsxs)(h.a,{celled:!0,children:[Object(u.jsx)(h.a.Header,{children:b.map((function(e,t){return Object(u.jsxs)(h.a.HeaderCell,{children:["Columna: ",t]})}))}),Object(u.jsx)(h.a.Body,{children:b.map((function(e,t){return Object(u.jsx)(h.a.Row,{children:e.map((function(e,t){return Object(u.jsx)(h.a.Cell,{children:e})}))})}))})]}),p?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(h.a,{children:Object(u.jsx)(h.a.Header,{children:p.reverse().map((function(e,t){return Object(u.jsx)(h.a.HeaderCell,{children:"x".concat(p.length-t," = ").concat(e)})}))})})}):Object(u.jsx)(u.Fragment,{}),Object(u.jsx)(v.a,{fluid:!0,color:"green",content:"Elminacion de Gauss",onClick:function(){try{var e=function(e){var t,c,n=JSON.parse(JSON.stringify(e)),a=n.length,r=0;for(t=0;t<a;t++)for(c=t;c<a;c++)if(t!==c){var l=n[c][t]/n[t][t];for(r=0;r<=a;r++)n[c][r]=n[c][r]-n[t][r]*l}for(var o=0;o<a;o++){var i=n[o][o];if(0!==i)for(var j=0;j<=a;j++)n[o][j]=n[o][j]/i}return n}(c);O(e),m(function(e){for(var t=JSON.parse(JSON.stringify(e)),c=t.length,n=[],a=c-1;a>=0;a--)a+1===c?n.push(t[a][c]):n.push(t[a][c]-n.reduce((function(e,t){return e-t})));return n}(e))}catch(t){console.log(t)}}})]})};var F=function(){return Object(u.jsx)(o.a,{children:Object(u.jsx)(i.c,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)(O,{}),Object(u.jsx)(i.a,{exact:!0,path:"/",component:_}),Object(u.jsx)(i.a,{path:"/ejercicios_a",component:p}),Object(u.jsx)(i.a,{path:"/biseccion",component:y}),Object(u.jsx)(i.a,{path:"/punto_fijo",component:S}),Object(u.jsx)(i.a,{path:"/newton_raphson",component:L}),Object(u.jsx)(i.a,{path:"/polinomio_lagrange",component:K}),Object(u.jsx)(i.a,{path:"/metodo_trapecios",component:U}),Object(u.jsx)(i.a,{path:"/metodo_romberg",component:H.a}),Object(u.jsx)(i.a,{path:"/metodo_gauss",component:N})]})})})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,588)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,l=t.getTTFB;c(e),n(e),a(e),r(e),l(e)}))};l.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root")),q()}},[[568,1,2]]]);
//# sourceMappingURL=main.6f228fe3.chunk.js.map