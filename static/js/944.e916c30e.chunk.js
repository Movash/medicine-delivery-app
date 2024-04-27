"use strict";(self.webpackChunkmedicine_delivery_app=self.webpackChunkmedicine_delivery_app||[]).push([[944],{7609:function(e,n,r){r(2791);n.Z=r.p+"static/media/sprite.9018931cc6bfef169b70bcd19482f4b5.svg"},1012:function(e,n,r){r.d(n,{f:function(){return d},g:function(){return a}});var t=r(5861),o=r(4687),s=r.n(o),i=r(5294),c=r(8717);function a(){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/api/drugstores");case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return u.apply(this,arguments)}function u(){return(u=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.post("/users",n);case 3:return r=e.sent,t=r.data,(0,c.C)("success","Your order has been accepted"),e.abrupt("return",t);case 9:throw e.prev=9,e.t0=e.catch(0),(0,c.C)("error","Something went wrong"),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}i.Z.defaults.baseURL="https://nodejs-medicine-delivery.onrender.com"},8669:function(e,n,r){r.d(n,{m:function(){return o},t:function(){return t}});var t=function(e,n){try{var r=JSON.stringify(n);localStorage.setItem(e,r)}catch(t){console.error("Set state error: ",t.message)}},o=function(e){try{var n=localStorage.getItem(e);return null===n?void 0:JSON.parse(n)}catch(r){console.error("Get state error: ",r.message)}}},8717:function(e,n,r){r.d(n,{C:function(){return o}});var t=r(5218),o=function(e,n){switch(e){case"success":t.ZP.success(n,{duration:3e3,position:"top-center"});break;case"error":t.ZP.error(n,{duration:3e3,position:"top-center"});break;default:(0,t.ZP)(n,{duration:3e3,position:"top-center"})}}},4944:function(e,n,r){r.r(n),r.d(n,{default:function(){return ge}});var t,o,s,i,c,a,l,d,u,h,p,m,x,f,v,g,j,Z,b,y,w,k,C,P=r(5861),N=r(3433),S=r(9439),B=r(4687),z=r.n(B),I=r(2791),q=r(1087),R=r(5705),_=r(1012),E=r(7609),F=r(168),A=r(7924),T=(0,A.zo)("div")((function(){return{".input-cont":{width:"50%"},".input-error":{borderColor:"var(--error-color)"},".input-success":{borderColor:"var(--success-color)"},".notify-cont":{display:"flex",alignItems:"center",gap:"4px",marginTop:"4px"},".notify-descr":{fontSize:"12px",letterSpacing:"0.01em"},".error":{color:"var(--error-color)"},".success":{color:"var(--success-color)"}}})),$=A.zo.input(t||(t=(0,F.Z)(["\n  font-size: 14px;\n  line-height: 1.29;\n  width: 100%;\n  height: 46px;\n  border: 1px solid rgba(239, 237, 232, 0.3);\n  border-radius: 12px;\n  background-color: var(--second-gray-color);\n  text-indent: 12px;\n  outline: none;\n  padding-top: 2px;\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    border-color: var(--active-color);\n  }\n"]))),U=A.zo.div(o||(o=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n  width: 100%;\n"]))),G=r(184),J=function(e){var n=e.formik;return(0,G.jsx)(T,{children:(0,G.jsx)("form",{id:"userForm",onSubmit:n.handleSubmit,children:(0,G.jsxs)(U,{children:[(0,G.jsxs)("div",{className:"input-cont",children:[(0,G.jsx)($,{autoComplete:"off",name:"name",type:"text",placeholder:"Name*",value:n.values.name,onChange:n.handleChange,onBlur:n.handleBlur,className:n.errors.name&&n.touched.name&&n.values.name.length>0?"input-error":n.touched.name&&n.values.name.length>0?"input-success":""}),!n.errors.name&&n.touched.name&&n.values.name.length>0&&(0,G.jsxs)("div",{className:"notify-cont",children:[(0,G.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:(0,G.jsx)("use",{href:"".concat(E.Z,"#icon-checkbox-circle-fill")})}),(0,G.jsx)("p",{className:"notify-descr success",children:"Success name"})]}),n.errors.name&&n.touched.name&&n.values.name.length>0&&(0,G.jsxs)("div",{className:"notify-cont",children:[(0,G.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:(0,G.jsx)("use",{href:"".concat(E.Z,"#icon-red")})}),(0,G.jsx)("p",{className:"notify-descr error",children:n.errors.name})]})]}),(0,G.jsxs)("div",{className:"input-cont",children:[(0,G.jsx)($,{autoComplete:"off",name:"email",type:"email",placeholder:"Email*",value:n.values.email,onChange:n.handleChange,onBlur:n.handleBlur,className:n.errors.email&&n.touched.email&&n.values.email.length>0?"input-error":n.touched.email&&n.values.email.length>0?"input-success":""}),!n.errors.email&&n.touched.email&&n.values.email.length>0&&(0,G.jsxs)("div",{className:"notify-cont",children:[(0,G.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:(0,G.jsx)("use",{href:"".concat(E.Z,"#icon-checkbox-circle-fill")})}),(0,G.jsx)("p",{className:"notify-descr success",children:"Success email"})]}),n.errors.email&&n.touched.email&&n.values.email.length>0&&(0,G.jsxs)("div",{className:"notify-cont",children:[(0,G.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:(0,G.jsx)("use",{href:"".concat(E.Z,"#icon-red")})}),(0,G.jsx)("p",{className:"notify-descr error",children:n.errors.email})]})]}),(0,G.jsxs)("div",{className:"input-cont",children:[(0,G.jsx)($,{autoComplete:"off",name:"phone",type:"tel",placeholder:"Phone*",value:n.values.phone,onChange:n.handleChange,onBlur:n.handleBlur,className:n.errors.phone&&n.touched.phone&&n.values.phone.length>0?"input-error":n.touched.phone&&n.values.phone.length>0?"input-success":""}),!n.errors.phone&&n.touched.phone&&n.values.phone.length>0&&(0,G.jsxs)("div",{className:"notify-cont",children:[(0,G.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:(0,G.jsx)("use",{href:"".concat(E.Z,"#icon-checkbox-circle-fill")})}),(0,G.jsx)("p",{className:"notify-descr success",children:"Success phone"})]}),n.errors.phone&&n.touched.phone&&n.values.phone.length>0&&(0,G.jsxs)("div",{className:"notify-cont",children:[(0,G.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:(0,G.jsx)("use",{href:"".concat(E.Z,"#icon-red")})}),(0,G.jsx)("p",{className:"notify-descr error",children:n.errors.phone})]})]}),(0,G.jsxs)("div",{className:"input-cont",children:[(0,G.jsx)($,{autoComplete:"off",name:"address",type:"text",placeholder:"Address*",value:n.values.address,onChange:n.handleChange,onBlur:n.handleBlur,className:n.errors.address&&n.touched.address&&n.values.address.length>0?"input-error":n.touched.address&&n.values.address.length>0?"input-success":""}),!n.errors.address&&n.touched.address&&n.values.address.length>0&&(0,G.jsxs)("div",{className:"notify-cont",children:[(0,G.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:(0,G.jsx)("use",{href:"".concat(E.Z,"#icon-checkbox-circle-fill")})}),(0,G.jsx)("p",{className:"notify-descr success",children:"Success address"})]}),n.errors.address&&n.touched.address&&n.values.address.length>0&&(0,G.jsxs)("div",{className:"notify-cont",children:[(0,G.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",children:(0,G.jsx)("use",{href:"".concat(E.Z,"#icon-red")})}),(0,G.jsx)("p",{className:"notify-descr error",children:n.errors.address})]})]})]})})})},M=r(8669),O=r(6727),V=O.Ry().shape({name:O.Z_().required("Required"),email:O.Z_().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Error email. Example: test@gmail.com").required("Required"),phone:O.Z_().matches(/^\d{10}$/,"Error phone. Example: 0971234567").required("Required"),address:O.Z_().required("Required")}),Y=r(9285),H=r(4643),L=A.ZP.li(s||(s=(0,F.Z)(["\n  position: relative;\n  width: 750px;\n  height: 350px;\n  display: flex;\n  align-items: center;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n  background-color: var(--white-color);\n  margin: 10px;\n"]))),D=A.ZP.button(i||(i=(0,F.Z)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: var(--white-color);\n  margin-top: 10px;\n  margin-right: 8px;\n"]))),K=A.ZP.img(c||(c=(0,F.Z)(["\n  width: 60%;\n  height: 310px;\n  margin-left: 20px;\n  object-fit: cover;\n  border-radius: 12px;\n"]))),Q=A.ZP.div(a||(a=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 40%;\n  height: 100%;\n"]))),W=A.ZP.p(l||(l=(0,F.Z)(["\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 1.5;\n  margin-bottom: 20px;\n"]))),X=A.ZP.div(d||(d=(0,F.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100px;\n  height: 50px;\n  border-radius: 15px;\n  background-color: var(--gray-color);\n  border: 1px solid var(--black-color);\n"]))),ee=A.ZP.p(u||(u=(0,F.Z)(["\n  margin-left: 25px;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.5;\n"]))),ne=A.ZP.div(h||(h=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 15px;\n  color: var(--gray-color);\n"]))),re=A.ZP.button(p||(p=(0,F.Z)(["\n  border-radius: 10px;\n  background-color: var(--gray-color);\n"]))),te=function(e){var n=e.medicine,r=e.index,t=e.handleRemoveFromCart,o=e.setCartItems,s=e.cartItems;return(0,G.jsxs)(L,{children:[(0,G.jsx)(D,{onClick:function(){return t(r)},children:(0,G.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 16 16",children:(0,G.jsx)("use",{href:"".concat(E.Z,"#icon-x")})})}),(0,G.jsx)(K,{src:n.photo?"".concat("https://nodejs-medicine-delivery.onrender.com","/").concat(n.photo):Y,alt:n.name}),(0,G.jsxs)(Q,{children:[(0,G.jsx)(H.o,{children:n.name.charAt(0).toUpperCase()+n.name.slice(1)}),(0,G.jsxs)(W,{children:["Price: ",n.price*(n.count||1),"$"]}),(0,G.jsxs)(X,{children:[(0,G.jsx)(ee,{children:n.count||1}),(0,G.jsxs)(ne,{children:[(0,G.jsx)(re,{onClick:function(){return function(){var e=(0,N.Z)(s);e[r].count=(e[r].count||1)+1,o(e),(0,M.t)("cartItems",e)}()},children:(0,G.jsx)("svg",{width:"12",height:"12",children:(0,G.jsx)("use",{href:"".concat(E.Z,"#icon-arrow-top")})})}),(0,G.jsx)(re,{onClick:function(){return function(){if(n.count>1){var e=(0,N.Z)(s);e[r].count=Math.max(e[r].count-1,1),o(e),(0,M.t)("cartItems",e)}}()},children:(0,G.jsx)("svg",{width:"12",height:"12",children:(0,G.jsx)("use",{href:"".concat(E.Z,"#icon-arrow-bottom")})})})]})]})]})]})},oe=A.ZP.ul(m||(m=(0,F.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  overflow-y: auto;\n  height: calc(100% - 87.6px);\n"]))),se=function(e){var n=e.cartItems,r=e.handleRemoveFromCart,t=e.setCartItems;return(0,G.jsx)(oe,{children:n.map((function(e,o){return(0,G.jsx)(te,{medicine:e,index:o,handleRemoveFromCart:r,cartItems:n,setCartItems:t},e._id)}))})},ie=r(8717),ce=A.ZP.div(x||(x=(0,F.Z)(["\n  margin-top: 60px;\n"]))),ae=A.ZP.div(f||(f=(0,F.Z)(["\n  display: flex;\n  height: calc(85vh - 60px);\n  border-bottom: 3px solid var(--sky-blue-color);\n"]))),le=A.ZP.div(v||(v=(0,F.Z)(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),de=A.ZP.div(g||(g=(0,F.Z)(["\n  height: 100%;\n  width: 50%;\n  background-color: var(--gray-color);\n  border-left: 3px solid var(--sky-blue-color);\n"]))),ue=A.ZP.div(j||(j=(0,F.Z)(["\n  height: 15vh;\n  display: flex;\n  align-items: center;\n  justify-content: end;\n"]))),he=A.ZP.p(Z||(Z=(0,F.Z)(["\n  margin-right: 200px;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.43;\n"]))),pe=A.ZP.button(b||(b=(0,F.Z)(["\n  margin-right: 50px;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 1.43;\n  color: var(--white-color);\n  border-radius: 16px;\n  padding: 12px 100px;\n  background-color: var(--sky-blue-color);\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    background-color: var(--blue-color);\n  }\n  &:disabled {\n    color: var(--disabled-text-color);\n    background-color: var(--disabled-color);\n    cursor: not-allowed;\n  }\n"]))),me=A.ZP.span(y||(y=(0,F.Z)(["\n  color: var(--sky-blue-color);\n"]))),xe=A.ZP.div(w||(w=(0,F.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(100% - 87.6px);\n"]))),fe=A.ZP.div(k||(k=(0,F.Z)(["\n  font-size: 30px;\n  text-align: center;\n  width: 600px;\n"]))),ve=A.ZP.span(C||(C=(0,F.Z)(["\n  color: var(--sky-blue-color);\n  text-decoration: underline;\n"]))),ge=function(){var e=(0,I.useState)([]),n=(0,S.Z)(e,2),r=n[0],t=n[1],o=(0,I.useState)(0),s=(0,S.Z)(o,2),i=s[0],c=s[1];(0,I.useEffect)((function(){var e=(0,M.m)("cartItems")||[];t(e)}),[]),(0,I.useEffect)((function(){var e=function(){var e=0;return r.forEach((function(n){e+=n.price*(n.count||1)})),e}();c(e)}),[r]);var a=function(){var e=(0,P.Z)(z().mark((function e(n,t){var o,s,c,a,l,d;return z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n.name,s=n.email,c=n.phone,a=n.address,0!==(l=r.map((function(e){return{medicine:e.name,quantity:e.count||1,price:e.price*(e.count||1)}}))).length){e.next=5;break}return(0,ie.C)("error","Your cart is empty. Add some medicines"),e.abrupt("return");case 5:return d={name:o,email:s,phone:c,address:a,orderedMedicines:l,totalPrice:i},e.next=8,(0,_.f)(d);case 8:return e.next=10,new Promise((function(e){return setTimeout(e,1e3)}));case 10:t.resetForm();case 11:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),l=(0,R.TA)({initialValues:{name:"",email:"",phone:"",address:""},validationSchema:V,onSubmit:a});return(0,G.jsxs)(ce,{children:[(0,G.jsxs)(ae,{children:[(0,G.jsx)(le,{children:(0,G.jsx)(J,{formik:l})}),(0,G.jsxs)(de,{children:[(0,G.jsx)(H.N,{children:"Selected drugs"}),0===r.length?(0,G.jsx)(xe,{children:(0,G.jsxs)(fe,{children:["Here is empty at this moment. Go to the"," ",(0,G.jsx)(ve,{children:(0,G.jsx)(q.rU,{to:"/",children:"shops"})})," ","page and select the medicine."]})}):(0,G.jsx)(se,{cartItems:r,handleRemoveFromCart:function(e){var n=(0,N.Z)(r);n.splice(e,1),t(n),(0,M.t)("cartItems",n)},setCartItems:t})]})]}),(0,G.jsxs)(ue,{children:[(0,G.jsxs)(he,{children:["Total price: ",(0,G.jsxs)(me,{children:[i,"$"]})]}),(0,G.jsx)(pe,{type:"submit",disabled:l.isSubmitting,onClick:function(){l.dirty&&l.isValid||(0,ie.C)("error","Please fill in all required fields correctly")},form:"userForm",children:"Submit"})]})]})}},4643:function(e,n,r){r.d(n,{N:function(){return c},o:function(){return a}});var t,o,s=r(168),i=r(7924),c=i.ZP.h2(t||(t=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n  margin-top: 20px;\n"]))),a=i.ZP.h3(o||(o=(0,s.Z)(["\n  font-size: 18px;\n  margin: 15px 0;\n  font-weight: 600;\n  font-size: 28px;\n"])))},9285:function(e,n,r){e.exports=r.p+"static/media/stock-illustration-drugs-and-pills.a082834e21f168e479a7.jpg"}}]);
//# sourceMappingURL=944.e916c30e.chunk.js.map