"use strict";(self.webpackChunkmedicine_delivery_app=self.webpackChunkmedicine_delivery_app||[]).push([[944],{7609:function(e,n,r){r(2791);n.Z=r.p+"static/media/sprite.43412f926b759648a03fb442a9290726.svg"},1012:function(e,n,r){r.d(n,{f:function(){return d},g:function(){return a}});var t=r(5861),o=r(4687),i=r.n(o),s=r(5294),c=r(5218);function a(){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/api/drugstores");case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return u.apply(this,arguments)}function u(){return(u=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.post("/users",n);case 3:return r=e.sent,t=r.data,c.ZP.success("Your order has been accepted",{duration:3e3,position:"top-center"}),e.abrupt("return",t);case 9:throw e.prev=9,e.t0=e.catch(0),c.ZP.error("Something went wrong",{duration:3e3,position:"top-center"}),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}s.Z.defaults.baseURL="https://nodejs-medicine-delivery.onrender.com"},8669:function(e,n,r){r.d(n,{m:function(){return o},t:function(){return t}});var t=function(e,n){try{var r=JSON.stringify(n);localStorage.setItem(e,r)}catch(t){console.error("Set state error: ",t.message)}},o=function(e){try{var n=localStorage.getItem(e);return null===n?void 0:JSON.parse(n)}catch(r){console.error("Get state error: ",r.message)}}},8717:function(e,n,r){r.d(n,{C:function(){return o}});var t=r(5218),o=function(e,n){switch(e){case"success":t.ZP.success(n,{duration:3e3,position:"top-center"});break;case"error":t.ZP.error(n,{duration:3e3,position:"top-center"});break;default:(0,t.ZP)(n,{duration:3e3,position:"top-center"})}}},4944:function(e,n,r){r.r(n),r.d(n,{default:function(){return me}});var t,o,i,s,c,a,l,d,u,h,p,m,x,f,v,g,j,Z,b,y,w,k=r(5861),C=r(3433),P=r(9439),N=r(4687),S=r.n(N),B=r(168),I=r(7924),z=I.ZP.div(t||(t=(0,B.Z)(["\n  margin-top: 60px;\n"]))),R=I.ZP.div(o||(o=(0,B.Z)(["\n  display: flex;\n  height: calc(85vh - 60px);\n  border-bottom: 3px solid var(--sky-blue-color);\n"]))),q=I.ZP.div(i||(i=(0,B.Z)(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),_=I.ZP.div(s||(s=(0,B.Z)(["\n  height: 100%;\n  width: 50%;\n  background-color: var(--gray-color);\n  border-left: 3px solid var(--sky-blue-color);\n"]))),E=I.ZP.div(c||(c=(0,B.Z)(["\n  height: 15vh;\n  display: flex;\n  align-items: center;\n  justify-content: end;\n"]))),F=I.ZP.p(a||(a=(0,B.Z)(["\n  margin-right: 200px;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.43;\n"]))),A=I.ZP.button(l||(l=(0,B.Z)(["\n  margin-right: 50px;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 1.43;\n  color: var(--white-color);\n  border-radius: 16px;\n  padding: 12px 100px;\n  background-color: var(--sky-blue-color);\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    background-color: var(--blue-color);\n  }\n  &:disabled {\n    color: var(--disabled-text-color);\n    background-color: var(--disabled-color);\n    cursor: not-allowed;\n  }\n"]))),T=I.ZP.span(d||(d=(0,B.Z)(["\n  color: var(--sky-blue-color);\n"]))),$=I.ZP.div(u||(u=(0,B.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(100% - 87.6px);\n"]))),U=I.ZP.div(h||(h=(0,B.Z)(["\n  font-size: 30px;\n  text-align: center;\n  width: 600px;\n"]))),G=I.ZP.span(p||(p=(0,B.Z)(["\n  color: var(--sky-blue-color);\n  text-decoration: underline;\n"]))),H=(0,I.zo)("div")((function(){return{input:{fontSize:"14px",lineHeight:1.29,width:"100%",height:"46px",border:"1px solid rgba(239, 237, 232, 0.3)",borderRadius:"12px",backgroundColor:"var(--second-gray-color)",textIndent:"12px",outline:"none",paddingTop:"2px",transition:"border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)","&:hover, &:focus":{borderColor:"var(--active-color)"}},".inputs-cont":{display:"flex",flexDirection:"column",alignItems:"center",gap:"30px",width:"100%"},".input-cont":{width:"50%"},".input-error":{borderColor:"var(--error-color)"},".input-success":{borderColor:"var(--success-color)"},".notify-cont":{display:"flex",alignItems:"center",gap:"4px",marginTop:"4px"},".notify-descr":{fontSize:"12px",letterSpacing:"0.01em"},".error":{color:"var(--error-color)"},".success":{color:"var(--success-color)"}}})),J=r(7609),M=r(184),O=function(e){var n=e.formik;return(0,M.jsx)(H,{children:(0,M.jsx)("form",{id:"userForm",onSubmit:n.handleSubmit,children:(0,M.jsxs)("div",{className:"inputs-cont",children:[(0,M.jsxs)("div",{className:"input-cont",children:[(0,M.jsx)("input",{autoComplete:"off",name:"name",type:"text",placeholder:"Name*",value:n.values.name,onChange:n.handleChange,onBlur:n.handleBlur,className:n.errors.name&&n.touched.name&&n.values.name.length>0?"input-error":n.touched.name&&n.values.name.length>0?"input-success":""}),!n.errors.name&&n.touched.name&&n.values.name.length>0&&(0,M.jsxs)("div",{className:"notify-cont",children:[(0,M.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:(0,M.jsx)("use",{href:"".concat(J.Z,"#icon-checkbox-circle-fill")})}),(0,M.jsx)("p",{className:"notify-descr success",children:"Success name"})]}),n.errors.name&&n.touched.name&&n.values.name.length>0&&(0,M.jsxs)("div",{className:"notify-cont",children:[(0,M.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:(0,M.jsx)("use",{href:"".concat(J.Z,"#icon-red")})}),(0,M.jsx)("p",{className:"notify-descr error",children:n.errors.name})]})]}),(0,M.jsxs)("div",{className:"input-cont",children:[(0,M.jsx)("input",{autoComplete:"off",name:"email",type:"email",placeholder:"Email*",value:n.values.email,onChange:n.handleChange,onBlur:n.handleBlur,className:n.errors.email&&n.touched.email&&n.values.email.length>0?"input-error":n.touched.email&&n.values.email.length>0?"input-success":""}),!n.errors.email&&n.touched.email&&n.values.email.length>0&&(0,M.jsxs)("div",{className:"notify-cont",children:[(0,M.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:(0,M.jsx)("use",{href:"".concat(J.Z,"#icon-checkbox-circle-fill")})}),(0,M.jsx)("p",{className:"notify-descr success",children:"Success email"})]}),n.errors.email&&n.touched.email&&n.values.email.length>0&&(0,M.jsxs)("div",{className:"notify-cont",children:[(0,M.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:(0,M.jsx)("use",{href:"".concat(J.Z,"#icon-red")})}),(0,M.jsx)("p",{className:"notify-descr error",children:n.errors.email})]})]}),(0,M.jsxs)("div",{className:"input-cont",children:[(0,M.jsx)("input",{autoComplete:"off",name:"phone",type:"tel",placeholder:"Phone*",value:n.values.phone,onChange:n.handleChange,onBlur:n.handleBlur,className:n.errors.phone&&n.touched.phone&&n.values.phone.length>0?"input-error":n.touched.phone&&n.values.phone.length>0?"input-success":""}),!n.errors.phone&&n.touched.phone&&n.values.phone.length>0&&(0,M.jsxs)("div",{className:"notify-cont",children:[(0,M.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:(0,M.jsx)("use",{href:"".concat(J.Z,"#icon-checkbox-circle-fill")})}),(0,M.jsx)("p",{className:"notify-descr success",children:"Success phone"})]}),n.errors.phone&&n.touched.phone&&n.values.phone.length>0&&(0,M.jsxs)("div",{className:"notify-cont",children:[(0,M.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:(0,M.jsx)("use",{href:"".concat(J.Z,"#icon-red")})}),(0,M.jsx)("p",{className:"notify-descr error",children:n.errors.phone})]})]}),(0,M.jsxs)("div",{className:"input-cont",children:[(0,M.jsx)("input",{autoComplete:"off",name:"address",type:"text",placeholder:"Address*",value:n.values.address,onChange:n.handleChange,onBlur:n.handleBlur,className:n.errors.address&&n.touched.address&&n.values.address.length>0?"input-error":n.touched.address&&n.values.address.length>0?"input-success":""}),!n.errors.address&&n.touched.address&&n.values.address.length>0&&(0,M.jsxs)("div",{className:"notify-cont",children:[(0,M.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:(0,M.jsx)("use",{href:"".concat(J.Z,"#icon-checkbox-circle-fill")})}),(0,M.jsx)("p",{className:"notify-descr success",children:"Success address"})]}),n.errors.address&&n.touched.address&&n.values.address.length>0&&(0,M.jsxs)("div",{className:"notify-cont",children:[(0,M.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:(0,M.jsx)("use",{href:"".concat(J.Z,"#icon-red")})}),(0,M.jsx)("p",{className:"notify-descr error",children:n.errors.address})]})]})]})})})},V=r(2791),Y=r(8669),D=r(5705),L=r(6727),K=L.Ry().shape({name:L.Z_().required("Required"),email:L.Z_().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Error email. Example: test@gmail.com").required("Required"),phone:L.Z_().matches(/^\d{10}$/,"Error phone. Example: 0971234567").required("Required"),address:L.Z_().required("Required")}),Q=r(1012),W=r(4643),X=I.ZP.li(m||(m=(0,B.Z)(["\n  position: relative;\n  width: 750px;\n  height: 350px;\n  display: flex;\n  align-items: center;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n  background-color: var(--white-color);\n  margin: 10px;\n"]))),ee=I.ZP.button(x||(x=(0,B.Z)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: var(--white-color);\n  margin-top: 10px;\n  margin-right: 8px;\n"]))),ne=I.ZP.img(f||(f=(0,B.Z)(["\n  width: 60%;\n  height: 310px;\n  margin-left: 20px;\n  object-fit: cover;\n  border-radius: 12px;\n"]))),re=I.ZP.div(v||(v=(0,B.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 40%;\n  height: 100%;\n"]))),te=I.ZP.p(g||(g=(0,B.Z)(["\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 1.5;\n  margin-bottom: 20px;\n"]))),oe=I.ZP.div(j||(j=(0,B.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100px;\n  height: 50px;\n  border-radius: 15px;\n  background-color: var(--gray-color);\n  border: 1px solid var(--black-color);\n"]))),ie=I.ZP.p(Z||(Z=(0,B.Z)(["\n  margin-left: 25px;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.5;\n"]))),se=I.ZP.div(b||(b=(0,B.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 15px;\n  color: var(--gray-color);\n"]))),ce=I.ZP.button(y||(y=(0,B.Z)(["\n  border-radius: 10px;\n  background-color: var(--gray-color);\n"]))),ae=r(9285),le=function(e){var n=e.medicine,r=e.index,t=e.handleRemoveFromCart,o=e.setCartItems,i=e.cartItems;return(0,M.jsxs)(X,{children:[(0,M.jsx)(ee,{onClick:function(){return t(r)},children:(0,M.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 16 16",children:(0,M.jsx)("use",{href:"".concat(J.Z,"#icon-x")})})}),(0,M.jsx)(ne,{src:n.photo?"".concat("https://nodejs-medicine-delivery.onrender.com","/").concat(n.photo):ae,alt:n.name}),(0,M.jsxs)(re,{children:[(0,M.jsx)(W.o,{children:n.name.charAt(0).toUpperCase()+n.name.slice(1)}),(0,M.jsxs)(te,{children:["Price: ",n.price*(n.count||1),"$"]}),(0,M.jsxs)(oe,{children:[(0,M.jsx)(ie,{children:n.count||1}),(0,M.jsxs)(se,{children:[(0,M.jsx)(ce,{onClick:function(){return function(){var e=(0,C.Z)(i);e[r].count=(e[r].count||1)+1,o(e),(0,Y.t)("cartItems",e)}()},children:"\u2b06"}),(0,M.jsx)(ce,{onClick:function(){return function(){if(n.count>1){var e=(0,C.Z)(i);e[r].count=Math.max(e[r].count-1,1),o(e),(0,Y.t)("cartItems",e)}}()},children:"\u2b07"})]})]})]})]})},de=I.ZP.ul(w||(w=(0,B.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  overflow-y: auto;\n  height: calc(100% - 87.6px);\n"]))),ue=function(e){var n=e.cartItems,r=e.handleRemoveFromCart,t=e.setCartItems;return(0,M.jsx)(de,{children:n.map((function(e,o){return(0,M.jsx)(le,{medicine:e,index:o,handleRemoveFromCart:r,cartItems:n,setCartItems:t},e._id)}))})},he=r(1087),pe=r(8717),me=function(){var e=(0,V.useState)([]),n=(0,P.Z)(e,2),r=n[0],t=n[1],o=(0,V.useState)(0),i=(0,P.Z)(o,2),s=i[0],c=i[1];(0,V.useEffect)((function(){var e=(0,Y.m)("cartItems")||[];t(e)}),[]),(0,V.useEffect)((function(){var e=function(){var e=0;return r.forEach((function(n){e+=n.price*(n.count||1)})),e}();c(e)}),[r]);var a=function(){var e=(0,k.Z)(S().mark((function e(n,t){var o,i,c,a,l,d;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n.name,i=n.email,c=n.phone,a=n.address,0!==(l=r.map((function(e){return{medicine:e.name,quantity:e.count||1,price:e.price*(e.count||1)}}))).length){e.next=5;break}return(0,pe.C)("error","Your cart is empty. Add some medicines"),e.abrupt("return");case 5:return d={name:o,email:i,phone:c,address:a,orderedMedicines:l,totalPrice:s},e.next=8,(0,Q.f)(d);case 8:return e.next=10,new Promise((function(e){return setTimeout(e,1e3)}));case 10:t.resetForm();case 11:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),l=(0,D.TA)({initialValues:{name:"",email:"",phone:"",address:""},validationSchema:K,onSubmit:a});return(0,M.jsxs)(z,{children:[(0,M.jsxs)(R,{children:[(0,M.jsx)(q,{children:(0,M.jsx)(O,{formik:l})}),(0,M.jsxs)(_,{children:[(0,M.jsx)(W.N,{children:"Selected drugs"}),0===r.length?(0,M.jsx)($,{children:(0,M.jsxs)(U,{children:["Here is empty at this moment. Go to the"," ",(0,M.jsx)(G,{children:(0,M.jsx)(he.rU,{to:"/",children:"shops"})})," ","page and select the medicine."]})}):(0,M.jsx)(ue,{cartItems:r,handleRemoveFromCart:function(e){var n=(0,C.Z)(r);n.splice(e,1),t(n),(0,Y.t)("cartItems",n)},setCartItems:t})]})]}),(0,M.jsxs)(E,{children:[(0,M.jsxs)(F,{children:["Total price: ",(0,M.jsxs)(T,{children:[s,"$"]})]}),(0,M.jsx)(A,{type:"submit",disabled:l.isSubmitting,onClick:function(){l.dirty&&l.isValid||(0,pe.C)("error","Please fill in all required fields correctly")},form:"userForm",children:"Submit"})]})]})}},4643:function(e,n,r){r.d(n,{N:function(){return c},o:function(){return a}});var t,o,i=r(168),s=r(7924),c=s.ZP.h2(t||(t=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n  margin-top: 20px;\n"]))),a=s.ZP.h3(o||(o=(0,i.Z)(["\n  font-size: 18px;\n  margin: 15px 0;\n  font-weight: 600;\n  font-size: 28px;\n"])))},9285:function(e,n,r){e.exports=r.p+"static/media/stock-illustration-drugs-and-pills.a082834e21f168e479a7.jpg"}}]);
//# sourceMappingURL=944.ac45cf90.chunk.js.map