"use strict";(self.webpackChunkmedicine_delivery_app=self.webpackChunkmedicine_delivery_app||[]).push([[517],{7609:function(n,e,r){r(2791);e.Z=r.p+"static/media/sprite.0533a6db5d54f3a659d372c02b07eba8.svg"},1012:function(n,e,r){r.d(e,{f:function(){return u},g:function(){return s}});var o=r(5861),t=r(4687),i=r.n(t),c=r(5294),a=r(8717);function s(){return l.apply(this,arguments)}function l(){return(l=(0,o.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/api/drugstores");case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(n){return d.apply(this,arguments)}function d(){return(d=(0,o.Z)(i().mark((function n(e){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.post("/users",e);case 3:return r=n.sent,o=r.data,(0,a.C)("success","Your order has been accepted"),n.abrupt("return",o);case 9:throw n.prev=9,n.t0=n.catch(0),(0,a.C)("error","Something went wrong"),n.t0;case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}c.Z.defaults.baseURL="https://nodejs-medicine-delivery.onrender.com"},8669:function(n,e,r){r.d(e,{m:function(){return t},t:function(){return o}});var o=function(n,e){try{var r=JSON.stringify(e);localStorage.setItem(n,r)}catch(o){console.error("Set state error: ",o.message)}},t=function(n){try{var e=localStorage.getItem(n);return null===e?void 0:JSON.parse(e)}catch(r){console.error("Get state error: ",r.message)}}},8717:function(n,e,r){r.d(e,{C:function(){return t}});var o=r(5218),t=function(n,e){switch(n){case"success":o.ZP.success(e,{duration:3e3,position:"top-center"});break;case"error":o.ZP.error(e,{duration:3e3,position:"top-center"});break;default:(0,o.ZP)(e,{duration:3e3,position:"top-center"})}}},6517:function(n,e,r){r.r(e),r.d(e,{default:function(){return rn}});var o,t,i,c,a,s,l,u,d,p,f,h,x,v,g=r(5861),b=r(9439),m=r(4687),Z=r.n(m),k=r(2791),y=r(1012),w=r(6143),j=r(3433),S=r(8669),P=r(168),z=r(7924),C=z.ZP.button(o||(o=(0,P.Z)(["\n  margin-bottom: 15px;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.43;\n  color: var(--white-color);\n  border-radius: 12px;\n  padding: 12px 50px;\n  background-color: var(--sky-blue-color);\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    background-color: var(--blue-color);\n  }\n"]))),M=z.ZP.li(t||(t=(0,P.Z)(["\n  position: relative;\n  width: 400px;\n  height: 350px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n  background-color: var(--gray-color);\n  margin: 10px;\n"]))),I=z.ZP.img(i||(i=(0,P.Z)(["\n  width: 100%;\n  height: 230px;\n  object-fit: cover;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n"]))),W=z.ZP.svg(c||(c=(0,P.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  width: 24px;\n  height: 24px;\n  fill: ",";\n"])),(function(n){return n.$active?"var(--sky-blue-color)":"var(--white-color)"})),_=z.ZP.div(a||(a=(0,P.Z)(["\n  position: absolute;\n  top: 20px;\n  left: 0%;\n  background-color: var(--sky-blue-color);\n  width: 40px;\n  height: 30px;\n  border-radius: 0 15px 15px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--white-color);\n  font-weight: 600;\n"]))),H=r(7609),N=r(9285),A=r(4643),E=r(8717),O=r(184),B=function(n){var e=n.medicine,r=(0,k.useState)(!1),o=(0,b.Z)(r,2),t=o[0],i=o[1];(0,k.useEffect)((function(){var n=(0,S.m)("favoriteMedicines")||[];i(n.some((function(n){return n.name===e.name})))}),[e.name]);return(0,O.jsxs)(M,{children:[(0,O.jsx)(W,{$active:t,onClick:function(){i(!t);var n=(0,S.m)("favoriteMedicines")||[];if(t){var r=n.filter((function(n){return n.name!==e.name}));(0,S.t)("favoriteMedicines",r)}else{var o=[].concat((0,j.Z)(n),[e]);(0,S.t)("favoriteMedicines",o)}},children:(0,O.jsx)("use",{href:"".concat(H.Z,"#icon-heart-").concat(t?"active":"normal")})}),(0,O.jsxs)(_,{children:[e.price,"$"]}),(0,O.jsx)(I,{src:e.photo?"".concat("https://nodejs-medicine-delivery.onrender.com","/").concat(e.photo):N,alt:e.name}),(0,O.jsx)(A.o,{children:e.name.charAt(0).toUpperCase()+e.name.slice(1)}),(0,O.jsx)(C,{onClick:function(){return function(n){var e=(0,S.m)("cartItems")||[];if(e.some((function(e){return e.name===n.name})))(0,E.C)("error","Already added");else{(0,E.C)("success","Successfully added to shopping cart");var r=[n].concat((0,j.Z)(e));(0,S.t)("cartItems",r)}}(e)},children:"Add to Cart"})]})},R=r(1413),$=r(3145),J=r(8096),L=r(2390),U=r(5172),D=z.ZP.div(s||(s=(0,P.Z)(["\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: end;\n  gap: 18px;\n"]))),F=z.ZP.div(l||(l=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),G=(z.ZP.button(u||(u=(0,P.Z)(["\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.43;\n  color: var(--white-color);\n  border-radius: 12px;\n  padding: 12px 50px;\n  background-color: var(--sky-blue-color);\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &.searchPadding {\n    padding: 14px 44px;\n  }\n  &:hover,\n  &:focus {\n    background-color: var(--blue-color);\n  }\n"]))),{inputBase:{height:"48px",width:"224px",fontWeight:500,fontSize:"18px",color:"#121417"},selectIcon:{color:"var(--black-color)"}}),T={maxHeight:224,maxWidth:272,marginTop:4,border:"1px solid var(--black-opacity-5-color)",borderRadius:"14px",fontWeight:500,fontSize:"16px",lineHeight:"1.25",background:"var(--white-color)",color:"var(--black-opacity-20-color)"},Y=function(n){var e=n.medicines,r=n.setSortedMedicines,o=(0,k.useState)(""),t=(0,b.Z)(o,2),i=t[0],c=t[1];return(0,O.jsx)(D,{children:(0,O.jsx)(F,{children:(0,O.jsx)(J.Z,{sx:{".MuiInputBase-formControl":G.inputBase,".MuiSelect-icon":G.selectIcon},children:(0,O.jsxs)(L.Z,{MenuProps:{PaperProps:{style:(0,R.Z)({},T)}},sx:{width:194,height:52,borderRadius:"14px",background:"var(--gray-color)","& .MuiOutlinedInput-notchedOutline":{border:"none"}},value:i,displayEmpty:!0,inputProps:{"aria-label":"Without label"},onChange:function(n){var o=n.target.value;if(c(o),"asc"===o){var t=(0,j.Z)(e).sort((function(n,e){return n.price-e.price}));r(t)}else if("desc"===o){var i=(0,j.Z)(e).sort((function(n,e){return e.price-n.price}));r(i)}else r((0,j.Z)(e))},IconComponent:U.Z,children:[(0,O.jsx)($.Z,{sx:{fontWeight:500,fontSize:"16px",lineHeight:"1.25",color:"var(--black-opacity-20-color)",transition:"color 250ms cubic-bezier(0.4, 0, 0.2, 1)","&:hover":{color:"var(--black-color)",background:"none"},"&.Mui-selected":{color:"var(--black-color)",background:"none","&:hover":{background:"none"}}},value:"",children:"Sort by price"}),(0,O.jsx)($.Z,{sx:{fontWeight:500,fontSize:"16px",lineHeight:"1.25",color:"var(--black-opacity-20-color)",transition:"color 250ms cubic-bezier(0.4, 0, 0.2, 1)","&:hover":{color:"var(--black-color)",background:"none"},"&.Mui-selected":{color:"var(--black-color)",background:"none","&:hover":{background:"none"}}},value:"asc",children:"Ascending"}),(0,O.jsx)($.Z,{sx:{fontWeight:500,fontSize:"16px",lineHeight:"1.25",color:"var(--black-opacity-20-color)",transition:"color 250ms cubic-bezier(0.4, 0, 0.2, 1)","&:hover":{color:"var(--black-color)",background:"none"},"&.Mui-selected":{color:"var(--black-color)",background:"none","&:hover":{background:"none"}}},value:"desc",children:"Descending"})]})})})})},q=z.ZP.ul(d||(d=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  overflow-y: auto;\n  height: calc(100% - 87.6px - 48px);\n"]))),K=function(n){var e,r=n.selectedShop,o=(0,k.useState)(r.medicines),t=(0,b.Z)(o,2),i=t[0],c=t[1];(0,k.useEffect)((function(){c(r.medicines)}),[r]);var a=new Set((null===(e=(0,S.m)("favoriteMedicines"))||void 0===e?void 0:e.map((function(n){return n.name})))||[]),s=i.sort((function(n,e){var r=a.has(n.name);return r===a.has(e.name)?0:r?-1:1}));return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(Y,{medicines:r.medicines,setSortedMedicines:c}),(0,O.jsx)(q,{children:s.map((function(n){return(0,O.jsx)(B,{medicine:n},n._id)}))})]})},Q=z.ZP.div(p||(p=(0,P.Z)(["\n  margin-top: 60px;\n  display: flex;\n"]))),V=z.ZP.div(f||(f=(0,P.Z)(["\n  width: 25%;\n"]))),X=z.ZP.div(h||(h=(0,P.Z)(["\n  height: calc(100vh - 60px);\n  width: 75%;\n  border-left: 3px solid var(--sky-blue-color);\n  background-color: var(--white-color);\n"]))),nn=z.ZP.ul(x||(x=(0,P.Z)(["\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),en=z.ZP.li(v||(v=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.43;\n  color: var(--white-color);\n  border-radius: 12px;\n  padding: 12px 0;\n  background-color: var(--sky-blue-color);\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  margin-bottom: 10px;\n  &:hover {\n    background-color: var(--blue-color);\n  }\n"]))),rn=function(){var n=(0,k.useState)([]),e=(0,b.Z)(n,2),r=e[0],o=e[1],t=(0,k.useState)(""),i=(0,b.Z)(t,2),c=i[0],a=i[1],s=(0,k.useState)(!1),l=(0,b.Z)(s,2),u=l[0],d=l[1],p=(0,k.useState)(null),f=(0,b.Z)(p,2),h=f[0],x=f[1];(0,k.useEffect)((function(){var n=function(){var n=(0,g.Z)(Z().mark((function n(){var e,r;return Z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(!0),a(""),n.next=5,(0,y.g)();case 5:e=n.sent,o(e),x(e[0]),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),r=n.t0.message,a(r);case 14:return n.prev=14,d(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[0,10,14,17]])})));return function(){return n.apply(this,arguments)}}();n()}),[]);return(0,O.jsxs)(Q,{children:[c&&(0,O.jsx)("h1",{children:c}),u&&(0,O.jsx)(w.Z,{}),(0,O.jsxs)(V,{children:[(0,O.jsx)(A.N,{children:"List of pharmacies"}),(0,O.jsx)(nn,{children:r.map((function(n){return(0,O.jsx)(en,{onClick:function(){return function(n){x(n)}(n)},children:n.pharmacy},n._id)}))})]}),h&&(0,O.jsxs)(X,{children:[(0,O.jsxs)(A.N,{children:["Medicines in ",h.pharmacy]}),(0,O.jsx)(K,{selectedShop:h})]})]})}},4643:function(n,e,r){r.d(e,{N:function(){return a},o:function(){return s}});var o,t,i=r(168),c=r(7924),a=c.ZP.h2(o||(o=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n  margin-top: 20px;\n"]))),s=c.ZP.h3(t||(t=(0,i.Z)(["\n  font-size: 18px;\n  margin: 15px 0;\n  font-weight: 600;\n  font-size: 28px;\n"])))},9285:function(n,e,r){n.exports=r.p+"static/media/stock-illustration-drugs-and-pills.a082834e21f168e479a7.jpg"}}]);
//# sourceMappingURL=517.4f8ce4a4.chunk.js.map