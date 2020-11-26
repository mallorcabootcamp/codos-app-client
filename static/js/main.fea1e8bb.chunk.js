(this["webpackJsonpcodos-app-client"]=this["webpackJsonpcodos-app-client"]||[]).push([[0],{101:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},159:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},170:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),o=a(17),i=a(7),s=a(5),m=a(20),u=a(15),d=(a(98),1500),p=function(e){var t=e.eCoValue,a=Object(n.useMemo)((function(){return v(t)}),[t]),c=Object(n.useMemo)((function(){return h(t)}),[t]);return r.a.createElement("div",{className:"container pt-0 pb-4 mb-2 current-co2-elem"},r.a.createElement("div",{className:"text-center m-auto py-3 rounded-circle outer-circle",style:{backgroundColor:c}},r.a.createElement("div",{className:"text-center m-auto py-3 shadow rounded-circle inner-circle",style:{backgroundColor:a}},r.a.createElement("p",{className:"h5 p-0 m-0 text-white pt-5 mt-2 eco-elem"},"eCO\xb2"),r.a.createElement("p",{className:"h3 p-0 m-0 text-white mt-1"},r.a.createElement("span",null,t)," ppm"))))},v=function(e){return"hsl(".concat(e<=d?145*(1-e/d):0,",63%,49%)")},h=function(e){return"hsl(".concat(e<=d?145*(1-e/d):0,",62%,59%)")},f="thermometer",b="humidity",E=(a(99),function(e){var t=e.value,a=e.icon;return r.a.createElement("p",{className:"icon-elem"},r.a.createElement(m.a,{icon:g(a),size:"lg"})," ",r.a.createElement("span",{className:"value-elem"},t))}),g=function(e){switch(e){case b:return u.g;case f:return u.e;default:return u.g}},N=a(27),O=a.n(N),w=a(32),x=a(220),y=a(221),j=a(223),k=a(218),M=a(219),_=a(216),D=a(217),S=a(11),C=a.n(S),T=(a(101),"#878a8c"),V={dx:"0em",dy:"-0.2em",textAnchor:"middle",fontFamily:"Montserrat",fontSize:10,fill:T},F={dx:"0.4em",fontFamily:"Montserrat",fontSize:10,textAnchor:"end",fill:T},P=function(e){var t=e.endTimeValue,a=e.width,c=e.historicalValues,l=e.uom,o=e.marginY,i=e.marginX,s=e.height,m=e.timeFormat,u=e.bottomAxisNumTicks,d={startTime:0,endTime:t},p=c,v=function(e){return new Date(1e3*parseInt(e.time))},h=a-i,f=s-o,b=Object(n.useMemo)((function(){return Object(y.a)({range:[i,h+i],domain:[1,d.endTime]})}),[h,i,d.endTime]),E=Object(n.useMemo)((function(){return Object(y.a)({domain:[Math.max.apply(Math,Object(w.a)(p.map((function(e){return e.value})))),Math.min.apply(Math,Object(w.a)(p.map((function(e){return e.value}))))],range:[0,f-o]})}),[f,o,p]),g=Object(n.useMemo)((function(){return Object(j.a)({range:[i,h+i],domain:Object(_.a)(p,v)})}),[h,i,p]),N=Object(n.useMemo)((function(){return Object(j.a)({range:[i,h+i],domain:Object(_.a)(p,v)})}),[h,i,p]),O=Object(n.useMemo)((function(){return Object(y.a)({range:[o,f],domain:[Math.min.apply(Math,Object(w.a)(p.map((function(e){return Math.min(e.value)})))),Math.max.apply(Math,Object(w.a)(p.map((function(e){return Math.max(e.value)}))))],reverse:!0})}),[f,o,p]);return r.a.createElement("div",{className:"text-left time-with-values-graph-elem"},r.a.createElement("svg",{width:a+o,height:s},r.a.createElement(x.a,{data:p,x:function(e){var t;return null!==(t=N(v(e)))&&void 0!==t?t:0},y:function(e){var t;return null!==(t=O(function(e){return e.value}(e)))&&void 0!==t?t:0},yScale:O,fill:"#bdc3c7"}),r.a.createElement(D.a,{scale:b,height:f-o,top:o,numTicks:d.endTime,stroke:T,strokeWidth:1.5}),r.a.createElement(k.a,{top:f,scale:g,numTicks:u,stroke:T,hideTicks:!0,tickStroke:T,tickLabelProps:function(){return V},tickFormat:function(e){return C()(e).format(m)}}),r.a.createElement(M.a,{top:o,left:i,scale:E,numTicks:3,hideTicks:!0,stroke:T,tickStroke:T,tickLabelProps:function(){return F},tickFormat:function(e){return"".concat(e," ").concat(l)}})))},Y=a(6),z=a.n(Y),A=(a(141),function(e){var t=e.children,a=e.className,n=z()("card-elem",a);return r.a.createElement("div",{className:n},t)}),H=(a(142),a(18)),G=a.n(H),I=a(31),L=a(76),R=a(77),q=a(78),J=a.n(q),X="http://134.209.80.241:3100/",B=function(){function e(){Object(L.a)(this,e)}return Object(R.a)(e,null,[{key:"makeGetRequest",value:function(){var e=Object(I.a)(G.a.mark((function e(t,a,n,r,c,l){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J()({method:"get",url:X+t,params:{fromDate:n,toDate:r,user:a,aggregateTimeScale:c,dataToGet:l}}).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(t,a,n,r,c,l){return e.apply(this,arguments)}}()},{key:"getPeriodData",value:function(){var t=Object(I.a)(G.a.mark((function t(a,n,r,c,l){var o,i;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Math.round(C()(a).valueOf()/1e3),i=Math.round(C()(n).valueOf()/1e3),t.abrupt("return",e.makeGetRequest("data/period",r,o,i,c,l));case 3:case"end":return t.stop()}}),t)})));return function(e,a,n,r,c){return t.apply(this,arguments)}}()},{key:"getUsersList",value:function(){var t=Object(I.a)(G.a.mark((function t(){return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.makeGetRequest("users"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getCurrentData",value:function(){var t=Object(I.a)(G.a.mark((function t(a,n){return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.makeGetRequest("data/current",a,void 0,void 0,void 0,n));case 1:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}]),e}();B.user=void 0;a(159);var W,U=function(e){var t=e.onClickOnClose,a=e.onClickOnDevice,n=e.devices,c=e.activeDevice;return r.a.createElement("div",{className:"side-menu dark"},r.a.createElement("div",{className:"row top d-flex p-3 pl-4 justify-content-between align-items-center text-center"},r.a.createElement("p",{className:"col ml-5 mt-4 font-weight-bold"},"CODOS APP"),r.a.createElement("div",{className:"close-button border-0 mr-4",onClick:t},r.a.createElement(m.a,{icon:u.f,size:"lg"}))),r.a.createElement("div",{className:"row menu my-5 ml-5 d-flex flex-column "},r.a.createElement("p",{className:"font-weight-bold pb-4 h5"},"Listado de dispositivos"),r.a.createElement("ul",{className:"list-unstyled"},n.map((function(e){return r.a.createElement("li",{key:e,className:"border-0 my-2 px-0 ".concat(e===c&&"menu-button-actived"," menu-button"),onClick:function(){return a(e)}},e)})))),r.a.createElement("hr",{className:"ml-5 text-left font-weight-bold"}),r.a.createElement("div",{className:"row about ml-5 mt-5 font-weight-bold"},r.a.createElement(o.b,{to:"/about",className:"about-link"},"About")))},$=a(222),K=(a(162),function(e){var t=e.children,a=e.isVisible;return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{in:a,timeout:1e3,classNames:"lateral",unmountOnExit:!0},t))}),Q=function(e){var t=Object(n.useState)(localStorage.getItem(e)||""),a=Object(s.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){localStorage.setItem(e,r)}),[r,e]),[r,c]},Z=function(e,t){var a=Math.round(C()(t).valueOf()/1e3)-Math.round(C()(e).valueOf()/1e3),n=C()().valueOf()/1e3-C()().subtract(3,"days").valueOf()/1e3,r=C()().valueOf()/1e3-C()().subtract(3,"months").valueOf()/1e3,c=C()().valueOf()/1e3-C()().subtract(7,"months").valueOf()/1e3;return a<n?"1h":a>n&&a<r?"1d":a>r&&a<c?"1w":"4w"};!function(e){e.co2="co2",e.temperature="temperature",e.humidity="humidity"}(W||(W={}));a(163);var ee=function(e){var t=e.color;return r.a.createElement("div",{className:"text-center loading py-5 ".concat(t)},r.a.createElement(m.a,{icon:u.d,size:"lg"}))},te=function(){var e=Q("deviceSelected"),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),d=Object(s.a)(l,2),v=d[0],h=d[1],g=Object(n.useState)(0),N=Object(s.a)(g,2),w=N[0],x=N[1],y=Object(n.useState)(0),j=Object(s.a)(y,2),k=j[0],M=j[1],_=Object(n.useState)(0),D=Object(s.a)(_,2),S=D[0],T=D[1],V=Object(n.useState)([]),F=Object(s.a)(V,2),Y=F[0],z=F[1],H=Object(n.useState)([]),G=Object(s.a)(H,2),I=G[0],L=G[1],R=Object(n.useState)(!1),q=Object(s.a)(R,2),J=q[0],X=q[1],$=Object(n.useState)(!0),te=Object(s.a)($,2),ae=te[0],ne=te[1];Object(n.useEffect)((function(){B.getUsersList().then((function(e){L(e)}))}),[]),Object(n.useEffect)((function(){var e=C()().subtract(7,"hour").format("YYYY-MM-DD HH:mm"),t=C()().format("YYYY-MM-DD HH:mm");if(a){var n=Z(e,t),r=B.getCurrentData(a,W.co2),c=B.getCurrentData(a,W.temperature),l=B.getCurrentData(a,W.humidity),o=B.getPeriodData(e,t,a,n,W.co2);Promise.all([r,c,l,o]).then((function(e){var t=Object(s.a)(e,4),a=t[0],n=t[1],r=t[2],c=t[3];ne(!1),x(a[0].value),M(n[0].value),T(r[0].value),z(c)})).catch((function(){return X(!0)}))}}),[a]);return J?r.a.createElement(i.a,{to:"/unexpected-error?redirectTo=/"}):ae&&a?r.a.createElement("div",{className:"container is-loading-container light"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col is-loading"},r.a.createElement(ee,{color:"loading-dark"})))):r.a.createElement("div",{className:"light"},r.a.createElement("div",{className:"container"},r.a.createElement(K,{isVisible:v},r.a.createElement(U,{activeDevice:a,devices:I,onClickOnClose:function(){return h(!1)},onClickOnDevice:function(e){c(e),h(!1)}})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col ml-4 pt-4 mt-3 h4 mb-0 d-inline menu-elem"},r.a.createElement("p",{className:"mb-0 d-inline",onClick:function(){return h(!0)}},r.a.createElement(m.a,{icon:u.a,size:"lg"}))))),!a&&r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col px-5 py-3 pt-5 mt-3"},r.a.createElement("h4",{className:"select-a-device"},"Acceda al men\xfa lateral y seleccione un dispositivo")))),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{eCoValue:Math.round(w)}),r.a.createElement("div",{className:"container px-5 text-center"},r.a.createElement(A,null,r.a.createElement("div",{className:"row icon-with-value-elem"},r.a.createElement("div",{className:"col"},r.a.createElement(E,{value:"".concat(Math.round(k),"\xba"),icon:f})),r.a.createElement("div",{className:"col"},r.a.createElement(E,{value:"".concat(Math.round(S),"%"),icon:b}))))),r.a.createElement("div",{className:"container px-5 pt-3 mt-4 mb-4 pb-2"},r.a.createElement(A,{className:"graph-elem"},r.a.createElement("p",{className:"text-elem pt-3 pl-2 mb-3"},"\xdaltimas ",8," horas"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col text-center"},r.a.createElement(O.a,{className:"graph-elem"},(function(e){var t=e.width;return r.a.createElement(P,{endTimeValue:8,uom:"ppm",timeFormat:"H:mm",marginY:20,marginX:60,historicalValues:Y,bottomAxisNumTicks:7,width:t-20,height:160})})))))),r.a.createElement("div",{className:"container pt-1 pb-5"},r.a.createElement("div",{className:"text-center m-auto rounded-circle search-elem"},r.a.createElement(o.b,{to:"/history",className:"search-link"},r.a.createElement(m.a,{icon:u.c,size:"lg"}))))))},ae=(a(170),a(80)),ne=a.n(ae),re=function(e){var t=e.text,a=e.date,c=e.onDateChanged,l=Object(n.useMemo)((function(){return ne.a.generate()}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"pt-2 date-picker-text",htmlFor:l},t,":"),r.a.createElement("input",{value:a,className:"date-picker-input",onChange:function(e){var t=e.target;return c(t.value)},name:t,type:"date",id:l}))},ce=(a(179),function(e){var t=e.value,a=e.children;return r.a.createElement("div",{className:"py-4 mx-2"},r.a.createElement("div",{className:"card-tab inline d-inline-block px-3 py-1 text-center"},t),r.a.createElement("div",{className:"card-with-text-tab"},a))}),le=(a(180),a(181),function(e){var t=e.title,a=e.children;return r.a.createElement("div",{className:"grey-layout__container container"},r.a.createElement("div",{className:"row"},r.a.createElement(o.b,{to:"/",className:"ml-4 mt-4 rounded-circle grey-layout__arrow-back-elem"},r.a.createElement(m.a,{icon:u.b,size:"lg"}))),r.a.createElement("div",{className:"row"},r.a.createElement("h1",{className:"text-center grey-layout__text-elem"},t)),a)}),oe=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(s.a)(l,2),m=o[0],u=o[1],d=Object(n.useState)(),p=Object(s.a)(d,2),v=p[0],h=p[1],f=Object(n.useState)(),b=Object(s.a)(f,2),E=b[0],g=b[1],N=Object(n.useState)(),w=Object(s.a)(N,2),x=w[0],y=w[1],j=Q("deviceSelected"),k=Object(s.a)(j,1)[0],M=Object(n.useState)(),_=Object(s.a)(M,2),D=_[0],S=_[1],C=Object(n.useState)(!1),T=Object(s.a)(C,2),V=T[0],F=T[1],Y=Object(n.useState)(!1),z=Object(s.a)(Y,2),A=z[0],H=z[1];return V?r.a.createElement(i.a,{to:"/unexpected-error?redirectTo=history"}):r.a.createElement(le,{title:"Hist\xf3rico"},r.a.createElement("div",{className:"history dark"},r.a.createElement("div",{className:"row date-range-pickers-container pt-3 mt-3"},r.a.createElement("div",{className:"col mx-3 my-3"},r.a.createElement(re,{date:a,onDateChanged:function(e){return c(e)},text:"Desde"}),r.a.createElement(re,{date:m,onDateChanged:function(e){return u(e)},text:"Hasta"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col pl-5 my-3"},r.a.createElement("button",{className:"search-button btn",disabled:!a||!m||a===m,onClick:function(){h(void 0),g(void 0),y(void 0),H(!0);var e=Z(a,m);S(e);var t=B.getPeriodData(a,m,k,e,W.co2),n=B.getPeriodData(a,m,k,e,W.temperature),r=B.getPeriodData(a,m,k,e,W.humidity);Promise.all([t,n,r]).then((function(e){var t=Object(s.a)(e,3),a=t[0],n=t[1],r=t[2];H(!1),h(a),g(n),y(r)})).catch((function(){return F(!0)}))}},"Buscar "))),a===m&&""!==a&&r.a.createElement("p",{className:"row px-5 pt-5 invalid-dates"},"Por favor, seleccione un periodo mayor entre fechas."),A&&r.a.createElement(ee,{color:"loading-white"}),E&&x&&v&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,{value:"eCO\xb2"},r.a.createElement("div",{className:"row"},r.a.createElement(O.a,{className:"history-graph-elem"},(function(e){var t=e.width;return r.a.createElement(P,{endTimeValue:10,uom:"ppm",timeFormat:"1h"===D?"H:mm":"DD-MM",marginY:20,marginX:55,historicalValues:v,bottomAxisNumTicks:5,width:t-20,height:118})})))),r.a.createElement(ce,{value:"Temp."},r.a.createElement("div",{className:"row"},r.a.createElement(O.a,{className:"history-graph-elem"},(function(e){var t=e.width;return r.a.createElement(P,{endTimeValue:10,uom:"\xbaC",timeFormat:"1h"===D?"H:mm":"DD-MM",marginY:20,marginX:55,historicalValues:E,bottomAxisNumTicks:5,width:t-20,height:118})})))),r.a.createElement(ce,{value:"Humidity"},r.a.createElement("div",{className:"row"},r.a.createElement(O.a,{className:"history-graph-elem"},(function(e){var t=e.width;return r.a.createElement(P,{endTimeValue:10,uom:"%",timeFormat:"1h"===D?"H:mm":"DD-MM",marginY:20,marginX:55,historicalValues:x,bottomAxisNumTicks:5,width:t-20,height:118})})))))))},ie=a.p+"static/media/unexpected-error.49148320.png",se=a(81),me=(a(194),function(){var e=Object(i.g)(),t=Object(se.parse)(e.search).redirectTo;return r.a.createElement("div",{className:"container pt-5 parent-unexcected-error"},r.a.createElement("div",{className:"unexpected-error"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"m-auto unexpected-error__text"},r.a.createElement("p",{className:"font-weight-bold h5 py-3"},"\xa1Vaya!"),r.a.createElement("p",{className:"unexpected-error__down-text"},"Algo no fue como esper\xe1bamos")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col px-5 unexpected-error__robot-img"},r.a.createElement("img",{src:ie,alt:"robot"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col text-center m-5"},r.a.createElement("button",{className:"btn mt-3 py-2 px-5 font-weight-bold unexpected-error__button"},r.a.createElement(o.b,{to:t||"/",className:"search-link"},"Volver")," ")))))}),ue=function(e){var t=e.children,a=Object(i.g)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[a]),t},de=(a(195),a(196),a(82)),pe=function(){return r.a.createElement(le,{title:"Informaci\xf3n"},r.a.createElement("div",{className:"about dark"},r.a.createElement("div",{className:"row mx-5 pt-5 mt-3"},r.a.createElement("p",{className:"about__header mb-1"},"Proyecto de:"),r.a.createElement("ul",{className:"list-unstyled mt-0"},r.a.createElement("li",null,r.a.createElement("a",{className:"about__anchor",href:"https://mallorcaboot.camp/",rel:"noreferrer",target:"_blank"},"Mallorca Bootcamp")))),r.a.createElement("div",{className:"row mx-5 pt-3"},r.a.createElement("p",{className:"about__header mb-1"},"Desarrollado por:"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{className:"about__anchor",href:"https://github.com/Ralvgar",rel:"noreferrer",target:"_blank"},"Roberto \xc1lvarez Garc\xeda")),r.a.createElement("li",null,r.a.createElement("a",{className:"about__anchor",href:"https://github.com/JosemiChaves9",rel:"noreferrer",target:"_blank"},"Jose Miguel Chaves Ojeda")))),r.a.createElement("div",{className:"row mx-5 pt-3"},r.a.createElement("p",{className:"about__header mb-1"},"Dise\xf1o de interfaz:"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{className:"about__anchor",href:"https://www.behance.net/lorenavicente",rel:"noreferrer",target:"_blank"},"Lorena Vicente D\xedaz")))),r.a.createElement("div",{className:"row mx-5 pt-3"},r.a.createElement("p",{className:"about__header mb-1"},"Ilustraci\xf3n p\xe1gina de error:"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{className:"about__anchor",href:"https://stories.freepik.com/web",rel:"noreferrer",target:"_blank"},"Freepik Stories")))),r.a.createElement("div",{className:"row mx-5 pt-3"},r.a.createElement("p",{className:"about__header mb-1"},"Versi\xf3n:"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,de.version)))))};var ve=function(){return r.a.createElement(o.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/history"},r.a.createElement(ue,null,r.a.createElement(oe,null))),r.a.createElement(i.b,{path:"/",exact:!0},r.a.createElement(ue,null,r.a.createElement(te,null))),r.a.createElement(i.b,{path:"/unexpected-error",component:me}),r.a.createElement(i.b,{path:"/about",component:pe})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e){e.exports=JSON.parse('{"name":"codos-app-client","version":"1.0.0","private":true,"dependencies":{"@fortawesome/fontawesome-svg-core":"^1.2.32","@fortawesome/free-solid-svg-icons":"^5.15.1","@fortawesome/react-fontawesome":"^0.1.11","@types/d3-array":"^2.1.0","@types/react-router-dom":"^5.1.6","@types/react-transition-group":"^4.4.0","@types/shortid":"0.0.29","@typescript-eslint/eslint-plugin":"^4.4.1","@typescript-eslint/parser":"^4.4.1","@visx/axis":"^1.0.0","@visx/grid":"^1.0.0","@visx/responsive":"^1.0.0","@visx/scale":"^1.0.0","@visx/shape":"^1.0.0","axios":"^0.21.0","bootstrap":"^4.5.2","classnames":"^2.2.6","d3-array":"^2.8.0","moment":"^2.29.1","query-string":"^6.13.7","react":"^16.13.1","react-dom":"^16.13.1","react-router-dom":"^5.2.0","react-scripts":"^4.0.0","react-transition-group":"^4.4.1","sass":"^1.27.0","shortid":"^2.2.15","typescript":"^4.0.3"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},98:function(e,t,a){},99:function(e,t,a){}},[[197,1,2]]]);
//# sourceMappingURL=main.fea1e8bb.chunk.js.map