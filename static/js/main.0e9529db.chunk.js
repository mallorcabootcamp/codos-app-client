(this["webpackJsonpcodos-app-client"]=this["webpackJsonpcodos-app-client"]||[]).push([[0],{101:function(e,t,c){},102:function(e,t,c){},104:function(e,t,c){},144:function(e,t,c){},145:function(e,t,c){},162:function(e,t,c){},165:function(e,t,c){},166:function(e,t,c){},173:function(e,t,c){},182:function(e,t,c){},183:function(e,t,c){},184:function(e,t,c){},197:function(e,t,c){},198:function(e,t,c){},199:function(e,t,c){},200:function(e,t,c){"use strict";c.r(t);var r,n=c(0),a=c(1),i=c.n(a),s=c(26),o=c.n(s),l=c(19),u=c(7),d=c(12),m=c(22),j=c(17),b=(c(101),1500),h=function(e){var t=e.eCoValue,c=Object(a.useMemo)((function(){return O(t)}),[t]),r=Object(a.useMemo)((function(){return x(t)}),[t]);return Object(n.jsx)("div",{className:"container pt-0 pb-4 mb-2 current-co2-elem",children:Object(n.jsx)("div",{className:"text-center m-auto py-3 rounded-circle outer-circle",style:{backgroundColor:r},children:Object(n.jsxs)("div",{className:"text-center m-auto py-3 shadow rounded-circle inner-circle",style:{backgroundColor:c},children:[Object(n.jsx)("p",{className:"h5 p-0 m-0 text-white pt-5 mt-2 eco-elem",children:"eCO\xb2"}),Object(n.jsxs)("p",{className:"h3 p-0 m-0 text-white mt-1",children:[Object(n.jsx)("span",{children:t})," ppm"]})]})})})},O=function(e){return"hsl(".concat(e<=b?145*(1-e/b):0,",63%,49%)")},x=function(e){return"hsl(".concat(e<=b?145*(1-e/b):0,",62%,59%)")};!function(e){e[e.thermometer=0]="thermometer",e[e.humidity=1]="humidity"}(r||(r={}));c(102);var p=function(e){var t=e.value,c=e.icon;return Object(n.jsxs)("p",{className:"icon-elem",children:[Object(n.jsx)(m.a,{icon:v(c),size:"lg"})," ",Object(n.jsx)("span",{className:"value-elem",children:t})]})},v=function(e){switch(e){case r.humidity:return j.g;case r.thermometer:return j.e;default:return j.g}},f=c(29),g=c.n(f),N=c(34),y=c(223),w=c(224),k=c(226),C=c(221),T=c(222),M=c(219),D=c(220),_=c(11),A=c.n(_),S=(c(104),"#878a8c"),V={dx:"0em",dy:"-0.2em",textAnchor:"middle",fontFamily:"Montserrat",fontSize:10,fill:S},L={dx:"0.4em",fontFamily:"Montserrat",fontSize:10,textAnchor:"end",fill:S},Y=function(e){var t=e.endTimeValue,c=e.width,r=e.historicalValues,i=e.uom,s=e.marginY,o=e.marginX,l=e.height,u=e.timeFormat,d=e.bottomAxisNumTicks,m=c-20,j={startTime:0,endTime:t},b=r,h=function(e){return new Date(1e3*parseInt(e.time))},O=m-o,x=l-s,p=Object(a.useMemo)((function(){return Object(w.a)({range:[o,O+o],domain:[1,j.endTime]})}),[O,o,j.endTime]),v=Object(a.useMemo)((function(){return Object(w.a)({domain:[Math.max.apply(Math,Object(N.a)(b.map((function(e){return e.value})))),Math.min.apply(Math,Object(N.a)(b.map((function(e){return e.value}))))],range:[0,x-s]})}),[x,s,b]),f=Object(a.useMemo)((function(){return Object(k.a)({range:[o,O+o],domain:Object(M.a)(b,h)})}),[O,o,b]),g=Object(a.useMemo)((function(){return Object(k.a)({range:[o,O+o],domain:Object(M.a)(b,h)})}),[O,o,b]),_=Object(a.useMemo)((function(){return Object(w.a)({range:[s,x],domain:[Math.min.apply(Math,Object(N.a)(b.map((function(e){return Math.min(e.value)})))),Math.max.apply(Math,Object(N.a)(b.map((function(e){return Math.max(e.value)}))))],reverse:!0})}),[x,s,b]);return Object(n.jsx)("div",{className:"text-left time-with-values-graph-elem",children:Object(n.jsxs)("svg",{width:m+s,height:l,children:[Object(n.jsx)(y.a,{data:b,x:function(e){var t;return null!==(t=g(h(e)))&&void 0!==t?t:0},y:function(e){var t;return null!==(t=_(function(e){return e.value}(e)))&&void 0!==t?t:0},yScale:_,fill:"#bdc3c7"}),Object(n.jsx)(D.a,{scale:p,height:x-s,top:s,numTicks:j.endTime,stroke:S,strokeWidth:1.5}),Object(n.jsx)(C.a,{top:x,scale:f,numTicks:d,stroke:S,hideTicks:!0,tickStroke:S,tickLabelProps:function(){return V},tickFormat:function(e){return A()(e).format(u)}}),Object(n.jsx)(T.a,{top:s,left:o,scale:v,numTicks:3,hideTicks:!0,stroke:S,tickStroke:S,tickLabelProps:function(){return L},tickFormat:function(e){return"".concat(e," ").concat(i)}})]})})},H=c(6),E=c.n(H),F=(c(144),function(e){var t=e.children,c=e.className,r=E()("card-elem",c);return Object(n.jsx)("div",{className:r,children:t})}),P=(c(145),c(20)),I=c.n(P),X=c(33),z=c(78),R=c(79),W=c(80),G=c.n(W),q="http://134.209.80.241:3100/",J=function(e,t){var c=Math.round(A()(t).valueOf()/1e3)-Math.round(A()(e).valueOf()/1e3),r=A()().valueOf()/1e3-A()().subtract(3,"days").valueOf()/1e3,n=A()().valueOf()/1e3-A()().subtract(3,"months").valueOf()/1e3,a=A()().valueOf()/1e3-A()().subtract(7,"months").valueOf()/1e3;return c<r?"1h":c>r&&c<n?"1d":c>n&&c<a?"1w":"4w"},U=function(){function e(){Object(z.a)(this,e)}return Object(R.a)(e,null,[{key:"makeGetRequest",value:function(){var e=Object(X.a)(I.a.mark((function e(t,c,r,n,a,i){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G()({method:"get",url:q+t,params:{fromDate:r,toDate:n,user:c,aggregateTimeScale:a,dataToGet:i}}).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(t,c,r,n,a,i){return e.apply(this,arguments)}}()},{key:"getPeriodData",value:function(){var t=Object(X.a)(I.a.mark((function t(c,r,n,a){var i,s,o;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=Math.round(A()(c).valueOf()/1e3),s=Math.round(A()(r).valueOf()/1e3),o=J(c,r),t.abrupt("return",e.makeGetRequest("data/period",n,i,s,o,a));case 4:case"end":return t.stop()}}),t)})));return function(e,c,r,n){return t.apply(this,arguments)}}()},{key:"getUsersList",value:function(){var t=Object(X.a)(I.a.mark((function t(){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.makeGetRequest("users"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getCurrentData",value:function(){var t=Object(X.a)(I.a.mark((function t(c,r){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.makeGetRequest("data/current",c,void 0,void 0,void 0,r));case 1:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}()}]),e}();U.user=void 0;c(162);var B,$=function(e){var t=e.onClickOnClose,c=e.onClickOnDevice,r=e.devices,a=e.activeDevice;return Object(n.jsxs)("div",{className:"side-menu dark",children:[Object(n.jsxs)("div",{className:"row top d-flex p-3 pl-4 justify-content-between align-items-center text-center",children:[Object(n.jsx)("p",{className:"col ml-5 mt-4 font-weight-bold",children:"CODOS APP"}),Object(n.jsx)("div",{className:"close-button border-0 mr-4",onClick:t,children:Object(n.jsx)(m.a,{icon:j.f,size:"lg"})})]}),Object(n.jsxs)("div",{className:"row menu my-5 ml-5 d-flex flex-column ",children:[Object(n.jsx)("p",{className:"font-weight-bold pb-4 h5",children:"Listado de dispositivos"}),Object(n.jsx)("ul",{className:"list-unstyled",children:r.map((function(e){return Object(n.jsx)("li",{className:"border-0 my-2 px-0 ".concat(e===a&&"menu-button-actived"," menu-button"),onClick:function(){return c(e)},children:e},e)}))})]}),Object(n.jsx)("hr",{className:"ml-5 text-left font-weight-bold"}),Object(n.jsx)("div",{className:"row about ml-5 mt-5 font-weight-bold",children:Object(n.jsx)(l.b,{to:"/about",className:"about-link",children:"About"})})]})},K=c(225),Q=(c(165),function(e){var t=e.children,c=e.isVisible;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(K.a,{in:c,timeout:1e3,classNames:"lateral",unmountOnExit:!0,children:t})})}),Z=function(e){var t=Object(a.useState)(localStorage.getItem(e)||""),c=Object(d.a)(t,2),r=c[0],n=c[1];return Object(a.useEffect)((function(){localStorage.setItem(e,r)}),[r,e]),[r,n]};!function(e){e.co2="co2",e.temperature="temperature",e.humidity="humidity"}(B||(B={}));c(166);var ee,te,ce=function(e){var t=e.color;return Object(n.jsx)("div",{className:"text-center loading py-5 ".concat(t),children:Object(n.jsx)(m.a,{icon:j.d,size:"lg"})})};!function(e){e[e.endTimeValue=8]="endTimeValue",e[e.marginY=20]="marginY",e[e.marginX=60]="marginX",e[e.bottomAxisNumTicks=7]="bottomAxisNumTicks",e[e.height=160]="height"}(ee||(ee={})),function(e){e.white="loading-white",e.darkGrey="loading-dark"}(te||(te={}));var re,ne=c(13),ae={ismenuActived:!1,currentCo2:0,currentTemperature:0,currentHumidity:0,co2Data:[],deviceList:[],isError:!1,isLoading:!1};!function(e){e.setMenuActived="setMenuActived",e.setCurrentCo2="setCurrentCo2",e.setCurrentTemperature="setCurrentTemperature",e.setCurrentHumidity="setCurrentHumidity",e.setCo2Data="setCo2Data",e.setDeviceList="setDeviceList",e.setIsError="setIsError",e.setIsLoading="setIsLoading"}(re||(re={}));var ie,se=function(e,t){var c=t.type,r=t.value;switch(c){case re.setMenuActived:return Object(ne.a)(Object(ne.a)({},e),{},{isMenuActived:r});case re.setCurrentCo2:return Object(ne.a)(Object(ne.a)({},e),{},{currentCo2:r});case re.setCurrentTemperature:return Object(ne.a)(Object(ne.a)({},e),{},{currentTemperature:r});case re.setCurrentHumidity:return Object(ne.a)(Object(ne.a)({},e),{},{currentHumidity:r});case re.setCo2Data:return Object(ne.a)(Object(ne.a)({},e),{},{co2Data:r});case re.setDeviceList:return Object(ne.a)(Object(ne.a)({},e),{},{deviceList:r});case re.setIsError:return Object(ne.a)(Object(ne.a)({},e),{},{isError:r});case re.setIsLoading:return Object(ne.a)(Object(ne.a)({},e),{},{isLoading:r})}},oe=function(){var e=Z("deviceSelected"),t=Object(d.a)(e,2),c=t[0],i=t[1],s=Object(a.useReducer)(se,ae),o=Object(d.a)(s,2),b=o[0],O=o[1];Object(a.useEffect)((function(){U.getUsersList().then((function(e){O({type:re.setDeviceList,value:e})}))}),[]),Object(a.useEffect)((function(){var e=A()().subtract(7,"hour").format("YYYY-MM-DD HH:mm"),t=A()().format("YYYY-MM-DD HH:mm");if(c){var r=U.getCurrentData(c,B.co2),n=U.getCurrentData(c,B.temperature),a=U.getCurrentData(c,B.humidity),i=U.getPeriodData(e,t,c,B.co2);Promise.all([r,n,a,i]).then((function(e){var t=Object(d.a)(e,4),c=t[0],r=t[1],n=t[2],a=t[3];O({type:re.setIsLoading,value:!1}),O({type:re.setCurrentCo2,value:c[0].value}),O({type:re.setCurrentTemperature,value:r[0].value}),O({type:re.setCurrentHumidity,value:n[0].value}),O({type:re.setCo2Data,value:a})})).catch((function(){return O({type:re.setIsError,value:!0})}))}}),[c]);var x=Object(a.useCallback)((function(e){i(e),O({type:re.setMenuActived,value:!1})}),[i]);return b.isError?Object(n.jsx)(u.a,{to:"/unexpected-error?redirectTo=/"}):b.isLoading&&c?Object(n.jsx)("div",{className:"container is-loading-container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col is-loading",children:Object(n.jsx)(ce,{color:te.darkGrey})})})}):Object(n.jsxs)("div",{className:"main",children:[Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(Q,{isVisible:b.isMenuActived,children:Object(n.jsx)($,{activeDevice:c,devices:b.deviceList,onClickOnClose:function(){return O({type:re.setMenuActived,value:!1})},onClickOnDevice:x})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col ml-4 pt-4 mt-3 h4 mb-0 d-inline menu-elem",children:Object(n.jsx)("p",{className:"mb-0 d-inline",onClick:function(){return O({type:re.setMenuActived,value:!0})},children:Object(n.jsx)(m.a,{icon:j.a,size:"lg"})})})})]}),!c&&Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col px-5 py-3 pt-5 mt-3",children:Object(n.jsx)("h4",{className:"select-a-device",children:"Acceda al men\xfa lateral y seleccione un dispositivo"})})})}),c&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(h,{eCoValue:Math.round(b.currentCo2)}),Object(n.jsx)("div",{className:"container px-5 text-center",children:Object(n.jsx)(F,{children:Object(n.jsxs)("div",{className:"row icon-with-value-elem",children:[Object(n.jsx)("div",{className:"col",children:Object(n.jsx)(p,{value:"".concat(Math.round(b.currentTemperature),"\xba"),icon:r.thermometer})}),Object(n.jsx)("div",{className:"col",children:Object(n.jsx)(p,{value:"".concat(Math.round(b.currentHumidity),"%"),icon:r.humidity})})]})})}),Object(n.jsx)("div",{className:"container px-5 pt-3 mt-4 mb-4 pb-2",children:Object(n.jsxs)(F,{className:"graph-elem",children:[Object(n.jsxs)("p",{className:"text-elem pt-3 pl-2 mb-3",children:["\xdaltimas ",8," horas"]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col text-center",children:Object(n.jsx)(g.a,{className:"graph-elem",children:function(e){var t=e.width;return Object(n.jsx)(Y,{endTimeValue:ee.endTimeValue,uom:"ppm",timeFormat:"H:mm",marginY:ee.marginY,marginX:ee.marginX,historicalValues:b.co2Data,bottomAxisNumTicks:ee.bottomAxisNumTicks,width:t,height:ee.height})}})})})]})}),Object(n.jsx)("div",{className:"container pt-1 pb-5",children:Object(n.jsx)("div",{className:"text-center m-auto rounded-circle search-elem",children:Object(n.jsx)(l.b,{to:"/history",className:"search-link",children:Object(n.jsx)(m.a,{icon:j.c,size:"lg"})})})})]})]})},le=(c(173),c(82)),ue=c.n(le),de=function(e){var t=e.text,c=e.date,r=e.onDateChanged,i=Object(a.useMemo)((function(){return ue.a.generate()}),[]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("label",{className:"pt-2 date-picker-text",htmlFor:i,children:[t,":"]}),Object(n.jsx)("input",{value:c,className:"date-picker-input",onChange:function(e){var t=e.target;return r(t.value)},name:t,type:"date",id:i})]})},me=(c(182),function(e){var t=e.value,c=e.children;return Object(n.jsxs)("div",{className:"py-4 mx-2",children:[Object(n.jsx)("div",{className:"card-tab inline d-inline-block px-3 py-1 text-center",children:t}),Object(n.jsx)("div",{className:"card-with-text-tab",children:c})]})}),je=(c(183),c(184),function(e){var t=e.title,c=e.children;return Object(n.jsx)("div",{className:"grey-background",children:Object(n.jsxs)("div",{className:"grey-layout__container container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(l.b,{to:"/",className:"ml-4 mt-4 rounded-circle grey-layout__arrow-back-elem",children:Object(n.jsx)(m.a,{icon:j.b,size:"lg"})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("h1",{className:"text-center grey-layout__text-elem",children:t})}),c]})})});!function(e){e[e.endTimeValue=10]="endTimeValue",e[e.marginY=20]="marginY",e[e.marginX=55]="marginX",e[e.bottomAxisNumTicks=5]="bottomAxisNumTicks",e[e.height=118]="height"}(ie||(ie={}));var be=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),c=t[0],r=t[1],i=Object(a.useState)(""),s=Object(d.a)(i,2),o=s[0],l=s[1],m=Object(a.useState)(),j=Object(d.a)(m,2),b=j[0],h=j[1],O=Object(a.useState)(),x=Object(d.a)(O,2),p=x[0],v=x[1],f=Object(a.useState)(),N=Object(d.a)(f,2),y=N[0],w=N[1],k=Z("deviceSelected"),C=Object(d.a)(k,1)[0],T=Object(a.useState)(),M=Object(d.a)(T,2),D=M[0],_=M[1],A=Object(a.useState)(!1),S=Object(d.a)(A,2),V=S[0],L=S[1],H=Object(a.useState)(!1),E=Object(d.a)(H,2),F=E[0],P=E[1];return V?Object(n.jsx)(u.a,{to:"/unexpected-error?redirectTo=history"}):Object(n.jsx)(je,{title:"Hist\xf3rico",children:Object(n.jsxs)("div",{className:"history dark",children:[Object(n.jsx)("div",{className:"row date-range-pickers-container pt-3 mt-3",children:Object(n.jsxs)("div",{className:"col mx-3 my-3",children:[Object(n.jsx)(de,{date:c,onDateChanged:function(e){return r(e)},text:"Desde"}),Object(n.jsx)(de,{date:o,onDateChanged:function(e){return l(e)},text:"Hasta"})]})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col pl-5 my-3",children:Object(n.jsxs)("button",{className:"search-button btn",disabled:!c||!o||c===o,onClick:function(){h(void 0),v(void 0),w(void 0),P(!0),_(D);var e=U.getPeriodData(c,o,C,B.co2),t=U.getPeriodData(c,o,C,B.temperature),r=U.getPeriodData(c,o,C,B.humidity);Promise.all([e,t,r]).then((function(e){var t=Object(d.a)(e,3),c=t[0],r=t[1],n=t[2];P(!1),h(c),v(r),w(n)})).catch((function(){return L(!0)}))},children:["Buscar"," "]})})}),c===o&&""!==c&&Object(n.jsx)("p",{className:"row px-5 pt-5 invalid-dates",children:"Por favor, seleccione un periodo mayor entre fechas."}),F&&Object(n.jsx)(ce,{color:te.white}),p&&y&&b&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(me,{value:"eCO\xb2",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(g.a,{className:"history-graph-elem",children:function(e){var t=e.width;return Object(n.jsx)(Y,{endTimeValue:ie.endTimeValue,uom:"ppm",timeFormat:"1h"===D?"H:mm":"DD-MM",marginY:ie.marginY,marginX:ie.marginX,historicalValues:b,bottomAxisNumTicks:ie.bottomAxisNumTicks,width:t,height:ie.height})}})})}),Object(n.jsx)(me,{value:"Temp.",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(g.a,{className:"history-graph-elem",children:function(e){var t=e.width;return Object(n.jsx)(Y,{endTimeValue:ie.endTimeValue,uom:"\xbaC",timeFormat:"1h"===D?"H:mm":"DD-MM",marginY:ie.marginY,marginX:ie.marginX,historicalValues:p,bottomAxisNumTicks:ie.bottomAxisNumTicks,width:t,height:ie.height})}})})}),Object(n.jsx)(me,{value:"Humidity",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(g.a,{className:"history-graph-elem",children:function(e){var t=e.width;return Object(n.jsx)(Y,{endTimeValue:ie.endTimeValue,uom:"%",timeFormat:"1h"===D?"H:mm":"DD-MM",marginY:ie.marginY,marginX:ie.marginX,historicalValues:y,bottomAxisNumTicks:ie.bottomAxisNumTicks,width:t,height:ie.height})}})})})]})]})})},he=c.p+"static/media/unexpected-error.49148320.png",Oe=c(83),xe=(c(197),function(){var e=Object(u.g)(),t=Object(Oe.parse)(e.search).redirectTo;return Object(n.jsx)("div",{className:"container pt-5 parent-unexcected-error",children:Object(n.jsxs)("div",{className:"unexpected-error",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)("div",{className:"m-auto unexpected-error__text",children:[Object(n.jsx)("p",{className:"font-weight-bold h5 py-3",children:"\xa1Vaya!"}),Object(n.jsx)("p",{className:"unexpected-error__down-text",children:"Algo no fue como esper\xe1bamos"})]})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col px-5 unexpected-error__robot-img",children:Object(n.jsx)("img",{src:he,alt:"robot"})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col text-center m-5",children:Object(n.jsxs)("button",{className:"btn mt-3 py-2 px-5 font-weight-bold unexpected-error__button",children:[Object(n.jsx)(l.b,{to:t||"/",className:"search-link",children:"Volver"})," "]})})})]})})}),pe=function(e){var t=e.children,c=Object(u.g)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[c]),t},ve=(c(198),c(199),c(84)),fe=function(){return Object(n.jsx)(je,{title:"Informaci\xf3n",children:Object(n.jsxs)("div",{className:"about dark",children:[Object(n.jsxs)("div",{className:"row mx-5 pt-5 mt-3",children:[Object(n.jsx)("p",{className:"about__header mb-1",children:"Proyecto de:"}),Object(n.jsx)("ul",{className:"list-unstyled mt-0",children:Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:"about__anchor",href:"https://mallorcaboot.camp/",rel:"noreferrer",target:"_blank",children:"Mallorca Bootcamp"})})})]}),Object(n.jsxs)("div",{className:"row mx-5 pt-3",children:[Object(n.jsx)("p",{className:"about__header mb-1",children:"Desarrollado por:"}),Object(n.jsxs)("ul",{className:"list-unstyled",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:"about__anchor",href:"https://github.com/Ralvgar",rel:"noreferrer",target:"_blank",children:"Roberto \xc1lvarez Garc\xeda"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:"about__anchor",href:"https://github.com/JosemiChaves9",rel:"noreferrer",target:"_blank",children:"Jose Miguel Chaves Ojeda"})})]})]}),Object(n.jsxs)("div",{className:"row mx-5 pt-3",children:[Object(n.jsx)("p",{className:"about__header mb-1",children:"Dise\xf1o de interfaz:"}),Object(n.jsx)("ul",{className:"list-unstyled",children:Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:"about__anchor",href:"https://www.behance.net/lorenavicente",rel:"noreferrer",target:"_blank",children:"Lorena Vicente D\xedaz"})})})]}),Object(n.jsxs)("div",{className:"row mx-5 pt-3",children:[Object(n.jsx)("p",{className:"about__header mb-1",children:"Ilustraci\xf3n p\xe1gina de error:"}),Object(n.jsx)("ul",{className:"list-unstyled",children:Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:"about__anchor",href:"https://stories.freepik.com/web",rel:"noreferrer",target:"_blank",children:"Freepik Stories"})})})]}),Object(n.jsxs)("div",{className:"row mx-5 pt-3",children:[Object(n.jsx)("p",{className:"about__header mb-1",children:"Versi\xf3n:"}),Object(n.jsx)("ul",{className:"list-unstyled",children:Object(n.jsx)("li",{children:ve.version})})]})]})})};var ge=function(){return Object(n.jsx)(l.a,{children:Object(n.jsxs)(u.d,{children:[Object(n.jsx)(u.b,{path:"/history",children:Object(n.jsx)(pe,{children:Object(n.jsx)(be,{})})}),Object(n.jsx)(u.b,{path:"/",exact:!0,children:Object(n.jsx)(pe,{children:Object(n.jsx)(oe,{})})}),Object(n.jsx)(u.b,{path:"/unexpected-error",component:xe}),Object(n.jsx)(u.b,{path:"/about",component:fe})]})})},Ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ye(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(ge,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ne?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var r=c.headers.get("content-type");404===c.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ye(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ye(t,e)}))}}()},84:function(e){e.exports=JSON.parse('{"name":"codos-app-client","version":"1.0.0","private":true,"dependencies":{"@fortawesome/fontawesome-svg-core":"^1.2.32","@fortawesome/free-solid-svg-icons":"^5.15.1","@fortawesome/react-fontawesome":"^0.1.11","@types/d3-array":"^2.1.0","@types/react-router-dom":"^5.1.6","@types/react-transition-group":"^4.4.0","@types/shortid":"0.0.29","@typescript-eslint/eslint-plugin":"^4.4.1","@typescript-eslint/parser":"^4.4.1","@visx/axis":"^1.0.0","@visx/grid":"^1.0.0","@visx/responsive":"^1.0.0","@visx/scale":"^1.0.0","@visx/shape":"^1.0.0","axios":"^0.21.0","bootstrap":"^4.5.2","classnames":"^2.2.6","d3-array":"^2.8.0","moment":"^2.29.1","query-string":"^6.13.7","react":"^16.14.0","react-dom":"^16.13.1","react-router-dom":"^5.2.0","react-scripts":"^4.0.0","react-transition-group":"^4.4.1","sass":"^1.27.0","shortid":"^2.2.15","typescript":"^4.0.3"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')}},[[200,1,2]]]);
//# sourceMappingURL=main.0e9529db.chunk.js.map