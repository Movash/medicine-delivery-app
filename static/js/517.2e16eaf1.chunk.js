"use strict";(self.webpackChunkmedicine_delivery_app=self.webpackChunkmedicine_delivery_app||[]).push([[517],{7609:function(n,e,r){r(2791);e.Z=r.p+"static/media/sprite.0533a6db5d54f3a659d372c02b07eba8.svg"},1012:function(n,e,r){r.d(e,{f:function(){return u},g:function(){return s}});var t=r(5861),o=r(4687),i=r.n(o),c=r(5294),a=r(8717);function s(){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/api/drugstores");case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(n){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.post("/users",e);case 3:return r=n.sent,t=r.data,(0,a.C)("success","Your order has been accepted"),n.abrupt("return",t);case 9:throw n.prev=9,n.t0=n.catch(0),(0,a.C)("error","Something went wrong"),n.t0;case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}c.Z.defaults.baseURL="https://nodejs-medicine-delivery.onrender.com"},8669:function(n,e,r){r.d(e,{m:function(){return o},t:function(){return t}});var t=function(n,e){try{var r=JSON.stringify(e);localStorage.setItem(n,r)}catch(t){console.error("Set state error: ",t.message)}},o=function(n){try{var e=localStorage.getItem(n);return null===e?void 0:JSON.parse(e)}catch(r){console.error("Get state error: ",r.message)}}},8717:function(n,e,r){r.d(e,{C:function(){return o}});var t=r(5218),o=function(n,e){switch(n){case"success":t.ZP.success(e,{duration:3e3,position:"top-center"});break;case"error":t.ZP.error(e,{duration:3e3,position:"top-center"});break;default:(0,t.ZP)(e,{duration:3e3,position:"top-center"})}}},6517:function(n,e,r){r.r(e),r.d(e,{default:function(){return on}});var t,o,i,c,a,s,l,u,d,p,f,h,x,v,g=r(5861),b=r(9439),m=r(4687),Z=r.n(m),k=r(2791),y=r(1012),w=r(6143),j=r(3433),S=r(8669),P=r(168),C=r(7924),z=C.ZP.button(t||(t=(0,P.Z)(["\n  margin-bottom: 15px;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.43;\n  color: var(--white-color);\n  border-radius: 12px;\n  padding: 12px 50px;\n  background-color: var(--sky-blue-color);\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    background-color: var(--blue-color);\n  }\n"]))),M=C.ZP.li(o||(o=(0,P.Z)(["\n  position: relative;\n  width: 400px;\n  height: 350px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n  background-color: var(--gray-color);\n  margin: 10px;\n"]))),I=C.ZP.img(i||(i=(0,P.Z)(["\n  width: 100%;\n  height: 230px;\n  object-fit: cover;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n"]))),W=C.ZP.svg(c||(c=(0,P.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  width: 24px;\n  height: 24px;\n  fill: ",";\n"])),(function(n){return n.$active?"var(--sky-blue-color)":"var(--white-color)"})),_=C.ZP.div(a||(a=(0,P.Z)(["\n  position: absolute;\n  top: 20px;\n  left: 0%;\n  background-color: var(--sky-blue-color);\n  width: 40px;\n  height: 30px;\n  border-radius: 0 15px 15px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--white-color);\n  font-weight: 600;\n"]))),N=r(7609),A=r(9285),E=r(4643),H=r(8717),O=r(184),B=function(n){var e=n.medicine,r=(0,k.useState)(!1),t=(0,b.Z)(r,2),o=t[0],i=t[1];(0,k.useEffect)((function(){var n=(0,S.m)("favoriteMedicines")||[];i(n.some((function(n){return n.name===e.name})))}),[e.name]);return(0,O.jsxs)(M,{children:[(0,O.jsx)(W,{$active:o,onClick:function(){i(!o);var n=(0,S.m)("favoriteMedicines")||[];if(o){var r=n.filter((function(n){return n.name!==e.name}));(0,S.t)("favoriteMedicines",r)}else{var t=[].concat((0,j.Z)(n),[e]);(0,S.t)("favoriteMedicines",t)}},children:(0,O.jsx)("use",{href:"".concat(N.Z,"#icon-heart-").concat(o?"active":"normal")})}),(0,O.jsxs)(_,{children:[e.price,"$"]}),(0,O.jsx)(I,{src:e.photo?"".concat("https://nodejs-medicine-delivery.onrender.com","/").concat(e.photo):A,alt:e.name}),(0,O.jsx)(E.o,{children:e.name.charAt(0).toUpperCase()+e.name.slice(1)}),(0,O.jsx)(z,{onClick:function(){return function(n){var e=(0,S.m)("cartItems")||[];if(e.some((function(e){return e.name===n.name})))(0,H.C)("error","Already added");else{(0,H.C)("success","Successfully added to shopping cart");var r=[n].concat((0,j.Z)(e));(0,S.t)("cartItems",r)}}(e)},children:"Add to Cart"})]})},R=r(1413),$=r(3145),J=r(8096),L=r(2390),U=r(5172),D=C.ZP.div(s||(s=(0,P.Z)(["\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: end;\n  gap: 18px;\n"]))),F=C.ZP.div(l||(l=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),G=(C.ZP.button(u||(u=(0,P.Z)(["\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.43;\n  color: var(--white-color);\n  border-radius: 12px;\n  padding: 12px 50px;\n  background-color: var(--sky-blue-color);\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &.searchPadding {\n    padding: 14px 44px;\n  }\n  &:hover,\n  &:focus {\n    background-color: var(--blue-color);\n  }\n"]))),{inputBase:{height:"48px",width:"224px",fontWeight:500,fontSize:"18px",color:"#121417"},selectIcon:{color:"var(--black-color)"}}),T={maxHeight:224,maxWidth:272,marginTop:4,border:"1px solid var(--black-opacity-5-color)",borderRadius:"14px",fontWeight:500,fontSize:"16px",lineHeight:"1.25",background:"var(--white-color)",color:"var(--black-opacity-20-color)"},Y={width:194,height:52,borderRadius:"14px",background:"var(--gray-color)","& .MuiOutlinedInput-notchedOutline":{border:"none"}},q={fontWeight:500,fontSize:"16px",lineHeight:"1.25",color:"var(--black-opacity-20-color)",transition:"color 250ms cubic-bezier(0.4, 0, 0.2, 1)","&:hover":{color:"var(--black-color)",background:"none"},"&.Mui-selected":{color:"var(--black-color)",background:"none","&:hover":{background:"none"}}},K=function(n){var e=n.medicines,r=n.setSortedMedicines,t=(0,k.useState)(""),o=(0,b.Z)(t,2),i=o[0],c=o[1];return(0,O.jsx)(D,{children:(0,O.jsx)(F,{children:(0,O.jsx)(J.Z,{sx:{".MuiInputBase-formControl":G.inputBase,".MuiSelect-icon":G.selectIcon},children:(0,O.jsxs)(L.Z,{MenuProps:{PaperProps:{style:(0,R.Z)({},T)}},sx:Y,value:i,displayEmpty:!0,inputProps:{"aria-label":"Without label"},onChange:function(n){var t=n.target.value;if(c(t),"asc"===t){var o=(0,j.Z)(e).sort((function(n,e){return n.price-e.price}));r(o)}else if("desc"===t){var i=(0,j.Z)(e).sort((function(n,e){return e.price-n.price}));r(i)}else r((0,j.Z)(e))},IconComponent:U.Z,children:[(0,O.jsx)($.Z,{sx:q,value:"",children:"Sort by price"}),(0,O.jsx)($.Z,{sx:q,value:"asc",children:"Ascending"}),(0,O.jsx)($.Z,{sx:{fontWeight:500,fontSize:"16px",lineHeight:"1.25",color:"var(--black-opacity-20-color)",transition:"color 250ms cubic-bezier(0.4, 0, 0.2, 1)","&:hover":{color:"var(--black-color)",background:"none"},"&.Mui-selected":{color:"var(--black-color)",background:"none","&:hover":{background:"none"}}},value:"desc",children:"Descending"})]})})})})},Q=C.ZP.ul(d||(d=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  overflow-y: auto;\n  height: calc(100% - 87.6px - 48px);\n"]))),V=function(n){var e,r=n.selectedShop,t=(0,k.useState)(r.medicines),o=(0,b.Z)(t,2),i=o[0],c=o[1];(0,k.useEffect)((function(){c(r.medicines)}),[r]);var a=new Set((null===(e=(0,S.m)("favoriteMedicines"))||void 0===e?void 0:e.map((function(n){return n.name})))||[]),s=i.sort((function(n,e){var r=a.has(n.name);return r===a.has(e.name)?0:r?-1:1}));return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(K,{medicines:r.medicines,setSortedMedicines:c}),(0,O.jsx)(Q,{children:s.map((function(n){return(0,O.jsx)(B,{medicine:n},n._id)}))})]})},X=C.ZP.div(p||(p=(0,P.Z)(["\n  margin-top: 60px;\n  display: flex;\n"]))),nn=C.ZP.div(f||(f=(0,P.Z)(["\n  width: 25%;\n"]))),en=C.ZP.div(h||(h=(0,P.Z)(["\n  height: calc(100vh - 60px);\n  width: 75%;\n  border-left: 3px solid var(--sky-blue-color);\n  background-color: var(--white-color);\n"]))),rn=C.ZP.ul(x||(x=(0,P.Z)(["\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),tn=C.ZP.li(v||(v=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.43;\n  color: var(--white-color);\n  border-radius: 12px;\n  padding: 12px 0;\n  background-color: var(--sky-blue-color);\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  margin-bottom: 10px;\n  &:hover {\n    background-color: var(--blue-color);\n  }\n"]))),on=function(){var n=(0,k.useState)([]),e=(0,b.Z)(n,2),r=e[0],t=e[1],o=(0,k.useState)(""),i=(0,b.Z)(o,2),c=i[0],a=i[1],s=(0,k.useState)(!1),l=(0,b.Z)(s,2),u=l[0],d=l[1],p=(0,k.useState)(null),f=(0,b.Z)(p,2),h=f[0],x=f[1];(0,k.useEffect)((function(){var n=function(){var n=(0,g.Z)(Z().mark((function n(){var e,r;return Z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(!0),a(""),n.next=5,(0,y.g)();case 5:e=n.sent,t(e),x(e[0]),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),r=n.t0.message,a(r);case 14:return n.prev=14,d(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[0,10,14,17]])})));return function(){return n.apply(this,arguments)}}();n()}),[]);return(0,O.jsxs)(X,{children:[c&&(0,O.jsx)("h1",{children:c}),u&&(0,O.jsx)(w.Z,{}),(0,O.jsxs)(nn,{children:[(0,O.jsx)(E.N,{children:"List of pharmacies"}),(0,O.jsx)(rn,{children:r.map((function(n){return(0,O.jsx)(tn,{onClick:function(){return function(n){x(n)}(n)},children:n.pharmacy},n._id)}))})]}),h&&(0,O.jsxs)(en,{children:[(0,O.jsxs)(E.N,{children:["Medicines in ",h.pharmacy]}),(0,O.jsx)(V,{selectedShop:h})]})]})}},4643:function(n,e,r){r.d(e,{N:function(){return a},o:function(){return s}});var t,o,i=r(168),c=r(7924),a=c.ZP.h2(t||(t=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n  margin-top: 20px;\n"]))),s=c.ZP.h3(o||(o=(0,i.Z)(["\n  font-size: 18px;\n  margin: 15px 0;\n  font-weight: 600;\n  font-size: 28px;\n"])))},9285:function(n,e,r){n.exports=r.p+"static/media/stock-illustration-drugs-and-pills.a082834e21f168e479a7.jpg"}}]);
//# sourceMappingURL=517.2e16eaf1.chunk.js.map